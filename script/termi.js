var obj = JSON.parse($response.body);
$done({body : JSON.stringify(obj)});
obj=
    {
        "pro_mode":true, 
        "until":"2099-09-17T14:41:12",
        "valid_until":"2099-09-17T14:41:12",
        "is_active":true,
        "personal_subscription":true,
        "need_to_update_subscription":false,

        "access_objects":[
            {
                "period": {
                  "start": "2024-09-03T14:41:12",
                  "end": "2099-09-17T14:41:12"
                },
                "title": "Pro"
              }
          ],
    }
    
    
$done({
    body: JSON.stringify(obj)
  });