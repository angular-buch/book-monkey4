(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[344],{3344:(t,o,e)=>{"use strict";e.r(o),e.d(o,{AdminModule:()=>N});var r=e(1116),s=e(1462),i=e(1017),n=e(1441),u=e(8619),a=e(8385);class l{static isbnFormat(t){if(!t.value)return null;const o=t.value.replace(/-/g,"");return/(^\d{10}$)|(^\d{13}$)/.test(o)?null:{isbnFormat:{valid:!1}}}static atLeastOneAuthor(t){return t.controls.some(t=>t.value)?null:{atLeastOneAuthor:{valid:!1}}}}var b=e(878),c=e(9996),m=e(7727);let h=(()=>{class t{constructor(t){this.bs=t}validate(t){return this.bs.check(t.value).pipe((0,c.U)(t=>!1===t?null:{isbnExists:{valid:!1}}),(0,m.K)(()=>(0,b.of)(null)))}}return t.\u0275fac=function(o){return new(o||t)(u.LFG(a.T))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,o){if(1&t&&(u.TgZ(0,"div",1),u._uU(1),u.qZA()),2&t){const t=o.$implicit;u.xp6(1),u.hij(" ",t,"\n")}}let g=(()=>{class t{constructor(){this.allMessages={title:{required:"Ein Buchtitel muss angegeben werden."},isbn:{required:"Es muss eine ISBN angegeben werden.",isbnFormat:"Die ISBN muss aus 10 oder 13 Zeichen bestehen.",isbnExists:"Die ISBN existiert bereits."},published:{required:"Es muss ein Erscheinungsdatum angegeben werden."},authors:{atLeastOneAuthor:"Es muss ein Autor angegeben werden."}}}ngOnInit(){}errorsForControl(){const t=this.allMessages[this.controlName];return this.control&&this.control.errors&&t&&this.control.dirty?Object.keys(this.control.errors).map(o=>t[o]):[]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["bm-form-messages"]],inputs:{control:"control",controlName:"controlName"},decls:1,vars:1,consts:[["class","ui negative message",4,"ngFor","ngForOf"],[1,"ui","negative","message"]],template:function(t,o){1&t&&u.YNc(0,d,2,1,"div",0),2&t&&u.Q6J("ngForOf",o.errorsForControl())},directives:[r.sg],styles:[""]}),t})();function f(t,o){if(1&t&&(u.TgZ(0,"div",16),u._UZ(1,"input",17),u.qZA()),2&t){const t=o.index;u.xp6(1),u.Q6J("formControlName",t)}}function p(t,o){1&t&&(u.TgZ(0,"div",18),u.TgZ(1,"div",19),u._UZ(2,"input",20),u.qZA(),u.TgZ(3,"div",21),u._UZ(4,"input",22),u.qZA(),u.qZA()),2&t&&u.Q6J("formGroupName",o.index)}let k=(()=>{class t{constructor(t,o){this.fb=t,this.bookExistsValidator=o,this.editing=!1,this.submitBook=new u.vpe,this.bookForm=this.fb.group({title:["",s.kI.required],subtitle:[""],isbn:[{value:"",disabled:this.editing},[s.kI.required,l.isbnFormat],this.editing?null:[this.bookExistsValidator]],description:[""],authors:this.buildAuthorsArray([""]),thumbnails:this.buildThumbnailsArray([{title:"",url:""}]),published:[]})}ngOnInit(){}ngOnChanges(){this.book&&this.setFormValues(this.book)}setFormValues(t){this.bookForm.patchValue(t),this.bookForm.setControl("authors",this.buildAuthorsArray(t.authors)),t.thumbnails&&this.bookForm.setControl("thumbnails",this.buildThumbnailsArray(t.thumbnails))}buildAuthorsArray(t){return this.fb.array(t,l.atLeastOneAuthor)}buildThumbnailsArray(t){return this.fb.array(t.map(t=>this.fb.group(t)))}get authors(){return this.bookForm.get("authors")}get thumbnails(){return this.bookForm.get("thumbnails")}addAuthorControl(){this.authors.push(this.fb.control(""))}addThumbnailControl(){this.thumbnails.push(this.fb.group({url:"",title:""}))}submitForm(){const t=this.bookForm.value,o=t.authors.filter(t=>t),e=t.thumbnails.filter(t=>t.url),r=this.editing&&this.book?this.book.isbn:t.isbn,s=Object.assign(Object.assign({},t),{isbn:r,authors:o,thumbnails:e});this.submitBook.emit(s),this.bookForm.reset()}}return t.\u0275fac=function(o){return new(o||t)(u.Y36(s.qu),u.Y36(h))},t.\u0275cmp=u.Xpm({type:t,selectors:[["bm-book-form"]],inputs:{book:"book",editing:"editing"},outputs:{submitBook:"submitBook"},features:[u.TTD],decls:34,vars:8,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["formControlName","title"],["controlName","title",3,"control"],["formControlName","subtitle"],["formControlName","isbn"],["controlName","isbn",3,"control"],["type","date","useValueAsDate","","formControlName","published"],["controlName","published",3,"control"],["type","button",1,"ui","mini","button",3,"click"],["formArrayName","authors",1,"fields"],["class","sixteen wide field",4,"ngFor","ngForOf"],["controlName","authors",3,"control"],["formControlName","description"],["formArrayName","thumbnails"],["class","fields",3,"formGroupName",4,"ngFor","ngForOf"],["type","submit",1,"ui","button",3,"disabled"],[1,"sixteen","wide","field"],["placeholder","Autor",3,"formControlName"],[1,"fields",3,"formGroupName"],[1,"nine","wide","field"],["placeholder","URL","formControlName","url"],[1,"seven","wide","field"],["placeholder","Titel","formControlName","title"]],template:function(t,o){1&t&&(u.TgZ(0,"form",0),u.NdJ("ngSubmit",function(){return o.submitForm()}),u.TgZ(1,"label"),u._uU(2,"Buchtitel"),u.qZA(),u._UZ(3,"input",1),u._UZ(4,"bm-form-messages",2),u.TgZ(5,"label"),u._uU(6,"Untertitel"),u.qZA(),u._UZ(7,"input",3),u.TgZ(8,"label"),u._uU(9,"ISBN"),u.qZA(),u._UZ(10,"input",4),u._UZ(11,"bm-form-messages",5),u.TgZ(12,"label"),u._uU(13,"Erscheinungsdatum"),u.qZA(),u._UZ(14,"input",6),u._UZ(15,"bm-form-messages",7),u.TgZ(16,"label"),u._uU(17,"Autoren"),u.qZA(),u.TgZ(18,"button",8),u.NdJ("click",function(){return o.addAuthorControl()}),u._uU(19," + Autor "),u.qZA(),u.TgZ(20,"div",9),u.YNc(21,f,2,1,"div",10),u.qZA(),u._UZ(22,"bm-form-messages",11),u.TgZ(23,"label"),u._uU(24,"Beschreibung"),u.qZA(),u._UZ(25,"textarea",12),u.TgZ(26,"label"),u._uU(27,"Bilder"),u.qZA(),u.TgZ(28,"button",8),u.NdJ("click",function(){return o.addThumbnailControl()}),u._uU(29," + Bild "),u.qZA(),u.TgZ(30,"div",13),u.YNc(31,p,5,1,"div",14),u.qZA(),u.TgZ(32,"button",15),u._uU(33," Speichern "),u.qZA(),u.qZA()),2&t&&(u.Q6J("formGroup",o.bookForm),u.xp6(4),u.Q6J("control",o.bookForm.get("title")),u.xp6(7),u.Q6J("control",o.bookForm.get("isbn")),u.xp6(4),u.Q6J("control",o.bookForm.get("published")),u.xp6(6),u.Q6J("ngForOf",o.authors.controls),u.xp6(1),u.Q6J("control",o.bookForm.get("authors")),u.xp6(9),u.Q6J("ngForOf",o.thumbnails.controls),u.xp6(1),u.Q6J("disabled",o.bookForm.invalid))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,g,i.hR,s.CE,r.sg,s.x0],styles:[""]}),t})(),Z=(()=>{class t{constructor(t,o,e){this.bs=t,this.route=o,this.router=e}ngOnInit(){}createBook(t){this.bs.create(t).subscribe(()=>{this.router.navigate(["../..","books"],{relativeTo:this.route})})}}return t.\u0275fac=function(o){return new(o||t)(u.Y36(a.T),u.Y36(n.gz),u.Y36(n.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["bm-create-book"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(t,o){1&t&&(u.TgZ(0,"h1"),u._uU(1,"Buch hinzuf\xfcgen"),u.qZA(),u.TgZ(2,"bm-book-form",0),u.NdJ("submitBook",function(t){return o.createBook(t)}),u.qZA())},directives:[k],styles:[""]}),t})();var A=e(4689);function v(t,o){if(1&t){const t=u.EpF();u.TgZ(0,"bm-book-form",1),u.NdJ("submitBook",function(o){return u.CHM(t),u.oxw().updateBook(o)}),u.qZA()}if(2&t){const t=u.oxw();u.Q6J("book",t.book)("editing",!0)}}const F=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Z},{path:"edit/:isbn",component:(()=>{class t{constructor(t,o,e){this.bs=t,this.route=o,this.router=e}ngOnInit(){this.route.paramMap.pipe((0,c.U)(t=>t.get("isbn")||""),(0,A.w)(t=>this.bs.getSingle(t))).subscribe(t=>this.book=t)}updateBook(t){this.bs.update(t).subscribe(()=>{this.router.navigate(["../../..","books",t.isbn],{relativeTo:this.route})})}}return t.\u0275fac=function(o){return new(o||t)(u.Y36(a.T),u.Y36(n.gz),u.Y36(n.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["bm-edit-book"]],decls:3,vars:1,consts:[[3,"book","editing","submitBook",4,"ngIf"],[3,"book","editing","submitBook"]],template:function(t,o){1&t&&(u.TgZ(0,"h1"),u._uU(1,"Buch bearbeiten"),u.qZA(),u.YNc(2,v,1,2,"bm-book-form",0)),2&t&&(u.xp6(2),u.Q6J("ngIf",o.book))},directives:[r.O5,k],styles:[""]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({providers:[],imports:[[n.Bz.forChild(F)],n.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[r.ez,T,s.UX,i.B_]]}),t})()}}]);