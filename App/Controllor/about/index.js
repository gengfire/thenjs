define(function(require, exports, module) {
    var $ = require("jquery");
    var config = require('/Public/ueditor/ueditor.config.js');
    var UE = require('/Public/ueditor/ueditor.all.min.js');
    var lang = require('/Public/ueditor/lang/zh-cn/zh-cn.js');

    display(V,{title:'about'},document.body).then(function(d){
        console.log(d);
        var ue = UE.getEditor("editor",{
            toolbars: [['emotion', '|', 'simpleupload', '|', 'insertvideo']],
            elementPathEnabled:false,
            initialFrameHeight:150,
            initialStyle: "p{line-height:1em;font-size: 14px;}",
            maximumWords:600
        });

        $('#btn').click(function(){
            window.location.href='/?/home/index';
        });
    });
});