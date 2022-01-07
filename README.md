# Todolist

通过不同的技术栈写一系列 todolist，来对比理解。

## 预处理

### 使用 umi 搭建基础框架

使用`ant-design-pro`做基础框架的原因。

1. 笔者喜欢。
2. 内置 antd，处理样式。
3. 内置 mock，处理模拟数据。
4. 内置 route，处理路由。
5. 等等...

### 安装依赖

```sh
yarn add rxjs ramda jquery redux-toolkit
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

## Swagger

## Mock

## Ramda

先在 mock 中，把后台接口的增删改查写了。

然后写页面。

最后对接接口。

## 纯 html

就一个 html，加 css，没有 js

功能就是展示。

## jQuery

展示、增加、删除

jQuery 操作 html 模板，插入到 dom 节点

## react

增： [...arr, item]

删： filter

改： map

查： arr

mvvm

redux

rxjs

分别有纯 react，ramda,dva,rtk,hooks,rxjs,bloc 等
