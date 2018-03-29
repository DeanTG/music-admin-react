# music-admin-react
> 基于create-react-app ， ant-design 搭建

## sass 加载
* `npm install sass-loader node-sass --save-dev` 安装sass
* `npm run eject` 放开webpack配置
* webpack.config.dev.js 文件和 webpack.config.prod.js 文件中，在loader部分添加sass-loader 
```
  {
        test: /\.scss$/,
        loaders: ['sass-loader'],
  },
```
，在css-loader的test部分加入scss，同时在file-loader 的exclude部分，添加 `/\.scss$/`