var obj = JSON.parse($response.body);

obj={
	"status": "ok",
	"info": {
		"id": 73049402,
		"email": "cn7nvwr4fb@privaterelay.appleid.com",
		"country": "us",
		"customer": true,
		"created_at": "2024-08-13T20:49:29.604Z",
		"subscriptions": [{
			"id": 6082326,
			"status": "0",
			"state": "active",
			"in_grace_period": false,
			"product": "unlimited",
			"platform": "apple",
			"starts_at": 1723582186,
			"ends_at": 2724186985,
			"plan_id": "lk.ios.s1m.t7d.p16.v2",
			"duration_unit": "months",
			"duration_value": 1,
			"auto_renew_status": false
		}],
		"display_nps": false,
		"children": [{
			"id": 73528946,
			"name": "Mathew",
			"age": 2,
			"avatar": "elliot",
			"birthday": 1659312000,
			"deleted": false,
			"progress": {},
			"welcome_unit_completed_at": null,
			"curriculum_unlocked": false,
			"missing_attributes": []
		}],
		"profile": {
			"first_name": null,
			"relation_to_children": null,
			"avatar": {}
		},
		"coupons": []
	},
	"auth": {
		"token": "50d009de-bc26-4233-89a8-d6413b96932e"
	}
}


$done({
    body: JSON.stringify(obj)
  });