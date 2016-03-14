/*! mufn v1.1  | mumoon.cn/license */
!function(){
    var mufn = {
        touchfn: function(obj, startfn, movefn, endfn, ismove){
            var obj = obj[0], startX, startY, moveX, moveY, endX, endY, diffX, diffY, startTime;
            var ismove = ismove || 8695;
            function touchEvent(ev) {
                var event = ev || event;
                switch (event.type) {
                case "touchstart":
                    if(ismove==8695) event.preventDefault();
                    startTime =  new Date().getTime();
                    startX = event.touches[0].clientX;
                    startY = event.touches[0].clientY;
                    startfn && startfn(startX, startY);
                    break;
                case "touchmove":
                    if(ismove==8695) event.preventDefault();
                    moveX = event.touches[0].clientX;
                    moveY = event.touches[0].clientY;
                    diffX =  moveX - startX;
                    diffY =  moveY - startY;
                    movefn && movefn(diffX, diffY, moveX);
                    break;
                case "touchend":
                    if(ismove==8695) event.preventDefault();
                    var diffTime = new Date().getTime() - startTime;
                    endp = event.changedTouches[0].clientX;
                    endX = event.changedTouches[0].clientX - startX;
                    endY = event.changedTouches[0].clientY - startY;
                    var speed =  Math.abs(1000 * endY/diffTime);  
                    endfn && endfn(endX, endY, endp, speed);
                    break;
                }
            }
            obj.addEventListener("touchstart", touchEvent, false);
            obj.addEventListener("touchmove", touchEvent, false);
            obj.addEventListener("touchend", touchEvent, false);
        },
        tap : function(obj, fn){
            //console.log(obj);
            if(obj!==undefined){
                var obj = obj[0], startX, startY, moveX, moveY, isMove;
                function touchEvent(ev){
                    var event = ev || event;
                    switch (event.type){
                    case "touchstart":
                        isMove = 0;
                        break;
                    case "touchmove":
                        moveX = event.touches[0].clientX;
                        moveY = event.touches[0].clientY;
                        if(moveX + moveY - startX - startY!==0){
                            isMove = 1;
                        }
                        break;
                    case "touchend":
                        if(!isMove){
                            fn(event);
                        }
                        break;
                    }
                }
                obj.addEventListener("touchstart", touchEvent, false);
                obj.addEventListener("touchmove", touchEvent, false);
                obj.addEventListener("touchend", touchEvent, false);
            }
        },
        urlParam: function(url, name, defaul){
            var defaul = defaul||null;
            var reg = new RegExp("(^|&)" +name+ "=([^&]*)(&|$)","i");
            var r = url.substr(1).match(reg);
            if(r!= null){
                return decodeURI(r[2]);
            }else{
                return defaul;
            }
        },
        _get : function(param, defaul){
            return mufn.urlParam(window.location.search, param, defaul);
        },
        router : function(){
            var hash = window.location.hash.substring(1);
            hash = hash.indexOf('?')<0?hash:hash.split('?')[0];
            hash = hash.indexOf('&')<0?hash:hash.split('&')[0];
            return hash.split('/');
        },
        unixTime: function(){
            return Math.round((new Date()).getTime()/1000);
        },
        unixFormat: function(datetime, mdhi) {
            var mdhi = mdhi || 0;
            var date = new Date(datetime * 1000),
            y = date.getFullYear(),
            m = mufn.numFix(date.getMonth() + 1),
            d = mufn.numFix(date.getDate()),
            h = mufn.numFix(date.getHours()),
            i = mufn.numFix(date.getMinutes()),
            s = mufn.numFix(date.getSeconds()),
            newdate;
            if(mdhi==0){
                newdate = y + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;
            }else if(mdhi==1){
                newdate = m + "-" + d + " " + h + ":" + i;
            }else if(mdhi==2){
                newdate = y + "-" + m + "-" + d;
            }else if(mdhi==3){
                newdate = y + "-" + m + "-" + d + " " + h + ":" + i;
            }
            return newdate;
        },
        unix2sample: function(datetime){
            var date = new Date(datetime * 1000),
            y = date.getFullYear(),
            m = date.getMonth() + 1,
            d = date.getDate(),
            h = mufn.numFix(date.getHours()),
            i = mufn.numFix(date.getMinutes()),
            s = mufn.numFix(date.getSeconds()),
            newdate;
            noonOr = (h<12) ? '上午'+h : '下午'+(h-12);
            newdate = m + "月" + d + "日 "+ noonOr + ":" + i;
            return newdate;
        },
        bv: function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            var versions={
                ie: u.indexOf('Trident') > -1, //IE内核
                opera: u.indexOf('Presto') > -1,   //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                Chrome : u.indexOf('Chrome') > -1, //谷歌浏览器
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端,转boolean
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                Safari: u.indexOf('Safari') > -1, //是否为Safari浏览器
                language:(navigator.browserLanguage || navigator.language).toLowerCase(),
                weChat: u.indexOf('MicroMessenger') > -1,
            };
            return versions;
        },
        exist: function(str, obj) {
            var ret = str.indexOf(obj);
            return (ret < 0) ? 0 : 1;
        },
        rand: function(min, max) {
            var diff = max - min;
            return Math.round(Math.random() * diff + min);
        },
        jiequ: function(sStr, eStr, oldStr) {
            var sStr = sStr || ' ',
            eStr = eStr || ' ',
            sNum = (oldStr.indexOf(sStr) < 0) ? 0 : oldStr.indexOf(sStr) + sStr.length,
            eNum = (oldStr.indexOf(eStr) < 0) ? oldStr.length: oldStr.indexOf(eStr);
            return (sNum == 0 && eNum == oldStr.length) ? "Cannot Find It": oldStr.substring(sNum, eNum);
        },
        cutstr: function(str, len, endMark){
            var strLen = str.length, len = len || 10, endMark = endMark||'', strNow=0;
            if(strLen > len){
                str_cut = new String();
                for (var i = 0; i < strLen; i++) {
                    a = str.charAt(i);
                    strNow++;
                    if (escape(a).length > 4) strNow++;
                    str_cut = str_cut.concat(a);
                    if (strNow >= len) {
                        str_cut = str_cut.concat(endMark);
                        return str_cut;
                    }
                }
            }else{
                return str;
            }
        },
        print_r: function (obj){
            if(typeof(obj) !== 'object'){
                var obj = JSON.parse(obj);
            }
            var temp = '';
            if (typeof obj == 'object'){
                temp += '<ul>';
                for (var i in obj) {
                    if (typeof obj[i] == 'object') {
                        temp += '<li>['+i+'] => ' + typeof(obj);
                        temp += this.print_r(obj[i]) + '</li>';
                    } else {
                        temp += '<li>['+i+'] => ' + obj[i] + '</li>';
                    }
                }
                temp += '</ul>';
            }
            return temp;
        },
        sort : function(arr){
            var len = arr.length;
        　　if(len <= 1) return arr;
        　　var midKey = Math.floor(len / 2);
        　　var midVal = arr.splice(midKey, 1)[0];
        　　var left = [], right = [], len2 = arr.length;
        　　for(var i = 0; i < arr.length; i++){
        　　　　if (arr[i] < midVal) {
        　　　　　　left.push(arr[i]);
        　　　　}else{
        　　　　　　right.push(arr[i]);
        　　　　}
        　　}
        　　return sort(left).concat([midVal], sort(right));
        },
        iosSelect : function(selecObj, selcUl, callback){
            var min = parseInt(selcUl.get(0).offsetLeft);
            var max = min + parseInt(selcUl.width());
            var liHeight = selcUl.find('li').eq(0).height();
            var liSize = 0, ulY = 0;
            this.touchfn(selecObj, function(){
                ulY = parseInt(selcUl.attr('data'));
                liSize = selcUl.find('li').size();
            },function(diffX, diffY, movep){
                if(movep > min && movep < max){
                    var move = ulY + diffY;
                    selcUl.attr('data',move).removeAttr('style').css({
                        '-webkit-transform':'translateY('+move+'px)'
                    });
                }
            },function(endX, endY, endp, speed){
                if(endp > min && endp < max){
                    var numAfter = (speed > 500) ? Math.floor(speed/200) : 1;
                    var duration = (speed > 500) ? '0.8s' : '0.3s';
                    var move = ulY + (numAfter * endY);
                    var moveSize =  Math.floor(move/liHeight);
                    var index = moveSize<(1-liSize)?(1-liSize):moveSize>0?0:moveSize;
                    move = index * liHeight;
                    selcUl.attr('data',move).removeAttr('style').css({
                        '-webkit-transform':'translateY('+move+'px)',
                        '-webkit-transition-duration': duration
                    });
                    var seleCur = Math.abs(index);
                    selcUl.find('li').removeAttr('style');
                    selcUl.find('li').eq(seleCur).css('font-size','34px');
                    callback(index, endY);
                }
            });
        },
        numFix : function(num){
            return ((''+num).length < 2) ? '0'+num : ''+num;
        },
        timeUsed : function(ele, callback){
            var time = 0;
            var startTime = Math.floor(new Date().getTime()/1000);
            var timeUsed = setInterval(function(){
                var nowTime = Math.floor(new Date().getTime()/1000);
                var timeDiff = nowTime - startTime;
                var days = mufn.numFix(Math.floor(timeDiff/(60*60*24))); 
                var hour = mufn.numFix(Math.floor((timeDiff-days*24*60*60)/3600)); 
                var minute = mufn.numFix(Math.floor((timeDiff-days*24*60*60-hour*3600)/60)); 
                var second = mufn.numFix(Math.floor(timeDiff-days*24*60*60-hour*3600-minute*60));

                if(minute > 30){ //超过半个小时
                    window.clearInterval(timeUsed);
                    callback();
                }
                var timeHtml = minute+':'+second;
                document.getElementById(ele).innerHTML = timeHtml;
            }, 500); 
        },
        timeLeft : function(ele, endtime, callback){
            var time = 0;
            var endtime = Math.floor(new Date().getTime()/1000) + parseInt(endtime);
            function numFix(num){
              return ((''+num).length < 2) ? '0'+num : ''+num;
            }
            var timeLeft = setInterval(function(){
                var nowTime = Math.floor(new Date().getTime()/1000);
                var timeDiff = endtime - nowTime;
                var days = mufn.numFix(Math.floor(timeDiff/(60*60*24))); 
                var hour = mufn.numFix(Math.floor((timeDiff-days*24*60*60)/3600)); 
                var minute = mufn.numFix(Math.floor((timeDiff-days*24*60*60-hour*3600)/60)); 
                var second = mufn.numFix(Math.floor(timeDiff-days*24*60*60-hour*3600-minute*60));

                var timeHtml = '<i>'+days+'</i>天<i>'+hour+'</i>小时<i>'+minute+'</i>分<i>'+second+'</i>秒';
                document.getElementById(ele).innerHTML = timeHtml;

                if(timeDiff < 0){ //时间到
                    window.clearInterval(timeLeft);
                    callback();
                }
            }, 500);
        },
        extend : function(old, newObj, cover){
            var old = old;
            for(var p in newObj){
                if(newObj.hasOwnProperty(p) && (!old.hasOwnProperty(p) || cover)){
                    old[p] = newObj[p];
                }
            }
            return old;
        },
        save : function(item, str){
            if(typeof(str)=='object'){
                var str = JSON.stringify(str);
            }
            localStorage.removeItem(item);
            localStorage[item] = str;
        },
        get : function(item){
            var value = null;
            if(localStorage[item]!==undefined){
                value = localStorage[item];
                if(value.indexOf('{')==0){
                    value = JSON.parse(value);
                }
            }
            return value;
        },
        drop : function(item){
            localStorage.removeItem(item);
        },
        update : function(item, addObj){ //for Object
            var value = JSON.parse(localStorage[item]);
            value = mufn.extend(value, addObj, 1);//cover default
            localStorage[item] = JSON.stringify(value);
        },
        slideBlock :function(lineObj, dotObj, selcObj, startN, callback){
            var oriX, kpLineW = lineObj.width()-36, Dot = dotObj;
            var selcNum = selcObj.length-1;
            var startX = (startN-1)*(kpLineW/selcNum);
            Dot.attr('data-left',startX).css({'left':startX+'px','-webkit-transition':'left 400ms ease-out'});
            callback(startN);
            mufn.touchfn(Dot ,function(){
                oriX = Dot.attr('data-left');
                oriX = (oriX==undefined)?0:parseFloat(oriX);
            },function(diffX, diffY, moveX){
                var nowX = oriX+diffX;
                if(nowX <= kpLineW && nowX>=0){
                    Dot.attr('data-left',nowX).removeAttr('style').css('left', nowX+'px');
                    var curN = Math.ceil((nowX)/(kpLineW/selcNum));
                    console.log(curN);
                    callback(curN);
                }
            });
        }
        //
    };
    "function" == typeof define ? define(function(){return mufn}) : "undefined" != typeof exports ? module.exports = mufn: this.mufn = mufn;
}();