!function(){"use strict";var n={publicKey:null,privateKey:null,sessions:{},hasSessions:!1},t={DEFAULT:n,forEachDefault:function(t){for(var e in n)t(e,n[e])},get:function(t,e){"function"==typeof t?(e=t,chrome.storage.sync.get(n,e)):chrome.storage.sync.get(t,function(o){let c=[],i={};"string"==typeof t?i[t]=null:i=Object.assign({},t),c=Object.keys(i).map(function(t){return o[t]||n[t]}),e.apply(null,c)})},set:function(n,t){chrome.storage.sync.set(n,t)},onChanged:function(n){chrome.storage.onChanged.addListener(function(t,e){n(t)})},forEachCurrent:function(n){t.get(function(t){for(var e in t)n(e,t[e])})}};window.configuration=t}();