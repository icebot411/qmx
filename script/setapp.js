let obj=JSON.parse($response.body);
obj =
{
  "data" : {

    "relationships" : {
      "customer" : {
        "data" : {
          "id" : 3769621,
          "type" : "customer",
          "attributes" : {
            "payment_info_available" : false,
            "cc_required_flow_test" : false,
            "subscription_expiration" : "2062-08-29T17:44:26.000Z",
            "newsletter_subscribed" : false,
            "grace_period_expiration" : "30",
            "next_payment_date" : "2062-08-29T17:44:26.000Z",
            "subscription_canceled" : false,
            "should_reset_password" : false,
            "start_notification_date" : null,
            "subscription_start_date" : "2023-08-29T17:44:26.000Z",
            "payment_info_required" : false,
            "status" : "active",
            "satu" : "680e400a-7cc8-4f5f-ba7f-a7a6d43ba829"
          }
        }
      }
    }
  }
}








    $done({
        body: JSON.stringify(obj)
      });
