!function(){"use strict";const t=["name","domain","value","path","secure","httpOnly","expirationDate"],e={get:function(e,o){chrome.cookies.getAll({url:e},function(e){let i=e.map(e=>n(e,t));o(i)})},setExpirationDate:function(t,e){const n=(e||Date.now())/1e3;return t.map(t=>Object.assign(t,{expirationDate:n}))},set:function(e,o){o.forEach(function(o){let i=Object.assign({url:e},n(o,t));chrome.cookies.set(i)})}};function n(t,e){let n={};return e.forEach(e=>n[e]=t[e]),n}window.cookieManager=e}();