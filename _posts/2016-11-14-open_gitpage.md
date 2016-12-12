---

layout: index
title: "开通github的gitPage页面"

---

# github上搭建自己的jekyll博客教程

***  

**前言：**因为gitpage页面是有jekyll团队在维护，所以想要在gitpage页面上搭建自己的博客，jekyll是首推噢噢。当然不外乎别人用Hexo这个生成工具，看个人爱好了，当然还有人用git的产品gitbook生成好静态页面之后上传到gitpage上当作自己的博客，gitbook这个主要是生成书籍一个工具所以不推荐这么用。gitbook虽然可以生成html页面。

### 第一步创建仓库
我们的博客需要在网络上运行，需要先给他找一个地方安放我们的博客，这个地方我们就选择了github的仓库了，注册github这一系列的操作我就不说了
直接跳到创建仓库的步骤如下图所示

点击右上角创建我们的仓库
![img](https://heimiao.github.io/heimao_blog/image/blog/1.png)

输入我们项目名称和描述
![img](https://heimiao.github.io/heimao_blog/image/blog/2.png)

设置我们的项目作为我们的博客

![img](https://heimiao.github.io/heimao_blog/image/blog/3.png) 


### 第二步设置我们的page页面
当我们到达设置页面往下拖拽会有一个gitpage选项，如下图
![img](https://heimiao.github.io/heimao_blog/image/blog/4.png) 

这里可以设置我们的首页内容要显示什么，当然你可以选择自己的首页面

（PS：在本地搭建jekyll环境那会有博客生成教程，包括修改自己的首页面）

![img](https://heimiao.github.io/heimao_blog/image/blog/5.png) 

当我们填充上我们的内容时候该选择我们的模版了，这里jekyll默认给我们提供了几种模版如下图：

![img](https://heimiao.github.io/heimao_blog/image/blog/6.png) 

设置成功模版后返回我们的setting设置页面如下图（PS：需要等十分钟左右才会出现的，估计是需要github审核吧）而这个地址就是我们的博客地址了，

![img](https://heimiao.github.io/heimao_blog/image/blog/7.png) 

如果你不喜欢这个域名你也可以自定义自己的域名：如下图所示

![img](https://heimiao.github.io/heimao_blog/image/blog/8.png) 


### 第三步把修改博客

如果想要修改我们的博客，我们需要把我们的项目下载下来，打开本地的gitbash命令窗口如入以下命令

	git clone 你的项目地址（PS:git@github.com:heimiao/heimao_blog.git）

下载下来随你怎么整治了，修改完后把他提交到github上就可以看到你修改的效果了。

最笨的办法就是自己写html页面，然后推送到我们的github上来，当然这种办法肯定我是不采用了，所以我们要通过某个工具根据markdown和模版来生成我们的博客内容，至于模版你可以用自己的也可以用jekyll自带的，随你个人喜欢。

因为要用jekyll生成我们的博客网页，我们需要在本地搭建一个jekyll环境来用jekyll帮我们通过模版和markdwon文档生成静态页面来发布到gitpage上来，

【[本地搭建jekyll模版发布系统](https://heimiao.github.io/heimao_blog//2016/11/16/jekyll_down.html)】

想要了解更多的jekyll知识可以[点击我](http://jekyll.com.cn/)

