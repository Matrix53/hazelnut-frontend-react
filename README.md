## 说明

重写的 BUAA 软件学院大二软工大作业前端，仅编写了部分页面，完全不参考原前端代码，原代码仓库请移步[这里](https://github.com/Withinlover/Hazelnut-Front)

## 改进

该项目对原项目前端做出了一些非框架层面的改进，主要有如下几点：

- 精简的项目依赖。事实上，原项目存在冗余依赖
- 使用 Github Action 进行自动部署
- 优化的项目结构。原项目存在组件难复用的问题，其部分原因是设计时的不合理以及需求的变化

## 网页效果

网页尚在施工中

## 项目结构

- 宏观结构

```plain
- .github             #Github Action配置
- build               #编译后的静态文件
- node_modules        #项目依赖的库
- public              #全局性的文件，如html文件
- src                 #源代码及资源
- .gitignore          #Git忽略的文件配置
- jsconfig.json       #src文件夹别名设置
- README.md           #项目说明文件
- package.json        #依赖库版本说明
- package-lock.json   #依赖库版本详细说明
```

- src 文件夹结构

```plain
- api                 #封装所有后端接口
- assets              #所有的外部资源，如图片
- components          #所有的非页面级组件
  - global            #App中的组件
  - utils             #所有可复用的组件
  - others            #views中的不可复用的组件
- views               #所有的页面级组件
- App.jsx             #根组件
- http.js             #网络请求封装
- index.jsx           #渲染App.jsx
- store.jsx           #全局状态封装
```
