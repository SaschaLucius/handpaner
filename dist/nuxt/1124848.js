(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{190:function(e,t,n){var content=n(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("32fba36c",content,!0,{sourceMap:!1})},191:function(e,t,n){var content=n(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("125fcb5f",content,!0,{sourceMap:!1})},192:function(e,t,n){var content=n(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("31c7977f",content,!0,{sourceMap:!1})},218:function(e,t,n){"use strict";n(190)},219:function(e,t,n){(t=n(33)(!1)).push([e.i,".handpans[data-v-efdc19ac]{display:flex;flex-wrap:wrap}[data-v-efdc19ac] .handpan-shape{width:200px;height:200px;border-radius:200px}[data-v-efdc19ac] .handpan-shape.is-bottom{margin-left:25px;width:150px;height:150px;border-radius:150px}[data-v-efdc19ac] .ding{width:76px;height:76px;margin-left:-38px;margin-top:-38px}[data-v-efdc19ac] .gu,[data-v-efdc19ac] .note span{width:40px;height:40px;margin-left:-20px;margin-top:-20px}[data-v-efdc19ac] .note{top:90px;padding-left:175px}[data-v-efdc19ac] .is-bottom .note{top:65px;padding-left:125px}[data-v-efdc19ac] .inside{width:24px;height:24px;border-radius:24px}[data-v-efdc19ac] .ding .inside{width:32px;height:32px;border-radius:32px}",""]),e.exports=t},220:function(e,t,n){"use strict";n(191)},221:function(e,t,n){(t=n(33)(!1)).push([e.i,".form-line[data-v-b509fde6]{display:flex;align-items:center;height:30px}.form-line>span[data-v-b509fde6]{width:60px;padding-right:10px;text-align:right}.form-line select[data-v-b509fde6]{min-width:50px}.form-line input[type=text][data-v-b509fde6],.form-line select[data-v-b509fde6]{height:100%;box-sizing:border-box}.form-line select[data-v-b509fde6]:not(:first-of-type){margin-left:5px}.form-line[data-v-b509fde6]:not(:first-child){margin-top:5px}",""]),e.exports=t},222:function(e,t,n){"use strict";n(192)},223:function(e,t,n){(t=n(33)(!1)).push([e.i,".chord-type[data-v-376b2d56],.panscales[data-v-376b2d56],.scales[data-v-376b2d56],.selectables[data-v-376b2d56]{display:flex;flex-wrap:wrap;margin-top:4px}.chord-type-name[data-v-376b2d56]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-376b2d56],.panscale[data-v-376b2d56],.scale[data-v-376b2d56],.selectable[data-v-376b2d56]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.panscale[data-v-376b2d56],.scale[data-v-376b2d56]{margin-top:4px}.chord.highlight[data-v-376b2d56],.panscale.highlight[data-v-376b2d56],.scale.highlight[data-v-376b2d56],.selectable.highlight[data-v-376b2d56]{background:rgba(0,255,204,.50196)!important}.tabs[data-v-376b2d56]{display:flex;align-items:center}.tab[data-v-376b2d56]{position:relative;width:150px;padding:8px 0;font-weight:700;text-align:center;cursor:pointer;border-bottom:1px solid #666;margin-bottom:-1px}.tab.selected[data-v-376b2d56]{background:#fff;border:1px solid #666;border-bottom:none}.tab[data-v-376b2d56]:not(.selected):hover{color:#0cc}.tab-content[data-v-376b2d56]{background:#fff;border:1px solid #666;min-height:130px;padding:8px}.zone[data-v-376b2d56]{margin-top:16px}.delete[data-v-376b2d56]{position:absolute;right:2px;top:2px;cursor:pointer;padding:6px;margin-left:16px}.delete[data-v-376b2d56]:hover{color:red}.play-options[data-v-376b2d56]{display:flex;justify-content:center}.play-options>*[data-v-376b2d56]{margin:0 8px}.play-full[data-v-376b2d56]{margin-top:10px;text-align:center}",""]),e.exports=t},226:function(e,t,n){"use strict";n.r(t);n(47),n(48),n(176),n(16),n(36),n(23),n(10),n(35),n(175);var o=n(177),d=n(1),l=n(82),c=n(178),r=n(193),h=d.a.extend({components:{HandpanDiagram:r.a},props:{handpans:Array,selectedChord:Object,selectedPanScale:Object,selectedScale:Object}}),f=(n(218),n(15)),v=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"handpans"},e._l(e.handpans,(function(t){return n("HandpanDiagram",{key:t.id,attrs:{handpan:t.handpanModel,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})})),1)}),[],!1,null,"efdc19ac",null).exports,m=n(116),y=n(179),S=(n(117),d.a.extend({props:{handpansUser:Array,displayedHandpanId:String},data:function(){return{isLoaded:!1,ignoreNextHashChange:!1,ALL_DINGS:y.a,inputAbsNotation:"",inputDing:"",inputPanscale:""}},computed:{showRelative:{get:function(){return this.$store.state.selection.showRelative},set:function(e){this.$store.commit("selection/setShowRelative",e)}},relativeNoteBase:{get:function(){return this.$store.state.selection.relativeNoteBase},set:function(e){this.$store.commit("selection/setRelativeNoteBase",e)}},allGenericNamesSorted:function(){var e=(this.isLoaded?Object(y.b)(this.$store.state.options.customPanScales):[]).map((function(e){return e.genericName}));return Object(o.a)(new Set(e)).sort((function(a,b){return a.localeCompare(b)}))},playPath:function(){return this.displayedHandpan?"play/#"+this.displayedHandpan.handpanModel.getDefinition().replace(/ /g,"-"):"play/"},uniqueNotesAllPans:function(){return Object(o.a)(new Set(Array.from(this.handpansUser.flatMap((function(e){return e.handpanModel.getUniqueNotesNames()})))))},displayedHandpan:function(){var e=this;return this.handpansUser.find((function(t){return t.id===e.displayedHandpanId}))}},created:function(){var e=this;setTimeout((function(){e.isLoaded=!0}),1)},methods:{WTF:function(e){},dingChanged:function(){try{this.$store.commit("selection/loadFromDefinition",{id:this.displayedHandpan.id,definition:this.inputAbsNotation,dingWanted:this.inputDing}),this.inputAbsNotation=this.displayedHandpan.handpanModel.getDefinition(),this.selectionChanged()}catch(e){console.log("err",e)}},modelNameChanged:function(){var e=this;if(this.inputPanscale&&this.inputDing){var t=Object(y.b)(this.$store.state.options.customPanScales).find((function(t){return t.genericName===e.inputPanscale&&t.getDingString()===e.inputDing}));t&&(this.inputAbsNotation=t.getDefinition(),this.$store.commit("selection/loadFromDefinition",{id:this.displayedHandpan.id,definition:this.inputAbsNotation}),this.selectionChanged())}},absChanged:function(){try{this.$store.commit("selection/loadFromDefinition",{id:this.displayedHandpan.id,definition:this.inputAbsNotation}),this.inputDing=this.displayedHandpan.handpanModel.getDingString(),this.inputPanscale=this.recognisedPanScaleName(),this.selectionChanged()}catch(e){console.log("err",e)}},saveModel:function(){var e=prompt("Model name");e&&this.$store.commit("options/addCustomPanScale",{name:e,definition:this.inputAbsNotation})},selectionChanged:function(){this.$emit("selectionChanged")},recognisedPanScaleName:function(){var e=this,t=Object(y.b)(this.$store.state.options.customPanScales).find((function(t){return t.getDefinition()===e.displayedHandpan.handpanModel.getDefinition()}));return t?t.genericName:""}},watch:{displayedHandpanId:function(){this.inputAbsNotation=this.displayedHandpan.handpanModel.getDefinition(),this.inputDing=this.displayedHandpan.handpanModel.getDingString(),this.inputPanscale=this.recognisedPanScaleName()}}})),_=(n(220),Object(f.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-line"},[n("span",[e._v("Ding")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDing,expression:"inputDing"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDing=t.target.multiple?n:n[0]},e.dingChanged]}},e._l(e.ALL_DINGS,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0)]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Model")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputPanscale,expression:"inputPanscale"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputPanscale=t.target.multiple?n:n[0]},e.modelNameChanged]}},e._l(e.allGenericNamesSorted,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n            ")])})),0)]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Notes")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{type:"text",size:"30",placeholder:"Ex: C/ D E F G A B C"},domProps:{value:e.inputAbsNotation},on:{keyup:e.absChanged,input:function(t){t.target.composing||(e.inputAbsNotation=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Relative")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.relativeNoteBase,expression:"relativeNoteBase"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.relativeNoteBase=t.target.multiple?n:n[0]}}},e._l(e.uniqueNotesAllPans,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showRelative,expression:"showRelative"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showRelative)?e._i(e.showRelative,null)>-1:e.showRelative},on:{change:function(t){var n=e.showRelative,o=t.target,d=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.showRelative=n.concat([null])):l>-1&&(e.showRelative=n.slice(0,l).concat(n.slice(l+1)))}else e.showRelative=d}}}),e._v(" show relative")])]),e._v(" "),e.inputPanscale?e._e():n("button",{on:{click:function(t){return e.saveModel()}}},[e._v("💾 Save model")]),e._v(" "),n("div",{staticClass:"play-full"},[n("nuxt-link",{attrs:{to:e.playPath}},[e._v("Play in full page")])],1)])}),[],!1,null,"b509fde6",null).exports),x=d.a.extend({components:{HandpanDiagrams:v,HandpanSelection:_},data:function(){return{displayMode:"panScales",displayedHandpanId:"",notes:[],abs:"",scales:l.g,notesAll:l.c,chords:{},selectedPanScale:null,selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[],displayedScales:[],displayedChords:[],displayedPanScales:[],displayedSongs:[],ignoreNextHashChange:!1,isPlaying:!1,isLoaded:!1}},created:function(){var e=this;this.handpansUser=[],setTimeout((function(){e.isLoaded=!0;var t=e.$store.state.selection.handpansDefinition;e.$nuxt.$route.hash?e.loadHandpansFromHash():t&&t.length?(e.loadHandpansFromDefinitions(t),e.updateHash()):(e.handpansUser=[].concat(Object(o.a)(e.handpansUser),[new y.d("D/ A C D E F G A C")]),e.displayedHandpanId=e.handpansUser[0].id,e.genScalesAndChordsAllPans())}),1)},computed:{handpansUser:{get:function(){return this.$store.state.selection.handpansUser},set:function(e){this.$store.commit("selection/setHandpansUser",e)}},selectedSong:{get:function(){return this.$store.state.selection.selectedSong},set:function(e){this.$store.commit("selection/setSelectedSong",e)}},showBebop:function(){return this.$store.state.options.showBebop},uniqueSongs:function(){return Object(o.a)(new Set(Array.from(this.displayedSongs.map((function(e){return e.name})))))},displayedScalesSorted:function(){return this.displayedScales.sort((function(a,b){return b.totalNotes-a.totalNotes}))},uniqueNotesAllPans:function(){return Object(o.a)(new Set(Array.from(this.handpansUser.flatMap((function(e){return e.handpanModel.getUniqueNotesNames()})))))}},watch:{$route:function(){this.ignoreNextHashChange?this.ignoreNextHashChange=!1:(this.handpansUser=[],this.loadHandpansFromHash())}},mounted:function(){this.$store.commit("selection/setHighlightedNotes",[])},beforeDestroy:function(){this.isPlaying=!1,this.$store.commit("player/setRecordPlaying",null)},methods:{onSelectionChanged:function(){this.isPlaying=!1,this.$store.commit("player/setRecordPlaying",null),this.genScalesAndChordsAllPans(),this.updateHash()},resetSelection:function(){this.unselectPanScale(),this.unselectScale(),this.unselectChord(),this.unselectSong()},loadHandpansFromHash:function(){var e=this.$nuxt.$route.hash.substr(1).split("_");this.loadHandpansFromDefinitions(e.map((function(e){return e.replace(/-/g," ")})))},loadHandpansFromDefinitions:function(e){var t=this;this.handpansUser=[],e.forEach((function(e){t.handpansUser=[].concat(Object(o.a)(t.handpansUser),[new y.d(e)])})),this.displayedHandpanId=this.handpansUser[0].id,this.genScalesAndChordsAllPans()},removeHandpanId:function(e,t){e.stopPropagation(),this.handpansUser=this.handpansUser.filter((function(e){return e.id!==t})),t===this.displayedHandpanId&&(this.displayedHandpanId=this.handpansUser[0].id),this.genScalesAndChordsAllPans(),this.updateHash()},addHandpan:function(){var e=new y.d("C/ C");this.handpansUser=[].concat(Object(o.a)(this.handpansUser),[e]),this.displayedHandpanId=e.id,this.genScalesAndChordsAllPans(),this.updateHash()},updateHash:function(){var e=this.$nuxt.$route.hash,t="#"+this.handpansUser.map((function(e){return e.handpanModel.getDefinition().replace(/ /g,"-")})).join("_");"-"!==t[t.length-1]&&(t+="-"),t!==e&&(this.ignoreNextHashChange=!0,this.$nuxt.$router.replace(t))},genScalesAndChordsAllPans:function(){this.displayedScales=Object(c.f)(this.handpansUser,{showBebop:this.showBebop});var e=Object(y.b)(this.$store.state.options.customPanScales);this.displayedPanScales=Object(c.e)(e,this.handpansUser),this.displayedChords=Object(c.d)(this.uniqueNotesAllPans),this.displayedSongs=Object(c.g)(this.handpansUser)},selectHandpanId:function(e){this.displayedHandpanId=e},selectPanScale:function(e){var t;e.name===(null===(t=this.selectedPanScale)||void 0===t?void 0:t.name)?this.unselectPanScale():this.selectedPanScale=e},unselectPanScale:function(){this.selectedPanScale=null},selectScale:function(e){e.id===this.selectedScale.id?this.unselectScale():this.selectedScale=e},unselectScale:function(){this.selectedScale={}},stopSong:function(){this.isPlaying=!1,this.$store.commit("player/setRecordPlaying",null)},playSong:function(){this.isPlaying=!0,this.$store.commit("player/setRecordPlaying",Object(m.parseRecord)(this.selectedSong.recording))},selectSong:function(e){null!==this.selectedSong&&e===this.selectedSong?this.unselectSong():(this.$store.commit("selection/setHighlightedNotes",e.notes),this.selectedSong=e)},unselectSong:function(){this.$store.commit("selection/setHighlightedNotes",[]),this.selectedSong=null},selectChord:function(e,t){t.label===this.selectedChord.label?this.unselectChord():this.selectedChord={label:t.label,root:t.root,type:e.type,noteNames:[].concat(Object(o.a)(t.notes.map((function(e){return Object(c.i)(t.root,e)}))),Object(o.a)(t.notes.map((function(e){return Object(c.h)(t.root,e)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),C=(n(222),Object(f.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"tabs",on:{click:function(t){return e.resetSelection()}}},[e._l(e.handpansUser,(function(t,o){return n("div",{key:t.id,staticClass:"tab",class:{selected:t.id===e.displayedHandpanId},on:{click:function(n){return e.selectHandpanId(t.id)}}},[e._v("\n            Pan n°"+e._s(o+1)+"\n            "),e.handpansUser.length>1?n("span",{staticClass:"delete",on:{click:function(n){return e.removeHandpanId(n,t.id)}}},[e._v("×")]):e._e()])})),e._v(" "),n("div",{staticClass:"tab",on:{click:function(t){return e.addHandpan()}}},[e._v("+")])],2),e._v(" "),n("div",{staticClass:"tab-content",on:{click:function(t){return e.resetSelection()}}},[n("HandpanSelection",{attrs:{handpansUser:e.handpansUser,displayedHandpanId:e.displayedHandpanId},on:{selectionChanged:e.onSelectionChanged}})],1),e._v(" "),e.displayedHandpanId?n("div",[n("div",{staticClass:"zone",on:{click:function(t){return e.resetSelection()}}},[n("div",{staticClass:"tabs"},[n("div",{staticClass:"tab",class:{selected:"panScales"===e.displayMode},on:{click:function(t){e.displayMode="panScales"}}},[e._v("\n                    Models\n                ")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"scales"===e.displayMode},on:{click:function(t){e.displayMode="scales"}}},[e._v("Scales")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"chords"===e.displayMode},on:{click:function(t){e.displayMode="chords"}}},[e._v("Chords")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"songs"===e.displayMode},on:{click:function(t){e.displayMode="songs"}}},[e._v("Songs")])]),e._v(" "),"panScales"===e.displayMode?n("div",{staticClass:"tab-content"},[n("div",{staticClass:"panscales"},[e._l(e.displayedPanScales,(function(t){return n("div",{key:t.name,staticClass:"panscale",class:{highlight:e.selectedPanScale&&t.name===e.selectedPanScale.name},on:{click:function(n){return n.stopPropagation(),e.selectPanScale(t)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedPanScales.length?e._e():n("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"scales"===e.displayMode?n("div",{staticClass:"tab-content"},[n("div",{staticClass:"scales"},[e._l(e.displayedScalesSorted,(function(t){return n("div",{key:t.id,staticClass:"scale",class:{highlight:t.id===e.selectedScale.id},on:{click:function(n){return n.stopPropagation(),e.selectScale(t)}}},[e._v("\n                        "+e._s(t.tonic)+" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedScales.length?e._e():n("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"chords"===e.displayMode?n("div",{staticClass:"tab-content"},e._l(e.displayedChords,(function(t){return n("div",{key:t.type,staticClass:"chord-type"},[n("div",{staticClass:"chord-type-name"},[e._v(e._s(t.type))]),e._v(" "),e._l(t.chords,(function(o){return n("div",{key:o.label,staticClass:"chord",class:{highlight:o.label===e.selectedChord.label},domProps:{innerHTML:e._s(o.label)},on:{click:function(n){return n.stopPropagation(),e.selectChord(t,o)}}})}))],2)})),0):e._e(),e._v(" "),"songs"===e.displayMode?n("div",{staticClass:"tab-content"},[e._v("\n                "+e._s(e.uniqueSongs.length)+" different songs.\n                "),n("div",{staticClass:"selectables"},e._l(e.displayedSongs,(function(t){return n("div",{key:t.name+t.transpo,staticClass:"selectable",class:{highlight:e.selectedSong&&t.name===e.selectedSong.name&&t.transpo===e.selectedSong.transpo},on:{click:function(n){return n.stopPropagation(),e.selectSong(t)}}},[t.recording?[e._v("♫")]:e._e(),e._v(e._s(t.name)+" ("+e._s(t.transpo)+")\n                    ")],2)})),0),e._v(" "),e.isPlaying?n("button",{on:{click:function(t){return t.stopPropagation(),e.stopSong()}}},[e._v("Stop")]):e._e(),e._v(" "),e.selectedSong&&e.selectedSong.recording&&!e.isPlaying?n("button",{on:{click:function(t){return t.stopPropagation(),e.playSong()}}},[e._v("Play")]):e._e()]):e._e()]),e._v(" "),n("div",{staticClass:"zone"},[n("HandpanDiagrams",{attrs:{handpans:e.handpansUser,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})],1)]):e._e()])}),[],!1,null,"376b2d56",null));t.default=C.exports}}]);