(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("45639c71",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(211)},245:function(t,e,n){var o=n(39)(!1);o.push([t.i,".seq[data-v-3683eb82]{width:100%;height:600px;background:#000;position:relative}.note-line[data-v-3683eb82]{position:absolute;pointer-events:none;width:100%;height:2px;background:#fff}",""]),t.exports=o},281:function(t,e,n){"use strict";n.r(e);n(41),n(36),n(12),n(15),n(22),n(35),n(33),n(34);var o,r,l,c=n(0),data=n(95);function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw r}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(path,t){var e=new XMLHttpRequest;e.open("GET",path),e.responseType="arraybuffer",e.onload=function(){var n=e.response;o.decodeAudioData(n,t)},e.send()}o=new AudioContext;var d,v=f(data.e);try{var m=function(){var t,e=d.value,n=f(e.samplesDispo);try{var o=function(){var n=t.value;y("/"+e.folder+"/"+n.replace("#","s")+".flac",(function(data){return e.buffer[n]=data}))};for(n.s();!(t=n.n()).done;)o()}catch(t){n.e(t)}finally{n.f()}};for(v.s();!(d=v.n()).done;)m()}catch(t){v.e(t)}finally{v.f()}y("/gu/D2.flac",(function(data){return l=data})),y("/clac/clac.flac",(function(data){return r=data}));var A=c.a.extend({layout:"empty",data:function(){return{isPressing:!1,shouldPlayAtLeastOnce:!1,playInterval:null,position:0,playableNotes:[],bpm:90,beats:4,count:0,emptyCount:0}},mounted:function(){var t=this;this.playableNotes=["E2","G2","A2","C3","D3","E3","G3","A3","C4","D4","E4","G4","A4","C5","D5","E5","G5","A5"],this.playInterval=setInterval((function(){t.count++,t.count%4==0&&t.emptyCount<16&&t.playGu(),t.isPressing||t.shouldPlayAtLeastOnce?(t.emptyCount=0,t.playNote(t.playableNotes[Math.floor((1-t.position)*t.playableNotes.length)]),t.shouldPlayAtLeastOnce=!1):t.emptyCount++}),6e4/this.bpm/this.beats)},destroyed:function(){clearInterval(this.playInterval)},methods:{start:function(t){this.position=(t.pageY-t.target.offsetTop)/t.target.offsetHeight,this.isPressing=!0,this.shouldPlayAtLeastOnce=!0},stop:function(){this.isPressing=!1},move:function(t){this.position=(t.pageY-t.target.offsetTop)/t.target.offsetHeight},touchMove:function(t){this.position=(t.touches[0].pageY-t.target.offsetTop)/t.target.offsetHeight},playNote:function(t){var e=this.$store.getters["options/getChosenSamplesBankIndex"],n=data.e[e].buffer[t];n&&this.playSample(n)},playGu:function(){this.playSample(l)},playClac:function(){this.playSample(r)},playSample:function(t){var e=o.createGain();e.gain.value=this.$store.getters["options/getVolume"];var source=o.createBufferSource();source.buffer=t,e.connect(o.destination),source.connect(e),source.start(0)}}}),w=(n(244),n(19)),component=Object(w.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    HANDPAN SEQUENCER Work In Progress\n    "),n("div",{staticClass:"seq",on:{touchstart:t.start,mousedown:t.start,touchend:t.stop,mouseup:t.stop,mousemove:t.move,touchmove:t.touchMove}})])}),[],!1,null,"3683eb82",null);e.default=component.exports}}]);