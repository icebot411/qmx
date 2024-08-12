var obj = JSON.parse($response.body);

obj=
    {
        "StoreList": ["APPLE"],
        "StoreType": "APPLE",
        "ProductId": "subscription",
        "PurchaseDate": "2024-08-12T20:24:26.000Z",
        "ExpireDate": "2099-08-19T20:24:26.000Z",
        "IsCancelled": false,
        "IsFreeTrial": true,
        "IsAutoRenewing": false,
        "NeverBeenSubscribed": false
    }




$done({
    body: JSON.stringify(obj)
  });
  