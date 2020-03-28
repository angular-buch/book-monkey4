(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{a3UO:function(l,n,e){"use strict";var t=e("z6cu"),u=e("un/a"),r=e("lJxs"),i=e("JIr8");class o{static fromRaw(l){return Object.assign({},l,{published:new Date(l.published)})}}var c=e("8Y7J"),a=e("IheW");e.d(n,"a",function(){return s});class s{constructor(l){this.http=l,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(`${this.api}/books`).pipe(Object(u.a)(3),Object(r.a)(l=>l.map(l=>o.fromRaw(l))),Object(i.a)(this.errorHandler))}getSingle(l){return this.http.get(`${this.api}/book/${l}`).pipe(Object(u.a)(3),Object(r.a)(l=>o.fromRaw(l)),Object(i.a)(this.errorHandler))}create(l){return this.http.post(`${this.api}/book`,l,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}update(l){return this.http.put(`${this.api}/book/${l.isbn}`,l,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}remove(l){return this.http.delete(`${this.api}/book/${l}`,{responseType:"text"}).pipe(Object(i.a)(this.errorHandler))}getAllSearch(l){return this.http.get(`${this.api}/books/search/${l}`).pipe(Object(u.a)(3),Object(r.a)(l=>l.map(l=>o.fromRaw(l))),Object(i.a)(this.errorHandler))}check(l){return this.http.get(`${this.api}/book/${l}/check`).pipe(Object(i.a)(this.errorHandler))}errorHandler(l){return console.error("Fehler aufgetreten!"),Object(t.a)(l)}}s.ngInjectableDef=c["\u0275\u0275defineInjectable"]({factory:function(){return new s(c["\u0275\u0275inject"](a.c))},token:s,providedIn:"root"})},xCV9:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=e("VLs4"),r=e.n(u),i=e("SVse");class o{constructor(){Object(i.r)(r.a)}}class c{}var a=e("pMnS"),s=e("iInd"),d=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"div",[["class","ui menu"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,2).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](2,671744,[[2,4]],0,s.o,[s.l,s.a,i.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](3,1720320,null,2,s.n,[s.l,t.ElementRef,t.Renderer2,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](7,0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](8,671744,[[4,4]],0,s.o,[s.l,s.a,i.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](9,1720320,null,2,s.n,[s.l,t.ElementRef,t.Renderer2,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,3,{links:1}),t["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["B\xfccher"])),(l()(),t["\u0275eld"](13,0,null,null,5,"a",[["class","item"],["routerLink","admin"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,14).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](14,671744,[[6,4]],0,s.o,[s.l,s.a,i.i],{routerLink:[0,"routerLink"]},null),t["\u0275did"](15,1720320,null,2,s.n,[s.l,t.ElementRef,t.Renderer2,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,5,{links:1}),t["\u0275qud"](603979776,6,{linksWithHrefs:1}),(l()(),t["\u0275ted"](-1,null,["Administration"])),(l()(),t["\u0275eld"](19,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](20,212992,null,0,s.q,[s.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,n){l(n,2,0,"home"),l(n,3,0,"active"),l(n,8,0,"books"),l(n,9,0,"active"),l(n,14,0,"admin"),l(n,15,0,"active"),l(n,20,0)},function(l,n){l(n,1,0,t["\u0275nov"](n,2).target,t["\u0275nov"](n,2).href),l(n,7,0,t["\u0275nov"](n,8).target,t["\u0275nov"](n,8).href),l(n,13,0,t["\u0275nov"](n,14).target,t["\u0275nov"](n,14).href)})}function h(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"bm-root",[],null,null,null,p,d)),t["\u0275did"](1,49152,null,0,c,[],null,null)],null,null)}var m=t["\u0275ccf"]("bm-root",c,h,{},{},[]),f=e("XNiG"),k=e("pLZG"),b=e("Kj3r"),v=e("/uUt"),g=e("vkgz"),y=e("eIep"),L=e("a3UO");class O{constructor(l){this.bs=l,this.keyUp$=new f.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(k.a)(l=>l.length>=3),Object(b.a)(500),Object(v.a)(),Object(g.a)(()=>this.isLoading=!0),Object(y.a)(l=>this.bs.getAllSearch(l)),Object(g.a)(()=>this.isLoading=!1)).subscribe(l=>this.foundBooks=l)}}var j=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"a",[["class","result"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](1,671744,null,0,s.o,[s.l,s.a,i.i],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,3),(l()(),t["\u0275ted"](3,null,[" "," "])),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["",""]))],function(l,n){var e=l(n,2,0,"..","books",n.context.$implicit.isbn);l(n,1,0,e)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).target,t["\u0275nov"](n,1).href),l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.subtitle)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","results transition visible"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](2,278528,null,0,i.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.foundBooks)},null)}function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","ui search"]],[[2,"loading",null]],null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"div",[["class","ui icon input"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"input",[["class","prompt"],["type","text"]],null,[[null,"keyup"]],function(l,n,e){var t=!0;return"keyup"===n&&(t=!1!==l.component.keyUp$.next(e.target.value)&&t),t},null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"i",[["class","search icon"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](5,16384,null,0,i.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,n.component.foundBooks.length)},function(l,n){l(n,0,0,n.component.isLoading)})}class ${constructor(){}ngOnInit(){}}var w=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Home"])),(l()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Das ist der BookMonkey."])),(l()(),t["\u0275eld"](4,0,null,null,3,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](5,671744,null,0,s.o,[s.l,s.a,i.i],{routerLink:[0,"routerLink"]},null),(l()(),t["\u0275ted"](-1,null,[" Buchliste ansehen "])),(l()(),t["\u0275eld"](7,0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Suche"])),(l()(),t["\u0275eld"](10,0,null,null,1,"bm-search",[],null,null,null,C,j)),t["\u0275did"](11,114688,null,0,O,[L.a],null,null)],function(l,n){l(n,5,0,"../books"),l(n,11,0)},function(l,n){l(n,4,0,t["\u0275nov"](n,5).target,t["\u0275nov"](n,5).href)})}function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"bm-home",[],null,null,null,I,w)),t["\u0275did"](1,114688,null,0,$,[],null,null)],function(l,n){l(n,1,0)},null)}var F=t["\u0275ccf"]("bm-home",$,K,{},{},[]),H=e("IheW");class T{constructor(){this.authToken="1234567890"}intercept(l,n){const e=l.clone({setHeaders:{Authorization:`Bearer ${this.authToken}`}});return n.handle(e)}}const x=()=>e.e(27).then(e.bind(null,"3/As")).then(l=>l.BooksModuleNgFactory),S=()=>Promise.all([e.e(1),e.e(26)]).then(e.bind(null,"ykok")).then(l=>l.AdminModuleNgFactory);class B{}e.d(n,"AppModuleNgFactory",function(){return M});var M=t["\u0275cmf"](o,[c],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,m,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,i.m,i.l,[t.LOCALE_ID,[2,i.t]]),t["\u0275mpd"](4608,H.h,H.n,[i.d,t.PLATFORM_ID,H.l]),t["\u0275mpd"](4608,H.o,H.o,[H.h,H.m]),t["\u0275mpd"](5120,H.a,function(l){return[l,new T]},[H.o]),t["\u0275mpd"](4608,H.k,H.k,[]),t["\u0275mpd"](6144,H.i,null,[H.k]),t["\u0275mpd"](4608,H.g,H.g,[H.i]),t["\u0275mpd"](6144,H.b,null,[H.g]),t["\u0275mpd"](4608,H.f,H.j,[H.b,t.Injector]),t["\u0275mpd"](4608,H.c,H.c,[H.f]),t["\u0275mpd"](1073742336,i.c,i.c,[]),t["\u0275mpd"](1073742336,H.e,H.e,[]),t["\u0275mpd"](1073742336,H.d,H.d,[]),t["\u0275mpd"](1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),t["\u0275mpd"](1073742336,B,B,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](256,t.LOCALE_ID,"de",[]),t["\u0275mpd"](256,H.l,"XSRF-TOKEN",[]),t["\u0275mpd"](256,H.m,"X-XSRF-TOKEN",[]),t["\u0275mpd"](1024,s.j,function(){return[[{path:"",component:c,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:$},{path:"books",loadChildren:x},{path:"admin",loadChildren:S}]}]]},[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xtb",[])])})}}]);