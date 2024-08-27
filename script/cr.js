var obj = JSON.parse($response.body);

obj=
{
	"__class__": "collection",
	"__href__": "/subscriptions/1194599397/third_party_products",
	"__links__": null,
	"__actions__": null,
	"total": 1,
	"items": [{
		"__class__": "third_party_subscription_product",
		"__href__": "/subscriptions/1194599397/third_party_products/cr.ios.fanpack.monthly",
		"__links__": null,
		"__actions__": null,
		"effective_date": "2024-08-26T22:04:27Z",
		"source": "itunes",
		"source_ref": "260001910164541",
		"product": {
			"__class__": "product",
			"__href__": "/products/cr.ios.fanpack.monthly",
			"__links__": null,
			"__actions__": null,
			"sku": "cr.ios.fanpack.monthly",
			"type": "bundle",
			"name": "cr_fanpack",
			"description": "",
			"free_trial_duration": "P7Y",
			"cycle_duration": "P1Y",
			"is_subscribable": false,
			"source": "itunes"
		},
		"active_free_trial": true,
		"in_grace": false,
		"on_hold": false,
		"auto_renew": false,
		"expiration_date": "2029-09-02T22:04:23Z",
		"expiration_reason": ""
	}]
}
$done({
    body: JSON.stringify(obj)
  });
