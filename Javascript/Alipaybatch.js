var body = JSON.parse($response.body);
var obj = {
    "success": true,
    "resultObj": {
        "maxMonthTransferCount": "1000000000000",
        "maxMonthTransferAmount": "80000000000000.00",
        "minSingleTransferAmount": "1",
        "taobaoMaxSingleTransferAmount": "5000000000.00",
        "alipayTradeNoMaxSingleTransferAmount": "5000000000.00",
        "maxDayTransferAmount": "3000000000000.00",
        "maxSingleTransferAmount": "100000000000.00",
        "maxTransferCount": "30000000",
        "subBizSceneDTOs": [
            {
                "subBizSceneDesc": "妈的，跟美国，俄国，意大利，英国，德国，法国，蒙古，智利，巴西，韩国，朝鲜，日本，菲律宾，印尼，印度，巴基斯坦，泰国，加拿大，墨西哥，南非拼了!",
                "subBizScene": "OTHER"
            },
            {
                "subBizSceneDesc": "和日本拼了",
                "subBizScene": "COMMISSION"
            },
            {
                "subBizSceneDesc": "和大英帝国拼了",
                "subBizScene": "REFUND"
            },
            {
                "subBizSceneDesc": "和以色列拼了",
                "subBizScene": "EXPENSE"
            },
            {
                "subBizSceneDesc": "和泰国拼了",
                "subBizScene": "FREIGHT"
            },
            {
                "subBizScene": "OTHER",
                "subBizSceneDesc": "和澳大利亚拼了"
            }
        ]
    }
};
$done({ body: JSON.stringify(obj) });
