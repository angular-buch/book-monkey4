(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"p4/R":function(t,n,e){"use strict";e.r(n),e.d(n,"Iteration1Module",(function(){return W}));var i=e("ofXK"),o=e("tyNb"),c=e("fXoL");const s=[];let r=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.h.forChild(s)],o.h]}),t})();function b(t,n){if(1&t&&c.Kb(0,"img",9),2&t){const t=c.ac().$implicit;c.ec("src",t.thumbnails[0].url,c.kc)}}function a(t,n){if(1&t&&(c.Ob(0,"div",10),c.pc(1),c.Nb()),2&t){const t=c.ac().$implicit;c.zb(1),c.qc(t.subtitle)}}function u(t,n){1&t&&(c.Ob(0,"span"),c.pc(1,", "),c.Nb())}function l(t,n){if(1&t&&(c.Ob(0,"span"),c.pc(1),c.nc(2,u,2,0,"span",11),c.Nb()),2&t){const t=n.$implicit,e=n.last;c.zb(1),c.rc(" ",t,""),c.zb(1),c.ec("ngIf",!e)}}function p(t,n){if(1&t&&(c.Ob(0,"a",2),c.nc(1,b,1,1,"img",3),c.Ob(2,"div",4),c.Ob(3,"div",5),c.pc(4),c.Nb(),c.nc(5,a,2,1,"div",6),c.Ob(6,"div",7),c.nc(7,l,3,2,"span",8),c.Kb(8,"br"),c.pc(9),c.Nb(),c.Nb(),c.Nb()),2&t){const t=n.$implicit;c.zb(1),c.ec("ngIf",t.thumbnails&&t.thumbnails[0]&&t.thumbnails[0].url),c.zb(3),c.qc(t.title),c.zb(1),c.ec("ngIf",t.subtitle),c.zb(2),c.ec("ngForOf",t.authors),c.zb(2),c.rc(" ISBN ",t.isbn," ")}}let d=(()=>{class t{ngOnInit(){this.books=[{isbn:"9783864906466",title:"Angular",authors:["Ferdinand Malcher","Johannes Hoppe","Danny Koppenhagen"],published:new Date(2019,4,30),subtitle:"Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx",rating:5,thumbnails:[{url:"https://ng-buch.de/buch1.jpg",title:"Buchcover"}],description:"Die Autoren f\xfchren Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular..."},{isbn:"9783864903274",title:"React",authors:["Oliver Zeigermann","Nils Hartmann"],published:new Date(2016,6,17),subtitle:"Die praktische Einf\xfchrung in React, React Router und Redux",rating:3,thumbnails:[{url:"https://ng-buch.de/buch2.jpg",title:"Buchcover"}],description:"React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberfl\xe4chen..."}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-list"]],decls:2,vars:1,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",4,"ngFor","ngForOf"],[1,"item"],["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,n){1&t&&(c.Ob(0,"div",0),c.nc(1,p,10,5,"a",1),c.Nb()),2&t&&(c.zb(1),c.ec("ngForOf",n.books))},directives:[i.j,i.k],styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-root"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Kb(0,"bm-book-list"),c.Kb(1,"router-outlet"))},directives:[d,o.i],styles:[""]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t,bootstrap:[h]}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},providers:[],imports:[[i.c,r]]}),t})();const m=[];let g=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.h.forChild(m)],o.h]}),t})();function v(t,n){if(1&t&&c.Kb(0,"img",6),2&t){const t=c.ac();c.ec("src",t.book.thumbnails[0].url,c.kc)}}function k(t,n){if(1&t&&(c.Ob(0,"div",7),c.pc(1),c.Nb()),2&t){const t=c.ac();c.zb(1),c.qc(t.book.subtitle)}}function O(t,n){1&t&&(c.Ob(0,"span"),c.pc(1,", "),c.Nb())}function w(t,n){if(1&t&&(c.Ob(0,"span"),c.pc(1),c.nc(2,O,2,0,"span",8),c.Nb()),2&t){const t=n.$implicit,e=n.last;c.zb(1),c.rc(" ",t,""),c.zb(1),c.ec("ngIf",!e)}}let N=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:9,vars:5,consts:[["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,n){1&t&&(c.nc(0,v,1,1,"img",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.pc(3),c.Nb(),c.nc(4,k,2,1,"div",3),c.Ob(5,"div",4),c.nc(6,w,3,2,"span",5),c.Kb(7,"br"),c.pc(8),c.Nb(),c.Nb()),2&t&&(c.ec("ngIf",n.book.thumbnails&&n.book.thumbnails[0]&&n.book.thumbnails[0].url),c.zb(3),c.qc(n.book.title),c.zb(1),c.ec("ngIf",n.book.subtitle),c.zb(2),c.ec("ngForOf",n.book.authors),c.zb(2),c.rc(" ISBN ",n.book.isbn," "))},directives:[i.k,i.j],styles:[""]}),t})();function y(t,n){1&t&&c.Kb(0,"bm-book-list-item",2),2&t&&c.ec("book",n.$implicit)}let z=(()=>{class t{ngOnInit(){this.books=[{isbn:"9783864906466",title:"Angular",authors:["Ferdinand Malcher","Johannes Hoppe","Danny Koppenhagen"],published:new Date(2019,4,30),subtitle:"Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx",rating:5,thumbnails:[{url:"https://ng-buch.de/buch1.jpg",title:"Buchcover"}],description:"Die Autoren f\xfchren Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular..."},{isbn:"9783864903274",title:"React",authors:["Oliver Zeigermann","Nils Hartmann"],published:new Date(2016,6,17),subtitle:"Die praktische Einf\xfchrung in React, React Router und Redux",rating:3,thumbnails:[{url:"https://ng-buch.de/buch2.jpg",title:"Buchcover"}],description:"React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberfl\xe4chen..."}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-list"]],decls:2,vars:1,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",3,"book",4,"ngFor","ngForOf"],[1,"item",3,"book"]],template:function(t,n){1&t&&(c.Ob(0,"div",0),c.nc(1,y,1,1,"bm-book-list-item",1),c.Nb()),2&t&&(c.zb(1),c.ec("ngForOf",n.books))},directives:[i.j,N],styles:[""]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-root"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Kb(0,"bm-book-list"),c.Kb(1,"router-outlet"))},directives:[z,o.i],styles:[""]}),t})(),I=(()=>{class t{}return t.\u0275mod=c.Hb({type:t,bootstrap:[D]}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},providers:[],imports:[[i.c,g]]}),t})();const F=[];let j=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[o.h.forChild(F)],o.h]}),t})();function B(t,n){if(1&t&&c.Kb(0,"img",6),2&t){const t=c.ac();c.ec("src",t.book.thumbnails[0].url,c.kc)}}function R(t,n){if(1&t&&(c.Ob(0,"div",7),c.pc(1),c.Nb()),2&t){const t=c.ac();c.zb(1),c.qc(t.book.subtitle)}}function E(t,n){1&t&&(c.Ob(0,"span"),c.pc(1,", "),c.Nb())}function K(t,n){if(1&t&&(c.Ob(0,"span"),c.pc(1),c.nc(2,E,2,0,"span",8),c.Nb()),2&t){const t=n.$implicit,e=n.last;c.zb(1),c.rc(" ",t,""),c.zb(1),c.ec("ngIf",!e)}}let L=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:9,vars:5,consts:[["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(t,n){1&t&&(c.nc(0,B,1,1,"img",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.pc(3),c.Nb(),c.nc(4,R,2,1,"div",3),c.Ob(5,"div",4),c.nc(6,K,3,2,"span",5),c.Kb(7,"br"),c.pc(8),c.Nb(),c.Nb()),2&t&&(c.ec("ngIf",n.book.thumbnails&&n.book.thumbnails[0]&&n.book.thumbnails[0].url),c.zb(3),c.qc(n.book.title),c.zb(1),c.ec("ngIf",n.book.subtitle),c.zb(2),c.ec("ngForOf",n.book.authors),c.zb(2),c.rc(" ISBN ",n.book.isbn," "))},directives:[i.k,i.j],styles:[""]}),t})();function S(t,n){if(1&t){const t=c.Pb();c.Ob(0,"bm-book-list-item",2),c.Yb("click",(function(){c.jc(t);const e=n.$implicit;return c.ac().showDetails(e)})),c.Nb()}2&t&&c.ec("book",n.$implicit)}let A=(()=>{class t{constructor(){this.showDetailsEvent=new c.n}ngOnInit(){this.books=[{isbn:"9783864906466",title:"Angular",authors:["Ferdinand Malcher","Johannes Hoppe","Danny Koppenhagen"],published:new Date(2019,4,30),subtitle:"Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx",rating:5,thumbnails:[{url:"https://ng-buch.de/buch1.jpg",title:"Buchcover"}],description:"Die Autoren f\xfchren Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular..."},{isbn:"9783864903274",title:"React",authors:["Oliver Zeigermann","Nils Hartmann"],published:new Date(2016,6,17),subtitle:"Die praktische Einf\xfchrung in React, React Router und Redux",rating:3,thumbnails:[{url:"https://ng-buch.de/buch2.jpg",title:"Buchcover"}],description:"React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberfl\xe4chen..."}]}showDetails(t){this.showDetailsEvent.emit(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-list"]],outputs:{showDetailsEvent:"showDetailsEvent"},decls:2,vars:1,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",3,"book","click",4,"ngFor","ngForOf"],[1,"item",3,"book","click"]],template:function(t,n){1&t&&(c.Ob(0,"div",0),c.nc(1,S,1,1,"bm-book-list-item",1),c.Nb()),2&t&&(c.zb(1),c.ec("ngForOf",n.books))},directives:[i.j,L],styles:[""]}),t})();function H(t,n){if(1&t&&(c.Ob(0,"h3"),c.pc(1),c.Nb()),2&t){const t=c.ac(2);c.zb(1),c.qc(t.book.subtitle)}}function G(t,n){if(1&t&&(c.Mb(0),c.pc(1),c.Kb(2,"br"),c.Lb()),2&t){const t=n.$implicit;c.zb(1),c.rc(" ",t,"")}}function $(t,n){1&t&&c.Kb(0,"i",9)}function q(t,n){1&t&&c.Kb(0,"img",10),2&t&&c.ec("src",n.$implicit.url,c.kc)}function J(t,n){if(1&t){const t=c.Pb();c.Ob(0,"div"),c.Ob(1,"h1"),c.pc(2),c.Nb(),c.nc(3,H,2,1,"h3",0),c.Kb(4,"div",1),c.Ob(5,"div",2),c.Ob(6,"div",3),c.Ob(7,"h4"),c.pc(8,"Autoren"),c.Nb(),c.nc(9,G,3,1,"ng-container",4),c.Nb(),c.Ob(10,"div",3),c.Ob(11,"h4"),c.pc(12,"ISBN"),c.Nb(),c.pc(13),c.Nb(),c.Ob(14,"div",3),c.Ob(15,"h4"),c.pc(16,"Erschienen"),c.Nb(),c.pc(17),c.Nb(),c.Ob(18,"div",3),c.Ob(19,"h4"),c.pc(20,"Rating"),c.Nb(),c.nc(21,$,1,0,"i",5),c.Nb(),c.Nb(),c.Ob(22,"h4"),c.pc(23,"Beschreibung"),c.Nb(),c.Ob(24,"p"),c.pc(25),c.Nb(),c.Ob(26,"div",6),c.nc(27,q,1,1,"img",7),c.Nb(),c.Ob(28,"button",8),c.Yb("click",(function(){return c.jc(t),c.ac().showBookList()})),c.pc(29," Zur\xfcck zur Buchliste "),c.Nb(),c.Nb()}if(2&t){const t=c.ac();c.zb(2),c.qc(t.book.title),c.zb(1),c.ec("ngIf",t.book.subtitle),c.zb(6),c.ec("ngForOf",t.book.authors),c.zb(4),c.rc(" ",t.book.isbn," "),c.zb(4),c.rc(" ",t.book.published," "),c.zb(4),c.ec("ngForOf",t.getRating(t.book.rating)),c.zb(4),c.qc(t.book.description),c.zb(2),c.ec("ngForOf",t.book.thumbnails)}}let P=(()=>{class t{constructor(){this.showListEvent=new c.n}ngOnInit(){}getRating(t){return new Array(t)}showBookList(){this.showListEvent.emit()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-book-details"]],inputs:{book:"book"},outputs:{showListEvent:"showListEvent"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],["class","yellow star icon",4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"ui","red","button",3,"click"],[1,"yellow","star","icon"],[3,"src"]],template:function(t,n){1&t&&c.nc(0,J,30,8,"div",0),2&t&&c.ec("ngIf",n.book)},directives:[i.k,i.j],styles:[""]}),t})();function x(t,n){if(1&t){const t=c.Pb();c.Ob(0,"bm-book-list",2),c.Yb("showDetailsEvent",(function(n){return c.jc(t),c.ac().showDetails(n)})),c.Nb()}}function M(t,n){if(1&t){const t=c.Pb();c.Ob(0,"bm-book-details",3),c.Yb("showListEvent",(function(){return c.jc(t),c.ac().showList()})),c.Nb()}if(2&t){const t=c.ac();c.ec("book",t.book)}}let C=(()=>{class t{constructor(){this.viewState="list"}showList(){this.viewState="list"}showDetails(t){this.book=t,this.viewState="details"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-root"]],decls:3,vars:2,consts:[[3,"showDetailsEvent",4,"ngIf"],[3,"book","showListEvent",4,"ngIf"],[3,"showDetailsEvent"],[3,"book","showListEvent"]],template:function(t,n){1&t&&(c.nc(0,x,1,0,"bm-book-list",0),c.nc(1,M,1,1,"bm-book-details",1),c.Kb(2,"router-outlet")),2&t&&(c.ec("ngIf","list"===n.viewState),c.zb(1),c.ec("ngIf","details"===n.viewState))},directives:[i.k,o.i,A,P],styles:[""]}),t})(),T=(()=>{class t{}return t.\u0275mod=c.Hb({type:t,bootstrap:[C]}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},providers:[],imports:[[i.c,j]]}),t})();const Y=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Db({type:t,selectors:[["bm-iteration-1"]],decls:15,vars:0,consts:[[1,"ui","three","small","ordered","steps"],["routerLink","components","routerLinkActive","active",1,"step"],[1,"content"],[1,"title"],["routerLink","property-bindings","routerLinkActive","active",1,"step"],["routerLink","event-bindings","routerLinkActive","active",1,"step"],[1,"ui","raised","padded","container","segment"]],template:function(t,n){1&t&&(c.Ob(0,"div",0),c.Ob(1,"a",1),c.Ob(2,"div",2),c.Ob(3,"div",3),c.pc(4,"Komponenten"),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"a",4),c.Ob(6,"div",2),c.Ob(7,"div",3),c.pc(8,"Property-Bindings"),c.Nb(),c.Nb(),c.Nb(),c.Ob(9,"a",5),c.Ob(10,"div",2),c.Ob(11,"div",3),c.pc(12,"Event-Bindings"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(13,"div",6),c.Kb(14,"router-outlet"),c.Nb())},directives:[o.g,o.f,o.i],encapsulation:2}),t})(),children:[{path:"",redirectTo:"components",pathMatch:"full"},{path:"components",component:h},{path:"property-bindings",component:D},{path:"event-bindings",component:C}]}];let Z=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},providers:[],imports:[[o.h.forChild(Y)],o.h]}),t})(),W=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(n){return new(n||t)},imports:[[f,I,T,Z]]}),t})()}}]);