(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{a3UO:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("z6cu"),i=r("un/a"),o=r("lJxs"),s=r("JIr8");class c{static fromRaw(t){return Object.assign(Object.assign({},t),{published:new Date(t.published)})}}var a=r("fXoL"),u=r("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(`${this.api}/books`).pipe(Object(i.a)(3),Object(o.a)(t=>t.map(t=>c.fromRaw(t))),Object(s.a)(this.errorHandler))}getSingle(t){return this.http.get(`${this.api}/book/${t}`).pipe(Object(i.a)(3),Object(o.a)(t=>c.fromRaw(t)),Object(s.a)(this.errorHandler))}create(t){return this.http.post(`${this.api}/book`,t,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}update(t){return this.http.put(`${this.api}/book/${t.isbn}`,t,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}remove(t){return this.http.delete(`${this.api}/book/${t}`,{responseType:"text"}).pipe(Object(s.a)(this.errorHandler))}getAllSearch(t){return this.http.get(`${this.api}/books/search/${t}`).pipe(Object(i.a)(3),Object(o.a)(t=>t.map(t=>c.fromRaw(t))),Object(s.a)(this.errorHandler))}check(t){return this.http.get(`${this.api}/book/${t}/check`).pipe(Object(s.a)(this.errorHandler))}errorHandler(t){return console.error("Fehler aufgetreten!"),Object(n.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Ub(u.b))},t.\u0275prov=a.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xdBj:function(t,e,r){"use strict";r.r(e),r.d(e,"AppModule",(function(){return L}));var n=r("ofXK"),i=r("fXoL"),o=r("tk/3"),s=r("VLs4"),c=r.n(s),a=r("tyNb");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-root"]],decls:8,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"],["routerLink","admin","routerLinkActive","active",1,"item"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"a",1),i.pc(2,"Home"),i.Nb(),i.Ob(3,"a",2),i.pc(4,"B\xfccher"),i.Nb(),i.Ob(5,"a",3),i.pc(6,"Administration"),i.Nb(),i.Nb(),i.Kb(7,"router-outlet"))},directives:[a.g,a.f,a.i],styles:[""]}),t})();var p=r("XNiG"),b=r("pLZG"),h=r("Kj3r"),l=r("/uUt"),d=r("vkgz"),f=r("eIep"),k=r("a3UO");const O=function(t){return["..","books",t]};function m(t,e){if(1&t&&(i.Ob(0,"a",7),i.pc(1),i.Ob(2,"p",8),i.pc(3),i.Nb(),i.Nb()),2&t){const t=e.$implicit;i.ec("routerLink",i.gc(3,O,t.isbn)),i.zb(1),i.rc(" ",t.title," "),i.zb(2),i.qc(t.subtitle)}}function g(t,e){if(1&t&&(i.Ob(0,"div",5),i.nc(1,m,4,5,"a",6),i.Nb()),2&t){const t=i.ac();i.zb(1),i.ec("ngForOf",t.foundBooks)}}let v=(()=>{class t{constructor(t){this.bs=t,this.keyUp$=new p.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(b.a)(t=>t.length>=3),Object(h.a)(500),Object(l.a)(),Object(d.a)(()=>this.isLoading=!0),Object(f.a)(t=>this.bs.getAllSearch(t)),Object(d.a)(()=>this.isLoading=!1)).subscribe(t=>this.foundBooks=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(k.a))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-search"]],decls:5,vars:3,consts:[[1,"ui","search"],[1,"ui","icon","input"],["type","text",1,"prompt",3,"keyup"],[1,"search","icon"],["class","results transition visible",4,"ngIf"],[1,"results","transition","visible"],["class","result",3,"routerLink",4,"ngFor","ngForOf"],[1,"result",3,"routerLink"],[1,"description"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"input",2),i.Yb("keyup",(function(t){return e.keyUp$.next(t.target.value)})),i.Nb(),i.Kb(3,"i",3),i.Nb(),i.nc(4,g,2,1,"div",4),i.Nb()),2&t&&(i.Bb("loading",e.isLoading),i.zb(4),i.ec("ngIf",e.foundBooks.length))},directives:[n.k,n.j,a.g],styles:[""]}),t})();const j=[{path:"",component:u,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-home"]],decls:10,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(t,e){1&t&&(i.Ob(0,"h1"),i.pc(1,"Home"),i.Nb(),i.Ob(2,"p"),i.pc(3,"Das ist der BookMonkey."),i.Nb(),i.Ob(4,"a",0),i.pc(5," Buchliste ansehen "),i.Kb(6,"i",1),i.Nb(),i.Ob(7,"h2"),i.pc(8,"Suche"),i.Nb(),i.Kb(9,"bm-search"))},directives:[a.g,v],styles:[""]}),t})()},{path:"books",loadChildren:()=>r.e(28).then(r.bind(null,"+6y3")).then(t=>t.BooksModule)},{path:"admin",loadChildren:()=>Promise.all([r.e(1),r.e(27)]).then(r.bind(null,"el1n")).then(t=>t.AdminModule)}]}];let y=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(j)],a.h]}),t})(),w=(()=>{class t{constructor(){this.authToken="1234567890"}intercept(t,e){const r=t.clone({setHeaders:{Authorization:`Bearer ${this.authToken}`}});return e.handle(r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac}),t})(),L=(()=>{class t{constructor(){Object(n.o)(c.a)}}return t.\u0275mod=i.Hb({type:t,bootstrap:[u]}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},providers:[{provide:o.a,useClass:w,multi:!0},{provide:i.u,useValue:"de"}],imports:[[n.c,o.c,y]]}),t})()}}]);