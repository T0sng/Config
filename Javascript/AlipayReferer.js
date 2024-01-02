let headers = $request.headers;

delete headers.referer;
headers.referer = 'shenghuo.alipay.com/index.html';
$done({headers});
