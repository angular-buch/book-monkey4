(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9O1O":function(n,l,t){"use strict";var e=t("XlPw"),u=t("5tAl"),r=t("67Y/"),o=t("9Z1F"),i=t("mrSG"),c=function(){function n(){}return n.fromRaw=function(n){return i.a({},n,{published:new Date(n.published)})},n}(),a=t("CcnG"),d=t("t/Na");t.d(l,"a",function(){return s});var s=function(){function n(n){this.http=n,this.api="https://api4.angular-buch.com/secure"}return n.prototype.getAll=function(){return this.http.get(this.api+"/books").pipe(Object(u.a)(3),Object(r.a)(function(n){return n.map(function(n){return c.fromRaw(n)})}),Object(o.a)(this.errorHandler))},n.prototype.getSingle=function(n){return this.http.get(this.api+"/book/"+n).pipe(Object(u.a)(3),Object(r.a)(function(n){return c.fromRaw(n)}),Object(o.a)(this.errorHandler))},n.prototype.create=function(n){return this.http.post(this.api+"/book",n,{responseType:"text"}).pipe(Object(o.a)(this.errorHandler))},n.prototype.update=function(n){return this.http.put(this.api+"/book/"+n.isbn,n,{responseType:"text"}).pipe(Object(o.a)(this.errorHandler))},n.prototype.remove=function(n){return this.http.delete(this.api+"/book/"+n,{responseType:"text"}).pipe(Object(o.a)(this.errorHandler))},n.prototype.getAllSearch=function(n){return this.http.get(this.api+"/books/search/"+n).pipe(Object(u.a)(3),Object(r.a)(function(n){return n.map(function(n){return c.fromRaw(n)})}),Object(o.a)(this.errorHandler))},n.prototype.check=function(n){return this.http.get(this.api+"/book/"+n+"/check").pipe(Object(o.a)(this.errorHandler))},n.prototype.errorHandler=function(n){return console.error("Fehler aufgetreten!"),Object(e.a)(n)},n.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new n(a["\u0275\u0275inject"](d.c))},token:n,providedIn:"root"}),n}()},Hfs6:function(n,l,t){var e,u,r;!function(o){if("object"==typeof n.exports){var i=o(0,l);void 0!==i&&(n.exports=i)}else u=[t,l],void 0===(r="function"==typeof(e=o)?e.apply(l,u):e)||(n.exports=r)}(function(n,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=void 0;l.default=["fr",[["AM","PM"],t,t],t,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],t,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]],t,[["av. J.-C.","ap. J.-C."],t,["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1} '\xe0' {0}",t,t],[",","\xa0",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"\u20ac","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BSD:["$BS","$"],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[t,"\xa5"],COP:["$CO","$"],CYP:["\xa3CY"],EGP:[t,"\xa3E"],FJD:["$FJ","$"],FKP:["\xa3FK","\xa3"],FRF:["F"],GBP:["\xa3GB","\xa3"],GIP:["\xa3GI","\xa3"],HKD:[t,"$"],IEP:["\xa3IE"],ILP:["\xa3IL"],ITL:["\u20a4IT"],JPY:[t,"\xa5"],KMF:[t,"FC"],LBP:["\xa3LB","\xa3L"],MTP:["\xa3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[t,"$C"],NZD:["$NZ","$"],RHD:["$RH"],RON:[t,"L"],RWF:[t,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TTD:["$TT","$"],TWD:[t,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["WS$"],XCD:[t,"$"],XPF:["FCFP"],ZMW:[t,"Kw"]},function(n){var l=Math.floor(Math.abs(n));return 0===l||1===l?1:5}]})},OqnO:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("VLs4"),r=t.n(u),o=t("Hfs6"),i=t.n(o),c=t("Ip0R"),a=function(){return function(n){Object(c.r)(r.a),Object(c.r)(i.a),console.log("Current Locale",n)}}(),d=function(){return function(){}}(),s=t("pMnS"),p=t("ZYCi"),f=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,18,"div",[["class","ui menu"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](2,671744,[[2,4]],0,p.o,[p.l,p.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,1720320,null,2,p.n,[p.l,e.ElementRef,e.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Home"])),(n()(),e["\u0275eld"](7,0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](8,671744,[[4,4]],0,p.o,[p.l,p.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275did"](9,1720320,null,2,p.n,[p.l,e.ElementRef,e.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Books"])),(n()(),e["\u0275eld"](13,0,null,null,5,"a",[["class","item"],["routerLink","admin"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](14,671744,[[6,4]],0,p.o,[p.l,p.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275did"](15,1720320,null,2,p.n,[p.l,e.ElementRef,e.Renderer2,[2,p.m],[2,p.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,5,{links:1}),e["\u0275qud"](603979776,6,{linksWithHrefs:1}),(n()(),e["\u0275ted"](-1,null,["Administration"])),(n()(),e["\u0275eld"](19,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](20,212992,null,0,p.q,[p.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(n,l){n(l,2,0,"home"),n(l,3,0,"active"),n(l,8,0,"books"),n(l,9,0,"active"),n(l,14,0,"admin"),n(l,15,0,"active"),n(l,20,0)},function(n,l){n(l,1,0,e["\u0275nov"](l,2).target,e["\u0275nov"](l,2).href),n(l,7,0,e["\u0275nov"](l,8).target,e["\u0275nov"](l,8).href),n(l,13,0,e["\u0275nov"](l,14).target,e["\u0275nov"](l,14).href)})}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"bm-root",[],null,null,null,h,f)),e["\u0275did"](1,49152,null,0,d,[],null,null)],null,null)}var v=e["\u0275ccf"]("bm-root",d,m,{},{},[]),k=t("K9Ia"),b=t("VnD/"),y=t("Gi3i"),g=t("ad02"),$=t("xMyE"),L=t("15JJ"),O=t("9O1O"),M=function(){function n(n){this.bs=n,this.keyUp$=new k.a,this.isLoading=!1,this.foundBooks=[]}return n.prototype.ngOnInit=function(){var n=this;this.keyUp$.pipe(Object(b.a)(function(n){return n.length>=3}),Object(y.a)(500),Object(g.a)(),Object($.a)(function(){return n.isLoading=!0}),Object(L.a)(function(l){return n.bs.getAllSearch(l)}),Object($.a)(function(){return n.isLoading=!1})).subscribe(function(l){return n.foundBooks=l})},n}(),j=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"a",[["class","result"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](1,671744,null,0,p.o,[p.l,p.a,c.i],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,3),(n()(),e["\u0275ted"](3,null,[" "," "])),(n()(),e["\u0275eld"](4,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(n()(),e["\u0275ted"](5,null,["",""]))],function(n,l){var t=n(l,2,0,"..","books",l.context.$implicit.isbn);n(l,1,0,t)},function(n,l){n(l,0,0,e["\u0275nov"](l,1).target,e["\u0275nov"](l,1).href),n(l,3,0,l.context.$implicit.title),n(l,5,0,l.context.$implicit.subtitle)})}function A(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","results transition visible"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](2,278528,null,0,c.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.foundBooks)},null)}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","ui search"]],[[2,"loading",null]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","ui icon input"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,"input",[["class","prompt"],["type","text"]],null,[[null,"keyup"]],function(n,l,t){var e=!0;return"keyup"===l&&(e=!1!==n.component.keyUp$.next(t.target.value)&&e),e},null,null)),(n()(),e["\u0275eld"](3,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](5,16384,null,0,c.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,5,0,l.component.foundBooks.length)},function(n,l){n(l,0,0,l.component.isLoading)})}var F=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),D=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Home"])),(n()(),e["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["This is the BookMonkey."])),(n()(),e["\u0275eld"](4,0,null,null,4,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](5,671744,null,0,p.o,[p.l,p.a,c.i],{routerLink:[0,"routerLink"]},null),(n()(),e["\u0275eld"](6,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["See book list"])),(n()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Search"])),(n()(),e["\u0275eld"](11,0,null,null,1,"bm-search",[],null,null,null,R,j)),e["\u0275did"](12,114688,null,0,M,[O.a],null,null)],function(n,l){n(l,5,0,"../books"),n(l,12,0)},function(n,l){n(l,4,0,e["\u0275nov"](l,5).target,e["\u0275nov"](l,5).href)})}function H(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"bm-home",[],null,null,null,I,D)),e["\u0275did"](1,114688,null,0,F,[],null,null)],function(n,l){n(l,1,0)},null)}var S=e["\u0275ccf"]("bm-home",F,H,{},{},[]),T=t("t/Na"),B=function(){function n(){this.authToken="1234567890"}return n.prototype.intercept=function(n,l){var t=n.clone({setHeaders:{Authorization:"Bearer "+this.authToken}});return l.handle(t)},n}(),w=function(){function n(){this.accessGranted=!1}return n.prototype.canActivate=function(){return this.accessGranted||(this.accessGranted=window.confirm("Mit gro\xdfer Macht kommt gro\xdfe Verantwortung. M\xf6chten Sie den Admin-Bereich betreten?")),this.accessGranted},n.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new n},token:n,providedIn:"root"}),n}(),N=function(){return t.e(30).then(t.bind(null,"+CAP")).then(function(n){return n.BooksModuleNgFactory})},K=function(){return Promise.all([t.e(1),t.e(29)]).then(t.bind(null,"sR/p")).then(function(n){return n.AdminModuleNgFactory})},E=function(){return function(){}}();t.d(l,"AppModuleNgFactory",function(){return P});var P=e["\u0275cmf"](a,[d],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,v,S]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.m,c.l,[e.LOCALE_ID,[2,c.t]]),e["\u0275mpd"](4608,T.h,T.n,[c.d,e.PLATFORM_ID,T.l]),e["\u0275mpd"](4608,T.o,T.o,[T.h,T.m]),e["\u0275mpd"](5120,T.a,function(n){return[n,new B]},[T.o]),e["\u0275mpd"](4608,T.k,T.k,[]),e["\u0275mpd"](6144,T.i,null,[T.k]),e["\u0275mpd"](4608,T.g,T.g,[T.i]),e["\u0275mpd"](6144,T.b,null,[T.g]),e["\u0275mpd"](4608,T.f,T.j,[T.b,e.Injector]),e["\u0275mpd"](4608,T.c,T.c,[T.f]),e["\u0275mpd"](1073742336,c.c,c.c,[]),e["\u0275mpd"](1073742336,T.e,T.e,[]),e["\u0275mpd"](1073742336,T.d,T.d,[]),e["\u0275mpd"](1073742336,p.p,p.p,[[2,p.u],[2,p.l]]),e["\u0275mpd"](1073742336,E,E,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](1073742336,a,a,[e.LOCALE_ID]),e["\u0275mpd"](256,T.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,T.m,"X-XSRF-TOKEN",[]),e["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:d,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:F},{path:"books",loadChildren:N},{path:"admin",loadChildren:K,canActivate:[w]}]}]]},[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xtb",[])])})}}]);