(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8e2f0f53"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"29e92810"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b34":function(e,t,n){},1158:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout-wrapper"},[r("div",{staticClass:"page-topbar bg-white"},[r("router-link",{attrs:{to:"/"}},[r("span",[r("img",{attrs:{src:n("b8fb"),alt:"",height:"50"}})])])],1),r("b-container",{staticClass:"h-100",attrs:{fluid:""}},[r("b-row",{staticClass:"h-100"},[r("b-col",{staticClass:"bg-warning py-5 px-4 d-none d-md-block",attrs:{cols:"3"}},[r("b-nav",{attrs:{vertical:"",pills:""}},[r("b-button",{staticClass:"w-100",attrs:{variant:"dark"},on:{click:e.onClickAccountSearchButton}},[e._v("Account Search")])],1)],1),r("b-col",{staticClass:"p-5",attrs:{col:""}},[e._t("default")],2)],1)],1)],1)},a=[],o=n("2b0e"),c=o["default"].extend({name:"MainLayout",methods:{onClickAccountSearchButton:function(){this.$router.push({name:"UserSearchPage"})}}}),u=c,i=(n("a5fa"),n("2877")),s=Object(i["a"])(u,r,a,!1,null,"27413fe2",null);t["a"]=s.exports},"3d87":function(e,t,n){},"6de3":function(e,t,n){"use strict";n("3d87")},"864b":function(e,t,n){},8742:function(e,t,n){"use strict";n("0b34")},9455:function(e,t,n){},a5fa:function(e,t,n){"use strict";n("864b")},b8fb:function(e,t,n){e.exports=n.p+"img/money-forward-logo.0f4756f4.png"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Loading",{ref:"loadingRef"}),n("NotificationModal",{ref:"notificationModalRef"}),n("router-view")],1)},o=[],c=n("1da1"),u=(n("d3b7"),n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"loader-overlay"},[e._m(0)])}),i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"half-circle-spinner"},[n("div",{staticClass:"circle circle-1"}),n("div",{staticClass:"circle circle-2"})])}],s=r["default"].extend({name:"Loading",data:function(){return{isLoading:!1,loadingCount:0}},methods:{progressOn:function(){0===this.loadingCount&&(this.isLoading=!0),this.loadingCount++},progressOff:function(){this.loadingCount--,0===this.loadingCount&&(this.isLoading=!1)}}}),l=s,f=(n("6de3"),n("2877")),p=Object(f["a"])(l,u,i,!1,null,"4968bf60",null),d=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("b-modal",{attrs:{title:e.content.title,centered:""},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{variant:"secondary"},on:{click:e.close}},[e._v("Close")])]},proxy:!0}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("p",{staticClass:"mb-2"},[e._v(" "+e._s(e.content.body)+" ")])])],1)},b=[],m=r["default"].extend({name:"NotificationModal",data:function(){return{show:!1,content:{title:"",body:""}}},methods:{open:function(e){e&&(this.content=e),this.show=!0},close:function(){this.show=!1}}}),v=m,g=Object(f["a"])(v,h,b,!1,null,"0093870a",null),y=g.exports,w=n("d4ec"),x=n("bee2"),k=(n("99af"),n("bc3a")),S=n.n(k),C=S.a.create({baseURL:"https://sample-accounts-api.herokuapp.com"}),O=function(){function e(){Object(w["a"])(this,e)}return Object(x["a"])(e,null,[{key:"resource",get:function(){throw new Error("Resource getter is not defined!")}},{key:"errorHandler",value:function(){var e,t=new r["default"];null===(e=t.$loading)||void 0===e||e.progressOff()}},{key:"responseWrapper",value:function(e){return e.data}},{key:"get",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("".concat(this.resource,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.responseWrapper(n));case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandler();case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),_=r["default"].extend({name:"App",components:{Loading:d,NotificationModal:y},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setupAxiosInterceptors(),e.buildCommonComponentToRoot();case 2:case"end":return t.stop()}}),t)})))()},methods:{setupAxiosInterceptors:function(){var e=this;C.interceptors.request.use((function(t){return e.$refs.loadingRef.progressOn(),t}),(function(t){return e.$refs.loadingRef.progressOff(),Promise.reject(t)})),C.interceptors.response.use((function(t){return e.$refs.loadingRef.progressOff(),t}))},buildCommonComponentToRoot:function(){var e=this;Object.defineProperty(this.$root,"notify",{get:function(){return e.$refs.notificationModalRef}}),Object.defineProperty(r["default"].prototype,"$loading",{get:function(){return e.$refs.loadingRef}})}}}),j=_,R=Object(f["a"])(j,a,o,!1,null,null,null),L=R.exports,A=(n("3ca3"),n("ddb0"),n("8c4f")),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MainLayout",[n("b-input-group",{staticClass:"account-input-group mb-3",attrs:{size:"md"}},[n("b-form-input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{state:e.rule,placeholder:"Type user_id to search","aria-describedby":"input-live-help input-live-feedback"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClickSearchButton.apply(null,arguments)}},model:{value:e.textSearch,callback:function(t){e.textSearch=t},expression:"textSearch"}}),n("b-input-group-append",[n("b-button",{attrs:{size:"md",text:"Button",variant:"dark",disabled:!e.rule},on:{click:e.onClickSearchButton}},[e._v("Search")])],1),n("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[e._v(" You can't search with an empty text! ")])],1)],1)},T=[],U=n("1158"),$=r["default"].extend({name:"UserSearchPage",components:{MainLayout:U["a"]},directives:{focus:{inserted:function(e){e.focus()}}},data:function(){return{textSearch:"",isTouched:!1}},computed:{rule:function(){return this.isTouched?Boolean(this.textSearch):null}},created:function(){this.setupSearchInputWatcher()},methods:{onClickSearchButton:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("setCurrentSearchUserAccountList",e.textSearch);case 2:if(e.$store.getters.currentSearchUserAccountList.length){t.next=4;break}return t.abrupt("return",e.$root.notify.open({title:"Notice",body:"No user is found!"}));case 4:e.$router.push("/users/".concat(e.textSearch));case 5:case"end":return t.stop()}}),t)})))()},setupSearchInputWatcher:function(){var e=this,t=this.$watch("textSearch",(function(){e.isTouched=!0,t()}))}}}),P=$,N=(n("8742"),Object(f["a"])(P,E,T,!1,null,"a394e7f6",null)),M=N.exports;r["default"].use(A["a"]);var B=[{path:"/",redirect:"/users"},{path:"/users",name:"UserSearchPage",component:M},{path:"/users/:id",name:"UserAccountListPage",component:function(){return n.e("about").then(n.bind(null,"8719"))}},{path:"*",name:"404Page",component:function(){return n.e("about").then(n.bind(null,"9310"))}}],I=new A["a"]({mode:"history",base:"/",routes:B}),H=I,W=(n("d81d"),n("2f62")),q=n("262e"),D=n("2caf"),z=function(e){Object(q["a"])(n,e);var t=Object(D["a"])(n);function n(){return Object(w["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,null,[{key:"resource",get:function(){return"/accounts"}},{key:"getAccountDetail",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(O),J=function(e){Object(q["a"])(n,e);var t=Object(D["a"])(n);function n(){return Object(w["a"])(this,n),t.apply(this,arguments)}return Object(x["a"])(n,null,[{key:"resource",get:function(){return"/users"}},{key:"getUser",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getUserAccountList",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("".concat(this.resource,"/").concat(t,"/accounts"));case 3:return n=e.sent,e.abrupt("return",this.responseWrapper(n));case 7:e.prev=7,e.t0=e["catch"](0),this.errorHandler();case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(O),F={accountService:z,userService:J};r["default"].use(W["a"]);var K=new W["a"].Store({state:{currentSearchUserAccountList:[]},getters:{currentSearchUserAccountList:function(e){return e.currentSearchUserAccountList.map((function(e){return e.attributes}))}},mutations:{SET_CURRENT_SEARCH_USER_ACCOUNT_LIST:function(e,t){e.currentSearchUserAccountList=t}},actions:{setCurrentSearchUserAccountList:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,F.userService.getUserAccountList(t);case 3:if(n.t0=n.sent,n.t0){n.next=6;break}n.t0=[];case 6:a=n.t0,r("SET_CURRENT_SEARCH_USER_ACCOUNT_LIST",a);case 8:case"end":return n.stop()}}),n)})))()}},modules:{}}),Y=n("5f5b");n("f9e3"),n("2dd8"),n("9455");r["default"].use(Y["a"]),r["default"].config.productionTip=!1,Object.defineProperty(r["default"].prototype,"$api",{get:function(){return F}}),new r["default"]({router:H,store:K,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.c81f341b.js.map