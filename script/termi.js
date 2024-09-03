var obj = JSON.parse($response.body);
obj.result["pro_mode"] = true;
obj.result["until"] = "2099-09-17T14:41:12";
obj.result["valid_until"] = "2099-09-17T14:41:12";
obj.result["is_active"] = true;
obj.result["personal_subscription"] = true;
obj.result["need_to_update_subscription"] = false;

obj.result["access_objects"] = [
    {
        "period": {
          "start": "2024-09-03T14:41:12",
          "end": "2099-09-17T14:41:12"
        },
        "title": "Pro"
      }
  ];


$done({body : JSON.stringify(obj)});