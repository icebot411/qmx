//ste
//var server_data = $response.body;
//var obj = JSON.parse(server_data);
//var serverinfo = {
 // "premium": 0,
//}
//for (let key in obj.data) {
  //if (serverinfo.hasOwnProperty(key)) {
    //obj.data[key] = serverinfo[key]
  //}
//}
//server_data = JSON.stringify(obj);
//$done(server_data);

//var obj = JSON.parse($response.body);
var obj = JSON.parse($response.body);
let url = $request.url;
const cons1= "https://apivpn.timonsoftware.com/server/getListServerWireGuardV4";
//const cons2= "https://api.blinkist.com/v4/me.json";
//const cons3= "https://api.blinkist.com/v4/me/access";
if((url===cons1))
{
obj["data"]["tag"]= "green";
obj["user"]["premium"]= "0";

}

$done({body: JSON.stringify(obj)});