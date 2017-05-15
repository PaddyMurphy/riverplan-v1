webpackJsonp([1],{160:function(e,t,a){"use strict";var i=a(57),r=a(447),s=a(432),n=a.n(s),o=a(436),l=a.n(o);i.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Map",component:n.a},{path:"/riverflow",name:"Riverflow",component:l.a}]})},161:function(e,t,a){a(413);var i=a(25)(a(180),a(439),null,null);e.exports=i.exports},179:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(57),r=a(161),s=a.n(r),n=a(160);i.default.config.productionTip=!1,new i.default({el:"#app",router:n.a,template:"<App/>",components:{App:s.a}})},180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(57),r=a(410),s=(a.n(r),a(408)),n=a.n(s),o=a(409),l=a.n(o),c=a(434),d=a.n(c);i.default.use(n.a,{locale:l.a}),t.default={name:"app",components:{navbar:d.a}}},181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(450),r=a.n(i);t.default={name:"conditions",data:function(){return{condition:void 0}},props:{latestCfs:{type:String,required:!0}},watch:{latestCfs:"displayConditions"},methods:{displayConditions:function(){var e=parseInt(this.latestCfs,10);return 0===e?this.condition=r.a.flow0:e>0&&e<50?this.condition=r.a.flow1:e>=50&&e<100?this.condition=r.a.flow2:e>=100&&e<300?this.condition=r.a.flow3:e>=300&&e<600?this.condition=r.a.flow4:e>=600&&e<2e3?this.condition=r.a.flow5:e>=2e3&&(this.condition=r.a.flow6),this.condition}}}},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(194),r=a.n(i);t.default={name:"graph",data:function(){return{graphBaseUrl:"//waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS",graphImage:void 0,loadingGraph:!1}},props:{radioDateType:{type:String,required:!0},selected:{type:String,required:!0},startDate:{required:!0},endDate:{type:[String,Date],required:!0},graphType:{type:String,required:!1},period:{type:Number,required:!0,default:7}},watch:{selected:"displayGraph"},methods:{displayGraph:function(){var e,t=this,a=t.startDate,i=t.endDate,s=t.graphBaseUrl+"&parm_cd="+t.graphType+"&site_no="+t.selected;"object"===r()(t.startDate)&&(a=t.startDate.toISOString().split("T")[0]),"object"===r()(t.endDate)&&(i=t.endDate.toISOString().split("T")[0]),"period"===t.radioDateType&&(s=s+"&period="+t.period),"date"===t.radioDateType&&a&&(s=s+"&begin_date="+a+"&end_date="+i),e='<img src="'+s+'"class="graph" alt="USGS Water-data graph">',t.graphImage=void 0,t.loadingGraph=!0;var n=new Image;return n.src=s,n.onload=function(a){t.graphImage=e,t.loadingGraph=!1},e}}}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(191),r=a.n(i);t.default={name:"history",data:function(){return{title:"History",history:[],STORAGE_KEY:"riverflow-history"}},props:{latestCfs:{type:String,required:!0},siteName:{type:String,required:!0},latestTime:{type:String,required:!0},latestDate:{type:String,required:!0}},mounted:function(){this.fetchHistory()},watch:{latestCfs:"addHistory"},methods:{fetchHistory:function(){var e=this;return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY)||"[]").forEach(function(t,a){e.history.push(t)}),this.history},saveHistory:function(e){window.localStorage.setItem(this.STORAGE_KEY,r()(e))},addHistory:function(){this.history.length>=7&&this.history.pop(),this.history.unshift({cfs:this.latestCfs,name:this.siteName,time:this.latestTime,date:this.latestDate}),this.saveHistory(this.history)}}}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"intro",props:{period:{type:Number,required:!0}}}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(449),r=a.n(i),s=a(433),n=a.n(s),o=a(423),l=a.n(o);t.default={name:"map",data:function(){return{key:"AIzaSyA1fV5RautETdjZsTMpClgqHKIgMa8WXPI",center:{lat:31.96,lng:-99.9},mapStyles:r.a.styles,mapType:"terrain",kmlLayer:"http://waterwatch.usgs.gov/?m=real&w=kml&regions=tx",kmlData:void 0,showKmlLayer:!0,zoom:6,showKml:!0,showSatellite:!1,selected:""}},mounted:function(){var e=this;e.$once(e.loadGoogleMaps())},components:{"map-controls":n.a},watch:{$route:function(e,t){},showKmlLayer:function(){this.showKmlLayer?this.displayKmlLayer():this.hideKmlLayer()}},methods:{toggleKml:function(){this.showKmlLayer=!this.showKmlLayer},displayKmlLayer:function(){var e=this;e.kmlData=new window.google.maps.KmlLayer({url:e.kmlLayer,map:window.gmap,suppressInfoWindows:!1,preserveViewport:!0}),e.kmlData.addListener("click",function(e){var t=e.featureData;console.log(t)})},hideKmlLayer:function(){this.kmlData.setMap(null)},toggleSatellite:function(){console.log("toggleSatellite"),window.gmap.setMapTypeId("satellite")},loadGoogleMaps:function(){var e=this;window.google||l()({key:e.key}).then(function(t){e.initMap()}).catch(function(e){console.error(e)})},initMap:function(){var e=this;window.gmap=new window.google.maps.Map(e.$el.querySelector("#gmap"),{zoom:e.zoom,center:e.center,styles:e.mapStyles,mapTypeId:e.mapType}),e.showKmlLayer&&e.displayKmlLayer()},setGoogleMapEvents:function(){}}}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(451),r=a.n(i);t.default={name:"mapcontrols",data:function(){return{riverBasins:r.a.data,selected:""}},props:{showKmlLayer:{type:Boolean,required:!0}},computed:{buttonText:function(){return this.showKmlLayer?"Hide":"Show"}},mounted:function(){},methods:{toggleKml:function(){this.$emit("toggleKml")},selectBasin:function(e){var t=e.target[e.target.selectedIndex].value;t&&console.log(t)}}}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navbar",data:function(){return{title:"Riverplan",tagline:"Texas Edition"}},computed:{isDev:function(){return 0}}}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(190),r=(a.n(i),a(116)),s=a.n(r),n=a(425),o=a.n(n),l=a(424),c=a.n(l);t.default={name:"photos",props:{siteName:{type:String,required:!1}},data:function(){return{apiKey:"6c6069e831fb567b86c7d9b75c82624f",flickrTags:void 0,flickrUrl:"https://api.flickr.com/services/rest/?&method=flickr.photos.search",loading:!1,disableButton:!1,numberOfImages:10,galleryImages:[]}},watch:{siteName:function(){this.clearGallery(),this.getFlickrImages()}},methods:{buildFlickrTags:function(){return this.flickrTags=this.siteName.replace(/:.*/,"").trim(),this.flickrTags=this.flickrTags.replace(/\s+/g,"+"),this.flickrTags=this.flickrTags.replace(",+","+"),this.flickrTags="kayak,Texas,"+this.flickrTags,this.flickrTags},getFlickrImages:function(){var e=this;this.loading=!0,s.a.get(e.flickrUrl,{params:{api_key:e.apiKey,format:"json",nojsoncallback:1,per_page:e.numberOfImages,sort:"interestingness-asc",tag_mode:"all",tags:e.buildFlickrTags()}}).then(function(t){e.loading=!1,e.buildImages(t.data.photos.photo)}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message})},buildImages:function(e){var t,a,i=this,r=document.querySelector(".gallery"),s=document.createDocumentFragment();e.forEach(function(e,r){i.photoURL="//farm"+e.farm+".static.flickr.com/"+e.server+"/"+e.id+"_"+e.secret,i.square=i.photoURL+"_q.jpg",i.photoLarge=i.photoURL+"_b.jpg",i.photoOriginal=i.photoURL+"_o.jpg",i.photoHref="//www.flickr.com/photos/"+e.owner+"/"+e.id,i.galleryImages.push({src:i.photoLarge,title:e.title,w:0,h:0}),t=new Image,t.src=i.square,t.setAttribute("itemprop","thumbnail"),t.title=e.title,t.height=150,t.width=150,t.dataset.index=r,a=document.createElement("a"),a.rel="prefetch",a.href=i.photoLarge,a.onclick=i.initGallery,a.appendChild(t),s.appendChild(a)}),r.appendChild(s),this.disableButton=!0},clearGallery:function(){this.$el.querySelector(".gallery").innerHTML="",this.disableButton=!1,this.galleryImages=[]},initGallery:function(e){e.preventDefault();var t=this,a=document.querySelector(".pswp"),i={index:e.target.dataset.index,showHideOpacity:!0},r=new o.a(a,c.a,t.galleryImages,i);r.listen("gettingData",function(e,t){if(t.w<1||t.h<1){var a=new Image;a.onload=function(){t.w=this.width,t.h=this.height,r.invalidateCurrItems(),r.updateSize(!0)},a.src=t.src}}),r.init(),r.goTo(parseInt(e.target.dataset.index,10))}}}},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(116),r=a.n(i),s=a(452),n=a.n(s),o=a(431),l=a.n(o),c=a(428),d=a.n(c),u=a(435),p=a.n(u),v=a(429),h=a.n(v),f=a(430),g=a.n(f);t.default={name:"riverflow",data:function(){return{backgroundColor:void 0,baseMapUrl:"//maps.google.com/?q=",endDate:(new Date).toISOString().split("T")[0],error:void 0,graphType:"00060",latestCfs:"",latestDate:"",latestTime:"",latitude:void 0,loading:!1,loadingEl:document.querySelector(".loading"),longitude:void 0,mapUrl:void 0,options:n.a.data,period:7,radioDateType:"period",selected:"selectRiver",selectedText:"Select a river",showSearchOptions:!1,siteName:"",startDate:void 0,valueBaseUrl:"https://waterservices.usgs.gov/nwis/iv/"}},components:{intro:l.a,conditions:d.a,photos:p.a,graph:h.a,history:g.a},mounted:function(){"RiverflowUrl"===this.$route.name&&this.setSelectedRiver(this.$route.params.river)},watch:{selected:"getUsgsData",loading:"toggleLoading"},methods:{setSelectedRiver:function(e){var t=this;this.options.forEach(function(a,i){t.formatRiverName(a.text)===e&&(t.selected=a.value)})},changeRiver:function(e){var t=this;this.selected=e,this.options.forEach(function(a,i){a.value===e&&(t.selectedText=a.text)}),t.$el.querySelector(".el-input__inner").value=""},toggleSearchOptions:function(){this.showSearchOptions?this.showSearchOptions=!1:this.showSearchOptions=!0},getUsgsData:function(){var e=this;"selectRiver"!==this.selected&&this.selected&&(this.loading=!0,r.a.get(this.valueBaseUrl,{params:{parameterCd:this.graphType,sites:this.selected,format:"json",period:"P1D"}}).then(function(t){e.loading=!1,t.data.value.timeSeries[0]?(e.displayUsgsData(t.data.value.timeSeries[0]),e.error=null):e.error="no river data available"}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message}))},displayUsgsData:function(e){var t=e.values,a=t[0].value.reverse()[0],i=new Date(a.dateTime);this.latestCfs=a.value,this.siteName=e.sourceInfo.siteName,this.latitude=e.sourceInfo.geoLocation.geogLocation.latitude,this.longitude=e.sourceInfo.geoLocation.geogLocation.longitude,this.latestDate=i.toDateString(),this.latestTime=i.toLocaleTimeString(),this.mapUrl=this.baseMapUrl+this.latitude+",+"+this.longitude},formatRiverName:function(e){var t=e;return t=t.toLowerCase(),t=t.replace(/ /g,""),t=t.replace(/(\r\n|\n|\r)/gm,""),t=t.replace(/-(\S*)-/g,"")},selectBackground:function(e){this.backgroundColor=e.target.value,document.body.style.backgroundColor=e.target.value;var t=this.backgroundColor.substring(1),a=parseInt(t,16),i=a>>16&255,r=a>>8&255,s=a>>0&255,n=.2126*i+.7152*r+.0722*s;document.body.style.color=n<128?"#fff":"#000"},toggleLoading:function(){var e=!0===this.loading?"flex":"none";this.loadingEl.style.display=e}}}},410:function(e,t){},411:function(e,t){},412:function(e,t){},413:function(e,t){},414:function(e,t){},415:function(e,t){},416:function(e,t){},417:function(e,t){},418:function(e,t){},419:function(e,t){},420:function(e,t){},428:function(e,t,a){a(420);var i=a(25)(a(181),a(446),"data-v-ee2651e4",null);e.exports=i.exports},429:function(e,t,a){a(412);var i=a(25)(a(182),a(438),null,null);e.exports=i.exports},430:function(e,t,a){a(419);var i=a(25)(a(183),a(445),null,null);e.exports=i.exports},431:function(e,t,a){a(418);var i=a(25)(a(184),a(444),"data-v-a9cd4af4",null);e.exports=i.exports},432:function(e,t,a){a(417);var i=a(25)(a(185),a(443),"data-v-8a4acc14",null);e.exports=i.exports},433:function(e,t,a){a(411);var i=a(25)(a(186),a(437),"data-v-2316abcc",null);e.exports=i.exports},434:function(e,t,a){a(416);var i=a(25)(a(187),a(442),"data-v-631fdf66",null);e.exports=i.exports},435:function(e,t,a){a(415);var i=a(25)(a(188),a(441),"data-v-528bab57",null);e.exports=i.exports},436:function(e,t,a){a(414);var i=a(25)(a(189),a(440),null,null);e.exports=i.exports},437:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-controls"},[a("button",{staticClass:"btn-kml",on:{click:function(t){t.preventDefault(),e.toggleKml(t)}}},[e._v(e._s(e.buttonText)+" Gauges")]),e._v(" "),e.riverBasins?a("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?a:a[0]},e.selectBasin]}},[a("option",{attrs:{value:""}},[e._v("River basins")]),e._v(" "),e._l(e.riverBasins,function(t){return a("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})],2):e._e()])},staticRenderFns:[]}},438:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"graph-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loadingGraph,expression:"loadingGraph"}],staticClass:"graph-loading"},[e._v("\n    Loading graph...\n  ")]),e._v(" "),a("div",{staticClass:"graph-image",domProps:{innerHTML:e._s(e.graphImage)}})])},staticRenderFns:[]}},439:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),e._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[]}},440:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"riverflow"},[a("div",{staticClass:"select-river-wrapper"},[a("el-select",{staticClass:"select-river",attrs:{placeholder:e.selectedText},on:{change:e.changeRiver},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.text,disabled:""===e.value}})})),e._v(" "),a("el-collapse",{staticClass:"graph-options"},[a("el-collapse-item",{attrs:{title:"Search options",name:"1"}},[a("div",{staticClass:"graph-controls-menu"},[a("el-radio",{attrs:{id:"radio-dates-period",label:"period"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by number of days")]),e._v(" "),a("el-input-number",{directives:[{name:"show",rawName:"v-show",value:"period"===e.radioDateType,expression:"radioDateType === 'period'"}],staticClass:"graph-period",attrs:{type:"number",min:7,max:90},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}}),e._v(" "),a("el-radio",{attrs:{id:"radio-dates-date",label:"date"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by a date range")])],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("start date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-start",attrs:{type:"date",placeholder:"Pick a start date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("end date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-end",attrs:{type:"date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)])],1)],1),e._v(" "),e.error?a("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),a("div",{staticClass:"condition-wrapper"},[e.latestCfs?a("div",{staticClass:"latest-cfs"},[a("div",{staticClass:"rate-group"},[a("span",{staticClass:"rate"},[e._v(e._s(e.latestCfs))]),e._v(" "),a("abbr",{staticClass:"rate-abbr",attrs:{title:"cubic feet per second"}},[e._v("CFS")])]),e._v(" "),e.mapUrl?a("a",{attrs:{href:e.mapUrl}},[e._v("Location of guage")]):e._e(),e._v(" "),a("div",{staticClass:"time-group"},[e.latestDate?a("span",[e._v(e._s(e.latestDate)+" at "+e._s(e.latestTime))]):e._e()])]):e._e(),e._v(" "),a("conditions",{attrs:{latestCfs:e.latestCfs}}),e._v(" "),e.latestCfs?e._e():a("intro",{attrs:{period:e.period}}),e._v(" "),a("history",{attrs:{latestCfs:e.latestCfs,siteName:e.siteName,latestTime:e.latestTime,latestDate:e.latestDate}})],1),e._v(" "),a("graph",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{radioDateType:e.radioDateType,selected:e.selected,startDate:e.startDate,endDate:e.endDate,graphType:e.graphType,period:e.period}}),e._v(" "),a("photos",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{siteName:e.selectedText}}),e._v(" "),a("footer",[e._v("\n    created by "),a("a",{attrs:{href:"//mountaindrawn.com"}},[e._v("mountaindrawn.com")]),e._v(" "),a("input",{staticClass:"color-picker",attrs:{type:"color",value:"#E0E4CC"},on:{change:e.selectBackground}}),e._v(" "),a("small",{staticClass:"color-value"},[e._v(e._s(e.backgroundColor))])])],1)},staticRenderFns:[]}},441:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photos"},[a("div",{staticClass:"gallery"})])}]}},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",[e._m(0),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("p",{staticClass:"tagline"},[e._v(e._s(e.tagline))])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("\n      Map\n    ")]),e._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/riverflow"}},[e._v("\n      Riverflow\n    ")])],1)}]}},443:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map"},[a("map-controls",{attrs:{showKmlLayer:e.showKmlLayer},on:{toggleSatellite:e.toggleSatellite,toggleKml:e.toggleKml}}),e._v(" "),a("div",{attrs:{id:"gmap"}})],1)},staticRenderFns:[]}},444:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("p",[e._v("Select a river to get the latest flow rate, a graph of flow history, and photos. Search by a period of days from today (default is "),a("span",{staticClass:"period"},[e._v(e._s(e.period))]),e._v(") or a date range.")])])},staticRenderFns:[]}},445:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.history.length>1,expression:"history.length > 1"}],staticClass:"history"},[a("h4",{staticClass:"history-title"},[e._v(e._s(e.title))]),e._v(" "),a("ul",{staticClass:"time-history"},e._l(e.history,function(t){return a("li",[a("b",[e._v(e._s(t.cfs))]),e._v(" "),a("abbr",{staticClass:"cfs",attrs:{title:"cubic feet per second"}},[e._v("cfs")]),e._v(" "),a("span",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("small",[e._v(e._s(t.date)+" at "+e._s(t.time))])])}))])},staticRenderFns:[]}},446:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.condition,expression:"condition"}],staticClass:"conditions"},[e._v("\n  "+e._s(e.condition)+"\n")])},staticRenderFns:[]}},449:function(e,t){e.exports={styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]}},450:function(e,t){e.exports={flow0:"Sorry but this river is bone dry. Try a spring fed river like the San Marcos til we get more rain.",flow1:"The river is pretty much just a trickle right. Not much good for floating at the moment but a good rain should bring it up",flow2:"It's barely moving but it should be floatable in kayaks or tubes. Be prepared to drag bottom in spots though.",flow3:"This is a pretty leisurely flow but still fun. You shouldn't have any problems scraping bottom in canoes at this level",flow4:"Now we're talking! The river is flowing pretty good but not too dangerous. If the graph shows a sharp increase over the past week it may still be rising.",flow5:"The flow is moving now! Unless this is a large volume river like the Colorado or Rio Grande you can expect some really fast moving water.",flow6:"DANGER! Possible death awaits! Unless this is a large volume river like the Colorado you may drown. Check with a local outfitter for more details on conditions before heading out."}},451:function(e,t){e.exports={data:[{name:"Arkansas River Basin",description:"",categories:["fishing","camping"]},{name:"Brazos River Basin",description:"",categories:["fishing","camping","whitewater"]},{name:"Coastal Basins",description:"",categories:["fishing","camping"]},{name:"Colorado River Basin",description:"",categories:["fishing","camping"]},{name:"Cypress River Basin",description:"",categories:["fishing","camping"]},{name:"Guadalupe River Basin",description:"",categories:["fishing","camping","whitewater"]},{name:"Lavaca River Basin",description:"",categories:["fishing","camping"]},{name:"Neches River Basin",description:"",categories:["fishing","camping","whitewater"]},{name:"Nueces River Basin",description:"",categories:["fishing","camping","whitewater"]},{name:"Red River Basin",description:"",categories:["fishing","camping"]},{name:"Rio Grande",description:"",categories:["fishing","camping"]},{name:"Sabine River Basin",description:"",categories:["fishing","camping"]},{name:"San Antonio River Basin",description:"",categories:["fishing","camping"]},{name:"San Jacinto River Basin",description:"",categories:["fishing","camping"]},{name:"Sulfer River Basin",description:"",categories:["fishing","camping"]},{name:"Trinity River Basin",description:"",categories:["fishing","camping"]}]}},452:function(e,t){e.exports={data:[{text:"Select a river",value:"selectRiver"},{text:"-- Brazos River Basin --",value:""},{text:"Brazos River : Palo Pinto",value:"08089000"},{text:"Brazos River : Glen Rose",value:"08091000"},{text:"Brazos River : Waco",value:"08096500"},{text:"Brazos River : Bryan",value:"08108700"},{text:"Lampasas River : Kempner",value:"08103800"},{text:"Lampasas River : Ding Dong",value:"08103940"},{text:"Lampasas River : Belton",value:"08104100"},{text:"-- Colorado River Basin --",value:""},{text:"Barton Springs",value:"08155500"},{text:"Barton Creek : Above Barton Springs",value:"08155400"},{text:"Barton Creek : Loop 360",value:"08155300"},{text:"Barton Creek : Lost Ck Blvd",value:"08155240"},{text:"Barton Creek : SH 71",value:"08155200"},{text:"Colorado River : Austin",value:"08158000"},{text:"Colorado River : Bastrop",value:"08159200"},{text:"Onion Creek : Hwy 183",value:"08159000"},{text:"Llano River : Llano",value:"08151500"},{text:"Llano River : Mason",value:"08150700"},{text:"Llano River : Junction",value:"08150000"},{text:"San Saba River : Menard",value:"08144500"},{text:"San Saba River : San Saba",value:"08146000"},{text:"-- Guadalupe River Basin --",value:""},{text:"Guadalupe River : Spring Branch",value:"08167500"},{text:"Guadalupe River : Sattler",value:"08167800"},{text:"Comal River : New Braunfels",value:"08168500"},{text:"Guadalupe River : FM 1117 nr Seguin",value:"08169792"},{text:"Guadalupe River : Gonzales",value:"08173900"},{text:"San Marcos River : San Marcos",value:"08170500"},{text:"San Marcos River : Luling",value:"08172000"},{text:"Blanco River : Wimberley",value:"08171000"},{text:"Blanco River : Kyle",value:"08171300"},{text:"-- Nueces River Basin --",value:""},{text:"Nueces River : Laguna",value:"08190000"},{text:"Nueces River : Uvalde",value:"08192000"},{text:"Frio River : Concan",value:"08195000"},{text:"-- Rio Grande Basin --",value:""},{text:"Rio Grande : Castolon",value:"08374550"},{text:"Rio Grande : Big Bend",value:"08375300"},{text:"Pecos River : Pecos",value:"08419000"},{text:"Pecos River : Girvin",value:"08446500"},{text:"-- San Antonio River Basin --",value:""},{text:"Medina River : Patterson Road",value:"0817887350"},{text:"Medina River : Bandera",value:"08178880"},{text:"San Antonio River : Goliad",value:"08188500"}]}}},[179]);
//# sourceMappingURL=app.14f3cb01071627b39561.js.map