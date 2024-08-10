var obj = JSON.parse($response.body);

obj=
{
	"logins": [{
		"provider": "Google",
		"url": "https://bebi.family/en/account/login/Google?appId=a6bea4da-7cc0-4df3-9b5b-b3802b53e821&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac"
	}, {
		"provider": "Apple",
		"url": "https://bebi.family/en/account/login/Apple?appId=a6bea4da-7cc0-4df3-9b5b-b3802b53e821&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac"
	}],
	"registration": "https://bebi.family/en/account/create/web?appId=a6bea4da-7cc0-4df3-9b5b-b3802b53e821&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac",
	"reset": "https://bebi.family/en/account/reset/web?appId=a6bea4da-7cc0-4df3-9b5b-b3802b53e821&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac",
	"receipt": "https://bebi.family/api/v1/app/bebi-toddlers/receipt",
	"deviceId": "1023771f-814b-41fd-aec8-3c09a771ceac",
	"update": false,
	"time": "2024-08-10T19:25:11.7184954Z",
	"country": "US",
	"config": "https://raw.githubusercontent.com/icebot411/qmx/main/config-toddler.json",
	"isFreeTrialUsed": false,
	"error": false,
	"IsFreeTrialUsed ": false
}
$done({body: JSON.stringify(obj)});

// Descriptions
