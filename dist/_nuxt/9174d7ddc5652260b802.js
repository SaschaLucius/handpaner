(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(t,e,n){var content=n(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("6bb9df01",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var o=n(164);n.n(o).a},185:function(t,e,n){(e=n(44)(!1)).push([t.i,".play-options[data-v-65944566]{display:flex;justify-content:center}.play-options>*[data-v-65944566]{margin:0 8px}[data-v-65944566] .handpan-diagram{--deg:90deg;width:100vw;height:calc(100vh - 90px);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-wrap:wrap}@media (orientation:portrait){[data-v-65944566] .handpan-diagram{--size:98vw}}@media (orientation:landscape){[data-v-65944566] .handpan-diagram{--size:calc(98vh - 90px)}}@media (orientation:portrait){[data-v-65944566] .handpan-diagram.hasBottom{--size:calc((98vh - 90px)/2)}}@media (orientation:landscape){[data-v-65944566] .handpan-diagram.hasBottom{--size:calc((98vh - 90px)/2)}}[data-v-65944566] .handpan-shape{width:var(--size);height:var(--size);border-radius:var(--size)}[data-v-65944566] .ding,[data-v-65944566] .gu,[data-v-65944566] .note span{width:calc(var(--size)*0.23);height:calc(var(--size)*0.23);margin-left:calc(var(--size)*-0.1);margin-top:calc(var(--size)*-0.1);font-size:calc(var(--size)*0.05)}[data-v-65944566] .note{top:calc(var(--size)*0.432);padding-left:calc(var(--size)*0.432*2)}",""]),t.exports=e},194:function(t,e,n){"use strict";n.r(e);n(63);var o=n(1),d=n(171),r=n(172),l=n(173),c=n(158),h=o.a.extend({components:{HandpanDiagram:d.a,SelectVolume:r.a,SelectSamplesBank:l.a},layout:"empty",head:function(){return{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"}]}},data:function(){return{handpan:null,selectedChord:{label:"",root:"",type:"",noteNames:[]}}},computed:{volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}},mounted:function(){if(this.handpan=new c.a,this.$nuxt.$route.hash){var t=this.$nuxt.$route.hash.substr(1);this.handpan.loadFromAbsNotation(t.replace(/-/g," "))}else this.handpan.loadFromAbsNotation("D/ G A C D E F G A C D")}}),v=(n(184),n(14)),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"play-options"},[e("SelectVolume"),this._v(" "),e("SelectSamplesBank")],1),this._v(" "),this.handpan?e("HandpanDiagram",{attrs:{handpan:this.handpan,selectedChord:this.selectedChord,selectedPanScale:null,selectedScale:null}}):this._e()],1)}),[],!1,null,"65944566",null);e.default=component.exports}}]);