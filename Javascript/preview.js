let body = $request.body;
body['bizProductCode'] = 'BATCH_API_TO_ACC';
body['bizScene'] = 'MESSAGE_BATCH_PAY';
body['terminalType'] = 'Mobile';
$done({body});