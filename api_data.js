define({ "api": [
  {
    "type": "Post",
    "url": "/app/login",
    "title": "用户登录",
    "version": "1.0.0",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "phone||email",
            "optional": false,
            "field": "type",
            "description": "<p>登录方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "{\n  \"phone\": \"123\",\n  \"type\": \"phone\",\n  \"password\":\"mac123@\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2",
          "content": "{\n  \"email\": \"123@qq.com\",\n  \"type\": \"email\",\n  \"password\":\"mac123@1\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>email 、 phone 二选一，必填</p>",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  name:\"\",\n  user_id:\"\",\n  nick_name:\"\",\n  success: true,\n  token:\"\",\n  refresh_token:\"\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"账号或者密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/route/app.js",
    "groupTitle": "App",
    "name": "PostAppLogin"
  },
  {
    "type": "Post",
    "url": "/app/logout",
    "title": "用户退出",
    "version": "1.0.0",
    "group": "App",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头例子1",
          "content": "{\n   \"token\": \"Asdffjj88a\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/route/app.js",
    "groupTitle": "App",
    "name": "PostAppLogout",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Post",
    "url": "/app/refresh_token",
    "title": "更新 Token",
    "version": "1.0.0",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh_token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "{\n  \"refresh_token\": \"asasdd\",\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求头例子1",
          "content": "{\n   \"token\": \"Asdffjj88a\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/route/app.js",
    "groupTitle": "App",
    "name": "PostAppRefresh_token",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Post",
    "url": "/app/register",
    "title": "用户注册",
    "version": "1.0.0",
    "group": "App",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "phone||email",
            "optional": false,
            "field": "type",
            "description": "<p>注册方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nick_name",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "{\n  \"phone\": \"123\",\n  \"type\": \"phone\",\n  \"password\":\"mac123@\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2",
          "content": "{\n  \"email\": \"123@qq.com\",\n  \"type\": \"email\",\n  \"password\":\"mac123@1\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>email 、 phone 二选一，必填</p>",
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": \"true\",\n  \"results\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"此手机号已经被注册\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/route/app.js",
    "groupTitle": "App",
    "name": "PostAppRegister"
  },
  {
    "type": "POST",
    "url": "/bbs/comment_blog",
    "title": "评论帖子",
    "group": "BBS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bbs_id",
            "description": "<p>帖子id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n bbs_id:\"1\",\n content:\"这个帖子可以\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsComment_blog",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/bbs/insert",
    "title": "写帖子",
    "group": "BBS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bbs_desc",
            "description": "<p>帖子描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover_url",
            "description": "<p>封面</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"title\": \"Eve\",\n \"bbs_desc\": \"Eve\",\n \"content\": \"Eve\",\n \"cover_url\": \"Eve\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsInsert",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/bbs/query",
    "title": "查询指定帖子",
    "group": "BBS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要查询的字段列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "condition",
            "description": "<p>要查询的条件</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"bbs_desc\",\n ],\n \"condition\":{\n    id:23\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsQuery",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/bbs/query_between",
    "title": "查询BBS列表区间",
    "group": "BBS",
    "description": "<p>1.比如时间26号--27号的，评论数量 2-8的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fields",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "desc|asc",
            "optional": false,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>以哪一个字段排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "defaultValue": "id",
            "description": "<p>哪一个字段的区间，默认id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|any",
            "optional": false,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>区间开始，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|any",
            "optional": false,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>区间结束，默认10</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n\"page\":1,\n\"size\":10,\n\"field\":id\n\"start\":1\n\"end\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsQuery_between",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/bbs/query_page",
    "title": "分页查询BBS",
    "group": "BBS",
    "description": "<p>1.一个关键字匹配多个字段 2.多个条件字段，且关系查询 3.多个条件字段，或关系查询 4.相关字段帖子字段有 title,content,id,bbs_desc,update_time,create_time 5.如果是关键字搜索，就不要设置多条件查询 multiple_condition = false 6.如果是多条件模糊搜索，则设置 obj_condition={...}  multiple_condition = ture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "defaultValue": "10",
            "description": "<p>页码大小，默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "desc|asc",
            "optional": false,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>以哪一个字段排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要查询的字段,默认查询id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字模糊查询</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "keyword_fields",
            "description": "<p>一个关键字搜索针对的多个字段,默认针对查询id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "obj_condition",
            "description": "<p>多个查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "is_or",
            "description": "<p>多个条件查询是，是且关系还是或关系，默认或关系</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "multiple_condition",
            "description": "<p>是否是一个关键字针对多个字段进行搜索，默认否--多个关键字对应多个字段模糊搜索</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "关键字搜索\n{\n\"page\":1,\n\"size\":10,\n\"keyword\":\"搞笑代码\",\n\"keyword_fields\":[\"title\",\"content\"],\n\"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"bbs_desc\",\n ],\n \"multiple_condition\":false\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2",
          "content": "多条件模糊搜索,字段间或关系\n{\n\"page\":1,\n\"size\":10,\n\"obj_condition\":{\n  title:\"前端\",\n  content:\"前端\"\n},\n\"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"bbs_desc\",\n ],\n \"is_or\":true,\n \"multiple_condition\":true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsQuery_page",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/bbs/update",
    "title": "更新帖子",
    "group": "BBS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要更新的字段内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "condition",
            "description": "<p>指定更新的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"fields\": {\n    \"title\"：\"新标题\",\n    \"cover_url\":\"新cover_url\",\n    \"content\":\"新content\",\n    \"bbs_desc\":\"新 bbs_desc\",\n },\n \"condition\":{\n    id:23\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "BBS",
    "name": "PostBbsUpdate",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/bbs/insert_mul",
    "title": "批量写帖子",
    "group": "Blog",
    "description": "<p>可用于帖子迁移</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>帖子实体</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"items\": [\n   {\n    \"title\": \"Eve1\",\n    \"bbs_desc\": \"Eve\",\n    \"content\": \"Eve\",\n    \"cover_url\": \"Eve\",\n   },\n  {\n    \"title\": \"Eve2\",\n    \"bbs_desc\": \"bbs_desc\",\n    \"content\": \"Eve\",\n    \"cover_url\": \"Eve\",\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/bbs.js",
    "groupTitle": "Blog",
    "name": "PostBbsInsert_mul",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/comment_blog",
    "title": "评论博客",
    "group": "Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blog_id",
            "description": "<p>博客id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n blog_id:\"1\",\n content:\"这个博客可以\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogComment_blog",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/blog/insert",
    "title": "写博客",
    "group": "Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blog_desc",
            "description": "<p>文章描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover_url",
            "description": "<p>封面</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"title\": \"Eve\",\n \"blog_desc\": \"Eve\",\n \"content\": \"Eve\",\n \"cover_url\": \"Eve\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogInsert",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/insert_mul",
    "title": "批量写博客",
    "group": "Blog",
    "description": "<p>可用于博客迁移</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文章名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"items\": [\n   {\n    \"title\": \"Eve1\",\n    \"blog_desc\": \"Eve\",\n    \"content\": \"Eve\",\n    \"cover_url\": \"Eve\",\n   },\n  {\n    \"title\": \"Eve2\",\n    \"blog_desc\": \"blog_desc\",\n    \"content\": \"Eve\",\n    \"cover_url\": \"Eve\",\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogInsert_mul",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/query",
    "title": "查询指定博客",
    "group": "Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要查询的字段列表</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "condition",
            "description": "<p>要查询的条件</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"blog_desc\",\n ],\n \"condition\":{\n    id:23\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogQuery",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/query_between",
    "title": "查询博客列表区间",
    "group": "Blog",
    "description": "<p>1.比如时间26号--27号的，评论数量 2-8的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fields",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "desc|asc",
            "optional": false,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>以哪一个字段排序</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "defaultValue": "id",
            "description": "<p>哪一个字段的区间，默认id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|any",
            "optional": false,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>区间开始，默认0</p>"
          },
          {
            "group": "Parameter",
            "type": "Number|any",
            "optional": false,
            "field": "end",
            "defaultValue": "10",
            "description": "<p>区间结束，默认10</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n\"page\":1,\n\"size\":10,\n\"field\":id\n\"start\":1\n\"end\":4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogQuery_between",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/query_page",
    "title": "分页查询博客",
    "group": "Blog",
    "description": "<p>1.一个关键字匹配多个字段 2.多个条件字段，且关系查询 3.多个条件字段，或关系查询 4.相关字段博客字段有 title,content,id,blog_desc,update_time,create_time 5.如果是关键字搜索，就不要设置多条件查询 multiple_condition = false 6.如果是多条件模糊搜索，则设置 obj_condition={...}  multiple_condition = ture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "defaultValue": "10",
            "description": "<p>页码大小，默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "desc|asc",
            "optional": false,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>以哪一个字段排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要查询的字段,默认查询id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>关键字模糊查询</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "keyword_fields",
            "description": "<p>一个关键字搜索针对的多个字段,默认针对查询id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "obj_condition",
            "description": "<p>多个查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "is_or",
            "description": "<p>多个条件查询是，是且关系还是或关系，默认或关系</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "multiple_condition",
            "description": "<p>是否是一个关键字针对多个字段进行搜索，默认否--多个关键字对应多个字段模糊搜索</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "关键字搜索\n{\n\"page\":1,\n\"size\":10,\n\"keyword\":\"搞笑代码\",\n\"keyword_fields\":[\"title\",\"content\"],\n\"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"blog_desc\",\n ],\n \"multiple_condition\":false\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2",
          "content": "多条件模糊搜索,字段间或关系\n{\n\"page\":1,\n\"size\":10,\n\"obj_condition\":{\n  title:\"前端\",\n  content:\"前端\"\n},\n\"fields\": [\n     \"id\",\n     \"title\",\n     \"cover_url\",\n     \"content\",\n     \"blog_desc\",\n ],\n \"is_or\":true,\n \"multiple_condition\":true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogQuery_page",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/blog/update",
    "title": "更新博客",
    "group": "Blog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要更新的字段内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "condition",
            "description": "<p>指定更新的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"fields\": {\n    \"title\"：\"新标题\",\n    \"cover_url\":\"新cover_url\",\n    \"content\":\"新content\",\n    \"blog_desc\":\"新blog_desc\",\n },\n \"condition\":{\n    id:23\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/blog.js",
    "groupTitle": "Blog",
    "name": "PostBlogUpdate",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/comment/query_page",
    "title": "分页查询评论",
    "group": "Comment",
    "description": "<p>1.相关字段有 &quot;id&quot;, &quot;content&quot;, &quot;update_time&quot;, &quot;creator&quot;,&quot;comment_target_id&quot;, &quot;parent_id&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "defaultValue": "10",
            "description": "<p>页码大小，默认10</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>以哪一个字段排序</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "fields",
            "description": "<p>要查询的字段,默认查询id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "obj_condition",
            "description": "<p>多个查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "false",
            "optional": false,
            "field": "is_or",
            "defaultValue": "false",
            "description": "<p>传固定值</p>"
          },
          {
            "group": "Parameter",
            "type": "true",
            "optional": false,
            "field": "multiple_condition",
            "defaultValue": "true",
            "description": "<p>传固定值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example1",
          "content": "查询 指定 bbs 的评论 type=2\n{\n\"page\":1,\n\"size\":10,\n\"is_or\":false\",\n\"multiple_condition\":true,\n\"fields\": [\"id\", \"content\", \"update_time\", \"creator\",\"comment_target_id\", \"parent_id\"],\n\"obj_condition\":{\n  comment_target_id: bbs_id ,\n  type: 2\n }\n}",
          "type": "json"
        },
        {
          "title": "Request-Example2",
          "content": "查询 指定 博客 的评论 type=1\n{\n\"page\":1,\n\"size\":10,\n\"is_or\":false\",\n\"multiple_condition\":true,\n\"fields\": [\"id\", \"content\", \"update_time\", \"creator\",\"comment_target_id\", \"parent_id\"],\n\"obj_condition\":{\n  comment_target_id: blog_id ,\n  type: 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/comment.js",
    "groupTitle": "Comment",
    "name": "PostCommentQuery_page",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user_detail/update",
    "title": "修改密码",
    "group": "User_info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>帖子名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bbs_desc",
            "description": "<p>帖子描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>帖子内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover_url",
            "description": "<p>封面</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n fields:[\n   \"email\": \"123@qq.com\",\n   \"password\":\"mac123@1\"\n ] ,\n condition:[\n    id:23\n ]\n}",
          "type": "json"
        },
        {
          "title": "Request-Example",
          "content": "{\n fields:[\n   \"phone\": \"123\",\n   \"password\":\"mac123@1\"\n ] ,\n condition:[\n    id:23\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route/user_info.js",
    "groupTitle": "User_info",
    "name": "PostUser_detailUpdate",
    "success": {
      "examples": [
        {
          "title": "请求成功响应:",
          "content": "{\n  \"success\": \"true\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败响应:",
          "content": "{\n  \"success\": \"false\",\n  \"results\": \"\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
