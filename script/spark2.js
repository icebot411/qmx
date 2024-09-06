
var obj = JSON.parse($response.body);
let url = $request.url;
//const cons1= "Spark%20Desktop%20Helper";
//const cons2= 
//const cons3= 
var UA = $request.headers['user-agent'];
const UAMappings = {
  'Spark%20Desktop%20Helper':{ name: 'premium', id: null},
};
for (const i in UAMappings) {
  if (new RegExp(`^${i}`, 'i').test(UA)) {
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
  break;
  }
}



$done({body: JSON.stringify(obj)});