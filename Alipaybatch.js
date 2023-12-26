var body = JSON.parse($response.body);
var obj = {
    "success": true,
    "resultObj": {
        "maxMonthTransferCount": "10000000",
        "maxMonthTransferAmount": "800000000.00",
        "minSingleTransferAmount": "1",
        "taobaoMaxSingleTransferAmount": "500000.00",
        "alipayTradeNoMaxSingleTransferAmount": "500000.00",
        "maxDayTransferAmount": "300000000.00",
        "maxSingleTransferAmount": "10000000.00",
        "maxTransferCount": "3000000",
        "subBizSceneDTOs": [
            {
                "subBizSceneDesc": "和美团拼了",
                "subBizScene": "PAYMENTGOODS"
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