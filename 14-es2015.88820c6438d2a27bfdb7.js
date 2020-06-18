(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{j0uu:function(t,e,n){"use strict";n.r(e),n.d(e,"AppModule",(function(){return U}));var o=n("ofXK"),i=n("tk/3"),c=n("tyNb"),b=n("fXoL");let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-root"]],decls:6,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"a",1),b.mc(2,"Home"),b.Lb(),b.Mb(3,"a",2),b.mc(4,"B\xfccher"),b.Lb(),b.Lb(),b.Ib(5,"router-outlet"))},directives:[c.g,c.f,c.i],styles:[""]}),t})();var r=n("XNiG"),a=n("pLZG"),u=n("Kj3r"),l=n("/uUt"),h=n("vkgz"),p=n("eIep"),m=n("z6cu"),f=n("un/a"),d=n("lJxs"),k=n("JIr8");class g{static fromRaw(t){return Object.assign(Object.assign({},t),{published:new Date(t.published)})}}let v=(()=>{class t{constructor(t){this.http=t,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(this.api+"/books").pipe(Object(f.a)(3),Object(d.a)(t=>t.map(t=>g.fromRaw(t))),Object(k.a)(this.errorHandler))}getSingle(t){return this.http.get(`${this.api}/book/${t}`).pipe(Object(f.a)(3),Object(d.a)(t=>g.fromRaw(t)),Object(k.a)(this.errorHandler))}remove(t){return this.http.delete(`${this.api}/book/${t}`,{responseType:"text"}).pipe(Object(k.a)(this.errorHandler))}getAllSearch(t){return this.http.get(`${this.api}/books/search/${t}`).pipe(Object(f.a)(3),Object(d.a)(t=>t.map(t=>g.fromRaw(t))),Object(k.a)(this.errorHandler))}errorHandler(t){return console.error("Fehler aufgetreten!"),Object(m.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(b.Sb(i.b))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const L=function(t){return["..","books",t]};function M(t,e){if(1&t&&(b.Mb(0,"a",7),b.mc(1),b.Mb(2,"p",8),b.mc(3),b.Lb(),b.Lb()),2&t){const t=e.$implicit;b.bc("routerLink",b.dc(3,L,t.isbn)),b.xb(1),b.oc(" ",t.title," "),b.xb(2),b.nc(t.subtitle)}}function I(t,e){if(1&t&&(b.Mb(0,"div",5),b.kc(1,M,4,5,"a",6),b.Lb()),2&t){const t=b.Xb();b.xb(1),b.bc("ngForOf",t.foundBooks)}}let O=(()=>{class t{constructor(t){this.bs=t,this.keyUp$=new r.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(a.a)(t=>t.length>=3),Object(u.a)(500),Object(l.a)(),Object(h.a)(()=>this.isLoading=!0),Object(p.a)(t=>this.bs.getAllSearch(t)),Object(h.a)(()=>this.isLoading=!1)).subscribe(t=>this.foundBooks=t)}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(v))},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-search"]],decls:5,vars:3,consts:[[1,"ui","search"],[1,"ui","icon","input"],["type","text",1,"prompt",3,"keyup"],[1,"search","icon"],["class","results transition visible",4,"ngIf"],[1,"results","transition","visible"],["class","result",3,"routerLink",4,"ngFor","ngForOf"],[1,"result",3,"routerLink"],[1,"description"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"input",2),b.Vb("keyup",(function(t){return e.keyUp$.next(t.target.value)})),b.Lb(),b.Ib(3,"i",3),b.Lb(),b.kc(4,I,2,1,"div",4),b.Lb()),2&t&&(b.zb("loading",e.isLoading),b.xb(4),b.bc("ngIf",e.foundBooks.length))},directives:[o.k,o.j,c.g],styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-home"]],decls:10,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(t,e){1&t&&(b.Mb(0,"h1"),b.mc(1,"Home"),b.Lb(),b.Mb(2,"p"),b.mc(3,"Das ist der BookMonkey."),b.Lb(),b.Mb(4,"a",0),b.mc(5," Buchliste ansehen "),b.Ib(6,"i",1),b.Lb(),b.Mb(7,"h2"),b.mc(8,"Suche"),b.Lb(),b.Ib(9,"bm-search"))},directives:[c.g,O],styles:[""]}),t})();function w(t,e){if(1&t&&b.Ib(0,"img",6),2&t){const t=b.Xb();b.bc("src",t.book.thumbnails[0].url,b.hc)}}function x(t,e){if(1&t&&(b.Mb(0,"div",7),b.mc(1),b.Lb()),2&t){const t=b.Xb();b.xb(1),b.nc(t.book.subtitle)}}function j(t,e){1&t&&(b.Mb(0,"span"),b.mc(1,", "),b.Lb())}function B(t,e){if(1&t&&(b.Mb(0,"span"),b.mc(1),b.kc(2,j,2,0,"span",8),b.Lb()),2&t){const t=e.$implicit,n=e.last;b.xb(1),b.oc(" ",t,""),b.xb(1),b.bc("ngIf",!n)}}let F=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:9,vars:5,consts:[["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,e){1&t&&(b.kc(0,w,1,1,"img",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.mc(3),b.Lb(),b.kc(4,x,2,1,"div",3),b.Mb(5,"div",4),b.kc(6,B,3,2,"span",5),b.Ib(7,"br"),b.mc(8),b.Lb(),b.Lb()),2&t&&(b.bc("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),b.xb(3),b.nc(e.book.title),b.xb(1),b.bc("ngIf",e.book.subtitle),b.xb(2),b.bc("ngForOf",e.book.authors),b.xb(2),b.oc(" ISBN ",e.book.isbn," "))},directives:[o.k,o.j],styles:[""]}),t})();function $(t,e){if(1&t&&b.Ib(0,"bm-book-list-item",4),2&t){const t=e.$implicit;b.bc("book",t)("routerLink",t.isbn)}}function H(t,e){1&t&&(b.Mb(0,"div",5),b.Mb(1,"div",6),b.mc(2,"Daten werden geladen..."),b.Lb(),b.Lb())}function A(t,e){1&t&&(b.Mb(0,"p"),b.mc(1,"Es wurden noch keine B\xfccher eingetragen."),b.Lb())}function X(t,e){if(1&t&&(b.Mb(0,"h3"),b.mc(1),b.Lb()),2&t){const t=b.Xb(2);b.xb(1),b.nc(t.book.subtitle)}}function S(t,e){if(1&t&&(b.Kb(0),b.mc(1),b.Ib(2,"br"),b.Jb()),2&t){const t=e.$implicit;b.xb(1),b.oc(" ",t,"")}}function R(t,e){1&t&&b.Ib(0,"i",12)}function E(t,e){1&t&&b.Ib(0,"img",13),2&t&&b.bc("src",e.$implicit.url,b.hc)}function D(t,e){if(1&t){const t=b.Nb();b.Mb(0,"div"),b.Mb(1,"h1"),b.mc(2),b.Lb(),b.kc(3,X,2,1,"h3",2),b.Ib(4,"div",3),b.Mb(5,"div",4),b.Mb(6,"div",5),b.Mb(7,"h4"),b.mc(8,"Autoren"),b.Lb(),b.kc(9,S,3,1,"ng-container",6),b.Lb(),b.Mb(10,"div",5),b.Mb(11,"h4"),b.mc(12,"ISBN"),b.Lb(),b.mc(13),b.Lb(),b.Mb(14,"div",5),b.Mb(15,"h4"),b.mc(16,"Erschienen"),b.Lb(),b.mc(17),b.Lb(),b.Mb(18,"div",5),b.Mb(19,"h4"),b.mc(20,"Rating"),b.Lb(),b.kc(21,R,1,0,"i",7),b.Lb(),b.Lb(),b.Mb(22,"h4"),b.mc(23,"Beschreibung"),b.Lb(),b.Mb(24,"p"),b.mc(25),b.Lb(),b.Mb(26,"div",8),b.kc(27,E,1,1,"img",9),b.Lb(),b.Mb(28,"button",10),b.Vb("click",(function(){return b.gc(t),b.Xb().removeBook()})),b.Ib(29,"i",11),b.mc(30," Buch l\xf6schen "),b.Lb(),b.Lb()}if(2&t){const t=b.Xb();b.xb(2),b.nc(t.book.title),b.xb(1),b.bc("ngIf",t.book.subtitle),b.xb(6),b.bc("ngForOf",t.book.authors),b.xb(4),b.oc(" ",t.book.isbn," "),b.xb(4),b.oc(" ",t.book.published," "),b.xb(4),b.bc("ngForOf",t.getRating(t.book.rating)),b.xb(4),b.nc(t.book.description),b.xb(2),b.bc("ngForOf",t.book.thumbnails)}}function J(t,e){1&t&&b.Ib(0,"div",14)}const N=[{path:"",component:s,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:y},{path:"books",component:(()=>{class t{constructor(t){this.bs=t}ngOnInit(){this.bs.getAll().subscribe(t=>this.books=t)}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(v))},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-book-list"]],decls:4,vars:3,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],["class","ui active dimmer",4,"ngIf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.kc(1,$,1,2,"bm-book-list-item",1),b.kc(2,H,3,0,"div",2),b.kc(3,A,2,0,"p",3),b.Lb()),2&t&&(b.xb(1),b.bc("ngForOf",e.books),b.xb(1),b.bc("ngIf",!e.books),b.xb(1),b.bc("ngIf",e.books&&!e.books.length))},directives:[o.j,o.k,F,c.e],styles:[""]}),t})()},{path:"books/:isbn",component:(()=>{class t{constructor(t,e,n){this.bs=t,this.router=e,this.route=n}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(t=>this.book=t)}getRating(t){return new Array(t)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(t=>this.router.navigate(["../"],{relativeTo:this.route}))}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(v),b.Hb(c.d),b.Hb(c.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],["class","yellow star icon",4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(t,e){if(1&t&&(b.kc(0,D,31,8,"div",0),b.kc(1,J,1,0,"ng-template",null,1,b.lc)),2&t){const t=b.fc(2);b.bc("ngIf",e.book)("ngIfElse",t)}},directives:[o.k,o.j],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),t})()}]}];let T=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(N)],c.h]}),t})(),z=(()=>{class t{constructor(){this.authToken="1234567890"}intercept(t,e){const n=t.clone({setHeaders:{Authorization:"Bearer "+this.authToken}});return e.handle(n)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac}),t})(),U=(()=>{class t{}return t.\u0275mod=b.Fb({type:t,bootstrap:[s]}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},providers:[{provide:i.a,useClass:z,multi:!0}],imports:[[o.c,i.c,T]]}),t})()}}]);