var obj = JSON.parse($response.body);
    obj=
    {
        "autoPaywallOnLaunch":true, 
        "limitedVersion": {
              "newUsers": {"allow":true}, //allow: "random", true, false
              "lapsedUsers": {"allow":true}, //allow: "random", true, false
              "maxDays": null, //number or null --> if null, limited version can be used forever
              "requireAccount": false,
          },
    
        "paywallStyleOptions": [2,3],
    
        "validPromoOffers": {
            //Version 3 and newer checks that a promotional offer is cheaper than the regular price. Older versions don't have this check.
            "3": {
               "maxVersion":null, //"same", <version number>, null
               "offers":["promo_annual_a"], 
            },
            "1.13.1": {
               "maxVersion":"2.9", //"same", <version number>, null
               "offers":["promo_annual_26per"],
            },
        },
    
        //skipLimitedVersion and allowLimitedVersionForDays are not used from app version 3.2 (May 2023)
        //We keep it as legacy, in order for app versions<3.2 to prevent access to the limited version
        //We can totally remove them after a few months. If a user keeps an old app version they will have access to the limited version.
        "skipLimitedVersion":true,
        //"allowLimitedVersionForDays":null, //number or null or comment out (if this is a number, set skipLimitedVersion=true. If skipLimitedVersion=false, users can use the limited version indefinitely)
    }
    
    /*
        promo_annual_50per: $23.49    --> 50.00% off on $46.99 --> 60.84% off on $59.99 --> 66.44% off on $69.99 
        promo_annual_30per: $32.99    --> 29.79% off on $46.99 --> 45.01% off on $59.99 --> 52.86% off on $69.99 
        promo_annual_26per: $34.99    --> 25.54% off on $46.99 --> 41.67% off on $59.99 --> 50.01% off on $69.99 
        promo_annual_a:     $39.99    --> 14.90% off on $46.99 --> 33.34% off on $59.99 --> 42.86% off on $69.99 
    */
$done({
    body: JSON.stringify(obj)
  });
  