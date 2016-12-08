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
在电脑任何一个地方新建一个文件夹，比如叫react-webpack文件夹，打开命令窗口进入该目录，
输入命令：

	npm init
在我们的webpack文件下会自动生成一个package.js文件，我们暂时不管这个文件，
接下来我们再次输入命令安装webpack，命令如下：
	
	npm install webpack --save-dev

（PS:安装有可能报错，是由于国家的防火墙，没办法，自己翻墙或者通过国内景象安装。）
我们需要在react-webpack新建如下图的目录，全部手动创建。

![目录]({{site.url}}/image/wepack_img/tree.png)

+ app/ 目录使我们放源代码的地方
+ build/  是webpack生成工程的地方
+ node_moudules则是我们安装webpack安装的模块包，以后陆续会安装其他的本地包都在此

#### 1.2.webpack简单配置

打开我们react-webpack项目录下的webpack.config.js进行简单的配置，如下：
	
	//webpack.config.js

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
	
	//component.js

	module.exports = function () {
		var element = document.createElement('h1');
		element.innerHTML = '你好，黑猫';
		return element;
	};
然后打开我们的app/main.js文件，编码如下：

	//main.js

	var component = require('./component.js');
	document.body.appendChild(component());

这两个文件就是main.js调用component.js里边的方法 把`我是黑猫`输出到页面上。

在这里我们先手动在build文件里边新建一个index.html并引入bundle.js,刚才我说了bundle.js是有webpack生成的所以我们只关心配置项就可以了。
现在我们所有的事情都做好之后就只欠webpack编译成bundle.js这步了，在命令窗口你可以执行命令：
`webpack`

当然如果你不想这么运行，也可以在package.json的script标签里边配置自己喜欢的别名，作为启动项命令，配置如下：
	
	//package.json

	"scripts": {
		"build": "webpack"
		}
配置好后我们执行 `npm run build` 

再打开我们的build目录下会生成一个叫bundle.js了，同时用浏览器打开我们的index.html会显示
“我是黑猫”字段，当然我们需要修改我们的main.js或者其他的js都要执行 **npm run build** 感觉很繁琐。所以我们要添加一个服务**webpack-dev-server**让他安静的运行，不至于我们一直手动运行编译

#### 1.3.热部署项目，实现实时预览
安装命令`npm install webpack-dev-server --save-dev`并且修改package.json。代码如下：
	
	//package.json
	{
		"scripts": {
		"build": "webpack",
		"dev": "webpack-dev-server --devtool eval --progress --colors --hot --        	content-base build"
		}
	}
你也许对dev的配置项很模糊吧，解释如下：

1. webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
2. --devtool eval - 为你的代码创建源地址。 当有任何报错的时候可以让你更加精确地定位到文件和行号
3. --progress - 显示合并代码进度
4. --colors - Yay， 命令行中显示颜色！
5. --content-base build - 指向设置的输出目录

这个模块的功能就是一个服务，剩下来的就是让我们访问http://localhost:8080。当然浏览器这时并不会自动的刷新，而且还需要们手动F5，为了不再做F5的动作。这时我们还需要做两件事，第一件修 index.html页面，代码如下：
	
	//index.html

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

第二修改webpack.config.js的配置文件，代码如下：
	
	//webpack.config.js

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
到这里我们想要的结果可就达到了，我们随时修改代码，浏览器会自动刷新我们所做的修改。然后运行我们的启动命令`npm run dev`访问http://localhost:8080，同样也可以 http://localhost:8080/webpack-devserver/bundle 。 这个会触发一个默认的你不能控制的 index.html

接下来的教程我将以提问为导向，一步一往下走了。别分神，小心跑偏了。
目前我们的webpack的基本功能跑起来了，不过有一个问题，那就是webpack不仅仅打包我们的js模块，那我们的less，sass，html，css,静态资源要怎么打包呢？需要怎么在我们的项目中应用呢？

#### 1.4.webpack针对静态资源的配置和使用

加载我们的静态资源就需要我们在webpack.config.js中添加loader了，而这个loader就是负责把静态资源转发成webpack能打包的js.这下明白了么呵呵。而webpack这个loader是个遵循管道方式的链式调用，但是每个返回都是javascript噢噢。以下都是loader的特性。

+ Loader 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式并传递给下
一个 loader ，但是最后一个 loader 必须返回 JavaScript。
+ Loader 可以同步或异步执行。
+ Loader 运行在 node.js 环境中，所以可以做任何可能的事情。
+ Loader 可以接受参数，以此来传递配置项给 loader。
+ Loader 可以通过文件扩展名（ 或正则表达式） 绑定给不同类型的文件。
+ Loader 可以通过 npm 发布和安装。
除了通过 package.json 的 main 指定，通常的模块也可以导出一个 loader 来使用。
+ Loader 可以访问配置。插件可以让 loader 拥有更多特性。
+ Loader 可以分发出附加的任意文件

当然loader不单单可以在我们的配置文件里边配置也可以同webpack 在命令行里边运行
好了介绍了下loader。我们继续我们的react项目搭建。

打开我们的webpack.config.js配置如下：
		
		//webpack.config.js
	
		var webpack = require('webpack');
		var path = require('path');
		module.exports ={
			entry:  ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')], 
			output:{
				path:path.resolve(__dirname,'build'),
				filename: 'index.js',
			},  
			//加载我们的静态资源loader
			module:{ 
					loaders:[
					 {
							test: /\.jsx?$/,
							exclude: /node_modules/,
						    loader: 'babel',
							query:{ 
								presets:['es2015','react']
							}
						},{
							test: /\.css$/,
			      			loader: 'style!css'
						},{
							test: /\.less$/,
			      			loader: 'style!css!less'
						},{
							test: /\.scss$/,
			      			loader: 'style!css!sass?sourceMap'
						},{
							test: /\.(png|jpg)$/, 
			     			loader: 'url?limit=8192' 
						}
					]
				} 


		}
通过webpack的配置文件可以看到我配置了css，sass，less，和图片，这些配置项解释如下：

+  loaders：可以是数组可以是对象。我这里是数组形式的
+  test ：  当loader读取这些文件的时候所要遵循的正则表达式
+  loader：加载我们需要的转化器，多个转化器用“！”分割

我单独拿我喜欢的sass来开刀，其他都一样比葫芦画瓢的配置就行。（PS:sass需要安装node-sass编译器的`npm install node-sass --save-dev`）

单看我的sass用到了style css 和sass这三个loader,可能你有疑问了，为什么需要这三个呢？
答：sass-loader负责读取我们的sass文件并且编译成css，编译好后交给css-loader读取转化再交给style-loader写入到我们的页面上。我在上边说了loader遵循管道链式调用的，每个返回都是一个javascript所以一直传递到style-loader上并且写到页面上。当然你也可以这样配置：`loader:style-loader!css-loader!sass-loader`把loader加上。后边的sourceMap是做调试用的，打印log用的

配置就算是完事了，安装我们的sass-loader ,`npm install sass-loader --save-dev`。等我们安装完成之后我们就可以写sass了，在app目录下创建sass/index.scss编写我们的index.scss样式代码如下
	
	html{
    background:skyblue;
	    h1{
	        font-size:18px;
	    }
	｝
最后我们就差一步了，要把我们写的index.scss导入到 **app/main.js**文件内 代码如下：
	
	require("./sass/index.scss")

接下来运行`npm run dev`访问http://localhost:8080,看到天蓝色的背景说明你成功了。
说到这里你会发现我们的css自动发布到html页面上了，感觉又回到了八十年代的编码方式了，不行我么要单独打包成样式文件，自己手动引入style。css，那好接下来我们就往下继续走。

#### 1.4.webpack打包成独立的文件

想要打包成我们的独立文件，我们需要extract-text-webpack-plugin这个插件，废话少说，
安装这个插件`npm install extract-text-webpack-plugin --save-dev`

修改iwebpack.config.js配置如下：

		//webpack.config.js
		
		// 导入我们的extract-text-webpack-plugin插件
	
		var webpack = require('webpack');
		var path = require('path');
		module.exports ={
			entry:  ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')], 
			output:{
				path:path.resolve(__dirname,'build'),
				filename: 'index.js',
			},   
			module:{ 
					loaders:[
					 {
							test: /\.jsx?$/,
							exclude: /node_modules/,
						    loader: 'babel',
							query:{ 
								presets:['es2015','react']
							}
						},{
							test: /\.css$/,
			      			loader: 'style!css'
						},{
							test: /\.less$/,
			      			loader: 'style!css!less'
						},{
							test: /\.scss$/,
			      			loader: 'style!css!sass?sourceMap'
						},{
							test: /\.(png|jpg)$/, 
			     			loader: 'url?limit=8192' 
						}
					]
				} 


		}