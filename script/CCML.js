var obj = JSON.parse($response.body);

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