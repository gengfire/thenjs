var startTime = new Date().getTime(),
errorPage = '/?/common/error',
suffix = 'html',
log = function(obj){console.log(obj)},
router=function(){
  if(window.location.search!==''){
    var search = window.location.search.substring(2);
    search = search.indexOf('&')<0?search:search.split('&')[0];
    search = search.indexOf('/')<0?search+'/':search;
    search = search.split('/')[1]==''?search+'index':search;
    search = search.split('/')[0]+'/'+search.split('/')[1]
    return search;
  }
  return 'home/index';
};
var C = 'App/Controllor/'+router(),
V = 'App/View/'+router()+'.'+suffix;

seajs.use(C, function(c){
  if(c==null) window.location.href=errorPage
});