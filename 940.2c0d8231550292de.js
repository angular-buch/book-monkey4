"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[940],{2940:(J,a,r)=>{r.r(a),r.d(a,{BooksModule:()=>Y});var s=r(6019),l=r(828),o=r(865),u=r(5159);let _=(()=>{class t{constructor(){this.isZoomed=!1}onMouseEnter(){this.isZoomed=!0}onMouseLeave(){this.isZoomed=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=o.lG2({type:t,selectors:[["","bmZoom",""]],hostVars:2,hostBindings:function(n,i){1&n&&o.NdJ("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()}),2&n&&o.ekj("small",i.isZoomed)}}),t})(),m=(()=>{class t{transform(n){return n?`${n.substr(0,3)}-${n.substr(3)}`:""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=o.Yjl({name:"isbn",type:t,pure:!0}),t})();function p(t,e){if(1&t&&o._UZ(0,"img",7),2&t){const n=o.oxw(2);o.Q6J("src",n.book.thumbnails[0].url,o.LSH)}}function g(t,e){if(1&t&&(o.TgZ(0,"div",8),o._uU(1),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Oqu(n.book.subtitle)}}function f(t,e){1&t&&(o.TgZ(0,"span"),o._uU(1,", "),o.qZA())}function b(t,e){if(1&t&&(o.TgZ(0,"span"),o._uU(1),o.YNc(2,f,2,0,"span",0),o.qZA()),2&t){const n=e.$implicit,i=e.last;o.xp6(1),o.hij(" ",n,""),o.xp6(1),o.Q6J("ngIf",!i)}}function d(t,e){if(1&t&&(o.ynx(0),o.YNc(1,p,1,1,"img",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._uU(4),o.qZA(),o.YNc(5,g,2,1,"div",4),o.TgZ(6,"div",5),o.YNc(7,b,3,2,"span",6),o._UZ(8,"br"),o._uU(9),o.ALo(10,"isbn"),o.qZA(),o.qZA(),o.BQk()),2&t){const n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.book.thumbnails&&n.book.thumbnails[0]&&n.book.thumbnails[0].url),o.xp6(3),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(2),o.Q6J("ngForOf",n.book.authors),o.xp6(2),o.hij(" ISBN ",o.lcZ(10,5,n.book.isbn)," ")}}let k=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[[4,"ngIf"],["class","ui tiny image","bmZoom","",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],["bmZoom","",1,"ui","tiny","image",3,"src"],[1,"description"]],template:function(n,i){1&n&&o.YNc(0,d,11,7,"ng-container",0),2&n&&o.Q6J("ngIf",i.book)},directives:[s.O5,s.sg,_],pipes:[m],styles:[""]}),t})();function Z(t,e){if(1&t&&o._UZ(0,"bm-book-list-item",5),2&t){const n=e.$implicit;o.Q6J("book",n)("routerLink",n.isbn)}}function h(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"Es wurden noch keine B\xfccher eingetragen."),o.qZA())}function v(t,e){if(1&t&&(o.ynx(0),o.YNc(1,Z,1,2,"bm-book-list-item",3),o.YNc(2,h,2,0,"p",4),o.BQk()),2&t){const n=e.ngIf;o.xp6(1),o.Q6J("ngForOf",n),o.xp6(1),o.Q6J("ngIf",!n.length)}}function B(t,e){1&t&&(o.TgZ(0,"div",6),o.TgZ(1,"div",7),o._uU(2,"Daten werden geladen..."),o.qZA(),o.qZA())}let x=(()=>{class t{constructor(n){this.bs=n,this.books$=this.bs.getAll()}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(u.T))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-list"]],decls:5,vars:4,consts:[[1,"ui","middle","aligned","selection","divided","list"],[4,"ngIf","ngIfElse"],["loading",""],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item",3,"book","routerLink"],[1,"ui","active","dimmer"],[1,"ui","large","text","loader"]],template:function(n,i){if(1&n&&(o.TgZ(0,"div",0),o.YNc(1,v,3,2,"ng-container",1),o.ALo(2,"async"),o.YNc(3,B,3,0,"ng-template",null,2,o.W1O),o.qZA()),2&n){const c=o.MAs(4);o.xp6(1),o.Q6J("ngIf",o.lcZ(2,2,i.books$))("ngIfElse",c)}},directives:[s.O5,s.sg,k,l.rH],pipes:[s.Ov],styles:[""]}),t})(),T=(()=>{class t{constructor(n,i){this.templateRef=n,this.viewContainerRef=i,this.bmDelay=100}ngOnInit(){setTimeout(()=>{this.viewContainerRef.createEmbeddedView(this.templateRef)},this.bmDelay)}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(o.Rgc),o.Y36(o.s_b))},t.\u0275dir=o.lG2({type:t,selectors:[["","bmDelay",""]],inputs:{bmDelay:"bmDelay"}}),t})();function y(t,e){if(1&t&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&t){const n=o.oxw(2);o.xp6(1),o.Oqu(n.book.subtitle)}}function I(t,e){if(1&t&&(o.ynx(0),o._uU(1),o._UZ(2,"br"),o.BQk()),2&t){const n=e.$implicit;o.xp6(1),o.hij(" ",n,"")}}function C(t,e){1&t&&o._UZ(0,"i",15)}function A(t,e){if(1&t&&(o.ynx(0),o.YNc(1,C,1,0,"i",14),o.BQk()),2&t){const n=e.index;o.xp6(1),o.Q6J("bmDelay",500+200*n)}}function D(t,e){if(1&t&&(o.TgZ(0,"div",5),o.TgZ(1,"h4"),o._uU(2,"Rating"),o.qZA(),o.YNc(3,A,2,1,"ng-container",6),o.qZA()),2&t){const n=o.oxw(2);o.xp6(3),o.Q6J("ngForOf",n.getRating(n.book.rating))}}function U(t,e){1&t&&o._UZ(0,"img",16),2&t&&o.Q6J("src",e.$implicit.url,o.LSH)}const L=function(t){return["../../admin/edit",t]};function q(t,e){if(1&t){const n=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"h1"),o._uU(2),o.qZA(),o.YNc(3,y,2,1,"h3",2),o._UZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"h4"),o._uU(8,"Autoren"),o.qZA(),o.YNc(9,I,3,1,"ng-container",6),o.qZA(),o.TgZ(10,"div",5),o.TgZ(11,"h4"),o._uU(12,"ISBN"),o.qZA(),o._uU(13),o.ALo(14,"isbn"),o.qZA(),o.TgZ(15,"div",5),o.TgZ(16,"h4"),o._uU(17,"Erschienen"),o.qZA(),o._uU(18),o.ALo(19,"date"),o.qZA(),o.YNc(20,D,4,1,"div",7),o.qZA(),o.TgZ(21,"h4"),o._uU(22,"Beschreibung"),o.qZA(),o.TgZ(23,"p"),o._uU(24),o.qZA(),o.TgZ(25,"div",8),o.YNc(26,U,1,1,"img",9),o.qZA(),o.TgZ(27,"button",10),o.NdJ("click",function(){return o.CHM(n),o.oxw().removeBook()}),o._UZ(28,"i",11),o._uU(29," Buch l\xf6schen "),o.qZA(),o.TgZ(30,"a",12),o._UZ(31,"i",13),o._uU(32," Buch bearbeiten "),o.qZA(),o.qZA()}if(2&t){const n=o.oxw();o.xp6(2),o.Oqu(n.book.title),o.xp6(1),o.Q6J("ngIf",n.book.subtitle),o.xp6(6),o.Q6J("ngForOf",n.book.authors),o.xp6(4),o.hij(" ",o.lcZ(14,9,n.book.isbn)," "),o.xp6(5),o.hij(" ",o.xi3(19,11,n.book.published,"longDate")," "),o.xp6(2),o.Q6J("ngIf",n.book.rating),o.xp6(4),o.Oqu(n.book.description),o.xp6(2),o.Q6J("ngForOf",n.book.thumbnails),o.xp6(4),o.Q6J("routerLink",o.VKq(14,L,n.book.isbn))}}function w(t,e){1&t&&o._UZ(0,"div",17)}const F=[{path:"",component:x},{path:":isbn",component:(()=>{class t{constructor(n,i,c){this.bs=n,this.router=i,this.route=c}ngOnInit(){this.bs.getSingle(this.route.snapshot.paramMap.get("isbn")||"").subscribe(i=>this.book=i)}getRating(n){return new Array(n)}removeBook(){this.book&&confirm("Buch wirklich l\xf6schen?")&&this.bs.remove(this.book.isbn).subscribe(n=>this.router.navigate(["../"],{relativeTo:this.route}))}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(u.T),o.Y36(l.F0),o.Y36(l.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-details"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],["class","four wide column",4,"ngIf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","tiny","red","labeled","icon","button",3,"click"],[1,"remove","icon"],[1,"ui","tiny","yellow","labeled","icon","button",3,"routerLink"],[1,"write","icon"],["class","yellow star icon",4,"bmDelay"],[1,"yellow","star","icon"],[3,"src"],[1,"ui","active","centered","inline","loader"]],template:function(n,i){if(1&n&&(o.YNc(0,q,33,16,"div",0),o.YNc(1,w,1,0,"ng-template",null,1,o.W1O)),2&n){const c=o.MAs(2);o.Q6J("ngIf",i.book)("ngIfElse",c)}},directives:[s.O5,s.sg,l.yS,T],pipes:[m,s.uU],styles:["p[_ngcontent-%COMP%]{white-space:pre-wrap}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[],imports:[[l.Bz.forChild(F)],l.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.ez,O]]}),t})()}}]);