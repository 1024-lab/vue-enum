# vue-enum

> 前端常量 枚举工具

## **一、安装及初始化方法**
1. `npm install vue-enum --save`
2. 按以下格式定义您的枚举对象
```
let constantInfo = {
    SOURCE_IN_TYPE: {
        PURCHASE_IN: {
            value: 1,
            desc: '采购入库'
        },
        REFUND_IN: {
            value: 2,
            desc: '退货入库'
        },
        CHECK_IN: {
            value: 3,
            desc: '盘点入库'
        },
        CONFIRM_IN: {
            value: 4,
            desc: '取消订单入库'
        }
    }
}

```

3. `import Enum from 'vue-enum'`
4. `Vue.use(Enum,{constantInfo})`

## **二、使用方法**

二、目前插件提供三个方法
>根据枚举值获取描述

`getDescByValue()`


>根据枚举名获取对应的描述键值对[{value:desc}]

`getValueDescList()`



>根据枚举名获取对应的value描述键值对{value:desc}

`getValueDesc()`

>可在全局使用this.$enum.getDescByValue()  和 this.$enum.getValueDescList() 调用


