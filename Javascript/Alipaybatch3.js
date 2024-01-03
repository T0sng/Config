let $request;
// noinspection JSUnusedAssignment
let headers = $request.headers;
headers['user-agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21B101 ChannelId(102) Ariver/1.1.0 AliApp(AP/10.5.56.6000) Nebula WK RVKType(1) AlipayDefined(nt:WIFI,ws:430|868|3.0) AlipayClient/10.5.56.6000 Language/en Region/CN NebulaX/1.0.0';
delete headers['sec-ch-ua-platform'];
delete headers['sec-ch-ua'];
delete headers['sec-ch-ua-mobile'];
$done({headers});
