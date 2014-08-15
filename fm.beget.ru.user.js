// ==UserScript==
// @name        fm.beget.ru
// @namespace   https://github.com/gameclamp/beget_translate
// @updateURL   https://github.com/gameclamp/beget_translate/raw/master/fm.beget.ru.user.js
// @include     https://fm.beget.ru/
// @version     1.1
// @grant       none
// ==/UserScript==
(function () {
    var t;
    var wintr = function(){
        if($('#fm-window-site').length != 0){
            clearInterval(t);
            $('#fm-domains-grid[eq=1]')
            $('#fm-window-site_header_hd-textEl').html('网站列表')
            var elms = $('#fm-domains-grid>div:eq(0)>div>div>div span')
            elms[0].innerHTML = '域名'
            elms[1].innerHTML = '路径'
            elms[2].innerHTML = '访问权限'
            $('#fm-sites-list-goto-button-btnInnerEl').html('确定')
            $('#fm-sites-list-goto-button-btnInnerEl').parents('div[id$=targetEl]').find('span:eq(2)').html('取消')
        }else if($('#fm-window-search-text').length != 0){
            clearInterval(t);
            $('#fm-window-search-text_header_hd-textEl').html('在文件中搜索文本')
            $('#fm-window-search-text div:eq(10)').html('搜索选项')
            $('#search-file-text-labelEl').html('搜索内容')
            $('#search-text-path-labelEl').html('路径')
            $('#fm-search-text-result-grid label').html('过滤器')
            var elms = $('#fm-search-text-result-grid>div:eq(1) span')
            elms[0].innerHTML = '文件'
            elms[1].innerHTML = '路径'
            $('#fm-button-search-text-search-btnInnerEl').html('搜索')
            $('#fm-button-search-text-cancel-btnInnerEl').html('取消')
            $('#fm-button-search-text-search-btnInnerEl').parents('div[id$=targetEl]').find('span:eq(4)').html('关闭')
        }
    }
    var main = function () {
        if ($('#button-1160-btnInnerEl') != undefined) {
            clearInterval(t);
            $('#top-panel-domains-btnEl').click(function(){
                t = setInterval(wintr, 500);
            })
            $('#top-panel-search-text').click(function(){
                t = setInterval(wintr,500)
            })
            $('#button-1144-btnInnerEl') .html('查看')
            $('#button-1144').click(function(){
                $('#menuitem-1146-textEl').html('打开')
                $('#fm-site-list-textEl').html('网站列表')
                $('#fm-menu-search-textEl').html('搜索')
                $('#menuitem-1150-textEl').html('搜索文件')
                $('#menuitem-1151-textEl').html('搜索内容')
                $('#menuitem-1153-textEl').html('前往...')
                $('#menuitem-1154-textEl').html('刷新')
                $('#menuitem-1156-textEl').html('复制到剪贴板')
                $('#menuitem-1158-textEl').html('当前路径')
                $('#menuitem-1159-textEl').html('文件名')
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
            $('#top-panel-search-text-btnInnerEl').html('搜索内容')
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
            
            $('#hot-button-view-btnInnerEl').html('查看[Ctrl + 3]')
            $('#hot-button-edt-btnInnerEl').html('编辑[Ctrl + 4]')
            $('#hot-button-copy-btnInnerEl').html('复制[Ctrl + 5]')
            $('#hot-button-move-btnInnerEl').html('移动[Ctrl + 5]')
            $('#hot-button-rename-btnInnerEl').html('重命名[Ctrl + 6]')
            $('#hot-button-mkdir-btnInnerEl').html('新建文件夹[Ctrl + 7]')
            $('#hot-button-remove-btnInnerEl').html('删除[Ctrl + 8]')
        }
    }
    t = setInterval(main, 500);
}) ();
