/**********************************************
> Application name: DeleteHeader script for squid's own use
> Script author: @ddgksf2013
> WeChat account: Moyu Notes
> Update time: 2024-02-03
> Notification channel: https://t.me/ddgksf2021
> Contribute: https://t.me/ddgksf2013_bot
> Feedback: ddgksf2013@163.com
> Special reminder: Please indicate the source if you need to reprint, thank you for your cooperation!
***********************************************/	

const version = 'V1.0.2';


function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders," X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});