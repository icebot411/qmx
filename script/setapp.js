let obj=JSON.parse($response.body);
let url = $request.url;
const cons1= "https://customer.setapp.com/v5/token/.*";
const cons2= "https://api.changeme.com/v4/me.json";
const cons3= "https://api.blinkist.com/v4/me/access";
if((url===cons1))
{
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["subscription_expiration"]="2062-08-29T17:44:26.000Z";
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["status"]="active";
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["start_notification_date"]="2062-08-29T17:44:26.000Z";
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["grace_period_expiration"]="30";
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["next_payment_date"]="2069-08-29T17:44:26.000Z";
    obj["data"]["relationships"]["customer"]["data"]["attributes"]["subscription_start_date"]="2023-08-29T17:44:26.000Z";
    }
    $done({
        body: JSON.stringify(obj)
      });
