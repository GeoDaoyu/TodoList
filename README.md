# TodoList

## 目的

通过不同的状态管理方式来写一系列 TodoList，来对比理解。

## 需求分析

一个列表，能对待办进行增删改查。

仅对个人的待办列表，无权限控制。

查询所有的待办，不做分页和过滤。

## 前端预处理

### 使用 umi 搭建基础框架

使用`ant-design-pro`做基础框架的原因。

1. 笔者喜欢。
2. 内置 antd，处理样式。
3. 内置 mock，处理模拟数据。
4. 内置 route，处理路由。
5. 等等...

### 安装依赖

```sh
yarn add rxjs ramda jquery redux-toolkit observable-hooks
```

### 使用 TailwindCSS

当前 umi 使用的 PostCSS7，安装兼容 PostCSS7 版本的 TailwindCSS 即可

```sh
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat
```

在根目录新建`tailwind.config.js`配置文件,`preflight: false`是为了解决与`antd`的样式冲突。

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
```

修改 umi 配置`config/config.ts`，增加配置项

```js
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],
```

在`app.tsx`全局引入样式

```js
import 'tailwindcss/tailwind.css';
```

最好再装上 VSCode 的插件：Tailwind CSS IntelliSense

### 分配路由

大概分了几个想对比的库，作为菜单名称和路由地址。

在 welcome 页和`config/routes.ts`里面配置上了。

缩略图使用的是各个官网上的 favicon.ico。

去掉了登录页面。

## 模拟后台接口

后台接口使用 RESTful 风格。

原因：笔者对接的后台，几乎全是 REST，所有不使用 GraphQL。

### Swagger

在[swagger 在线编辑器](https://editor.swagger.io/)上编辑一份 openapi。

然后导出为 openapi.json，拷贝到 config 下。

### Mock

在 mock 下新建`todoList.ts`文件，实现简单的增删改查。暴露出 4 个接口。

## Ramda

### 介绍

React 是用于构建用户界面的 JavaScript 库。

https://react.docschina.org/

Ramda 是一款实用的 JavaScript 函数式编程库。

https://ramda.cn/

### 实践

React 专注于构建用户界面，简单的状态管理可以使用 state、props、Context。

在 demo 中，`index`是入口文件，大概拆分出`Container`、`List`、`ListItem`、`Trigger`、`ModalForm`

等 5 个组件。

`index`文件作为主文件，承担了大部分状态管理的功能。其他的子组件的状态变更，都通过 props 传参来控制。

例如，**编辑待办**操作，点击待办项时，将待办信息从`ListItem`传递到`index`，再由`index`传递到`ModalForm`。

## DvaJS

### 介绍

dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

https://dvajs.com/

### 实践

dva 将状态存储在 store 中，通过 action 来修改状态，使数据流向清晰。

相对于 Ramda 版本，DvaJS 版本主要增加了`model.js`和`service.js`两个文件。

## ReduxToolkit

### 介绍

The official, opinionated, batteries-included toolset for efficient Redux development.

https://redux-toolkit.js.org/

### 实践

和 dva 师出同门，都是基于 redux。被誉为 redux 最佳实践。

也是将状态存储在 store 中，通过 action 来修改状态。增加了 slice 。

相对于 Dva 版本，增加了`store`，`index`上通过`react-redux`的`Provider`对根组件进行了包裹。还增加了 slice。

把 Dva 里的`model.js`拆成了两个 slice。

## ahooks

### 介绍

ahooks is A high-quality & reliable React Hooks library.

https://ahooks.js.org/

@umijs/plugin-model 是一种基于 `hooks` 范式的简易数据管理方案（部分场景可以取代 `dva`），通常用于中台项目的全局共享数据。

我们都知道自定义 `hooks` 是逻辑复用的利器，但我们也知道它不能复用状态，就和 `react` 内置的 `hooks` 一样，每次调用产生的状态都是相互隔离、无关的。那么，在业务开发中，如果我们需要提取的逻辑和状态都希望能够在多个组件中『共享』，就像其他数据流管理工具（`dva`, `mobx`）一样，`@umijs/plugin-model` 就是一个不错的选择。

https://umijs.org/zh-CN/plugins/plugin-model

### 实践

作为 umi 的插件，启用需要在`src/models` 目录下创建 hooks model。所以仅使用于小型项目和全局共享数据。

ahooks 的版本更贴近于 Ramda 的版本，只不过是把状态管理拆到的 models 中。

## RxJS

### 介绍

RxJS is Reactive Extensions Library for JavaScript.

Reactive Extensions: An API for asynchronous programming with observable streams.

https://rxjs-dev.firebaseapp.com/

### 实践

useModel 通常是管理全局共享数据。rxjs 可以在组件间共享数据。

rxjs 版本可以简单的看做 ahooks 版的升级版。状态在 store 中存储，组件读取状态通过 useObservableState 来连接。更新状态，通过`behaviorSubject$.next()`。

在此版本中，rxjs 仅作为数据仓库来使用，还未使用到 rxjs 强大的 operator。
