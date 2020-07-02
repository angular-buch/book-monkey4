(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{zlHG:function(t,e,o){"use strict";o.r(e),o.d(e,"AppModule",(function(){return dt}));var n=o("ofXK"),i=o("fXoL"),r=o("tk/3"),s=o("VLs4"),b=o.n(s),c=o("tyNb");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-root"]],decls:8,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"],["routerLink","admin","routerLinkActive","active",1,"item"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"a",1),i.mc(2,"Home"),i.Lb(),i.Mb(3,"a",2),i.mc(4,"B\xfccher"),i.Lb(),i.Mb(5,"a",3),i.mc(6,"Administration"),i.Lb(),i.Lb(),i.Ib(7,"router-outlet"))},directives:[c.g,c.f,c.i],styles:[""]}),t})();var u=o("XNiG"),l=o("pLZG"),m=o("Kj3r"),h=o("/uUt"),d=o("vkgz"),p=o("eIep"),f=o("z6cu"),g=o("un/a"),k=o("lJxs"),v=o("JIr8");class L{static fromRaw(t){return Object.assign(Object.assign({},t),{published:new Date(t.published)})}}let y=(()=>{class t{constructor(t){this.http=t,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(this.api+"/books").pipe(Object(g.a)(3),Object(k.a)(t=>t.map(t=>L.fromRaw(t))),Object(v.a)(this.errorHandler))}getSingle(t){return this.http.get(`${this.api}/book/${t}`).pipe(Object(g.a)(3),Object(k.a)(t=>L.fromRaw(t)),Object(v.a)(this.errorHandler))}create(t){return this.http.post(this.api+"/book",t,{responseType:"text"}).pipe(Object(v.a)(this.errorHandler))}update(t){return this.http.put(`${this.api}/book/${t.isbn}`,t,{responseType:"text"}).pipe(Object(v.a)(this.errorHandler))}remove(t){return this.http.delete(`${this.api}/book/${t}`,{responseType:"text"}).pipe(Object(v.a)(this.errorHandler))}getAllSearch(t){return this.http.get(`${this.api}/books/search/${t}`).pipe(Object(g.a)(3),Object(k.a)(t=>t.map(t=>L.fromRaw(t))),Object(v.a)(this.errorHandler))}check(t){return this.http.get(`${this.api}/book/${t}/check`).pipe(Object(v.a)(this.errorHandler))}errorHandler(t){return console.error("Fehler aufgetreten!"),Object(f.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(r.b))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const M=function(t){return["..","books",t]};function I(t,e){if(1&t&&(i.Mb(0,"a",7),i.mc(1),i.Mb(2,"p",8),i.mc(3),i.Lb(),i.Lb()),2&t){const t=e.$implicit;i.bc("routerLink",i.dc(3,M,t.isbn)),i.xb(1),i.oc(" ",t.title," "),i.xb(2),i.nc(t.subtitle)}}function O(t,e){if(1&t&&(i.Mb(0,"div",5),i.kc(1,I,4,5,"a",6),i.Lb()),2&t){const t=i.Xb();i.xb(1),i.bc("ngForOf",t.foundBooks)}}let F=(()=>{class t{constructor(t){this.bs=t,this.keyUp$=new u.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(l.a)(t=>t.length>=3),Object(m.a)(500),Object(h.a)(),Object(d.a)(()=>this.isLoading=!0),Object(p.a)(t=>this.bs.getAllSearch(t)),Object(d.a)(()=>this.isLoading=!1)).subscribe(t=>this.foundBooks=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(y))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-search"]],decls:5,vars:3,consts:[[1,"ui","search"],[1,"ui","icon","input"],["type","text",1,"prompt",3,"keyup"],[1,"search","icon"],["class","results transition visible",4,"ngIf"],[1,"results","transition","visible"],["class","result",3,"routerLink",4,"ngFor","ngForOf"],[1,"result",3,"routerLink"],[1,"description"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"input",2),i.Vb("keyup",(function(t){return e.keyUp$.next(t.target.value)})),i.Lb(),i.Ib(3,"i",3),i.Lb(),i.kc(4,O,2,1,"div",4),i.Lb()),2&t&&(i.zb("loading",e.isLoading),i.xb(4),i.bc("ngIf",e.foundBooks.length))},directives:[n.k,n.j,c.g],styles:[""]}),t})();const w=[{path:"",component:a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-home"]],decls:10,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(t,e){1&t&&(i.Mb(0,"h1"),i.mc(1,"Home"),i.Lb(),i.Mb(2,"p"),i.mc(3,"Das ist der BookMonkey."),i.Lb(),i.Mb(4,"a",0),i.mc(5," Buchliste ansehen "),i.Ib(6,"i",1),i.Lb(),i.Mb(7,"h2"),i.mc(8,"Suche"),i.Lb(),i.Ib(9,"bm-search"))},directives:[c.g,F],styles:[""]}),t})()}]}];let x=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(w)],c.h]}),t})(),B=(()=>{class t{constructor(){this.authToken="1234567890"}intercept(t,e){const o=t.clone({setHeaders:{Authorization:"Bearer "+this.authToken}});return e.handle(o)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})(),j=(()=>{class t{onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Cb({type:t,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.Vb("mouseenter",(function(){return e.onMouseEnter()}))("mouseleave",(function(){return e.onMouseLeave()})),2&t&&i.zb("small",e.isZoomed)}}),t})(),A=(()=>{class t{transform(t){return t?`${t.substr(0,3)}-${t.substr(3)}`:null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Gb({name:"isbn",type:t,pure:!0}),t})();function N(t,e){if(1&t&&i.Ib(0,"img",6),2&t){const t=i.Xb();i.bc("src",t.book.thumbnails[0].url,i.hc)}}function C(t,e){if(1&t&&(i.Mb(0,"div",7),i.mc(1),i.Lb()),2&t){const t=i.Xb();i.xb(1),i.nc(t.book.subtitle)}}function H(t,e){1&t&&(i.Mb(0,"span"),i.mc(1,", "),i.Lb())}function E(t,e){if(1&t&&(i.Mb(0,"span"),i.mc(1),i.kc(2,H,2,0,"span",8),i.Lb()),2&t){const t=e.$implicit,o=e.last;i.xb(1),i.oc(" ",t,""),i.xb(1),i.bc("ngIf",!o)}}let $=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:10,vars:7,consts:[["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,e){1&t&&(i.kc(0,N,1,1,"img",0),i.Mb(1,"div",1),i.Mb(2,"div",2),i.mc(3),i.Lb(),i.kc(4,C,2,1,"div",3),i.Mb(5,"div",4),i.kc(6,E,3,2,"span",5),i.Ib(7,"br"),i.mc(8),i.Yb(9,"isbn"),i.Lb(),i.Lb()),2&t&&(i.bc("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),i.xb(3),i.nc(e.book.title),i.xb(1),i.bc("ngIf",e.book.subtitle),i.xb(2),i.bc("ngForOf",e.book.authors),i.xb(2),i.oc(" ISBN ",i.Zb(9,5,e.book.isbn)," "))},directives:[n.k,n.j,j],pipes:[A],styles:[""]}),t})();function V(t,e){if(1&t&&i.Ib(0,"bm-book-list-item",5),2&t){const t=e.$implicit;i.bc("book",t)("routerLink",t.isbn)}}function S(t,e){1&t&&(i.Mb(0,"p"),i.mc(1,"Es wurden noch keine B\xfccher eingetragen."),i.Lb())}function T(t,e){if(1&t&&(i.Kb(0),i.kc(1,V,1,2,"bm-book-list-item",3),i.kc(2,S,2,0,"p",4),i.Jb()),2&t){const t=e.ngIf;i.xb(1),i.bc("ngForOf",t),i.xb(1),i.bc("ngIf",!t.length)}}function D(t,e){1&t&&(i.Mb(0,"div",6),i.Mb(1,"div",7),i.mc(2,"Daten werden geladen..."),i.Lb(),i.Lb())}let R=(()=>{class t{constructor(t){this.bs=t}ngOnInit(){this.books$=this.bs.getAll()}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(y))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-book-list"]],decls:5,vars:4,consts:[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(t,e){if(1&t&&(i.Mb(0,"div",0),i.kc(1,T,3,2,"ng-container",1),i.Yb(2,"async"),i.kc(3,D,3,0,"ng-template",null,2,i.lc),i.Lb()),2&t){const t=i.fc(4);i.xb(1),i.bc("ngIf",i.Zb(2,2,e.books$))("ngIfElse",t)}},directives:[n.k,n.j,$,c.e],pipes:[n.b],styles:[""]}),t})(),X=(()=>{class t{constructor(t,e){this.templateRef=t,this.viewContainerRef=e}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(i.K),i.Hb(i.O))},t.\u0275dir=i.Cb({type:t,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),t})();function Z(t,e){if(1&t&&(i.Mb(0,"h3"),i.mc(1),i.Lb()),2&t){const t=i.Xb(2);i.xb(1),i.nc(t.book.subtitle)}}function G(t,e){if(1&t&&(i.Kb(0),i.mc(1),i.Ib(2,"br"),i.Jb()),2&t){const t=e.$implicit;i.xb(1),i.oc(" ",t,"")}}function q(t,e){1&t&&i.Ib(0,"i",14)}function z(t,e){if(1&t&&(i.Kb(0),i.kc(1,q,1,0,"i",13),i.Jb()),2&t){const t=e.index;i.xb(1),i.bc("bmDelay",500+200*t)}}function J(t,e){1&t&&i.Ib(0,"img",15),2&t&&i.bc("src",e.$implicit.url,i.hc)}const K=function(t){return["../../admin/edit",t]};function U(t,e){if(1&t){const t=i.Nb();i.Mb(0,"div"),i.Mb(1,"h1"),i.mc(2),i.Lb(),i.kc(3,Z,2,1,"h3",2),i.Ib(4,"div",3),i.Mb(5,"div",4),i.Mb(6,"div",5),i.Mb(7,"h4"),i.mc(8,"Autoren"),i.Lb(),i.kc(9,G,3,1,"ng-container",6),i.Lb(),i.Mb(10,"div",5),i.Mb(11,"h4"),i.mc(12,"ISBN"),i.Lb(),i.mc(13),i.Yb(14,"isbn"),i.Lb(),i.Mb(15,"div",5),i.Mb(16,"h4"),i.mc(17,"Erschienen"),i.Lb(),i.mc(18),i.Yb(19,"date"),i.Lb(),i.Mb(20,"div",5),i.Mb(21,"h4"),i.mc(22,"Rating"),i.Lb(),i.kc(23,z,2,1,"ng-container",6),i.Lb(),i.Lb(),i.Mb(24,"h4"),i.mc(25,"Beschreibung"),i.Lb(),i.Mb(26,"p"),i.mc(27),i.Lb(),i.Mb(28,"div",7),i.kc(29,J,1,1,"img",8),i.Lb(),i.Mb(30,"button",9),i.Vb("click",(function(){return i.gc(t),i.Xb().removeBook()})),i.Ib(31,"i",10),i.mc(32," Buch l\xf6schen "),i.Lb(),i.Mb(33,"a",11),i.Ib(34,"i",12),i.mc(35," Buch bearbeiten "),i.Lb(),i.Lb()}if(2&t){const t=i.Xb();i.xb(2),i.nc(t.book.title),i.xb(1),i.bc("ngIf",t.book.subtitle),i.xb(6),i.bc("ngForOf",t.book.authors),i.xb(4),i.oc(" ",i.Zb(14,9,t.book.isbn)," "),i.xb(5),i.oc(" ",i.ac(19,11,t.book.published,"longDate")," "),i.xb(5),i.bc("ngForOf",t.getRating(t.book.rating)),i.xb(4),i.nc(t.book.description),i.xb(2),i.bc("ngForOf",t.book.thumbnails),i.xb(4),i.bc("routerLink",i.dc(14,K,t.book.isbn))}}function Y(t,e){1&t&&i.Ib(0,"div",16)}const P=[{path:"books",component:R},{path:"books/:isbn",component:(()=>{class t{constructor(t,e,o){this.bs=t,this.router=e,this.route=o}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(t=>this.book=t)}getRating(t){return new Array(t)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(t=>this.router.navigate(["../"],{relativeTo:this.route}))}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(y),i.Hb(c.d),i.Hb(c.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(t,e){if(1&t&&(i.kc(0,U,36,16,"div",0),i.kc(1,Y,1,0,"ng-template",null,1,i.lc)),2&t){const t=i.fc(2);i.bc("ngIf",e.book)("ngIfElse",t)}},directives:[n.k,n.j,c.g,X],pipes:[A,n.e],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),t})()}];let _=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},providers:[],imports:[[c.h.forChild(P)],c.h]}),t})(),Q=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[n.c,_]]}),t})();var W=o("3Pt+"),tt=o("6XRw");class et{static isbnFormat(t){if(!t.value)return null;const e=t.value.replace(/-/g,"");return/(^\d{10}$)|(^\d{13}$)/.test(e)?null:{isbnFormat:{valid:!1}}}static atLeastOneAuthor(t){return t.controls.some(t=>t.value)?null:{atLeastOneAuthor:{valid:!1}}}}var ot=o("LRne");let nt=(()=>{class t{constructor(t){this.bs=t}validate(t){return this.bs.check(t.value).pipe(Object(k.a)(t=>!1===t?null:{isbnExists:{valid:!1}}),Object(v.a)(()=>Object(ot.a)(null)))}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(y))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function it(t,e){if(1&t&&(i.Mb(0,"div",1),i.mc(1),i.Lb()),2&t){const t=e.$implicit;i.xb(1),i.oc(" ",t,"\n")}}let rt=(()=>{class t{constructor(){this.allMessages={title:{required:"Ein Buchtitel muss angegeben werden."},isbn:{required:"Es muss eine ISBN angegeben werden.",isbnFormat:"Die ISBN muss aus 10 oder 13 Zeichen bestehen.",isbnExists:"Die ISBN existiert bereits."},published:{required:"Es muss ein Erscheinungsdatum angegeben werden."},authors:{atLeastOneAuthor:"Es muss ein Autor angegeben werden."}}}ngOnInit(){}errorsForControl(){const t=this.allMessages[this.controlName];return this.control&&this.control.errors&&t&&this.control.dirty?Object.keys(this.control.errors).map(e=>t[e]):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-form-messages"]],inputs:{control:"control",controlName:"controlName"},decls:1,vars:1,consts:[["class","ui negative message",4,"ngFor","ngForOf"],[1,"ui","negative","message"]],template:function(t,e){1&t&&i.kc(0,it,2,1,"div",0),2&t&&i.bc("ngForOf",e.errorsForControl())},directives:[n.j],styles:[""]}),t})();function st(t,e){if(1&t&&(i.Mb(0,"div",16),i.Ib(1,"input",17),i.Lb()),2&t){const t=e.index;i.xb(1),i.bc("formControlName",t)}}function bt(t,e){1&t&&(i.Mb(0,"div",18),i.Mb(1,"div",19),i.Ib(2,"input",20),i.Lb(),i.Mb(3,"div",21),i.Ib(4,"input",22),i.Lb(),i.Lb()),2&t&&i.bc("formGroupName",e.index)}let ct=(()=>{class t{constructor(t,e){this.fb=t,this.bookExistsValidator=e,this.editing=!1,this.submitBook=new i.n}ngOnInit(){this.initForm()}ngOnChanges(){this.initForm(),this.setFormValues(this.book)}setFormValues(t){this.bookForm.patchValue(t),this.bookForm.setControl("authors",this.buildAuthorsArray(t.authors)),this.bookForm.setControl("thumbnails",this.buildThumbnailsArray(t.thumbnails))}initForm(){this.bookForm||(this.bookForm=this.fb.group({title:["",W.q.required],subtitle:[""],isbn:[{value:"",disabled:this.editing},[W.q.required,et.isbnFormat],this.editing?null:[this.bookExistsValidator]],description:[""],authors:this.buildAuthorsArray([""]),thumbnails:this.buildThumbnailsArray([{title:"",url:""}]),published:[]}))}buildAuthorsArray(t){return this.fb.array(t,et.atLeastOneAuthor)}buildThumbnailsArray(t){return this.fb.array(t.map(t=>this.fb.group(t)))}get authors(){return this.bookForm.get("authors")}get thumbnails(){return this.bookForm.get("thumbnails")}addAuthorControl(){this.authors.push(this.fb.control(""))}addThumbnailControl(){this.thumbnails.push(this.fb.group({url:"",title:""}))}submitForm(){const t=this.bookForm.value,e=t.authors.filter(t=>t),o=t.thumbnails.filter(t=>t.url),n=this.editing?this.book.isbn:t.isbn,i=Object.assign(Object.assign({},t),{isbn:n,authors:e,thumbnails:o});this.submitBook.emit(i),this.bookForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(W.c),i.Hb(nt))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-book-form"]],inputs:{book:"book",editing:"editing"},outputs:{submitBook:"submitBook"},features:[i.vb],decls:34,vars:8,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["formControlName","title"],["controlName","title",3,"control"],["formControlName","subtitle"],["formControlName","isbn"],["controlName","isbn",3,"control"],["type","date","useValueAsDate","","formControlName","published"],["controlName","published",3,"control"],["type","button",1,"ui","mini","button",3,"click"],["formArrayName","authors",1,"fields"],["class","sixteen wide field",4,"ngFor","ngForOf"],["controlName","authors",3,"control"],["formControlName","description"],["formArrayName","thumbnails"],["class","fields",3,"formGroupName",4,"ngFor","ngForOf"],["type","submit",1,"ui","button",3,"disabled"],[1,"sixteen","wide","field"],["placeholder","Autor",3,"formControlName"],[1,"fields",3,"formGroupName"],[1,"nine","wide","field"],["placeholder","URL","formControlName","url"],[1,"seven","wide","field"],["placeholder","Titel","formControlName","title"]],template:function(t,e){1&t&&(i.Mb(0,"form",0),i.Vb("ngSubmit",(function(){return e.submitForm()})),i.Mb(1,"label"),i.mc(2,"Buchtitel"),i.Lb(),i.Ib(3,"input",1),i.Ib(4,"bm-form-messages",2),i.Mb(5,"label"),i.mc(6,"Untertitel"),i.Lb(),i.Ib(7,"input",3),i.Mb(8,"label"),i.mc(9,"ISBN"),i.Lb(),i.Ib(10,"input",4),i.Ib(11,"bm-form-messages",5),i.Mb(12,"label"),i.mc(13,"Erscheinungsdatum"),i.Lb(),i.Ib(14,"input",6),i.Ib(15,"bm-form-messages",7),i.Mb(16,"label"),i.mc(17,"Autoren"),i.Lb(),i.Mb(18,"button",8),i.Vb("click",(function(){return e.addAuthorControl()})),i.mc(19," + Autor "),i.Lb(),i.Mb(20,"div",9),i.kc(21,st,2,1,"div",10),i.Lb(),i.Ib(22,"bm-form-messages",11),i.Mb(23,"label"),i.mc(24,"Beschreibung"),i.Lb(),i.Ib(25,"textarea",12),i.Mb(26,"label"),i.mc(27,"Bilder"),i.Lb(),i.Mb(28,"button",8),i.Vb("click",(function(){return e.addThumbnailControl()})),i.mc(29," + Bild "),i.Lb(),i.Mb(30,"div",13),i.kc(31,bt,5,1,"div",14),i.Lb(),i.Mb(32,"button",15),i.mc(33," Speichern "),i.Lb(),i.Lb()),2&t&&(i.bc("formGroup",e.bookForm),i.xb(4),i.bc("control",e.bookForm.get("title")),i.xb(7),i.bc("control",e.bookForm.get("isbn")),i.xb(4),i.bc("control",e.bookForm.get("published")),i.xb(6),i.bc("ngForOf",e.authors.controls),i.xb(1),i.bc("control",e.bookForm.get("authors")),i.xb(9),i.bc("ngForOf",e.thumbnails.controls),i.xb(1),i.bc("disabled",e.bookForm.invalid))},directives:[W.r,W.l,W.e,W.a,W.k,W.d,rt,tt.a,W.b,n.j,W.f],styles:[""]}),t})();function at(t,e){if(1&t){const t=i.Nb();i.Mb(0,"bm-book-form",1),i.Vb("submitBook",(function(e){return i.gc(t),i.Xb().updateBook(e)})),i.Lb()}if(2&t){const t=i.Xb();i.bc("book",t.book)("editing",!0)}}let ut=(()=>{class t{constructor(t,e,o){this.bs=t,this.route=e,this.router=o}ngOnInit(){this.route.paramMap.pipe(Object(k.a)(t=>t.get("isbn")),Object(p.a)(t=>this.bs.getSingle(t))).subscribe(t=>this.book=t)}updateBook(t){this.bs.update(t).subscribe(()=>{this.router.navigate(["../../..","books",t.isbn],{relativeTo:this.route})})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(y),i.Hb(c.a),i.Hb(c.d))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-edit-book"]],decls:3,vars:1,consts:[[3,"book","editing","submitBook",4,"ngIf"],[3,"book","editing","submitBook"]],template:function(t,e){1&t&&(i.Mb(0,"h1"),i.mc(1,"Buch bearbeiten"),i.Lb(),i.kc(2,at,1,2,"bm-book-form",0)),2&t&&(i.xb(2),i.bc("ngIf",e.book))},directives:[n.k,ct],styles:[""]}),t})();const lt=[{path:"admin",redirectTo:"admin/create",pathMatch:"full"},{path:"admin/create",component:(()=>{class t{constructor(t,e,o){this.bs=t,this.route=e,this.router=o}ngOnInit(){}createBook(t){this.bs.create(t).subscribe(()=>{this.router.navigate(["../..","books"],{relativeTo:this.route})})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(y),i.Hb(c.a),i.Hb(c.d))},t.\u0275cmp=i.Bb({type:t,selectors:[["bm-create-book"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(t,e){1&t&&(i.Mb(0,"h1"),i.mc(1,"Buch hinzuf\xfcgen"),i.Lb(),i.Mb(2,"bm-book-form",0),i.Vb("submitBook",(function(t){return e.createBook(t)})),i.Lb())},directives:[ct],styles:[""]}),t})()},{path:"admin/edit/:isbn",component:ut}];let mt=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},providers:[],imports:[[c.h.forChild(lt)],c.h]}),t})(),ht=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[n.c,mt,W.o,tt.b]]}),t})(),dt=(()=>{class t{constructor(){Object(n.o)(b.a)}}return t.\u0275mod=i.Fb({type:t,bootstrap:[a]}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},providers:[{provide:r.a,useClass:B,multi:!0},{provide:i.u,useValue:"de"}],imports:[[n.c,r.c,x,Q,ht]]}),t})()}}]);