webpackJsonp([1],{160:function(e,t,a){"use strict";var i=a(57),r=a(448),n=a(433),o=a.n(n),s=a(437),l=a.n(s);i.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Map",component:o.a},{path:"/river/",name:"MapRiver",component:o.a},{path:"/river/:river",name:"MapUrl",component:o.a},{path:"/riverflow",name:"Riverflow",component:l.a},{path:"/riverflow/:river",name:"RiverflowUrl",component:l.a}]})},161:function(e,t,a){a(412);var i=a(25)(a(180),a(439),null,null);e.exports=i.exports},179:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(57),r=a(161),n=a.n(r),o=a(160);i.default.config.productionTip=!1,new i.default({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})},180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(57),r=a(410),n=(a.n(r),a(408)),o=a.n(n),s=a(409),l=a.n(s),c=a(435),d=a.n(c);i.default.use(o.a,{locale:l.a}),t.default={name:"app",components:{navbar:d.a}}},181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(451),r=a.n(i);t.default={name:"conditions",data:function(){return{condition:void 0}},props:{latestCfs:{type:String,required:!0}},watch:{latestCfs:"displayConditions"},methods:{displayConditions:function(){var e=parseInt(this.latestCfs,10);return 0===e?this.condition=r.a.flow0:e>0&&e<50?this.condition=r.a.flow1:e>=50&&e<100?this.condition=r.a.flow2:e>=100&&e<300?this.condition=r.a.flow3:e>=300&&e<600?this.condition=r.a.flow4:e>=600&&e<2e3?this.condition=r.a.flow5:e>=2e3&&(this.condition=r.a.flow6),this.condition}}}},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(194),r=a.n(i);t.default={name:"graph",data:function(){return{graphBaseUrl:"//waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS",graphImage:void 0,loadingGraph:!1}},props:{radioDateType:{type:String,required:!0},selected:{type:String,required:!0},startDate:{required:!0},endDate:{type:[String,Date],required:!0},graphType:{type:String,required:!1},period:{type:Number,required:!0,default:7}},watch:{selected:"displayGraph"},methods:{displayGraph:function(){var e,t=this,a=t.startDate,i=t.endDate,n=t.graphBaseUrl+"&parm_cd="+t.graphType+"&site_no="+t.selected;"object"===r()(t.startDate)&&(a=t.startDate.toISOString().split("T")[0]),"object"===r()(t.endDate)&&(i=t.endDate.toISOString().split("T")[0]),"period"===t.radioDateType&&(n=n+"&period="+t.period),"date"===t.radioDateType&&a&&(n=n+"&begin_date="+a+"&end_date="+i),e='<img src="'+n+'"class="graph" alt="USGS Water-data graph">',t.graphImage=void 0,t.loadingGraph=!0;var o=new Image;return o.src=n,o.onload=function(a){t.graphImage=e,t.loadingGraph=!1},e}}}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(191),r=a.n(i);t.default={name:"history",data:function(){return{title:"History",history:[],STORAGE_KEY:"riverflow-history"}},props:{latestCfs:{type:String,required:!0},siteName:{type:String,required:!0},latestTime:{type:String,required:!0},latestDate:{type:String,required:!0}},mounted:function(){this.fetchHistory()},watch:{latestCfs:"addHistory"},methods:{fetchHistory:function(){var e=this;return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY)||"[]").forEach(function(t,a){e.history.push(t)}),this.history},saveHistory:function(e){window.localStorage.setItem(this.STORAGE_KEY,r()(e))},addHistory:function(){this.history.length>=7&&this.history.pop(),this.history.unshift({cfs:this.latestCfs,name:this.siteName,time:this.latestTime,date:this.latestDate}),this.saveHistory(this.history)}}}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"intro",props:{period:{type:Number,required:!0}}}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(450),r=a.n(i),n=a(452),o=a.n(n),s=a(434),l=a.n(s),c=a(424),d=a.n(c);t.default={name:"mapview",data:function(){return{center:{lat:31.96,lng:-99.9},currentRiver:void 0,key:"AIzaSyA1fV5RautETdjZsTMpClgqHKIgMa8WXPI",kmlData:void 0,kmlLayer:"http://waterwatch.usgs.gov/?m=real&w=kml&regions=tx",mapRivers:o.a.data,mapStyles:r.a.styles,mapType:"terrain",selected:"",showKmlLayer:!0,zoom:6}},computed:{},mounted:function(){var e=this;"MapUrl"===this.$route.name&&this.setCurrentRiver(this.$route.params.river),e.$once(e.loadGoogleMaps())},components:{"map-river-info":l.a},watch:{$route:function(e,t){},currentRiver:"navigateRiver",showKmlLayer:function(){this.showKmlLayer?this.displayKmlLayer():this.hideKmlLayer()}},methods:{setCurrentRiver:function(e){this.currentRiver=e},navigateRiver:function(){this.$router.push("/river/"+this.currentRiver)},toggleKml:function(){this.showKmlLayer=!this.showKmlLayer},displayKmlLayer:function(){var e=this;e.kmlData=new window.google.maps.KmlLayer({url:e.kmlLayer,map:window.gmap,suppressInfoWindows:!1,preserveViewport:!0})},displayGeoJson:function(){var e=this;e.mapRivers.forEach(function(e,t){e.url&&window.gmap.data.loadGeoJson(e.url)}),window.gmap.data.setStyle({strokeColor:"#46BCEC",strokeWeight:2,zIndex:0}),window.gmap.data.addListener("mouseover",function(t){var a=t.feature.getProperty("id");window.gmap.data.revertStyle(),window.gmap.data.overrideStyle(t.feature,{strokeWeight:5}),e.setCurrentRiver(a)}),window.gmap.data.addListener("mouseout",function(e){}),window.gmap.data.addListener("click",function(t){var a=t.feature.getProperty("id"),i=new window.google.maps.LatLngBounds;e.processPoints(t.feature.getGeometry(),i.extend,i),window.gmap.fitBounds(i),e.setCurrentRiver(a)})},processPoints:function(e,t,a){var i=this;e instanceof window.google.maps.LatLng?t.call(a,e):e instanceof window.google.maps.Data.Point?t.call(a,e.get()):e.getArray().forEach(function(e){i.processPoints(e,t,a)})},hideKmlLayer:function(){this.kmlData.setMap(null)},loadGoogleMaps:function(){var e=this;window.google||d()({key:e.key}).then(function(t){e.initMap()}).catch(function(e){console.error(e)})},initMap:function(){var e=this;window.gmap=new window.google.maps.Map(e.$el.querySelector("#gmap"),{zoom:e.zoom,center:e.center,styles:e.mapStyles,mapTypeId:e.mapType,fullscreenControl:!1}),e.displayGeoJson(),e.showKmlLayer&&(e.displayKmlLayer(),e.createKmlButton())},createKmlButton:function(){function e(e,a){var i=document.createElement("div");i.id="btn-toggle-stations",i.title="Click to toggle the guages",e.appendChild(i);var r=document.createElement("div");r.id="text-toggle-stations",r.innerHTML="Toggle Gauges",i.appendChild(r),window.google.maps.event.addDomListener(i,"click",function(){t.toggleKml()})}var t=this,a=document.createElement("div");new e(a,window.gmap);a.index=1,window.gmap.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(a)},setGoogleMapEvents:function(){}}}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mapriverinfo",data:function(){return{name:"About Riverplan",description:"Planning tool for kayaking and canoeing trips. Use the map to check usgs guages and select rivers for more information. Coming features: plot and save routes, map new routes...",flowMin:void 0,flowMax:void 0,flowOptimum:void 0,length:void 0}},props:{currentRiver:{type:String,required:!1},mapRivers:{type:Array,required:!0}},watch:{currentRiver:"getRiverInfo"},mounted:function(){},methods:{getRiverInfo:function(e){var t=this;t.mapRivers.forEach(function(a,i){a.id===e&&(t.name=a.name,t.description=a.description,t.flowMin=a.flowMin,t.flowMax=a.flowMax,t.flowOptimum=a.flowOptimum,t.length=a.length)})}}}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navbar",data:function(){return{title:"Riverplan",tagline:"Texas Edition"}},computed:{isDev:function(){return 0}}}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(190),r=(a.n(i),a(116)),n=a.n(r),o=a(426),s=a.n(o),l=a(425),c=a.n(l);t.default={name:"photos",props:{siteName:{type:String,required:!1}},data:function(){return{apiKey:"6c6069e831fb567b86c7d9b75c82624f",flickrTags:void 0,flickrUrl:"https://api.flickr.com/services/rest/?&method=flickr.photos.search",loading:!1,disableButton:!1,numberOfImages:10,galleryImages:[]}},watch:{siteName:function(){this.clearGallery(),this.getFlickrImages()}},methods:{buildFlickrTags:function(){return this.flickrTags=this.siteName.replace(/:.*/,"").trim(),this.flickrTags=this.flickrTags.replace(/\s+/g,"+"),this.flickrTags=this.flickrTags.replace(",+","+"),this.flickrTags="kayak,Texas,"+this.flickrTags,this.flickrTags},getFlickrImages:function(){var e=this;this.loading=!0,n.a.get(e.flickrUrl,{params:{api_key:e.apiKey,format:"json",nojsoncallback:1,per_page:e.numberOfImages,sort:"interestingness-asc",tag_mode:"all",tags:e.buildFlickrTags()}}).then(function(t){e.loading=!1,e.buildImages(t.data.photos.photo)}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message})},buildImages:function(e){var t,a,i=this,r=document.querySelector(".gallery"),n=document.createDocumentFragment();e.forEach(function(e,r){i.photoURL="//farm"+e.farm+".static.flickr.com/"+e.server+"/"+e.id+"_"+e.secret,i.square=i.photoURL+"_q.jpg",i.photoLarge=i.photoURL+"_b.jpg",i.photoOriginal=i.photoURL+"_o.jpg",i.photoHref="//www.flickr.com/photos/"+e.owner+"/"+e.id,i.galleryImages.push({src:i.photoLarge,title:e.title,w:0,h:0}),t=new Image,t.src=i.square,t.setAttribute("itemprop","thumbnail"),t.title=e.title,t.height=150,t.width=150,t.dataset.index=r,a=document.createElement("a"),a.rel="prefetch",a.href=i.photoLarge,a.onclick=i.initGallery,a.appendChild(t),n.appendChild(a)}),r.appendChild(n),this.disableButton=!0},clearGallery:function(){this.$el.querySelector(".gallery").innerHTML="",this.disableButton=!1,this.galleryImages=[]},initGallery:function(e){e.preventDefault();var t=this,a=document.querySelector(".pswp"),i={index:e.target.dataset.index,showHideOpacity:!0},r=new s.a(a,c.a,t.galleryImages,i);r.listen("gettingData",function(e,t){if(t.w<1||t.h<1){var a=new Image;a.onload=function(){t.w=this.width,t.h=this.height,r.invalidateCurrItems(),r.updateSize(!0)},a.src=t.src}}),r.init(),r.goTo(parseInt(e.target.dataset.index,10))}}}},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(116),r=a.n(i),n=a(453),o=a.n(n),s=a(432),l=a.n(s),c=a(429),d=a.n(c),u=a(436),h=a.n(u),p=a(430),f=a.n(p),v=a(431),g=a.n(v);t.default={name:"riverflow",data:function(){return{backgroundColor:void 0,baseMapUrl:"//maps.google.com/?q=",endDate:(new Date).toISOString().split("T")[0],error:void 0,graphType:"00060",latestCfs:"",latestDate:"",latestTime:"",latitude:void 0,loading:!1,loadingEl:document.querySelector(".loading"),longitude:void 0,mapUrl:void 0,options:o.a.data,period:7,radioDateType:"period",selected:"selectRiver",selectedText:"Select a river",selectedId:void 0,showSearchOptions:!1,siteName:"",startDate:void 0,valueBaseUrl:"https://waterservices.usgs.gov/nwis/iv/"}},components:{intro:l.a,conditions:d.a,photos:h.a,graph:f.a,history:g.a},mounted:function(){"RiverflowUrl"===this.$route.name&&this.setSelectedRiver(this.$route.params.river)},watch:{selected:"getUsgsData",loading:"toggleLoading"},methods:{setSelectedRiver:function(e){var t=this;this.options.forEach(function(a,i){t.formatRiverName(a.text)===e&&(t.selected=a.value)})},changeRiver:function(e){var t=this;this.selected=e,this.options.forEach(function(a,i){a.value===e&&(t.selectedText=a.text)}),t.$el.querySelector(".el-input__inner").value=""},toggleSearchOptions:function(){this.showSearchOptions?this.showSearchOptions=!1:this.showSearchOptions=!0},getUsgsData:function(){var e=this;"selectRiver"!==this.selected&&this.selected&&(this.loading=!0,r.a.get(this.valueBaseUrl,{params:{parameterCd:this.graphType,sites:this.selected,format:"json",period:"P1D"}}).then(function(t){e.loading=!1,t.data.value.timeSeries[0]?(e.displayUsgsData(t.data.value.timeSeries[0]),e.error=null):e.error="no river data available"}).catch(function(t){console.error(t.message),e.loading=!1,e.error=t.message}))},displayUsgsData:function(e){var t=this,a=e.values,i=a[0].value.reverse()[0],r=new Date(i.dateTime);t.latestCfs=i.value,t.siteName=e.sourceInfo.siteName,t.latitude=e.sourceInfo.geoLocation.geogLocation.latitude,t.longitude=e.sourceInfo.geoLocation.geogLocation.longitude,t.latestDate=r.toDateString(),t.latestTime=r.toLocaleTimeString(),t.selectedId=t.formatRiverName(t.selectedText),t.$router.push("/riverflow/"+t.selectedId),t.mapUrl=t.baseMapUrl+t.latitude+",+"+t.longitude},formatRiverName:function(e){var t=e;return t=t.toLowerCase(),t=t.replace(/ /g,""),t=t.replace(/(\r\n|\n|\r)/gm,""),t=t.replace(/-(\S*)-/g,"")},selectBackground:function(e){this.backgroundColor=e.target.value,document.body.style.backgroundColor=e.target.value;var t=this.backgroundColor.substring(1),a=parseInt(t,16),i=a>>16&255,r=a>>8&255,n=a>>0&255,o=.2126*i+.7152*r+.0722*n;document.body.style.color=o<128?"#fff":"#000"},toggleLoading:function(){var e=!0===this.loading?"flex":"none";this.loadingEl.style.display=e}}}},410:function(e,t){},411:function(e,t){},412:function(e,t){},413:function(e,t){},414:function(e,t){},415:function(e,t){},416:function(e,t){},417:function(e,t){},418:function(e,t){},419:function(e,t){},420:function(e,t){},421:function(e,t){},429:function(e,t,a){a(421);var i=a(25)(a(181),a(447),"data-v-ee2651e4",null);e.exports=i.exports},430:function(e,t,a){a(411);var i=a(25)(a(182),a(438),null,null);e.exports=i.exports},431:function(e,t,a){a(420);var i=a(25)(a(183),a(446),null,null);e.exports=i.exports},432:function(e,t,a){a(419);var i=a(25)(a(184),a(445),"data-v-a9cd4af4",null);e.exports=i.exports},433:function(e,t,a){a(417),a(418);var i=a(25)(a(185),a(444),"data-v-8a4acc14",null);e.exports=i.exports},434:function(e,t,a){a(413);var i=a(25)(a(186),a(440),"data-v-4dbe54b4",null);e.exports=i.exports},435:function(e,t,a){a(416);var i=a(25)(a(187),a(443),"data-v-631fdf66",null);e.exports=i.exports},436:function(e,t,a){a(415);var i=a(25)(a(188),a(442),"data-v-528bab57",null);e.exports=i.exports},437:function(e,t,a){a(414);var i=a(25)(a(189),a(441),null,null);e.exports=i.exports},438:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"graph-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loadingGraph,expression:"loadingGraph"}],staticClass:"graph-loading"},[e._v("\n    Loading graph...\n  ")]),e._v(" "),a("div",{staticClass:"graph-image",domProps:{innerHTML:e._s(e.graphImage)}})])},staticRenderFns:[]}},439:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),e._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[]}},440:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-river-info"},[a("h3",[e._v(e._s(e.name))]),e._v(" "),e.flowMin?a("div",{staticClass:"flow-rates"},[a("p",[e._v("Minimum flow: "+e._s(e.flowMin))]),e._v(" "),a("p",[e._v("Maximum flow: "+e._s(e.flowMax))]),e._v(" "),a("p",[e._v("Optimum flow: "+e._s(e.flowOptimum))])]):e._e(),e._v(" "),e.length?a("p",[e._v("Length: "+e._s(e.length))]):e._e(),e._v(" "),a("p",[e._v(e._s(e.description))])])},staticRenderFns:[]}},441:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"riverflow"},[a("div",{staticClass:"select-river-wrapper"},[a("el-select",{staticClass:"select-river",attrs:{placeholder:e.selectedText},on:{change:e.changeRiver},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.text,disabled:""===e.value}})})),e._v(" "),a("el-collapse",{staticClass:"graph-options"},[a("el-collapse-item",{attrs:{title:"Search options",name:"1"}},[a("div",{staticClass:"graph-controls-menu"},[a("el-radio",{attrs:{id:"radio-dates-period",label:"period"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by number of days")]),e._v(" "),a("el-input-number",{directives:[{name:"show",rawName:"v-show",value:"period"===e.radioDateType,expression:"radioDateType === 'period'"}],staticClass:"graph-period",attrs:{type:"number",min:7,max:90},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}}),e._v(" "),a("el-radio",{attrs:{id:"radio-dates-date",label:"date"},model:{value:e.radioDateType,callback:function(t){e.radioDateType=t},expression:"radioDateType"}},[e._v("Search by a date range")])],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("start date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-start",attrs:{type:"date",placeholder:"Pick a start date"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),e._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"date"===e.radioDateType,expression:"radioDateType === 'date'"}],staticClass:"graph-control-label"},[a("span",{staticClass:"label-name"},[e._v("end date")]),e._v(" "),a("el-date-picker",{staticClass:"graph-end",attrs:{type:"date"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)])],1)],1),e._v(" "),e.error?a("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),a("div",{staticClass:"condition-wrapper"},[e.latestCfs?a("div",{staticClass:"latest-cfs"},[a("div",{staticClass:"rate-group"},[a("span",{staticClass:"rate"},[e._v(e._s(e.latestCfs))]),e._v(" "),a("abbr",{staticClass:"rate-abbr",attrs:{title:"cubic feet per second"}},[e._v("CFS")])]),e._v(" "),e.mapUrl?a("a",{attrs:{href:e.mapUrl}},[e._v("Location of guage")]):e._e(),e._v(" "),a("div",{staticClass:"time-group"},[e.latestDate?a("span",[e._v(e._s(e.latestDate)+" at "+e._s(e.latestTime))]):e._e()])]):e._e(),e._v(" "),a("conditions",{attrs:{latestCfs:e.latestCfs}}),e._v(" "),e.latestCfs?e._e():a("intro",{attrs:{period:e.period}}),e._v(" "),a("history",{attrs:{latestCfs:e.latestCfs,siteName:e.siteName,latestTime:e.latestTime,latestDate:e.latestDate}})],1),e._v(" "),a("graph",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{radioDateType:e.radioDateType,selected:e.selected,startDate:e.startDate,endDate:e.endDate,graphType:e.graphType,period:e.period}}),e._v(" "),a("photos",{directives:[{name:"show",rawName:"v-show",value:e.selectedText,expression:"selectedText"}],attrs:{siteName:e.selectedText}}),e._v(" "),a("footer",[e._v("\n    created by "),a("a",{attrs:{href:"//mountaindrawn.com"}},[e._v("mountaindrawn.com")]),e._v(" "),a("input",{staticClass:"color-picker",attrs:{type:"color",value:"#E0E4CC"},on:{change:e.selectBackground}}),e._v(" "),a("small",{staticClass:"color-value"},[e._v(e._s(e.backgroundColor))])])],1)},staticRenderFns:[]}},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"photos"},[a("div",{staticClass:"gallery"})])}]}},443:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",[e._m(0),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),a("p",{staticClass:"tagline"},[e._v(e._s(e.tagline))])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("\n      Map\n    ")]),e._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/riverflow"}},[e._v("\n      Riverflow\n    ")])],1)}]}},444:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-view"},[e._m(0),e._v(" "),a("div",{staticClass:"info-container"},[a("map-river-info",{attrs:{mapRivers:e.mapRivers,currentRiver:e.currentRiver}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map-container"},[a("div",{attrs:{id:"gmap"}})])}]}},445:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("p",[e._v("Select a river to get the latest flow rate, a graph of flow history, and photos. Search by a period of days from today (default is "),a("span",{staticClass:"period"},[e._v(e._s(e.period))]),e._v(") or a date range.")])])},staticRenderFns:[]}},446:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.history.length>1,expression:"history.length > 1"}],staticClass:"history"},[a("h4",{staticClass:"history-title"},[e._v(e._s(e.title))]),e._v(" "),a("ul",{staticClass:"time-history"},e._l(e.history,function(t){return a("li",[a("b",[e._v(e._s(t.cfs))]),e._v(" "),a("abbr",{staticClass:"cfs",attrs:{title:"cubic feet per second"}},[e._v("cfs")]),e._v(" "),a("span",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),a("small",[e._v(e._s(t.date)+" at "+e._s(t.time))])])}))])},staticRenderFns:[]}},447:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.condition,expression:"condition"}],staticClass:"conditions"},[e._v("\n  "+e._s(e.condition)+"\n")])},staticRenderFns:[]}},450:function(e,t){e.exports={styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}]}},451:function(e,t){e.exports={flow0:"Sorry but this river is bone dry. Try a spring fed river like the San Marcos til we get more rain.",flow1:"The river is pretty much just a trickle right. Not much good for floating at the moment but a good rain should bring it up",flow2:"It's barely moving but it should be floatable in kayaks or tubes. Be prepared to drag bottom in spots though.",flow3:"This is a pretty leisurely flow but still fun. You shouldn't have any problems scraping bottom in canoes at this level",flow4:"Now we're talking! The river is flowing pretty good but not too dangerous. If the graph shows a sharp increase over the past week it may still be rising.",flow5:"The flow is moving now! Unless this is a large volume river like the Colorado or Rio Grande you can expect some really fast moving water.",flow6:"DANGER! Possible death awaits! Unless this is a large volume river like the Colorado you may drown. Check with a local outfitter for more details on conditions before heading out."}},452:function(e,t){e.exports={data:[{id:"brazos",name:"Brazos River",flowMax:"5000 cfs",flowMin:"200 cfs",flowOptimum:"500 - 3,000 cfs",description:"The Brazos River forms at the confluence off its Double Mountain Fork, beginning in Lubbock County, and Salt Fork, beginning in Crosby County, then merging in eastern Stonewall County near the Haskell County Line. Navigable flows begin below the Clear Fork confluence in Young County just southwest of Graham. The river is a long, slow flatwater stream that flows south by southeast to the Gulf of Mexico in Brazoria County, near Houston. While the river runs for about 840 miles, this report will detail those navigable sections where people can go to paddle, particularly below Possum Kingdom Dam in Palo Pinto County, Highway 180 near Mineral Wells in Palo Pinto County to FM 1189 near Dennis in Parker County, Mitchell Ford to Brazos Point Crossing in Somervell County, Lake Whitney in Hill County to Waco in McLennan County and the Hidalgo Falls section near Navasota in Brazos and Washington Counties.",categories:["fishing","camping","whitewater"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/0aa90a6d7641b37b6be0828301dc9ff7/raw/f090af09d4b545462ef696648782d6079063da57/map-brazos.geojson"},{id:"canadian",name:"Canadian River",description:"eh?",categories:["fishing","camping"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/dd75a1d64bdc902c8786dd3d420160a9/raw/af12a6c147ed31e6446e6eb3e9ef69fded0c855c/map-canadian.geojson"},{id:"colorado",name:"Colorado River",flowMax:"5000 cfs",flowMin:"200 cfs",flowOptimum:"500 - 3,000 cfs",description:"The Colorado River rises in Dawson County on the Texas-New Mexico border and flows for about 600 miles to the mouth at the Gulf of Mexico at Matagorda Bay through the rolling prairie of the high plains of West Texas, down through the Hill Country, which begins in San Saba County with its gorgeous canyons, then through the Balcones Escarpment near Austin and finally through the lower Hill Country below Austin to the and coastal lowlands that are parts of Texas topography. Along the way is a river that has a huge drainage basin including several other major rivers and many creeks, draws, sloughs and other tributaries, all feeding water into the river on its way down south. Above Austin, the river is dammed to form the series of Highland Lakes - Buchanan, Inks, LBJ, Marble Falls, Travis, Austin and Town Lake.",categories:["fishing","camping"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/276ceb4accf0bc7cab23c4565b027306/raw/4fe6f6e78cd425bfbefd19171dcc164856f3d462/map-colorado.geojson"},{id:"guadalupe",name:"Guadalupe River",flowMax:"5000 cfs",flowMin:"150 cfs",flowOptimum:"500-2,000 cfs",description:"The Guadalupe is the gem of Texas rivers, offering everything from tame flatwater to challenging Class III rapids and water falls. It is a spring-fed river that flows over a bed of limestone from about 20 miles west of Hunt, in Kerr County, down to a rocky bed toward Canyon Lake in Comal County over a distance of about 82 miles, then another 280-300 miles to San Antonio Bay on the Gulf of Mexico. This report covers the river from its headwaters down to Loop 337 in New Braunfels, including the parts most generally used for recreational activities such as canoeing, kayaking, rafting and tubing on Texas' finest whitewater river.",categories:["fishing","camping","whitewater"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/4fffd9f80ece7fa27314e8e0fda6aeda/raw/2e6f8443e3e26f7a63a6ca58ca4ab03bc0da761b/map-guadalupe.geojson"},{id:"lavaca",name:"Lavaca River",description:"",categories:["fishing","camping"],length:""},{id:"medina",name:"Medina River",flowMax:"1000 cfs",flowMin:"125 cfs",flowOptimum:"250 - 700 cfs",description:"The Medina River is a short, narrow, beautiful river that is reminescent of the Upper Guadalupe because of the physical nature of its topography. Starting in northwest Bandera County, it winds about 116 miles through Bandera, Medina and Bexar Counties to its confluence with the San Antonio River just southeast of the City of San Antonio. The Medina is a narrow river averaging about 30-40 feet wide and is lined with Bald Cypress trees, though not nearly as many as before the flood of 2002. Nearby, Live Oak and rugged Cedar are abundant. The Medina cuts through limestone bluffs and outcroppings with abundant free-flowing springs to feed the river, especially after heavy rains. With few prominent hazards to fear almost anybody can enjoy this gorgeous river as long as they are prepared for a very tight, technical stream with sharp turns and debris piles. Care should be taken as to which reach of the river to paddle based upon skills and experience.",categories:["fishing","camping"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/b8b96d94719eea52efcacabe9c229d88/raw/531fa37dab6bdaefc646f9d12f4998c95ea0c606/map-medina.geojson"},{id:"neches",name:"Neches River",flowMax:"10,000 cfs",flowMin:"500 cfs",flowOptimum:"1,000 - 5,000  cfs",description:"Deep East Texas is known for its flatwater rivers flowing through tall pine forests, dense riverbank vegetation, strainers created by downed trees and dead-end channels that deceive paddlers.The Neches is an historic river in Texas lore that begins in Van Zandt County and flows through Smith, Henderson, Cherokee, Anderson, Houston, Angelina, Jasper, Tyler, Hardin and Orange Counties on its 416 mile journey to the Gulf of Mexico at Port Neches. With a drainage area of 10,011 square miles the Neches River dumps about 6 million acre-feet of water into the Gulf of Mexico each year. Lake Palestine in Anderson, Henderson and Smith Counties and B.A. Steinhagen Lake in Jasper and Tyler Counties are the two major reservoirs created by damming the Neches. The river has adequate flow for paddle trips most of the time, though the flow may be slower and more shallow than normal during droughts or long periods without recent heavy local rainfall. Logjams can be an obstruction to paddling on many parts of the Neches, particularly on the upper sections where the river flows through Davy Crockett National Forest and the Big Thicket National Preserve.",categories:["fishing","camping","whitewater"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/29f0ce0c0b52eb8ed5cecad740dea9e3/raw/f6285214fe9037a547ea05f3f63c920fc84c7dab/map-neches.geojson"},{id:"nueces",name:"Nueces River",flowMax:"1,500 cfs",flowMin:"125 cfs",flowOptimum:"250 - 700  cfs",description:"The Spanards gave the Nueces River its name, which means 'nuts', because of all the pecan trees found lining its banks and adjacent land, or perhaps because you would have to be nuts to try paddling it most of the time. To say it is not a perennial stream would be an understatement, but after a good rain in its watershed the Nueces is a fantastic and very remote river to paddle in a canoe or kayak. The headwaters of the Nueces River rise from springs in northwestern Real County and northeastern Edwards County and flow some 315 miles or more through Edwards, Uvalde, Zavala, Dimmit, La Salle, McMullen, Live Oak, San Patricio and Nueces Counties into the Gulf of Mexico. Above the first FM 335 crossing and below State Highway 55 in Uvalde County the river is generally too shallow to paddle except during flood stage, when it becomes dangerous. In the Three Rivers area, where the Nueces reaches the confluence of the Atascosa and Frio Rivers, the flow will increase significantly for some recreational uses, but the river takes on the characteristics of a coastal waterway as it makes its way through the coastal plains of far South Texas. Lake Corpus Christi is about 40 miles upriver from Nueces Bay. Because of river conditions below SH 55, this report will cover the upper 98.6 miles starting at FM 18 in Edwards County very near the Real County Line and ending at US Highway 57 just east of La Pryor in Zavalla County.",categories:["fishing","camping","whitewater"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/70d83341ac14aad182c71e0a8fdd9542/raw/110b5877ecc15c12bd4fc76e7f615a70cee051aa/map-nueces.geojson"},{id:"red",name:"Red River",description:"",categories:["fishing","camping"],length:""},{id:"rio-grande",name:"Rio Grande River",flowMax:"1,200 cfs",flowMin:"200 cfs",flowOptimum:"300 - 1,000  cfs",description:"The Rio Grande, or Rio Bravo del Norte, as it is known in Mexico, is the most remote river in Texas, and is one of the very few true wilderness trips available in the United States (even though it is really in the Country of Texas!) Flowing through the Texas-Mexico desert, the river offers spectacular views of high mountains, the desert floor, wild animals, beautiful sunrises and sunsets, breathtaking flora and fauna and just about everything except signs of civilization. In many cases, the only people you will see are in your own group.",categories:["fishing","camping"],length:"1,885 miles",url:"https://gist.githubusercontent.com/PaddyMurphy/80689f61e28f0371dcf227593f9e684b/raw/54b6c0dd0af0c73e9a42e4f1e4b32efc789580f9/map-rio-grande.geojson"},{id:"sabine",name:"Sabine River",flowMax:"5,000 cfs",flowMin:"500 cfs",flowOptimum:"1,000 - 2,000  cfs",description:"The Sabine River in East Texas forms where the South Fork, starting in Collin County, and the Cowleech Fork of Hunt County, merge in southern Hunt County before beginning a trek of about 555 miles. The river flows through the piney woods of deep East Texas and forms the partial boundary between Texas and Louisiana before reaching its mouth on Sabine Lake at the Gulf of Mexico. 'Sabine' is the Spanish name for 'Cypress', and describes the character of the river as it flows between banks lined with tall, huge Bald Cypress trees and the Cypress swamps of East Texas. The Sabine is a flatwater river that pumps about 6.8 million acre-feet into the Gulf, and is the single largest volume river in Texas in terms of its discharge. The water has the tannic acid brown color that is common in East Texas rivers and streams.",categories:["fishing","camping"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/8955783f0ec85b3c3adab940e7f1ed05/raw/d81fa113dca9f073b7134d566d3aa0b8f087101b/map-sabine.geojson"},{id:"san-antonio",name:"San Antonio River",flowMax:"1,500 cfs",flowMin:"250 cfs",flowOptimum:"450 - 1,000  cfs",description:"Forming at Blue Hole Spring on the campus of the University of the Incarnate Word inside the city limits of its namesake in Bexar County, the San Antonio River rises in southcentral Texas as a coastal plains flatwater stream, then gently meanders its way southeast through Wilson, Karnes, Goliad, Victoria, Refugio and calhoun Counties some 236 miles to its confluence with the Guadalupe River near San Antonio Bay on the Gulf of Mexico. The river is fed by numerous springs, as well as inflow from the Medina River, Cibolo Creek and several lesser creeks and streams that provide a near-constant navigable level. A couple of scenic waterfalls are near Falls City between Floresville and Hobson, but other than that the river is flat without rapids of any significance. The major obstacles to paddling the San antonio River are deadfall logjams and the steep, often muddy banks that contain the river. Surprisingly, even in low-water periods the San Antonio River seems to find a way to produce a generous current that helps paddlers move downriver.",categories:["fishing","camping"],length:"",url:"https://gist.githubusercontent.com/PaddyMurphy/260e7512a9c3b48f5e4c65075b75c14a/raw/7fe4e158d3a9547991846d44c0021b83e4c4a6b3/map-san-antonio.geojson"},{id:"san-jacinto",name:"San Jacinto River",description:"",categories:["fishing","camping"],length:""},{id:"sulfer",name:"Sulfer River",description:"",categories:["fishing","camping"],length:""},{id:"trinity",name:"Trinity River",description:"",categories:["fishing","camping"],length:""}]}},453:function(e,t){e.exports={data:[{text:"Select a river",value:"selectRiver"},{text:"-- Brazos River Basin --",value:""},{text:"Brazos River : Palo Pinto",value:"08089000"},{text:"Brazos River : Glen Rose",value:"08091000"},{text:"Brazos River : Waco",value:"08096500"},{text:"Brazos River : Bryan",value:"08108700"},{text:"Lampasas River : Kempner",value:"08103800"},{text:"Lampasas River : Ding Dong",value:"08103940"},{text:"Lampasas River : Belton",value:"08104100"},{text:"-- Colorado River Basin --",value:""},{text:"Barton Springs",value:"08155500"},{text:"Barton Creek : Above Barton Springs",value:"08155400"},{text:"Barton Creek : Loop 360",value:"08155300"},{text:"Barton Creek : Lost Ck Blvd",value:"08155240"},{text:"Barton Creek : SH 71",value:"08155200"},{text:"Colorado River : Austin",value:"08158000"},{text:"Colorado River : Bastrop",value:"08159200"},{text:"Onion Creek : Hwy 183",value:"08159000"},{text:"Llano River : Llano",value:"08151500"},{text:"Llano River : Mason",value:"08150700"},{text:"Llano River : Junction",value:"08150000"},{text:"San Saba River : Menard",value:"08144500"},{text:"San Saba River : San Saba",value:"08146000"},{text:"-- Guadalupe River Basin --",value:""},{text:"Guadalupe River : Spring Branch",value:"08167500"},{text:"Guadalupe River : Sattler",value:"08167800"},{text:"Comal River : New Braunfels",value:"08168500"},{text:"Guadalupe River : FM 1117 nr Seguin",value:"08169792"},{text:"Guadalupe River : Gonzales",value:"08173900"},{text:"San Marcos River : San Marcos",value:"08170500"},{text:"San Marcos River : Luling",value:"08172000"},{text:"Blanco River : Wimberley",value:"08171000"},{text:"Blanco River : Kyle",value:"08171300"},{text:"-- Nueces River Basin --",value:""},{text:"Nueces River : Laguna",value:"08190000"},{text:"Nueces River : Uvalde",value:"08192000"},{text:"Frio River : Concan",value:"08195000"},{text:"-- Rio Grande Basin --",value:""},{text:"Rio Grande : Castolon",value:"08374550"},{text:"Rio Grande : Big Bend",value:"08375300"},{text:"Pecos River : Pecos",value:"08419000"},{text:"Pecos River : Girvin",value:"08446500"},{text:"-- San Antonio River Basin --",value:""},{text:"Medina River : Patterson Road",value:"0817887350"},{text:"Medina River : Bandera",value:"08178880"},{text:"San Antonio River : Goliad",value:"08188500"}]}}},[179]);
//# sourceMappingURL=app.7bd3fbc9201c30969a9e.js.map