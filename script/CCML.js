const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
var obj = JSON.parse($response.body);
}
obj={
	
	
	"subscriber": {
		"entitlements": {
			"rc_monthly": {
				"expires_date": "2099-12-31T12:00:00Z",
				"original_purchase_date": "2023-09-01T11:00:00Z",
				"purchase_date": "2023-09-01T11:00:00Z",
				"ownership_type": "PURCHASED",
				"store": "app_store",
				"product_identifier": "ccml_ios_monthly_v1"
			}
		},
		
		"management_url": null,
		"non_subscriptions": {},
		"original_app_user_id": "e7a35e23-d6b7-48a2-ad98-d2f1e1421bb6.3315",
		
	
		"other_purchases": {},
		"subscriptions": {
			"ccml_ios_monthly_v1": {
				"expires_date": "2099-12-31T12:00:00Z",
				"original_purchase_date": "2023-09-01T11:00:00Z",
				"purchase_date": "2023-09-01T11:00:00Z",
				"ownership_type": "PURCHASED",
				"store": "app_store"
			}
		}
	}
}


$done({
    body: JSON.stringify(obj)
  });