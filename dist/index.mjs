import{useState as t}from"react";import e from"onegraph-auth";var r,n=function(n,o){var i=t(!1),u=i[0],c=i[1],a=function(t){return r||(r=new e({appId:t})),r}(o);return{login:function(t){void 0===t&&(t=n);try{return Promise.resolve(a.login(t)).then(function(){return Promise.resolve(a.isLoggedIn(t)).then(function(t){c(t)})})}catch(t){return Promise.reject(t)}},logout:function(t){void 0===t&&(t=n);try{return Promise.resolve(a.logout(t)).then(function(){c({authenticated:!1})})}catch(t){return Promise.reject(t)}},authenticated:u,client:a}};export{n as useOneGraphAuth};
//# sourceMappingURL=index.mjs.map
