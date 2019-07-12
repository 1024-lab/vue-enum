# vue-enum

> 前端常量 枚举工具

## **一、安装及初始化方法**

``` 
1. npm install vue-enum --save
2. 按以下格式定义您的枚举对象

let enumInfo = {
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
3. import Enum from 'vue-enum'
4. Vue.use(Enum,{enumInfo})

```



## **二、使用方法**

目前插件提供三个方法

可在全局使用this.$enum.getDescByValue() 、this.$enum.getValueDescList() 、getValueDesc() 调用


根据枚举值获取描述
示例：

>在表格渲染时经常遇到需要将状态转换成描述的情况,此时可以使用 

 ```
 params.row.sourceType=1
 this.$enum.getDescByValue('SOURCE_IN_TYPE', params.row.sourceType)) //采购入库
 ```


>下拉菜单经常需要使用键值对来渲染select的option [{value:desc}]

 ```
 let sourceTypeList =this.$enum.getValueDescList('SOURCE_IN_TYPE')  
 //[    
     {value: 1, desc: "采购入库"},
     {value: 2, desc: "退货入库"},
     {value: 3, desc: "盘点入库"},
     {value: 4, desc: "取消订单入库"}
    ]

    <Select>
        <Option
            v-for="(item,index) in sourceTypeList"
            :value="item.value"
            :key="index"
        >{{item.desc}}</Option>
    </Select>
  
 ```
>根据枚举名获取对应的value描述键值对{value:desc}

```
this.$enum.getValueDesc('SOURCE_IN_TYPE')
//
{
    1:"采购入库",
    2:"退货入库",
    3:"盘点入库",
    4:"取消订单入库"
}
```




