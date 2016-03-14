/***** powerby thenjs.com *****/
(function(window){
  var D = function(url){
    return url;
  }
  String.prototype.data = function(data){
      var url = this,data = data || '';
      if(data!==''){
          var tmp = [];
          for(var i in data){
            if(typeof(data[i])!=='function'){
              tmp.push(i+'='+data[i]);
            }
          }
          data = tmp.join('&');
        }
      return url+'+-+'+data;
  }
  String.prototype.find = String.prototype.select = function(){
    if(this.indexOf('+-+')>=0){
      var url = this.split("+-+")[0],data = this.split("+-+")[1];
    }else{
      var url = this,data = '';
    }
    var whenjs=(function(){var b=function(){},e,c="then done fail isResolved isRejected promise".split(" "),d=Object.prototype.toString,a={};b.extend=function(){var p,h,f,g,m,n,l=arguments[0]||{},k=1,j=arguments.length,o=false;if(typeof l==="boolean"){o=l;l=arguments[1]||{};k=2}if(typeof l!=="object"&&!b.isFunction(l)){l={}}if(j===k){l=this;--k}for(;k<j;k++){if((p=arguments[k])!=null){for(h in p){f=l[h];g=p[h];if(l===g){continue}if(o&&g&&(b.isPlainObject(g)||(m=b.isArray(g)))){if(m){m=false;n=f&&b.isArray(f)?f:[]}else{n=f&&b.isPlainObject(f)?f:{}}l[h]=b.extend(o,n,g)}else{if(g!==undefined){l[h]=g}}}}}return l};b.extend({isFunction:function(f){return b.type(f)==="function"},type:function(f){return f==null?String(f):a[d.call(f)]||"object"},each:function(j,n,h){var g,k=0,l=j.length,f=l===undefined||b.isFunction(j);if(h){if(f){for(g in j){if(n.apply(j[g],h)===false){break}}}else{for(;k<l;){if(n.apply(j[k++],h)===false){break}}}}else{if(f){for(g in j){if(n.call(j[g],g,j[g])===false){break}}}else{for(var m=j[0];k<l&&n.call(m,k,m)!==false;m=j[++k]){}}}return j},_Deferred:function(){var i=[],j,g,h,f={done:function(){if(!h){var l=arguments,m,p,o,n,k;if(j){k=j;j=0}for(m=0,p=l.length;m<p;m++){o=l[m];n=b.type(o);if(n==="array"){f.done.apply(f,o)}else{if(n==="function"){i.push(o)}}}if(k){f.resolveWith(k[0],k[1])}}return this},resolveWith:function(l,k){if(!h&&!j&&!g){g=1;try{while(i[0]){i.shift().apply(l,k)}}catch(m){throw m}finally{j=[l,k];g=0}}return this},resolve:function(){f.resolveWith(b.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return !!(g||j)},cancel:function(){h=1;i=[];return this}};return f},Deferred:function(g){var f=b._Deferred(),i=b._Deferred(),h;b.extend(f,{then:function(k,j){f.done(k).fail(j);return this},fail:i.done,rejectWith:i.resolveWith,reject:i.resolve,isRejected:i.isResolved,promise:function(k){if(k==null){if(h){return h}h=k={}}var j=c.length;while(j--){k[c[j]]=f[c[j]]}return k}});f.done(i.cancel).fail(f.cancel);delete f.cancel;if(g){g.call(f,f)}return f},when:function(g){var l=arguments.length,f=l<=1&&g&&b.isFunction(g.promise)?g:b.Deferred(),j=f.promise();if(l>1){var k=slice.call(arguments,0),i=l,h=function(m){return function(n){k[m]=arguments.length>1?slice.call(arguments,0):n;if(!(--i)){f.resolveWith(j,k)}}};while((l--)){g=k[l];if(g&&b.isFunction(g.promise)){g.promise().then(h(l),f.reject)}else{--i}}if(!i){f.resolveWith(j,k)}}else{if(f!==g){f.resolve(g)}}return j}});e=b._Deferred();b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(g,f){a["[object "+f+"]"]=f.toLowerCase()});return b})();

    var JSONparse = function(data){
      try{
        return JSON.parse(data);
      }catch(e){
        return eval('('+data+')');
      }
    }
    var post = function(url, data, callback){
      var xhr, data = data || '';
      xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xhr.send(data);
      xhr.onreadystatechange = function(){
        if(4===xhr.readyState){
          if(xhr.status==200){
            var data = typeof(xhr.responseText)=='string'?JSONparse(xhr.responseText):xhr.responseText;
            callback(data);
          }else if(xhr.status > 399 && xhr.status < 600){
              window.location.href=errorPage;
              throw new Error("Could not Loadfile: " + a + ", status = " + c.status);
          }
        }
      }
    }
    var wait = function(){
  　　　var defe = whenjs.Deferred();
  　　　post(url, data, function(ret){　
  　　　　defe.resolve(ret);
  　　　});　
  　　　return defe.promise();
  　};
    return wait();
  }
  window.D = D;
})(window);   