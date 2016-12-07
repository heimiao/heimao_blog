---

layout: index

title: "使用wepack搭建自己的react小程序"

---
 
## 使用wepack搭建自己的react小程序
**前言：**前几天刚把jekyll这块看了下同时也把教程写下来放到了git上，预防自己忘记也给小白更多的机会练练手。今天就把我用webpack搭建项目的顺序一步一步道来。我相信走过这么一遭就对react了解的差不多了。

**系统配置：**window7 64位系统，

**必备条件**gitbash命令窗口 node环境

至于其他系统我没有也请见谅，呵呵，好了废话不多说进入主题

## 1.webpack安装

#### 1.1.项目新建
在电脑任何一个地方新建一个文件夹，比如叫webpack文件夹，打开命令gitbash进入该目录下，
输入命令：

	npm init
在我们的webpack文件下会自动生成一个package.js文件，我们暂时不管这个文件，
接下来我们再次输入命令安装webpack，命令如下：
	
	npm install webpack --save-dev

当我们把webpack安装之后就要新建我们项目了，
（PS:再次安装有可能报错，是由于国家的防火墙，没办法，自己翻墙或者通过国内景象安装。）
我们需要在webpack新建如下图的目录，全部手动创建。

![目录](wepack_img/tree.png)

+ app/ 目录使我们放源代码的地方
+ build/  是webpack生成工程的地方
+ node_moudules则是我们安装webpack安装的模块包，以后陆续会安装其他的本地包都在此

#### 1.2.webpack简单配置

打开我们webpack项目录下的webpack.config.js进行简单的配置，如下：
	
	var path=require("path");
		module.exports={
			entry:path.resolve(__dirname, 'app/main.js')
		},
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
		}
	};

针对webpack.config.js配置项有必要讲解下，以后陆续会有其他的配置项加进来。
(PS:**\_\_dirname**是**node**的一个变量，是获取本模块相对项目的绝对位置)

+ entry:是页面入口文件配置
+ output：是对应输出项配置

到这里我们就可以编写属于自己的js了，打开app/component.js编码如下：

	module.exports = function () {
		var element = document.createElement('h1');
		element.innerHTML = '你好，黑猫';
		return element;
	};
然后打开我们的app/main.js文件，编码如下：

	var component = require('./component.js');
	document.body.appendChild(component());

这两个文件就是main.js调用component.js里边的方法 把`我是黑猫`输出到页面上。

在这里我们先手动在build文件里边新建一个index.html并引入bundle.js,刚才我说了bundle.js是有webpack生成的所以我们只关心配置项就可以了。
现在我们所有的事情都做好之后就只欠webpack编译成bundle.js这步了，在命令窗口你可以执行命令：
`webpack`

当然如果你不想这么运行，也可以在package.json的script标签里边配置自己喜欢的别名，作为启动项命令，配置如下：

	"scripts": {
		"build": "webpack"
		}
配置好后我们执行 `npm run build` 

再打开我们的build目录下会生成一个叫bundle.js了，同时用浏览器打开我们的index.html会显示
“我是黑猫”字段，当然我们需要修改我们的main.js或者或者其他自己写的js都要执行 **npm run build** 感觉很繁琐。所以我们要添加一个服务**webpack-dev-server**让他安静的运行，不至于我们一直手动运行编译

#### 1.3.webpack-dev-server安装
安装命令`npm install webpack-dev-server --save-dev`安装完成之后我们需要修改package.json。代码如下：

	{
		"scripts": {
		"build": "webpack",
		"dev": "webpack-dev-server --devtool eval --progress --colors --hot --        	content-base build"
		}
	}
你也许对dev的配置项很模糊吧，上解释：

1. webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
2. --devtool eval - 为你的代码创建源地址。 当有任何报错的时候可以让你更加精确地定位到文件和行号
3. --progress - 显示合并代码进度
4. --colors - Yay， 命令行中显示颜色！
5. --content-base build - 指向设置的输出目录

这个模块的功能就是一个服务，而这个服务帮我们监听了我们的代码是否做了修改，然后自动合并编译，剩下来的就是让我们访问http://localhost:8080。当然浏览器这时并不会自动的刷新，而且还需要们手动F5，为了不再做F5的动作。这时我们还需要做两件事，第一件修改在我们的index.html页面，代码如下：
	
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="UTF-8"/>
	</head>
	<body>
	<script src="http://localhost:8080/webpack-dev-server.js"></script>
	<script src="bundle.js"></script>
	</body>
	</html>

第二修改我们的webpack.config.js的配置文件，代码如下：

	var webpack = require('webpack');
	var path = require('path');
	var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
	module.exports ={
		entry:  ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
		output:{
			path:path.resolve(__dirname,'build'),
			filename: 'bundle.js',
		}
	}
到这里我们想要的结果可就达到了，我们随时修改代码，浏览器会自动刷新我们所做的修改。然后运行我们的启动命令`npm run dev`访问http://localhost:8080同样也可以从 http://localhost:8080/webpack-devserver/bundle 。 这会触发一个默认的你不能控制的 index.html
