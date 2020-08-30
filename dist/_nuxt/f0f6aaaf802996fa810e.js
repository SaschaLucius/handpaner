(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));e(34),e(20),e(12),e(33),e(159);var o=e(167);e(63),e(80);function r(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var data=e(79),c=e(160),l=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.absNotationUser="",this.absNotationClean="",this.relNotation="",this.ding="",this.dingOctave=3,this.dingAnimated=!1,this.notesTop=[],this.notesBottom=[],this.notesAll=[],this.chords=[],this.panScales=[],this.scales=[],this.id=(new Date).getTime()}var n,e,l;return n=t,(e=[{key:"loadFromRelNotation",value:function(t,n,e){var o=this;this.ding=t,this.dingOctave=e,this.relNotation=n;var r=n.split("/");if(!(r.length<2)){var l=r[1].trim().split(" ").filter(Boolean).map((function(t){var n="("===t[0],e=t.replace(/\(|\)/g,""),r=-1!==data.e.indexOf(o.ding)?Object(c.h)(o.ding,e):Object(c.g)(o.ding,e);return n?"("+r+")":r})),d=3===e?this.ding:this.ding+e;this.absNotationClean=d+"/ "+l.join(" "),this.absNotationUser=d.replace(/♯/g,"#").replace(/♭/g,"b")+"/ "+l.join(" ").replace(/♯/g,"#").replace(/♭/g,"b"),this.genNotes(this.ding,l,e)}}},{key:"loadFromAbsNotation",value:function(t){this.absNotationUser=t;var n=this.absNotationUser.replace(/#/g,"♯").replace(/b/g,"♭").replace(/ {1,}/g," "),e=n.split("/");if(!(e.length<2)){var o=Object(c.i)(e[0].trim());this.ding=o.noteName,this.dingOctave=o.octave?o.octave:3,this.absNotationClean=n,this.relNotation=Object(c.a)(this.ding,n);var r=e[1].trim().split(" ").filter(Boolean);this.genNotes(this.ding,r,this.dingOctave)}}},{key:"genNotes",value:function(t,n,e){var o=e,r=data.c.indexOf(t);this.notesAll=n.map((function(t,n){var e=t.replace(/\(/g,"").replace(/\)/g,""),l=Object(c.i)(e),d=l.noteName,f=l.octave,v=data.c.indexOf(d);if(-1===v)throw new Error("Unknown note: "+d);return r||(r=v),f?o=f:v<r&&o++,r=v,{key:n,octave:o,name:d,isBottom:"("===t[0],animated:!1}})),this.notesTop=this.notesAll.filter((function(t){return!t.isBottom})),this.notesBottom=this.notesAll.filter((function(t){return t.isBottom}))}},{key:"getUniqueNotes",value:function(){return Object(o.a)(new Set(Array.from(this.absNotationClean.matchAll(/[A-G][♯♭]?/g)).map((function(t){return t[0]}))))}},{key:"genChords",value:function(){this.chords=Object(c.d)(this.getUniqueNotes())}},{key:"genPanScales",value:function(){this.panScales=Object(c.e)([this])}},{key:"genScales",value:function(){this.scales=Object(c.f)([this])}}])&&r(n.prototype,e),l&&r(n,l),t}()},159:function(t,n,e){"use strict";var strong=e(174),o=e(168);t.exports=e(175)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},160:function(t,n,e){"use strict";e.d(n,"i",(function(){return f})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return h})),e.d(n,"g",(function(){return m})),e.d(n,"h",(function(){return y})),e.d(n,"a",(function(){return _})),e.d(n,"d",(function(){return O})),e.d(n,"e",(function(){return w})),e.d(n,"f",(function(){return k}));e(87),e(23),e(64);var o=e(57),r=(e(20),e(12),e(33),e(159),e(167)),c=(e(22),e(169),e(80),e(116),e(63),e(79)),l=e(158);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){var n=/([A-G][♯♭]?)([0-9]?)/.exec(t);if(null===n)throw new Error("Cannot read note: "+n);var e=n[1],o=n[2];return o?{noteName:e,octave:parseInt(o,10)}:{noteName:e}}function v(t){var n=c.e.indexOf(t),e=c.d.indexOf(t);return-1!==n?c.d[n]:c.e[e]}function h(t){var n=c.d.indexOf(t);return-1!==n?c.e[n]:t}function m(t,n){var e=-1!==c.e.indexOf(t)?c.e.indexOf(t):c.d.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var o=c.b.indexOf(n);if(-1===o)throw new Error("Unknown interval: "+n);return c.d[(e+o+12)%12]}function y(t,n){var e=-1!==c.e.indexOf(t)?c.e.indexOf(t):c.d.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var o=c.b.indexOf(n);if(-1===o)throw new Error("Unknown interval: "+n);return c.e[(e+o+12)%12]}function _(t,n){var e=c.e.indexOf(t);-1===e&&(e=c.d.indexOf(t));for(var o=[],i=0;i<12;i++)o.push(c.b[(12-e+i)%12]);for(var r=n+" ",l=0;l<12;l++)r=(r=r.replace(new RegExp(c.e[l]+"[0-9]?([^♯♭])","g"),o[l]+"$1")).replace(new RegExp(c.d[l]+"[0-9]?([^♯♭])","g"),o[l]+"$1");return r.trim()}var O=function(t){return c.a.map((function(n){var e=[];return t.forEach((function(o){n.chords.forEach((function(n){var r=n.val.split(" ");r.every((function(n){return t.indexOf(y(o,n))>=0||t.indexOf(m(o,n))>=0}))&&e.push({root:o,notes:r,label:o+n.abbr})}))})),{type:n.type,chords:e}}))},w=function(t){return t.flatMap((function(t){return c.f.map((function(n){var e=new l.a;return e.loadFromRelNotation(t.ding,n.val,t.dingOctave),{ding:t.ding,name:n.name,notesAll:e.notesAll}}))})).filter((function(n){return n.notesAll.every((function(n){return t.flatMap((function(t){return t.notesAll})).some((function(t){var e=c.d.indexOf(t.name),o=-1!==e?c.e[e]:t.name;return n.octave===t.octave&&n.name===o}))}))}))},k=function(t){var n=t.flatMap((function(t){return[t.ding].concat(Object(r.a)(t.notesAll.map((function(t){return t.name}))))})),e=Object(r.a)(new Set(n));return e.flatMap((function(l){return c.h.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},t,{absSharp:t.ecarts.map((function(t){return y(l,t)}))})})).filter((function(t){return t.absSharp.every((function(t){var n=v(t);return-1!==e.indexOf(t)||-1!==e.indexOf(n)}))})).filter((function(t){var e=v(l);return n.filter((function(t){return t===l||t===e})).length>=2})).map((function(n){return{id:l+" "+n.name,tonic:l,noteNames:n.absSharp,name:n.name,totalNotes:t.flatMap((function(t){return[t.ding].concat(Object(r.a)(t.notesAll.map((function(t){return t.name}))))})).filter((function(t){var e=v(t);return-1!==n.absSharp.indexOf(t)||-1!==n.absSharp.indexOf(e)})).length,special:n.special?y(l,n.special):null}}))}))}},161:function(t,n,e){var content=e(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("0bf0dfef",content,!0,{sourceMap:!1})},162:function(t,n,e){var content=e(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("106e88a2",content,!0,{sourceMap:!1})},163:function(t,n,e){var content=e(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("f7603a70",content,!0,{sourceMap:!1})},167:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(75);var r=e(105);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},168:function(t,n,e){var o=e(9);t.exports=function(t,n){if(!o(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},169:function(t,n,e){"use strict";var o=e(6),r=e(176),c=e(24),l=e(17),d=e(46),f=e(170);o(o.P,"Array",{flatMap:function(t){var n,e,o=c(this);return d(t),n=l(o.length),e=f(o,0),r(e,o,o,n,0,1,t,arguments[1]),e}}),e(81)("flatMap")},170:function(t,n,e){var o=e(177);t.exports=function(t,n){return new(o(t))(n)}},171:function(t,n,e){"use strict";e(20),e(35),e(23),e(33),e(34),e(25),e(26),e(12),e(22),e(63);var o=e(1),data=e(79),r=e(158),c=e(160);function l(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t))){var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,r=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return r=t.done,t},e:function(t){c=!0,o=t},f:function(){try{r||null==e.return||e.return()}finally{if(c)throw o}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var f,v,h,m=!1;function y(path,t){var n=new XMLHttpRequest;n.open("GET",path),n.responseType="arraybuffer",n.onload=function(){var e=n.response;f.decodeAudioData(e,t)},n.send()}f=new AudioContext;var _,O=l(data.g);try{var w=function(){var t,n=_.value,e=l(n.samplesDispo);try{var o=function(){var e=t.value;y("/"+n.folder+"/"+e.replace("♯","s")+".flac",(function(data){return n.buffer[e]=data}))};for(e.s();!(t=e.n()).done;)o()}catch(t){e.e(t)}finally{e.f()}};for(O.s();!(_=O.n()).done;)w()}catch(t){O.e(t)}finally{O.f()}y("/gu/D2.flac",(function(data){return h=data})),y("/clac/clac.flac",(function(data){return v=data}));var k=o.a.extend({props:{handpan:r.a,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},computed:{nbNotesTop:function(){return{"--nbnotes":this.handpan.notesTop.length}},nbNotesBottom:function(){return{"--nbnotes":this.handpan.notesBottom.length}}},methods:{playClacMouse:function(){m||this.playClac()},playClacTouch:function(){this.playClac()},playClac:function(){this.playSample(v)},playGuMouse:function(t){t.stopPropagation(),m||this.playGu()},playGuTouch:function(t){t.stopPropagation(),this.playGu()},playGu:function(){this.playSample(h)},playNoteTouch:function(t,n){t.stopPropagation(),m=!0,this.playNote(n)},playNoteMouse:function(t,n){t.stopPropagation(),m||this.playNote(n)},playNote:function(t){var n=this,e=t.name,o=t.octave,r=Object(c.c)(e),l=this.$store.getters["options/getChosenSamplesBankIndex"],d=data.g[l].buffer[r+o];d&&(this.playSample(d),void 0===t.animated?(this.handpan.dingAnimated=!1,setTimeout((function(){n.handpan.dingAnimated=!0}),0)):(t.animated=!1,setTimeout((function(){t.animated=!0}),0)))},playSample:function(t){var n=f.createGain();n.gain.value=this.$store.getters["options/getVolume"];var source=f.createBufferSource();source.buffer=t,n.connect(f.destination),source.connect(n),source.start(0)},isSpecial:function(t){var n,e,o=Object(c.b)(t);return t===(null===(n=this.selectedScale)||void 0===n?void 0:n.special)||o===(null===(e=this.selectedScale)||void 0===e?void 0:e.special)},isRoot:function(t){var n,e,o,r,l,d,f=Object(c.b)(t),v=t===(null===(n=this.selectedChord)||void 0===n?void 0:n.root)||f===(null===(e=this.selectedChord)||void 0===e?void 0:e.root),h=t===(null===(o=this.selectedScale)||void 0===o?void 0:o.tonic)||f===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic),m=t===(null===(l=this.selectedPanScale)||void 0===l?void 0:l.ding)||f===(null===(d=this.selectedPanScale)||void 0===d?void 0:d.ding);return v||h||m},isNoteInModel:function(t,n){var e=!1,o=Object(c.b)(t);return this.selectedPanScale&&this.selectedPanScale.notesAll&&(e=this.selectedPanScale.notesAll.some((function(n){return n.name===t||n.name===o}))),e},isHighlighted:function(t,n){var e=Object(c.b)(t),o=!1,r=!1,l=!1;return this.selectedChord&&(l=-1!==this.selectedChord.noteNames.indexOf(t)||-1!==this.selectedChord.noteNames.indexOf(e)),this.selectedScale&&this.selectedScale.noteNames&&(o=-1!==this.selectedScale.noteNames.indexOf(t)||-1!==this.selectedScale.noteNames.indexOf(e)),this.selectedPanScale&&this.selectedPanScale.notesAll&&(r=this.selectedPanScale.notesAll.some((function(o){return o.octave===n&&(o.name===t||o.name===e)}))),l||o||r}}}),x=(e(178),e(14)),component=Object(x.a)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"handpan-diagram",class:{bad:"bad"===t.selectedChord.type,hasBottom:t.handpan.notesBottom.length>0}},[e("div",{staticClass:"handpan-shape is-top",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"ding",class:{highlight:t.isHighlighted(t.handpan.ding,t.handpan.dingOctave),highlightplus:t.isRoot(t.handpan.ding)},on:{mousedown:function(n){return t.playNoteMouse(n,{name:t.handpan.ding,octave:t.handpan.dingOctave})},touchstart:function(n){return t.playNoteTouch(n,{name:t.handpan.ding,octave:t.handpan.dingOctave})}}},[e("div",{staticClass:"inside"},[t._v("\n                "+t._s(t.handpan.ding)),e("sub",[t._v(t._s(t.handpan.dingOctave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:t.handpan.dingAnimated},on:{animationend:function(n){t.handpan.dingAnimated=!1}}})]),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesTop},t._l(t.handpan.notesTop,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),highlightplus:t.isHighlighted(n.name,n.octave)&&t.isRoot(n.name),highlightless:t.isNoteInModel(n.name,n.octave)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("div",{staticClass:"inside"},[t._v("\n                        "+t._s(n.name)),e("sub",[t._v(t._s(n.octave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:n.animated},on:{animationend:function(t){n.animated=!1}}})])])})),0)]),t._v(" "),t.handpan.notesBottom.length?e("div",{staticClass:"handpan-shape is-bottom",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"gu",on:{mousedown:function(n){return t.playGuMouse(n)},touchstart:function(n){return t.playGuTouch(n)}}}),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesBottom},t._l(t.handpan.notesBottom,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),highlightplus:t.isHighlighted(n.name,n.octave)&&t.isRoot(n.name)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("div",{staticClass:"inside"},[t._v("\n                        "+t._s(n.name)),e("sub",[t._v(t._s(n.octave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:n.animated},on:{animationend:function(t){n.animated=!1}}})])])})),0)]):t._e()])}),[],!1,null,"4e925455",null);n.a=component.exports},172:function(t,n,e){"use strict";var o=e(1).a.extend({computed:{volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}}}),r=(e(180),e(14)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"select-volume"},[t._v("\n    Volume: \n    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.volume=n.target.multiple?e:e[0]}}},[e("option",{domProps:{value:1}},[t._v("100%")]),t._v(" "),e("option",{domProps:{value:.9}},[t._v("90%")]),t._v(" "),e("option",{domProps:{value:.8}},[t._v("80%")]),t._v(" "),e("option",{domProps:{value:.7}},[t._v("70%")]),t._v(" "),e("option",{domProps:{value:.6}},[t._v("60%")]),t._v(" "),e("option",{domProps:{value:.5}},[t._v("50%")]),t._v(" "),e("option",{domProps:{value:.4}},[t._v("40%")]),t._v(" "),e("option",{domProps:{value:.3}},[t._v("30%")]),t._v(" "),e("option",{domProps:{value:.2}},[t._v("20%")]),t._v(" "),e("option",{domProps:{value:.1}},[t._v("10%")])])])}),[],!1,null,"76fb714c",null);n.a=component.exports},173:function(t,n,e){"use strict";var o=e(1),r=e(79),c=o.a.extend({data:function(){return{handpan:null,samplesBanks:r.g}},computed:{samplesBank:{get:function(){return r.g[this.$store.getters["options/getChosenSamplesBankIndex"]]},set:function(t){this.$store.commit("options/setChosenSamplesBankIndex",r.g.indexOf(t))}},volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}}}),l=(e(182),e(14)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"select-samplesbank"},[t._v("\n    Samples: \n    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.samplesBank,expression:"samplesBank"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.samplesBank=n.target.multiple?e:e[0]}}},t._l(t.samplesBanks,(function(n){return e("option",{key:n.name,domProps:{value:n}},[t._v("\n            "+t._s(n.name)+"\n        ")])})),0),t._v(" "),t.samplesBank.website&&t.samplesBank.logo?e("span",[t.samplesBank.website?e("a",{attrs:{href:"//"+t.samplesBank.website}},[t.samplesBank.logo?e("img",{attrs:{src:t.samplesBank.logo}}):t._e()]):t._e()]):t._e(),t._v(" "),t.samplesBank.website&&!t.samplesBank.logo?e("span",[t.samplesBank.website?e("a",{attrs:{href:"//"+t.samplesBank.website}},[t._v(t._s(t.samplesBank.website))]):t._e()]):t._e()])}),[],!1,null,"39231b3c",null);n.a=component.exports},174:function(t,n,e){"use strict";var o=e(8).f,r=e(83),c=e(114),l=e(21),d=e(112),f=e(113),v=e(85),h=e(115),m=e(86),y=e(7),_=e(110).fastKey,O=e(168),w=y?"_s":"size",k=function(t,n){var e,o=_(n);if("F"!==o)return t._i[o];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,v){var h=t((function(t,o){d(t,h,n,"_i"),t._t=n,t._i=r(null),t._f=void 0,t._l=void 0,t[w]=0,null!=o&&f(o,e,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=O(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var e=O(this,n),o=k(e,t);if(o){var r=o.n,c=o.p;delete e._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),e._f==o&&(e._f=r),e._l==o&&(e._l=c),e[w]--}return!!o},forEach:function(t){O(this,n);for(var e,o=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(o(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!k(O(this,n),t)}}),y&&o(h.prototype,"size",{get:function(){return O(this,n)[w]}}),h},def:function(t,n,e){var o,r,c=k(t,n);return c?c.v=e:(t._l=c={i:r=_(n,!0),k:n,v:e,p:o=t._l,n:void 0,r:!1},t._f||(t._f=c),o&&(o.n=c),t[w]++,"F"!==r&&(t._i[r]=c)),t},getEntry:k,setStrong:function(t,n,e){v(t,n,(function(t,e){this._t=O(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?h(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,h(1))}),e?"entries":"values",!e,!0),m(n)}}},175:function(t,n,e){"use strict";var o=e(3),r=e(6),c=e(11),l=e(114),meta=e(110),d=e(113),f=e(112),v=e(9),h=e(10),m=e(84),y=e(47),_=e(117);t.exports=function(t,n,e,O,w,k){var x=o[t],S=x,N=w?"set":"add",C=S&&S.prototype,j={},A=function(t){var n=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(k&&!v(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!v(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(k||C.forEach&&!h((function(){(new S).entries().next()})))){var B=new S,P=B[N](k?{}:-0,1)!=B,E=h((function(){B.has(1)})),T=m((function(t){new S(t)})),M=!k&&h((function(){for(var t=new S,n=5;n--;)t[N](n,n);return!t.has(-0)}));T||((S=n((function(n,e){f(n,S,t);var o=_(new x,n,S);return null!=e&&d(e,w,o[N],o),o}))).prototype=C,C.constructor=S),(E||M)&&(A("delete"),A("has"),w&&A("get")),(M||P)&&A(N),k&&C.clear&&delete C.clear}else S=O.getConstructor(n,t,w,N),l(S.prototype,e),meta.NEED=!0;return y(S,t),j[t]=S,r(r.G+r.W+r.F*(S!=x),j),k||O.setStrong(S,t,w),S}},176:function(t,n,e){"use strict";var o=e(111),r=e(9),c=e(17),l=e(21),d=e(2)("isConcatSpreadable");t.exports=function t(n,e,source,f,v,h,m,y){for(var element,_,O=v,w=0,k=!!m&&l(m,y,3);w<f;){if(w in source){if(element=k?k(source[w],w,e):source[w],_=!1,r(element)&&(_=void 0!==(_=element[d])?!!_:o(element)),_&&h>0)O=t(n,e,element,c(element.length),O,h-1)-1;else{if(O>=9007199254740991)throw TypeError();n[O]=element}O++}w++}return O}},177:function(t,n,e){var o=e(9),r=e(111),c=e(2)("species");t.exports=function(t){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)||(n=void 0),o(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},178:function(t,n,e){"use strict";var o=e(161);e.n(o).a},179:function(t,n,e){(n=e(44)(!1)).push([t.i,".handpan-shape[data-v-4e925455]{position:relative;background:radial-gradient(#fdfdfd,#606060)}.handpan-shape.is-bottom[data-v-4e925455]{background:#666}.ding[data-v-4e925455],.gu[data-v-4e925455]{position:absolute;left:50%;top:50%}.ding[data-v-4e925455],.gu[data-v-4e925455],.note span[data-v-4e925455]{border:1px solid grey;font-size:14px;border-radius:999px;pointer-events:all;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ding[data-v-4e925455],.gu[data-v-4e925455],.inside[data-v-4e925455],.note span[data-v-4e925455]{display:flex;align-items:center;justify-content:center}.inside[data-v-4e925455]{background:radial-gradient(#ccc,#a9a9a9);border:1px solid grey;position:absolute}.ding .inside[data-v-4e925455]{background:radial-gradient(#fcfcfc,#a9a9a9)}.ding[data-v-4e925455]{background:#e6e6e6}.note span[data-v-4e925455]{background:#aaa}.gu[data-v-4e925455]{background:#333}.note[data-v-4e925455]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute}sub[data-v-4e925455]{margin-bottom:-10px;font-size:.7em}.handpan-shape .highlightless[data-v-4e925455]{background:rgba(255,255,0,.50196)!important}.handpan-shape .highlight[data-v-4e925455]{background:rgba(0,255,0,.50196)!important}.handpan-shape .highlightplus[data-v-4e925455]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-4e925455]{border-color:#f0f!important}.bad .highlight[data-v-4e925455]{background:rgba(255,0,0,.50196)!important}@-webkit-keyframes noteanim-data-v-4e925455{0%{background:hsla(0,0%,100%,0);width:0;height:0}10%{background:hsla(0,0%,100%,.62745);width:60px;height:60px}to{background:hsla(0,0%,100%,0)}}@keyframes noteanim-data-v-4e925455{0%{background:hsla(0,0%,100%,0);width:0;height:0}10%{background:hsla(0,0%,100%,.62745);width:60px;height:60px}to{background:hsla(0,0%,100%,0)}}.animation[data-v-4e925455]{position:absolute;border-radius:100px;display:block}.animated[data-v-4e925455]{-webkit-animation:noteanim-data-v-4e925455 .2s;animation:noteanim-data-v-4e925455 .2s}.note[data-v-4e925455]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-4e925455]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-4e925455]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes))*-1))}.note[data-v-4e925455]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes))*-1))}.note[data-v-4e925455]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*2)*-1))}.note[data-v-4e925455]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*2)*-1))}.note[data-v-4e925455]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*3)*-1))}.note[data-v-4e925455]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*3)*-1))}.note[data-v-4e925455]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*4)*-1))}.note[data-v-4e925455]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*4)*-1))}.note[data-v-4e925455]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*5)*-1))}.note[data-v-4e925455]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*5)*-1))}.note[data-v-4e925455]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*6)*-1))}.note[data-v-4e925455]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*6)*-1))}.note[data-v-4e925455]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-4e925455]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*7)*-1))}.note[data-v-4e925455]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-4e925455]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*7)*-1))}",""]),t.exports=n},180:function(t,n,e){"use strict";var o=e(162);e.n(o).a},181:function(t,n,e){(n=e(44)(!1)).push([t.i,".select-volume[data-v-76fb714c]{font-size:11px;display:flex;align-items:center;height:30px}",""]),t.exports=n},182:function(t,n,e){"use strict";var o=e(163);e.n(o).a},183:function(t,n,e){(n=e(44)(!1)).push([t.i,".select-samplesbank[data-v-39231b3c]{font-size:11px;display:flex;align-items:center;height:30px}",""]),t.exports=n}}]);