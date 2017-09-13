# 包

- 通过使用npm来进行基本的包管理

## 初始化管理

- 对于每个项目来说都会有自己的依赖文件这时候就需要从开始就通过npm初始化
<br>
> `npm init 或者npm init -y` 通过初始化会创建出package.json文件 （不要有中文）

## package.json
- name 项目名称
- version 版本号 1.*.* 表示有重大更新  *.1.* 局部更新  *.*.1 （1.1.*) bug修补
- description 项目的说明
- entry point 项目的入口文件
- test command 测试
- git repository  git网站（git bub上面找到）
- keywords 关键字
- author 作者
- license 协议（MIT 既可以商用也可以私用） 
- scripts 用来保存常用命令 （npm  run  scripts中的key)
- dependencies 
   -  一个完整的版本号组表示为： [主要版本号，次要版本号，补丁版本号]
   -  \> +版本号   下载大于某个版本号，npm会下最新版
   -  < +版本号   下载小于某个版本号，npm会下小于这个版本号最新版
   -  <= 小于等于 一定会下你写的这个版本，除非没有你写的这个版本
   -  \>= 大于等于  下载最新版
   -   *、" "、X  任意 npm会给你下最新版
   -   ^ +版本号  不跃迁版本下载，^2.1.0 npm会下载大版本不变，去下载2.x.x版本里的最近版
   -   ~ +版本号  会去下约等于这个版本的最新版，在大版本不变的情
-  [参考文献 package.json全字段解析](http://blog.csdn.net/woxueliuyun/article/details/39294375)
-  [参考2](http://blog.csdn.net/kaosini/article/details/50353375)
-  [官方文档](https://docs.npmjs.com/)

## 下载包

- 本地下载 `npm install jquery ` 或者 `npm i jquery`
- `npm install jquery --save ` 或 `npm install -S jquery` 或 `npm i -S jquery` 本地下载并保存到package.json中的dependencies
- `npm install jquery --save-dev` 或 `npm install -D jquery` 或 `npm i -D jquery` 本地下载并保存到package.json中的devDependencies 
-  ` npm install  `  将package.json中devDependencies和dependencies 都进行下载
-  ` npm install -production` 只下载devpendencies中的文件
- `npm install angular@1.5.8`  根据不同版本下载包
- `npm install -g nrm` 全局进行下载
-  ` npm install angular  --registry=https://registry.npm.taobao.org` 修改镜像源 从淘宝下载angular
- 下载包 install 删除包 uninstall 更新包 update
## 查看包
- `npm info jquery` 查看包的详细信息
- ` npm docs jquery` 打开包homepage 地址

## 查看更多包的相关信息
- [参考文献 npm的命令](https://docs.npmjs.com/)

## nrm（镜像源切换） npm （包下载） nvm（node版本管理）

- nrm  镜像源切换，通过nrm切换 `.npmrc` registry的下载地址
- `npm install -g nrm` 全局进行下载
- ` nrm ls `  查看镜像源
- ` nrm use taobao` 切换镜像源
- ` nrm test ` 测试下载速度
- nrm切换好镜像源以后 直接影响npm 下载，设置好以后不需要再做修改

## bower npm yarn 常用的下载包的工具
- 下载 ` npm install bower -g`
- bower下载慢 bower会把依赖的包也下载过来 node4（npm 2 也会将依赖的包也下载过来）
- bower 的下载地址github  npm 从npmjs的官网下载
- bower 可以指定下载的路径

```
    //通过创建.bowerrc 添加
    {
    "directory":"js/common" //你的文件路径
    }
```

## yarn 也是一个下载工具

- yarn由facebook公司在npm的基础上创建一个下载工具
- yarn 下载速度要快一些 更方便管理主体包所依赖的包 yarn在做管理时更加精确
- 全局下载yarn ` npm install -g yarn`
- ` yarn add jquery` 下载jquery
- ` yarn remove jquery` 移除jquery
- ` yarn init` yarn初始化
- ` yarn global add http-server` 全局下载包

# 浏览器的包 node中的包的不同
- 浏览器引用一个包 script:src  seajs commjs 都需要下载 异步
- node的包不需要下载（node运行在本地）同步的node CMD同步  Commonjs规范 （require moduels）

# 模块