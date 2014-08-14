// ==UserScript==
// @name        fm.beget.ru
// @namespace   https://github.com/gameclamp/beget_translate
// @include     https://fm.beget.ru/
// @version     1
// @grant       none
// ==/UserScript==
(function () {
    var t;
    var wintr = function(){
        if($('div[id^=fm-window-]').length != 0){
            clearInterval(t);
            $('#fm-window-site_header_hd-textEl').html('网站列表')
        }
    }
    var main = function () {
        if ($('#button-1160-btnInnerEl') != undefined) {
            clearInterval(t);
            $('#top-panel-domains-btnEl').click(function(){
                t = setInterval(wintr, 500);
            })
            
            $('#button-1144-btnInnerEl') .html('查看')
            $('#button-1144').click(function(){
                $('#menuitem-1146-textEl').html('打开')
                $('#fm-site-list-textEl').html('网站列表')
                $('#fm-menu-search-textEl').html('搜索')
            })
            
            $('#button-1160-btnInnerEl') .html('设置')
            $('#button-1173-btnInnerEl') .html('帮助')
            
            
            $('#button-1107-btnInnerEl') .html('FTP首页')
            $('#button-1108-btnInnerEl') .html('远程FTP')
            $('#button-1109-btnInnerEl') .html('我的电脑')
            $('#top-panel-domains-btnInnerEl').html('网站列表')
            $('#button-1111-btnInnerEl').html('刷新')
            $('#button-1112-btnInnerEl').html('新建文件夹')
            $('#button-1114-btnInnerEl').html('上传文件')
            $('#top-panel-create-archive-btnInnerEl').html('创建备份')
            $('#top-panel-dl_zip-btnInnerEl').html('打包下载')
            $('#top-panel-search-file-btnInnerEl').html('搜索文件')
            $('#top-panel-search-text-btnInnerEl').html('搜索文本')
            $('#top-panel-chart-btnInnerEl').html('文件夹大小')
            
            $('#gridcolumn-1039-textEl') .html('文件名')
            $('#gridcolumn-1040-textEl') .html('类型')
            $('#gridcolumn-1041-textEl') .html('大小')
            $('#gridcolumn-1042-textEl') .html('所有者')
            $('#gridcolumn-1044-textEl') .html('权限')
            $('#gridcolumn-1045-textEl') .html('修改时间')

            $('#gridcolumn-1087-textEl') .html('文件名')
            $('#gridcolumn-1088-textEl') .html('类型')
            $('#gridcolumn-1089-textEl') .html('大小')
            $('#gridcolumn-1090-textEl') .html('所有者')
            $('#gridcolumn-1092-textEl') .html('权限')
            $('#gridcolumn-1093-textEl') .html('修改时间')
        }
    }
    t = setInterval(main, 500);
}) ();
