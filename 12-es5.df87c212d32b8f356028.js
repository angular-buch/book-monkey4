function _defineProperties(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{u8hQ:function(n,e,t){"use strict";t.r(e),t.d(e,"AppModule",(function(){return A}));var i,o,c,r=t("ofXK"),s=t("tyNb"),b=t("fXoL"),a=((c=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||c)},c.\u0275cmp=b.Db({type:c,selectors:[["bm-root"]],decls:6,vars:0,consts:[[1,"ui","menu"],["routerLink","home","routerLinkActive","active",1,"item"],["routerLink","books","routerLinkActive","active",1,"item"]],template:function(n,e){1&n&&(b.Ob(0,"div",0),b.Ob(1,"a",1),b.pc(2,"Home"),b.Nb(),b.Ob(3,"a",2),b.pc(4,"B\xfccher"),b.Nb(),b.Nb(),b.Kb(5,"router-outlet"))},directives:[s.g,s.f,s.i],styles:[""]}),c),u=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Db({type:o,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","../books",1,"ui","red","button"],[1,"right","arrow","icon"]],template:function(n,e){1&n&&(b.Ob(0,"h1"),b.pc(1,"Home"),b.Nb(),b.Ob(2,"p"),b.pc(3,"Das ist der BookMonkey."),b.Nb(),b.Ob(4,"a",0),b.pc(5," Buchliste ansehen "),b.Kb(6,"i",1),b.Nb())},directives:[s.g],styles:[""]}),o),l=((i=function(){function n(){_classCallCheck(this,n),this.books=[{isbn:"9783864907791",title:"Angular",authors:["Ferdinand Malcher","Johannes Hoppe","Danny Koppenhagen"],published:new Date(2020,6,1),subtitle:"Grundlagen, fortgeschrittene Themen und Best Practices - inklusive RxJS, NgRx & PWA",rating:5,thumbnails:[{url:"https://ng-buch.de/angular-cover.jpg",title:"Buchcover"}],description:"Die Autoren f\xfchren Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular..."},{isbn:"9783864905520",title:"React",authors:["Oliver Zeigermann","Nils Hartmann"],published:new Date(2019,11,12),subtitle:"Die praktische Einf\xfchrung in React, React Router und Redux",rating:3,thumbnails:[{url:"https://ng-buch.de/react-cover.jpg",title:"Buchcover"}],description:"Das bew\xe4hrte und umfassende Praxisbuch zu React..."}]}return _createClass(n,[{key:"getAll",value:function(){return this.books}},{key:"getSingle",value:function(n){return this.books.find((function(e){return e.isbn===n}))}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275prov=b.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i);function f(n,e){if(1&n&&b.Kb(0,"img",6),2&n){var t=b.ac();b.ec("src",t.book.thumbnails[0].url,b.kc)}}function p(n,e){if(1&n&&(b.Ob(0,"div",7),b.pc(1),b.Nb()),2&n){var t=b.ac();b.zb(1),b.qc(t.book.subtitle)}}function h(n,e){1&n&&(b.Ob(0,"span"),b.pc(1,", "),b.Nb())}function d(n,e){if(1&n&&(b.Ob(0,"span"),b.pc(1),b.nc(2,h,2,0,"span",8),b.Nb()),2&n){var t=e.$implicit,i=e.last;b.zb(1),b.rc(" ",t,""),b.zb(1),b.ec("ngIf",!i)}}var k,g=((k=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||k)},k.\u0275cmp=b.Db({type:k,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:9,vars:5,consts:[["class","ui tiny image",3,"src",4,"ngIf"],[1,"content"],[1,"header"],["class","description",4,"ngIf"],[1,"metadata"],[4,"ngFor","ngForOf"],[1,"ui","tiny","image",3,"src"],[1,"description"],[4,"ngIf"]],template:function(n,e){1&n&&(b.nc(0,f,1,1,"img",0),b.Ob(1,"div",1),b.Ob(2,"div",2),b.pc(3),b.Nb(),b.nc(4,p,2,1,"div",3),b.Ob(5,"div",4),b.nc(6,d,3,2,"span",5),b.Kb(7,"br"),b.pc(8),b.Nb(),b.Nb()),2&n&&(b.ec("ngIf",e.book.thumbnails&&e.book.thumbnails[0]&&e.book.thumbnails[0].url),b.zb(3),b.qc(e.book.title),b.zb(1),b.ec("ngIf",e.book.subtitle),b.zb(2),b.ec("ngForOf",e.book.authors),b.zb(2),b.rc(" ISBN ",e.book.isbn," "))},directives:[r.k,r.j],styles:[""]}),k);function m(n,e){if(1&n&&b.Kb(0,"bm-book-list-item",2),2&n){var t=e.$implicit;b.ec("book",t)("routerLink",t.isbn)}}function v(n,e){if(1&n&&(b.Ob(0,"h3"),b.pc(1),b.Nb()),2&n){var t=b.ac(2);b.zb(1),b.qc(t.book.subtitle)}}function O(n,e){if(1&n&&(b.Mb(0),b.pc(1),b.Kb(2,"br"),b.Lb()),2&n){var t=e.$implicit;b.zb(1),b.rc(" ",t,"")}}function y(n,e){1&n&&b.Kb(0,"i",8)}function N(n,e){1&n&&b.Kb(0,"img",9),2&n&&b.ec("src",e.$implicit.url,b.kc)}function C(n,e){if(1&n&&(b.Ob(0,"div"),b.Ob(1,"h1"),b.pc(2),b.Nb(),b.nc(3,v,2,1,"h3",0),b.Kb(4,"div",1),b.Ob(5,"div",2),b.Ob(6,"div",3),b.Ob(7,"h4"),b.pc(8,"Autoren"),b.Nb(),b.nc(9,O,3,1,"ng-container",4),b.Nb(),b.Ob(10,"div",3),b.Ob(11,"h4"),b.pc(12,"ISBN"),b.Nb(),b.pc(13),b.Nb(),b.Ob(14,"div",3),b.Ob(15,"h4"),b.pc(16,"Erschienen"),b.Nb(),b.pc(17),b.Nb(),b.Ob(18,"div",3),b.Ob(19,"h4"),b.pc(20,"Rating"),b.Nb(),b.nc(21,y,1,0,"i",5),b.Nb(),b.Nb(),b.Ob(22,"h4"),b.pc(23,"Beschreibung"),b.Nb(),b.Ob(24,"p"),b.pc(25),b.Nb(),b.Ob(26,"div",6),b.nc(27,N,1,1,"img",7),b.Nb(),b.Nb()),2&n){var t=b.ac();b.zb(2),b.qc(t.book.title),b.zb(1),b.ec("ngIf",t.book.subtitle),b.zb(6),b.ec("ngForOf",t.book.authors),b.zb(4),b.rc(" ",t.book.isbn," "),b.zb(4),b.rc(" ",t.book.published," "),b.zb(4),b.ec("ngForOf",t.getRating(t.book.rating)),b.zb(4),b.qc(t.book.description),b.zb(2),b.ec("ngForOf",t.book.thumbnails)}}var w,z,_,F,I=[{path:"",component:a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:u},{path:"books",component:(z=function(){function n(e){_classCallCheck(this,n),this.bs=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.books=this.bs.getAll()}}]),n}(),z.\u0275fac=function(n){return new(n||z)(b.Jb(l))},z.\u0275cmp=b.Db({type:z,selectors:[["bm-book-list"]],decls:2,vars:1,consts:[[1,"ui","middle","aligned","selection","divided","list"],["class","item",3,"book","routerLink",4,"ngFor","ngForOf"],[1,"item",3,"book","routerLink"]],template:function(n,e){1&n&&(b.Ob(0,"div",0),b.nc(1,m,1,2,"bm-book-list-item",1),b.Nb()),2&n&&(b.zb(1),b.ec("ngForOf",e.books))},directives:[r.j,g,s.e],styles:[""]}),z)},{path:"books/:isbn",component:(w=function(){function n(e,t){_classCallCheck(this,n),this.bs=e,this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){this.book=this.bs.getSingle(this.route.snapshot.paramMap.get("isbn"))}},{key:"getRating",value:function(n){return new Array(n)}}]),n}(),w.\u0275fac=function(n){return new(n||w)(b.Jb(l),b.Jb(s.a))},w.\u0275cmp=b.Db({type:w,selectors:[["bm-book-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"ui","divider"],[1,"ui","grid"],[1,"four","wide","column"],[4,"ngFor","ngForOf"],["class","yellow star icon",4,"ngFor","ngForOf"],[1,"ui","small","images"],[3,"src",4,"ngFor","ngForOf"],[1,"yellow","star","icon"],[3,"src"]],template:function(n,e){1&n&&b.nc(0,C,28,8,"div",0),2&n&&b.ec("ngIf",e.book)},directives:[r.k,r.j],styles:[""]}),w)}]}],D=((F=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:F}),F.\u0275inj=b.Gb({factory:function(n){return new(n||F)},imports:[[s.h.forChild(I)],s.h]}),F),A=((_=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:_,bootstrap:[a]}),_.\u0275inj=b.Gb({factory:function(n){return new(n||_)},providers:[],imports:[[r.c,D]]}),_)}}]);