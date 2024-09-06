
var obj = JSON.parse($response.body);
let url = $request.url;
const cons1= "https://api.revenuecat.com/v1/subscribers/o0x1rYwUKUFah7Q";
//const cons2= "https://api.blinkist.com/v4/me.json";
//const cons3= "https://api.blinkist.com/v4/me/access";
if((url===cons1))
{
obj["subscriber"]["subscriptions"]["prod_Lbx6dk453gMvkB"] = {
    "period_type": "normal",
    "expires_date": "2229-09-08T16:49:24Z",
  };

obj["subscriber"]["entitlements"]["free-sws"]= {
    "expires_date": "2229-07-15T15:03:33Z",
  };
obj["subscriber"]["entitlements"]["premium"]= {
    "expires_date": "2229-07-15T15:03:33Z",
  };
  obj["subscriber"]["entitlements"]= {
    "product_identifier": "spark_desktop_openai_tokens_4xt",
  };

}

$done({body: JSON.stringify(obj)});