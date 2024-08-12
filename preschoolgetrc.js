var obj = JSON.parse($response.body);

obj=


{
	"quantity": "1",
	"product_id": "subscription",
	"transaction_id": "260001889999761",
	"original_transaction_id": "260001889999761",
	"purchase_date": "2024-08-12 20:24:26 Etc/GMT",
	"purchase_date_ms": "1723494266000",
	"purchase_date_pst": "2024-08-12 13:24:26 America/Los_Angeles",
	"original_purchase_date": "2024-08-12 20:24:27 Etc/GMT",
	"original_purchase_date_ms": "1723494267000",
	"original_purchase_date_pst": "2024-08-12 13:24:27 America/Los_Angeles",
	"expires_date": "2062-08-29 17:44:26 Etc/GMT",
	"expires_date_ms": "2924099066000",
	"expires_date_pst": "2062-08-29 17:44:26 America/Los_Angeles",
	"web_order_line_item_id": "260000860739863",
	"is_trial_period": "false",
	"is_in_intro_offer_period": "false",
	"in_app_ownership_type": "PURCHASED",
	"subscription_group_identifier": "20367336"
}


$done({
    body: JSON.stringify(obj)
  });
  