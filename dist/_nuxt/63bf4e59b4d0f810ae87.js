(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));e(34),e(20),e(12),e(33),e(161);var o=e(169);e(63),e(64);function r(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var data=e(80),c=e(170),d=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.absNotationUser="",this.absNotationClean="",this.relNotation="",this.ding="",this.dingOctave=3,this.dingAnimated=!1,this.notesTop=[],this.notesBottom=[],this.notesAll=[],this.chords=[],this.panScales=[],this.scales=[],this.id=(new Date).getTime()}var n,e,d;return n=t,(e=[{key:"loadFromRelNotation",value:function(t,n,e){var o=this;this.ding=t,this.dingOctave=e,this.relNotation=n;var r=n.split("/");if(!(r.length<2)){var d=r[1].trim().split(" ").filter(Boolean).map((function(t){var n="("===t[0],e=t.replace(/\(|\)/g,""),r=-1!==data.e.indexOf(o.ding)?Object(c.i)(o.ding,e):Object(c.h)(o.ding,e);return n?"("+r+")":r})),l=3===e?this.ding:this.ding+e;this.absNotationClean=l+"/ "+d.join(" "),this.absNotationUser=l.replace(/♯/g,"#").replace(/♭/g,"b")+"/ "+d.join(" ").replace(/♯/g,"#").replace(/♭/g,"b"),this.genNotes(this.ding,d,e)}}},{key:"loadFromAbsNotation",value:function(t){this.absNotationUser=t;var n=this.absNotationUser.replace(/#/g,"♯").replace(/b/g,"♭").replace(/ {1,}/g," "),e=n.split("/");if(!(e.length<2)){var o=Object(c.j)(e[0].trim());this.ding=o.noteName,this.dingOctave=o.octave?o.octave:3,this.absNotationClean=n,this.relNotation=Object(c.a)(this.ding,n);var r=e[1].trim().split(" ").filter(Boolean);this.genNotes(this.ding,r,this.dingOctave)}}},{key:"genNotes",value:function(t,n,e){var o=e,r=data.c.indexOf(t);this.notesAll=n.map((function(t,n){var e=t.replace(/\(/g,"").replace(/\)/g,""),d=Object(c.j)(e),l=d.noteName,f=d.octave,v=data.c.indexOf(l);if(-1===v)throw new Error("Unknown note: "+l);return r||(r=v),f?o=f:v<r&&o++,r=v,{key:n,octave:o,name:l,isBottom:"("===t[0],animated:!1}})),this.notesTop=this.notesAll.filter((function(t){return!t.isBottom})),this.notesBottom=this.notesAll.filter((function(t){return t.isBottom}))}},{key:"getUniqueNotes",value:function(){return Object(o.a)(new Set(Array.from(this.absNotationClean.matchAll(/[A-G][♯♭]?/g)).map((function(t){return t[0]}))))}},{key:"genChords",value:function(){this.chords=Object(c.d)(this.getUniqueNotes())}},{key:"genPanScales",value:function(){this.panScales=Object(c.e)([this])}},{key:"genScales",value:function(){this.scales=Object(c.f)([this])}}])&&r(n.prototype,e),d&&r(n,d),t}()},161:function(t,n,e){"use strict";var strong=e(180),o=e(173);t.exports=e(181)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},162:function(t,n,e){var content=e(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("ed24ecf6",content,!0,{sourceMap:!1})},163:function(t,n,e){var content=e(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("106e88a2",content,!0,{sourceMap:!1})},164:function(t,n,e){var content=e(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("f7603a70",content,!0,{sourceMap:!1})},169:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(76);var r=e(105);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},170:function(t,n,e){"use strict";e.d(n,"j",(function(){return v})),e.d(n,"b",(function(){return h})),e.d(n,"c",(function(){return m})),e.d(n,"h",(function(){return y})),e.d(n,"i",(function(){return _})),e.d(n,"a",(function(){return O})),e.d(n,"d",(function(){return k})),e.d(n,"e",(function(){return w})),e.d(n,"f",(function(){return x})),e.d(n,"g",(function(){return A}));e(87),e(23),e(65);var o,r=e(57),c=(e(20),e(12),e(33),e(161),e(169)),data=(e(22),e(174),e(64),e(116),e(63),e(80));!function(t){t.TRAD="trad",t.FOLK="folk",t.IRISH="irish"}(o||(o={}));var d=[{category:o.TRAD,name:"Danse de l’ours",notes:["G4","A4","B4","C5","D5","E5"]},{category:o.TRAD,name:"Levan Polka",notes:["E4","G4","A4","B4","C5","D5","E5"]},{category:o.TRAD,name:"Zelda",notes:["E4","F4","A4","B4","C5","D5","E5","F5"]},{category:o.TRAD,name:"Las Fatmas",notes:["E4","F4","G4","A4","B4","C5","D5","E5","F5"]},{category:o.TRAD,name:"Jan Mijne Man",notes:["G4","A4","B4","C5","D5","E5"]},{category:o.TRAD,name:"Valse à Ollu",notes:["G4","A4","B4","C5","D5","E5","F5","G5"]},{category:o.TRAD,name:"St Patrick An Dro",notes:["G4","A4","B4","C5","D5","E5","G5"]},{category:o.FOLK,name:"Greensleeves",notes:["A3","B3","C4","C♯4","D4","E4","F4","G4","A4","B4","C4"]},{category:o.IRISH,name:"The Kesh Jig",notes:["D4","F♯4","G4","A4","B4","D5","E5","G5","A5","B5"]},{category:o.IRISH,name:"Cooney’s reel",notes:["D4","E4","F♯4","G4","A4","B4","C♯5","D5","E5","F♯5","G5","A5"]},{category:o.IRISH,name:"Lannigan’s Ball",notes:["D4","E4","F♯4","G4","A4","B4","C5","C♯5","D5","E5","F♯5","G5","A5"]},{category:o.IRISH,name:"Father O’Flynn",notes:["D4","F♯4","G4","A4","B4","C♯5","D5","E5","F♯5","G5","A5"]},{category:o.IRISH,name:"Star of the County Down",notes:["E4","G4","A4","B4","C5","D5","E5","G5"]},{category:o.IRISH,name:"Drowsy Maggie",notes:["E4","F♯4","A4","B4","C♯5","D5","E5","F♯5","G5","A5"]},{category:o.IRISH,name:"Killavil jig",notes:["E4","F♯4","A4","B4","D5","E5","F♯5","G5"]},{category:o.IRISH,name:"Musical priest",notes:["F♯4","A4","B4","C♯5","D5","E5","F♯5","A5","B5"]}],l=e(160);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){var n=/([A-G][♯♭]?)([0-9]?)/.exec(t);if(null===n)throw new Error("Cannot read note: "+n);var e=n[1],o=n[2];return o?{noteName:e,octave:parseInt(o,10)}:{noteName:e}}function h(t){var n=data.e.indexOf(t),e=data.d.indexOf(t);return-1!==n?data.d[n]:data.e[e]}function m(t){var n=data.d.indexOf(t);return-1!==n?data.e[n]:t}function y(t,n){var e=-1!==data.e.indexOf(t)?data.e.indexOf(t):data.d.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var o=data.b.indexOf(n);if(-1===o)throw new Error("Unknown interval: "+n);return data.d[(e+o+12)%12]}function _(t,n){var e=-1!==data.e.indexOf(t)?data.e.indexOf(t):data.d.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var o=data.b.indexOf(n);if(-1===o)throw new Error("Unknown interval: "+n);return data.e[(e+o+12)%12]}function O(t,n){var e=data.e.indexOf(t);-1===e&&(e=data.d.indexOf(t));for(var o=[],i=0;i<12;i++)o.push(data.b[(12-e+i)%12]);for(var r=n+" ",c=0;c<12;c++)r=(r=r.replace(new RegExp(data.e[c]+"[0-9]?([^♯♭])","g"),o[c]+"$1")).replace(new RegExp(data.d[c]+"[0-9]?([^♯♭])","g"),o[c]+"$1");return r.trim()}var k=function(t){return data.a.map((function(n){var e=[];return t.forEach((function(o){n.chords.forEach((function(n){var r=n.val.split(" ");r.every((function(n){return t.indexOf(_(o,n))>=0||t.indexOf(y(o,n))>=0}))&&e.push({root:o,notes:r,label:o+n.abbr})}))})),{type:n.type,chords:e}}))},w=function(t){return t.flatMap((function(t){return data.f.map((function(n){var e=new l.a;return e.loadFromRelNotation(t.ding,n.val,t.dingOctave),{ding:t.ding,name:n.name,notesAll:e.notesAll}}))})).filter((function(n){return n.notesAll.every((function(n){return t.flatMap((function(t){return t.notesAll})).some((function(t){var e=data.d.indexOf(t.name),o=-1!==e?data.e[e]:t.name;return n.octave===t.octave&&n.name===o}))}))}))},x=function(t){var n=t.flatMap((function(t){return[t.ding].concat(Object(c.a)(t.notesAll.map((function(t){return t.name}))))})),e=Object(c.a)(new Set(n));return e.flatMap((function(o){return data.h.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},t,{absSharp:t.ecarts.map((function(t){return _(o,t)}))})})).filter((function(t){return t.absSharp.every((function(t){var n=h(t);return-1!==e.indexOf(t)||-1!==e.indexOf(n)}))})).filter((function(t){var e=h(o);return n.filter((function(t){return t===o||t===e})).length>=2})).map((function(n){return{id:o+" "+n.name,tonic:o,noteNames:n.absSharp,name:n.name,totalNotes:t.flatMap((function(t){return[t.ding].concat(Object(c.a)(t.notesAll.map((function(t){return t.name}))))})).filter((function(t){var e=h(t);return-1!==n.absSharp.indexOf(t)||-1!==n.absSharp.indexOf(e)})).length,special:n.special?_(o,n.special):null}}))}))},A=function(t){var n=t.flatMap((function(t){return[t.ding+t.dingOctave].concat(Object(c.a)(t.notesAll.map((function(t){return t.name+t.octave}))))})),e=Object(c.a)(new Set(n));return d.flatMap((function(t){if(!t.notes)return[];for(var n=[],i=-30;i<20;i++){var o=S(t.notes,i);o.every((function(t){return e.indexOf(t)>=0}))&&n.push({name:t.name,notes:o,transpo:i})}return n}))},S=function(t,n){return 0===n?t:t.map((function(t){var e=v(t),o=e.noteName,r=e.octave;if(!r)throw new Error("Octave missing: "+t);for(var c=m(o),d=data.e.indexOf(c)+n,l=r;d<0;)d+=12,l--;for(;d>=12;)d-=12,l++;return data.e[d]+l}))}},171:function(t,n,e){"use strict";var o=e(6),r=e(178)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),o(o.P+o.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(81)("find")},172:function(t,n,e){var o=e(179);t.exports=function(t,n){return new(o(t))(n)}},173:function(t,n,e){var o=e(9);t.exports=function(t,n){if(!o(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},174:function(t,n,e){"use strict";var o=e(6),r=e(182),c=e(24),d=e(17),l=e(46),f=e(172);o(o.P,"Array",{flatMap:function(t){var n,e,o=c(this);return l(t),n=d(o.length),e=f(o,0),r(e,o,o,n,0,1,t,arguments[1]),e}}),e(81)("flatMap")},175:function(t,n,e){"use strict";e(20),e(35),e(23),e(33),e(34),e(25),e(26),e(12),e(22),e(171),e(63);var o=e(1),data=e(80),r=e(160),c=e(170);function d(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))){var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,o,r=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return r=t.done,t},e:function(t){c=!0,o=t},f:function(){try{r||null==e.return||e.return()}finally{if(c)throw o}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var f,v,h,m,y=!1;function _(path,t){var n=new XMLHttpRequest;n.open("GET",path),n.responseType="arraybuffer",n.onload=function(){var e=n.response;f.decodeAudioData(e,t)},n.send()}f=new AudioContext;var O,k=d(data.g);try{var w=function(){var t,n=O.value,e=d(n.samplesDispo);try{var o=function(){var e=t.value;_("/"+n.folder+"/"+e.replace("♯","s")+".flac",(function(data){return n.buffer[e]=data}))};for(e.s();!(t=e.n()).done;)o()}catch(t){e.e(t)}finally{e.f()}};for(k.s();!(O=k.n()).done;)w()}catch(t){k.e(t)}finally{k.f()}_("/gu/D2.flac",(function(data){return h=data})),_("/clac/clac.flac",(function(data){return v=data}));var x=o.a.extend({props:{handpan:r.a,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},computed:{nbNotesTop:function(){return{"--nbnotes":this.handpan.notesTop.length}},nbNotesBottom:function(){return{"--nbnotes":this.handpan.notesBottom.length}}},mounted:function(){var t=this;this.$root.$on("playRecord",(function(n){var e=n.record,o=n.endTime;t.beginPlayback(e,o)})),this.$root.$on("stopPlayback",(function(){clearTimeout(m)}))},destroyed:function(){this.$root.$off("playRecord"),this.$root.$off("stopPlayback")},methods:{beginPlayback:function(t,n){var e=this;t.forEach((function(t){setTimeout((function(){e.playNoteByFullname(t.note)}),t.time)})),m=setTimeout((function(){e.beginPlayback(t,n)}),n)},playClacMouse:function(){y||this.playClac()},playClacTouch:function(){this.playClac()},playClac:function(){this.playSample(v)},playGuMouse:function(t){t.stopPropagation(),y||this.playGu()},playGuTouch:function(t){t.stopPropagation(),this.playGu()},playGu:function(){this.playSample(h)},playNoteTouch:function(t,n){t.stopPropagation(),y=!0,this.playNote(n)},playNoteMouse:function(t,n){t.stopPropagation(),y||this.playNote(n)},playNoteByFullname:function(t){var n=null;(n=this.handpan.ding+this.handpan.dingOctave===t?{name:this.handpan.ding,octave:this.handpan.dingOctave}:this.handpan.notesAll.find((function(n){return n.name+n.octave===t})))?this.playNote(n):console.log("note not found in the pan",t)},playNote:function(t){var n=this,e=t.name,o=t.octave,r=Object(c.c)(e),d=this.$store.getters["options/getChosenSamplesBankIndex"],l=data.g[d].buffer[r+o];l&&(this.playSample(l),this.$store.commit("recorder/playNote",r+o),void 0===t.animated?(this.handpan.dingAnimated=!1,setTimeout((function(){n.handpan.dingAnimated=!0}),0)):(t.animated=!1,setTimeout((function(){t.animated=!0}),0)))},playSample:function(t){var n=f.createGain();n.gain.value=this.$store.getters["options/getVolume"];var source=f.createBufferSource();source.buffer=t,n.connect(f.destination),source.connect(n),source.start(0)},isSpecial:function(t){var n,e,o=Object(c.b)(t);return t===(null===(n=this.selectedScale)||void 0===n?void 0:n.special)||o===(null===(e=this.selectedScale)||void 0===e?void 0:e.special)},isRoot:function(t){var n,e,o,r,d,l,f=Object(c.b)(t),v=t===(null===(n=this.selectedChord)||void 0===n?void 0:n.root)||f===(null===(e=this.selectedChord)||void 0===e?void 0:e.root),h=t===(null===(o=this.selectedScale)||void 0===o?void 0:o.tonic)||f===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic),m=t===(null===(d=this.selectedPanScale)||void 0===d?void 0:d.ding)||f===(null===(l=this.selectedPanScale)||void 0===l?void 0:l.ding);return v||h||m},isNoteInModel:function(t,n){var e=!1,o=Object(c.b)(t);return this.selectedPanScale&&this.selectedPanScale.notesAll&&(e=this.selectedPanScale.notesAll.some((function(n){return n.name===t||n.name===o}))),e},isHighlighted:function(t,n){if(-1!==this.$store.state.selection.highlightedNotes.indexOf(t+n))return!0;var e=Object(c.b)(t),o=!1,r=!1,d=!1;return this.selectedChord&&(d=-1!==this.selectedChord.noteNames.indexOf(t)||-1!==this.selectedChord.noteNames.indexOf(e)),this.selectedScale&&this.selectedScale.noteNames&&(o=-1!==this.selectedScale.noteNames.indexOf(t)||-1!==this.selectedScale.noteNames.indexOf(e)),this.selectedPanScale&&this.selectedPanScale.notesAll&&(r=this.selectedPanScale.notesAll.some((function(o){return o.octave===n&&(o.name===t||o.name===e)}))),d||o||r}}}),A=(e(183),e(14)),component=Object(A.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"handpan-diagram",class:{bad:"bad"===t.selectedChord.type,hasBottom:t.handpan.notesBottom.length>0}},[e("div",{staticClass:"handpan-shape is-top",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"ding",class:{highlight:t.isHighlighted(t.handpan.ding,t.handpan.dingOctave),highlightplus:t.isRoot(t.handpan.ding)},on:{mousedown:function(n){return t.playNoteMouse(n,{name:t.handpan.ding,octave:t.handpan.dingOctave})},touchstart:function(n){return t.playNoteTouch(n,{name:t.handpan.ding,octave:t.handpan.dingOctave})}}},[e("div",{staticClass:"inside"},[t._v("\n                "+t._s(t.handpan.ding)),e("sub",[t._v(t._s(t.handpan.dingOctave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:t.handpan.dingAnimated},on:{animationend:function(n){t.handpan.dingAnimated=!1}}})]),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesTop},t._l(t.handpan.notesTop,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),highlightplus:t.isHighlighted(n.name,n.octave)&&t.isRoot(n.name),highlightless:t.isNoteInModel(n.name,n.octave)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("div",{staticClass:"inside"},[t._v("\n                        "+t._s(n.name)),e("sub",[t._v(t._s(n.octave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:n.animated},on:{animationend:function(t){n.animated=!1}}})])])})),0)]),t._v(" "),t.handpan.notesBottom.length?e("div",{staticClass:"handpan-shape is-bottom",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"gu",on:{mousedown:function(n){return t.playGuMouse(n)},touchstart:function(n){return t.playGuTouch(n)}}}),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesBottom},t._l(t.handpan.notesBottom,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),highlightplus:t.isHighlighted(n.name,n.octave)&&t.isRoot(n.name),highlightless:t.isNoteInModel(n.name,n.octave)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("div",{staticClass:"inside"},[t._v("\n                        "+t._s(n.name)),e("sub",[t._v(t._s(n.octave))])]),t._v(" "),e("div",{staticClass:"animation",class:{animated:n.animated},on:{animationend:function(t){n.animated=!1}}})])])})),0)]):t._e()])}),[],!1,null,"1dd7ba5c",null);n.a=component.exports},176:function(t,n,e){"use strict";var o=e(1).a.extend({computed:{volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}}}),r=(e(185),e(14)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"select-volume"},[t._v("\n    Volume: \n    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.volume=n.target.multiple?e:e[0]}}},[e("option",{domProps:{value:1}},[t._v("100%")]),t._v(" "),e("option",{domProps:{value:.9}},[t._v("90%")]),t._v(" "),e("option",{domProps:{value:.8}},[t._v("80%")]),t._v(" "),e("option",{domProps:{value:.7}},[t._v("70%")]),t._v(" "),e("option",{domProps:{value:.6}},[t._v("60%")]),t._v(" "),e("option",{domProps:{value:.5}},[t._v("50%")]),t._v(" "),e("option",{domProps:{value:.4}},[t._v("40%")]),t._v(" "),e("option",{domProps:{value:.3}},[t._v("30%")]),t._v(" "),e("option",{domProps:{value:.2}},[t._v("20%")]),t._v(" "),e("option",{domProps:{value:.1}},[t._v("10%")])])])}),[],!1,null,"76fb714c",null);n.a=component.exports},177:function(t,n,e){"use strict";var o=e(1),r=e(80),c=o.a.extend({data:function(){return{handpan:null,samplesBanks:r.g}},computed:{samplesBank:{get:function(){return r.g[this.$store.getters["options/getChosenSamplesBankIndex"]]},set:function(t){this.$store.commit("options/setChosenSamplesBankIndex",r.g.indexOf(t))}},volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}}}),d=(e(187),e(14)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"select-samplesbank"},[t._v("\n    Samples: \n    "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.samplesBank,expression:"samplesBank"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.samplesBank=n.target.multiple?e:e[0]}}},t._l(t.samplesBanks,(function(n){return e("option",{key:n.name,domProps:{value:n}},[t._v("\n            "+t._s(n.name)+"\n        ")])})),0),t._v(" "),t.samplesBank.website&&t.samplesBank.logo?e("span",[t.samplesBank.website?e("a",{attrs:{href:"//"+t.samplesBank.website}},[t.samplesBank.logo?e("img",{attrs:{src:t.samplesBank.logo}}):t._e()]):t._e()]):t._e(),t._v(" "),t.samplesBank.website&&!t.samplesBank.logo?e("span",[t.samplesBank.website?e("a",{attrs:{href:"//"+t.samplesBank.website}},[t._v(t._s(t.samplesBank.website))]):t._e()]):t._e()])}),[],!1,null,"39231b3c",null);n.a=component.exports},178:function(t,n,e){var o=e(21),r=e(82),c=e(24),d=e(17),l=e(172);t.exports=function(t,n){var e=1==t,f=2==t,v=3==t,h=4==t,m=6==t,y=5==t||m,_=n||l;return function(n,l,O){for(var k,w,x=c(n),A=r(x),S=o(l,O,3),C=d(A.length),B=0,N=e?_(n,C):f?_(n,0):void 0;C>B;B++)if((y||B in A)&&(w=S(k=A[B],B,x),t))if(e)N[B]=w;else if(w)switch(t){case 3:return!0;case 5:return k;case 6:return B;case 2:N.push(k)}else if(h)return!1;return m?-1:v||h?h:N}}},179:function(t,n,e){var o=e(9),r=e(111),c=e(2)("species");t.exports=function(t){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)||(n=void 0),o(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},180:function(t,n,e){"use strict";var o=e(8).f,r=e(83),c=e(114),d=e(21),l=e(112),f=e(113),v=e(85),h=e(115),m=e(86),y=e(7),_=e(110).fastKey,O=e(173),k=y?"_s":"size",w=function(t,n){var e,o=_(n);if("F"!==o)return t._i[o];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,v){var h=t((function(t,o){l(t,h,n,"_i"),t._t=n,t._i=r(null),t._f=void 0,t._l=void 0,t[k]=0,null!=o&&f(o,e,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=O(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[k]=0},delete:function(t){var e=O(this,n),o=w(e,t);if(o){var r=o.n,c=o.p;delete e._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),e._f==o&&(e._f=r),e._l==o&&(e._l=c),e[k]--}return!!o},forEach:function(t){O(this,n);for(var e,o=d(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(o(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!w(O(this,n),t)}}),y&&o(h.prototype,"size",{get:function(){return O(this,n)[k]}}),h},def:function(t,n,e){var o,r,c=w(t,n);return c?c.v=e:(t._l=c={i:r=_(n,!0),k:n,v:e,p:o=t._l,n:void 0,r:!1},t._f||(t._f=c),o&&(o.n=c),t[k]++,"F"!==r&&(t._i[r]=c)),t},getEntry:w,setStrong:function(t,n,e){v(t,n,(function(t,e){this._t=O(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?h(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,h(1))}),e?"entries":"values",!e,!0),m(n)}}},181:function(t,n,e){"use strict";var o=e(3),r=e(6),c=e(11),d=e(114),meta=e(110),l=e(113),f=e(112),v=e(9),h=e(10),m=e(84),y=e(47),_=e(117);t.exports=function(t,n,e,O,k,w){var x=o[t],A=x,S=k?"set":"add",C=A&&A.prototype,B={},N=function(t){var n=C[t];c(C,t,"delete"==t||"has"==t?function(a){return!(w&&!v(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!v(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof A&&(w||C.forEach&&!h((function(){(new A).entries().next()})))){var j=new A,E=j[S](w?{}:-0,1)!=j,P=h((function(){j.has(1)})),D=m((function(t){new A(t)})),T=!w&&h((function(){for(var t=new A,n=5;n--;)t[S](n,n);return!t.has(-0)}));D||((A=n((function(n,e){f(n,A,t);var o=_(new x,n,A);return null!=e&&l(e,k,o[S],o),o}))).prototype=C,C.constructor=A),(P||T)&&(N("delete"),N("has"),k&&N("get")),(T||E)&&N(S),w&&C.clear&&delete C.clear}else A=O.getConstructor(n,t,k,S),d(A.prototype,e),meta.NEED=!0;return y(A,t),B[t]=A,r(r.G+r.W+r.F*(A!=x),B),w||O.setStrong(A,t,k),A}},182:function(t,n,e){"use strict";var o=e(111),r=e(9),c=e(17),d=e(21),l=e(2)("isConcatSpreadable");t.exports=function t(n,e,source,f,v,h,m,y){for(var element,_,O=v,k=0,w=!!m&&d(m,y,3);k<f;){if(k in source){if(element=w?w(source[k],k,e):source[k],_=!1,r(element)&&(_=void 0!==(_=element[l])?!!_:o(element)),_&&h>0)O=t(n,e,element,c(element.length),O,h-1)-1;else{if(O>=9007199254740991)throw TypeError();n[O]=element}O++}k++}return O}},183:function(t,n,e){"use strict";var o=e(162);e.n(o).a},184:function(t,n,e){(n=e(44)(!1)).push([t.i,".handpan-shape[data-v-1dd7ba5c]{position:relative;background:radial-gradient(#fdfdfd,#606060)}.handpan-shape.is-bottom[data-v-1dd7ba5c]{background:#666}.ding[data-v-1dd7ba5c],.gu[data-v-1dd7ba5c]{position:absolute;left:50%;top:50%}.ding[data-v-1dd7ba5c],.gu[data-v-1dd7ba5c],.note span[data-v-1dd7ba5c]{border:1px solid grey;font-size:14px;border-radius:999px;pointer-events:all;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ding[data-v-1dd7ba5c],.gu[data-v-1dd7ba5c],.inside[data-v-1dd7ba5c],.note span[data-v-1dd7ba5c]{display:flex;align-items:center;justify-content:center}.inside[data-v-1dd7ba5c]{background:radial-gradient(#ccc,#a9a9a9);border:1px solid grey;position:absolute}.ding .inside[data-v-1dd7ba5c]{background:radial-gradient(#fcfcfc,#a9a9a9)}.ding[data-v-1dd7ba5c]{background:#e6e6e6}.note span[data-v-1dd7ba5c]{background:#aaa}.gu[data-v-1dd7ba5c]{background:#333}.note[data-v-1dd7ba5c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute}sub[data-v-1dd7ba5c]{margin-bottom:-10px;font-size:.7em}.handpan-shape .highlightless[data-v-1dd7ba5c]{background:rgba(255,255,0,.50196)!important}.handpan-shape .highlight[data-v-1dd7ba5c]{background:rgba(0,255,0,.50196)!important}.handpan-shape .highlightplus[data-v-1dd7ba5c]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-1dd7ba5c]{border-color:#f0f!important}.bad .highlight[data-v-1dd7ba5c]{background:rgba(255,0,0,.50196)!important}@-webkit-keyframes noteanim-data-v-1dd7ba5c{0%{background:hsla(0,0%,100%,0);width:0;height:0}10%{background:hsla(0,0%,100%,.62745);width:60px;height:60px}to{background:hsla(0,0%,100%,0)}}@keyframes noteanim-data-v-1dd7ba5c{0%{background:hsla(0,0%,100%,0);width:0;height:0}10%{background:hsla(0,0%,100%,.62745);width:60px;height:60px}to{background:hsla(0,0%,100%,0)}}.animation[data-v-1dd7ba5c]{position:absolute;border-radius:100px;display:block}.animated[data-v-1dd7ba5c]{-webkit-animation:noteanim-data-v-1dd7ba5c .2s;animation:noteanim-data-v-1dd7ba5c .2s}.note[data-v-1dd7ba5c]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-1dd7ba5c]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-1dd7ba5c]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes))*-1))}.note[data-v-1dd7ba5c]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes))*-1))}.note[data-v-1dd7ba5c]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*2)*-1))}.note[data-v-1dd7ba5c]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*2)*-1))}.note[data-v-1dd7ba5c]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*3)*-1))}.note[data-v-1dd7ba5c]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*3)*-1))}.note[data-v-1dd7ba5c]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*4)*-1))}.note[data-v-1dd7ba5c]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*4)*-1))}.note[data-v-1dd7ba5c]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*5)*-1))}.note[data-v-1dd7ba5c]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*5)*-1))}.note[data-v-1dd7ba5c]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*6)*-1))}.note[data-v-1dd7ba5c]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*6)*-1))}.note[data-v-1dd7ba5c]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*7)*-1))}.note[data-v-1dd7ba5c]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-1dd7ba5c]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*7)*-1))}",""]),t.exports=n},185:function(t,n,e){"use strict";var o=e(163);e.n(o).a},186:function(t,n,e){(n=e(44)(!1)).push([t.i,".select-volume[data-v-76fb714c]{font-size:11px;display:flex;align-items:center;height:30px}",""]),t.exports=n},187:function(t,n,e){"use strict";var o=e(164);e.n(o).a},188:function(t,n,e){(n=e(44)(!1)).push([t.i,".select-samplesbank[data-v-39231b3c]{font-size:11px;display:flex;align-items:center;height:30px}",""]),t.exports=n}}]);