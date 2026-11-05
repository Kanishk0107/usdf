import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import fs from "node:fs";
fs.mkdirSync("test-results", { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const report = [];
for (const width of [1440, 768, 390, 320]) {
  await page.setViewportSize({ width, height: 1000 });
  const response = await page.goto("http://127.0.0.1:3000");
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() =>
    Promise.all(document.getAnimations().map((a) => a.finished)),
  );
  assert.equal(response.status(), 200);
  assert.equal(response.headers()["x-frame-options"], "DENY");
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator(".pillar").count(), 6);
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  report.push({
    width,
    violations: results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  });
  if (width === 390) {
    const menu = page.locator(".menu-toggle");
    await menu.click();
    assert.equal(await menu.getAttribute("aria-expanded"), "true");
    await page.keyboard.press("Escape");
    assert.equal(await menu.getAttribute("aria-expanded"), "false");
    await menu.click();
    await page
      .locator("#primary-nav")
      .getByRole("link", { name: "About" })
      .click();
    assert.equal(await menu.getAttribute("aria-expanded"), "false");
    await page.goto("http://127.0.0.1:3000");
  }
  if (width === 1440 || width === 390)
    await page.screenshot({
      path: `test-results/usdf-${width}.png`,
      fullPage: true,
    });
}
const donation = page.locator('a[href="https://buymeacoffee.com/usdf"]');
assert.equal(await donation.count(), 1);
assert.equal(await donation.getAttribute("rel"), "noopener noreferrer");
for (const route of ["robots.txt", "sitemap.xml"])
  assert.equal(
    (await page.request.get("http://127.0.0.1:3000/" + route)).status(),
    200,
  );
await page.emulateMedia({ reducedMotion: "reduce" });
assert.equal(
  await page
    .locator(".hero-copy")
    .evaluate((el) => getComputedStyle(el).animationName),
  "none",
);
assert.equal(errors.length, 0);
console.log(JSON.stringify({ report, errors }, null, 2));
await browser.close();
assert(report.every((r) => r.violations.length === 0));

