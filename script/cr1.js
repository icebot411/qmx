var obj = JSON.parse($response.body);
//
obj=
{
	"__class__": "collection",
	"__href__": "/subscriptions/1194599397/products",
	"__links__": null,
	"__actions__": null,
	"total": 1,
	"items": [{
		"__class__": "subscription_product",
		"__href__": "/subscriptions/1194599397/third_party_products/cr.ios.fanpack.monthly",
		"__links__": null,
		"__actions__": null,
		"amount": "",
		"tax_included": false,
		"currency_code": "",
		"is_cancelled": false,
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
		"active_free_trial": true
	}]
}
$done({
    body: JSON.stringify(obj)
  });
