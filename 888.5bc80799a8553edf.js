"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[888],{7888:(w,u,c)=>{c.r(u),c.d(u,{AppModule:()=>O});var r=c(6019),l=c(4522),s=c(828),o=c(865);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-root"]],decls:6,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"a",1),o._uU(2,"Home"),o.qZA(),o.TgZ(3,"a",2),o._uU(4,"B\xfccher"),o.qZA(),o.qZA(),o._UZ(5,"router-outlet"))},directives:[s.yS,s.Od,s.lC],styles:[""]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(e,i){1&e&&(o.TgZ(0,"h1"),o._uU(1,"Home"),o.qZA(),o.TgZ(2,"p"),o._uU(3,"Das ist der BookMonkey."),o.qZA(),o.TgZ(4,"a",0),o._uU(5," Buchliste ansehen "),o._UZ(6,"i",1),o.qZA())},directives:[s.yS],styles:[""]}),t})(),m=(()=>{class t{constructor(e){this.http=e,this.api="https://api4.angular-buch.com"}getAll(){return this.http.get(`${this.api}/books`)}getSingle(e){return this.http.get(`${this.api}/book/${e}`)}remove(e){return this.http.delete(`${this.api}/book/${e}`,{responseType:"text"})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(l.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function _(t,n){if(1&t&&o._UZ(0,"img",7),2&t){const e=o.oxw(2);o.Q6J("src",e.book.thumbnails[0].url,o.LSH)}}function d(t,n){if(1&t&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.Oqu(e.book.subtitle)}}function k(t,n){1&t&&(o.TgZ(0,"span"),o._uU(1,", "),o.qZA())}function f(t,n){if(1&t&&(o.TgZ(0,"span"),o._uU(1),o.YNc(2,k,2,0,"span",0),o.qZA()),2&t){const e=n.$implicit,i=n.last;o.xp6(1),o.hij(" ",e,""),o.xp6(1),o.Q6J("ngIf",!i)}}function b(t,n){if(1&t&&(o.ynx(0),o.YNc(1,_,1,1,"img",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._uU(4),o.qZA(),o.YNc(5,d,2,1,"div",4),o.TgZ(6,"div",5),o.YNc(7,f,3,2,"span",6),o._UZ(8,"br"),o._uU(9),o.qZA(),o.qZA(),o.BQk()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),o.xp6(3),o.Oqu(e.book.title),o.xp6(1),o.Q6J("ngIf",e.book.subtitle),o.xp6(2),o.Q6J("ngForOf",e.book.authors),o.xp6(2),o.hij(" ISBN ",e.book.isbn," ")}}let h=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[[4,"ngIf"],["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"]],template:function(e,i){1&e&&o.YNc(0,b,10,5,"ng-container",0),2&e&&o.Q6J("ngIf",i.book)},directives:[r.O5,r.sg],styles:[""]}),t})();function Z(t,n){if(1&t&&o._UZ(0,"bm-book-list-item",4),2&t){const e=n.$implicit;o.Q6J("book",e)("routerLink",e.isbn)}}function v(t,n){1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"div",6),o._uU(2,"Daten werden geladen..."),o.qZA(),o.qZA())}function A(t,n){1&t&&(o.TgZ(0,"p"),o._uU(1,"Es wurden noch keine B\xfccher eingetragen."),o.qZA())}function x(t,n){if(1&t&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.Oqu(e.book.subtitle)}}function B(t,n){if(1&t&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&t){const e=n.$implicit;o.xp6(1),o.hij(" ",e,"")}}function C(t,n){1&t&&o._UZ(0,"i",13)}function y(t,n){if(1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"h4"),o._uU(2,"Rating"),o.qZA(),o.YNc(3,C,1,0,"i",12),o.qZA()),2&t){const e=o.oxw(2);o.xp6(3),o.Q6J("ngForOf",e.getRating(e.book.rating))}}function I(t,n){1&t&&o._UZ(0,"img",14),2&t&&o.Q6J("src",n.$implicit.url,o.LSH)}function U(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h1"),o._uU(2),o.qZA(),o.YNc(3,x,2,1,"h3",2),o._UZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"h4"),o._uU(8,"Autoren"),o.qZA(),o.YNc(9,B,3,1,"ng-container",6),o.qZA(),o.TgZ(10,"div",5),o.TgZ(11,"h4"),o._uU(12,"ISBN"),o.qZA(),o._uU(13),o.qZA(),o.TgZ(14,"div",5),o.TgZ(15,"h4"),o._uU(16,"Erschienen"),o.qZA(),o._uU(17),o.qZA(),o.YNc(18,y,4,1,"div",7),o.qZA(),o.TgZ(19,"h4"),o._uU(20,"Beschreibung"),o.qZA(),o.TgZ(21,"p"),o._uU(22),o.qZA(),o.TgZ(23,"div",8),o.YNc(24,I,1,1,"img",9),o.qZA(),o.TgZ(25,"button",10),o.NdJ("click",function(){return o.CHM(e),o.oxw().removeBook()}),o._UZ(26,"i",11),o._uU(27," Buch l\xf6schen "),o.qZA(),o.qZA()}if(2&t){const e=o.oxw();o.xp6(2),o.Oqu(e.book.title),o.xp6(1),o.Q6J("ngIf",e.book.subtitle),o.xp6(6),o.Q6J("ngForOf",e.book.authors),o.xp6(4),o.hij(" ",e.book.isbn," "),o.xp6(4),o.hij(" ",e.book.published," "),o.xp6(1),o.Q6J("ngIf",e.book.rating),o.xp6(4),o.Oqu(e.book.description),o.xp6(2),o.Q6J("ngForOf",e.book.thumbnails)}}function q(t,n){1&t&&o._UZ(0,"div",15)}const L=[{path:"",component:a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:g},{path:"books",component:(()=>{class t{constructor(e){this.bs=e,this.books=[]}ngOnInit(){this.bs.getAll().subscribe(e=>this.books=e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list"]],decls:4,vars:3,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],["class","ui active dimmer",4,"ngIf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(e,i){1&e&&(o.TgZ(0,"div",0),o.YNc(1,Z,1,2,"bm-book-list-item",1),o.YNc(2,v,3,0,"div",2),o.YNc(3,A,2,0,"p",3),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngForOf",i.books),o.xp6(1),o.Q6J("ngIf",!i.books),o.xp6(1),o.Q6J("ngIf",i.books&&!i.books.length))},directives:[r.sg,r.O5,h,s.rH],styles:[""]}),t})()},{path:"books/:isbn",component:(()=>{class t{constructor(e,i,p){this.bs=e,this.router=i,this.route=p}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")||"").subscribe(i=>this.book=i)}getRating(e){return new Array(e)}removeBook(){this.book&&confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(e=>this.router.navigate(["../"],{relativeTo:this.route}))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m),o.Y36(s.F0),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],["class","four wide column",4,"ngIf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],["class","yellow star icon",4,"ngFor","ngForOf"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(e,i){if(1&e&&(o.YNc(0,U,28,8,"div",0),o.YNc(1,q,1,0,"ng-template",null,1,o.W1O)),2&e){const p=o.MAs(2);o.Q6J("ngIf",i.book)("ngIfElse",p)}},directives:[r.O5,r.sg],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),t})()}]}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.Bz.forChild(L)],s.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t,bootstrap:[a]}),t.\u0275inj=o.cJS({providers:[],imports:[[r.ez,l.JF,M]]}),t})()}}]);