# Git
## 版本控制工具
### 源代码管理工具(版本控制)的好处
a、利于团队开发/多人协同开发

b、对于个人开发
    -->对某个功能的修改操作

### 版本控制工具的种类：
+ git(github)
+ svn
+ java：maven
+ .net：vss tfs

### 源代码管理工具按照功能划分：
a、本地代码管理        -->用于个人开发           -->被淘汰
b、集中式源代码管理工具(svn)
c、分布式。。。。。。。(git)       -->兼具了a+b的功能

## Git的使用
### 通过git init将当前文件夹进行初始化
    -->一定要明确你要将哪个文件夹被git管理起来

### git status可以查看仓库中的文件状态
+ 在往git仓库中添加文件的时候，这些刚添加的文件，状态是：未追踪(Untracked)
+ 对于已经进入过暂存区的文件，文件的状态是：changes to be committed
+ 对于已经进入过暂存区的文件，再次修改文件，文件的状态是：modified

+ ps：如果当前文件夹下面的某个文件夹是空的，不会显示在结果中


### git add 文件名-->将指定的文件放到暂存区
把文件放到暂存区之后，状态是：待提交(changes to be committed)

git add 指定目录-->将指定目录下面的文件放到暂存区
    -->ps：如果当前仓库的根目录（.git文件夹位于的目录） git add .将仓库下面的没有被提交到暂存区的代码放到暂存区

git add *   -->将当前仓库中的所有的没有被提交到暂存区的代码放到暂存区

-->git add命令不仅仅可以将新添加的文件放到暂存区，也可以将已修改的文件放到暂存区

### 关于用户名和邮箱的配置
-->如果从来没有过，在提交到本地主仓库之前不会有任何问题，但是git commit -m 都会提示你没有配置过，如果没有配置过，是无法正常提交代码，报错信息：Please tell me who you are
-->git config user.name xxx
-->git config user.email xxx@qq.com
    -->可以通过--global选项实现在本机一次配置多次使用

### git push 服务器仓库的地址(https) master   -->将本地主仓库中的代码上传到服务器中
git pull 服务器仓库地址 master -->将服务器代码更新到本地(关联)


说明：
a、只有文件夹中有.git文件夹，仓库就一直有效，-->一旦把.git文件夹删除，那么仓库就废了
b、git会忽略是所有的空文件夹
c、git管理的文件，不要轻易重命名文件
    -->1.txt-->2.txt这样的重命名操作将会被识别为：删除了1.txt，创建了2.txt


## 输入github用户名和密码，如果看到：Authentication failed，一定表示用户名和密码输入错误



## 2个场景：
### 服务器仓库是空仓库
```
    git init
    touch 1.txt
    git add 1.txt
    git commit -m 提交了1.txt
    git push 服务器仓库地址 master
```

### 服务器仓库是非空仓库(☆☆☆工作中更常见☆☆☆)
```
    git clone 服务器仓库地址
    cd 文件夹
    git add 2.txt
    git commit -m 创建了2.txt
    git push 服务器仓库地址 master
```