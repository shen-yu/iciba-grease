// ==UserScript==
// @name           金山词霸
// @namespace      redraiment
// @description    在页面上选中英文单词（仅由字母组成）时，自动弹出金山词霸图标；点击该图标则显示单词中文解释。
// @include        *
// @require http://apps.bdimg.com/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==
 
(function () {  
   $(document.body).append("<link type=\"text/css\" rel=\"stylesheet\" href=\"http://open.iciba.com/huaci/mini.css\">");
  var html = "<div style=\'position:absolute;right:0;top:19px;display:none\' id=\'Jihuajiyi\'><a class='' href='javascript:;' title='点击关闭即划即译'></a></div>"+
  "<div id=\'icIBahyI-yi\' style=\'display:none\'></div>"+
  '<div id=\'icIBahyI-main_box\' style=\'display:none\'>' +
  '<div class=\'icIBahyI-main_title\' id=\'icIBahyI-main_title\'>' +
  '<a href=\'javascript:;\' id=\'icIBahyI-gb\' class=\'icIBahyI-gb\' title=\'关闭\'></a>' +
  '<a href=\'javascript:;\' id=\'icIBahyI-dq\' class=\'icIBahyI-dq2\' title=\'点击固定结果\'></a>' +
  '爱词霸 即划即译' +
  '<div class=\'icIBahyI-sz_list\' id=\'icIBahyI-sz_list\'>' +
  '<a href=\'javascript:;\'>关闭即划即译</a>' +
  '<a href=\'#\' target=\'_blank\'>反馈</a> ' +
  ' <a href=\'#\' style=\'border:none;\' target=\'_blank\'>帮助</a> ' +
  '<span class=\'icIBahyI-j icIBahyI-tl\'></span>' +
  '<span class=\'icIBahyI-j icIBahyI-tr\'></span>' +
  '<span class=\'icIBahyI-j icIBahyI-bl\'></span>' +
  '<span class=\'icIBahyI-j icIBahyI-br\'></span>' +
  '</div>' +
  '</div>' +
  '<div class=\'icIBahyI-search\'>' +
  '<input id=\'ICIBA_HUAYI_input\' name=\'\' onkeydown=\'ICIBA_HUAYI_KEYDOWN(event);\' type=\'text\'>' +
  '<a href=\'javascript:;\' class=\'icIBahyI-sear\' onclick=\'ICIBA_HUAYI_searchword()\'>查 词</a>' +
  '</div>' +
  '<span class=\'icIBahyI-contTop\'></span>' +
  '<div class=\'icIBahyI-loading\' id=\'loading\'> </div>' +
  '<div class=\'icIBahyI-main_cont\' id=\'icIBahyI-main_cont\'></div>' +
  '<div class=\'icIBahyI-CB\' id=\'icIBahyI-scbiframe\' style=\'display:none\'></div>' +
  '<div id=\'ICIBA_TOO_LONG\' style=\'height:150px\' class=\'icIBahyI-footer\'>' +
  '您划取的内容太长，建议您去爱词霸' +
  '<a href=\'http://fy.iciba.com\'>翻译</a>页面。' +
  '</div>' +
  '<div class=\'icIBahyI-down\'><a href=\'http://ciba.iciba.com/\' onclick=\'clickCountIndex(26)\' target=\'_blank\'>搞定邮箱/文档/pdf取词？下载词霸PC版</a></div>' +
  '<span class=\'icIBahyI-contB\'></span>' +
  '</div>';
  $(document.body).append(html);
  
  $(document.body).append('<script src=\'http://open.iciba.com/huaci/huaci.js\' charset=\'utf-8\'></script>');
  $(document.body).append('<script src=\'http://open.iciba.com/huaci/ICIBA_HUACI_COM.js\' charset=\'utf-8\'></script>');
}) ();