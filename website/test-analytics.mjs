import assert from 'node:assert/strict';import {cleanAnalyticsEvent} from './analytics-policy.mjs';
assert.deepEqual(cleanAnalyticsEvent({type:'pageview',url:'https://example.org/en/?email=private#message'},'https://example.org'),{type:'pageview',url:'https://example.org/en/'});
assert.equal(cleanAnalyticsEvent({type:'event',url:'https://example.org',data:{message:'private'}},'https://example.org'),null);
assert.equal(cleanAnalyticsEvent({type:'pageview',url:'https://wa.me/918273056607?text=private'},'https://example.org'),null);
console.log('PASS analytics: query/fragment removal, custom-event exclusion and outbound URL rejection.');
