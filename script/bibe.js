var obj = JSON.parse($response.body);

obj=
{
	"logins": [{
		"provider": "Google",
		"url": "https://bebi.family/en/account/login/Google?appId=505d96cf-676d-49bc-959f-d947f542580d&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac"
	}, {
		"provider": "Apple",
		"url": "https://bebi.family/en/account/login/Apple?appId=505d96cf-676d-49bc-959f-d947f542580d&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac"
	}],
	"registration": "https://bebi.family/en/account/create/web?appId=505d96cf-676d-49bc-959f-d947f542580d&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac",
	"reset": "https://bebi.family/en/account/reset/web?appId=505d96cf-676d-49bc-959f-d947f542580d&store=20&dev=1023771f-814b-41fd-aec8-3c09a771ceac",
	"ads": "https://bebi.family/api/v1/app/baby-games-1/ads?id=24fa706a-9c19-4841-9709-6e1a7152aa22&v=59",
	"receipt": "https://bebi.family/api/v1/app/baby-games-1/receipt",
	"installId": "1e8d81dd-be5b-49e3-833f-6b350507d63f",
	"deviceId": "1023771f-814b-41fd-aec8-3c09a771ceac",
	"sessionId": "007abc40-800f-41c5-b416-36e1bdb3b421",
	"update": false,
	"time": "2024-08-10T18:33:57.2981400Z",
	"country": "US",
	"config": "https://raw.githubusercontent.com/icebot411/qmx/main/config.json",
	"isFreeTrialUsed": true,
	"variables": [{
		"id": "08876dff-2290-49fe-93f4-cc2412e787dc",
		"key": "locked_pop",
		"value": "{\"TestVariant\":0}",
		"isActive": true
	}, {
		"id": "29967540-b3db-4eae-8112-e47ab88b1a71",
		"key": "main_slider",
		"value": "{\"isEnabled\":true}",
		"isActive": true
	}, {
		"id": "ece7e259-e5cd-4186-8c94-ef85fb15b83c",
		"key": "minigame_ab_test",
		"value": "{\"ReskinTest\":\"Default\"}",
		"isActive": true
	}, {
		"id": "2ad53cbf-db38-48e9-bf16-11a2ac2eca73",
		"key": "onboarding_v1",
		"value": "{\"PersonalizationPopupEnabled\":true,\"ForcePopupForSubscribers\":false,\"ForcePopupForNonSubscribers\":false,\"ForcePopupForAuthenticatedUsers\":false}",
		"isActive": true
	}, {
		"id": "63f5a620-29fc-4699-af06-ac94aa0dbc32",
		"key": "rate_config",
		"value": "{\"_enableGiftSystem\":true,\"_enableRateSystem\":true,\"_goodReviewThreshold\":3,\"_showGiftButtonAfterDays\":30,\"_uniqueGameSessionCountThreshold\":6,\"_daysPlayedThreshold\":7,\"_giftDropChancePercent\":30,\"_offerGiftAttempts\":2,\"_amountOfGiftedDays\":3,\"_resetGiftLogicAfterDays\":30,\"_resetAutoRatePopupLogicAfterDays\":15,\"_showNativePopupAfterXGames\":2,\"_askForRateThreshold\":3}",
		"isActive": true
	}, {
		"id": "4f6ece13-9a99-4204-9400-947e0e937f02",
		"key": "slider_config_v4",
		"value": "{\"VariantType\":\"Local\"}",
		"isActive": true
	}, {
		"id": "799d177d-2449-49e2-b92a-8b20ea68cd6a",
		"key": "smartlook",
		"value": "{\"IsOn\":false,\"Enabled\":false,\"ApiKey\":\"\"}",
		"isActive": true
	}, {
		"id": "e93c2c3e-2888-4186-86b6-f9d122eb665d",
		"key": "sub_config",
		"value": "{\"_popupVersion\":\"default\"}",
		"isActive": true
	}, {
		"id": "3ab2413a-bae1-468d-b379-51df264afcf1",
		"key": "subscription",
		"value": "{\"month\":\"mg1.kids.learning.games.mnth\",\"year\":\"mg1.kids.learning.games.yrl\"}",
		"isActive": true
	}],

};

$done({body: JSON.stringify(obj)});

// Descriptions
