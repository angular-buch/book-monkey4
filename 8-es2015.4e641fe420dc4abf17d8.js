(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{hul9:function(t,e,r){"use strict";r.r(e),r.d(e,"AppModule",(function(){return y}));var n=r("ofXK"),i=r("fXoL"),o=r("tk/3"),s=r("VLs4"),c=r.n(s),a=r("tyNb");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-root"]],decls:8,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"],["routerLink","admin","routerLinkActive","active",1,"item"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"a",1),i.mc(2,"Home"),i.Lb(),i.Mb(3,"a",2),i.mc(4,"B\xfccher"),i.Lb(),i.Mb(5,"a",3),i.mc(6,"Administration"),i.Lb(),i.Lb(),i.Ib(7,"router-outlet"))},directives:[a.g,a.f,a.i],styles:[""]}),t})();var b=r("XNiG"),p=r("pLZG"),h=r("Kj3r"),l=r("/uUt"),d=r("vkgz"),f=r("eIep"),m=r("iA8X");const k=function(t){return["..","books",t]};function g(t,e){if(1&t&&(i.Mb(0,"a",7),i.mc(1),i.Mb(2,"p",8),i.mc(3),i.Lb(),i.Lb()),2&t){const t=e.$implicit;i.bc("routerLink",i.dc(3,k,t.isbn)),i.xb(1),i.oc(" ",t.title," "),i.xb(2),i.nc(t.subtitle)}}function v(t,e){if(1&t&&(i.Mb(0,"div",5),i.kc(1,g,4,5,"a",6),i.Lb()),2&t){const t=i.Xb();i.xb(1),i.bc("ngForOf",t.foundBooks)}}let L=(()=>{class t{constructor(t){this.bs=t,this.keyUp$=new b.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(p.a)(t=>t.length>=3),Object(h.a)(500),Object(l.a)(),Object(d.a)(()=>this.isLoading=!0),Object(f.a)(t=>this.bs.getAllSearch(t)),Object(d.a)(()=>this.isLoading=!1)).subscribe(t=>this.foundBooks=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(m.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-search"]],decls:5,vars:3,consts:[[1,"ui","search"],[1,"ui","icon","input"],["type","text",1,"prompt",3,"keyup"],[1,"search","icon"],["class","results transition visible",4,"ngIf"],[1,"results","transition","visible"],["class","result",3,"routerLink",4,"ngFor","ngForOf"],[1,"result",3,"routerLink"],[1,"description"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"input",2),i.Vb("keyup",(function(t){return e.keyUp$.next(t.target.value)})),i.Lb(),i.Ib(3,"i",3),i.Lb(),i.kc(4,v,2,1,"div",4),i.Lb()),2&t&&(i.zb("loading",e.isLoading),i.xb(4),i.bc("ngIf",e.foundBooks.length))},directives:[n.k,n.j,a.g],styles:[""]}),t})();const j=[{path:"",component:u,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-home"]],decls:10,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(t,e){1&t&&(i.Mb(0,"h1"),i.mc(1,"Home"),i.Lb(),i.Mb(2,"p"),i.mc(3,"Das ist der BookMonkey."),i.Lb(),i.Mb(4,"a",0),i.mc(5," Buchliste ansehen "),i.Ib(6,"i",1),i.Lb(),i.Mb(7,"h2"),i.mc(8,"Suche"),i.Lb(),i.Ib(9,"bm-search"))},directives:[a.g,L],styles:[""]}),t})()},{path:"books",loadChildren:()=>r.e(25).then(r.bind(null,"Exd+")).then(t=>t.BooksModule)},{path:"admin",loadChildren:()=>Promise.all([r.e(1),r.e(24)]).then(r.bind(null,"bWLZ")).then(t=>t.AdminModule),canActivate:[(()=>{class t{constructor(){this.accessGranted=!1}canActivate(){return this.accessGranted||(this.accessGranted=window.confirm("Mit gro\xdfer Macht kommt gro\xdfe Verantwortung. M\xf6chten Sie den Admin-Bereich betreten?")),this.accessGranted}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]}]}];let O=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(j)],a.h]}),t})(),w=(()=>{class t{constructor(){this.authToken="1234567890"}intercept(t,e){const r=t.clone({setHeaders:{Authorization:"Bearer "+this.authToken}});return e.handle(r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})(),y=(()=>{class t{constructor(){Object(n.o)(c.a)}}return t.\u0275mod=i.Fb({type:t,bootstrap:[u]}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},providers:[{provide:o.a,useClass:w,multi:!0},{provide:i.u,useValue:"de"}],imports:[[n.c,o.c,O]]}),t})()},iA8X:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r("z6cu"),i=r("un/a"),o=r("lJxs"),s=r("JIr8");class c{static fromRaw(t){return Object.assign(Object.assign({},t),{published:new Date(t.published)})}}var a=r("fXoL"),u=r("tk/3");let b=(()=>{class t{constructor(t){this.http=t,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(this.api+"/books").pipe(Object(i.a)(3),Object(o.a)(t=>t.map(t=>c.fromRaw(t))),Object(s.a)(this.errorHandler))}getSingle(t){return this.http.get(`${this.api}/book/${t}`).pipe(Object(i.a)(3),Object(o.a)(t=>c.fromRaw(t)),Object(s.a)(this.errorHandler))}create(t){return this.http.post(this.api+"/book",t,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}update(t){return this.http.put(`${this.api}/book/${t.isbn}`,t,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}remove(t){return this.http.delete(`${this.api}/book/${t}`,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}getAllSearch(t){return this.http.get(`${this.api}/books/search/${t}`).pipe(Object(i.a)(3),Object(o.a)(t=>t.map(t=>c.fromRaw(t))),Object(s.a)(this.errorHandler))}check(t){return this.http.get(`${this.api}/book/${t}/check`).pipe(Object(s.a)(this.errorHandler))}errorHandler(t){return console.error("Fehler aufgetreten!"),Object(n.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Sb(u.b))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);