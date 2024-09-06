const list = "Spark%20Desktop%20Helper";
var jsonBody = JSON.parse($response.body);
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

//Mod Header
if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;}
//check header
for (const i in list) {
            if (new RegExp(`^${i}`, `i`).test(ua)) { 
                jsonBody["subscriber"]["subscriptions"]["prod_Lbx6dk453gMvkB"] = {
                    "period_type": "normal",
                    "store_transaction_id": "si_QlobpfsaXTdAFL",
                    "original_purchase_date": "2024-09-01T16:49:24Z",
                    "purchase_date": "2024-09-01T16:49:24Z",
                    "grace_period_expires_date": null,
                    "refunded_at": null,
                    "expires_date": "2229-09-08T16:49:24Z",
                    "is_sandbox": false,
                    "billing_issues_detected_at": null,
                    "unsubscribe_detected_at": "2024-09-01T16:49:24Z",
                    "store": "stripe",
                    "auto_resume_date": null
                  };
              
                     jsonBody["subscriber"]["entitlements"]["free-sws"] = {
                    "expires_date": "2229-07-15T15:03:33Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "rc_promo_free-sws_lifetime",
                    "purchase_date": "2024-09-01T15:03:33Z"
                  };
                jsonBody["subscriber"]["entitlements"]["premium"] = {
                    "expires_date": "2229-07-15T15:03:33Z",
                    "grace_period_expires_date": null,
                    "product_identifier": "prod_Lbx6dk453gMvkB",
                    "purchase_date": "2024-09-01T15:03:33Z"
                  };
              jsonBody["subscriber"]["entitlements"] = {
            
                    "product_identifier": "spark_desktop_openai_tokens_4xt",
            
                  };
            
        
                break;
            }}
          
            $done({body: JSON.stringify(jsonBody)});