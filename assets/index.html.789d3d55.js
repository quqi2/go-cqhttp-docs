import{e}from"./app.5e7b17ef.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const o={},c=e('<h1 id="\u9891\u9053" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053" aria-hidden="true">#</a> \u9891\u9053</h1><blockquote><p>\u6CE8\u610F: QQ\u9891\u9053\u529F\u80FD\u76EE\u524D\u8FD8\u5728\u6D4B\u8BD5\u9636\u6BB5, go-cqhttp \u4E5F\u5728\u9002\u914D\u7684\u521D\u671F\u9636\u6BB5, \u4EE5\u4E0B <code>API</code> <code>Event</code> \u7684\u5B57\u6BB5\u540D\u53EF\u80FD\u5B58\u5728\u9519\u8BEF\u5E76\u5747\u6709\u53EF\u80FD\u5728\u540E\u7EED\u7248\u672C\u4FEE\u6539/\u6DFB\u52A0/\u5220\u9664. \u76EE\u524D\u4EC5\u4F9B\u5F00\u53D1\u8005\u6D4B\u8BD5\u4EE5\u53CA\u9002\u914D\u4F7F\u7528</p></blockquote><p>QQ\u9891\u9053\u76F8\u5173\u8BF4\u660E</p><h2 id="\u547D\u540D\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u8BF4\u660E" aria-hidden="true">#</a> \u547D\u540D\u8BF4\u660E</h2><p>API\u4EE5\u53CA\u5B57\u6BB5\u76F8\u5173\u547D\u540D\u5747\u4E3A\u53C2\u8003QQ\u5B98\u65B9\u547D\u540D\u6216\u76F8\u4F3C\u4EA7\u54C1\u547D\u540D\u89C4\u5219, \u7531\u4E8EQQ\u9891\u9053\u7684\u8D26\u53F7\u7CFB\u7EDF\u72EC\u7ACB\u4E8EQQ\u672C\u4F53, \u6240\u4EE5\u5404\u4E2A <code>ID</code> \u5E76\u4E0D\u80FD\u548CQQ\u901A\u7528.\u4E5F\u65E0\u6CD5\u901A\u8FC7 <code>tiny_id</code> \u83B7\u53D6\u5230 <code>QQ\u53F7</code></p><p>\u4E0B\u8868\u4E3A\u5E38\u89C1\u5B57\u6BB5\u547D\u540D\u8BF4\u660E</p><table><thead><tr><th>\u547D\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>tiny_id</code></td><td>\u5728\u9891\u9053\u7CFB\u7EDF\u4E2D\u4EE3\u8868\u7528\u6237ID, \u4E0EQQ\u53F7\u5E76\u4E0D\u901A\u7528</td></tr><tr><td><code>guild_id</code></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>\u5B50\u9891\u9053ID</td></tr></tbody></table><blockquote><p>\u6240\u6709\u9891\u9053\u76F8\u5173\u4E8B\u4EF6\u7684 <code>user_id</code> \u5747\u4E3A <code>tiny_id</code></p></blockquote><h2 id="\u7279\u6B8A\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u8BF4\u660E" aria-hidden="true">#</a> \u7279\u6B8A\u8BF4\u660E</h2><ul><li>\u7531\u4E8E\u9891\u9053\u7684\u9650\u5236, \u76EE\u524D\u65E0\u6CD5\u901A\u8FC7\u56FE\u7247\u6458\u8981\u67E5\u8BE2\u5230\u9891\u9053\u56FE\u7247\u6D88\u606F\u7684\u8BE6\u7EC6\u4FE1\u606F, \u6240\u4EE5\u901A\u8FC7\u9891\u9053\u6D88\u606F\u6536\u5230\u7684\u56FE\u7247\u5747\u4F1A\u4E0B\u8F7D\u5B8C\u6574\u6587\u4EF6\u5230 <code>images/guild-images</code>. (\u7FA4\u56FE\u7247\u8F6C\u53D1\u4E0D\u53D7\u6B64\u9650\u5236)</li><li>\u7531\u4E8E\u65E0\u6CD5\u901A\u8FC7 <code>GlobalID</code> \u653E\u4E0B\u9891\u9053\u6D88\u606F\u7684ID, \u6240\u4EE5\u6240\u6709\u9891\u9053\u6D88\u606F\u7684 <code>message_id</code> \u5747\u4E3A <code>string</code> \u7C7B\u578B</li><li><code>send_msg</code> API\u5C06\u65E0\u6CD5\u53D1\u9001\u9891\u9053\u6D88\u606F</li><li><code>get_msg</code> API\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u9891\u9053\u6D88\u606F</li><li><code>reply</code> \u7B49\u6D88\u606F\u7C7B\u578B\u6682\u4E0D\u652F\u6301\u89E3\u6790</li><li><code>at</code> \u6D88\u606F\u7684 <code>target</code> \u4F9D\u7136\u4F7F\u7528 <code>qq</code> \u5B57\u6BB5, \u4EE5\u4FDD\u8BC1\u4E00\u81F4\u6027. \u4F46\u5185\u5BB9\u4E3A <code>tiny_id</code></li><li>\u6240\u6709\u4E8B\u4EF6\u7684 <code>self_id</code> \u5747\u4E3A BOT \u7684QQ\u53F7. <code>tiny_id</code> \u5C06\u653E\u5728 <code>self_tiny_id</code> \u5B57\u6BB5</li><li>\u9075\u5FAA\u6211\u4EEC\u4E00\u8D2F\u7684\u539F\u5219, \u5C06\u4E0D\u4F1A\u652F\u6301\u4E3B\u52A8\u52A0\u9891\u9053/\u4E3B\u52A8\u62C9\u4EBA/\u7EA2\u5305\u76F8\u5173\u6D88\u606F\u7C7B\u578B</li><li>\u9891\u9053\u76F8\u5173\u7684API\u4EC5\u80FD\u5728 <code>Android Phone</code> \u548C <code>iPad</code> \u534F\u8BAE\u4E0A\u4F7F\u7528.</li><li>\u7531\u4E8E\u9891\u9053\u76F8\u5173ID\u7684\u6570\u636E\u7C7B\u578B\u5747\u4E3A <code>uint64</code> , \u4E3A\u4FDD\u8BC1\u4E0D\u8D85\u8FC7\u67D0\u4E9B\u8BED\u8A00\u7684\u5B89\u5168\u503C\u8303\u56F4, \u5728 <code>v1.0.0-beta8-fix3</code> \u4EE5\u540E, \u6240\u6709ID\u76F8\u5173\u6570\u636E\u5C06\u8F6C\u6362\u4E3A <code>string</code> \u7C7B\u578B, API\u8C03\u7528 <code>uint64</code> \u6216 <code>string</code> \u5747\u53EF\u63A5\u53D7.</li><li>\u4E3A\u4FDD\u8BC1\u4E00\u81F4\u6027, \u6240\u6709\u9891\u9053\u63A5\u53E3\u8FD4\u56DE\u7684 <code>\u7528\u6237ID</code> \u5747\u547D\u540D\u4E3A <code>tiny_id</code>, \u6240\u6709\u9891\u9053\u76F8\u5173\u63A5\u53E3\u7684 <code>\u7528\u6237ID</code> \u5165\u53C2\u5747\u547D\u540D\u4E3A <code>user_id</code></li></ul>',10);function t(i,a){return c}var n=d(o,[["render",t]]);export{n as default};
