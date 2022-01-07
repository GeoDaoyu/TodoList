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

在https://editor.swagger.io/上编辑一份openapi。

然后导出为 openapi.json，拷贝到 config 下。

## Mock

在 mock 下新建`todoList.ts`文件，实现简单的增删改查。暴露出 4 个接口。

## Ramda

代表的是父子组件传参。
