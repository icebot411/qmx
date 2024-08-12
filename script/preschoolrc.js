var obj = JSON.parse($response.body);

obj=
    {
        "StoreList": ["APPLE"],
        "StoreType": "APPLE",
        "ProductId": "subscription",
        "PurchaseDate": "2024-08-12T20:24:26.000Z",
        "ExpireDate": "2062-08-29T17:44:26.000Z",
        "IsCancelled": false,
        "IsFreeTrial": false,
        "IsAutoRenewing": false,
        "NeverBeenSubscribed": false
    }




$done({
    body: JSON.stringify(obj)
  });
