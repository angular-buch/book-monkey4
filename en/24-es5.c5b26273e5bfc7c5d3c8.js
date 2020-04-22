function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{bWLZ:function(t,e,o){"use strict";o.r(e),o.d(e,"AdminModule",(function(){return K}));var n,r=o("ofXK"),i=o("3Pt+"),s=o("6XRw"),u=o("tyNb"),a=o("fXoL"),b=o("iA8X"),l=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"isbnFormat",value:function(t){if(!t.value)return null;var e=t.value.replace(/-/g,"");return/(^\d{10}$)|(^\d{13}$)/.test(e)?null:{isbnFormat:{valid:!1}}}},{key:"atLeastOneAuthor",value:function(t){return t.controls.some((function(t){return t.value}))?null:{atLeastOneAuthor:{valid:!1}}}}]),t}(),c=o("LRne"),f=o("lJxs"),m=o("JIr8"),h=((n=function(){function t(e){_classCallCheck(this,t),this.bs=e}return _createClass(t,[{key:"validate",value:function(t){return this.bs.check(t.value).pipe(Object(f.a)((function(t){return!1===t?null:{isbnExists:{valid:!1}}})),Object(m.a)((function(){return Object(c.a)(null)})))}}]),t}()).\u0275fac=function(t){return new(t||n)(a.Ub(b.a))},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n);function d(t,e){if(1&t&&(a.Ob(0,"div",1),a.pc(1),a.Nb()),2&t){var o=e.$implicit;a.zb(1),a.rc(" ",o,"\n")}}var p,k=((p=function(){function t(){_classCallCheck(this,t),this.allMessages={title:{required:"Ein Buchtitel muss angegeben werden."},isbn:{required:"Es muss eine ISBN angegeben werden.",isbnFormat:"Die ISBN muss aus 10 oder 13 Zeichen bestehen.",isbnExists:"Die ISBN existiert bereits."},published:{required:"Es muss ein Erscheinungsdatum angegeben werden."},authors:{atLeastOneAuthor:"Es muss ein Autor angegeben werden."}}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"errorsForControl",value:function(){var t=this.allMessages[this.controlName];return this.control&&this.control.errors&&t&&this.control.dirty?Object.keys(this.control.errors).map((function(e){return t[e]})):null}}]),t}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=a.Db({type:p,selectors:[["bm-form-messages"]],inputs:{control:"control",controlName:"controlName"},decls:1,vars:1,consts:[["class","ui negative message",4,"ngFor","ngForOf"],[1,"ui","negative","message"]],template:function(t,e){1&t&&a.nc(0,d,2,1,"div",0),2&t&&a.ec("ngForOf",e.errorsForControl())},directives:[r.j],styles:[""]}),p);function v(t,e){if(1&t&&(a.Ob(0,"div",16),a.Kb(1,"input",17),a.Nb()),2&t){var o=e.index;a.zb(1),a.ec("formControlName",o)}}function g(t,e){1&t&&(a.Ob(0,"div",18),a.Ob(1,"div",19),a.Kb(2,"input",20),a.Nb(),a.Ob(3,"div",21),a.Kb(4,"input",22),a.Nb(),a.Nb()),2&t&&a.ec("formGroupName",e.index)}var y,N,O=((N=function(){function t(e,o){_classCallCheck(this,t),this.fb=e,this.bookExistsValidator=o,this.editing=!1,this.submitBook=new a.n}return _createClass(t,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"ngOnChanges",value:function(){this.initForm(),this.setFormValues(this.book)}},{key:"setFormValues",value:function(t){this.bookForm.patchValue(t),this.bookForm.setControl("authors",this.buildAuthorsArray(t.authors)),this.bookForm.setControl("thumbnails",this.buildThumbnailsArray(t.thumbnails))}},{key:"initForm",value:function(){this.bookForm||(this.bookForm=this.fb.group({title:["",i.q.required],subtitle:[""],isbn:[{value:"",disabled:this.editing},[i.q.required,l.isbnFormat],this.editing?null:[this.bookExistsValidator]],description:[""],authors:this.buildAuthorsArray([""]),thumbnails:this.buildThumbnailsArray([{title:"",url:""}]),published:[]}))}},{key:"buildAuthorsArray",value:function(t){return this.fb.array(t,l.atLeastOneAuthor)}},{key:"buildThumbnailsArray",value:function(t){var e=this;return this.fb.array(t.map((function(t){return e.fb.group(t)})))}},{key:"addAuthorControl",value:function(){this.authors.push(this.fb.control(""))}},{key:"addThumbnailControl",value:function(){this.thumbnails.push(this.fb.group({url:"",title:""}))}},{key:"submitForm",value:function(){var t=this.bookForm.value,e=t.authors.filter((function(t){return t})),o=t.thumbnails.filter((function(t){return t.url})),n=this.editing?this.book.isbn:t.isbn,r=Object.assign(Object.assign({},t),{isbn:n,authors:e,thumbnails:o});this.submitBook.emit(r),this.bookForm.reset()}},{key:"authors",get:function(){return this.bookForm.get("authors")}},{key:"thumbnails",get:function(){return this.bookForm.get("thumbnails")}}]),t}()).\u0275fac=function(t){return new(t||N)(a.Jb(i.c),a.Jb(h))},N.\u0275cmp=a.Db({type:N,selectors:[["bm-book-form"]],inputs:{book:"book",editing:"editing"},outputs:{submitBook:"submitBook"},features:[a.xb],decls:34,vars:8,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["formControlName","title"],["controlName","title",3,"control"],["formControlName","subtitle"],["formControlName","isbn"],["controlName","isbn",3,"control"],["type","date","useValueAsDate","","formControlName","published"],["controlName","published",3,"control"],["type","button",1,"ui","mini","button",3,"click"],["formArrayName","authors",1,"fields"],["class","sixteen wide field",4,"ngFor","ngForOf"],["controlName","authors",3,"control"],["formControlName","description"],["formArrayName","thumbnails"],["class","fields",3,"formGroupName",4,"ngFor","ngForOf"],["type","submit",1,"ui","button",3,"disabled"],[1,"sixteen","wide","field"],["placeholder","Autor",3,"formControlName"],[1,"fields",3,"formGroupName"],[1,"nine","wide","field"],["placeholder","URL","formControlName","url"],[1,"seven","wide","field"],["placeholder","Titel","formControlName","title"]],template:function(t,e){1&t&&(a.Ob(0,"form",0),a.Yb("ngSubmit",(function(){return e.submitForm()})),a.Ob(1,"label"),a.pc(2,"Buchtitel"),a.Nb(),a.Kb(3,"input",1),a.Kb(4,"bm-form-messages",2),a.Ob(5,"label"),a.pc(6,"Untertitel"),a.Nb(),a.Kb(7,"input",3),a.Ob(8,"label"),a.pc(9,"ISBN"),a.Nb(),a.Kb(10,"input",4),a.Kb(11,"bm-form-messages",5),a.Ob(12,"label"),a.pc(13,"Erscheinungsdatum"),a.Nb(),a.Kb(14,"input",6),a.Kb(15,"bm-form-messages",7),a.Ob(16,"label"),a.pc(17,"Autoren"),a.Nb(),a.Ob(18,"button",8),a.Yb("click",(function(){return e.addAuthorControl()})),a.pc(19," + Autor "),a.Nb(),a.Ob(20,"div",9),a.nc(21,v,2,1,"div",10),a.Nb(),a.Kb(22,"bm-form-messages",11),a.Ob(23,"label"),a.pc(24,"Beschreibung"),a.Nb(),a.Kb(25,"textarea",12),a.Ob(26,"label"),a.pc(27,"Bilder"),a.Nb(),a.Ob(28,"button",8),a.Yb("click",(function(){return e.addThumbnailControl()})),a.pc(29," + Bild "),a.Nb(),a.Ob(30,"div",13),a.nc(31,g,5,1,"div",14),a.Nb(),a.Ob(32,"button",15),a.pc(33," Speichern "),a.Nb(),a.Nb()),2&t&&(a.ec("formGroup",e.bookForm),a.zb(4),a.ec("control",e.bookForm.get("title")),a.zb(7),a.ec("control",e.bookForm.get("isbn")),a.zb(4),a.ec("control",e.bookForm.get("published")),a.zb(6),a.ec("ngForOf",e.authors.controls),a.zb(1),a.ec("control",e.bookForm.get("authors")),a.zb(9),a.ec("ngForOf",e.thumbnails.controls),a.zb(1),a.ec("disabled",e.bookForm.invalid))},directives:[i.r,i.l,i.e,i.a,i.k,i.d,k,s.a,i.b,r.j,i.f],styles:[""]}),N),C=((y=function(){function t(e,o,n){_classCallCheck(this,t),this.bs=e,this.route=o,this.router=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"createBook",value:function(t){var e=this;this.bs.create(t).subscribe((function(){e.router.navigate(["../..","books"],{relativeTo:e.route})}))}}]),t}()).\u0275fac=function(t){return new(t||y)(a.Jb(b.a),a.Jb(u.a),a.Jb(u.d))},y.\u0275cmp=a.Db({type:y,selectors:[["bm-create-book"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(t,e){1&t&&(a.Ob(0,"h1"),a.pc(1,"Buch hinzuf\xfcgen"),a.Nb(),a.Ob(2,"bm-book-form",0),a.Yb("submitBook",(function(t){return e.createBook(t)})),a.Nb())},directives:[O],styles:[""]}),y),F=o("eIep");function w(t,e){if(1&t){var o=a.Pb();a.Ob(0,"bm-book-form",1),a.Yb("submitBook",(function(t){return a.jc(o),a.ac().updateBook(t)})),a.Nb()}if(2&t){var n=a.ac();a.ec("book",n.book)("editing",!0)}}var A,B,_,j=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:C},{path:"edit/:isbn",component:(A=function(){function t(e,o,n){_classCallCheck(this,t),this.bs=e,this.route=o,this.router=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.pipe(Object(f.a)((function(t){return t.get("isbn")})),Object(F.a)((function(e){return t.bs.getSingle(e)}))).subscribe((function(e){return t.book=e}))}},{key:"updateBook",value:function(t){var e=this;this.bs.update(t).subscribe((function(){e.router.navigate(["../../..","books",t.isbn],{relativeTo:e.route})}))}}]),t}(),A.\u0275fac=function(t){return new(t||A)(a.Jb(b.a),a.Jb(u.a),a.Jb(u.d))},A.\u0275cmp=a.Db({type:A,selectors:[["bm-edit-book"]],decls:3,vars:1,consts:[[3,"book","editing","submitBook",4,"ngIf"],[3,"book","editing","submitBook"]],template:function(t,e){1&t&&(a.Ob(0,"h1"),a.pc(1,"Buch bearbeiten"),a.Nb(),a.nc(2,w,1,2,"bm-book-form",0)),2&t&&(a.zb(2),a.ec("ngIf",e.book))},directives:[r.k,O],styles:[""]}),A)}],I=((_=function t(){_classCallCheck(this,t)}).\u0275mod=a.Hb({type:_}),_.\u0275inj=a.Gb({factory:function(t){return new(t||_)},providers:[],imports:[[u.h.forChild(j)],u.h]}),_),K=((B=function t(){_classCallCheck(this,t)}).\u0275mod=a.Hb({type:B}),B.\u0275inj=a.Gb({factory:function(t){return new(t||B)},imports:[[r.c,I,i.o,s.b]]}),B)}}]);