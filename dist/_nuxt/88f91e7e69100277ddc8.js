(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,n){"use strict";var strong=n(163),o=n(157);e.exports=n(164)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(o(this,"Set"),e=0===e?0:e,e)}},strong)},153:function(e,t,n){var content=n(166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("693bd06f",content,!0,{sourceMap:!1})},154:function(e,t,n){var content=n(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("ea3d5c7a",content,!0,{sourceMap:!1})},155:function(e,t,n){var o=n(161);e.exports=function(e,t){return new(o(e))(t)}},156:function(e,t,n){"use strict";var o=n(6),r=n(162),c=n(20),l=n(16),d=n(43),h=n(155);o(o.P,"Array",{flatMap:function(e){var t,n,o=c(this);return d(e),t=l(o.length),n=h(o,0),r(n,o,o,t,0,1,e,arguments[1]),n}}),n(77)("flatMap")},157:function(e,t,n){var o=n(9);e.exports=function(e,t){if(!o(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},158:function(e,t,n){e.exports=n.p+"img/beb7987.png"},159:function(e,t,n){"use strict";var o=n(6),r=n(160)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),o(o.P+o.F*c,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("find")},160:function(e,t,n){var o=n(19),r=n(78),c=n(20),l=n(16),d=n(155);e.exports=function(e,t){var n=1==e,h=2==e,m=3==e,v=4==e,f=6==e,y=5==e||f,_=t||d;return function(t,d,x){for(var C,S,N=c(t),w=r(N),A=o(d,x,3),H=l(w.length),k=0,P=n?_(t,H):h?_(t,0):void 0;H>k;k++)if((y||k in w)&&(S=A(C=w[k],k,N),e))if(n)P[k]=S;else if(S)switch(e){case 3:return!0;case 5:return C;case 6:return k;case 2:P.push(C)}else if(v)return!1;return f?-1:m||v?v:P}}},161:function(e,t,n){var o=n(9),r=n(108),c=n(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),o(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},162:function(e,t,n){"use strict";var o=n(108),r=n(9),c=n(16),l=n(19),d=n(2)("isConcatSpreadable");e.exports=function e(t,n,source,h,m,v,f,y){for(var element,_,x=m,C=0,S=!!f&&l(f,y,3);C<h;){if(C in source){if(element=S?S(source[C],C,n):source[C],_=!1,r(element)&&(_=void 0!==(_=element[d])?!!_:o(element)),_&&v>0)x=e(t,n,element,c(element.length),x,v-1)-1;else{if(x>=9007199254740991)throw TypeError();t[x]=element}x++}C++}return x}},163:function(e,t,n){"use strict";var o=n(8).f,r=n(79),c=n(111),l=n(19),d=n(109),h=n(110),m=n(81),v=n(112),f=n(82),y=n(7),_=n(107).fastKey,x=n(157),C=y?"_s":"size",S=function(e,t){var n,o=_(t);if("F"!==o)return e._i[o];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,m){var v=e((function(e,o){d(e,v,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[C]=0,null!=o&&h(o,n,e[m],e)}));return c(v.prototype,{clear:function(){for(var e=x(this,t),data=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];e._f=e._l=void 0,e[C]=0},delete:function(e){var n=x(this,t),o=S(n,e);if(o){var r=o.n,c=o.p;delete n._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),n._f==o&&(n._f=r),n._l==o&&(n._l=c),n[C]--}return!!o},forEach:function(e){x(this,t);for(var n,o=l(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!S(x(this,t),e)}}),y&&o(v.prototype,"size",{get:function(){return x(this,t)[C]}}),v},def:function(e,t,n){var o,r,c=S(e,t);return c?c.v=n:(e._l=c={i:r=_(t,!0),k:t,v:n,p:o=e._l,n:void 0,r:!1},e._f||(e._f=c),o&&(o.n=c),e[C]++,"F"!==r&&(e._i[r]=c)),e},getEntry:S,setStrong:function(e,t,n){m(e,t,(function(e,n){this._t=x(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?v(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,v(1))}),n?"entries":"values",!n,!0),f(t)}}},164:function(e,t,n){"use strict";var o=n(3),r=n(6),c=n(11),l=n(111),meta=n(107),d=n(110),h=n(109),m=n(9),v=n(10),f=n(80),y=n(44),_=n(114);e.exports=function(e,t,n,x,C,S){var N=o[e],w=N,A=C?"set":"add",H=w&&w.prototype,k={},P=function(e){var t=H[e];c(H,e,"delete"==e||"has"==e?function(a){return!(S&&!m(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return S&&!m(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof w&&(S||H.forEach&&!v((function(){(new w).entries().next()})))){var O=new w,M=O[A](S?{}:-0,1)!=O,j=v((function(){O.has(1)})),E=f((function(e){new w(e)})),T=!S&&v((function(){for(var e=new w,t=5;t--;)e[A](t,t);return!e.has(-0)}));E||((w=t((function(t,n){h(t,w,e);var o=_(new N,t,w);return null!=n&&d(n,C,o[A],o),o}))).prototype=H,H.constructor=w),(j||T)&&(P("delete"),P("has"),C&&P("get")),(T||M)&&P(A),S&&H.clear&&delete H.clear}else w=x.getConstructor(t,e,C,A),l(w.prototype,n),meta.NEED=!0;return y(w,e),k[e]=w,r(r.G+r.W+r.F*(w!=N),k),S||x.setStrong(w,e,C),w}},165:function(e,t,n){"use strict";var o=n(153);n.n(o).a},166:function(e,t,n){(t=n(59)(!1)).push([e.i,".handpan-shape[data-v-01fc439e]{position:relative;width:200px;height:200px;border-radius:200px;background:#ccc}.handpan-shape.is-bottom[data-v-01fc439e]{margin-left:25px;width:150px;height:150px;border-radius:150px;background:#666}.ding[data-v-01fc439e],.gu[data-v-01fc439e]{position:absolute;left:50%;top:50%}.ding[data-v-01fc439e],.gu[data-v-01fc439e],.note span[data-v-01fc439e]{border:1px solid #333;background:#ddd;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:999px;margin-left:-20px;margin-top:-20px;pointer-events:all;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gu[data-v-01fc439e]{background:#333}.note[data-v-01fc439e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;top:90px;padding-left:175px}.is-bottom .note[data-v-01fc439e]{top:65px;padding-left:125px}sub[data-v-01fc439e]{margin-bottom:-10px;font-size:11px}.handpan-shape .highlight[data-v-01fc439e]{background:rgba(0,255,0,.50196)!important}.handpan-shape .isroot[data-v-01fc439e]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-01fc439e]{border-color:#f0f!important}.bad .highlight[data-v-01fc439e]{background:rgba(255,0,0,.50196)!important}.note[data-v-01fc439e]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-01fc439e]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-01fc439e]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes))*-1))}.note[data-v-01fc439e]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes))*-1))}.note[data-v-01fc439e]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*2)*-1))}.note[data-v-01fc439e]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*2)*-1))}.note[data-v-01fc439e]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*3)*-1))}.note[data-v-01fc439e]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*3)*-1))}.note[data-v-01fc439e]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*4)*-1))}.note[data-v-01fc439e]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*4)*-1))}.note[data-v-01fc439e]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*5)*-1))}.note[data-v-01fc439e]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*5)*-1))}.note[data-v-01fc439e]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*6)*-1))}.note[data-v-01fc439e]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*6)*-1))}.note[data-v-01fc439e]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*7)*-1))}.note[data-v-01fc439e]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-01fc439e]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*7)*-1))}",""]),e.exports=t},167:function(e,t,n){"use strict";var o=n(154);n.n(o).a},168:function(e,t,n){(t=n(59)(!1)).push([e.i,"#app[data-v-c33915e2]{position:relative}.chord-type[data-v-c33915e2],.panscales[data-v-c33915e2],.scales[data-v-c33915e2]{display:flex;flex-wrap:wrap;margin-top:4px}.chord-type-name[data-v-c33915e2]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-c33915e2],.panscale[data-v-c33915e2],.scale[data-v-c33915e2]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.panscale[data-v-c33915e2],.scale[data-v-c33915e2]{margin-top:4px}.chord.highlight[data-v-c33915e2],.panscale.highlight[data-v-c33915e2],.scale.highlight[data-v-c33915e2]{background:rgba(0,255,204,.50196)!important}.tabs[data-v-c33915e2]{display:flex;align-items:center}.tab[data-v-c33915e2]{position:relative;width:150px;padding:8px 0;font-weight:700;text-align:center;cursor:pointer;border-bottom:1px solid #666;margin-bottom:-1px}.tab.selected[data-v-c33915e2]{background:#fff;border:1px solid #666;border-bottom:none}.tab[data-v-c33915e2]:not(.selected):hover{color:#0cc}.tab-content[data-v-c33915e2]{background:#fff;border:1px solid #666;min-height:130px;padding:8px}.zone[data-v-c33915e2]{margin-top:16px}.handpans[data-v-c33915e2]{display:flex;flex-wrap:wrap}.delete[data-v-c33915e2]{position:absolute;right:2px;top:2px;cursor:pointer;padding:6px;margin-left:16px}.delete[data-v-c33915e2]:hover{color:red}.config[data-v-c33915e2]{position:absolute;right:0;top:0;display:none}.toggle[data-v-c33915e2]{font-size:32px}",""]),e.exports=t},169:function(e,t,n){"use strict";n.r(t);n(159),n(156),n(42),n(27),n(13),n(41),n(152);var o=n(73);var r=n(101);function c(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(76),n(106);var l=n(1),d=["C","C♯","D♭","D","D♯","E♭","E","F","F♯","G♭","G","G♯","A♭","A","A♯","B♭","B"],h=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],m=["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"],v=[{val:"1/ 5 7m 1 2 3m 4 5",name:"Amara 7+1"},{val:"1/ 5 7m 1 2 3m 4 5 7m",name:"Amara 8+1"},{val:"1/ 3 5 7 1 3 T 5 7",name:"Aegean 8+1"},{val:"1/ 4 5 6m 7m 1 2m 3m 4",name:"Aeolian 8+1"},{val:"1/ 3m 4 7m 1 3m 4 5 7m",name:"Chao Guo 8+1"},{val:"1/ 3m 5 6m 7m 1 2 3m",name:"Equinox 7+1"},{val:"1/ 3m 5 6m 7m 1 2 3m 5",name:"Equinox 8+1"},{val:"1/ 4 5 6m 7m 1 2m 3 4 5",name:"Harmonic minor 8+1"},{val:"1/ 5 6m 7 1 2 3m 4 5",name:"Hijaz 8+1"},{val:"1/ 4 T 6 7m 1 2m 3m 4",name:"Hijaz (Mercury) 8+1"},{val:"1/ 4 T 6 7m 1 2m 3m 3",name:"Hijaz Kar (Mercury) 8+1"},{val:"1/ 5 6m 1 2 3m 4 5",name:"Insen 7+1"},{val:"1/ 5 6m 1 2 3m 4 5 6m",name:"Insen 8+1"},{val:"1/ 5 6m 7m 1 2 3m 5 7m",name:"Integral (Mercury) 8+1"},{val:"1/ 5 6m 7m 1 2 3m 5 6m",name:"Integral (Sam) 8+1"},{val:"1/ 4 5 6 7m 1 2 3m 4",name:"Jibuk 8+1"},{val:"1/ 5 6 1 2 3 4 5 1",name:"Anahata"},{val:"1/ 4 5 6m 1 2 3m 4",name:"Minor 7+1"},{val:"1/ 4 5 6m 1 2 3m 4 5",name:"Minor 8+1"},{val:"1/ 5 6m 7m 1 2 3m 4",name:"Kurd 7+1"},{val:"1/ 5 6m 7m 1 2 3m 4 5",name:"Kurd 8+1"},{val:"1/ 3m 5 6 7m 1 2 3m",name:"La Sirena 7+1"},{val:"1/ 3m 5 6 7m 1 2 3m 5",name:"La Sirena 8+1"},{val:"1/ 3m 5 7m 1 2 3m 5",name:"Magic Voyage 7+1"},{val:"1/ 3m 5 7m 1 2 3m 5 7m",name:"Magic Voyage 8+1"},{val:"1/ 4 5 6 7 1 2 3",name:"Major 7+1"},{val:"1/ 4 5 6 7 1 2 3 5",name:"Major 8+1"},{val:"1/ 3 4 5 7 1 3 4 5",name:"Melog Selisir 8+1"},{val:"1/ 3m 5 6m 1 2 3m 5",name:"Mystic (Mercury) 7+1"},{val:"1/ 5 6m 1 2 3m 4 5 7m",name:"Mystic (Sam) 8+1"},{val:"1/ 5 6 7m 1 2 3 5",name:"Mixolydian 7+1"},{val:"1/ 5 6 7m 1 2 3 5 6",name:"Mixolydian 8+1"},{val:"1/ 3 4 5 6 1 3 4 5",name:"Oxalis 8+1"},{val:"1/ 4 5 6m 1 3m 4 5 6m",name:"Pygmy 8+1"},{val:"1/ 2 3m 5 7m 1 2 3m 5",name:"Low Pygmy 8+1"},{val:"1/ 5 7m 1 2m 3 4 5 7m",name:"Raga Desh 8+1"},{val:"1/ 4 5 6m 7 1 2 3m 5",name:"Romanian Hijaz 8+1"},{val:"1/ 3m 5 6m 7 1 2 3m 5",name:"Romanian Mineur harmonique 8+1"},{val:"1/ 4 5 6m 1 2m 4 5 6m",name:"Akebono 8+1"},{val:"1/ 5 7 1 2 3 4 5 1",name:"Ysha Savita 8+1"},{val:"1/ 5 6m 1 3 4 5 6m 1",name:"Onoleo 8+1"},{val:"1/ 5 7 1 2 3 T 5 7",name:"Lydian"}],f=[{name:"Bebop major",ecarts:["1","2","3","4","5","6m","6","7"],special:"6m"},{name:"Bebop dorian",ecarts:["1","2","3m","3","4","5","6","7m"],special:"3"},{name:"Bebop dominant",ecarts:["1","2","3","4","5","6","7m","7"],special:"7"},{name:"Bebop phrygian dominant",ecarts:["1","2m","3","4","5","6m","7m","7"]},{name:"Bebop locrian",ecarts:["1","2m","3m","4","T","5","6m","7m"],special:"5"},{name:"Major/Ionian",ecarts:["1","2","3","4","5","6","7"]},{name:"Dorian",ecarts:["1","2","3m","4","5","6","7m"],special:"6"},{name:"Phrygian",ecarts:["1","2m","3m","4","5","6m","7m"],special:"2m"},{name:"Lydian",ecarts:["1","2","3","T","5","6","7"],special:"T"},{name:"Mixolydian",ecarts:["1","2","3","4","5","6","7m"],special:"7m"},{name:"Minor/Aeolian",ecarts:["1","2","3m","4","5","6m","7m"]},{name:"Locrian",ecarts:["1","2m","3m","4","T","6m","7m"]},{name:"Harmonic minor",ecarts:["1","2","3m","4","5","6m","7"],special:"7"},{name:"Phrygian dominant/Hijaz",ecarts:["1","2m","3","4","5","6m","7m"],special:"3"},{name:"Melodic minor (asc)",ecarts:["1","2","3m","4","5","6","7"],special:"3m"},{name:"Hexatonic major",ecarts:["1","2","3","4","5","6"]},{name:"Hexatonic major Blues",ecarts:["1","2","3m","3","5","6"],special:"3m"},{name:"Hexatonic minor",ecarts:["1","2","3m","4","5","7m"]},{name:"Hexatonic minor Blues T",ecarts:["1","3m","4","T","5","7m"],special:"T"},{name:"Hexatonic minor Blues 3",ecarts:["1","3m","3","4","5","7m"],special:"3"},{name:"Pentatonic major",ecarts:["1","2","3","5","6"]},{name:"Pentatonic minor",ecarts:["1","3m","4","5","7m"]},{name:"Hirajoshi",ecarts:["1","2","3m","5","6m"]},{name:"Iwato",ecarts:["1","2m","4","T","7m"]},{name:"Insen",ecarts:["1","2m","4","5","7m"]},{name:"Yo",ecarts:["1","2","4","5","6"]},{name:"Kumoï",ecarts:["1","2","3m","5","6"]},{name:"Pygmy",ecarts:["1","2","3m","5","7m"]}],y=["1","2m","2","3m","3","4","T","5","6m","6","7m","7"],_=[{type:"maj",chords:[{val:"1 3 5",name:"Major",abbr:""}]},{type:"min",chords:[{val:"1 3m 5",name:"Minor",abbr:"m"}]},{type:"7th",chords:[{val:"1 3 5 7m",name:"Dominant seventh",abbr:"⁷"},{val:"1 3 5 7",name:"Major seventh",abbr:"M⁷"},{val:"1 3m 5 7m",name:"Minor seventh",abbr:"m⁷"}]},{type:"sus",chords:[{val:"1 4 5",name:"Suspended 4",abbr:"<sup>sus4</sup>"}]},{type:"bad",chords:[{val:"1 2m",name:"second minor",abbr:"m²"},{val:"1 T",name:"tritone",abbr:"<sub>tt</sub>"},{val:"1 3m T",name:"Diminished",abbr:"<sub>dim</sub>"}]}];function x(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}n(83),n(29),n(61);var C=n(54);n(28),n(113);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function N(e){var t=h.indexOf(e),n=m.indexOf(e);return-1!==t?m[t]:h[n]}function w(e,t){var n=-1!==h.indexOf(e)?h.indexOf(e):m.indexOf(e);if(-1===n)throw new Error("Unknown note: "+e);var o=y.indexOf(t);if(-1===o)throw new Error("Unknown interval: "+t);return m[(n+o+12)%12]}function A(e,t){var n=-1!==h.indexOf(e)?h.indexOf(e):m.indexOf(e);if(-1===n)throw new Error("Unknown note: "+e);var o=y.indexOf(t);if(-1===o)throw new Error("Unknown interval: "+t);return h[(n+o+12)%12]}var H,k=function(e){return _.map((function(t){var n=[];return e.forEach((function(o){t.chords.forEach((function(t){var r=t.val.split(" ");r.every((function(t){return e.indexOf(A(o,t))>=0||e.indexOf(w(o,t))>=0}))&&n.push({root:o,notes:r,label:o+t.abbr})}))})),{type:t.type,chords:n}}))},P=function(e){return e.flatMap((function(e){return v.map((function(t){var n=new M;return n.loadFromRelNotation(e.ding,t.val),{ding:e.ding,name:t.name,notesAll:n.notesAll}}))})).filter((function(t){return t.notesAll.every((function(t){return e.flatMap((function(e){return e.notesAll})).some((function(e){var n=m.indexOf(e.name),o=-1!==n?h[n]:e.name;return t.octave===e.octave&&t.name===o}))}))}))},O=function(e){var t=e.flatMap((function(e){return[e.ding].concat(c(e.notesAll.map((function(e){return e.name}))))})),n=c(new Set(t));return n.flatMap((function(o){return f.map((function(e){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e,{absSharp:e.ecarts.map((function(e){return A(o,e)}))})})).filter((function(e){return e.absSharp.every((function(e){var t=N(e);return-1!==n.indexOf(e)||-1!==n.indexOf(t)}))})).filter((function(e){var n=N(o);return t.filter((function(e){return e===o||e===n})).length>=2})).map((function(t){return{id:o+" "+t.name,tonic:o,noteNames:t.absSharp,name:t.name,totalNotes:e.flatMap((function(e){return[e.ding].concat(c(e.notesAll.map((function(e){return e.name}))))})).filter((function(e){var n=N(e);return-1!==t.absSharp.indexOf(e)||-1!==t.absSharp.indexOf(n)})).length,special:t.special?A(o,t.special):null}}))}))},M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.absNotationUser="",this.absNotationClean="",this.relNotation="",this.ding="",this.notesTop=[],this.notesBottom=[],this.notesAll=[],this.chords=[],this.panScales=[],this.scales=[],this.id=(new Date).getTime()}var t,n,o;return t=e,(n=[{key:"loadFromRelNotation",value:function(e,t){var n=this;this.ding=e,this.relNotation=t;var o=t.split("/");if(!(o.length<2)){var r=o[1].trim().split(" ").filter(Boolean).map((function(e){var t="("===e[0],o=e.replace(/\(|\)/g,""),r=-1!==h.indexOf(n.ding)?A(n.ding,o):w(n.ding,o);return t?"("+r+")":r}));this.absNotationClean=this.ding+"/ "+r.join(" "),this.absNotationUser=this.ding.replace(/♯/g,"#").replace(/♭/g,"b")+"/ "+r.join(" ").replace(/♯/g,"#").replace(/♭/g,"b"),this.genNotes(this.ding,r)}}},{key:"loadFromAbsNotation",value:function(e){this.absNotationUser=e;var t=this.absNotationUser.replace(/#/g,"♯").replace(/b/g,"♭").replace(/ {1,}/g," "),n=t.split("/");if(!(n.length<2)){this.ding=n[0].trim(),this.absNotationClean=t,this.relNotation=function(e,t){var n=h.indexOf(e);-1===n&&(n=m.indexOf(e));for(var o=[],i=0;i<12;i++)o.push(y[(12-n+i)%12]);for(var r=t+" ",c=0;c<12;c++)r=(r=r.replace(new RegExp(h[c]+"([^♯♭])","g"),o[c]+"$1")).replace(new RegExp(m[c]+"([^♯♭])","g"),o[c]+"$1");return r.trim()}(this.ding,t);var o=n[1].trim().split(" ").filter(Boolean);this.genNotes(this.ding,o)}}},{key:"genNotes",value:function(e,t){var n=3,o=d.indexOf(e);this.notesAll=t.map((function(e,t){var r=e.replace(/\(/g,"").replace(/\)/g,""),c=d.indexOf(r);if(-1===c)throw new Error("Unknown note: "+r);return o||(o=c),c<o&&n++,o=c,{key:t,octave:n,name:r,isBottom:"("===e[0]}})),this.notesTop=this.notesAll.filter((function(e){return!e.isBottom})),this.notesBottom=this.notesAll.filter((function(e){return e.isBottom}))}},{key:"getUniqueNotes",value:function(){return c(new Set(Array.from(this.absNotationClean.matchAll(/[A-G][♯♭]?/g)).map((function(e){return e[0]}))))}},{key:"genChords",value:function(){this.chords=k(this.getUniqueNotes())}},{key:"genPanScales",value:function(){this.panScales=P([this])}},{key:"genScales",value:function(){this.scales=O([this])}}])&&x(t.prototype,n),o&&x(t,o),e}(),j=!1,E={};H=new AudioContext;for(var T=function(){var e=B[D],t=new XMLHttpRequest;t.open("GET",e.replace("♯","s")+".wav"),t.responseType="arraybuffer",t.onload=function(){var n=t.response;H.decodeAudioData(n,(function(data){return E[e]=data}))},t.send()},D=0,B=["C3","C♯3","D3","E3","F3","G3","G♯3","A3","B3","C4","C♯4","D4","D♯4","E4","F4","F♯4","G4","G♯4","A4","B4","C5"];D<B.length;D++)T();var F=l.a.extend({props:{handpan:M,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},computed:{nbNotesTop:function(){return{"--nbnotes":this.handpan.notesTop.length}},nbNotesBottom:function(){return{"--nbnotes":this.handpan.notesBottom.length}}},methods:{playNoteTouch:function(e,t){j=!0,this.playNote(e,t)},playNoteMouse:function(e,t){j||this.playNote(e,t)},playNote:function(e,t){var n=E[e+t];if(n){var source=H.createBufferSource();source.buffer=n,source.connect(H.destination),source.start(0)}},isSpecial:function(e){var t,n,o=N(e);return e===(null===(t=this.selectedScale)||void 0===t?void 0:t.special)||o===(null===(n=this.selectedScale)||void 0===n?void 0:n.special)},isRoot:function(e){var t,n,o,r,c,l,d=N(e),h=e===(null===(t=this.selectedChord)||void 0===t?void 0:t.root)||d===(null===(n=this.selectedChord)||void 0===n?void 0:n.root),m=e===(null===(o=this.selectedScale)||void 0===o?void 0:o.tonic)||d===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic),v=e===(null===(c=this.selectedPanScale)||void 0===c?void 0:c.ding)||d===(null===(l=this.selectedPanScale)||void 0===l?void 0:l.ding);return h||m||v},isHighlighted:function(e,t){var n=N(e),o=!1,r=!1,c=!1;return this.selectedChord&&(c=-1!==this.selectedChord.noteNames.indexOf(e)||-1!==this.selectedChord.noteNames.indexOf(n)),this.selectedScale&&this.selectedScale.noteNames&&(o=-1!==this.selectedScale.noteNames.indexOf(e)||-1!==this.selectedScale.noteNames.indexOf(n)),this.selectedPanScale&&this.selectedPanScale.notesAll&&(r=this.selectedPanScale.notesAll.some((function(o){return o.octave===t&&(o.name===e||o.name===n)}))),c||o||r}}}),R=(n(165),n(24)),z=Object(R.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"handpan-diagram",class:{bad:"bad"===e.selectedChord.type}},[n("div",{staticClass:"handpan-shape is-top"},[n("div",{staticClass:"ding",class:{highlight:e.isHighlighted(e.handpan.ding,3),isroot:e.isRoot(e.handpan.ding)},on:{mousedown:function(t){return e.playNoteMouse(e.handpan.ding,3)},touchstart:function(t){return e.playNoteTouch(e.handpan.ding,3)}}},[e._v("\n            "+e._s(e.handpan.ding)),n("sub",[e._v("3")])]),e._v(" "),n("div",{staticClass:"notes",style:e.nbNotesTop},e._l(e.handpan.notesTop,(function(t){return n("div",{key:t.key,staticClass:"note"},[n("span",{class:{highlight:e.isHighlighted(t.name,t.octave),special:e.isSpecial(t.name),isroot:e.isRoot(t.name)},on:{mousedown:function(n){return e.playNoteMouse(t.name,t.octave)},touchstart:function(n){return e.playNoteTouch(t.name,t.octave)}}},[e._v(e._s(t.name)),n("sub",[e._v(e._s(t.octave))])])])})),0)]),e._v(" "),e.handpan.notesBottom.length?n("div",{staticClass:"handpan-shape is-bottom"},[n("div",{staticClass:"gu"}),e._v(" "),n("div",{staticClass:"notes",style:e.nbNotesBottom},e._l(e.handpan.notesBottom,(function(t){return n("div",{key:t.key,staticClass:"note"},[n("span",{class:{highlight:e.isHighlighted(t.name,t.octave),special:e.isSpecial(t.name),isroot:e.isRoot(t.name,t.octave)},on:{mousedown:function(n){return e.playNoteMouse(t.name,t.octave)},touchstart:function(n){return e.playNoteTouch(t.name,t.octave)}}},[e._v(e._s(t.name)),n("sub",[e._v(e._s(t.octave))])])])})),0)]):e._e()])}),[],!1,null,"01fc439e",null).exports,G=l.a.extend({components:{HandpanDiagram:z},data:function(){return{displayMode:"panScales",displayedHandpanIndex:0,handpans:[],inputAbsNotation:"",inputDing:"",inputPanscale:{},inputRelNotation:"",notes:[],abs:"",panScales:v,scales:f,notesAll:d,chords:{},selectedPanScale:{},selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[],displayedScales:[],displayedChords:[],displayedPanScales:[],ignoreNextHashChange:!1}},created:function(){var e=this;setTimeout((function(){if(e.$nuxt.$route.hash)e.loadHandpansFromHash();else{var t=new M;t.loadFromAbsNotation("D/ A C D E F G A C"),e.handpans.push(t),e.genScalesAndChords(t),e.panChanged()}}),1)},computed:{displayedScalesSorted:function(){return this.displayedScales.sort((function(a,b){return b.totalNotes-a.totalNotes}))},displayedHandpan:function(){return this.handpans[this.displayedHandpanIndex]}},watch:{$route:function(){this.ignoreNextHashChange?this.ignoreNextHashChange=!1:(this.handpans=[],this.loadHandpansFromHash())}},methods:{loadHandpansFromHash:function(){var e,t=this;this.$nuxt.$route.hash.substr(1).split("_").forEach((function(n){(e=new M).loadFromAbsNotation(n.replace(/-/g," ")),t.handpans.push(e),t.panChanged()}))},removeHandpan:function(e,t){e.stopPropagation(),this.handpans.splice(t,1),this.displayedHandpanIndex>=this.handpans.length&&this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.displayHandpan(),this.updateHash()},addHandpan:function(){var e=new M;e.loadFromAbsNotation("C/ C"),this.handpans.push(e),this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.updateHash()},panScaleChanged:function(){this.inputRelNotation=this.inputPanscale.val,this.relChanged()},relChanged:function(){try{this.displayedHandpan.loadFromRelNotation(this.inputDing,this.inputRelNotation),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},absChanged:function(){try{this.displayedHandpan.loadFromAbsNotation(this.inputAbsNotation),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},updateHash:function(){var e=this.$nuxt.$route.hash,t="#"+this.handpans.map((function(e){return e.absNotationUser.replace(/ /g,"-")})).join("_");t!==e&&(this.ignoreNextHashChange=!0,this.$nuxt.$router.replace(t))},panChanged:function(){this.genScalesAndChords(this.displayedHandpan),this.displayHandpan(),this.genScalesAndChordsAllPans()},genScalesAndChordsAllPans:function(){var e=c(new Set(Array.from(this.handpans.flatMap((function(e){return e.getUniqueNotes()})))));this.displayedScales=O(this.handpans),this.displayedPanScales=P(this.handpans),this.displayedChords=k(e)},genScalesAndChords:function(e){e.genChords(),e.genPanScales(),e.genScales()},selectHandpan:function(e){this.displayedHandpanIndex=e,this.displayHandpan()},displayHandpan:function(){var e=this,t=v.find((function(t){return e.displayedHandpan.relNotation.trim()===t.val.trim()}));this.inputPanscale=t||null,this.inputDing=this.displayedHandpan.ding,this.inputRelNotation=this.displayedHandpan.relNotation,this.inputAbsNotation=this.displayedHandpan.absNotationUser},selectPanScale:function(e){this.selectedPanScale=e},unselectPanScale:function(){this.selectedPanScale={}},selectScale:function(e){this.selectedScale=e},unselectScale:function(){this.selectedScale={}},selectChord:function(e,t){this.selectedChord={label:t.label,root:t.root,type:e.type,noteNames:[].concat(c(t.notes.map((function(e){return A(t.root,e)}))),c(t.notes.map((function(e){return w(t.root,e)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),I=(n(167),Object(R.a)(G,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),o("img",{attrs:{src:n(158)}}),e._v(" "),o("div",{staticClass:"tabs"},[e._l(e.handpans,(function(t,n){return o("div",{key:t.id,staticClass:"tab",class:{selected:e.displayedHandpanIndex===n},on:{click:function(t){return e.selectHandpan(n)}}},[e._v("\n            Pan n°"+e._s(n+1)+"\n            "),e.handpans.length>1?o("span",{staticClass:"delete",on:{click:function(t){return e.removeHandpan(t,n)}}},[e._v("×")]):e._e()])})),e._v(" "),o("div",{staticClass:"tab",on:{click:function(t){return e.addHandpan()}}},[e._v("+")])],2),e._v(" "),o("div",{staticClass:"tab-content"},[o("div",[o("h3",[e._v("Absolute input")]),e._v("\n            Notes\n            "),o("br"),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{size:"40"},domProps:{value:e.inputAbsNotation},on:{keyup:e.absChanged,input:function(t){t.target.composing||(e.inputAbsNotation=t.target.value)}}})]),e._v(" "),o("div",[o("h3",[e._v("Relative input")]),e._v("\n            Ding\n            "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDing,expression:"inputDing"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDing=t.target.multiple?n:n[0]},e.relChanged]}},e._l(e.notesAll,(function(t){return o("option",{key:t},[e._v(e._s(t))])})),0),e._v(" "),o("br"),e._v("Relative scale\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputRelNotation,expression:"inputRelNotation"}],attrs:{size:"40"},domProps:{value:e.inputRelNotation},on:{keyup:e.relChanged,input:function(t){t.target.composing||(e.inputRelNotation=t.target.value)}}}),e._v(" "),o("br"),e._v("Handpan scale\n            "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.inputPanscale,expression:"inputPanscale"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputPanscale=t.target.multiple?n:n[0]},e.panScaleChanged]}},e._l(e.panScales,(function(t){return o("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t.name))])})),0)])]),e._v(" "),e.displayedHandpan?o("div",[o("div",{staticClass:"zone"},[o("div",{staticClass:"tabs"},[o("div",{staticClass:"tab",class:{selected:"panScales"===e.displayMode},on:{click:function(t){e.displayMode="panScales"}}},[e._v("\n                    Handpan scales\n                ")]),e._v(" "),o("div",{staticClass:"tab",class:{selected:"scales"===e.displayMode},on:{click:function(t){e.displayMode="scales"}}},[e._v("Scales")]),e._v(" "),o("div",{staticClass:"tab",class:{selected:"chords"===e.displayMode},on:{click:function(t){e.displayMode="chords"}}},[e._v("Chords")])]),e._v(" "),"panScales"===e.displayMode?o("div",{staticClass:"tab-content"},[o("div",{staticClass:"panscales"},[e._l(e.displayedPanScales,(function(t){return o("div",{key:t.ding+t.name,staticClass:"panscale",class:{highlight:t.ding===e.selectedPanScale.ding&&t.name===e.selectedPanScale.name},on:{click:function(n){return e.selectPanScale(t)},mouseover:function(n){return e.selectPanScale(t)},mouseout:function(t){return e.unselectPanScale()}}},[e.handpans.length>1?o("span",[e._v(e._s(t.ding))]):e._e(),e._v(" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedPanScales.length?e._e():o("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"scales"===e.displayMode?o("div",{staticClass:"tab-content"},[o("div",{staticClass:"scales"},[e._l(e.displayedScalesSorted,(function(t){return o("div",{key:t.id,staticClass:"scale",class:{highlight:t.id===e.selectedScale.id},on:{click:function(n){return e.selectScale(t)},mouseover:function(n){return e.selectScale(t)},mouseout:function(t){return e.unselectScale()}}},[e._v("\n                        "+e._s(t.tonic)+" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedScales.length?e._e():o("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"chords"===e.displayMode?o("div",{staticClass:"tab-content"},e._l(e.displayedChords,(function(t){return o("div",{key:t.type,staticClass:"chord-type"},[o("div",{staticClass:"chord-type-name"},[e._v(e._s(t.type))]),e._v(" "),e._l(t.chords,(function(n){return o("div",{key:n.label,staticClass:"chord",class:{highlight:n.label===e.selectedChord.label},domProps:{innerHTML:e._s(n.label)},on:{click:function(o){return e.selectChord(t,n)},mouseover:function(o){return e.selectChord(t,n)},mouseout:function(t){return e.unselectChord()}}})}))],2)})),0):e._e()]),e._v(" "),o("div",{staticClass:"zone handpans"},e._l(e.handpans,(function(t){return o("HandpanDiagram",{key:t.id,attrs:{handpan:t,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})})),1)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"config"},[t("div",{staticClass:"toggle"},[this._v("☰")])])}],!1,null,"c33915e2",null));t.default=I.exports}}]);