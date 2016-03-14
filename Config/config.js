var ROOT = './',
paths = {
  'M'      : 'Lib/model',
  'conf'   : 'Config',
  'jquery' : 'Lib/jquery',
  'tools'  : 'Lib/tools'
},
alias = {
  'model'   : 'M/model.min',     //*required
  'view'    : 'M/view.min',      //*required
  'jquery'  : 'jquery/jquery',
  'mufn'    : 'tools/mufn',
  'mualert' : 'tools/mualert'
},
now = function(){
  return Math.round((new Date()).getTime()/1000);
}

seajs.config({
  base: ROOT,
  paths: paths,
  alias: alias,
  vars: {},
  map: [
    ['.js', '.js?v=' + now()]
  ],
  preload: [
    'model', 'view'
  ],
  debug: true,
  charset: 'utf-8'
});
seajs.use('conf/common');