(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e){e.exports=JSON.parse('[{"type":"Generator","name":"autoPusher","visible":true,"cost":15,"baseIncome":1},{"type":"Cog","name":"betterPusher","visible":true,"cost":100,"effects":[{"flat":0,"factor":2,"hooks":["Generator/autoPusher"],"active":false}]}]')},36:function(e,t){},52:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),i=n.n(a),u=n(14),s=n(11),o=n(8),f=n(21),b=n(40),l=n(9),d=n(7),j="button",O=Object(o.c)({name:j,initialState:{isPressed:!1},reducers:{press:function(e){e.isPressed=!0},release:function(e){e.isPressed=!1}},extraReducers:{}}),p=Object(d.a)({},j,O.reducer),h=O.actions,x=h.press,v=h.release,m=p,k=Date.now(),w="clock",g={genesis:k,playthrough:k,current:k},y=Object(o.c)({name:w,initialState:g,reducers:{tick:function(e,t){var n=t.payload;e.current=n},adjust:function(){}},extraReducers:{}}),_=Object(d.a)({},w,y.reducer),P=y.actions,C=P.tick,S=P.adjust,I=function(e){return e.clock},M=_,q="window",R=Object(o.c)({name:q,initialState:{default:!0},reducers:{isVisible:function(e,t){t.hasOwnProperty("id")?e[t.id]=!0:e.default=!0},notVisible:function(e,t){t.hasOwnProperty("id")?e[t.id]=!1:e.default=!1}}}),z=Object(d.a)({},q,R.reducer),F=R.actions,D=F.isVisible,E=F.notVisible,G=function(e){return e.window},N=z,V="combo",J=Object(o.c)({name:V,initialState:{value:0,max:100,isOverflowing:!1},reducers:{decrement:function(e,t){var n=t.payload;e.value-=n?e.max:e.max/100},toggleOverflow:function(e,t){var n=t.payload;e.isOverflowing=n||!e.isOverflowing}},extraReducers:Object(d.a)({},x.type,(function(e){e.value<e.max?e.value++:e.value=e.max}))}),T=Object(d.a)({},V,J.reducer),B=J.actions,L=B.decrement,$=B.toggleOverflow,U=function(e){return e.combo},Y=T,A=n(34),H=n(42),K=n(15),Q=n(33),W=n(31),X=n(20),Z=n(27),ee=n(35),te={description:"this is default descriptor for item -- u shuld not see this",hooks:["*"]},ne={inflation:1.15,formula:function(e){return Math.round(e.cost*Math.pow(e.inflation,e.ammount))},description:"this is default descriptor for generator -- u shuld not see this",hooks:["Sps"]},re={description:"this is default descriptor for cog -- u shuld not see this"};function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e.hasOwnProperty(t)?e[t]:n}var ae,ie=function(){function e(t){Object(X.a)(this,e),this.defaults=te,this.init(t)}return Object(Z.a)(e,[{key:"init",value:function(e){this.description=ce(e,"description",this.defaults.description),this.cost=ce(e,"cost",NaN),this.visible=ce(e,"visible",!1),this.purchased=!1,this.type=ce(e,"type","Item"),this.name=ce(e,"name","no-name"),this.icon=ce(e,"icon","defaultCogIcon.svg"),this.identifier="".concat(this.type,"/").concat(this.name),this.index=e.index,this.__hooks__=[this.identifier,this.type].concat(Object(K.a)(ce(this.defaults,"hooks",[])),Object(K.a)(ce(e,"hooks",[]))),this.__effects__=[].concat(Object(K.a)(ce(this.defaults,"effects",[])),Object(K.a)(ce(e,"effects",[])))}}],[{key:"print",value:function(e){var t={};return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];return Object.getOwnPropertyNames(e).forEach((function(e){t.includes(e)||n.push(e)})),n}(e,["defaults"]).forEach((function(n){t[n]=e[n]})),t}}]),e}(),ue=function(e){Object(Q.a)(n,e);var t=Object(W.a)(n);function n(e){var r,c;return Object(X.a)(this,n),(r=c=t.call(this,e),c.defaults=ne,r).init(e),c.ammount=ce(e,"ammount",0),c.inflation=ce(e,"inflation",c.defaults.inflation),c.formula=ce(e,"formula",c.defaults.formula),c.baseIncome=ce(e,"baseIncome",0),c}return n}(ie),se=function(e){Object(Q.a)(n,e);var t=Object(W.a)(n);function n(e){var r,c;return Object(X.a)(this,n),(r=c=t.call(this,e),c.defaults=re,r).init(e),c}return n}(ie),oe=ee.map((function(e,t){switch(e.type){case"Generator":return ie.print(new ue(Object(l.a)(Object(l.a)({},e),{},{index:t})));case"Cog":return ie.print(new se(Object(l.a)(Object(l.a)({},e),{},{index:t})));default:return ie.print(new ie(Object(l.a)(Object(l.a)({},e),{},{index:t})))}})),fe=["active"],be="items",le={request:Object(o.b)("".concat(be,"/purchase/request")),canceled:Object(o.b)("".concat(be,"/purchase/cancled")),finalize:Object(o.b)("".concat(be,"/purchase/finalize"),(function(e,t){return{payload:{item:e,cost:t}}}))},de=Object(K.a)(oe),je=Object(o.c)({name:be,initialState:de,reducers:{update:function(){}},extraReducers:Object(d.a)({},le.finalize,(function(e,t){var n=t.payload.item.index;e[n].hasOwnProperty("ammount")?e[n].ammount++:(e[n].visible=!1,e[n].purchased=!0,e[n].__effects__=e[n].__effects__.map((function(e){e.active;var t=Object(H.a)(e,fe);return Object(l.a)({active:!0},t)})))}))}),Oe=Object(d.a)({},be,je.reducer),pe=je.actions.update,he=function(e){return e.items},xe=Oe,ve="score",me=Object(o.c)({name:ve,initialState:{value:0,losses:0,income:0},reducers:{},extraReducers:(ae={},Object(d.a)(ae,x.type,(function(e){e.value++})),Object(d.a)(ae,le.finalize,(function(e,t){var n=t.payload;e.value-=n.cost,e.losses+=n.cost})),Object(d.a)(ae,pe,(function(e,t){var n=t.payload;e.income=n.income})),Object(d.a)(ae,C,(function(e){e.value+=e.income})),ae)}),ke=Object(d.a)({},ve,me.reducer);Object(A.a)(me.actions);var we=function(e){return e.score},ge=ke,ye=Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},M),N),m),Y),ge),xe),_e=n(6),Pe=n.n(_e),Ce=n(3),Se=n(29),Ie=n(26);function Me(e,t){return new RegExp("^".concat(e,".*(?<!").concat(t.join(")$.*(?<!"),")$"))}console.log(Me("items",["request","update"]));var qe=Object(Ie.a)([function(e){return e.combo.value},function(e){return e.combo.max}],(function(e,t){return"".concat(100*e/t,"%")})),Re=Object(Ie.a)([function(e){return e.score.value},function(e){return 8},function(e){return 10}],(function(e,t,n){var r=Math.round(e).toString(n).toUpperCase(),c=r.length;return c>t?"x".repeat(t):("0".repeat(t-c)+r).split("")})),ze=Object(Ie.a)([function(e){return e.items.flatMap((function(e){return e.__effects__}))},function(e,t){return e.items[t.index]}],(function(e,t){var n=function(e){return[e.reduce((function(e,t){return e+(t.flat||0)}),0),e.reduce((function(e,t){return e*(t.factor||1)}),1)]}(function(e,t){return t.reduce((function(t,n){return e.__hooks__.some((function(e){return n.hooks.indexOf(e)>=0}))&&n.active&&t.push(n),t}),[])}(t,e)),r=Object(Se.a)(n,2),c=r[0],a=r[1];return(t.baseIncome+c)*a*t.ammount})),Fe=n(28),De=1e3,Ee=[864e5,36e5,6e4,De,1],Ge=function(){function e(){Object(X.a)(this,e)}return Object(Z.a)(e,null,[{key:"parse",value:function(e){var t,n=[],r=e,c=Object(Fe.a)(Ee);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push(Math.floor(r/a)),r%=a}}catch(i){c.e(i)}finally{c.f()}return{days:n[0],hours:n[1],mins:n[2],secs:n[3],mss:n[4]}}},{key:"since",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De;return Math.floor((Date.now()-e)/t)}}]),e}(),Ne=Pe.a.mark(Je),Ve=Pe.a.mark(Te);function Je(){var e,t,n,r,c,a,i,u=arguments;return Pe.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e=u.length>0&&void 0!==u[0]?u[0]:"default";case 1:return s.next=4,Object(Ce.c)(995);case 4:return s.next=6,Object(Ce.a)([Object(Ce.g)(G),Object(Ce.g)(I)]);case 6:if(n=s.sent,r=Object(Se.a)(n,2),c=r[0],a=r[1],!c[e]){s.next=22;break}if(!t){s.next=18;break}return s.next=14,Object(Ce.b)(Ge.since,a.current);case 14:return i=s.sent,s.next=17,Object(Ce.e)(S(i));case 17:t=!1;case 18:return s.next=20,Object(Ce.e)(C(Date.now()));case 20:s.next=23;break;case 22:t=!0;case 23:s.next=1;break;case 25:case"end":return s.stop()}}),Ne)}function Te(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(Je);case 2:case"end":return e.stop()}}),Ve)}var Be=Pe.a.mark($e),Le=Pe.a.mark(Ue);function $e(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(Ce.i)(x.type);case 3:return t.next=6,Object(Ce.f)({buttonPressed:Object(Ce.i)(x.type),timeout:Object(Ce.c)(150)});case 6:if(e=t.sent,!e.timeout){t.next=12;break}return t.next=11,Object(Ce.e)(v());case 11:return t.abrupt("break",14);case 12:t.next=3;break;case 14:t.next=0;break;case 16:case"end":return t.stop()}}),Be)}function Ue(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)($e);case 2:case"end":return e.stop()}}),Le)}var Ye=Pe.a.mark(Qe),Ae=Pe.a.mark(We),He=Pe.a.mark(Xe),Ke=Pe.a.mark(Ze);function Qe(){var e,t,n;return Pe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,Object(Ce.i)(v.type);case 3:e=160;case 4:return r.next=7,Object(Ce.g)(U);case 7:if(!((t=r.sent).value<=0)){r.next=10;break}return r.abrupt("break",22);case 10:return r.next=12,Object(Ce.f)({breakChain:Object(Ce.i)(x.type),timeout:Object(Ce.c)(e)});case 12:if(n=r.sent,!n.breakChain){r.next=16;break}return r.abrupt("break",22);case 16:if(t.isOverflowing){r.next=20;break}return r.next=19,Object(Ce.e)(L());case 19:e=e<50?50:Math.round(.85*e);case 20:r.next=4;break;case 22:r.next=0;break;case 25:case 26:case"end":return r.stop()}}),Ye)}function We(e){return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ce.e)($(!0));case 2:return t.next=4,Object(Ce.c)(e);case 4:return t.next=6,Object(Ce.e)($(!1));case 6:return t.next=8,Object(Ce.e)(L(!0));case 8:case"end":return t.stop()}}),Ae)}function Xe(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(Ce.i)(x.type);case 3:return t.next=5,Object(Ce.g)(U);case 5:if(!((e=t.sent).value<e.max)){t.next=9;break}t.next=11;break;case 9:return t.next=11,We(5e3);case 11:t.next=0;break;case 13:case"end":return t.stop()}}),He)}function Ze(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(Qe);case 2:return e.next=4,Object(Ce.d)(Xe);case 4:case"end":return e.stop()}}),Ke)}var et=Pe.a.mark(rt),tt=Pe.a.mark(ct),nt=Pe.a.mark(ut);function rt(e){var t,n,r,c;return Pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(Ce.g)(we);case 3:if(n=a.sent,r=n.value,c=t.cost,t.formula&&(c=t.formula(t)),!(c<=r)){a.next=12;break}return a.next=10,Object(Ce.e)(le.finalize(t,c));case 10:a.next=14;break;case 12:return a.next=14,Object(Ce.e)(le.canceled("insuffiecnt budget"));case 14:case"end":return a.stop()}}),et)}function ct(){var e,t,n,r,c;return Pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ce.g)(he);case 2:e=a.sent,t=0,n=Object(Fe.a)(e),a.prev=5,c=Pe.a.mark((function e(){var n;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Generator"!==(n=r.value).type){e.next=6;break}return e.t0=t,e.next=5,Object(Ce.g)((function(e){return ze(e,n)}));case 5:t=e.t0+=e.sent;case 6:case"end":return e.stop()}}),e)})),n.s();case 8:if((r=n.n()).done){a.next=12;break}return a.delegateYield(c(),"t0",10);case 10:a.next=8;break;case 12:a.next=17;break;case 14:a.prev=14,a.t1=a.catch(5),n.e(a.t1);case 17:return a.prev=17,n.f(),a.finish(17);case 20:return a.next=22,Object(Ce.e)(pe({income:t}));case 22:case"end":return a.stop()}}),tt,null,[[5,14,17,20]])}var at=["request","update"],it=function(e){return Me("items",at).test(e.type)};function ut(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.j)(le.request.type,rt);case 2:return e.next=4,Object(Ce.j)((function(e){return it(e)}),ct);case 4:case"end":return e.stop()}}),nt)}var st=Pe.a.mark(ot);function ot(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Te,Ue,Ze,ut],t.next=3,Object(Ce.a)(e.map((function(e){return Object(Ce.h)(Pe.a.mark((function t(){return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(Ce.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),st)}var ft=Object(b.a)(),bt=Object(o.a)({reducer:ye,middleware:[ft,f.a],devTools:!1});ft.run(ot);var lt,dt,jt,Ot=n(36),pt=n.n(Ot),ht=(n(52),n(23)),xt=u.b.button(lt||(lt=Object(ht.a)(["\n    border: 2px solid black;\n    border-radius: 50%;\n    background-color: red;\n    width: 33px;\n    height: 33px;\n"]))),vt=n(5);function mt(){var e=Object(s.b)();return Object(vt.jsx)(xt,{onClick:function(){return e(x())},children:"x"})}var kt=u.b.div(dt||(dt=Object(ht.a)(["\n    display: flex;\n    flex-flow: column-reverse nowrap;\n    height: 200px;\n    width: 40px;\n    border: 2px solid black;\n"]))),wt=u.b.span(jt||(jt=Object(ht.a)(["\n    background-color: red;\n    height: ",";\n"])),(function(e){return e.combo}));function gt(){var e=Object(s.c)(qe);return Object(vt.jsx)(kt,{children:Object(vt.jsx)(wt,{combo:e})})}var yt=function(e){var t=e.digit;return Object(vt.jsx)("li",{children:t})};function _t(){var e=Object(s.c)(Re);return Object(vt.jsx)("ul",{children:e.map((function(e,t){return Object(vt.jsx)(yt,{digit:e},t)}))})}var Pt=n(41);function Ct(e){var t=e.alias,n=e.children,r=Object(s.b)();return Object(vt.jsxs)(vt.Fragment,{children:[Object(vt.jsx)(Pt.a,{onChange:function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;t(e?D({id:n}):E({id:n}))}(e,r,t)}}),n]})}var St=function(e){var t=e.item,n=e.children;return t.visible?Object(vt.jsxs)("li",{children:[n,t.name]}):null};function It(){var e=Object(s.b)(),t=Object(s.c)(he);return Object(vt.jsx)("ul",{children:t.map((function(t,n){return Object(vt.jsx)(St,{item:t,children:Object(vt.jsx)("button",{onClick:function(){return e(le.request(t))},children:t.ammount||"x"})},n)}))})}var Mt=function(){return Object(vt.jsxs)(Ct,{children:[Object(vt.jsx)(_t,{}),Object(vt.jsx)(gt,{}),Object(vt.jsx)(mt,{}),Object(vt.jsx)(It,{})]})},qt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(vt.jsx)(c.a.StrictMode,{children:Object(vt.jsx)(s.a,{store:bt,children:Object(vt.jsx)(u.a,{theme:pt.a,children:Object(vt.jsx)(Mt,{})})})}),document.getElementById("root")),qt()}},[[55,1,2]]]);
//# sourceMappingURL=main.1b8c4b0f.chunk.js.map