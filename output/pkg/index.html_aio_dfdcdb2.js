var require,define;!function(e){if(!require){var r=document.getElementsByTagName("head")[0],t={},n={},i={},a={},o={},s={},u=function(e,t){if(!(e in a)){a[e]=!0;var n=document.createElement("script");if(t){var i=setTimeout(t,require.timeout);n.onerror=function(){clearTimeout(i),t()};var o=function(){clearTimeout(i)};"onload"in n?n.onload=o:n.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&o()}}return n.type="text/javascript",n.src=e,r.appendChild(n),n}},c=function(e,r,n){var i=t[e]||(t[e]=[]);i.push(r);var a,c=o[e]||o[e+".js"]||{},l=c.pkg;a=l?s[l].url:c.url||e,u(a,n&&function(){n(e)})};define=function(e,r){e=e.replace(/\.js$/i,""),n[e]=r;var i=t[e];if(i){for(var a=0,o=i.length;o>a;a++)i[a]();delete t[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=i[e];if(r)return r.exports;var t=n[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=i[e]={exports:{}};var a="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return a&&(r.exports=a),r.exports&&!r.exports["default"]&&(r.exports["default"]=r.exports),r.exports},require.async=function(r,t,i){function a(e){for(var r,t=0,p=e.length;p>t;t++){var f=require.alias(e[t]);f in n?(r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps)):f in u||(u[f]=!0,l++,c(f,s,i),r=o[f]||o[f+".js"],r&&"deps"in r&&a(r.deps))}}function s(){if(0===l--){for(var n=[],i=0,a=r.length;a>i;i++)n[i]=require(r[i]);t&&t.apply(e,n)}}"string"==typeof r&&(r=[r]);var u={},l=0;a(r),s()},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(s[r]=t[r])},require.loadJs=function(e){u(e)},require.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,r.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",r.appendChild(n)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3}}(this);
require.resourceMap({
  "res": {
    "modules/app/index": {
      "url": "http://www.jinjiedu.com//public/app/index_dc0910d.js",
      "type": "js",
      "pkg": "p4"
    }
  },
  "pkg": {
    "p4": {
      "url": "http://www.jinjiedu.com//pkg/pages_9e701ba.js",
      "type": "js"
    }
  }
});
