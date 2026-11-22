import assert from 'node:assert/strict';import {validateDonationConfig} from './donations.mjs';
assert.doesNotThrow(()=>validateDonationConfig({enabled:false}));
assert.throws(()=>validateDonationConfig({enabled:true}),/ownership/);
const valid={enabled:true,accountOwnershipConfirmed:true,paymentAndSettlementTested:true,provider:'Example',recipient:'USDF',receiptTerms:'Owner reviewed',approvedDonorScope:'Owner reviewed',reviewedOn:'2026-11-23',checkoutUrl:'https://example.org/checkout'};
assert.doesNotThrow(()=>validateDonationConfig(valid));assert.throws(()=>validateDonationConfig({...valid,checkoutUrl:'javascript:alert(1)'}));assert.throws(()=>validateDonationConfig({...valid,checkoutUrl:'https://secret@example.org/'}));assert.throws(()=>validateDonationConfig({...valid,receiptTerms:''}),/receiptTerms/);
console.log('PASS donation configuration: disabled default, ownership/settlement gate, required terms, HTTPS and credential safety.');
