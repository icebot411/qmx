/*******************************

脚本功能：Day One 日记＋笔记——解锁订阅
下载地址：https://is.gd/mt4BxG
软件版本：7.18.2
脚本作者：彭于晏💞
更新时间：2022-10-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://dayone.app/api/v2/users/(receipt|account-status) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dayone.js
https://api.lingokids.com/v1/users/( identities|receipts|renovate_session) url script-response-body 
[mitm] 

hostname = lingokids.com
https://api.lingokids.com/v1/users/identities
*******************************/

const path1 = "/identities";
const path2 = "/receipts";
const path3 = "/renovate_session";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
    "status": "ok",
    "info": {
      "id": 73049402,
      "email": "cn7nvwr4fb@privaterelay.appleid.com",
      "country": "us",
      "customer": true,
      "created_at": "2024-08-13T20:49:29.604Z",
      "subscriptions": [
        {
          "id": 6082326,
          "status": "trial",
          "state": "active_trial",
          "in_grace_period": false,
          "product": "unlimited",
          "platform": "apple",
          "starts_at": 1723582186,
          "ends_at": 2724186985,
          "plan_id": "lk.ios.s1m.t7d.p16.v2",
          "duration_unit": "months",
          "duration_value": 1,
          "auto_renew_status": true
        }
      ],
      "display_nps": false,
      "children": [
        {
          "id": 73528946,
          "name": "Your child",
          "age": 2,
          "avatar": "elliot",
          "birthday": 1659312000,
          "deleted": false,
          "progress": {},
          "welcome_unit_completed_at": null,
          "curriculum_unlocked": false,
          "missing_attributes": []
        }
      ],
      "profile": {
        "first_name": null,
        "relation_to_children": null,
        "avatar": {}
      },
      "coupons": []
    },
    "auth": {
      "token": "50d009de-bc26-4233-89a8-d6413b96932e"
    }
  }
}
if ($request.url.indexOf(path2) != -1){
obj={
    "status" : "ok",
    "message" : "subscription successfully created",
    "info" : {
      "country" : "us",
      "id" : 73049402,
      "created_at" : "2024-08-13T20:49:29.604Z",
      "subscriptions" : [
        {
          "id" : 6082326,
          "state" : "active_trial",
          "plan_id" : "lk.ios.s1m.t7d.p16.v2",
          "duration_value" : 1,
          "product" : "unlimited",
          "auto_renew_status" : true,
          "duration_unit" : "months",
          "platform" : "apple",
          "in_grace_period" : false,
          "ends_at" : 2724186985,
          "status" : "trial",
          "starts_at" : 1723582186
        }
      ],
      "children" : [
        {
          "avatar" : "elliot",
          "deleted" : false,
          "id" : 73528946,
          "age" : 2,
          "welcome_unit_completed_at" : null,
          "birthday" : 1659312000,
          "missing_attributes" : [
  
          ],
          "progress" : {
  
          },
          "name" : "Your child",
          "curriculum_unlocked" : false
        }
      ],
      "email" : null,
      "display_nps" : false,
      "coupons" : [
  
      ],
      "customer" : true,
      "profile" : {
        "relation_to_children" : null,
        "first_name" : null,
        "avatar" : {
  
        }
      }
    },
    "receipt" : {
      "status" : "trial",
      "order_id" : "260001891417441",
      "expiration_at" : "2056-04-28T22:36:25.000Z",
      "id" : 6082326,
      "created_at" : "2024-08-13T20:49:49.516Z",
      "original_subscription_at" : "2024-08-13T20:49:46.000Z",
      "origin" : "user_purchase",
      "plan" : {
        "id" : 60626,
        "currency" : "USD",
        "price_cents" : 1599,
        "country" : "US",
        "marketplace" : "apple",
        "marketplace_product_id" : "lk.ios.s1m.t7d.p16.v2"
      },
      "auto_renew_status" : true,
      "state" : "active_trial"
    }
  }
  
}
if ($request.url.indexOf(path3) != -1){
    obj=
    {
        "status" : "ok",
        "info" : {
          "country" : "us",
          "id" : 73049402,
          "created_at" : "2024-08-13T20:49:29.604Z",
          "subscriptions" : [
            {
              "id" : 6082326,
              "state" : "active_trial",
              "plan_id" : "lk.ios.s1m.t7d.p16.v2",
              "duration_value" : 1,
              "product" : "unlimited",
              "auto_renew_status" : true,
              "duration_unit" : "months",
              "platform" : "apple",
              "in_grace_period" : false,
              "ends_at" : 1724186985,
              "status" : "trial",
              "starts_at" : 2724186985
            }
          ],
          "children" : [
            {
              "avatar" : "elliot",
              "deleted" : false,
              "id" : 73528946,
              "age" : 2,
              "welcome_unit_completed_at" : null,
              "birthday" : 1659312000,
              "missing_attributes" : [
      
              ],
              "progress" : {
      
              },
              "name" : "Your child",
              "curriculum_unlocked" : false
            }
          ],
          "email" : null,
          "display_nps" : false,
          "coupons" : [
      
          ],
          "customer" : true,
          "profile" : {
            "relation_to_children" : null,
            "first_name" : null,
            "avatar" : {
      
            }
          }
        },
        "auth" : {
          "token" : "50d009de-bc26-4233-89a8-d6413b96932e"
        }
      }
    }

$done({body: JSON.stringify(obj)});
