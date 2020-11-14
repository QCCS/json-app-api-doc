define({
  "name": "NPress",
  "description": "NPress 一个博客加BBS的接口文档",
  "title": "NPress-api",
  "header": {
    "title": "接口文档说明",
    "content": "<h2>接口文档</h2>\n<h2>baseUrl：http://47.100.13.168:8114</h2>\n<p>更多接口持续更新中</p>\n"
  },
  "footer": {
    "title": "文档结尾",
    "content": "<h2>接口文档</h2>\n<p>项目测试中，不要乱搞</p>\n<p>更新记录：</p>\n<h3>v1.0.0</h3>\n<p>用户注册，登录，退出，修改密码</p>\n<p>写博客，帖子，评论博客，评论帖子</p>\n<p>查询博客，帖子</p>\n<h1>使用例子</h1>\n<h3>文件上传</h3>\n<pre class=\"prettyprint\">var myHeaders = new Headers();\nmyHeaders.append(\"Content-Type\", \"multipart/form-data\");\n\nvar formdata = new FormData();\nformdata.append(\"file\", fileInput.files[0], \"450-450.png\");\nformdata.append(\"ispublic\", \"false\");\n\nvar requestOptions = {\n  method: 'POST',\n  headers: myHeaders,\n  body: formdata,\n  redirect: 'follow'\n};\n\nfetch(\"http://localhost:8112/file/upload\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n</code></pre>\n<h3>普通接口 fetch 请求方式</h3>\n<pre class=\"prettyprint\">let obj = {\n  host: host1.value,\n  user: user1.value,\n  password: password1.value,\n  database: database1.value\n}\nlet dbUrl = '/app/api1';\nfetch(dbUrl, {\n  method: \"post\",\n  body: JSON.stringify(obj),\n  headers: {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json',\n  }\n})\n.then(res => res.json())\n.then(res => {\n\n})\n.catch(function (err) {\n    console.log(\"数据库安装出错\"+ err)\n});\n\nlet tableUrl = '/app/api2';\nfetch(tableUrl, {\n  method: \"post\",\n  body: JSON.stringify(obj),\n  headers: {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json',\n  }\n})\n.then(res => res.json())\n.then(res => {\n    console.log(res)\n})\n.catch(function (err) {\n    console.log(\"数据表安装出错\"+ err)\n});\n</code></pre>\n<h3>普通接口使用 axios</h3>\n<pre class=\"prettyprint\">import axios from 'axios';\naxios.defaults.baseURL = \"http://localhost:8112\"\naxios.defaults.headers.common['Content-Type'] = 'application/json';\n\naxios.interceptors.request.use(function (config) {\n    console.log(config)\n    try {\n        // 需要添加到后端的跨域请求头里面\n        let token = JSON.parse(localStorage.getItem(\"token\"))\n        console.log(localStorage.getItem(\"token\"))\n        config.headers['token'] = token.token;\n    }catch (e) {\n        delete config.headers.token\n    }\n    return config;\n}, function (error) {\n    return Promise.reject(error);\n});\n\nasync logout(data){\n    return axios.post('app/logout',data);\n}\n</code></pre>\n"
  },
  "version": "1.0.0",
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-11-14T02:30:06.983Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
