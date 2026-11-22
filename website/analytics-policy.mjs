export function cleanAnalyticsEvent(event,origin){
if(event.type!=='pageview')return null;
try{const u=new URL(event.url,origin);if(u.origin!==origin)return null;u.search='';u.hash='';return {type:'pageview',url:u.href}}catch{return null}
}
