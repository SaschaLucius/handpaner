(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(e,t,n){var content=n(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("394dd0c8",content,!0,{sourceMap:!1})},169:function(e,t,n){var content=n(198);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("65468bc1",content,!0,{sourceMap:!1})},194:function(e,t,n){e.exports=n.p+"img/handpaner.beb7987.png"},195:function(e,t,n){"use strict";var o=n(168);n.n(o).a},196:function(e,t,n){(t=n(45)(!1)).push([e.i,".handpans[data-v-19ffc7f2]{display:flex;flex-wrap:wrap}[data-v-19ffc7f2] .handpan-shape{width:200px;height:200px;border-radius:200px}[data-v-19ffc7f2] .handpan-shape.is-bottom{margin-left:25px;width:150px;height:150px;border-radius:150px}[data-v-19ffc7f2] .ding{width:76px;height:76px;margin-left:-38px;margin-top:-38px}[data-v-19ffc7f2] .gu,[data-v-19ffc7f2] .note span{width:40px;height:40px;margin-left:-20px;margin-top:-20px}[data-v-19ffc7f2] .note{top:90px;padding-left:175px}[data-v-19ffc7f2] .is-bottom .note{top:65px;padding-left:125px}[data-v-19ffc7f2] .inside{width:24px;height:24px;border-radius:24px}[data-v-19ffc7f2] .ding .inside{width:32px;height:32px;border-radius:32px}",""]),e.exports=t},197:function(e,t,n){"use strict";var o=n(169);n.n(o).a},198:function(e,t,n){(t=n(45)(!1)).push([e.i,"#app[data-v-209675e1]{position:relative}.chord-type[data-v-209675e1],.panscales[data-v-209675e1],.scales[data-v-209675e1],.selectables[data-v-209675e1]{display:flex;flex-wrap:wrap;margin-top:4px}.chord-type-name[data-v-209675e1]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-209675e1],.panscale[data-v-209675e1],.scale[data-v-209675e1],.selectable[data-v-209675e1]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.panscale[data-v-209675e1],.scale[data-v-209675e1]{margin-top:4px}.chord.highlight[data-v-209675e1],.panscale.highlight[data-v-209675e1],.scale.highlight[data-v-209675e1]{background:rgba(0,255,204,.50196)!important}.tabs[data-v-209675e1]{display:flex;align-items:center}.tab[data-v-209675e1]{position:relative;width:150px;padding:8px 0;font-weight:700;text-align:center;cursor:pointer;border-bottom:1px solid #666;margin-bottom:-1px}.tab.selected[data-v-209675e1]{background:#fff;border:1px solid #666;border-bottom:none}.tab[data-v-209675e1]:not(.selected):hover{color:#0cc}.tab-content[data-v-209675e1]{background:#fff;border:1px solid #666;min-height:130px;padding:8px}.zone[data-v-209675e1]{margin-top:16px}.delete[data-v-209675e1]{position:absolute;right:2px;top:2px;cursor:pointer;padding:6px;margin-left:16px}.delete[data-v-209675e1]:hover{color:red}.config[data-v-209675e1]{position:absolute;right:0;top:0;display:none}.toggle[data-v-209675e1]{font-size:32px}.play-options[data-v-209675e1]{display:flex;justify-content:center}.play-options>*[data-v-209675e1]{margin:0 8px}",""]),e.exports=t},200:function(e,t,n){"use strict";n.r(t);n(172),n(175),n(65),n(64),n(22),n(34),n(20),n(12),n(33),n(162);var o=n(170),l=n(1),d=n(82),c=n(161),r=n(171),h=n(176),v=l.a.extend({components:{HandpanDiagram:h.a},props:{handpans:Array,selectedChord:Object,selectedPanScale:Object,selectedScale:Object}}),f=(n(195),n(15)),m=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"handpans"},e._l(e.handpans,(function(t){return n("HandpanDiagram",{key:t.id,attrs:{handpan:t,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})})),1)}),[],!1,null,"19ffc7f2",null).exports,y=n(177),_=n(178),x=l.a.extend({components:{HandpanDiagrams:m,SelectVolume:y.a,SelectSamplesBank:_.a},data:function(){return{displayMode:"panScales",displayedHandpanIndex:0,handpans:[],inputAbsNotation:"",inputDing:"",inputDingOctave:3,inputPanscale:{},inputRelNotation:"",notes:[],abs:"",scales:d.h,notesAll:d.c,chords:{},selectedPanScale:{},selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[],displayedScales:[],displayedChords:[],displayedPanScales:[],displayedSongs:[],ignoreNextHashChange:!1}},created:function(){var e=this;setTimeout((function(){if(e.$nuxt.$route.hash)e.loadHandpansFromHash();else{var t=new c.a;t.loadFromAbsNotation("D/ A C D E F G A C"),e.handpans.push(t),e.genScalesAndChords(t),e.panChanged()}}),1)},computed:{uniqueSongs:function(){return Object(o.a)(new Set(Array.from(this.displayedSongs.map((function(e){return e.name})))))},playPath:function(){return this.displayedHandpan?"play/#"+this.displayedHandpan.absNotationUser.replace(/ /g,"-"):"play/"},allPanScalesSorted:function(){return d.f.sort((function(a,b){return a.name.localeCompare(b.name)}))},displayedScalesSorted:function(){return this.displayedScales.sort((function(a,b){return b.totalNotes-a.totalNotes}))},displayedHandpan:function(){return this.handpans[this.displayedHandpanIndex]}},watch:{$route:function(){this.ignoreNextHashChange?this.ignoreNextHashChange=!1:(this.handpans=[],this.loadHandpansFromHash())}},methods:{loadHandpansFromHash:function(){var e,t=this;this.$nuxt.$route.hash.substr(1).split("_").forEach((function(n){(e=new c.a).loadFromAbsNotation(n.replace(/-/g," ")),t.handpans.push(e),t.panChanged()}))},removeHandpan:function(e,t){e.stopPropagation(),this.handpans.splice(t,1),this.displayedHandpanIndex>=this.handpans.length&&this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.displayHandpan(),this.updateHash()},addHandpan:function(){var e=new c.a;e.loadFromAbsNotation("C/ C"),this.handpans.push(e),this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.updateHash()},panScaleChanged:function(){this.inputRelNotation=this.inputPanscale.val,this.relChanged()},relChanged:function(){try{this.displayedHandpan.loadFromRelNotation(this.inputDing,this.inputRelNotation,this.inputDingOctave),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},absChanged:function(){try{this.displayedHandpan.loadFromAbsNotation(this.inputAbsNotation),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},updateHash:function(){var e=this.$nuxt.$route.hash,t="#"+this.handpans.map((function(e){return e.absNotationUser.replace(/ /g,"-")})).join("_");t!==e&&(this.ignoreNextHashChange=!0,this.$nuxt.$router.replace(t))},panChanged:function(){this.genScalesAndChords(this.displayedHandpan),this.displayHandpan(),this.genScalesAndChordsAllPans()},genScalesAndChordsAllPans:function(){var e=Object(o.a)(new Set(Array.from(this.handpans.flatMap((function(e){return e.getUniqueNotes()})))));this.displayedScales=Object(r.f)(this.handpans),this.displayedPanScales=Object(r.e)(this.handpans),this.displayedChords=Object(r.d)(e),this.displayedSongs=Object(r.g)(this.handpans)},genScalesAndChords:function(e){},selectHandpan:function(e){this.displayedHandpanIndex=e,this.displayHandpan()},displayHandpan:function(){var e=this,t=d.f.find((function(t){return e.displayedHandpan.relNotation.trim()===t.val.trim()}));this.inputPanscale=t||null,this.inputDing=this.displayedHandpan.ding,this.inputRelNotation=this.displayedHandpan.relNotation,this.inputAbsNotation=this.displayedHandpan.absNotationUser},selectPanScale:function(e){this.selectedPanScale=e},unselectPanScale:function(){this.selectedPanScale={}},selectScale:function(e){this.selectedScale=e},unselectScale:function(){this.selectedScale={}},selectSong:function(e){this.$store.commit("selection/setHighlightedNotes",e.notes)},unselectSong:function(){this.$store.commit("selection/setHighlightedNotes",[])},selectChord:function(e,t){this.selectedChord={label:t.label,root:t.root,type:e.type,noteNames:[].concat(Object(o.a)(t.notes.map((function(e){return Object(r.i)(t.root,e)}))),Object(o.a)(t.notes.map((function(e){return Object(r.h)(t.root,e)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),C=(n(197),Object(f.a)(x,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),o("img",{attrs:{src:n(194)}}),e._v(" "),o("div",{staticClass:"tabs"},[e._l(e.handpans,(function(t,n){return o("div",{key:t.id,staticClass:"tab",class:{selected:e.displayedHandpanIndex===n},on:{click:function(t){return e.selectHandpan(n)}}},[e._v("\n            Pan n°"+e._s(n+1)+"\n            "),e.handpans.length>1?o("span",{staticClass:"delete",on:{click:function(t){return e.removeHandpan(t,n)}}},[e._v("×")]):e._e()])})),e._v(" "),o("div",{staticClass:"tab",on:{click:function(t){return e.addHandpan()}}},[e._v("+")])],2),e._v(" "),o("div",{staticClass:"tab-content"},[o("div",[o("h3",[e._v("Absolute input")]),e._v("\n            Notes\n            "),o("br"),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{size:"40"},domProps:{value:e.inputAbsNotation},on:{keyup:e.absChanged,input:function(t){t.target.composing||(e.inputAbsNotation=t.target.value)}}})]),e._v(" "),o("div",[o("h3",[e._v("Relative input")]),e._v("\n            Ding\n            "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDing,expression:"inputDing"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDing=t.target.multiple?n:n[0]},e.relChanged]}},e._l(e.notesAll,(function(t){return o("option",{key:t},[e._v(e._s(t))])})),0),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDingOctave,expression:"inputDingOctave"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDingOctave=t.target.multiple?n:n[0]},e.relChanged]}},[o("option",[e._v("2")]),e._v(" "),o("option",[e._v("3")])]),e._v(" "),o("br"),e._v("Relative scale\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputRelNotation,expression:"inputRelNotation"}],attrs:{size:"40"},domProps:{value:e.inputRelNotation},on:{keyup:e.relChanged,input:function(t){t.target.composing||(e.inputRelNotation=t.target.value)}}}),e._v(" "),o("br"),e._v("Handpan scale\n            "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.inputPanscale,expression:"inputPanscale"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputPanscale=t.target.multiple?n:n[0]},e.panScaleChanged]}},e._l(e.allPanScalesSorted,(function(t){return o("option",{key:t.name,domProps:{value:t}},[e._v(e._s(t.name))])})),0),e._v(" "),o("br"),o("nuxt-link",{attrs:{to:e.playPath}},[e._v("Play in full page")])],1)]),e._v(" "),e.displayedHandpan?o("div",[o("div",{staticClass:"zone"},[o("div",{staticClass:"tabs"},[o("div",{staticClass:"tab",class:{selected:"panScales"===e.displayMode},on:{click:function(t){e.displayMode="panScales"}}},[e._v("\n                    Models\n                ")]),e._v(" "),o("div",{staticClass:"tab",class:{selected:"scales"===e.displayMode},on:{click:function(t){e.displayMode="scales"}}},[e._v("Scales")]),e._v(" "),o("div",{staticClass:"tab",class:{selected:"chords"===e.displayMode},on:{click:function(t){e.displayMode="chords"}}},[e._v("Chords")]),e._v(" "),o("div",{staticClass:"tab",class:{selected:"songs"===e.displayMode},on:{click:function(t){e.displayMode="songs"}}},[e._v("Songs")])]),e._v(" "),"panScales"===e.displayMode?o("div",{staticClass:"tab-content"},[o("div",{staticClass:"panscales"},[e._l(e.displayedPanScales,(function(t){return o("div",{key:t.ding+t.name,staticClass:"panscale",class:{highlight:t.ding===e.selectedPanScale.ding&&t.name===e.selectedPanScale.name},on:{click:function(n){return e.selectPanScale(t)},mouseover:function(n){return e.selectPanScale(t)},mouseout:function(t){return e.unselectPanScale()}}},[e.handpans.length>1?o("span",[e._v(e._s(t.ding))]):e._e(),e._v(" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedPanScales.length?e._e():o("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"scales"===e.displayMode?o("div",{staticClass:"tab-content"},[o("div",{staticClass:"scales"},[e._l(e.displayedScalesSorted,(function(t){return o("div",{key:t.id,staticClass:"scale",class:{highlight:t.id===e.selectedScale.id},on:{click:function(n){return e.selectScale(t)},mouseover:function(n){return e.selectScale(t)},mouseout:function(t){return e.unselectScale()}}},[e._v("\n                        "+e._s(t.tonic)+" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedScales.length?e._e():o("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"chords"===e.displayMode?o("div",{staticClass:"tab-content"},e._l(e.displayedChords,(function(t){return o("div",{key:t.type,staticClass:"chord-type"},[o("div",{staticClass:"chord-type-name"},[e._v(e._s(t.type))]),e._v(" "),e._l(t.chords,(function(n){return o("div",{key:n.label,staticClass:"chord",class:{highlight:n.label===e.selectedChord.label},domProps:{innerHTML:e._s(n.label)},on:{click:function(o){return e.selectChord(t,n)},mouseover:function(o){return e.selectChord(t,n)},mouseout:function(t){return e.unselectChord()}}})}))],2)})),0):e._e(),e._v(" "),"songs"===e.displayMode?o("div",{staticClass:"tab-content"},[e._v("\n                "+e._s(e.uniqueSongs.length)+" different songs.\n                "),o("div",{staticClass:"selectables"},e._l(e.displayedSongs,(function(t){return o("div",{key:t.name+t.transpo,staticClass:"selectable",on:{click:function(n){return e.selectSong(t)},mouseover:function(n){return e.selectSong(t)},mouseout:function(t){return e.unselectSong()}}},[e._v("\n                        "+e._s(t.name)+" ("+e._s(t.transpo)+")\n                    ")])})),0)]):e._e()]),e._v(" "),o("div",{staticClass:"zone play-options"},[o("SelectVolume"),e._v(" "),o("SelectSamplesBank")],1),e._v(" "),o("div",{staticClass:"zone"},[o("HandpanDiagrams",{attrs:{handpans:e.handpans,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})],1)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"config"},[t("div",{staticClass:"toggle"},[this._v("☰")])])}],!1,null,"209675e1",null));t.default=C.exports}}]);