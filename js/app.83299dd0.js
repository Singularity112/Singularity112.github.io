(function(t){function e(e){for(var s,n,o=e[0],u=e[1],c=e[2],l=0,f=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var u=a[o];0!==i[u]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"344c":function(t,e,a){},"459e":function(t,e,a){},4966:function(t,e,a){"use strict";var s=a("6ab8"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.dialogs.length?a("div",{staticClass:"layout container"},[a("MessageBar"),a("DialogView")],1):a("div",{staticClass:"loader-container"},[a("div",{staticClass:"loader"})])])},r=[],n=a("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"messageBar"},[a("div",{staticClass:"messageBar-header"},[a("div",{staticClass:"messageBar-header-title"},[t._v(" Сообщения ")]),a("div",{staticClass:"messageBar-header-count"},[t._v(" "+t._s(t.dialogs.length||0)+" ")])]),a("div",{staticClass:"messageBar-items"},t._l(t.dialogs,(function(t){return a("Message",{key:t.id,attrs:{dialogData:t}})})),1)])},u=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message",class:t.activeClass,on:{click:function(e){return t.openDialog(t.dialogData.id)}}},[a("div",{staticClass:"message-heading"},[a("div",{staticClass:"message-heading-title"},[t._v(" "+t._s(t.dialogData.subject)+" ")]),a("div",{staticClass:"message-heading-date"},[t._v(" "+t._s(t._f("dateConverter")(t.dialogData.created))+" ")])]),a("div",{staticClass:"message-body"},[t._v(" "+t._s(t.dialogData.parts[0].text)+" ")])])},d=[],l=(a("99af"),["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"]),f={props:{dialogData:{type:Object,required:!0}},methods:{openDialog:function(t){this.$route.path!=="/dialog/".concat(t)&&this.$router.push({path:"/dialog/".concat(t)})}},computed:{activeClass:function(){return this.dialogData.id===parseInt(this.$route.params.id)?"active":""}},filters:{dateConverter:function(t){var e=new Date(t);return"".concat(e.getDay()," ").concat(l[e.getMonth()]," ").concat(e.getFullYear())}}},g=f,p=(a("bc85"),a("2877")),m=Object(p["a"])(g,c,d,!1,null,"4dc98af5",null),h=m.exports,v=a("2f62"),b={components:{Message:h},computed:Object(n["a"])({},Object(v["c"])(["dialogs"]))},y=b,C=(a("9f47"),Object(p["a"])(y,o,u,!1,null,"0745c49c",null)),j=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialog"},[a("div",{staticClass:"dialog-window"},[a("router-view")],1),t.loading?a("div",{staticClass:"dialog-input-loader"},[a("div",{staticClass:"loader"})]):a("div",{staticClass:"dialog-input"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],ref:"input",attrs:{placeholder:"Введите текст..."},domProps:{value:t.userInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),a("div",{staticClass:"dialog-input-submit",on:{click:t.submit}},[a("svg",{attrs:{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0.00936317 17.2563C0.00989464 17.6114 0.3701 17.8528 0.698756 17.7183L20.8694 9.46274C21.2835 9.29324 21.2835 8.70676 20.8694 8.53726L0.698758 0.281704C0.370102 0.14719 0.00989463 0.388579 0.00936317 0.743697L0.000660091 6.55894C0.000282918 6.81096 0.187529 7.02387 0.437532 7.05569L11.8171 8.504C12.3996 8.57814 12.3996 9.42186 11.8172 9.496L0.437533 10.9443C0.187529 10.9761 0.000282918 11.189 0.000660091 11.4411L0.00936317 17.2563Z",fill:"white"}})])])])])},O=[],x={data:function(){return{userInput:"",loading:!1}},methods:Object(n["a"])(Object(n["a"])({},Object(v["b"])(["submitMessage"])),{},{submit:function(){var t=this;this.userInput&&(this.submitMessage({id:parseInt(this.$route.params.id),message:this.userInput}),this.userInput="",this.loading=!0,setTimeout((function(){t.loading=!1,setTimeout((function(){t.$refs.input.focus()}),10)}),200))}})},w=x,D=(a("4966"),Object(p["a"])(w,_,O,!1,null,"d9daa48a",null)),k=D.exports,M={components:{MessageBar:j,DialogView:k},computed:Object(n["a"])({},Object(v["c"])(["dialogs"])),methods:Object(n["a"])({},Object(v["b"])(["loadDialogs"])),mounted:function(){this.loadDialogs()}},$=M,I=(a("7058"),Object(p["a"])($,i,r,!1,null,"793d1ec8",null)),B=I.exports,P=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"dialog-loader"},[a("div",{staticClass:"loader"})]):a("div",{ref:"body",staticClass:"dialog-body"},t._l(t.messages.parts,(function(t){return a("DialogMessage",{key:t.id,attrs:{messageData:t}})})),1)},L=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dialogMessage",class:t.dialogAuthor},[a("div",{staticClass:"dialogMessage-body"},[t._v(" "+t._s(t.messageData.text)+" ")]),a("div",{staticClass:"dialogMessage-info"},[a("div",{staticClass:"dialogMessage-info-name"},[t._v(" "+t._s(t.messageData.author)+" ")]),a("div",{staticClass:"dialogMessage-info-date"},[t._v(" "+t._s(t._f("dateConverter")(t.messageData.created))+" ")])])])},S=[],N=(a("fb6a"),{props:{messageData:{type:Object,required:!0}},computed:Object(n["a"])(Object(n["a"])({},Object(v["c"])(["username"])),{},{dialogAuthor:function(){return this.username===this.messageData.author?"self":"companion"}}),filters:{dateConverter:function(t){var e=new Date(t);return"".concat(("0"+e.getDay()).slice(-2),".\n        ").concat(("0"+e.getMonth()).slice(-2),".\n        ").concat(e.getFullYear(),"\n        ").concat(e.getHours(),":").concat(e.getMinutes())}}}),R=N,q=(a("d878"),Object(p["a"])(R,E,S,!1,null,"5b2a6b5b",null)),A=q.exports,F={computed:Object(n["a"])({},Object(v["c"])(["dialogById"])),data:function(){return{messages:{},loading:!0,timeout:setTimeout((function(){}))}},watch:{"$route.params.id":function(t){this.simulateLoading(t)}},updated:function(){this.$refs.body&&(this.$refs.body.scrollTop+=this.$refs.body.scrollHeight)},methods:{simulateLoading:function(t){var e=this;clearTimeout(this.timeout),this.loading=!0,this.timeout=setTimeout((function(){e.messages=e.dialogById(parseInt(t)),e.messages||e.$router.push({path:"/dialog/1"}),e.loading=!1}),500)}},mounted:function(){this.simulateLoading(this.$route.params.id)},components:{DialogMessage:A}},H=F,J=(a("8798"),Object(p["a"])(H,T,L,!1,null,"00468f80",null)),V=J.exports;s["a"].use(P["a"]);var Y=[{path:"/",name:"Empty",redirect:"/dialog/1"},{path:"/dialog/:id",component:V}],Z=new P["a"]({routes:Y,mode:"history"}),z=Z,G=(a("7db0"),[{id:1,subject:"Привет!",created:"2019-08-01 23:59",parts:[{id:1,author:"vasya",text:"Pharetra, eum ut primis orci labore velit? Ridiculus. Officia mattis pariatur just Pharetra, eum ut primis orci labore velit? Ridiculus. Officia mattis Pharetra, eum ut primis orci labore velit? Ridiculus. Officia mattis",created:"2019-08-01 23:59"},{id:2,author:"user",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:3,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"}]},{id:2,subject:"Вопрос по домену",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"user",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]},{id:3,subject:"fake1",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"user",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:" Помогите мне настроить  ! Помогите мне настроить  ! Помогите мне настроить  ! Помогите мне настроить  ! Помогите мне настроить  ! Помогите мне настроить  !"}]},{id:4,subject:"fake2fake2fake2fake2fake2fake2fake2fake2fake2fake2fake2fake2fake2",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"user",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]},{id:5,subject:"fake3",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"user",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]}]),K={state:{dialogs:[],userName:"user"},getters:{dialogs:function(t){var e=t.dialogs;return e},dialogById:function(t){var e=t.dialogs;return function(t){return e.find((function(e){return e.id===t}))}},username:function(t){var e=t.userName;return e}},mutations:{loadDialogs:function(t,e){t.dialogs=e},submitMessage:function(t,e){var a=e.id,s=e.message,i=t.dialogs.find((function(t){return t.id===a})).parts;i.push({author:t.userName,created:new Date,id:i.length+1,text:s})}},actions:{loadDialogs:function(t){var e=t.commit;setTimeout((function(){e("loadDialogs",G)}),1e3)},submitMessage:function(t,e){var a=t.commit;a("submitMessage",e)}}};s["a"].use(v["a"]);var Q=new v["a"].Store({modules:{chat:K}});a("f01a"),a("7e6a");s["a"].config.productionTip=!1,new s["a"]({router:z,store:Q,render:function(t){return t(B)}}).$mount("#app")},"6ab8":function(t,e,a){},7058:function(t,e,a){"use strict";var s=a("cc81"),i=a.n(s);i.a},"7e6a":function(t,e,a){},8798:function(t,e,a){"use strict";var s=a("c49b"),i=a.n(s);i.a},"9f47":function(t,e,a){"use strict";var s=a("344c"),i=a.n(s);i.a},a9fb:function(t,e,a){},bc85:function(t,e,a){"use strict";var s=a("459e"),i=a.n(s);i.a},c49b:function(t,e,a){},cc81:function(t,e,a){},d878:function(t,e,a){"use strict";var s=a("a9fb"),i=a.n(s);i.a},f01a:function(t,e,a){}});
//# sourceMappingURL=app.83299dd0.js.map