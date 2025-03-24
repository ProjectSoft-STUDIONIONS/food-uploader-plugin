/**
 * core-js 3.3.2
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev (zloirock.ru)
 */
!function(Tt){"use strict";function __webpack_require__(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var n,e;e={},__webpack_require__.m=n=[function(t,r,n){n(1),n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(78),n(81),n(83),n(85),n(86),n(87),n(88),n(90),n(91),n(93),n(101),n(102),n(103),n(104),n(112),n(113),n(115),n(116),n(117),n(119),n(120),n(121),n(122),n(123),n(124),n(126),n(127),n(128),n(129),n(135),n(136),n(138),n(139),n(140),n(144),n(145),n(147),n(148),n(150),n(151),n(152),n(153),n(154),n(161),n(163),n(164),n(165),n(167),n(168),n(170),n(171),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(186),n(187),n(189),n(191),n(192),n(193),n(194),n(195),n(197),n(199),n(201),n(202),n(204),n(205),n(207),n(208),n(209),n(210),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(231),n(232),n(233),n(234),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(261),n(263),n(264),n(265),n(266),n(268),n(271),n(272),n(273),n(274),n(278),n(279),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(290),n(291),n(292),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(348),n(349),n(350),n(351),n(352),n(353),n(355),n(357),n(358),n(360),n(361),n(362),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(373),n(374),n(375),n(376),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(392),n(395),n(396),n(397),n(398),n(400),n(401),n(403),n(404),n(405),n(406),n(407),n(408),n(410),n(411),n(412),n(413),n(415),n(416),n(417),n(418),n(419),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(447),n(448),n(449),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(484),n(485),n(486),n(487),n(488),n(492),t.exports=n(491)},function(t,r,n){function Ba(t,r){var n=J[t]=d(G[D]);return B(n,{type:W,tag:t,description:r}),a||(n.description=r),n}function Ea(r,t){h(r);var n=g(t),e=m(n).concat(ct(n));return F(e,function(t){a&&!ut.call(n,t)||at(r,t,n[t])}),r}function Ha(t,r){var n=g(t),e=v(r,!0);if(n!==V||!f(J,e)||f(X,e)){var o=z(n,e);return!o||!f(J,e)||f(n,L)&&n[L][e]||(o.enumerable=!0),o}}function Ia(t){var r=K(g(t)),n=[];return F(r,function(t){f(J,t)||f(_,t)||n.push(t)}),n}var e=n(2),o=n(3),i=n(23),a=n(5),u=n(45),c=n(6),f=n(15),s=n(46),l=n(14),h=n(20),p=n(47),g=n(9),v=n(13),y=n(8),d=n(48),m=n(50),b=n(36),x=n(52),w=n(43),S=n(4),A=n(19),I=n(7),E=n(18),O=n(21),M=n(22),R=n(29),_=n(31),P=n(30),j=n(53),T=n(54),k=n(55),U=n(56),N=n(27),F=n(57).forEach,L=R("hidden"),W="Symbol",D="prototype",C=j("toPrimitive"),B=N.set,q=N.getterFor(W),V=Object[D],G=o.Symbol,Z=o.JSON,Y=Z&&Z.stringify,z=S.f,H=A.f,K=x.f,$=I.f,J=M("symbols"),X=M("op-symbols"),Q=M("string-to-symbol-registry"),tt=M("symbol-to-string-registry"),rt=M("wks"),nt=o.QObject,et=!nt||!nt[D]||!nt[D].findChild,ot=a&&c(function(){return 7!=d(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a})?function(t,r,n){var e=z(V,r);e&&delete V[r],H(t,r,n),e&&t!==V&&H(V,r,e)}:H,it=u&&"symbol"==typeof G.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},at=function defineProperty(t,r,n){t===V&&at(X,r,n),h(t);var e=v(r,!0);return h(n),f(J,e)?(n.enumerable?(f(t,L)&&t[L][e]&&(t[L][e]=!1),n=d(n,{enumerable:y(0,!1)})):(f(t,L)||H(t,L,y(1,{})),t[L][e]=!0),ot(t,e,n)):H(t,e,n)},ut=(function create(t,r){return r===Tt?d(t):Ea(d(t),r)},function propertyIsEnumerable(t){var r=v(t,!0),n=$.call(this,r);return!(this===V&&f(J,r)&&!f(X,r))&&(!(n||!f(this,r)||!f(J,r)||f(this,L)&&this[L][r])||n)}),ct=function getOwnPropertySymbols(t){var r=t===V,n=K(r?X:g(t)),e=[];return F(n,function(t){!f(J,t)||r&&!f(V,t)||e.push(J[t])}),e};u||(O((G=function Symbol(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&arguments[0]!==Tt?String(arguments[0]):Tt,r=P(t),n=function(t){this===V&&n.call(X,t),f(this,L)&&f(this[L],r)&&(this[L][r]=!1),ot(this,r,y(1,t))};return a&&et&&ot(V,r,{configurable:!0,set:n}),Ba(r,t)})[D],"toString",function toString(){return q(this).tag}),I.f=ut,A.f=at,S.f=Ha,b.f=x.f=Ia,w.f=ct,a&&(H(G[D],"description",{configurable:!0,get:function description(){return q(this).description}}),i||O(V,"propertyIsEnumerable",ut,{unsafe:!0})),T.f=function(t){return Ba(j(t),t)}),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),F(m(rt),function(t){k(t)}),e({target:W,stat:!0,forced:!u},{"for":function(t){var r=String(t);if(f(Q,r))return Q[r];var n=G(r);return tt[Q[r]=n]=r,n},keyFor:function keyFor(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!a},{create:function create(t,r){return r===Tt?d(t):Ea(d(t),r)},defineProperty:at,defineProperties:Ea,getOwnPropertyDescriptor:Ha}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:Ia,getOwnPropertySymbols:ct}),e({target:"Object",stat:!0,forced:c(function(){w.f(1)})},{getOwnPropertySymbols:function getOwnPropertySymbols(t){return w.f(p(t))}}),Z&&e({target:"JSON",stat:!0,forced:!u||c(function(){var t=G();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))})},{stringify:function stringify(t){for(var r,n,e=[t],o=1;o<arguments.length;)e.push(arguments[o++]);if(n=r=e[1],(l(r)||t!==Tt)&&!it(t))return s(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!it(r))return r}),e[1]=r,Y.apply(Z,e)}}),G[D][C]||E(G[D],C,G[D].valueOf),U(G,W),_[L]=!0},function(t,r,n){var s=n(3),l=n(4).f,h=n(18),p=n(21),g=n(25),v=n(32),y=n(44);t.exports=function(t,r){var n,e,o,i,a,u=t.target,c=t.global,f=t.stat;if(n=c?s:f?s[u]||g(u,{}):(s[u]||{}).prototype)for(e in r){if(i=r[e],o=t.noTargetGet?(a=l(n,e))&&a.value:n[e],!y(c?e:u+(f?".":"#")+e,t.forced)&&o!==Tt){if(typeof i==typeof o)continue;v(i,o)}(t.sham||o&&o.sham)&&h(i,"sham",!0),p(n,e,i,t)}}},function(t,r){function hc(t){return t&&t.Math==Math&&t}t.exports=hc("object"==typeof globalThis&&globalThis)||hc("object"==typeof window&&window)||hc("object"==typeof self&&self)||hc("object"==typeof global&&global)||Function("return this")()},function(t,r,n){var e=n(5),o=n(7),i=n(8),a=n(9),u=n(13),c=n(15),f=n(16),s=Object.getOwnPropertyDescriptor;r.f=e?s:function getOwnPropertyDescriptor(t,r){if(t=a(t),r=u(r,!0),f)try{return s(t,r)}catch(n){}if(c(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r,n){var e=n(6);t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,r){t.exports=function(t){try{return!!t()}catch(r){return!0}}},function(t,r,n){var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function propertyIsEnumerable(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(10),o=n(12);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(6),o=n(11),i="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(t==Tt)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var o=n(14);t.exports=function(t,r){if(!o(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!o(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!o(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!o(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r,n){var e=n(5),o=n(6),i=n(17);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,r,n){var e=n(3),o=n(14),i=e.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,r,n){var e=n(5),o=n(19),i=n(8);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(5),o=n(16),i=n(20),a=n(13),u=Object.defineProperty;r.f=e?u:function defineProperty(t,r,n){if(i(t),r=a(r,!0),i(n),o)try{return u(t,r,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(14);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var u=n(3),e=n(22),c=n(18),f=n(15),s=n(25),o=n(26),i=n(27),a=i.get,l=i.enforce,h=String(o).split("toString");e("inspectSource",function(t){return o.call(t)}),(t.exports=function(t,r,n,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,a=!!e&&!!e.noTargetGet;"function"==typeof n&&("string"!=typeof r||f(n,"name")||c(n,"name",r),l(n).source=h.join("string"==typeof r?r:"")),t!==u?(o?!a&&t[r]&&(i=!0):delete t[r],i?t[r]=n:c(t,r,n)):i?t[r]=n:s(r,n)})(Function.prototype,"toString",function toString(){return"function"==typeof this&&a(this).source||o.call(this)})},function(t,r,n){var e=n(23),o=n(24);(t.exports=function(t,r){return o[t]||(o[t]=r!==Tt?r:{})})("versions",[]).push({version:"3.3.2",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,r){t.exports=!1},function(t,r,n){var e=n(3),o=n(25),i="__core-js_shared__",a=e[i]||o(i,{});t.exports=a},function(t,r,n){var e=n(3),o=n(18);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(22);t.exports=e("native-function-to-string",Function.toString)},function(t,r,n){var e,o,i,a=n(28),u=n(3),c=n(14),f=n(18),s=n(15),l=n(29),h=n(31);if(a){var p=new u.WeakMap,g=p.get,v=p.has,y=p.set;e=function(t,r){return y.call(p,t,r),r},o=function(t){return g.call(p,t)||{}},i=function(t){return v.call(p,t)}}else{var d=l("state");h[d]=!0,e=function(t,r){return f(t,d,r),r},o=function(t){return s(t,d)?t[d]:{}},i=function(t){return s(t,d)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(n){return function(t){var r;if(!c(t)||(r=o(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return r}}}},function(t,r,n){var e=n(3),o=n(26),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,r,n){var e=n(22),o=n(30),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(t===Tt?"":t)+")_"+(++n+e).toString(36)}},function(t,r){t.exports={}},function(t,r,n){var u=n(15),c=n(33),f=n(4),s=n(19);t.exports=function(t,r){for(var n=c(r),e=s.f,o=f.f,i=0;i<n.length;i++){var a=n[i];u(t,a)||e(t,a,o(r,a))}}},function(t,r,n){var e=n(34),o=n(36),i=n(43),a=n(20);t.exports=e("Reflect","ownKeys")||function ownKeys(t){var r=o.f(a(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){function Rg(t){return"function"==typeof t?t:Tt}var e=n(35),o=n(3);t.exports=function(t,r){return arguments.length<2?Rg(e[t])||Rg(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r,n){t.exports=n(3)},function(t,r,n){var e=n(37),o=n(42).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,o)}},function(t,r,n){var a=n(15),u=n(9),c=n(38).indexOf,f=n(31);t.exports=function(t,r){var n,e=u(t),o=0,i=[];for(n in e)!a(f,n)&&a(e,n)&&i.push(n);for(;o<r.length;)a(e,n=r[o++])&&(~c(i,n)||i.push(n));return i}},function(t,r,n){function wh(u){return function(t,r,n){var e,o=c(t),i=f(o.length),a=s(n,i);if(u&&r!=r){for(;a<i;)if((e=o[a++])!=e)return!0}else for(;a<i;a++)if((u||a in o)&&o[a]===r)return u||a||0;return!u&&-1}}var c=n(9),f=n(39),s=n(41);t.exports={includes:wh(!0),indexOf:wh(!1)}},function(t,r,n){var e=n(40),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:n)(t)}},function(t,r,n){var e=n(40),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){function gi(t,r){var n=a[i(t)];return n==c||n!=u&&("function"==typeof r?e(r):!!r)}var e=n(6),o=/#|\.prototype\./,i=gi.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=gi.data={},u=gi.NATIVE="N",c=gi.POLYFILL="P";t.exports=gi},function(t,r,n){var e=n(6);t.exports=!!Object.getOwnPropertySymbols&&!e(function(){return!String(Symbol())})},function(t,r,n){var e=n(11);t.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},function(t,r,n){var e=n(12);t.exports=function(t){return Object(e(t))}},function(t,r,n){function Pi(){}var e=n(20),o=n(49),i=n(42),a=n(31),u=n(51),c=n(17),f=n(29)("IE_PROTO"),s="prototype",l=function(){var t,r=c("iframe"),n=i.length,e="script";for(r.style.display="none",u.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write("<script>document.F=Object</"+e+">"),t.close(),l=t.F;n--;)delete l[s][i[n]];return l()};t.exports=Object.create||function create(t,r){var n;return null!==t?(Pi[s]=e(t),n=new Pi,Pi[s]=null,n[f]=t):n=l(),r===Tt?n:o(n,r)},a[f]=!0},function(t,r,n){var e=n(5),a=n(19),u=n(20),c=n(50);t.exports=e?Object.defineProperties:function defineProperties(t,r){u(t);for(var n,e=c(r),o=e.length,i=0;i<o;)a.f(t,n=e[i++],r[n]);return t}},function(t,r,n){var e=n(37),o=n(42);t.exports=Object.keys||function keys(t){return e(t,o)}},function(t,r,n){var e=n(34);t.exports=e("document","documentElement")},function(t,r,n){var e=n(9),o=n(36).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(r){return a.slice()}}(t):o(e(t))}},function(t,r,n){var e=n(3),o=n(22),i=n(30),a=n(45),u=e.Symbol,c=o("wks");t.exports=function(t){return c[t]||(c[t]=a&&u[t]||(a?u:i)("Symbol."+t))}},function(t,r,n){r.f=n(53)},function(t,r,n){var e=n(35),o=n(15),i=n(54),a=n(19).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},function(t,r,n){var e=n(19).f,o=n(15),i=n(53)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},function(t,r,n){function vk(p){var g=1==p,v=2==p,y=3==p,d=4==p,m=6==p,b=5==p||m;return function(t,r,n,e){for(var o,i,a=S(t),u=w(a),c=x(r,n,3),f=A(u.length),s=0,l=e||I,h=g?l(t,f):v?l(t,0):Tt;s<f;s++)if((b||s in u)&&(i=c(o=u[s],s,a),p))if(g)h[s]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return s;case 2:E.call(h,o)}else if(d)return!1;return m?-1:y||d?d:h}}var x=n(58),w=n(10),S=n(47),A=n(39),I=n(60),E=[].push;t.exports={forEach:vk(0),map:vk(1),filter:vk(2),some:vk(3),every:vk(4),find:vk(5),findIndex:vk(6)}},function(t,r,n){var i=n(59);t.exports=function(e,o,t){if(i(e),o===Tt)return e;switch(t){case 0:return function(){return e.call(o)};case 1:return function(t){return e.call(o,t)};case 2:return function(t,r){return e.call(o,t,r)};case 3:return function(t,r,n){return e.call(o,t,r,n)}}return function(){return e.apply(o,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){var e=n(14),o=n(46),i=n(53)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=Tt):n=Tt),new(n===Tt?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(2),o=n(5),i=n(3),a=n(15),u=n(14),c=n(19).f,f=n(32),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||s().description!==Tt)){var l={},h=function Symbol(){var t=arguments.length<1||arguments[0]===Tt?Tt:String(arguments[0]),r=this instanceof h?new s(t):t===Tt?s():s(t);return""===t&&(l[r]=!0),r};f(h,s);var p=h.prototype=s.prototype;p.constructor=h;var g=p.toString,v="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function description(){var t=u(this)?this.valueOf():this,r=g.call(t);if(a(l,t))return"";var n=v?r.slice(7,-1):r.replace(y,"$1");return""===n?Tt:n}}),e({global:!0,forced:!0},{Symbol:h})}},function(t,r,n){n(55)("asyncIterator")},function(t,r,n){n(55)("hasInstance")},function(t,r,n){n(55)("isConcatSpreadable")},function(t,r,n){n(55)("iterator")},function(t,r,n){n(55)("match")},function(t,r,n){n(55)("matchAll")},function(t,r,n){n(55)("replace")},function(t,r,n){n(55)("search")},function(t,r,n){n(55)("species")},function(t,r,n){n(55)("split")},function(t,r,n){n(55)("toPrimitive")},function(t,r,n){n(55)("toStringTag")},function(t,r,n){n(55)("unscopables")},function(t,r,n){function $m(t){if(!a(t))return!1;var r=t[c];return r!==Tt?!!r:i(t)}var e=n(2),o=n(6),i=n(46),a=n(14),f=n(47),s=n(39),l=n(76),h=n(60),u=n(77),c=n(53)("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",v=!o(function(){var t=[];return t[c]=!1,t.concat()[0]!==t}),y=u("concat");e({target:"Array",proto:!0,forced:!v||!y},{concat:function concat(t){var r,n,e,o,i,a=f(this),u=h(a,0),c=0;for(r=-1,e=arguments.length;r<e;r++)if($m(i=-1===r?a:arguments[r])){if(o=s(i.length),p<c+o)throw TypeError(g);for(n=0;n<o;n++,c++)n in i&&l(u,c,i[n])}else{if(p<=c)throw TypeError(g);l(u,c++,i)}return u.length=c,u}})},function(t,r,n){var o=n(13),i=n(19),a=n(8);t.exports=function(t,r,n){var e=o(r);e in t?i.f(t,e,a(0,n)):t[e]=n}},function(t,r,n){var e=n(6),o=n(53)("species");t.exports=function(r){return!e(function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[r](Boolean).foo})}},function(t,r,n){var e=n(2),o=n(79),i=n(80);e({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},function(t,r,n){var f=n(47),s=n(41),l=n(39),h=Math.min;t.exports=[].copyWithin||function copyWithin(t,r){var n=f(this),e=l(n.length),o=s(t,e),i=s(r,e),a=2<arguments.length?arguments[2]:Tt,u=h((a===Tt?e:s(a,e))-i,e-o),c=1;for(i<o&&o<i+u&&(c=-1,i+=u-1,o+=u-1);0<u--;)i in n?n[o]=n[i]:delete n[o],o+=c,i+=c;return n}},function(t,r,n){var e=n(53),o=n(48),i=n(18),a=e("unscopables"),u=Array.prototype;u[a]==Tt&&i(u,a,o(null)),t.exports=function(t){u[a][t]=!0}},function(t,r,n){var e=n(2),o=n(57).every;e({target:"Array",proto:!0,forced:n(82)("every")},{every:function every(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(6);t.exports=function(t,r){var n=[][t];return!n||!e(function(){n.call(null,r||function(){throw 1},1)})}},function(t,r,n){var e=n(2),o=n(84),i=n(80);e({target:"Array",proto:!0},{fill:o}),i("fill")},function(t,r,n){var u=n(47),c=n(41),f=n(39);t.exports=function fill(t){for(var r=u(this),n=f(r.length),e=arguments.length,o=c(1<e?arguments[1]:Tt,n),i=2<e?arguments[2]:Tt,a=i===Tt?n:c(i,n);o<a;)r[o++]=t;return r}},function(t,r,n){var e=n(2),o=n(57).filter;e({target:"Array",proto:!0,forced:!n(77)("filter")},{filter:function filter(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(2),o=n(57).find,i=n(80),a="find",u=!0;a in[]&&Array(1)[a](function(){u=!1}),e({target:"Array",proto:!0,forced:u},{find:function find(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}}),i(a)},function(t,r,n){var e=n(2),o=n(57).findIndex,i=n(80),a="findIndex",u=!0;a in[]&&Array(1)[a](function(){u=!1}),e({target:"Array",proto:!0,forced:u},{findIndex:function findIndex(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}}),i(a)},function(t,r,n){var e=n(2),o=n(89),i=n(47),a=n(39),u=n(40),c=n(60);e({target:"Array",proto:!0},{flat:function flat(){var t=arguments.length?arguments[0]:Tt,r=i(this),n=a(r.length),e=c(r,0);return e.length=o(e,r,r,n,0,t===Tt?1:u(t)),e}})},function(t,r,n){var h=n(46),p=n(39),g=n(58),v=function(t,r,n,e,o,i,a,u){for(var c,f=o,s=0,l=!!a&&g(a,u,3);s<e;){if(s in n){if(c=l?l(n[s],s,r):n[s],0<i&&h(c))f=v(t,r,c,p(c.length),f,i-1)-1;else{if(9007199254740991<=f)throw TypeError("Exceed the acceptable array length");t[f]=c}f++}s++}return f};t.exports=v},function(t,r,n){var e=n(2),o=n(89),i=n(47),a=n(39),u=n(59),c=n(60);e({target:"Array",proto:!0},{flatMap:function flatMap(t){var r,n=i(this),e=a(n.length);return u(t),(r=c(n,0)).length=o(r,n,n,e,0,1,t,1<arguments.length?arguments[1]:Tt),r}})},function(t,r,n){var e=n(2),o=n(92);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,n){var e=n(57).forEach,o=n(82);t.exports=o("forEach")?function forEach(t){return e(this,t,1<arguments.length?arguments[1]:Tt)}:[].forEach},function(t,r,n){var e=n(2),o=n(94);e({target:"Array",stat:!0,forced:!n(100)(function(t){Array.from(t)})},{from:o})},function(t,r,n){var p=n(58),g=n(47),v=n(95),y=n(96),d=n(39),m=n(76),b=n(98);t.exports=function from(t){var r,n,e,o,i,a=g(t),u="function"==typeof this?this:Array,c=arguments.length,f=1<c?arguments[1]:Tt,s=f!==Tt,l=0,h=b(a);if(s&&(f=p(f,2<c?arguments[2]:Tt,2)),h==Tt||u==Array&&y(h))for(n=new u(r=d(a.length));l<r;l++)m(n,l,s?f(a[l],l):a[l]);else for(i=(o=h.call(a)).next,n=new u;!(e=i.call(o)).done;l++)m(n,l,s?v(o,f,[e.value,l],!0):e.value);return n.length=l,n}},function(t,r,n){var a=n(20);t.exports=function(t,r,n,e){try{return e?r(a(n)[0],n[1]):r(n)}catch(i){var o=t["return"];throw o!==Tt&&a(o.call(t)),i}}},function(t,r,n){var e=n(53),o=n(97),i=e("iterator"),a=Array.prototype;t.exports=function(t){return t!==Tt&&(o.Array===t||a[i]===t)}},function(t,r){t.exports={}},function(t,r,n){var e=n(99),o=n(97),i=n(53)("iterator");t.exports=function(t){if(t!=Tt)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,r,n){var o=n(11),i=n(53)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=function(t){var r,n,e;return t===Tt?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(n){}}(r=Object(t),i))?n:a?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){var o=n(53)("iterator"),i=!1;try{var e=0,a={next:function(){return{done:!!e++}},"return":function(){i=!0}};a[o]=function(){return this},Array.from(a,function(){throw 2})}catch(u){}t.exports=function(t,r){if(!r&&!i)return!1;var n=!1;try{var e={};e[o]=function(){return{next:function(){return{done:n=!0}}}},t(e)}catch(u){}return n}},function(t,r,n){var e=n(2),o=n(38).includes,i=n(80);e({target:"Array",proto:!0},{includes:function includes(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}}),i("includes")},function(t,r,n){var e=n(2),o=n(38).indexOf,i=n(82),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,c=i("indexOf");e({target:"Array",proto:!0,forced:u||c},{indexOf:function indexOf(t){return u?a.apply(this,arguments)||0:o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){n(2)({target:"Array",stat:!0},{isArray:n(46)})},function(t,r,n){var e=n(9),o=n(80),i=n(97),a=n(27),u=n(105),c="Array Iterator",f=a.set,s=a.getterFor(c);t.exports=u(Array,"Array",function(t,r){f(this,{type:c,target:e(t),index:0,kind:r})},function(){var t=s(this),r=t.target,n=t.kind,e=t.index++;return!r||r.length<=e?{value:t.target=Tt,done:!0}:"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r,n){function gt(){return this}var y=n(2),d=n(106),m=n(108),b=n(110),x=n(56),w=n(18),S=n(21),e=n(53),A=n(23),I=n(97),o=n(107),E=o.IteratorPrototype,O=o.BUGGY_SAFARI_ITERATORS,M=e("iterator"),R="values",_="entries";t.exports=function(t,r,n,e,o,i,a){d(n,r,e);function ot(t){if(t===o&&g)return g;if(!O&&t in h)return h[t];switch(t){case"keys":return function keys(){return new n(this,t)};case R:return function values(){return new n(this,t)};case _:return function entries(){return new n(this,t)}}return function(){return new n(this)}}var u,c,f,s=r+" Iterator",l=!1,h=t.prototype,p=h[M]||h["@@iterator"]||o&&h[o],g=!O&&p||ot(o),v="Array"==r&&h.entries||p;if(v&&(u=m(v.call(new t)),E!==Object.prototype&&u.next&&(A||m(u)===E||(b?b(u,E):"function"!=typeof u[M]&&w(u,M,gt)),x(u,s,!0,!0),A&&(I[s]=gt))),o==R&&p&&p.name!==R&&(l=!0,g=function values(){return p.call(this)}),A&&!a||h[M]===g||w(h,M,g),I[r]=g,o)if(c={values:ot(R),keys:i?g:ot("keys"),entries:ot(_)},a)for(f in c)!O&&!l&&f in h||S(h,f,c[f]);else y({target:r,proto:!0,forced:O||l},c);return c}},function(t,r,n){function Ht(){return this}var o=n(107).IteratorPrototype,i=n(48),a=n(8),u=n(56),c=n(97);t.exports=function(t,r,n){var e=r+" Iterator";return t.prototype=i(o,{next:a(1,n)}),u(t,e,!1,!0),c[e]=Ht,t}},function(t,r,n){var e,o,i,a=n(108),u=n(18),c=n(15),f=n(53),s=n(23),l=f("iterator"),h=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(e=o):h=!0),e==Tt&&(e={}),s||c(e,l)||u(e,l,function(){return this}),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:h}},function(t,r,n){var e=n(15),o=n(47),i=n(29),a=n(109),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,r,n){var e=n(6);t.exports=!e(function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype})},function(t,r,n){var o=n(20),i=n(111);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,e=!1,t={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),e=t instanceof Array}catch(r){}return function setPrototypeOf(t,r){return o(t),i(r),e?n.call(t,r):t.__proto__=r,t}}():Tt)},function(t,r,n){var e=n(14);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){var e=n(2),o=n(10),i=n(9),a=n(82),u=[].join,c=o!=Object,f=a("join",",");e({target:"Array",proto:!0,forced:c||f},{join:function join(t){return u.call(i(this),t===Tt?",":t)}})},function(t,r,n){var e=n(2),o=n(114);e({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},function(t,r,n){var o=n(9),i=n(40),a=n(39),e=n(82),u=Math.min,c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0,s=e("lastIndexOf");t.exports=f||s?function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var r=o(this),n=a(r.length),e=n-1;for(1<arguments.length&&(e=u(e,i(arguments[1]))),e<0&&(e=n+e);0<=e;e--)if(e in r&&r[e]===t)return e||0;return-1}:c},function(t,r,n){var e=n(2),o=n(57).map;e({target:"Array",proto:!0,forced:!n(77)("map")},{map:function map(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(2),o=n(6),i=n(76);e({target:"Array",stat:!0,forced:o(function(){function F(){}return!(Array.of.call(F)instanceof F)})},{of:function of(){for(var t=0,r=arguments.length,n=new("function"==typeof this?this:Array)(r);t<r;)i(n,t,arguments[t++]);return n.length=r,n}})},function(t,r,n){var e=n(2),o=n(118).left;e({target:"Array",proto:!0,forced:n(82)("reduce")},{reduce:function reduce(t){return o(this,t,arguments.length,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){function Lv(f){return function(t,r,n,e){s(r);var o=l(t),i=h(o),a=p(o.length),u=f?a-1:0,c=f?-1:1;if(n<2)for(;;){if(u in i){e=i[u],u+=c;break}if(u+=c,f?u<0:a<=u)throw TypeError("Reduce of empty array with no initial value")}for(;f?0<=u:u<a;u+=c)u in i&&(e=r(e,i[u],u,o));return e}}var s=n(59),l=n(47),h=n(10),p=n(39);t.exports={left:Lv(!1),right:Lv(!0)}},function(t,r,n){var e=n(2),o=n(118).right;e({target:"Array",proto:!0,forced:n(82)("reduceRight")},{reduceRight:function reduceRight(t){return o(this,t,arguments.length,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(2),o=n(46),i=[].reverse,a=[1,2];e({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function reverse(){return o(this)&&(this.length=this.length),i.call(this)}})},function(t,r,n){var e=n(2),f=n(14),s=n(46),l=n(41),h=n(39),p=n(9),g=n(76),o=n(77),v=n(53)("species"),y=[].slice,d=Math.max;e({target:"Array",proto:!0,forced:!o("slice")},{slice:function slice(t,r){var n,e,o,i=p(this),a=h(i.length),u=l(t,a),c=l(r===Tt?a:r,a);if(s(i)&&("function"!=typeof(n=i.constructor)||n!==Array&&!s(n.prototype)?f(n)&&null===(n=n[v])&&(n=Tt):n=Tt,n===Array||n===Tt))return y.call(i,u,c);for(e=new(n===Tt?Array:n)(d(c-u,0)),o=0;u<c;u++,o++)u in i&&g(e,o,i[u]);return e.length=o,e}})},function(t,r,n){var e=n(2),o=n(57).some;e({target:"Array",proto:!0,forced:n(82)("some")},{some:function some(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(2),o=n(59),i=n(47),a=n(6),u=n(82),c=[].sort,f=[1,2,3],s=a(function(){f.sort(Tt)}),l=a(function(){f.sort(null)}),h=u("sort");e({target:"Array",proto:!0,forced:s||!l||h},{sort:function sort(t){return t===Tt?c.call(i(this)):c.call(i(this),o(t))}})},function(t,r,n){n(125)("Array")},function(t,r,n){var e=n(34),o=n(19),i=n(53),a=n(5),u=i("species");t.exports=function(t){var r=e(t);a&&r&&!r[u]&&(0,o.f)(r,u,{configurable:!0,get:function(){return this}})}},function(t,r,n){var e=n(2),h=n(41),p=n(40),g=n(39),v=n(47),y=n(60),d=n(76),o=n(77),m=Math.max,b=Math.min;e({target:"Array",proto:!0,forced:!o("splice")},{splice:function splice(t,r){var n,e,o,i,a,u,c=v(this),f=g(c.length),s=h(t,f),l=arguments.length;if(0===l?n=e=0:e=1===l?(n=0,f-s):(n=l-2,b(m(p(r),0),f-s)),9007199254740991<f+n-e)throw TypeError("Maximum allowed length exceeded");for(o=y(c,e),i=0;i<e;i++)(a=s+i)in c&&d(o,i,c[a]);if(n<(o.length=e)){for(i=s;i<f-e;i++)u=i+n,(a=i+e)in c?c[u]=c[a]:delete c[u];for(i=f;f-e+n<i;i--)delete c[i-1]}else if(e<n)for(i=f-e;s<i;i--)u=i+n-1,(a=i+e-1)in c?c[u]=c[a]:delete c[u];for(i=0;i<n;i++)c[i+s]=arguments[i+2];return c.length=f-e+n,o}})},function(t,r,n){n(80)("flat")},function(t,r,n){n(80)("flatMap")},function(t,r,n){var e=n(2),o=n(3),i=n(130),a=n(125),u="ArrayBuffer",c=i[u];e({global:!0,forced:o[u]!==c},{ArrayBuffer:c}),a(u)},function(t,r,n){function Qy(t,r,n){var e,o,i,a=new Array(n),u=8*n-r-1,c=(1<<u)-1,f=c>>1,s=23===r?P(2,-24)-P(2,-77):0,l=t<0||0===t&&1/t<0?1:0,h=0;for((t=_(t))!=t||t===1/0?(o=t!=t?1:0,e=c):(e=j(T(t)/k),t*(i=P(2,-e))<1&&(e--,i*=2),2<=(t+=1<=e+f?s/i:s*P(2,1-f))*i&&(e++,i/=2),c<=e+f?(o=0,e=c):1<=e+f?(o=(t*i-1)*P(2,r),e+=f):(o=t*P(2,f-1)*P(2,r),e=0));8<=r;a[h++]=255&o,o/=256,r-=8);for(e=e<<r|o,u+=r;0<u;a[h++]=255&e,e/=256,u-=8);return a[--h]|=128*l,a}function Ry(t,r){var n,e=t.length,o=8*e-r-1,i=(1<<o)-1,a=i>>1,u=o-7,c=e-1,f=t[c--],s=127&f;for(f>>=7;0<u;s=256*s+t[c],c--,u-=8);for(n=s&(1<<-u)-1,s>>=-u,u+=r;0<u;n=256*n+t[c],c--,u-=8);if(0===s)s=1-a;else{if(s===i)return n?NaN:f?-1/0:1/0;n+=P(2,r),s-=a}return(f?-1:1)*n*P(2,s-r)}function Sy(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function Ty(t){return[255&t]}function Uy(t){return[255&t,t>>8&255]}function Vy(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function Wy(t){return Qy(t,23,4)}function Xy(t){return Qy(t,52,8)}function Yy(t,r){g(t[S],r,{get:function(){return m(this)[r]}})}function Zy(t,r,n,e){var o=h(+n),i=m(t);if(i.byteLength<o+r)throw R(A);var a=m(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+r);return e?c:c.reverse()}function $y(t,r,n,e,o,i){var a=h(+n),u=m(t);if(u.byteLength<a+r)throw R(A);for(var c=m(u.buffer).bytes,f=a+u.byteOffset,s=e(+o),l=0;l<r;l++)c[f+l]=s[i?l:r-l-1]}var e=n(3),i=n(5),o=n(131).NATIVE_ARRAY_BUFFER,a=n(18),u=n(132),c=n(6),f=n(133),s=n(40),l=n(39),h=n(134),p=n(36).f,g=n(19).f,v=n(84),y=n(56),d=n(27),
m=d.get,b=d.set,x="ArrayBuffer",w="DataView",S="prototype",A="Wrong index",I=e[x],E=I,O=e[w],M=e.Math,R=e.RangeError,_=M.abs,P=M.pow,j=M.floor,T=M.log,k=M.LN2;if(o){if(!c(function(){I(1)})||!c(function(){new I(-1)})||c(function(){return new I,new I(1.5),new I(NaN),I.name!=x})){for(var U,N=(E=function ArrayBuffer(t){return f(this,E),new I(h(t))})[S]=I[S],F=p(I),L=0;L<F.length;)(U=F[L++])in E||a(E,U,I[U]);N.constructor=E}var W=new O(new E(2)),D=O[S].setInt8;W.setInt8(0,2147483648),W.setInt8(1,2147483649),!W.getInt8(0)&&W.getInt8(1)||u(O[S],{setInt8:function setInt8(t,r){D.call(this,t,r<<24>>24)},setUint8:function setUint8(t,r){D.call(this,t,r<<24>>24)}},{unsafe:!0})}else E=function ArrayBuffer(t){f(this,E,x);var r=h(t);b(this,{bytes:v.call(new Array(r),0),byteLength:r}),i||(this.byteLength=r)},O=function DataView(t,r,n){f(this,O,w),f(t,E,w);var e=m(t).byteLength,o=s(r);if(o<0||e<o)throw R("Wrong offset");if(e<o+(n=n===Tt?e-o:l(n)))throw R("Wrong length");b(this,{buffer:t,byteLength:n,byteOffset:o}),i||(this.buffer=t,this.byteLength=n,this.byteOffset=o)},i&&(Yy(E,"byteLength"),Yy(O,"buffer"),Yy(O,"byteLength"),Yy(O,"byteOffset")),u(O[S],{getInt8:function getInt8(t){return Zy(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return Zy(this,1,t)[0]},getInt16:function getInt16(t){var r=Zy(this,2,t,1<arguments.length?arguments[1]:Tt);return(r[1]<<8|r[0])<<16>>16},getUint16:function getUint16(t){var r=Zy(this,2,t,1<arguments.length?arguments[1]:Tt);return r[1]<<8|r[0]},getInt32:function getInt32(t){return Sy(Zy(this,4,t,1<arguments.length?arguments[1]:Tt))},getUint32:function getUint32(t){return Sy(Zy(this,4,t,1<arguments.length?arguments[1]:Tt))>>>0},getFloat32:function getFloat32(t){return Ry(Zy(this,4,t,1<arguments.length?arguments[1]:Tt),23)},getFloat64:function getFloat64(t){return Ry(Zy(this,8,t,1<arguments.length?arguments[1]:Tt),52)},setInt8:function setInt8(t,r){$y(this,1,t,Ty,r)},setUint8:function setUint8(t,r){$y(this,1,t,Ty,r)},setInt16:function setInt16(t,r){$y(this,2,t,Uy,r,2<arguments.length?arguments[2]:Tt)},setUint16:function setUint16(t,r){$y(this,2,t,Uy,r,2<arguments.length?arguments[2]:Tt)},setInt32:function setInt32(t,r){$y(this,4,t,Vy,r,2<arguments.length?arguments[2]:Tt)},setUint32:function setUint32(t,r){$y(this,4,t,Vy,r,2<arguments.length?arguments[2]:Tt)},setFloat32:function setFloat32(t,r){$y(this,4,t,Wy,r,2<arguments.length?arguments[2]:Tt)},setFloat64:function setFloat64(t,r){$y(this,8,t,Xy,r,2<arguments.length?arguments[2]:Tt)}});y(E,x),y(O,w),t.exports={ArrayBuffer:E,DataView:O}},function(t,r,n){function xB(t){return o(t)&&c(j,i(t))}var e,a=n(5),u=n(3),o=n(14),c=n(15),i=n(99),f=n(18),s=n(21),l=n(19).f,h=n(108),p=n(110),g=n(53),v=n(30),y=u.DataView,d=y&&y.prototype,m=u.Int8Array,b=m&&m.prototype,x=u.Uint8ClampedArray,w=x&&x.prototype,S=m&&h(m),A=b&&h(b),I=Object.prototype,E=I.isPrototypeOf,O=g("toStringTag"),M=v("TYPED_ARRAY_TAG"),R=!(!u.ArrayBuffer||!y),_=R&&!!p&&"Opera"!==i(u.opera),P=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},T=function T(t){var r=i(t);return"DataView"===r||c(j,r)};for(e in j)u[e]||(_=!1);if((!_||"function"!=typeof S||S===Function.prototype)&&(S=function S(){throw TypeError("Incorrect invocation")},_))for(e in j)u[e]&&p(u[e],S);if((!_||!A||A===I)&&(A=S.prototype,_))for(e in j)u[e]&&p(u[e].prototype,A);if(_&&h(w)!==A&&p(w,A),a&&!c(A,O))for(e in P=!0,l(A,O,{get:function(){return o(this)?this[M]:Tt}}),j)u[e]&&f(u[e],M,e);R&&p&&h(d)!==I&&p(d,I),t.exports={NATIVE_ARRAY_BUFFER:R,NATIVE_ARRAY_BUFFER_VIEWS:_,TYPED_ARRAY_TAG:P&&M,aTypedArray:function(t){if(xB(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p){if(E.call(S,t))return t}else for(var r in j)if(c(j,e)){var n=u[r];if(n&&(t===n||E.call(n,t)))return t}throw TypeError("Target is not a typed array constructor")},exportProto:function(t,r,n){if(a){if(n)for(var e in j){var o=u[e];o&&c(o.prototype,t)&&delete o.prototype[t]}A[t]&&!n||s(A,t,n?r:_&&b[t]||r)}},exportStatic:function(t,r,n){var e,o;if(a){if(p){if(n)for(e in j)(o=u[e])&&c(o,t)&&delete o[t];if(S[t]&&!n)return;try{return s(S,t,n?r:_&&m[t]||r)}catch(i){}}for(e in j)!(o=u[e])||o[t]&&!n||s(o,t,r)}},isView:T,isTypedArray:xB,TypedArray:S,TypedArrayPrototype:A}},function(t,r,n){var o=n(21);t.exports=function(t,r,n){for(var e in r)o(t,e,r[e],n);return t}},function(t,r){t.exports=function(t,r,n){if(!(t instanceof r))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,r,n){var e=n(40),o=n(39);t.exports=function(t){if(t===Tt)return 0;var r=e(t),n=o(r);if(r!==n)throw RangeError("Wrong length or index");return n}},function(t,r,n){var e=n(2),o=n(131);e({target:"ArrayBuffer",stat:!0,forced:!o.NATIVE_ARRAY_BUFFER_VIEWS},{isView:o.isView})},function(t,r,n){var e=n(2),o=n(6),i=n(130),f=n(20),s=n(41),l=n(39),h=n(137),p=i.ArrayBuffer,g=i.DataView,v=p.prototype.slice;e({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:o(function(){return!new p(2).slice(1,Tt).byteLength})},{slice:function slice(t,r){if(v!==Tt&&r===Tt)return v.call(f(this),t);for(var n=f(this).byteLength,e=s(t,n),o=s(r===Tt?n:r,n),i=new(h(this,p))(l(o-e)),a=new g(this),u=new g(i),c=0;e<o;)u.setUint8(c++,a.getUint8(e++));return i}})},function(t,r,n){var o=n(20),i=n(59),a=n(53)("species");t.exports=function(t,r){var n,e=o(t).constructor;return e===Tt||(n=o(e)[a])==Tt?r:i(n)}},function(t,r,n){var e=n(2),o=n(130);e({global:!0,forced:!n(131).NATIVE_ARRAY_BUFFER},{DataView:o.DataView})},function(t,r,n){n(2)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},function(t,r,n){var e=n(2),o=n(141);e({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},function(t,r,n){var e=n(6),o=n(142).start,i=Math.abs,a=Date.prototype,u=a.getTime,c=a.toISOString;t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-5e13-1))})||!e(function(){c.call(new Date(NaN))})?function toISOString(){if(!isFinite(u.call(this)))throw RangeError("Invalid time value");var t=this,r=t.getUTCFullYear(),n=t.getUTCMilliseconds(),e=r<0?"-":9999<r?"+":"";return e+o(i(r),e?6:4,0)+"-"+o(t.getUTCMonth()+1,2,0)+"-"+o(t.getUTCDate(),2,0)+"T"+o(t.getUTCHours(),2,0)+":"+o(t.getUTCMinutes(),2,0)+":"+o(t.getUTCSeconds(),2,0)+"."+o(n,3,0)+"Z"}:c},function(t,r,n){function JD(f){return function(t,r,n){var e,o,i=String(h(t)),a=i.length,u=n===Tt?" ":String(n),c=s(r);return c<=a||""==u?i:((e=c-a)<(o=l.call(u,p(e/u.length))).length&&(o=o.slice(0,e)),f?i+o:o+i)}}var s=n(39),l=n(143),h=n(12),p=Math.ceil;t.exports={start:JD(!1),end:JD(!0)}},function(t,r,n){var o=n(40),i=n(12);t.exports="".repeat||function repeat(t){var r=String(i(this)),n="",e=o(t);if(e<0||e==Infinity)throw RangeError("Wrong number of repetitions");for(;0<e;(e>>>=1)&&(r+=r))1&e&&(n+=r);return n}},function(t,r,n){var e=n(2),o=n(6),i=n(47),a=n(13);e({target:"Date",proto:!0,forced:o(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})},{toJSON:function toJSON(t){var r=i(this),n=a(r);return"number"!=typeof n||isFinite(n)?r.toISOString():null}})},function(t,r,n){var e=n(18),o=n(146),i=n(53)("toPrimitive"),a=Date.prototype;i in a||e(a,i,o)},function(t,r,n){var e=n(20),o=n(13);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(e(this),"number"!==t)}},function(t,r,n){var e=n(21),o=Date.prototype,i="Invalid Date",a="toString",u=o[a],c=o.getTime;new Date(NaN)+""!=i&&e(o,a,function toString(){var t=c.call(this);return t==t?u.call(this):i})},function(t,r,n){n(2)({target:"Function",proto:!0},{bind:n(149)})},function(t,r,n){var i=n(59),a=n(14),u=[].slice,c={};t.exports=Function.bind||function bind(r){var n=i(this),e=u.call(arguments,1),o=function bound(){var t=e.concat(u.call(arguments));return this instanceof o?function(t,r,n){if(!(r in c)){for(var e=[],o=0;o<r;o++)e[o]="a["+o+"]";c[r]=Function("C,a","return new C("+e.join(",")+")")}return c[r](t,n)}(n,t.length,t):n.apply(r,t)};return a(n.prototype)&&(o.prototype=n.prototype),o}},function(t,r,n){var e=n(14),o=n(19),i=n(108),a=n(53)("hasInstance"),u=Function.prototype;a in u||o.f(u,a,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,r,n){var e=n(5),o=n(19).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;!e||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},function(t,r,n){n(2)({global:!0},{globalThis:n(3)})},function(t,r,n){var e=n(3);n(56)(e.JSON,"JSON",!0)},function(t,r,n){var e=n(155),o=n(160);t.exports=e("Map",function(t){return function Map(){return t(this,arguments.length?arguments[0]:Tt)}},o,!0)},function(t,r,n){var v=n(2),y=n(3),d=n(44),m=n(21),b=n(156),x=n(158),w=n(133),S=n(14),A=n(6),I=n(100),E=n(56),O=n(159);t.exports=function(e,t,r,o,i){function nG(t){var n=u[t];m(u,t,"add"==t?function add(t){return n.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(i&&!S(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return i&&!S(t)?Tt:n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(i&&!S(t))&&n.call(this,0===t?0:t)}:function set(t,r){return n.call(this,0===t?0:t,r),this})}var a=y[e],u=a&&a.prototype,c=a,f=o?"set":"add",n={};if(d(e,"function"!=typeof a||!(i||u.forEach&&!A(function(){(new a).entries().next()}))))c=r.getConstructor(t,e,o,f),b.REQUIRED=!0;else if(d(e,!0)){var s=new c,l=s[f](i?{}:-0,1)!=s,h=A(function(){s.has(1)}),p=I(function(t){new a(t)}),g=!i&&A(function(){for(var t=new a,r=5;r--;)t[f](r,r);return!t.has(-0)});p||(((c=t(function(t,r){w(t,c,e);var n=O(new a,t,c);return r!=Tt&&x(r,n[f],n,o),n})).prototype=u).constructor=c),(h||g)&&(nG("delete"),nG("has"),o&&nG("get")),(g||l)&&nG(f),i&&u.clear&&delete u.clear}return v({global:!0,forced:(n[e]=c)!=a},n),E(c,e),i||r.setStrong(c,e,o),c}},function(t,r,n){function TG(t){a(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})}var e=n(31),o=n(14),i=n(15),a=n(19).f,u=n(30),c=n(157),f=u("meta"),s=0,l=Object.isExtensible||function(){return!0},h=t.exports={REQUIRED:!1,fastKey:function(t,r){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,f)){if(!l(t))return"F";if(!r)return"E";TG(t)}return t[f].objectID},getWeakData:function(t,r){if(!i(t,f)){if(!l(t))return!0;if(!r)return!1;TG(t)}return t[f].weakData},onFreeze:function(t){return c&&h.REQUIRED&&l(t)&&!i(t,f)&&TG(t),t}};e[f]=!0},function(t,r,n){var e=n(6);t.exports=!e(function(){return Object.isExtensible(Object.preventExtensions({}))})},function(t,r,n){function pH(t,r){this.stopped=t,this.result=r}var p=n(20),g=n(96),v=n(39),y=n(58),d=n(98),m=n(95);(t.exports=function(t,r,n,e,o){var i,a,u,c,f,s,l,h=y(r,n,e?2:1);if(o)i=t;else{if("function"!=typeof(a=d(t)))throw TypeError("Target is not iterable");if(g(a)){for(u=0,c=v(t.length);u<c;u++)if((f=e?h(p(l=t[u])[0],l[1]):h(t[u]))&&f instanceof pH)return f;return new pH(!1)}i=a.call(t)}for(s=i.next;!(l=s.call(i)).done;)if("object"==typeof(f=m(i,h,l.value,e))&&f&&f instanceof pH)return f;return new pH(!1)}).stop=function(t){return new pH(!0,t)}},function(t,r,n){var i=n(14),a=n(110);t.exports=function(t,r,n){var e,o;return a&&"function"==typeof(e=r.constructor)&&e!==n&&i(o=e.prototype)&&o!==n.prototype&&a(t,o),t}},function(t,r,n){var a=n(19).f,f=n(48),s=n(132),l=n(58),h=n(133),p=n(158),u=n(105),c=n(125),g=n(5),v=n(156).fastKey,e=n(27),y=e.set,d=e.getterFor;t.exports={getConstructor:function(t,n,e,o){function lI(t,r,n){var e,o,i=u(t),a=c(t,r);return a?a.value=n:(i.last=a={index:o=v(r,!0),key:r,value:n,previous:e=i.last,next:Tt,removed:!1},i.first||(i.first=a),e&&(e.next=a),g?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t}var i=t(function(t,r){h(t,i,n),y(t,{type:n,index:f(null),first:Tt,last:Tt,size:0}),g||(t.size=0),r!=Tt&&p(r,t[o],t,e)}),u=d(n),c=function(t,r){var n,e=u(t),o=v(r);if("F"!==o)return e.index[o];for(n=e.first;n;n=n.next)if(n.key==r)return n};return s(i.prototype,{clear:function clear(){for(var t=u(this),r=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=Tt),delete r[n.index],n=n.next;t.first=t.last=Tt,g?t.size=0:this.size=0},"delete":function(t){var r=u(this),n=c(this,t);if(n){var e=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=e),e&&(e.previous=o),r.first==n&&(r.first=e),r.last==n&&(r.last=o),g?r.size--:this.size--}return!!n},forEach:function forEach(t){for(var r,n=u(this),e=l(t,1<arguments.length?arguments[1]:Tt,3);r=r?r.next:n.first;)for(e(r.value,r.key,this);r&&r.removed;)r=r.previous},has:function has(t){return!!c(this,t)}}),s(i.prototype,e?{get:function get(t){var r=c(this,t);return r&&r.value},set:function set(t,r){return lI(this,0===t?0:t,r)}}:{add:function add(t){return lI(this,t=0===t?0:t,t)}}),g&&a(i.prototype,"size",{get:function(){return u(this).size}}),i},setStrong:function(t,r,n){var e=r+" Iterator",o=d(r),i=d(e);u(t,r,function(t,r){y(this,{type:e,target:t,state:o(t),kind:r,last:Tt})},function(){for(var t=i(this),r=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==r?{value:n.key,done:!1}:"values"==r?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:{value:t.target=Tt,done:!0}},n?"entries":"values",!n,!0),c(r)}}},function(t,r,n){var e=n(2),o=n(162),i=Math.acosh,a=Math.log,u=Math.sqrt,c=Math.LN2;e({target:"Math",stat:!0,forced:!i||710!=Math.floor(i(Number.MAX_VALUE))||i(Infinity)!=Infinity},{acosh:function acosh(t){return(t=+t)<1?NaN:94906265.62425156<t?a(t)+c:o(t-1+u(t-1)*u(t+1))}})},function(t,r){var n=Math.log;t.exports=Math.log1p||function log1p(t){return-1e-8<(t=+t)&&t<1e-8?t-t*t/2:n(1+t)}},function(t,r,n){var e=n(2),o=Math.asinh,i=Math.log,a=Math.sqrt;e({target:"Math",stat:!0,forced:!(o&&0<1/o(0))},{asinh:function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):i(t+a(t*t+1)):t}})},function(t,r,n){var e=n(2),o=Math.atanh,i=Math.log;e({target:"Math",stat:!0,forced:!(o&&1/o(-0)<0)},{atanh:function atanh(t){return 0==(t=+t)?t:i((1+t)/(1-t))/2}})},function(t,r,n){var e=n(2),o=n(166),i=Math.abs,a=Math.pow;e({target:"Math",stat:!0},{cbrt:function cbrt(t){return o(t=+t)*a(i(t),1/3)}})},function(t,r){t.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,r,n){var e=n(2),o=Math.floor,i=Math.log,a=Math.LOG2E;e({target:"Math",stat:!0},{clz32:function clz32(t){return(t>>>=0)?31-o(i(t+.5)*a):32}})},function(t,r,n){var e=n(2),o=n(169),i=Math.cosh,a=Math.abs,u=Math.E;e({target:"Math",stat:!0,forced:!i||i(710)===Infinity},{cosh:function cosh(t){var r=o(a(t)-1)+1;return(r+1/(r*u*u))*(u/2)}})},function(t,r){var n=Math.expm1,e=Math.exp;t.exports=!n||22025.465794806718<n(10)||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function expm1(t){return 0==(t=+t)?t:-1e-6<t&&t<1e-6?t+t*t/2:e(t)-1}:n},function(t,r,n){var e=n(2),o=n(169);e({target:"Math",stat:!0,forced:o!=Math.expm1},{expm1:o})},function(t,r,n){n(2)({target:"Math",stat:!0},{fround:n(172)})},function(t,r,n){var i=n(166),a=Math.abs,e=Math.pow,u=e(2,-52),c=e(2,-23),f=e(2,127)*(2-c),s=e(2,-126);t.exports=Math.fround||function fround(t){var r,n,e=a(t),o=i(t);return e<s?o*function(t){return t+1/u-1/u}(e/s/c)*s*c:f<(n=(r=(1+c/u)*e)-(r-e))||n!=n?o*Infinity:o*n}},function(t,r,n){var e=n(2),o=Math.hypot,c=Math.abs,f=Math.sqrt;e({target:"Math",stat:!0,forced:!!o&&o(Infinity,NaN)!==Infinity},{hypot:function hypot(t,r){for(var n,e,o=0,i=0,a=arguments.length,u=0;i<a;)u<(n=c(arguments[i++]))?(o=o*(e=u/n)*e+1,u=n):o+=0<n?(e=n/u)*e:n;return u===Infinity?Infinity:u*f(o)}})},function(t,r,n){var e=n(2),o=n(6),i=Math.imul;e({target:"Math",stat:!0,forced:o(function(){return-5!=i(4294967295,5)||2!=i.length})},{imul:function imul(t,r){var n=65535,e=+t,o=+r,i=n&e,a=n&o;return 0|i*a+((n&e>>>16)*a+i*(n&o>>>16)<<16>>>0)}})},function(t,r,n){var e=n(2),o=Math.log,i=Math.LOG10E;e({target:"Math",stat:!0},{log10:function log10(t){return o(t)*i}})},function(t,r,n){n(2)({target:"Math",stat:!0},{log1p:n(162)})},function(t,r,n){var e=n(2),o=Math.log,i=Math.LN2;e({target:"Math",stat:!0},{log2:function log2(t){return o(t)/i}})},function(t,r,n){n(2)({target:"Math",stat:!0},{sign:n(166)})},function(t,r,n){var e=n(2),o=n(6),i=n(169),a=Math.abs,u=Math.exp,c=Math.E;e({target:"Math",stat:!0,forced:o(function(){return-2e-17!=Math.sinh(-2e-17)})},{sinh:function sinh(t){return a(t=+t)<1?(i(t)-i(-t))/2:(u(t-1)-u(-t-1))*(c/2)}})},function(t,r,n){var e=n(2),o=n(169),i=Math.exp;e({target:"Math",stat:!0},{tanh:function tanh(t){var r=o(t=+t),n=o(-t);return r==Infinity?1:n==Infinity?-1:(r-n)/(i(t)+i(-t))}})},function(t,r,n){n(56)(Math,"Math",!0)},function(t,r,n){var e=n(2),o=Math.ceil,i=Math.floor;e({target:"Math",stat:!0},{trunc:function trunc(t){return(0<t?i:o)(t)}})},function(t,r,n){function NM(t){var r,n,e,o,i,a,u,c,f=s(t,!1);if("string"==typeof f&&2<f.length)if(43===(r=(f=y(f)).charCodeAt(0))||45===r){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(f.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+f}for(a=(i=f.slice(2)).length,u=0;u<a;u++)if((c=i.charCodeAt(u))<48||o<c)return NaN;return parseInt(i,e)}return+f}var e=n(5),o=n(3),i=n(44),a=n(21),u=n(15),c=n(11),f=n(159),s=n(13),l=n(6),h=n(48),p=n(36).f,g=n(4).f,v=n(19).f,y=n(184).trim,d="Number",m=o[d],b=m.prototype,x=c(h(b))==d;if(i(d,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,S=function Number(t){var r=arguments.length<1?0:t,n=this;return n instanceof S&&(x?l(function(){b.valueOf.call(n)}):c(n)!=d)?f(new m(NM(r)),n,S):NM(r)},A=e?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;I<A.length;I++)u(m,w=A[I])&&!u(S,w)&&v(S,w,g(m,w));a(o,d,(S.prototype=b).constructor=S)}},function(t,r,n){function lN(n){return function(t){var r=String(e(t));return 1&n&&(r=r.replace(i,"")),2&n&&(r=r.replace(a,"")),r}}var e=n(12),o="["+n(185)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$");t.exports={start:lN(1),end:lN(2),trim:lN(3)}},function(t,r){t.exports="\t\n\x0B\f\r                　\u2028\u2029\ufeff"},function(t,r,n){n(2)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(t,r,n){n(2)({target:"Number",stat:!0},{isFinite:n(188)})},function(t,r,n){var e=n(3).isFinite;t.exports=Number.isFinite||function isFinite(t){return"number"==typeof t&&e(t)}},function(t,r,n){n(2)({target:"Number",stat:!0},{isInteger:n(190)})},function(t,r,n){var e=n(14),o=Math.floor;t.exports=function isInteger(t){return!e(t)&&isFinite(t)&&o(t)===t}},function(t,r,n){n(2)({target:"Number",stat:!0},{isNaN:function isNaN(t){return t!=t}})},function(t,r,n){var e=n(2),o=n(190),i=Math.abs;e({target:"Number",stat:!0},{isSafeInteger:function isSafeInteger(t){return o(t)&&i(t)<=9007199254740991}})},function(t,r,n){n(2)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,r,n){n(2)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(t,r,n){var e=n(2),o=n(196);e({target:"Number",stat:!0,forced:Number.parseFloat!=o},{parseFloat:o})},function(t,r,n){var e=n(3),o=n(184).trim,i=n(185),a=e.parseFloat,u=1/a(i+"-0")!=-Infinity;t.exports=u?function parseFloat(t){var r=o(String(t)),n=a(r);return 0===n&&"-"==r.charAt(0)?-0:n}:a},function(t,r,n){var e=n(2),o=n(198);e({target:"Number",stat:!0,forced:Number.parseInt!=o},{parseInt:o})},function(t,r,n){var e=n(3),o=n(184).trim,i=n(185),a=e.parseInt,u=/^[+-]?0[Xx]/,c=8!==a(i+"08")||22!==a(i+"0x16");t.exports=c?function parseInt(t,r){var n=o(String(t));return a(n,r>>>0||(u.test(n)?16:10))}:a},function(t,r,n){var e=n(2),s=n(40),l=n(200),h=n(143),o=n(6),i=1..toFixed,p=Math.floor,g=function(t,r,n){return 0===r?n:r%2==1?g(t,r-1,n*t):g(t*t,r/2,n)};e({target:"Number",proto:!0,forced:i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o(function(){i.call({})})},{toFixed:function toFixed(t){function rP(t,r){for(var n=-1,e=r;++n<6;)u[n]=(e+=t*u[n])%1e7,e=p(e/1e7)}function sP(t){for(var r=6,n=0;0<=--r;)u[r]=p((n+=u[r])/t),n=n%t*1e7}function tP(){for(var t=6,r="";0<=--t;)if(""!==r||0===t||0!==u[t]){var n=String(u[t]);r=""===r?n:r+h.call("0",7-n.length)+n}return r}var r,n,e,o,i=l(this),a=s(t),u=[0,0,0,0,0,0],c="",f="0";if(a<0||20<a)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||1e21<=i)return String(i);if(i<0&&(c="-",i=-i),1e-21<i)if(n=(r=function(t){for(var r=0,n=t;4096<=n;)r+=12,n/=4096;for(;2<=n;)r+=1,n/=2;return r}(i*g(2,69,1))-69)<0?i*g(2,-r,1):i/g(2,r,1),n*=4503599627370496,0<(r=52-r)){for(rP(0,n),e=a;7<=e;)rP(1e7,0),e-=7;for(rP(g(10,e,1),0),e=r-1;23<=e;)sP(1<<23),e-=23;sP(1<<e),rP(1,1),sP(2),f=tP()}else rP(0,n),rP(1<<-r,0),f=tP()+h.call("0",a);return f=0<a?c+((o=f.length)<=a?"0."+h.call("0",a-o)+f:f.slice(0,o-a)+"."+f.slice(o-a)):c+f}})},function(t,r,n){var e=n(11);t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},function(t,r,n){var e=n(2),o=n(6),i=n(200),a=1..toPrecision;e({target:"Number",proto:!0,forced:o(function(){return"1"!==a.call(1,Tt)})||!o(function(){a.call({})})},{toPrecision:function toPrecision(t){return t===Tt?a.call(i(this)):a.call(i(this),t)}})},function(t,r,n){var e=n(2),o=n(203);e({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,r,n){var h=n(5),e=n(6),p=n(50),g=n(43),v=n(7),y=n(47),d=n(10),o=Object.assign;t.exports=!o||e(function(){var t={},r={},n=Symbol(),e="abcdefghijklmnopqrst";return t[n]=7,e.split("").forEach(function(t){r[t]=t}),7!=o({},t)[n]||p(o({},r)).join("")!=e})?function assign(t,r){for(var n=y(t),e=arguments.length,o=1,i=g.f,a=v.f;o<e;)for(var u,c=d(arguments[o++]),f=i?p(c).concat(i(c)):p(c),s=f.length,l=0;l<s;)u=f[l++],h&&!a.call(c,u)||(n[u]=c[u]);return n}:o},function(t,r,n){n(2)({target:"Object",stat:!0,sham:!n(5)},{create:n(48)})},function(t,r,n){var e=n(2),o=n(5),i=n(206),a=n(47),u=n(59),c=n(19);o&&e({target:"Object",proto:!0,forced:i},{__defineGetter__:function __defineGetter__(t,r){c.f(a(this),t,{get:u(r),enumerable:!0,configurable:!0})}})},function(t,r,n){var e=n(23),o=n(3),i=n(6);t.exports=e||!i(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete o[t]})},function(t,r,n){var e=n(2),o=n(5);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:n(49)})},function(t,r,n){var e=n(2),o=n(5);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(19).f})},function(t,r,n){var e=n(2),o=n(5),i=n(206),a=n(47),u=n(59),c=n(19);o&&e({target:"Object",proto:!0,forced:i},{__defineSetter__:function __defineSetter__(t,r){c.f(a(this),t,{set:u(r),enumerable:!0,configurable:!0})}})},function(t,r,n){var e=n(2),o=n(211).entries;e({target:"Object",stat:!0},{entries:function entries(t){return o(t)}})},function(t,r,n){function DR(u){return function(t){for(var r,n=s(t),e=f(n),o=e.length,i=0,a=[];i<o;)r=e[i++],c&&!l.call(n,r)||a.push(u?[r,n[r]]:n[r]);return a}}var c=n(5),f=n(50),s=n(9),l=n(7).f;t.exports={entries:DR(!0),values:DR(!1)}},function(t,r,n){var e=n(2),o=n(157),i=n(6),a=n(14),u=n(156).onFreeze,c=Object.freeze;e({target:"Object",stat:!0,forced:i(function(){c(1)}),sham:!o},{freeze:function freeze(t){return c&&a(t)?c(u(t)):t}})},function(t,r,n){var e=n(2),o=n(158),i=n(76);e({target:"Object",stat:!0},{fromEntries:function fromEntries(t){var n={};return o(t,function(t,r){i(n,t,r)},Tt,!0),n}})},function(t,r,n){var e=n(2),o=n(6),i=n(9),a=n(4).f,u=n(5),c=o(function(){a(1)});e({target:"Object",stat:!0,forced:!u||c,sham:!u},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,r){return a(i(t),r)}})},function(t,r,n){var e=n(2),o=n(5),c=n(33),f=n(9),s=n(4),l=n(76);e({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var r,n,e=f(t),o=s.f,i=c(e),a={},u=0;u<i.length;)(n=o(e,r=i[u++]))!==Tt&&l(a,r,n);return a}})},function(t,r,n){var e=n(2),o=n(6),i=n(52).f;e({target:"Object",stat:!0,forced:o(function(){return!Object.getOwnPropertyNames(1)})},{getOwnPropertyNames:i})},function(t,r,n){var e=n(2),o=n(6),i=n(47),a=n(108),u=n(109);e({target:"Object",stat:!0,forced:o(function(){a(1)}),sham:!u},{getPrototypeOf:function getPrototypeOf(t){return a(i(t))}})},function(t,r,n){n(2)({target:"Object",stat:!0},{is:n(219)})},function(t,r){t.exports=Object.is||function is(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r}},function(t,r,n){var e=n(2),o=n(6),i=n(14),a=Object.isExtensible;e({target:"Object",stat:!0,forced:o(function(){a(1)})},{isExtensible:function isExtensible(t){return!!i(t)&&(!a||a(t))}})},function(t,r,n){var e=n(2),o=n(6),i=n(14),a=Object.isFrozen;e({target:"Object",stat:!0,forced:o(function(){a(1)})},{isFrozen:function isFrozen(t){return!i(t)||!!a&&a(t)}})},function(t,r,n){var e=n(2),o=n(6),i=n(14),a=Object.isSealed;e({target:"Object",stat:!0,forced:o(function(){a(1)})},{isSealed:function isSealed(t){return!i(t)||!!a&&a(t)}})},function(t,r,n){var e=n(2),o=n(47),i=n(50);e({target:"Object",stat:!0,forced:n(6)(function(){i(1)})},{keys:function keys(t){return i(o(t))}})},function(t,r,n){var e=n(2),o=n(5),i=n(206),a=n(47),u=n(13),c=n(108),f=n(4).f;o&&e({target:"Object",proto:!0,forced:i},{__lookupGetter__:function __lookupGetter__(t){var r,n=a(this),e=u(t,!0);do{if(r=f(n,e))return r.get}while(n=c(n))}})},function(t,r,n){var e=n(2),o=n(5),i=n(206),a=n(47),u=n(13),c=n(108),f=n(4).f;o&&e({target:"Object",proto:!0,forced:i},{__lookupSetter__:function __lookupSetter__(t){var r,n=a(this),e=u(t,!0);do{if(r=f(n,e))return r.set}while(n=c(n))}})},function(t,r,n){var e=n(2),o=n(14),i=n(156).onFreeze,a=n(157),u=n(6),c=Object.preventExtensions;e({target:"Object",stat:!0,forced:u(function(){c(1)}),sham:!a},{preventExtensions:function preventExtensions(t){return c&&o(t)?c(i(t)):t}})},function(t,r,n){var e=n(2),o=n(14),i=n(156).onFreeze,a=n(157),u=n(6),c=Object.seal;e({target:"Object",stat:!0,forced:u(function(){c(1)}),sham:!a},{seal:function seal(t){return c&&o(t)?c(i(t)):t}})},function(t,r,n){n(2)({target:"Object",stat:!0},{setPrototypeOf:n(110)})},function(t,r,n){var e=n(21),o=n(230),i=Object.prototype;o!==i.toString&&e(i,"toString",o,{unsafe:!0})},function(t,r,n){var e=n(99),o={};o[n(53)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function toString(){return"[object "+e(this)+"]"}:o.toString},function(t,r,n){var e=n(2),o=n(211).values;e({target:"Object",stat:!0},{values:function values(t){return o(t)}})},function(t,r,n){var e=n(2),o=n(196);e({global:!0,forced:parseFloat!=o},{parseFloat:o})},function(t,r,n){var e=n(2),o=n(198);e({global:!0,forced:parseInt!=o},{parseInt:o})},function(t,r,n){function wW(t){var r;return!(!y(t)||"function"!=typeof(r=t.then))&&r}function xW(h,p,g){if(!p.notified){p.notified=!0;var v=p.reactions;I(function(){for(var t=p.value,r=1==p.state,n=0;n<v.length;){var e,o,i,a=v[n++],u=r?a.ok:a.fail,c=a.resolve,f=a.reject,s=a.domain;try{u?(r||(2===p.rejection&&Q(h,p),p.rejection=1),!0===u?e=t:(s&&s.enter(),e=u(t),s&&(s.exit(),i=!0)),e===a.promise?f(W("Promise-chain cycle")):(o=wW(e))?o.call(e,c,f):c(e)):f(t)}catch(l){s&&!i&&s.exit(),f(l)}}p.reactions=[],p.notified=!1,g&&!p.rejection&&J(h,p)})}}function yW(t,r,n){var e,o;z?((e=D.createEvent("Event")).promise=r,e.reason=n,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:r,reason:n},(o=f["on"+t])?o(e):t===H&&O("Unhandled promise rejection",n)}function CW(r,n,e,o){return function(t){r(n,e,t,o)}}function DW(t,r,n,e){r.done||(r.done=!0,e&&(r=e),r.value=n,r.state=2,xW(t,r,!0))}var e,o,i,a,u=n(2),c=n(23),f=n(3),s=n(35),l=n(235),h=n(21),p=n(132),g=n(56),v=n(125),y=n(14),d=n(59),m=n(133),b=n(11),x=n(158),w=n(100),S=n(137),A=n(236).set,I=n(238),E=n(239),O=n(241),M=n(240),R=n(242),_=n(237),P=n(27),j=n(44),T=n(53)("species"),k="Promise",U=P.get,N=P.set,F=P.getterFor(k),L=l,W=f.TypeError,D=f.document,C=f.process,B=f.fetch,q=C&&C.versions,V=q&&q.v8||"",G=M.f,Z=G,Y="process"==b(C),z=!!(D&&D.createEvent&&f.dispatchEvent),H="unhandledrejection",K=j(k,function(){function GW(){}var t=L.resolve(1),r=(t.constructor={})[T]=function(t){t(GW,GW)};return!((Y||"function"==typeof PromiseRejectionEvent)&&(!c||t["finally"])&&t.then(GW)instanceof r&&0!==V.indexOf("6.6")&&-1===_.indexOf("Chrome/66"))}),$=K||!w(function(t){L.all(t)["catch"](function(){})}),J=function(n,e){A.call(f,function(){var t,r=e.value;if(X(e)&&(t=R(function(){Y?C.emit("unhandledRejection",r,n):yW(H,n,r)}),e.rejection=Y||X(e)?2:1,t.error))throw t.value})},X=function(t){return 1!==t.rejection&&!t.parent},Q=function(t,r){A.call(f,function(){Y?C.emit("rejectionHandled",t):yW("rejectionhandled",t,r.value)})},tt=function(n,e,o,t){if(!e.done){e.done=!0,t&&(e=t);try{if(n===o)throw W("Promise can't be resolved itself");var i=wW(o);i?I(function(){var t={done:!1};try{i.call(o,CW(tt,n,t,e),CW(DW,n,t,e))}catch(r){DW(n,t,r,e)}}):(e.value=o,e.state=1,xW(n,e,!1))}catch(r){DW(n,{done:!1},r,e)}}};K&&(L=function Promise(t){m(this,L,k),d(t),e.call(this);var r=U(this);try{t(CW(tt,this,r),CW(DW,this,r))}catch(n){DW(this,r,n)}},(e=function Promise(t){N(this,{type:k,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:Tt})}).prototype=p(L.prototype,{then:function then(t,r){var n=F(this),e=G(S(this,L));return e.ok="function"!=typeof t||t,e.fail="function"==typeof r&&r,e.domain=Y?C.domain:Tt,n.parent=!0,n.reactions.push(e),0!=n.state&&xW(this,n,!1),e.promise},"catch":function(t){return this.then(Tt,t)}}),o=function(){var t=new e,r=U(t);this.promise=t,this.resolve=CW(tt,t,r),this.reject=CW(DW,t,r)},M.f=G=function(t){return t===L||t===i?new o(t):Z(t)},c||"function"!=typeof l||(a=l.prototype.then,h(l.prototype,"then",function then(t,r){var n=this;return new L(function(t,r){a.call(n,t,r)}).then(t,r)},{unsafe:!0}),"function"==typeof B&&u({global:!0,enumerable:!0,forced:!0},{fetch:function fetch(t){return E(L,B.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:K},{Promise:L}),g(L,k,!1,!0),v(k),i=s[k],u({target:k,stat:!0,forced:K},{reject:function reject(t){var r=G(this);return r.reject.call(Tt,t),r.promise}}),u({target:k,stat:!0,forced:c||K},{resolve:function resolve(t){return E(c&&this===i?L:this,t)}}),u({target:k,stat:!0,forced:$},{all:function all(t){var u=this,r=G(u),c=r.resolve,f=r.reject,n=R(function(){var e=d(u.resolve),o=[],i=0,a=1;x(t,function(t){var r=i++,n=!1;o.push(Tt),a++,e.call(u,t).then(function(t){n||(n=!0,o[r]=t,--a||c(o))},f)}),--a||c(o)});return n.error&&f(n.value),r.promise},race:function race(t){var n=this,e=G(n),o=e.reject,r=R(function(){var r=d(n.resolve);x(t,function(t){r.call(n,t).then(e.resolve,o)})});return r.error&&o(r.value),e.promise}})},function(t,r,n){var e=n(3);t.exports=e.Promise},function(t,r,n){function WY(t){if(x.hasOwnProperty(t)){var r=x[t];delete x[t],r()}}function XY(t){return function(){WY(t)}}function YY(t){WY(t.data)}function ZY(t){a.postMessage(t+"",p.protocol+"//"+p.host)}var e,o,i,a=n(3),u=n(6),c=n(11),f=n(58),s=n(51),l=n(17),h=n(237),p=a.location,g=a.setImmediate,v=a.clearImmediate,y=a.process,d=a.MessageChannel,m=a.Dispatch,b=0,x={},w="onreadystatechange";g&&v||(g=function setImmediate(t){for(var r=[],n=1;n<arguments.length;)r.push(arguments[n++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(Tt,r)},e(b),b},v=function clearImmediate(t){delete x[t]},"process"==c(y)?e=function(t){y.nextTick(XY(t))}:m&&m.now?e=function(t){m.now(XY(t))}:d&&!/(iphone|ipod|ipad).*applewebkit/i.test(h)?(i=(o=new d).port2,o.port1.onmessage=YY,e=f(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(ZY)?e=w in l("script")?function(t){s.appendChild(l("script"))[w]=function(){s.removeChild(this),WY(t)}}:function(t){setTimeout(XY(t),0)}:(e=ZY,a.addEventListener("message",YY,!1))),t.exports={set:g,clear:v}},function(t,r,n){var e=n(34);t.exports=e("navigator","userAgent")||""},function(t,r,n){var e,o,i,a,u,c,f,s,l=n(3),h=n(4).f,p=n(11),g=n(236).set,v=n(237),y=l.MutationObserver||l.WebKitMutationObserver,d=l.process,
m=l.Promise,b="process"==p(d),x=h(l,"queueMicrotask"),w=x&&x.value;w||(e=function(){var t,r;for(b&&(t=d.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(n){throw o?a():i=Tt,n}}i=Tt,t&&t.enter()},a=b?function(){d.nextTick(e)}:y&&!/(iphone|ipod|ipad).*applewebkit/i.test(v)?(u=!0,c=document.createTextNode(""),new y(e).observe(c,{characterData:!0}),function(){c.data=u=!u}):m&&m.resolve?(f=m.resolve(Tt),s=f.then,function(){s.call(f,e)}):function(){g.call(l,e)}),t.exports=w||function(t){var r={fn:t,next:Tt};i&&(i.next=r),o||(o=r,a()),i=r}},function(t,r,n){var e=n(20),o=n(14),i=n(240);t.exports=function(t,r){if(e(t),o(r)&&r.constructor===t)return r;var n=i.f(t);return(0,n.resolve)(r),n.promise}},function(t,r,n){function d$(t){var n,e;this.promise=new t(function(t,r){if(n!==Tt||e!==Tt)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=n(59);t.exports.f=function(t){return new d$(t)}},function(t,r,n){var e=n(3);t.exports=function(t,r){var n=e.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,r))}},function(t,r){t.exports=function(t){try{return{error:!1,value:t()}}catch(r){return{error:!0,value:r}}}},function(t,r,n){var e=n(2),f=n(59),o=n(240),i=n(242),s=n(158);e({target:"Promise",stat:!0},{allSettled:function allSettled(t){var u=this,r=o.f(u),c=r.resolve,n=r.reject,e=i(function(){var e=f(u.resolve),o=[],i=0,a=1;s(t,function(t){var r=i++,n=!1;o.push(Tt),a++,e.call(u,t).then(function(t){n||(n=!0,o[r]={status:"fulfilled",value:t},--a||c(o))},function(t){n||(n=!0,o[r]={status:"rejected",reason:t},--a||c(o))})}),--a||c(o)});return e.error&&n(e.value),r.promise}})},function(t,r,n){var e=n(2),o=n(23),i=n(235),a=n(34),u=n(137),c=n(239),f=n(21);e({target:"Promise",proto:!0,real:!0},{"finally":function(r){var n=u(this,a("Promise")),t="function"==typeof r;return this.then(t?function(t){return c(n,r()).then(function(){return t})}:r,t?function(t){return c(n,r()).then(function(){throw t})}:r)}}),o||"function"!=typeof i||i.prototype["finally"]||f(i.prototype,"finally",a("Promise").prototype["finally"])},function(t,r,n){var e=n(2),o=n(34),i=n(59),a=n(20),u=n(6),c=o("Reflect","apply"),f=Function.apply;e({target:"Reflect",stat:!0,forced:!u(function(){c(function(){})})},{apply:function apply(t,r,n){return i(t),a(n),c?c(t,r,n):f.call(t,r,n)}})},function(t,r,n){var e=n(2),o=n(34),u=n(59),c=n(20),f=n(14),s=n(48),l=n(149),i=n(6),h=o("Reflect","construct"),p=i(function(){function F(){}return!(h(function(){},[],F)instanceof F)}),g=!i(function(){h(function(){})}),a=p||g;e({target:"Reflect",stat:!0,forced:a,sham:a},{construct:function construct(t,r){u(t),c(r);var n=arguments.length<3?t:u(arguments[2]);if(g&&!p)return h(t,r,n);if(t==n){switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}var e=[null];return e.push.apply(e,r),new(l.apply(t,e))}var o=n.prototype,i=s(f(o)?o:Object.prototype),a=Function.apply.call(t,i,r);return f(a)?a:i}})},function(t,r,n){var e=n(2),o=n(5),i=n(20),a=n(13),u=n(19);e({target:"Reflect",stat:!0,forced:n(6)(function(){Reflect.defineProperty(u.f({},1,{value:1}),1,{value:2})}),sham:!o},{defineProperty:function defineProperty(t,r,n){i(t);var e=a(r,!0);i(n);try{return u.f(t,e,n),!0}catch(o){return!1}}})},function(t,r,n){var e=n(2),o=n(20),i=n(4).f;e({target:"Reflect",stat:!0},{deleteProperty:function deleteProperty(t,r){var n=i(o(t),r);return!(n&&!n.configurable)&&delete t[r]}})},function(t,r,n){var e=n(2),i=n(14),a=n(20),u=n(15),c=n(4),f=n(108);e({target:"Reflect",stat:!0},{get:function get(t,r){var n,e,o=arguments.length<3?t:arguments[2];return a(t)===o?t[r]:(n=c.f(t,r))?u(n,"value")?n.value:n.get===Tt?Tt:n.get.call(o):i(e=f(t))?get(e,r,o):void 0}})},function(t,r,n){var e=n(2),o=n(5),i=n(20),a=n(4);e({target:"Reflect",stat:!0,sham:!o},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,r){return a.f(i(t),r)}})},function(t,r,n){var e=n(2),o=n(20),i=n(108);e({target:"Reflect",stat:!0,sham:!n(109)},{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},function(t,r,n){n(2)({target:"Reflect",stat:!0},{has:function has(t,r){return r in t}})},function(t,r,n){var e=n(2),o=n(20),i=Object.isExtensible;e({target:"Reflect",stat:!0},{isExtensible:function isExtensible(t){return o(t),!i||i(t)}})},function(t,r,n){n(2)({target:"Reflect",stat:!0},{ownKeys:n(33)})},function(t,r,n){var e=n(2),o=n(34),i=n(20);e({target:"Reflect",stat:!0,sham:!n(157)},{preventExtensions:function preventExtensions(t){i(t);try{var r=o("Object","preventExtensions");return r&&r(t),!0}catch(n){return!1}}})},function(t,r,n){var e=n(2),u=n(20),c=n(14),f=n(15),s=n(19),l=n(4),h=n(108),p=n(8);e({target:"Reflect",stat:!0},{set:function set(t,r,n){var e,o,i=arguments.length<4?t:arguments[3],a=l.f(u(t),r);if(!a){if(c(o=h(t)))return set(o,r,n,i);a=p(0)}if(f(a,"value")){if(!1===a.writable||!c(i))return!1;if(e=l.f(i,r)){if(e.get||e.set||!1===e.writable)return!1;e.value=n,s.f(i,r,e)}else s.f(i,r,p(0,n));return!0}return a.set!==Tt&&(a.set.call(i,n),!0)}})},function(t,r,n){var e=n(2),o=n(20),i=n(111),a=n(110);a&&e({target:"Reflect",stat:!0},{setPrototypeOf:function setPrototypeOf(t,r){o(t),i(r);try{return a(t,r),!0}catch(n){return!1}}})},function(t,r,n){var e=n(5),o=n(3),i=n(44),a=n(159),u=n(19).f,c=n(36).f,f=n(259),s=n(260),l=n(21),h=n(6),p=n(125),g=n(53)("match"),v=o.RegExp,y=v.prototype,d=/a/g,m=/a/g,b=new v(d)!==d;if(e&&i("RegExp",!b||h(function(){return m[g]=!1,v(d)!=d||v(m)==m||"/a/i"!=v(d,"i")}))){for(var x=function RegExp(t,r){var n=this instanceof x,e=f(t),o=r===Tt;return!n&&e&&t.constructor===x&&o?t:a(b?new v(e&&!o?t.source:t,r):v((e=t instanceof x)?t.source:t,e&&o?s.call(t):r),n?this:y,x)},w=function(r){r in x||u(x,r,{configurable:!0,get:function(){return v[r]},set:function(t){v[r]=t}})},S=c(v),A=0;A<S.length;)w(S[A++]);(y.constructor=x).prototype=y,l(o,"RegExp",x)}p("RegExp")},function(t,r,n){var e=n(14),o=n(11),i=n(53)("match");t.exports=function(t){var r;return e(t)&&((r=t[i])!==Tt?!!r:"RegExp"==o(t))}},function(t,r,n){var e=n(20);t.exports=function(){var t=e(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},function(t,r,n){var e=n(2),o=n(262);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,r,n){var e,o,a=n(260),u=RegExp.prototype.exec,c=String.prototype.replace,i=u,f=(o=/b*/g,u.call(e=/a/,"a"),u.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=/()??/.exec("")[1]!==Tt;(f||s)&&(i=function exec(t){var r,n,e,o,i=this;return s&&(n=new RegExp("^"+i.source+"$(?!\\s)",a.call(i))),f&&(r=i.lastIndex),e=u.call(i,t),f&&e&&(i.lastIndex=i.global?e.index+e[0].length:r),s&&e&&1<e.length&&c.call(e[0],n,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===Tt&&(e[o]=Tt)}),e}),t.exports=i},function(t,r,n){var e=n(5),o=n(19),i=n(260);e&&"g"!=/./g.flags&&o.f(RegExp.prototype,"flags",{configurable:!0,get:i})},function(t,r,n){var e=n(21),o=n(20),i=n(6),a=n(260),u="toString",c=RegExp.prototype,f=c[u];!i(function(){return"/a/b"!=f.call({source:"a",flags:"b"})})&&f.name==u||e(RegExp.prototype,u,function toString(){var t=o(this),r=String(t.source),n=t.flags;return"/"+r+"/"+String(n===Tt&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)},{unsafe:!0})},function(t,r,n){var e=n(155),o=n(160);t.exports=e("Set",function(t){return function Set(){return t(this,arguments.length?arguments[0]:Tt)}},o)},function(t,r,n){var e=n(2),o=n(267).codeAt;e({target:"String",proto:!0},{codePointAt:function codePointAt(t){return o(this,t)}})},function(t,r,n){function Y3(u){return function(t,r){var n,e,o=String(f(t)),i=c(r),a=o.length;return i<0||a<=i?u?"":Tt:(n=o.charCodeAt(i))<55296||56319<n||i+1===a||(e=o.charCodeAt(i+1))<56320||57343<e?u?o.charAt(i):n:u?o.slice(i,i+2):e-56320+(n-55296<<10)+65536}}var c=n(40),f=n(12);t.exports={codeAt:Y3(!1),charAt:Y3(!0)}},function(t,r,n){var e=n(2),a=n(39),u=n(269),c=n(12),o=n(270),f="".endsWith,s=Math.min;e({target:"String",proto:!0,forced:!o("endsWith")},{endsWith:function endsWith(t){var r=String(c(this));u(t);var n=1<arguments.length?arguments[1]:Tt,e=a(r.length),o=n===Tt?e:s(a(n),e),i=String(t);return f?f.call(r,i,o):r.slice(o-i.length,o)===i}})},function(t,r,n){var e=n(259);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,r,n){var o=n(53)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[o]=!1,"/./"[t](r)}catch(e){}}return!1}},function(t,r,n){var e=n(2),i=n(41),a=String.fromCharCode,o=String.fromCodePoint;e({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function fromCodePoint(t){for(var r,n=[],e=arguments.length,o=0;o<e;){if(r=+arguments[o++],i(r,1114111)!==r)throw RangeError(r+" is not a valid code point");n.push(r<65536?a(r):a(55296+((r-=65536)>>10),r%1024+56320))}return n.join("")}})},function(t,r,n){var e=n(2),o=n(269),i=n(12);e({target:"String",proto:!0,forced:!n(270)("includes")},{includes:function includes(t){return!!~String(i(this)).indexOf(o(t),1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var o=n(267).charAt,e=n(27),i=n(105),a="String Iterator",u=e.set,c=e.getterFor(a);i(String,"String",function(t){u(this,{type:a,string:String(t),index:0})},function next(){var t,r=c(this),n=r.string,e=r.index;return n.length<=e?{value:Tt,done:!0}:(t=o(n,e),r.index+=t.length,{value:t,done:!1})})},function(t,r,n){var e=n(275),l=n(20),h=n(39),o=n(12),p=n(276),g=n(277);e("match",1,function(e,f,s){return[function match(t){var r=o(this),n=t==Tt?Tt:t[e];return n!==Tt?n.call(t,r):new RegExp(t)[e](String(r))},function(t){var r=s(f,t,this);if(r.done)return r.value;var n=l(t),e=String(this);if(!n.global)return g(n,e);for(var o,i=n.unicode,a=[],u=n.lastIndex=0;null!==(o=g(n,e));){var c=String(o[0]);""===(a[u]=c)&&(n.lastIndex=p(e,h(n.lastIndex),i)),u++}return 0===u?null:a}]})},function(t,r,n){var s=n(18),l=n(21),h=n(6),p=n(53),g=n(262),v=p("species"),y=!h(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=!h(function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});t.exports=function(n,t,r,e){var o=p(n),i=!h(function(){var t={};return t[o]=function(){return 7},7!=""[n](t)}),a=i&&!h(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===n&&(r.constructor={},r.constructor[v]=function(){return r}),r[o](""),!t});if(!i||!a||"replace"===n&&!y||"split"===n&&!d){var u=/./[o],c=r(o,""[n],function(t,r,n,e,o){return r.exec===g?i&&!o?{done:!0,value:u.call(r,n,e)}:{done:!0,value:t.call(n,r,e)}:{done:!1}}),f=c[1];l(String.prototype,n,c[0]),l(RegExp.prototype,o,2==t?function(t,r){return f.call(t,this,r)}:function(t){return f.call(t,this)}),e&&s(RegExp.prototype[o],"sham",!0)}}},function(t,r,n){var e=n(267).charAt;t.exports=function(t,r,n){return r+(n?e(t,r).length:1)}},function(t,r,n){var o=n(11),i=n(262);t.exports=function(t,r){var n=t.exec;if("function"==typeof n){var e=n.call(t,r);if("object"!=typeof e)throw TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==o(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,r)}},function(t,r,n){function s7(t){var r,n,e,o,i,a,u=s(this),c=String(t);return r=v(u,RegExp),(n=u.flags)===Tt&&u instanceof RegExp&&!("flags"in I)&&(n=l.call(u)),e=n===Tt?"":String(n),o=new r(r===RegExp?u.source:u,e),i=!!~e.indexOf("g"),a=!!~e.indexOf("u"),o.lastIndex=f(u.lastIndex),new R(o,c,i,a)}var e=n(2),o=n(106),i=n(12),f=n(39),a=n(59),s=n(20),u=n(99),c=n(259),l=n(260),h=n(18),p=n(6),g=n(53),v=n(137),y=n(276),d=n(27),m=n(23),b=g("matchAll"),x="RegExp String",w=x+" Iterator",S=d.set,A=d.getterFor(w),I=RegExp.prototype,E=I.exec,O="".matchAll,M=!!O&&!p(function(){"a".matchAll(/./)}),R=o(function RegExpStringIterator(t,r,n,e){S(this,{type:w,regexp:t,string:r,global:n,unicode:e,done:!1})},x,function next(){var t=A(this);if(t.done)return{value:Tt,done:!0};var r=t.regexp,n=t.string,e=function(t,r){var n,e=t.exec;if("function"!=typeof e)return E.call(t,r);if("object"!=typeof(n=e.call(t,r)))throw TypeError("Incorrect exec result");return n}(r,n);return null===e?{value:Tt,done:t.done=!0}:t.global?(""==String(e[0])&&(r.lastIndex=y(n,f(r.lastIndex),t.unicode)),{value:e,done:!1}):{value:e,done:!(t.done=!0)}});e({target:"String",proto:!0,forced:M},{matchAll:function matchAll(t){var r,n,e,o=i(this);if(null!=t){if(c(t)&&!~String(i("flags"in I?t.flags:l.call(t))).indexOf("g"))throw TypeError("`.matchAll` does not allow non-global regexes");if(M)return O.apply(o,arguments);if((n=t[b])===Tt&&m&&"RegExp"==u(t)&&(n=s7),null!=n)return a(n).call(t,o)}else if(M)return O.apply(o,arguments);return r=String(o),e=new RegExp(t,"g"),m?s7.call(e,r):e[b](r)}}),m||b in I||h(I,b,s7)},function(t,r,n){var e=n(2),o=n(142).end;e({target:"String",proto:!0,forced:n(280)},{padEnd:function padEnd(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(237);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(e)},function(t,r,n){var e=n(2),o=n(142).start;e({target:"String",proto:!0,forced:n(280)},{padStart:function padStart(t){return o(this,t,1<arguments.length?arguments[1]:Tt)}})},function(t,r,n){var e=n(2),a=n(9),u=n(39);e({target:"String",stat:!0},{raw:function raw(t){for(var r=a(t.raw),n=u(r.length),e=arguments.length,o=[],i=0;i<n;)o.push(String(r[i++])),i<e&&o.push(String(arguments[i]));return o.join("")}})},function(t,r,n){n(2)({target:"String",proto:!0},{repeat:n(143)})},function(t,r,n){var e=n(275),A=n(20),h=n(47),I=n(39),E=n(40),i=n(12),O=n(276),M=n(277),R=Math.max,_=Math.min,p=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;e("replace",2,function(o,w,S){return[function replace(t,r){var n=i(this),e=t==Tt?Tt:t[o];return e!==Tt?e.call(t,n,r):w.call(String(n),t,r)},function(t,r){var n=S(w,t,this,r);if(n.done)return n.value;var e=A(t),o=String(this),i="function"==typeof r;i||(r=String(r));var a=e.global;if(a){var u=e.unicode;e.lastIndex=0}for(var c=[];;){var f=M(e,o);if(null===f)break;if(c.push(f),!a)break;""===String(f[0])&&(e.lastIndex=O(o,I(e.lastIndex),u))}for(var s,l="",h=0,p=0;p<c.length;p++){f=c[p];for(var g=String(f[0]),v=R(_(E(f.index),o.length),0),y=[],d=1;d<f.length;d++)y.push((s=f[d])===Tt?s:String(s));var m=f.groups;if(i){var b=[g].concat(y,v,o);m!==Tt&&b.push(m);var x=String(r.apply(Tt,b))}else x=getSubstitution(g,o,v,y,m,r);h<=v&&(l+=o.slice(h,v)+x,h=v+g.length)}return l+o.slice(h)}];function getSubstitution(i,a,u,c,f,t){var s=u+i.length,l=c.length,r=v;return f!==Tt&&(f=h(f),r=g),w.call(t,r,function(t,r){var n;switch(r.charAt(0)){case"$":return"$";case"&":return i;case"`":return a.slice(0,u);case"'":return a.slice(s);case"<":n=f[r.slice(1,-1)];break;default:var e=+r;if(0==e)return t;if(l<e){var o=p(e/10);return 0===o?t:o<=l?c[o-1]===Tt?r.charAt(1):c[o-1]+r.charAt(1):t}n=c[e-1]}return n===Tt?"":n})}})},function(t,r,n){var e=n(275),c=n(20),o=n(12),f=n(219),s=n(277);e("search",1,function(e,a,u){return[function search(t){var r=o(this),n=t==Tt?Tt:t[e];return n!==Tt?n.call(t,r):new RegExp(t)[e](String(r))},function(t){var r=u(a,t,this);if(r.done)return r.value;var n=c(t),e=String(this),o=n.lastIndex;f(o,0)||(n.lastIndex=0);var i=s(n,e);return f(n.lastIndex,o)||(n.lastIndex=o),null===i?-1:i.index}]})},function(t,r,n){var e=n(275),s=n(259),m=n(20),l=n(12),b=n(137),x=n(276),w=n(39),S=n(277),h=n(262),o=n(6),p=[].push,A=Math.min,I=4294967295,E=!o(function(){return!RegExp(I,"y")});e("split",2,function(o,v,y){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(t,r){var n=String(l(this)),e=r===Tt?I:r>>>0;if(0==e)return[];if(t===Tt)return[n];if(!s(t))return v.call(n,t,e);for(var o,i,a,u=[],c=0,f=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(o=h.call(f,n))&&!(c<(i=f.lastIndex)&&(u.push(n.slice(c,o.index)),1<o.length&&o.index<n.length&&p.apply(u,o.slice(1)),a=o[0].length,c=i,e<=u.length));)f.lastIndex===o.index&&f.lastIndex++;return c===n.length?!a&&f.test("")||u.push(""):u.push(n.slice(c)),e<u.length?u.slice(0,e):u}:"0".split(Tt,0).length?function(t,r){return t===Tt&&0===r?[]:v.call(this,t,r)}:v,[function split(t,r){var n=l(this),e=t==Tt?Tt:t[o];return e!==Tt?e.call(t,n,r):d.call(String(n),t,r)},function(t,r){var n=y(d,t,this,r,d!==v);if(n.done)return n.value;var e=m(t),o=String(this),i=b(e,RegExp),a=e.unicode,u=new i(E?e:"^(?:"+e.source+")",(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(E?"y":"g")),c=r===Tt?I:r>>>0;if(0==c)return[];if(0===o.length)return null===S(u,o)?[o]:[];for(var f=0,s=0,l=[];s<o.length;){u.lastIndex=E?s:0;var h,p=S(u,E?o:o.slice(s));if(null===p||(h=A(w(u.lastIndex+(E?0:s)),o.length))===f)s=x(o,s,a);else{if(l.push(o.slice(f,s)),l.length===c)return l;for(var g=1;g<=p.length-1;g++)if(l.push(p[g]),l.length===c)return l;s=f=h}}return l.push(o.slice(f)),l}]},!E)},function(t,r,n){var e=n(2),o=n(39),i=n(269),a=n(12),u=n(270),c="".startsWith,f=Math.min;e({target:"String",proto:!0,forced:!u("startsWith")},{startsWith:function startsWith(t){var r=String(a(this));i(t);var n=o(f(1<arguments.length?arguments[1]:Tt,r.length)),e=String(t);return c?c.call(r,e,n):r.slice(n,n+e.length)===e}})},function(t,r,n){var e=n(2),o=n(184).trim;e({target:"String",proto:!0,forced:n(289)("trim")},{trim:function trim(){return o(this)}})},function(t,r,n){var e=n(6),o=n(185);t.exports=function(t){return e(function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t})}},function(t,r,n){var e=n(2),o=n(184).end,i=n(289)("trimEnd"),a=i?function a(){return o(this)}:"".trimEnd;e({target:"String",proto:!0,forced:i},{trimEnd:a,trimRight:a})},function(t,r,n){var e=n(2),o=n(184).start,i=n(289)("trimStart"),a=i?function a(){return o(this)}:"".trimStart;e({target:"String",proto:!0,forced:i},{trimStart:a,trimLeft:a})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("anchor")},{anchor:function anchor(t){return o(this,"a","name",t)}})},function(t,r,n){var a=n(12),u=/"/g;t.exports=function(t,r,n,e){var o=String(a(t)),i="<"+r;return""!==n&&(i+=" "+n+'="'+String(e).replace(u,"&quot;")+'"'),i+">"+o+"</"+r+">"}},function(t,r,n){var e=n(6);t.exports=function(r){return e(function(){var t=""[r]('"');return t!==t.toLowerCase()||3<t.split('"').length})}},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("big")},{big:function big(){return o(this,"big","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("blink")},{blink:function blink(){return o(this,"blink","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("bold")},{bold:function bold(){return o(this,"b","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("fixed")},{fixed:function fixed(){return o(this,"tt","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("fontcolor")},{fontcolor:function fontcolor(t){return o(this,"font","color",t)}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("fontsize")},{fontsize:function fontsize(t){return o(this,"font","size",t)}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("italics")},{italics:function italics(){return o(this,"i","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("link")},{link:function link(t){return o(this,"a","href",t)}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("small")},{small:function small(){return o(this,"small","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("strike")},{strike:function strike(){return o(this,"strike","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("sub")},{sub:function sub(){return o(this,"sub","","")}})},function(t,r,n){var e=n(2),o=n(293);e({target:"String",proto:!0,forced:n(294)("sup")},{sup:function sup(){return o(this,"sup","","")}})},function(t,r,n){n(308)("Float32",4,function(e){return function Float32Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){function Fea(t,r){for(var n=0,e=r.length,o=new(C(t))(e);n<e;)o[n]=r[n++];return o}function Gea(t,r){P(t,r,{get:function(){return R(this)[r]}})}function Hea(t){var r;return t instanceof U||"ArrayBuffer"==(r=l(t))||"SharedArrayBuffer"==r}function Iea(t,r){return B(t)&&"symbol"!=typeof r&&r in t&&String(+r)==String(r)}function Jea(t,r){return Iea(t,r=u(r,!0))?a(2,t[r]):j(t,r)}function Kea(t,r,n){return!(Iea(t,r=u(r,!0))&&b(n)&&s(n,"value"))||s(n,"get")||s(n,"set")||n.configurable||s(n,"writable")&&!n.writable||s(n,"enumerable")&&!n.enumerable?P(t,r,n):(t[r]=n.value,t)}var c=n(2),f=n(3),e=n(5),p=n(309),o=n(131),i=n(130),g=n(133),a=n(8),v=n(18),y=n(39),d=n(134),m=n(310),u=n(13),s=n(15),l=n(99),b=n(14),x=n(48),w=n(110),S=n(36).f,A=n(312),I=n(57).forEach,E=n(125),h=n(19),O=n(4),M=n(27),R=M.get,_=M.set,P=h.f,j=O.f,T=Math.round,k=f.RangeError,U=i.ArrayBuffer,N=i.DataView,F=o.NATIVE_ARRAY_BUFFER_VIEWS,L=o.TYPED_ARRAY_TAG,W=o.TypedArray,D=o.TypedArrayPrototype,C=o.aTypedArrayConstructor,B=o.isTypedArray,q="BYTES_PER_ELEMENT",V="Wrong length";t.exports=e?(F||(O.f=Jea,h.f=Kea,Gea(D,"buffer"),Gea(D,"byteOffset"),Gea(D,"byteLength"),Gea(D,"length")),c({target:"Object",stat:!0,forced:!F},{getOwnPropertyDescriptor:Jea,defineProperty:Kea}),function(t,s,r,o){function mfa(t,r){P(t,r,{get:function(){return function(t,r){var n=R(t);return n.view[e](r*s+n.byteOffset,!0)}(this,r)},set:function(t){return function(t,r,n){var e=R(t);o&&(n=(n=T(n))<0?0:255<n?255:255&n),e.view[i](r*s+e.byteOffset,n,!0)}(this,r,t)},enumerable:!0})}var l=t+(o?"Clamped":"")+"Array",e="get"+t,i="set"+t,a=f[l],h=a,n=h&&h.prototype,u={};F?p&&(h=r(function(t,r,n,e){return g(t,h,l),b(r)?Hea(r)?e!==Tt?new a(r,m(n,s),e):n!==Tt?new a(r,m(n,s)):new a(r):B(r)?Fea(h,r):A.call(h,r):new a(d(r))}),w&&w(h,W),I(S(a),function(t){t in h||v(h,t,a[t])}),h.prototype=n):(h=r(function(t,r,n,e){g(t,h,l);var o,i,a,u=0,c=0;if(b(r)){if(!Hea(r))return B(r)?Fea(h,r):A.call(h,r);o=r,c=m(n,s);var f=r.byteLength;if(e===Tt){if(f%s)throw k(V);if((i=f-c)<0)throw k(V)}else if(f<(i=y(e)*s)+c)throw k(V);a=i/s}else a=d(r),o=new U(i=a*s);for(_(t,{buffer:o,byteOffset:c,byteLength:i,length:a,view:new N(o)});u<a;)mfa(t,u++)}),w&&w(h,W),n=h.prototype=x(D)),n.constructor!==h&&v(n,"constructor",h),L&&v(n,L,l),c({global:!0,forced:(u[l]=h)!=a,sham:!F},u),q in h||v(h,q,s),q in n||v(n,q,s),E(l)}):function(){}},function(t,r,n){var e=n(3),o=n(6),i=n(100),a=n(131).NATIVE_ARRAY_BUFFER_VIEWS,u=e.ArrayBuffer,c=e.Int8Array;t.exports=!a||!o(function(){c(1)})||!o(function(){new c(-1)})||!i(function(t){new c,new c(null),new c(1.5),new c(t)},!0)||o(function(){return 1!==new c(new u(2),1,Tt).length})},function(t,r,n){var e=n(311);t.exports=function(t,r){var n=e(t);if(n%r)throw RangeError("Wrong offset");return n}},function(t,r,n){var e=n(40);t.exports=function(t){var r=e(t);if(r<0)throw RangeError("The argument can't be less than 0");return r}},function(t,r,n){var h=n(47),p=n(39),g=n(98),v=n(96),y=n(58),d=n(131).aTypedArrayConstructor;t.exports=function from(t){var r,n,e,o,i,a,u=h(t),c=arguments.length,f=1<c?arguments[1]:Tt,s=f!==Tt,l=g(u);if(l!=Tt&&!v(l))for(a=(i=l.call(u)).next,u=[];!(o=a.call(i)).done;)u.push(o.value);for(s&&2<c&&(f=y(f,arguments[2],2)),n=p(u.length),e=new(d(this))(n),r=0;r<n;r++)e[r]=s?f(u[r],r):u[r];return e}},function(t,r,n){n(308)("Float64",8,function(e){return function Float64Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Int8",1,function(e){return function Int8Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Int16",2,function(e){return function Int16Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Int32",4,function(e){return function Int32Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Uint8",1,function(e){return function Uint8Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Uint8",1,function(e){return function Uint8ClampedArray(t,r,n){return e(this,t,r,n)}},!0)},function(t,r,n){n(308)("Uint16",2,function(e){return function Uint16Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){n(308)("Uint32",4,function(e){return function Uint32Array(t,r,n){return e(this,t,r,n)}})},function(t,r,n){var e=n(131),o=n(79),i=e.aTypedArray;e.exportProto("copyWithin",function copyWithin(t,r){return o.call(i(this),t,r,2<arguments.length?arguments[2]:Tt)})},function(t,r,n){var e=n(131),o=n(57).every,i=e.aTypedArray;e.exportProto("every",function every(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=n(84),i=e.aTypedArray;e.exportProto("fill",function fill(t){return o.apply(i(this),arguments)})},function(t,r,n){var e=n(131),a=n(57).filter,u=n(137),c=e.aTypedArray,f=e.aTypedArrayConstructor;e.exportProto("filter",function filter(t){for(var r=a(c(this),t,1<arguments.length?arguments[1]:Tt),n=u(this,this.constructor),e=0,o=r.length,i=new(f(n))(o);e<o;)i[e]=r[e++];return i})},function(t,r,n){var e=n(131),o=n(57).find,i=e.aTypedArray;e.exportProto("find",function find(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=n(57).findIndex,i=e.aTypedArray;e.exportProto("findIndex",function findIndex(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=n(57).forEach,i=e.aTypedArray;e.exportProto("forEach",function forEach(t){o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(309),o=n(131),i=n(312);o.exportStatic("from",i,e)},function(t,r,n){var e=n(131),o=n(38).includes,i=e.aTypedArray;e.exportProto("includes",function includes(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=n(38).indexOf,i=e.aTypedArray;e.exportProto("indexOf",function indexOf(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){function xja(){return c.call(l(this))}var e=n(3),o=n(131),i=n(104),a=n(53)("iterator"),u=e.Uint8Array,c=i.values,f=i.keys,s=i.entries,l=o.aTypedArray,h=o.exportProto,p=u&&u.prototype[a],g=!!p&&("values"==p.name||p.name==Tt);h("entries",function entries(){return s.call(l(this))}),h("keys",function keys(){return f.call(l(this))}),h("values",xja,!g),h(a,xja,!g)},function(t,r,n){var e=n(131),o=e.aTypedArray,i=[].join;e.exportProto("join",function join(t){return i.apply(o(this),arguments)})},function(t,r,n){var e=n(131),o=n(114),i=e.aTypedArray;e.exportProto("lastIndexOf",function lastIndexOf(t){return o.apply(i(this),arguments)})},function(t,r,n){var e=n(131),o=n(57).map,i=n(137),a=e.aTypedArray,u=e.aTypedArrayConstructor;e.exportProto("map",function map(t){return o(a(this),t,1<arguments.length?arguments[1]:Tt,function(t,r){return new(u(i(t,t.constructor)))(r)})})},function(t,r,n){var e=n(131),o=n(309),i=e.aTypedArrayConstructor;e.exportStatic("of",function of(){for(var t=0,r=arguments.length,n=new(i(this))(r);t<r;)n[t]=arguments[t++];return n},o)},function(t,r,n){var e=n(131),o=n(118).left,i=e.aTypedArray;e.exportProto("reduce",function reduce(t){return o(i(this),t,arguments.length,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=n(118).right,i=e.aTypedArray;e.exportProto("reduceRight",function reduceRight(t){return o(i(this),t,arguments.length,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=e.aTypedArray,i=Math.floor;e.exportProto("reverse",function reverse(){for(var t,r=o(this).length,n=i(r/2),e=0;e<n;)t=this[e],this[e++]=this[--r],this[r]=t;return this})},function(t,r,n){var e=n(131),a=n(39),u=n(310),c=n(47),o=n(6),f=e.aTypedArray,i=o(function(){new Int8Array(1).set({})});e.exportProto("set",function set(t){f(this);var r=u(1<arguments.length?arguments[1]:Tt,1),n=this.length,e=c(t),o=a(e.length),i=0;if(n<o+r)throw RangeError("Wrong length");for(;i<o;)this[r+i]=e[i++]},i)},function(t,r,n){var e=n(131),u=n(137),o=n(6),c=e.aTypedArray,f=e.aTypedArrayConstructor,s=[].slice,i=o(function(){new Int8Array(1).slice()});e.exportProto("slice",function slice(t,r){for(var n=s.call(c(this),t,r),e=u(this,this.constructor),o=0,i=n.length,a=new(f(e))(i);o<i;)a[o]=n[o++];return a},i)},function(t,r,n){var e=n(131),o=n(57).some,i=e.aTypedArray;e.exportProto("some",function some(t){return o(i(this),t,1<arguments.length?arguments[1]:Tt)})},function(t,r,n){var e=n(131),o=e.aTypedArray,i=[].sort;e.exportProto("sort",function sort(t){return i.call(o(this),t)})},function(t,r,n){var e=n(131),i=n(39),a=n(41),u=n(137),c=e.aTypedArray;e.exportProto("subarray",function subarray(t,r){var n=c(this),e=n.length,o=a(t,e);return new(u(n,n.constructor))(n.buffer,n.byteOffset+o*n.BYTES_PER_ELEMENT,i((r===Tt?e:a(r,e))-o))})},function(t,r,n){var e=n(3),o=n(131),i=n(6),a=e.Int8Array,u=o.aTypedArray,c=[].toLocaleString,f=[].slice,s=!!a&&i(function(){c.call(new a(1))}),l=i(function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()})||!i(function(){a.prototype.toLocaleString.call([1,2])});o.exportProto("toLocaleString",function toLocaleString(){return c.apply(s?f.call(u(this)):u(this),arguments)},l)},function(t,r,n){var e=n(3),o=n(131),i=n(6),a=e.Uint8Array,u=a&&a.prototype,c=[].toString,f=[].join;i(function(){c.call({})})&&(c=function toString(){return f.call(this)}),o.exportProto("toString",c,(u||{}).toString!=c)},function(t,r,n){function rma(t){return function WeakMap(){return t(this,arguments.length?arguments[0]:Tt)}}var e,o=n(3),i=n(132),a=n(156),u=n(155),c=n(347),f=n(14),s=n(27).enforce,l=n(28),h=!o.ActiveXObject&&"ActiveXObject"in o,p=Object.isExtensible,g=t.exports=u("WeakMap",rma,c,!0,!0);if(l&&h){e=c.getConstructor(rma,"WeakMap",!0),a.REQUIRED=!0;var v=g.prototype,y=v["delete"],d=v.has,m=v.get,b=v.set;i(v,{"delete":function(t){if(!f(t)||p(t))return y.call(this,t);var r=s(this);return r.frozen||(r.frozen=new e),y.call(this,t)||r.frozen["delete"](t)},has:function has(t){if(!f(t)||p(t))return d.call(this,t);var r=s(this);return r.frozen||(r.frozen=new e),d.call(this,t)||r.frozen.has(t)},get:function get(t){if(!f(t)||p(t))return m.call(this,t);var r=s(this);return r.frozen||(r.frozen=new e),d.call(this,t)?m.call(this,t):r.frozen.get(t)},set:function set(t,r){if(f(t)&&!p(t)){var n=s(this);n.frozen||(n.frozen=new e),d.call(this,t)?b.call(this,t,r):n.frozen.set(t,r)}else b.call(this,t,r);return this}})}},function(t,r,n){function Zma(t){return t.frozen||(t.frozen=new d)}function _ma(t,r){return i(t.entries,function(t){return t[0]===r})}var u=n(132),c=n(156).getWeakData,f=n(20),s=n(14),l=n(133),h=n(158),e=n(57),p=n(15),o=n(27),g=o.set,v=o.getterFor,i=e.find,a=e.findIndex,y=0,d=function(){this.entries=[]};d.prototype={get:function(t){var r=_ma(this,t);if(r)return r[1]},has:function(t){return!!_ma(this,t)},set:function(t,r){var n=_ma(this,t);n?n[1]=r:this.entries.push([t,r])},"delete":function(r){var t=a(this.entries,function(t){return t[0]===r});return~t&&this.entries.splice(t,1),!!~t}},t.exports={getConstructor:function(t,n,e,o){function tna(t,r,n){var e=a(t),o=c(f(r),!0);return!0===o?Zma(e).set(r,n):o[e.id]=n,t}var i=t(function(t,r){l(t,i,n),g(t,{type:n,id:y++,frozen:Tt}),r!=Tt&&h(r,t[o],t,e)}),a=v(n);return u(i.prototype,{"delete":function(t){var r=a(this);if(!s(t))return!1;var n=c(t);return!0===n?Zma(r)["delete"](t):n&&p(n,r.id)&&delete n[r.id]},has:function has(t){var r=a(this);if(!s(t))return!1;var n=c(t);return!0===n?Zma(r).has(t):n&&p(n,r.id)}}),u(i.prototype,e?{get:function get(t){var r=a(this);if(s(t)){var n=c(t);return!0===n?Zma(r).get(t):n?n[r.id]:Tt}},set:function set(t,r){return tna(this,t,r)}}:{add:function add(t){return tna(this,t,!0)}}),i}}},function(t,r,n){n(155)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length?arguments[0]:Tt)}},n(347),!1,!0)},function(
t,r,n){var e=n(2),o=n(5),i=n(108),a=n(110),u=n(48),c=n(19),f=n(8),s=n(158),l=n(18),h=n(20),p=n(27),g=p.set,v=p.getterFor("AggregateError"),y=function AggregateError(t,r){var n=this;if(!(n instanceof y))return new y(t,r);a&&(n=a(new Error(r),i(n)));var e=[];return s(t,e.push,e),o?g(n,{errors:e,type:"AggregateError"}):n.errors=e,r!==Tt&&l(n,"message",String(r)),n};y.prototype=u(Error.prototype,{constructor:f(5,y),message:f(5,""),name:f(5,"AggregateError"),toString:f(5,function toString(){var t=h(this).name;t=t===Tt?"AggregateError":String(t);var r=this.message;return t+": "+(r=r===Tt?"":String(r))})}),o&&c.f(y.prototype,"errors",{get:function(){return v(this).errors},configurable:!0}),e({global:!0},{AggregateError:y})},function(t,r,n){function uoa(t,r){if(!a||!i(t)||!a(t))return!1;for(var n,e=0,o=t.length;e<o;)if(!("string"==typeof(n=t[e++])||r&&void 0===n))return!1;return 0!==o}var e=n(2),i=n(46),a=Object.isFrozen;e({target:"Array",stat:!0},{isTemplateObject:function isTemplateObject(t){if(!uoa(t,!0))return!1;var r=t.raw;return!(r.length!==t.length||!uoa(r,!1))}})},function(t,r,n){var e=n(5),o=n(80),i=n(47),a=n(39),u=n(19).f;!e||"lastIndex"in[]||(u(Array.prototype,"lastIndex",{configurable:!0,get:function lastIndex(){var t=i(this),r=a(t.length);return 0==r?0:r-1}}),o("lastIndex"))},function(t,r,n){var e=n(5),o=n(80),i=n(47),a=n(39),u=n(19).f;!e||"lastItem"in[]||(u(Array.prototype,"lastItem",{configurable:!0,get:function lastItem(){var t=i(this),r=a(t.length);return 0==r?Tt:t[r-1]},set:function lastItem(t){var r=i(this),n=a(r.length);return r[0==n?0:n-1]=t}}),o("lastItem"))},function(t,r,n){var e=n(2),o=n(133),i=n(18),a=n(15),u=n(53),c=n(354),f=n(23),s=u("toStringTag"),l=function AsyncIterator(){o(this,l)};a(l.prototype=c,s)||i(c,s,"AsyncIterator"),e({global:!0,forced:f},{AsyncIterator:l})},function(t,r,n){var e,o,i=n(3),a=n(24),u=n(108),c=n(15),f=n(18),s=n(53),l=n(23),h="USE_FUNCTION_CONSTRUCTOR",p=s("asyncIterator"),g=i.AsyncIterator,v=a.AsyncIteratorPrototype;if(!l)if(v)e=v;else if("function"==typeof g)e=g.prototype;else if(a[h]||i[h])try{u(o=u(u(u(Function("return async function*(){}()")()))))===Object.prototype&&(e=o)}catch(y){}c(e=e||{},p)||f(e,p,function(){return this}),t.exports=e},function(t,r,n){var e=n(2),o=n(20),i=n(356)(function(t,r){var n=this;return r.resolve(o(n.next.call(n.iterator,t))).then(function(t){return o(t).done?{done:n.done=!0,value:Tt}:{done:!1,value:[n.index++,t.value]}})});e({target:"AsyncIterator",proto:!0,real:!0},{asIndexedPairs:function asIndexedPairs(){return new i({iterator:o(this),index:0})}})},function(t,r,n){function bqa(t){var r=p(this).iterator,n=r["return"];return n===Tt?l.resolve({done:!0,value:t}):a(n.call(r,t))}function cqa(t){var r=p(this).iterator,n=r["throw"];return n===Tt?l.reject(t):n.call(r,t)}var o=n(35),i=n(59),a=n(20),u=n(48),c=n(18),f=n(132),e=n(53),s=n(27),l=n(34)("Promise"),h=s.set,p=s.get,g=e("toStringTag");t.exports=function(e,t){function lqa(t){t.next=i(t.iterator.next),t.done=!1,h(this,t)}return lqa.prototype=f(u(o.AsyncIterator.prototype),{next:function next(t){var r=p(this);if(r.done)return l.resolve({done:!0,value:Tt});try{return l.resolve(a(e.call(r,t,l)))}catch(n){return l.reject(n)}},"return":bqa,"throw":cqa}),t||c(lqa.prototype,g,"Generator"),lqa}},function(t,r,n){var e=n(2),u=n(20),o=n(311),i=n(356)(function(r,i){var a=this;return new i(function(n,e){var o=function(){try{i.resolve(u(a.next.call(a.iterator,a.remaining?Tt:r))).then(function(t){try{u(t).done?n({done:a.done=!0,value:Tt}):a.remaining?(a.remaining--,o()):n({done:!1,value:t.value})}catch(r){e(r)}},e)}catch(t){e(t)}};o()})});e({target:"AsyncIterator",proto:!0,real:!0},{drop:function drop(t){return new i({iterator:u(this),remaining:o(t)})}})},function(t,r,n){var e=n(2),o=n(359).every;e({target:"AsyncIterator",proto:!0,real:!0},{every:function every(t){return o(this,t)}})},function(t,r,n){function Zqa(t){var c=0==t,f=1==t,s=2==t,l=3==t;return function(r,a){h(r);var n=e(r.next),u=c?[]:Tt;return c||e(a),new p(function(e,o){var i=function(){try{p.resolve(h(n.call(r))).then(function(t){try{if(h(t).done)e(c?u:!l&&(s||Tt));else{var r=t.value;c?(g.call(u,r),i()):p.resolve(a(r)).then(function(t){f?i():s?t?i():e(!1):t?e(l||r):i()},o)}}catch(n){o(n)}},o)}catch(t){o(t)}};i()})}}var e=n(59),h=n(20),p=n(34)("Promise"),g=[].push;t.exports={toArray:Zqa(0),forEach:Zqa(1),every:Zqa(2),some:Zqa(3),find:Zqa(4)}},function(t,r,n){var e=n(2),o=n(59),f=n(20),i=n(356)(function(r,a){var u=this,c=u.filterer;return new a(function(e,o){var i=function(){try{a.resolve(f(u.next.call(u.iterator,r))).then(function(t){try{if(f(t).done)e({done:u.done=!0,value:Tt});else{var r=t.value;a.resolve(c(r)).then(function(t){t?e({done:!1,value:r}):i()},o)}}catch(n){o(n)}},o)}catch(t){o(t)}};i()})});e({target:"AsyncIterator",proto:!0,real:!0},{filter:function filter(t){return new i({iterator:f(this),filterer:o(t)})}})},function(t,r,n){var e=n(2),o=n(359).find;e({target:"AsyncIterator",proto:!0,real:!0},{find:function find(t){return o(this,t)}})},function(t,r,n){var e=n(2),s=n(59),l=n(20),h=n(14),o=n(356),p=n(363),i=o(function(r,i){var a,u,c=this,f=c.mapper;return new i(function(n,e){function ksa(){try{i.resolve(l(c.next.call(c.iterator,r))).then(function(t){try{l(t).done?n({done:c.done=!0,value:Tt}):i.resolve(f(t.value)).then(function(t){try{if(h(t)&&(u=p(t))!==Tt)return c.innerIterator=a=u.call(t),c.innerNext=s(a.next),o();n({done:!1,value:t})}catch(r){e(r)}},e)}catch(r){e(r)}},e)}catch(t){e(t)}}var o=function(){if(a=c.innerIterator)try{i.resolve(l(c.innerNext.call(a))).then(function(t){try{l(t).done?(c.innerIterator=c.innerNext=null,ksa()):n({done:!1,value:t.value})}catch(r){e(r)}},e)}catch(t){e(t)}else ksa()};o()})});e({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function flatMap(t){return new i({iterator:l(this),mapper:s(t),innerIterator:null,innerNext:null})}})},function(t,r,n){var e=n(98),o=n(53)("asyncIterator");t.exports=function(t){var r=t[o];return r===Tt?e(t):r}},function(t,r,n){var e=n(2),o=n(359).forEach;e({target:"AsyncIterator",proto:!0,real:!0},{forEach:function forEach(t){return o(this,t)}})},function(t,r,n){var e=n(2),o=n(35),i=n(59),a=n(20),u=n(47),c=n(356),f=n(363),s=o.AsyncIterator,l=c(function(t){return a(this.next.call(this.iterator,t))},!0);e({target:"AsyncIterator",stat:!0},{from:function from(t){var r,n=u(t),e=f(n);if(null!=e){if((r=i(e).call(n))instanceof s)return r}else r=n;return new l({iterator:r})}})},function(t,r,n){var e=n(2),o=n(59),i=n(20),a=n(356)(function(t,r){var n=this,e=n.mapper;return r.resolve(i(n.next.call(n.iterator,t))).then(function(t){return i(t).done?{done:n.done=!0,value:Tt}:r.resolve(e(t.value)).then(function(t){return{done:!1,value:t}})})});e({target:"AsyncIterator",proto:!0,real:!0},{map:function map(t){return new a({iterator:i(this),mapper:o(t)})}})},function(t,r,n){var e=n(2),o=n(59),f=n(20),s=n(34)("Promise");e({target:"AsyncIterator",proto:!0,real:!0},{reduce:function reduce(a){var r=f(this),n=o(r.next),u=arguments.length<2,c=u?Tt:arguments[1];return o(a),new s(function(e,o){var i=function(){try{s.resolve(f(n.call(r))).then(function(t){try{if(f(t).done)u?o(TypeError("Reduce of empty iterator with no initial value")):e(c);else{var r=t.value;u?(u=!1,c=r,i()):s.resolve(a(c,r)).then(function(t){c=t,i()},o)}}catch(n){o(n)}},o)}catch(t){o(t)}};i()})}})},function(t,r,n){var e=n(2),o=n(359).some;e({target:"AsyncIterator",proto:!0,real:!0},{some:function some(t){return o(this,t)}})},function(t,r,n){var e=n(2),o=n(20),i=n(311),a=n(356)(function(t){return this.remaining--?this.next.call(this.iterator,t):{done:this.done=!0,value:Tt}});e({target:"AsyncIterator",proto:!0,real:!0},{take:function take(t){return new a({iterator:o(this),remaining:i(t)})}})},function(t,r,n){var e=n(2),o=n(359).toArray;e({target:"AsyncIterator",proto:!0,real:!0},{toArray:function toArray(){return o(this)}})},function(t,r,n){function pua(){var t=i("Object","freeze");return t?t(a(null)):a(null)}var e=n(2),o=n(372),i=n(34),a=n(48);e({global:!0},{compositeKey:function compositeKey(){return o.apply(Object,arguments).get("object",pua)}})},function(t,r,n){function yua(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=e(null)}var i=n(154),a=n(346),e=n(48),o=n(14);yua.prototype.get=function(t,r){return this[t]||(this[t]=r())},yua.prototype.next=function(t,r,n){var e=n?this.objectsByIndex[t]||(this.objectsByIndex[t]=new a):this.primitives||(this.primitives=new i),o=e.get(r);return o||e.set(r,o=new yua),o};var u=new yua;t.exports=function(){var t,r,n=u,e=arguments.length;for(t=0;t<e;t++)o(r=arguments[t])&&(n=n.next(t,r,!0));if(this===Object&&n===u)throw TypeError("Composite keys must contain a non-primitive component");for(t=0;t<e;t++)o(r=arguments[t])||(n=n.next(t,r,!1));return n}},function(t,r,n){var e=n(2),o=n(372),i=n(34);e({global:!0},{compositeSymbol:function compositeSymbol(){return 1===arguments.length&&"string"==typeof arguments[0]?i("Symbol")["for"](arguments[0]):o.apply(null,arguments).get("symbol",i("Symbol"))}})},function(t,r,n){n(152)},function(t,r,n){var e=n(2),o=n(3),i=n(133),a=n(18),u=n(15),c=n(53),f=n(107).IteratorPrototype,s=n(23),l=c("iterator"),h=c("toStringTag"),p=o.Iterator,g=s||"function"!=typeof p||p.prototype!==f,v=function Iterator(){i(this,v)};s&&a(f={},l,function(){return this}),u(f,h)||a(f,h,"Iterator"),v.prototype=f,e({global:!0,forced:g},{Iterator:v})},function(t,r,n){var e=n(2),o=n(20),i=n(377)(function(t){var r=o(this.next.call(this.iterator,t));if(!(this.done=!!r.done))return[this.index++,r.value]});e({target:"Iterator",proto:!0,real:!0},{asIndexedPairs:function asIndexedPairs(){return new i({iterator:o(this),index:0})}})},function(t,r,n){function Gva(t){var r=h(this).iterator,n=r["return"];return n===Tt?{done:!0,value:t}:i(n.call(r,t))}function Hva(t){var r=h(this).iterator,n=r["throw"];if(n===Tt)throw t;return n.call(r,t)}var e=n(35),o=n(59),i=n(20),a=n(48),u=n(18),c=n(132),f=n(53),s=n(27),l=s.set,h=s.get,p=f("toStringTag");t.exports=function(n,t){function Qva(t){t.next=o(t.iterator.next),t.done=!1,l(this,t)}return Qva.prototype=c(a(e.Iterator.prototype),{next:function next(){var t=h(this),r=t.done?Tt:n.apply(t,arguments);return{done:t.done,value:r}},"return":Gva,"throw":Hva}),t||u(Qva.prototype,p,"Generator"),Qva}},function(t,r,n){var e=n(2),o=n(20),i=n(311),a=n(377)(function(t){for(var r,n=this.iterator,e=this.next;this.remaining;)if(this.remaining--,r=o(e.call(n)),this.done=!!r.done)return;if(r=o(e.call(n,t)),!(this.done=!!r.done))return r.value});e({target:"Iterator",proto:!0,real:!0},{drop:function drop(t){return new a({iterator:o(this),remaining:i(t)})}})},function(t,r,n){var e=n(2),o=n(158),i=n(59),a=n(20);e({target:"Iterator",proto:!0,real:!0},{every:function every(r){return a(this),i(r),!o(this,function(t){if(!r(t))return o.stop()},Tt,!1,!0).stopped}})},function(t,r,n){var e=n(2),o=n(59),a=n(20),i=n(377),u=n(95),c=i(function(t){for(var r,n,e=this.iterator,o=this.filterer,i=this.next;;){if(r=a(i.call(e,t)),this.done=!!r.done)return;if(u(e,o,n=r.value))return n}});e({target:"Iterator",proto:!0,real:!0},{filter:function filter(t){return new c({iterator:a(this),filterer:o(t)})}})},function(t,r,n){var e=n(2),o=n(158),i=n(59),a=n(20);e({target:"Iterator",proto:!0,real:!0},{find:function find(r){return a(this),i(r),o(this,function(t){if(r(t))return o.stop(t)},Tt,!1,!0).result}})},function(t,r,n){var e=n(2),a=n(59),u=n(20),c=n(14),f=n(98),o=n(377),s=n(95),i=o(function(t){for(var r,n,e,o,i=this.iterator;;){if(o=this.innerIterator){if(!(r=u(this.innerNext.call(o))).done)return r.value;this.innerIterator=this.innerNext=null}if(r=u(this.next.call(i,t)),this.done=!!r.done)return;if(n=s(i,this.mapper,r.value),!c(n)||(e=f(n))===Tt)return n;this.innerIterator=o=e.call(n),this.innerNext=a(o.next)}});e({target:"Iterator",proto:!0,real:!0},{flatMap:function flatMap(t){return new i({iterator:u(this),mapper:a(t),innerIterator:null,innerNext:null})}})},function(t,r,n){var e=n(2),o=n(158),i=n(20);e({target:"Iterator",proto:!0,real:!0},{forEach:function forEach(t){o(i(this),t,Tt,!1,!0)}})},function(t,r,n){var e=n(2),o=n(35),i=n(59),a=n(20),u=n(47),c=n(377),f=n(98),s=o.Iterator,l=c(function(t){var r=a(this.next.call(this.iterator,t));if(!(this.done=!!r.done))return r.value},!0);e({target:"Iterator",stat:!0},{from:function from(t){var r,n=u(t),e=f(n);if(null!=e){if((r=i(e).call(n))instanceof s)return r}else r=n;return new l({iterator:r})}})},function(t,r,n){var e=n(2),o=n(59),i=n(20),a=n(377),u=n(95),c=a(function(t){var r=this.iterator,n=i(this.next.call(r,t));if(!(this.done=!!n.done))return u(r,this.mapper,n.value)});e({target:"Iterator",proto:!0,real:!0},{map:function map(t){return new c({iterator:i(this),mapper:o(t)})}})},function(t,r,n){var e=n(2),o=n(158),i=n(59),a=n(20);e({target:"Iterator",proto:!0,real:!0},{reduce:function reduce(r){a(this),i(r);var n=arguments.length<2,e=n?Tt:arguments[1];if(o(this,function(t){e=n?(n=!1,t):r(e,t)},Tt,!1,!0),n)throw TypeError("Reduce of empty iterator with no initial value");return e}})},function(t,r,n){var e=n(2),o=n(158),i=n(59),a=n(20);e({target:"Iterator",proto:!0,real:!0},{some:function some(r){return a(this),i(r),o(this,function(t){if(r(t))return o.stop()},Tt,!1,!0).stopped}})},function(t,r,n){var e=n(2),o=n(20),i=n(311),a=n(377)(function(t){if(this.remaining--){var r=o(this.next.call(this.iterator,t));return(this.done=!!r.done)?void 0:r.value}this.done=!0});e({target:"Iterator",proto:!0,real:!0},{take:function take(t){return new a({iterator:o(this),remaining:i(t)})}})},function(t,r,n){var e=n(2),o=n(158),i=n(20),a=[].push;e({target:"Iterator",proto:!0,real:!0},{toArray:function toArray(){var t=[];return o(i(this),a,t,!1,!0),t}})},function(t,r,n){var e=n(2),o=n(23),i=n(391);e({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function deleteAll(){return i.apply(this,arguments)}})},function(t,r,n){var a=n(20),u=n(59);t.exports=function(){for(var t,r=a(this),n=u(r["delete"]),e=!0,o=0,i=arguments.length;o<i;o++)t=n.call(r,arguments[o]),e=e&&t;return!!e}},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(393),c=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{every:function every(t){var n=i(this),r=u(n),e=a(t,1<arguments.length?arguments[1]:Tt,3);return!c(r,function(t,r){if(!e(r,t,n))return c.stop()},Tt,!0,!0).stopped}})},function(t,r,n){var e=n(23),o=n(394);t.exports=e?o:function(t){return Map.prototype.entries.call(t)}},function(t,r,n){var e=n(20),o=n(98);t.exports=function(t){var r=o(t);if("function"!=typeof r)throw TypeError(String(t)+" is not iterable");return e(r.call(t))}},function(t,r,n){var e=n(2),o=n(23),a=n(34),u=n(20),c=n(59),f=n(58),s=n(137),l=n(393),h=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{filter:function filter(t){var n=u(this),r=l(n),e=f(t,1<arguments.length?arguments[1]:Tt,3),o=new(s(n,a("Map"))),i=c(o.set);return h(r,function(t,r){e(r,t,n)&&i.call(o,t,r)},Tt,!0,!0),o}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(393),c=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{find:function find(t){var n=i(this),r=u(n),e=a(t,1<arguments.length?arguments[1]:Tt,3);return c(r,function(t,r){if(e(r,t,n))return c.stop(r)},Tt,!0,!0).result}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(393),c=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{findKey:function findKey(t){var n=i(this),r=u(n),e=a(t,1<arguments.length?arguments[1]:Tt,3);return c(r,function(t,r){if(e(r,t,n))return c.stop(t)},Tt,!0,!0).result}})},function(t,r,n){n(2)({target:"Map",stat:!0},{from:n(399)})},function(t,r,n){var u=n(59),c=n(58),f=n(158);t.exports=function from(t){var r,n,e,o,i=arguments.length,a=1<i?arguments[1]:Tt;return u(this),(r=a!==Tt)&&u(a),t==Tt?new this:(n=[],r?(e=0,o=c(a,2<i?arguments[2]:Tt,2),f(t,function(t){n.push(o(t,e++))})):f(t,n.push,n),new this(n))}},function(t,r,n){var e=n(2),u=n(158),c=n(59);e({target:"Map",stat:!0},{groupBy:function groupBy(t,n){var e=new this;c(n);var o=c(e.has),i=c(e.get),a=c(e.set);return u(t,function(t){var r=n(t);o.call(e,r)?i.call(e,r).push(t):a.call(e,r,[t])}),e}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(393),u=n(402),c=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{includes:function includes(n){return c(a(i(this)),function(t,r){if(u(r,n))return c.stop()},Tt,!0,!0).stopped}})},function(t,r){t.exports=function(t,r){return t===r||t!=t&&r!=r}},function(t,r,n){var e=n(2),o=n(158),i=n(59);e({target:"Map",stat:!0},{keyBy:function keyBy(t,r){var n=new this;i(r);var e=i(n.set);return o(t,function(t){e.call(n,r(t),t)}),n}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(393),u=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function keyOf(n){return u(a(i(this)),function(t,r){if(r===n)return u.stop(t)},Tt,!0,!0).result}})},function(t,r,n){var e=n(2),o=n(23),a=n(34),u=n(20),c=n(59),f=n(58),s=n(137),l=n(393),h=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function mapKeys(t){var n=u(this),r=l(n),e=f(t,1<arguments.length?arguments[1]:Tt,3),o=new(s(n,a("Map"))),i=c(o.set);return h(r,function(t,r){i.call(o,e(r,t,n),r)},Tt,!0,!0),o}})},function(t,r,n){var e=n(2),o=n(23),a=n(34),u=n(20),c=n(59),f=n(58),s=n(137),l=n(393),h=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function mapValues(t){var n=u(this),r=l(n),e=f(t,1<arguments.length?arguments[1]:Tt,3),o=new(s(n,a("Map"))),i=c(o.set);return h(r,function(t,r){i.call(o,t,e(r,t,n))},Tt,!0,!0),o}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(59),u=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{merge:function merge(t){for(var r=i(this),n=a(r.set),e=0;e<arguments.length;)u(arguments[e++],n,r,!0);return r}})},function(t,r,n){n(2)({target:"Map",stat:!0},{of:n(409)})},function(t,r,n){t.exports=function of(){for(var t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];return new this(r)}},function(t,r,n){var e=n(2),o=n(23),a=n(20),u=n(59),c=n(393),f=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{reduce:function reduce(n){var e=a(this),t=c(e),o=arguments.length<2,i=o?Tt:arguments[1];if(u(n),f(t,function(t,r){i=o?(o=!1,r):n(i,r,t,e)},Tt,!0,!0),o)throw TypeError("Reduce of empty map with no initial value");return i}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(393),c=n(158);e({target:"Map",proto:!0,real:!0,forced:o},{some:function some(t){var n=i(this),r=u(n),e=a(t,1<arguments.length?arguments[1]:Tt,3);return c(r,function(t,r){if(e(r,t,n))return c.stop()},Tt,!0,!0).stopped}})},function(t,r,n){var e=n(2),o=n(23),a=n(20),u=n(59);e({target:"Map",proto:!0,real:!0,forced:o},{update:function update(t,r){var n=a(this),e=arguments.length;u(r);var o=n.has(t);if(!o&&e<3)throw TypeError("Updating absent value");var i=o?n.get(t):u(2<e?arguments[2]:Tt)(t,n);return n.set(t,r(i,t,n)),n}})},function(t,r,n){n(2)({target:"Map",proto:!0,real:!0,forced:n(23)},{updateOrInsert:n(414)})},function(t,r,n){var i=n(20);t.exports=function upsert(t,r){var n,e=i(this),o=2<arguments.length?arguments[2]:Tt;if("function"!=typeof r&&"function"!=typeof o)throw TypeError("At least one callback required");return e.has(t)?(n=e.get(t),"function"==typeof r&&(n=r(n),e.set(t,n))):"function"==typeof o&&(n=o(),e.set(t,n)),n}},function(t,r,n){n(2)({target:"Map",proto:!0,real:!0,forced:n(23)},{upsert:n(414)})},function(t,r,n){var e=n(2),o=Math.min,i=Math.max;e({target:"Math",stat:!0},{clamp:function clamp(t,r,n){return o(n,i(r,t))}})},function(t,r,n){n(2)({target:"Math",stat:!0},{DEG_PER_RAD:Math.PI/180})},function(t,r,n){var e=n(2),o=180/Math.PI;e({target:"Math",stat:!0},{degrees:function degrees(t){return t*o}})},function(t,r,n){var e=n(2),i=n(420),a=n(172);e({target:"Math",stat:!0},{fscale:function fscale(t,r,n,e,o){return a(i(t,r,n,e,o))}})},function(t,r){t.exports=Math.scale||function scale(t,r,n,e,o){return 0===arguments.length||t!=t||r!=r||n!=n||e!=e||o!=o?NaN:t===Infinity||t===-Infinity?t:(t-r)*(o-e)/(n-r)+e}},function(t,r,n){n(2)({target:"Math",stat:!0},{iaddh:function iaddh(t,r,n,e){var o=t>>>0,i=n>>>0;return(r>>>0)+(e>>>0)+((o&i|(o|i)&~(o+i>>>0))>>>31)|0}})},function(t,r,n){n(2)({target:"Math",stat:!0},{imulh:function imulh(t,r){var n=+t,e=+r,o=65535&n,i=65535&e,a=n>>16,u=e>>16,c=(a*i>>>0)+(o*i>>>16);return a*u+(c>>16)+((o*u>>>0)+(65535&c)>>16)}})},function(t,r,n){n(2)({target:"Math",stat:!0},{isubh:function isubh(t,r,n,e){var o=t>>>0,i=n>>>0;return(r>>>0)-(e>>>0)-((~o&i|~(o^i)&o-i>>>0)>>>31)|0}})},function(t,r,n){n(2)({target:"Math",stat:!0},{RAD_PER_DEG:180/Math.PI})},function(t,r,n){var e=n(2),o=Math.PI/180;e({target:"Math",stat:!0},{radians:function radians(t){return t*o}})},function(t,r,n){n(2)({target:"Math",stat:!0},{scale:n(420)})},function(t,r,n){var e=n(2),o=n(20),i=n(188),a=n(106),u=n(27),c="Seeded Random",f=c+" Generator",s=u.set,l=u.getterFor(f),h=a(function SeededRandomGenerator(t){s(this,{type:f,seed:t%2147483647})},c,function next(){var t=l(this);return{value:(1073741823&(t.seed=(1103515245*t.seed+12345)%2147483647))/1073741823,done:!1}});e({target:"Math",stat:!0,forced:!0},{seededPRNG:function seededPRNG(t){var r=o(t).seed;if(!i(r))throw TypeError('Math.seededPRNG() argument should have a "seed" field with a finite value.');return new h(r)}})},function(t,r,n){n(2)({target:"Math",stat:!0},{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==Infinity:0<t}})},function(t,r,n){n(2)({target:"Math",stat:!0},{umulh:function umulh(t,r){var n=+t,e=+r,o=65535&n,i=65535&e,a=n>>>16,u=e>>>16,c=(a*i>>>0)+(o*i>>>16);return a*u+(c>>>16)+((o*u>>>0)+(65535&c)>>>16)}})},function(t,r,n){var e=n(2),i=n(40),a=n(198),u="Invalid number representation",c=/^[\da-z]+$/;e({target:"Number",stat:!0},{fromString:function fromString(t,r){var n,e,o=1;if("string"!=typeof t)throw TypeError(u);if(!t.length)throw SyntaxError(u);if("-"==t.charAt(0)&&(o=-1,!(t=t.slice(1)).length))throw SyntaxError(u);if((n=r===Tt?10:i(r))<2||36<n)throw RangeError("Invalid radix");if(!c.test(t)||(e=a(t,n)).toString(n)!==t)throw SyntaxError(u);return o*e}})},function(t,r,n){function _Ga(t){return null==t?Tt:f(t)}function aHa(t){var r=t.cleanup;if(r){t.cleanup=Tt;try{r()}catch(n){v(n)}}}function bHa(t){return t.observer===Tt}function cHa(t,r){if(!c){t.closed=!0;var n=r.subscriptionObserver;n&&(n.closed=!0)}r.observer=Tt}function dHa(t,r){var n,e=x(this,{cleanup:Tt,observer:s(t),subscriptionObserver:Tt});c||(this.closed=!1);try{(n=_Ga(t.start))&&n.call(t,this)}catch(u){v(u)}if(!bHa(e)){var o=e.subscriptionObserver=new w(this);try{var i=r(o),a=i;null!=i&&(e.cleanup="function"==typeof i.unsubscribe?function(){a.unsubscribe()}:f(i))}catch(u){return void o.error(u)}bHa(e)&&aHa(e)}}var e=n(2),c=n(5),o=n(125),f=n(59),s=n(20),i=n(14),a=n(133),u=n(19).f,l=n(18),h=n(132),p=n(394),g=n(158),v=n(241),y=n(53),d=n(27),m=y("observable"),b=d.get,x=d.set;dHa.prototype=h({},{unsubscribe:function unsubscribe(){var t=b(this);bHa(t)||(cHa(this,t),aHa(t))}}),c&&u(dHa.prototype,"closed",{configurable:!0,get:function(){return bHa(b(this))}});var w=function(t){x(this,{subscription:t}),c||(this.closed=!1)};w.prototype=h({},{next:function next(t){var r=b(b(this).subscription);if(!bHa(r)){var n=r.observer;try{var e=_Ga(n.next);e&&e.call(n,t)}catch(o){v(o)}}},error:function error(t){var r=b(this).subscription,n=b(r);if(!bHa(n)){var e=n.observer;cHa(r,n);try{var o=_Ga(e.error);o?o.call(e,t):v(t)}catch(i){v(i)}aHa(n)}},complete:function complete(){var t=b(this).subscription,r=b(t);if(!bHa(r)){var n=r.observer;cHa(t,r);try{var e=_Ga(n.complete);e&&e.call(n)}catch(error){v(error)}aHa(r)}}}),c&&u(w.prototype,"closed",{configurable:!0,get:function(){return bHa(b(b(this).subscription))}});var S=function Observable(t){a(this,S,"Observable"),x(this,{subscriber:f(t)})};h(S.prototype,{subscribe:function subscribe(t){var r=arguments.length;return new dHa("function"==typeof t?{next:t,error:1<r?arguments[1]:Tt,complete:2<r?arguments[2]:Tt}:i(t)?t:{},b(this).subscriber)}}),h(S,{from:function from(t){var r="function"==typeof this?this:S,n=_Ga(s(t)[m]);if(n){var e=s(n.call(t));return e.constructor===r?e:new r(function(t){return e.subscribe(t)})}var o=p(t);return new r(function(r){g(o,function(t){if(r.next(t),r.closed)return g.stop()},Tt,!1,!0),r.complete()})},of:function of(){for(var t="function"==typeof this?this:S,n=arguments.length,e=new Array(n),r=0;r<n;)e[r]=arguments[r++];return new t(function(t){for(var r=0;r<n;r++)if(t.next(e[r]),t.closed)return;t.complete()})}}),l(S.prototype,m,function(){return this}),e({global:!0},{Observable:S}),o("Observable")},function(t,r,n){n(243)},function(t,r,n){var e=n(2),l=n(59),h=n(34),o=n(240),i=n(242),p=n(158),g="No one promise resolved";e({target:"Promise",stat:!0},{any:function any(t){var c=this,r=o.f(c),f=r.resolve,s=r.reject,n=i(function(){var e=l(c.resolve),o=[],i=0,a=1,u=!1;p(t,function(t){var r=i++,n=!1;o.push(Tt),a++,e.call(c,t).then(function(t){n||u||(u=!0,f(t))},function(t){n||u||(n=!0,o[r]=t,--a||s(new(h("AggregateError"))(o,g)))})}),--a||s(new(h("AggregateError"))(o,g))});return n.error&&s(n.value),r.promise}})},function(t,r,n){var e=n(2),o=n(240),i=n(242);e({target:"Promise",stat:!0},{"try":function(t){var r=o.f(this),n=i(t);return(n.error?r.reject:r.resolve)(n.value),r.promise}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.toKey,u=o.set;e({target:"Reflect",stat:!0},{defineMetadata:function defineMetadata(t,r,n){var e=arguments.length<4?Tt:a(arguments[3]);u(t,r,i(n),e)}})},function(t,r,n){function lJa(t,r,n){var e=a.get(t);if(!e){if(!n)return;a.set(t,e=new i)}var o=e.get(r);if(!o){if(!n)return;e.set(r,o=new i)}return o}var i=n(154),e=n(346),o=n(22)("metadata"),a=o.store||(o.store=new e);t.exports={store:a,getMap:lJa,has:function(t,r,n){var e=lJa(r,n,!1);return e!==Tt&&e.has(t)},get:function(t,r,n){var e=lJa(r,n,!1);return e===Tt?Tt:e.get(t)},set:function(t,r,n,e){lJa(n,e,!0).set(t,r)},keys:function(t,r){var n=lJa(t,r,!1),e=[];return n&&n.forEach(function(t,r){e.push(r)}),e},toKey:function(t){return t===Tt||"symbol"==typeof t?t:String(t)}}},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.toKey,u=o.getMap,c=o.store;e({target:"Reflect",stat:!0},{deleteMetadata:function deleteMetadata(t,r){var n=arguments.length<3?Tt:a(arguments[2]),e=u(i(r),n,!1);if(e===Tt||!e["delete"](t))return!1;if(e.size)return!0;var o=c.get(r);return o["delete"](n),!!o.size||c["delete"](r)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=n(108),u=o.has,c=o.get,f=o.toKey,s=function(t,r,n){if(u(t,r,n))return c(t,r,n);var e=a(r);return null!==e?s(t,e,n):Tt};e({target:"Reflect",stat:!0},{getMetadata:function getMetadata(t,r){var n=arguments.length<3?Tt:f(arguments[2]);return s(t,i(r),n)}})},function(t,r,n){var e=n(2),i=n(265),o=n(436),a=n(20),u=n(108),c=n(158),f=o.keys,s=o.toKey,l=function(t,r){var n=f(t,r),e=u(t);if(null===e)return n;var o=l(e,r);return o.length?n.length?function(t){var r=[];return c(t,r.push,r),r}(new i(n.concat(o))):o:n};e({target:"Reflect",stat:!0},{getMetadataKeys:function getMetadataKeys(t){var r=arguments.length<2?Tt:s(arguments[1]);return l(a(t),r)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.get,u=o.toKey;e({target:"Reflect",stat:!0},{getOwnMetadata:function getOwnMetadata(t,r){var n=arguments.length<3?Tt:u(arguments[2]);return a(t,i(r),n)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.keys,u=o.toKey;e({target:"Reflect",stat:!0},{getOwnMetadataKeys:function getOwnMetadataKeys(t){var r=arguments.length<2?Tt:u(arguments[1]);return a(i(t),r)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=n(108),u=o.has,c=o.toKey,f=function(t,r,n){if(u(t,r,n))return!0;var e=a(r);return null!==e&&f(t,e,n)};e({target:"Reflect",stat:!0},{hasMetadata:function hasMetadata(t,r){var n=arguments.length<3?Tt:c(arguments[2]);return f(t,i(r),n)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.has,u=o.toKey;e({target:"Reflect",stat:!0},{hasOwnMetadata:function hasOwnMetadata(t,r){var n=arguments.length<3?Tt:u(arguments[2]);return a(t,i(r),n)}})},function(t,r,n){var e=n(2),o=n(436),i=n(20),a=o.toKey,u=o.set;e({target:"Reflect",stat:!0},{metadata:function metadata(n,e){return function decorator(t,r){u(n,e,i(t),a(r))}}})},function(t,r,n){var e=n(2),o=n(23),i=n(446);e({target:"Set",proto:!0,real:!0,forced:o},{addAll:function addAll(){return i.apply(this,arguments)}})},function(t,r,n){var o=n(20),i=n(59);t.exports=function(){for(var t=o(this),r=i(t.add),n=0,e=arguments.length;n<e;n++)r.call(t,arguments[n]);return t}},function(t,r,n){var e=n(2),o=n(23),i=n(391);e({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function deleteAll(){return i.apply(this,arguments)}})},function(t,r,n){var e=n(2),o=n(23),i=n(34),a=n(20),u=n(59),c=n(137),f=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{difference:function difference(t){var r=a(this),n=new(c(r,i("Set")))(r),e=u(n["delete"]);return f(t,function(t){e.call(n,t)}),n}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(450),c=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{every:function every(t){var r=i(this),n=u(r),e=a(t,1<arguments.length?arguments[1]:Tt,3);return!c(n,function(t){if(!e(t,t,r))return c.stop()},Tt,!1,!0).stopped}})},function(t,r,n){var e=n(23),o=n(394);t.exports=e?o:function(t){return Set.prototype.values.call(t)}},function(t,r,n){var e=n(2),o=n(23),a=n(34),u=n(20),c=n(59),f=n(58),s=n(137),l=n(450),h=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{filter:function filter(t){var r=u(this),n=l(r),e=f(t,1<arguments.length?arguments[1]:Tt,3),o=new(s(r,a("Set"))),i=c(o.add);return h(n,function(t){e(t,t,r)&&i.call(o,t)},Tt,!1,!0),o}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(450),c=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{find:function find(t){var r=i(this),n=u(r),e=a(t,1<arguments.length?arguments[1]:Tt,3);return c(n,function(t){if(e(t,t,r))return c.stop(t)},Tt,!1,!0).result}})},function(t,r,n){n(2)({target:"Set",stat:!0},{from:n(399)})},function(t,r,n){var e=n(2),o=n(23),i=n(34),a=n(20),u=n(59),c=n(137),f=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{intersection:function intersection(t){var r=a(this),n=new(c(r,i("Set"))),e=u(r.has),o=u(n.add);return f(t,function(t){e.call(r,t)&&o.call(n,t)}),n}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(59),u=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function isDisjointFrom(t){var r=i(this),n=a(r.has);return!u(t,function(t){if(!0===n.call(r,t))return u.stop()}).stopped}})},function(t,r,n){var e=n(2),o=n(23),i=n(34),a=n(20),u=n(59),c=n(394),f=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function isSubsetOf(t){var r=c(this),n=a(t),e=n.has;return"function"!=typeof e&&(n=new(i("Set"))(t),e=u(n.has)),!f(r,function(t){if(!1===e.call(n,t))return f.stop()},Tt,!1,!0).stopped}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(59),u=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function isSupersetOf(t){var r=i(this),n=a(r.has);return!u(t,function(t){if(!1===n.call(r,t))return u.stop()}).stopped}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(450),u=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{join:function join(t){var r=i(this),n=a(r),e=t===Tt?",":String(t),o=[];return u(n,o.push,o,!1,!0),o.join(e)}})},function(t,r,n){var e=n(2),o=n(23),a=n(34),u=n(20),c=n(59),f=n(58),s=n(137),l=n(450),h=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{map:function map(t){var r=u(this),n=l(r),e=f(t,1<arguments.length?arguments[1]:Tt,3),o=new(s(r,a("Set"))),i=c(o.add);return h(n,function(t){i.call(o,e(t,t,r))},Tt,!1,!0),o}})},function(t,r,n){n(2)({target:"Set",stat:!0},{of:n(409)})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(59),u=n(450),c=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{reduce:function reduce(r){var n=i(this),t=u(n),e=arguments.length<2,o=e?Tt:arguments[1];if(a(r),c(t,function(t){o=e?(e=!1,t):r(o,t,t,n)},Tt,!1,!0),e)throw TypeError("Reduce of empty set with no initial value");return o}})},function(t,r,n){var e=n(2),o=n(23),i=n(20),a=n(58),u=n(450),c=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{some:function some(t){var r=i(this),n=u(r),e=a(t,1<arguments.length?arguments[1]:Tt,3);return c(n,function(t){if(e(t,t,r))return c.stop()},Tt,!1,!0).stopped}})},function(t,r,n){var e=n(2),o=n(23),i=n(34),a=n(20),u=n(59),c=n(137
),f=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function symmetricDifference(t){var r=a(this),n=new(c(r,i("Set")))(r),e=u(n["delete"]),o=u(n.add);return f(t,function(t){e.call(n,t)||o.call(n,t)}),n}})},function(t,r,n){var e=n(2),o=n(23),i=n(34),a=n(20),u=n(59),c=n(137),f=n(158);e({target:"Set",proto:!0,real:!0,forced:o},{union:function union(t){var r=a(this),n=new(c(r,i("Set")))(r);return f(t,u(n.add),n),n}})},function(t,r,n){var e=n(2),o=n(267).charAt;e({target:"String",proto:!0},{at:function at(t){return o(this,t)}})},function(t,r,n){var e=n(2),o=n(106),i=n(12),a=n(27),u=n(267),c=u.codeAt,f=u.charAt,s="String Iterator",l=a.set,h=a.getterFor(s),p=o(function StringIterator(t){l(this,{type:s,string:t,index:0})},"String",function next(){var t,r=h(this),n=r.string,e=r.index;return n.length<=e?{value:Tt,done:!0}:(t=f(n,e),r.index+=t.length,{value:{codePoint:c(t,0),position:e},done:!1})});e({target:"String",proto:!0},{codePoints:function codePoints(){return new p(String(i(this)))}})},function(t,r,n){n(278)},function(t,r,n){var e=n(2),s=n(12),l=n(259),h=n(260),o=n(53),p=n(23),g=o("replace"),v=RegExp.prototype;e({target:"String",proto:!0},{replaceAll:function replaceAll(t,r){var n,e,o,i,a,u,c,f=s(this);if(null!=t){if((n=l(t))&&!~String(s("flags"in v?t.flags:h.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if((e=t[g])!==Tt)return e.call(t,f,r);if(p&&n)return String(f).replace(t,r)}if(o=String(f),i=String(t),a=o.split(i),"function"!=typeof r)return a.join(String(r));for(u=a[0],c=1;c<a.length;c++)u+=String(r(i,c-1,o)),u+=a[c];return u}})},function(t,r,n){n(55)("asyncDispose")},function(t,r,n){n(55)("dispose")},function(t,r,n){n(55)("observable")},function(t,r,n){n(55)("patternMatch")},function(t,r,n){n(55)("replaceAll")},function(t,r,n){var e=n(2),o=n(23),i=n(391);e({target:"WeakMap",proto:!0,real:!0,forced:o},{deleteAll:function deleteAll(){return i.apply(this,arguments)}})},function(t,r,n){n(2)({target:"WeakMap",stat:!0},{from:n(399)})},function(t,r,n){n(2)({target:"WeakMap",stat:!0},{of:n(409)})},function(t,r,n){n(2)({target:"WeakMap",proto:!0,real:!0,forced:n(23)},{upsert:n(414)})},function(t,r,n){var e=n(2),o=n(23),i=n(446);e({target:"WeakSet",proto:!0,real:!0,forced:o},{addAll:function addAll(){return i.apply(this,arguments)}})},function(t,r,n){var e=n(2),o=n(23),i=n(391);e({target:"WeakSet",proto:!0,real:!0,forced:o},{deleteAll:function deleteAll(){return i.apply(this,arguments)}})},function(t,r,n){n(2)({target:"WeakSet",stat:!0},{from:n(399)})},function(t,r,n){n(2)({target:"WeakSet",stat:!0},{of:n(409)})},function(t,r,n){var e=n(3),o=n(483),i=n(92),a=n(18);for(var u in o){var c=e[u],f=c&&c.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(s){f.forEach=i}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){var e=n(3),o=n(483),i=n(104),a=n(18),u=n(53),c=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var h=e[l],p=h&&h.prototype;if(p){if(p[c]!==s)try{a(p,c,s)}catch(v){p[c]=s}if(p[f]||a(p,f,l),o[l])for(var g in i)if(p[g]!==i[g])try{a(p,g,i[g])}catch(v){p[g]=i[g]}}}},function(t,r,n){var e=n(3),o=n(236),i=!e.setImmediate||!e.clearImmediate;n(2)({global:!0,bind:!0,enumerable:!0,forced:i},{setImmediate:o.set,clearImmediate:o.clear})},function(t,r,n){var e=n(2),o=n(3),i=n(238),a=n(11),u=o.process,c="process"==a(u);e({global:!0,enumerable:!0,noTargetGet:!0},{queueMicrotask:function queueMicrotask(t){var r=c&&u.domain;i(r?r.bind(t):t)}})},function(t,r,n){function HTa(o){return function(t,r){var n=2<arguments.length,e=n?a.call(arguments,2):Tt;return o(n?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,r)}}var e=n(2),o=n(3),i=n(237),a=[].slice;e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:HTa(o.setTimeout),setInterval:HTa(o.setInterval)})},function(t,r,n){n(273);function AUa(t,r){var n,e,o;if("["==r.charAt(0)){if("]"!=r.charAt(r.length-1))return M;if(!(n=B(r.slice(1,-1))))return M;t.host=n}else if(H(t)){if(r=h(r),F.test(r))return M;if(null===(n=C(r)))return M;t.host=n}else{if(L.test(r))return M;for(n="",e=S(r),o=0;o<e.length;o++)n+=Y(e[o],q);t.host=n}}function EUa(t){var r,n,e,o;if("number"==typeof t){for(r=[],n=0;n<4;n++)r.unshift(t%256),t=I(t/256);return r.join(".")}if("object"!=typeof t)return t;for(r="",e=function(t){for(var r=null,n=1,e=null,o=0,i=0;i<8;i++)0!==t[i]?(n<o&&(r=e,n=o),e=null,o=0):(null===e&&(e=i),++o);return n<o&&(r=e,n=o),r}(t),n=0;n<8;n++)o&&0===t[n]||(o=o&&!1,e===n?(r+=n?":":"::",o=!0):(r+=t[n].toString(16),n<7&&(r+=":")));return"["+r+"]"}function MUa(t){return""!=t.username||""!=t.password}function NUa(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme}function OUa(t,r){var n;return 2==t.length&&_.test(t.charAt(0))&&(":"==(n=t.charAt(1))||!r&&"|"==n)}function PUa(t){var r;return 1<t.length&&OUa(t.slice(0,2))&&(2==t.length||"/"===(r=t.charAt(2))||"\\"===r||"?"===r||"#"===r)}function QUa(t){var r=t.path,n=r.length;!n||"file"==t.scheme&&1==n&&OUa(r[0],!0)||r.pop()}function mVa(t,r,n,e){var o,i,a,u,c,f,s=n||K,l=0,h="",p=!1,g=!1,v=!1;for(n||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,r=r.replace(W,"")),r=r.replace(D,""),o=S(r);l<=o.length;){switch(i=o[l],s){case K:if(!i||!_.test(i)){if(n)return O;s=J;continue}h+=i.toLowerCase(),s=$;break;case $:if(i&&(P.test(i)||"+"==i||"-"==i||"."==i))h+=i.toLowerCase();else{if(":"!=i){if(n)return O;h="",s=J,l=0;continue}if(n&&(H(t)!=w(z,h)||"file"==h&&(MUa(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=h,n)return void(H(t)&&z[t.scheme]==t.port&&(t.port=null));h="","file"==t.scheme?s=ct:H(t)&&e&&e.scheme==t.scheme?s=X:H(t)?s=nt:"/"==o[l+1]?(s=Q,l++):(t.cannotBeABaseURL=!0,t.path.push(""),s=pt)}break;case J:if(!e||e.cannotBeABaseURL&&"#"!=i)return O;if(e.cannotBeABaseURL&&"#"==i){t.scheme=e.scheme,t.path=e.path.slice(),t.query=e.query,t.fragment="",t.cannotBeABaseURL=!0,s=vt;break}s="file"==e.scheme?ct:tt;continue;case X:if("/"!=i||"/"!=o[l+1]){s=tt;continue}s=et,l++;break;case Q:if("/"==i){s=ot;break}s=ht;continue;case tt:if(t.scheme=e.scheme,i==x)t.username=e.username,t.password=e.password,t.host=e.host,t.port=e.port,t.path=e.path.slice(),t.query=e.query;else if("/"==i||"\\"==i&&H(t))s=rt;else if("?"==i)t.username=e.username,t.password=e.password,t.host=e.host,t.port=e.port,t.path=e.path.slice(),t.query="",s=gt;else{if("#"!=i){t.username=e.username,t.password=e.password,t.host=e.host,t.port=e.port,t.path=e.path.slice(),t.path.pop(),s=ht;continue}t.username=e.username,t.password=e.password,t.host=e.host,t.port=e.port,t.path=e.path.slice(),t.query=e.query,t.fragment="",s=vt}break;case rt:if(!H(t)||"/"!=i&&"\\"!=i){if("/"!=i){t.username=e.username,t.password=e.password,t.host=e.host,t.port=e.port,s=ht;continue}s=ot}else s=et;break;case nt:if(s=et,"/"!=i||"/"!=h.charAt(l+1))continue;l++;break;case et:if("/"==i||"\\"==i)break;s=ot;continue;case ot:if("@"==i){p&&(h="%40"+h),p=!0,a=S(h);for(var y=0;y<a.length;y++){var d=a[y];if(":"!=d||v){var m=Y(d,Z);v?t.password+=m:t.username+=m}else v=!0}h=""}else if(i==x||"/"==i||"?"==i||"#"==i||"\\"==i&&H(t)){if(p&&""==h)return"Invalid authority";l-=S(h).length+1,h="",s=it}else h+=i;break;case it:case at:if(n&&"file"==t.scheme){s=st;continue}if(":"!=i||g){if(i==x||"/"==i||"?"==i||"#"==i||"\\"==i&&H(t)){if(H(t)&&""==h)return M;if(n&&""==h&&(MUa(t)||null!==t.port))return;if(u=AUa(t,h))return u;if(h="",s=lt,n)return;continue}"["==i?g=!0:"]"==i&&(g=!1),h+=i}else{if(""==h)return M;if(u=AUa(t,h))return u;if(h="",s=ut,n==at)return}break;case ut:if(!j.test(i)){if(i==x||"/"==i||"?"==i||"#"==i||"\\"==i&&H(t)||n){if(""!=h){var b=parseInt(h,10);if(65535<b)return R;t.port=H(t)&&b===z[t.scheme]?null:b,h=""}if(n)return;s=lt;continue}return R}h+=i;break;case ct:if(t.scheme="file","/"==i||"\\"==i)s=ft;else{if(!e||"file"!=e.scheme){s=ht;continue}if(i==x)t.host=e.host,t.path=e.path.slice(),t.query=e.query;else if("?"==i)t.host=e.host,t.path=e.path.slice(),t.query="",s=gt;else{if("#"!=i){PUa(o.slice(l).join(""))||(t.host=e.host,t.path=e.path.slice(),QUa(t)),s=ht;continue}t.host=e.host,t.path=e.path.slice(),t.query=e.query,t.fragment="",s=vt}}break;case ft:if("/"==i||"\\"==i){s=st;break}e&&"file"==e.scheme&&!PUa(o.slice(l).join(""))&&(OUa(e.path[0],!0)?t.path.push(e.path[0]):t.host=e.host),s=ht;continue;case st:if(i==x||"/"==i||"\\"==i||"?"==i||"#"==i){if(!n&&OUa(h))s=ht;else if(""==h){if(t.host="",n)return;s=lt}else{if(u=AUa(t,h))return u;if("localhost"==t.host&&(t.host=""),n)return;h="",s=lt}continue}h+=i;break;case lt:if(H(t)){if(s=ht,"/"!=i&&"\\"!=i)continue}else if(n||"?"!=i)if(n||"#"!=i){if(i!=x&&(s=ht,"/"!=i))continue}else t.fragment="",s=vt;else t.query="",s=gt;break;case ht:if(i==x||"/"==i||"\\"==i&&H(t)||!n&&("?"==i||"#"==i)){if(".."===(f=(f=h).toLowerCase())||"%2e."===f||".%2e"===f||"%2e%2e"===f?(QUa(t),"/"==i||"\\"==i&&H(t)||t.path.push("")):"."===(c=h)||"%2e"===c.toLowerCase()?"/"==i||"\\"==i&&H(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&OUa(h)&&(t.host&&(t.host=""),h=h.charAt(0)+":"),t.path.push(h)),h="","file"==t.scheme&&(i==x||"?"==i||"#"==i))for(;1<t.path.length&&""===t.path[0];)t.path.shift();"?"==i?(t.query="",s=gt):"#"==i&&(t.fragment="",s=vt)}else h+=Y(i,G);break;case pt:"?"==i?(t.query="",s=gt):"#"==i?(t.fragment="",s=vt):i!=x&&(t.path[0]+=Y(i,q));break;case gt:n||"#"!=i?i!=x&&("'"==i&&H(t)?t.query+="%27":t.query+="#"==i?"%23":Y(i,q)):(t.fragment="",s=vt);break;case vt:i!=x&&(t.fragment+=Y(i,V))}l++}}function BVa(t,r){return{get:t,set:r,configurable:!0,enumerable:!0}}var x,e=n(2),f=n(5),o=n(489),i=n(3),a=n(49),u=n(21),s=n(133),w=n(15),c=n(203),S=n(94),l=n(267).codeAt,h=n(490),p=n(56),g=n(491),v=n(27),y=i.URL,d=g.URLSearchParams,m=g.getState,b=v.set,A=v.getterFor("URL"),I=Math.floor,E=Math.pow,O="Invalid scheme",M="Invalid host",R="Invalid port",_=/[A-Za-z]/,P=/[\d+\-.A-Za-z]/,j=/\d/,T=/^(0x|0X)/,k=/^[0-7]+$/,U=/^\d+$/,N=/^[\dA-Fa-f]+$/,F=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,L=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,W=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\u0009\u000A\u000D]/g,C=function(t){var r,n,e,o,i,a,u,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),4<(r=c.length))return t;for(n=[],e=0;e<r;e++){if(""==(o=c[e]))return t;if(i=10,1<o.length&&"0"==o.charAt(0)&&(i=T.test(o)?16:8,o=o.slice(8==i?1:2)),""===o)a=0;else{if(!(10==i?U:8==i?k:N).test(o))return t;a=parseInt(o,i)}n.push(a)}for(e=0;e<r;e++)if(a=n[e],e==r-1){if(a>=E(256,5-r))return null}else if(255<a)return null;for(u=n.pop(),e=0;e<n.length;e++)u+=n[e]*E(256,3-e);return u},B=function(t){function cWa(){return t.charAt(l)}var r,n,e,o,i,a,u,c=[0,0,0,0,0,0,0,0],f=0,s=null,l=0;if(":"==cWa()){if(":"!=t.charAt(1))return;l+=2,s=++f}for(;cWa();){if(8==f)return;if(":"!=cWa()){for(r=n=0;n<4&&N.test(cWa());)r=16*r+parseInt(cWa(),16),l++,n++;if("."==cWa()){if(0==n)return;if(l-=n,6<f)return;for(e=0;cWa();){if(o=null,0<e){if(!("."==cWa()&&e<4))return;l++}if(!j.test(cWa()))return;for(;j.test(cWa());){if(i=parseInt(cWa(),10),null===o)o=i;else{if(0==o)return;o=10*o+i}if(255<o)return;l++}c[f]=256*c[f]+o,2!=++e&&4!=e||f++}if(4!=e)return;break}if(":"==cWa()){if(l++,!cWa())return}else if(cWa())return;c[f++]=r}else{if(null!==s)return;l++,s=++f}}if(null!==s)for(a=f-s,f=7;0!=f&&0<a;)u=c[f],c[f--]=c[s+a-1],c[s+--a]=u;else if(8!=f)return;return c},q={},V=c({},q,{" ":1,'"':1,"<":1,">":1,"`":1}),G=c({},V,{"#":1,"?":1,"{":1,"}":1}),Z=c({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Y=function(t,r){var n=l(t,0);return 32<n&&n<127&&!w(r,t)?t:encodeURIComponent(t)},z={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},H=function(t){return w(z,t.scheme)},K={},$={},J={},X={},Q={},tt={},rt={},nt={},et={},ot={},it={},at={},ut={},ct={},ft={},st={},lt={},ht={},pt={},gt={},vt={},yt=function URL(t){var r,n,e=s(this,yt,"URL"),o=1<arguments.length?arguments[1]:Tt,i=String(t),a=b(e,{type:"URL"});if(o!==Tt)if(o instanceof yt)r=A(o);else if(n=mVa(r={},String(o)))throw TypeError(n);if(n=mVa(a,i,null,r))throw TypeError(n);var u=a.searchParams=new d,c=m(u);c.updateSearchParams(a.query),c.updateURL=function(){a.query=String(u)||null},f||(e.href=mt.call(e),e.origin=bt.call(e),e.protocol=xt.call(e),e.username=wt.call(e),e.password=St.call(e),e.host=At.call(e),e.hostname=It.call(e),e.port=Et.call(e),e.pathname=Ot.call(e),e.search=Mt.call(e),e.searchParams=Rt.call(e),e.hash=_t.call(e))},dt=yt.prototype,mt=function(){var t=A(this),r=t.scheme,n=t.username,e=t.password,o=t.host,i=t.port,a=t.path,u=t.query,c=t.fragment,f=r+":";return null!==o?(f+="//",MUa(t)&&(f+=n+(e?":"+e:"")+"@"),f+=EUa(o),null!==i&&(f+=":"+i)):"file"==r&&(f+="//"),f+=t.cannotBeABaseURL?a[0]:a.length?"/"+a.join("/"):"",null!==u&&(f+="?"+u),null!==c&&(f+="#"+c),f},bt=function(){var t=A(this),r=t.scheme,n=t.port;if("blob"==r)try{return new URL(r.path[0]).origin}catch(e){return"null"}return"file"!=r&&H(t)?r+"://"+EUa(t.host)+(null!==n?":"+n:""):"null"},xt=function(){return A(this).scheme+":"},wt=function(){return A(this).username},St=function(){return A(this).password},At=function(){var t=A(this),r=t.host,n=t.port;return null===r?"":null===n?EUa(r):EUa(r)+":"+n},It=function(){var t=A(this).host;return null===t?"":EUa(t)},Et=function(){var t=A(this).port;return null===t?"":String(t)},Ot=function(){var t=A(this),r=t.path;return t.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):""},Mt=function(){var t=A(this).query;return t?"?"+t:""},Rt=function(){return A(this).searchParams},_t=function(){var t=A(this).fragment;return t?"#"+t:""};if(f&&a(dt,{href:BVa(mt,function(t){var r=A(this),n=String(t),e=mVa(r,n);if(e)throw TypeError(e);m(r.searchParams).updateSearchParams(r.query)}),origin:BVa(bt),protocol:BVa(xt,function(t){var r=A(this);mVa(r,String(t)+":",K)}),username:BVa(wt,function(t){var r=A(this),n=S(String(t));if(!NUa(r)){r.username="";for(var e=0;e<n.length;e++)r.username+=Y(n[e],Z)}}),password:BVa(St,function(t){var r=A(this),n=S(String(t));if(!NUa(r)){r.password="";for(var e=0;e<n.length;e++)r.password+=Y(n[e],Z)}}),host:BVa(At,function(t){var r=A(this);r.cannotBeABaseURL||mVa(r,String(t),it)}),hostname:BVa(It,function(t){var r=A(this);r.cannotBeABaseURL||mVa(r,String(t),at)}),port:BVa(Et,function(t){var r=A(this);NUa(r)||(""==(t=String(t))?r.port=null:mVa(r,t,ut))}),pathname:BVa(Ot,function(t){var r=A(this);r.cannotBeABaseURL||(r.path=[],mVa(r,t+"",lt))}),search:BVa(Mt,function(t){var r=A(this);""==(t=String(t))?r.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),r.query="",mVa(r,t,gt)),m(r.searchParams).updateSearchParams(r.query)}),searchParams:BVa(Rt),hash:BVa(_t,function(t){var r=A(this);""!=(t=String(t))?("#"==t.charAt(0)&&(t=t.slice(1)),r.fragment="",mVa(r,t,vt)):r.fragment=null})}),u(dt,"toJSON",function toJSON(){return mt.call(this)},{enumerable:!0}),u(dt,"toString",function toString(){return mt.call(this)},{enumerable:!0}),y){var Pt=y.createObjectURL,jt=y.revokeObjectURL;Pt&&u(yt,"createObjectURL",function createObjectURL(t){return Pt.apply(y,arguments)}),jt&&u(yt,"revokeObjectURL",function revokeObjectURL(t){return jt.apply(y,arguments)})}p(yt,"URL"),e({global:!0,forced:!o,sham:!f},{URL:yt})},function(t,r,n){var e=n(6),o=n(53),i=n(23),a=o("iterator");t.exports=!e(function(){var t=new URL("b?a=1&b=2&c=3","http://a"),n=t.searchParams,e="";return t.pathname="c%20d",n.forEach(function(t,r){n["delete"]("b"),e+=r+t}),i&&!t.toJSON||!n.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==n.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!n[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==e||"x"!==new URL("http://x",Tt).host})},function(t,r,n){function IYa(t){return t+22+75*(t<26)}function JYa(t,r,n){var e=0;for(t=n?b(t/700):t>>1,t+=b(t/r);455<t;e+=36)t=b(t/35);return b(e+36*t/(t+38))}function KYa(t){var r,n,e=[],o=(t=function(t){for(var r=[],n=0,e=t.length;n<e;){var o=t.charCodeAt(n++);if(55296<=o&&o<=56319&&n<e){var i=t.charCodeAt(n++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),n--)}else r.push(o)}return r}(t)).length,i=128,a=0,u=72;for(r=0;r<t.length;r++)(n=t[r])<128&&e.push(x(n));var c=e.length,f=c;for(c&&e.push("-");f<o;){var s=d;for(r=0;r<t.length;r++)i<=(n=t[r])&&n<s&&(s=n);var l=f+1;if(s-i>b((d-a)/l))throw RangeError(m);for(a+=(s-i)*l,i=s,r=0;r<t.length;r++){if((n=t[r])<i&&++a>d)throw RangeError(m);if(n==i){for(var h=a,p=36;;p+=36){var g=p<=u?1:u+26<=p?26:p-u;if(h<g)break;var v=h-g,y=36-g;e.push(x(IYa(g+v%y))),h=b(v/y)}e.push(x(IYa(h))),u=JYa(a,l,f==c),a=0,++f}}++a,++i}return e.join("")}var d=2147483647,i=/[^\0-\u007E]/,a=/[.\u3002\uFF0E\uFF61]/g,m="Overflow: input needs wider integers to process",b=Math.floor,x=String.fromCharCode;t.exports=function(t){var r,n,e=[],o=t.toLowerCase().replace(a,".").split(".");for(r=0;r<o.length;r++)e.push(i.test(n=o[r])?"xn--"+KYa(n):n);return e.join(".")}},function(t,r,n){n(104);function RZa(t){try{return decodeURIComponent(t)}catch(r){return t}}function SZa(t){var r,n=t.replace(A," "),e=4;try{return decodeURIComponent(n)}catch(o){for(;e;)n=n.replace((r=e--,I[r-1]||(I[r-1]=RegExp("((?:%[\\da-f]{2}){"+r+"})","gi"))),RZa);return n}}function VZa(t){return O[t]}function WZa(t){return encodeURIComponent(t).replace(E,VZa)}function XZa(t,r){if(r)for(var n,e,o=r.split("&"),i=0;i<o.length;)(n=o[i++]).length&&(e=n.split("="),t.push({key:SZa(e.shift()),value:SZa(e.join("="))}))}function YZa(t){this.entries.length=0,XZa(this.entries,t)}function ZZa(t,r){if(t<r)throw TypeError("Not enough arguments")}var e=n(2),o=n(489),i=n(21),a=n(132),u=n(56),c=n(106),f=n(27),l=n(133),h=n(15),s=n(58),p=n(20),g=n(14),v=n(394),y=n(98),d=n(53)("iterator"),m="URLSearchParams",b=m+"Iterator",x=f.set,w=f.getterFor(m),S=f.getterFor(b),A=/\+/g,I=Array(4),E=/[!'()~]|%20/g,O={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},M=c(function Iterator(t,r){x(this,{type:b,iterator:v(w(t).entries),kind:r})},"Iterator",function next(){var t=S(this),r=t.kind,n=t.iterator.next(),e=n.value;return n.done||(n.value="keys"===r?e.key:"values"===r?e.value:[e.key,e.value]),n}),R=function URLSearchParams(){l(this,R,m);var t,r,n,e,o,i,a,u,c,f=0<arguments.length?arguments[0]:Tt,s=[];if(x(this,{type:m,entries:s,updateURL:function(){},updateSearchParams:YZa}),f!==Tt)if(g(f))if("function"==typeof(t=y(f)))for(n=(r=t.call(f)).next;!(e=n.call(r)).done;){if((a=(i=(o=v(p(e.value))).next).call(o)).done||(u=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");s.push({key:a.value+"",value:u.value+""})}else for(c in f)h(f,c)&&s.push({key:c,value:f[c]+""});else XZa(s,"string"==typeof f?"?"===f.charAt(0)?f.slice(1):f:f+"")},_=R.prototype;a(_,{append:function append(t,r){ZZa(arguments.length,2);var n=w(this);n.entries.push({key:t+"",value:r+""}),n.updateURL()},"delete":function(t){ZZa(arguments.length,1);for(var r=w(this),n=r.entries,e=t+"",o=0;o<n.length;)n[o].key===e?n.splice(o,1):o++;r.updateURL()},get:function get(t){ZZa(arguments.length,1);for(var r=w(this).entries,n=t+"",e=0;e<r.length;e++)if(r[e].key===n)return r[e].value;return null},getAll:function getAll(t){ZZa(arguments.length,1);for(var r=w(this).entries,n=t+"",e=[],o=0;o<r.length;o++)r[o].key===n&&e.push(r[o].value);return e},has:function has(t){ZZa(arguments.length,1);for(var r=w(this).entries,n=t+"",e=0;e<r.length;)if(r[e++].key===n)return!0;return!1},set:function set(t,r){ZZa(arguments.length,1);for(var n,e=w(this),o=e.entries,i=!1,a=t+"",u=r+"",c=0;c<o.length;c++)(n=o[c]).key===a&&(i?o.splice(c--,1):(i=!0,n.value=u));i||o.push({key:a,value:u}),e.updateURL()},sort:function sort(){var t,r,n,e=w(this),o=e.entries,i=o.slice();for(n=o.length=0;n<i.length;n++){for(t=i[n],r=0;r<n;r++)if(t.key<o[r].key){o.splice(r,0,t);break}r===n&&o.push(t)}e.updateURL()},forEach:function forEach(t){for(var r,n=w(this).entries,e=s(t,1<arguments.length?arguments[1]:Tt,3),o=0;o<n.length;)e((r=n[o++]).value,r.key,this)},keys:function keys(){return new M(this,"keys")},values:function values(){return new M(this,"values")},entries:function entries(){return new M(this,"entries")}},{enumerable:!0}),i(_,d,_.entries),i(_,"toString",function toString(){for(var t,r=w(this).entries,n=[],e=0;e<r.length;)t=r[e++],n.push(WZa(t.key)+"="+WZa(t.value));return n.join("&")},{enumerable:!0}),u(R,m),e({global:!0,forced:!o},{URLSearchParams:R}),t.exports={URLSearchParams:R,getState:w}},function(t,r,n){n(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function toJSON(){return URL.prototype.toString.call(this)}})}],__webpack_require__.c=e,__webpack_require__.d=function(t,r,n){__webpack_require__.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},__webpack_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(r,t){if(1&t&&(r=__webpack_require__(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var e in r)__webpack_require__.d(n,e,function(t){return r[t]}.bind(null,e));return n},__webpack_require__.n=function(t){var r=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}();

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSZip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var utils = require("./utils");
var support = require("./support");
// private property
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";


// public method for encoding
exports.encode = function(input) {
    var output = [];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0, len = input.length, remainingBytes = len;

    var isArray = utils.getTypeOf(input) !== "string";
    while (i < input.length) {
        remainingBytes = len - i;

        if (!isArray) {
            chr1 = input.charCodeAt(i++);
            chr2 = i < len ? input.charCodeAt(i++) : 0;
            chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
            chr1 = input[i++];
            chr2 = i < len ? input[i++] : 0;
            chr3 = i < len ? input[i++] : 0;
        }

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = remainingBytes > 1 ? (((chr2 & 15) << 2) | (chr3 >> 6)) : 64;
        enc4 = remainingBytes > 2 ? (chr3 & 63) : 64;

        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));

    }

    return output.join("");
};

// public method for decoding
exports.decode = function(input) {
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0, resultIndex = 0;

    var dataUrlPrefix = "data:";

    if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        // This is a common error: people give a data url
        // (data:image/png;base64,iVBOR...) with a {base64: true} and
        // wonders why things don't work.
        // We can detect that the string input looks like a data url but we
        // *can't* be sure it is one: removing everything up to the comma would
        // be too dangerous.
        throw new Error("Invalid base64 input, it looks like a data url.");
    }

    input = input.replace(/[^A-Za-z0-9+/=]/g, "");

    var totalLength = input.length * 3 / 4;
    if(input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if(input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
    }
    if (totalLength % 1 !== 0) {
        // totalLength is not an integer, the length does not match a valid
        // base64 content. That can happen if:
        // - the input is not a base64 content
        // - the input is *almost* a base64 content, with a extra chars at the
        //   beginning or at the end
        // - the input uses a base64 variant (base64url for example)
        throw new Error("Invalid base64 input, bad content length.");
    }
    var output;
    if (support.uint8array) {
        output = new Uint8Array(totalLength|0);
    } else {
        output = new Array(totalLength|0);
    }

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output[resultIndex++] = chr1;

        if (enc3 !== 64) {
            output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
            output[resultIndex++] = chr3;
        }

    }

    return output;
};

},{"./support":30,"./utils":32}],2:[function(require,module,exports){
"use strict";

var external = require("./external");
var DataWorker = require("./stream/DataWorker");
var Crc32Probe = require("./stream/Crc32Probe");
var DataLengthProbe = require("./stream/DataLengthProbe");

/**
 * Represent a compressed object, with everything needed to decompress it.
 * @constructor
 * @param {number} compressedSize the size of the data compressed.
 * @param {number} uncompressedSize the size of the data after decompression.
 * @param {number} crc32 the crc32 of the decompressed file.
 * @param {object} compression the type of compression, see lib/compressions.js.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the compressed data.
 */
function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
    this.compressedSize = compressedSize;
    this.uncompressedSize = uncompressedSize;
    this.crc32 = crc32;
    this.compression = compression;
    this.compressedContent = data;
}

CompressedObject.prototype = {
    /**
     * Create a worker to get the uncompressed content.
     * @return {GenericWorker} the worker.
     */
    getContentWorker: function () {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent))
            .pipe(this.compression.uncompressWorker())
            .pipe(new DataLengthProbe("data_length"));

        var that = this;
        worker.on("end", function () {
            if (this.streamInfo["data_length"] !== that.uncompressedSize) {
                throw new Error("Bug : uncompressed data size mismatch");
            }
        });
        return worker;
    },
    /**
     * Create a worker to get the compressed content.
     * @return {GenericWorker} the worker.
     */
    getCompressedWorker: function () {
        return new DataWorker(external.Promise.resolve(this.compressedContent))
            .withStreamInfo("compressedSize", this.compressedSize)
            .withStreamInfo("uncompressedSize", this.uncompressedSize)
            .withStreamInfo("crc32", this.crc32)
            .withStreamInfo("compression", this.compression)
        ;
    }
};

/**
 * Chain the given worker with other workers to compress the content with the
 * given compression.
 * @param {GenericWorker} uncompressedWorker the worker to pipe.
 * @param {Object} compression the compression object.
 * @param {Object} compressionOptions the options to use when compressing.
 * @return {GenericWorker} the new worker compressing the content.
 */
CompressedObject.createWorkerFrom = function (uncompressedWorker, compression, compressionOptions) {
    return uncompressedWorker
        .pipe(new Crc32Probe())
        .pipe(new DataLengthProbe("uncompressedSize"))
        .pipe(compression.compressWorker(compressionOptions))
        .pipe(new DataLengthProbe("compressedSize"))
        .withStreamInfo("compression", compression);
};

module.exports = CompressedObject;

},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(require,module,exports){
"use strict";

var GenericWorker = require("./stream/GenericWorker");

exports.STORE = {
    magic: "\x00\x00",
    compressWorker : function () {
        return new GenericWorker("STORE compression");
    },
    uncompressWorker : function () {
        return new GenericWorker("STORE decompression");
    }
};
exports.DEFLATE = require("./flate");

},{"./flate":7,"./stream/GenericWorker":28}],4:[function(require,module,exports){
"use strict";

var utils = require("./utils");

/**
 * The following functions come from pako, from pako/lib/zlib/crc32.js
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Use ordinary array, since untyped makes no boost here
function makeTable() {
    var c, table = [];

    for(var n =0; n < 256; n++){
        c = n;
        for(var k =0; k < 8; k++){
            c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        }
        table[n] = c;
    }

    return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

// That's all for the pako functions.

/**
 * Compute the crc32 of a string.
 * This is almost the same as the function crc32, but for strings. Using the
 * same function for the two use cases leads to horrible performances.
 * @param {Number} crc the starting value of the crc.
 * @param {String} str the string to use.
 * @param {Number} len the length of the string.
 * @param {Number} pos the starting position for the crc32 computation.
 * @return {Number} the computed crc32.
 */
function crc32str(crc, str, len, pos) {
    var t = crcTable, end = pos + len;

    crc = crc ^ (-1);

    for (var i = pos; i < end; i++ ) {
        crc = (crc >>> 8) ^ t[(crc ^ str.charCodeAt(i)) & 0xFF];
    }

    return (crc ^ (-1)); // >>> 0;
}

module.exports = function crc32wrapper(input, crc) {
    if (typeof input === "undefined" || !input.length) {
        return 0;
    }

    var isArray = utils.getTypeOf(input) !== "string";

    if(isArray) {
        return crc32(crc|0, input, input.length, 0);
    } else {
        return crc32str(crc|0, input, input.length, 0);
    }
};

},{"./utils":32}],5:[function(require,module,exports){
"use strict";
exports.base64 = false;
exports.binary = false;
exports.dir = false;
exports.createFolders = true;
exports.date = null;
exports.compression = null;
exports.compressionOptions = null;
exports.comment = null;
exports.unixPermissions = null;
exports.dosPermissions = null;

},{}],6:[function(require,module,exports){
"use strict";

// load the global object first:
// - it should be better integrated in the system (unhandledRejection in node)
// - the environment may have a custom Promise implementation (see zone.js)
var ES6Promise = null;
if (typeof Promise !== "undefined") {
    ES6Promise = Promise;
} else {
    ES6Promise = require("lie");
}

/**
 * Let the user use/change some implementations.
 */
module.exports = {
    Promise: ES6Promise
};

},{"lie":37}],7:[function(require,module,exports){
"use strict";
var USE_TYPEDARRAY = (typeof Uint8Array !== "undefined") && (typeof Uint16Array !== "undefined") && (typeof Uint32Array !== "undefined");

var pako = require("pako");
var utils = require("./utils");
var GenericWorker = require("./stream/GenericWorker");

var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";

exports.magic = "\x08\x00";

/**
 * Create a worker that uses pako to inflate/deflate.
 * @constructor
 * @param {String} action the name of the pako function to call : either "Deflate" or "Inflate".
 * @param {Object} options the options to use when (de)compressing.
 */
function FlateWorker(action, options) {
    GenericWorker.call(this, "FlateWorker/" + action);

    this._pako = null;
    this._pakoAction = action;
    this._pakoOptions = options;
    // the `meta` object from the last chunk received
    // this allow this worker to pass around metadata
    this.meta = {};
}

utils.inherits(FlateWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
FlateWorker.prototype.processChunk = function (chunk) {
    this.meta = chunk.meta;
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
};

/**
 * @see GenericWorker.flush
 */
FlateWorker.prototype.flush = function () {
    GenericWorker.prototype.flush.call(this);
    if (this._pako === null) {
        this._createPako();
    }
    this._pako.push([], true);
};
/**
 * @see GenericWorker.cleanUp
 */
FlateWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this._pako = null;
};

/**
 * Create the _pako object.
 * TODO: lazy-loading this object isn't the best solution but it's the
 * quickest. The best solution is to lazy-load the worker list. See also the
 * issue #446.
 */
FlateWorker.prototype._createPako = function () {
    this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1 // default compression
    });
    var self = this;
    this._pako.onData = function(data) {
        self.push({
            data : data,
            meta : self.meta
        });
    };
};

exports.compressWorker = function (compressionOptions) {
    return new FlateWorker("Deflate", compressionOptions);
};
exports.uncompressWorker = function () {
    return new FlateWorker("Inflate", {});
};

},{"./stream/GenericWorker":28,"./utils":32,"pako":38}],8:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("../stream/GenericWorker");
var utf8 = require("../utf8");
var crc32 = require("../crc32");
var signature = require("../signature");

/**
 * Transform an integer into a string in hexadecimal.
 * @private
 * @param {number} dec the number to convert.
 * @param {number} bytes the number of bytes to generate.
 * @returns {string} the result.
 */
var decToHex = function(dec, bytes) {
    var hex = "", i;
    for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 0xff);
        dec = dec >>> 8;
    }
    return hex;
};

/**
 * Generate the UNIX part of the external file attributes.
 * @param {Object} unixPermissions the unix permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * adapted from http://unix.stackexchange.com/questions/14705/the-zip-formats-external-file-attribute :
 *
 * TTTTsstrwxrwxrwx0000000000ADVSHR
 * ^^^^____________________________ file type, see zipinfo.c (UNX_*)
 *     ^^^_________________________ setuid, setgid, sticky
 *        ^^^^^^^^^________________ permissions
 *                 ^^^^^^^^^^______ not used ?
 *                           ^^^^^^ DOS attribute bits : Archive, Directory, Volume label, System file, Hidden, Read only
 */
var generateUnixExternalFileAttr = function (unixPermissions, isDir) {

    var result = unixPermissions;
    if (!unixPermissions) {
        // I can't use octal values in strict mode, hence the hexa.
        //  040775 => 0x41fd
        // 0100664 => 0x81b4
        result = isDir ? 0x41fd : 0x81b4;
    }
    return (result & 0xFFFF) << 16;
};

/**
 * Generate the DOS part of the external file attributes.
 * @param {Object} dosPermissions the dos permissions or null.
 * @param {Boolean} isDir true if the entry is a directory, false otherwise.
 * @return {Number} a 32 bit integer.
 *
 * Bit 0     Read-Only
 * Bit 1     Hidden
 * Bit 2     System
 * Bit 3     Volume Label
 * Bit 4     Directory
 * Bit 5     Archive
 */
var generateDosExternalFileAttr = function (dosPermissions) {
    // the dir flag is already set for compatibility
    return (dosPermissions || 0)  & 0x3F;
};

/**
 * Generate the various parts used in the construction of the final zip file.
 * @param {Object} streamInfo the hash with information about the compressed file.
 * @param {Boolean} streamedContent is the content streamed ?
 * @param {Boolean} streamingEnded is the stream finished ?
 * @param {number} offset the current offset from the start of the zip file.
 * @param {String} platform let's pretend we are this platform (change platform dependents fields)
 * @param {Function} encodeFileName the function to encode the file name / comment.
 * @return {Object} the zip parts.
 */
var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
    var file = streamInfo["file"],
        compression = streamInfo["compression"],
        useCustomEncoding = encodeFileName !== utf8.utf8encode,
        encodedFileName = utils.transformTo("string", encodeFileName(file.name)),
        utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)),
        comment = file.comment,
        encodedComment = utils.transformTo("string", encodeFileName(comment)),
        utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)),
        useUTF8ForFileName = utfEncodedFileName.length !== file.name.length,
        useUTF8ForComment = utfEncodedComment.length !== comment.length,
        dosTime,
        dosDate,
        extraFields = "",
        unicodePathExtraField = "",
        unicodeCommentExtraField = "",
        dir = file.dir,
        date = file.date;


    var dataInfo = {
        crc32 : 0,
        compressedSize : 0,
        uncompressedSize : 0
    };

    // if the content is streamed, the sizes/crc32 are only available AFTER
    // the end of the stream.
    if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo["crc32"];
        dataInfo.compressedSize = streamInfo["compressedSize"];
        dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
    }

    var bitflag = 0;
    if (streamedContent) {
        // Bit 3: the sizes/crc32 are set to zero in the local header.
        // The correct values are put in the data descriptor immediately
        // following the compressed data.
        bitflag |= 0x0008;
    }
    if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        // Bit 11: Language encoding flag (EFS).
        bitflag |= 0x0800;
    }


    var extFileAttr = 0;
    var versionMadeBy = 0;
    if (dir) {
        // dos or unix, we set the dos dir flag
        extFileAttr |= 0x00010;
    }
    if(platform === "UNIX") {
        versionMadeBy = 0x031E; // UNIX, version 3.0
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
    } else { // DOS or other, fallback to DOS
        versionMadeBy = 0x0014; // DOS, version 2.0
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
    }

    // date
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/52/13.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/65/16.html
    // @see http://www.delorie.com/djgpp/doc/rbinter/it/66/16.html

    dosTime = date.getUTCHours();
    dosTime = dosTime << 6;
    dosTime = dosTime | date.getUTCMinutes();
    dosTime = dosTime << 5;
    dosTime = dosTime | date.getUTCSeconds() / 2;

    dosDate = date.getUTCFullYear() - 1980;
    dosDate = dosDate << 4;
    dosDate = dosDate | (date.getUTCMonth() + 1);
    dosDate = dosDate << 5;
    dosDate = dosDate | date.getUTCDate();

    if (useUTF8ForFileName) {
        // set the unicode path extra field. unzip needs at least one extra
        // field to correctly handle unicode path, so using the path is as good
        // as any other information. This could improve the situation with
        // other archive managers too.
        // This field is usually used without the utf8 flag, with a non
        // unicode path in the header (winrar, winzip). This helps (a bit)
        // with the messy Windows' default compressed folders feature but
        // breaks on p7zip which doesn't seek the unicode path extra field.
        // So for now, UTF-8 everywhere !
        unicodePathExtraField =
            // Version
            decToHex(1, 1) +
            // NameCRC32
            decToHex(crc32(encodedFileName), 4) +
            // UnicodeName
            utfEncodedFileName;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x70" +
            // size
            decToHex(unicodePathExtraField.length, 2) +
            // content
            unicodePathExtraField;
    }

    if(useUTF8ForComment) {

        unicodeCommentExtraField =
            // Version
            decToHex(1, 1) +
            // CommentCRC32
            decToHex(crc32(encodedComment), 4) +
            // UnicodeName
            utfEncodedComment;

        extraFields +=
            // Info-ZIP Unicode Path Extra Field
            "\x75\x63" +
            // size
            decToHex(unicodeCommentExtraField.length, 2) +
            // content
            unicodeCommentExtraField;
    }

    var header = "";

    // version needed to extract
    header += "\x0A\x00";
    // general purpose bit flag
    header += decToHex(bitflag, 2);
    // compression method
    header += compression.magic;
    // last mod file time
    header += decToHex(dosTime, 2);
    // last mod file date
    header += decToHex(dosDate, 2);
    // crc-32
    header += decToHex(dataInfo.crc32, 4);
    // compressed size
    header += decToHex(dataInfo.compressedSize, 4);
    // uncompressed size
    header += decToHex(dataInfo.uncompressedSize, 4);
    // file name length
    header += decToHex(encodedFileName.length, 2);
    // extra field length
    header += decToHex(extraFields.length, 2);


    var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;

    var dirRecord = signature.CENTRAL_FILE_HEADER +
        // version made by (00: DOS)
        decToHex(versionMadeBy, 2) +
        // file header (common to file and central directory)
        header +
        // file comment length
        decToHex(encodedComment.length, 2) +
        // disk number start
        "\x00\x00" +
        // internal file attributes TODO
        "\x00\x00" +
        // external file attributes
        decToHex(extFileAttr, 4) +
        // relative offset of local header
        decToHex(offset, 4) +
        // file name
        encodedFileName +
        // extra field
        extraFields +
        // file comment
        encodedComment;

    return {
        fileRecord: fileRecord,
        dirRecord: dirRecord
    };
};

/**
 * Generate the EOCD record.
 * @param {Number} entriesCount the number of entries in the zip file.
 * @param {Number} centralDirLength the length (in bytes) of the central dir.
 * @param {Number} localDirLength the length (in bytes) of the local dir.
 * @param {String} comment the zip file comment as a binary string.
 * @param {Function} encodeFileName the function to encode the comment.
 * @return {String} the EOCD record.
 */
var generateCentralDirectoryEnd = function (entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
    var dirEnd = "";
    var encodedComment = utils.transformTo("string", encodeFileName(comment));

    // end of central dir signature
    dirEnd = signature.CENTRAL_DIRECTORY_END +
        // number of this disk
        "\x00\x00" +
        // number of the disk with the start of the central directory
        "\x00\x00" +
        // total number of entries in the central directory on this disk
        decToHex(entriesCount, 2) +
        // total number of entries in the central directory
        decToHex(entriesCount, 2) +
        // size of the central directory   4 bytes
        decToHex(centralDirLength, 4) +
        // offset of start of central directory with respect to the starting disk number
        decToHex(localDirLength, 4) +
        // .ZIP file comment length
        decToHex(encodedComment.length, 2) +
        // .ZIP file comment
        encodedComment;

    return dirEnd;
};

/**
 * Generate data descriptors for a file entry.
 * @param {Object} streamInfo the hash generated by a worker, containing information
 * on the file entry.
 * @return {String} the data descriptors.
 */
var generateDataDescriptors = function (streamInfo) {
    var descriptor = "";
    descriptor = signature.DATA_DESCRIPTOR +
        // crc-32                          4 bytes
        decToHex(streamInfo["crc32"], 4) +
        // compressed size                 4 bytes
        decToHex(streamInfo["compressedSize"], 4) +
        // uncompressed size               4 bytes
        decToHex(streamInfo["uncompressedSize"], 4);

    return descriptor;
};


/**
 * A worker to concatenate other workers to create a zip file.
 * @param {Boolean} streamFiles `true` to stream the content of the files,
 * `false` to accumulate it.
 * @param {String} comment the comment to use.
 * @param {String} platform the platform to use, "UNIX" or "DOS".
 * @param {Function} encodeFileName the function to encode file names and comments.
 */
function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
    GenericWorker.call(this, "ZipFileWorker");
    // The number of bytes written so far. This doesn't count accumulated chunks.
    this.bytesWritten = 0;
    // The comment of the zip file
    this.zipComment = comment;
    // The platform "generating" the zip file.
    this.zipPlatform = platform;
    // the function to encode file names and comments.
    this.encodeFileName = encodeFileName;
    // Should we stream the content of the files ?
    this.streamFiles = streamFiles;
    // If `streamFiles` is false, we will need to accumulate the content of the
    // files to calculate sizes / crc32 (and write them *before* the content).
    // This boolean indicates if we are accumulating chunks (it will change a lot
    // during the lifetime of this worker).
    this.accumulate = false;
    // The buffer receiving chunks when accumulating content.
    this.contentBuffer = [];
    // The list of generated directory records.
    this.dirRecords = [];
    // The offset (in bytes) from the beginning of the zip file for the current source.
    this.currentSourceOffset = 0;
    // The total number of entries in this zip file.
    this.entriesCount = 0;
    // the name of the file currently being added, null when handling the end of the zip file.
    // Used for the emitted metadata.
    this.currentFile = null;



    this._sources = [];
}
utils.inherits(ZipFileWorker, GenericWorker);

/**
 * @see GenericWorker.push
 */
ZipFileWorker.prototype.push = function (chunk) {

    var currentFilePercent = chunk.meta.percent || 0;
    var entriesCount = this.entriesCount;
    var remainingFiles = this._sources.length;

    if(this.accumulate) {
        this.contentBuffer.push(chunk);
    } else {
        this.bytesWritten += chunk.data.length;

        GenericWorker.prototype.push.call(this, {
            data : chunk.data,
            meta : {
                currentFile : this.currentFile,
                percent : entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
            }
        });
    }
};

/**
 * The worker started a new source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the new source.
 */
ZipFileWorker.prototype.openedSource = function (streamInfo) {
    this.currentSourceOffset = this.bytesWritten;
    this.currentFile = streamInfo["file"].name;

    var streamedContent = this.streamFiles && !streamInfo["file"].dir;

    // don't stream folders (because they don't have any content)
    if(streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
    } else {
        // we need to wait for the whole file before pushing anything
        this.accumulate = true;
    }
};

/**
 * The worker finished a source (an other worker).
 * @param {Object} streamInfo the streamInfo object from the finished source.
 */
ZipFileWorker.prototype.closedSource = function (streamInfo) {
    this.accumulate = false;
    var streamedContent = this.streamFiles && !streamInfo["file"].dir;
    var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);

    this.dirRecords.push(record.dirRecord);
    if(streamedContent) {
        // after the streamed file, we put data descriptors
        this.push({
            data : generateDataDescriptors(streamInfo),
            meta : {percent:100}
        });
    } else {
        // the content wasn't streamed, we need to push everything now
        // first the file record, then the content
        this.push({
            data : record.fileRecord,
            meta : {percent:0}
        });
        while(this.contentBuffer.length) {
            this.push(this.contentBuffer.shift());
        }
    }
    this.currentFile = null;
};

/**
 * @see GenericWorker.flush
 */
ZipFileWorker.prototype.flush = function () {

    var localDirLength = this.bytesWritten;
    for(var i = 0; i < this.dirRecords.length; i++) {
        this.push({
            data : this.dirRecords[i],
            meta : {percent:100}
        });
    }
    var centralDirLength = this.bytesWritten - localDirLength;

    var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);

    this.push({
        data : dirEnd,
        meta : {percent:100}
    });
};

/**
 * Prepare the next source to be read.
 */
ZipFileWorker.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift();
    this.openedSource(this.previous.streamInfo);
    if (this.isPaused) {
        this.previous.pause();
    } else {
        this.previous.resume();
    }
};

/**
 * @see GenericWorker.registerPrevious
 */
ZipFileWorker.prototype.registerPrevious = function (previous) {
    this._sources.push(previous);
    var self = this;

    previous.on("data", function (chunk) {
        self.processChunk(chunk);
    });
    previous.on("end", function () {
        self.closedSource(self.previous.streamInfo);
        if(self._sources.length) {
            self.prepareNextSource();
        } else {
            self.end();
        }
    });
    previous.on("error", function (e) {
        self.error(e);
    });
    return this;
};

/**
 * @see GenericWorker.resume
 */
ZipFileWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
    }
    if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
    }
};

/**
 * @see GenericWorker.error
 */
ZipFileWorker.prototype.error = function (e) {
    var sources = this._sources;
    if(!GenericWorker.prototype.error.call(this, e)) {
        return false;
    }
    for(var i = 0; i < sources.length; i++) {
        try {
            sources[i].error(e);
        } catch(e) {
            // the `error` exploded, nothing to do
        }
    }
    return true;
};

/**
 * @see GenericWorker.lock
 */
ZipFileWorker.prototype.lock = function () {
    GenericWorker.prototype.lock.call(this);
    var sources = this._sources;
    for(var i = 0; i < sources.length; i++) {
        sources[i].lock();
    }
};

module.exports = ZipFileWorker;

},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(require,module,exports){
"use strict";

var compressions = require("../compressions");
var ZipFileWorker = require("./ZipFileWorker");

/**
 * Find the compression to use.
 * @param {String} fileCompression the compression defined at the file level, if any.
 * @param {String} zipCompression the compression defined at the load() level.
 * @return {Object} the compression object to use.
 */
var getCompression = function (fileCompression, zipCompression) {

    var compressionName = fileCompression || zipCompression;
    var compression = compressions[compressionName];
    if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
    }
    return compression;
};

/**
 * Create a worker to generate a zip file.
 * @param {JSZip} zip the JSZip instance at the right root level.
 * @param {Object} options to generate the zip file.
 * @param {String} comment the comment to use.
 */
exports.generateWorker = function (zip, options, comment) {

    var zipFileWorker = new ZipFileWorker(options.streamFiles, comment, options.platform, options.encodeFileName);
    var entriesCount = 0;
    try {

        zip.forEach(function (relativePath, file) {
            entriesCount++;
            var compression = getCompression(file.options.compression, options.compression);
            var compressionOptions = file.options.compressionOptions || options.compressionOptions || {};
            var dir = file.dir, date = file.date;

            file._compressWorker(compression, compressionOptions)
                .withStreamInfo("file", {
                    name : relativePath,
                    dir : dir,
                    date : date,
                    comment : file.comment || "",
                    unixPermissions : file.unixPermissions,
                    dosPermissions : file.dosPermissions
                })
                .pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
    } catch (e) {
        zipFileWorker.error(e);
    }

    return zipFileWorker;
};

},{"../compressions":3,"./ZipFileWorker":8}],10:[function(require,module,exports){
"use strict";

/**
 * Representation a of zip file in js
 * @constructor
 */
function JSZip() {
    // if this constructor is used without `new`, it adds `new` before itself:
    if(!(this instanceof JSZip)) {
        return new JSZip();
    }

    if(arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    }

    // object containing the files :
    // {
    //   "folder/" : {...},
    //   "folder/data.txt" : {...}
    // }
    // NOTE: we use a null prototype because we do not
    // want filenames like "toString" coming from a zip file
    // to overwrite methods and attributes in a normal Object.
    this.files = Object.create(null);

    this.comment = null;

    // Where we are in the hierarchy
    this.root = "";
    this.clone = function() {
        var newObj = new JSZip();
        for (var i in this) {
            if (typeof this[i] !== "function") {
                newObj[i] = this[i];
            }
        }
        return newObj;
    };
}
JSZip.prototype = require("./object");
JSZip.prototype.loadAsync = require("./load");
JSZip.support = require("./support");
JSZip.defaults = require("./defaults");

// TODO find a better way to handle this version,
// a require('package.json').version doesn't work with webpack, see #327
JSZip.version = "3.10.1";

JSZip.loadAsync = function (content, options) {
    return new JSZip().loadAsync(content, options);
};

JSZip.external = require("./external");
module.exports = JSZip;

},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(require,module,exports){
"use strict";
var utils = require("./utils");
var external = require("./external");
var utf8 = require("./utf8");
var ZipEntries = require("./zipEntries");
var Crc32Probe = require("./stream/Crc32Probe");
var nodejsUtils = require("./nodejsUtils");

/**
 * Check the CRC32 of an entry.
 * @param {ZipEntry} zipEntry the zip entry to check.
 * @return {Promise} the result.
 */
function checkEntryCRC32(zipEntry) {
    return new external.Promise(function (resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function (e) {
            reject(e);
        })
            .on("end", function () {
                if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
                    reject(new Error("Corrupted zip : CRC32 mismatch"));
                } else {
                    resolve();
                }
            })
            .resume();
    });
}

module.exports = function (data, options) {
    var zip = this;
    options = utils.extend(options || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
    });

    if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
    }

    return utils.prepareContent("the loaded zip file", data, true, options.optimizedBinaryString, options.base64)
        .then(function (data) {
            var zipEntries = new ZipEntries(options);
            zipEntries.load(data);
            return zipEntries;
        }).then(function checkCRC32(zipEntries) {
            var promises = [external.Promise.resolve(zipEntries)];
            var files = zipEntries.files;
            if (options.checkCRC32) {
                for (var i = 0; i < files.length; i++) {
                    promises.push(checkEntryCRC32(files[i]));
                }
            }
            return external.Promise.all(promises);
        }).then(function addFiles(results) {
            var zipEntries = results.shift();
            var files = zipEntries.files;
            for (var i = 0; i < files.length; i++) {
                var input = files[i];

                var unsafeName = input.fileNameStr;
                var safeName = utils.resolve(input.fileNameStr);

                zip.file(safeName, input.decompressed, {
                    binary: true,
                    optimizedBinaryString: true,
                    date: input.date,
                    dir: input.dir,
                    comment: input.fileCommentStr.length ? input.fileCommentStr : null,
                    unixPermissions: input.unixPermissions,
                    dosPermissions: input.dosPermissions,
                    createFolders: options.createFolders
                });
                if (!input.dir) {
                    zip.file(safeName).unsafeOriginalName = unsafeName;
                }
            }
            if (zipEntries.zipComment.length) {
                zip.comment = zipEntries.zipComment;
            }

            return zip;
        });
};

},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("../stream/GenericWorker");

/**
 * A worker that use a nodejs stream as source.
 * @constructor
 * @param {String} filename the name of the file entry for this stream.
 * @param {Readable} stream the nodejs stream.
 */
function NodejsStreamInputAdapter(filename, stream) {
    GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
    this._upstreamEnded = false;
    this._bindStream(stream);
}

utils.inherits(NodejsStreamInputAdapter, GenericWorker);

/**
 * Prepare the stream and bind the callbacks on it.
 * Do this ASAP on node 0.10 ! A lazy binding doesn't always work.
 * @param {Stream} stream the nodejs stream to use.
 */
NodejsStreamInputAdapter.prototype._bindStream = function (stream) {
    var self = this;
    this._stream = stream;
    stream.pause();
    stream
        .on("data", function (chunk) {
            self.push({
                data: chunk,
                meta : {
                    percent : 0
                }
            });
        })
        .on("error", function (e) {
            if(self.isPaused) {
                this.generatedError = e;
            } else {
                self.error(e);
            }
        })
        .on("end", function () {
            if(self.isPaused) {
                self._upstreamEnded = true;
            } else {
                self.end();
            }
        });
};
NodejsStreamInputAdapter.prototype.pause = function () {
    if(!GenericWorker.prototype.pause.call(this)) {
        return false;
    }
    this._stream.pause();
    return true;
};
NodejsStreamInputAdapter.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if(this._upstreamEnded) {
        this.end();
    } else {
        this._stream.resume();
    }

    return true;
};

module.exports = NodejsStreamInputAdapter;

},{"../stream/GenericWorker":28,"../utils":32}],13:[function(require,module,exports){
"use strict";

var Readable = require("readable-stream").Readable;

var utils = require("../utils");
utils.inherits(NodejsStreamOutputAdapter, Readable);

/**
* A nodejs stream using a worker as source.
* @see the SourceWrapper in http://nodejs.org/api/stream.html
* @constructor
* @param {StreamHelper} helper the helper wrapping the worker
* @param {Object} options the nodejs stream options
* @param {Function} updateCb the update callback.
*/
function NodejsStreamOutputAdapter(helper, options, updateCb) {
    Readable.call(this, options);
    this._helper = helper;

    var self = this;
    helper.on("data", function (data, meta) {
        if (!self.push(data)) {
            self._helper.pause();
        }
        if(updateCb) {
            updateCb(meta);
        }
    })
        .on("error", function(e) {
            self.emit("error", e);
        })
        .on("end", function () {
            self.push(null);
        });
}


NodejsStreamOutputAdapter.prototype._read = function() {
    this._helper.resume();
};

module.exports = NodejsStreamOutputAdapter;

},{"../utils":32,"readable-stream":16}],14:[function(require,module,exports){
"use strict";

module.exports = {
    /**
     * True if this is running in Nodejs, will be undefined in a browser.
     * In a browser, browserify won't include this file and the whole module
     * will be resolved an empty object.
     */
    isNode : typeof Buffer !== "undefined",
    /**
     * Create a new nodejs Buffer from an existing content.
     * @param {Object} data the data to pass to the constructor.
     * @param {String} encoding the encoding to use.
     * @return {Buffer} a new Buffer.
     */
    newBufferFrom: function(data, encoding) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
            return Buffer.from(data, encoding);
        } else {
            if (typeof data === "number") {
                // Safeguard for old Node.js versions. On newer versions,
                // Buffer.from(number) / Buffer(number, encoding) already throw.
                throw new Error("The \"data\" argument must not be a number");
            }
            return new Buffer(data, encoding);
        }
    },
    /**
     * Create a new nodejs Buffer with the specified size.
     * @param {Integer} size the size of the buffer.
     * @return {Buffer} a new Buffer.
     */
    allocBuffer: function (size) {
        if (Buffer.alloc) {
            return Buffer.alloc(size);
        } else {
            var buf = new Buffer(size);
            buf.fill(0);
            return buf;
        }
    },
    /**
     * Find out if an object is a Buffer.
     * @param {Object} b the object to test.
     * @return {Boolean} true if the object is a Buffer, false otherwise.
     */
    isBuffer : function(b){
        return Buffer.isBuffer(b);
    },

    isStream : function (obj) {
        return obj &&
            typeof obj.on === "function" &&
            typeof obj.pause === "function" &&
            typeof obj.resume === "function";
    }
};

},{}],15:[function(require,module,exports){
"use strict";
var utf8 = require("./utf8");
var utils = require("./utils");
var GenericWorker = require("./stream/GenericWorker");
var StreamHelper = require("./stream/StreamHelper");
var defaults = require("./defaults");
var CompressedObject = require("./compressedObject");
var ZipObject = require("./zipObject");
var generate = require("./generate");
var nodejsUtils = require("./nodejsUtils");
var NodejsStreamInputAdapter = require("./nodejs/NodejsStreamInputAdapter");


/**
 * Add a file in the current folder.
 * @private
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data of the file
 * @param {Object} originalOptions the options of the file
 * @return {Object} the new file.
 */
var fileAdd = function(name, data, originalOptions) {
    // be sure sub folders exist
    var dataType = utils.getTypeOf(data),
        parent;


    /*
     * Correct options.
     */

    var o = utils.extend(originalOptions || {}, defaults);
    o.date = o.date || new Date();
    if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
    }

    if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
    }

    // UNX_IFDIR  0040000 see zipinfo.c
    if (o.unixPermissions && (o.unixPermissions & 0x4000)) {
        o.dir = true;
    }
    // Bit 4    Directory
    if (o.dosPermissions && (o.dosPermissions & 0x0010)) {
        o.dir = true;
    }

    if (o.dir) {
        name = forceTrailingSlash(name);
    }
    if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
    }

    var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
    if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
    }


    var isCompressedEmpty = (data instanceof CompressedObject) && data.uncompressedSize === 0;

    if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
    }

    /*
     * Convert content to fit.
     */

    var zipObjectContent = null;
    if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
    } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
    } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
    }

    var object = new ZipObject(name, zipObjectContent, o);
    this.files[name] = object;
    /*
    TODO: we can't throw an exception because we have async promises
    (we can have a promise of a Date() for example) but returning a
    promise is useless because file(name, data) returns the JSZip
    object for chaining. Should we break that to allow the user
    to catch the error ?

    return external.Promise.resolve(zipObjectContent)
    .then(function () {
        return object;
    });
    */
};

/**
 * Find the parent folder of the path.
 * @private
 * @param {string} path the path to use
 * @return {string} the parent folder, or ""
 */
var parentFolder = function (path) {
    if (path.slice(-1) === "/") {
        path = path.substring(0, path.length - 1);
    }
    var lastSlash = path.lastIndexOf("/");
    return (lastSlash > 0) ? path.substring(0, lastSlash) : "";
};

/**
 * Returns the path with a slash at the end.
 * @private
 * @param {String} path the path to check.
 * @return {String} the path with a trailing slash.
 */
var forceTrailingSlash = function(path) {
    // Check the name ends with a /
    if (path.slice(-1) !== "/") {
        path += "/"; // IE doesn't like substr(-1)
    }
    return path;
};

/**
 * Add a (sub) folder in the current folder.
 * @private
 * @param {string} name the folder's name
 * @param {boolean=} [createFolders] If true, automatically create sub
 *  folders. Defaults to false.
 * @return {Object} the new folder.
 */
var folderAdd = function(name, createFolders) {
    createFolders = (typeof createFolders !== "undefined") ? createFolders : defaults.createFolders;

    name = forceTrailingSlash(name);

    // Does this folder already exist?
    if (!this.files[name]) {
        fileAdd.call(this, name, null, {
            dir: true,
            createFolders: createFolders
        });
    }
    return this.files[name];
};

/**
* Cross-window, cross-Node-context regular expression detection
* @param  {Object}  object Anything
* @return {Boolean}        true if the object is a regular expression,
* false otherwise
*/
function isRegExp(object) {
    return Object.prototype.toString.call(object) === "[object RegExp]";
}

// return the actual prototype of JSZip
var out = {
    /**
     * @see loadAsync
     */
    load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },


    /**
     * Call a callback function for each entry at this folder level.
     * @param {Function} cb the callback function:
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     */
    forEach: function(cb) {
        var filename, relativePath, file;
        // ignore warning about unwanted properties because this.files is a null prototype object
        /* eslint-disable-next-line guard-for-in */
        for (filename in this.files) {
            file = this.files[filename];
            relativePath = filename.slice(this.root.length, filename.length);
            if (relativePath && filename.slice(0, this.root.length) === this.root) { // the file is in the current root
                cb(relativePath, file); // TODO reverse the parameters ? need to be clean AND consistent with the filter search fn...
            }
        }
    },

    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(search) {
        var result = [];
        this.forEach(function (relativePath, entry) {
            if (search(relativePath, entry)) { // the file matches the function
                result.push(entry);
            }

        });
        return result;
    },

    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(name, data, o) {
        if (arguments.length === 1) {
            if (isRegExp(name)) {
                var regexp = name;
                return this.filter(function(relativePath, file) {
                    return !file.dir && regexp.test(relativePath);
                });
            }
            else { // text
                var obj = this.files[this.root + name];
                if (obj && !obj.dir) {
                    return obj;
                } else {
                    return null;
                }
            }
        }
        else { // more than one argument : we have data !
            name = this.root + name;
            fileAdd.call(this, name, data, o);
        }
        return this;
    },

    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(arg) {
        if (!arg) {
            return this;
        }

        if (isRegExp(arg)) {
            return this.filter(function(relativePath, file) {
                return file.dir && arg.test(relativePath);
            });
        }

        // else, name is a new folder
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);

        // Allow chaining by returning a new object with this folder as the root
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
    },

    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
            // Look for any folders
            if (name.slice(-1) !== "/") {
                name += "/";
            }
            file = this.files[name];
        }

        if (file && !file.dir) {
            // file
            delete this.files[name];
        } else {
            // maybe a folder, delete recursively
            var kids = this.filter(function(relativePath, file) {
                return file.name.slice(0, name.length) === name;
            });
            for (var i = 0; i < kids.length; i++) {
                delete this.files[kids[i].name];
            }
        }

        return this;
    },

    /**
     * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
     */
    generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },

    /**
     * Generate the complete zip file as an internal stream.
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {StreamHelper} the streamed zip file.
     */
    generateInternalStream: function(options) {
        var worker, opts = {};
        try {
            opts = utils.extend(options || {}, {
                streamFiles: false,
                compression: "STORE",
                compressionOptions : null,
                type: "",
                platform: "DOS",
                comment: null,
                mimeType: "application/zip",
                encodeFileName: utf8.utf8encode
            });

            opts.type = opts.type.toLowerCase();
            opts.compression = opts.compression.toUpperCase();

            // "binarystring" is preferred but the internals use "string".
            if(opts.type === "binarystring") {
                opts.type = "string";
            }

            if (!opts.type) {
                throw new Error("No output type specified.");
            }

            utils.checkSupport(opts.type);

            // accept nodejs `process.platform`
            if(
                opts.platform === "darwin" ||
                opts.platform === "freebsd" ||
                opts.platform === "linux" ||
                opts.platform === "sunos"
            ) {
                opts.platform = "UNIX";
            }
            if (opts.platform === "win32") {
                opts.platform = "DOS";
            }

            var comment = opts.comment || this.comment || "";
            worker = generate.generateWorker(this, opts, comment);
        } catch (e) {
            worker = new GenericWorker("error");
            worker.error(e);
        }
        return new StreamHelper(worker, opts.type || "string", opts.mimeType);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateAsync: function(options, onUpdate) {
        return this.generateInternalStream(options).accumulate(onUpdate);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateNodeStream: function(options, onUpdate) {
        options = options || {};
        if (!options.type) {
            options.type = "nodebuffer";
        }
        return this.generateInternalStream(options).toNodejsStream(onUpdate);
    }
};
module.exports = out;

},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(require,module,exports){
"use strict";
/*
 * This file is used by module bundlers (browserify/webpack/etc) when
 * including a stream implementation. We use "readable-stream" to get a
 * consistent behavior between nodejs versions but bundlers often have a shim
 * for "stream". Using this shim greatly improve the compatibility and greatly
 * reduce the final size of the bundle (only one stream implementation, not
 * two).
 */
module.exports = require("stream");

},{"stream":undefined}],17:[function(require,module,exports){
"use strict";
var DataReader = require("./DataReader");
var utils = require("../utils");

function ArrayReader(data) {
    DataReader.call(this, data);
    for(var i = 0; i < this.data.length; i++) {
        data[i] = data[i] & 0xFF;
    }
}
utils.inherits(ArrayReader, DataReader);
/**
 * @see DataReader.byteAt
 */
ArrayReader.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
};
/**
 * @see DataReader.lastIndexOfSignature
 */
ArrayReader.prototype.lastIndexOfSignature = function(sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3);
    for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
            return i - this.zero;
        }
    }

    return -1;
};
/**
 * @see DataReader.readAndCheckSignature
 */
ArrayReader.prototype.readAndCheckSignature = function (sig) {
    var sig0 = sig.charCodeAt(0),
        sig1 = sig.charCodeAt(1),
        sig2 = sig.charCodeAt(2),
        sig3 = sig.charCodeAt(3),
        data = this.readData(4);
    return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
};
/**
 * @see DataReader.readData
 */
ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        return [];
    }
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = ArrayReader;

},{"../utils":32,"./DataReader":18}],18:[function(require,module,exports){
"use strict";
var utils = require("../utils");

function DataReader(data) {
    this.data = data; // type : see implementation
    this.length = data.length;
    this.index = 0;
    this.zero = 0;
}
DataReader.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
    },
    /**
     * Check that the specified index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + (newIndex) + "). Corrupted zip ?");
        }
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(n) {
        this.setIndex(this.index + n);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function() {
        // see implementations
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(size) {
        var result = 0,
            i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
            result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(size) {
        return utils.transformTo("string", this.readData(size));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function() {
        // see implementations
    },
    /**
     * Find the last occurrence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurrence, -1 if not found.
     */
    lastIndexOfSignature: function() {
        // see implementations
    },
    /**
     * Read the signature (4 bytes) at the current position and compare it with sig.
     * @param {string} sig the expected signature
     * @return {boolean} true if the signature matches, false otherwise.
     */
    readAndCheckSignature: function() {
        // see implementations
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
            ((dostime >> 25) & 0x7f) + 1980, // year
            ((dostime >> 21) & 0x0f) - 1, // month
            (dostime >> 16) & 0x1f, // day
            (dostime >> 11) & 0x1f, // hour
            (dostime >> 5) & 0x3f, // minute
            (dostime & 0x1f) << 1)); // second
    }
};
module.exports = DataReader;

},{"../utils":32}],19:[function(require,module,exports){
"use strict";
var Uint8ArrayReader = require("./Uint8ArrayReader");
var utils = require("../utils");

function NodeBufferReader(data) {
    Uint8ArrayReader.call(this, data);
}
utils.inherits(NodeBufferReader, Uint8ArrayReader);

/**
 * @see DataReader.readData
 */
NodeBufferReader.prototype.readData = function(size) {
    this.checkOffset(size);
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = NodeBufferReader;

},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(require,module,exports){
"use strict";
var DataReader = require("./DataReader");
var utils = require("../utils");

function StringReader(data) {
    DataReader.call(this, data);
}
utils.inherits(StringReader, DataReader);
/**
 * @see DataReader.byteAt
 */
StringReader.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
};
/**
 * @see DataReader.lastIndexOfSignature
 */
StringReader.prototype.lastIndexOfSignature = function(sig) {
    return this.data.lastIndexOf(sig) - this.zero;
};
/**
 * @see DataReader.readAndCheckSignature
 */
StringReader.prototype.readAndCheckSignature = function (sig) {
    var data = this.readData(4);
    return sig === data;
};
/**
 * @see DataReader.readData
 */
StringReader.prototype.readData = function(size) {
    this.checkOffset(size);
    // this will work because the constructor applied the "& 0xff" mask.
    var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = StringReader;

},{"../utils":32,"./DataReader":18}],21:[function(require,module,exports){
"use strict";
var ArrayReader = require("./ArrayReader");
var utils = require("../utils");

function Uint8ArrayReader(data) {
    ArrayReader.call(this, data);
}
utils.inherits(Uint8ArrayReader, ArrayReader);
/**
 * @see DataReader.readData
 */
Uint8ArrayReader.prototype.readData = function(size) {
    this.checkOffset(size);
    if(size === 0) {
        // in IE10, when using subarray(idx, idx), we get the array [0x00] instead of [].
        return new Uint8Array(0);
    }
    var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
    this.index += size;
    return result;
};
module.exports = Uint8ArrayReader;

},{"../utils":32,"./ArrayReader":17}],22:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var support = require("../support");
var ArrayReader = require("./ArrayReader");
var StringReader = require("./StringReader");
var NodeBufferReader = require("./NodeBufferReader");
var Uint8ArrayReader = require("./Uint8ArrayReader");

/**
 * Create a reader adapted to the data.
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data to read.
 * @return {DataReader} the data reader.
 */
module.exports = function (data) {
    var type = utils.getTypeOf(data);
    utils.checkSupport(type);
    if (type === "string" && !support.uint8array) {
        return new StringReader(data);
    }
    if (type === "nodebuffer") {
        return new NodeBufferReader(data);
    }
    if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
    }
    return new ArrayReader(utils.transformTo("array", data));
};

},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(require,module,exports){
"use strict";
exports.LOCAL_FILE_HEADER = "PK\x03\x04";
exports.CENTRAL_FILE_HEADER = "PK\x01\x02";
exports.CENTRAL_DIRECTORY_END = "PK\x05\x06";
exports.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x06\x07";
exports.ZIP64_CENTRAL_DIRECTORY_END = "PK\x06\x06";
exports.DATA_DESCRIPTOR = "PK\x07\x08";

},{}],24:[function(require,module,exports){
"use strict";

var GenericWorker = require("./GenericWorker");
var utils = require("../utils");

/**
 * A worker which convert chunks to a specified type.
 * @constructor
 * @param {String} destType the destination type.
 */
function ConvertWorker(destType) {
    GenericWorker.call(this, "ConvertWorker to " + destType);
    this.destType = destType;
}
utils.inherits(ConvertWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
ConvertWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : utils.transformTo(this.destType, chunk.data),
        meta : chunk.meta
    });
};
module.exports = ConvertWorker;

},{"../utils":32,"./GenericWorker":28}],25:[function(require,module,exports){
"use strict";

var GenericWorker = require("./GenericWorker");
var crc32 = require("../crc32");
var utils = require("../utils");

/**
 * A worker which calculate the crc32 of the data flowing through.
 * @constructor
 */
function Crc32Probe() {
    GenericWorker.call(this, "Crc32Probe");
    this.withStreamInfo("crc32", 0);
}
utils.inherits(Crc32Probe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Crc32Probe.prototype.processChunk = function (chunk) {
    this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
    this.push(chunk);
};
module.exports = Crc32Probe;

},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("./GenericWorker");

/**
 * A worker which calculate the total length of the data flowing through.
 * @constructor
 * @param {String} propName the name used to expose the length
 */
function DataLengthProbe(propName) {
    GenericWorker.call(this, "DataLengthProbe for " + propName);
    this.propName = propName;
    this.withStreamInfo(propName, 0);
}
utils.inherits(DataLengthProbe, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
DataLengthProbe.prototype.processChunk = function (chunk) {
    if(chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
    }
    GenericWorker.prototype.processChunk.call(this, chunk);
};
module.exports = DataLengthProbe;


},{"../utils":32,"./GenericWorker":28}],27:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var GenericWorker = require("./GenericWorker");

// the size of the generated chunks
// TODO expose this as a public variable
var DEFAULT_BLOCK_SIZE = 16 * 1024;

/**
 * A worker that reads a content and emits chunks.
 * @constructor
 * @param {Promise} dataP the promise of the data to split
 */
function DataWorker(dataP) {
    GenericWorker.call(this, "DataWorker");
    var self = this;
    this.dataIsReady = false;
    this.index = 0;
    this.max = 0;
    this.data = null;
    this.type = "";

    this._tickScheduled = false;

    dataP.then(function (data) {
        self.dataIsReady = true;
        self.data = data;
        self.max = data && data.length || 0;
        self.type = utils.getTypeOf(data);
        if(!self.isPaused) {
            self._tickAndRepeat();
        }
    }, function (e) {
        self.error(e);
    });
}

utils.inherits(DataWorker, GenericWorker);

/**
 * @see GenericWorker.cleanUp
 */
DataWorker.prototype.cleanUp = function () {
    GenericWorker.prototype.cleanUp.call(this);
    this.data = null;
};

/**
 * @see GenericWorker.resume
 */
DataWorker.prototype.resume = function () {
    if(!GenericWorker.prototype.resume.call(this)) {
        return false;
    }

    if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
    }
    return true;
};

/**
 * Trigger a tick a schedule an other call to this function.
 */
DataWorker.prototype._tickAndRepeat = function() {
    this._tickScheduled = false;
    if(this.isPaused || this.isFinished) {
        return;
    }
    this._tick();
    if(!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
    }
};

/**
 * Read and push a chunk.
 */
DataWorker.prototype._tick = function() {

    if(this.isPaused || this.isFinished) {
        return false;
    }

    var size = DEFAULT_BLOCK_SIZE;
    var data = null, nextIndex = Math.min(this.max, this.index + size);
    if (this.index >= this.max) {
        // EOF
        return this.end();
    } else {
        switch(this.type) {
        case "string":
            data = this.data.substring(this.index, nextIndex);
            break;
        case "uint8array":
            data = this.data.subarray(this.index, nextIndex);
            break;
        case "array":
        case "nodebuffer":
            data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
            data : data,
            meta : {
                percent : this.max ? this.index / this.max * 100 : 0
            }
        });
    }
};

module.exports = DataWorker;

},{"../utils":32,"./GenericWorker":28}],28:[function(require,module,exports){
"use strict";

/**
 * A worker that does nothing but passing chunks to the next one. This is like
 * a nodejs stream but with some differences. On the good side :
 * - it works on IE 6-9 without any issue / polyfill
 * - it weights less than the full dependencies bundled with browserify
 * - it forwards errors (no need to declare an error handler EVERYWHERE)
 *
 * A chunk is an object with 2 attributes : `meta` and `data`. The former is an
 * object containing anything (`percent` for example), see each worker for more
 * details. The latter is the real data (String, Uint8Array, etc).
 *
 * @constructor
 * @param {String} name the name of the stream (mainly used for debugging purposes)
 */
function GenericWorker(name) {
    // the name of the worker
    this.name = name || "default";
    // an object containing metadata about the workers chain
    this.streamInfo = {};
    // an error which happened when the worker was paused
    this.generatedError = null;
    // an object containing metadata to be merged by this worker into the general metadata
    this.extraStreamInfo = {};
    // true if the stream is paused (and should not do anything), false otherwise
    this.isPaused = true;
    // true if the stream is finished (and should not do anything), false otherwise
    this.isFinished = false;
    // true if the stream is locked to prevent further structure updates (pipe), false otherwise
    this.isLocked = false;
    // the event listeners
    this._listeners = {
        "data":[],
        "end":[],
        "error":[]
    };
    // the previous worker, if any
    this.previous = null;
}

GenericWorker.prototype = {
    /**
     * Push a chunk to the next workers.
     * @param {Object} chunk the chunk to push
     */
    push : function (chunk) {
        this.emit("data", chunk);
    },
    /**
     * End the stream.
     * @return {Boolean} true if this call ended the worker, false otherwise.
     */
    end : function () {
        if (this.isFinished) {
            return false;
        }

        this.flush();
        try {
            this.emit("end");
            this.cleanUp();
            this.isFinished = true;
        } catch (e) {
            this.emit("error", e);
        }
        return true;
    },
    /**
     * End the stream with an error.
     * @param {Error} e the error which caused the premature end.
     * @return {Boolean} true if this call ended the worker with an error, false otherwise.
     */
    error : function (e) {
        if (this.isFinished) {
            return false;
        }

        if(this.isPaused) {
            this.generatedError = e;
        } else {
            this.isFinished = true;

            this.emit("error", e);

            // in the workers chain exploded in the middle of the chain,
            // the error event will go downward but we also need to notify
            // workers upward that there has been an error.
            if(this.previous) {
                this.previous.error(e);
            }

            this.cleanUp();
        }
        return true;
    },
    /**
     * Add a callback on an event.
     * @param {String} name the name of the event (data, end, error)
     * @param {Function} listener the function to call when the event is triggered
     * @return {GenericWorker} the current object for chainability
     */
    on : function (name, listener) {
        this._listeners[name].push(listener);
        return this;
    },
    /**
     * Clean any references when a worker is ending.
     */
    cleanUp : function () {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
    },
    /**
     * Trigger an event. This will call registered callback with the provided arg.
     * @param {String} name the name of the event (data, end, error)
     * @param {Object} arg the argument to call the callback with.
     */
    emit : function (name, arg) {
        if (this._listeners[name]) {
            for(var i = 0; i < this._listeners[name].length; i++) {
                this._listeners[name][i].call(this, arg);
            }
        }
    },
    /**
     * Chain a worker with an other.
     * @param {Worker} next the worker receiving events from the current one.
     * @return {worker} the next worker for chainability
     */
    pipe : function (next) {
        return next.registerPrevious(this);
    },
    /**
     * Same as `pipe` in the other direction.
     * Using an API with `pipe(next)` is very easy.
     * Implementing the API with the point of view of the next one registering
     * a source is easier, see the ZipFileWorker.
     * @param {Worker} previous the previous worker, sending events to this one
     * @return {Worker} the current worker for chainability
     */
    registerPrevious : function (previous) {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }

        // sharing the streamInfo...
        this.streamInfo = previous.streamInfo;
        // ... and adding our own bits
        this.mergeStreamInfo();
        this.previous =  previous;
        var self = this;
        previous.on("data", function (chunk) {
            self.processChunk(chunk);
        });
        previous.on("end", function () {
            self.end();
        });
        previous.on("error", function (e) {
            self.error(e);
        });
        return this;
    },
    /**
     * Pause the stream so it doesn't send events anymore.
     * @return {Boolean} true if this call paused the worker, false otherwise.
     */
    pause : function () {
        if(this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = true;

        if(this.previous) {
            this.previous.pause();
        }
        return true;
    },
    /**
     * Resume a paused stream.
     * @return {Boolean} true if this call resumed the worker, false otherwise.
     */
    resume : function () {
        if(!this.isPaused || this.isFinished) {
            return false;
        }
        this.isPaused = false;

        // if true, the worker tried to resume but failed
        var withError = false;
        if(this.generatedError) {
            this.error(this.generatedError);
            withError = true;
        }
        if(this.previous) {
            this.previous.resume();
        }

        return !withError;
    },
    /**
     * Flush any remaining bytes as the stream is ending.
     */
    flush : function () {},
    /**
     * Process a chunk. This is usually the method overridden.
     * @param {Object} chunk the chunk to process.
     */
    processChunk : function(chunk) {
        this.push(chunk);
    },
    /**
     * Add a key/value to be added in the workers chain streamInfo once activated.
     * @param {String} key the key to use
     * @param {Object} value the associated value
     * @return {Worker} the current worker for chainability
     */
    withStreamInfo : function (key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
    },
    /**
     * Merge this worker's streamInfo into the chain's streamInfo.
     */
    mergeStreamInfo : function () {
        for(var key in this.extraStreamInfo) {
            if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
                continue;
            }
            this.streamInfo[key] = this.extraStreamInfo[key];
        }
    },

    /**
     * Lock the stream to prevent further updates on the workers chain.
     * After calling this method, all calls to pipe will fail.
     */
    lock: function () {
        if (this.isLocked) {
            throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
            this.previous.lock();
        }
    },

    /**
     *
     * Pretty print the workers chain.
     */
    toString : function () {
        var me = "Worker " + this.name;
        if (this.previous) {
            return this.previous + " -> " + me;
        } else {
            return me;
        }
    }
};

module.exports = GenericWorker;

},{}],29:[function(require,module,exports){
"use strict";

var utils = require("../utils");
var ConvertWorker = require("./ConvertWorker");
var GenericWorker = require("./GenericWorker");
var base64 = require("../base64");
var support = require("../support");
var external = require("../external");

var NodejsStreamOutputAdapter = null;
if (support.nodestream) {
    try {
        NodejsStreamOutputAdapter = require("../nodejs/NodejsStreamOutputAdapter");
    } catch(e) {
        // ignore
    }
}

/**
 * Apply the final transformation of the data. If the user wants a Blob for
 * example, it's easier to work with an U8intArray and finally do the
 * ArrayBuffer/Blob conversion.
 * @param {String} type the name of the final type
 * @param {String|Uint8Array|Buffer} content the content to transform
 * @param {String} mimeType the mime type of the content, if applicable.
 * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the content in the right format.
 */
function transformZipOutput(type, content, mimeType) {
    switch(type) {
    case "blob" :
        return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
    case "base64" :
        return base64.encode(content);
    default :
        return utils.transformTo(type, content);
    }
}

/**
 * Concatenate an array of data of the given type.
 * @param {String} type the type of the data in the given array.
 * @param {Array} dataArray the array containing the data chunks to concatenate
 * @return {String|Uint8Array|Buffer} the concatenated data
 * @throws Error if the asked type is unsupported
 */
function concat (type, dataArray) {
    var i, index = 0, res = null, totalLength = 0;
    for(i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
    }
    switch(type) {
    case "string":
        return dataArray.join("");
    case "array":
        return Array.prototype.concat.apply([], dataArray);
    case "uint8array":
        res = new Uint8Array(totalLength);
        for(i = 0; i < dataArray.length; i++) {
            res.set(dataArray[i], index);
            index += dataArray[i].length;
        }
        return res;
    case "nodebuffer":
        return Buffer.concat(dataArray);
    default:
        throw new Error("concat : unsupported type '"  + type + "'");
    }
}

/**
 * Listen a StreamHelper, accumulate its content and concatenate it into a
 * complete block.
 * @param {StreamHelper} helper the helper to use.
 * @param {Function} updateCallback a callback called on each update. Called
 * with one arg :
 * - the metadata linked to the update received.
 * @return Promise the promise for the accumulation.
 */
function accumulate(helper, updateCallback) {
    return new external.Promise(function (resolve, reject){
        var dataArray = [];
        var chunkType = helper._internalType,
            resultType = helper._outputType,
            mimeType = helper._mimeType;
        helper
            .on("data", function (data, meta) {
                dataArray.push(data);
                if(updateCallback) {
                    updateCallback(meta);
                }
            })
            .on("error", function(err) {
                dataArray = [];
                reject(err);
            })
            .on("end", function (){
                try {
                    var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
                dataArray = [];
            })
            .resume();
    });
}

/**
 * An helper to easily use workers outside of JSZip.
 * @constructor
 * @param {Worker} worker the worker to wrap
 * @param {String} outputType the type of data expected by the use
 * @param {String} mimeType the mime type of the content, if applicable.
 */
function StreamHelper(worker, outputType, mimeType) {
    var internalType = outputType;
    switch(outputType) {
    case "blob":
    case "arraybuffer":
        internalType = "uint8array";
        break;
    case "base64":
        internalType = "string";
        break;
    }

    try {
        // the type used internally
        this._internalType = internalType;
        // the type used to output results
        this._outputType = outputType;
        // the mime type
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        // the last workers can be rewired without issues but we need to
        // prevent any updates on previous workers.
        worker.lock();
    } catch(e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
    }
}

StreamHelper.prototype = {
    /**
     * Listen a StreamHelper, accumulate its content and concatenate it into a
     * complete block.
     * @param {Function} updateCb the update callback.
     * @return Promise the promise for the accumulation.
     */
    accumulate : function (updateCb) {
        return accumulate(this, updateCb);
    },
    /**
     * Add a listener on an event triggered on a stream.
     * @param {String} evt the name of the event
     * @param {Function} fn the listener
     * @return {StreamHelper} the current helper.
     */
    on : function (evt, fn) {
        var self = this;

        if(evt === "data") {
            this._worker.on(evt, function (chunk) {
                fn.call(self, chunk.data, chunk.meta);
            });
        } else {
            this._worker.on(evt, function () {
                utils.delay(fn, arguments, self);
            });
        }
        return this;
    },
    /**
     * Resume the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    resume : function () {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
    },
    /**
     * Pause the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    pause : function () {
        this._worker.pause();
        return this;
    },
    /**
     * Return a nodejs stream for this helper.
     * @param {Function} updateCb the update callback.
     * @return {NodejsStreamOutputAdapter} the nodejs stream.
     */
    toNodejsStream : function (updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
            // an object stream containing blob/arraybuffer/uint8array/string
            // is strange and I don't know if it would be useful.
            // I you find this comment and have a good usecase, please open a
            // bug report !
            throw new Error(this._outputType + " is not supported by this method");
        }

        return new NodejsStreamOutputAdapter(this, {
            objectMode : this._outputType !== "nodebuffer"
        }, updateCb);
    }
};


module.exports = StreamHelper;

},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(require,module,exports){
"use strict";

exports.base64 = true;
exports.array = true;
exports.string = true;
exports.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
exports.nodebuffer = typeof Buffer !== "undefined";
// contains true if JSZip can read/generate Uint8Array, false otherwise.
exports.uint8array = typeof Uint8Array !== "undefined";

if (typeof ArrayBuffer === "undefined") {
    exports.blob = false;
}
else {
    var buffer = new ArrayBuffer(0);
    try {
        exports.blob = new Blob([buffer], {
            type: "application/zip"
        }).size === 0;
    }
    catch (e) {
        try {
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(buffer);
            exports.blob = builder.getBlob("application/zip").size === 0;
        }
        catch (e) {
            exports.blob = false;
        }
    }
}

try {
    exports.nodestream = !!require("readable-stream").Readable;
} catch(e) {
    exports.nodestream = false;
}

},{"readable-stream":16}],31:[function(require,module,exports){
"use strict";

var utils = require("./utils");
var support = require("./support");
var nodejsUtils = require("./nodejsUtils");
var GenericWorker = require("./stream/GenericWorker");

/**
 * The following functions come from pako, from pako/lib/utils/strings
 * released under the MIT license, see pako https://github.com/nodeca/pako/
 */

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new Array(256);
for (var i=0; i<256; i++) {
    _utf8len[i] = (i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1);
}
_utf8len[254]=_utf8len[254]=1; // Invalid sequence start

// convert string to array (typed, when possible)
var string2buf = function (str) {
    var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

    // count binary size
    for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }

    // allocate buffer
    if (support.uint8array) {
        buf = new Uint8Array(buf_len);
    } else {
        buf = new Array(buf_len);
    }

    // convert
    for (i=0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && (m_pos+1 < str_len)) {
            c2 = str.charCodeAt(m_pos+1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
        } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | (c >>> 6);
            buf[i++] = 0x80 | (c & 0x3f);
        } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | (c >>> 12);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        } else {
            /* four bytes */
            buf[i++] = 0xf0 | (c >>> 18);
            buf[i++] = 0x80 | (c >>> 12 & 0x3f);
            buf[i++] = 0x80 | (c >>> 6 & 0x3f);
            buf[i++] = 0x80 | (c & 0x3f);
        }
    }

    return buf;
};

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = function(buf, max) {
    var pos;

    max = max || buf.length;
    if (max > buf.length) { max = buf.length; }

    // go back from last position, until start of sequence found
    pos = max-1;
    while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

    // Fuckup - very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) { return max; }

    // If we came to start of buffer - that means vuffer is too small,
    // return max too.
    if (pos === 0) { return max; }

    return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

// convert array to string
var buf2string = function (buf) {
    var i, out, c, c_len;
    var len = buf.length;

    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    var utf16buf = new Array(len*2);

    for (out=0, i=0; i<len;) {
        c = buf[i++];
        // quick process ascii
        if (c < 0x80) { utf16buf[out++] = c; continue; }

        c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len-1; continue; }

        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while (c_len > 1 && i < len) {
            c = (c << 6) | (buf[i++] & 0x3f);
            c_len--;
        }

        // terminated by end of string?
        if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

        if (c < 0x10000) {
            utf16buf[out++] = c;
        } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
            utf16buf[out++] = 0xdc00 | (c & 0x3ff);
        }
    }

    // shrinkBuf(utf16buf, out)
    if (utf16buf.length !== out) {
        if(utf16buf.subarray) {
            utf16buf = utf16buf.subarray(0, out);
        } else {
            utf16buf.length = out;
        }
    }

    // return String.fromCharCode.apply(null, utf16buf);
    return utils.applyFromCharCode(utf16buf);
};


// That's all for the pako functions.


/**
 * Transform a javascript string into an array (typed if possible) of bytes,
 * UTF-8 encoded.
 * @param {String} str the string to encode
 * @return {Array|Uint8Array|Buffer} the UTF-8 encoded string.
 */
exports.utf8encode = function utf8encode(str) {
    if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str, "utf-8");
    }

    return string2buf(str);
};


/**
 * Transform a bytes array (or a representation) representing an UTF-8 encoded
 * string into a javascript string.
 * @param {Array|Uint8Array|Buffer} buf the data de decode
 * @return {String} the decoded string.
 */
exports.utf8decode = function utf8decode(buf) {
    if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
    }

    buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);

    return buf2string(buf);
};

/**
 * A worker to decode utf8 encoded binary chunks into string chunks.
 * @constructor
 */
function Utf8DecodeWorker() {
    GenericWorker.call(this, "utf-8 decode");
    // the last bytes if a chunk didn't end with a complete codepoint.
    this.leftOver = null;
}
utils.inherits(Utf8DecodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8DecodeWorker.prototype.processChunk = function (chunk) {

    var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);

    // 1st step, re-use what's left of the previous chunk
    if (this.leftOver && this.leftOver.length) {
        if(support.uint8array) {
            var previousData = data;
            data = new Uint8Array(previousData.length + this.leftOver.length);
            data.set(this.leftOver, 0);
            data.set(previousData, this.leftOver.length);
        } else {
            data = this.leftOver.concat(data);
        }
        this.leftOver = null;
    }

    var nextBoundary = utf8border(data);
    var usableData = data;
    if (nextBoundary !== data.length) {
        if (support.uint8array) {
            usableData = data.subarray(0, nextBoundary);
            this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
            usableData = data.slice(0, nextBoundary);
            this.leftOver = data.slice(nextBoundary, data.length);
        }
    }

    this.push({
        data : exports.utf8decode(usableData),
        meta : chunk.meta
    });
};

/**
 * @see GenericWorker.flush
 */
Utf8DecodeWorker.prototype.flush = function () {
    if(this.leftOver && this.leftOver.length) {
        this.push({
            data : exports.utf8decode(this.leftOver),
            meta : {}
        });
        this.leftOver = null;
    }
};
exports.Utf8DecodeWorker = Utf8DecodeWorker;

/**
 * A worker to endcode string chunks into utf8 encoded binary chunks.
 * @constructor
 */
function Utf8EncodeWorker() {
    GenericWorker.call(this, "utf-8 encode");
}
utils.inherits(Utf8EncodeWorker, GenericWorker);

/**
 * @see GenericWorker.processChunk
 */
Utf8EncodeWorker.prototype.processChunk = function (chunk) {
    this.push({
        data : exports.utf8encode(chunk.data),
        meta : chunk.meta
    });
};
exports.Utf8EncodeWorker = Utf8EncodeWorker;

},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(require,module,exports){
"use strict";

var support = require("./support");
var base64 = require("./base64");
var nodejsUtils = require("./nodejsUtils");
var external = require("./external");
require("setimmediate");


/**
 * Convert a string that pass as a "binary string": it should represent a byte
 * array but may have > 255 char codes. Be sure to take only the first byte
 * and returns the byte array.
 * @param {String} str the string to transform.
 * @return {Array|Uint8Array} the string in a binary format.
 */
function string2binary(str) {
    var result = null;
    if (support.uint8array) {
        result = new Uint8Array(str.length);
    } else {
        result = new Array(str.length);
    }
    return stringToArrayLike(str, result);
}

/**
 * Create a new blob with the given content and the given type.
 * @param {String|ArrayBuffer} part the content to put in the blob. DO NOT use
 * an Uint8Array because the stock browser of android 4 won't accept it (it
 * will be silently converted to a string, "[object Uint8Array]").
 *
 * Use only ONE part to build the blob to avoid a memory leak in IE11 / Edge:
 * when a large amount of Array is used to create the Blob, the amount of
 * memory consumed is nearly 100 times the original data amount.
 *
 * @param {String} type the mime type of the blob.
 * @return {Blob} the created blob.
 */
exports.newBlob = function(part, type) {
    exports.checkSupport("blob");

    try {
        // Blob constructor
        return new Blob([part], {
            type: type
        });
    }
    catch (e) {

        try {
            // deprecated, browser only, old way
            var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
            var builder = new Builder();
            builder.append(part);
            return builder.getBlob(type);
        }
        catch (e) {

            // well, fuck ?!
            throw new Error("Bug : can't construct the Blob.");
        }
    }


};
/**
 * The identity function.
 * @param {Object} input the input.
 * @return {Object} the same input.
 */
function identity(input) {
    return input;
}

/**
 * Fill in an array with a string.
 * @param {String} str the string to use.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to fill in (will be mutated).
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated array.
 */
function stringToArrayLike(str, array) {
    for (var i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i) & 0xFF;
    }
    return array;
}

/**
 * An helper for the function arrayLikeToString.
 * This contains static information and functions that
 * can be optimized by the browser JIT compiler.
 */
var arrayToStringHelper = {
    /**
     * Transform an array of int into a string, chunk by chunk.
     * See the performances notes on arrayLikeToString.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @param {String} type the type of the array.
     * @param {Integer} chunk the chunk size.
     * @return {String} the resulting string.
     * @throws Error if the chunk is too big for the stack.
     */
    stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        // shortcut
        if (len <= chunk) {
            return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
            if (type === "array" || type === "nodebuffer") {
                result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
            }
            else {
                result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
            }
            k += chunk;
        }
        return result.join("");
    },
    /**
     * Call String.fromCharCode on every item in the array.
     * This is the naive implementation, which generate A LOT of intermediate string.
     * This should be used when everything else fail.
     * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
     * @return {String} the result.
     */
    stringifyByChar: function(array){
        var resultStr = "";
        for(var i = 0; i < array.length; i++) {
            resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
    },
    applyCanBeUsed : {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array : (function () {
            try {
                return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (e) {
                return false;
            }
        })(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer : (function () {
            try {
                return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
            } catch (e) {
                return false;
            }
        })()
    }
};

/**
 * Transform an array-like object to a string.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
 * @return {String} the result.
 */
function arrayLikeToString(array) {
    // Performances notes :
    // --------------------
    // String.fromCharCode.apply(null, array) is the fastest, see
    // see http://jsperf.com/converting-a-uint8array-to-a-string/2
    // but the stack is limited (and we can get huge arrays !).
    //
    // result += String.fromCharCode(array[i]); generate too many strings !
    //
    // This code is inspired by http://jsperf.com/arraybuffer-to-string-apply-performance/2
    // TODO : we now have workers that split the work. Do we still need that ?
    var chunk = 65536,
        type = exports.getTypeOf(array),
        canUseApply = true;
    if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
    } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
    }

    if (canUseApply) {
        while (chunk > 1) {
            try {
                return arrayToStringHelper.stringifyByChunk(array, type, chunk);
            } catch (e) {
                chunk = Math.floor(chunk / 2);
            }
        }
    }

    // no apply or chunk error : slow and painful algorithm
    // default browser on android 4.*
    return arrayToStringHelper.stringifyByChar(array);
}

exports.applyFromCharCode = arrayLikeToString;


/**
 * Copy the data from an array-like to an other array-like.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayFrom the origin array.
 * @param {Array|ArrayBuffer|Uint8Array|Buffer} arrayTo the destination array which will be mutated.
 * @return {Array|ArrayBuffer|Uint8Array|Buffer} the updated destination array.
 */
function arrayLikeToArrayLike(arrayFrom, arrayTo) {
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
    }
    return arrayTo;
}

// a matrix containing functions to transform everything into everything.
var transform = {};

// string to ?
transform["string"] = {
    "string": identity,
    "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
    }
};

// array to ?
transform["array"] = {
    "string": arrayLikeToString,
    "array": identity,
    "arraybuffer": function(input) {
        return (new Uint8Array(input)).buffer;
    },
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// arraybuffer to ?
transform["arraybuffer"] = {
    "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
    },
    "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
    },
    "arraybuffer": identity,
    "uint8array": function(input) {
        return new Uint8Array(input);
    },
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
    }
};

// uint8array to ?
transform["uint8array"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return input.buffer;
    },
    "uint8array": identity,
    "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
    }
};

// nodebuffer to ?
transform["nodebuffer"] = {
    "string": arrayLikeToString,
    "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
    },
    "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
    },
    "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
    },
    "nodebuffer": identity
};

/**
 * Transform an input into any type.
 * The supported output type are : string, array, uint8array, arraybuffer, nodebuffer.
 * If no output type is specified, the unmodified input will be returned.
 * @param {String} outputType the output type.
 * @param {String|Array|ArrayBuffer|Uint8Array|Buffer} input the input to convert.
 * @throws {Error} an Error if the browser doesn't support the requested output type.
 */
exports.transformTo = function(outputType, input) {
    if (!input) {
        // undefined, null, etc
        // an empty string won't harm.
        input = "";
    }
    if (!outputType) {
        return input;
    }
    exports.checkSupport(outputType);
    var inputType = exports.getTypeOf(input);
    var result = transform[inputType][outputType](input);
    return result;
};

/**
 * Resolve all relative path components, "." and "..", in a path. If these relative components
 * traverse above the root then the resulting path will only contain the final path component.
 *
 * All empty components, e.g. "//", are removed.
 * @param {string} path A path with / or \ separators
 * @returns {string} The path with all relative path components resolved.
 */
exports.resolve = function(path) {
    var parts = path.split("/");
    var result = [];
    for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        // Allow the first and last component to be empty for trailing slashes.
        if (part === "." || (part === "" && index !== 0 && index !== parts.length - 1)) {
            continue;
        } else if (part === "..") {
            result.pop();
        } else {
            result.push(part);
        }
    }
    return result.join("/");
};

/**
 * Return the type of the input.
 * The type will be in a format valid for JSZip.utils.transformTo : string, array, uint8array, arraybuffer.
 * @param {Object} input the input to identify.
 * @return {String} the (lowercase) type of the input.
 */
exports.getTypeOf = function(input) {
    if (typeof input === "string") {
        return "string";
    }
    if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
    }
    if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
    }
    if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
    }
    if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
    }
};

/**
 * Throw an exception if the type is not supported.
 * @param {String} type the type to check.
 * @throws {Error} an Error if the browser doesn't support the requested type.
 */
exports.checkSupport = function(type) {
    var supported = support[type.toLowerCase()];
    if (!supported) {
        throw new Error(type + " is not supported by this platform");
    }
};

exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1; // well, "\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF" is parsed as -1

/**
 * Prettify a string read as binary.
 * @param {string} str the string to prettify.
 * @return {string} a pretty string.
 */
exports.pretty = function(str) {
    var res = "",
        code, i;
    for (i = 0; i < (str || "").length; i++) {
        code = str.charCodeAt(i);
        res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
    }
    return res;
};

/**
 * Defer the call of a function.
 * @param {Function} callback the function to call asynchronously.
 * @param {Array} args the arguments to give to the callback.
 */
exports.delay = function(callback, args, self) {
    setImmediate(function () {
        callback.apply(self || null, args || []);
    });
};

/**
 * Extends a prototype with an other, without calling a constructor with
 * side effects. Inspired by nodejs' `utils.inherits`
 * @param {Function} ctor the constructor to augment
 * @param {Function} superCtor the parent constructor to use
 */
exports.inherits = function (ctor, superCtor) {
    var Obj = function() {};
    Obj.prototype = superCtor.prototype;
    ctor.prototype = new Obj();
};

/**
 * Merge the objects passed as parameters into a new one.
 * @private
 * @param {...Object} var_args All objects to merge.
 * @return {Object} a new object with the data of the others.
 */
exports.extend = function() {
    var result = {}, i, attr;
    for (i = 0; i < arguments.length; i++) { // arguments is not enumerable in some browsers
        for (attr in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
                result[attr] = arguments[i][attr];
            }
        }
    }
    return result;
};

/**
 * Transform arbitrary content into a Promise.
 * @param {String} name a name for the content being processed.
 * @param {Object} inputData the content to process.
 * @param {Boolean} isBinary true if the content is not an unicode string
 * @param {Boolean} isOptimizedBinaryString true if the string content only has one byte per character.
 * @param {Boolean} isBase64 true if the string content is encoded with base64.
 * @return {Promise} a promise in a format usable by JSZip.
 */
exports.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {

    // if inputData is already a promise, this flatten it.
    var promise = external.Promise.resolve(inputData).then(function(data) {


        var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);

        if (isBlob && typeof FileReader !== "undefined") {
            return new external.Promise(function (resolve, reject) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    resolve(e.target.result);
                };
                reader.onerror = function(e) {
                    reject(e.target.error);
                };
                reader.readAsArrayBuffer(data);
            });
        } else {
            return data;
        }
    });

    return promise.then(function(data) {
        var dataType = exports.getTypeOf(data);

        if (!dataType) {
            return external.Promise.reject(
                new Error("Can't read the data of '" + name + "'. Is it " +
                          "in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
            );
        }
        // special case : it's way easier to work with Uint8Array than with ArrayBuffer
        if (dataType === "arraybuffer") {
            data = exports.transformTo("uint8array", data);
        } else if (dataType === "string") {
            if (isBase64) {
                data = base64.decode(data);
            }
            else if (isBinary) {
                // optimizedBinaryString === true means that the file has already been filtered with a 0xFF mask
                if (isOptimizedBinaryString !== true) {
                    // this is a string, not in a base64 format.
                    // Be sure that this is a correct "binary string"
                    data = string2binary(data);
                }
            }
        }
        return data;
    });
};

},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"setimmediate":54}],33:[function(require,module,exports){
"use strict";
var readerFor = require("./reader/readerFor");
var utils = require("./utils");
var sig = require("./signature");
var ZipEntry = require("./zipEntry");
var support = require("./support");
//  class ZipEntries {{{
/**
 * All the entries in the zip file.
 * @constructor
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntries(loadOptions) {
    this.files = [];
    this.loadOptions = loadOptions;
}
ZipEntries.prototype = {
    /**
     * Check that the reader is on the specified signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
            this.reader.index -= 4;
            var signature = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature " + "(" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);

        this.zipCommentLength = this.reader.readInt(2);
        // warning : the encoding depends of the system locale
        // On a linux machine with LANG=en_US.utf8, this field is utf8 encoded.
        // On a windows machine, this field is encoded with the localized windows code page.
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        // To get consistent behavior with the generation part, we will assume that
        // this is utf8 encoded unless specified otherwise.
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        // this.versionMadeBy = this.reader.readString(2);
        // this.versionNeeded = this.reader.readInt(2);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);

        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44,
            index = 0,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;
        while (index < extraDataSize) {
            extraFieldId = this.reader.readInt(2);
            extraFieldLength = this.reader.readInt(4);
            extraFieldValue = this.reader.readData(extraFieldLength);
            this.zip64ExtensibleData[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
            throw new Error("Multi-volumes zip are not supported");
        }
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
            file = this.files[i];
            this.reader.setIndex(file.localHeaderOffset);
            this.checkSignature(sig.LOCAL_FILE_HEADER);
            file.readLocalPart(this.reader);
            file.handleUTF8();
            file.processAttributes();
        }
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
        var file;

        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
            file = new ZipEntry({
                zip64: this.zip64
            }, this.loadOptions);
            file.readCentralPart(this.reader);
            this.files.push(file);
        }

        if (this.centralDirRecords !== this.files.length) {
            if (this.centralDirRecords !== 0 && this.files.length === 0) {
                // We expected some records but couldn't find ANY.
                // This is really suspicious, as if something went wrong.
                throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
            } else {
                // We found some records but not all.
                // Something is wrong but we got something for the user: no error here.
                // console.warn("expected", this.centralDirRecords, "records in central dir, got", this.files.length);
            }
        }
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
            // Check if the content is a truncated zip or complete garbage.
            // A "LOCAL_FILE_HEADER" is not required at the beginning (auto
            // extractible zip for example) but it can give a good hint.
            // If an ajax request was used without responseType, we will also
            // get unreadable data.
            var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);

            if (isGarbage) {
                throw new Error("Can't find end of central directory : is this a zip file ? " +
                                "If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            } else {
                throw new Error("Corrupted zip: can't find end of central directory");
            }

        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();


        /* extract from the zip spec :
            4)  If one of the fields in the end of central directory
                record is too small to hold required data, the field
                should be set to -1 (0xFFFF or 0xFFFFFFFF) and the
                ZIP64 format record should be created.
            5)  The end of central directory record and the
                Zip64 end of central directory locator record must
                reside on the same disk when splitting or spanning
                an archive.
         */
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
            this.zip64 = true;

            /*
            Warning : the zip64 extension is supported, but ONLY if the 64bits integer read from
            the zip file can fit into a 32bits integer. This cannot be solved : JavaScript represents
            all numbers as 64-bit double precision IEEE 754 floating point numbers.
            So, we have 53bits for integers and bitwise operations treat everything as 32bits.
            see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators
            and http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf section 8.5
            */

            // should look for a zip64 EOCD locator
            offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset < 0) {
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            }
            this.reader.setIndex(offset);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            this.readBlockZip64EndOfCentralLocator();

            // now the zip64 EOCD record
            if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
                // console.warn("ZIP64 end of central directory not where expected.");
                this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
                if (this.relativeOffsetEndOfZip64CentralDir < 0) {
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                }
            }
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
            this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            this.readBlockZip64EndOfCentral();
        }

        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
            expectedEndOfCentralDirOffset += 20; // end of central dir 64 locator
            expectedEndOfCentralDirOffset += 12 /* should not include the leading 12 bytes */ + this.zip64EndOfCentralSize;
        }

        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;

        if (extraBytes > 0) {
            // console.warn(extraBytes, "extra bytes at beginning or within zipfile");
            if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
                // The offsets seem wrong, but we have something at the specified offset.
                // So… we keep it.
            } else {
                // the offset is wrong, update the "zero" of the reader
                // this happens if data has been prepended (crx files for example)
                this.reader.zero = extraBytes;
            }
        } else if (extraBytes < 0) {
            throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
    },
    prepareReader: function(data) {
        this.reader = readerFor(data);
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
    }
};
// }}} end of ZipEntries
module.exports = ZipEntries;

},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(require,module,exports){
"use strict";
var readerFor = require("./reader/readerFor");
var utils = require("./utils");
var CompressedObject = require("./compressedObject");
var crc32fn = require("./crc32");
var utf8 = require("./utf8");
var compressions = require("./compressions");
var support = require("./support");

var MADE_BY_DOS = 0x00;
var MADE_BY_UNIX = 0x03;

/**
 * Find a compression registered in JSZip.
 * @param {string} compressionMethod the method magic to find.
 * @return {Object|null} the JSZip compression object, null if none found.
 */
var findCompression = function(compressionMethod) {
    for (var method in compressions) {
        if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
            continue;
        }
        if (compressions[method].magic === compressionMethod) {
            return compressions[method];
        }
    }
    return null;
};

// class ZipEntry {{{
/**
 * An entry in the zip file.
 * @constructor
 * @param {Object} options Options of the current file.
 * @param {Object} loadOptions Options for loading the stream.
 */
function ZipEntry(options, loadOptions) {
    this.options = options;
    this.loadOptions = loadOptions;
}
ZipEntry.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
        // bit 1 is set
        return (this.bitFlag & 0x0001) === 0x0001;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
        // bit 11 is set
        return (this.bitFlag & 0x0800) === 0x0800;
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;

        // we already know everything from the central dir !
        // If the central dir data are false, we are doomed.
        // On the bright side, the local part is scary  : zip64, data descriptors, both, etc.
        // The less data we get here, the more reliable this should be.
        // Let's skip the whole header and dash to the data !
        reader.skip(22);
        // in some zip created on windows, the filename stored in the central dir contains \ instead of /.
        // Strangely, the filename here is OK.
        // I would love to treat these zip files as corrupted (see http://www.info-zip.org/FAQ.html#backslashes
        // or APPNOTE#4.4.17.1, "All slashes MUST be forward slashes '/'") but there are a lot of bad zip generators...
        // Search "unzip mismatching "local" filename continuing with "central" filename version" on
        // the internet.
        //
        // I think I see the logic here : the central directory is used to display
        // content and the local directory is used to extract the files. Mixing / and \
        // may be used to display \ to windows users and use / when extracting the files.
        // Unfortunately, this lead also to some issues : http://seclists.org/fulldisclosure/2009/Sep/394
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2); // can't be sure this will be the same as the central dir
        // the fileName is stored as binary data, the handleUTF8 method will take care of the encoding.
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);

        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
            throw new Error("Bug or corrupted zip : didn't get enough information from the central directory " + "(compressedSize === -1 || uncompressedSize === -1)");
        }

        compression = findCompression(this.compressionMethod);
        if (compression === null) { // no compression found
            throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
    },

    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        // this.versionNeeded = reader.readInt(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);

        if (this.isEncrypted()) {
            throw new Error("Encrypted zip are not supported");
        }

        // will be read in the local part, see the comments there
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
    },

    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function () {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;

        // Check if we have the DOS directory flag set.
        // We look for it in the DOS and UNIX permissions
        // but some unknown platform could set it as a compatibility flag.
        this.dir = this.externalFileAttributes & 0x0010 ? true : false;

        if(madeBy === MADE_BY_DOS) {
            // first 6 bits (0 to 5)
            this.dosPermissions = this.externalFileAttributes & 0x3F;
        }

        if(madeBy === MADE_BY_UNIX) {
            this.unixPermissions = (this.externalFileAttributes >> 16) & 0xFFFF;
            // the octal permissions are in (this.unixPermissions & 0x01FF).toString(8);
        }

        // fail safe : if the name ends with a / it probably means a folder
        if (!this.dir && this.fileNameStr.slice(-1) === "/") {
            this.dir = true;
        }
    },

    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function() {
        if (!this.extraFields[0x0001]) {
            return;
        }

        // should be something, preparing the extra reader
        var extraReader = readerFor(this.extraFields[0x0001].value);

        // I really hope that these 64bits integer can fit in 32 bits integer, because js
        // won't let us have more.
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
            this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
            this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
            this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
            this.diskNumberStart = extraReader.readInt(4);
        }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength,
            extraFieldId,
            extraFieldLength,
            extraFieldValue;

        if (!this.extraFields) {
            this.extraFields = {};
        }

        while (reader.index + 4 < end) {
            extraFieldId = reader.readInt(2);
            extraFieldLength = reader.readInt(2);
            extraFieldValue = reader.readData(extraFieldLength);

            this.extraFields[extraFieldId] = {
                id: extraFieldId,
                length: extraFieldLength,
                value: extraFieldValue
            };
        }

        reader.setIndex(end);
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
            this.fileNameStr = utf8.utf8decode(this.fileName);
            this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
            var upath = this.findExtraFieldUnicodePath();
            if (upath !== null) {
                this.fileNameStr = upath;
            } else {
                // ASCII text or unsupported code page
                var fileNameByteArray =  utils.transformTo(decodeParamType, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
            }

            var ucomment = this.findExtraFieldUnicodeComment();
            if (ucomment !== null) {
                this.fileCommentStr = ucomment;
            } else {
                // ASCII text or unsupported code page
                var commentByteArray =  utils.transformTo(decodeParamType, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
            }
        }
    },

    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[0x7075];
        if (upathField) {
            var extraReader = readerFor(upathField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the filename changed, this field is out of date.
            if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
    },

    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[0x6375];
        if (ucommentField) {
            var extraReader = readerFor(ucommentField.value);

            // wrong version
            if (extraReader.readInt(1) !== 1) {
                return null;
            }

            // the crc of the comment changed, this field is out of date.
            if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
                return null;
            }

            return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
    }
};
module.exports = ZipEntry;

},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(require,module,exports){
"use strict";

var StreamHelper = require("./stream/StreamHelper");
var DataWorker = require("./stream/DataWorker");
var utf8 = require("./utf8");
var CompressedObject = require("./compressedObject");
var GenericWorker = require("./stream/GenericWorker");

/**
 * A simple object representing a file in the zip file.
 * @constructor
 * @param {string} name the name of the file
 * @param {String|ArrayBuffer|Uint8Array|Buffer} data the data
 * @param {Object} options the options of the file
 */
var ZipObject = function(name, data, options) {
    this.name = name;
    this.dir = options.dir;
    this.date = options.date;
    this.comment = options.comment;
    this.unixPermissions = options.unixPermissions;
    this.dosPermissions = options.dosPermissions;

    this._data = data;
    this._dataBinary = options.binary;
    // keep only the compression
    this.options = {
        compression : options.compression,
        compressionOptions : options.compressionOptions
    };
};

ZipObject.prototype = {
    /**
     * Create an internal stream for the content of this object.
     * @param {String} type the type of each chunk.
     * @return StreamHelper the stream.
     */
    internalStream: function (type) {
        var result = null, outputType = "string";
        try {
            if (!type) {
                throw new Error("No output type specified.");
            }
            outputType = type.toLowerCase();
            var askUnicodeString = outputType === "string" || outputType === "text";
            if (outputType === "binarystring" || outputType === "text") {
                outputType = "string";
            }
            result = this._decompressWorker();

            var isUnicodeString = !this._dataBinary;

            if (isUnicodeString && !askUnicodeString) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            if (!isUnicodeString && askUnicodeString) {
                result = result.pipe(new utf8.Utf8DecodeWorker());
            }
        } catch (e) {
            result = new GenericWorker("error");
            result.error(e);
        }

        return new StreamHelper(result, outputType, "");
    },

    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async: function (type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
    },

    /**
     * Prepare the content as a nodejs stream.
     * @param {String} type the type of each chunk.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Stream the stream.
     */
    nodeStream: function (type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
    },

    /**
     * Return a worker for the compressed content.
     * @private
     * @param {Object} compression the compression object to use.
     * @param {Object} compressionOptions the options to use when compressing.
     * @return Worker the worker.
     */
    _compressWorker: function (compression, compressionOptions) {
        if (
            this._data instanceof CompressedObject &&
            this._data.compression.magic === compression.magic
        ) {
            return this._data.getCompressedWorker();
        } else {
            var result = this._decompressWorker();
            if(!this._dataBinary) {
                result = result.pipe(new utf8.Utf8EncodeWorker());
            }
            return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
    },
    /**
     * Return a worker for the decompressed content.
     * @private
     * @return Worker the worker.
     */
    _decompressWorker : function () {
        if (this._data instanceof CompressedObject) {
            return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
            return this._data;
        } else {
            return new DataWorker(this._data);
        }
    }
};

var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
var removedFn = function () {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
};

for(var i = 0; i < removedMethods.length; i++) {
    ZipObject.prototype[removedMethods[i]] = removedFn;
}
module.exports = ZipObject;

},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(require,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],37:[function(require,module,exports){
'use strict';
var immediate = require('immediate');

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["finally"] = function (callback) {
  if (typeof callback !== 'function') {
    return this;
  }
  var p = this.constructor;
  return this.then(resolve, reject);

  function resolve(value) {
    function yes () {
      return value;
    }
    return p.resolve(callback()).then(yes);
  }
  function reject(reason) {
    function no () {
      throw reason;
    }
    return p.resolve(callback()).then(no);
  }
};
Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"immediate":36}],38:[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overriden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var c            = require('./zlib/constants');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');
var GZheader     = require('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overriden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      // Convert data if needed
      if (typeof dictionary === 'string') {
        dict = strings.string2buf(dictionary);
      } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
        dict = new Uint8Array(dictionary);
      } else {
        dict = dictionary;
      }

      status = zlib_inflate.inflateSetDictionary(this.strm, dict);

    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 alligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');


exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],42:[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safary
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // use fallback for big arrays to avoid stack overflow
  if (len < 65537) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Fuckup - very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means vuffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":41}],43:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It doesn't worth to make additional optimizationa as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],44:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],45:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],46:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
                );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],48:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],49:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
    case HEAD:
      if (state.wrap === 0) {
        state.mode = TYPEDO;
        break;
      }
      //=== NEEDBITS(16);
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
        state.check = 0/*crc32(0L, Z_NULL, 0)*/;
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//

        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = FLAGS;
        break;
      }
      state.flags = 0;           /* expect zlib header */
      if (state.head) {
        state.head.done = false;
      }
      if (!(state.wrap & 1) ||   /* check if zlib header allowed */
        (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
        strm.msg = 'incorrect header check';
        state.mode = BAD;
        break;
      }
      if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
      len = (hold & 0x0f)/*BITS(4)*/ + 8;
      if (state.wbits === 0) {
        state.wbits = len;
      }
      else if (len > state.wbits) {
        strm.msg = 'invalid window size';
        state.mode = BAD;
        break;
      }
      state.dmax = 1 << len;
      //Tracev((stderr, "inflate:   zlib header ok\n"));
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = hold & 0x200 ? DICTID : TYPE;
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      break;
    case FLAGS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.flags = hold;
      if ((state.flags & 0xff) !== Z_DEFLATED) {
        strm.msg = 'unknown compression method';
        state.mode = BAD;
        break;
      }
      if (state.flags & 0xe000) {
        strm.msg = 'unknown header flags set';
        state.mode = BAD;
        break;
      }
      if (state.head) {
        state.head.text = ((hold >> 8) & 1);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = TIME;
      /* falls through */
    case TIME:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.time = hold;
      }
      if (state.flags & 0x0200) {
        //=== CRC4(state.check, hold)
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        hbuf[2] = (hold >>> 16) & 0xff;
        hbuf[3] = (hold >>> 24) & 0xff;
        state.check = crc32(state.check, hbuf, 4, 0);
        //===
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = OS;
      /* falls through */
    case OS:
      //=== NEEDBITS(16); */
      while (bits < 16) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if (state.head) {
        state.head.xflags = (hold & 0xff);
        state.head.os = (hold >> 8);
      }
      if (state.flags & 0x0200) {
        //=== CRC2(state.check, hold);
        hbuf[0] = hold & 0xff;
        hbuf[1] = (hold >>> 8) & 0xff;
        state.check = crc32(state.check, hbuf, 2, 0);
        //===//
      }
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = EXLEN;
      /* falls through */
    case EXLEN:
      if (state.flags & 0x0400) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length = hold;
        if (state.head) {
          state.head.extra_len = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      else if (state.head) {
        state.head.extra = null/*Z_NULL*/;
      }
      state.mode = EXTRA;
      /* falls through */
    case EXTRA:
      if (state.flags & 0x0400) {
        copy = state.length;
        if (copy > have) { copy = have; }
        if (copy) {
          if (state.head) {
            len = state.head.extra_len - state.length;
            if (!state.head.extra) {
              // Use untyped array for more conveniend processing later
              state.head.extra = new Array(state.head.extra_len);
            }
            utils.arraySet(
              state.head.extra,
              input,
              next,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              copy,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len
            );
            //zmemcpy(state.head.extra + len, next,
            //        len + copy > state.head.extra_max ?
            //        state.head.extra_max - len : copy);
          }
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          state.length -= copy;
        }
        if (state.length) { break inf_leave; }
      }
      state.length = 0;
      state.mode = NAME;
      /* falls through */
    case NAME:
      if (state.flags & 0x0800) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          // TODO: 2 or 1 bytes?
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.name_max*/)) {
            state.head.name += String.fromCharCode(len);
          }
        } while (len && copy < have);

        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.name = null;
      }
      state.length = 0;
      state.mode = COMMENT;
      /* falls through */
    case COMMENT:
      if (state.flags & 0x1000) {
        if (have === 0) { break inf_leave; }
        copy = 0;
        do {
          len = input[next + copy++];
          /* use constant limit because in js we should not preallocate memory */
          if (state.head && len &&
              (state.length < 65536 /*state.head.comm_max*/)) {
            state.head.comment += String.fromCharCode(len);
          }
        } while (len && copy < have);
        if (state.flags & 0x0200) {
          state.check = crc32(state.check, input, copy, next);
        }
        have -= copy;
        next += copy;
        if (len) { break inf_leave; }
      }
      else if (state.head) {
        state.head.comment = null;
      }
      state.mode = HCRC;
      /* falls through */
    case HCRC:
      if (state.flags & 0x0200) {
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.check & 0xffff)) {
          strm.msg = 'header crc mismatch';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
      }
      if (state.head) {
        state.head.hcrc = ((state.flags >> 9) & 1);
        state.head.done = true;
      }
      strm.adler = state.check = 0;
      state.mode = TYPE;
      break;
    case DICTID:
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      strm.adler = state.check = zswap32(hold);
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = DICT;
      /* falls through */
    case DICT:
      if (state.havedict === 0) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        return Z_NEED_DICT;
      }
      strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
      state.mode = TYPE;
      /* falls through */
    case TYPE:
      if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case TYPEDO:
      if (state.last) {
        //--- BYTEBITS() ---//
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        state.mode = CHECK;
        break;
      }
      //=== NEEDBITS(3); */
      while (bits < 3) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.last = (hold & 0x01)/*BITS(1)*/;
      //--- DROPBITS(1) ---//
      hold >>>= 1;
      bits -= 1;
      //---//

      switch ((hold & 0x03)/*BITS(2)*/) {
      case 0:                             /* stored block */
        //Tracev((stderr, "inflate:     stored block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = STORED;
        break;
      case 1:                             /* fixed block */
        fixedtables(state);
        //Tracev((stderr, "inflate:     fixed codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = LEN_;             /* decode codes */
        if (flush === Z_TREES) {
          //--- DROPBITS(2) ---//
          hold >>>= 2;
          bits -= 2;
          //---//
          break inf_leave;
        }
        break;
      case 2:                             /* dynamic block */
        //Tracev((stderr, "inflate:     dynamic codes block%s\n",
        //        state.last ? " (last)" : ""));
        state.mode = TABLE;
        break;
      case 3:
        strm.msg = 'invalid block type';
        state.mode = BAD;
      }
      //--- DROPBITS(2) ---//
      hold >>>= 2;
      bits -= 2;
      //---//
      break;
    case STORED:
      //--- BYTEBITS() ---// /* go to byte boundary */
      hold >>>= bits & 7;
      bits -= bits & 7;
      //---//
      //=== NEEDBITS(32); */
      while (bits < 32) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
        strm.msg = 'invalid stored block lengths';
        state.mode = BAD;
        break;
      }
      state.length = hold & 0xffff;
      //Tracev((stderr, "inflate:       stored length %u\n",
      //        state.length));
      //=== INITBITS();
      hold = 0;
      bits = 0;
      //===//
      state.mode = COPY_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case COPY_:
      state.mode = COPY;
      /* falls through */
    case COPY:
      copy = state.length;
      if (copy) {
        if (copy > have) { copy = have; }
        if (copy > left) { copy = left; }
        if (copy === 0) { break inf_leave; }
        //--- zmemcpy(put, next, copy); ---
        utils.arraySet(output, input, next, copy, put);
        //---//
        have -= copy;
        next += copy;
        left -= copy;
        put += copy;
        state.length -= copy;
        break;
      }
      //Tracev((stderr, "inflate:       stored end\n"));
      state.mode = TYPE;
      break;
    case TABLE:
      //=== NEEDBITS(14); */
      while (bits < 14) {
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
      }
      //===//
      state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
      //--- DROPBITS(5) ---//
      hold >>>= 5;
      bits -= 5;
      //---//
      state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
      //--- DROPBITS(4) ---//
      hold >>>= 4;
      bits -= 4;
      //---//
//#ifndef PKZIP_BUG_WORKAROUND
      if (state.nlen > 286 || state.ndist > 30) {
        strm.msg = 'too many length or distance symbols';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracev((stderr, "inflate:       table sizes ok\n"));
      state.have = 0;
      state.mode = LENLENS;
      /* falls through */
    case LENLENS:
      while (state.have < state.ncode) {
        //=== NEEDBITS(3);
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
        //--- DROPBITS(3) ---//
        hold >>>= 3;
        bits -= 3;
        //---//
      }
      while (state.have < 19) {
        state.lens[order[state.have++]] = 0;
      }
      // We have separate tables & no pointers. 2 commented lines below not needed.
      //state.next = state.codes;
      //state.lencode = state.next;
      // Switch to use dynamic table
      state.lencode = state.lendyn;
      state.lenbits = 7;

      opts = { bits: state.lenbits };
      ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
      state.lenbits = opts.bits;

      if (ret) {
        strm.msg = 'invalid code lengths set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, "inflate:       code lengths ok\n"));
      state.have = 0;
      state.mode = CODELENS;
      /* falls through */
    case CODELENS:
      while (state.have < state.nlen + state.ndist) {
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_val < 16) {
          //--- DROPBITS(here.bits) ---//
          hold >>>= here_bits;
          bits -= here_bits;
          //---//
          state.lens[state.have++] = here_val;
        }
        else {
          if (here_val === 16) {
            //=== NEEDBITS(here.bits + 2);
            n = here_bits + 2;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            if (state.have === 0) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            len = state.lens[state.have - 1];
            copy = 3 + (hold & 0x03);//BITS(2);
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            //---//
          }
          else if (here_val === 17) {
            //=== NEEDBITS(here.bits + 3);
            n = here_bits + 3;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 3 + (hold & 0x07);//BITS(3);
            //--- DROPBITS(3) ---//
            hold >>>= 3;
            bits -= 3;
            //---//
          }
          else {
            //=== NEEDBITS(here.bits + 7);
            n = here_bits + 7;
            while (bits < n) {
              if (have === 0) { break inf_leave; }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            //===//
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            len = 0;
            copy = 11 + (hold & 0x7f);//BITS(7);
            //--- DROPBITS(7) ---//
            hold >>>= 7;
            bits -= 7;
            //---//
          }
          if (state.have + copy > state.nlen + state.ndist) {
            strm.msg = 'invalid bit length repeat';
            state.mode = BAD;
            break;
          }
          while (copy--) {
            state.lens[state.have++] = len;
          }
        }
      }

      /* handle error breaks in while */
      if (state.mode === BAD) { break; }

      /* check for end-of-block code (better have one) */
      if (state.lens[256] === 0) {
        strm.msg = 'invalid code -- missing end-of-block';
        state.mode = BAD;
        break;
      }

      /* build code tables -- note: do not change the lenbits or distbits
         values here (9 and 6) without reading the comments in inftrees.h
         concerning the ENOUGH constants, which depend on those values */
      state.lenbits = 9;

      opts = { bits: state.lenbits };
      ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.lenbits = opts.bits;
      // state.lencode = state.next;

      if (ret) {
        strm.msg = 'invalid literal/lengths set';
        state.mode = BAD;
        break;
      }

      state.distbits = 6;
      //state.distcode.copy(state.codes);
      // Switch to use dynamic table
      state.distcode = state.distdyn;
      opts = { bits: state.distbits };
      ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
      // We have separate tables & no pointers. 2 commented lines below not needed.
      // state.next_index = opts.table_index;
      state.distbits = opts.bits;
      // state.distcode = state.next;

      if (ret) {
        strm.msg = 'invalid distances set';
        state.mode = BAD;
        break;
      }
      //Tracev((stderr, 'inflate:       codes ok\n'));
      state.mode = LEN_;
      if (flush === Z_TREES) { break inf_leave; }
      /* falls through */
    case LEN_:
      state.mode = LEN;
      /* falls through */
    case LEN:
      if (have >= 6 && left >= 258) {
        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---
        inflate_fast(strm, _out);
        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        if (state.mode === TYPE) {
          state.back = -1;
        }
        break;
      }
      state.back = 0;
      for (;;) {
        here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if (here_bits <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if (here_op && (here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.lencode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      state.length = here_val;
      if (here_op === 0) {
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        state.mode = LIT;
        break;
      }
      if (here_op & 32) {
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.back = -1;
        state.mode = TYPE;
        break;
      }
      if (here_op & 64) {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break;
      }
      state.extra = here_op & 15;
      state.mode = LENEXT;
      /* falls through */
    case LENEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
      //Tracevv((stderr, "inflate:         length %u\n", state.length));
      state.was = state.length;
      state.mode = DIST;
      /* falls through */
    case DIST:
      for (;;) {
        here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
        here_bits = here >>> 24;
        here_op = (here >>> 16) & 0xff;
        here_val = here & 0xffff;

        if ((here_bits) <= bits) { break; }
        //--- PULLBYTE() ---//
        if (have === 0) { break inf_leave; }
        have--;
        hold += input[next++] << bits;
        bits += 8;
        //---//
      }
      if ((here_op & 0xf0) === 0) {
        last_bits = here_bits;
        last_op = here_op;
        last_val = here_val;
        for (;;) {
          here = state.distcode[last_val +
                  ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((last_bits + here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        //--- DROPBITS(last.bits) ---//
        hold >>>= last_bits;
        bits -= last_bits;
        //---//
        state.back += last_bits;
      }
      //--- DROPBITS(here.bits) ---//
      hold >>>= here_bits;
      bits -= here_bits;
      //---//
      state.back += here_bits;
      if (here_op & 64) {
        strm.msg = 'invalid distance code';
        state.mode = BAD;
        break;
      }
      state.offset = here_val;
      state.extra = (here_op) & 15;
      state.mode = DISTEXT;
      /* falls through */
    case DISTEXT:
      if (state.extra) {
        //=== NEEDBITS(state.extra);
        n = state.extra;
        while (bits < n) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
        //--- DROPBITS(state.extra) ---//
        hold >>>= state.extra;
        bits -= state.extra;
        //---//
        state.back += state.extra;
      }
//#ifdef INFLATE_STRICT
      if (state.offset > state.dmax) {
        strm.msg = 'invalid distance too far back';
        state.mode = BAD;
        break;
      }
//#endif
      //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
      state.mode = MATCH;
      /* falls through */
    case MATCH:
      if (left === 0) { break inf_leave; }
      copy = _out - left;
      if (state.offset > copy) {         /* copy from window */
        copy = state.offset - copy;
        if (copy > state.whave) {
          if (state.sane) {
            strm.msg = 'invalid distance too far back';
            state.mode = BAD;
            break;
          }
// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
        }
        if (copy > state.wnext) {
          copy -= state.wnext;
          from = state.wsize - copy;
        }
        else {
          from = state.wnext - copy;
        }
        if (copy > state.length) { copy = state.length; }
        from_source = state.window;
      }
      else {                              /* copy from output */
        from_source = output;
        from = put - state.offset;
        copy = state.length;
      }
      if (copy > left) { copy = left; }
      left -= copy;
      state.length -= copy;
      do {
        output[put++] = from_source[from++];
      } while (--copy);
      if (state.length === 0) { state.mode = LEN; }
      break;
    case LIT:
      if (left === 0) { break inf_leave; }
      output[put++] = state.length;
      left--;
      state.mode = LEN;
      break;
    case CHECK:
      if (state.wrap) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          // Use '|' insdead of '+' to make sure that result is signed
          hold |= input[next++] << bits;
          bits += 8;
        }
        //===//
        _out -= left;
        strm.total_out += _out;
        state.total += _out;
        if (_out) {
          strm.adler = state.check =
              /*UPDATE(state.check, put - _out, _out);*/
              (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

        }
        _out = left;
        // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
        if ((state.flags ? hold : zswap32(hold)) !== state.check) {
          strm.msg = 'incorrect data check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   check matches trailer\n"));
      }
      state.mode = LENGTH;
      /* falls through */
    case LENGTH:
      if (state.wrap && state.flags) {
        //=== NEEDBITS(32);
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (hold !== (state.total & 0xffffffff)) {
          strm.msg = 'incorrect length check';
          state.mode = BAD;
          break;
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        //Tracev((stderr, "inflate:   length matches trailer\n"));
      }
      state.mode = DONE;
      /* falls through */
    case DONE:
      ret = Z_STREAM_END;
      break inf_leave;
    case BAD:
      ret = Z_DATA_ERROR;
      break inf_leave;
    case MEM:
      return Z_MEM_ERROR;
    case SYNC:
      /* falls through */
    default:
      return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":41}],51:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],52:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array insdead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defailts,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":41}],53:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],54:[function(require,module,exports){
(function (global){
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[10])(10)
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jszip"));
	else if(typeof define === 'function' && define.amd)
		define(["jszip"], factory);
	else if(typeof exports === 'object')
		exports["docx"] = factory(require("jszip"));
	else
		root["docx"] = factory(root["JSZip"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_jszip__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mathml.scss":
/*!*************************!*\
  !*** ./src/mathml.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@namespace \"http://www.w3.org/1998/Math/MathML\";\nmath {\n  display: inline-block;\n  line-height: initial;\n}\n\nmfrac {\n  display: inline-block;\n  vertical-align: -50%;\n  text-align: center;\n}\nmfrac > :first-child {\n  border-bottom: solid thin currentColor;\n}\nmfrac > * {\n  display: block;\n}\n\nmsub > :nth-child(2) {\n  font-size: smaller;\n  vertical-align: sub;\n}\n\nmsup > :nth-child(2) {\n  font-size: smaller;\n  vertical-align: super;\n}\n\nmunder, mover, munderover {\n  display: inline-flex;\n  flex-flow: column nowrap;\n  vertical-align: middle;\n  text-align: center;\n}\nmunder > :not(:first-child), mover > :not(:first-child), munderover > :not(:first-child) {\n  font-size: smaller;\n}\n\nmunderover > :last-child {\n  order: -1;\n}\n\nmroot, msqrt {\n  position: relative;\n  display: inline-block;\n  border-top: solid thin currentColor;\n  margin-top: 0.5px;\n  vertical-align: middle;\n  margin-left: 1ch;\n}\nmroot:before, msqrt:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  width: 1ch;\n  left: -1ch;\n  top: -1px;\n  bottom: 0;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", "",{"version":3,"sources":["webpack://./src/mathml.scss"],"names":[],"mappings":"AAAA,+CAAA;AAEA;EACI,qBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,qBAAA;EACA,oBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,sCAAA;AAAR;AAGI;EACI,cAAA;AADR;;AAMI;EACI,kBAAA;EACA,mBAAA;AAHR;;AAQI;EACI,kBAAA;EACA,qBAAA;AALR;;AASA;EACI,oBAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;AANJ;AAQI;EACI,kBAAA;AANR;;AAWI;EAAgB,SAAA;AAPpB;;AAUA;EACI,kBAAA;EACA,qBAAA;EACA,mCAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;AAPJ;AASI;EACI,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;EACA,yDAAA;AAPR","sourcesContent":["@namespace \"http://www.w3.org/1998/Math/MathML\";\r\n\r\nmath {\r\n    display: inline-block;\r\n    line-height: initial;\r\n}\r\n\r\nmfrac {\r\n    display: inline-block;\r\n    vertical-align: -50%;\r\n    text-align: center;\r\n\r\n    &>:first-child {\r\n        border-bottom: solid thin currentColor;\r\n    }\r\n\r\n    &>* {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmsub {\r\n    &>:nth-child(2) {\r\n        font-size: smaller;\r\n        vertical-align: sub;\r\n    }\r\n}\r\n\r\nmsup {\r\n    &>:nth-child(2) {\r\n        font-size: smaller;\r\n        vertical-align: super;\r\n    }\r\n}\r\n\r\nmunder, mover, munderover {\r\n    display: inline-flex;\r\n    flex-flow: column nowrap;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n\r\n    &>:not(:first-child) {\r\n        font-size: smaller;\r\n    }\r\n}\r\n\r\nmunderover {\r\n    &>:last-child { order: -1; }\r\n}\r\n\r\nmroot, msqrt {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-top: solid thin currentColor;  \r\n    margin-top: 0.5px;\r\n    vertical-align: middle;  \r\n    margin-left: 1ch; \r\n\r\n    &:before {\r\n        content: \"\";\r\n        display: inline-block;\r\n        position: absolute;\r\n        width: 1ch;\r\n        left: -1ch;\r\n        top: -1px;\r\n        bottom: 0;\r\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\");\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/common/open-xml-package.ts":
/*!****************************************!*\
  !*** ./src/common/open-xml-package.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenXmlPackage = void 0;
const JSZip = __webpack_require__(/*! jszip */ "jszip");
const xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
const relationship_1 = __webpack_require__(/*! ./relationship */ "./src/common/relationship.ts");
class OpenXmlPackage {
    constructor(_zip, options) {
        this._zip = _zip;
        this.options = options;
        this.xmlParser = new xml_parser_1.XmlParser();
    }
    get(path) {
        return this._zip.files[normalizePath(path)];
    }
    update(path, content) {
        this._zip.file(path, content);
    }
    static load(input, options) {
        return JSZip.loadAsync(input).then(zip => new OpenXmlPackage(zip, options));
    }
    save(type = "blob") {
        return this._zip.generateAsync({ type });
    }
    load(path, type = "string") {
        var _a, _b;
        return (_b = (_a = this.get(path)) === null || _a === void 0 ? void 0 : _a.async(type)) !== null && _b !== void 0 ? _b : Promise.resolve(null);
    }
    loadRelationships(path = null) {
        let relsPath = `_rels/.rels`;
        if (path != null) {
            const [f, fn] = (0, utils_1.splitPath)(path);
            relsPath = `${f}_rels/${fn}.rels`;
        }
        return this.load(relsPath)
            .then(txt => txt ? (0, relationship_1.parseRelationships)(this.parseXmlDocument(txt).firstElementChild, this.xmlParser) : null);
    }
    parseXmlDocument(txt) {
        return (0, xml_parser_1.parseXmlString)(txt, this.options.trimXmlDeclaration);
    }
}
exports.OpenXmlPackage = OpenXmlPackage;
function normalizePath(path) {
    return path.startsWith('/') ? path.substr(1) : path;
}


/***/ }),

/***/ "./src/common/part.ts":
/*!****************************!*\
  !*** ./src/common/part.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Part = void 0;
const xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
class Part {
    constructor(_package, path) {
        this._package = _package;
        this.path = path;
    }
    load() {
        return Promise.all([
            this._package.loadRelationships(this.path).then(rels => {
                this.rels = rels;
            }),
            this._package.load(this.path).then(text => {
                const xmlDoc = this._package.parseXmlDocument(text);
                if (this._package.options.keepOrigin) {
                    this._xmlDocument = xmlDoc;
                }
                this.parseXml(xmlDoc.firstElementChild);
            })
        ]);
    }
    save() {
        this._package.update(this.path, (0, xml_parser_1.serializeXmlString)(this._xmlDocument));
    }
    parseXml(root) {
    }
}
exports.Part = Part;


/***/ }),

/***/ "./src/common/relationship.ts":
/*!************************************!*\
  !*** ./src/common/relationship.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRelationships = exports.RelationshipTypes = void 0;
var RelationshipTypes;
(function (RelationshipTypes) {
    RelationshipTypes["OfficeDocument"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
    RelationshipTypes["FontTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
    RelationshipTypes["Image"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
    RelationshipTypes["Numbering"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering";
    RelationshipTypes["Styles"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    RelationshipTypes["StylesWithEffects"] = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects";
    RelationshipTypes["Theme"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
    RelationshipTypes["Settings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings";
    RelationshipTypes["WebSettings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
    RelationshipTypes["Hyperlink"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";
    RelationshipTypes["Footnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes";
    RelationshipTypes["Endnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes";
    RelationshipTypes["Footer"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer";
    RelationshipTypes["Header"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header";
    RelationshipTypes["ExtendedProperties"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
    RelationshipTypes["CoreProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    RelationshipTypes["CustomProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
})(RelationshipTypes = exports.RelationshipTypes || (exports.RelationshipTypes = {}));
function parseRelationships(root, xml) {
    return xml.elements(root).map(e => ({
        id: xml.attr(e, "Id"),
        type: xml.attr(e, "Type"),
        target: xml.attr(e, "Target"),
        targetMode: xml.attr(e, "TargetMode")
    }));
}
exports.parseRelationships = parseRelationships;


/***/ }),

/***/ "./src/document-parser.ts":
/*!********************************!*\
  !*** ./src/document-parser.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentParser = exports.autos = void 0;
const dom_1 = __webpack_require__(/*! ./document/dom */ "./src/document/dom.ts");
const paragraph_1 = __webpack_require__(/*! ./document/paragraph */ "./src/document/paragraph.ts");
const section_1 = __webpack_require__(/*! ./document/section */ "./src/document/section.ts");
const xml_parser_1 = __webpack_require__(/*! ./parser/xml-parser */ "./src/parser/xml-parser.ts");
const run_1 = __webpack_require__(/*! ./document/run */ "./src/document/run.ts");
const bookmarks_1 = __webpack_require__(/*! ./document/bookmarks */ "./src/document/bookmarks.ts");
const common_1 = __webpack_require__(/*! ./document/common */ "./src/document/common.ts");
const vml_1 = __webpack_require__(/*! ./vml/vml */ "./src/vml/vml.ts");
exports.autos = {
    shd: "inherit",
    color: "black",
    borderColor: "black",
    highlight: "transparent"
};
const supportedNamespaceURIs = [];
const mmlTagMap = {
    "oMath": dom_1.DomType.MmlMath,
    "oMathPara": dom_1.DomType.MmlMathParagraph,
    "f": dom_1.DomType.MmlFraction,
    "num": dom_1.DomType.MmlNumerator,
    "den": dom_1.DomType.MmlDenominator,
    "rad": dom_1.DomType.MmlRadical,
    "deg": dom_1.DomType.MmlDegree,
    "e": dom_1.DomType.MmlBase,
    "sSup": dom_1.DomType.MmlSuperscript,
    "sSub": dom_1.DomType.MmlSubscript,
    "sup": dom_1.DomType.MmlSuperArgument,
    "sub": dom_1.DomType.MmlSubArgument,
    "d": dom_1.DomType.MmlDelimiter,
    "nary": dom_1.DomType.MmlNary,
};
class DocumentParser {
    constructor(options) {
        this.options = Object.assign({ ignoreWidth: false, debug: false }, options);
    }
    parseNotes(xmlDoc, elemName, elemClass) {
        var result = [];
        for (let el of xml_parser_1.default.elements(xmlDoc, elemName)) {
            const node = new elemClass();
            node.id = xml_parser_1.default.attr(el, "id");
            node.noteType = xml_parser_1.default.attr(el, "type");
            node.children = this.parseBodyElements(el);
            result.push(node);
        }
        return result;
    }
    parseDocumentFile(xmlDoc) {
        var xbody = xml_parser_1.default.element(xmlDoc, "body");
        var background = xml_parser_1.default.element(xmlDoc, "background");
        var sectPr = xml_parser_1.default.element(xbody, "sectPr");
        return {
            type: dom_1.DomType.Document,
            children: this.parseBodyElements(xbody),
            props: sectPr ? (0, section_1.parseSectionProperties)(sectPr, xml_parser_1.default) : {},
            cssStyle: background ? this.parseBackground(background) : {},
        };
    }
    parseBackground(elem) {
        var result = {};
        var color = xmlUtil.colorAttr(elem, "color");
        if (color) {
            result["background-color"] = color;
        }
        return result;
    }
    parseBodyElements(element) {
        var children = [];
        for (let elem of xml_parser_1.default.elements(element)) {
            switch (elem.localName) {
                case "p":
                    children.push(this.parseParagraph(elem));
                    break;
                case "tbl":
                    children.push(this.parseTable(elem));
                    break;
                case "sdt":
                    children.push(...this.parseSdt(elem, e => this.parseBodyElements(e)));
                    break;
            }
        }
        return children;
    }
    parseStylesFile(xstyles) {
        var result = [];
        xmlUtil.foreach(xstyles, n => {
            switch (n.localName) {
                case "style":
                    result.push(this.parseStyle(n));
                    break;
                case "docDefaults":
                    result.push(this.parseDefaultStyles(n));
                    break;
            }
        });
        return result;
    }
    parseDefaultStyles(node) {
        var result = {
            id: null,
            name: null,
            target: null,
            basedOn: null,
            styles: []
        };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "rPrDefault":
                    var rPr = xml_parser_1.default.element(c, "rPr");
                    if (rPr)
                        result.styles.push({
                            target: "span",
                            values: this.parseDefaultProperties(rPr, {})
                        });
                    break;
                case "pPrDefault":
                    var pPr = xml_parser_1.default.element(c, "pPr");
                    if (pPr)
                        result.styles.push({
                            target: "p",
                            values: this.parseDefaultProperties(pPr, {})
                        });
                    break;
            }
        });
        return result;
    }
    parseStyle(node) {
        var result = {
            id: xml_parser_1.default.attr(node, "styleId"),
            isDefault: xml_parser_1.default.boolAttr(node, "default"),
            name: null,
            target: null,
            basedOn: null,
            styles: [],
            linked: null
        };
        switch (xml_parser_1.default.attr(node, "type")) {
            case "paragraph":
                result.target = "p";
                break;
            case "table":
                result.target = "table";
                break;
            case "character":
                result.target = "span";
                break;
        }
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "basedOn":
                    result.basedOn = xml_parser_1.default.attr(n, "val");
                    break;
                case "name":
                    result.name = xml_parser_1.default.attr(n, "val");
                    break;
                case "link":
                    result.linked = xml_parser_1.default.attr(n, "val");
                    break;
                case "next":
                    result.next = xml_parser_1.default.attr(n, "val");
                    break;
                case "aliases":
                    result.aliases = xml_parser_1.default.attr(n, "val").split(",");
                    break;
                case "pPr":
                    result.styles.push({
                        target: "p",
                        values: this.parseDefaultProperties(n, {})
                    });
                    result.paragraphProps = (0, paragraph_1.parseParagraphProperties)(n, xml_parser_1.default);
                    break;
                case "rPr":
                    result.styles.push({
                        target: "span",
                        values: this.parseDefaultProperties(n, {})
                    });
                    result.runProps = (0, run_1.parseRunProperties)(n, xml_parser_1.default);
                    break;
                case "tblPr":
                case "tcPr":
                    result.styles.push({
                        target: "td",
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "tblStylePr":
                    for (let s of this.parseTableStyle(n))
                        result.styles.push(s);
                    break;
                case "rsid":
                case "qFormat":
                case "hidden":
                case "semiHidden":
                case "unhideWhenUsed":
                case "autoRedefine":
                case "uiPriority":
                    break;
                default:
                    this.options.debug && console.warn(`DOCX: Unknown style element: ${n.localName}`);
            }
        });
        return result;
    }
    parseTableStyle(node) {
        var result = [];
        var type = xml_parser_1.default.attr(node, "type");
        var selector = "";
        var modificator = "";
        switch (type) {
            case "firstRow":
                modificator = ".first-row";
                selector = "tr.first-row td";
                break;
            case "lastRow":
                modificator = ".last-row";
                selector = "tr.last-row td";
                break;
            case "firstCol":
                modificator = ".first-col";
                selector = "td.first-col";
                break;
            case "lastCol":
                modificator = ".last-col";
                selector = "td.last-col";
                break;
            case "band1Vert":
                modificator = ":not(.no-vband)";
                selector = "td.odd-col";
                break;
            case "band2Vert":
                modificator = ":not(.no-vband)";
                selector = "td.even-col";
                break;
            case "band1Horz":
                modificator = ":not(.no-hband)";
                selector = "tr.odd-row";
                break;
            case "band2Horz":
                modificator = ":not(.no-hband)";
                selector = "tr.even-row";
                break;
            default: return [];
        }
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "pPr":
                    result.push({
                        target: `${selector} p`,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "rPr":
                    result.push({
                        target: `${selector} span`,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "tblPr":
                case "tcPr":
                    result.push({
                        target: selector,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
            }
        });
        return result;
    }
    parseNumberingFile(xnums) {
        var result = [];
        var mapping = {};
        var bullets = [];
        xmlUtil.foreach(xnums, n => {
            switch (n.localName) {
                case "abstractNum":
                    this.parseAbstractNumbering(n, bullets)
                        .forEach(x => result.push(x));
                    break;
                case "numPicBullet":
                    bullets.push(this.parseNumberingPicBullet(n));
                    break;
                case "num":
                    var numId = xml_parser_1.default.attr(n, "numId");
                    var abstractNumId = xml_parser_1.default.elementAttr(n, "abstractNumId", "val");
                    mapping[abstractNumId] = numId;
                    break;
            }
        });
        result.forEach(x => x.id = mapping[x.id]);
        return result;
    }
    parseNumberingPicBullet(elem) {
        var pict = xml_parser_1.default.element(elem, "pict");
        var shape = pict && xml_parser_1.default.element(pict, "shape");
        var imagedata = shape && xml_parser_1.default.element(shape, "imagedata");
        return imagedata ? {
            id: xml_parser_1.default.intAttr(elem, "numPicBulletId"),
            src: xml_parser_1.default.attr(imagedata, "id"),
            style: xml_parser_1.default.attr(shape, "style")
        } : null;
    }
    parseAbstractNumbering(node, bullets) {
        var result = [];
        var id = xml_parser_1.default.attr(node, "abstractNumId");
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "lvl":
                    result.push(this.parseNumberingLevel(id, n, bullets));
                    break;
            }
        });
        return result;
    }
    parseNumberingLevel(id, node, bullets) {
        var result = {
            id: id,
            level: xml_parser_1.default.intAttr(node, "ilvl"),
            pStyleName: undefined,
            pStyle: {},
            rStyle: {},
            suff: "tab"
        };
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "pPr":
                    this.parseDefaultProperties(n, result.pStyle);
                    break;
                case "rPr":
                    this.parseDefaultProperties(n, result.rStyle);
                    break;
                case "lvlPicBulletId":
                    var id = xml_parser_1.default.intAttr(n, "val");
                    result.bullet = bullets.find(x => x.id == id);
                    break;
                case "lvlText":
                    result.levelText = xml_parser_1.default.attr(n, "val");
                    break;
                case "pStyle":
                    result.pStyleName = xml_parser_1.default.attr(n, "val");
                    break;
                case "numFmt":
                    result.format = xml_parser_1.default.attr(n, "val");
                    break;
                case "suff":
                    result.suff = xml_parser_1.default.attr(n, "val");
                    break;
            }
        });
        return result;
    }
    parseSdt(node, parser) {
        const sdtContent = xml_parser_1.default.element(node, "sdtContent");
        return sdtContent ? parser(sdtContent) : [];
    }
    parseInserted(node, parentParser) {
        var _a, _b;
        return {
            type: dom_1.DomType.Inserted,
            children: (_b = (_a = parentParser(node)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []
        };
    }
    parseDeleted(node, parentParser) {
        var _a, _b;
        return {
            type: dom_1.DomType.Deleted,
            children: (_b = (_a = parentParser(node)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []
        };
    }
    parseParagraph(node) {
        var result = { type: dom_1.DomType.Paragraph, children: [] };
        for (let el of xml_parser_1.default.elements(node)) {
            switch (el.localName) {
                case "pPr":
                    this.parseParagraphProperties(el, result);
                    break;
                case "r":
                    result.children.push(this.parseRun(el, result));
                    break;
                case "hyperlink":
                    result.children.push(this.parseHyperlink(el, result));
                    break;
                case "bookmarkStart":
                    result.children.push((0, bookmarks_1.parseBookmarkStart)(el, xml_parser_1.default));
                    break;
                case "bookmarkEnd":
                    result.children.push((0, bookmarks_1.parseBookmarkEnd)(el, xml_parser_1.default));
                    break;
                case "oMath":
                case "oMathPara":
                    result.children.push(this.parseMathElement(el));
                    break;
                case "sdt":
                    result.children.push(...this.parseSdt(el, e => this.parseParagraph(e).children));
                    break;
                case "ins":
                    result.children.push(this.parseInserted(el, e => this.parseParagraph(e)));
                    break;
                case "del":
                    result.children.push(this.parseDeleted(el, e => this.parseParagraph(e)));
                    break;
            }
        }
        return result;
    }
    parseParagraphProperties(elem, paragraph) {
        this.parseDefaultProperties(elem, paragraph.cssStyle = {}, null, c => {
            if ((0, paragraph_1.parseParagraphProperty)(c, paragraph, xml_parser_1.default))
                return true;
            switch (c.localName) {
                case "pStyle":
                    paragraph.styleName = xml_parser_1.default.attr(c, "val");
                    break;
                case "cnfStyle":
                    paragraph.className = values.classNameOfCnfStyle(c);
                    break;
                case "framePr":
                    this.parseFrame(c, paragraph);
                    break;
                case "rPr":
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseFrame(node, paragraph) {
        var dropCap = xml_parser_1.default.attr(node, "dropCap");
        if (dropCap == "drop")
            paragraph.cssStyle["float"] = "left";
    }
    parseHyperlink(node, parent) {
        var result = { type: dom_1.DomType.Hyperlink, parent: parent, children: [] };
        var anchor = xml_parser_1.default.attr(node, "anchor");
        var relId = xml_parser_1.default.attr(node, "id");
        if (anchor)
            result.href = "#" + anchor;
        if (relId)
            result.id = relId;
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "r":
                    result.children.push(this.parseRun(c, result));
                    break;
            }
        });
        return result;
    }
    parseRun(node, parent) {
        var result = { type: dom_1.DomType.Run, parent: parent, children: [] };
        xmlUtil.foreach(node, c => {
            c = this.checkAlternateContent(c);
            switch (c.localName) {
                case "t":
                    result.children.push({
                        type: dom_1.DomType.Text,
                        text: c.textContent
                    });
                    break;
                case "delText":
                    result.children.push({
                        type: dom_1.DomType.DeletedText,
                        text: c.textContent
                    });
                    break;
                case "fldSimple":
                    result.children.push({
                        type: dom_1.DomType.SimpleField,
                        instruction: xml_parser_1.default.attr(c, "instr"),
                        lock: xml_parser_1.default.boolAttr(c, "lock", false),
                        dirty: xml_parser_1.default.boolAttr(c, "dirty", false)
                    });
                    break;
                case "instrText":
                    result.fieldRun = true;
                    result.children.push({
                        type: dom_1.DomType.Instruction,
                        text: c.textContent
                    });
                    break;
                case "fldChar":
                    result.fieldRun = true;
                    result.children.push({
                        type: dom_1.DomType.ComplexField,
                        charType: xml_parser_1.default.attr(c, "fldCharType"),
                        lock: xml_parser_1.default.boolAttr(c, "lock", false),
                        dirty: xml_parser_1.default.boolAttr(c, "dirty", false)
                    });
                    break;
                case "noBreakHyphen":
                    result.children.push({ type: dom_1.DomType.NoBreakHyphen });
                    break;
                case "br":
                    result.children.push({
                        type: dom_1.DomType.Break,
                        break: xml_parser_1.default.attr(c, "type") || "textWrapping"
                    });
                    break;
                case "lastRenderedPageBreak":
                    result.children.push({
                        type: dom_1.DomType.Break,
                        break: "lastRenderedPageBreak"
                    });
                    break;
                case "sym":
                    result.children.push({
                        type: dom_1.DomType.Symbol,
                        font: xml_parser_1.default.attr(c, "font"),
                        char: xml_parser_1.default.attr(c, "char")
                    });
                    break;
                case "tab":
                    result.children.push({ type: dom_1.DomType.Tab });
                    break;
                case "footnoteReference":
                    result.children.push({
                        type: dom_1.DomType.FootnoteReference,
                        id: xml_parser_1.default.attr(c, "id")
                    });
                    break;
                case "endnoteReference":
                    result.children.push({
                        type: dom_1.DomType.EndnoteReference,
                        id: xml_parser_1.default.attr(c, "id")
                    });
                    break;
                case "drawing":
                    let d = this.parseDrawing(c);
                    if (d)
                        result.children = [d];
                    break;
                case "pict":
                    result.children.push(this.parseVmlPicture(c));
                    break;
                case "rPr":
                    this.parseRunProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseMathElement(elem) {
        const propsTag = `${elem.localName}Pr`;
        const result = { type: mmlTagMap[elem.localName], children: [] };
        for (const el of xml_parser_1.default.elements(elem)) {
            const childType = mmlTagMap[el.localName];
            if (childType) {
                result.children.push(this.parseMathElement(el));
            }
            else if (el.localName == "r") {
                var run = this.parseRun(el);
                run.type = dom_1.DomType.MmlRun;
                result.children.push(run);
            }
            else if (el.localName == propsTag) {
                result.props = this.parseMathProperies(el);
            }
        }
        return result;
    }
    parseMathProperies(elem) {
        const result = {};
        for (const el of xml_parser_1.default.elements(elem)) {
            switch (el.localName) {
                case "chr":
                    result.char = xml_parser_1.default.attr(el, "val");
                    break;
                case "degHide":
                    result.hideDegree = xml_parser_1.default.boolAttr(el, "val");
                    break;
                case "begChr":
                    result.beginChar = xml_parser_1.default.attr(el, "val");
                    break;
                case "endChr":
                    result.endChar = xml_parser_1.default.attr(el, "val");
                    break;
            }
        }
        return result;
    }
    parseRunProperties(elem, run) {
        this.parseDefaultProperties(elem, run.cssStyle = {}, null, c => {
            switch (c.localName) {
                case "rStyle":
                    run.styleName = xml_parser_1.default.attr(c, "val");
                    break;
                case "vertAlign":
                    run.verticalAlign = values.valueOfVertAlign(c, true);
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseVmlPicture(elem) {
        const result = { type: dom_1.DomType.VmlPicture, children: [] };
        for (const el of xml_parser_1.default.elements(elem)) {
            const child = (0, vml_1.parseVmlElement)(el);
            child && result.children.push(child);
        }
        return result;
    }
    checkAlternateContent(elem) {
        var _a;
        if (elem.localName != 'AlternateContent')
            return elem;
        var choice = xml_parser_1.default.element(elem, "Choice");
        if (choice) {
            var requires = xml_parser_1.default.attr(choice, "Requires");
            var namespaceURI = elem.lookupNamespaceURI(requires);
            if (supportedNamespaceURIs.includes(namespaceURI))
                return choice.firstElementChild;
        }
        return (_a = xml_parser_1.default.element(elem, "Fallback")) === null || _a === void 0 ? void 0 : _a.firstElementChild;
    }
    parseDrawing(node) {
        for (var n of xml_parser_1.default.elements(node)) {
            switch (n.localName) {
                case "inline":
                case "anchor":
                    return this.parseDrawingWrapper(n);
            }
        }
    }
    parseDrawingWrapper(node) {
        var _a;
        var result = { type: dom_1.DomType.Drawing, children: [], cssStyle: {} };
        var isAnchor = node.localName == "anchor";
        let wrapType = null;
        let simplePos = xml_parser_1.default.boolAttr(node, "simplePos");
        let posX = { relative: "page", align: "left", offset: "0" };
        let posY = { relative: "page", align: "top", offset: "0" };
        for (var n of xml_parser_1.default.elements(node)) {
            switch (n.localName) {
                case "simplePos":
                    if (simplePos) {
                        posX.offset = xml_parser_1.default.lengthAttr(n, "x", common_1.LengthUsage.Emu);
                        posY.offset = xml_parser_1.default.lengthAttr(n, "y", common_1.LengthUsage.Emu);
                    }
                    break;
                case "extent":
                    result.cssStyle["width"] = xml_parser_1.default.lengthAttr(n, "cx", common_1.LengthUsage.Emu);
                    result.cssStyle["height"] = xml_parser_1.default.lengthAttr(n, "cy", common_1.LengthUsage.Emu);
                    break;
                case "positionH":
                case "positionV":
                    if (!simplePos) {
                        let pos = n.localName == "positionH" ? posX : posY;
                        var alignNode = xml_parser_1.default.element(n, "align");
                        var offsetNode = xml_parser_1.default.element(n, "posOffset");
                        pos.relative = (_a = xml_parser_1.default.attr(n, "relativeFrom")) !== null && _a !== void 0 ? _a : pos.relative;
                        if (alignNode)
                            pos.align = alignNode.textContent;
                        if (offsetNode)
                            pos.offset = xmlUtil.sizeValue(offsetNode, common_1.LengthUsage.Emu);
                    }
                    break;
                case "wrapTopAndBottom":
                    wrapType = "wrapTopAndBottom";
                    break;
                case "wrapNone":
                    wrapType = "wrapNone";
                    break;
                case "graphic":
                    var g = this.parseGraphic(n);
                    if (g)
                        result.children.push(g);
                    break;
            }
        }
        if (wrapType == "wrapTopAndBottom") {
            result.cssStyle['display'] = 'block';
            if (posX.align) {
                result.cssStyle['text-align'] = posX.align;
                result.cssStyle['width'] = "100%";
            }
        }
        else if (wrapType == "wrapNone") {
            result.cssStyle['display'] = 'block';
            result.cssStyle['position'] = 'relative';
            result.cssStyle["width"] = "0px";
            result.cssStyle["height"] = "0px";
            if (posX.offset)
                result.cssStyle["left"] = posX.offset;
            if (posY.offset)
                result.cssStyle["top"] = posY.offset;
        }
        else if (isAnchor && (posX.align == 'left' || posX.align == 'right')) {
            result.cssStyle["float"] = posX.align;
        }
        return result;
    }
    parseGraphic(elem) {
        var graphicData = xml_parser_1.default.element(elem, "graphicData");
        for (let n of xml_parser_1.default.elements(graphicData)) {
            switch (n.localName) {
                case "pic":
                    return this.parsePicture(n);
            }
        }
        return null;
    }
    parsePicture(elem) {
        var result = { type: dom_1.DomType.Image, src: "", cssStyle: {} };
        var blipFill = xml_parser_1.default.element(elem, "blipFill");
        var blip = xml_parser_1.default.element(blipFill, "blip");
        result.src = xml_parser_1.default.attr(blip, "embed");
        var spPr = xml_parser_1.default.element(elem, "spPr");
        var xfrm = xml_parser_1.default.element(spPr, "xfrm");
        result.cssStyle["position"] = "relative";
        for (var n of xml_parser_1.default.elements(xfrm)) {
            switch (n.localName) {
                case "ext":
                    result.cssStyle["width"] = xml_parser_1.default.lengthAttr(n, "cx", common_1.LengthUsage.Emu);
                    result.cssStyle["height"] = xml_parser_1.default.lengthAttr(n, "cy", common_1.LengthUsage.Emu);
                    break;
                case "off":
                    result.cssStyle["left"] = xml_parser_1.default.lengthAttr(n, "x", common_1.LengthUsage.Emu);
                    result.cssStyle["top"] = xml_parser_1.default.lengthAttr(n, "y", common_1.LengthUsage.Emu);
                    break;
            }
        }
        return result;
    }
    parseTable(node) {
        var result = { type: dom_1.DomType.Table, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tr":
                    result.children.push(this.parseTableRow(c));
                    break;
                case "tblGrid":
                    result.columns = this.parseTableColumns(c);
                    break;
                case "tblPr":
                    this.parseTableProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseTableColumns(node) {
        var result = [];
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "gridCol":
                    result.push({ width: xml_parser_1.default.lengthAttr(n, "w") });
                    break;
            }
        });
        return result;
    }
    parseTableProperties(elem, table) {
        table.cssStyle = {};
        table.cellStyle = {};
        this.parseDefaultProperties(elem, table.cssStyle, table.cellStyle, c => {
            switch (c.localName) {
                case "tblStyle":
                    table.styleName = xml_parser_1.default.attr(c, "val");
                    break;
                case "tblLook":
                    table.className = values.classNameOftblLook(c);
                    break;
                case "tblpPr":
                    this.parseTablePosition(c, table);
                    break;
                case "tblStyleColBandSize":
                    table.colBandSize = xml_parser_1.default.intAttr(c, "val");
                    break;
                case "tblStyleRowBandSize":
                    table.rowBandSize = xml_parser_1.default.intAttr(c, "val");
                    break;
                default:
                    return false;
            }
            return true;
        });
        switch (table.cssStyle["text-align"]) {
            case "center":
                delete table.cssStyle["text-align"];
                table.cssStyle["margin-left"] = "auto";
                table.cssStyle["margin-right"] = "auto";
                break;
            case "right":
                delete table.cssStyle["text-align"];
                table.cssStyle["margin-left"] = "auto";
                break;
        }
    }
    parseTablePosition(node, table) {
        var topFromText = xml_parser_1.default.lengthAttr(node, "topFromText");
        var bottomFromText = xml_parser_1.default.lengthAttr(node, "bottomFromText");
        var rightFromText = xml_parser_1.default.lengthAttr(node, "rightFromText");
        var leftFromText = xml_parser_1.default.lengthAttr(node, "leftFromText");
        table.cssStyle["float"] = 'left';
        table.cssStyle["margin-bottom"] = values.addSize(table.cssStyle["margin-bottom"], bottomFromText);
        table.cssStyle["margin-left"] = values.addSize(table.cssStyle["margin-left"], leftFromText);
        table.cssStyle["margin-right"] = values.addSize(table.cssStyle["margin-right"], rightFromText);
        table.cssStyle["margin-top"] = values.addSize(table.cssStyle["margin-top"], topFromText);
    }
    parseTableRow(node) {
        var result = { type: dom_1.DomType.Row, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tc":
                    result.children.push(this.parseTableCell(c));
                    break;
                case "trPr":
                    this.parseTableRowProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseTableRowProperties(elem, row) {
        row.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            switch (c.localName) {
                case "cnfStyle":
                    row.className = values.classNameOfCnfStyle(c);
                    break;
                case "tblHeader":
                    row.isHeader = xml_parser_1.default.boolAttr(c, "val");
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseTableCell(node) {
        var result = { type: dom_1.DomType.Cell, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tbl":
                    result.children.push(this.parseTable(c));
                    break;
                case "p":
                    result.children.push(this.parseParagraph(c));
                    break;
                case "tcPr":
                    this.parseTableCellProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseTableCellProperties(elem, cell) {
        cell.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            var _a;
            switch (c.localName) {
                case "gridSpan":
                    cell.span = xml_parser_1.default.intAttr(c, "val", null);
                    break;
                case "vMerge":
                    cell.verticalMerge = (_a = xml_parser_1.default.attr(c, "val")) !== null && _a !== void 0 ? _a : "continue";
                    break;
                case "cnfStyle":
                    cell.className = values.classNameOfCnfStyle(c);
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseDefaultProperties(elem, style = null, childStyle = null, handler = null) {
        style = style || {};
        xmlUtil.foreach(elem, c => {
            if (handler === null || handler === void 0 ? void 0 : handler(c))
                return;
            switch (c.localName) {
                case "jc":
                    style["text-align"] = values.valueOfJc(c);
                    break;
                case "textAlignment":
                    style["vertical-align"] = values.valueOfTextAlignment(c);
                    break;
                case "color":
                    style["color"] = xmlUtil.colorAttr(c, "val", null, exports.autos.color);
                    break;
                case "sz":
                    style["font-size"] = style["min-height"] = xml_parser_1.default.lengthAttr(c, "val", common_1.LengthUsage.FontSize);
                    break;
                case "shd":
                    style["background-color"] = xmlUtil.colorAttr(c, "fill", null, exports.autos.shd);
                    break;
                case "highlight":
                    style["background-color"] = xmlUtil.colorAttr(c, "val", null, exports.autos.highlight);
                    break;
                case "vertAlign":
                    break;
                case "position":
                    style.verticalAlign = xml_parser_1.default.lengthAttr(c, "val", common_1.LengthUsage.FontSize);
                    break;
                case "tcW":
                    if (this.options.ignoreWidth)
                        break;
                case "tblW":
                    style["width"] = values.valueOfSize(c, "w");
                    break;
                case "trHeight":
                    this.parseTrHeight(c, style);
                    break;
                case "strike":
                    style["text-decoration"] = xml_parser_1.default.boolAttr(c, "val", true) ? "line-through" : "none";
                    break;
                case "b":
                    style["font-weight"] = xml_parser_1.default.boolAttr(c, "val", true) ? "bold" : "normal";
                    break;
                case "i":
                    style["font-style"] = xml_parser_1.default.boolAttr(c, "val", true) ? "italic" : "normal";
                    break;
                case "caps":
                    style["text-transform"] = xml_parser_1.default.boolAttr(c, "val", true) ? "uppercase" : "none";
                    break;
                case "smallCaps":
                    style["text-transform"] = xml_parser_1.default.boolAttr(c, "val", true) ? "lowercase" : "none";
                    break;
                case "u":
                    this.parseUnderline(c, style);
                    break;
                case "ind":
                case "tblInd":
                    this.parseIndentation(c, style);
                    break;
                case "rFonts":
                    this.parseFont(c, style);
                    break;
                case "tblBorders":
                    this.parseBorderProperties(c, childStyle || style);
                    break;
                case "tblCellSpacing":
                    style["border-spacing"] = values.valueOfMargin(c);
                    style["border-collapse"] = "separate";
                    break;
                case "pBdr":
                    this.parseBorderProperties(c, style);
                    break;
                case "bdr":
                    style["border"] = values.valueOfBorder(c);
                    break;
                case "tcBorders":
                    this.parseBorderProperties(c, style);
                    break;
                case "vanish":
                    if (xml_parser_1.default.boolAttr(c, "val", true))
                        style["display"] = "none";
                    break;
                case "kern":
                    break;
                case "noWrap":
                    break;
                case "tblCellMar":
                case "tcMar":
                    this.parseMarginProperties(c, childStyle || style);
                    break;
                case "tblLayout":
                    style["table-layout"] = values.valueOfTblLayout(c);
                    break;
                case "vAlign":
                    style["vertical-align"] = values.valueOfTextAlignment(c);
                    break;
                case "spacing":
                    if (elem.localName == "pPr")
                        this.parseSpacing(c, style);
                    break;
                case "wordWrap":
                    if (xml_parser_1.default.boolAttr(c, "val"))
                        style["overflow-wrap"] = "break-word";
                    break;
                case "bCs":
                case "iCs":
                case "szCs":
                case "tabs":
                case "outlineLvl":
                case "contextualSpacing":
                case "tblStyleColBandSize":
                case "tblStyleRowBandSize":
                case "webHidden":
                case "pageBreakBefore":
                case "suppressLineNumbers":
                case "keepLines":
                case "keepNext":
                case "lang":
                case "widowControl":
                case "bidi":
                case "rtl":
                case "noProof":
                    break;
                default:
                    if (this.options.debug)
                        console.warn(`DOCX: Unknown document element: ${elem.localName}.${c.localName}`);
                    break;
            }
        });
        return style;
    }
    parseUnderline(node, style) {
        var val = xml_parser_1.default.attr(node, "val");
        if (val == null)
            return;
        switch (val) {
            case "dash":
            case "dashDotDotHeavy":
            case "dashDotHeavy":
            case "dashedHeavy":
            case "dashLong":
            case "dashLongHeavy":
            case "dotDash":
            case "dotDotDash":
                style["text-decoration-style"] = "dashed";
                break;
            case "dotted":
            case "dottedHeavy":
                style["text-decoration-style"] = "dotted";
                break;
            case "double":
                style["text-decoration-style"] = "double";
                break;
            case "single":
            case "thick":
                style["text-decoration"] = "underline";
                break;
            case "wave":
            case "wavyDouble":
            case "wavyHeavy":
                style["text-decoration-style"] = "wavy";
                break;
            case "words":
                style["text-decoration"] = "underline";
                break;
            case "none":
                style["text-decoration"] = "none";
                break;
        }
        var col = xmlUtil.colorAttr(node, "color");
        if (col)
            style["text-decoration-color"] = col;
    }
    parseFont(node, style) {
        var ascii = xml_parser_1.default.attr(node, "ascii");
        var asciiTheme = values.themeValue(node, "asciiTheme");
        var fonts = [ascii, asciiTheme].filter(x => x).join(', ');
        if (fonts.length > 0)
            style["font-family"] = fonts;
    }
    parseIndentation(node, style) {
        var firstLine = xml_parser_1.default.lengthAttr(node, "firstLine");
        var hanging = xml_parser_1.default.lengthAttr(node, "hanging");
        var left = xml_parser_1.default.lengthAttr(node, "left");
        var start = xml_parser_1.default.lengthAttr(node, "start");
        var right = xml_parser_1.default.lengthAttr(node, "right");
        var end = xml_parser_1.default.lengthAttr(node, "end");
        if (firstLine)
            style["text-indent"] = firstLine;
        if (hanging)
            style["text-indent"] = `-${hanging}`;
        if (left || start)
            style["margin-left"] = left || start;
        if (right || end)
            style["margin-right"] = right || end;
    }
    parseSpacing(node, style) {
        var before = xml_parser_1.default.lengthAttr(node, "before");
        var after = xml_parser_1.default.lengthAttr(node, "after");
        var line = xml_parser_1.default.intAttr(node, "line", null);
        var lineRule = xml_parser_1.default.attr(node, "lineRule");
        if (before)
            style["margin-top"] = before;
        if (after)
            style["margin-bottom"] = after;
        if (line !== null) {
            switch (lineRule) {
                case "auto":
                    style["line-height"] = `${(line / 240).toFixed(2)}`;
                    break;
                case "atLeast":
                    style["line-height"] = `calc(100% + ${line / 20}pt)`;
                    break;
                default:
                    style["line-height"] = style["min-height"] = `${line / 20}pt`;
                    break;
            }
        }
    }
    parseMarginProperties(node, output) {
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "left":
                    output["padding-left"] = values.valueOfMargin(c);
                    break;
                case "right":
                    output["padding-right"] = values.valueOfMargin(c);
                    break;
                case "top":
                    output["padding-top"] = values.valueOfMargin(c);
                    break;
                case "bottom":
                    output["padding-bottom"] = values.valueOfMargin(c);
                    break;
            }
        });
    }
    parseTrHeight(node, output) {
        switch (xml_parser_1.default.attr(node, "hRule")) {
            case "exact":
                output["height"] = xml_parser_1.default.lengthAttr(node, "val");
                break;
            case "atLeast":
            default:
                output["height"] = xml_parser_1.default.lengthAttr(node, "val");
                break;
        }
    }
    parseBorderProperties(node, output) {
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "start":
                case "left":
                    output["border-left"] = values.valueOfBorder(c);
                    break;
                case "end":
                case "right":
                    output["border-right"] = values.valueOfBorder(c);
                    break;
                case "top":
                    output["border-top"] = values.valueOfBorder(c);
                    break;
                case "bottom":
                    output["border-bottom"] = values.valueOfBorder(c);
                    break;
            }
        });
    }
}
exports.DocumentParser = DocumentParser;
const knownColors = ['black', 'blue', 'cyan', 'darkBlue', 'darkCyan', 'darkGray', 'darkGreen', 'darkMagenta', 'darkRed', 'darkYellow', 'green', 'lightGray', 'magenta', 'none', 'red', 'white', 'yellow'];
class xmlUtil {
    static foreach(node, cb) {
        for (var i = 0; i < node.childNodes.length; i++) {
            let n = node.childNodes[i];
            if (n.nodeType == Node.ELEMENT_NODE)
                cb(n);
        }
    }
    static colorAttr(node, attrName, defValue = null, autoColor = 'black') {
        var v = xml_parser_1.default.attr(node, attrName);
        if (v) {
            if (v == "auto") {
                return autoColor;
            }
            else if (knownColors.includes(v)) {
                return v;
            }
            return `#${v}`;
        }
        var themeColor = xml_parser_1.default.attr(node, "themeColor");
        return themeColor ? `var(--docx-${themeColor}-color)` : defValue;
    }
    static sizeValue(node, type = common_1.LengthUsage.Dxa) {
        return (0, common_1.convertLength)(node.textContent, type);
    }
}
class values {
    static themeValue(c, attr) {
        var val = xml_parser_1.default.attr(c, attr);
        return val ? `var(--docx-${val}-font)` : null;
    }
    static valueOfSize(c, attr) {
        var type = common_1.LengthUsage.Dxa;
        switch (xml_parser_1.default.attr(c, "type")) {
            case "dxa": break;
            case "pct":
                type = common_1.LengthUsage.Percent;
                break;
            case "auto": return "auto";
        }
        return xml_parser_1.default.lengthAttr(c, attr, type);
    }
    static valueOfMargin(c) {
        return xml_parser_1.default.lengthAttr(c, "w");
    }
    static valueOfBorder(c) {
        var type = xml_parser_1.default.attr(c, "val");
        if (type == "nil")
            return "none";
        var color = xmlUtil.colorAttr(c, "color");
        var size = xml_parser_1.default.lengthAttr(c, "sz", common_1.LengthUsage.Border);
        return `${size} solid ${color == "auto" ? exports.autos.borderColor : color}`;
    }
    static valueOfTblLayout(c) {
        var type = xml_parser_1.default.attr(c, "val");
        return type == "fixed" ? "fixed" : "auto";
    }
    static classNameOfCnfStyle(c) {
        const val = xml_parser_1.default.attr(c, "val");
        const classes = [
            'first-row', 'last-row', 'first-col', 'last-col',
            'odd-col', 'even-col', 'odd-row', 'even-row',
            'ne-cell', 'nw-cell', 'se-cell', 'sw-cell'
        ];
        return classes.filter((_, i) => val[i] == '1').join(' ');
    }
    static valueOfJc(c) {
        var type = xml_parser_1.default.attr(c, "val");
        switch (type) {
            case "start":
            case "left": return "left";
            case "center": return "center";
            case "end":
            case "right": return "right";
            case "both": return "justify";
        }
        return type;
    }
    static valueOfVertAlign(c, asTagName = false) {
        var type = xml_parser_1.default.attr(c, "val");
        switch (type) {
            case "subscript": return "sub";
            case "superscript": return asTagName ? "sup" : "super";
        }
        return asTagName ? null : type;
    }
    static valueOfTextAlignment(c) {
        var type = xml_parser_1.default.attr(c, "val");
        switch (type) {
            case "auto":
            case "baseline": return "baseline";
            case "top": return "top";
            case "center": return "middle";
            case "bottom": return "bottom";
        }
        return type;
    }
    static addSize(a, b) {
        if (a == null)
            return b;
        if (b == null)
            return a;
        return `calc(${a} + ${b})`;
    }
    static classNameOftblLook(c) {
        const val = xml_parser_1.default.hexAttr(c, "val", 0);
        let className = "";
        if (xml_parser_1.default.boolAttr(c, "firstRow") || (val & 0x0020))
            className += " first-row";
        if (xml_parser_1.default.boolAttr(c, "lastRow") || (val & 0x0040))
            className += " last-row";
        if (xml_parser_1.default.boolAttr(c, "firstColumn") || (val & 0x0080))
            className += " first-col";
        if (xml_parser_1.default.boolAttr(c, "lastColumn") || (val & 0x0100))
            className += " last-col";
        if (xml_parser_1.default.boolAttr(c, "noHBand") || (val & 0x0200))
            className += " no-hband";
        if (xml_parser_1.default.boolAttr(c, "noVBand") || (val & 0x0400))
            className += " no-vband";
        return className.trim();
    }
}


/***/ }),

/***/ "./src/document-props/core-props-part.ts":
/*!***********************************************!*\
  !*** ./src/document-props/core-props-part.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CorePropsPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const core_props_1 = __webpack_require__(/*! ./core-props */ "./src/document-props/core-props.ts");
class CorePropsPart extends part_1.Part {
    parseXml(root) {
        this.props = (0, core_props_1.parseCoreProps)(root, this._package.xmlParser);
    }
}
exports.CorePropsPart = CorePropsPart;


/***/ }),

/***/ "./src/document-props/core-props.ts":
/*!******************************************!*\
  !*** ./src/document-props/core-props.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseCoreProps = void 0;
function parseCoreProps(root, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root)) {
        switch (el.localName) {
            case "title":
                result.title = el.textContent;
                break;
            case "description":
                result.description = el.textContent;
                break;
            case "subject":
                result.subject = el.textContent;
                break;
            case "creator":
                result.creator = el.textContent;
                break;
            case "keywords":
                result.keywords = el.textContent;
                break;
            case "language":
                result.language = el.textContent;
                break;
            case "lastModifiedBy":
                result.lastModifiedBy = el.textContent;
                break;
            case "revision":
                el.textContent && (result.revision = parseInt(el.textContent));
                break;
        }
    }
    return result;
}
exports.parseCoreProps = parseCoreProps;


/***/ }),

/***/ "./src/document-props/custom-props-part.ts":
/*!*************************************************!*\
  !*** ./src/document-props/custom-props-part.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomPropsPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const custom_props_1 = __webpack_require__(/*! ./custom-props */ "./src/document-props/custom-props.ts");
class CustomPropsPart extends part_1.Part {
    parseXml(root) {
        this.props = (0, custom_props_1.parseCustomProps)(root, this._package.xmlParser);
    }
}
exports.CustomPropsPart = CustomPropsPart;


/***/ }),

/***/ "./src/document-props/custom-props.ts":
/*!********************************************!*\
  !*** ./src/document-props/custom-props.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseCustomProps = void 0;
function parseCustomProps(root, xml) {
    return xml.elements(root, "property").map(e => {
        const firstChild = e.firstChild;
        return {
            formatId: xml.attr(e, "fmtid"),
            name: xml.attr(e, "name"),
            type: firstChild.nodeName,
            value: firstChild.textContent
        };
    });
}
exports.parseCustomProps = parseCustomProps;


/***/ }),

/***/ "./src/document-props/extended-props-part.ts":
/*!***************************************************!*\
  !*** ./src/document-props/extended-props-part.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtendedPropsPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const extended_props_1 = __webpack_require__(/*! ./extended-props */ "./src/document-props/extended-props.ts");
class ExtendedPropsPart extends part_1.Part {
    parseXml(root) {
        this.props = (0, extended_props_1.parseExtendedProps)(root, this._package.xmlParser);
    }
}
exports.ExtendedPropsPart = ExtendedPropsPart;


/***/ }),

/***/ "./src/document-props/extended-props.ts":
/*!**********************************************!*\
  !*** ./src/document-props/extended-props.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseExtendedProps = void 0;
function parseExtendedProps(root, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root)) {
        switch (el.localName) {
            case "Template":
                result.template = el.textContent;
                break;
            case "Pages":
                result.pages = safeParseToInt(el.textContent);
                break;
            case "Words":
                result.words = safeParseToInt(el.textContent);
                break;
            case "Characters":
                result.characters = safeParseToInt(el.textContent);
                break;
            case "Application":
                result.application = el.textContent;
                break;
            case "Lines":
                result.lines = safeParseToInt(el.textContent);
                break;
            case "Paragraphs":
                result.paragraphs = safeParseToInt(el.textContent);
                break;
            case "Company":
                result.company = el.textContent;
                break;
            case "AppVersion":
                result.appVersion = el.textContent;
                break;
        }
    }
    return result;
}
exports.parseExtendedProps = parseExtendedProps;
function safeParseToInt(value) {
    if (typeof value === 'undefined')
        return;
    return parseInt(value);
}


/***/ }),

/***/ "./src/document/bookmarks.ts":
/*!***********************************!*\
  !*** ./src/document/bookmarks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseBookmarkEnd = exports.parseBookmarkStart = void 0;
const dom_1 = __webpack_require__(/*! ./dom */ "./src/document/dom.ts");
function parseBookmarkStart(elem, xml) {
    return {
        type: dom_1.DomType.BookmarkStart,
        id: xml.attr(elem, "id"),
        name: xml.attr(elem, "name"),
        colFirst: xml.intAttr(elem, "colFirst"),
        colLast: xml.intAttr(elem, "colLast")
    };
}
exports.parseBookmarkStart = parseBookmarkStart;
function parseBookmarkEnd(elem, xml) {
    return {
        type: dom_1.DomType.BookmarkEnd,
        id: xml.attr(elem, "id")
    };
}
exports.parseBookmarkEnd = parseBookmarkEnd;


/***/ }),

/***/ "./src/document/border.ts":
/*!********************************!*\
  !*** ./src/document/border.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseBorders = exports.parseBorder = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
function parseBorder(elem, xml) {
    return {
        type: xml.attr(elem, "val"),
        color: xml.attr(elem, "color"),
        size: xml.lengthAttr(elem, "sz", common_1.LengthUsage.Border),
        offset: xml.lengthAttr(elem, "space", common_1.LengthUsage.Point),
        frame: xml.boolAttr(elem, 'frame'),
        shadow: xml.boolAttr(elem, 'shadow')
    };
}
exports.parseBorder = parseBorder;
function parseBorders(elem, xml) {
    var result = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "left":
                result.left = parseBorder(e, xml);
                break;
            case "top":
                result.top = parseBorder(e, xml);
                break;
            case "right":
                result.right = parseBorder(e, xml);
                break;
            case "bottom":
                result.bottom = parseBorder(e, xml);
                break;
        }
    }
    return result;
}
exports.parseBorders = parseBorders;


/***/ }),

/***/ "./src/document/common.ts":
/*!********************************!*\
  !*** ./src/document/common.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseCommonProperty = exports.convertPercentage = exports.convertBoolean = exports.convertLength = exports.LengthUsage = exports.ns = void 0;
exports.ns = {
    wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    drawingml: "http://schemas.openxmlformats.org/drawingml/2006/main",
    picture: "http://schemas.openxmlformats.org/drawingml/2006/picture",
    compatibility: "http://schemas.openxmlformats.org/markup-compatibility/2006",
    math: "http://schemas.openxmlformats.org/officeDocument/2006/math"
};
exports.LengthUsage = {
    Dxa: { mul: 0.05, unit: "pt" },
    Emu: { mul: 1 / 12700, unit: "pt" },
    FontSize: { mul: 0.5, unit: "pt" },
    Border: { mul: 0.125, unit: "pt" },
    Point: { mul: 1, unit: "pt" },
    Percent: { mul: 0.02, unit: "%" },
    LineHeight: { mul: 1 / 240, unit: "" },
    VmlEmu: { mul: 1 / 12700, unit: "" },
};
function convertLength(val, usage = exports.LengthUsage.Dxa) {
    if (val == null || /.+(p[xt]|[%])$/.test(val)) {
        return val;
    }
    return `${(parseInt(val) * usage.mul).toFixed(2)}${usage.unit}`;
}
exports.convertLength = convertLength;
function convertBoolean(v, defaultValue = false) {
    switch (v) {
        case "1": return true;
        case "0": return false;
        case "on": return true;
        case "off": return false;
        case "true": return true;
        case "false": return false;
        default: return defaultValue;
    }
}
exports.convertBoolean = convertBoolean;
function convertPercentage(val) {
    return val ? parseInt(val) / 100 : null;
}
exports.convertPercentage = convertPercentage;
function parseCommonProperty(elem, props, xml) {
    if (elem.namespaceURI != exports.ns.wordml)
        return false;
    switch (elem.localName) {
        case "color":
            props.color = xml.attr(elem, "val");
            break;
        case "sz":
            props.fontSize = xml.lengthAttr(elem, "val", exports.LengthUsage.FontSize);
            break;
        default:
            return false;
    }
    return true;
}
exports.parseCommonProperty = parseCommonProperty;


/***/ }),

/***/ "./src/document/document-part.ts":
/*!***************************************!*\
  !*** ./src/document/document-part.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
class DocumentPart extends part_1.Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.body = this._documentParser.parseDocumentFile(root);
    }
}
exports.DocumentPart = DocumentPart;


/***/ }),

/***/ "./src/document/dom.ts":
/*!*****************************!*\
  !*** ./src/document/dom.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomType = void 0;
var DomType;
(function (DomType) {
    DomType["Document"] = "document";
    DomType["Paragraph"] = "paragraph";
    DomType["Run"] = "run";
    DomType["Break"] = "break";
    DomType["NoBreakHyphen"] = "noBreakHyphen";
    DomType["Table"] = "table";
    DomType["Row"] = "row";
    DomType["Cell"] = "cell";
    DomType["Hyperlink"] = "hyperlink";
    DomType["Drawing"] = "drawing";
    DomType["Image"] = "image";
    DomType["Text"] = "text";
    DomType["Tab"] = "tab";
    DomType["Symbol"] = "symbol";
    DomType["BookmarkStart"] = "bookmarkStart";
    DomType["BookmarkEnd"] = "bookmarkEnd";
    DomType["Footer"] = "footer";
    DomType["Header"] = "header";
    DomType["FootnoteReference"] = "footnoteReference";
    DomType["EndnoteReference"] = "endnoteReference";
    DomType["Footnote"] = "footnote";
    DomType["Endnote"] = "endnote";
    DomType["SimpleField"] = "simpleField";
    DomType["ComplexField"] = "complexField";
    DomType["Instruction"] = "instruction";
    DomType["VmlPicture"] = "vmlPicture";
    DomType["MmlMath"] = "mmlMath";
    DomType["MmlMathParagraph"] = "mmlMathParagraph";
    DomType["MmlFraction"] = "mmlFraction";
    DomType["MmlNumerator"] = "mmlNumerator";
    DomType["MmlDenominator"] = "mmlDenominator";
    DomType["MmlRadical"] = "mmlRadical";
    DomType["MmlBase"] = "mmlBase";
    DomType["MmlDegree"] = "mmlDegree";
    DomType["MmlSuperscript"] = "mmlSuperscript";
    DomType["MmlSubscript"] = "mmlSubscript";
    DomType["MmlSubArgument"] = "mmlSubArgument";
    DomType["MmlSuperArgument"] = "mmlSuperArgument";
    DomType["MmlNary"] = "mmlNary";
    DomType["MmlDelimiter"] = "mmlDelimiter";
    DomType["MmlRun"] = "mmlRun";
    DomType["VmlElement"] = "vmlElement";
    DomType["Inserted"] = "inserted";
    DomType["Deleted"] = "deleted";
    DomType["DeletedText"] = "deletedText";
})(DomType = exports.DomType || (exports.DomType = {}));


/***/ }),

/***/ "./src/document/line-spacing.ts":
/*!**************************************!*\
  !*** ./src/document/line-spacing.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseLineSpacing = void 0;
function parseLineSpacing(elem, xml) {
    return {
        before: xml.lengthAttr(elem, "before"),
        after: xml.lengthAttr(elem, "after"),
        line: xml.intAttr(elem, "line"),
        lineRule: xml.attr(elem, "lineRule")
    };
}
exports.parseLineSpacing = parseLineSpacing;


/***/ }),

/***/ "./src/document/paragraph.ts":
/*!***********************************!*\
  !*** ./src/document/paragraph.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseNumbering = exports.parseTabs = exports.parseParagraphProperty = exports.parseParagraphProperties = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
const section_1 = __webpack_require__(/*! ./section */ "./src/document/section.ts");
const line_spacing_1 = __webpack_require__(/*! ./line-spacing */ "./src/document/line-spacing.ts");
const run_1 = __webpack_require__(/*! ./run */ "./src/document/run.ts");
function parseParagraphProperties(elem, xml) {
    let result = {};
    for (let el of xml.elements(elem)) {
        parseParagraphProperty(el, result, xml);
    }
    return result;
}
exports.parseParagraphProperties = parseParagraphProperties;
function parseParagraphProperty(elem, props, xml) {
    if (elem.namespaceURI != common_1.ns.wordml)
        return false;
    if ((0, common_1.parseCommonProperty)(elem, props, xml))
        return true;
    switch (elem.localName) {
        case "tabs":
            props.tabs = parseTabs(elem, xml);
            break;
        case "sectPr":
            props.sectionProps = (0, section_1.parseSectionProperties)(elem, xml);
            break;
        case "numPr":
            props.numbering = parseNumbering(elem, xml);
            break;
        case "spacing":
            props.lineSpacing = (0, line_spacing_1.parseLineSpacing)(elem, xml);
            return false;
            break;
        case "textAlignment":
            props.textAlignment = xml.attr(elem, "val");
            return false;
            break;
        case "keepNext":
            props.keepLines = xml.boolAttr(elem, "val", true);
            break;
        case "keepNext":
            props.keepNext = xml.boolAttr(elem, "val", true);
            break;
        case "pageBreakBefore":
            props.pageBreakBefore = xml.boolAttr(elem, "val", true);
            break;
        case "outlineLvl":
            props.outlineLevel = xml.intAttr(elem, "val");
            break;
        case "pStyle":
            props.styleName = xml.attr(elem, "val");
            break;
        case "rPr":
            props.runProps = (0, run_1.parseRunProperties)(elem, xml);
            break;
        default:
            return false;
    }
    return true;
}
exports.parseParagraphProperty = parseParagraphProperty;
function parseTabs(elem, xml) {
    return xml.elements(elem, "tab")
        .map(e => ({
        position: xml.lengthAttr(e, "pos"),
        leader: xml.attr(e, "leader"),
        style: xml.attr(e, "val")
    }));
}
exports.parseTabs = parseTabs;
function parseNumbering(elem, xml) {
    var result = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "numId":
                result.id = xml.attr(e, "val");
                break;
            case "ilvl":
                result.level = xml.intAttr(e, "val");
                break;
        }
    }
    return result;
}
exports.parseNumbering = parseNumbering;


/***/ }),

/***/ "./src/document/run.ts":
/*!*****************************!*\
  !*** ./src/document/run.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseRunProperty = exports.parseRunProperties = void 0;
const common_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
function parseRunProperties(elem, xml) {
    let result = {};
    for (let el of xml.elements(elem)) {
        parseRunProperty(el, result, xml);
    }
    return result;
}
exports.parseRunProperties = parseRunProperties;
function parseRunProperty(elem, props, xml) {
    if ((0, common_1.parseCommonProperty)(elem, props, xml))
        return true;
    return false;
}
exports.parseRunProperty = parseRunProperty;


/***/ }),

/***/ "./src/document/section.ts":
/*!*********************************!*\
  !*** ./src/document/section.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseSectionProperties = exports.SectionType = void 0;
const xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
const border_1 = __webpack_require__(/*! ./border */ "./src/document/border.ts");
var SectionType;
(function (SectionType) {
    SectionType["Continuous"] = "continuous";
    SectionType["NextPage"] = "nextPage";
    SectionType["NextColumn"] = "nextColumn";
    SectionType["EvenPage"] = "evenPage";
    SectionType["OddPage"] = "oddPage";
})(SectionType = exports.SectionType || (exports.SectionType = {}));
function parseSectionProperties(elem, xml = xml_parser_1.default) {
    var _a, _b;
    var section = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "pgSz":
                section.pageSize = {
                    width: xml.lengthAttr(e, "w"),
                    height: xml.lengthAttr(e, "h"),
                    orientation: xml.attr(e, "orient")
                };
                break;
            case "type":
                section.type = xml.attr(e, "val");
                break;
            case "pgMar":
                section.pageMargins = {
                    left: xml.lengthAttr(e, "left"),
                    right: xml.lengthAttr(e, "right"),
                    top: xml.lengthAttr(e, "top"),
                    bottom: xml.lengthAttr(e, "bottom"),
                    header: xml.lengthAttr(e, "header"),
                    footer: xml.lengthAttr(e, "footer"),
                    gutter: xml.lengthAttr(e, "gutter"),
                };
                break;
            case "cols":
                section.columns = parseColumns(e, xml);
                break;
            case "headerReference":
                ((_a = section.headerRefs) !== null && _a !== void 0 ? _a : (section.headerRefs = [])).push(parseFooterHeaderReference(e, xml));
                break;
            case "footerReference":
                ((_b = section.footerRefs) !== null && _b !== void 0 ? _b : (section.footerRefs = [])).push(parseFooterHeaderReference(e, xml));
                break;
            case "titlePg":
                section.titlePage = xml.boolAttr(e, "val", true);
                break;
            case "pgBorders":
                section.pageBorders = (0, border_1.parseBorders)(e, xml);
                break;
            case "pgNumType":
                section.pageNumber = parsePageNumber(e, xml);
                break;
        }
    }
    return section;
}
exports.parseSectionProperties = parseSectionProperties;
function parseColumns(elem, xml) {
    return {
        numberOfColumns: xml.intAttr(elem, "num"),
        space: xml.lengthAttr(elem, "space"),
        separator: xml.boolAttr(elem, "sep"),
        equalWidth: xml.boolAttr(elem, "equalWidth", true),
        columns: xml.elements(elem, "col")
            .map(e => ({
            width: xml.lengthAttr(e, "w"),
            space: xml.lengthAttr(e, "space")
        }))
    };
}
function parsePageNumber(elem, xml) {
    return {
        chapSep: xml.attr(elem, "chapSep"),
        chapStyle: xml.attr(elem, "chapStyle"),
        format: xml.attr(elem, "fmt"),
        start: xml.intAttr(elem, "start")
    };
}
function parseFooterHeaderReference(elem, xml) {
    return {
        id: xml.attr(elem, "id"),
        type: xml.attr(elem, "type"),
    };
}


/***/ }),

/***/ "./src/docx-preview.ts":
/*!*****************************!*\
  !*** ./src/docx-preview.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderAsync = exports.praseAsync = exports.defaultOptions = void 0;
const word_document_1 = __webpack_require__(/*! ./word-document */ "./src/word-document.ts");
const document_parser_1 = __webpack_require__(/*! ./document-parser */ "./src/document-parser.ts");
const html_renderer_1 = __webpack_require__(/*! ./html-renderer */ "./src/html-renderer.ts");
exports.defaultOptions = {
    ignoreHeight: false,
    ignoreWidth: false,
    ignoreFonts: false,
    breakPages: true,
    debug: false,
    experimental: false,
    className: "docx",
    inWrapper: true,
    trimXmlDeclaration: true,
    ignoreLastRenderedPageBreak: true,
    renderHeaders: true,
    renderFooters: true,
    renderFootnotes: true,
    renderEndnotes: true,
    useBase64URL: false,
    useMathMLPolyfill: false,
    renderChanges: false
};
function praseAsync(data, userOptions = null) {
    const ops = Object.assign(Object.assign({}, exports.defaultOptions), userOptions);
    return word_document_1.WordDocument.load(data, new document_parser_1.DocumentParser(ops), ops);
}
exports.praseAsync = praseAsync;
function renderAsync(data, bodyContainer, styleContainer = null, userOptions = null) {
    const ops = Object.assign(Object.assign({}, exports.defaultOptions), userOptions);
    const renderer = new html_renderer_1.HtmlRenderer(window.document);
    return word_document_1.WordDocument
        .load(data, new document_parser_1.DocumentParser(ops), ops)
        .then(doc => {
        renderer.render(doc, bodyContainer, styleContainer, ops);
        return doc;
    });
}
exports.renderAsync = renderAsync;


/***/ }),

/***/ "./src/font-table/font-table.ts":
/*!**************************************!*\
  !*** ./src/font-table/font-table.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FontTablePart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const fonts_1 = __webpack_require__(/*! ./fonts */ "./src/font-table/fonts.ts");
class FontTablePart extends part_1.Part {
    parseXml(root) {
        this.fonts = (0, fonts_1.parseFonts)(root, this._package.xmlParser);
    }
}
exports.FontTablePart = FontTablePart;


/***/ }),

/***/ "./src/font-table/fonts.ts":
/*!*********************************!*\
  !*** ./src/font-table/fonts.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseEmbedFontRef = exports.parseFont = exports.parseFonts = void 0;
const embedFontTypeMap = {
    embedRegular: 'regular',
    embedBold: 'bold',
    embedItalic: 'italic',
    embedBoldItalic: 'boldItalic',
};
function parseFonts(root, xml) {
    return xml.elements(root).map(el => parseFont(el, xml));
}
exports.parseFonts = parseFonts;
function parseFont(elem, xml) {
    let result = {
        name: xml.attr(elem, "name"),
        embedFontRefs: []
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "family":
                result.family = xml.attr(el, "val");
                break;
            case "altName":
                result.altName = xml.attr(el, "val");
                break;
            case "embedRegular":
            case "embedBold":
            case "embedItalic":
            case "embedBoldItalic":
                result.embedFontRefs.push(parseEmbedFontRef(el, xml));
                break;
        }
    }
    return result;
}
exports.parseFont = parseFont;
function parseEmbedFontRef(elem, xml) {
    return {
        id: xml.attr(elem, "id"),
        key: xml.attr(elem, "fontKey"),
        type: embedFontTypeMap[elem.localName]
    };
}
exports.parseEmbedFontRef = parseEmbedFontRef;


/***/ }),

/***/ "./src/header-footer/elements.ts":
/*!***************************************!*\
  !*** ./src/header-footer/elements.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WmlFooter = exports.WmlHeader = void 0;
const dom_1 = __webpack_require__(/*! ../document/dom */ "./src/document/dom.ts");
class WmlHeader {
    constructor() {
        this.type = dom_1.DomType.Header;
        this.children = [];
        this.cssStyle = {};
    }
}
exports.WmlHeader = WmlHeader;
class WmlFooter {
    constructor() {
        this.type = dom_1.DomType.Footer;
        this.children = [];
        this.cssStyle = {};
    }
}
exports.WmlFooter = WmlFooter;


/***/ }),

/***/ "./src/header-footer/parts.ts":
/*!************************************!*\
  !*** ./src/header-footer/parts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FooterPart = exports.HeaderPart = exports.BaseHeaderFooterPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const elements_1 = __webpack_require__(/*! ./elements */ "./src/header-footer/elements.ts");
class BaseHeaderFooterPart extends part_1.Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.rootElement = this.createRootElement();
        this.rootElement.children = this._documentParser.parseBodyElements(root);
    }
}
exports.BaseHeaderFooterPart = BaseHeaderFooterPart;
class HeaderPart extends BaseHeaderFooterPart {
    createRootElement() {
        return new elements_1.WmlHeader();
    }
}
exports.HeaderPart = HeaderPart;
class FooterPart extends BaseHeaderFooterPart {
    createRootElement() {
        return new elements_1.WmlFooter();
    }
}
exports.FooterPart = FooterPart;


/***/ }),

/***/ "./src/html-renderer.ts":
/*!******************************!*\
  !*** ./src/html-renderer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HtmlRenderer = void 0;
const dom_1 = __webpack_require__(/*! ./document/dom */ "./src/document/dom.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const javascript_1 = __webpack_require__(/*! ./javascript */ "./src/javascript.ts");
const mathml_scss_1 = __webpack_require__(/*! ./mathml.scss */ "./src/mathml.scss");
const ns = {
    svg: "http://www.w3.org/2000/svg",
    mathML: "http://www.w3.org/1998/Math/MathML"
};
class HtmlRenderer {
    constructor(htmlDocument) {
        this.htmlDocument = htmlDocument;
        this.className = "docx";
        this.styleMap = {};
        this.currentPart = null;
        this.tableVerticalMerges = [];
        this.currentVerticalMerge = null;
        this.tableCellPositions = [];
        this.currentCellPosition = null;
        this.footnoteMap = {};
        this.endnoteMap = {};
        this.currentEndnoteIds = [];
        this.usedHederFooterParts = [];
        this.currentTabs = [];
        this.tabsTimeout = 0;
        this.createElement = createElement;
    }
    render(document, bodyContainer, styleContainer = null, options) {
        var _a;
        this.document = document;
        this.options = options;
        this.className = options.className;
        this.rootSelector = options.inWrapper ? `.${this.className}-wrapper` : ':root';
        this.styleMap = null;
        styleContainer = styleContainer || bodyContainer;
        removeAllElements(styleContainer);
        removeAllElements(bodyContainer);
        appendComment(styleContainer, "docxjs library predefined styles");
        styleContainer.appendChild(this.renderDefaultStyle());
        if (!window.MathMLElement && options.useMathMLPolyfill) {
            appendComment(styleContainer, "docxjs mathml polyfill styles");
            styleContainer.appendChild(createStyleElement(mathml_scss_1.default));
        }
        if (document.themePart) {
            appendComment(styleContainer, "docxjs document theme values");
            this.renderTheme(document.themePart, styleContainer);
        }
        if (document.stylesPart != null) {
            this.styleMap = this.processStyles(document.stylesPart.styles);
            appendComment(styleContainer, "docxjs document styles");
            styleContainer.appendChild(this.renderStyles(document.stylesPart.styles));
        }
        if (document.numberingPart) {
            this.prodessNumberings(document.numberingPart.domNumberings);
            appendComment(styleContainer, "docxjs document numbering styles");
            styleContainer.appendChild(this.renderNumbering(document.numberingPart.domNumberings, styleContainer));
        }
        if (document.footnotesPart) {
            this.footnoteMap = (0, utils_1.keyBy)(document.footnotesPart.notes, x => x.id);
        }
        if (document.endnotesPart) {
            this.endnoteMap = (0, utils_1.keyBy)(document.endnotesPart.notes, x => x.id);
        }
        if (document.settingsPart) {
            this.defaultTabSize = (_a = document.settingsPart.settings) === null || _a === void 0 ? void 0 : _a.defaultTabStop;
        }
        if (!options.ignoreFonts && document.fontTablePart)
            this.renderFontTable(document.fontTablePart, styleContainer);
        var sectionElements = this.renderSections(document.documentPart.body);
        if (this.options.inWrapper) {
            bodyContainer.appendChild(this.renderWrapper(sectionElements));
        }
        else {
            appendChildren(bodyContainer, sectionElements);
        }
        this.refreshTabStops();
    }
    renderTheme(themePart, styleContainer) {
        var _a, _b;
        const variables = {};
        const fontScheme = (_a = themePart.theme) === null || _a === void 0 ? void 0 : _a.fontScheme;
        if (fontScheme) {
            if (fontScheme.majorFont) {
                variables['--docx-majorHAnsi-font'] = fontScheme.majorFont.latinTypeface;
            }
            if (fontScheme.minorFont) {
                variables['--docx-minorHAnsi-font'] = fontScheme.minorFont.latinTypeface;
            }
        }
        const colorScheme = (_b = themePart.theme) === null || _b === void 0 ? void 0 : _b.colorScheme;
        if (colorScheme) {
            for (let [k, v] of Object.entries(colorScheme.colors)) {
                variables[`--docx-${k}-color`] = `#${v}`;
            }
        }
        const cssText = this.styleToString(`.${this.className}`, variables);
        styleContainer.appendChild(createStyleElement(cssText));
    }
    renderFontTable(fontsPart, styleContainer) {
        for (let f of fontsPart.fonts) {
            for (let ref of f.embedFontRefs) {
                this.document.loadFont(ref.id, ref.key).then(fontData => {
                    const cssValues = {
                        'font-family': f.name,
                        'src': `url(${fontData})`
                    };
                    if (ref.type == "bold" || ref.type == "boldItalic") {
                        cssValues['font-weight'] = 'bold';
                    }
                    if (ref.type == "italic" || ref.type == "boldItalic") {
                        cssValues['font-style'] = 'italic';
                    }
                    appendComment(styleContainer, `docxjs ${f.name} font`);
                    const cssText = this.styleToString("@font-face", cssValues);
                    styleContainer.appendChild(createStyleElement(cssText));
                    this.refreshTabStops();
                });
            }
        }
    }
    processStyleName(className) {
        return className ? `${this.className}_${(0, utils_1.escapeClassName)(className)}` : this.className;
    }
    processStyles(styles) {
        const stylesMap = (0, utils_1.keyBy)(styles.filter(x => x.id != null), x => x.id);
        for (const style of styles.filter(x => x.basedOn)) {
            var baseStyle = stylesMap[style.basedOn];
            if (baseStyle) {
                style.paragraphProps = (0, utils_1.mergeDeep)(style.paragraphProps, baseStyle.paragraphProps);
                style.runProps = (0, utils_1.mergeDeep)(style.runProps, baseStyle.runProps);
                for (const baseValues of baseStyle.styles) {
                    const styleValues = style.styles.find(x => x.target == baseValues.target);
                    if (styleValues) {
                        this.copyStyleProperties(baseValues.values, styleValues.values);
                    }
                    else {
                        style.styles.push(Object.assign(Object.assign({}, baseValues), { values: Object.assign({}, baseValues.values) }));
                    }
                }
            }
            else if (this.options.debug)
                console.warn(`Can't find base style ${style.basedOn}`);
        }
        for (let style of styles) {
            style.cssName = this.processStyleName(style.id);
        }
        return stylesMap;
    }
    prodessNumberings(numberings) {
        var _a;
        for (let num of numberings.filter(n => n.pStyleName)) {
            const style = this.findStyle(num.pStyleName);
            if ((_a = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _a === void 0 ? void 0 : _a.numbering) {
                style.paragraphProps.numbering.level = num.level;
            }
        }
    }
    processElement(element) {
        if (element.children) {
            for (var e of element.children) {
                e.parent = element;
                if (e.type == dom_1.DomType.Table) {
                    this.processTable(e);
                }
                else {
                    this.processElement(e);
                }
            }
        }
    }
    processTable(table) {
        for (var r of table.children) {
            for (var c of r.children) {
                c.cssStyle = this.copyStyleProperties(table.cellStyle, c.cssStyle, [
                    "border-left", "border-right", "border-top", "border-bottom",
                    "padding-left", "padding-right", "padding-top", "padding-bottom"
                ]);
                this.processElement(c);
            }
        }
    }
    copyStyleProperties(input, output, attrs = null) {
        if (!input)
            return output;
        if (output == null)
            output = {};
        if (attrs == null)
            attrs = Object.getOwnPropertyNames(input);
        for (var key of attrs) {
            if (input.hasOwnProperty(key) && !output.hasOwnProperty(key))
                output[key] = input[key];
        }
        return output;
    }
    createSection(className, props) {
        var elem = this.createElement("section", { className });
        if (props) {
            if (props.pageMargins) {
                elem.style.paddingLeft = props.pageMargins.left;
                elem.style.paddingRight = props.pageMargins.right;
                elem.style.paddingTop = props.pageMargins.top;
                elem.style.paddingBottom = props.pageMargins.bottom;
            }
            if (props.pageSize) {
                if (!this.options.ignoreWidth)
                    elem.style.width = props.pageSize.width;
                if (!this.options.ignoreHeight)
                    elem.style.minHeight = props.pageSize.height;
            }
            if (props.columns && props.columns.numberOfColumns) {
                elem.style.columnCount = `${props.columns.numberOfColumns}`;
                elem.style.columnGap = props.columns.space;
                if (props.columns.separator) {
                    elem.style.columnRule = "1px solid black";
                }
            }
        }
        return elem;
    }
    renderSections(document) {
        const result = [];
        this.processElement(document);
        const sections = this.splitBySection(document.children);
        let prevProps = null;
        for (let i = 0, l = sections.length; i < l; i++) {
            this.currentFootnoteIds = [];
            const section = sections[i];
            const props = section.sectProps || document.props;
            const sectionElement = this.createSection(this.className, props);
            this.renderStyleValues(document.cssStyle, sectionElement);
            this.options.renderHeaders && this.renderHeaderFooter(props.headerRefs, props, result.length, prevProps != props, sectionElement);
            var contentElement = this.createElement("article");
            this.renderElements(section.elements, contentElement);
            sectionElement.appendChild(contentElement);
            if (this.options.renderFootnotes) {
                this.renderNotes(this.currentFootnoteIds, this.footnoteMap, sectionElement);
            }
            if (this.options.renderEndnotes && i == l - 1) {
                this.renderNotes(this.currentEndnoteIds, this.endnoteMap, sectionElement);
            }
            this.options.renderFooters && this.renderHeaderFooter(props.footerRefs, props, result.length, prevProps != props, sectionElement);
            result.push(sectionElement);
            prevProps = props;
        }
        return result;
    }
    renderHeaderFooter(refs, props, page, firstOfSection, into) {
        var _a, _b;
        if (!refs)
            return;
        var ref = (_b = (_a = (props.titlePage && firstOfSection ? refs.find(x => x.type == "first") : null)) !== null && _a !== void 0 ? _a : (page % 2 == 1 ? refs.find(x => x.type == "even") : null)) !== null && _b !== void 0 ? _b : refs.find(x => x.type == "default");
        var part = ref && this.document.findPartByRelId(ref.id, this.document.documentPart);
        if (part) {
            this.currentPart = part;
            if (!this.usedHederFooterParts.includes(part.path)) {
                this.processElement(part.rootElement);
                this.usedHederFooterParts.push(part.path);
            }
            this.renderElements([part.rootElement], into);
            this.currentPart = null;
        }
    }
    isPageBreakElement(elem) {
        if (elem.type != dom_1.DomType.Break)
            return false;
        if (elem.break == "lastRenderedPageBreak")
            return !this.options.ignoreLastRenderedPageBreak;
        return elem.break == "page";
    }
    splitBySection(elements) {
        var _a;
        var current = { sectProps: null, elements: [] };
        var result = [current];
        for (let elem of elements) {
            if (elem.type == dom_1.DomType.Paragraph) {
                const s = this.findStyle(elem.styleName);
                if ((_a = s === null || s === void 0 ? void 0 : s.paragraphProps) === null || _a === void 0 ? void 0 : _a.pageBreakBefore) {
                    current.sectProps = sectProps;
                    current = { sectProps: null, elements: [] };
                    result.push(current);
                }
            }
            current.elements.push(elem);
            if (elem.type == dom_1.DomType.Paragraph) {
                const p = elem;
                var sectProps = p.sectionProps;
                var pBreakIndex = -1;
                var rBreakIndex = -1;
                if (this.options.breakPages && p.children) {
                    pBreakIndex = p.children.findIndex(r => {
                        var _a, _b;
                        rBreakIndex = (_b = (_a = r.children) === null || _a === void 0 ? void 0 : _a.findIndex(this.isPageBreakElement.bind(this))) !== null && _b !== void 0 ? _b : -1;
                        return rBreakIndex != -1;
                    });
                }
                if (sectProps || pBreakIndex != -1) {
                    current.sectProps = sectProps;
                    current = { sectProps: null, elements: [] };
                    result.push(current);
                }
                if (pBreakIndex != -1) {
                    let breakRun = p.children[pBreakIndex];
                    let splitRun = rBreakIndex < breakRun.children.length - 1;
                    if (pBreakIndex < p.children.length - 1 || splitRun) {
                        var children = elem.children;
                        var newParagraph = Object.assign(Object.assign({}, elem), { children: children.slice(pBreakIndex) });
                        elem.children = children.slice(0, pBreakIndex);
                        current.elements.push(newParagraph);
                        if (splitRun) {
                            let runChildren = breakRun.children;
                            let newRun = Object.assign(Object.assign({}, breakRun), { children: runChildren.slice(0, rBreakIndex) });
                            elem.children.push(newRun);
                            breakRun.children = runChildren.slice(rBreakIndex);
                        }
                    }
                }
            }
        }
        let currentSectProps = null;
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i].sectProps == null) {
                result[i].sectProps = currentSectProps;
            }
            else {
                currentSectProps = result[i].sectProps;
            }
        }
        return result;
    }
    renderWrapper(children) {
        return this.createElement("div", { className: `${this.className}-wrapper` }, children);
    }
    renderDefaultStyle() {
        var c = this.className;
        var styleText = `
.${c}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${c}-wrapper>section.${c} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${c} { color: black; }
section.${c} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${c}>article { margin-bottom: auto; }
.${c} table { border-collapse: collapse; }
.${c} table td, .${c} table th { vertical-align: top; }
.${c} p { margin: 0pt; min-height: 1em; }
.${c} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${c} a { color: inherit; text-decoration: inherit; }
`;
        return createStyleElement(styleText);
    }
    renderNumbering(numberings, styleContainer) {
        var styleText = "";
        var rootCounters = [];
        for (var num of numberings) {
            var selector = `p.${this.numberingClass(num.id, num.level)}`;
            var listStyleType = "none";
            if (num.bullet) {
                let valiable = `--${this.className}-${num.bullet.src}`.toLowerCase();
                styleText += this.styleToString(`${selector}:before`, {
                    "content": "' '",
                    "display": "inline-block",
                    "background": `var(${valiable})`
                }, num.bullet.style);
                this.document.loadNumberingImage(num.bullet.src).then(data => {
                    var text = `${this.rootSelector} { ${valiable}: url(${data}) }`;
                    styleContainer.appendChild(createStyleElement(text));
                });
            }
            else if (num.levelText) {
                let counter = this.numberingCounter(num.id, num.level);
                if (num.level > 0) {
                    styleText += this.styleToString(`p.${this.numberingClass(num.id, num.level - 1)}`, {
                        "counter-reset": counter
                    });
                }
                else {
                    rootCounters.push(counter);
                }
                styleText += this.styleToString(`${selector}:before`, Object.assign({ "content": this.levelTextToContent(num.levelText, num.suff, num.id, this.numFormatToCssValue(num.format)), "counter-increment": counter }, num.rStyle));
            }
            else {
                listStyleType = this.numFormatToCssValue(num.format);
            }
            styleText += this.styleToString(selector, Object.assign({ "display": "list-item", "list-style-position": "inside", "list-style-type": listStyleType }, num.pStyle));
        }
        if (rootCounters.length > 0) {
            styleText += this.styleToString(this.rootSelector, {
                "counter-reset": rootCounters.join(" ")
            });
        }
        return createStyleElement(styleText);
    }
    renderStyles(styles) {
        var _a;
        var styleText = "";
        const stylesMap = this.styleMap;
        const defautStyles = (0, utils_1.keyBy)(styles.filter(s => s.isDefault), s => s.target);
        for (const style of styles) {
            var subStyles = style.styles;
            if (style.linked) {
                var linkedStyle = style.linked && stylesMap[style.linked];
                if (linkedStyle)
                    subStyles = subStyles.concat(linkedStyle.styles);
                else if (this.options.debug)
                    console.warn(`Can't find linked style ${style.linked}`);
            }
            for (const subStyle of subStyles) {
                var selector = `${(_a = style.target) !== null && _a !== void 0 ? _a : ''}.${style.cssName}`;
                if (style.target != subStyle.target)
                    selector += ` ${subStyle.target}`;
                if (defautStyles[style.target] == style)
                    selector = `.${this.className} ${style.target}, ` + selector;
                styleText += this.styleToString(selector, subStyle.values);
            }
        }
        return createStyleElement(styleText);
    }
    renderNotes(noteIds, notesMap, into) {
        var notes = noteIds.map(id => notesMap[id]).filter(x => x);
        if (notes.length > 0) {
            var result = this.createElement("ol", null, this.renderElements(notes));
            into.appendChild(result);
        }
    }
    renderElement(elem) {
        switch (elem.type) {
            case dom_1.DomType.Paragraph:
                return this.renderParagraph(elem);
            case dom_1.DomType.BookmarkStart:
                return this.renderBookmarkStart(elem);
            case dom_1.DomType.BookmarkEnd:
                return null;
            case dom_1.DomType.Run:
                return this.renderRun(elem);
            case dom_1.DomType.Table:
                return this.renderTable(elem);
            case dom_1.DomType.Row:
                return this.renderTableRow(elem);
            case dom_1.DomType.Cell:
                return this.renderTableCell(elem);
            case dom_1.DomType.Hyperlink:
                return this.renderHyperlink(elem);
            case dom_1.DomType.Drawing:
                return this.renderDrawing(elem);
            case dom_1.DomType.Image:
                return this.renderImage(elem);
            case dom_1.DomType.Text:
                return this.renderText(elem);
            case dom_1.DomType.Text:
                return this.renderText(elem);
            case dom_1.DomType.DeletedText:
                return this.renderDeletedText(elem);
            case dom_1.DomType.Tab:
                return this.renderTab(elem);
            case dom_1.DomType.Symbol:
                return this.renderSymbol(elem);
            case dom_1.DomType.Break:
                return this.renderBreak(elem);
            case dom_1.DomType.Footer:
                return this.renderContainer(elem, "footer");
            case dom_1.DomType.Header:
                return this.renderContainer(elem, "header");
            case dom_1.DomType.Footnote:
            case dom_1.DomType.Endnote:
                return this.renderContainer(elem, "li");
            case dom_1.DomType.FootnoteReference:
                return this.renderFootnoteReference(elem);
            case dom_1.DomType.EndnoteReference:
                return this.renderEndnoteReference(elem);
            case dom_1.DomType.NoBreakHyphen:
                return this.createElement("wbr");
            case dom_1.DomType.VmlPicture:
                return this.renderVmlPicture(elem);
            case dom_1.DomType.VmlElement:
                return this.renderVmlElement(elem);
            case dom_1.DomType.MmlMath:
                return this.renderContainerNS(elem, ns.mathML, "math", { xmlns: ns.mathML });
            case dom_1.DomType.MmlMathParagraph:
                return this.renderContainer(elem, "span");
            case dom_1.DomType.MmlFraction:
                return this.renderContainerNS(elem, ns.mathML, "mfrac");
            case dom_1.DomType.MmlNumerator:
            case dom_1.DomType.MmlDenominator:
                return this.renderContainerNS(elem, ns.mathML, "mrow");
            case dom_1.DomType.MmlRadical:
                return this.renderMmlRadical(elem);
            case dom_1.DomType.MmlDegree:
                return this.renderContainerNS(elem, ns.mathML, "mn");
            case dom_1.DomType.MmlSuperscript:
                return this.renderContainerNS(elem, ns.mathML, "msup");
            case dom_1.DomType.MmlSubscript:
                return this.renderContainerNS(elem, ns.mathML, "msub");
            case dom_1.DomType.MmlBase:
                return this.renderContainerNS(elem, ns.mathML, "mrow");
            case dom_1.DomType.MmlSuperArgument:
                return this.renderContainerNS(elem, ns.mathML, "mn");
            case dom_1.DomType.MmlSubArgument:
                return this.renderContainerNS(elem, ns.mathML, "mn");
            case dom_1.DomType.MmlDelimiter:
                return this.renderMmlDelimiter(elem);
            case dom_1.DomType.MmlRun:
                return this.renderMmlRun(elem);
            case dom_1.DomType.MmlNary:
                return this.renderMmlNary(elem);
            case dom_1.DomType.Inserted:
                return this.renderInserted(elem);
            case dom_1.DomType.Deleted:
                return this.renderDeleted(elem);
        }
        return null;
    }
    renderChildren(elem, into) {
        return this.renderElements(elem.children, into);
    }
    renderElements(elems, into) {
        if (elems == null)
            return null;
        var result = elems.flatMap(e => this.renderElement(e)).filter(e => e != null);
        if (into)
            appendChildren(into, result);
        return result;
    }
    renderContainer(elem, tagName, props) {
        return this.createElement(tagName, props, this.renderChildren(elem));
    }
    renderContainerNS(elem, ns, tagName, props) {
        return createElementNS(ns, tagName, props, this.renderChildren(elem));
    }
    renderParagraph(elem) {
        var _a, _b, _c, _d;
        var result = this.createElement("p");
        const style = this.findStyle(elem.styleName);
        (_a = elem.tabs) !== null && _a !== void 0 ? _a : (elem.tabs = (_b = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _b === void 0 ? void 0 : _b.tabs);
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.renderCommonProperties(result.style, elem);
        const numbering = (_c = elem.numbering) !== null && _c !== void 0 ? _c : (_d = style === null || style === void 0 ? void 0 : style.paragraphProps) === null || _d === void 0 ? void 0 : _d.numbering;
        if (numbering) {
            result.classList.add(this.numberingClass(numbering.id, numbering.level));
        }
        return result;
    }
    renderRunProperties(style, props) {
        this.renderCommonProperties(style, props);
    }
    renderCommonProperties(style, props) {
        if (props == null)
            return;
        if (props.color) {
            style["color"] = props.color;
        }
        if (props.fontSize) {
            style["font-size"] = props.fontSize;
        }
    }
    renderHyperlink(elem) {
        var result = this.createElement("a");
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.href) {
            result.href = elem.href;
        }
        else if (elem.id) {
            const rel = this.document.documentPart.rels
                .find(it => it.id == elem.id && it.targetMode === "External");
            result.href = rel === null || rel === void 0 ? void 0 : rel.target;
        }
        return result;
    }
    renderDrawing(elem) {
        var result = this.createElement("div");
        result.style.display = "inline-block";
        result.style.position = "relative";
        result.style.textIndent = "0px";
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        return result;
    }
    renderImage(elem) {
        let result = this.createElement("img");
        this.renderStyleValues(elem.cssStyle, result);
        if (this.document) {
            this.document.loadDocumentImage(elem.src, this.currentPart).then(x => {
                result.src = x;
            });
        }
        return result;
    }
    renderText(elem) {
        return this.htmlDocument.createTextNode(elem.text);
    }
    renderDeletedText(elem) {
        return this.options.renderEndnotes ? this.htmlDocument.createTextNode(elem.text) : null;
    }
    renderBreak(elem) {
        if (elem.break == "textWrapping") {
            return this.createElement("br");
        }
        return null;
    }
    renderInserted(elem) {
        if (this.options.renderChanges)
            return this.renderContainer(elem, "ins");
        return this.renderChildren(elem);
    }
    renderDeleted(elem) {
        if (this.options.renderChanges)
            return this.renderContainer(elem, "del");
        return null;
    }
    renderSymbol(elem) {
        var span = this.createElement("span");
        span.style.fontFamily = elem.font;
        span.innerHTML = `&#x${elem.char};`;
        return span;
    }
    renderFootnoteReference(elem) {
        var result = this.createElement("sup");
        this.currentFootnoteIds.push(elem.id);
        result.textContent = `${this.currentFootnoteIds.length}`;
        return result;
    }
    renderEndnoteReference(elem) {
        var result = this.createElement("sup");
        this.currentEndnoteIds.push(elem.id);
        result.textContent = `${this.currentEndnoteIds.length}`;
        return result;
    }
    renderTab(elem) {
        var _a;
        var tabSpan = this.createElement("span");
        tabSpan.innerHTML = "&emsp;";
        if (this.options.experimental) {
            tabSpan.className = this.tabStopClass();
            var stops = (_a = findParent(elem, dom_1.DomType.Paragraph)) === null || _a === void 0 ? void 0 : _a.tabs;
            this.currentTabs.push({ stops, span: tabSpan });
        }
        return tabSpan;
    }
    renderBookmarkStart(elem) {
        var result = this.createElement("span");
        result.id = elem.name;
        return result;
    }
    renderRun(elem) {
        if (elem.fieldRun)
            return null;
        const result = this.createElement("span");
        if (elem.id)
            result.id = elem.id;
        this.renderClass(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.verticalAlign) {
            const wrapper = this.createElement(elem.verticalAlign);
            this.renderChildren(elem, wrapper);
            result.appendChild(wrapper);
        }
        else {
            this.renderChildren(elem, result);
        }
        return result;
    }
    renderTable(elem) {
        let result = this.createElement("table");
        this.tableCellPositions.push(this.currentCellPosition);
        this.tableVerticalMerges.push(this.currentVerticalMerge);
        this.currentVerticalMerge = {};
        this.currentCellPosition = { col: 0, row: 0 };
        if (elem.columns)
            result.appendChild(this.renderTableColumns(elem.columns));
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.currentVerticalMerge = this.tableVerticalMerges.pop();
        this.currentCellPosition = this.tableCellPositions.pop();
        return result;
    }
    renderTableColumns(columns) {
        let result = this.createElement("colgroup");
        for (let col of columns) {
            let colElem = this.createElement("col");
            if (col.width)
                colElem.style.width = col.width;
            result.appendChild(colElem);
        }
        return result;
    }
    renderTableRow(elem) {
        let result = this.createElement("tr");
        this.currentCellPosition.col = 0;
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.currentCellPosition.row++;
        return result;
    }
    renderTableCell(elem) {
        let result = this.createElement("td");
        const key = this.currentCellPosition.col;
        if (elem.verticalMerge) {
            if (elem.verticalMerge == "restart") {
                this.currentVerticalMerge[key] = result;
                result.rowSpan = 1;
            }
            else if (this.currentVerticalMerge[key]) {
                this.currentVerticalMerge[key].rowSpan += 1;
                result.style.display = "none";
            }
        }
        else {
            this.currentVerticalMerge[key] = null;
        }
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.span)
            result.colSpan = elem.span;
        this.currentCellPosition.col += result.colSpan;
        return result;
    }
    renderVmlPicture(elem) {
        var result = createElement("div");
        this.renderChildren(elem, result);
        return result;
    }
    renderVmlElement(elem) {
        var _a, _b;
        var container = createSvgElement("svg");
        container.setAttribute("style", elem.cssStyleText);
        const result = createSvgElement(elem.tagName);
        Object.entries(elem.attrs).forEach(([k, v]) => result.setAttribute(k, v));
        if ((_a = elem.imageHref) === null || _a === void 0 ? void 0 : _a.id) {
            (_b = this.document) === null || _b === void 0 ? void 0 : _b.loadDocumentImage(elem.imageHref.id, this.currentPart).then(x => result.setAttribute("href", x));
        }
        container.appendChild(result);
        setTimeout(() => {
            const bb = container.firstElementChild.getBBox();
            container.setAttribute("width", `${Math.ceil(bb.x + bb.width)}`);
            container.setAttribute("height", `${Math.ceil(bb.y + bb.height)}`);
        }, 0);
        return container;
    }
    renderMmlRadical(elem) {
        var _a;
        const base = elem.children.find(el => el.type == dom_1.DomType.MmlBase);
        if ((_a = elem.props) === null || _a === void 0 ? void 0 : _a.hideDegree) {
            return createElementNS(ns.mathML, "msqrt", null, this.renderElements([base]));
        }
        const degree = elem.children.find(el => el.type == dom_1.DomType.MmlDegree);
        return createElementNS(ns.mathML, "mroot", null, this.renderElements([base, degree]));
    }
    renderMmlDelimiter(elem) {
        var _a, _b;
        const children = [];
        children.push(createElementNS(ns.mathML, "mo", null, [(_a = elem.props.beginChar) !== null && _a !== void 0 ? _a : '(']));
        children.push(...this.renderElements(elem.children));
        children.push(createElementNS(ns.mathML, "mo", null, [(_b = elem.props.endChar) !== null && _b !== void 0 ? _b : ')']));
        return createElementNS(ns.mathML, "mrow", null, children);
    }
    renderMmlNary(elem) {
        var _a;
        const children = [];
        const grouped = (0, utils_1.keyBy)(elem.children, x => x.type);
        const sup = grouped[dom_1.DomType.MmlSuperArgument];
        const sub = grouped[dom_1.DomType.MmlSubArgument];
        const supElem = sup ? createElementNS(ns.mathML, "mo", null, (0, utils_1.asArray)(this.renderElement(sup))) : null;
        const subElem = sub ? createElementNS(ns.mathML, "mo", null, (0, utils_1.asArray)(this.renderElement(sub))) : null;
        if ((_a = elem.props) === null || _a === void 0 ? void 0 : _a.char) {
            const charElem = createElementNS(ns.mathML, "mo", null, [elem.props.char]);
            if (supElem || subElem) {
                children.push(createElementNS(ns.mathML, "munderover", null, [charElem, subElem, supElem]));
            }
            else if (supElem) {
                children.push(createElementNS(ns.mathML, "mover", null, [charElem, supElem]));
            }
            else if (subElem) {
                children.push(createElementNS(ns.mathML, "munder", null, [charElem, subElem]));
            }
            else {
                children.push(charElem);
            }
        }
        children.push(...this.renderElements(grouped[dom_1.DomType.MmlBase].children));
        return createElementNS(ns.mathML, "mrow", null, children);
    }
    renderMmlRun(elem) {
        const result = createElementNS(ns.mathML, "ms");
        this.renderClass(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.renderChildren(elem, result);
        return result;
    }
    renderStyleValues(style, ouput) {
        Object.assign(ouput.style, style);
    }
    renderClass(input, ouput) {
        if (input.className)
            ouput.className = input.className;
        if (input.styleName)
            ouput.classList.add(this.processStyleName(input.styleName));
    }
    findStyle(styleName) {
        var _a;
        return styleName && ((_a = this.styleMap) === null || _a === void 0 ? void 0 : _a[styleName]);
    }
    numberingClass(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    tabStopClass() {
        return `${this.className}-tab-stop`;
    }
    styleToString(selectors, values, cssText = null) {
        let result = `${selectors} {\r\n`;
        for (const key in values) {
            result += `  ${key}: ${values[key]};\r\n`;
        }
        if (cssText)
            result += cssText;
        return result + "}\r\n";
    }
    numberingCounter(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    levelTextToContent(text, suff, id, numformat) {
        var _a;
        const suffMap = {
            "tab": "\\9",
            "space": "\\a0",
        };
        var result = text.replace(/%\d*/g, s => {
            let lvl = parseInt(s.substring(1), 10) - 1;
            return `"counter(${this.numberingCounter(id, lvl)}, ${numformat})"`;
        });
        return `"${result}${(_a = suffMap[suff]) !== null && _a !== void 0 ? _a : ""}"`;
    }
    numFormatToCssValue(format) {
        var mapping = {
            "none": "none",
            "bullet": "disc",
            "decimal": "decimal",
            "lowerLetter": "lower-alpha",
            "upperLetter": "upper-alpha",
            "lowerRoman": "lower-roman",
            "upperRoman": "upper-roman",
        };
        return mapping[format] || format;
    }
    refreshTabStops() {
        if (!this.options.experimental)
            return;
        clearTimeout(this.tabsTimeout);
        this.tabsTimeout = setTimeout(() => {
            const pixelToPoint = (0, javascript_1.computePixelToPoint)();
            for (let tab of this.currentTabs) {
                (0, javascript_1.updateTabStop)(tab.span, tab.stops, this.defaultTabSize, pixelToPoint);
            }
        }, 500);
    }
}
exports.HtmlRenderer = HtmlRenderer;
function createElement(tagName, props, children) {
    return createElementNS(undefined, tagName, props, children);
}
function createSvgElement(tagName, props, children) {
    return createElementNS(ns.svg, tagName, props, children);
}
function createElementNS(ns, tagName, props, children) {
    var result = ns ? document.createElementNS(ns, tagName) : document.createElement(tagName);
    Object.assign(result, props);
    children && appendChildren(result, children);
    return result;
}
function removeAllElements(elem) {
    elem.innerHTML = '';
}
function appendChildren(elem, children) {
    children.forEach(c => elem.appendChild((0, utils_1.isString)(c) ? document.createTextNode(c) : c));
}
function createStyleElement(cssText) {
    return createElement("style", { innerHTML: cssText });
}
function appendComment(elem, comment) {
    elem.appendChild(document.createComment(comment));
}
function findParent(elem, type) {
    var parent = elem.parent;
    while (parent != null && parent.type != type)
        parent = parent.parent;
    return parent;
}


/***/ }),

/***/ "./src/javascript.ts":
/*!***************************!*\
  !*** ./src/javascript.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateTabStop = exports.computePixelToPoint = void 0;
const defaultTab = { pos: 0, leader: "none", style: "left" };
const maxTabs = 50;
function computePixelToPoint(container = document.body) {
    const temp = document.createElement("div");
    temp.style.width = '100pt';
    container.appendChild(temp);
    const result = 100 / temp.offsetWidth;
    container.removeChild(temp);
    return result;
}
exports.computePixelToPoint = computePixelToPoint;
function updateTabStop(elem, tabs, defaultTabSize, pixelToPoint = 72 / 96) {
    const p = elem.closest("p");
    const ebb = elem.getBoundingClientRect();
    const pbb = p.getBoundingClientRect();
    const pcs = getComputedStyle(p);
    const tabStops = (tabs === null || tabs === void 0 ? void 0 : tabs.length) > 0 ? tabs.map(t => ({
        pos: lengthToPoint(t.position),
        leader: t.leader,
        style: t.style
    })).sort((a, b) => a.pos - b.pos) : [defaultTab];
    const lastTab = tabStops[tabStops.length - 1];
    const pWidthPt = pbb.width * pixelToPoint;
    const size = lengthToPoint(defaultTabSize);
    let pos = lastTab.pos + size;
    if (pos < pWidthPt) {
        for (; pos < pWidthPt && tabStops.length < maxTabs; pos += size) {
            tabStops.push(Object.assign(Object.assign({}, defaultTab), { pos: pos }));
        }
    }
    const marginLeft = parseFloat(pcs.marginLeft);
    const pOffset = pbb.left + marginLeft;
    const left = (ebb.left - pOffset) * pixelToPoint;
    const tab = tabStops.find(t => t.style != "clear" && t.pos > left);
    if (tab == null)
        return;
    let width = 1;
    if (tab.style == "right" || tab.style == "center") {
        const tabStops = Array.from(p.querySelectorAll(`.${elem.className}`));
        const nextIdx = tabStops.indexOf(elem) + 1;
        const range = document.createRange();
        range.setStart(elem, 1);
        if (nextIdx < tabStops.length) {
            range.setEndBefore(tabStops[nextIdx]);
        }
        else {
            range.setEndAfter(p);
        }
        const mul = tab.style == "center" ? 0.5 : 1;
        const nextBB = range.getBoundingClientRect();
        const offset = nextBB.left + mul * nextBB.width - (pbb.left - marginLeft);
        width = tab.pos - offset * pixelToPoint;
    }
    else {
        width = tab.pos - left;
    }
    elem.innerHTML = "&nbsp;";
    elem.style.textDecoration = "inherit";
    elem.style.wordSpacing = `${width.toFixed(0)}pt`;
    switch (tab.leader) {
        case "dot":
        case "middleDot":
            elem.style.textDecoration = "underline";
            elem.style.textDecorationStyle = "dotted";
            break;
        case "hyphen":
        case "heavy":
        case "underscore":
            elem.style.textDecoration = "underline";
            break;
    }
}
exports.updateTabStop = updateTabStop;
function lengthToPoint(length) {
    return parseFloat(length);
}


/***/ }),

/***/ "./src/notes/elements.ts":
/*!*******************************!*\
  !*** ./src/notes/elements.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WmlEndnote = exports.WmlFootnote = exports.WmlBaseNote = void 0;
const dom_1 = __webpack_require__(/*! ../document/dom */ "./src/document/dom.ts");
class WmlBaseNote {
    constructor() {
        this.children = [];
        this.cssStyle = {};
    }
}
exports.WmlBaseNote = WmlBaseNote;
class WmlFootnote extends WmlBaseNote {
    constructor() {
        super(...arguments);
        this.type = dom_1.DomType.Footnote;
    }
}
exports.WmlFootnote = WmlFootnote;
class WmlEndnote extends WmlBaseNote {
    constructor() {
        super(...arguments);
        this.type = dom_1.DomType.Endnote;
    }
}
exports.WmlEndnote = WmlEndnote;


/***/ }),

/***/ "./src/notes/parts.ts":
/*!****************************!*\
  !*** ./src/notes/parts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndnotesPart = exports.FootnotesPart = exports.BaseNotePart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const elements_1 = __webpack_require__(/*! ./elements */ "./src/notes/elements.ts");
class BaseNotePart extends part_1.Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
}
exports.BaseNotePart = BaseNotePart;
class FootnotesPart extends BaseNotePart {
    constructor(pkg, path, parser) {
        super(pkg, path, parser);
    }
    parseXml(root) {
        this.notes = this._documentParser.parseNotes(root, "footnote", elements_1.WmlFootnote);
    }
}
exports.FootnotesPart = FootnotesPart;
class EndnotesPart extends BaseNotePart {
    constructor(pkg, path, parser) {
        super(pkg, path, parser);
    }
    parseXml(root) {
        this.notes = this._documentParser.parseNotes(root, "endnote", elements_1.WmlEndnote);
    }
}
exports.EndnotesPart = EndnotesPart;


/***/ }),

/***/ "./src/numbering/numbering-part.ts":
/*!*****************************************!*\
  !*** ./src/numbering/numbering-part.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberingPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const numbering_1 = __webpack_require__(/*! ./numbering */ "./src/numbering/numbering.ts");
class NumberingPart extends part_1.Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        Object.assign(this, (0, numbering_1.parseNumberingPart)(root, this._package.xmlParser));
        this.domNumberings = this._documentParser.parseNumberingFile(root);
    }
}
exports.NumberingPart = NumberingPart;


/***/ }),

/***/ "./src/numbering/numbering.ts":
/*!************************************!*\
  !*** ./src/numbering/numbering.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseNumberingBulletPicture = exports.parseNumberingLevelOverrride = exports.parseNumberingLevel = exports.parseAbstractNumbering = exports.parseNumbering = exports.parseNumberingPart = void 0;
const paragraph_1 = __webpack_require__(/*! ../document/paragraph */ "./src/document/paragraph.ts");
const run_1 = __webpack_require__(/*! ../document/run */ "./src/document/run.ts");
function parseNumberingPart(elem, xml) {
    let result = {
        numberings: [],
        abstractNumberings: [],
        bulletPictures: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "num":
                result.numberings.push(parseNumbering(e, xml));
                break;
            case "abstractNum":
                result.abstractNumberings.push(parseAbstractNumbering(e, xml));
                break;
            case "numPicBullet":
                result.bulletPictures.push(parseNumberingBulletPicture(e, xml));
                break;
        }
    }
    return result;
}
exports.parseNumberingPart = parseNumberingPart;
function parseNumbering(elem, xml) {
    let result = {
        id: xml.attr(elem, 'numId'),
        overrides: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "abstractNumId":
                result.abstractId = xml.attr(e, "val");
                break;
            case "lvlOverride":
                result.overrides.push(parseNumberingLevelOverrride(e, xml));
                break;
        }
    }
    return result;
}
exports.parseNumbering = parseNumbering;
function parseAbstractNumbering(elem, xml) {
    let result = {
        id: xml.attr(elem, 'abstractNumId'),
        levels: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "name":
                result.name = xml.attr(e, "val");
                break;
            case "multiLevelType":
                result.multiLevelType = xml.attr(e, "val");
                break;
            case "numStyleLink":
                result.numberingStyleLink = xml.attr(e, "val");
                break;
            case "styleLink":
                result.styleLink = xml.attr(e, "val");
                break;
            case "lvl":
                result.levels.push(parseNumberingLevel(e, xml));
                break;
        }
    }
    return result;
}
exports.parseAbstractNumbering = parseAbstractNumbering;
function parseNumberingLevel(elem, xml) {
    let result = {
        level: xml.intAttr(elem, 'ilvl')
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "start":
                result.start = xml.attr(e, "val");
                break;
            case "lvlRestart":
                result.restart = xml.intAttr(e, "val");
                break;
            case "numFmt":
                result.format = xml.attr(e, "val");
                break;
            case "lvlText":
                result.text = xml.attr(e, "val");
                break;
            case "lvlJc":
                result.justification = xml.attr(e, "val");
                break;
            case "lvlPicBulletId":
                result.bulletPictureId = xml.attr(e, "val");
                break;
            case "pStyle":
                result.paragraphStyle = xml.attr(e, "val");
                break;
            case "pPr":
                result.paragraphProps = (0, paragraph_1.parseParagraphProperties)(e, xml);
                break;
            case "rPr":
                result.runProps = (0, run_1.parseRunProperties)(e, xml);
                break;
        }
    }
    return result;
}
exports.parseNumberingLevel = parseNumberingLevel;
function parseNumberingLevelOverrride(elem, xml) {
    let result = {
        level: xml.intAttr(elem, 'ilvl')
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "startOverride":
                result.start = xml.intAttr(e, "val");
                break;
            case "lvl":
                result.numberingLevel = parseNumberingLevel(e, xml);
                break;
        }
    }
    return result;
}
exports.parseNumberingLevelOverrride = parseNumberingLevelOverrride;
function parseNumberingBulletPicture(elem, xml) {
    var pict = xml.element(elem, "pict");
    var shape = pict && xml.element(pict, "shape");
    var imagedata = shape && xml.element(shape, "imagedata");
    return imagedata ? {
        id: xml.attr(elem, "numPicBulletId"),
        referenceId: xml.attr(imagedata, "id"),
        style: xml.attr(shape, "style")
    } : null;
}
exports.parseNumberingBulletPicture = parseNumberingBulletPicture;


/***/ }),

/***/ "./src/parser/xml-parser.ts":
/*!**********************************!*\
  !*** ./src/parser/xml-parser.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XmlParser = exports.serializeXmlString = exports.parseXmlString = void 0;
const common_1 = __webpack_require__(/*! ../document/common */ "./src/document/common.ts");
function parseXmlString(xmlString, trimXmlDeclaration = false) {
    if (trimXmlDeclaration)
        xmlString = xmlString.replace(/<[?].*[?]>/, "");
    const result = new DOMParser().parseFromString(xmlString, "application/xml");
    const errorText = hasXmlParserError(result);
    if (errorText)
        throw new Error(errorText);
    return result;
}
exports.parseXmlString = parseXmlString;
function hasXmlParserError(doc) {
    var _a;
    return (_a = doc.getElementsByTagName("parsererror")[0]) === null || _a === void 0 ? void 0 : _a.textContent;
}
function serializeXmlString(elem) {
    return new XMLSerializer().serializeToString(elem);
}
exports.serializeXmlString = serializeXmlString;
class XmlParser {
    elements(elem, localName = null) {
        const result = [];
        for (let i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && (localName == null || c.localName == localName))
                result.push(c);
        }
        return result;
    }
    element(elem, localName) {
        for (let i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && c.localName == localName)
                return c;
        }
        return null;
    }
    elementAttr(elem, localName, attrLocalName) {
        var el = this.element(elem, localName);
        return el ? this.attr(el, attrLocalName) : undefined;
    }
    attrs(elem) {
        return Array.from(elem.attributes);
    }
    attr(elem, localName) {
        for (let i = 0, l = elem.attributes.length; i < l; i++) {
            let a = elem.attributes.item(i);
            if (a.localName == localName)
                return a.value;
        }
        return null;
    }
    intAttr(node, attrName, defaultValue = null) {
        var val = this.attr(node, attrName);
        return val ? parseInt(val) : defaultValue;
    }
    hexAttr(node, attrName, defaultValue = null) {
        var val = this.attr(node, attrName);
        return val ? parseInt(val, 16) : defaultValue;
    }
    floatAttr(node, attrName, defaultValue = null) {
        var val = this.attr(node, attrName);
        return val ? parseFloat(val) : defaultValue;
    }
    boolAttr(node, attrName, defaultValue = null) {
        return (0, common_1.convertBoolean)(this.attr(node, attrName), defaultValue);
    }
    lengthAttr(node, attrName, usage = common_1.LengthUsage.Dxa) {
        return (0, common_1.convertLength)(this.attr(node, attrName), usage);
    }
}
exports.XmlParser = XmlParser;
const globalXmlParser = new XmlParser();
exports["default"] = globalXmlParser;


/***/ }),

/***/ "./src/settings/settings-part.ts":
/*!***************************************!*\
  !*** ./src/settings/settings-part.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./src/settings/settings.ts");
class SettingsPart extends part_1.Part {
    constructor(pkg, path) {
        super(pkg, path);
    }
    parseXml(root) {
        this.settings = (0, settings_1.parseSettings)(root, this._package.xmlParser);
    }
}
exports.SettingsPart = SettingsPart;


/***/ }),

/***/ "./src/settings/settings.ts":
/*!**********************************!*\
  !*** ./src/settings/settings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseNoteProperties = exports.parseSettings = void 0;
function parseSettings(elem, xml) {
    var result = {};
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "defaultTabStop":
                result.defaultTabStop = xml.lengthAttr(el, "val");
                break;
            case "footnotePr":
                result.footnoteProps = parseNoteProperties(el, xml);
                break;
            case "endnotePr":
                result.endnoteProps = parseNoteProperties(el, xml);
                break;
            case "autoHyphenation":
                result.autoHyphenation = xml.boolAttr(el, "val");
                break;
        }
    }
    return result;
}
exports.parseSettings = parseSettings;
function parseNoteProperties(elem, xml) {
    var result = {
        defaultNoteIds: []
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "numFmt":
                result.nummeringFormat = xml.attr(el, "val");
                break;
            case "footnote":
            case "endnote":
                result.defaultNoteIds.push(xml.attr(el, "id"));
                break;
        }
    }
    return result;
}
exports.parseNoteProperties = parseNoteProperties;


/***/ }),

/***/ "./src/styles/styles-part.ts":
/*!***********************************!*\
  !*** ./src/styles/styles-part.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StylesPart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
class StylesPart extends part_1.Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.styles = this._documentParser.parseStylesFile(root);
    }
}
exports.StylesPart = StylesPart;


/***/ }),

/***/ "./src/theme/theme-part.ts":
/*!*********************************!*\
  !*** ./src/theme/theme-part.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemePart = void 0;
const part_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
const theme_1 = __webpack_require__(/*! ./theme */ "./src/theme/theme.ts");
class ThemePart extends part_1.Part {
    constructor(pkg, path) {
        super(pkg, path);
    }
    parseXml(root) {
        this.theme = (0, theme_1.parseTheme)(root, this._package.xmlParser);
    }
}
exports.ThemePart = ThemePart;


/***/ }),

/***/ "./src/theme/theme.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseFontInfo = exports.parseFontScheme = exports.parseColorScheme = exports.parseTheme = exports.DmlTheme = void 0;
class DmlTheme {
}
exports.DmlTheme = DmlTheme;
function parseTheme(elem, xml) {
    var result = new DmlTheme();
    var themeElements = xml.element(elem, "themeElements");
    for (let el of xml.elements(themeElements)) {
        switch (el.localName) {
            case "clrScheme":
                result.colorScheme = parseColorScheme(el, xml);
                break;
            case "fontScheme":
                result.fontScheme = parseFontScheme(el, xml);
                break;
        }
    }
    return result;
}
exports.parseTheme = parseTheme;
function parseColorScheme(elem, xml) {
    var result = {
        name: xml.attr(elem, "name"),
        colors: {}
    };
    for (let el of xml.elements(elem)) {
        var srgbClr = xml.element(el, "srgbClr");
        var sysClr = xml.element(el, "sysClr");
        if (srgbClr) {
            result.colors[el.localName] = xml.attr(srgbClr, "val");
        }
        else if (sysClr) {
            result.colors[el.localName] = xml.attr(sysClr, "lastClr");
        }
    }
    return result;
}
exports.parseColorScheme = parseColorScheme;
function parseFontScheme(elem, xml) {
    var result = {
        name: xml.attr(elem, "name"),
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "majorFont":
                result.majorFont = parseFontInfo(el, xml);
                break;
            case "minorFont":
                result.minorFont = parseFontInfo(el, xml);
                break;
        }
    }
    return result;
}
exports.parseFontScheme = parseFontScheme;
function parseFontInfo(elem, xml) {
    return {
        latinTypeface: xml.elementAttr(elem, "latin", "typeface"),
        eaTypeface: xml.elementAttr(elem, "ea", "typeface"),
        csTypeface: xml.elementAttr(elem, "cs", "typeface"),
    };
}
exports.parseFontInfo = parseFontInfo;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asArray = exports.formatCssRules = exports.parseCssRules = exports.mergeDeep = exports.isString = exports.isObject = exports.blobToBase64 = exports.keyBy = exports.resolvePath = exports.splitPath = exports.escapeClassName = void 0;
function escapeClassName(className) {
    return className === null || className === void 0 ? void 0 : className.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
}
exports.escapeClassName = escapeClassName;
function splitPath(path) {
    let si = path.lastIndexOf('/') + 1;
    let folder = si == 0 ? "" : path.substring(0, si);
    let fileName = si == 0 ? path : path.substring(si);
    return [folder, fileName];
}
exports.splitPath = splitPath;
function resolvePath(path, base) {
    try {
        const prefix = "http://docx/";
        const url = new URL(path, prefix + base).toString();
        return url.substring(prefix.length);
    }
    catch (_a) {
        return `${base}${path}`;
    }
}
exports.resolvePath = resolvePath;
function keyBy(array, by) {
    return array.reduce((a, x) => {
        a[by(x)] = x;
        return a;
    }, {});
}
exports.keyBy = keyBy;
function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
exports.blobToBase64 = blobToBase64;
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
exports.isObject = isObject;
function isString(item) {
    return item && typeof item === 'string' || item instanceof String;
}
exports.isString = isString;
function mergeDeep(target, ...sources) {
    var _a;
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                const val = (_a = target[key]) !== null && _a !== void 0 ? _a : (target[key] = {});
                mergeDeep(val, source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return mergeDeep(target, ...sources);
}
exports.mergeDeep = mergeDeep;
function parseCssRules(text) {
    const result = {};
    for (const rule of text.split(';')) {
        const [key, val] = rule.split(':');
        result[key] = val;
    }
    return result;
}
exports.parseCssRules = parseCssRules;
function formatCssRules(style) {
    return Object.entries(style).map((k, v) => `${k}: ${v}`).join(';');
}
exports.formatCssRules = formatCssRules;
function asArray(val) {
    return Array.isArray(val) ? val : [val];
}
exports.asArray = asArray;


/***/ }),

/***/ "./src/vml/vml.ts":
/*!************************!*\
  !*** ./src/vml/vml.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseVmlElement = exports.VmlElement = void 0;
const common_1 = __webpack_require__(/*! ../document/common */ "./src/document/common.ts");
const dom_1 = __webpack_require__(/*! ../document/dom */ "./src/document/dom.ts");
const xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
class VmlElement {
    constructor() {
        this.type = dom_1.DomType.VmlElement;
        this.attrs = {};
        this.chidren = [];
    }
}
exports.VmlElement = VmlElement;
function parseVmlElement(elem) {
    var result = new VmlElement();
    switch (elem.localName) {
        case "rect":
            result.tagName = "rect";
            Object.assign(result.attrs, { width: '100%', height: '100%' });
            break;
        case "oval":
            result.tagName = "ellipse";
            Object.assign(result.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
            break;
        case "line":
            result.tagName = "line";
            break;
        case "shape":
            result.tagName = "g";
            break;
        default:
            return null;
    }
    for (const at of xml_parser_1.default.attrs(elem)) {
        switch (at.localName) {
            case "style":
                result.cssStyleText = at.value;
                break;
            case "fillcolor":
                result.attrs.fill = at.value;
                break;
            case "from":
                const [x1, y1] = parsePoint(at.value);
                Object.assign(result.attrs, { x1, y1 });
                break;
            case "to":
                const [x2, y2] = parsePoint(at.value);
                Object.assign(result.attrs, { x2, y2 });
                break;
        }
    }
    for (const el of xml_parser_1.default.elements(elem)) {
        switch (el.localName) {
            case "stroke":
                Object.assign(result.attrs, parseStroke(el));
                break;
            case "fill":
                Object.assign(result.attrs, parseFill(el));
                break;
            case "imagedata":
                result.tagName = "image";
                Object.assign(result.attrs, { width: '100%', height: '100%' });
                result.imageHref = {
                    id: xml_parser_1.default.attr(el, "id"),
                    title: xml_parser_1.default.attr(el, "title"),
                };
                break;
            default:
                const child = parseVmlElement(el);
                child && result.chidren.push(child);
                break;
        }
    }
    return result;
}
exports.parseVmlElement = parseVmlElement;
function parseStroke(el) {
    var _a;
    return {
        'stroke': xml_parser_1.default.attr(el, "color"),
        'stroke-width': (_a = xml_parser_1.default.lengthAttr(el, "weight", common_1.LengthUsage.Emu)) !== null && _a !== void 0 ? _a : '1px'
    };
}
function parseFill(el) {
    return {};
}
function parsePoint(val) {
    return val.split(",");
}
function convertPath(path) {
    return path.replace(/([mlxe])|([-\d]+)|([,])/g, (m) => {
        if (/[-\d]/.test(m))
            return (0, common_1.convertLength)(m, common_1.LengthUsage.VmlEmu);
        if (/[ml,]/.test(m))
            return m;
        return '';
    });
}


/***/ }),

/***/ "./src/word-document.ts":
/*!******************************!*\
  !*** ./src/word-document.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deobfuscate = exports.WordDocument = void 0;
const relationship_1 = __webpack_require__(/*! ./common/relationship */ "./src/common/relationship.ts");
const font_table_1 = __webpack_require__(/*! ./font-table/font-table */ "./src/font-table/font-table.ts");
const open_xml_package_1 = __webpack_require__(/*! ./common/open-xml-package */ "./src/common/open-xml-package.ts");
const document_part_1 = __webpack_require__(/*! ./document/document-part */ "./src/document/document-part.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const numbering_part_1 = __webpack_require__(/*! ./numbering/numbering-part */ "./src/numbering/numbering-part.ts");
const styles_part_1 = __webpack_require__(/*! ./styles/styles-part */ "./src/styles/styles-part.ts");
const parts_1 = __webpack_require__(/*! ./header-footer/parts */ "./src/header-footer/parts.ts");
const extended_props_part_1 = __webpack_require__(/*! ./document-props/extended-props-part */ "./src/document-props/extended-props-part.ts");
const core_props_part_1 = __webpack_require__(/*! ./document-props/core-props-part */ "./src/document-props/core-props-part.ts");
const theme_part_1 = __webpack_require__(/*! ./theme/theme-part */ "./src/theme/theme-part.ts");
const parts_2 = __webpack_require__(/*! ./notes/parts */ "./src/notes/parts.ts");
const settings_part_1 = __webpack_require__(/*! ./settings/settings-part */ "./src/settings/settings-part.ts");
const custom_props_part_1 = __webpack_require__(/*! ./document-props/custom-props-part */ "./src/document-props/custom-props-part.ts");
const topLevelRels = [
    { type: relationship_1.RelationshipTypes.OfficeDocument, target: "word/document.xml" },
    { type: relationship_1.RelationshipTypes.ExtendedProperties, target: "docProps/app.xml" },
    { type: relationship_1.RelationshipTypes.CoreProperties, target: "docProps/core.xml" },
    { type: relationship_1.RelationshipTypes.CustomProperties, target: "docProps/custom.xml" },
];
class WordDocument {
    constructor() {
        this.parts = [];
        this.partsMap = {};
    }
    static load(blob, parser, options) {
        var d = new WordDocument();
        d._options = options;
        d._parser = parser;
        return open_xml_package_1.OpenXmlPackage.load(blob, options)
            .then(pkg => {
            d._package = pkg;
            return d._package.loadRelationships();
        }).then(rels => {
            d.rels = rels;
            const tasks = topLevelRels.map(rel => {
                var _a;
                const r = (_a = rels.find(x => x.type === rel.type)) !== null && _a !== void 0 ? _a : rel;
                return d.loadRelationshipPart(r.target, r.type);
            });
            return Promise.all(tasks);
        }).then(() => d);
    }
    save(type = "blob") {
        return this._package.save(type);
    }
    loadRelationshipPart(path, type) {
        if (this.partsMap[path])
            return Promise.resolve(this.partsMap[path]);
        if (!this._package.get(path))
            return Promise.resolve(null);
        let part = null;
        switch (type) {
            case relationship_1.RelationshipTypes.OfficeDocument:
                this.documentPart = part = new document_part_1.DocumentPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.FontTable:
                this.fontTablePart = part = new font_table_1.FontTablePart(this._package, path);
                break;
            case relationship_1.RelationshipTypes.Numbering:
                this.numberingPart = part = new numbering_part_1.NumberingPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.Styles:
                this.stylesPart = part = new styles_part_1.StylesPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.Theme:
                this.themePart = part = new theme_part_1.ThemePart(this._package, path);
                break;
            case relationship_1.RelationshipTypes.Footnotes:
                this.footnotesPart = part = new parts_2.FootnotesPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.Endnotes:
                this.endnotesPart = part = new parts_2.EndnotesPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.Footer:
                part = new parts_1.FooterPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.Header:
                part = new parts_1.HeaderPart(this._package, path, this._parser);
                break;
            case relationship_1.RelationshipTypes.CoreProperties:
                this.corePropsPart = part = new core_props_part_1.CorePropsPart(this._package, path);
                break;
            case relationship_1.RelationshipTypes.ExtendedProperties:
                this.extendedPropsPart = part = new extended_props_part_1.ExtendedPropsPart(this._package, path);
                break;
            case relationship_1.RelationshipTypes.CustomProperties:
                part = new custom_props_part_1.CustomPropsPart(this._package, path);
                break;
            case relationship_1.RelationshipTypes.Settings:
                this.settingsPart = part = new settings_part_1.SettingsPart(this._package, path);
                break;
        }
        if (part == null)
            return Promise.resolve(null);
        this.partsMap[path] = part;
        this.parts.push(part);
        return part.load().then(() => {
            if (part.rels == null || part.rels.length == 0)
                return part;
            const [folder] = (0, utils_1.splitPath)(part.path);
            const rels = part.rels.map(rel => {
                return this.loadRelationshipPart((0, utils_1.resolvePath)(rel.target, folder), rel.type);
            });
            return Promise.all(rels).then(() => part);
        });
    }
    loadDocumentImage(id, part) {
        return this.loadResource(part !== null && part !== void 0 ? part : this.documentPart, id, "blob")
            .then(x => this.blobToURL(x));
    }
    loadNumberingImage(id) {
        return this.loadResource(this.numberingPart, id, "blob")
            .then(x => this.blobToURL(x));
    }
    loadFont(id, key) {
        return this.loadResource(this.fontTablePart, id, "uint8array")
            .then(x => x ? this.blobToURL(new Blob([deobfuscate(x, key)])) : x);
    }
    blobToURL(blob) {
        if (!blob)
            return null;
        if (this._options.useBase64URL) {
            return (0, utils_1.blobToBase64)(blob);
        }
        return URL.createObjectURL(blob);
    }
    findPartByRelId(id, basePart = null) {
        var _a;
        var rel = ((_a = basePart.rels) !== null && _a !== void 0 ? _a : this.rels).find(r => r.id == id);
        const folder = basePart ? (0, utils_1.splitPath)(basePart.path)[0] : '';
        return rel ? this.partsMap[(0, utils_1.resolvePath)(rel.target, folder)] : null;
    }
    getPathById(part, id) {
        const rel = part.rels.find(x => x.id == id);
        const [folder] = (0, utils_1.splitPath)(part.path);
        return rel ? (0, utils_1.resolvePath)(rel.target, folder) : null;
    }
    loadResource(part, id, outputType) {
        const path = this.getPathById(part, id);
        return path ? this._package.load(path, outputType) : Promise.resolve(null);
    }
}
exports.WordDocument = WordDocument;
function deobfuscate(data, guidKey) {
    const len = 16;
    const trimmed = guidKey.replace(/{|}|-/g, "");
    const numbers = new Array(len);
    for (let i = 0; i < len; i++)
        numbers[len - i - 1] = parseInt(trimmed.substr(i * 2, 2), 16);
    for (let i = 0; i < 32; i++)
        data[i] = data[i] ^ numbers[i % len];
    return data;
}
exports.deobfuscate = deobfuscate;


/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E";

/***/ }),

/***/ "jszip":
/*!**************************************************************************************!*\
  !*** external {"root":"JSZip","commonjs":"jszip","commonjs2":"jszip","amd":"jszip"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jszip__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"docx-preview": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/docx-preview.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=docx-preview.js.map
(function (name, definition){
	if (typeof this.define === "function"){ // AMD
		this.define(definition);
	} else if (typeof module !== "undefined" && module.exports) { // Node.js
		module.exports = definition();
	} else { // Browser
		var theModule = definition();
		var global = this;
		var old = global[name];
		theModule.noConflict = function () {
			global[name] = old;
			return theModule;
		};
		global[name] = theModule;
	}
})("createTextVersion", function () {
	var populateChar = function(ch, amount){
		var result = "";
		for(var i=0; i<amount; i += 1){
			result += ch;
		}
		return result;
	};
	const htmlToPlainText = function (htmlText, styleConfig) {

		// define default styleConfig
		var linkProcess = null;
		var imgProcess = null;
		var headingStyle = "underline"; // hashify, breakline
		var listStyle = "indention"; // indention
		var uIndentionChar = "-";
		var listIndentionTabs = 3;
		var oIndentionChar = "-";

		// or accept user defined config
		if(!!styleConfig){
			if(typeof styleConfig.linkProcess === "function") {
				linkProcess = styleConfig.linkProcess;
			}
			if(typeof styleConfig.imgProcess === "function") {
				imgProcess = styleConfig.imgProcess;
			}
			if(!!styleConfig.headingStyle) {
				headingStyle = styleConfig.headingStyle;
			}
			if(!!styleConfig.listStyle) {
				listStyle = styleConfig.listStyle;
			}
			if(!!styleConfig.uIndentionChar) {
				uIndentionChar = styleConfig.uIndentionChar;
			}
			if(!!styleConfig.listIndentionTabs) {
				listIndentionTabs = styleConfig.listIndentionTabs;
			}
			if(!!styleConfig.oIndentionChar) {
				oIndentionChar = styleConfig.oIndentionChar;
			}
		}

		var uIndention = populateChar(uIndentionChar, listIndentionTabs);

		// removel all \n linebreaks
		var tmp = String(htmlText).replace(/\n|\r/g, " ");

		// remove everything before and after <body> tags including the tag itself
		tmp = tmp.replace(/<\/body>.*/i, "");
		tmp = tmp.replace(/.*<body[^>]*>/i, "");

		// remove inbody scripts and styles
		tmp = tmp.replace(/<(script|style)( [^>]*)*>((?!<\/\1( [^>]*)*>).)*<\/\1>/gi, "");

		// remove all tags except that are being handled separately
		tmp = tmp.replace(/<(\/)?((?!h[1-6]( [^>]*)*>)(?!img( [^>]*)*>)(?!a( [^>]*)*>)(?!ul( [^>]*)*>)(?!ol( [^>]*)*>)(?!li( [^>]*)*>)(?!p( [^>]*)*>)(?!div( [^>]*)*>)(?!td( [^>]*)*>)(?!br( [^>]*)*>)[^>\/])[^>]*>/gi, "");

		// remove or replace images - replacement texts with <> tags will be removed also, if not intentional, try to use other notation
		tmp = tmp.replace(/<img([^>]*)>/gi, function(str, imAttrs) {
			var imSrc = "";
			var imAlt = "";
			var imSrcResult = (/src="([^"]*)"/i).exec(imAttrs);
			var imAltResult = (/alt="([^"]*)"/i).exec(imAttrs);
			if(imSrcResult !== null){
				imSrc = imSrcResult[1];
			}
			if(imAltResult !== null){
				imAlt = imAltResult[1];
			}
			if(typeof(imgProcess) === "function") {
				return imgProcess(imSrc, imAlt);
			}
			if(imAlt === ""){
				return "![image] ("+ imSrc + ")";
			}
			return "![" + imAlt+"] ("+ imSrc + ")";
		});


		function createListReplaceCb() {
			return function(match, listType, listAttributes, listBody) {
				var liIndex = 0;
				if(listAttributes && /start="([0-9]+)"/i.test(listAttributes)) {
					liIndex = (/start="([0-9]+)"/i.exec(listAttributes)[1])-1;
				}
				var plainListItem = "<p>" + listBody.replace(/<li[^>]*>(((?!<li[^>]*>)(?!<\/li>).)*)<\/li>/gi, function(str, listItem) {
					var actSubIndex = 0;
					var plainListLine = listItem.replace(/(^|(<br \/>))(?!<p>)/gi, function(){
						if(listType === "o" && actSubIndex === 0){
							liIndex += 1;
							actSubIndex += 1;
							return "<br />" + liIndex + populateChar(oIndentionChar, listIndentionTabs-(String(liIndex).length));
						}
						return "<br />" + uIndention;
					});
					return plainListLine;
				})+"</p>";
				return plainListItem;
			};
		}

		// handle lists
		if(listStyle === "linebreak"){
			tmp = tmp.replace(/<\/?ul[^>]*>|<\/?ol[^>]*>|<\/?li[^>]*>/gi, "\n");
		}
		else if(listStyle === "indention"){
			while( /<(o|u)l[^>]*>(.*)<\/\1l>/gi.test(tmp)){
				tmp = tmp.replace(/<(o|u)l([^>]*)>(((?!<(o|u)l[^>]*>)(?!<\/(o|u)l>).)*)<\/\1l>/gi, createListReplaceCb());
			}
		}

		// handle headings
		if(headingStyle === "linebreak") {
			tmp = tmp.replace(/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, "\n$2\n");
		}
		else if(headingStyle === "underline") {
			tmp = tmp.replace(/<h1[^>]*>(((?!<\/h1>).)*)<\/h1>/gi, function(str, p1) {
				return "\n&nbsp;\n" + p1 + "\n" + populateChar("=", p1.length) + "\n&nbsp;\n";
			});
			tmp = tmp.replace(/<h2[^>]*>(((?!<\/h2>).)*)<\/h2>/gi, function(str, p1) {
				return "\n&nbsp;\n" + p1 + "\n" + populateChar("-", p1.length) + "\n&nbsp;\n";
			});
			tmp = tmp.replace(/<h([3-6])[^>]*>(((?!<\/h\1>).)*)<\/h\1>/gi, function(str, p1, p2) {
				return "\n&nbsp;\n" + p2 + "\n&nbsp;\n";
			});
		}
		else if(headingStyle === "hashify") {
			tmp = tmp.replace(/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, function(str, p1, p2) {
				return "\n&nbsp;\n" + populateChar("#", p1) + " " + p2 + "\n&nbsp;\n";
			});
		}

		// replace <br>s, <td>s, <divs> and <p>s with linebreaks
		tmp = tmp.replace(/<br( [^>]*)*>|<p( [^>]*)*>|<\/p( [^>]*)*>|<div( [^>]*)*>|<\/div( [^>]*)*>|<td( [^>]*)*>|<\/td( [^>]*)*>/gi, "\n");

		// replace <a href>b<a> links with b (href) or as described in the linkProcess function
		tmp = tmp.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a[^>]*>/gi, function(str, href, linkText) {
			if(typeof linkProcess === "function") {
				return linkProcess(href, linkText);
			}
			return " [" + linkText+"] ("+ href + ") ";
		});

		// remove whitespace from empty lines excluding nbsp
		tmp = tmp.replace(/\n[ \t\f]*/gi, "\n");

		// remove duplicated empty lines
		tmp = tmp.replace(/\n\n+/gi, "\n");

		// remove duplicated spaces including non braking spaces
		tmp = tmp.replace(/( |&nbsp;|\t)+/gi, " ");

		// remove line starter spaces
		tmp = tmp.replace(/\n +/gi, "\n");

		// remove content starter spaces
		tmp = tmp.replace(/^ +/gi, "");

		// remove first empty line
		while(tmp.indexOf("\n") === 0){
			tmp = tmp.substring(1);
		}

		// put a new line at the end
		if(tmp.length === 0 || tmp.lastIndexOf("\n") !== tmp.length-1){
			tmp += "\n";
		}

		return tmp;
	}
	return htmlToPlainText;
});
!(function(){
	if(typeof window.PTOP !== 'number') {
		window.PTOP = window.top.innerHeight - 40;
	}
	let currentDocument = null,
		file;
	const params = window.location.search.replace('?','').split('&').reduce((p,e) =>{
			const a = e.split('=');
			p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		},{}),
		st = window.location.origin + '/',
		title = document.getElementById('title'),
		download = document.getElementById('download'),
		fl = params['file'] ? params['file'].replace(/^\/?/, '') : false,
		docxOptions = Object.assign(docx.defaultOptions, {
			breakPages: true,
			className: "docx",
			debug: false,
			experimental: true,
			ignoreFonts: false,
			ignoreHeight: false,
			ignoreLastRenderedPageBreak: false,
			ignoreWidth: false,
			inWrapper: true,
			renderChanges: false,
			renderEndnotes: true,
			renderFooters: true,
			renderFootnotes: true,
			renderHeaders: true,
			trimXmlDeclaration: false,
			useBase64URL: false,
			useMathMLPolyfill: false
		}),
		wrapper = document.querySelector("#document-wrapper"),
		container = document.querySelector("#document-container"),
		loadFile = function(url) {
			return new Promise((responce, reject) => {
				fetch(url, {cache: "no-cache"})
					.then( res => res.blob() )
					.then( blob => {
						//var file = window.URL.createObjectURL(blob);
						responce(blob);
					})
					.catch((err) => {
						reject(err);
					});
			})
		},
		renderDocx = function(url) {
			currentDocument = url; 
			if (!currentDocument) 
				return;
			loadFile(url)
				.then((data) => {
					docx.renderAsync(data, container, null, docxOptions).then((x) => {
						//renderThumbnails(container, document.querySelector("#thumbnails-container"));
						window.dispatchEvent(new Event('resize'));
						window.top.dispatchEvent(new Event('resize'));
						docx.praseAsync(data).then((p) => {
							try {
								if(p.corePropsPart.props.title) {
									title.innerHTML = document.getElementsByTagName('title')[0].innerHTML = p.corePropsPart.props.title;
									download.setAttribute('download', p.corePropsPart.props.title + '.docx');
								}
								download.setAttribute("href", file);
							}catch(err){
								console.log(err);
							}
						});
					}).catch((err) => {
						container.classList.add('error-load');
						wrapper.classList.add('error-load');
						//container.innerHTML = `Ошибка загрузки файла: ${file}`
					}); 
				})
				.catch((err) => {
					console.log(err);
					container.classList.add('error-load');
					wrapper.classList.add('error-load');
					//container.innerHTML = `Ошибка загрузки файла: ${file}`
				});
		};
	if(fl) {
		file = /^((?:http|https|ftp):\/\/)/.test(fl) ? fl : st + fl;
		title.innerHTML = document.getElementsByTagName('title')[0].innerHTML = file.split('/').at(-1);
		renderDocx(file);
	}
}());