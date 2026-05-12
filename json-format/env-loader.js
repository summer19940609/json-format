var ENV_CONFIG = {};
(function(){
  try {
    var r = new XMLHttpRequest();
    r.open('GET', chrome.runtime.getURL('.env'), false);
    r.send();
    if (r.status === 200) {
      r.responseText.split('\n').forEach(function(line){
        var i = line.indexOf('=');
        if (i > 0) {
          var k = line.substring(0, i).trim();
          var v = line.substring(i + 1).trim();
          if (k && v) ENV_CONFIG[k] = v;
        }
      });
    }
  } catch(e) {
    console.warn('环境变量加载失败，请在 .env 文件中配置', e);
  }
})();
