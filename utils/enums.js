 function str() { 
  return "<div class='page-inner'><div id='book-search-results'> <div class='search-noresults'> <section class='normal markdown-section'> <p>编辑区可以对当前项目进行代码编写和文件的添加、删除以及重命名等基本操作。</p><h2 id='文件格式'>文件格式</h2><p>因 iOS 下仅支持 <strong>UTF8</strong> 编码格式，最新版本的开发者工具会在上传代码时候对代码文件做一次编码格式校验。</p><h2 id='文件支持'>文件支持</h2><p>工具目前提供了 5 种文件的编辑：<code>wxml</code>、<code>wxss</code>、<code>js</code>、<code>json</code>、<code>wxs</code> 以及图片文件的预览。</p><h2 id='文件操作'>文件操作</h2><p>新建页面有两种方式</p><ol><li><p>在目录树上右键，选择新建 Page，将自动生成页面所需要的 <code>wxml</code>、<code>wxss</code>、<code>js</code>、<code>json</code></p></li><li><p>在 app.json 的 pages 字段，添加需要新建的页面的路径，将会自动生成改页面所需要的文件</p></li></ol><h2 id='自动保存'>自动保存</h2><p>编辑代码后，工具会自动帮助用户保存当前的代码编辑状态，直接关闭工具或者切换到别的项目，并不会丢失已经编辑的文件状态，但需要注意的是，只有用户主动保存文件，修改内容才会真实的写到硬盘上。</p><p>如果设置中开启了 “修改文件时自动保存”（设置-编辑设置-修改文件自动保存），工具在修改文件时会自动保存到硬盘中，无需手动保存的效果。</p><p>设置中开启 “编译时自动保存所有文件”（设置-编译设置-编译时自动保存所有文件），在点击编译时自动保存所有文件的效果。</p><h2 id='实时预览'>实时预览</h2><p>如果设置中开启了 “文件保存时自动编译小程序”（设置-编辑设置-保存时自动编译小程序），那么当 <code>wxml</code>、<code>wxss</code>、<code>js</code>、<code>json</code> 文件修改时，可以通过模拟器实时预览编辑的情况：</p><p><strong>注意：如果同时开启了 ”修改文件时自动保存“ 的设置，编译动作会有一定的延迟，来避免频繁的编译，手动点击编译按钮将立即编译。</strong></p><h2 id='自动补全'>自动补全</h2><p>同大部分编辑器一样，工具提供了较为完善的自动补全</p><ul><li>js 文件编辑会帮助开发补全所有的 API 及相关的注释解释，并提供代码模板支持</li><li>wxml 文件编辑会帮助开发者直接写出相关的标签和标签中的属性</li><li>json 文件编辑会帮助开发者补全相关的配置，并给出实时的提示</li></ul><p>js 补全</p><p><img src='https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsautocomplete2.gif?t=201818' alt=''></p><p>代码模板支持</p><p><img src='https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsautocomplete.gif?t=201818' alt=''></p><p>json 补全</p><p> <img src='https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/jsoncomplete.gif?t=201818' alt='3'></p><p>wxml 补全</p><p> <img src='https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools/edit4.gif?t=201818' alt='3'></p><h2 id='项目配置文件'>项目配置文件</h2><p>可以在项目根目录使用 <code>project.config.json</code> 文件对项目进行配置。</p><table><thead><tr><th>字段名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>miniprogramRoot</td><td>Path String</td><td>指定小程序源码的目录(需为相对路径)</td></tr><tr><td>qcloudRoot</td><td>Path String</td><td>指定腾讯云项目的目录(需为相对路径)</td></tr><tr><td>setting</td><td>Object</td><td>项目设置</td></tr></tbody></table><p>setting 中可以指定以下设置</p><table><thead><tr><th>字段名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>es6</td><td>Boolean</td><td>是否启用 es5 转 es6</td></tr><tr><td>postcss</td><td>Boolean</td><td>上传代码时样式是否自动补全</td></tr><tr><td>minified</td><td>Boolean</td><td>上传代码时是否自动压缩</td></tr><tr><td>urlCheck</td><td>Boolean</td><td>是否检查安全域名和 TLS 版本</td></tr></tbody></table><p><strong>示例：</strong></p><pre><code class='lang-json'>{<span class='hljs-string'>'miniprogramRoot'</span>:<span class='hljs-string'>'./src'</span>,<span class='hljs-string'>'qcloudRoot'</span>:<span class='hljs-string'>'./svr'</span>,<span class='hljs-string'>'setting'</span>:{<span class='hljs-string'>'postcss'</span>:<span class='hljs-literal'>true</span>,<span class='hljs-string'>'es6'</span>:<span class='hljs-literal'>true</span>,<span class='hljs-string'>'minified'</span>:<span class='hljs-literal'>true</span>,<span class='hljs-string'>'urlCheck'</span>:<span class='hljs-literal'>false</span>}}</code></pre>"
}

module.exports = {
  str: str,


}