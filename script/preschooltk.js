var obj = JSON.parse($response.body);
    obj=
{
	"user": {
		"email": "2jbkrwxptg@privaterelay.appleid.com",
		"locale": "en"
	},
	"kids": [{
		"id": "66ba6f96433e2000020398ac",
		"firstName": "Kid",
		
	}]
}
$done({
    body: JSON.stringify(obj)
  });
  