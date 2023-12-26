var body = JSON.parse($response.body);
var obj = {
  "success": true,
  "resultObj": {
    "productCode": "BATCH_PAY_V2",
    "extInfos": {
      "needFollow": "false",
      "accountSafetyInsurance": "PROTECTING",
      "pollingRule": "SIGN_PAGE:1|2|3,RESULT_PAGE:1|2|3",
      "isSign": "true"
    },
    "bizScene": "FILE_BATCH_PAY",
    "showcases": [{
      "spm": "TODO",
      "code": "carousel",
      "updatePolicy": "",
      "extInfos": {},
      "width": "",
      "resources": [{
        "extInfos": {},
        "hrefUrl": "https://bizfundprod.alipay.com/payment/quota/apply.htm?bizProductCode=BATCH_PAY_V2",
        "priority": 1,
        "gmtStart": 1703558327318,
        "gmtEnd": 1703558327318,
        "imageUrl": "https://img.alicdn.com/tfs/TB1JOnSslBh1e4jSZFhXXcC9VXa-800-160.png"
      }],
      "location": "",
      "type": "",
      "height": ""
    }, {
      "spm": "TODO",
      "code": "equity",
      "updatePolicy": "",
      "extInfos": {},
      "width": "",
      "resources": [{
        "extInfos": {},
        "hrefUrl": "",
        "priority": 1,
        "title": "方便快捷",
        "content": "费用全免",
        "gmtStart": 1703558327321,
        "gmtEnd": 1703558327321
      }, {
        "extInfos": {},
        "hrefUrl": "",
        "priority": 2,
        "title": "最高3000笔",
        "content": "秒级到账",
        "gmtStart": 1703558327325,
        "gmtEnd": 1703558327325
      }, {
        "extInfos": {},
        "hrefUrl": "",
        "priority": 3,
        "title": "异常账户",
        "content": "预先校验",
        "gmtStart": 1703558327329,
        "gmtEnd": 1703558327329
      }],
      "location": "",
      "type": "",
      "height": ""
    }, {
      "extInfos": {},
      "resources": []
    }],
    "pageCode": "FABEI_PC_INDEX"
  }
};
$done({ body: JSON.stringify(obj) });
