(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{zlHG:function(t,e,o){"use strict";o.r(e),o.d(e,"AppModule",(function(){return pt}));var n=o("ofXK"),i=o("fXoL"),r=o("tk/3"),s=o("VLs4"),b=o.n(s),c=o("tyNb");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-root"]],decls:8,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"],["routerLink","admin","routerLinkActive","active",1,"item"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"a",1),i.pc(2,"Home"),i.Nb(),i.Ob(3,"a",2),i.pc(4,"B\xfccher"),i.Nb(),i.Ob(5,"a",3),i.pc(6,"Administration"),i.Nb(),i.Nb(),i.Kb(7,"router-outlet"))},directives:[c.g,c.f,c.i],styles:[""]}),t})();var u=o("XNiG"),l=o("pLZG"),h=o("Kj3r"),m=o("/uUt"),p=o("vkgz"),d=o("eIep"),f=o("z6cu"),g=o("un/a"),k=o("lJxs"),O=o("JIr8");class v{static fromRaw(t){return Object.assign(Object.assign({},t),{published:new Date(t.published)})}}let N=(()=>{class t{constructor(t){this.http=t,this.api="https://api4.angular-buch.com/secure"}getAll(){return this.http.get(`${this.api}/books`).pipe(Object(g.a)(3),Object(k.a)(t=>t.map(t=>v.fromRaw(t))),Object(O.a)(this.errorHandler))}getSingle(t){return this.http.get(`${this.api}/book/${t}`).pipe(Object(g.a)(3),Object(k.a)(t=>v.fromRaw(t)),Object(O.a)(this.errorHandler))}create(t){return this.http.post(`${this.api}/book`,t,{responseType:"text"}).pipe(Object(O.a)(this.errorHandler))}update(t){return this.http.put(`${this.api}/book/${t.isbn}`,t,{responseType:"text"}).pipe(Object(O.a)(this.errorHandler))}remove(t){return this.http.delete(`${this.api}/book/${t}`,{responseType:"text"}).pipe(Object(O.a)(this.errorHandler))}getAllSearch(t){return this.http.get(`${this.api}/books/search/${t}`).pipe(Object(g.a)(3),Object(k.a)(t=>t.map(t=>v.fromRaw(t))),Object(O.a)(this.errorHandler))}check(t){return this.http.get(`${this.api}/book/${t}/check`).pipe(Object(O.a)(this.errorHandler))}errorHandler(t){return console.error("Fehler aufgetreten!"),Object(f.a)(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(r.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const y=function(t){return["..","books",t]};function w(t,e){if(1&t&&(i.Ob(0,"a",7),i.pc(1),i.Ob(2,"p",8),i.pc(3),i.Nb(),i.Nb()),2&t){const t=e.$implicit;i.ec("routerLink",i.gc(3,y,t.isbn)),i.zb(1),i.rc(" ",t.title," "),i.zb(2),i.qc(t.subtitle)}}function F(t,e){if(1&t&&(i.Ob(0,"div",5),i.nc(1,w,4,5,"a",6),i.Nb()),2&t){const t=i.ac();i.zb(1),i.ec("ngForOf",t.foundBooks)}}let j=(()=>{class t{constructor(t){this.bs=t,this.keyUp$=new u.a,this.isLoading=!1,this.foundBooks=[]}ngOnInit(){this.keyUp$.pipe(Object(l.a)(t=>t.length>=3),Object(h.a)(500),Object(m.a)(),Object(p.a)(()=>this.isLoading=!0),Object(d.a)(t=>this.bs.getAllSearch(t)),Object(p.a)(()=>this.isLoading=!1)).subscribe(t=>this.foundBooks=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(N))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-search"]],decls:5,vars:3,consts:[[1,"ui","search"],[1,"ui","icon","input"],["type","text",1,"prompt",3,"keyup"],[1,"search","icon"],["class","results transition visible",4,"ngIf"],[1,"results","transition","visible"],["class","result",3,"routerLink",4,"ngFor","ngForOf"],[1,"result",3,"routerLink"],[1,"description"]],template:function(t,e){1&t&&(i.Ob(0,"div",0),i.Ob(1,"div",1),i.Ob(2,"input",2),i.Yb("keyup",(function(t){return e.keyUp$.next(t.target.value)})),i.Nb(),i.Kb(3,"i",3),i.Nb(),i.nc(4,F,2,1,"div",4),i.Nb()),2&t&&(i.Bb("loading",e.isLoading),i.zb(4),i.ec("ngIf",e.foundBooks.length))},directives:[n.k,n.j,c.g],styles:[""]}),t})();const B=[{path:"",component:a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-home"]],decls:10,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(t,e){1&t&&(i.Ob(0,"h1"),i.pc(1,"Home"),i.Nb(),i.Ob(2,"p"),i.pc(3,"Das ist der BookMonkey."),i.Nb(),i.Ob(4,"a",0),i.pc(5," Buchliste ansehen "),i.Kb(6,"i",1),i.Nb(),i.Ob(7,"h2"),i.pc(8,"Suche"),i.Nb(),i.Kb(9,"bm-search"))},directives:[c.g,j],styles:[""]}),t})()}]}];let I=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(B)],c.h]}),t})(),z=(()=>{class t{constructor(){this.authToken="1234567890"}intercept(t,e){const o=t.clone({setHeaders:{Authorization:`Bearer ${this.authToken}`}});return e.handle(o)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac}),t})(),A=(()=>{class t{onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Eb({type:t,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.Yb("mouseenter",(function(){return e.onMouseEnter()}))("mouseleave",(function(){return e.onMouseLeave()})),2&t&&i.Bb("small",e.isZoomed)}}),t})(),L=(()=>{class t{transform(t){return t?`${t.substr(0,3)}-${t.substr(3)}`:null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Ib({name:"isbn",type:t,pure:!0}),t})();function K(t,e){if(1&t&&i.Kb(0,"img",6),2&t){const t=i.ac();i.ec("src",t.book.thumbnails[0].url,i.kc)}}function $(t,e){if(1&t&&(i.Ob(0,"div",7),i.pc(1),i.Nb()),2&t){const t=i.ac();i.zb(1),i.qc(t.book.subtitle)}}function C(t,e){1&t&&(i.Ob(0,"span"),i.pc(1,", "),i.Nb())}function D(t,e){if(1&t&&(i.Ob(0,"span"),i.pc(1),i.nc(2,C,2,0,"span",8),i.Nb()),2&t){const t=e.$implicit,o=e.last;i.zb(1),i.rc(" ",t,""),i.zb(1),i.ec("ngIf",!o)}}let E=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:10,vars:7,consts:[["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,e){1&t&&(i.nc(0,K,1,1,"img",0),i.Ob(1,"div",1),i.Ob(2,"div",2),i.pc(3),i.Nb(),i.nc(4,$,2,1,"div",3),i.Ob(5,"div",4),i.nc(6,D,3,2,"span",5),i.Kb(7,"br"),i.pc(8),i.bc(9,"isbn"),i.Nb(),i.Nb()),2&t&&(i.ec("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),i.zb(3),i.qc(e.book.title),i.zb(1),i.ec("ngIf",e.book.subtitle),i.zb(2),i.ec("ngForOf",e.book.authors),i.zb(2),i.rc(" ISBN ",i.cc(9,5,e.book.isbn)," "))},directives:[n.k,n.j,A],pipes:[L],styles:[""]}),t})();function x(t,e){if(1&t&&i.Kb(0,"bm-book-list-item",5),2&t){const t=e.$implicit;i.ec("book",t)("routerLink",t.isbn)}}function J(t,e){1&t&&(i.Ob(0,"p"),i.pc(1,"Es wurden noch keine B\xfccher eingetragen."),i.Nb())}function H(t,e){if(1&t&&(i.Mb(0),i.nc(1,x,1,2,"bm-book-list-item",3),i.nc(2,J,2,0,"p",4),i.Lb()),2&t){const t=e.ngIf;i.zb(1),i.ec("ngForOf",t),i.zb(1),i.ec("ngIf",!t.length)}}function T(t,e){1&t&&(i.Ob(0,"div",6),i.Ob(1,"div",7),i.pc(2,"Daten werden geladen..."),i.Nb(),i.Nb())}let M=(()=>{class t{constructor(t){this.bs=t}ngOnInit(){this.books$=this.bs.getAll()}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(N))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-book-list"]],decls:5,vars:4,consts:[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(t,e){if(1&t&&(i.Ob(0,"div",0),i.nc(1,H,3,2,"ng-container",1),i.bc(2,"async"),i.nc(3,T,3,0,"ng-template",null,2,i.oc),i.Nb()),2&t){const t=i.ic(4);i.zb(1),i.ec("ngIf",i.cc(2,2,e.books$))("ngIfElse",t)}},directives:[n.k,n.j,E,c.e],pipes:[n.b],styles:[""]}),t})(),S=(()=>{class t{constructor(t,e){this.templateRef=t,this.viewContainerRef=e}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(i.K),i.Jb(i.N))},t.\u0275dir=i.Eb({type:t,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),t})();function G(t,e){if(1&t&&(i.Ob(0,"h3"),i.pc(1),i.Nb()),2&t){const t=i.ac(2);i.zb(1),i.qc(t.book.subtitle)}}function R(t,e){if(1&t&&(i.Mb(0),i.pc(1),i.Kb(2,"br"),i.Lb()),2&t){const t=e.$implicit;i.zb(1),i.rc(" ",t,"")}}function q(t,e){1&t&&i.Kb(0,"i",14)}function V(t,e){if(1&t&&(i.Mb(0),i.nc(1,q,1,0,"i",13),i.Lb()),2&t){const t=e.index;i.zb(1),i.ec("bmDelay",500+200*t)}}function U(t,e){1&t&&i.Kb(0,"img",15),2&t&&i.ec("src",e.$implicit.url,i.kc)}const Y=function(t){return["../../admin/edit",t]};function Z(t,e){if(1&t){const t=i.Pb();i.Ob(0,"div"),i.Ob(1,"h1"),i.pc(2),i.Nb(),i.nc(3,G,2,1,"h3",2),i.Kb(4,"div",3),i.Ob(5,"div",4),i.Ob(6,"div",5),i.Ob(7,"h4"),i.pc(8,"Autoren"),i.Nb(),i.nc(9,R,3,1,"ng-container",6),i.Nb(),i.Ob(10,"div",5),i.Ob(11,"h4"),i.pc(12,"ISBN"),i.Nb(),i.pc(13),i.bc(14,"isbn"),i.Nb(),i.Ob(15,"div",5),i.Ob(16,"h4"),i.pc(17,"Erschienen"),i.Nb(),i.pc(18),i.bc(19,"date"),i.Nb(),i.Ob(20,"div",5),i.Ob(21,"h4"),i.pc(22,"Rating"),i.Nb(),i.nc(23,V,2,1,"ng-container",6),i.Nb(),i.Nb(),i.Ob(24,"h4"),i.pc(25,"Beschreibung"),i.Nb(),i.Ob(26,"p"),i.pc(27),i.Nb(),i.Ob(28,"div",7),i.nc(29,U,1,1,"img",8),i.Nb(),i.Ob(30,"button",9),i.Yb("click",(function(){return i.jc(t),i.ac().removeBook()})),i.Kb(31,"i",10),i.pc(32," Buch l\xf6schen "),i.Nb(),i.Ob(33,"a",11),i.Kb(34,"i",12),i.pc(35," Buch bearbeiten "),i.Nb(),i.Nb()}if(2&t){const t=i.ac();i.zb(2),i.qc(t.book.title),i.zb(1),i.ec("ngIf",t.book.subtitle),i.zb(6),i.ec("ngForOf",t.book.authors),i.zb(4),i.rc(" ",i.cc(14,9,t.book.isbn)," "),i.zb(5),i.rc(" ",i.dc(19,11,t.book.published,"longDate")," "),i.zb(5),i.ec("ngForOf",t.getRating(t.book.rating)),i.zb(4),i.qc(t.book.description),i.zb(2),i.ec("ngForOf",t.book.thumbnails),i.zb(4),i.ec("routerLink",i.gc(14,Y,t.book.isbn))}}function X(t,e){1&t&&i.Kb(0,"div",16)}const P=[{path:"books",component:M},{path:"books/:isbn",component:(()=>{class t{constructor(t,e,o){this.bs=t,this.router=e,this.route=o}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")).subscribe(t=>this.book=t)}getRating(t){return new Array(t)}removeBook(){confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(t=>this.router.navigate(["../"],{relativeTo:this.route}))}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(N),i.Jb(c.d),i.Jb(c.a))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(t,e){if(1&t&&(i.nc(0,Z,36,16,"div",0),i.nc(1,X,1,0,"ng-template",null,1,i.oc)),2&t){const t=i.ic(2);i.ec("ngIf",e.book)("ngIfElse",t)}},directives:[n.k,n.j,c.g,S],pipes:[L,n.e],styles:[""]}),t})()}];let Q=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[c.h.forChild(P)],c.h]}),t})(),W=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[n.c,Q]]}),t})();var _=o("3Pt+"),tt=o("6XRw");class et{static isbnFormat(t){if(!t.value)return null;const e=t.value.replace(/-/g,"");return/(^\d{10}$)|(^\d{13}$)/.test(e)?null:{isbnFormat:{valid:!1}}}static atLeastOneAuthor(t){return t.controls.some(t=>t.value)?null:{atLeastOneAuthor:{valid:!1}}}}var ot=o("LRne");let nt=(()=>{class t{constructor(t){this.bs=t}validate(t){return this.bs.check(t.value).pipe(Object(k.a)(t=>!1===t?null:{isbnExists:{valid:!1}}),Object(O.a)(()=>Object(ot.a)(null)))}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(N))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function it(t,e){if(1&t&&(i.Ob(0,"div",1),i.pc(1),i.Nb()),2&t){const t=e.$implicit;i.zb(1),i.rc(" ",t,"\n")}}let rt=(()=>{class t{constructor(){this.allMessages={title:{required:"Ein Buchtitel muss angegeben werden."},isbn:{required:"Es muss eine ISBN angegeben werden.",isbnFormat:"Die ISBN muss aus 10 oder 13 Zeichen bestehen.",isbnExists:"Die ISBN existiert bereits."},published:{required:"Es muss ein Erscheinungsdatum angegeben werden."},authors:{atLeastOneAuthor:"Es muss ein Autor angegeben werden."}}}ngOnInit(){}errorsForControl(){const t=this.allMessages[this.controlName];return this.control&&this.control.errors&&t&&this.control.dirty?Object.keys(this.control.errors).map(e=>t[e]):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["bm-form-messages"]],inputs:{control:"control",controlName:"controlName"},decls:1,vars:1,consts:[["class","ui negative message",4,"ngFor","ngForOf"],[1,"ui","negative","message"]],template:function(t,e){1&t&&i.nc(0,it,2,1,"div",0),2&t&&i.ec("ngForOf",e.errorsForControl())},directives:[n.j],styles:[""]}),t})();function st(t,e){if(1&t&&(i.Ob(0,"div",16),i.Kb(1,"input",17),i.Nb()),2&t){const t=e.index;i.zb(1),i.ec("formControlName",t)}}function bt(t,e){1&t&&(i.Ob(0,"div",18),i.Ob(1,"div",19),i.Kb(2,"input",20),i.Nb(),i.Ob(3,"div",21),i.Kb(4,"input",22),i.Nb(),i.Nb()),2&t&&i.ec("formGroupName",e.index)}let ct=(()=>{class t{constructor(t,e){this.fb=t,this.bookExistsValidator=e,this.editing=!1,this.submitBook=new i.n}ngOnInit(){this.initForm()}ngOnChanges(){this.initForm(),this.setFormValues(this.book)}setFormValues(t){this.bookForm.patchValue(t),this.bookForm.setControl("authors",this.buildAuthorsArray(t.authors)),this.bookForm.setControl("thumbnails",this.buildThumbnailsArray(t.thumbnails))}initForm(){this.bookForm||(this.bookForm=this.fb.group({title:["",_.q.required],subtitle:[""],isbn:[{value:"",disabled:this.editing},[_.q.required,et.isbnFormat],this.editing?null:[this.bookExistsValidator]],description:[""],authors:this.buildAuthorsArray([""]),thumbnails:this.buildThumbnailsArray([{title:"",url:""}]),published:[]}))}buildAuthorsArray(t){return this.fb.array(t,et.atLeastOneAuthor)}buildThumbnailsArray(t){return this.fb.array(t.map(t=>this.fb.group(t)))}get authors(){return this.bookForm.get("authors")}get thumbnails(){return this.bookForm.get("thumbnails")}addAuthorControl(){this.authors.push(this.fb.control(""))}addThumbnailControl(){this.thumbnails.push(this.fb.group({url:"",title:""}))}submitForm(){const t=this.bookForm.value,e=t.authors.filter(t=>t),o=t.thumbnails.filter(t=>t.url),n=this.editing?this.book.isbn:t.isbn,i=Object.assign(Object.assign({},t),{isbn:n,authors:e,thumbnails:o});this.submitBook.emit(i),this.bookForm.reset()}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(_.c),i.Jb(nt))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-book-form"]],inputs:{book:"book",editing:"editing"},outputs:{submitBook:"submitBook"},features:[i.xb],decls:34,vars:8,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["formControlName","title"],["controlName","title",3,"control"],["formControlName","subtitle"],["formControlName","isbn"],["controlName","isbn",3,"control"],["type","date","useValueAsDate","","formControlName","published"],["controlName","published",3,"control"],["type","button",1,"ui","mini","button",3,"click"],["formArrayName","authors",1,"fields"],["class","sixteen wide field",4,"ngFor","ngForOf"],["controlName","authors",3,"control"],["formControlName","description"],["formArrayName","thumbnails"],["class","fields",3,"formGroupName",4,"ngFor","ngForOf"],["type","submit",1,"ui","button",3,"disabled"],[1,"sixteen","wide","field"],["placeholder","Autor",3,"formControlName"],[1,"fields",3,"formGroupName"],[1,"nine","wide","field"],["placeholder","URL","formControlName","url"],[1,"seven","wide","field"],["placeholder","Titel","formControlName","title"]],template:function(t,e){1&t&&(i.Ob(0,"form",0),i.Yb("ngSubmit",(function(){return e.submitForm()})),i.Ob(1,"label"),i.pc(2,"Buchtitel"),i.Nb(),i.Kb(3,"input",1),i.Kb(4,"bm-form-messages",2),i.Ob(5,"label"),i.pc(6,"Untertitel"),i.Nb(),i.Kb(7,"input",3),i.Ob(8,"label"),i.pc(9,"ISBN"),i.Nb(),i.Kb(10,"input",4),i.Kb(11,"bm-form-messages",5),i.Ob(12,"label"),i.pc(13,"Erscheinungsdatum"),i.Nb(),i.Kb(14,"input",6),i.Kb(15,"bm-form-messages",7),i.Ob(16,"label"),i.pc(17,"Autoren"),i.Nb(),i.Ob(18,"button",8),i.Yb("click",(function(){return e.addAuthorControl()})),i.pc(19," + Autor "),i.Nb(),i.Ob(20,"div",9),i.nc(21,st,2,1,"div",10),i.Nb(),i.Kb(22,"bm-form-messages",11),i.Ob(23,"label"),i.pc(24,"Beschreibung"),i.Nb(),i.Kb(25,"textarea",12),i.Ob(26,"label"),i.pc(27,"Bilder"),i.Nb(),i.Ob(28,"button",8),i.Yb("click",(function(){return e.addThumbnailControl()})),i.pc(29," + Bild "),i.Nb(),i.Ob(30,"div",13),i.nc(31,bt,5,1,"div",14),i.Nb(),i.Ob(32,"button",15),i.pc(33," Speichern "),i.Nb(),i.Nb()),2&t&&(i.ec("formGroup",e.bookForm),i.zb(4),i.ec("control",e.bookForm.get("title")),i.zb(7),i.ec("control",e.bookForm.get("isbn")),i.zb(4),i.ec("control",e.bookForm.get("published")),i.zb(6),i.ec("ngForOf",e.authors.controls),i.zb(1),i.ec("control",e.bookForm.get("authors")),i.zb(9),i.ec("ngForOf",e.thumbnails.controls),i.zb(1),i.ec("disabled",e.bookForm.invalid))},directives:[_.r,_.l,_.e,_.a,_.k,_.d,rt,tt.a,_.b,n.j,_.f],styles:[""]}),t})();function at(t,e){if(1&t){const t=i.Pb();i.Ob(0,"bm-book-form",1),i.Yb("submitBook",(function(e){return i.jc(t),i.ac().updateBook(e)})),i.Nb()}if(2&t){const t=i.ac();i.ec("book",t.book)("editing",!0)}}let ut=(()=>{class t{constructor(t,e,o){this.bs=t,this.route=e,this.router=o}ngOnInit(){this.route.paramMap.pipe(Object(k.a)(t=>t.get("isbn")),Object(d.a)(t=>this.bs.getSingle(t))).subscribe(t=>this.book=t)}updateBook(t){this.bs.update(t).subscribe(()=>{this.router.navigate(["../../..","books",t.isbn],{relativeTo:this.route})})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(N),i.Jb(c.a),i.Jb(c.d))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-edit-book"]],decls:3,vars:1,consts:[[3,"book","editing","submitBook",4,"ngIf"],[3,"book","editing","submitBook"]],template:function(t,e){1&t&&(i.Ob(0,"h1"),i.pc(1,"Buch bearbeiten"),i.Nb(),i.nc(2,at,1,2,"bm-book-form",0)),2&t&&(i.zb(2),i.ec("ngIf",e.book))},directives:[n.k,ct],styles:[""]}),t})();const lt=[{path:"admin",redirectTo:"admin/create",pathMatch:"full"},{path:"admin/create",component:(()=>{class t{constructor(t,e,o){this.bs=t,this.route=e,this.router=o}ngOnInit(){}createBook(t){this.bs.create(t).subscribe(()=>{this.router.navigate(["../..","books"],{relativeTo:this.route})})}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(N),i.Jb(c.a),i.Jb(c.d))},t.\u0275cmp=i.Db({type:t,selectors:[["bm-create-book"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(t,e){1&t&&(i.Ob(0,"h1"),i.pc(1,"Buch hinzuf\xfcgen"),i.Nb(),i.Ob(2,"bm-book-form",0),i.Yb("submitBook",(function(t){return e.createBook(t)})),i.Nb())},directives:[ct],styles:[""]}),t})()},{path:"admin/edit/:isbn",component:ut}];let ht=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[c.h.forChild(lt)],c.h]}),t})(),mt=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[n.c,ht,_.o,tt.b]]}),t})(),pt=(()=>{class t{constructor(){Object(n.o)(b.a)}}return t.\u0275mod=i.Hb({type:t,bootstrap:[a]}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},providers:[{provide:r.a,useClass:z,multi:!0},{provide:i.u,useValue:"de"}],imports:[[n.c,r.c,I,W,mt]]}),t})()}}]);