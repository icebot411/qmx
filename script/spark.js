var body = $response.body;
let obj = JSON.parse(body);
obj.subscriber.entitlements.premium["expires_date"] = "2029-09-08T16:49:24Z";
obj.subscriber.entitlements.premium["product_identifier"] = "spark_desktop_c_5999_1y_d50";
obj.subscriber.entitlements["product_identifier"] = "spark_desktop_openai_tokens_4xt";



$done({body:JSON.stringify(obj)});
