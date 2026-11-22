export function validateDonationConfig(config){
if(!config.enabled)return;
if(!config.accountOwnershipConfirmed||!config.paymentAndSettlementTested)throw Error('Donation activation requires confirmed account ownership and tested settlement.');
for(const key of ['provider','recipient','receiptTerms','approvedDonorScope','reviewedOn'])if(!config[key]?.trim())throw Error('Donation configuration missing '+key);
const target=new URL(config.checkoutUrl);if(target.protocol!=='https:'||target.username||target.password)throw Error('Donation checkout must use a verified HTTPS URL.');
}
