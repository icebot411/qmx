
var obj = JSON.parse($response.body);
let url = $request.url;
const cons1= "https://api.revenuecat.com/v1/subscribers/o0x1rYwUKUFah7Q";
//const cons2= "https://api.blinkist.com/v4/me.json";
//const cons3= "https://api.blinkist.com/v4/me/access";
if((url===cons1))
  obj["subscriber"]["entitlements"]["free-sws"]= {
    "expires_date": "2229-07-15T15:03:33Z",
    "grace_period_expires_date": null,
    "product_identifier": "rc_promo_free-sws_lifetime",
    "purchase_date": "2024-09-01T15:03:33Z"
  };
obj["subscriber"]["entitlements"]["premium"]= {
    "expires_date": "2229-07-15T15:03:33Z",
    "grace_period_expires_date": null,
    "product_identifier": "prod_Lbx6dk453gMvkB",
    "purchase_date": "2024-09-01T15:03:33Z",
  };
  obj["subscriber"]["entitlements"]= {
    "product_identifier": "spark_desktop_openai_tokens_4xt",
  };

{
obj["subscriber"]["subscriptions"]["prod_Lbx6dk453gMvkB"] = {
    "period_type": "normal",
    "grace_period_expires_date": null,
    "is_sandbox": false,
    "expires_date": "2229-09-08T16:49:24Z",
    "store_transaction_id": "si_QlobpfsaXTdAFL",
    "purchase_date": "2024-09-01T16:49:24Z",
    "store": "stripe",
    "original_purchase_date": "2024-09-01T16:49:24Z",
    "unsubscribe_detected_at": "2024-09-01T16:49:24Z",
    "billing_issues_detected_at": null,
    "refunded_at": null,
    "auto_resume_date": null,
  };

}

$done({body: JSON.stringify(obj)});