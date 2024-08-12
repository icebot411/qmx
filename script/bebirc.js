var obj = JSON.parse($response.body);
obj={
    "error": false,
	"purchases": [{
		"productTypeId": 10,
		"productId": "mg1.kids.learning.games.mnth",
		"id": "acac705d-15da-4b2a-b241-b650f7929338",
		"storeId": 20,
		"partnerId": "260001887014616",
		"startTime": "2024-08-10T18:28:08",
		"expiryTime": "2099-08-17T18:28:08"
	}]
}

    $done({
        body: JSON.stringify(obj)
      });
      