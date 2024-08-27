var obj = JSON.parse($request.body);

obj=
{
	"batch": [{
		"context": {
			"screen": {
				"height": 852,
				"width": 393
			},
			"timezone": "America\/Los_Angeles",
			"device": {
				"name": "iPhone",
				"type": "ios",
				"manufacturer": "Apple",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"model": "iPhone16,1"
			},
			"app": {
				"build": "3768730.272905629",
				"version": "4.58.0",
				"namespace": "com.crunchyroll.iphone",
				"name": "Crunchyroll"
			},
			"network": {
				"bluetooth": false,
				"cellular": false,
				"wifi": true
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"locale": "en-US",
			"instanceId": "014A38C5-B8C3-4BC3-9BCD-5AA098CC8E72"
		},
		"timestamp": "2024-08-27T16:02:19.587Z",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"_metadata": {
			"unbundled": ["Mixpanel", "Kameleoon", "Amazon S3", "Actions Google Analytic 4", "Mixpanel (Actions)"],
			"bundled": ["Appboy", "Singular"],
			"bundledIds": []
		},
		"type": "track",
		"event": "Application Backgrounded",
		"integrations": {},
		"messageId": "23F2B4C4-1951-492F-813F-F92C3796A109",
		"properties": {
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4"
		}
	}, {
		"properties": {
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514"
		},
		"_metadata": {
			"unbundled": ["Kameleoon", "Mixpanel (Actions)", "Mixpanel", "Amazon S3", "Actions Google Analytic 4"],
			"bundled": ["Singular", "Appboy"],
			"bundledIds": []
		},
		"event": "Application Backgrounded",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"messageId": "0D082226-3C16-499C-8710-37D6AEE8C0A2",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"timestamp": "2024-08-27T16:02:19.590Z",
		"context": {
			"screen": {
				"height": 852,
				"width": 393
			},
			"app": {
				"name": "Crunchyroll",
				"build": "3768730.272905629",
				"namespace": "com.crunchyroll.iphone",
				"version": "4.58.0"
			},
			"instanceId": "014A38C5-B8C3-4BC3-9BCD-5AA098CC8E72",
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"os": {
				"version": "17.3",
				"name": "iOS"
			},
			"locale": "en-US",
			"timezone": "America\/Los_Angeles",
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"network": {
				"bluetooth": false,
				"cellular": false,
				"wifi": true
			},
			"device": {
				"manufacturer": "Apple",
				"type": "ios",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"name": "iPhone",
				"model": "iPhone16,1",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858"
			}
		},
		"type": "track",
		"integrations": {}
	}, {
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"properties": {
			"from_background": false,
			"build": "3768730.272905629",
			"version": "4.58.0",
			"referring_application": "",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"url": "",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514"
		},
		"type": "track",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"timestamp": "2024-08-27T16:04:23.819Z",
		"_metadata": {
			"bundled": ["Singular", "Appboy"],
			"bundledIds": [],
			"unbundled": ["Kameleoon", "Amazon S3", "Actions Google Analytic 4", "Mixpanel (Actions)", "Mixpanel"]
		},
		"integrations": {},
		"event": "Application Opened",
		"messageId": "780B2CD7-A39A-4A69-B824-ED35356CFB99",
		"context": {
			"locale": "en-US",
			"timezone": "America\/Los_Angeles",
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"network": {
				"bluetooth": false,
				"wifi": false,
				"cellular": false
			},
			"app": {
				"namespace": "com.crunchyroll.iphone",
				"build": "3768730.272905629",
				"version": "4.58.0",
				"name": "Crunchyroll"
			},
			"screen": {
				"height": 852,
				"width": 393
			},
			"device": {
				"model": "iPhone16,1",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"name": "iPhone",
				"type": "ios",
				"manufacturer": "Apple"
			},
			"library": {
				"version": "1.5.11",
				"name": "analytics-swift"
			},
			"os": {
				"version": "17.3",
				"name": "iOS"
			}
		}
	}, {
		"type": "track",
		"integrations": {},
		"timestamp": "2024-08-27T16:04:24.097Z",
		"context": {
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"timezone": "America\/Los_Angeles",
			"library": {
				"version": "1.5.11",
				"name": "analytics-swift"
			},
			"device": {
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"type": "ios",
				"name": "iPhone",
				"model": "iPhone16,1",
				"manufacturer": "Apple"
			},
			"os": {
				"version": "17.3",
				"name": "iOS"
			},
			"locale": "en-US",
			"app": {
				"version": "4.58.0",
				"namespace": "com.crunchyroll.iphone",
				"build": "3768730.272905629",
				"name": "Crunchyroll"
			},
			"network": {
				"cellular": false,
				"wifi": true,
				"bluetooth": false
			},
			"screen": {
				"width": 393,
				"height": 852
			}
		},
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"properties": {
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4"
		},
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"messageId": "278D2C8E-6802-4E15-BF8C-E9698046718B",
		"event": "Application Foregrounded",
		"_metadata": {
			"bundled": ["Singular", "Appboy"],
			"unbundled": ["Actions Google Analytic 4", "Amazon S3", "Kameleoon", "Mixpanel", "Mixpanel (Actions)"],
			"bundledIds": []
		}
	}, {
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"integrations": {},
		"type": "track",
		"timestamp": "2024-08-27T16:04:24.110Z",
		"event": "Push Notification Permission Selected",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"messageId": "F4EB07EA-B30F-4E43-8B97-D9B69D9469BA",
		"properties": {
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"permissionStatus": "Deny",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514"
		},
		"context": {
			"timezone": "America\/Los_Angeles",
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"network": {
				"bluetooth": false,
				"wifi": true,
				"cellular": false
			},
			"device": {
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"name": "iPhone",
				"manufacturer": "Apple",
				"model": "iPhone16,1",
				"type": "ios"
			},
			"app": {
				"version": "4.58.0",
				"name": "Crunchyroll",
				"build": "3768730.272905629",
				"namespace": "com.crunchyroll.iphone"
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"locale": "en-US",
			"screen": {
				"height": 852,
				"width": 393
			},
			"library": {
				"version": "1.5.11",
				"name": "analytics-swift"
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65"
		},
		"_metadata": {
			"bundled": ["Singular", "Appboy"],
			"unbundled": ["Kameleoon", "Actions Google Analytic 4", "Mixpanel (Actions)", "Mixpanel", "Amazon S3"],
			"bundledIds": []
		}
	}, {
		"type": "screen",
		"integrations": {},
		"_metadata": {
			"bundledIds": [],
			"bundled": ["Appboy", "Singular"],
			"unbundled": ["Kameleoon", "Actions Google Analytic 4", "Amazon S3", "Mixpanel (Actions)", "Mixpanel"]
		},
		"name": "Splash",
		"properties": {
			"subStatus": "Premium",
			"referrer": "",
			"screenLoadTime": 0.286,
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"eventSource": "cr_ios",
			"isAuthenticated": true
		},
		"messageId": "465C6B2B-3899-4905-89C5-D10077992F02",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"timestamp": "2024-08-27T16:04:24.122Z",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"context": {
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"locale": "en-US",
			"screen": {
				"height": 852,
				"width": 393
			},
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"timezone": "America\/Los_Angeles",
			"network": {
				"wifi": true,
				"cellular": false,
				"bluetooth": false
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"device": {
				"model": "iPhone16,1",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"manufacturer": "Apple",
				"name": "iPhone",
				"type": "ios",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4"
			},
			"app": {
				"build": "3768730.272905629",
				"version": "4.58.0",
				"namespace": "com.crunchyroll.iphone",
				"name": "Crunchyroll"
			}
		}
	}, {
		"type": "identify",
		"messageId": "BD87EFDA-8F2B-42F2-93AC-01413D95E563",
		"_metadata": {
			"bundled": ["Appboy", "Singular"],
			"bundledIds": [],
			"unbundled": ["Amazon S3", "Mixpanel", "Kameleoon", "Actions Google Analytic 4", "Mixpanel (Actions)"]
		},
		"integrations": {},
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"traits": {
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"username": "",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"email": "icebot408@gmail.com",
			"subStatus": "Mega Fan",
			"pushNotificationIOS": "enabled",
			"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"syncUsingCellular": true,
			"pushNotificationOptOut": "indGeneralUpdates, indPromotionalUpdates, indContentUpdates",
			"createdAt": "2024-08-26T22:04:12.000Z"
		},
		"context": {
			"app": {
				"build": "3768730.272905629",
				"name": "Crunchyroll",
				"version": "4.58.0",
				"namespace": "com.crunchyroll.iphone"
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"locale": "en-US",
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"network": {
				"cellular": false,
				"bluetooth": false,
				"wifi": true
			},
			"screen": {
				"width": 393,
				"height": 852
			},
			"device": {
				"model": "iPhone16,1",
				"type": "ios",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"manufacturer": "Apple",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"name": "iPhone"
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"timezone": "America\/Los_Angeles"
		},
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"timestamp": "2024-08-27T16:04:24.215Z"
	}, {
		"timestamp": "2024-08-27T16:04:24.218Z",
		"integrations": {},
		"messageId": "35A12874-D82C-4770-A8D3-DB9888C02A0D",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"traits": {
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"pushNotificationIOS": "enabled",
			"syncUsingCellular": true,
			"pushNotificationOptOut": "indPromotionalUpdates, indGeneralUpdates, indContentUpdates",
			"username": "",
			"createdAt": "2024-08-26T22:04:12.000Z",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"email": "icebot408@gmail.com",
			"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"subStatus": "Mega Fan",
			"apns": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858"
		},
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"_metadata": {
			"bundled": ["Appboy", "Singular"],
			"bundledIds": [],
			"unbundled": ["Mixpanel", "Mixpanel (Actions)", "Amazon S3", "Actions Google Analytic 4", "Kameleoon"]
		},
		"type": "identify",
		"context": {
			"device": {
				"manufacturer": "Apple",
				"name": "iPhone",
				"type": "ios",
				"model": "iPhone16,1",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4"
			},
			"library": {
				"version": "1.5.11",
				"name": "analytics-swift"
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"timezone": "America\/Los_Angeles",
			"app": {
				"build": "3768730.272905629",
				"version": "4.58.0",
				"name": "Crunchyroll",
				"namespace": "com.crunchyroll.iphone"
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"network": {
				"cellular": false,
				"bluetooth": false,
				"wifi": true
			},
			"screen": {
				"width": 393,
				"height": 852
			},
			"locale": "en-US",
			"os": {
				"version": "17.3",
				"name": "iOS"
			}
		}
	}, {
		"timestamp": "2024-08-27T16:04:24.220Z",
		"type": "identify",
		"_metadata": {
			"bundled": ["Singular", "Appboy"],
			"unbundled": ["Mixpanel", "Kameleoon", "Actions Google Analytic 4", "Amazon S3", "Mixpanel (Actions)"],
			"bundledIds": []
		},
		"messageId": "03040F6C-3290-4D8E-9024-F5E6D4AD48D8",
		"traits": {
			"email": "icebot408@gmail.com",
			"pushNotificationOptOut": "indGeneralUpdates, indPromotionalUpdates, indContentUpdates",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"pushNotificationIOS": "enabled",
			"username": "",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"syncUsingCellular": true,
			"subStatus": "Mega Fan",
			"createdAt": "2024-08-26T22:04:12.000Z",
			"userId": "330bc835-7562-5031-bdf7-f4ef7c342514"
		},
		"context": {
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"network": {
				"cellular": false,
				"wifi": true,
				"bluetooth": false
			},
			"locale": "en-US",
			"timezone": "America\/Los_Angeles",
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"screen": {
				"height": 852,
				"width": 393
			},
			"app": {
				"name": "Crunchyroll",
				"build": "3768730.272905629",
				"namespace": "com.crunchyroll.iphone",
				"version": "4.58.0"
			},
			"device": {
				"type": "ios",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"model": "iPhone16,1",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"manufacturer": "Apple",
				"name": "iPhone"
			},
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65"
		},
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"integrations": {}
	}, {
		"integrations": {},
		"type": "identify",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"_metadata": {
			"bundledIds": [],
			"bundled": ["Singular", "Appboy"],
			"unbundled": ["Mixpanel", "Kameleoon", "Actions Google Analytic 4", "Amazon S3", "Mixpanel (Actions)"]
		},
		"messageId": "8352204A-B2E1-4DA3-88FC-C9E1CE16D6E5",
		"traits": {
			"email": "icebot408@gmail.com",
			"createdAt": "2024-08-26T22:04:12.000Z",
			"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"subStatus": "Mega Fan",
			"syncUsingCellular": true,
			"username": "",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"pushNotificationOptOut": "indGeneralUpdates, indPromotionalUpdates, indContentUpdates",
			"pushNotificationIOS": "enabled"
		},
		"timestamp": "2024-08-27T16:04:24.221Z",
		"context": {
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"locale": "en-US",
			"app": {
				"name": "Crunchyroll",
				"namespace": "com.crunchyroll.iphone",
				"build": "3768730.272905629",
				"version": "4.58.0"
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"device": {
				"model": "iPhone16,1",
				"type": "ios",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"name": "iPhone",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858",
				"manufacturer": "Apple"
			},
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"screen": {
				"height": 852,
				"width": 393
			},
			"network": {
				"cellular": false,
				"bluetooth": false,
				"wifi": true
			},
			"timezone": "America\/Los_Angeles"
		}
	}, {
		"timestamp": "2024-08-27T16:04:24.291Z",
		"event": "Email Verification CTA Displayed",
		"integrations": {},
		"messageId": "BD4A8C3C-9939-46EC-A097-BA6DEC31D72B",
		"properties": {
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"textOfButtonOrLink": "",
			"emailVerificationStep": "registration",
			"referrer": "",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"pageOrScreen": "Home"
		},
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"_metadata": {
			"unbundled": ["Actions Google Analytic 4", "Amazon S3", "Kameleoon", "Mixpanel (Actions)", "Mixpanel"],
			"bundledIds": [],
			"bundled": ["Appboy", "Singular"]
		},
		"type": "track",
		"context": {
			"network": {
				"cellular": false,
				"wifi": true,
				"bluetooth": false
			},
			"locale": "en-US",
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148",
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"screen": {
				"width": 393,
				"height": 852
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"device": {
				"manufacturer": "Apple",
				"model": "iPhone16,1",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"type": "ios",
				"name": "iPhone",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858"
			},
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"timezone": "America\/Los_Angeles",
			"app": {
				"name": "Crunchyroll",
				"version": "4.58.0",
				"namespace": "com.crunchyroll.iphone",
				"build": "3768730.272905629"
			}
		}
	}, {
		"context": {
			"device": {
				"model": "iPhone16,1",
				"name": "iPhone",
				"id": "29E34F50-39CD-42BD-A27B-A43D8D8C79D4",
				"manufacturer": "Apple",
				"type": "ios",
				"token": "16719028b58ceeff43374baff8fa0022e4958c6fd402490b27694342ed695858"
			},
			"os": {
				"name": "iOS",
				"version": "17.3"
			},
			"app": {
				"name": "Crunchyroll",
				"namespace": "com.crunchyroll.iphone",
				"build": "3768730.272905629",
				"version": "4.58.0"
			},
			"instanceId": "552C6600-9E45-47F4-B6AE-86653E012E65",
			"network": {
				"cellular": false,
				"bluetooth": false,
				"wifi": true
			},
			"locale": "en-US",
			"library": {
				"name": "analytics-swift",
				"version": "1.5.11"
			},
			"screen": {
				"width": 393,
				"height": 852
			},
			"timezone": "America\/Los_Angeles",
			"userAgent": "Mozilla\/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit\/605.1.15 (KHTML, like Gecko) Mobile\/15E148"
		},
		"name": "Home",
		"anonymousId": "EF3E03D7-6CB1-46BC-B588-6295DFF94B84",
		"type": "screen",
		"integrations": {},
		"_metadata": {
			"unbundled": ["Kameleoon", "Actions Google Analytic 4", "Mixpanel (Actions)", "Mixpanel", "Amazon S3"],
			"bundled": ["Appboy", "Singular"],
			"bundledIds": []
		},
		"messageId": "8EAFB976-48BE-402D-B78F-4515517EF5C8",
		"properties": {
			"ctaType": "",
			"firebaseAppInstanceId": "904ffd9ca24545739e5b59845cda1cc4",
			"isAuthenticated": true,
			"viewershipAttributionSourceScreen": "Home",
			"eventSource": "cr_ios",
			"viewershipAttributionChainId": "1EF648E0-7B4A-68B2-9B29-71F36F5A4E4C",
			"profileId": "330bc835-7562-5031-bdf7-f4ef7c342514",
			"viewershipAttributionSourceCollection": "",
			"screenLoadTime": 0.625,
			"subStatus": "Premium",
			"referrer": ""
		},
		"userId": "330bc835-7562-5031-bdf7-f4ef7c342514",
		"timestamp": "2024-08-27T16:04:24.918Z"
	}],
	"sentAt": "2024-08-27T16:04:24.921Z",
	"writeKey": "5aqR4UfqWebyLhSCF9MRwU4dNjZWaxqc"
}
$done({
    body: JSON.stringify(obj)
  });
