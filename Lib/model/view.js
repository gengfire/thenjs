/*powerby thenjs.com*/
(function(window){
    var mutpl = (function(){
        var mutpl=function(c,a,b){
            function aa(b){return b.replace(G,"").replace(F,",").replace(E,"").replace(D,"").replace(C,"").split(B)}function Z(b){return"'"+b.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}
            function Y(au,at){function ar(c){return aj+=c.split(/\n/).length-1,al&&(c=c.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),c&&(c=ae[1]+Z(c)+ae[2]+"\n"),c}function aq(d){var i=aj;if(am?d=am(d,at):ap&&(d=d.replace(/\n/g,function(){return aj++,"$line="+aj+";"})),0===d.indexOf("=")){var h=ak&&!/^=[=#]/.test(d);if(d=d.replace(/^=[=#]?|[\s;]*$/g,""),h){var g=d.replace(/\s*\([^\)]+\)/,"");M[g]||/^(include|print)$/.test(g)||(d="$escape("+d+")")}else{d="$string("+d+")"}d=ae[1]+d+ae[2]}return ap&&(d="$line="+i+";"+d),I(aa(d),function(e){if(e&&!ai[e]){var c;c="print"===e?ac:"include"===e?r:M[e]?"$utils."+e:L[e]?"$helpers."+e:"$data."+e,o+=e+"="+c+",",ai[e]=!0}}),d+"\n"}var ap=at.debug,ao=at.openTag,an=at.closeTag,am=at.parser,al=at.compress,ak=at.escape,aj=1,ai={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},ag="".trim,ae=ag?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],ad=ag?"$out+=text;return $out;":"$out.push(text);",ac="function(){var text=''.concat.apply('',arguments);"+ad+"}",r="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+ad+"}",o="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(ap?"$line=0,":""),n=ae[0],b="return new String("+ae[3]+");";I(au.split(ao),function(e){e=e.split(an);var d=e[0],f=e[1];1===e.length?n+=ar(d):(n+=aq(d),f&&(n+=ar(f)))});var a=o+n+b;ap&&(a="try{"+a+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+Z(au)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var ah=new Function("$data","$filename",a);return ah.prototype=M,ah}catch(af){throw af.temp="function anonymous($data,$filename) {"+a+"}",af}}
            var W=function(d,c){return"string"==typeof c?J(c,{filename:d}):T(d,c)};W.version="3.0.0",W.config=function(d,c){V[d]=c};var V=W.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},U=W.cache={};W.render=function(d,c){return J(d,c)};var T=W.renderFile=function(e,d){var f=W.get(e)||K({filename:e,name:"Render Error",message:"Template not found"});return d?f(d):f};W.get=function(f){var e;if(U[f]){e=U[f]}else{if("object"==typeof document){var h=document.getElementById(f);if(h){var g=(h.value||h.innerHTML).replace(/^\s*|\s*$/g,"");e=J(g,{filename:f})}}}return e};var S=function(d,c){return"string"!=typeof d&&(c=typeof d,"number"===c?d+="":d="function"===c?S(d.call(d)):""),d},R={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},Q=function(b){return R[b]},P=function(b){return S(b).replace(/&(?![\w#]+;)|[<>"']/g,Q)},O=Array.isArray||function(b){return"[object Array]"==={}.toString.call(b)},N=function(f,e){var h,g;if(O(f)){for(h=0,g=f.length;g>h;h++){e.call(f,f[h],h,f)}}else{for(h in f){e.call(f,f[h],h)}}},M=W.utils={$helpers:{},$include:T,$string:S,$escape:P,$each:N};W.helper=function(d,c){L[d]=c};var L=W.helpers=M.$helpers;W.onerror=function(e){var d="Template Error\n\n";for(var f in e){d+="<"+f+">\n"+e[f]+"\n\n"}"object"==typeof console&&console.error(d)};var K=function(b){return W.onerror(b),function(){return"{Template Error}"}},J=W.compile=function(e,c){function n(b){try{return new k(b,l)+""}catch(a){return c.debug?K(a)():(c.debug=!0,J(e,c)(b))}}c=c||{};for(var m in V){void 0===c[m]&&(c[m]=V[m])}var l=c.filename;try{var k=Y(e,c)}catch(f){return f.filename=l||"anonymous",f.name="Syntax Error",K(f)}return n.prototype=k.prototype,n.toString=function(){return k.toString()},l&&c.cache&&(U[l]=n),n},I=M.$each,H="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",G=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,F=/[^\w$]+/g,E=new RegExp(["\\b"+H.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),D=/^\d[^,]*|,\d[^,]*/g,C=/^,+|,+$/g,B=/^$|,+/;V.openTag="{{",V.closeTag="}}";var A=function(g,f){var j=f.split(":"),i=j.shift(),h=j.join(":")||"";return h&&(h=", "+h),"$helpers."+i+"("+g+h+")"};V.parser=function(ad){ad=ad.replace(/^\s/,"");var ac=ad.split(" "),z=ac.shift(),y=ac.join(" ");switch(z){case"if":ad="if("+y+"){";break;case"else":ac="if"===ac.shift()?" if("+ac.join(" ")+")":"",ad="}else"+ac+"{";break;case"/if":ad="}";break;case"each":var x=ac[0]||"$data",w=ac[1]||"as",v=ac[2]||"$value",u=ac[3]||"$index",t=v+","+u;"as"!==w&&(x="[]"),ad="$each("+x+",function("+t+"){";break;case"/each":ad="});";break;case"echo":ad="print("+y+");";break;case"print":case"include":ad=z+"("+ac.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(y)){var s=!0;0===ad.indexOf("#")&&(ad=ad.substr(1),s=!1);for(var r=0,q=ad.split("|"),p=q.length,d=q[r++];p>r;r++){d=A(d,q[r])}ad=(s?"=":"=#")+d}else{ad=W.helpers[z]?"=#"+z+"("+ac.join(",")+");":"="+ad}}return ad};
            
            var X=function(a,c){
                var b=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
                b.open("GET",a,true);b.send();
                b.onreadystatechange=function(){
                    if(4 === b.readyState){
                        if (b.status > 399 && b.status < 600){
                            window.location.href=errorPage;
                            throw new Error("Could not Loadfile: " + a + ", status = " + c.status);
                        }else if(b.status==200){
                            c(b.responseText);
                        }
                    }
                };
            };
            var b=b||'';b=b[0]!==undefined?b[0]:b;
            var toHTML = function(d){
                var e=W.compile(d);
                b.innerHTML=e(a);
                if(b==''){document.write(e(a));}
                console.log(new Date().getTime() - startTime);
            }
            var whenjs=(function(){var b=function(){},e,c="then done fail isResolved isRejected promise".split(" "),d=Object.prototype.toString,a={};b.extend=function(){var p,h,f,g,m,n,l=arguments[0]||{},k=1,j=arguments.length,o=false;if(typeof l==="boolean"){o=l;l=arguments[1]||{};k=2}if(typeof l!=="object"&&!b.isFunction(l)){l={}}if(j===k){l=this;--k}for(;k<j;k++){if((p=arguments[k])!=null){for(h in p){f=l[h];g=p[h];if(l===g){continue}if(o&&g&&(b.isPlainObject(g)||(m=b.isArray(g)))){if(m){m=false;n=f&&b.isArray(f)?f:[]}else{n=f&&b.isPlainObject(f)?f:{}}l[h]=b.extend(o,n,g)}else{if(g!==undefined){l[h]=g}}}}}return l};b.extend({isFunction:function(f){return b.type(f)==="function"},type:function(f){return f==null?String(f):a[d.call(f)]||"object"},each:function(j,n,h){var g,k=0,l=j.length,f=l===undefined||b.isFunction(j);if(h){if(f){for(g in j){if(n.apply(j[g],h)===false){break}}}else{for(;k<l;){if(n.apply(j[k++],h)===false){break}}}}else{if(f){for(g in j){if(n.call(j[g],g,j[g])===false){break}}}else{for(var m=j[0];k<l&&n.call(m,k,m)!==false;m=j[++k]){}}}return j},_Deferred:function(){var i=[],j,g,h,f={done:function(){if(!h){var l=arguments,m,p,o,n,k;if(j){k=j;j=0}for(m=0,p=l.length;m<p;m++){o=l[m];n=b.type(o);if(n==="array"){f.done.apply(f,o)}else{if(n==="function"){i.push(o)}}}if(k){f.resolveWith(k[0],k[1])}}return this},resolveWith:function(l,k){if(!h&&!j&&!g){g=1;try{while(i[0]){i.shift().apply(l,k)}}catch(m){throw m}finally{j=[l,k];g=0}}return this},resolve:function(){f.resolveWith(b.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return !!(g||j)},cancel:function(){h=1;i=[];return this}};return f},Deferred:function(g){var f=b._Deferred(),i=b._Deferred(),h;b.extend(f,{then:function(k,j){f.done(k).fail(j);return this},fail:i.done,rejectWith:i.resolveWith,reject:i.resolve,isRejected:i.isResolved,promise:function(k){if(k==null){if(h){return h}h=k={}}var j=c.length;while(j--){k[c[j]]=f[c[j]]}return k}});f.done(i.cancel).fail(f.cancel);delete f.cancel;if(g){g.call(f,f)}return f},when:function(g){var l=arguments.length,f=l<=1&&g&&b.isFunction(g.promise)?g:b.Deferred(),j=f.promise();if(l>1){var k=slice.call(arguments,0),i=l,h=function(m){return function(n){k[m]=arguments.length>1?slice.call(arguments,0):n;if(!(--i)){f.resolveWith(j,k)}}};while((l--)){g=k[l];if(g&&b.isFunction(g.promise)){g.promise().then(h(l),f.reject)}else{--i}}if(!i){f.resolveWith(j,k)}}else{if(f!==g){f.resolve(g)}}return j}});e=b._Deferred();b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(g,f){a["[object "+f+"]"]=f.toLowerCase()});return b})();
            var defe = whenjs.Deferred();

            X(c,function(d){
                allLoad = d.match(/<Loadfile=\"([^\"]*)\">/g);
                if(allLoad!==null){
                    var cArr = c.split('/');cArr.pop();cArr.push('');
              　　　var length = allLoad.length-1;
                    function digui(i){
                        if(i>length) return
                        var path = allLoad[i].split('<Loadfile="')[1].split('">')[0]+'.'+suffix;
                        path = cArr.join('/')+path;
                        X(path, function(secData){
                            d = d.replace(allLoad[i], secData);
                            if(d.indexOf('<Loadfile="')<0){toHTML(d);defe.resolve(d);}
                            i++;digui(i);
                        });
                    }
                    digui(0);
                }else{
                    toHTML(d);
                    defe.resolve(d);
                }
            });
            return defe.promise();
        };
        return mutpl;
    })();
    window.display = mutpl;
})(window);