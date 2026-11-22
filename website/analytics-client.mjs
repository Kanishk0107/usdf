import {inject} from './vercel-analytics.mjs';
import {cleanAnalyticsEvent} from './analytics-policy.mjs';
if(!navigator.globalPrivacyControl&&navigator.doNotTrack!=='1'&&window.doNotTrack!=='1'){
inject({mode:'production',beforeSend:event=>cleanAnalyticsEvent(event,location.origin)});
}
