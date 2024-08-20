var obj = JSON.parse($response.body);
obj={
    "data" : {
      "device" : {
        "end_up_at" : null,
        "status" : "activated",
        "language" : "en_US",
        "member_id" : "1572178404000",
        "app_version" : "4.1.1",
        "os" : "11.6.1",
        "allow_unbind" : true,
        "cdkey" : null,
        "trial_times" : 0,
        "platform" : 0,
        "activated_date" : "1642904549",
        "company_id" : null,
        "is_vpp" : true,
        "email" : null,
        "model" : "MacPro7,1",
        "time_zone" : "PDT",
        "canceled_date" : null,
        "unique_sn" : "A6ECA90B-C5CF-5A8F-96FF-391D3035B3C9",
        "trial_again" : false,
        "created_at" : 1642904549,
        "contact_name" : null,
        "product_code" : "com.brother.pdfreaderpro.windows.product_3+com.brother.pdfreaderpro.mac.product_3",
        "app" : {
          "name" : "PDF Reader Pro",
          "latest_version" : {
            "app_id" : 1,
            "build_no" : 220,
            "release_date" : "2018-05-21 00:00:00",
            "id" : 1,
            "detail_zh" : "",
            "download_link" : "",
            "detail_tw" : "",
            "created_at" : "2018-05-17 07:32:56.480426",
            "detail_page" : "",
            "detail_en" : "",
            "version_no" : "2.2.0"
          },
          "code" : "com.brother.pdfreaderpro.ai"
        },
        "unbind_time" : 0
      },
      "subscription" : {
        "status" : "activated",
        "end_date" : 2642904549,
        "start_date" : 1642904549
      }
    }
  }
  
    $done({
        body: JSON.stringify(obj)
      });
      