define(function(require, exports, module) {
    var mualert = require('mualert');
    mualert.loading();
    D('/index.php').data({"name":"sss","age":22}).select().then(function(data){
        return data;
    }).then(function(data){
        display(V, data);
    });
});