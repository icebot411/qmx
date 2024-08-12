var obj = JSON.parse($response.body);

obj=
{
	"StoreList": [],
	"StoreType": null,
	"ProductId": null,
	"PurchaseDate": "2019-10-27T16:27:38.000Z",
	"ExpireDate": "2099-10-27T16:27:38.000Z",
	"IsCancelled": false,
	"IsFreeTrial": false,
	"IsAutoRenewing": false,
	"NeverBeenSubscribed": false
}



$done({
    body: JSON.stringify(obj)
  });
  