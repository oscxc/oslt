![](logo.png)

#  2d平移动画模块第一种设计（基于运行时长）

**实现原因**:

  &emsp;元素平移动画应用场景太多

**优点**:

  &emsp;1、易用、轻量

  &emsp;2、可以运行、暂停、重置

  &emsp;3、面向对象，支持多实例

  &emsp;4、完美设计

**缺点**:

  &emsp;不存在的，因为它是完美的

## 获取和引用 oslt

**简单粗暴方式（必须首先提供的方式）**

  [`下载最新版本`](https://github.com/oscxc/oslt/releases) && 使用标签引用

```
<script src="oslt.js"></script>
```

**npm + CommonJS 方式**

```
npm install oslt
```

```
var oslt = require('oslt');
```

## Usage examples

```
var lt = new oslt(element,[100,100],[400,500],1000,function () {
    console.log('end');
});

lt.run();
//lt.pause();
//lt.reset();
```

## 查看演示
[`demo`](https://oscxc.github.io/oslt)


## 联系我们

如有问题，欢迎加入下面QQ群

![](https://oscxc.github.io/Images/doc/contact.jpg)
