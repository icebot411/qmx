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
obj=
{
  obj["data"]["tag"]="green";
};

$done({body: JSON.stringify(obj)});
