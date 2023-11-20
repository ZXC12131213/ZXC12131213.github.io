var Ll=Math.pow;var _r=(ri,ai,Et)=>new Promise((dn,pn)=>{var Ut=wt=>{try{en(Et.next(wt))}catch(xr){pn(xr)}},Es=wt=>{try{en(Et.throw(wt))}catch(xr){pn(xr)}},en=wt=>wt.done?dn(wt.value):Promise.resolve(wt.value).then(Ut,Es);en((Et=Et.apply(ri,ai)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[289],{29459:function(ri,ai,Et){"use strict";Et.d(ai,{ZP:function(){return Qe}});var dn=function(S,w){return dn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(C,D){C.__proto__=D}||function(C,D){for(var z in D)Object.prototype.hasOwnProperty.call(D,z)&&(C[z]=D[z])},dn(S,w)};function pn(S,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");dn(S,w);function C(){this.constructor=S}S.prototype=w===null?Object.create(w):(C.prototype=w.prototype,new C)}var Ut=function(){return Ut=Object.assign||function(w){for(var C,D=1,z=arguments.length;D<z;D++){C=arguments[D];for(var V in C)Object.prototype.hasOwnProperty.call(C,V)&&(w[V]=C[V])}return w},Ut.apply(this,arguments)};function Es(S,w){var C={};for(var D in S)Object.prototype.hasOwnProperty.call(S,D)&&w.indexOf(D)<0&&(C[D]=S[D]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,D=Object.getOwnPropertySymbols(S);z<D.length;z++)w.indexOf(D[z])<0&&Object.prototype.propertyIsEnumerable.call(S,D[z])&&(C[D[z]]=S[D[z]]);return C}function en(S,w,C,D){var z=arguments.length,V=z<3?w:D===null?D=Object.getOwnPropertyDescriptor(w,C):D,ie;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")V=Reflect.decorate(S,w,C,D);else for(var we=S.length-1;we>=0;we--)(ie=S[we])&&(V=(z<3?ie(V):z>3?ie(w,C,V):ie(w,C))||V);return z>3&&V&&Object.defineProperty(w,C,V),V}function wt(S,w){return function(C,D){w(C,D,S)}}function xr(S,w,C,D,z,V){function ie(qt){if(qt!==void 0&&typeof qt!="function")throw new TypeError("Function expected");return qt}for(var we=D.kind,Ie=we==="getter"?"get":we==="setter"?"set":"value",xe=!w&&S?D.static?S:S.prototype:null,Ve=w||(xe?Object.getOwnPropertyDescriptor(xe,D.name):{}),et,Ke=!1,ut=C.length-1;ut>=0;ut--){var Mt={};for(var Ht in D)Mt[Ht]=Ht==="access"?{}:D[Ht];for(var Ht in D.access)Mt.access[Ht]=D.access[Ht];Mt.addInitializer=function(qt){if(Ke)throw new TypeError("Cannot add initializers after decoration has completed");V.push(ie(qt||null))};var Kt=(0,C[ut])(we==="accessor"?{get:Ve.get,set:Ve.set}:Ve[Ie],Mt);if(we==="accessor"){if(Kt===void 0)continue;if(Kt===null||typeof Kt!="object")throw new TypeError("Object expected");(et=ie(Kt.get))&&(Ve.get=et),(et=ie(Kt.set))&&(Ve.set=et),(et=ie(Kt.init))&&z.push(et)}else(et=ie(Kt))&&(we==="field"?z.push(et):Ve[Ie]=et)}xe&&Object.defineProperty(xe,D.name,Ve),Ke=!0}function nf(S,w,C){for(var D=arguments.length>2,z=0;z<w.length;z++)C=D?w[z].call(S,C):w[z].call(S);return D?C:void 0}function Ho(S){return typeof S=="symbol"?S:"".concat(S)}function Il(S,w,C){return typeof w=="symbol"&&(w=w.description?"[".concat(w.description,"]"):""),Object.defineProperty(S,"name",{configurable:!0,value:C?"".concat(C," ",w):w})}function Xn(S,w){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(S,w)}function oi(S,w,C,D){function z(V){return V instanceof C?V:new C(function(ie){ie(V)})}return new(C||(C=Promise))(function(V,ie){function we(Ve){try{xe(D.next(Ve))}catch(et){ie(et)}}function Ie(Ve){try{xe(D.throw(Ve))}catch(et){ie(et)}}function xe(Ve){Ve.done?V(Ve.value):z(Ve.value).then(we,Ie)}xe((D=D.apply(S,w||[])).next())})}function tn(S,w){var C={label:0,sent:function(){if(V[0]&1)throw V[1];return V[1]},trys:[],ops:[]},D,z,V,ie;return ie={next:we(0),throw:we(1),return:we(2)},typeof Symbol=="function"&&(ie[Symbol.iterator]=function(){return this}),ie;function we(xe){return function(Ve){return Ie([xe,Ve])}}function Ie(xe){if(D)throw new TypeError("Generator is already executing.");for(;ie&&(ie=0,xe[0]&&(C=0)),C;)try{if(D=1,z&&(V=xe[0]&2?z.return:xe[0]?z.throw||((V=z.return)&&V.call(z),0):z.next)&&!(V=V.call(z,xe[1])).done)return V;switch(z=0,V&&(xe=[xe[0]&2,V.value]),xe[0]){case 0:case 1:V=xe;break;case 4:return C.label++,{value:xe[1],done:!1};case 5:C.label++,z=xe[1],xe=[0];continue;case 7:xe=C.ops.pop(),C.trys.pop();continue;default:if(V=C.trys,!(V=V.length>0&&V[V.length-1])&&(xe[0]===6||xe[0]===2)){C=0;continue}if(xe[0]===3&&(!V||xe[1]>V[0]&&xe[1]<V[3])){C.label=xe[1];break}if(xe[0]===6&&C.label<V[1]){C.label=V[1],V=xe;break}if(V&&C.label<V[2]){C.label=V[2],C.ops.push(xe);break}V[2]&&C.ops.pop(),C.trys.pop();continue}xe=w.call(S,C)}catch(Ve){xe=[6,Ve],z=0}finally{D=V=0}if(xe[0]&5)throw xe[1];return{value:xe[0]?xe[1]:void 0,done:!0}}}var Tn=Object.create?function(S,w,C,D){D===void 0&&(D=C);var z=Object.getOwnPropertyDescriptor(w,C);(!z||("get"in z?!w.__esModule:z.writable||z.configurable))&&(z={enumerable:!0,get:function(){return w[C]}}),Object.defineProperty(S,D,z)}:function(S,w,C,D){D===void 0&&(D=C),S[D]=w[C]};function sf(S,w){for(var C in S)C!=="default"&&!Object.prototype.hasOwnProperty.call(w,C)&&Tn(w,S,C)}function Dn(S){var w=typeof Symbol=="function"&&Symbol.iterator,C=w&&S[w],D=0;if(C)return C.call(S);if(S&&typeof S.length=="number")return{next:function(){return S&&D>=S.length&&(S=void 0),{value:S&&S[D++],done:!S}}};throw new TypeError(w?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ti(S,w){var C=typeof Symbol=="function"&&S[Symbol.iterator];if(!C)return S;var D=C.call(S),z,V=[],ie;try{for(;(w===void 0||w-- >0)&&!(z=D.next()).done;)V.push(z.value)}catch(we){ie={error:we}}finally{try{z&&!z.done&&(C=D.return)&&C.call(D)}finally{if(ie)throw ie.error}}return V}function Vo(){for(var S=[],w=0;w<arguments.length;w++)S=S.concat(Ti(arguments[w]));return S}function Wo(){for(var S=0,w=0,C=arguments.length;w<C;w++)S+=arguments[w].length;for(var D=Array(S),z=0,w=0;w<C;w++)for(var V=arguments[w],ie=0,we=V.length;ie<we;ie++,z++)D[z]=V[ie];return D}function Hi(S,w,C){if(C||arguments.length===2)for(var D=0,z=w.length,V;D<z;D++)(V||!(D in w))&&(V||(V=Array.prototype.slice.call(w,0,D)),V[D]=w[D]);return S.concat(V||Array.prototype.slice.call(w))}function ws(S){return this instanceof ws?(this.v=S,this):new ws(S)}function Vi(S,w,C){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var D=C.apply(S,w||[]),z,V=[];return z={},ie("next"),ie("throw"),ie("return"),z[Symbol.asyncIterator]=function(){return this},z;function ie(Ke){D[Ke]&&(z[Ke]=function(ut){return new Promise(function(Mt,Ht){V.push([Ke,ut,Mt,Ht])>1||we(Ke,ut)})})}function we(Ke,ut){try{Ie(D[Ke](ut))}catch(Mt){et(V[0][3],Mt)}}function Ie(Ke){Ke.value instanceof ws?Promise.resolve(Ke.value.v).then(xe,Ve):et(V[0][2],Ke)}function xe(Ke){we("next",Ke)}function Ve(Ke){we("throw",Ke)}function et(Ke,ut){Ke(ut),V.shift(),V.length&&we(V[0][0],V[0][1])}}function Ul(S){var w,C;return w={},D("next"),D("throw",function(z){throw z}),D("return"),w[Symbol.iterator]=function(){return this},w;function D(z,V){w[z]=S[z]?function(ie){return(C=!C)?{value:ws(S[z](ie)),done:!1}:V?V(ie):ie}:V}}function Dl(S){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var w=S[Symbol.asyncIterator],C;return w?w.call(S):(S=typeof Dn=="function"?Dn(S):S[Symbol.iterator](),C={},D("next"),D("throw"),D("return"),C[Symbol.asyncIterator]=function(){return this},C);function D(V){C[V]=S[V]&&function(ie){return new Promise(function(we,Ie){ie=S[V](ie),z(we,Ie,ie.done,ie.value)})}}function z(V,ie,we,Ie){Promise.resolve(Ie).then(function(xe){V({value:xe,done:we})},ie)}}function Xo(S,w){return Object.defineProperty?Object.defineProperty(S,"raw",{value:w}):S.raw=w,S}var la=Object.create?function(S,w){Object.defineProperty(S,"default",{enumerable:!0,value:w})}:function(S,w){S.default=w};function Nl(S){if(S&&S.__esModule)return S;var w={};if(S!=null)for(var C in S)C!=="default"&&Object.prototype.hasOwnProperty.call(S,C)&&Tn(w,S,C);return la(w,S),w}function Ol(S){return S&&S.__esModule?S:{default:S}}function Fl(S,w,C,D){if(C==="a"&&!D)throw new TypeError("Private accessor was defined without a getter");if(typeof w=="function"?S!==w||!D:!w.has(S))throw new TypeError("Cannot read private member from an object whose class did not declare it");return C==="m"?D:C==="a"?D.call(S):D?D.value:w.get(S)}function Bl(S,w,C,D,z){if(D==="m")throw new TypeError("Private method is not writable");if(D==="a"&&!z)throw new TypeError("Private accessor was defined without a setter");if(typeof w=="function"?S!==w||!z:!w.has(S))throw new TypeError("Cannot write private member to an object whose class did not declare it");return D==="a"?z.call(S,C):z?z.value=C:w.set(S,C),C}function qo(S,w){if(w===null||typeof w!="object"&&typeof w!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof S=="function"?w===S:S.has(w)}var Ft=Et(93236),Yo=Et(50631),$o=Et.n(Yo),Ae=Et(32402),Re=Et(41960),nn=Et(1283),yr=Et(48871);function ha(S,w,C){switch((0,Re.vp)(S,w)){case 5103:return Ae.G$+"print-"+S+S;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ae.G$+S+S;case 4789:return Ae.uj+S+S;case 5349:case 4246:case 4810:case 6968:case 2756:return Ae.G$+S+Ae.uj+S+Ae.MS+S+S;case 5936:switch((0,Re.uO)(S,w+11)){case 114:return Ae.G$+S+Ae.MS+(0,Re.gx)(S,/[svh]\w+-[tblr]{2}/,"tb")+S;case 108:return Ae.G$+S+Ae.MS+(0,Re.gx)(S,/[svh]\w+-[tblr]{2}/,"tb-rl")+S;case 45:return Ae.G$+S+Ae.MS+(0,Re.gx)(S,/[svh]\w+-[tblr]{2}/,"lr")+S}case 6828:case 4268:case 2903:return Ae.G$+S+Ae.MS+S+S;case 6165:return Ae.G$+S+Ae.MS+"flex-"+S+S;case 5187:return Ae.G$+S+(0,Re.gx)(S,/(\w+).+(:[^]+)/,Ae.G$+"box-$1$2"+Ae.MS+"flex-$1$2")+S;case 5443:return Ae.G$+S+Ae.MS+"flex-item-"+(0,Re.gx)(S,/flex-|-self/g,"")+((0,Re.EQ)(S,/flex-|baseline/)?"":Ae.MS+"grid-row-"+(0,Re.gx)(S,/flex-|-self/g,""))+S;case 4675:return Ae.G$+S+Ae.MS+"flex-line-pack"+(0,Re.gx)(S,/align-content|flex-|-self/g,"")+S;case 5548:return Ae.G$+S+Ae.MS+(0,Re.gx)(S,"shrink","negative")+S;case 5292:return Ae.G$+S+Ae.MS+(0,Re.gx)(S,"basis","preferred-size")+S;case 6060:return Ae.G$+"box-"+(0,Re.gx)(S,"-grow","")+Ae.G$+S+Ae.MS+(0,Re.gx)(S,"grow","positive")+S;case 4554:return Ae.G$+(0,Re.gx)(S,/([^-])(transform)/g,"$1"+Ae.G$+"$2")+S;case 6187:return(0,Re.gx)((0,Re.gx)((0,Re.gx)(S,/(zoom-|grab)/,Ae.G$+"$1"),/(image-set)/,Ae.G$+"$1"),S,"")+S;case 5495:case 3959:return(0,Re.gx)(S,/(image-set\([^]*)/,Ae.G$+"$1$`$1");case 4968:return(0,Re.gx)((0,Re.gx)(S,/(.+:)(flex-)?(.*)/,Ae.G$+"box-pack:$3"+Ae.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ae.G$+S+S;case 4200:if(!(0,Re.EQ)(S,/flex-|baseline/))return Ae.MS+"grid-column-align"+(0,Re.tb)(S,w)+S;break;case 2592:case 3360:return Ae.MS+(0,Re.gx)(S,"template-","")+S;case 4384:case 3616:return C&&C.some(function(D,z){return w=z,(0,Re.EQ)(D.props,/grid-\w+-end/)})?~(0,Re.Cw)(S+(C=C[w].value),"span")?S:Ae.MS+(0,Re.gx)(S,"-start","")+S+Ae.MS+"grid-row-span:"+(~(0,Re.Cw)(C,"span")?(0,Re.EQ)(C,/\d+/):+(0,Re.EQ)(C,/\d+/)-+(0,Re.EQ)(S,/\d+/))+";":Ae.MS+(0,Re.gx)(S,"-start","")+S;case 4896:case 4128:return C&&C.some(function(D){return(0,Re.EQ)(D.props,/grid-\w+-start/)})?S:Ae.MS+(0,Re.gx)((0,Re.gx)(S,"-end","-span"),"span ","")+S;case 4095:case 3583:case 4068:case 2532:return(0,Re.gx)(S,/(.+)-inline(.+)/,Ae.G$+"$1$2")+S;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if((0,Re.to)(S)-1-w>6)switch((0,Re.uO)(S,w+1)){case 109:if((0,Re.uO)(S,w+4)!==45)break;case 102:return(0,Re.gx)(S,/(.+:)(.+)-([^]+)/,"$1"+Ae.G$+"$2-$3$1"+Ae.uj+((0,Re.uO)(S,w+3)==108?"$3":"$2-$3"))+S;case 115:return~(0,Re.Cw)(S,"stretch")?ha((0,Re.gx)(S,"stretch","fill-available"),w,C)+S:S}break;case 5152:case 5920:return(0,Re.gx)(S,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(D,z,V,ie,we,Ie,xe){return Ae.MS+z+":"+V+xe+(ie?Ae.MS+z+"-span:"+(we?Ie:+Ie-+V)+xe:"")+S});case 4949:if((0,Re.uO)(S,w+6)===121)return(0,Re.gx)(S,":",":"+Ae.G$)+S;break;case 6444:switch((0,Re.uO)(S,(0,Re.uO)(S,14)===45?18:11)){case 120:return(0,Re.gx)(S,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ae.G$+((0,Re.uO)(S,14)===45?"inline-":"")+"box$3$1"+Ae.G$+"$2$3$1"+Ae.MS+"$2box$3")+S;case 100:return(0,Re.gx)(S,":",":"+Ae.MS)+S}break;case 5719:case 2647:case 2135:case 3927:case 2391:return(0,Re.gx)(S,"scroll-","scroll-snap-")+S}return S}function Zo(S){var w=(0,Re.Ei)(S);return function(C,D,z,V){for(var ie="",we=0;we<w;we++)ie+=S[we](C,D,z,V)||"";return ie}}function vr(S){return function(w){w.root||(w=w.return)&&S(w)}}function Jo(S,w,C,D){if(S.length>-1&&!S.return)switch(S.type){case Ae.h5:S.return=ha(S.value,S.length,C);return;case Ae.lK:return(0,yr.q)([(0,nn.JG)(S,{value:(0,Re.gx)(S.value,"@","@"+Ae.G$)})],D);case Ae.Fr:if(S.length)return(0,Re.$e)(C=S.props,function(z){switch((0,Re.EQ)(z,D=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":(0,nn.xb)((0,nn.JG)(S,{props:[(0,Re.gx)(z,/:(read-\w+)/,":"+Ae.uj+"$1")]})),(0,nn.xb)((0,nn.JG)(S,{props:[z]})),(0,Re.f0)(S,{props:(0,Re.hX)(C,D)});break;case"::placeholder":(0,nn.xb)((0,nn.JG)(S,{props:[(0,Re.gx)(z,/:(plac\w+)/,":"+Ae.G$+"input-$1")]})),(0,nn.xb)((0,nn.JG)(S,{props:[(0,Re.gx)(z,/:(plac\w+)/,":"+Ae.uj+"$1")]})),(0,nn.xb)((0,nn.JG)(S,{props:[(0,Re.gx)(z,/:(plac\w+)/,Ae.MS+"input-$1")]})),(0,nn.xb)((0,nn.JG)(S,{props:[z]})),(0,Re.f0)(S,{props:(0,Re.hX)(C,D)});break}return""})}}function zl(S){switch(S.type){case RULESET:S.props=S.props.map(function(w){return combine(tokenize(w),function(C,D,z){switch(charat(C,0)){case 12:return substr(C,1,strlen(C));case 0:case 40:case 43:case 62:case 126:return C;case 58:z[++D]==="global"&&(z[D]="",z[++D]="\f"+substr(z[D],D=1,-1));case 32:return D===1?"":C;default:switch(D){case 0:return S=C,sizeof(z)>1?"":C;case(D=sizeof(z)-1):case 2:return D===2?C+S+S:C+S;default:return C}}})})}}var Ko=Et(40855),jo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ts=jo,Mr=Et(14224),Nn=typeof Mr!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",qn="6.1.0",Sr=typeof window!="undefined"&&"HTMLElement"in window,Qo=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Mr!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:typeof Mr!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY:!1),ec={},Gl=/invalid hook call/i,kl=new Set,ua=function(S,w){if(!1)var C,D,z,V},An=Object.freeze([]),mn=Object.freeze({});function Ai(S,w,C){return C===void 0&&(C=mn),S.theme!==C.theme&&S.theme||w||C.theme}var Wi=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,As=/(^-|-$)/g;function kt(S){return S.replace(Xi,"-").replace(As,"")}var Rs=/(a)(d)/gi,Tt=function(S){return String.fromCharCode(S+(S>25?39:97))};function qi(S){var w,C="";for(w=Math.abs(S);w>52;w=w/52|0)C=Tt(w%52)+C;return(Tt(w%52)+C).replace(Rs,"$1-$2")}var fa,On=function(S,w){for(var C=w.length;C;)S=33*S^w.charCodeAt(--C);return S},tc=function(S){return On(5381,S)};function St(S){return qi(tc(S)>>>0)}function da(S){return S.displayName||S.name||"Component"}function pa(S){return typeof S=="string"&&!0}var Yn=typeof Symbol=="function"&&Symbol.for,nc=Yn?Symbol.for("react.memo"):60115,ci=Yn?Symbol.for("react.forward_ref"):60112,ic={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sc={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},br={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rc=((fa={})[ci]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fa[nc]=br,fa);function $n(S){return("type"in(w=S)&&w.type.$$typeof)===nc?br:"$$typeof"in S?rc[S.$$typeof]:ic;var w}var Zn=Object.defineProperty,Yi=Object.getOwnPropertyNames,ma=Object.getOwnPropertySymbols,ac=Object.getOwnPropertyDescriptor,Ri=Object.getPrototypeOf,ga=Object.prototype;function Zt(S,w,C){if(typeof w!="string"){if(ga){var D=Ri(w);D&&D!==ga&&Zt(S,D,C)}var z=Yi(w);ma&&(z=z.concat(ma(w)));for(var V=$n(S),ie=$n(w),we=0;we<z.length;++we){var Ie=z[we];if(!(Ie in sc||C&&C[Ie]||ie&&Ie in ie||V&&Ie in V)){var xe=ac(w,Ie);try{Zn(S,Ie,xe)}catch(Ve){}}}}return S}function li(S){return typeof S=="function"}function Er(S){return typeof S=="object"&&"styledComponentId"in S}function sn(S,w){return S&&w?"".concat(S," ").concat(w):S||w||""}function Rn(S,w){if(S.length===0)return"";for(var C=S[0],D=1;D<S.length;D++)C+=w?w+S[D]:S[D];return C}function $i(S){return S!==null&&typeof S=="object"&&S.constructor.name===Object.name&&!("props"in S&&S.$$typeof)}function wr(S,w,C){if(C===void 0&&(C=!1),!C&&!$i(S)&&!Array.isArray(S))return w;if(Array.isArray(w))for(var D=0;D<w.length;D++)S[D]=wr(S[D],w[D]);else if($i(w))for(var D in w)S[D]=wr(S[D],w[D]);return S}function Tr(S,w){Object.defineProperty(S,"toString",{value:w})}var Hl={};function Vl(){for(var S=[],w=0;w<arguments.length;w++)S[w]=arguments[w];for(var C=S[0],D=[],z=1,V=S.length;z<V;z+=1)D.push(S[z]);return D.forEach(function(ie){C=C.replace(/%[a-z]/,ie)}),C}function Jt(S){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(S," for more information.").concat(w.length>0?" Args: ".concat(w.join(", ")):""))}var Ar=function(){function S(w){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=w}return S.prototype.indexOfGroup=function(w){for(var C=0,D=0;D<w;D++)C+=this.groupSizes[D];return C},S.prototype.insertRules=function(w,C){if(w>=this.groupSizes.length){for(var D=this.groupSizes,z=D.length,V=z;w>=V;)if((V<<=1)<0)throw Jt(16,"".concat(w));this.groupSizes=new Uint32Array(V),this.groupSizes.set(D),this.length=V;for(var ie=z;ie<V;ie++)this.groupSizes[ie]=0}for(var we=this.indexOfGroup(w+1),Ie=(ie=0,C.length);ie<Ie;ie++)this.tag.insertRule(we,C[ie])&&(this.groupSizes[w]++,we++)},S.prototype.clearGroup=function(w){if(w<this.length){var C=this.groupSizes[w],D=this.indexOfGroup(w),z=D+C;this.groupSizes[w]=0;for(var V=D;V<z;V++)this.tag.deleteRule(D)}},S.prototype.getGroup=function(w){var C="";if(w>=this.length||this.groupSizes[w]===0)return C;for(var D=this.groupSizes[w],z=this.indexOfGroup(w),V=z+D,ie=z;ie<V;ie++)C+="".concat(this.tag.getRule(ie)).concat(`/*!sc*/
`);return C},S}(),Ci=new Map,Pi=new Map,Cs=1,Zi=function(S){if(Ci.has(S))return Ci.get(S);for(;Pi.has(Cs);)Cs++;var w=Cs++;return Ci.set(S,w),Pi.set(w,S),w},_a=function(S,w){Ci.set(S,w),Pi.set(w,S)},xa="style[".concat(Nn,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),oc=new RegExp("^".concat(Nn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ya=function(S,w,C){for(var D,z=C.split(","),V=0,ie=z.length;V<ie;V++)(D=z[V])&&S.registerName(w,D)},va=function(S,w){for(var C,D=((C=w.textContent)!==null&&C!==void 0?C:"").split(`/*!sc*/
`),z=[],V=0,ie=D.length;V<ie;V++){var we=D[V].trim();if(we){var Ie=we.match(oc);if(Ie){var xe=0|parseInt(Ie[1],10),Ve=Ie[2];xe!==0&&(_a(Ve,xe),ya(S,Ve,Ie[3]),S.getTag().insertRules(xe,z)),z.length=0}else z.push(we)}}};function Ps(){return Et.nc}var Rr=function(S){var w=document.head,C=S||w,D=document.createElement("style"),z=function(we){var Ie=Array.from(we.querySelectorAll("style[".concat(Nn,"]")));return Ie[Ie.length-1]}(C),V=z!==void 0?z.nextSibling:null;D.setAttribute(Nn,"active"),D.setAttribute("data-styled-version","6.1.0");var ie=Ps();return ie&&D.setAttribute("nonce",ie),C.insertBefore(D,V),D},Ma=function(){function S(w){this.element=Rr(w),this.element.appendChild(document.createTextNode("")),this.sheet=function(C){if(C.sheet)return C.sheet;for(var D=document.styleSheets,z=0,V=D.length;z<V;z++){var ie=D[z];if(ie.ownerNode===C)return ie}throw Jt(17)}(this.element),this.length=0}return S.prototype.insertRule=function(w,C){try{return this.sheet.insertRule(C,w),this.length++,!0}catch(D){return!1}},S.prototype.deleteRule=function(w){this.sheet.deleteRule(w),this.length--},S.prototype.getRule=function(w){var C=this.sheet.cssRules[w];return C&&C.cssText?C.cssText:""},S}(),Sa=function(){function S(w){this.element=Rr(w),this.nodes=this.element.childNodes,this.length=0}return S.prototype.insertRule=function(w,C){if(w<=this.length&&w>=0){var D=document.createTextNode(C);return this.element.insertBefore(D,this.nodes[w]||null),this.length++,!0}return!1},S.prototype.deleteRule=function(w){this.element.removeChild(this.nodes[w]),this.length--},S.prototype.getRule=function(w){return w<this.length?this.nodes[w].textContent:""},S}(),ba=function(){function S(w){this.rules=[],this.length=0}return S.prototype.insertRule=function(w,C){return w<=this.length&&(this.rules.splice(w,0,C),this.length++,!0)},S.prototype.deleteRule=function(w){this.rules.splice(w,1),this.length--},S.prototype.getRule=function(w){return w<this.length?this.rules[w]:""},S}(),Cr=Sr,Ea={isServer:!Sr,useCSSOMInjection:!Qo},hi=function(){function S(w,C,D){w===void 0&&(w=mn),C===void 0&&(C={});var z=this;this.options=Ut(Ut({},Ea),w),this.gs=C,this.names=new Map(D),this.server=!!w.isServer,!this.server&&Sr&&Cr&&(Cr=!1,function(V){for(var ie=document.querySelectorAll(xa),we=0,Ie=ie.length;we<Ie;we++){var xe=ie[we];xe&&xe.getAttribute(Nn)!=="active"&&(va(V,xe),xe.parentNode&&xe.parentNode.removeChild(xe))}}(this)),Tr(this,function(){return function(V){for(var ie=V.getTag(),we=ie.length,Ie="",xe=function(et){var Ke=function(qt){return Pi.get(qt)}(et);if(Ke===void 0)return"continue";var ut=V.names.get(Ke),Mt=ie.getGroup(et);if(ut===void 0||Mt.length===0)return"continue";var Ht="".concat(Nn,".g").concat(et,'[id="').concat(Ke,'"]'),Kt="";ut!==void 0&&ut.forEach(function(qt){qt.length>0&&(Kt+="".concat(qt,","))}),Ie+="".concat(Mt).concat(Ht,'{content:"').concat(Kt,'"}').concat(`/*!sc*/
`)},Ve=0;Ve<we;Ve++)xe(Ve);return Ie}(z)})}return S.registerId=function(w){return Zi(w)},S.prototype.reconstructWithOptions=function(w,C){return C===void 0&&(C=!0),new S(Ut(Ut({},this.options),w),this.gs,C&&this.names||void 0)},S.prototype.allocateGSInstance=function(w){return this.gs[w]=(this.gs[w]||0)+1},S.prototype.getTag=function(){return this.tag||(this.tag=(w=function(C){var D=C.useCSSOMInjection,z=C.target;return C.isServer?new ba(z):D?new Ma(z):new Sa(z)}(this.options),new Ar(w)));var w},S.prototype.hasNameForId=function(w,C){return this.names.has(w)&&this.names.get(w).has(C)},S.prototype.registerName=function(w,C){if(Zi(w),this.names.has(w))this.names.get(w).add(C);else{var D=new Set;D.add(C),this.names.set(w,D)}},S.prototype.insertRules=function(w,C,D){this.registerName(w,C),this.getTag().insertRules(Zi(w),D)},S.prototype.clearNames=function(w){this.names.has(w)&&this.names.get(w).clear()},S.prototype.clearRules=function(w){this.getTag().clearGroup(Zi(w)),this.clearNames(w)},S.prototype.clearTag=function(){this.tag=void 0},S}(),wa=/&/g,Ta=/^\s*\/\/.*$/gm;function Pr(S,w){return S.map(function(C){return C.type==="rule"&&(C.value="".concat(w," ").concat(C.value),C.value=C.value.replaceAll(",",",".concat(w," ")),C.props=C.props.map(function(D){return"".concat(w," ").concat(D)})),Array.isArray(C.children)&&C.type!=="@keyframes"&&(C.children=Pr(C.children,w)),C})}function Lr(S){var w,C,D,z=S===void 0?mn:S,V=z.options,ie=V===void 0?mn:V,we=z.plugins,Ie=we===void 0?An:we,xe=function(Ke,ut,Mt){return Mt===C||Mt.startsWith(C)&&Mt.endsWith(C)&&Mt.replaceAll(C,"").length>0?".".concat(w):Ke},Ve=Ie.slice();Ve.push(function(Ke){Ke.type===Ae.Fr&&Ke.value.includes("&")&&(Ke.props[0]=Ke.props[0].replace(wa,C).replace(D,xe))}),ie.prefix&&Ve.push(Jo),Ve.push(yr.P);var et=function(Ke,ut,Mt,Ht){ut===void 0&&(ut=""),Mt===void 0&&(Mt=""),Ht===void 0&&(Ht="&"),w=Ht,C=ut,D=new RegExp("\\".concat(C,"\\b"),"g");var Kt=Ke.replace(Ta,""),qt=Ko.MY(Mt||ut?"".concat(Mt," ").concat(ut," { ").concat(Kt," }"):Kt);ie.namespace&&(qt=Pr(qt,ie.namespace));var Dr=[];return yr.q(qt,Zo(Ve.concat(vr(function(rn){return Dr.push(rn)})))),Dr};return et.hash=Ie.length?Ie.reduce(function(Ke,ut){return ut.name||Jt(15),On(Ke,ut.name)},5381).toString():"",et}var Ir=new hi,Ls=Lr(),Ji=Ft.createContext({shouldForwardProp:void 0,styleSheet:Ir,stylis:Ls}),Wl=Ji.Consumer,Aa=Ft.createContext(void 0);function Ki(){return(0,Ft.useContext)(Ji)}function Ra(S){var w=(0,Ft.useState)(S.stylisPlugins),C=w[0],D=w[1],z=Ki().styleSheet,V=(0,Ft.useMemo)(function(){var Ie=z;return S.sheet?Ie=S.sheet:S.target&&(Ie=Ie.reconstructWithOptions({target:S.target},!1)),S.disableCSSOMInjection&&(Ie=Ie.reconstructWithOptions({useCSSOMInjection:!1})),Ie},[S.disableCSSOMInjection,S.sheet,S.target,z]),ie=(0,Ft.useMemo)(function(){return Lr({options:{namespace:S.namespace,prefix:S.enableVendorPrefixes},plugins:C})},[S.enableVendorPrefixes,S.namespace,C]);(0,Ft.useEffect)(function(){$o()(C,S.stylisPlugins)||D(S.stylisPlugins)},[S.stylisPlugins]);var we=(0,Ft.useMemo)(function(){return{shouldForwardProp:S.shouldForwardProp,styleSheet:V,stylis:ie}},[S.shouldForwardProp,V,ie]);return Ft.createElement(Ji.Provider,{value:we},Ft.createElement(Aa.Provider,{value:ie},S.children))}var Ca=function(){function S(w,C){var D=this;this.inject=function(z,V){V===void 0&&(V=Ls);var ie=D.name+V.hash;z.hasNameForId(D.id,ie)||z.insertRules(D.id,ie,V(D.rules,ie,"@keyframes"))},this.name=w,this.id="sc-keyframes-".concat(w),this.rules=C,Tr(this,function(){throw Jt(12,String(D.name))})}return S.prototype.getName=function(w){return w===void 0&&(w=Ls),this.name+w.hash},S}(),cc=function(S){return S>="A"&&S<="Z"};function Pa(S){for(var w="",C=0;C<S.length;C++){var D=S[C];if(C===1&&D==="-"&&S[0]==="-")return S;cc(D)?w+="-"+D.toLowerCase():w+=D}return w.startsWith("ms-")?"-"+w:w}var ji=function(S){return S==null||S===!1||S===""},Qi=function(S){var w,C,D=[];for(var z in S){var V=S[z];S.hasOwnProperty(z)&&!ji(V)&&(Array.isArray(V)&&V.isCss||li(V)?D.push("".concat(Pa(z),":"),V,";"):$i(V)?D.push.apply(D,Hi(Hi(["".concat(z," {")],Qi(V),!1),["}"],!1)):D.push("".concat(Pa(z),": ").concat((w=z,(C=V)==null||typeof C=="boolean"||C===""?"":typeof C!="number"||C===0||w in Ts||w.startsWith("--")?String(C).trim():"".concat(C,"px")),";")))}return D};function Cn(S,w,C,D){if(ji(S))return[];if(Er(S))return[".".concat(S.styledComponentId)];if(li(S)){if(!li(V=S)||V.prototype&&V.prototype.isReactComponent||!w)return[S];var z=S(w);return Cn(z,w,C,D)}var V;return S instanceof Ca?C?(S.inject(C,D),[S.getName(D)]):[S]:$i(S)?Qi(S):Array.isArray(S)?Array.prototype.concat.apply(An,S.map(function(ie){return Cn(ie,w,C,D)})):[S.toString()]}function ui(S){for(var w=0;w<S.length;w+=1){var C=S[w];if(li(C)&&!Er(C))return!1}return!0}var Li=tc("6.1.0"),Is=function(){function S(w,C,D){this.rules=w,this.staticRulesId="",this.isStatic=(D===void 0||D.isStatic)&&ui(w),this.componentId=C,this.baseHash=On(Li,C),this.baseStyle=D,hi.registerId(C)}return S.prototype.generateAndInjectStyles=function(w,C,D){var z=this.baseStyle?this.baseStyle.generateAndInjectStyles(w,C,D):"";if(this.isStatic&&!D.hash)if(this.staticRulesId&&C.hasNameForId(this.componentId,this.staticRulesId))z=sn(z,this.staticRulesId);else{var V=Rn(Cn(this.rules,w,C,D)),ie=qi(On(this.baseHash,V)>>>0);if(!C.hasNameForId(this.componentId,ie)){var we=D(V,".".concat(ie),void 0,this.componentId);C.insertRules(this.componentId,ie,we)}z=sn(z,ie),this.staticRulesId=ie}else{for(var Ie=On(this.baseHash,D.hash),xe="",Ve=0;Ve<this.rules.length;Ve++){var et=this.rules[Ve];if(typeof et=="string")xe+=et;else if(et){var Ke=Rn(Cn(et,w,C,D));Ie=On(Ie,Ke+Ve),xe+=Ke}}if(xe){var ut=qi(Ie>>>0);C.hasNameForId(this.componentId,ut)||C.insertRules(this.componentId,ut,D(xe,".".concat(ut),void 0,this.componentId)),z=sn(z,ut)}}return z},S}(),Fn=Ft.createContext(void 0),lc=Fn.Consumer;function rf(){var S=c(Fn);if(!S)throw Jt(18);return S}function af(S){var w=o.useContext(Fn),C=i(function(){return function(D,z){if(!D)throw Jt(14);if(li(D)){var V=D(z);return V}if(Array.isArray(D)||typeof D!="object")throw Jt(8);return z?t(t({},z),D):D}(S.theme,w)},[S.theme,w]);return S.children?o.createElement(Fn.Provider,{value:C},S.children):null}var La={},hc=new Set;function fi(S,w,C){var D=Er(S),z=S,V=!pa(S),ie=w.attrs,we=ie===void 0?An:ie,Ie=w.componentId,xe=Ie===void 0?function(an,xn){var Dt=typeof an!="string"?"sc":kt(an);La[Dt]=(La[Dt]||0)+1;var Yt="".concat(Dt,"-").concat(St("6.1.0"+Dt+La[Dt]));return xn?"".concat(xn,"-").concat(Yt):Yt}(w.displayName,w.parentComponentId):Ie,Ve=w.displayName,et=Ve===void 0?function(an){return pa(an)?"styled.".concat(an):"Styled(".concat(da(an),")")}(S):Ve,Ke=w.displayName&&w.componentId?"".concat(kt(w.displayName),"-").concat(w.componentId):w.componentId||xe,ut=D&&z.attrs?z.attrs.concat(we).filter(Boolean):we,Mt=w.shouldForwardProp;if(D&&z.shouldForwardProp){var Ht=z.shouldForwardProp;if(w.shouldForwardProp){var Kt=w.shouldForwardProp;Mt=function(an,xn){return Ht(an,xn)&&Kt(an,xn)}}else Mt=Ht}var qt=new Is(C,Ke,D?z.componentStyle:void 0);function Dr(an,xn){return function(Dt,Yt,Rt){var es=Dt.attrs,di=Dt.componentStyle,Ii=Dt.defaultProps,on=Dt.foldedComponentIds,bt=Dt.styledComponentId,Nr=Dt.target,fc=Ft.useContext(Fn),dc=Ki(),pi=Dt.shouldForwardProp||dc.shouldForwardProp,Kn=function(Ds,ns,Ns){for(var is,zn=Ut(Ut({},ns),{className:void 0,theme:Ns}),Os=0;Os<Ds.length;Os+=1){var ss=li(is=Ds[Os])?is(zn):is;for(var Qn in ss)zn[Qn]=Qn==="className"?sn(zn[Qn],ss[Qn]):Qn==="style"?Ut(Ut({},zn[Qn]),ss[Qn]):ss[Qn]}return ns.className&&(zn.className=sn(zn.className,ns.className)),zn}(es,Yt,Ai(Yt,fc,Ii)||mn),Us=Kn.as||Nr,ts={};for(var jn in Kn)Kn[jn]===void 0||jn[0]==="$"||jn==="as"||jn==="theme"||(jn==="forwardedAs"?ts.as=Kn.forwardedAs:pi&&!pi(jn,Us)||(ts[jn]=Kn[jn]));var Na=function(Ds,ns){var Ns=Ki(),is=Ds.generateAndInjectStyles(ns,Ns.styleSheet,Ns.stylis);return is}(di,Kn),Or=sn(on,bt);return Na&&(Or+=" "+Na),Kn.className&&(Or+=" "+Kn.className),ts[pa(Us)&&!Wi.has(Us)?"class":"className"]=Or,ts.ref=Rt,(0,Ft.createElement)(Us,ts)}(rn,an,xn)}var rn=Ft.forwardRef(Dr);return rn.attrs=ut,rn.componentStyle=qt,rn.shouldForwardProp=Mt,rn.foldedComponentIds=D?sn(z.foldedComponentIds,z.styledComponentId):"",rn.styledComponentId=Ke,rn.target=D?z.target:S,Object.defineProperty(rn,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(an){this._foldedDefaultProps=D?function(xn){for(var Dt=[],Yt=1;Yt<arguments.length;Yt++)Dt[Yt-1]=arguments[Yt];for(var Rt=0,es=Dt;Rt<es.length;Rt++)wr(xn,es[Rt],!0);return xn}({},z.defaultProps,an):an}}),Tr(rn,function(){return".".concat(rn.styledComponentId)}),V&&Zt(rn,S,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),rn}function Ia(S,w){for(var C=[S[0]],D=0,z=w.length;D<z;D+=1)C.push(w[D],S[D+1]);return C}var Ua=function(S){return Object.assign(S,{isCss:!0})};function Bn(S){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];if(li(S)||$i(S)){var D=S;return Ua(Cn(Ia(An,Hi([D],w,!0))))}var z=S;return w.length===0&&z.length===1&&typeof z[0]=="string"?Cn(z):Ua(Cn(Ia(z,w)))}function Ur(S,w,C){if(C===void 0&&(C=mn),!w)throw Jt(1,w);var D=function(z){for(var V=[],ie=1;ie<arguments.length;ie++)V[ie-1]=arguments[ie];return S(w,C,Bn.apply(void 0,Hi([z],V,!1)))};return D.attrs=function(z){return Ur(S,w,Ut(Ut({},C),{attrs:Array.prototype.concat(C.attrs,z).filter(Boolean)}))},D.withConfig=function(z){return Ur(S,w,Ut(Ut({},C),z))},D}var Jn=function(S){return Ur(fi,S)},Qe=Jn;Wi.forEach(function(S){Qe[S]=Jn(S)});var Pn=function(){function S(w,C){this.rules=w,this.componentId=C,this.isStatic=ui(w),hi.registerId(this.componentId+1)}return S.prototype.createStyles=function(w,C,D,z){var V=z(Rn(Cn(this.rules,C,D,z)),""),ie=this.componentId+w;D.insertRules(ie,ie,V)},S.prototype.removeStyles=function(w,C){C.clearRules(this.componentId+w)},S.prototype.renderStyles=function(w,C,D,z){w>2&&hi.registerId(this.componentId+w),this.removeStyles(w,D),this.createStyles(w,C,D,z)},S}();function uc(S){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];var D=Bn.apply(void 0,e([S],w,!1)),z="sc-global-".concat(St(JSON.stringify(D))),V=new Pn(D,z),ie=function(Ie){var xe=Ki(),Ve=o.useContext(Fn),et=o.useRef(xe.styleSheet.allocateGSInstance(z)).current;return xe.styleSheet.server&&we(et,Ie,xe.styleSheet,Ve,xe.stylis),o.useLayoutEffect(function(){if(!xe.styleSheet.server)return we(et,Ie,xe.styleSheet,Ve,xe.stylis),function(){return V.removeStyles(et,xe.styleSheet)}},[et,Ie,xe.styleSheet,Ve,xe.stylis]),null};function we(Ie,xe,Ve,et,Ke){if(V.isStatic)V.renderStyles(Ie,ec,Ve,Ke);else{var ut=t(t({},xe),{theme:Ai(xe,et,ie.defaultProps)});V.renderStyles(Ie,ut,Ve,Ke)}}return o.memo(ie)}function of(S){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];var D=Rn(Bn.apply(void 0,e([S],w,!1))),z=St(D);return new Ca(z,D)}function Da(S){var w=o.forwardRef(function(C,D){var z=Ai(C,o.useContext(Fn),S.defaultProps);return o.createElement(S,t({},C,{theme:z,ref:D}))});return Zt(w,S)}var cf=function(){function S(){var w=this;this._emitSheetCSS=function(){var C=w.instance.toString(),D=Ps(),z=Rn([D&&'nonce="'.concat(D,'"'),"".concat(Nn,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(z,">").concat(C,"</style>")},this.getStyleTags=function(){if(w.sealed)throw Jt(2);return w._emitSheetCSS()},this.getStyleElement=function(){var C;if(w.sealed)throw Jt(2);var D=((C={})[Nn]="",C["data-styled-version"]="6.1.0",C.dangerouslySetInnerHTML={__html:w.instance.toString()},C),z=Ps();return z&&(D.nonce=z),[Ft.createElement("style",Ut({},D,{key:"sc-0-0"}))]},this.seal=function(){w.sealed=!0},this.instance=new hi({isServer:!0}),this.sealed=!1}return S.prototype.collectStyles=function(w){if(this.sealed)throw Jt(2);return Ft.createElement(Ra,{sheet:this.instance},w)},S.prototype.interleaveWithNodeStream=function(w){throw Jt(3)},S}(),lf={StyleSheet:hi,mainSheet:Ir},hf="__sc-".concat(Nn,"__")},92935:function(ri){function ai(Et,dn){return dn||(dn=Et.slice(0)),Object.freeze(Object.defineProperties(Et,{raw:{value:Object.freeze(dn)}}))}ri.exports=ai,ri.exports.__esModule=!0,ri.exports.default=ri.exports},48119:function(ri,ai,Et){"use strict";Et.d(ai,{CP7:function(){return Hh},DvJ:function(){return cs},Kj0:function(){return _n},cPb:function(){return $t},vBJ:function(){return Fi},xsS:function(){return Vh}});const dn="152",pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ut={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Es=0,en=1,wt=2,xr=3,nf=0,Ho=1,Il=2,Xn=3,oi=0,tn=1,Tn=2,sf=2,Dn=0,Ti=1,Vo=2,Wo=3,Hi=4,ws=5,Vi=100,Ul=101,Dl=102,Xo=103,la=104,Nl=200,Ol=201,Fl=202,Bl=203,qo=204,Ft=205,Yo=206,$o=207,Ae=208,Re=209,nn=210,yr=0,ha=1,Zo=2,vr=3,Jo=4,zl=5,Ko=6,jo=7,Ts=0,Mr=1,Nn=2,qn=0,Sr=1,Qo=2,ec=3,Gl=4,kl=5,ua=300,An=301,mn=302,Ai=303,Wi=304,Xi=306,As=1e3,kt=1001,Rs=1002,Tt=1003,qi=1004,fa=1004,On=1005,tc=1005,St=1006,da=1007,pa=1007,Yn=1008,nc=1008,ci=1009,ic=1010,sc=1011,br=1012,rc=1013,$n=1014,Zn=1015,Yi=1016,ma=1017,ac=1018,Ri=1020,ga=1021,Zt=1023,li=1024,Er=1025,sn=1026,Rn=1027,$i=1028,wr=1029,Tr=1030,Hl=1031,Vl=1033,Jt=33776,Ar=33777,Ci=33778,Pi=33779,Cs=35840,Zi=35841,_a=35842,xa=35843,oc=36196,ya=37492,va=37496,Ps=37808,Rr=37809,Ma=37810,Sa=37811,ba=37812,Cr=37813,Ea=37814,hi=37815,wa=37816,Ta=37817,Pr=37818,Lr=37819,Ir=37820,Ls=37821,Ji=36492,Wl=36283,Aa=36284,Ki=36285,Ra=36286,Ca=2200,cc=2201,Pa=2202,ji=2300,Qi=2301,Cn=2302,ui=2400,Li=2401,Is=2402,Fn=2500,lc=2501,rf=0,af=1,La=2,hc=3e3,fi=3001,Ia=3200,Ua=3201,Bn=0,Ur=1,Jn="",Qe="srgb",Pn="srgb-linear",uc="display-p3",of=0,Da=7680,cf=7681,lf=7682,hf=7683,S=34055,w=34056,C=5386,D=512,z=513,V=514,ie=515,we=516,Ie=517,xe=518,Ve=519,et=35044,Ke=35048,ut=35040,Mt=35045,Ht=35049,Kt=35041,qt=35046,Dr=35050,rn=35042,an="100",xn="300 es",Dt=1035;class Yt{addEventListener(n,s){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[n]===void 0&&(r[n]=[]),r[n].indexOf(s)===-1&&r[n].push(s)}hasEventListener(n,s){if(this._listeners===void 0)return!1;const r=this._listeners;return r[n]!==void 0&&r[n].indexOf(s)!==-1}removeEventListener(n,s){if(this._listeners===void 0)return;const a=this._listeners[n];if(a!==void 0){const l=a.indexOf(s);l!==-1&&a.splice(l,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const r=this._listeners[n.type];if(r!==void 0){n.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,n);n.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let es=1234567;const di=Math.PI/180,Ii=180/Math.PI;function on(){const h=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rt[h&255]+Rt[h>>8&255]+Rt[h>>16&255]+Rt[h>>24&255]+"-"+Rt[n&255]+Rt[n>>8&255]+"-"+Rt[n>>16&15|64]+Rt[n>>24&255]+"-"+Rt[s&63|128]+Rt[s>>8&255]+"-"+Rt[s>>16&255]+Rt[s>>24&255]+Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]).toLowerCase()}function bt(h,n,s){return Math.max(n,Math.min(s,h))}function Nr(h,n){return(h%n+n)%n}function fc(h,n,s,r,a){return r+(h-n)*(a-r)/(s-n)}function dc(h,n,s){return h!==n?(s-h)/(n-h):0}function pi(h,n,s){return(1-s)*h+s*n}function Kn(h,n,s,r){return pi(h,n,1-Math.exp(-s*r))}function Us(h,n=1){return n-Math.abs(Nr(h,n*2)-n)}function ts(h,n,s){return h<=n?0:h>=s?1:(h=(h-n)/(s-n),h*h*(3-2*h))}function jn(h,n,s){return h<=n?0:h>=s?1:(h=(h-n)/(s-n),h*h*h*(h*(h*6-15)+10))}function Na(h,n){return h+Math.floor(Math.random()*(n-h+1))}function Or(h,n){return h+Math.random()*(n-h)}function Ds(h){return h*(.5-Math.random())}function ns(h){h!==void 0&&(es=h);let n=es+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}function Ns(h){return h*di}function is(h){return h*Ii}function zn(h){return(h&h-1)===0&&h!==0}function Os(h){return Math.pow(2,Math.ceil(Math.log(h)/Math.LN2))}function ss(h){return Math.pow(2,Math.floor(Math.log(h)/Math.LN2))}function Qn(h,n,s,r,a){const l=Math.cos,u=Math.sin,f=l(s/2),d=u(s/2),p=l((n+r)/2),m=u((n+r)/2),g=l((n-r)/2),_=u((n-r)/2),x=l((r-n)/2),v=u((r-n)/2);switch(a){case"XYX":h.set(f*m,d*g,d*_,f*p);break;case"YZY":h.set(d*_,f*m,d*g,f*p);break;case"ZXZ":h.set(d*g,d*_,f*m,f*p);break;case"XZX":h.set(f*m,d*v,d*x,f*p);break;case"YXY":h.set(d*x,f*m,d*v,f*p);break;case"ZYZ":h.set(d*v,d*x,f*m,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function yn(h,n){switch(n.constructor){case Float32Array:return h;case Uint16Array:return h/65535;case Uint8Array:return h/255;case Int16Array:return Math.max(h/32767,-1);case Int8Array:return Math.max(h/127,-1);default:throw new Error("Invalid component type.")}}function nt(h,n){switch(n.constructor){case Float32Array:return h;case Uint16Array:return Math.round(h*65535);case Uint8Array:return Math.round(h*255);case Int16Array:return Math.round(h*32767);case Int8Array:return Math.round(h*127);default:throw new Error("Invalid component type.")}}const S0={DEG2RAD:di,RAD2DEG:Ii,generateUUID:on,clamp:bt,euclideanModulo:Nr,mapLinear:fc,inverseLerp:dc,lerp:pi,damp:Kn,pingpong:Us,smoothstep:ts,smootherstep:jn,randInt:Na,randFloat:Or,randFloatSpread:Ds,seededRandom:ns,degToRad:Ns,radToDeg:is,isPowerOfTwo:zn,ceilPowerOfTwo:Os,floorPowerOfTwo:ss,setQuaternionFromProperEuler:Qn,normalize:nt,denormalize:yn};class ce{constructor(n=0,s=0){ce.prototype.isVector2=!0,this.x=n,this.y=s}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,s){return this.x=n,this.y=s,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,s){switch(n){case 0:this.x=s;break;case 1:this.y=s;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,s){return this.x=n.x+s.x,this.y=n.y+s.y,this}addScaledVector(n,s){return this.x+=n.x*s,this.y+=n.y*s,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,s){return this.x=n.x-s.x,this.y=n.y-s.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const s=this.x,r=this.y,a=n.elements;return this.x=a[0]*s+a[3]*r+a[6],this.y=a[1]*s+a[4]*r+a[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,s){return this.x=Math.max(n.x,Math.min(s.x,this.x)),this.y=Math.max(n.y,Math.min(s.y,this.y)),this}clampScalar(n,s){return this.x=Math.max(n,Math.min(s,this.x)),this.y=Math.max(n,Math.min(s,this.y)),this}clampLength(n,s){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(n,Math.min(s,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const s=Math.sqrt(this.lengthSq()*n.lengthSq());if(s===0)return Math.PI/2;const r=this.dot(n)/s;return Math.acos(bt(r,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const s=this.x-n.x,r=this.y-n.y;return s*s+r*r}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,s){return this.x+=(n.x-this.x)*s,this.y+=(n.y-this.y)*s,this}lerpVectors(n,s,r){return this.x=n.x+(s.x-n.x)*r,this.y=n.y+(s.y-n.y)*r,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,s=0){return this.x=n[s],this.y=n[s+1],this}toArray(n=[],s=0){return n[s]=this.x,n[s+1]=this.y,n}fromBufferAttribute(n,s){return this.x=n.getX(s),this.y=n.getY(s),this}rotateAround(n,s){const r=Math.cos(s),a=Math.sin(s),l=this.x-n.x,u=this.y-n.y;return this.x=l*r-u*a+n.x,this.y=l*a+u*r+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(n,s,r,a,l,u,f,d,p){const m=this.elements;return m[0]=n,m[1]=a,m[2]=f,m[3]=s,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const s=this.elements,r=n.elements;return s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8],this}extractBasis(n,s,r){return n.setFromMatrix3Column(this,0),s.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const s=n.elements;return this.set(s[0],s[4],s[8],s[1],s[5],s[9],s[2],s[6],s[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,s){const r=n.elements,a=s.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],m=r[4],g=r[7],_=r[2],x=r[5],v=r[8],b=a[0],M=a[3],y=a[6],T=a[1],E=a[4],R=a[7],P=a[2],I=a[5],B=a[8];return l[0]=u*b+f*T+d*P,l[3]=u*M+f*E+d*I,l[6]=u*y+f*R+d*B,l[1]=p*b+m*T+g*P,l[4]=p*M+m*E+g*I,l[7]=p*y+m*R+g*B,l[2]=_*b+x*T+v*P,l[5]=_*M+x*E+v*I,l[8]=_*y+x*R+v*B,this}multiplyScalar(n){const s=this.elements;return s[0]*=n,s[3]*=n,s[6]*=n,s[1]*=n,s[4]*=n,s[7]*=n,s[2]*=n,s[5]*=n,s[8]*=n,this}determinant(){const n=this.elements,s=n[0],r=n[1],a=n[2],l=n[3],u=n[4],f=n[5],d=n[6],p=n[7],m=n[8];return s*u*m-s*f*p-r*l*m+r*f*d+a*l*p-a*u*d}invert(){const n=this.elements,s=n[0],r=n[1],a=n[2],l=n[3],u=n[4],f=n[5],d=n[6],p=n[7],m=n[8],g=m*u-f*p,_=f*d-m*l,x=p*l-u*d,v=s*g+r*_+a*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return n[0]=g*b,n[1]=(a*p-m*r)*b,n[2]=(f*r-a*u)*b,n[3]=_*b,n[4]=(m*s-a*d)*b,n[5]=(a*l-f*s)*b,n[6]=x*b,n[7]=(r*d-p*s)*b,n[8]=(u*s-r*l)*b,this}transpose(){let n;const s=this.elements;return n=s[1],s[1]=s[3],s[3]=n,n=s[2],s[2]=s[6],s[6]=n,n=s[5],s[5]=s[7],s[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const s=this.elements;return n[0]=s[0],n[1]=s[3],n[2]=s[6],n[3]=s[1],n[4]=s[4],n[5]=s[7],n[6]=s[2],n[7]=s[5],n[8]=s[8],this}setUvTransform(n,s,r,a,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+n,-a*p,a*d,-a*(-p*u+d*f)+f+s,0,0,1),this}scale(n,s){return this.premultiply(pc.makeScale(n,s)),this}rotate(n){return this.premultiply(pc.makeRotation(-n)),this}translate(n,s){return this.premultiply(pc.makeTranslation(n,s)),this}makeTranslation(n,s){return this.set(1,0,n,0,1,s,0,0,1),this}makeRotation(n){const s=Math.cos(n),r=Math.sin(n);return this.set(s,-r,0,r,s,0,0,0,1),this}makeScale(n,s){return this.set(n,0,0,0,s,0,0,0,1),this}equals(n){const s=this.elements,r=n.elements;for(let a=0;a<9;a++)if(s[a]!==r[a])return!1;return!0}fromArray(n,s=0){for(let r=0;r<9;r++)this.elements[r]=n[r+s];return this}toArray(n=[],s=0){const r=this.elements;return n[s]=r[0],n[s+1]=r[1],n[s+2]=r[2],n[s+3]=r[3],n[s+4]=r[4],n[s+5]=r[5],n[s+6]=r[6],n[s+7]=r[7],n[s+8]=r[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new lt;function Xl(h){for(let n=h.length-1;n>=0;--n)if(h[n]>=65535)return!0;return!1}const uf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Fs(h,n){return new uf[h](n)}function Fr(h){return document.createElementNS("http://www.w3.org/1999/xhtml",h)}const ql={};function Br(h){h in ql||(ql[h]=!0,console.warn(h))}function Bs(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function mc(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}const ff=new lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),df=new lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function pf(h){return h.convertSRGBToLinear().applyMatrix3(df)}function mf(h){return h.applyMatrix3(ff).convertLinearToSRGB()}const gf={[Pn]:h=>h,[Qe]:h=>h.convertSRGBToLinear(),[uc]:pf},_f={[Pn]:h=>h,[Qe]:h=>h.convertLinearToSRGB(),[uc]:mf},Gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(h){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!h},get workingColorSpace(){return Pn},set workingColorSpace(h){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(h,n,s){if(this.enabled===!1||n===s||!n||!s)return h;const r=gf[n],a=_f[s];if(r===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${n}" to "${s}".`);return a(r(h))},fromWorkingColorSpace:function(h,n){return this.convert(h,this.workingColorSpace,n)},toWorkingColorSpace:function(h,n){return this.convert(h,n,this.workingColorSpace)}};let zs;class Yl{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement=="undefined")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{zs===void 0&&(zs=Fr("canvas")),zs.width=n.width,zs.height=n.height;const r=zs.getContext("2d");n instanceof ImageData?r.putImageData(n,0,0):r.drawImage(n,0,0,n.width,n.height),s=zs}return s.width>2048||s.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),s.toDataURL("image/jpeg",.6)):s.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap){const s=Fr("canvas");s.width=n.width,s.height=n.height;const r=s.getContext("2d");r.drawImage(n,0,0,n.width,n.height);const a=r.getImageData(0,0,n.width,n.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Bs(l[u]/255)*255;return r.putImageData(a,0,0),s}else if(n.data){const s=n.data.slice(0);for(let r=0;r<s.length;r++)s instanceof Uint8Array||s instanceof Uint8ClampedArray?s[r]=Math.floor(Bs(s[r]/255)*255):s[r]=Bs(s[r]);return{data:s,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}class Gs{constructor(n=null){this.isSource=!0,this.uuid=on(),this.data=n,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const s=n===void 0||typeof n=="string";if(!s&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(gc(a[u].image)):l.push(gc(a[u]))}else l=gc(a);r.url=l}return s||(n.images[this.uuid]=r),r}}function gc(h){return typeof HTMLImageElement!="undefined"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&h instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&h instanceof ImageBitmap?Yl.getDataURL(h):h.data?{data:Array.from(h.data),width:h.width,height:h.height,type:h.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;class cn extends Yt{constructor(n=cn.DEFAULT_IMAGE,s=cn.DEFAULT_MAPPING,r=kt,a=kt,l=St,u=Yn,f=Zt,d=ci,p=cn.DEFAULT_ANISOTROPY,m=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=on(),this.name="",this.source=new Gs(n),this.mipmaps=[],this.mapping=s,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===fi?Qe:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const s=n===void 0||typeof n=="string";if(!s&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),s||(n.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==ua)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case As:n.x=n.x-Math.floor(n.x);break;case kt:n.x=n.x<0?0:1;break;case Rs:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case As:n.y=n.y-Math.floor(n.y);break;case kt:n.y=n.y<0?0:1;break;case Rs:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?fi:hc}set encoding(n){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=n===fi?Qe:Jn}}cn.DEFAULT_IMAGE=null,cn.DEFAULT_MAPPING=ua,cn.DEFAULT_ANISOTROPY=1;class gt{constructor(n=0,s=0,r=0,a=1){gt.prototype.isVector4=!0,this.x=n,this.y=s,this.z=r,this.w=a}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,s,r,a){return this.x=n,this.y=s,this.z=r,this.w=a,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,s){switch(n){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;case 3:this.w=s;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,s){return this.x=n.x+s.x,this.y=n.y+s.y,this.z=n.z+s.z,this.w=n.w+s.w,this}addScaledVector(n,s){return this.x+=n.x*s,this.y+=n.y*s,this.z+=n.z*s,this.w+=n.w*s,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,s){return this.x=n.x-s.x,this.y=n.y-s.y,this.z=n.z-s.z,this.w=n.w-s.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const s=this.x,r=this.y,a=this.z,l=this.w,u=n.elements;return this.x=u[0]*s+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*s+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*s+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*s+u[7]*r+u[11]*a+u[15]*l,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const s=Math.sqrt(1-n.w*n.w);return s<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/s,this.y=n.y/s,this.z=n.z/s),this}setAxisAngleFromRotationMatrix(n){let s,r,a,l;const d=n.elements,p=d[0],m=d[4],g=d[8],_=d[1],x=d[5],v=d[9],b=d[2],M=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-b)<.01&&Math.abs(v-M)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+b)<.1&&Math.abs(v+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;s=Math.PI;const E=(p+1)/2,R=(x+1)/2,P=(y+1)/2,I=(m+_)/4,B=(g+b)/4,G=(v+M)/4;return E>R&&E>P?E<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(E),a=I/r,l=B/r):R>P?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=I/a,l=G/a):P<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),r=B/l,a=G/l),this.set(r,a,l,s),this}let T=Math.sqrt((M-v)*(M-v)+(g-b)*(g-b)+(_-m)*(_-m));return Math.abs(T)<.001&&(T=1),this.x=(M-v)/T,this.y=(g-b)/T,this.z=(_-m)/T,this.w=Math.acos((p+x+y-1)/2),this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,s){return this.x=Math.max(n.x,Math.min(s.x,this.x)),this.y=Math.max(n.y,Math.min(s.y,this.y)),this.z=Math.max(n.z,Math.min(s.z,this.z)),this.w=Math.max(n.w,Math.min(s.w,this.w)),this}clampScalar(n,s){return this.x=Math.max(n,Math.min(s,this.x)),this.y=Math.max(n,Math.min(s,this.y)),this.z=Math.max(n,Math.min(s,this.z)),this.w=Math.max(n,Math.min(s,this.w)),this}clampLength(n,s){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(n,Math.min(s,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,s){return this.x+=(n.x-this.x)*s,this.y+=(n.y-this.y)*s,this.z+=(n.z-this.z)*s,this.w+=(n.w-this.w)*s,this}lerpVectors(n,s,r){return this.x=n.x+(s.x-n.x)*r,this.y=n.y+(s.y-n.y)*r,this.z=n.z+(s.z-n.z)*r,this.w=n.w+(s.w-n.w)*r,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,s=0){return this.x=n[s],this.y=n[s+1],this.z=n[s+2],this.w=n[s+3],this}toArray(n=[],s=0){return n[s]=this.x,n[s+1]=this.y,n[s+2]=this.z,n[s+3]=this.w,n}fromBufferAttribute(n,s){return this.x=n.getX(s),this.y=n.getY(s),this.z=n.getZ(s),this.w=n.getW(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rs extends Yt{constructor(n=1,s=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=n,this.height=s,this.depth=1,this.scissor=new gt(0,0,n,s),this.scissorTest=!1,this.viewport=new gt(0,0,n,s);const a={width:n,height:s,depth:1};r.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===fi?Qe:Jn),this.texture=new cn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:St,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(n,s,r=1){(this.width!==n||this.height!==s||this.depth!==r)&&(this.width=n,this.height=s,this.depth=r,this.texture.image.width=n,this.texture.image.height=s,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,n,s),this.scissor.set(0,0,n,s)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.texture=n.texture.clone(),this.texture.isRenderTargetTexture=!0;const s=Object.assign({},n.texture.image);return this.texture.source=new Gs(s),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends cn{constructor(n=null,s=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:s,height:r,depth:a},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b0 extends null{constructor(n=1,s=1,r=1){super(n,s),this.isWebGLArrayRenderTarget=!0,this.depth=r,this.texture=new _c(null,n,s,r),this.texture.isRenderTargetTexture=!0}}class $l extends cn{constructor(n=null,s=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:s,height:r,depth:a},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E0 extends null{constructor(n=1,s=1,r=1){super(n,s),this.isWebGL3DRenderTarget=!0,this.depth=r,this.texture=new $l(null,n,s,r),this.texture.isRenderTargetTexture=!0}}class w0 extends null{constructor(n=1,s=1,r=1,a={}){super(n,s,a),this.isWebGLMultipleRenderTargets=!0;const l=this.texture;this.texture=[];for(let u=0;u<r;u++)this.texture[u]=l.clone(),this.texture[u].isRenderTargetTexture=!0}setSize(n,s,r=1){if(this.width!==n||this.height!==s||this.depth!==r){this.width=n,this.height=s,this.depth=r;for(let a=0,l=this.texture.length;a<l;a++)this.texture[a].image.width=n,this.texture[a].image.height=s,this.texture[a].image.depth=r;this.dispose()}return this.viewport.set(0,0,n,s),this.scissor.set(0,0,n,s),this}copy(n){this.dispose(),this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.texture.length=0;for(let s=0,r=n.texture.length;s<r;s++)this.texture[s]=n.texture[s].clone(),this.texture[s].isRenderTargetTexture=!0;return this}}class vn{constructor(n=0,s=0,r=0,a=1){this.isQuaternion=!0,this._x=n,this._y=s,this._z=r,this._w=a}static slerpFlat(n,s,r,a,l,u,f){let d=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];const _=l[u+0],x=l[u+1],v=l[u+2],b=l[u+3];if(f===0){n[s+0]=d,n[s+1]=p,n[s+2]=m,n[s+3]=g;return}if(f===1){n[s+0]=_,n[s+1]=x,n[s+2]=v,n[s+3]=b;return}if(g!==b||d!==_||p!==x||m!==v){let M=1-f;const y=d*_+p*x+m*v+g*b,T=y>=0?1:-1,E=1-y*y;if(E>Number.EPSILON){const P=Math.sqrt(E),I=Math.atan2(P,y*T);M=Math.sin(M*I)/P,f=Math.sin(f*I)/P}const R=f*T;if(d=d*M+_*R,p=p*M+x*R,m=m*M+v*R,g=g*M+b*R,M===1-f){const P=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=P,p*=P,m*=P,g*=P}}n[s]=d,n[s+1]=p,n[s+2]=m,n[s+3]=g}static multiplyQuaternionsFlat(n,s,r,a,l,u){const f=r[a],d=r[a+1],p=r[a+2],m=r[a+3],g=l[u],_=l[u+1],x=l[u+2],v=l[u+3];return n[s]=f*v+m*g+d*x-p*_,n[s+1]=d*v+m*_+p*g-f*x,n[s+2]=p*v+m*x+f*_-d*g,n[s+3]=m*v-f*g-d*_-p*x,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,s,r,a){return this._x=n,this._y=s,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,s){const r=n._x,a=n._y,l=n._z,u=n._order,f=Math.cos,d=Math.sin,p=f(r/2),m=f(a/2),g=f(l/2),_=d(r/2),x=d(a/2),v=d(l/2);switch(u){case"XYZ":this._x=_*m*g+p*x*v,this._y=p*x*g-_*m*v,this._z=p*m*v+_*x*g,this._w=p*m*g-_*x*v;break;case"YXZ":this._x=_*m*g+p*x*v,this._y=p*x*g-_*m*v,this._z=p*m*v-_*x*g,this._w=p*m*g+_*x*v;break;case"ZXY":this._x=_*m*g-p*x*v,this._y=p*x*g+_*m*v,this._z=p*m*v+_*x*g,this._w=p*m*g-_*x*v;break;case"ZYX":this._x=_*m*g-p*x*v,this._y=p*x*g+_*m*v,this._z=p*m*v-_*x*g,this._w=p*m*g+_*x*v;break;case"YZX":this._x=_*m*g+p*x*v,this._y=p*x*g+_*m*v,this._z=p*m*v-_*x*g,this._w=p*m*g-_*x*v;break;case"XZY":this._x=_*m*g-p*x*v,this._y=p*x*g-_*m*v,this._z=p*m*v+_*x*g,this._w=p*m*g+_*x*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return s!==!1&&this._onChangeCallback(),this}setFromAxisAngle(n,s){const r=s/2,a=Math.sin(r);return this._x=n.x*a,this._y=n.y*a,this._z=n.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(n){const s=n.elements,r=s[0],a=s[4],l=s[8],u=s[1],f=s[5],d=s[9],p=s[2],m=s[6],g=s[10],_=r+f+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-p)*x,this._z=(u-a)*x}else if(r>f&&r>g){const x=2*Math.sqrt(1+r-f-g);this._w=(m-d)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(l+p)/x}else if(f>g){const x=2*Math.sqrt(1+f-r-g);this._w=(l-p)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-f);this._w=(u-a)/x,this._x=(l+p)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(n,s){let r=n.dot(s)+1;return r<Number.EPSILON?(r=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=r):(this._x=0,this._y=-n.z,this._z=n.y,this._w=r)):(this._x=n.y*s.z-n.z*s.y,this._y=n.z*s.x-n.x*s.z,this._z=n.x*s.y-n.y*s.x,this._w=r),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(bt(this.dot(n),-1,1)))}rotateTowards(n,s){const r=this.angleTo(n);if(r===0)return this;const a=Math.min(1,s/r);return this.slerp(n,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,s){const r=n._x,a=n._y,l=n._z,u=n._w,f=s._x,d=s._y,p=s._z,m=s._w;return this._x=r*m+u*f+a*p-l*d,this._y=a*m+u*d+l*f-r*p,this._z=l*m+u*p+r*d-a*f,this._w=u*m-r*f-a*d-l*p,this._onChangeCallback(),this}slerp(n,s){if(s===0)return this;if(s===1)return this.copy(n);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*n._w+r*n._x+a*n._y+l*n._z;if(f<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,f=-f):this.copy(n),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-s;return this._w=x*u+s*this._w,this._x=x*r+s*this._x,this._y=x*a+s*this._y,this._z=x*l+s*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),g=Math.sin((1-s)*m)/p,_=Math.sin(s*m)/p;return this._w=u*g+this._w*_,this._x=r*g+this._x*_,this._y=a*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(n,s,r){return this.copy(n).slerp(s,r)}random(){const n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(s*Math.cos(a),r*Math.sin(l),r*Math.cos(l),s*Math.sin(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,s=0){return this._x=n[s],this._y=n[s+1],this._z=n[s+2],this._w=n[s+3],this._onChangeCallback(),this}toArray(n=[],s=0){return n[s]=this._x,n[s+1]=this._y,n[s+2]=this._z,n[s+3]=this._w,n}fromBufferAttribute(n,s){return this._x=n.getX(s),this._y=n.getY(s),this._z=n.getZ(s),this._w=n.getW(s),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(n=0,s=0,r=0){N.prototype.isVector3=!0,this.x=n,this.y=s,this.z=r}set(n,s,r){return r===void 0&&(r=this.z),this.x=n,this.y=s,this.z=r,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,s){switch(n){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,s){return this.x=n.x+s.x,this.y=n.y+s.y,this.z=n.z+s.z,this}addScaledVector(n,s){return this.x+=n.x*s,this.y+=n.y*s,this.z+=n.z*s,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,s){return this.x=n.x-s.x,this.y=n.y-s.y,this.z=n.z-s.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,s){return this.x=n.x*s.x,this.y=n.y*s.y,this.z=n.z*s.z,this}applyEuler(n){return this.applyQuaternion(Zl.setFromEuler(n))}applyAxisAngle(n,s){return this.applyQuaternion(Zl.setFromAxisAngle(n,s))}applyMatrix3(n){const s=this.x,r=this.y,a=this.z,l=n.elements;return this.x=l[0]*s+l[3]*r+l[6]*a,this.y=l[1]*s+l[4]*r+l[7]*a,this.z=l[2]*s+l[5]*r+l[8]*a,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const s=this.x,r=this.y,a=this.z,l=n.elements,u=1/(l[3]*s+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*s+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*s+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*s+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(n){const s=this.x,r=this.y,a=this.z,l=n.x,u=n.y,f=n.z,d=n.w,p=d*s+u*a-f*r,m=d*r+f*s-l*a,g=d*a+l*r-u*s,_=-l*s-u*r-f*a;return this.x=p*d+_*-l+m*-f-g*-u,this.y=m*d+_*-u+g*-l-p*-f,this.z=g*d+_*-f+p*-u-m*-l,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const s=this.x,r=this.y,a=this.z,l=n.elements;return this.x=l[0]*s+l[4]*r+l[8]*a,this.y=l[1]*s+l[5]*r+l[9]*a,this.z=l[2]*s+l[6]*r+l[10]*a,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,s){return this.x=Math.max(n.x,Math.min(s.x,this.x)),this.y=Math.max(n.y,Math.min(s.y,this.y)),this.z=Math.max(n.z,Math.min(s.z,this.z)),this}clampScalar(n,s){return this.x=Math.max(n,Math.min(s,this.x)),this.y=Math.max(n,Math.min(s,this.y)),this.z=Math.max(n,Math.min(s,this.z)),this}clampLength(n,s){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(n,Math.min(s,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,s){return this.x+=(n.x-this.x)*s,this.y+=(n.y-this.y)*s,this.z+=(n.z-this.z)*s,this}lerpVectors(n,s,r){return this.x=n.x+(s.x-n.x)*r,this.y=n.y+(s.y-n.y)*r,this.z=n.z+(s.z-n.z)*r,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,s){const r=n.x,a=n.y,l=n.z,u=s.x,f=s.y,d=s.z;return this.x=a*d-l*f,this.y=l*u-r*d,this.z=r*f-a*u,this}projectOnVector(n){const s=n.lengthSq();if(s===0)return this.set(0,0,0);const r=n.dot(this)/s;return this.copy(n).multiplyScalar(r)}projectOnPlane(n){return xc.copy(this).projectOnVector(n),this.sub(xc)}reflect(n){return this.sub(xc.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const s=Math.sqrt(this.lengthSq()*n.lengthSq());if(s===0)return Math.PI/2;const r=this.dot(n)/s;return Math.acos(bt(r,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const s=this.x-n.x,r=this.y-n.y,a=this.z-n.z;return s*s+r*r+a*a}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,s,r){const a=Math.sin(s)*n;return this.x=a*Math.sin(r),this.y=Math.cos(s)*n,this.z=a*Math.cos(r),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,s,r){return this.x=n*Math.sin(s),this.y=r,this.z=n*Math.cos(s),this}setFromMatrixPosition(n){const s=n.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this}setFromMatrixScale(n){const s=this.setFromMatrixColumn(n,0).length(),r=this.setFromMatrixColumn(n,1).length(),a=this.setFromMatrixColumn(n,2).length();return this.x=s,this.y=r,this.z=a,this}setFromMatrixColumn(n,s){return this.fromArray(n.elements,s*4)}setFromMatrix3Column(n,s){return this.fromArray(n.elements,s*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,s=0){return this.x=n[s],this.y=n[s+1],this.z=n[s+2],this}toArray(n=[],s=0){return n[s]=this.x,n[s+1]=this.y,n[s+2]=this.z,n}fromBufferAttribute(n,s){return this.x=n.getX(s),this.y=n.getY(s),this.z=n.getZ(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=(Math.random()-.5)*2,s=Math.random()*Math.PI*2,r=Math.sqrt(1-Ll(n,2));return this.x=r*Math.cos(s),this.y=r*Math.sin(s),this.z=n,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new N,Zl=new vn;class mi{constructor(n=new N(1/0,1/0,1/0),s=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=s}set(n,s){return this.min.copy(n),this.max.copy(s),this}setFromArray(n){this.makeEmpty();for(let s=0,r=n.length;s<r;s+=3)this.expandByPoint(_i.fromArray(n,s));return this}setFromBufferAttribute(n){this.makeEmpty();for(let s=0,r=n.count;s<r;s++)this.expandByPoint(_i.fromBufferAttribute(n,s));return this}setFromPoints(n){this.makeEmpty();for(let s=0,r=n.length;s<r;s++)this.expandByPoint(n[s]);return this}setFromCenterAndSize(n,s){const r=_i.copy(s).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}setFromObject(n,s=!1){return this.makeEmpty(),this.expandByObject(n,s)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,s=!1){if(n.updateWorldMatrix(!1,!1),n.boundingBox!==void 0)n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox),ks.applyMatrix4(n.matrixWorld),this.union(ks);else{const a=n.geometry;if(a!==void 0)if(s&&a.attributes!==void 0&&a.attributes.position!==void 0){const l=a.attributes.position;for(let u=0,f=l.count;u<f;u++)_i.fromBufferAttribute(l,u).applyMatrix4(n.matrixWorld),this.expandByPoint(_i)}else a.boundingBox===null&&a.computeBoundingBox(),ks.copy(a.boundingBox),ks.applyMatrix4(n.matrixWorld),this.union(ks)}const r=n.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],s);return this}containsPoint(n){return!(n.x<this.min.x||n.x>this.max.x||n.y<this.min.y||n.y>this.max.y||n.z<this.min.z||n.z>this.max.z)}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,s){return s.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return!(n.max.x<this.min.x||n.min.x>this.max.x||n.max.y<this.min.y||n.min.y>this.max.y||n.max.z<this.min.z||n.min.z>this.max.z)}intersectsSphere(n){return this.clampPoint(n.center,_i),_i.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let s,r;return n.normal.x>0?(s=n.normal.x*this.min.x,r=n.normal.x*this.max.x):(s=n.normal.x*this.max.x,r=n.normal.x*this.min.x),n.normal.y>0?(s+=n.normal.y*this.min.y,r+=n.normal.y*this.max.y):(s+=n.normal.y*this.max.y,r+=n.normal.y*this.min.y),n.normal.z>0?(s+=n.normal.z*this.min.z,r+=n.normal.z*this.max.z):(s+=n.normal.z*this.max.z,r+=n.normal.z*this.min.z),s<=-n.constant&&r>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(zr),Oa.subVectors(this.max,zr),Hs.subVectors(n.a,zr),Vs.subVectors(n.b,zr),Ws.subVectors(n.c,zr),Ui.subVectors(Vs,Hs),Di.subVectors(Ws,Vs),as.subVectors(Hs,Ws);let s=[0,-Ui.z,Ui.y,0,-Di.z,Di.y,0,-as.z,as.y,Ui.z,0,-Ui.x,Di.z,0,-Di.x,as.z,0,-as.x,-Ui.y,Ui.x,0,-Di.y,Di.x,0,-as.y,as.x,0];return!yc(s,Hs,Vs,Ws,Oa)||(s=[1,0,0,0,1,0,0,0,1],!yc(s,Hs,Vs,Ws,Oa))?!1:(Fa.crossVectors(Ui,Di),s=[Fa.x,Fa.y,Fa.z],yc(s,Hs,Vs,Ws,Oa))}clampPoint(n,s){return s.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,_i).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(_i).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(gi),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],_i=new N,ks=new mi,Hs=new N,Vs=new N,Ws=new N,Ui=new N,Di=new N,as=new N,zr=new N,Oa=new N,Fa=new N,os=new N;function yc(h,n,s,r,a){for(let l=0,u=h.length-3;l<=u;l+=3){os.fromArray(h,l);const f=a.x*Math.abs(os.x)+a.y*Math.abs(os.y)+a.z*Math.abs(os.z),d=n.dot(os),p=s.dot(os),m=r.dot(os);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const yf=new mi,Gr=new N,vc=new N;class xi{constructor(n=new N,s=-1){this.center=n,this.radius=s}set(n,s){return this.center.copy(n),this.radius=s,this}setFromPoints(n,s){const r=this.center;s!==void 0?r.copy(s):yf.setFromPoints(n).getCenter(r);let a=0;for(let l=0,u=n.length;l<u;l++)a=Math.max(a,r.distanceToSquared(n[l]));return this.radius=Math.sqrt(a),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const s=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=s*s}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,s){const r=this.center.distanceToSquared(n);return s.copy(n),r>this.radius*this.radius&&(s.sub(this.center).normalize(),s.multiplyScalar(this.radius).add(this.center)),s}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;Gr.subVectors(n,this.center);const s=Gr.lengthSq();if(s>this.radius*this.radius){const r=Math.sqrt(s),a=(r-this.radius)*.5;this.center.addScaledVector(Gr,a/r),this.radius+=a}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(vc.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(Gr.copy(n.center).add(vc)),this.expandByPoint(Gr.copy(n.center).sub(vc))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new N,Mc=new N,Ba=new N,Ni=new N,Sc=new N,za=new N,bc=new N;class Ga{constructor(n=new N,s=new N(0,0,-1)){this.origin=n,this.direction=s}set(n,s){return this.origin.copy(n),this.direction.copy(s),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,s){return s.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,yi)),this}closestPointToPoint(n,s){s.subVectors(n,this.origin);const r=s.dot(this.direction);return r<0?s.copy(this.origin):s.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const s=yi.subVectors(n,this.origin).dot(this.direction);return s<0?this.origin.distanceToSquared(n):(yi.copy(this.origin).addScaledVector(this.direction,s),yi.distanceToSquared(n))}distanceSqToSegment(n,s,r,a){Mc.copy(n).add(s).multiplyScalar(.5),Ba.copy(s).sub(n).normalize(),Ni.copy(this.origin).sub(Mc);const l=n.distanceTo(s)*.5,u=-this.direction.dot(Ba),f=Ni.dot(this.direction),d=-Ni.dot(Ba),p=Ni.lengthSq(),m=Math.abs(1-u*u);let g,_,x,v;if(m>0)if(g=u*d-f,_=u*f-d,v=l*m,g>=0)if(_>=-v)if(_<=v){const b=1/m;g*=b,_*=b,x=g*(g+u*_+2*f)+_*(u*g+_+2*d)+p}else _=l,g=Math.max(0,-(u*_+f)),x=-g*g+_*(_+2*d)+p;else _=-l,g=Math.max(0,-(u*_+f)),x=-g*g+_*(_+2*d)+p;else _<=-v?(g=Math.max(0,-(-u*l+f)),_=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+_*(_+2*d)+p):_<=v?(g=0,_=Math.min(Math.max(-l,-d),l),x=_*(_+2*d)+p):(g=Math.max(0,-(u*l+f)),_=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+_*(_+2*d)+p);else _=u>0?-l:l,g=Math.max(0,-(u*_+f)),x=-g*g+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Mc).addScaledVector(Ba,_),x}intersectSphere(n,s){yi.subVectors(n.center,this.origin);const r=yi.dot(this.direction),a=yi.dot(yi)-r*r,l=n.radius*n.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,s):this.at(f,s)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const s=n.normal.dot(this.direction);if(s===0)return n.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(n.normal)+n.constant)/s;return r>=0?r:null}intersectPlane(n,s){const r=this.distanceToPlane(n);return r===null?null:this.at(r,s)}intersectsPlane(n){const s=n.distanceToPoint(this.origin);return s===0||n.normal.dot(this.direction)*s<0}intersectBox(n,s){let r,a,l,u,f,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(n.min.x-_.x)*p,a=(n.max.x-_.x)*p):(r=(n.max.x-_.x)*p,a=(n.min.x-_.x)*p),m>=0?(l=(n.min.y-_.y)*m,u=(n.max.y-_.y)*m):(l=(n.max.y-_.y)*m,u=(n.min.y-_.y)*m),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),g>=0?(f=(n.min.z-_.z)*g,d=(n.max.z-_.z)*g):(f=(n.max.z-_.z)*g,d=(n.min.z-_.z)*g),r>d||f>a)||((f>r||r!==r)&&(r=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,s)}intersectsBox(n){return this.intersectBox(n,yi)!==null}intersectTriangle(n,s,r,a,l){Sc.subVectors(s,n),za.subVectors(r,n),bc.crossVectors(Sc,za);let u=this.direction.dot(bc),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ni.subVectors(this.origin,n);const d=f*this.direction.dot(za.crossVectors(Ni,za));if(d<0)return null;const p=f*this.direction.dot(Sc.cross(Ni));if(p<0||d+p>u)return null;const m=-f*Ni.dot(bc);return m<0?null:this.at(m/u,l)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(n,s,r,a,l,u,f,d,p,m,g,_,x,v,b,M){const y=this.elements;return y[0]=n,y[4]=s,y[8]=r,y[12]=a,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=v,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(n){const s=this.elements,r=n.elements;return s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8],s[9]=r[9],s[10]=r[10],s[11]=r[11],s[12]=r[12],s[13]=r[13],s[14]=r[14],s[15]=r[15],this}copyPosition(n){const s=this.elements,r=n.elements;return s[12]=r[12],s[13]=r[13],s[14]=r[14],this}setFromMatrix3(n){const s=n.elements;return this.set(s[0],s[3],s[6],0,s[1],s[4],s[7],0,s[2],s[5],s[8],0,0,0,0,1),this}extractBasis(n,s,r){return n.setFromMatrixColumn(this,0),s.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(n,s,r){return this.set(n.x,s.x,r.x,0,n.y,s.y,r.y,0,n.z,s.z,r.z,0,0,0,0,1),this}extractRotation(n){const s=this.elements,r=n.elements,a=1/Xs.setFromMatrixColumn(n,0).length(),l=1/Xs.setFromMatrixColumn(n,1).length(),u=1/Xs.setFromMatrixColumn(n,2).length();return s[0]=r[0]*a,s[1]=r[1]*a,s[2]=r[2]*a,s[3]=0,s[4]=r[4]*l,s[5]=r[5]*l,s[6]=r[6]*l,s[7]=0,s[8]=r[8]*u,s[9]=r[9]*u,s[10]=r[10]*u,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromEuler(n){const s=this.elements,r=n.x,a=n.y,l=n.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(n.order==="XYZ"){const _=u*m,x=u*g,v=f*m,b=f*g;s[0]=d*m,s[4]=-d*g,s[8]=p,s[1]=x+v*p,s[5]=_-b*p,s[9]=-f*d,s[2]=b-_*p,s[6]=v+x*p,s[10]=u*d}else if(n.order==="YXZ"){const _=d*m,x=d*g,v=p*m,b=p*g;s[0]=_+b*f,s[4]=v*f-x,s[8]=u*p,s[1]=u*g,s[5]=u*m,s[9]=-f,s[2]=x*f-v,s[6]=b+_*f,s[10]=u*d}else if(n.order==="ZXY"){const _=d*m,x=d*g,v=p*m,b=p*g;s[0]=_-b*f,s[4]=-u*g,s[8]=v+x*f,s[1]=x+v*f,s[5]=u*m,s[9]=b-_*f,s[2]=-u*p,s[6]=f,s[10]=u*d}else if(n.order==="ZYX"){const _=u*m,x=u*g,v=f*m,b=f*g;s[0]=d*m,s[4]=v*p-x,s[8]=_*p+b,s[1]=d*g,s[5]=b*p+_,s[9]=x*p-v,s[2]=-p,s[6]=f*d,s[10]=u*d}else if(n.order==="YZX"){const _=u*d,x=u*p,v=f*d,b=f*p;s[0]=d*m,s[4]=b-_*g,s[8]=v*g+x,s[1]=g,s[5]=u*m,s[9]=-f*m,s[2]=-p*m,s[6]=x*g+v,s[10]=_-b*g}else if(n.order==="XZY"){const _=u*d,x=u*p,v=f*d,b=f*p;s[0]=d*m,s[4]=-g,s[8]=p*m,s[1]=_*g+b,s[5]=u*m,s[9]=x*g-v,s[2]=v*g-x,s[6]=f*m,s[10]=b*g+_}return s[3]=0,s[7]=0,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromQuaternion(n){return this.compose(vf,n,Mf)}lookAt(n,s,r){const a=this.elements;return Mn.subVectors(n,s),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Oi.crossVectors(r,Mn),Oi.lengthSq()===0&&(Math.abs(r.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Oi.crossVectors(r,Mn)),Oi.normalize(),ka.crossVectors(Mn,Oi),a[0]=Oi.x,a[4]=ka.x,a[8]=Mn.x,a[1]=Oi.y,a[5]=ka.y,a[9]=Mn.y,a[2]=Oi.z,a[6]=ka.z,a[10]=Mn.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,s){const r=n.elements,a=s.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],m=r[1],g=r[5],_=r[9],x=r[13],v=r[2],b=r[6],M=r[10],y=r[14],T=r[3],E=r[7],R=r[11],P=r[15],I=a[0],B=a[4],G=a[8],A=a[12],O=a[1],$=a[5],te=a[9],W=a[13],Y=a[2],J=a[6],le=a[10],ae=a[14],re=a[3],he=a[7],de=a[11],Pe=a[15];return l[0]=u*I+f*O+d*Y+p*re,l[4]=u*B+f*$+d*J+p*he,l[8]=u*G+f*te+d*le+p*de,l[12]=u*A+f*W+d*ae+p*Pe,l[1]=m*I+g*O+_*Y+x*re,l[5]=m*B+g*$+_*J+x*he,l[9]=m*G+g*te+_*le+x*de,l[13]=m*A+g*W+_*ae+x*Pe,l[2]=v*I+b*O+M*Y+y*re,l[6]=v*B+b*$+M*J+y*he,l[10]=v*G+b*te+M*le+y*de,l[14]=v*A+b*W+M*ae+y*Pe,l[3]=T*I+E*O+R*Y+P*re,l[7]=T*B+E*$+R*J+P*he,l[11]=T*G+E*te+R*le+P*de,l[15]=T*A+E*W+R*ae+P*Pe,this}multiplyScalar(n){const s=this.elements;return s[0]*=n,s[4]*=n,s[8]*=n,s[12]*=n,s[1]*=n,s[5]*=n,s[9]*=n,s[13]*=n,s[2]*=n,s[6]*=n,s[10]*=n,s[14]*=n,s[3]*=n,s[7]*=n,s[11]*=n,s[15]*=n,this}determinant(){const n=this.elements,s=n[0],r=n[4],a=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],m=n[2],g=n[6],_=n[10],x=n[14],v=n[3],b=n[7],M=n[11],y=n[15];return v*(+l*d*g-a*p*g-l*f*_+r*p*_+a*f*x-r*d*x)+b*(+s*d*x-s*p*_+l*u*_-a*u*x+a*p*m-l*d*m)+M*(+s*p*g-s*f*x-l*u*g+r*u*x+l*f*m-r*p*m)+y*(-a*f*m-s*d*g+s*f*_+a*u*g-r*u*_+r*d*m)}transpose(){const n=this.elements;let s;return s=n[1],n[1]=n[4],n[4]=s,s=n[2],n[2]=n[8],n[8]=s,s=n[6],n[6]=n[9],n[9]=s,s=n[3],n[3]=n[12],n[12]=s,s=n[7],n[7]=n[13],n[13]=s,s=n[11],n[11]=n[14],n[14]=s,this}setPosition(n,s,r){const a=this.elements;return n.isVector3?(a[12]=n.x,a[13]=n.y,a[14]=n.z):(a[12]=n,a[13]=s,a[14]=r),this}invert(){const n=this.elements,s=n[0],r=n[1],a=n[2],l=n[3],u=n[4],f=n[5],d=n[6],p=n[7],m=n[8],g=n[9],_=n[10],x=n[11],v=n[12],b=n[13],M=n[14],y=n[15],T=g*M*p-b*_*p+b*d*x-f*M*x-g*d*y+f*_*y,E=v*_*p-m*M*p-v*d*x+u*M*x+m*d*y-u*_*y,R=m*b*p-v*g*p+v*f*x-u*b*x-m*f*y+u*g*y,P=v*g*d-m*b*d-v*f*_+u*b*_+m*f*M-u*g*M,I=s*T+r*E+a*R+l*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return n[0]=T*B,n[1]=(b*_*l-g*M*l-b*a*x+r*M*x+g*a*y-r*_*y)*B,n[2]=(f*M*l-b*d*l+b*a*p-r*M*p-f*a*y+r*d*y)*B,n[3]=(g*d*l-f*_*l-g*a*p+r*_*p+f*a*x-r*d*x)*B,n[4]=E*B,n[5]=(m*M*l-v*_*l+v*a*x-s*M*x-m*a*y+s*_*y)*B,n[6]=(v*d*l-u*M*l-v*a*p+s*M*p+u*a*y-s*d*y)*B,n[7]=(u*_*l-m*d*l+m*a*p-s*_*p-u*a*x+s*d*x)*B,n[8]=R*B,n[9]=(v*g*l-m*b*l-v*r*x+s*b*x+m*r*y-s*g*y)*B,n[10]=(u*b*l-v*f*l+v*r*p-s*b*p-u*r*y+s*f*y)*B,n[11]=(m*f*l-u*g*l-m*r*p+s*g*p+u*r*x-s*f*x)*B,n[12]=P*B,n[13]=(m*b*a-v*g*a+v*r*_-s*b*_-m*r*M+s*g*M)*B,n[14]=(v*f*a-u*b*a-v*r*d+s*b*d+u*r*M-s*f*M)*B,n[15]=(u*g*a-m*f*a+m*r*d-s*g*d-u*r*_+s*f*_)*B,this}scale(n){const s=this.elements,r=n.x,a=n.y,l=n.z;return s[0]*=r,s[4]*=a,s[8]*=l,s[1]*=r,s[5]*=a,s[9]*=l,s[2]*=r,s[6]*=a,s[10]*=l,s[3]*=r,s[7]*=a,s[11]*=l,this}getMaxScaleOnAxis(){const n=this.elements,s=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],r=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],a=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(s,r,a))}makeTranslation(n,s,r){return this.set(1,0,0,n,0,1,0,s,0,0,1,r,0,0,0,1),this}makeRotationX(n){const s=Math.cos(n),r=Math.sin(n);return this.set(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1),this}makeRotationY(n){const s=Math.cos(n),r=Math.sin(n);return this.set(s,0,r,0,0,1,0,0,-r,0,s,0,0,0,0,1),this}makeRotationZ(n){const s=Math.cos(n),r=Math.sin(n);return this.set(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,s){const r=Math.cos(s),a=Math.sin(s),l=1-r,u=n.x,f=n.y,d=n.z,p=l*u,m=l*f;return this.set(p*u+r,p*f-a*d,p*d+a*f,0,p*f+a*d,m*f+r,m*d-a*u,0,p*d-a*f,m*d+a*u,l*d*d+r,0,0,0,0,1),this}makeScale(n,s,r){return this.set(n,0,0,0,0,s,0,0,0,0,r,0,0,0,0,1),this}makeShear(n,s,r,a,l,u){return this.set(1,r,l,0,n,1,u,0,s,a,1,0,0,0,0,1),this}compose(n,s,r){const a=this.elements,l=s._x,u=s._y,f=s._z,d=s._w,p=l+l,m=u+u,g=f+f,_=l*p,x=l*m,v=l*g,b=u*m,M=u*g,y=f*g,T=d*p,E=d*m,R=d*g,P=r.x,I=r.y,B=r.z;return a[0]=(1-(b+y))*P,a[1]=(x+R)*P,a[2]=(v-E)*P,a[3]=0,a[4]=(x-R)*I,a[5]=(1-(_+y))*I,a[6]=(M+T)*I,a[7]=0,a[8]=(v+E)*B,a[9]=(M-T)*B,a[10]=(1-(_+b))*B,a[11]=0,a[12]=n.x,a[13]=n.y,a[14]=n.z,a[15]=1,this}decompose(n,s,r){const a=this.elements;let l=Xs.set(a[0],a[1],a[2]).length();const u=Xs.set(a[4],a[5],a[6]).length(),f=Xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),n.x=a[12],n.y=a[13],n.z=a[14],kn.copy(this);const p=1/l,m=1/u,g=1/f;return kn.elements[0]*=p,kn.elements[1]*=p,kn.elements[2]*=p,kn.elements[4]*=m,kn.elements[5]*=m,kn.elements[6]*=m,kn.elements[8]*=g,kn.elements[9]*=g,kn.elements[10]*=g,s.setFromRotationMatrix(kn),r.x=l,r.y=u,r.z=f,this}makePerspective(n,s,r,a,l,u){const f=this.elements,d=2*l/(s-n),p=2*l/(r-a),m=(s+n)/(s-n),g=(r+a)/(r-a),_=-(u+l)/(u-l),x=-2*u*l/(u-l);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=x,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(n,s,r,a,l,u){const f=this.elements,d=1/(s-n),p=1/(r-a),m=1/(u-l),g=(s+n)*d,_=(r+a)*p,x=(u+l)*m;return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=-2*m,f[14]=-x,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(n){const s=this.elements,r=n.elements;for(let a=0;a<16;a++)if(s[a]!==r[a])return!1;return!0}fromArray(n,s=0){for(let r=0;r<16;r++)this.elements[r]=n[r+s];return this}toArray(n=[],s=0){const r=this.elements;return n[s]=r[0],n[s+1]=r[1],n[s+2]=r[2],n[s+3]=r[3],n[s+4]=r[4],n[s+5]=r[5],n[s+6]=r[6],n[s+7]=r[7],n[s+8]=r[8],n[s+9]=r[9],n[s+10]=r[10],n[s+11]=r[11],n[s+12]=r[12],n[s+13]=r[13],n[s+14]=r[14],n[s+15]=r[15],n}}const Xs=new N,kn=new tt,vf=new N(0,0,0),Mf=new N(1,1,1),Oi=new N,ka=new N,Mn=new N,Jl=new tt,Kl=new vn;class Ha{constructor(n=0,s=0,r=0,a=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=s,this._z=r,this._order=a}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,s,r,a=this._order){return this._x=n,this._y=s,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,s=this._order,r=!0){const a=n.elements,l=a[0],u=a[4],f=a[8],d=a[1],p=a[5],m=a[9],g=a[2],_=a[6],x=a[10];switch(s){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+s)}return this._order=s,r===!0&&this._onChangeCallback(),this}setFromQuaternion(n,s,r){return Jl.makeRotationFromQuaternion(n),this.setFromRotationMatrix(Jl,s,r)}setFromVector3(n,s=this._order){return this.set(n.x,n.y,n.z,s)}reorder(n){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],s=0){return n[s]=this._x,n[s+1]=this._y,n[s+2]=this._z,n[s+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let Sf=0;const jl=new N,qs=new vn,vi=new tt,Va=new N,kr=new N,bf=new N,Ef=new vn,Ql=new N(1,0,0),eh=new N(0,1,0),th=new N(0,0,1),wf={type:"added"},nh={type:"removed"};class Bt extends Yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const n=new N,s=new Ha,r=new vn,a=new N(1,1,1);function l(){r.setFromEuler(s,!1)}function u(){s.setFromQuaternion(r,void 0,!1)}s._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:s},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new lt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,s){this.quaternion.setFromAxisAngle(n,s)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,s){return qs.setFromAxisAngle(n,s),this.quaternion.multiply(qs),this}rotateOnWorldAxis(n,s){return qs.setFromAxisAngle(n,s),this.quaternion.premultiply(qs),this}rotateX(n){return this.rotateOnAxis(Ql,n)}rotateY(n){return this.rotateOnAxis(eh,n)}rotateZ(n){return this.rotateOnAxis(th,n)}translateOnAxis(n,s){return jl.copy(n).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(s)),this}translateX(n){return this.translateOnAxis(Ql,n)}translateY(n){return this.translateOnAxis(eh,n)}translateZ(n){return this.translateOnAxis(th,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(n,s,r){n.isVector3?Va.copy(n):Va.set(n,s,r);const a=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(kr,Va,this.up):vi.lookAt(Va,kr,this.up),this.quaternion.setFromRotationMatrix(vi),a&&(vi.extractRotation(a.matrixWorld),qs.setFromRotationMatrix(vi),this.quaternion.premultiply(qs.invert()))}add(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.add(arguments[s]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const s=this.children.indexOf(n);return s!==-1&&(n.parent=null,this.children.splice(s,1),n.dispatchEvent(nh)),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){for(let n=0;n<this.children.length;n++){const s=this.children[n];s.parent=null,s.dispatchEvent(nh)}return this.children.length=0,this}attach(n){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),vi.multiply(n.parent.matrixWorld)),n.applyMatrix4(vi),this.add(n),n.updateWorldMatrix(!1,!0),this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,s){if(this[n]===s)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(n,s);if(u!==void 0)return u}}getObjectsByProperty(n,s){let r=[];this[n]===s&&r.push(this);for(let a=0,l=this.children.length;a<l;a++){const u=this.children[a].getObjectsByProperty(n,s);u.length>0&&(r=r.concat(u))}return r}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,n,bf),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Ef,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const s=this.matrixWorld.elements;return n.set(s[8],s[9],s[10]).normalize()}raycast(){}traverse(n){n(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].traverseVisible(n)}traverseAncestors(n){const s=this.parent;s!==null&&(n(s),s.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const s=this.children;for(let r=0,a=s.length;r<a;r++){const l=s[r];(l.matrixWorldAutoUpdate===!0||n===!0)&&l.updateMatrixWorld(n)}}updateWorldMatrix(n,s){const r=this.parent;if(n===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),s===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++){const f=a[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(n){const s=n===void 0||typeof n=="string",r={};s&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(n)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(n.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(n.shapes,g)}else l(n.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(n.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(n.materials,this.material[d]));a.material=f}else a.material=l(n.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(n).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(n.animations,d))}}if(s){const f=u(n.geometries),d=u(n.materials),p=u(n.textures),m=u(n.images),g=u(n.shapes),_=u(n.skeletons),x=u(n.animations),v=u(n.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),v.length>0&&(r.nodes=v)}return r.object=a,r;function u(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(n){return new this.constructor().copy(this,n)}copy(n,s=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations,this.userData=JSON.parse(JSON.stringify(n.userData)),s===!0)for(let r=0;r<n.children.length;r++){const a=n.children[r];this.add(a.clone())}return this}}Bt.DEFAULT_UP=new N(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new N,Mi=new N,wc=new N,Si=new N,Ys=new N,$s=new N,ih=new N,Tc=new N,Ac=new N,Rc=new N;let Wa=!1;class Sn{constructor(n=new N,s=new N,r=new N){this.a=n,this.b=s,this.c=r}static getNormal(n,s,r,a){a.subVectors(r,s),Hn.subVectors(n,s),a.cross(Hn);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(n,s,r,a,l){Hn.subVectors(a,s),Mi.subVectors(r,s),wc.subVectors(n,s);const u=Hn.dot(Hn),f=Hn.dot(Mi),d=Hn.dot(wc),p=Mi.dot(Mi),m=Mi.dot(wc),g=u*p-f*f;if(g===0)return l.set(-2,-1,-1);const _=1/g,x=(p*d-f*m)*_,v=(u*m-f*d)*_;return l.set(1-x-v,v,x)}static containsPoint(n,s,r,a){return this.getBarycoord(n,s,r,a,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(n,s,r,a,l,u,f,d){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(n,s,r,a,l,u,f,d)}static getInterpolation(n,s,r,a,l,u,f,d){return this.getBarycoord(n,s,r,a,Si),d.setScalar(0),d.addScaledVector(l,Si.x),d.addScaledVector(u,Si.y),d.addScaledVector(f,Si.z),d}static isFrontFacing(n,s,r,a){return Hn.subVectors(r,s),Mi.subVectors(n,s),Hn.cross(Mi).dot(a)<0}set(n,s,r){return this.a.copy(n),this.b.copy(s),this.c.copy(r),this}setFromPointsAndIndices(n,s,r,a){return this.a.copy(n[s]),this.b.copy(n[r]),this.c.copy(n[a]),this}setFromAttributeAndIndices(n,s,r,a){return this.a.fromBufferAttribute(n,s),this.b.fromBufferAttribute(n,r),this.c.fromBufferAttribute(n,a),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Hn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Hn.cross(Mi).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Sn.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,s){return Sn.getBarycoord(n,this.a,this.b,this.c,s)}getUV(n,s,r,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),Sn.getInterpolation(n,this.a,this.b,this.c,s,r,a,l)}getInterpolation(n,s,r,a,l){return Sn.getInterpolation(n,this.a,this.b,this.c,s,r,a,l)}containsPoint(n){return Sn.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Sn.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,s){const r=this.a,a=this.b,l=this.c;let u,f;Ys.subVectors(a,r),$s.subVectors(l,r),Tc.subVectors(n,r);const d=Ys.dot(Tc),p=$s.dot(Tc);if(d<=0&&p<=0)return s.copy(r);Ac.subVectors(n,a);const m=Ys.dot(Ac),g=$s.dot(Ac);if(m>=0&&g<=m)return s.copy(a);const _=d*g-m*p;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),s.copy(r).addScaledVector(Ys,u);Rc.subVectors(n,l);const x=Ys.dot(Rc),v=$s.dot(Rc);if(v>=0&&x<=v)return s.copy(l);const b=x*p-d*v;if(b<=0&&p>=0&&v<=0)return f=p/(p-v),s.copy(r).addScaledVector($s,f);const M=m*v-x*g;if(M<=0&&g-m>=0&&x-v>=0)return ih.subVectors(l,a),f=(g-m)/(g-m+(x-v)),s.copy(a).addScaledVector(ih,f);const y=1/(M+b+_);return u=b*y,f=_*y,s.copy(r).addScaledVector(Ys,u).addScaledVector($s,f)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}let Tf=0;class Hr extends Yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=on(),this.name="",this.type="Material",this.blending=Ti,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qo,this.blendDst=Ft,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ve,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const s in n){const r=n[s];if(r===void 0){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const a=this[s];if(a===void 0){console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[s]=r}}toJSON(n){const s=n===void 0||typeof n=="string";s&&(n={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(n).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(n).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(n).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(n).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(n).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(r.blending=this.blending),this.side!==oi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(s){const l=a(n.textures),u=a(n.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const s=n.clippingPlanes;let r=null;if(s!==null){const a=s.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=s[l].clone()}return this.clippingPlanes=r,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Cc(h,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?h+(n-h)*6*s:s<1/2?n:s<2/3?h+(n-h)*6*(2/3-s):h}class Ce{constructor(n,s,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,s===void 0&&r===void 0?this.set(n):this.setRGB(n,s,r)}set(n){return n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n),this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,s=Qe){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Gn.toWorkingColorSpace(this,s),this}setRGB(n,s,r,a=Gn.workingColorSpace){return this.r=n,this.g=s,this.b=r,Gn.toWorkingColorSpace(this,a),this}setHSL(n,s,r,a=Gn.workingColorSpace){if(n=Nr(n,1),s=bt(s,0,1),r=bt(r,0,1),s===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+s):r+s-r*s,u=2*r-l;this.r=Cc(u,l,n+1/3),this.g=Cc(u,l,n),this.b=Cc(u,l,n-1/3)}return Gn.toWorkingColorSpace(this,a),this}setStyle(n,s=Qe){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(n)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,s);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,s);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,s);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(n)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,s);if(u===6)return this.setHex(parseInt(l,16),s);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,s);return this}setColorName(n,s=Qe){const r=sh[n.toLowerCase()];return r!==void 0?this.setHex(r,s):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Bs(n.r),this.g=Bs(n.g),this.b=Bs(n.b),this}copyLinearToSRGB(n){return this.r=mc(n.r),this.g=mc(n.g),this.b=mc(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=Qe){return Gn.fromWorkingColorSpace(jt.copy(this),n),Math.round(bt(jt.r*255,0,255))*65536+Math.round(bt(jt.g*255,0,255))*256+Math.round(bt(jt.b*255,0,255))}getHexString(n=Qe){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,s=Gn.workingColorSpace){Gn.fromWorkingColorSpace(jt.copy(this),s);const r=jt.r,a=jt.g,l=jt.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let d,p;const m=(f+u)/2;if(f===u)d=0,p=0;else{const g=u-f;switch(p=m<=.5?g/(u+f):g/(2-u-f),u){case r:d=(a-l)/g+(a<l?6:0);break;case a:d=(l-r)/g+2;break;case l:d=(r-a)/g+4;break}d/=6}return n.h=d,n.s=p,n.l=m,n}getRGB(n,s=Gn.workingColorSpace){return Gn.fromWorkingColorSpace(jt.copy(this),s),n.r=jt.r,n.g=jt.g,n.b=jt.b,n}getStyle(n=Qe){Gn.fromWorkingColorSpace(jt.copy(this),n);const s=jt.r,r=jt.g,a=jt.b;return n!==Qe?`color(${n} ${s.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(s*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(n,s,r){return this.getHSL(Vn),Vn.h+=n,Vn.s+=s,Vn.l+=r,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,s){return this.r=n.r+s.r,this.g=n.g+s.g,this.b=n.b+s.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,s){return this.r+=(n.r-this.r)*s,this.g+=(n.g-this.g)*s,this.b+=(n.b-this.b)*s,this}lerpColors(n,s,r){return this.r=n.r+(s.r-n.r)*r,this.g=n.g+(s.g-n.g)*r,this.b=n.b+(s.b-n.b)*r,this}lerpHSL(n,s){this.getHSL(Vn),n.getHSL(Xa);const r=pi(Vn.h,Xa.h,s),a=pi(Vn.s,Xa.s,s),l=pi(Vn.l,Xa.l,s);return this.setHSL(r,a,l),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const s=this.r,r=this.g,a=this.b,l=n.elements;return this.r=l[0]*s+l[3]*r+l[6]*a,this.g=l[1]*s+l[4]*r+l[7]*a,this.b=l[2]*s+l[5]*r+l[8]*a,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,s=0){return this.r=n[s],this.g=n[s+1],this.b=n[s+2],this}toArray(n=[],s=0){return n[s]=this.r,n[s+1]=this.g,n[s+2]=this.b,n}fromBufferAttribute(n,s){return this.r=n.getX(s),this.g=n.getY(s),this.b=n.getZ(s),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ce;Ce.NAMES=sh;class Fi extends Hr{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const bi=Af();function Af(){const h=new ArrayBuffer(4),n=new Float32Array(h),s=new Uint32Array(h),r=new Uint32Array(512),a=new Uint32Array(512);for(let d=0;d<256;++d){const p=d-127;p<-27?(r[d]=0,r[d|256]=32768,a[d]=24,a[d|256]=24):p<-14?(r[d]=1024>>-p-14,r[d|256]=1024>>-p-14|32768,a[d]=-p-1,a[d|256]=-p-1):p<=15?(r[d]=p+15<<10,r[d|256]=p+15<<10|32768,a[d]=13,a[d|256]=13):p<128?(r[d]=31744,r[d|256]=64512,a[d]=24,a[d|256]=24):(r[d]=31744,r[d|256]=64512,a[d]=13,a[d|256]=13)}const l=new Uint32Array(2048),u=new Uint32Array(64),f=new Uint32Array(64);for(let d=1;d<1024;++d){let p=d<<13,m=0;for(;!(p&8388608);)p<<=1,m-=8388608;p&=-8388609,m+=947912704,l[d]=p|m}for(let d=1024;d<2048;++d)l[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)u[d]=d<<23;u[31]=1199570944,u[32]=2147483648;for(let d=33;d<63;++d)u[d]=2147483648+(d-32<<23);u[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(f[d]=1024);return{floatView:n,uint32View:s,baseTable:r,shiftTable:a,mantissaTable:l,exponentTable:u,offsetTable:f}}function gn(h){Math.abs(h)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),h=bt(h,-65504,65504),bi.floatView[0]=h;const n=bi.uint32View[0],s=n>>23&511;return bi.baseTable[s]+((n&8388607)>>bi.shiftTable[s])}function Vr(h){const n=h>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[n]+(h&1023)]+bi.exponentTable[n],bi.floatView[0]}const T0={toHalfFloat:gn,fromHalfFloat:Vr},Nt=new N,qa=new ce;class Vt{constructor(n,s,r=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=n,this.itemSize=s,this.count=n!==void 0?n.length/s:0,this.normalized=r,this.usage=et,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this}copyAt(n,s,r){n*=this.itemSize,r*=s.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[n+a]=s.array[r+a];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let s=0,r=this.count;s<r;s++)qa.fromBufferAttribute(this,s),qa.applyMatrix3(n),this.setXY(s,qa.x,qa.y);else if(this.itemSize===3)for(let s=0,r=this.count;s<r;s++)Nt.fromBufferAttribute(this,s),Nt.applyMatrix3(n),this.setXYZ(s,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(n){for(let s=0,r=this.count;s<r;s++)Nt.fromBufferAttribute(this,s),Nt.applyMatrix4(n),this.setXYZ(s,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(n){for(let s=0,r=this.count;s<r;s++)Nt.fromBufferAttribute(this,s),Nt.applyNormalMatrix(n),this.setXYZ(s,Nt.x,Nt.y,Nt.z);return this}transformDirection(n){for(let s=0,r=this.count;s<r;s++)Nt.fromBufferAttribute(this,s),Nt.transformDirection(n),this.setXYZ(s,Nt.x,Nt.y,Nt.z);return this}set(n,s=0){return this.array.set(n,s),this}getX(n){let s=this.array[n*this.itemSize];return this.normalized&&(s=yn(s,this.array)),s}setX(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize]=s,this}getY(n){let s=this.array[n*this.itemSize+1];return this.normalized&&(s=yn(s,this.array)),s}setY(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+1]=s,this}getZ(n){let s=this.array[n*this.itemSize+2];return this.normalized&&(s=yn(s,this.array)),s}setZ(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+2]=s,this}getW(n){let s=this.array[n*this.itemSize+3];return this.normalized&&(s=yn(s,this.array)),s}setW(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+3]=s,this}setXY(n,s,r){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array)),this.array[n+0]=s,this.array[n+1]=r,this}setXYZ(n,s,r,a){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array)),this.array[n+0]=s,this.array[n+1]=r,this.array[n+2]=a,this}setXYZW(n,s,r,a,l){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array),l=nt(l,this.array)),this.array[n+0]=s,this.array[n+1]=r,this.array[n+2]=a,this.array[n+3]=l,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==et&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class A0 extends null{constructor(n,s,r){super(new Int8Array(n),s,r)}}class R0 extends null{constructor(n,s,r){super(new Uint8Array(n),s,r)}}class C0 extends null{constructor(n,s,r){super(new Uint8ClampedArray(n),s,r)}}class P0 extends null{constructor(n,s,r){super(new Int16Array(n),s,r)}}class rh extends Vt{constructor(n,s,r){super(new Uint16Array(n),s,r)}}class L0 extends null{constructor(n,s,r){super(new Int32Array(n),s,r)}}class ah extends Vt{constructor(n,s,r){super(new Uint32Array(n),s,r)}}class I0 extends null{constructor(n,s,r){super(new Uint16Array(n),s,r),this.isFloat16BufferAttribute=!0}getX(n){let s=Vr(this.array[n*this.itemSize]);return this.normalized&&(s=yn(s,this.array)),s}setX(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize]=gn(s),this}getY(n){let s=Vr(this.array[n*this.itemSize+1]);return this.normalized&&(s=yn(s,this.array)),s}setY(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+1]=gn(s),this}getZ(n){let s=Vr(this.array[n*this.itemSize+2]);return this.normalized&&(s=yn(s,this.array)),s}setZ(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+2]=gn(s),this}getW(n){let s=Vr(this.array[n*this.itemSize+3]);return this.normalized&&(s=yn(s,this.array)),s}setW(n,s){return this.normalized&&(s=nt(s,this.array)),this.array[n*this.itemSize+3]=gn(s),this}setXY(n,s,r){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array)),this.array[n+0]=gn(s),this.array[n+1]=gn(r),this}setXYZ(n,s,r,a){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array)),this.array[n+0]=gn(s),this.array[n+1]=gn(r),this.array[n+2]=gn(a),this}setXYZW(n,s,r,a,l){return n*=this.itemSize,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array),l=nt(l,this.array)),this.array[n+0]=gn(s),this.array[n+1]=gn(r),this.array[n+2]=gn(a),this.array[n+3]=gn(l),this}}class Ne extends Vt{constructor(n,s,r){super(new Float32Array(n),s,r)}}class U0 extends null{constructor(n,s,r){super(new Float64Array(n),s,r)}}let Rf=0;const Ln=new tt,Pc=new Bt,Zs=new N,bn=new mi,Wr=new mi,Wt=new N;class at extends Yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(Xl(n)?ah:rh)(n,1):this.index=n,this}getAttribute(n){return this.attributes[n]}setAttribute(n,s){return this.attributes[n]=s,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,s,r=0){this.groups.push({start:n,count:s,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(n,s){this.drawRange.start=n,this.drawRange.count=s}applyMatrix4(n){const s=this.attributes.position;s!==void 0&&(s.applyMatrix4(n),s.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(n);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(n),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return Ln.makeRotationFromQuaternion(n),this.applyMatrix4(Ln),this}rotateX(n){return Ln.makeRotationX(n),this.applyMatrix4(Ln),this}rotateY(n){return Ln.makeRotationY(n),this.applyMatrix4(Ln),this}rotateZ(n){return Ln.makeRotationZ(n),this.applyMatrix4(Ln),this}translate(n,s,r){return Ln.makeTranslation(n,s,r),this.applyMatrix4(Ln),this}scale(n,s,r){return Ln.makeScale(n,s,r),this.applyMatrix4(Ln),this}lookAt(n){return Pc.lookAt(n),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(n){const s=[];for(let r=0,a=n.length;r<a;r++){const l=n[r];s.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ne(s,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const n=this.attributes.position,s=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),s)for(let r=0,a=s.length;r<a;r++){const l=s[r];bn.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const n=this.attributes.position,s=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(n){const r=this.boundingSphere.center;if(bn.setFromBufferAttribute(n),s)for(let l=0,u=s.length;l<u;l++){const f=s[l];Wr.setFromBufferAttribute(f),this.morphTargetsRelative?(Wt.addVectors(bn.min,Wr.min),bn.expandByPoint(Wt),Wt.addVectors(bn.max,Wr.max),bn.expandByPoint(Wt)):(bn.expandByPoint(Wr.min),bn.expandByPoint(Wr.max))}bn.getCenter(r);let a=0;for(let l=0,u=n.count;l<u;l++)Wt.fromBufferAttribute(n,l),a=Math.max(a,r.distanceToSquared(Wt));if(s)for(let l=0,u=s.length;l<u;l++){const f=s[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Wt.fromBufferAttribute(f,p),d&&(Zs.fromBufferAttribute(n,p),Wt.add(Zs)),a=Math.max(a,r.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,s=this.attributes;if(n===null||s.position===void 0||s.normal===void 0||s.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.array,a=s.position.array,l=s.normal.array,u=s.uv.array,f=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*f),4));const d=this.getAttribute("tangent").array,p=[],m=[];for(let O=0;O<f;O++)p[O]=new N,m[O]=new N;const g=new N,_=new N,x=new N,v=new ce,b=new ce,M=new ce,y=new N,T=new N;function E(O,$,te){g.fromArray(a,O*3),_.fromArray(a,$*3),x.fromArray(a,te*3),v.fromArray(u,O*2),b.fromArray(u,$*2),M.fromArray(u,te*2),_.sub(g),x.sub(g),b.sub(v),M.sub(v);const W=1/(b.x*M.y-M.x*b.y);isFinite(W)&&(y.copy(_).multiplyScalar(M.y).addScaledVector(x,-b.y).multiplyScalar(W),T.copy(x).multiplyScalar(b.x).addScaledVector(_,-M.x).multiplyScalar(W),p[O].add(y),p[$].add(y),p[te].add(y),m[O].add(T),m[$].add(T),m[te].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:r.length}]);for(let O=0,$=R.length;O<$;++O){const te=R[O],W=te.start,Y=te.count;for(let J=W,le=W+Y;J<le;J+=3)E(r[J+0],r[J+1],r[J+2])}const P=new N,I=new N,B=new N,G=new N;function A(O){B.fromArray(l,O*3),G.copy(B);const $=p[O];P.copy($),P.sub(B.multiplyScalar(B.dot($))).normalize(),I.crossVectors(G,$);const W=I.dot(m[O])<0?-1:1;d[O*4]=P.x,d[O*4+1]=P.y,d[O*4+2]=P.z,d[O*4+3]=W}for(let O=0,$=R.length;O<$;++O){const te=R[O],W=te.start,Y=te.count;for(let J=W,le=W+Y;J<le;J+=3)A(r[J+0]),A(r[J+1]),A(r[J+2])}}computeVertexNormals(){const n=this.index,s=this.getAttribute("position");if(s!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vt(new Float32Array(s.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const a=new N,l=new N,u=new N,f=new N,d=new N,p=new N,m=new N,g=new N;if(n)for(let _=0,x=n.count;_<x;_+=3){const v=n.getX(_+0),b=n.getX(_+1),M=n.getX(_+2);a.fromBufferAttribute(s,v),l.fromBufferAttribute(s,b),u.fromBufferAttribute(s,M),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),f.add(m),d.add(m),p.add(m),r.setXYZ(v,f.x,f.y,f.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,x=s.count;_<x;_+=3)a.fromBufferAttribute(s,_+0),l.fromBufferAttribute(s,_+1),u.fromBufferAttribute(s,_+2),m.subVectors(u,l),g.subVectors(a,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const n=this.attributes.normal;for(let s=0,r=n.count;s<r;s++)Wt.fromBufferAttribute(n,s),Wt.normalize(),n.setXYZ(s,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function n(f,d){const p=f.array,m=f.itemSize,g=f.normalized,_=new p.constructor(d.length*m);let x=0,v=0;for(let b=0,M=d.length;b<M;b++){f.isInterleavedBufferAttribute?x=d[b]*f.data.stride+f.offset:x=d[b]*m;for(let y=0;y<m;y++)_[v++]=p[x++]}return new Vt(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const s=new at,r=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=n(d,r);s.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const _=p[m],x=n(_,r);d.push(x)}s.morphAttributes[f]=d}s.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];s.addGroup(p.start,p.count,p.materialIndex)}return s}toJSON(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(n[p]=d[p]);return n}n.data={attributes:{}};const s=this.index;s!==null&&(n.data.index={type:s.array.constructor.name,array:Array.prototype.slice.call(s.array)});const r=this.attributes;for(const d in r){const p=r[d];n.data.attributes[d]=p.toJSON(n.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,_=p.length;g<_;g++){const x=p[g];m.push(x.toJSON(n.data))}m.length>0&&(a[d]=m,l=!0)}l&&(n.data.morphAttributes=a,n.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(n.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(n.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const s={};this.name=n.name;const r=n.index;r!==null&&this.setIndex(r.clone(s));const a=n.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(s))}const l=n.morphAttributes;for(const p in l){const m=[],g=l[p];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(s));this.morphAttributes[p]=m}this.morphTargetsRelative=n.morphTargetsRelative;const u=n.groups;for(let p=0,m=u.length;p<m;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=n.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=n.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new tt,ei=new Ga,Ya=new xi,ch=new N,Js=new N,Ks=new N,js=new N,Lc=new N,$a=new N,Za=new ce,Ja=new ce,Ka=new ce,lh=new N,hh=new N,uh=new N,ja=new N,Qa=new N;class _n extends Bt{constructor(n=new at,s=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=s,this.updateMorphTargets()}copy(n,s){return super.copy(n,s),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this}updateMorphTargets(){const s=this.geometry.morphAttributes,r=Object.keys(s);if(r.length>0){const a=s[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(n,s){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;s.fromBufferAttribute(a,n);const f=this.morphTargetInfluences;if(l&&f){$a.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],g=l[d];m!==0&&(Lc.fromBufferAttribute(g,n),u?$a.addScaledVector(Lc,m):$a.addScaledVector(Lc.sub(s),m))}s.add($a)}return s}raycast(n,s){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ya.copy(r.boundingSphere),Ya.applyMatrix4(l),ei.copy(n.ray).recast(n.near),!(Ya.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ya,ch)===null||ei.origin.distanceToSquared(ch)>Ll(n.far-n.near,2)))&&(oh.copy(l).invert(),ei.copy(n.ray).applyMatrix4(oh),!(r.boundingBox!==null&&ei.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(n,s)))}_computeIntersections(n,s){let r;const a=this.geometry,l=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(l))for(let x=0,v=g.length;x<v;x++){const b=g[x],M=l[b.materialIndex],y=Math.max(b.start,_.start),T=Math.min(u.count,Math.min(b.start+b.count,_.start+_.count));for(let E=y,R=T;E<R;E+=3){const P=u.getX(E),I=u.getX(E+1),B=u.getX(E+2);r=eo(this,M,n,ei,d,p,m,P,I,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=b.materialIndex,s.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(u.count,_.start+_.count);for(let b=x,M=v;b<M;b+=3){const y=u.getX(b),T=u.getX(b+1),E=u.getX(b+2);r=eo(this,l,n,ei,d,p,m,y,T,E),r&&(r.faceIndex=Math.floor(b/3),s.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let x=0,v=g.length;x<v;x++){const b=g[x],M=l[b.materialIndex],y=Math.max(b.start,_.start),T=Math.min(f.count,Math.min(b.start+b.count,_.start+_.count));for(let E=y,R=T;E<R;E+=3){const P=E,I=E+1,B=E+2;r=eo(this,M,n,ei,d,p,m,P,I,B),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=b.materialIndex,s.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(f.count,_.start+_.count);for(let b=x,M=v;b<M;b+=3){const y=b,T=b+1,E=b+2;r=eo(this,l,n,ei,d,p,m,y,T,E),r&&(r.faceIndex=Math.floor(b/3),s.push(r))}}}}function Cf(h,n,s,r,a,l,u,f){let d;if(n.side===tn?d=r.intersectTriangle(u,l,a,!0,f):d=r.intersectTriangle(a,l,u,n.side===oi,f),d===null)return null;Qa.copy(f),Qa.applyMatrix4(h.matrixWorld);const p=s.ray.origin.distanceTo(Qa);return p<s.near||p>s.far?null:{distance:p,point:Qa.clone(),object:h}}function eo(h,n,s,r,a,l,u,f,d,p){h.getVertexPosition(f,Js),h.getVertexPosition(d,Ks),h.getVertexPosition(p,js);const m=Cf(h,n,s,r,Js,Ks,js,ja);if(m){a&&(Za.fromBufferAttribute(a,f),Ja.fromBufferAttribute(a,d),Ka.fromBufferAttribute(a,p),m.uv=Sn.getInterpolation(ja,Js,Ks,js,Za,Ja,Ka,new ce)),l&&(Za.fromBufferAttribute(l,f),Ja.fromBufferAttribute(l,d),Ka.fromBufferAttribute(l,p),m.uv1=Sn.getInterpolation(ja,Js,Ks,js,Za,Ja,Ka,new ce),m.uv2=m.uv1),u&&(lh.fromBufferAttribute(u,f),hh.fromBufferAttribute(u,d),uh.fromBufferAttribute(u,p),m.normal=Sn.getInterpolation(ja,Js,Ks,js,lh,hh,uh,new N),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:p,normal:new N,materialIndex:0};Sn.getNormal(Js,Ks,js,g.normal),m.face=g}return m}class cs extends at{constructor(n=1,s=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:s,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],m=[],g=[];let _=0,x=0;v("z","y","x",-1,-1,r,s,n,u,l,0),v("z","y","x",1,-1,r,s,-n,u,l,1),v("x","z","y",1,1,n,r,s,a,u,2),v("x","z","y",1,-1,n,r,-s,a,u,3),v("x","y","z",1,-1,n,s,r,a,l,4),v("x","y","z",-1,-1,n,s,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(m,3)),this.setAttribute("uv",new Ne(g,2));function v(b,M,y,T,E,R,P,I,B,G,A){const O=R/B,$=P/G,te=R/2,W=P/2,Y=I/2,J=B+1,le=G+1;let ae=0,re=0;const he=new N;for(let de=0;de<le;de++){const Pe=de*$-W;for(let be=0;be<J;be++){const K=be*O-te;he[b]=K*T,he[M]=Pe*E,he[y]=Y,p.push(he.x,he.y,he.z),he[b]=0,he[M]=0,he[y]=I>0?1:-1,m.push(he.x,he.y,he.z),g.push(be/B),g.push(1-de/G),ae+=1}}for(let de=0;de<G;de++)for(let Pe=0;Pe<B;Pe++){const be=_+Pe+J*de,K=_+Pe+J*(de+1),oe=_+(Pe+1)+J*(de+1),ve=_+(Pe+1)+J*de;d.push(be,K,ve),d.push(K,oe,ve),re+=6}f.addGroup(x,re,A),x+=re,_+=ae}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new cs(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function Qs(h){const n={};for(const s in h){n[s]={};for(const r in h[s]){const a=h[s][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[s][r]=null):n[s][r]=a.clone():Array.isArray(a)?n[s][r]=a.slice():n[s][r]=a}}return n}function ln(h){const n={};for(let s=0;s<h.length;s++){const r=Qs(h[s]);for(const a in r)n[a]=r[a]}return n}function Pf(h){const n=[];for(let s=0;s<h.length;s++)n.push(h[s].clone());return n}function fh(h){return h.getRenderTarget()===null?h.outputColorSpace:Pn}const Lf={clone:Qs,merge:ln};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Hr{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Qs(n.uniforms),this.uniformsGroups=Pf(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const s=super.toJSON(n);s.glslVersion=this.glslVersion,s.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?s.uniforms[a]={type:"t",value:u.toJSON(n).uuid}:u&&u.isColor?s.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?s.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?s.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?s.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?s.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?s.uniforms[a]={type:"m4",value:u.toArray()}:s.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(s.defines=this.defines),s.vertexShader=this.vertexShader,s.fragmentShader=this.fragmentShader,s.lights=this.lights,s.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(s.extensions=r),s}}class Ic extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(n,s){return super.copy(n,s),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const s=this.matrixWorld.elements;return n.set(-s[8],-s[9],-s[10]).normalize()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,s){super.updateWorldMatrix(n,s),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends Ic{constructor(n=50,s=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=s,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,s){return super.copy(n,s),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const s=.5*this.getFilmHeight()/n;this.fov=Ii*2*Math.atan(s),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(di*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(n,s,r,a,l,u){this.aspect=n/s,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=s,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let s=n*Math.tan(di*.5*this.fov)/this.zoom,r=2*s,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/d,s-=u.offsetY*r/p,a*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=n*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,s,s-r,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const s=super.toJSON(n);return s.object.fov=this.fov,s.object.zoom=this.zoom,s.object.near=this.near,s.object.far=this.far,s.object.focus=this.focus,s.object.aspect=this.aspect,this.view!==null&&(s.object.view=Object.assign({},this.view)),s.object.filmGauge=this.filmGauge,s.object.filmOffset=this.filmOffset,s}}const er=-90,tr=1;class Df extends Bt{constructor(n,s,r){super(),this.type="CubeCamera",this.renderTarget=r;const a=new $t(er,tr,n,s);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);const l=new $t(er,tr,n,s);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const u=new $t(er,tr,n,s);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(0,1,0),this.add(u);const f=new $t(er,tr,n,s);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(0,-1,0),this.add(f);const d=new $t(er,tr,n,s);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const p=new $t(er,tr,n,s);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(n,s){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[a,l,u,f,d,p]=this.children,m=n.getRenderTarget(),g=n.toneMapping,_=n.xr.enabled;n.toneMapping=qn,n.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,n.setRenderTarget(r,0),n.render(s,a),n.setRenderTarget(r,1),n.render(s,l),n.setRenderTarget(r,2),n.render(s,u),n.setRenderTarget(r,3),n.render(s,f),n.setRenderTarget(r,4),n.render(s,d),r.texture.generateMipmaps=x,n.setRenderTarget(r,5),n.render(s,p),n.setRenderTarget(m),n.toneMapping=g,n.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class to extends cn{constructor(n,s,r,a,l,u,f,d,p,m){n=n!==void 0?n:[],s=s!==void 0?s:An,super(n,s,r,a,l,u,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class Nf extends rs{constructor(n=1,s={}){super(n,n,s),this.isWebGLCubeRenderTarget=!0;const r={width:n,height:n,depth:1},a=[r,r,r,r,r,r];s.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===fi?Qe:Jn),this.texture=new to(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:St}fromEquirectangularTexture(n,s){this.texture.type=s.type,this.texture.colorSpace=s.colorSpace,this.texture.generateMipmaps=s.generateMipmaps,this.texture.minFilter=s.minFilter,this.texture.magFilter=s.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new cs(5,5,5),l=new Bi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:tn,blending:Dn});l.uniforms.tEquirect.value=s;const u=new _n(a,l),f=s.minFilter;return s.minFilter===Yn&&(s.minFilter=St),new Df(1,10,this).update(n,u),s.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(n,s,r,a){const l=n.getRenderTarget();for(let u=0;u<6;u++)n.setRenderTarget(this,u),n.clear(s,r,a);n.setRenderTarget(l)}}const Uc=new N,Of=new N,Ff=new lt;class ls{constructor(n=new N(1,0,0),s=0){this.isPlane=!0,this.normal=n,this.constant=s}set(n,s){return this.normal.copy(n),this.constant=s,this}setComponents(n,s,r,a){return this.normal.set(n,s,r),this.constant=a,this}setFromNormalAndCoplanarPoint(n,s){return this.normal.copy(n),this.constant=-s.dot(this.normal),this}setFromCoplanarPoints(n,s,r){const a=Uc.subVectors(r,s).cross(Of.subVectors(n,s)).normalize();return this.setFromNormalAndCoplanarPoint(a,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,s){return s.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,s){const r=n.delta(Uc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(n.start)===0?s.copy(n.start):null;const l=-(n.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:s.copy(n.start).addScaledVector(r,l)}intersectsLine(n){const s=this.distanceToPoint(n.start),r=this.distanceToPoint(n.end);return s<0&&r>0||r<0&&s>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,s){const r=s||Ff.getNormalMatrix(n),a=this.coplanarPoint(Uc).applyMatrix4(n),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new xi,no=new N;class Dc{constructor(n=new ls,s=new ls,r=new ls,a=new ls,l=new ls,u=new ls){this.planes=[n,s,r,a,l,u]}set(n,s,r,a,l,u){const f=this.planes;return f[0].copy(n),f[1].copy(s),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(n){const s=this.planes;for(let r=0;r<6;r++)s[r].copy(n.planes[r]);return this}setFromProjectionMatrix(n){const s=this.planes,r=n.elements,a=r[0],l=r[1],u=r[2],f=r[3],d=r[4],p=r[5],m=r[6],g=r[7],_=r[8],x=r[9],v=r[10],b=r[11],M=r[12],y=r[13],T=r[14],E=r[15];return s[0].setComponents(f-a,g-d,b-_,E-M).normalize(),s[1].setComponents(f+a,g+d,b+_,E+M).normalize(),s[2].setComponents(f+l,g+p,b+x,E+y).normalize(),s[3].setComponents(f-l,g-p,b-x,E-y).normalize(),s[4].setComponents(f-u,g-m,b-v,E-T).normalize(),s[5].setComponents(f+u,g+m,b+v,E+T).normalize(),this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const s=n.geometry;s.boundingSphere===null&&s.computeBoundingSphere(),hs.copy(s.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(n){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(n.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(n){const s=this.planes,r=n.center,a=-n.radius;for(let l=0;l<6;l++)if(s[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(n){const s=this.planes;for(let r=0;r<6;r++){const a=s[r];if(no.x=a.normal.x>0?n.max.x:n.min.x,no.y=a.normal.y>0?n.max.y:n.min.y,no.z=a.normal.z>0?n.max.z:n.min.z,a.distanceToPoint(no)<0)return!1}return!0}containsPoint(n){const s=this.planes;for(let r=0;r<6;r++)if(s[r].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dh(){let h=null,n=!1,s=null,r=null;function a(l,u){s(l,u),r=h.requestAnimationFrame(a)}return{start:function(){n!==!0&&s!==null&&(r=h.requestAnimationFrame(a),n=!0)},stop:function(){h.cancelAnimationFrame(r),n=!1},setAnimationLoop:function(l){s=l},setContext:function(l){h=l}}}function Bf(h,n){const s=n.isWebGL2,r=new WeakMap;function a(p,m){const g=p.array,_=p.usage,x=h.createBuffer();h.bindBuffer(m,x),h.bufferData(m,g,_),p.onUploadCallback();let v;if(g instanceof Float32Array)v=h.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(s)v=h.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=h.UNSIGNED_SHORT;else if(g instanceof Int16Array)v=h.SHORT;else if(g instanceof Uint32Array)v=h.UNSIGNED_INT;else if(g instanceof Int32Array)v=h.INT;else if(g instanceof Int8Array)v=h.BYTE;else if(g instanceof Uint8Array)v=h.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)v=h.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:v,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version}}function l(p,m,g){const _=m.array,x=m.updateRange;h.bindBuffer(g,p),x.count===-1?h.bufferSubData(g,0,_):(s?h.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):h.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),m.onUploadCallback()}function u(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=r.get(p);m&&(h.deleteBuffer(m.buffer),r.delete(p))}function d(p,m){if(p.isGLBufferAttribute){const _=r.get(p);(!_||_.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g===void 0?r.set(p,a(p,m)):g.version<p.version&&(l(g.buffer,p,m),g.version=p.version)}return{get:u,remove:f,update:d}}class io extends at{constructor(n=1,s=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:s,widthSegments:r,heightSegments:a};const l=n/2,u=s/2,f=Math.floor(r),d=Math.floor(a),p=f+1,m=d+1,g=n/f,_=s/d,x=[],v=[],b=[],M=[];for(let y=0;y<m;y++){const T=y*_-u;for(let E=0;E<p;E++){const R=E*g-l;v.push(R,-T,0),b.push(0,0,1),M.push(E/f),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<f;T++){const E=T+p*y,R=T+p*(y+1),P=T+1+p*(y+1),I=T+1+p*y;x.push(E,R,I),x.push(R,P,I)}this.setIndex(x),this.setAttribute("position",new Ne(v,3)),this.setAttribute("normal",new Ne(b,3)),this.setAttribute("uv",new Ne(M,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new io(n.width,n.height,n.widthSegments,n.heightSegments)}}var zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf="vec3 transformed = vec3( position );",qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Pp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const it={alphamap_fragment:zf,alphamap_pars_fragment:Gf,alphatest_fragment:kf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Wf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:Yf,iridescence_fragment:$f,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Qf,color_fragment:ed,color_pars_fragment:td,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:cd,emissivemap_fragment:ld,emissivemap_pars_fragment:hd,encodings_fragment:ud,encodings_pars_fragment:fd,envmap_fragment:dd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:xd,fog_pars_vertex:yd,fog_fragment:vd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_fragment:bd,lightmap_pars_fragment:Ed,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Td,lights_pars_begin:Ad,lights_toon_fragment:Cd,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Id,lights_physical_fragment:Ud,lights_physical_pars_fragment:Dd,lights_fragment_begin:Nd,lights_fragment_maps:Od,lights_fragment_end:Fd,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:kd,map_fragment:Hd,map_pars_fragment:Vd,map_particle_fragment:Wd,map_particle_pars_fragment:Xd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Yd,morphcolor_vertex:$d,morphnormal_vertex:Zd,morphtarget_pars_vertex:Jd,morphtarget_vertex:Kd,normal_fragment_begin:jd,normal_fragment_maps:Qd,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,output_fragment:cp,packing:lp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:fp,dithering_pars_fragment:dp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:vp,skinning_pars_vertex:Mp,skinning_vertex:Sp,skinnormal_vertex:bp,specularmap_fragment:Ep,specularmap_pars_fragment:wp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Cp,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Up,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ye={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}}},ti={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ce(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ce(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ti.physical={uniforms:ln([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const so={r:0,b:0,g:0};function Dp(h,n,s,r,a,l,u){const f=new Ce(0);let d=l===!0?0:1,p,m,g=null,_=0,x=null;function v(M,y){let T=!1,E=y.isScene===!0?y.background:null;switch(E&&E.isTexture&&(E=(y.backgroundBlurriness>0?s:n).get(E)),E===null?b(f,d):E&&E.isColor&&(b(E,1),T=!0),h.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,u),T=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,u),T=!0;break}(h.autoClear||T)&&h.clear(h.autoClearColor,h.autoClearDepth,h.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Xi)?(m===void 0&&(m=new _n(new cs(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:Qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=E,m.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,m.material.toneMapped=E.colorSpace!==Qe,(g!==E||_!==E.version||x!==h.toneMapping)&&(m.material.needsUpdate=!0,g=E,_=E.version,x=h.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):E&&E.isTexture&&(p===void 0&&(p=new _n(new io(2,2),new Bi({name:"BackgroundMaterial",uniforms:Qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=E,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=E.colorSpace!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),p.material.uniforms.uvTransform.value.copy(E.matrix),(g!==E||_!==E.version||x!==h.toneMapping)&&(p.material.needsUpdate=!0,g=E,_=E.version,x=h.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null))}function b(M,y){M.getRGB(so,fh(h)),r.buffers.color.setClear(so.r,so.g,so.b,y,u)}return{getClearColor:function(){return f},setClearColor:function(M,y=1){f.set(M),d=y,b(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(M){d=M,b(f,d)},render:v}}function Np(h,n,s,r){const a=h.getParameter(h.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:n.get("OES_vertex_array_object"),u=r.isWebGL2||l!==null,f={},d=M(null);let p=d,m=!1;function g(Y,J,le,ae,re){let he=!1;if(u){const de=b(ae,le,J);p!==de&&(p=de,x(p.object)),he=y(Y,ae,le,re),he&&T(Y,ae,le,re)}else{const de=J.wireframe===!0;(p.geometry!==ae.id||p.program!==le.id||p.wireframe!==de)&&(p.geometry=ae.id,p.program=le.id,p.wireframe=de,he=!0)}re!==null&&s.update(re,h.ELEMENT_ARRAY_BUFFER),(he||m)&&(m=!1,G(Y,J,le,ae),re!==null&&h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,s.get(re).buffer))}function _(){return r.isWebGL2?h.createVertexArray():l.createVertexArrayOES()}function x(Y){return r.isWebGL2?h.bindVertexArray(Y):l.bindVertexArrayOES(Y)}function v(Y){return r.isWebGL2?h.deleteVertexArray(Y):l.deleteVertexArrayOES(Y)}function b(Y,J,le){const ae=le.wireframe===!0;let re=f[Y.id];re===void 0&&(re={},f[Y.id]=re);let he=re[J.id];he===void 0&&(he={},re[J.id]=he);let de=he[ae];return de===void 0&&(de=M(_()),he[ae]=de),de}function M(Y){const J=[],le=[],ae=[];for(let re=0;re<a;re++)J[re]=0,le[re]=0,ae[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:le,attributeDivisors:ae,object:Y,attributes:{},index:null}}function y(Y,J,le,ae){const re=p.attributes,he=J.attributes;let de=0;const Pe=le.getAttributes();for(const be in Pe)if(Pe[be].location>=0){const oe=re[be];let ve=he[be];if(ve===void 0&&(be==="instanceMatrix"&&Y.instanceMatrix&&(ve=Y.instanceMatrix),be==="instanceColor"&&Y.instanceColor&&(ve=Y.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;de++}return p.attributesNum!==de||p.index!==ae}function T(Y,J,le,ae){const re={},he=J.attributes;let de=0;const Pe=le.getAttributes();for(const be in Pe)if(Pe[be].location>=0){let oe=he[be];oe===void 0&&(be==="instanceMatrix"&&Y.instanceMatrix&&(oe=Y.instanceMatrix),be==="instanceColor"&&Y.instanceColor&&(oe=Y.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),re[be]=ve,de++}p.attributes=re,p.attributesNum=de,p.index=ae}function E(){const Y=p.newAttributes;for(let J=0,le=Y.length;J<le;J++)Y[J]=0}function R(Y){P(Y,0)}function P(Y,J){const le=p.newAttributes,ae=p.enabledAttributes,re=p.attributeDivisors;le[Y]=1,ae[Y]===0&&(h.enableVertexAttribArray(Y),ae[Y]=1),re[Y]!==J&&((r.isWebGL2?h:n.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,J),re[Y]=J)}function I(){const Y=p.newAttributes,J=p.enabledAttributes;for(let le=0,ae=J.length;le<ae;le++)J[le]!==Y[le]&&(h.disableVertexAttribArray(le),J[le]=0)}function B(Y,J,le,ae,re,he){r.isWebGL2===!0&&(le===h.INT||le===h.UNSIGNED_INT)?h.vertexAttribIPointer(Y,J,le,re,he):h.vertexAttribPointer(Y,J,le,ae,re,he)}function G(Y,J,le,ae){if(r.isWebGL2===!1&&(Y.isInstancedMesh||ae.isInstancedBufferGeometry)&&n.get("ANGLE_instanced_arrays")===null)return;E();const re=ae.attributes,he=le.getAttributes(),de=J.defaultAttributeValues;for(const Pe in he){const be=he[Pe];if(be.location>=0){let K=re[Pe];if(K===void 0&&(Pe==="instanceMatrix"&&Y.instanceMatrix&&(K=Y.instanceMatrix),Pe==="instanceColor"&&Y.instanceColor&&(K=Y.instanceColor)),K!==void 0){const oe=K.normalized,ve=K.itemSize,Ee=s.get(K);if(Ee===void 0)continue;const k=Ee.buffer,Ze=Ee.type,Je=Ee.bytesPerElement;if(K.isInterleavedBufferAttribute){const _e=K.data,Fe=_e.stride,ue=K.offset;if(_e.isInstancedInterleavedBuffer){for(let ne=0;ne<be.locationSize;ne++)P(be.location+ne,_e.meshPerAttribute);Y.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ne=0;ne<be.locationSize;ne++)R(be.location+ne);h.bindBuffer(h.ARRAY_BUFFER,k);for(let ne=0;ne<be.locationSize;ne++)B(be.location+ne,ve/be.locationSize,Ze,oe,Fe*Je,(ue+ve/be.locationSize*ne)*Je)}else{if(K.isInstancedBufferAttribute){for(let _e=0;_e<be.locationSize;_e++)P(be.location+_e,K.meshPerAttribute);Y.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<be.locationSize;_e++)R(be.location+_e);h.bindBuffer(h.ARRAY_BUFFER,k);for(let _e=0;_e<be.locationSize;_e++)B(be.location+_e,ve/be.locationSize,Ze,oe,ve*Je,ve/be.locationSize*_e*Je)}}else if(de!==void 0){const oe=de[Pe];if(oe!==void 0)switch(oe.length){case 2:h.vertexAttrib2fv(be.location,oe);break;case 3:h.vertexAttrib3fv(be.location,oe);break;case 4:h.vertexAttrib4fv(be.location,oe);break;default:h.vertexAttrib1fv(be.location,oe)}}}}I()}function A(){te();for(const Y in f){const J=f[Y];for(const le in J){const ae=J[le];for(const re in ae)v(ae[re].object),delete ae[re];delete J[le]}delete f[Y]}}function O(Y){if(f[Y.id]===void 0)return;const J=f[Y.id];for(const le in J){const ae=J[le];for(const re in ae)v(ae[re].object),delete ae[re];delete J[le]}delete f[Y.id]}function $(Y){for(const J in f){const le=f[J];if(le[Y.id]===void 0)continue;const ae=le[Y.id];for(const re in ae)v(ae[re].object),delete ae[re];delete le[Y.id]}}function te(){W(),m=!0,p!==d&&(p=d,x(p.object))}function W(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:te,resetDefaultState:W,dispose:A,releaseStatesOfGeometry:O,releaseStatesOfProgram:$,initAttributes:E,enableAttribute:R,disableUnusedAttributes:I}}function Op(h,n,s,r){const a=r.isWebGL2;let l;function u(p){l=p}function f(p,m){h.drawArrays(l,p,m),s.update(m,l,1)}function d(p,m,g){if(g===0)return;let _,x;if(a)_=h,x="drawArraysInstanced";else if(_=n.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](l,p,m,g),s.update(m,l,g)}this.setMode=u,this.render=f,this.renderInstances=d}function Fp(h,n,s){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const B=n.get("EXT_texture_filter_anisotropic");r=h.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(B){if(B==="highp"){if(h.getShaderPrecisionFormat(h.VERTEX_SHADER,h.HIGH_FLOAT).precision>0&&h.getShaderPrecisionFormat(h.FRAGMENT_SHADER,h.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&h.getShaderPrecisionFormat(h.VERTEX_SHADER,h.MEDIUM_FLOAT).precision>0&&h.getShaderPrecisionFormat(h.FRAGMENT_SHADER,h.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext!="undefined"&&h.constructor.name==="WebGL2RenderingContext";let f=s.precision!==void 0?s.precision:"highp";const d=l(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const p=u||n.has("WEBGL_draw_buffers"),m=s.logarithmicDepthBuffer===!0,g=h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS),_=h.getParameter(h.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=h.getParameter(h.MAX_TEXTURE_SIZE),v=h.getParameter(h.MAX_CUBE_MAP_TEXTURE_SIZE),b=h.getParameter(h.MAX_VERTEX_ATTRIBS),M=h.getParameter(h.MAX_VERTEX_UNIFORM_VECTORS),y=h.getParameter(h.MAX_VARYING_VECTORS),T=h.getParameter(h.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,R=u||n.has("OES_texture_float"),P=E&&R,I=u?h.getParameter(h.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:l,precision:f,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:v,maxAttributes:b,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:I}}function Bp(h){const n=this;let s=null,r=0,a=!1,l=!1;const u=new ls,f=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||r!==0||a;return a=_,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){s=m(g,_,0)},this.setState=function(g,_,x){const v=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,y=h.get(g);if(!a||v===null||v.length===0||l&&!M)l?m(null):p();else{const T=l?0:r,E=T*4;let R=y.clippingState||null;d.value=R,R=m(v,_,E,x);for(let P=0;P!==E;++P)R[P]=s[P];y.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function p(){d.value!==s&&(d.value=s,d.needsUpdate=r>0),n.numPlanes=r,n.numIntersection=0}function m(g,_,x,v){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=d.value,v!==!0||M===null){const y=x+b*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(M===null||M.length<y)&&(M=new Float32Array(y));for(let E=0,R=x;E!==b;++E,R+=4)u.copy(g[E]).applyMatrix4(T,f),u.normal.toArray(M,R),M[R+3]=u.constant}d.value=M,d.needsUpdate=!0}return n.numPlanes=b,n.numIntersection=0,M}}function zp(h){let n=new WeakMap;function s(u,f){return f===Ai?u.mapping=An:f===Wi&&(u.mapping=mn),u}function r(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const f=u.mapping;if(f===Ai||f===Wi)if(n.has(u)){const d=n.get(u).texture;return s(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Nf(d.height/2);return p.fromEquirectangularTexture(h,u),n.set(u,p),u.addEventListener("dispose",a),s(p.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=n.get(f);d!==void 0&&(n.delete(f),d.dispose())}function l(){n=new WeakMap}return{get:r,dispose:l}}class Nc extends Ic{constructor(n=-1,s=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=s,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(n,s){return super.copy(n,s),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,s,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=s,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-n,u=r+n,f=a+s,d=a-s;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const s=super.toJSON(n);return s.object.zoom=this.zoom,s.object.left=this.left,s.object.right=this.right,s.object.top=this.top,s.object.bottom=this.bottom,s.object.near=this.near,s.object.far=this.far,this.view!==null&&(s.object.view=Object.assign({},this.view)),s}}const nr=4,ph=[.125,.215,.35,.446,.526,.582],us=20,Oc=new Nc,mh=new Ce;let Fc=null;const fs=(1+Math.sqrt(5))/2,ir=1/fs,gh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fs,ir),new N(0,fs,-ir),new N(ir,0,fs),new N(-ir,0,fs),new N(fs,ir,0),new N(-fs,ir,0)];class _h{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,s=0,r=.1,a=100){Fc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(n,r,a,l),s>0&&this._blur(l,0,0,s),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(n,s=null){return this._fromTexture(n,s)}fromCubemap(n,s=null){return this._fromTexture(n,s)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Fc),n.scissorTest=!1,ro(n,0,0,n.width,n.height)}_fromTexture(n,s){n.mapping===An||n.mapping===mn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Fc=this._renderer.getRenderTarget();const r=s||this._allocateTargets();return this._textureToCubeUV(n,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),s=4*this._cubeSize,r={magFilter:St,minFilter:St,generateMipmaps:!1,type:Yi,format:Zt,colorSpace:Pn,depthBuffer:!1},a=xh(n,s,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==s){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(n,s,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(l)),this._blurMaterial=kp(l,n,s)}return a}_compileMaterial(n){const s=new _n(this._lodPlanes[0],n);this._renderer.compile(s,Oc)}_sceneToCubeUV(n,s,r,a){const f=new $t(90,1,s,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(mh),m.toneMapping=qn,m.autoClear=!1;const x=new Fi({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new _n(new cs,x);let b=!1;const M=n.background;M?M.isColor&&(x.color.copy(M),n.background=null,b=!0):(x.color.copy(mh),b=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(f.up.set(0,d[y],0),f.lookAt(p[y],0,0)):T===1?(f.up.set(0,0,d[y]),f.lookAt(0,p[y],0)):(f.up.set(0,d[y],0),f.lookAt(0,0,p[y]));const E=this._cubeSize;ro(a,T*E,y>2?E:0,E,E),m.setRenderTarget(a),b&&m.render(v,f),m.render(n,f)}v.geometry.dispose(),v.material.dispose(),m.toneMapping=_,m.autoClear=g,n.background=M}_textureToCubeUV(n,s){const r=this._renderer,a=n.mapping===An||n.mapping===mn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new _n(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=n;const d=this._cubeSize;ro(s,0,0,3*d,2*d),r.setRenderTarget(s),r.render(u,Oc)}_applyPMREM(n){const s=this._renderer,r=s.autoClear;s.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=gh[(a-1)%gh.length];this._blur(n,a-1,a,l,u)}s.autoClear=r}_blur(n,s,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(n,u,s,r,a,"latitudinal",l),this._halfBlur(u,n,r,r,a,"longitudinal",l)}_halfBlur(n,s,r,a,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new _n(this._lodPlanes[a],p),_=p.uniforms,x=this._sizeLods[r]-1,v=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*us-1),b=l/v,M=isFinite(l)?1+Math.floor(m*b):us;M>us&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${us}`);const y=[];let T=0;for(let B=0;B<us;++B){const G=B/b,A=Math.exp(-G*G/2);y.push(A),B===0?T+=A:B<M&&(T+=2*A)}for(let B=0;B<y.length;B++)y[B]=y[B]/T;_.envMap.value=n.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:E}=this;_.dTheta.value=v,_.mipInt.value=E-r;const R=this._sizeLods[a],P=3*R*(a>E-nr?a-E+nr:0),I=4*(this._cubeSize-R);ro(s,P,I,3*R,2*R),d.setRenderTarget(s),d.render(g,Oc)}}function Gp(h){const n=[],s=[],r=[];let a=h;const l=h-nr+1+ph.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);s.push(f);let d=1/f;u>h-nr?d=ph[u-h+nr-1]:u===0&&(d=0),r.push(d);const p=1/(f-2),m=-p,g=1+p,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,v=6,b=3,M=2,y=1,T=new Float32Array(b*v*x),E=new Float32Array(M*v*x),R=new Float32Array(y*v*x);for(let I=0;I<x;I++){const B=I%3*2/3-1,G=I>2?0:-1,A=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];T.set(A,b*v*I),E.set(_,M*v*I);const O=[I,I,I,I,I,I];R.set(O,y*v*I)}const P=new at;P.setAttribute("position",new Vt(T,b)),P.setAttribute("uv",new Vt(E,M)),P.setAttribute("faceIndex",new Vt(R,y)),n.push(P),a>nr&&a--}return{lodPlanes:n,sizeLods:s,sigmas:r}}function xh(h,n,s){const r=new rs(h,n,s);return r.texture.mapping=Xi,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ro(h,n,s,r,a){h.viewport.set(n,s,r,a),h.scissor.set(n,s,r,a)}function kp(h,n,s){const r=new Float32Array(us),a=new N(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${h}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function yh(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function vh(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hp(h){let n=new WeakMap,s=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Ai||d===Wi,m=d===An||d===mn;if(p||m)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let g=n.get(f);return s===null&&(s=new _h(h)),g=p?s.fromEquirectangular(f,g):s.fromCubemap(f,g),n.set(f,g),g.texture}else{if(n.has(f))return n.get(f).texture;{const g=f.image;if(p&&g&&g.height>0||m&&g&&a(g)){s===null&&(s=new _h(h));const _=p?s.fromEquirectangular(f):s.fromCubemap(f);return n.set(f,_),f.addEventListener("dispose",l),_.texture}else return null}}}return f}function a(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=n.get(d);p!==void 0&&(n.delete(d),p.dispose())}function u(){n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:r,dispose:u}}function Vp(h){const n={};function s(r){if(n[r]!==void 0)return n[r];let a;switch(r){case"WEBGL_depth_texture":a=h.getExtension("WEBGL_depth_texture")||h.getExtension("MOZ_WEBGL_depth_texture")||h.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=h.getExtension("WEBGL_compressed_texture_s3tc")||h.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=h.getExtension("WEBGL_compressed_texture_pvrtc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=h.getExtension(r)}return n[r]=a,a}return{has:function(r){return s(r)!==null},init:function(r){r.isWebGL2?s("EXT_color_buffer_float"):(s("WEBGL_depth_texture"),s("OES_texture_float"),s("OES_texture_half_float"),s("OES_texture_half_float_linear"),s("OES_standard_derivatives"),s("OES_element_index_uint"),s("OES_vertex_array_object"),s("ANGLE_instanced_arrays")),s("OES_texture_float_linear"),s("EXT_color_buffer_half_float"),s("WEBGL_multisampled_render_to_texture")},get:function(r){const a=s(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Wp(h,n,s,r){const a={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&n.remove(_.index);for(const v in _.attributes)n.remove(_.attributes[v]);_.removeEventListener("dispose",u),delete a[_.id];const x=l.get(_);x&&(n.remove(x),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,s.memory.geometries--}function f(g,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,s.memory.geometries++),_}function d(g){const _=g.attributes;for(const v in _)n.update(_[v],h.ARRAY_BUFFER);const x=g.morphAttributes;for(const v in x){const b=x[v];for(let M=0,y=b.length;M<y;M++)n.update(b[M],h.ARRAY_BUFFER)}}function p(g){const _=[],x=g.index,v=g.attributes.position;let b=0;if(x!==null){const T=x.array;b=x.version;for(let E=0,R=T.length;E<R;E+=3){const P=T[E+0],I=T[E+1],B=T[E+2];_.push(P,I,I,B,B,P)}}else{const T=v.array;b=v.version;for(let E=0,R=T.length/3-1;E<R;E+=3){const P=E+0,I=E+1,B=E+2;_.push(P,I,I,B,B,P)}}const M=new(Xl(_)?ah:rh)(_,1);M.version=b;const y=l.get(g);y&&n.remove(y),l.set(g,M)}function m(g){const _=l.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function Xp(h,n,s,r){const a=r.isWebGL2;let l;function u(_){l=_}let f,d;function p(_){f=_.type,d=_.bytesPerElement}function m(_,x){h.drawElements(l,x,f,_*d),s.update(x,l,1)}function g(_,x,v){if(v===0)return;let b,M;if(a)b=h,M="drawElementsInstanced";else if(b=n.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[M](l,x,f,_*d,v),s.update(x,l,v)}this.setMode=u,this.setIndex=p,this.render=m,this.renderInstances=g}function qp(h){const n={geometries:0,textures:0},s={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(s.calls++,u){case h.TRIANGLES:s.triangles+=f*(l/3);break;case h.LINES:s.lines+=f*(l/2);break;case h.LINE_STRIP:s.lines+=f*(l-1);break;case h.LINE_LOOP:s.lines+=f*l;break;case h.POINTS:s.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){s.frame++,s.calls=0,s.triangles=0,s.points=0,s.lines=0}return{memory:n,render:s,programs:null,autoReset:!0,reset:a,update:r}}function Yp(h,n){return h[0]-n[0]}function $p(h,n){return Math.abs(n[1])-Math.abs(h[1])}function Zp(h,n,s){const r={},a=new Float32Array(8),l=new WeakMap,u=new gt,f=[];for(let p=0;p<8;p++)f[p]=[p,0];function d(p,m,g){const _=p.morphTargetInfluences;if(n.isWebGL2===!0){const x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=x!==void 0?x.length:0;let b=l.get(m);if(b===void 0||b.count!==v){let Y=function(){te.dispose(),l.delete(m),m.removeEventListener("dispose",Y)};b!==void 0&&b.texture.dispose();const T=m.morphAttributes.position!==void 0,E=m.morphAttributes.normal!==void 0,R=m.morphAttributes.color!==void 0,P=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let G=0;T===!0&&(G=1),E===!0&&(G=2),R===!0&&(G=3);let A=m.attributes.position.count*G,O=1;A>n.maxTextureSize&&(O=Math.ceil(A/n.maxTextureSize),A=n.maxTextureSize);const $=new Float32Array(A*O*4*v),te=new _c($,A,O,v);te.type=Zn,te.needsUpdate=!0;const W=G*4;for(let J=0;J<v;J++){const le=P[J],ae=I[J],re=B[J],he=A*O*4*J;for(let de=0;de<le.count;de++){const Pe=de*W;T===!0&&(u.fromBufferAttribute(le,de),$[he+Pe+0]=u.x,$[he+Pe+1]=u.y,$[he+Pe+2]=u.z,$[he+Pe+3]=0),E===!0&&(u.fromBufferAttribute(ae,de),$[he+Pe+4]=u.x,$[he+Pe+5]=u.y,$[he+Pe+6]=u.z,$[he+Pe+7]=0),R===!0&&(u.fromBufferAttribute(re,de),$[he+Pe+8]=u.x,$[he+Pe+9]=u.y,$[he+Pe+10]=u.z,$[he+Pe+11]=re.itemSize===4?u.w:1)}}b={count:v,texture:te,size:new ce(A,O)},l.set(m,b),m.addEventListener("dispose",Y)}let M=0;for(let T=0;T<_.length;T++)M+=_[T];const y=m.morphTargetsRelative?1:1-M;g.getUniforms().setValue(h,"morphTargetBaseInfluence",y),g.getUniforms().setValue(h,"morphTargetInfluences",_),g.getUniforms().setValue(h,"morphTargetsTexture",b.texture,s),g.getUniforms().setValue(h,"morphTargetsTextureSize",b.size)}else{const x=_===void 0?0:_.length;let v=r[m.id];if(v===void 0||v.length!==x){v=[];for(let E=0;E<x;E++)v[E]=[E,0];r[m.id]=v}for(let E=0;E<x;E++){const R=v[E];R[0]=E,R[1]=_[E]}v.sort($p);for(let E=0;E<8;E++)E<x&&v[E][1]?(f[E][0]=v[E][0],f[E][1]=v[E][1]):(f[E][0]=Number.MAX_SAFE_INTEGER,f[E][1]=0);f.sort(Yp);const b=m.morphAttributes.position,M=m.morphAttributes.normal;let y=0;for(let E=0;E<8;E++){const R=f[E],P=R[0],I=R[1];P!==Number.MAX_SAFE_INTEGER&&I?(b&&m.getAttribute("morphTarget"+E)!==b[P]&&m.setAttribute("morphTarget"+E,b[P]),M&&m.getAttribute("morphNormal"+E)!==M[P]&&m.setAttribute("morphNormal"+E,M[P]),a[E]=I,y+=I):(b&&m.hasAttribute("morphTarget"+E)===!0&&m.deleteAttribute("morphTarget"+E),M&&m.hasAttribute("morphNormal"+E)===!0&&m.deleteAttribute("morphNormal"+E),a[E]=0)}const T=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(h,"morphTargetBaseInfluence",T),g.getUniforms().setValue(h,"morphTargetInfluences",a)}}return{update:d}}function Jp(h,n,s,r){let a=new WeakMap;function l(d){const p=r.render.frame,m=d.geometry,g=n.get(d,m);return a.get(g)!==p&&(n.update(g),a.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.update(d.instanceMatrix,h.ARRAY_BUFFER),d.instanceColor!==null&&s.update(d.instanceColor,h.ARRAY_BUFFER)),g}function u(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),s.remove(p.instanceMatrix),p.instanceColor!==null&&s.remove(p.instanceColor)}return{update:l,dispose:u}}const Mh=new cn,Sh=new _c,bh=new $l,Eh=new to,wh=[],Th=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function sr(h,n,s){const r=h[0];if(r<=0||r>0)return h;const a=n*s;let l=wh[a];if(l===void 0&&(l=new Float32Array(a),wh[a]=l),n!==0){r.toArray(l,0);for(let u=1,f=0;u!==n;++u)f+=s,h[u].toArray(l,f)}return l}function zt(h,n){if(h.length!==n.length)return!1;for(let s=0,r=h.length;s<r;s++)if(h[s]!==n[s])return!1;return!0}function Gt(h,n){for(let s=0,r=n.length;s<r;s++)h[s]=n[s]}function ao(h,n){let s=Th[n];s===void 0&&(s=new Int32Array(n),Th[n]=s);for(let r=0;r!==n;++r)s[r]=h.allocateTextureUnit();return s}function Kp(h,n){const s=this.cache;s[0]!==n&&(h.uniform1f(this.addr,n),s[0]=n)}function jp(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y)&&(h.uniform2f(this.addr,n.x,n.y),s[0]=n.x,s[1]=n.y);else{if(zt(s,n))return;h.uniform2fv(this.addr,n),Gt(s,n)}}function Qp(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z)&&(h.uniform3f(this.addr,n.x,n.y,n.z),s[0]=n.x,s[1]=n.y,s[2]=n.z);else if(n.r!==void 0)(s[0]!==n.r||s[1]!==n.g||s[2]!==n.b)&&(h.uniform3f(this.addr,n.r,n.g,n.b),s[0]=n.r,s[1]=n.g,s[2]=n.b);else{if(zt(s,n))return;h.uniform3fv(this.addr,n),Gt(s,n)}}function em(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z||s[3]!==n.w)&&(h.uniform4f(this.addr,n.x,n.y,n.z,n.w),s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=n.w);else{if(zt(s,n))return;h.uniform4fv(this.addr,n),Gt(s,n)}}function tm(h,n){const s=this.cache,r=n.elements;if(r===void 0){if(zt(s,n))return;h.uniformMatrix2fv(this.addr,!1,n),Gt(s,n)}else{if(zt(s,r))return;Ch.set(r),h.uniformMatrix2fv(this.addr,!1,Ch),Gt(s,r)}}function nm(h,n){const s=this.cache,r=n.elements;if(r===void 0){if(zt(s,n))return;h.uniformMatrix3fv(this.addr,!1,n),Gt(s,n)}else{if(zt(s,r))return;Rh.set(r),h.uniformMatrix3fv(this.addr,!1,Rh),Gt(s,r)}}function im(h,n){const s=this.cache,r=n.elements;if(r===void 0){if(zt(s,n))return;h.uniformMatrix4fv(this.addr,!1,n),Gt(s,n)}else{if(zt(s,r))return;Ah.set(r),h.uniformMatrix4fv(this.addr,!1,Ah),Gt(s,r)}}function sm(h,n){const s=this.cache;s[0]!==n&&(h.uniform1i(this.addr,n),s[0]=n)}function rm(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y)&&(h.uniform2i(this.addr,n.x,n.y),s[0]=n.x,s[1]=n.y);else{if(zt(s,n))return;h.uniform2iv(this.addr,n),Gt(s,n)}}function am(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z)&&(h.uniform3i(this.addr,n.x,n.y,n.z),s[0]=n.x,s[1]=n.y,s[2]=n.z);else{if(zt(s,n))return;h.uniform3iv(this.addr,n),Gt(s,n)}}function om(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z||s[3]!==n.w)&&(h.uniform4i(this.addr,n.x,n.y,n.z,n.w),s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=n.w);else{if(zt(s,n))return;h.uniform4iv(this.addr,n),Gt(s,n)}}function cm(h,n){const s=this.cache;s[0]!==n&&(h.uniform1ui(this.addr,n),s[0]=n)}function lm(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y)&&(h.uniform2ui(this.addr,n.x,n.y),s[0]=n.x,s[1]=n.y);else{if(zt(s,n))return;h.uniform2uiv(this.addr,n),Gt(s,n)}}function hm(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z)&&(h.uniform3ui(this.addr,n.x,n.y,n.z),s[0]=n.x,s[1]=n.y,s[2]=n.z);else{if(zt(s,n))return;h.uniform3uiv(this.addr,n),Gt(s,n)}}function um(h,n){const s=this.cache;if(n.x!==void 0)(s[0]!==n.x||s[1]!==n.y||s[2]!==n.z||s[3]!==n.w)&&(h.uniform4ui(this.addr,n.x,n.y,n.z,n.w),s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=n.w);else{if(zt(s,n))return;h.uniform4uiv(this.addr,n),Gt(s,n)}}function fm(h,n,s){const r=this.cache,a=s.allocateTextureUnit();r[0]!==a&&(h.uniform1i(this.addr,a),r[0]=a),s.setTexture2D(n||Mh,a)}function dm(h,n,s){const r=this.cache,a=s.allocateTextureUnit();r[0]!==a&&(h.uniform1i(this.addr,a),r[0]=a),s.setTexture3D(n||bh,a)}function pm(h,n,s){const r=this.cache,a=s.allocateTextureUnit();r[0]!==a&&(h.uniform1i(this.addr,a),r[0]=a),s.setTextureCube(n||Eh,a)}function mm(h,n,s){const r=this.cache,a=s.allocateTextureUnit();r[0]!==a&&(h.uniform1i(this.addr,a),r[0]=a),s.setTexture2DArray(n||Sh,a)}function gm(h){switch(h){case 5126:return Kp;case 35664:return jp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return cm;case 36294:return lm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(h,n){h.uniform1fv(this.addr,n)}function xm(h,n){const s=sr(n,this.size,2);h.uniform2fv(this.addr,s)}function ym(h,n){const s=sr(n,this.size,3);h.uniform3fv(this.addr,s)}function vm(h,n){const s=sr(n,this.size,4);h.uniform4fv(this.addr,s)}function Mm(h,n){const s=sr(n,this.size,4);h.uniformMatrix2fv(this.addr,!1,s)}function Sm(h,n){const s=sr(n,this.size,9);h.uniformMatrix3fv(this.addr,!1,s)}function bm(h,n){const s=sr(n,this.size,16);h.uniformMatrix4fv(this.addr,!1,s)}function Em(h,n){h.uniform1iv(this.addr,n)}function wm(h,n){h.uniform2iv(this.addr,n)}function Tm(h,n){h.uniform3iv(this.addr,n)}function Am(h,n){h.uniform4iv(this.addr,n)}function Rm(h,n){h.uniform1uiv(this.addr,n)}function Cm(h,n){h.uniform2uiv(this.addr,n)}function Pm(h,n){h.uniform3uiv(this.addr,n)}function Lm(h,n){h.uniform4uiv(this.addr,n)}function Im(h,n,s){const r=this.cache,a=n.length,l=ao(s,a);zt(r,l)||(h.uniform1iv(this.addr,l),Gt(r,l));for(let u=0;u!==a;++u)s.setTexture2D(n[u]||Mh,l[u])}function Um(h,n,s){const r=this.cache,a=n.length,l=ao(s,a);zt(r,l)||(h.uniform1iv(this.addr,l),Gt(r,l));for(let u=0;u!==a;++u)s.setTexture3D(n[u]||bh,l[u])}function Dm(h,n,s){const r=this.cache,a=n.length,l=ao(s,a);zt(r,l)||(h.uniform1iv(this.addr,l),Gt(r,l));for(let u=0;u!==a;++u)s.setTextureCube(n[u]||Eh,l[u])}function Nm(h,n,s){const r=this.cache,a=n.length,l=ao(s,a);zt(r,l)||(h.uniform1iv(this.addr,l),Gt(r,l));for(let u=0;u!==a;++u)s.setTexture2DArray(n[u]||Sh,l[u])}function Om(h){switch(h){case 5126:return _m;case 35664:return xm;case 35665:return ym;case 35666:return vm;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Fm{constructor(n,s,r){this.id=n,this.addr=r,this.cache=[],this.setValue=gm(s.type)}}class Bm{constructor(n,s,r){this.id=n,this.addr=r,this.cache=[],this.size=s.size,this.setValue=Om(s.type)}}class zm{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,s,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(n,s[f.id],r)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function Ph(h,n){h.seq.push(n),h.map[n.id]=n}function Gm(h,n,s){const r=h.name,a=r.length;for(zc.lastIndex=0;;){const l=zc.exec(r),u=zc.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===a){Ph(s,p===void 0?new Fm(f,h,n):new Bm(f,h,n));break}else{let g=s.map[f];g===void 0&&(g=new zm(f),Ph(s,g)),s=g}}}class oo{constructor(n,s){this.seq=[],this.map={};const r=n.getProgramParameter(s,n.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=n.getActiveUniform(s,a),u=n.getUniformLocation(s,l.name);Gm(l,u,this)}}setValue(n,s,r,a){const l=this.map[s];l!==void 0&&l.setValue(n,r,a)}setOptional(n,s,r){const a=s[r];a!==void 0&&this.setValue(n,r,a)}static upload(n,s,r,a){for(let l=0,u=s.length;l!==u;++l){const f=s[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(n,d.value,a)}}static seqWithValue(n,s){const r=[];for(let a=0,l=n.length;a!==l;++a){const u=n[a];u.id in s&&r.push(u)}return r}}function Lh(h,n,s){const r=h.createShader(n);return h.shaderSource(r,s),h.compileShader(r),r}let km=0;function Hm(h,n){const s=h.split(`
`),r=[],a=Math.max(n-6,0),l=Math.min(n+6,s.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===n?">":" "} ${f}: ${s[u]}`)}return r.join(`
`)}function Vm(h){switch(h){case Pn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",h),["Linear","( value )"]}}function Ih(h,n,s){const r=h.getShaderParameter(n,h.COMPILE_STATUS),a=h.getShaderInfoLog(n).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return s.toUpperCase()+`

`+a+`

`+Hm(h.getShaderSource(n),u)}else return a}function Wm(h,n){const s=Vm(n);return"vec4 "+h+"( vec4 value ) { return LinearTo"+s[0]+s[1]+"; }"}function Xm(h,n){let s;switch(n){case Sr:s="Linear";break;case Qo:s="Reinhard";break;case ec:s="OptimizedCineon";break;case Gl:s="ACESFilmic";break;case kl:s="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),s="Linear"}return"vec3 "+h+"( vec3 color ) { return "+s+"ToneMapping( color ); }"}function qm(h){return[h.extensionDerivatives||h.envMapCubeUVHeight||h.bumpMap||h.normalMapTangentSpace||h.clearcoatNormalMap||h.flatShading||h.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(h.extensionFragDepth||h.logarithmicDepthBuffer)&&h.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",h.extensionDrawBuffers&&h.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(h.extensionShaderTextureLOD||h.envMap||h.transmission)&&h.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function Ym(h){const n=[];for(const s in h){const r=h[s];r!==!1&&n.push("#define "+s+" "+r)}return n.join(`
`)}function $m(h,n){const s={},r=h.getProgramParameter(n,h.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=h.getActiveAttrib(n,a),u=l.name;let f=1;l.type===h.FLOAT_MAT2&&(f=2),l.type===h.FLOAT_MAT3&&(f=3),l.type===h.FLOAT_MAT4&&(f=4),s[u]={type:l.type,location:h.getAttribLocation(n,u),locationSize:f}}return s}function Xr(h){return h!==""}function Uh(h,n){const s=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return h.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,s).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Dh(h,n){return h.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(h){return h.replace(Zm,Jm)}function Jm(h,n){const s=it[n];if(s===void 0)throw new Error("Can not resolve #include <"+n+">");return Gc(s)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(h){return h.replace(Km,jm)}function jm(h,n,s,r){let a="";for(let l=parseInt(n);l<parseInt(s);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Oh(h){let n="precision "+h.precision+` float;
precision `+h.precision+" int;";return h.precision==="highp"?n+=`
#define HIGH_PRECISION`:h.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:h.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Qm(h){let n="SHADOWMAP_TYPE_BASIC";return h.shadowMapType===Ho?n="SHADOWMAP_TYPE_PCF":h.shadowMapType===Il?n="SHADOWMAP_TYPE_PCF_SOFT":h.shadowMapType===Xn&&(n="SHADOWMAP_TYPE_VSM"),n}function eg(h){let n="ENVMAP_TYPE_CUBE";if(h.envMap)switch(h.envMapMode){case An:case mn:n="ENVMAP_TYPE_CUBE";break;case Xi:n="ENVMAP_TYPE_CUBE_UV";break}return n}function tg(h){let n="ENVMAP_MODE_REFLECTION";if(h.envMap)switch(h.envMapMode){case mn:n="ENVMAP_MODE_REFRACTION";break}return n}function ng(h){let n="ENVMAP_BLENDING_NONE";if(h.envMap)switch(h.combine){case Ts:n="ENVMAP_BLENDING_MULTIPLY";break;case Mr:n="ENVMAP_BLENDING_MIX";break;case Nn:n="ENVMAP_BLENDING_ADD";break}return n}function ig(h){const n=h.envMapCubeUVHeight;if(n===null)return null;const s=Math.log2(n)-2,r=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,s),7*16)),texelHeight:r,maxMip:s}}function sg(h,n,s,r){const a=h.getContext(),l=s.defines;let u=s.vertexShader,f=s.fragmentShader;const d=Qm(s),p=eg(s),m=tg(s),g=ng(s),_=ig(s),x=s.isWebGL2?"":qm(s),v=Ym(l),b=a.createProgram();let M,y,T=s.glslVersion?"#version "+s.glslVersion+`
`:"";s.isRawShaderMaterial?(M=[v].filter(Xr).join(`
`),M.length>0&&(M+=`
`),y=[x,v].filter(Xr).join(`
`),y.length>0&&(y+=`
`)):(M=[Oh(s),"#define SHADER_NAME "+s.shaderName,v,s.instancing?"#define USE_INSTANCING":"",s.instancingColor?"#define USE_INSTANCING_COLOR":"",s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.map?"#define USE_MAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+m:"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.displacementMap?"#define USE_DISPLACEMENTMAP":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.mapUv?"#define MAP_UV "+s.mapUv:"",s.alphaMapUv?"#define ALPHAMAP_UV "+s.alphaMapUv:"",s.lightMapUv?"#define LIGHTMAP_UV "+s.lightMapUv:"",s.aoMapUv?"#define AOMAP_UV "+s.aoMapUv:"",s.emissiveMapUv?"#define EMISSIVEMAP_UV "+s.emissiveMapUv:"",s.bumpMapUv?"#define BUMPMAP_UV "+s.bumpMapUv:"",s.normalMapUv?"#define NORMALMAP_UV "+s.normalMapUv:"",s.displacementMapUv?"#define DISPLACEMENTMAP_UV "+s.displacementMapUv:"",s.metalnessMapUv?"#define METALNESSMAP_UV "+s.metalnessMapUv:"",s.roughnessMapUv?"#define ROUGHNESSMAP_UV "+s.roughnessMapUv:"",s.clearcoatMapUv?"#define CLEARCOATMAP_UV "+s.clearcoatMapUv:"",s.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+s.clearcoatNormalMapUv:"",s.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+s.clearcoatRoughnessMapUv:"",s.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+s.iridescenceMapUv:"",s.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+s.iridescenceThicknessMapUv:"",s.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+s.sheenColorMapUv:"",s.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+s.sheenRoughnessMapUv:"",s.specularMapUv?"#define SPECULARMAP_UV "+s.specularMapUv:"",s.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+s.specularColorMapUv:"",s.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+s.specularIntensityMapUv:"",s.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+s.transmissionMapUv:"",s.thicknessMapUv?"#define THICKNESSMAP_UV "+s.thicknessMapUv:"",s.vertexTangents?"#define USE_TANGENT":"",s.vertexColors?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.flatShading?"#define FLAT_SHADED":"",s.skinning?"#define USE_SKINNING":"",s.morphTargets?"#define USE_MORPHTARGETS":"",s.morphNormals&&s.flatShading===!1?"#define USE_MORPHNORMALS":"",s.morphColors&&s.isWebGL2?"#define USE_MORPHCOLORS":"",s.morphTargetsCount>0&&s.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",s.morphTargetsCount>0&&s.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+s.morphTextureStride:"",s.morphTargetsCount>0&&s.isWebGL2?"#define MORPHTARGETS_COUNT "+s.morphTargetsCount:"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+d:"",s.sizeAttenuation?"#define USE_SIZEATTENUATION":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",s.logarithmicDepthBuffer&&s.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),y=[x,Oh(s),"#define SHADER_NAME "+s.shaderName,v,s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.map?"#define USE_MAP":"",s.matcap?"#define USE_MATCAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+p:"",s.envMap?"#define "+m:"",s.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.clearcoat?"#define USE_CLEARCOAT":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.iridescence?"#define USE_IRIDESCENCE":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.alphaTest?"#define USE_ALPHATEST":"",s.sheen?"#define USE_SHEEN":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.vertexTangents?"#define USE_TANGENT":"",s.vertexColors||s.instancingColor?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.gradientMap?"#define USE_GRADIENTMAP":"",s.flatShading?"#define FLAT_SHADED":"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+d:"",s.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",s.useLegacyLights?"#define LEGACY_LIGHTS":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",s.logarithmicDepthBuffer&&s.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",s.toneMapping!==qn?"#define TONE_MAPPING":"",s.toneMapping!==qn?it.tonemapping_pars_fragment:"",s.toneMapping!==qn?Xm("toneMapping",s.toneMapping):"",s.dithering?"#define DITHERING":"",s.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,Wm("linearToOutputTexel",s.outputColorSpace),s.useDepthPacking?"#define DEPTH_PACKING "+s.depthPacking:"",`
`].filter(Xr).join(`
`)),u=Gc(u),u=Uh(u,s),u=Dh(u,s),f=Gc(f),f=Uh(f,s),f=Dh(f,s),u=Nh(u),f=Nh(f),s.isWebGL2&&s.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",s.glslVersion===xn?"":"layout(location = 0) out highp vec4 pc_fragColor;",s.glslVersion===xn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=T+M+u,R=T+y+f,P=Lh(a,a.VERTEX_SHADER,E),I=Lh(a,a.FRAGMENT_SHADER,R);if(a.attachShader(b,P),a.attachShader(b,I),s.index0AttributeName!==void 0?a.bindAttribLocation(b,0,s.index0AttributeName):s.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b),h.debug.checkShaderErrors){const A=a.getProgramInfoLog(b).trim(),O=a.getShaderInfoLog(P).trim(),$=a.getShaderInfoLog(I).trim();let te=!0,W=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(te=!1,typeof h.debug.onShaderError=="function")h.debug.onShaderError(a,b,P,I);else{const Y=Ih(a,P,"vertex"),J=Ih(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+Y+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(O===""||$==="")&&(W=!1);W&&(this.diagnostics={runnable:te,programLog:A,vertexShader:{log:O,prefix:M},fragmentShader:{log:$,prefix:y}})}a.deleteShader(P),a.deleteShader(I);let B;this.getUniforms=function(){return B===void 0&&(B=new oo(a,b)),B};let G;return this.getAttributes=function(){return G===void 0&&(G=$m(a,b)),G},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.name=s.shaderName,this.id=km++,this.cacheKey=n,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=I,this}let rg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const s=n.vertexShader,r=n.fragmentShader,a=this._getShaderStage(s),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(n);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(n){const s=this.materialCache.get(n);for(const r of s)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const s=this.materialCache;let r=s.get(n);return r===void 0&&(r=new Set,s.set(n,r)),r}_getShaderStage(n){const s=this.shaderCache;let r=s.get(n);return r===void 0&&(r=new og(n),s.set(n,r)),r}}class og{constructor(n){this.id=rg++,this.code=n,this.usedTimes=0}}function cg(h,n,s,r,a,l,u){const f=new Ec,d=new ag,p=[],m=a.isWebGL2,g=a.logarithmicDepthBuffer,_=a.vertexTextures;let x=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return A===1?"uv1":A===2?"uv2":A===3?"uv3":"uv"}function M(A,O,$,te,W){const Y=te.fog,J=W.geometry,le=A.isMeshStandardMaterial?te.environment:null,ae=(A.isMeshStandardMaterial?s:n).get(A.envMap||le),re=ae&&ae.mapping===Xi?ae.image.height:null,he=v[A.type];A.precision!==null&&(x=a.getMaxPrecision(A.precision),x!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",x,"instead."));const de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pe=de!==void 0?de.length:0;let be=0;J.morphAttributes.position!==void 0&&(be=1),J.morphAttributes.normal!==void 0&&(be=2),J.morphAttributes.color!==void 0&&(be=3);let K,oe,ve,Ee;if(he){const yt=ti[he];K=yt.vertexShader,oe=yt.fragmentShader}else K=A.vertexShader,oe=A.fragmentShader,d.update(A),ve=d.getVertexShaderID(A),Ee=d.getFragmentShaderID(A);const k=h.getRenderTarget(),Ze=W.isInstancedMesh===!0,Je=!!A.map,_e=!!A.matcap,Fe=!!ae,ue=!!A.aoMap,ne=!!A.lightMap,fe=!!A.bumpMap,Ue=!!A.normalMap,Me=!!A.displacementMap,We=!!A.emissiveMap,Xe=!!A.metalnessMap,Ge=!!A.roughnessMap,rt=A.clearcoat>0,mt=A.iridescence>0,F=A.sheen>0,L=A.transmission>0,Z=rt&&!!A.clearcoatMap,pe=rt&&!!A.clearcoatNormalMap,ge=rt&&!!A.clearcoatRoughnessMap,Se=mt&&!!A.iridescenceMap,$e=mt&&!!A.iridescenceThicknessMap,Le=F&&!!A.sheenColorMap,ee=F&&!!A.sheenRoughnessMap,Oe=!!A.specularMap,ke=!!A.specularColorMap,qe=!!A.specularIntensityMap,De=L&&!!A.transmissionMap,ze=L&&!!A.thicknessMap,ft=!!A.gradientMap,_t=!!A.alphaMap,Lt=A.alphaTest>0,H=!!A.extensions,j=!!J.attributes.uv1,me=!!J.attributes.uv2,Te=!!J.attributes.uv3;return{isWebGL2:m,shaderID:he,shaderName:A.type,vertexShader:K,fragmentShader:oe,defines:A.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:x,instancing:Ze,instancingColor:Ze&&W.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:k===null?h.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Pn,map:Je,matcap:_e,envMap:Fe,envMapMode:Fe&&ae.mapping,envMapCubeUVHeight:re,aoMap:ue,lightMap:ne,bumpMap:fe,normalMap:Ue,displacementMap:_&&Me,emissiveMap:We,normalMapObjectSpace:Ue&&A.normalMapType===Ur,normalMapTangentSpace:Ue&&A.normalMapType===Bn,metalnessMap:Xe,roughnessMap:Ge,clearcoat:rt,clearcoatMap:Z,clearcoatNormalMap:pe,clearcoatRoughnessMap:ge,iridescence:mt,iridescenceMap:Se,iridescenceThicknessMap:$e,sheen:F,sheenColorMap:Le,sheenRoughnessMap:ee,specularMap:Oe,specularColorMap:ke,specularIntensityMap:qe,transmission:L,transmissionMap:De,thicknessMap:ze,gradientMap:ft,opaque:A.transparent===!1&&A.blending===Ti,alphaMap:_t,alphaTest:Lt,combine:A.combine,mapUv:Je&&b(A.map.channel),aoMapUv:ue&&b(A.aoMap.channel),lightMapUv:ne&&b(A.lightMap.channel),bumpMapUv:fe&&b(A.bumpMap.channel),normalMapUv:Ue&&b(A.normalMap.channel),displacementMapUv:Me&&b(A.displacementMap.channel),emissiveMapUv:We&&b(A.emissiveMap.channel),metalnessMapUv:Xe&&b(A.metalnessMap.channel),roughnessMapUv:Ge&&b(A.roughnessMap.channel),clearcoatMapUv:Z&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:pe&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:ee&&b(A.sheenRoughnessMap.channel),specularMapUv:Oe&&b(A.specularMap.channel),specularColorMapUv:ke&&b(A.specularColorMap.channel),specularIntensityMapUv:qe&&b(A.specularIntensityMap.channel),transmissionMapUv:De&&b(A.transmissionMap.channel),thicknessMapUv:ze&&b(A.thicknessMap.channel),alphaMapUv:_t&&b(A.alphaMap.channel),vertexTangents:Ue&&!!J.attributes.tangent,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:me,vertexUv3s:Te,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(Je||_t),fog:!!Y,useFog:A.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:be,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:h.shadowMap.enabled&&$.length>0,shadowMapType:h.shadowMap.type,toneMapping:A.toneMapped?h.toneMapping:qn,useLegacyLights:h.useLegacyLights,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Tn,flipSided:A.side===tn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:H&&A.extensions.derivatives===!0,extensionFragDepth:H&&A.extensions.fragDepth===!0,extensionDrawBuffers:H&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:H&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||r.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function y(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const $ in A.defines)O.push($),O.push(A.defines[$]);return A.isRawShaderMaterial===!1&&(T(O,A),E(O,A),O.push(h.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function T(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function E(A,O){f.disableAll(),O.isWebGL2&&f.enable(0),O.supportsVertexTextures&&f.enable(1),O.instancing&&f.enable(2),O.instancingColor&&f.enable(3),O.matcap&&f.enable(4),O.envMap&&f.enable(5),O.normalMapObjectSpace&&f.enable(6),O.normalMapTangentSpace&&f.enable(7),O.clearcoat&&f.enable(8),O.iridescence&&f.enable(9),O.alphaTest&&f.enable(10),O.vertexColors&&f.enable(11),O.vertexAlphas&&f.enable(12),O.vertexUv1s&&f.enable(13),O.vertexUv2s&&f.enable(14),O.vertexUv3s&&f.enable(15),O.vertexTangents&&f.enable(16),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.skinning&&f.enable(4),O.morphTargets&&f.enable(5),O.morphNormals&&f.enable(6),O.morphColors&&f.enable(7),O.premultipliedAlpha&&f.enable(8),O.shadowMapEnabled&&f.enable(9),O.useLegacyLights&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),A.push(f.mask)}function R(A){const O=v[A.type];let $;if(O){const te=ti[O];$=Lf.clone(te.uniforms)}else $=A.uniforms;return $}function P(A,O){let $;for(let te=0,W=p.length;te<W;te++){const Y=p[te];if(Y.cacheKey===O){$=Y,++$.usedTimes;break}}return $===void 0&&($=new sg(h,O,A,l),p.push($)),$}function I(A){if(--A.usedTimes===0){const O=p.indexOf(A);p[O]=p[p.length-1],p.pop(),A.destroy()}}function B(A){d.remove(A)}function G(){d.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:I,releaseShaderCache:B,programs:p,dispose:G}}function lg(){let h=new WeakMap;function n(l){let u=h.get(l);return u===void 0&&(u={},h.set(l,u)),u}function s(l){h.delete(l)}function r(l,u,f){h.get(l)[u]=f}function a(){h=new WeakMap}return{get:n,remove:s,update:r,dispose:a}}function hg(h,n){return h.groupOrder!==n.groupOrder?h.groupOrder-n.groupOrder:h.renderOrder!==n.renderOrder?h.renderOrder-n.renderOrder:h.material.id!==n.material.id?h.material.id-n.material.id:h.z!==n.z?h.z-n.z:h.id-n.id}function Fh(h,n){return h.groupOrder!==n.groupOrder?h.groupOrder-n.groupOrder:h.renderOrder!==n.renderOrder?h.renderOrder-n.renderOrder:h.z!==n.z?n.z-h.z:h.id-n.id}function Bh(){const h=[];let n=0;const s=[],r=[],a=[];function l(){n=0,s.length=0,r.length=0,a.length=0}function u(g,_,x,v,b,M){let y=h[n];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:v,renderOrder:g.renderOrder,z:b,group:M},h[n]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=v,y.renderOrder=g.renderOrder,y.z=b,y.group=M),n++,y}function f(g,_,x,v,b,M){const y=u(g,_,x,v,b,M);x.transmission>0?r.push(y):x.transparent===!0?a.push(y):s.push(y)}function d(g,_,x,v,b,M){const y=u(g,_,x,v,b,M);x.transmission>0?r.unshift(y):x.transparent===!0?a.unshift(y):s.unshift(y)}function p(g,_){s.length>1&&s.sort(g||hg),r.length>1&&r.sort(_||Fh),a.length>1&&a.sort(_||Fh)}function m(){for(let g=n,_=h.length;g<_;g++){const x=h[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:s,transmissive:r,transparent:a,init:l,push:f,unshift:d,finish:m,sort:p}}function ug(){let h=new WeakMap;function n(r,a){const l=h.get(r);let u;return l===void 0?(u=new Bh,h.set(r,[u])):a>=l.length?(u=new Bh,l.push(u)):u=l[a],u}function s(){h=new WeakMap}return{get:n,dispose:s}}function fg(){const h={};return{get:function(n){if(h[n.id]!==void 0)return h[n.id];let s;switch(n.type){case"DirectionalLight":s={direction:new N,color:new Ce};break;case"SpotLight":s={position:new N,direction:new N,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new N,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":s={direction:new N,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":s={color:new Ce,position:new N,halfWidth:new N,halfHeight:new N};break}return h[n.id]=s,s}}}function dg(){const h={};return{get:function(n){if(h[n.id]!==void 0)return h[n.id];let s;switch(n.type){case"DirectionalLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return h[n.id]=s,s}}}let pg=0;function mg(h,n){return(n.castShadow?2:0)-(h.castShadow?2:0)+(n.map?1:0)-(h.map?1:0)}function gg(h,n){const s=new fg,r=dg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)a.probe.push(new N);const l=new N,u=new tt,f=new tt;function d(m,g){let _=0,x=0,v=0;for(let $=0;$<9;$++)a.probe[$].set(0,0,0);let b=0,M=0,y=0,T=0,E=0,R=0,P=0,I=0,B=0,G=0;m.sort(mg);const A=g===!0?Math.PI:1;for(let $=0,te=m.length;$<te;$++){const W=m[$],Y=W.color,J=W.intensity,le=W.distance,ae=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)_+=Y.r*J*A,x+=Y.g*J*A,v+=Y.b*J*A;else if(W.isLightProbe)for(let re=0;re<9;re++)a.probe[re].addScaledVector(W.sh.coefficients[re],J);else if(W.isDirectionalLight){const re=s.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity*A),W.castShadow){const he=W.shadow,de=r.get(W);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,a.directionalShadow[b]=de,a.directionalShadowMap[b]=ae,a.directionalShadowMatrix[b]=W.shadow.matrix,R++}a.directional[b]=re,b++}else if(W.isSpotLight){const re=s.get(W);re.position.setFromMatrixPosition(W.matrixWorld),re.color.copy(Y).multiplyScalar(J*A),re.distance=le,re.coneCos=Math.cos(W.angle),re.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),re.decay=W.decay,a.spot[y]=re;const he=W.shadow;if(W.map&&(a.spotLightMap[B]=W.map,B++,he.updateMatrices(W),W.castShadow&&G++),a.spotLightMatrix[y]=he.matrix,W.castShadow){const de=r.get(W);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,a.spotShadow[y]=de,a.spotShadowMap[y]=ae,I++}y++}else if(W.isRectAreaLight){const re=s.get(W);re.color.copy(Y).multiplyScalar(J),re.halfWidth.set(W.width*.5,0,0),re.halfHeight.set(0,W.height*.5,0),a.rectArea[T]=re,T++}else if(W.isPointLight){const re=s.get(W);if(re.color.copy(W.color).multiplyScalar(W.intensity*A),re.distance=W.distance,re.decay=W.decay,W.castShadow){const he=W.shadow,de=r.get(W);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,de.shadowCameraNear=he.camera.near,de.shadowCameraFar=he.camera.far,a.pointShadow[M]=de,a.pointShadowMap[M]=ae,a.pointShadowMatrix[M]=W.shadow.matrix,P++}a.point[M]=re,M++}else if(W.isHemisphereLight){const re=s.get(W);re.skyColor.copy(W.color).multiplyScalar(J*A),re.groundColor.copy(W.groundColor).multiplyScalar(J*A),a.hemi[E]=re,E++}}T>0&&(n.isWebGL2||h.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_FLOAT_1,a.rectAreaLTC2=ye.LTC_FLOAT_2):h.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ye.LTC_HALF_1,a.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=_,a.ambient[1]=x,a.ambient[2]=v;const O=a.hash;(O.directionalLength!==b||O.pointLength!==M||O.spotLength!==y||O.rectAreaLength!==T||O.hemiLength!==E||O.numDirectionalShadows!==R||O.numPointShadows!==P||O.numSpotShadows!==I||O.numSpotMaps!==B)&&(a.directional.length=b,a.spot.length=y,a.rectArea.length=T,a.point.length=M,a.hemi.length=E,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=I+B-G,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=G,O.directionalLength=b,O.pointLength=M,O.spotLength=y,O.rectAreaLength=T,O.hemiLength=E,O.numDirectionalShadows=R,O.numPointShadows=P,O.numSpotShadows=I,O.numSpotMaps=B,a.version=pg++)}function p(m,g){let _=0,x=0,v=0,b=0,M=0;const y=g.matrixWorldInverse;for(let T=0,E=m.length;T<E;T++){const R=m[T];if(R.isDirectionalLight){const P=a.directional[_];P.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),_++}else if(R.isSpotLight){const P=a.spot[v];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),v++}else if(R.isRectAreaLight){const P=a.rectArea[b];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),f.identity(),u.copy(R.matrixWorld),u.premultiply(y),f.extractRotation(u),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),b++}else if(R.isPointLight){const P=a.point[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),x++}else if(R.isHemisphereLight){const P=a.hemi[M];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),M++}}}return{setup:d,setupView:p,state:a}}function zh(h,n){const s=new gg(h,n),r=[],a=[];function l(){r.length=0,a.length=0}function u(g){r.push(g)}function f(g){a.push(g)}function d(g){s.setup(r,g)}function p(g){s.setupView(r,g)}return{init:l,state:{lightsArray:r,shadowsArray:a,lights:s},setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function _g(h,n){let s=new WeakMap;function r(l,u=0){const f=s.get(l);let d;return f===void 0?(d=new zh(h,n),s.set(l,[d])):u>=f.length?(d=new zh(h,n),f.push(d)):d=f[u],d}function a(){s=new WeakMap}return{get:r,dispose:a}}class Gh extends Hr{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ia,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class kh extends Hr{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vg(h,n,s){let r=new Dc;const a=new ce,l=new ce,u=new gt,f=new Gh({depthPacking:Ua}),d=new kh,p={},m=s.maxTextureSize,g={[oi]:tn,[tn]:oi,[Tn]:Tn},_=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:xg,fragmentShader:yg}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const v=new at;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new _n(v,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let y=this.type;this.render=function(P,I,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const G=h.getRenderTarget(),A=h.getActiveCubeFace(),O=h.getActiveMipmapLevel(),$=h.state;$.setBlending(Dn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=y!==Xn&&this.type===Xn,W=y===Xn&&this.type!==Xn;for(let Y=0,J=P.length;Y<J;Y++){const le=P[Y],ae=le.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;a.copy(ae.mapSize);const re=ae.getFrameExtents();if(a.multiply(re),l.copy(ae.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/re.x),a.x=l.x*re.x,ae.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/re.y),a.y=l.y*re.y,ae.mapSize.y=l.y)),ae.map===null||te===!0||W===!0){const de=this.type!==Xn?{minFilter:Tt,magFilter:Tt}:{};ae.map!==null&&ae.map.dispose(),ae.map=new rs(a.x,a.y,de),ae.map.texture.name=le.name+".shadowMap",ae.camera.updateProjectionMatrix()}h.setRenderTarget(ae.map),h.clear();const he=ae.getViewportCount();for(let de=0;de<he;de++){const Pe=ae.getViewport(de);u.set(l.x*Pe.x,l.y*Pe.y,l.x*Pe.z,l.y*Pe.w),$.viewport(u),ae.updateMatrices(le,de),r=ae.getFrustum(),R(I,B,ae.camera,le,this.type)}ae.isPointLightShadow!==!0&&this.type===Xn&&T(ae,B),ae.needsUpdate=!1}y=this.type,M.needsUpdate=!1,h.setRenderTarget(G,A,O)};function T(P,I){const B=n.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new rs(a.x,a.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,h.setRenderTarget(P.mapPass),h.clear(),h.renderBufferDirect(I,null,B,_,b,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,h.setRenderTarget(P.map),h.clear(),h.renderBufferDirect(I,null,B,x,b,null)}function E(P,I,B,G){let A=null;const O=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(O!==void 0)A=O;else if(A=B.isPointLight===!0?d:f,h.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=A.uuid,te=I.uuid;let W=p[$];W===void 0&&(W={},p[$]=W);let Y=W[te];Y===void 0&&(Y=A.clone(),W[te]=Y),A=Y}if(A.visible=I.visible,A.wireframe=I.wireframe,G===Xn?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:g[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const $=h.properties.get(A);$.light=B}return A}function R(P,I,B,G,A){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Xn)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const te=n.update(P),W=P.material;if(Array.isArray(W)){const Y=te.groups;for(let J=0,le=Y.length;J<le;J++){const ae=Y[J],re=W[ae.materialIndex];if(re&&re.visible){const he=E(P,re,G,A);h.renderBufferDirect(B,null,te,he,P,ae)}}}else if(W.visible){const Y=E(P,W,G,A);h.renderBufferDirect(B,null,te,Y,P,null)}}const $=P.children;for(let te=0,W=$.length;te<W;te++)R($[te],I,B,G,A)}}function Mg(h,n,s){const r=s.isWebGL2;function a(){let H=!1;const j=new gt;let me=null;const Te=new gt(0,0,0,0);return{setMask:function(Be){me!==Be&&!H&&(h.colorMask(Be,Be,Be,Be),me=Be)},setLocked:function(Be){H=Be},setClear:function(Be,yt,vt,Qt,ki){ki===!0&&(Be*=Qt,yt*=Qt,vt*=Qt),j.set(Be,yt,vt,Qt),Te.equals(j)===!1&&(h.clearColor(Be,yt,vt,Qt),Te.copy(j))},reset:function(){H=!1,me=null,Te.set(-1,0,0,0)}}}function l(){let H=!1,j=null,me=null,Te=null;return{setTest:function(Be){Be?k(h.DEPTH_TEST):Ze(h.DEPTH_TEST)},setMask:function(Be){j!==Be&&!H&&(h.depthMask(Be),j=Be)},setFunc:function(Be){if(me!==Be){switch(Be){case yr:h.depthFunc(h.NEVER);break;case ha:h.depthFunc(h.ALWAYS);break;case Zo:h.depthFunc(h.LESS);break;case vr:h.depthFunc(h.LEQUAL);break;case Jo:h.depthFunc(h.EQUAL);break;case zl:h.depthFunc(h.GEQUAL);break;case Ko:h.depthFunc(h.GREATER);break;case jo:h.depthFunc(h.NOTEQUAL);break;default:h.depthFunc(h.LEQUAL)}me=Be}},setLocked:function(Be){H=Be},setClear:function(Be){Te!==Be&&(h.clearDepth(Be),Te=Be)},reset:function(){H=!1,j=null,me=null,Te=null}}}function u(){let H=!1,j=null,me=null,Te=null,Be=null,yt=null,vt=null,Qt=null,ki=null;return{setTest:function(It){H||(It?k(h.STENCIL_TEST):Ze(h.STENCIL_TEST))},setMask:function(It){j!==It&&!H&&(h.stencilMask(It),j=It)},setFunc:function(It,Un,si){(me!==It||Te!==Un||Be!==si)&&(h.stencilFunc(It,Un,si),me=It,Te=Un,Be=si)},setOp:function(It,Un,si){(yt!==It||vt!==Un||Qt!==si)&&(h.stencilOp(It,Un,si),yt=It,vt=Un,Qt=si)},setLocked:function(It){H=It},setClear:function(It){ki!==It&&(h.clearStencil(It),ki=It)},reset:function(){H=!1,j=null,me=null,Te=null,Be=null,yt=null,vt=null,Qt=null,ki=null}}}const f=new a,d=new l,p=new u,m=new WeakMap,g=new WeakMap;let _={},x={},v=new WeakMap,b=[],M=null,y=!1,T=null,E=null,R=null,P=null,I=null,B=null,G=null,A=!1,O=null,$=null,te=null,W=null,Y=null;const J=h.getParameter(h.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ae=0;const re=h.getParameter(h.VERSION);re.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(re)[1]),le=ae>=1):re.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),le=ae>=2);let he=null,de={};const Pe=h.getParameter(h.SCISSOR_BOX),be=h.getParameter(h.VIEWPORT),K=new gt().fromArray(Pe),oe=new gt().fromArray(be);function ve(H,j,me,Te){const Be=new Uint8Array(4),yt=h.createTexture();h.bindTexture(H,yt),h.texParameteri(H,h.TEXTURE_MIN_FILTER,h.NEAREST),h.texParameteri(H,h.TEXTURE_MAG_FILTER,h.NEAREST);for(let vt=0;vt<me;vt++)r&&(H===h.TEXTURE_3D||H===h.TEXTURE_2D_ARRAY)?h.texImage3D(j,0,h.RGBA,1,1,Te,0,h.RGBA,h.UNSIGNED_BYTE,Be):h.texImage2D(j+vt,0,h.RGBA,1,1,0,h.RGBA,h.UNSIGNED_BYTE,Be);return yt}const Ee={};Ee[h.TEXTURE_2D]=ve(h.TEXTURE_2D,h.TEXTURE_2D,1),Ee[h.TEXTURE_CUBE_MAP]=ve(h.TEXTURE_CUBE_MAP,h.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ee[h.TEXTURE_2D_ARRAY]=ve(h.TEXTURE_2D_ARRAY,h.TEXTURE_2D_ARRAY,1,1),Ee[h.TEXTURE_3D]=ve(h.TEXTURE_3D,h.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),d.setClear(1),p.setClear(0),k(h.DEPTH_TEST),d.setFunc(vr),Me(!1),We(en),k(h.CULL_FACE),fe(Dn);function k(H){_[H]!==!0&&(h.enable(H),_[H]=!0)}function Ze(H){_[H]!==!1&&(h.disable(H),_[H]=!1)}function Je(H,j){return x[H]!==j?(h.bindFramebuffer(H,j),x[H]=j,r&&(H===h.DRAW_FRAMEBUFFER&&(x[h.FRAMEBUFFER]=j),H===h.FRAMEBUFFER&&(x[h.DRAW_FRAMEBUFFER]=j)),!0):!1}function _e(H,j){let me=b,Te=!1;if(H)if(me=v.get(j),me===void 0&&(me=[],v.set(j,me)),H.isWebGLMultipleRenderTargets){const Be=H.texture;if(me.length!==Be.length||me[0]!==h.COLOR_ATTACHMENT0){for(let yt=0,vt=Be.length;yt<vt;yt++)me[yt]=h.COLOR_ATTACHMENT0+yt;me.length=Be.length,Te=!0}}else me[0]!==h.COLOR_ATTACHMENT0&&(me[0]=h.COLOR_ATTACHMENT0,Te=!0);else me[0]!==h.BACK&&(me[0]=h.BACK,Te=!0);Te&&(s.isWebGL2?h.drawBuffers(me):n.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Fe(H){return M!==H?(h.useProgram(H),M=H,!0):!1}const ue={[Vi]:h.FUNC_ADD,[Ul]:h.FUNC_SUBTRACT,[Dl]:h.FUNC_REVERSE_SUBTRACT};if(r)ue[Xo]=h.MIN,ue[la]=h.MAX;else{const H=n.get("EXT_blend_minmax");H!==null&&(ue[Xo]=H.MIN_EXT,ue[la]=H.MAX_EXT)}const ne={[Nl]:h.ZERO,[Ol]:h.ONE,[Fl]:h.SRC_COLOR,[qo]:h.SRC_ALPHA,[nn]:h.SRC_ALPHA_SATURATE,[Ae]:h.DST_COLOR,[Yo]:h.DST_ALPHA,[Bl]:h.ONE_MINUS_SRC_COLOR,[Ft]:h.ONE_MINUS_SRC_ALPHA,[Re]:h.ONE_MINUS_DST_COLOR,[$o]:h.ONE_MINUS_DST_ALPHA};function fe(H,j,me,Te,Be,yt,vt,Qt){if(H===Dn){y===!0&&(Ze(h.BLEND),y=!1);return}if(y===!1&&(k(h.BLEND),y=!0),H!==ws){if(H!==T||Qt!==A){if((E!==Vi||I!==Vi)&&(h.blendEquation(h.FUNC_ADD),E=Vi,I=Vi),Qt)switch(H){case Ti:h.blendFuncSeparate(h.ONE,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA);break;case Vo:h.blendFunc(h.ONE,h.ONE);break;case Wo:h.blendFuncSeparate(h.ZERO,h.ONE_MINUS_SRC_COLOR,h.ZERO,h.ONE);break;case Hi:h.blendFuncSeparate(h.ZERO,h.SRC_COLOR,h.ZERO,h.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ti:h.blendFuncSeparate(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA);break;case Vo:h.blendFunc(h.SRC_ALPHA,h.ONE);break;case Wo:h.blendFuncSeparate(h.ZERO,h.ONE_MINUS_SRC_COLOR,h.ZERO,h.ONE);break;case Hi:h.blendFunc(h.ZERO,h.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,P=null,B=null,G=null,T=H,A=Qt}return}Be=Be||j,yt=yt||me,vt=vt||Te,(j!==E||Be!==I)&&(h.blendEquationSeparate(ue[j],ue[Be]),E=j,I=Be),(me!==R||Te!==P||yt!==B||vt!==G)&&(h.blendFuncSeparate(ne[me],ne[Te],ne[yt],ne[vt]),R=me,P=Te,B=yt,G=vt),T=H,A=!1}function Ue(H,j){H.side===Tn?Ze(h.CULL_FACE):k(h.CULL_FACE);let me=H.side===tn;j&&(me=!me),Me(me),H.blending===Ti&&H.transparent===!1?fe(Dn):fe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),f.setMask(H.colorWrite);const Te=H.stencilWrite;p.setTest(Te),Te&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(h.SAMPLE_ALPHA_TO_COVERAGE):Ze(h.SAMPLE_ALPHA_TO_COVERAGE)}function Me(H){O!==H&&(H?h.frontFace(h.CW):h.frontFace(h.CCW),O=H)}function We(H){H!==Es?(k(h.CULL_FACE),H!==$&&(H===en?h.cullFace(h.BACK):H===wt?h.cullFace(h.FRONT):h.cullFace(h.FRONT_AND_BACK))):Ze(h.CULL_FACE),$=H}function Xe(H){H!==te&&(le&&h.lineWidth(H),te=H)}function Ge(H,j,me){H?(k(h.POLYGON_OFFSET_FILL),(W!==j||Y!==me)&&(h.polygonOffset(j,me),W=j,Y=me)):Ze(h.POLYGON_OFFSET_FILL)}function rt(H){H?k(h.SCISSOR_TEST):Ze(h.SCISSOR_TEST)}function mt(H){H===void 0&&(H=h.TEXTURE0+J-1),he!==H&&(h.activeTexture(H),he=H)}function F(H,j,me){me===void 0&&(he===null?me=h.TEXTURE0+J-1:me=he);let Te=de[me];Te===void 0&&(Te={type:void 0,texture:void 0},de[me]=Te),(Te.type!==H||Te.texture!==j)&&(he!==me&&(h.activeTexture(me),he=me),h.bindTexture(H,j||Ee[H]),Te.type=H,Te.texture=j)}function L(){const H=de[he];H!==void 0&&H.type!==void 0&&(h.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Z(){try{h.compressedTexImage2D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{h.compressedTexImage3D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{h.texSubImage2D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{h.texSubImage3D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{h.compressedTexSubImage2D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{h.compressedTexSubImage3D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{h.texStorage2D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{h.texStorage3D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{h.texImage2D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{h.texImage3D.apply(h,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(H){K.equals(H)===!1&&(h.scissor(H.x,H.y,H.z,H.w),K.copy(H))}function ze(H){oe.equals(H)===!1&&(h.viewport(H.x,H.y,H.z,H.w),oe.copy(H))}function ft(H,j){let me=g.get(j);me===void 0&&(me=new WeakMap,g.set(j,me));let Te=me.get(H);Te===void 0&&(Te=h.getUniformBlockIndex(j,H.name),me.set(H,Te))}function _t(H,j){const Te=g.get(j).get(H);m.get(j)!==Te&&(h.uniformBlockBinding(j,Te,H.__bindingPointIndex),m.set(j,Te))}function Lt(){h.disable(h.BLEND),h.disable(h.CULL_FACE),h.disable(h.DEPTH_TEST),h.disable(h.POLYGON_OFFSET_FILL),h.disable(h.SCISSOR_TEST),h.disable(h.STENCIL_TEST),h.disable(h.SAMPLE_ALPHA_TO_COVERAGE),h.blendEquation(h.FUNC_ADD),h.blendFunc(h.ONE,h.ZERO),h.blendFuncSeparate(h.ONE,h.ZERO,h.ONE,h.ZERO),h.colorMask(!0,!0,!0,!0),h.clearColor(0,0,0,0),h.depthMask(!0),h.depthFunc(h.LESS),h.clearDepth(1),h.stencilMask(4294967295),h.stencilFunc(h.ALWAYS,0,4294967295),h.stencilOp(h.KEEP,h.KEEP,h.KEEP),h.clearStencil(0),h.cullFace(h.BACK),h.frontFace(h.CCW),h.polygonOffset(0,0),h.activeTexture(h.TEXTURE0),h.bindFramebuffer(h.FRAMEBUFFER,null),r===!0&&(h.bindFramebuffer(h.DRAW_FRAMEBUFFER,null),h.bindFramebuffer(h.READ_FRAMEBUFFER,null)),h.useProgram(null),h.lineWidth(1),h.scissor(0,0,h.canvas.width,h.canvas.height),h.viewport(0,0,h.canvas.width,h.canvas.height),_={},he=null,de={},x={},v=new WeakMap,b=[],M=null,y=!1,T=null,E=null,R=null,P=null,I=null,B=null,G=null,A=!1,O=null,$=null,te=null,W=null,Y=null,K.set(0,0,h.canvas.width,h.canvas.height),oe.set(0,0,h.canvas.width,h.canvas.height),f.reset(),d.reset(),p.reset()}return{buffers:{color:f,depth:d,stencil:p},enable:k,disable:Ze,bindFramebuffer:Je,drawBuffers:_e,useProgram:Fe,setBlending:fe,setMaterial:Ue,setFlipSided:Me,setCullFace:We,setLineWidth:Xe,setPolygonOffset:Ge,setScissorTest:rt,activeTexture:mt,bindTexture:F,unbindTexture:L,compressedTexImage2D:Z,compressedTexImage3D:pe,texImage2D:ke,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:_t,texStorage2D:ee,texStorage3D:Oe,texSubImage2D:ge,texSubImage3D:Se,compressedTexSubImage2D:$e,compressedTexSubImage3D:Le,scissor:De,viewport:ze,reset:Lt}}function Sg(h,n,s,r,a,l,u){const f=a.isWebGL2,d=a.maxTextures,p=a.maxCubemapSize,m=a.maxTextureSize,g=a.maxSamples,_=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let b;const M=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(F){}function T(F,L){return y?new OffscreenCanvas(F,L):Fr("canvas")}function E(F,L,Z,pe){let ge=1;if((F.width>pe||F.height>pe)&&(ge=pe/Math.max(F.width,F.height)),ge<1||L===!0)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap){const Se=L?ss:Math.floor,$e=Se(ge*F.width),Le=Se(ge*F.height);b===void 0&&(b=T($e,Le));const ee=Z?T($e,Le):b;return ee.width=$e,ee.height=Le,ee.getContext("2d").drawImage(F,0,0,$e,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+$e+"x"+Le+")."),ee}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function R(F){return zn(F.width)&&zn(F.height)}function P(F){return f?!1:F.wrapS!==kt||F.wrapT!==kt||F.minFilter!==Tt&&F.minFilter!==St}function I(F,L){return F.generateMipmaps&&L&&F.minFilter!==Tt&&F.minFilter!==St}function B(F){h.generateMipmap(F)}function G(F,L,Z,pe,ge=!1){if(f===!1)return L;if(F!==null){if(h[F]!==void 0)return h[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Se=L;return L===h.RED&&(Z===h.FLOAT&&(Se=h.R32F),Z===h.HALF_FLOAT&&(Se=h.R16F),Z===h.UNSIGNED_BYTE&&(Se=h.R8)),L===h.RG&&(Z===h.FLOAT&&(Se=h.RG32F),Z===h.HALF_FLOAT&&(Se=h.RG16F),Z===h.UNSIGNED_BYTE&&(Se=h.RG8)),L===h.RGBA&&(Z===h.FLOAT&&(Se=h.RGBA32F),Z===h.HALF_FLOAT&&(Se=h.RGBA16F),Z===h.UNSIGNED_BYTE&&(Se=pe===Qe&&ge===!1?h.SRGB8_ALPHA8:h.RGBA8),Z===h.UNSIGNED_SHORT_4_4_4_4&&(Se=h.RGBA4),Z===h.UNSIGNED_SHORT_5_5_5_1&&(Se=h.RGB5_A1)),(Se===h.R16F||Se===h.R32F||Se===h.RG16F||Se===h.RG32F||Se===h.RGBA16F||Se===h.RGBA32F)&&n.get("EXT_color_buffer_float"),Se}function A(F,L,Z){return I(F,Z)===!0||F.isFramebufferTexture&&F.minFilter!==Tt&&F.minFilter!==St?Math.log2(Math.max(L.width,L.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?L.mipmaps.length:1}function O(F){return F===Tt||F===qi||F===On?h.NEAREST:h.LINEAR}function $(F){const L=F.target;L.removeEventListener("dispose",$),W(L),L.isVideoTexture&&v.delete(L)}function te(F){const L=F.target;L.removeEventListener("dispose",te),J(L)}function W(F){const L=r.get(F);if(L.__webglInit===void 0)return;const Z=F.source,pe=M.get(Z);if(pe){const ge=pe[L.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Y(F),Object.keys(pe).length===0&&M.delete(Z)}r.remove(F)}function Y(F){const L=r.get(F);h.deleteTexture(L.__webglTexture);const Z=F.source,pe=M.get(Z);delete pe[L.__cacheKey],u.memory.textures--}function J(F){const L=F.texture,Z=r.get(F),pe=r.get(L);if(pe.__webglTexture!==void 0&&(h.deleteTexture(pe.__webglTexture),u.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)h.deleteFramebuffer(Z.__webglFramebuffer[ge]),Z.__webglDepthbuffer&&h.deleteRenderbuffer(Z.__webglDepthbuffer[ge]);else{if(h.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&h.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&h.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ge=0;ge<Z.__webglColorRenderbuffer.length;ge++)Z.__webglColorRenderbuffer[ge]&&h.deleteRenderbuffer(Z.__webglColorRenderbuffer[ge]);Z.__webglDepthRenderbuffer&&h.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ge=0,Se=L.length;ge<Se;ge++){const $e=r.get(L[ge]);$e.__webglTexture&&(h.deleteTexture($e.__webglTexture),u.memory.textures--),r.remove(L[ge])}r.remove(L),r.remove(F)}let le=0;function ae(){le=0}function re(){const F=le;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),le+=1,F}function he(F){const L=[];return L.push(F.wrapS),L.push(F.wrapT),L.push(F.wrapR||0),L.push(F.magFilter),L.push(F.minFilter),L.push(F.anisotropy),L.push(F.internalFormat),L.push(F.format),L.push(F.type),L.push(F.generateMipmaps),L.push(F.premultiplyAlpha),L.push(F.flipY),L.push(F.unpackAlignment),L.push(F.colorSpace),L.join()}function de(F,L){const Z=r.get(F);if(F.isVideoTexture&&rt(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const pe=F.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(Z,F,L);return}}s.bindTexture(h.TEXTURE_2D,Z.__webglTexture,h.TEXTURE0+L)}function Pe(F,L){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){Ze(Z,F,L);return}s.bindTexture(h.TEXTURE_2D_ARRAY,Z.__webglTexture,h.TEXTURE0+L)}function be(F,L){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){Ze(Z,F,L);return}s.bindTexture(h.TEXTURE_3D,Z.__webglTexture,h.TEXTURE0+L)}function K(F,L){const Z=r.get(F);if(F.version>0&&Z.__version!==F.version){Je(Z,F,L);return}s.bindTexture(h.TEXTURE_CUBE_MAP,Z.__webglTexture,h.TEXTURE0+L)}const oe={[As]:h.REPEAT,[kt]:h.CLAMP_TO_EDGE,[Rs]:h.MIRRORED_REPEAT},ve={[Tt]:h.NEAREST,[qi]:h.NEAREST_MIPMAP_NEAREST,[On]:h.NEAREST_MIPMAP_LINEAR,[St]:h.LINEAR,[da]:h.LINEAR_MIPMAP_NEAREST,[Yn]:h.LINEAR_MIPMAP_LINEAR};function Ee(F,L,Z){if(Z?(h.texParameteri(F,h.TEXTURE_WRAP_S,oe[L.wrapS]),h.texParameteri(F,h.TEXTURE_WRAP_T,oe[L.wrapT]),(F===h.TEXTURE_3D||F===h.TEXTURE_2D_ARRAY)&&h.texParameteri(F,h.TEXTURE_WRAP_R,oe[L.wrapR]),h.texParameteri(F,h.TEXTURE_MAG_FILTER,ve[L.magFilter]),h.texParameteri(F,h.TEXTURE_MIN_FILTER,ve[L.minFilter])):(h.texParameteri(F,h.TEXTURE_WRAP_S,h.CLAMP_TO_EDGE),h.texParameteri(F,h.TEXTURE_WRAP_T,h.CLAMP_TO_EDGE),(F===h.TEXTURE_3D||F===h.TEXTURE_2D_ARRAY)&&h.texParameteri(F,h.TEXTURE_WRAP_R,h.CLAMP_TO_EDGE),(L.wrapS!==kt||L.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),h.texParameteri(F,h.TEXTURE_MAG_FILTER,O(L.magFilter)),h.texParameteri(F,h.TEXTURE_MIN_FILTER,O(L.minFilter)),L.minFilter!==Tt&&L.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),n.has("EXT_texture_filter_anisotropic")===!0){const pe=n.get("EXT_texture_filter_anisotropic");if(L.magFilter===Tt||L.minFilter!==On&&L.minFilter!==Yn||L.type===Zn&&n.has("OES_texture_float_linear")===!1||f===!1&&L.type===Yi&&n.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||r.get(L).__currentAnisotropy)&&(h.texParameterf(F,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,a.getMaxAnisotropy())),r.get(L).__currentAnisotropy=L.anisotropy)}}function k(F,L){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,L.addEventListener("dispose",$));const pe=L.source;let ge=M.get(pe);ge===void 0&&(ge={},M.set(pe,ge));const Se=he(L);if(Se!==F.__cacheKey){ge[Se]===void 0&&(ge[Se]={texture:h.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ge[Se].usedTimes++;const $e=ge[F.__cacheKey];$e!==void 0&&(ge[F.__cacheKey].usedTimes--,$e.usedTimes===0&&Y(L)),F.__cacheKey=Se,F.__webglTexture=ge[Se].texture}return Z}function Ze(F,L,Z){let pe=h.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=h.TEXTURE_2D_ARRAY),L.isData3DTexture&&(pe=h.TEXTURE_3D);const ge=k(F,L),Se=L.source;s.bindTexture(pe,F.__webglTexture,h.TEXTURE0+Z);const $e=r.get(Se);if(Se.version!==$e.__version||ge===!0){s.activeTexture(h.TEXTURE0+Z),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,L.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,L.unpackAlignment),h.pixelStorei(h.UNPACK_COLORSPACE_CONVERSION_WEBGL,h.NONE);const Le=P(L)&&R(L.image)===!1;let ee=E(L.image,Le,!1,m);ee=mt(L,ee);const Oe=R(ee)||f,ke=l.convert(L.format,L.colorSpace);let qe=l.convert(L.type),De=G(L.internalFormat,ke,qe,L.colorSpace);Ee(pe,L,Oe);let ze;const ft=L.mipmaps,_t=f&&L.isVideoTexture!==!0,Lt=$e.__version===void 0||ge===!0,H=A(L,ee,Oe);if(L.isDepthTexture)De=h.DEPTH_COMPONENT,f?L.type===Zn?De=h.DEPTH_COMPONENT32F:L.type===$n?De=h.DEPTH_COMPONENT24:L.type===Ri?De=h.DEPTH24_STENCIL8:De=h.DEPTH_COMPONENT16:L.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===sn&&De===h.DEPTH_COMPONENT&&L.type!==br&&L.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=$n,qe=l.convert(L.type)),L.format===Rn&&De===h.DEPTH_COMPONENT&&(De=h.DEPTH_STENCIL,L.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ri,qe=l.convert(L.type))),Lt&&(_t?s.texStorage2D(h.TEXTURE_2D,1,De,ee.width,ee.height):s.texImage2D(h.TEXTURE_2D,0,De,ee.width,ee.height,0,ke,qe,null));else if(L.isDataTexture)if(ft.length>0&&Oe){_t&&Lt&&s.texStorage2D(h.TEXTURE_2D,H,De,ft[0].width,ft[0].height);for(let j=0,me=ft.length;j<me;j++)ze=ft[j],_t?s.texSubImage2D(h.TEXTURE_2D,j,0,0,ze.width,ze.height,ke,qe,ze.data):s.texImage2D(h.TEXTURE_2D,j,De,ze.width,ze.height,0,ke,qe,ze.data);L.generateMipmaps=!1}else _t?(Lt&&s.texStorage2D(h.TEXTURE_2D,H,De,ee.width,ee.height),s.texSubImage2D(h.TEXTURE_2D,0,0,0,ee.width,ee.height,ke,qe,ee.data)):s.texImage2D(h.TEXTURE_2D,0,De,ee.width,ee.height,0,ke,qe,ee.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){_t&&Lt&&s.texStorage3D(h.TEXTURE_2D_ARRAY,H,De,ft[0].width,ft[0].height,ee.depth);for(let j=0,me=ft.length;j<me;j++)ze=ft[j],L.format!==Zt?ke!==null?_t?s.compressedTexSubImage3D(h.TEXTURE_2D_ARRAY,j,0,0,0,ze.width,ze.height,ee.depth,ke,ze.data,0,0):s.compressedTexImage3D(h.TEXTURE_2D_ARRAY,j,De,ze.width,ze.height,ee.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?s.texSubImage3D(h.TEXTURE_2D_ARRAY,j,0,0,0,ze.width,ze.height,ee.depth,ke,qe,ze.data):s.texImage3D(h.TEXTURE_2D_ARRAY,j,De,ze.width,ze.height,ee.depth,0,ke,qe,ze.data)}else{_t&&Lt&&s.texStorage2D(h.TEXTURE_2D,H,De,ft[0].width,ft[0].height);for(let j=0,me=ft.length;j<me;j++)ze=ft[j],L.format!==Zt?ke!==null?_t?s.compressedTexSubImage2D(h.TEXTURE_2D,j,0,0,ze.width,ze.height,ke,ze.data):s.compressedTexImage2D(h.TEXTURE_2D,j,De,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?s.texSubImage2D(h.TEXTURE_2D,j,0,0,ze.width,ze.height,ke,qe,ze.data):s.texImage2D(h.TEXTURE_2D,j,De,ze.width,ze.height,0,ke,qe,ze.data)}else if(L.isDataArrayTexture)_t?(Lt&&s.texStorage3D(h.TEXTURE_2D_ARRAY,H,De,ee.width,ee.height,ee.depth),s.texSubImage3D(h.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ke,qe,ee.data)):s.texImage3D(h.TEXTURE_2D_ARRAY,0,De,ee.width,ee.height,ee.depth,0,ke,qe,ee.data);else if(L.isData3DTexture)_t?(Lt&&s.texStorage3D(h.TEXTURE_3D,H,De,ee.width,ee.height,ee.depth),s.texSubImage3D(h.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ke,qe,ee.data)):s.texImage3D(h.TEXTURE_3D,0,De,ee.width,ee.height,ee.depth,0,ke,qe,ee.data);else if(L.isFramebufferTexture){if(Lt)if(_t)s.texStorage2D(h.TEXTURE_2D,H,De,ee.width,ee.height);else{let j=ee.width,me=ee.height;for(let Te=0;Te<H;Te++)s.texImage2D(h.TEXTURE_2D,Te,De,j,me,0,ke,qe,null),j>>=1,me>>=1}}else if(ft.length>0&&Oe){_t&&Lt&&s.texStorage2D(h.TEXTURE_2D,H,De,ft[0].width,ft[0].height);for(let j=0,me=ft.length;j<me;j++)ze=ft[j],_t?s.texSubImage2D(h.TEXTURE_2D,j,0,0,ke,qe,ze):s.texImage2D(h.TEXTURE_2D,j,De,ke,qe,ze);L.generateMipmaps=!1}else _t?(Lt&&s.texStorage2D(h.TEXTURE_2D,H,De,ee.width,ee.height),s.texSubImage2D(h.TEXTURE_2D,0,0,0,ke,qe,ee)):s.texImage2D(h.TEXTURE_2D,0,De,ke,qe,ee);I(L,Oe)&&B(pe),$e.__version=Se.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function Je(F,L,Z){if(L.image.length!==6)return;const pe=k(F,L),ge=L.source;s.bindTexture(h.TEXTURE_CUBE_MAP,F.__webglTexture,h.TEXTURE0+Z);const Se=r.get(ge);if(ge.version!==Se.__version||pe===!0){s.activeTexture(h.TEXTURE0+Z),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,L.flipY),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),h.pixelStorei(h.UNPACK_ALIGNMENT,L.unpackAlignment),h.pixelStorei(h.UNPACK_COLORSPACE_CONVERSION_WEBGL,h.NONE);const $e=L.isCompressedTexture||L.image[0].isCompressedTexture,Le=L.image[0]&&L.image[0].isDataTexture,ee=[];for(let j=0;j<6;j++)!$e&&!Le?ee[j]=E(L.image[j],!1,!0,p):ee[j]=Le?L.image[j].image:L.image[j],ee[j]=mt(L,ee[j]);const Oe=ee[0],ke=R(Oe)||f,qe=l.convert(L.format,L.colorSpace),De=l.convert(L.type),ze=G(L.internalFormat,qe,De,L.colorSpace),ft=f&&L.isVideoTexture!==!0,_t=Se.__version===void 0||pe===!0;let Lt=A(L,Oe,ke);Ee(h.TEXTURE_CUBE_MAP,L,ke);let H;if($e){ft&&_t&&s.texStorage2D(h.TEXTURE_CUBE_MAP,Lt,ze,Oe.width,Oe.height);for(let j=0;j<6;j++){H=ee[j].mipmaps;for(let me=0;me<H.length;me++){const Te=H[me];L.format!==Zt?qe!==null?ft?s.compressedTexSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Te.width,Te.height,qe,Te.data):s.compressedTexImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?s.texSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,Te.width,Te.height,qe,De,Te.data):s.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,ze,Te.width,Te.height,0,qe,De,Te.data)}}}else{H=L.mipmaps,ft&&_t&&(H.length>0&&Lt++,s.texStorage2D(h.TEXTURE_CUBE_MAP,Lt,ze,ee[0].width,ee[0].height));for(let j=0;j<6;j++)if(Le){ft?s.texSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ee[j].width,ee[j].height,qe,De,ee[j].data):s.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,ee[j].width,ee[j].height,0,qe,De,ee[j].data);for(let me=0;me<H.length;me++){const Be=H[me].image[j].image;ft?s.texSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,Be.width,Be.height,qe,De,Be.data):s.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,ze,Be.width,Be.height,0,qe,De,Be.data)}}else{ft?s.texSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,qe,De,ee[j]):s.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,qe,De,ee[j]);for(let me=0;me<H.length;me++){const Te=H[me];ft?s.texSubImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,qe,De,Te.image[j]):s.texImage2D(h.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,ze,qe,De,Te.image[j])}}}I(L,ke)&&B(h.TEXTURE_CUBE_MAP),Se.__version=ge.version,L.onUpdate&&L.onUpdate(L)}F.__version=L.version}function _e(F,L,Z,pe,ge){const Se=l.convert(Z.format,Z.colorSpace),$e=l.convert(Z.type),Le=G(Z.internalFormat,Se,$e,Z.colorSpace);r.get(L).__hasExternalTextures||(ge===h.TEXTURE_3D||ge===h.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,Le,L.width,L.height,L.depth,0,Se,$e,null):s.texImage2D(ge,0,Le,L.width,L.height,0,Se,$e,null)),s.bindFramebuffer(h.FRAMEBUFFER,F),Ge(L)?_.framebufferTexture2DMultisampleEXT(h.FRAMEBUFFER,pe,ge,r.get(Z).__webglTexture,0,Xe(L)):(ge===h.TEXTURE_2D||ge>=h.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=h.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&h.framebufferTexture2D(h.FRAMEBUFFER,pe,ge,r.get(Z).__webglTexture,0),s.bindFramebuffer(h.FRAMEBUFFER,null)}function Fe(F,L,Z){if(h.bindRenderbuffer(h.RENDERBUFFER,F),L.depthBuffer&&!L.stencilBuffer){let pe=h.DEPTH_COMPONENT16;if(Z||Ge(L)){const ge=L.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Zn?pe=h.DEPTH_COMPONENT32F:ge.type===$n&&(pe=h.DEPTH_COMPONENT24));const Se=Xe(L);Ge(L)?_.renderbufferStorageMultisampleEXT(h.RENDERBUFFER,Se,pe,L.width,L.height):h.renderbufferStorageMultisample(h.RENDERBUFFER,Se,pe,L.width,L.height)}else h.renderbufferStorage(h.RENDERBUFFER,pe,L.width,L.height);h.framebufferRenderbuffer(h.FRAMEBUFFER,h.DEPTH_ATTACHMENT,h.RENDERBUFFER,F)}else if(L.depthBuffer&&L.stencilBuffer){const pe=Xe(L);Z&&Ge(L)===!1?h.renderbufferStorageMultisample(h.RENDERBUFFER,pe,h.DEPTH24_STENCIL8,L.width,L.height):Ge(L)?_.renderbufferStorageMultisampleEXT(h.RENDERBUFFER,pe,h.DEPTH24_STENCIL8,L.width,L.height):h.renderbufferStorage(h.RENDERBUFFER,h.DEPTH_STENCIL,L.width,L.height),h.framebufferRenderbuffer(h.FRAMEBUFFER,h.DEPTH_STENCIL_ATTACHMENT,h.RENDERBUFFER,F)}else{const pe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ge=0;ge<pe.length;ge++){const Se=pe[ge],$e=l.convert(Se.format,Se.colorSpace),Le=l.convert(Se.type),ee=G(Se.internalFormat,$e,Le,Se.colorSpace),Oe=Xe(L);Z&&Ge(L)===!1?h.renderbufferStorageMultisample(h.RENDERBUFFER,Oe,ee,L.width,L.height):Ge(L)?_.renderbufferStorageMultisampleEXT(h.RENDERBUFFER,Oe,ee,L.width,L.height):h.renderbufferStorage(h.RENDERBUFFER,ee,L.width,L.height)}}h.bindRenderbuffer(h.RENDERBUFFER,null)}function ue(F,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(s.bindFramebuffer(h.FRAMEBUFFER,F),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),de(L.depthTexture,0);const pe=r.get(L.depthTexture).__webglTexture,ge=Xe(L);if(L.depthTexture.format===sn)Ge(L)?_.framebufferTexture2DMultisampleEXT(h.FRAMEBUFFER,h.DEPTH_ATTACHMENT,h.TEXTURE_2D,pe,0,ge):h.framebufferTexture2D(h.FRAMEBUFFER,h.DEPTH_ATTACHMENT,h.TEXTURE_2D,pe,0);else if(L.depthTexture.format===Rn)Ge(L)?_.framebufferTexture2DMultisampleEXT(h.FRAMEBUFFER,h.DEPTH_STENCIL_ATTACHMENT,h.TEXTURE_2D,pe,0,ge):h.framebufferTexture2D(h.FRAMEBUFFER,h.DEPTH_STENCIL_ATTACHMENT,h.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ne(F){const L=r.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ue(L.__webglFramebuffer,F)}else if(Z){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)s.bindFramebuffer(h.FRAMEBUFFER,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]=h.createRenderbuffer(),Fe(L.__webglDepthbuffer[pe],F,!1)}else s.bindFramebuffer(h.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=h.createRenderbuffer(),Fe(L.__webglDepthbuffer,F,!1);s.bindFramebuffer(h.FRAMEBUFFER,null)}function fe(F,L,Z){const pe=r.get(F);L!==void 0&&_e(pe.__webglFramebuffer,F,F.texture,h.COLOR_ATTACHMENT0,h.TEXTURE_2D),Z!==void 0&&ne(F)}function Ue(F){const L=F.texture,Z=r.get(F),pe=r.get(L);F.addEventListener("dispose",te),F.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=h.createTexture()),pe.__version=L.version,u.memory.textures++);const ge=F.isWebGLCubeRenderTarget===!0,Se=F.isWebGLMultipleRenderTargets===!0,$e=R(F)||f;if(ge){Z.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)Z.__webglFramebuffer[Le]=h.createFramebuffer()}else{if(Z.__webglFramebuffer=h.createFramebuffer(),Se)if(a.drawBuffers){const Le=F.texture;for(let ee=0,Oe=Le.length;ee<Oe;ee++){const ke=r.get(Le[ee]);ke.__webglTexture===void 0&&(ke.__webglTexture=h.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&F.samples>0&&Ge(F)===!1){const Le=Se?L:[L];Z.__webglMultisampledFramebuffer=h.createFramebuffer(),Z.__webglColorRenderbuffer=[],s.bindFramebuffer(h.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ee=0;ee<Le.length;ee++){const Oe=Le[ee];Z.__webglColorRenderbuffer[ee]=h.createRenderbuffer(),h.bindRenderbuffer(h.RENDERBUFFER,Z.__webglColorRenderbuffer[ee]);const ke=l.convert(Oe.format,Oe.colorSpace),qe=l.convert(Oe.type),De=G(Oe.internalFormat,ke,qe,Oe.colorSpace,F.isXRRenderTarget===!0),ze=Xe(F);h.renderbufferStorageMultisample(h.RENDERBUFFER,ze,De,F.width,F.height),h.framebufferRenderbuffer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+ee,h.RENDERBUFFER,Z.__webglColorRenderbuffer[ee])}h.bindRenderbuffer(h.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=h.createRenderbuffer(),Fe(Z.__webglDepthRenderbuffer,F,!0)),s.bindFramebuffer(h.FRAMEBUFFER,null)}}if(ge){s.bindTexture(h.TEXTURE_CUBE_MAP,pe.__webglTexture),Ee(h.TEXTURE_CUBE_MAP,L,$e);for(let Le=0;Le<6;Le++)_e(Z.__webglFramebuffer[Le],F,L,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+Le);I(L,$e)&&B(h.TEXTURE_CUBE_MAP),s.unbindTexture()}else if(Se){const Le=F.texture;for(let ee=0,Oe=Le.length;ee<Oe;ee++){const ke=Le[ee],qe=r.get(ke);s.bindTexture(h.TEXTURE_2D,qe.__webglTexture),Ee(h.TEXTURE_2D,ke,$e),_e(Z.__webglFramebuffer,F,ke,h.COLOR_ATTACHMENT0+ee,h.TEXTURE_2D),I(ke,$e)&&B(h.TEXTURE_2D)}s.unbindTexture()}else{let Le=h.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(f?Le=F.isWebGL3DRenderTarget?h.TEXTURE_3D:h.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),s.bindTexture(Le,pe.__webglTexture),Ee(Le,L,$e),_e(Z.__webglFramebuffer,F,L,h.COLOR_ATTACHMENT0,Le),I(L,$e)&&B(Le),s.unbindTexture()}F.depthBuffer&&ne(F)}function Me(F){const L=R(F)||f,Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let pe=0,ge=Z.length;pe<ge;pe++){const Se=Z[pe];if(I(Se,L)){const $e=F.isWebGLCubeRenderTarget?h.TEXTURE_CUBE_MAP:h.TEXTURE_2D,Le=r.get(Se).__webglTexture;s.bindTexture($e,Le),B($e),s.unbindTexture()}}}function We(F){if(f&&F.samples>0&&Ge(F)===!1){const L=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Z=F.width,pe=F.height;let ge=h.COLOR_BUFFER_BIT;const Se=[],$e=F.stencilBuffer?h.DEPTH_STENCIL_ATTACHMENT:h.DEPTH_ATTACHMENT,Le=r.get(F),ee=F.isWebGLMultipleRenderTargets===!0;if(ee)for(let Oe=0;Oe<L.length;Oe++)s.bindFramebuffer(h.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Oe,h.RENDERBUFFER,null),s.bindFramebuffer(h.FRAMEBUFFER,Le.__webglFramebuffer),h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0+Oe,h.TEXTURE_2D,null,0);s.bindFramebuffer(h.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.bindFramebuffer(h.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){Se.push(h.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&Se.push($e);const ke=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(ke===!1&&(F.depthBuffer&&(ge|=h.DEPTH_BUFFER_BIT),F.stencilBuffer&&(ge|=h.STENCIL_BUFFER_BIT)),ee&&h.framebufferRenderbuffer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]),ke===!0&&(h.invalidateFramebuffer(h.READ_FRAMEBUFFER,[$e]),h.invalidateFramebuffer(h.DRAW_FRAMEBUFFER,[$e])),ee){const qe=r.get(L[Oe]).__webglTexture;h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,qe,0)}h.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,h.NEAREST),x&&h.invalidateFramebuffer(h.READ_FRAMEBUFFER,Se)}if(s.bindFramebuffer(h.READ_FRAMEBUFFER,null),s.bindFramebuffer(h.DRAW_FRAMEBUFFER,null),ee)for(let Oe=0;Oe<L.length;Oe++){s.bindFramebuffer(h.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+Oe,h.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const ke=r.get(L[Oe]).__webglTexture;s.bindFramebuffer(h.FRAMEBUFFER,Le.__webglFramebuffer),h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0+Oe,h.TEXTURE_2D,ke,0)}s.bindFramebuffer(h.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function Xe(F){return Math.min(g,F.samples)}function Ge(F){const L=r.get(F);return f&&F.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function rt(F){const L=u.render.frame;v.get(F)!==L&&(v.set(F,L),F.update())}function mt(F,L){const Z=F.colorSpace,pe=F.format,ge=F.type;return F.isCompressedTexture===!0||F.format===Dt||Z!==Pn&&Z!==Jn&&(Z===Qe?f===!1?n.has("EXT_sRGB")===!0&&pe===Zt?(F.format=Dt,F.minFilter=St,F.generateMipmaps=!1):L=Yl.sRGBToLinear(L):(pe!==Zt||ge!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=re,this.resetTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=Pe,this.setTexture3D=be,this.setTextureCube=K,this.rebindTextures=fe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function bg(h,n,s){const r=s.isWebGL2;function a(l,u=Jn){let f;if(l===ci)return h.UNSIGNED_BYTE;if(l===ma)return h.UNSIGNED_SHORT_4_4_4_4;if(l===ac)return h.UNSIGNED_SHORT_5_5_5_1;if(l===ic)return h.BYTE;if(l===sc)return h.SHORT;if(l===br)return h.UNSIGNED_SHORT;if(l===rc)return h.INT;if(l===$n)return h.UNSIGNED_INT;if(l===Zn)return h.FLOAT;if(l===Yi)return r?h.HALF_FLOAT:(f=n.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(l===ga)return h.ALPHA;if(l===Zt)return h.RGBA;if(l===li)return h.LUMINANCE;if(l===Er)return h.LUMINANCE_ALPHA;if(l===sn)return h.DEPTH_COMPONENT;if(l===Rn)return h.DEPTH_STENCIL;if(l===Dt)return f=n.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(l===$i)return h.RED;if(l===wr)return h.RED_INTEGER;if(l===Tr)return h.RG;if(l===Hl)return h.RG_INTEGER;if(l===Vl)return h.RGBA_INTEGER;if(l===Jt||l===Ar||l===Ci||l===Pi)if(u===Qe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(l===Jt)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Ar)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Ci)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Pi)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(l===Jt)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Ar)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Ci)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Pi)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Cs||l===Zi||l===_a||l===xa)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(l===Cs)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Zi)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===_a)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===xa)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===oc)return f=n.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===ya||l===va)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(l===ya)return u===Qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(l===va)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Ps||l===Rr||l===Ma||l===Sa||l===ba||l===Cr||l===Ea||l===hi||l===wa||l===Ta||l===Pr||l===Lr||l===Ir||l===Ls)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(l===Ps)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Rr)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Ma)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Sa)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===ba)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Cr)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Ea)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===hi)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===wa)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Ta)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Pr)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===Lr)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===Ir)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Ls)return u===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Ji)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(l===Ji)return u===Qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===Wl||l===Aa||l===Ki||l===Ra)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(l===Ji)return f.COMPRESSED_RED_RGTC1_EXT;if(l===Aa)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Ki)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===Ra)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Ri?r?h.UNSIGNED_INT_24_8:(f=n.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):h[l]!==void 0?h[l]:null}return{convert:a}}class Eg extends $t{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n}}class qr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const s=this._hand;if(s)for(const r of n.hand.values())this._getHandJoint(s,r)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,s,r){let a=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(n&&s.session.visibilityState!=="visible-blurred"){if(p&&n.hand){u=!0;for(const b of n.hand.values()){const M=s.getJointPose(b,r),y=this._getHandJoint(p,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,v=.005;p.inputState.pinching&&_>x+v?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!p.inputState.pinching&&_<=x-v&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else d!==null&&n.gripSpace&&(l=s.getPose(n.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=s.getPose(n.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(n,s){if(n.joints[s.jointName]===void 0){const r=new qr;r.matrixAutoUpdate=!1,r.visible=!1,n.joints[s.jointName]=r,n.add(r)}return n.joints[s.jointName]}}class Tg extends cn{constructor(n,s,r,a,l,u,f,d,p,m){if(m=m!==void 0?m:sn,m!==sn&&m!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===sn&&(r=$n),r===void 0&&m===Rn&&(r=Ri),super(null,a,l,u,f,d,m,r,p),this.isDepthTexture=!0,this.image={width:n,height:s},this.magFilter=f!==void 0?f:Tt,this.minFilter=d!==void 0?d:Tt,this.flipY=!1,this.generateMipmaps=!1}}class Ag extends Yt{constructor(n,s){super();const r=this;let a=null,l=1,u=null,f="local-floor",d=1,p=null,m=null,g=null,_=null,x=null,v=null;const b=s.getContextAttributes();let M=null,y=null;const T=[],E=[],R=new Set,P=new Map,I=new $t;I.layers.enable(1),I.viewport=new gt;const B=new $t;B.layers.enable(2),B.viewport=new gt;const G=[I,B],A=new Eg;A.layers.enable(1),A.layers.enable(2);let O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=T[K];return oe===void 0&&(oe=new kc,T[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=T[K];return oe===void 0&&(oe=new kc,T[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=T[K];return oe===void 0&&(oe=new kc,T[K]=oe),oe.getHandSpace()};function te(K){const oe=E.indexOf(K.inputSource);if(oe===-1)return;const ve=T[oe];ve!==void 0&&(ve.update(K.inputSource,K.frame,p||u),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",Y);for(let K=0;K<T.length;K++){const oe=E[K];oe!==null&&(E[K]=null,T[K].disconnect(oe))}O=null,$=null,n.setRenderTarget(M),x=null,_=null,g=null,a=null,y=null,be.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=function(K){return _r(this,null,function*(){if(a=K,a!==null){if(M=n.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",W),a.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&(yield s.makeXRCompatible()),a.renderState.layers===void 0||n.capabilities.isWebGL2===!1){const oe={antialias:a.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,s,oe),a.updateRenderState({baseLayer:x}),y=new rs(x.framebufferWidth,x.framebufferHeight,{format:Zt,type:ci,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil})}else{let oe=null,ve=null,Ee=null;b.depth&&(Ee=b.stencil?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT24,oe=b.stencil?Rn:sn,ve=b.stencil?Ri:$n);const k={colorFormat:s.RGBA8,depthFormat:Ee,scaleFactor:l};g=new XRWebGLBinding(a,s),_=g.createProjectionLayer(k),a.updateRenderState({layers:[_]}),y=new rs(_.textureWidth,_.textureHeight,{format:Zt,type:ci,depthTexture:new Tg(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0});const Ze=n.properties.get(y);Ze.__ignoreDepthValues=_.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=yield a.requestReferenceSpace(f),be.setContext(a),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function Y(K){for(let oe=0;oe<K.removed.length;oe++){const ve=K.removed[oe],Ee=E.indexOf(ve);Ee>=0&&(E[Ee]=null,T[Ee].disconnect(ve))}for(let oe=0;oe<K.added.length;oe++){const ve=K.added[oe];let Ee=E.indexOf(ve);if(Ee===-1){for(let Ze=0;Ze<T.length;Ze++)if(Ze>=E.length){E.push(ve),Ee=Ze;break}else if(E[Ze]===null){E[Ze]=ve,Ee=Ze;break}if(Ee===-1)break}const k=T[Ee];k&&k.connect(ve)}}const J=new N,le=new N;function ae(K,oe,ve){J.setFromMatrixPosition(oe.matrixWorld),le.setFromMatrixPosition(ve.matrixWorld);const Ee=J.distanceTo(le),k=oe.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,Je=k[14]/(k[10]-1),_e=k[14]/(k[10]+1),Fe=(k[9]+1)/k[5],ue=(k[9]-1)/k[5],ne=(k[8]-1)/k[0],fe=(Ze[8]+1)/Ze[0],Ue=Je*ne,Me=Je*fe,We=Ee/(-ne+fe),Xe=We*-ne;oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Xe),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const Ge=Je+We,rt=_e+We,mt=Ue-Xe,F=Me+(Ee-Xe),L=Fe*_e/rt*Ge,Z=ue*_e/rt*Ge;K.projectionMatrix.makePerspective(mt,F,L,Z,Ge,rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function re(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;A.near=B.near=I.near=K.near,A.far=B.far=I.far=K.far,(O!==A.near||$!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,$=A.far);const oe=K.parent,ve=A.cameras;re(A,oe);for(let Ee=0;Ee<ve.length;Ee++)re(ve[Ee],oe);ve.length===2?ae(A,I,B):A.projectionMatrix.copy(I.projectionMatrix),he(K,A,oe)};function he(K,oe,ve){ve===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const Ee=K.children;for(let k=0,Ze=Ee.length;k<Ze;k++)Ee[k].updateMatrixWorld(!0);K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ii*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(K){d=K,_!==null&&(_.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.getPlanes=function(){return R};let de=null;function Pe(K,oe){if(m=oe.getViewerPose(p||u),v=oe,m!==null){const ve=m.views;x!==null&&(n.setRenderTargetFramebuffer(y,x.framebuffer),n.setRenderTarget(y));let Ee=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let k=0;k<ve.length;k++){const Ze=ve[k];let Je=null;if(x!==null)Je=x.getViewport(Ze);else{const Fe=g.getViewSubImage(_,Ze);Je=Fe.viewport,k===0&&(n.setRenderTargetTextures(y,Fe.colorTexture,_.ignoreDepthValues?void 0:Fe.depthStencilTexture),n.setRenderTarget(y))}let _e=G[k];_e===void 0&&(_e=new $t,_e.layers.enable(k),_e.viewport=new gt,G[k]=_e),_e.matrix.fromArray(Ze.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ze.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Je.x,Je.y,Je.width,Je.height),k===0&&(A.matrix.copy(_e.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(_e)}}for(let ve=0;ve<T.length;ve++){const Ee=E[ve],k=T[ve];Ee!==null&&k!==void 0&&k.update(Ee,oe,p||u)}if(de&&de(K,oe),oe.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let ve=null;for(const Ee of R)oe.detectedPlanes.has(Ee)||(ve===null&&(ve=[]),ve.push(Ee));if(ve!==null)for(const Ee of ve)R.delete(Ee),P.delete(Ee),r.dispatchEvent({type:"planeremoved",data:Ee});for(const Ee of oe.detectedPlanes)if(!R.has(Ee))R.add(Ee),P.set(Ee,oe.lastChangedTime),r.dispatchEvent({type:"planeadded",data:Ee});else{const k=P.get(Ee);Ee.lastChangedTime>k&&(P.set(Ee,Ee.lastChangedTime),r.dispatchEvent({type:"planechanged",data:Ee}))}}v=null}const be=new dh;be.setAnimationLoop(Pe),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}}function Rg(h,n){function s(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,fh(h)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function a(M,y,T,E,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(M,y):y.isMeshToonMaterial?(l(M,y),g(M,y)):y.isMeshPhongMaterial?(l(M,y),m(M,y)):y.isMeshStandardMaterial?(l(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,R)):y.isMeshMatcapMaterial?(l(M,y),v(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),b(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?d(M,y,T,E):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,s(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,s(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,s(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===tn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,s(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===tn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,s(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,s(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,s(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const T=n.get(y).envMap;if(T&&(M.envMap.value=T,M.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap){M.lightMap.value=y.lightMap;const E=h.useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=y.lightMapIntensity*E,s(y.lightMap,M.lightMapTransform)}y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,s(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,s(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,T,E){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*T,M.scale.value=E*.5,y.map&&(M.map.value=y.map,s(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,s(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,s(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,s(y.roughnessMap,M.roughnessMapTransform)),n.get(y).envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,T){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,s(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,s(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,s(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,s(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,s(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===tn&&M.clearcoatNormalScale.value.negate())),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,s(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,s(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=T.texture,M.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,s(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,s(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,s(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,s(y.specularIntensityMap,M.specularIntensityMapTransform))}function v(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const T=n.get(y).light;M.referencePosition.value.setFromMatrixPosition(T.matrixWorld),M.nearDistance.value=T.shadow.camera.near,M.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Cg(h,n,s,r){let a={},l={},u=[];const f=s.isWebGL2?h.getParameter(h.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(T,E){const R=E.program;r.uniformBlockBinding(T,R)}function p(T,E){let R=a[T.id];R===void 0&&(v(T),R=m(T),a[T.id]=R,T.addEventListener("dispose",M));const P=E.program;r.updateUBOMapping(T,P);const I=n.render.frame;l[T.id]!==I&&(_(T),l[T.id]=I)}function m(T){const E=g();T.__bindingPointIndex=E;const R=h.createBuffer(),P=T.__size,I=T.usage;return h.bindBuffer(h.UNIFORM_BUFFER,R),h.bufferData(h.UNIFORM_BUFFER,P,I),h.bindBuffer(h.UNIFORM_BUFFER,null),h.bindBufferBase(h.UNIFORM_BUFFER,E,R),R}function g(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const E=a[T.id],R=T.uniforms,P=T.__cache;h.bindBuffer(h.UNIFORM_BUFFER,E);for(let I=0,B=R.length;I<B;I++){const G=R[I];if(x(G,I,P)===!0){const A=G.__offset,O=Array.isArray(G.value)?G.value:[G.value];let $=0;for(let te=0;te<O.length;te++){const W=O[te],Y=b(W);typeof W=="number"?(G.__data[0]=W,h.bufferSubData(h.UNIFORM_BUFFER,A+$,G.__data)):W.isMatrix3?(G.__data[0]=W.elements[0],G.__data[1]=W.elements[1],G.__data[2]=W.elements[2],G.__data[3]=W.elements[0],G.__data[4]=W.elements[3],G.__data[5]=W.elements[4],G.__data[6]=W.elements[5],G.__data[7]=W.elements[0],G.__data[8]=W.elements[6],G.__data[9]=W.elements[7],G.__data[10]=W.elements[8],G.__data[11]=W.elements[0]):(W.toArray(G.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}h.bufferSubData(h.UNIFORM_BUFFER,A,G.__data)}}h.bindBuffer(h.UNIFORM_BUFFER,null)}function x(T,E,R){const P=T.value;if(R[E]===void 0){if(typeof P=="number")R[E]=P;else{const I=Array.isArray(P)?P:[P],B=[];for(let G=0;G<I.length;G++)B.push(I[G].clone());R[E]=B}return!0}else if(typeof P=="number"){if(R[E]!==P)return R[E]=P,!0}else{const I=Array.isArray(R[E])?R[E]:[R[E]],B=Array.isArray(P)?P:[P];for(let G=0;G<I.length;G++){const A=I[G];if(A.equals(B[G])===!1)return A.copy(B[G]),!0}}return!1}function v(T){const E=T.uniforms;let R=0;const P=16;let I=0;for(let B=0,G=E.length;B<G;B++){const A=E[B],O={boundary:0,storage:0},$=Array.isArray(A.value)?A.value:[A.value];for(let te=0,W=$.length;te<W;te++){const Y=$[te],J=b(Y);O.boundary+=J.boundary,O.storage+=J.storage}if(A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=R,B>0){I=R%P;const te=P-I;I!==0&&te-O.boundary<0&&(R+=P-I,A.__offset=R)}R+=O.storage}return I=R%P,I>0&&(R+=P-I),T.__size=R,T.__cache={},this}function b(T){const E={boundary:0,storage:0};return typeof T=="number"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function M(T){const E=T.target;E.removeEventListener("dispose",M);const R=u.indexOf(E.__bindingPointIndex);u.splice(R,1),h.deleteBuffer(a[E.id]),delete a[E.id],delete l[E.id]}function y(){for(const T in a)h.deleteBuffer(a[T]);u=[],a={},l={}}return{bind:d,update:p,dispose:y}}function Pg(){const h=Fr("canvas");return h.style.display="block",h}class Hh{constructor(n={}){const{canvas:s=Pg(),context:r=null,depth:a=!0,stencil:l=!0,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=n;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=u;let x=null,v=null;const b=[],M=[];this.domElement=s,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this.useLegacyLights=!0,this.toneMapping=qn,this.toneMappingExposure=1;const y=this;let T=!1,E=0,R=0,P=null,I=-1,B=null;const G=new gt,A=new gt;let O=null,$=s.width,te=s.height,W=1,Y=null,J=null;const le=new gt(0,0,$,te),ae=new gt(0,0,$,te);let re=!1;const he=new Dc;let de=!1,Pe=!1,be=null;const K=new tt,oe=new N,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return P===null?W:1}let k=r;function Ze(U,q){for(let Q=0;Q<U.length;Q++){const X=U[Q],se=s.getContext(X,q);if(se!==null)return se}return null}try{const U={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in s&&s.setAttribute("data-engine",`three.js r${dn}`),s.addEventListener("webglcontextlost",ze,!1),s.addEventListener("webglcontextrestored",ft,!1),s.addEventListener("webglcontextcreationerror",_t,!1),k===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),k=Ze(q,U),k===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Je,_e,Fe,ue,ne,fe,Ue,Me,We,Xe,Ge,rt,mt,F,L,Z,pe,ge,Se,$e,Le,ee,Oe,ke;function qe(){Je=new Vp(k),_e=new Fp(k,Je,n),Je.init(_e),ee=new bg(k,Je,_e),Fe=new Mg(k,Je,_e),ue=new qp(k),ne=new lg,fe=new Sg(k,Je,Fe,ne,_e,ee,ue),Ue=new zp(y),Me=new Hp(y),We=new Bf(k,_e),Oe=new Np(k,Je,We,_e),Xe=new Wp(k,We,ue,Oe),Ge=new Jp(k,Xe,We,ue),Se=new Zp(k,_e,fe),Z=new Bp(ne),rt=new cg(y,Ue,Me,Je,_e,Oe,Z),mt=new Rg(y,ne),F=new ug,L=new _g(Je,_e),ge=new Dp(y,Ue,Me,Fe,Ge,_,d),pe=new vg(y,Ge,_e),ke=new Cg(k,ue,_e,Fe),$e=new Op(k,Je,ue,_e),Le=new Xp(k,Je,ue,_e),ue.programs=rt.programs,y.capabilities=_e,y.extensions=Je,y.properties=ne,y.renderLists=F,y.shadowMap=pe,y.state=Fe,y.info=ue}qe();const De=new Ag(y,k);this.xr=De,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=Je.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Je.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(U){U!==void 0&&(W=U,this.setSize($,te,!1))},this.getSize=function(U){return U.set($,te)},this.setSize=function(U,q,Q=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=U,te=q,s.width=Math.floor(U*W),s.height=Math.floor(q*W),Q===!0&&(s.style.width=U+"px",s.style.height=q+"px"),this.setViewport(0,0,U,q)},this.getDrawingBufferSize=function(U){return U.set($*W,te*W).floor()},this.setDrawingBufferSize=function(U,q,Q){$=U,te=q,W=Q,s.width=Math.floor(U*Q),s.height=Math.floor(q*Q),this.setViewport(0,0,U,q)},this.getCurrentViewport=function(U){return U.copy(G)},this.getViewport=function(U){return U.copy(le)},this.setViewport=function(U,q,Q,X){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,q,Q,X),Fe.viewport(G.copy(le).multiplyScalar(W).floor())},this.getScissor=function(U){return U.copy(ae)},this.setScissor=function(U,q,Q,X){U.isVector4?ae.set(U.x,U.y,U.z,U.w):ae.set(U,q,Q,X),Fe.scissor(A.copy(ae).multiplyScalar(W).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(U){Fe.setScissorTest(re=U)},this.setOpaqueSort=function(U){Y=U},this.setTransparentSort=function(U){J=U},this.getClearColor=function(U){return U.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(U=!0,q=!0,Q=!0){let X=0;U&&(X|=k.COLOR_BUFFER_BIT),q&&(X|=k.DEPTH_BUFFER_BIT),Q&&(X|=k.STENCIL_BUFFER_BIT),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){s.removeEventListener("webglcontextlost",ze,!1),s.removeEventListener("webglcontextrestored",ft,!1),s.removeEventListener("webglcontextcreationerror",_t,!1),F.dispose(),L.dispose(),ne.dispose(),Ue.dispose(),Me.dispose(),Ge.dispose(),Oe.dispose(),ke.dispose(),rt.dispose(),De.dispose(),De.removeEventListener("sessionstart",Be),De.removeEventListener("sessionend",yt),be&&(be.dispose(),be=null),vt.stop()};function ze(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const U=ue.autoReset,q=pe.enabled,Q=pe.autoUpdate,X=pe.needsUpdate,se=pe.type;qe(),ue.autoReset=U,pe.enabled=q,pe.autoUpdate=Q,pe.needsUpdate=X,pe.type=se}function _t(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Lt(U){const q=U.target;q.removeEventListener("dispose",Lt),H(q)}function H(U){j(U),ne.remove(U)}function j(U){const q=ne.get(U).programs;q!==void 0&&(q.forEach(function(Q){rt.releaseProgram(Q)}),U.isShaderMaterial&&rt.releaseShaderCache(U))}this.renderBufferDirect=function(U,q,Q,X,se,He){q===null&&(q=ve);const Ye=se.isMesh&&se.matrixWorld.determinant()<0,je=x0(U,q,Q,X,se);Fe.setMaterial(X,Ye);let st=Q.index,ot=1;X.wireframe===!0&&(st=Xe.getWireframeAttribute(Q),ot=2);const ct=Q.drawRange,ht=Q.attributes.position;let xt=ct.start*ot,un=(ct.start+ct.count)*ot;He!==null&&(xt=Math.max(xt,He.start*ot),un=Math.min(un,(He.start+He.count)*ot)),st!==null?(xt=Math.max(xt,0),un=Math.min(un,st.count)):ht!=null&&(xt=Math.max(xt,0),un=Math.min(un,ht.count));const Wn=un-xt;if(Wn<0||Wn===1/0)return;Oe.setup(se,X,je,Q,st);let Ms,Ot=$e;if(st!==null&&(Ms=We.get(st),Ot=Le,Ot.setIndex(Ms)),se.isMesh)X.wireframe===!0?(Fe.setLineWidth(X.wireframeLinewidth*Ee()),Ot.setMode(k.LINES)):Ot.setMode(k.TRIANGLES);else if(se.isLine){let dt=X.linewidth;dt===void 0&&(dt=1),Fe.setLineWidth(dt*Ee()),se.isLineSegments?Ot.setMode(k.LINES):se.isLineLoop?Ot.setMode(k.LINE_LOOP):Ot.setMode(k.LINE_STRIP)}else se.isPoints?Ot.setMode(k.POINTS):se.isSprite&&Ot.setMode(k.TRIANGLES);if(se.isInstancedMesh)Ot.renderInstances(xt,Wn,se.count);else if(Q.isInstancedBufferGeometry){const dt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Al=Math.min(Q.instanceCount,dt);Ot.renderInstances(xt,Wn,Al)}else Ot.render(xt,Wn)},this.compile=function(U,q){function Q(X,se,He){X.transparent===!0&&X.side===Tn&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,ko(X,se,He),X.side=oi,X.needsUpdate=!0,ko(X,se,He),X.side=Tn):ko(X,se,He)}v=L.get(U),v.init(),M.push(v),U.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights(y.useLegacyLights),U.traverse(function(X){const se=X.material;if(se)if(Array.isArray(se))for(let He=0;He<se.length;He++){const Ye=se[He];Q(Ye,U,X)}else Q(se,U,X)}),M.pop(),v=null};let me=null;function Te(U){me&&me(U)}function Be(){vt.stop()}function yt(){vt.start()}const vt=new dh;vt.setAnimationLoop(Te),typeof self!="undefined"&&vt.setContext(self),this.setAnimationLoop=function(U){me=U,De.setAnimationLoop(U),U===null?vt.stop():vt.start()},De.addEventListener("sessionstart",Be),De.addEventListener("sessionend",yt),this.render=function(U,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,q,P),v=L.get(U,M.length),v.init(),M.push(v),K.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),he.setFromProjectionMatrix(K),Pe=this.localClippingEnabled,de=Z.init(this.clippingPlanes,Pe),x=F.get(U,b.length),x.init(),b.push(x),Qt(U,q,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Y,J),de===!0&&Z.beginShadows();const Q=v.state.shadowsArray;if(pe.render(Q,U,q),de===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(x,U),v.setupLights(y.useLegacyLights),q.isArrayCamera){const X=q.cameras;for(let se=0,He=X.length;se<He;se++){const Ye=X[se];ki(x,U,Ye,Ye.viewport)}}else ki(x,U,q);P!==null&&(fe.updateMultisampleRenderTarget(P),fe.updateRenderTargetMipmap(P)),U.isScene===!0&&U.onAfterRender(y,U,q),Oe.resetDefaultState(),I=-1,B=null,M.pop(),M.length>0?v=M[M.length-1]:v=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function Qt(U,q,Q,X){if(U.visible===!1)return;if(U.layers.test(q.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(q);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||he.intersectsSprite(U)){X&&oe.setFromMatrixPosition(U.matrixWorld).applyMatrix4(K);const Ye=Ge.update(U),je=U.material;je.visible&&x.push(U,Ye,je,Q,oe.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||he.intersectsObject(U))){U.isSkinnedMesh&&U.skeleton.frame!==ue.render.frame&&(U.skeleton.update(),U.skeleton.frame=ue.render.frame);const Ye=Ge.update(U),je=U.material;if(X&&(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),oe.copy(Ye.boundingSphere.center).applyMatrix4(U.matrixWorld).applyMatrix4(K)),Array.isArray(je)){const st=Ye.groups;for(let ot=0,ct=st.length;ot<ct;ot++){const ht=st[ot],xt=je[ht.materialIndex];xt&&xt.visible&&x.push(U,Ye,xt,Q,oe.z,ht)}}else je.visible&&x.push(U,Ye,je,Q,oe.z,null)}}const He=U.children;for(let Ye=0,je=He.length;Ye<je;Ye++)Qt(He[Ye],q,Q,X)}function ki(U,q,Q,X){const se=U.opaque,He=U.transmissive,Ye=U.transparent;v.setupLightsView(Q),de===!0&&Z.setGlobalState(y.clippingPlanes,Q),He.length>0&&It(se,He,q,Q),X&&Fe.viewport(G.copy(X)),se.length>0&&Un(se,q,Q),He.length>0&&Un(He,q,Q),Ye.length>0&&Un(Ye,q,Q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function It(U,q,Q,X){if(be===null){const je=_e.isWebGL2;be=new rs(1024,1024,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")?Yi:ci,minFilter:Yn,samples:je&&f===!0?4:0})}const se=y.getRenderTarget();y.setRenderTarget(be),y.clear();const He=y.toneMapping;y.toneMapping=qn,Un(U,Q,X),fe.updateMultisampleRenderTarget(be),fe.updateRenderTargetMipmap(be);let Ye=!1;for(let je=0,st=q.length;je<st;je++){const ot=q[je],ct=ot.object,ht=ot.geometry,xt=ot.material,un=ot.group;if(xt.side===Tn&&ct.layers.test(X.layers)){const Wn=xt.side;xt.side=tn,xt.needsUpdate=!0,si(ct,Q,X,ht,xt,un),xt.side=Wn,xt.needsUpdate=!0,Ye=!0}}Ye===!0&&(fe.updateMultisampleRenderTarget(be),fe.updateRenderTargetMipmap(be)),y.setRenderTarget(se),y.toneMapping=He}function Un(U,q,Q){const X=q.isScene===!0?q.overrideMaterial:null;for(let se=0,He=U.length;se<He;se++){const Ye=U[se],je=Ye.object,st=Ye.geometry,ot=X===null?Ye.material:X,ct=Ye.group;je.layers.test(Q.layers)&&si(je,q,Q,st,ot,ct)}}function si(U,q,Q,X,se,He){U.onBeforeRender(y,q,Q,X,se,He),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),se.onBeforeRender(y,q,Q,X,U,He),se.transparent===!0&&se.side===Tn&&se.forceSinglePass===!1?(se.side=tn,se.needsUpdate=!0,y.renderBufferDirect(Q,q,X,se,U,He),se.side=oi,se.needsUpdate=!0,y.renderBufferDirect(Q,q,X,se,U,He),se.side=Tn):y.renderBufferDirect(Q,q,X,se,U,He),U.onAfterRender(y,q,Q,X,se,He)}function ko(U,q,Q){q.isScene!==!0&&(q=ve);const X=ne.get(U),se=v.state.lights,He=v.state.shadowsArray,Ye=se.state.version,je=rt.getParameters(U,se.state,He,q,Q),st=rt.getProgramCacheKey(je);let ot=X.programs;X.environment=U.isMeshStandardMaterial?q.environment:null,X.fog=q.fog,X.envMap=(U.isMeshStandardMaterial?Me:Ue).get(U.envMap||X.environment),ot===void 0&&(U.addEventListener("dispose",Lt),ot=new Map,X.programs=ot);let ct=ot.get(st);if(ct!==void 0){if(X.currentProgram===ct&&X.lightsStateVersion===Ye)return Qu(U,je),ct}else je.uniforms=rt.getUniforms(U),U.onBuild(Q,je,y),U.onBeforeCompile(je,y),ct=rt.acquireProgram(je,st),ot.set(st,ct),X.uniforms=je.uniforms;const ht=X.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ht.clippingPlanes=Z.uniform),Qu(U,je),X.needsLights=v0(U),X.lightsStateVersion=Ye,X.needsLights&&(ht.ambientLightColor.value=se.state.ambient,ht.lightProbe.value=se.state.probe,ht.directionalLights.value=se.state.directional,ht.directionalLightShadows.value=se.state.directionalShadow,ht.spotLights.value=se.state.spot,ht.spotLightShadows.value=se.state.spotShadow,ht.rectAreaLights.value=se.state.rectArea,ht.ltc_1.value=se.state.rectAreaLTC1,ht.ltc_2.value=se.state.rectAreaLTC2,ht.pointLights.value=se.state.point,ht.pointLightShadows.value=se.state.pointShadow,ht.hemisphereLights.value=se.state.hemi,ht.directionalShadowMap.value=se.state.directionalShadowMap,ht.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ht.spotShadowMap.value=se.state.spotShadowMap,ht.spotLightMatrix.value=se.state.spotLightMatrix,ht.spotLightMap.value=se.state.spotLightMap,ht.pointShadowMap.value=se.state.pointShadowMap,ht.pointShadowMatrix.value=se.state.pointShadowMatrix);const xt=ct.getUniforms(),un=oo.seqWithValue(xt.seq,ht);return X.currentProgram=ct,X.uniformsList=un,ct}function Qu(U,q){const Q=ne.get(U);Q.outputColorSpace=q.outputColorSpace,Q.instancing=q.instancing,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function x0(U,q,Q,X,se){q.isScene!==!0&&(q=ve),fe.resetTextureUnits();const He=q.fog,Ye=X.isMeshStandardMaterial?q.environment:null,je=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Pn,st=(X.isMeshStandardMaterial?Me:Ue).get(X.envMap||Ye),ot=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!X.normalMap&&!!Q.attributes.tangent,ht=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,un=!!Q.morphAttributes.color,Wn=X.toneMapped?y.toneMapping:qn,Ms=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ot=Ms!==void 0?Ms.length:0,dt=ne.get(X),Al=v.state.lights;if(de===!0&&(Pe===!0||U!==B)){const wn=U===B&&X.id===I;Z.setState(X,U,wn)}let Xt=!1;X.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Al.state.version||dt.outputColorSpace!==je||se.isInstancedMesh&&dt.instancing===!1||!se.isInstancedMesh&&dt.instancing===!0||se.isSkinnedMesh&&dt.skinning===!1||!se.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==st||X.fog===!0&&dt.fog!==He||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Z.numPlanes||dt.numIntersection!==Z.numIntersection)||dt.vertexAlphas!==ot||dt.vertexTangents!==ct||dt.morphTargets!==ht||dt.morphNormals!==xt||dt.morphColors!==un||dt.toneMapping!==Wn||_e.isWebGL2===!0&&dt.morphTargetsCount!==Ot)&&(Xt=!0):(Xt=!0,dt.__version=X.version);let Ss=dt.currentProgram;Xt===!0&&(Ss=ko(X,q,se));let ef=!1,ca=!1,Rl=!1;const fn=Ss.getUniforms(),bs=dt.uniforms;if(Fe.useProgram(Ss.program)&&(ef=!0,ca=!0,Rl=!0),X.id!==I&&(I=X.id,ca=!0),ef||B!==U){if(fn.setValue(k,"projectionMatrix",U.projectionMatrix),_e.logarithmicDepthBuffer&&fn.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),B!==U&&(B=U,ca=!0,Rl=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const wn=fn.map.cameraPosition;wn!==void 0&&wn.setValue(k,oe.setFromMatrixPosition(U.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fn.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||se.isSkinnedMesh)&&fn.setValue(k,"viewMatrix",U.matrixWorldInverse)}if(se.isSkinnedMesh){fn.setOptional(k,se,"bindMatrix"),fn.setOptional(k,se,"bindMatrixInverse");const wn=se.skeleton;wn&&(_e.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),fn.setValue(k,"boneTexture",wn.boneTexture,fe),fn.setValue(k,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cl=Q.morphAttributes;if((Cl.position!==void 0||Cl.normal!==void 0||Cl.color!==void 0&&_e.isWebGL2===!0)&&Se.update(se,Q,Ss),(ca||dt.receiveShadow!==se.receiveShadow)&&(dt.receiveShadow=se.receiveShadow,fn.setValue(k,"receiveShadow",se.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bs.envMap.value=st,bs.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ca&&(fn.setValue(k,"toneMappingExposure",y.toneMappingExposure),dt.needsLights&&y0(bs,Rl),He&&X.fog===!0&&mt.refreshFogUniforms(bs,He),mt.refreshMaterialUniforms(bs,X,W,te,be),oo.upload(k,dt.uniformsList,bs,fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(oo.upload(k,dt.uniformsList,bs,fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fn.setValue(k,"center",se.center),fn.setValue(k,"modelViewMatrix",se.modelViewMatrix),fn.setValue(k,"normalMatrix",se.normalMatrix),fn.setValue(k,"modelMatrix",se.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const wn=X.uniformsGroups;for(let Pl=0,M0=wn.length;Pl<M0;Pl++)if(_e.isWebGL2){const tf=wn[Pl];ke.update(tf,Ss),ke.bind(tf,Ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ss}function y0(U,q){U.ambientLightColor.needsUpdate=q,U.lightProbe.needsUpdate=q,U.directionalLights.needsUpdate=q,U.directionalLightShadows.needsUpdate=q,U.pointLights.needsUpdate=q,U.pointLightShadows.needsUpdate=q,U.spotLights.needsUpdate=q,U.spotLightShadows.needsUpdate=q,U.rectAreaLights.needsUpdate=q,U.hemisphereLights.needsUpdate=q}function v0(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(U,q,Q){ne.get(U.texture).__webglTexture=q,ne.get(U.depthTexture).__webglTexture=Q;const X=ne.get(U);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Q===void 0,X.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,q){const Q=ne.get(U);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(U,q=0,Q=0){P=U,E=q,R=Q;let X=!0,se=null,He=!1,Ye=!1;if(U){const st=ne.get(U);st.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):st.__webglFramebuffer===void 0?fe.setupRenderTarget(U):st.__hasExternalTextures&&fe.rebindTextures(U,ne.get(U.texture).__webglTexture,ne.get(U.depthTexture).__webglTexture);const ot=U.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ye=!0);const ct=ne.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(se=ct[q],He=!0):_e.isWebGL2&&U.samples>0&&fe.useMultisampledRTT(U)===!1?se=ne.get(U).__webglMultisampledFramebuffer:se=ct,G.copy(U.viewport),A.copy(U.scissor),O=U.scissorTest}else G.copy(le).multiplyScalar(W).floor(),A.copy(ae).multiplyScalar(W).floor(),O=re;if(Fe.bindFramebuffer(k.FRAMEBUFFER,se)&&_e.drawBuffers&&X&&Fe.drawBuffers(U,se),Fe.viewport(G),Fe.scissor(A),Fe.setScissorTest(O),He){const st=ne.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,st.__webglTexture,Q)}else if(Ye){const st=ne.get(U.texture),ot=q||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,st.__webglTexture,Q||0,ot)}I=-1},this.readRenderTargetPixels=function(U,q,Q,X,se,He,Ye){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ne.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ye!==void 0&&(je=je[Ye]),je){Fe.bindFramebuffer(k.FRAMEBUFFER,je);try{const st=U.texture,ot=st.format,ct=st.type;if(ot!==Zt&&ee.convert(ot)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ct===Yi&&(Je.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Je.has("EXT_color_buffer_float"));if(ct!==ci&&ee.convert(ct)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ct===Zn&&(_e.isWebGL2||Je.has("OES_texture_float")||Je.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=U.width-X&&Q>=0&&Q<=U.height-se&&k.readPixels(q,Q,X,se,ee.convert(ot),ee.convert(ct),He)}finally{const st=P!==null?ne.get(P).__webglFramebuffer:null;Fe.bindFramebuffer(k.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(U,q,Q=0){const X=Math.pow(2,-Q),se=Math.floor(q.image.width*X),He=Math.floor(q.image.height*X);fe.setTexture2D(q,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,U.x,U.y,se,He),Fe.unbindTexture()},this.copyTextureToTexture=function(U,q,Q,X=0){const se=q.image.width,He=q.image.height,Ye=ee.convert(Q.format),je=ee.convert(Q.type);fe.setTexture2D(Q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment),q.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,U.x,U.y,se,He,Ye,je,q.image.data):q.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,U.x,U.y,q.mipmaps[0].width,q.mipmaps[0].height,Ye,q.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,U.x,U.y,Ye,je,q.image),X===0&&Q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(U,q,Q,X,se=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=U.max.x-U.min.x+1,Ye=U.max.y-U.min.y+1,je=U.max.z-U.min.z+1,st=ee.convert(X.format),ot=ee.convert(X.type);let ct;if(X.isData3DTexture)fe.setTexture3D(X,0),ct=k.TEXTURE_3D;else if(X.isDataArrayTexture)fe.setTexture2DArray(X,0),ct=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const ht=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),un=k.getParameter(k.UNPACK_SKIP_PIXELS),Wn=k.getParameter(k.UNPACK_SKIP_ROWS),Ms=k.getParameter(k.UNPACK_SKIP_IMAGES),Ot=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,U.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,U.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,U.min.z),Q.isDataTexture||Q.isData3DTexture?k.texSubImage3D(ct,se,q.x,q.y,q.z,He,Ye,je,st,ot,Ot.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ct,se,q.x,q.y,q.z,He,Ye,je,st,Ot.data)):k.texSubImage3D(ct,se,q.x,q.y,q.z,He,Ye,je,st,ot,Ot),k.pixelStorei(k.UNPACK_ROW_LENGTH,ht),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,un),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ms),se===0&&X.generateMipmaps&&k.generateMipmap(ct),Fe.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?fe.setTextureCube(U,0):U.isData3DTexture?fe.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?fe.setTexture2DArray(U,0):fe.setTexture2D(U,0),Fe.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,Fe.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?fi:hc}set outputEncoding(n){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=n===fi?Qe:Pn}}class Lg extends Hh{}Lg.prototype.isWebGL1Renderer=!0;class Hc{constructor(n,s=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(n),this.density=s}clone(){return new Hc(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Vc{constructor(n,s=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ce(n),this.near=s,this.far=r}clone(){return new Vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Vh extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,s){return super.copy(n,s),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const s=super.toJSON(n);return this.fog!==null&&(s.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(s.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(s.object.backgroundIntensity=this.backgroundIntensity),s}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(n){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=n}}class Wh{constructor(n,s){this.isInterleavedBuffer=!0,this.array=n,this.stride=s,this.count=n!==void 0?n.length/s:0,this.usage=et,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}copy(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this}copyAt(n,s,r){n*=this.stride,r*=s.stride;for(let a=0,l=this.stride;a<l;a++)this.array[n+a]=s.array[r+a];return this}set(n,s=0){return this.array.set(n,s),this}clone(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const s=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(s,this.stride);return r.setUsage(this.usage),r}onUpload(n){return this.onUploadCallback=n,this}toJSON(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new N;class rr{constructor(n,s,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=n,this.itemSize=s,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(n){this.data.needsUpdate=n}applyMatrix4(n){for(let s=0,r=this.data.count;s<r;s++)hn.fromBufferAttribute(this,s),hn.applyMatrix4(n),this.setXYZ(s,hn.x,hn.y,hn.z);return this}applyNormalMatrix(n){for(let s=0,r=this.count;s<r;s++)hn.fromBufferAttribute(this,s),hn.applyNormalMatrix(n),this.setXYZ(s,hn.x,hn.y,hn.z);return this}transformDirection(n){for(let s=0,r=this.count;s<r;s++)hn.fromBufferAttribute(this,s),hn.transformDirection(n),this.setXYZ(s,hn.x,hn.y,hn.z);return this}setX(n,s){return this.normalized&&(s=nt(s,this.array)),this.data.array[n*this.data.stride+this.offset]=s,this}setY(n,s){return this.normalized&&(s=nt(s,this.array)),this.data.array[n*this.data.stride+this.offset+1]=s,this}setZ(n,s){return this.normalized&&(s=nt(s,this.array)),this.data.array[n*this.data.stride+this.offset+2]=s,this}setW(n,s){return this.normalized&&(s=nt(s,this.array)),this.data.array[n*this.data.stride+this.offset+3]=s,this}getX(n){let s=this.data.array[n*this.data.stride+this.offset];return this.normalized&&(s=yn(s,this.array)),s}getY(n){let s=this.data.array[n*this.data.stride+this.offset+1];return this.normalized&&(s=yn(s,this.array)),s}getZ(n){let s=this.data.array[n*this.data.stride+this.offset+2];return this.normalized&&(s=yn(s,this.array)),s}getW(n){let s=this.data.array[n*this.data.stride+this.offset+3];return this.normalized&&(s=yn(s,this.array)),s}setXY(n,s,r){return n=n*this.data.stride+this.offset,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array)),this.data.array[n+0]=s,this.data.array[n+1]=r,this}setXYZ(n,s,r,a){return n=n*this.data.stride+this.offset,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array)),this.data.array[n+0]=s,this.data.array[n+1]=r,this.data.array[n+2]=a,this}setXYZW(n,s,r,a,l){return n=n*this.data.stride+this.offset,this.normalized&&(s=nt(s,this.array),r=nt(r,this.array),a=nt(a,this.array),l=nt(l,this.array)),this.data.array[n+0]=s,this.data.array[n+1]=r,this.data.array[n+2]=a,this.data.array[n+3]=l,this}clone(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const s=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)s.push(this.data.array[a+l])}return new Vt(new this.array.constructor(s),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new rr(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const s=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)s.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:s,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xh extends null{constructor(n){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.rotation=n.rotation,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}let ar;const Yr=new N,or=new N,cr=new N,lr=new ce,$r=new ce,qh=new tt,co=new N,Zr=new N,lo=new N,Yh=new ce,Wc=new ce,$h=new ce;class Ig extends null{constructor(n){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new at;const s=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Wh(s,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new rr(r,3,0,!1)),ar.setAttribute("uv",new rr(r,2,3,!1))}this.geometry=ar,this.material=n!==void 0?n:new Xh,this.center=new ce(.5,.5)}raycast(n,s){n.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),qh.copy(n.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(n.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),n.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-cr.z);const r=this.material.rotation;let a,l;r!==0&&(l=Math.cos(r),a=Math.sin(r));const u=this.center;ho(co.set(-.5,-.5,0),cr,u,or,a,l),ho(Zr.set(.5,-.5,0),cr,u,or,a,l),ho(lo.set(.5,.5,0),cr,u,or,a,l),Yh.set(0,0),Wc.set(1,0),$h.set(1,1);let f=n.ray.intersectTriangle(co,Zr,lo,!1,Yr);if(f===null&&(ho(Zr.set(-.5,.5,0),cr,u,or,a,l),Wc.set(0,1),f=n.ray.intersectTriangle(co,lo,Zr,!1,Yr),f===null))return;const d=n.ray.origin.distanceTo(Yr);d<n.near||d>n.far||s.push({distance:d,point:Yr.clone(),uv:Sn.getInterpolation(Yr,co,Zr,lo,Yh,Wc,$h,new ce),face:null,object:this})}copy(n,s){return super.copy(n,s),n.center!==void 0&&this.center.copy(n.center),this.material=n.material,this}}function ho(h,n,s,r,a,l){lr.subVectors(h,s).addScalar(.5).multiply(r),a!==void 0?($r.x=l*lr.x-a*lr.y,$r.y=a*lr.x+l*lr.y):$r.copy(lr),h.copy(n),h.x+=$r.x,h.y+=$r.y,h.applyMatrix4(qh)}const uo=new N,Zh=new N;class Ug extends null{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(n){super.copy(n,!1);const s=n.levels;for(let r=0,a=s.length;r<a;r++){const l=s[r];this.addLevel(l.object.clone(),l.distance,l.hysteresis)}return this.autoUpdate=n.autoUpdate,this}addLevel(n,s=0,r=0){s=Math.abs(s);const a=this.levels;let l;for(l=0;l<a.length&&!(s<a[l].distance);l++);return a.splice(l,0,{distance:s,hysteresis:r,object:n}),this.add(n),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(n){const s=this.levels;if(s.length>0){let r,a;for(r=1,a=s.length;r<a;r++){let l=s[r].distance;if(s[r].object.visible&&(l-=l*s[r].hysteresis),n<l)break}return s[r-1].object}return null}raycast(n,s){if(this.levels.length>0){uo.setFromMatrixPosition(this.matrixWorld);const a=n.ray.origin.distanceTo(uo);this.getObjectForDistance(a).raycast(n,s)}}update(n){const s=this.levels;if(s.length>1){uo.setFromMatrixPosition(n.matrixWorld),Zh.setFromMatrixPosition(this.matrixWorld);const r=uo.distanceTo(Zh)/n.zoom;s[0].object.visible=!0;let a,l;for(a=1,l=s.length;a<l;a++){let u=s[a].distance;if(s[a].object.visible&&(u-=u*s[a].hysteresis),r>=u)s[a-1].object.visible=!1,s[a].object.visible=!0;else break}for(this._currentLevel=a-1;a<l;a++)s[a].object.visible=!1}}toJSON(n){const s=super.toJSON(n);this.autoUpdate===!1&&(s.object.autoUpdate=!1),s.object.levels=[];const r=this.levels;for(let a=0,l=r.length;a<l;a++){const u=r[a];s.object.levels.push({object:u.object.uuid,distance:u.distance,hysteresis:u.hysteresis})}return s}}const Jh=new N,Kh=new gt,jh=new gt,Dg=new N,Qh=new tt,hr=new N;class Ng extends null{constructor(n,s){super(n,s),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const n=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const s=n.getAttribute("position");for(let r=0;r<s.count;r++)hr.fromBufferAttribute(s,r),this.applyBoneTransform(r,hr),this.boundingBox.expandByPoint(hr)}computeBoundingSphere(){const n=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();const s=n.getAttribute("position");for(let r=0;r<s.count;r++)hr.fromBufferAttribute(s,r),this.applyBoneTransform(r,hr),this.boundingSphere.expandByPoint(hr)}copy(n,s){return super.copy(n,s),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this}getVertexPosition(n,s){return super.getVertexPosition(n,s),this.applyBoneTransform(n,s),s}bind(n,s){this.skeleton=n,s===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),s=this.matrixWorld),this.bindMatrix.copy(s),this.bindMatrixInverse.copy(s).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const n=new gt,s=this.geometry.attributes.skinWeight;for(let r=0,a=s.count;r<a;r++){n.fromBufferAttribute(s,r);const l=1/n.manhattanLength();l!==1/0?n.multiplyScalar(l):n.set(1,0,0,0),s.setXYZW(r,n.x,n.y,n.z,n.w)}}updateMatrixWorld(n){super.updateMatrixWorld(n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(n,s){const r=this.skeleton,a=this.geometry;Kh.fromBufferAttribute(a.attributes.skinIndex,n),jh.fromBufferAttribute(a.attributes.skinWeight,n),Jh.copy(s).applyMatrix4(this.bindMatrix),s.set(0,0,0);for(let l=0;l<4;l++){const u=jh.getComponent(l);if(u!==0){const f=Kh.getComponent(l);Qh.multiplyMatrices(r.bones[f].matrixWorld,r.boneInverses[f]),s.addScaledVector(Dg.copy(Jh).applyMatrix4(Qh),u)}}return s.applyMatrix4(this.bindMatrixInverse)}boneTransform(n,s){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(n,s)}}class eu extends null{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jr extends null{constructor(n=null,s=1,r=1,a,l,u,f,d,p=Tt,m=Tt,g,_){super(null,u,f,d,p,m,a,l,g,_),this.isDataTexture=!0,this.image={data:n,width:s,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tu=new tt,Og=new tt;class Xc{constructor(n=[],s=[]){this.uuid=on(),this.bones=n.slice(0),this.boneInverses=s,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const n=this.bones,s=this.boneInverses;if(this.boneMatrices=new Float32Array(n.length*16),s.length===0)this.calculateInverses();else if(n.length!==s.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let n=0,s=this.bones.length;n<s;n++){const r=new tt;this.bones[n]&&r.copy(this.bones[n].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let n=0,s=this.bones.length;n<s;n++){const r=this.bones[n];r&&r.matrixWorld.copy(this.boneInverses[n]).invert()}for(let n=0,s=this.bones.length;n<s;n++){const r=this.bones[n];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const n=this.bones,s=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let l=0,u=n.length;l<u;l++){const f=n[l]?n[l].matrixWorld:Og;tu.multiplyMatrices(f,s[l]),tu.toArray(r,l*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Xc(this.bones,this.boneInverses)}computeBoneTexture(){let n=Math.sqrt(this.bones.length*4);n=Os(n),n=Math.max(n,4);const s=new Float32Array(n*n*4);s.set(this.boneMatrices);const r=new Jr(s,n,n,Zt,Zn);return r.needsUpdate=!0,this.boneMatrices=s,this.boneTexture=r,this.boneTextureSize=n,this}getBoneByName(n){for(let s=0,r=this.bones.length;s<r;s++){const a=this.bones[s];if(a.name===n)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(n,s){this.uuid=n.uuid;for(let r=0,a=n.bones.length;r<a;r++){const l=n.bones[r];let u=s[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new eu),this.bones.push(u),this.boneInverses.push(new tt().fromArray(n.boneInverses[r]))}return this.init(),this}toJSON(){const n={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};n.uuid=this.uuid;const s=this.bones,r=this.boneInverses;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.bones.push(u.uuid);const f=r[a];n.boneInverses.push(f.toArray())}return n}}class Kr extends null{constructor(n,s,r,a=1){super(n,s,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(n){return super.copy(n),this.meshPerAttribute=n.meshPerAttribute,this}toJSON(){const n=super.toJSON();return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}}const ur=new tt,nu=new tt,fo=null,iu=new mi,Fg=new tt,jr=new _n,Qr=new xi;class Bg extends null{constructor(n,s,r){super(n,s),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<r;a++)this.setMatrixAt(a,Fg)}computeBoundingBox(){const n=this.geometry,s=this.count;this.boundingBox===null&&(this.boundingBox=new mi),n.boundingBox===null&&n.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<s;r++)this.getMatrixAt(r,ur),iu.copy(n.boundingBox).applyMatrix4(ur),this.boundingBox.union(iu)}computeBoundingSphere(){const n=this.geometry,s=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),n.boundingSphere===null&&n.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<s;r++)this.getMatrixAt(r,ur),Qr.copy(n.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(Qr)}copy(n,s){return super.copy(n,s),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this}getColorAt(n,s){s.fromArray(this.instanceColor.array,n*3)}getMatrixAt(n,s){s.fromArray(this.instanceMatrix.array,n*16)}raycast(n,s){const r=this.matrixWorld,a=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(r),n.ray.intersectsSphere(Qr)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ur),nu.multiplyMatrices(r,ur),jr.matrixWorld=nu,jr.raycast(n,fo);for(let u=0,f=fo.length;u<f;u++){const d=fo[u];d.instanceId=l,d.object=this,s.push(d)}fo.length=0}}setColorAt(n,s){this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3),3)),s.toArray(this.instanceColor.array,n*3)}setMatrixAt(n,s){s.toArray(this.instanceMatrix.array,n*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends null{constructor(n){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.linewidth=n.linewidth,this.linecap=n.linecap,this.linejoin=n.linejoin,this.fog=n.fog,this}}const su=new N,ru=new N,au=new tt,qc=new Ga,po=new xi;class mo extends null{constructor(n=new at,s=new En){super(),this.isLine=!0,this.type="Line",this.geometry=n,this.material=s,this.updateMorphTargets()}copy(n,s){return super.copy(n,s),this.material=n.material,this.geometry=n.geometry,this}computeLineDistances(){const n=this.geometry;if(n.index===null){const s=n.attributes.position,r=[0];for(let a=1,l=s.count;a<l;a++)su.fromBufferAttribute(s,a-1),ru.fromBufferAttribute(s,a),r[a]=r[a-1],r[a]+=su.distanceTo(ru);n.setAttribute("lineDistance",new Ne(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(n,s){const r=this.geometry,a=this.matrixWorld,l=n.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),po.copy(r.boundingSphere),po.applyMatrix4(a),po.radius+=l,n.ray.intersectsSphere(po)===!1)return;au.copy(a).invert(),qc.copy(n.ray).applyMatrix4(au);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=new N,m=new N,g=new N,_=new N,x=this.isLineSegments?2:1,v=r.index,M=r.attributes.position;if(v!==null){const y=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let E=y,R=T-1;E<R;E+=x){const P=v.getX(E),I=v.getX(E+1);if(p.fromBufferAttribute(M,P),m.fromBufferAttribute(M,I),qc.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const G=n.ray.origin.distanceTo(_);G<n.near||G>n.far||s.push({distance:G,point:g.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,u.start),T=Math.min(M.count,u.start+u.count);for(let E=y,R=T-1;E<R;E+=x){if(p.fromBufferAttribute(M,E),m.fromBufferAttribute(M,E+1),qc.distanceSqToSegment(p,m,_,g)>d)continue;_.applyMatrix4(this.matrixWorld);const I=n.ray.origin.distanceTo(_);I<n.near||I>n.far||s.push({distance:I,point:g.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const s=this.geometry.morphAttributes,r=Object.keys(s);if(r.length>0){const a=s[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}const ou=new N,cu=new N;class lu extends null{constructor(n,s){super(n,s),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const n=this.geometry;if(n.index===null){const s=n.attributes.position,r=[];for(let a=0,l=s.count;a<l;a+=2)ou.fromBufferAttribute(s,a),cu.fromBufferAttribute(s,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ou.distanceTo(cu);n.setAttribute("lineDistance",new Ne(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zg extends null{constructor(n,s){super(n,s),this.isLineLoop=!0,this.type="LineLoop"}}class hu extends null{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const uu=new tt,Yc=new Ga,go=new xi,_o=new N;class Gg extends null{constructor(n=new at,s=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=s,this.updateMorphTargets()}copy(n,s){return super.copy(n,s),this.material=n.material,this.geometry=n.geometry,this}raycast(n,s){const r=this.geometry,a=this.matrixWorld,l=n.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),go.copy(r.boundingSphere),go.applyMatrix4(a),go.radius+=l,n.ray.intersectsSphere(go)===!1)return;uu.copy(a).invert(),Yc.copy(n.ray).applyMatrix4(uu);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let v=_,b=x;v<b;v++){const M=p.getX(v);_o.fromBufferAttribute(g,M),fu(_o,M,d,a,n,s,this)}}else{const _=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let v=_,b=x;v<b;v++)_o.fromBufferAttribute(g,v),fu(_o,v,d,a,n,s,this)}}updateMorphTargets(){const s=this.geometry.morphAttributes,r=Object.keys(s);if(r.length>0){const a=s[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function fu(h,n,s,r,a,l,u){const f=Yc.distanceSqToPoint(h);if(f<s){const d=new N;Yc.closestPointToPoint(h,d),d.applyMatrix4(r);const p=a.ray.origin.distanceTo(d);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:n,face:null,object:u})}}class px extends null{constructor(n,s,r,a,l,u,f,d,p){super(n,s,r,a,l,u,f,d,p),this.isVideoTexture=!0,this.minFilter=u!==void 0?u:St,this.magFilter=l!==void 0?l:St,this.generateMipmaps=!1;const m=this;function g(){m.needsUpdate=!0,n.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in n&&n.requestVideoFrameCallback(g)}clone(){return new this.constructor(this.image).copy(this)}update(){const n=this.image;"requestVideoFrameCallback"in n===!1&&n.readyState>=n.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class mx extends null{constructor(n,s,r){super({width:n,height:s}),this.isFramebufferTexture=!0,this.format=r,this.magFilter=Tt,this.minFilter=Tt,this.generateMipmaps=!1,this.needsUpdate=!0}}class kg extends null{constructor(n,s,r,a,l,u,f,d,p,m,g,_){super(null,u,f,d,p,m,a,l,g,_),this.isCompressedTexture=!0,this.image={width:s,height:r},this.mipmaps=n,this.flipY=!1,this.generateMipmaps=!1}}class gx extends null{constructor(n,s,r,a,l,u){super(n,s,r,l,u),this.isCompressedArrayTexture=!0,this.image.depth=a,this.wrapR=kt}}class _x extends null{constructor(n,s,r,a,l,u,f,d,p){super(n,s,r,a,l,u,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(n,s){const r=this.getUtoTmapping(n);return this.getPoint(r,s)}getPoints(n=5){const s=[];for(let r=0;r<=n;r++)s.push(this.getPoint(r/n));return s}getSpacedPoints(n=5){const s=[];for(let r=0;r<=n;r++)s.push(this.getPointAt(r/n));return s}getLength(){const n=this.getLengths();return n[n.length-1]}getLengths(n=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const s=[];let r,a=this.getPoint(0),l=0;s.push(0);for(let u=1;u<=n;u++)r=this.getPoint(u/n),l+=r.distanceTo(a),s.push(l),a=r;return this.cacheArcLengths=s,s}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(n,s){const r=this.getLengths();let a=0;const l=r.length;let u;s?u=s:u=n*r[l-1];let f=0,d=l-1,p;for(;f<=d;)if(a=Math.floor(f+(d-f)/2),p=r[a]-u,p<0)f=a+1;else if(p>0)d=a-1;else{d=a;break}if(a=d,r[a]===u)return a/(l-1);const m=r[a],_=r[a+1]-m,x=(u-m)/_;return(a+x)/(l-1)}getTangent(n,s){let a=n-1e-4,l=n+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),f=this.getPoint(l),d=s||(u.isVector2?new ce:new N);return d.copy(f).sub(u).normalize(),d}getTangentAt(n,s){const r=this.getUtoTmapping(n);return this.getTangent(r,s)}computeFrenetFrames(n,s){const r=new N,a=[],l=[],u=[],f=new N,d=new tt;for(let x=0;x<=n;x++){const v=x/n;a[x]=this.getTangentAt(v,new N)}l[0]=new N,u[0]=new N;let p=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),_=Math.abs(a[0].z);m<=p&&(p=m,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),_<=p&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),u[0].crossVectors(a[0],l[0]);for(let x=1;x<=n;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(a[x-1],a[x]),f.length()>Number.EPSILON){f.normalize();const v=Math.acos(bt(a[x-1].dot(a[x]),-1,1));l[x].applyMatrix4(d.makeRotationAxis(f,v))}u[x].crossVectors(a[x],l[x])}if(s===!0){let x=Math.acos(bt(l[0].dot(l[n]),-1,1));x/=n,a[0].dot(f.crossVectors(l[0],l[n]))>0&&(x=-x);for(let v=1;v<=n;v++)l[v].applyMatrix4(d.makeRotationAxis(a[v],x*v)),u[v].crossVectors(a[v],l[v])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}toJSON(){const n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n}fromJSON(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}}class $c extends ni{constructor(n=0,s=0,r=1,a=1,l=0,u=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=n,this.aY=s,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=d}getPoint(n,s){const r=s||new ce,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+n*l;let d=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=d-this.aX,x=p-this.aY;d=_*m-x*g+this.aX,p=_*g+x*m+this.aY}return r.set(d,p)}copy(n){return super.copy(n),this.aX=n.aX,this.aY=n.aY,this.xRadius=n.xRadius,this.yRadius=n.yRadius,this.aStartAngle=n.aStartAngle,this.aEndAngle=n.aEndAngle,this.aClockwise=n.aClockwise,this.aRotation=n.aRotation,this}toJSON(){const n=super.toJSON();return n.aX=this.aX,n.aY=this.aY,n.xRadius=this.xRadius,n.yRadius=this.yRadius,n.aStartAngle=this.aStartAngle,n.aEndAngle=this.aEndAngle,n.aClockwise=this.aClockwise,n.aRotation=this.aRotation,n}fromJSON(n){return super.fromJSON(n),this.aX=n.aX,this.aY=n.aY,this.xRadius=n.xRadius,this.yRadius=n.yRadius,this.aStartAngle=n.aStartAngle,this.aEndAngle=n.aEndAngle,this.aClockwise=n.aClockwise,this.aRotation=n.aRotation,this}}class Hg extends $c{constructor(n,s,r,a,l,u){super(n,s,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let h=0,n=0,s=0,r=0;function a(l,u,f,d){h=l,n=f,s=-3*l+3*u-2*f-d,r=2*l-2*u+f+d}return{initCatmullRom:function(l,u,f,d,p){a(u,f,p*(f-l),p*(d-u))},initNonuniformCatmullRom:function(l,u,f,d,p,m,g){let _=(u-l)/p-(f-l)/(p+m)+(f-u)/m,x=(f-u)/m-(d-u)/(m+g)+(d-f)/g;_*=m,x*=m,a(u,f,_,x)},calc:function(l){const u=l*l,f=u*l;return h+n*l+s*u+r*f}}}const xo=new N,Jc=new Zc,Kc=new Zc,jc=new Zc;class Vg extends ni{constructor(n=[],s=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=n,this.closed=s,this.curveType=r,this.tension=a}getPoint(n,s=new N){const r=s,a=this.points,l=a.length,u=(l-(this.closed?0:1))*n;let f=Math.floor(u),d=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let p,m;this.closed||f>0?p=a[(f-1)%l]:(xo.subVectors(a[0],a[1]).add(a[0]),p=xo);const g=a[f%l],_=a[(f+1)%l];if(this.closed||f+2<l?m=a[(f+2)%l]:(xo.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let v=Math.pow(p.distanceToSquared(g),x),b=Math.pow(g.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(m),x);b<1e-4&&(b=1),v<1e-4&&(v=b),M<1e-4&&(M=b),Jc.initNonuniformCatmullRom(p.x,g.x,_.x,m.x,v,b,M),Kc.initNonuniformCatmullRom(p.y,g.y,_.y,m.y,v,b,M),jc.initNonuniformCatmullRom(p.z,g.z,_.z,m.z,v,b,M)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(p.x,g.x,_.x,m.x,this.tension),Kc.initCatmullRom(p.y,g.y,_.y,m.y,this.tension),jc.initCatmullRom(p.z,g.z,_.z,m.z,this.tension));return r.set(Jc.calc(d),Kc.calc(d),jc.calc(d)),r}copy(n){super.copy(n),this.points=[];for(let s=0,r=n.points.length;s<r;s++){const a=n.points[s];this.points.push(a.clone())}return this.closed=n.closed,this.curveType=n.curveType,this.tension=n.tension,this}toJSON(){const n=super.toJSON();n.points=[];for(let s=0,r=this.points.length;s<r;s++){const a=this.points[s];n.points.push(a.toArray())}return n.closed=this.closed,n.curveType=this.curveType,n.tension=this.tension,n}fromJSON(n){super.fromJSON(n),this.points=[];for(let s=0,r=n.points.length;s<r;s++){const a=n.points[s];this.points.push(new N().fromArray(a))}return this.closed=n.closed,this.curveType=n.curveType,this.tension=n.tension,this}}function du(h,n,s,r,a){const l=(r-n)*.5,u=(a-s)*.5,f=h*h,d=h*f;return(2*s-2*r+l+u)*d+(-3*s+3*r-2*l-u)*f+l*h+s}function Wg(h,n){const s=1-h;return s*s*n}function Xg(h,n){return 2*(1-h)*h*n}function qg(h,n){return h*h*n}function ea(h,n,s,r){return Wg(h,n)+Xg(h,s)+qg(h,r)}function Yg(h,n){const s=1-h;return s*s*s*n}function $g(h,n){const s=1-h;return 3*s*s*h*n}function Zg(h,n){return 3*(1-h)*h*h*n}function Jg(h,n){return h*h*h*n}function ta(h,n,s,r,a){return Yg(h,n)+$g(h,s)+Zg(h,r)+Jg(h,a)}class pu extends ni{constructor(n=new ce,s=new ce,r=new ce,a=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=n,this.v1=s,this.v2=r,this.v3=a}getPoint(n,s=new ce){const r=s,a=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ta(n,a.x,l.x,u.x,f.x),ta(n,a.y,l.y,u.y,f.y)),r}copy(n){return super.copy(n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this.v3.copy(n.v3),this}toJSON(){const n=super.toJSON();return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n.v3=this.v3.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this.v3.fromArray(n.v3),this}}class Kg extends ni{constructor(n=new N,s=new N,r=new N,a=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=n,this.v1=s,this.v2=r,this.v3=a}getPoint(n,s=new N){const r=s,a=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ta(n,a.x,l.x,u.x,f.x),ta(n,a.y,l.y,u.y,f.y),ta(n,a.z,l.z,u.z,f.z)),r}copy(n){return super.copy(n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this.v3.copy(n.v3),this}toJSON(){const n=super.toJSON();return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n.v3=this.v3.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this.v3.fromArray(n.v3),this}}class Qc extends ni{constructor(n=new ce,s=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=n,this.v2=s}getPoint(n,s=new ce){const r=s;return n===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(n).add(this.v1)),r}getPointAt(n,s){return this.getPoint(n,s)}getTangent(n,s=new ce){return s.subVectors(this.v2,this.v1).normalize()}getTangentAt(n,s){return this.getTangent(n,s)}copy(n){return super.copy(n),this.v1.copy(n.v1),this.v2.copy(n.v2),this}toJSON(){const n=super.toJSON();return n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this}}class jg extends ni{constructor(n=new N,s=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=n,this.v2=s}getPoint(n,s=new N){const r=s;return n===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(n).add(this.v1)),r}getPointAt(n,s){return this.getPoint(n,s)}getTangent(n,s=new N){return s.subVectors(this.v2,this.v1).normalize()}getTangentAt(n,s){return this.getTangent(n,s)}copy(n){return super.copy(n),this.v1.copy(n.v1),this.v2.copy(n.v2),this}toJSON(){const n=super.toJSON();return n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this}}class mu extends ni{constructor(n=new ce,s=new ce,r=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=n,this.v1=s,this.v2=r}getPoint(n,s=new ce){const r=s,a=this.v0,l=this.v1,u=this.v2;return r.set(ea(n,a.x,l.x,u.x),ea(n,a.y,l.y,u.y)),r}copy(n){return super.copy(n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this}toJSON(){const n=super.toJSON();return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this}}class gu extends ni{constructor(n=new N,s=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=n,this.v1=s,this.v2=r}getPoint(n,s=new N){const r=s,a=this.v0,l=this.v1,u=this.v2;return r.set(ea(n,a.x,l.x,u.x),ea(n,a.y,l.y,u.y),ea(n,a.z,l.z,u.z)),r}copy(n){return super.copy(n),this.v0.copy(n.v0),this.v1.copy(n.v1),this.v2.copy(n.v2),this}toJSON(){const n=super.toJSON();return n.v0=this.v0.toArray(),n.v1=this.v1.toArray(),n.v2=this.v2.toArray(),n}fromJSON(n){return super.fromJSON(n),this.v0.fromArray(n.v0),this.v1.fromArray(n.v1),this.v2.fromArray(n.v2),this}}class _u extends ni{constructor(n=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=n}getPoint(n,s=new ce){const r=s,a=this.points,l=(a.length-1)*n,u=Math.floor(l),f=l-u,d=a[u===0?u:u-1],p=a[u],m=a[u>a.length-2?a.length-1:u+1],g=a[u>a.length-3?a.length-1:u+2];return r.set(du(f,d.x,p.x,m.x,g.x),du(f,d.y,p.y,m.y,g.y)),r}copy(n){super.copy(n),this.points=[];for(let s=0,r=n.points.length;s<r;s++){const a=n.points[s];this.points.push(a.clone())}return this}toJSON(){const n=super.toJSON();n.points=[];for(let s=0,r=this.points.length;s<r;s++){const a=this.points[s];n.points.push(a.toArray())}return n}fromJSON(n){super.fromJSON(n),this.points=[];for(let s=0,r=n.points.length;s<r;s++){const a=n.points[s];this.points.push(new ce().fromArray(a))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:Hg,CatmullRomCurve3:Vg,CubicBezierCurve:pu,CubicBezierCurve3:Kg,EllipseCurve:$c,LineCurve:Qc,LineCurve3:jg,QuadraticBezierCurve:mu,QuadraticBezierCurve3:gu,SplineCurve:_u});class Qg extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(n){this.curves.push(n)}closePath(){const n=this.curves[0].getPoint(0),s=this.curves[this.curves.length-1].getPoint(1);n.equals(s)||this.curves.push(new Qc(s,n))}getPoint(n,s){const r=n*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const u=a[l]-r,f=this.curves[l],d=f.getLength(),p=d===0?0:1-u/d;return f.getPointAt(p,s)}l++}return null}getLength(){const n=this.getCurveLengths();return n[n.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const n=[];let s=0;for(let r=0,a=this.curves.length;r<a;r++)s+=this.curves[r].getLength(),n.push(s);return this.cacheLengths=n,n}getSpacedPoints(n=40){const s=[];for(let r=0;r<=n;r++)s.push(this.getPoint(r/n));return this.autoClose&&s.push(s[0]),s}getPoints(n=12){const s=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const u=l[a],f=u.isEllipseCurve?n*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?n*u.points.length:n,d=u.getPoints(f);for(let p=0;p<d.length;p++){const m=d[p];r&&r.equals(m)||(s.push(m),r=m)}}return this.autoClose&&s.length>1&&!s[s.length-1].equals(s[0])&&s.push(s[0]),s}copy(n){super.copy(n),this.curves=[];for(let s=0,r=n.curves.length;s<r;s++){const a=n.curves[s];this.curves.push(a.clone())}return this.autoClose=n.autoClose,this}toJSON(){const n=super.toJSON();n.autoClose=this.autoClose,n.curves=[];for(let s=0,r=this.curves.length;s<r;s++){const a=this.curves[s];n.curves.push(a.toJSON())}return n}fromJSON(n){super.fromJSON(n),this.autoClose=n.autoClose,this.curves=[];for(let s=0,r=n.curves.length;s<r;s++){const a=n.curves[s];this.curves.push(new el[a.type]().fromJSON(a))}return this}}class yo extends Qg{constructor(n){super(),this.type="Path",this.currentPoint=new ce,n&&this.setFromPoints(n)}setFromPoints(n){this.moveTo(n[0].x,n[0].y);for(let s=1,r=n.length;s<r;s++)this.lineTo(n[s].x,n[s].y);return this}moveTo(n,s){return this.currentPoint.set(n,s),this}lineTo(n,s){const r=new Qc(this.currentPoint.clone(),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}quadraticCurveTo(n,s,r,a){const l=new mu(this.currentPoint.clone(),new ce(n,s),new ce(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(n,s,r,a,l,u){const f=new pu(this.currentPoint.clone(),new ce(n,s),new ce(r,a),new ce(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(n){const s=[this.currentPoint.clone()].concat(n),r=new _u(s);return this.curves.push(r),this.currentPoint.copy(n[n.length-1]),this}arc(n,s,r,a,l,u){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(n+f,s+d,r,a,l,u),this}absarc(n,s,r,a,l,u){return this.absellipse(n,s,r,r,a,l,u),this}ellipse(n,s,r,a,l,u,f,d){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(n+p,s+m,r,a,l,u,f,d),this}absellipse(n,s,r,a,l,u,f,d){const p=new $c(n,s,r,a,l,u,f,d);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(n){return super.copy(n),this.currentPoint.copy(n.currentPoint),this}toJSON(){const n=super.toJSON();return n.currentPoint=this.currentPoint.toArray(),n}fromJSON(n){return super.fromJSON(n),this.currentPoint.fromArray(n.currentPoint),this}}class vo extends at{constructor(n=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],s=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:n,segments:s,phiStart:r,phiLength:a},s=Math.floor(s),a=bt(a,0,Math.PI*2);const l=[],u=[],f=[],d=[],p=[],m=1/s,g=new N,_=new ce,x=new N,v=new N,b=new N;let M=0,y=0;for(let T=0;T<=n.length-1;T++)switch(T){case 0:M=n[T+1].x-n[T].x,y=n[T+1].y-n[T].y,x.x=y*1,x.y=-M,x.z=y*0,b.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case n.length-1:d.push(b.x,b.y,b.z);break;default:M=n[T+1].x-n[T].x,y=n[T+1].y-n[T].y,x.x=y*1,x.y=-M,x.z=y*0,v.copy(x),x.x+=b.x,x.y+=b.y,x.z+=b.z,x.normalize(),d.push(x.x,x.y,x.z),b.copy(v)}for(let T=0;T<=s;T++){const E=r+T*m*a,R=Math.sin(E),P=Math.cos(E);for(let I=0;I<=n.length-1;I++){g.x=n[I].x*R,g.y=n[I].y,g.z=n[I].x*P,u.push(g.x,g.y,g.z),_.x=T/s,_.y=I/(n.length-1),f.push(_.x,_.y);const B=d[3*I+0]*R,G=d[3*I+1],A=d[3*I+0]*P;p.push(B,G,A)}}for(let T=0;T<s;T++)for(let E=0;E<n.length-1;E++){const R=E+T*n.length,P=R,I=R+n.length,B=R+n.length+1,G=R+1;l.push(P,I,G),l.push(B,G,I)}this.setIndex(l),this.setAttribute("position",new Ne(u,3)),this.setAttribute("uv",new Ne(f,2)),this.setAttribute("normal",new Ne(p,3))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new vo(n.points,n.segments,n.phiStart,n.phiLength)}}class tl extends vo{constructor(n=1,s=1,r=4,a=8){const l=new yo;l.absarc(0,-s/2,n,Math.PI*1.5,0),l.absarc(0,s/2,n,0,Math.PI*.5),super(l.getPoints(r),a),this.type="CapsuleGeometry",this.parameters={radius:n,height:s,capSegments:r,radialSegments:a}}static fromJSON(n){return new tl(n.radius,n.length,n.capSegments,n.radialSegments)}}class nl extends at{constructor(n=1,s=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:n,segments:s,thetaStart:r,thetaLength:a},s=Math.max(3,s);const l=[],u=[],f=[],d=[],p=new N,m=new ce;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,_=3;g<=s;g++,_+=3){const x=r+g/s*a;p.x=n*Math.cos(x),p.y=n*Math.sin(x),u.push(p.x,p.y,p.z),f.push(0,0,1),m.x=(u[_]/n+1)/2,m.y=(u[_+1]/n+1)/2,d.push(m.x,m.y)}for(let g=1;g<=s;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new nl(n.radius,n.segments,n.thetaStart,n.thetaLength)}}class na extends at{constructor(n=1,s=1,r=1,a=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:n,radiusBottom:s,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const p=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],_=[],x=[];let v=0;const b=[],M=r/2;let y=0;T(),u===!1&&(n>0&&E(!0),s>0&&E(!1)),this.setIndex(m),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(x,2));function T(){const R=new N,P=new N;let I=0;const B=(s-n)/r;for(let G=0;G<=l;G++){const A=[],O=G/l,$=O*(s-n)+n;for(let te=0;te<=a;te++){const W=te/a,Y=W*d+f,J=Math.sin(Y),le=Math.cos(Y);P.x=$*J,P.y=-O*r+M,P.z=$*le,g.push(P.x,P.y,P.z),R.set(J,B,le).normalize(),_.push(R.x,R.y,R.z),x.push(W,1-O),A.push(v++)}b.push(A)}for(let G=0;G<a;G++)for(let A=0;A<l;A++){const O=b[A][G],$=b[A+1][G],te=b[A+1][G+1],W=b[A][G+1];m.push(O,$,W),m.push($,te,W),I+=6}p.addGroup(y,I,0),y+=I}function E(R){const P=v,I=new ce,B=new N;let G=0;const A=R===!0?n:s,O=R===!0?1:-1;for(let te=1;te<=a;te++)g.push(0,M*O,0),_.push(0,O,0),x.push(.5,.5),v++;const $=v;for(let te=0;te<=a;te++){const Y=te/a*d+f,J=Math.cos(Y),le=Math.sin(Y);B.x=A*le,B.y=M*O,B.z=A*J,g.push(B.x,B.y,B.z),_.push(0,O,0),I.x=J*.5+.5,I.y=le*.5*O+.5,x.push(I.x,I.y),v++}for(let te=0;te<a;te++){const W=P+te,Y=$+te;R===!0?m.push(Y,Y+1,W):m.push(Y+1,Y,W),G+=3}p.addGroup(y,G,R===!0?1:2),y+=G}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new na(n.radiusTop,n.radiusBottom,n.height,n.radialSegments,n.heightSegments,n.openEnded,n.thetaStart,n.thetaLength)}}class il extends na{constructor(n=1,s=1,r=32,a=1,l=!1,u=0,f=Math.PI*2){super(0,n,s,r,a,l,u,f),this.type="ConeGeometry",this.parameters={radius:n,height:s,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(n){return new il(n.radius,n.height,n.radialSegments,n.heightSegments,n.openEnded,n.thetaStart,n.thetaLength)}}class ds extends at{constructor(n=[],s=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:n,indices:s,radius:r,detail:a};const l=[],u=[];f(a),p(r),m(),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(l.slice(),3)),this.setAttribute("uv",new Ne(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const E=new N,R=new N,P=new N;for(let I=0;I<s.length;I+=3)x(s[I+0],E),x(s[I+1],R),x(s[I+2],P),d(E,R,P,T)}function d(T,E,R,P){const I=P+1,B=[];for(let G=0;G<=I;G++){B[G]=[];const A=T.clone().lerp(R,G/I),O=E.clone().lerp(R,G/I),$=I-G;for(let te=0;te<=$;te++)te===0&&G===I?B[G][te]=A:B[G][te]=A.clone().lerp(O,te/$)}for(let G=0;G<I;G++)for(let A=0;A<2*(I-G)-1;A++){const O=Math.floor(A/2);A%2===0?(_(B[G][O+1]),_(B[G+1][O]),_(B[G][O])):(_(B[G][O+1]),_(B[G+1][O+1]),_(B[G+1][O]))}}function p(T){const E=new N;for(let R=0;R<l.length;R+=3)E.x=l[R+0],E.y=l[R+1],E.z=l[R+2],E.normalize().multiplyScalar(T),l[R+0]=E.x,l[R+1]=E.y,l[R+2]=E.z}function m(){const T=new N;for(let E=0;E<l.length;E+=3){T.x=l[E+0],T.y=l[E+1],T.z=l[E+2];const R=M(T)/2/Math.PI+.5,P=y(T)/Math.PI+.5;u.push(R,1-P)}v(),g()}function g(){for(let T=0;T<u.length;T+=6){const E=u[T+0],R=u[T+2],P=u[T+4],I=Math.max(E,R,P),B=Math.min(E,R,P);I>.9&&B<.1&&(E<.2&&(u[T+0]+=1),R<.2&&(u[T+2]+=1),P<.2&&(u[T+4]+=1))}}function _(T){l.push(T.x,T.y,T.z)}function x(T,E){const R=T*3;E.x=n[R+0],E.y=n[R+1],E.z=n[R+2]}function v(){const T=new N,E=new N,R=new N,P=new N,I=new ce,B=new ce,G=new ce;for(let A=0,O=0;A<l.length;A+=9,O+=6){T.set(l[A+0],l[A+1],l[A+2]),E.set(l[A+3],l[A+4],l[A+5]),R.set(l[A+6],l[A+7],l[A+8]),I.set(u[O+0],u[O+1]),B.set(u[O+2],u[O+3]),G.set(u[O+4],u[O+5]),P.copy(T).add(E).add(R).divideScalar(3);const $=M(P);b(I,O+0,T,$),b(B,O+2,E,$),b(G,O+4,R,$)}}function b(T,E,R,P){P<0&&T.x===1&&(u[E]=T.x-1),R.x===0&&R.z===0&&(u[E]=P/2/Math.PI+.5)}function M(T){return Math.atan2(T.z,-T.x)}function y(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new ds(n.vertices,n.indices,n.radius,n.details)}}class sl extends ds{constructor(n=1,s=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,n,s),this.type="DodecahedronGeometry",this.parameters={radius:n,detail:s}}static fromJSON(n){return new sl(n.radius,n.detail)}}const Mo=new N,So=new N,rl=new N,bo=new Sn;class e_ extends at{constructor(n=null,s=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:n,thresholdAngle:s},n!==null){const a=Math.pow(10,4),l=Math.cos(di*s),u=n.getIndex(),f=n.getAttribute("position"),d=u?u.count:f.count,p=[0,0,0],m=["a","b","c"],g=new Array(3),_={},x=[];for(let v=0;v<d;v+=3){u?(p[0]=u.getX(v),p[1]=u.getX(v+1),p[2]=u.getX(v+2)):(p[0]=v,p[1]=v+1,p[2]=v+2);const{a:b,b:M,c:y}=bo;if(b.fromBufferAttribute(f,p[0]),M.fromBufferAttribute(f,p[1]),y.fromBufferAttribute(f,p[2]),bo.getNormal(rl),g[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,g[1]=`${Math.round(M.x*a)},${Math.round(M.y*a)},${Math.round(M.z*a)}`,g[2]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let T=0;T<3;T++){const E=(T+1)%3,R=g[T],P=g[E],I=bo[m[T]],B=bo[m[E]],G=`${R}_${P}`,A=`${P}_${R}`;A in _&&_[A]?(rl.dot(_[A].normal)<=l&&(x.push(I.x,I.y,I.z),x.push(B.x,B.y,B.z)),_[A]=null):G in _||(_[G]={index0:p[T],index1:p[E],normal:rl.clone()})}}for(const v in _)if(_[v]){const{index0:b,index1:M}=_[v];Mo.fromBufferAttribute(f,b),So.fromBufferAttribute(f,M),x.push(Mo.x,Mo.y,Mo.z),x.push(So.x,So.y,So.z)}this.setAttribute("position",new Ne(x,3))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}}class fr extends yo{constructor(n){super(n),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(n){const s=[];for(let r=0,a=this.holes.length;r<a;r++)s[r]=this.holes[r].getPoints(n);return s}extractPoints(n){return{shape:this.getPoints(n),holes:this.getPointsHoles(n)}}copy(n){super.copy(n),this.holes=[];for(let s=0,r=n.holes.length;s<r;s++){const a=n.holes[s];this.holes.push(a.clone())}return this}toJSON(){const n=super.toJSON();n.uuid=this.uuid,n.holes=[];for(let s=0,r=this.holes.length;s<r;s++){const a=this.holes[s];n.holes.push(a.toJSON())}return n}fromJSON(n){super.fromJSON(n),this.uuid=n.uuid,this.holes=[];for(let s=0,r=n.holes.length;s<r;s++){const a=n.holes[s];this.holes.push(new yo().fromJSON(a))}return this}}const t_={triangulate:function(h,n,s=2){const r=n&&n.length,a=r?n[0]*s:h.length;let l=xu(h,0,a,s,!0);const u=[];if(!l||l.next===l.prev)return u;let f,d,p,m,g,_,x;if(r&&(l=a_(h,n,l,s)),h.length>80*s){f=p=h[0],d=m=h[1];for(let v=s;v<a;v+=s)g=h[v],_=h[v+1],g<f&&(f=g),_<d&&(d=_),g>p&&(p=g),_>m&&(m=_);x=Math.max(p-f,m-d),x=x!==0?32767/x:0}return ia(l,u,s,f,d,x,0),u}};function xu(h,n,s,r,a){let l,u;if(a===__(h,n,s,r)>0)for(l=n;l<s;l+=r)u=Mu(l,h[l],h[l+1],u);else for(l=s-r;l>=n;l-=r)u=Mu(l,h[l],h[l+1],u);return u&&Eo(u,u.next)&&(ra(u),u=u.next),u}function ps(h,n){if(!h)return h;n||(n=h);let s=h,r;do if(r=!1,!s.steiner&&(Eo(s,s.next)||At(s.prev,s,s.next)===0)){if(ra(s),s=n=s.prev,s===s.next)break;r=!0}else s=s.next;while(r||s!==n);return n}function ia(h,n,s,r,a,l,u){if(!h)return;!u&&l&&u_(h,r,a,l);let f=h,d,p;for(;h.prev!==h.next;){if(d=h.prev,p=h.next,l?i_(h,r,a,l):n_(h)){n.push(d.i/s|0),n.push(h.i/s|0),n.push(p.i/s|0),ra(h),h=p.next,f=p.next;continue}if(h=p,h===f){u?u===1?(h=s_(ps(h),n,s),ia(h,n,s,r,a,l,2)):u===2&&r_(h,n,s,r,a,l):ia(ps(h),n,s,r,a,l,1);break}}}function n_(h){const n=h.prev,s=h,r=h.next;if(At(n,s,r)>=0)return!1;const a=n.x,l=s.x,u=r.x,f=n.y,d=s.y,p=r.y,m=a<l?a<u?a:u:l<u?l:u,g=f<d?f<p?f:p:d<p?d:p,_=a>l?a>u?a:u:l>u?l:u,x=f>d?f>p?f:p:d>p?d:p;let v=r.next;for(;v!==n;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=x&&dr(a,f,l,d,u,p,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function i_(h,n,s,r){const a=h.prev,l=h,u=h.next;if(At(a,l,u)>=0)return!1;const f=a.x,d=l.x,p=u.x,m=a.y,g=l.y,_=u.y,x=f<d?f<p?f:p:d<p?d:p,v=m<g?m<_?m:_:g<_?g:_,b=f>d?f>p?f:p:d>p?d:p,M=m>g?m>_?m:_:g>_?g:_,y=al(x,v,n,s,r),T=al(b,M,n,s,r);let E=h.prevZ,R=h.nextZ;for(;E&&E.z>=y&&R&&R.z<=T;){if(E.x>=x&&E.x<=b&&E.y>=v&&E.y<=M&&E!==a&&E!==u&&dr(f,m,d,g,p,_,E.x,E.y)&&At(E.prev,E,E.next)>=0||(E=E.prevZ,R.x>=x&&R.x<=b&&R.y>=v&&R.y<=M&&R!==a&&R!==u&&dr(f,m,d,g,p,_,R.x,R.y)&&At(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;E&&E.z>=y;){if(E.x>=x&&E.x<=b&&E.y>=v&&E.y<=M&&E!==a&&E!==u&&dr(f,m,d,g,p,_,E.x,E.y)&&At(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;R&&R.z<=T;){if(R.x>=x&&R.x<=b&&R.y>=v&&R.y<=M&&R!==a&&R!==u&&dr(f,m,d,g,p,_,R.x,R.y)&&At(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function s_(h,n,s){let r=h;do{const a=r.prev,l=r.next.next;!Eo(a,l)&&yu(a,r,r.next,l)&&sa(a,l)&&sa(l,a)&&(n.push(a.i/s|0),n.push(r.i/s|0),n.push(l.i/s|0),ra(r),ra(r.next),r=h=l),r=r.next}while(r!==h);return ps(r)}function r_(h,n,s,r,a,l){let u=h;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&p_(u,f)){let d=vu(u,f);u=ps(u,u.next),d=ps(d,d.next),ia(u,n,s,r,a,l,0),ia(d,n,s,r,a,l,0);return}f=f.next}u=u.next}while(u!==h)}function a_(h,n,s,r){const a=[];let l,u,f,d,p;for(l=0,u=n.length;l<u;l++)f=n[l]*r,d=l<u-1?n[l+1]*r:h.length,p=xu(h,f,d,r,!1),p===p.next&&(p.steiner=!0),a.push(d_(p));for(a.sort(o_),l=0;l<a.length;l++)s=c_(a[l],s);return s}function o_(h,n){return h.x-n.x}function c_(h,n){const s=l_(h,n);if(!s)return n;const r=vu(s,h);return ps(r,r.next),ps(s,s.next)}function l_(h,n){let s=n,r=-1/0,a;const l=h.x,u=h.y;do{if(u<=s.y&&u>=s.next.y&&s.next.y!==s.y){const _=s.x+(u-s.y)*(s.next.x-s.x)/(s.next.y-s.y);if(_<=l&&_>r&&(r=_,a=s.x<s.next.x?s:s.next,_===l))return a}s=s.next}while(s!==n);if(!a)return null;const f=a,d=a.x,p=a.y;let m=1/0,g;s=a;do l>=s.x&&s.x>=d&&l!==s.x&&dr(u<p?l:r,u,d,p,u<p?r:l,u,s.x,s.y)&&(g=Math.abs(u-s.y)/(l-s.x),sa(s,h)&&(g<m||g===m&&(s.x>a.x||s.x===a.x&&h_(a,s)))&&(a=s,m=g)),s=s.next;while(s!==f);return a}function h_(h,n){return At(h.prev,h,n.prev)<0&&At(n.next,h,h.next)<0}function u_(h,n,s,r){let a=h;do a.z===0&&(a.z=al(a.x,a.y,n,s,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==h);a.prevZ.nextZ=null,a.prevZ=null,f_(a)}function f_(h){let n,s,r,a,l,u,f,d,p=1;do{for(s=h,h=null,l=null,u=0;s;){for(u++,r=s,f=0,n=0;n<p&&(f++,r=r.nextZ,!!r);n++);for(d=p;f>0||d>0&&r;)f!==0&&(d===0||!r||s.z<=r.z)?(a=s,s=s.nextZ,f--):(a=r,r=r.nextZ,d--),l?l.nextZ=a:h=a,a.prevZ=l,l=a;s=r}l.nextZ=null,p*=2}while(u>1);return h}function al(h,n,s,r,a){return h=(h-s)*a|0,n=(n-r)*a|0,h=(h|h<<8)&16711935,h=(h|h<<4)&252645135,h=(h|h<<2)&858993459,h=(h|h<<1)&1431655765,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,h|n<<1}function d_(h){let n=h,s=h;do(n.x<s.x||n.x===s.x&&n.y<s.y)&&(s=n),n=n.next;while(n!==h);return s}function dr(h,n,s,r,a,l,u,f){return(a-u)*(n-f)>=(h-u)*(l-f)&&(h-u)*(r-f)>=(s-u)*(n-f)&&(s-u)*(l-f)>=(a-u)*(r-f)}function p_(h,n){return h.next.i!==n.i&&h.prev.i!==n.i&&!m_(h,n)&&(sa(h,n)&&sa(n,h)&&g_(h,n)&&(At(h.prev,h,n.prev)||At(h,n.prev,n))||Eo(h,n)&&At(h.prev,h,h.next)>0&&At(n.prev,n,n.next)>0)}function At(h,n,s){return(n.y-h.y)*(s.x-n.x)-(n.x-h.x)*(s.y-n.y)}function Eo(h,n){return h.x===n.x&&h.y===n.y}function yu(h,n,s,r){const a=To(At(h,n,s)),l=To(At(h,n,r)),u=To(At(s,r,h)),f=To(At(s,r,n));return!!(a!==l&&u!==f||a===0&&wo(h,s,n)||l===0&&wo(h,r,n)||u===0&&wo(s,h,r)||f===0&&wo(s,n,r))}function wo(h,n,s){return n.x<=Math.max(h.x,s.x)&&n.x>=Math.min(h.x,s.x)&&n.y<=Math.max(h.y,s.y)&&n.y>=Math.min(h.y,s.y)}function To(h){return h>0?1:h<0?-1:0}function m_(h,n){let s=h;do{if(s.i!==h.i&&s.next.i!==h.i&&s.i!==n.i&&s.next.i!==n.i&&yu(s,s.next,h,n))return!0;s=s.next}while(s!==h);return!1}function sa(h,n){return At(h.prev,h,h.next)<0?At(h,n,h.next)>=0&&At(h,h.prev,n)>=0:At(h,n,h.prev)<0||At(h,h.next,n)<0}function g_(h,n){let s=h,r=!1;const a=(h.x+n.x)/2,l=(h.y+n.y)/2;do s.y>l!=s.next.y>l&&s.next.y!==s.y&&a<(s.next.x-s.x)*(l-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==h);return r}function vu(h,n){const s=new ol(h.i,h.x,h.y),r=new ol(n.i,n.x,n.y),a=h.next,l=n.prev;return h.next=n,n.prev=h,s.next=a,a.prev=s,r.next=s,s.prev=r,l.next=r,r.prev=l,r}function Mu(h,n,s,r){const a=new ol(h,n,s);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function ra(h){h.next.prev=h.prev,h.prev.next=h.next,h.prevZ&&(h.prevZ.nextZ=h.nextZ),h.nextZ&&(h.nextZ.prevZ=h.prevZ)}function ol(h,n,s){this.i=h,this.x=n,this.y=s,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function __(h,n,s,r){let a=0;for(let l=n,u=s-r;l<s;l+=r)a+=(h[u]-h[l])*(h[l+1]+h[u+1]),u=l;return a}class Ei{static area(n){const s=n.length;let r=0;for(let a=s-1,l=0;l<s;a=l++)r+=n[a].x*n[l].y-n[l].x*n[a].y;return r*.5}static isClockWise(n){return Ei.area(n)<0}static triangulateShape(n,s){const r=[],a=[],l=[];Su(n),bu(r,n);let u=n.length;s.forEach(Su);for(let d=0;d<s.length;d++)a.push(u),u+=s[d].length,bu(r,s[d]);const f=t_.triangulate(r,a);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function Su(h){const n=h.length;n>2&&h[n-1].equals(h[0])&&h.pop()}function bu(h,n){for(let s=0;s<n.length;s++)h.push(n[s].x),h.push(n[s].y)}class cl extends at{constructor(n=new fr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),s={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:n,options:s},n=Array.isArray(n)?n:[n];const r=this,a=[],l=[];for(let f=0,d=n.length;f<d;f++){const p=n[f];u(p)}this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(l,2)),this.computeVertexNormals();function u(f){const d=[],p=s.curveSegments!==void 0?s.curveSegments:12,m=s.steps!==void 0?s.steps:1,g=s.depth!==void 0?s.depth:1;let _=s.bevelEnabled!==void 0?s.bevelEnabled:!0,x=s.bevelThickness!==void 0?s.bevelThickness:.2,v=s.bevelSize!==void 0?s.bevelSize:x-.1,b=s.bevelOffset!==void 0?s.bevelOffset:0,M=s.bevelSegments!==void 0?s.bevelSegments:3;const y=s.extrudePath,T=s.UVGenerator!==void 0?s.UVGenerator:x_;let E,R=!1,P,I,B,G;y&&(E=y.getSpacedPoints(m),R=!0,_=!1,P=y.computeFrenetFrames(m,!1),I=new N,B=new N,G=new N),_||(M=0,x=0,v=0,b=0);const A=f.extractPoints(p);let O=A.shape;const $=A.holes;if(!Ei.isClockWise(O)){O=O.reverse();for(let ue=0,ne=$.length;ue<ne;ue++){const fe=$[ue];Ei.isClockWise(fe)&&($[ue]=fe.reverse())}}const W=Ei.triangulateShape(O,$),Y=O;for(let ue=0,ne=$.length;ue<ne;ue++){const fe=$[ue];O=O.concat(fe)}function J(ue,ne,fe){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(ne,fe)}const le=O.length,ae=W.length;function re(ue,ne,fe){let Ue,Me,We;const Xe=ue.x-ne.x,Ge=ue.y-ne.y,rt=fe.x-ue.x,mt=fe.y-ue.y,F=Xe*Xe+Ge*Ge,L=Xe*mt-Ge*rt;if(Math.abs(L)>Number.EPSILON){const Z=Math.sqrt(F),pe=Math.sqrt(rt*rt+mt*mt),ge=ne.x-Ge/Z,Se=ne.y+Xe/Z,$e=fe.x-mt/pe,Le=fe.y+rt/pe,ee=(($e-ge)*mt-(Le-Se)*rt)/(Xe*mt-Ge*rt);Ue=ge+Xe*ee-ue.x,Me=Se+Ge*ee-ue.y;const Oe=Ue*Ue+Me*Me;if(Oe<=2)return new ce(Ue,Me);We=Math.sqrt(Oe/2)}else{let Z=!1;Xe>Number.EPSILON?rt>Number.EPSILON&&(Z=!0):Xe<-Number.EPSILON?rt<-Number.EPSILON&&(Z=!0):Math.sign(Ge)===Math.sign(mt)&&(Z=!0),Z?(Ue=-Ge,Me=Xe,We=Math.sqrt(F)):(Ue=Xe,Me=Ge,We=Math.sqrt(F/2))}return new ce(Ue/We,Me/We)}const he=[];for(let ue=0,ne=Y.length,fe=ne-1,Ue=ue+1;ue<ne;ue++,fe++,Ue++)fe===ne&&(fe=0),Ue===ne&&(Ue=0),he[ue]=re(Y[ue],Y[fe],Y[Ue]);const de=[];let Pe,be=he.concat();for(let ue=0,ne=$.length;ue<ne;ue++){const fe=$[ue];Pe=[];for(let Ue=0,Me=fe.length,We=Me-1,Xe=Ue+1;Ue<Me;Ue++,We++,Xe++)We===Me&&(We=0),Xe===Me&&(Xe=0),Pe[Ue]=re(fe[Ue],fe[We],fe[Xe]);de.push(Pe),be=be.concat(Pe)}for(let ue=0;ue<M;ue++){const ne=ue/M,fe=x*Math.cos(ne*Math.PI/2),Ue=v*Math.sin(ne*Math.PI/2)+b;for(let Me=0,We=Y.length;Me<We;Me++){const Xe=J(Y[Me],he[Me],Ue);k(Xe.x,Xe.y,-fe)}for(let Me=0,We=$.length;Me<We;Me++){const Xe=$[Me];Pe=de[Me];for(let Ge=0,rt=Xe.length;Ge<rt;Ge++){const mt=J(Xe[Ge],Pe[Ge],Ue);k(mt.x,mt.y,-fe)}}}const K=v+b;for(let ue=0;ue<le;ue++){const ne=_?J(O[ue],be[ue],K):O[ue];R?(B.copy(P.normals[0]).multiplyScalar(ne.x),I.copy(P.binormals[0]).multiplyScalar(ne.y),G.copy(E[0]).add(B).add(I),k(G.x,G.y,G.z)):k(ne.x,ne.y,0)}for(let ue=1;ue<=m;ue++)for(let ne=0;ne<le;ne++){const fe=_?J(O[ne],be[ne],K):O[ne];R?(B.copy(P.normals[ue]).multiplyScalar(fe.x),I.copy(P.binormals[ue]).multiplyScalar(fe.y),G.copy(E[ue]).add(B).add(I),k(G.x,G.y,G.z)):k(fe.x,fe.y,g/m*ue)}for(let ue=M-1;ue>=0;ue--){const ne=ue/M,fe=x*Math.cos(ne*Math.PI/2),Ue=v*Math.sin(ne*Math.PI/2)+b;for(let Me=0,We=Y.length;Me<We;Me++){const Xe=J(Y[Me],he[Me],Ue);k(Xe.x,Xe.y,g+fe)}for(let Me=0,We=$.length;Me<We;Me++){const Xe=$[Me];Pe=de[Me];for(let Ge=0,rt=Xe.length;Ge<rt;Ge++){const mt=J(Xe[Ge],Pe[Ge],Ue);R?k(mt.x,mt.y+E[m-1].y,E[m-1].x+fe):k(mt.x,mt.y,g+fe)}}}oe(),ve();function oe(){const ue=a.length/3;if(_){let ne=0,fe=le*ne;for(let Ue=0;Ue<ae;Ue++){const Me=W[Ue];Ze(Me[2]+fe,Me[1]+fe,Me[0]+fe)}ne=m+M*2,fe=le*ne;for(let Ue=0;Ue<ae;Ue++){const Me=W[Ue];Ze(Me[0]+fe,Me[1]+fe,Me[2]+fe)}}else{for(let ne=0;ne<ae;ne++){const fe=W[ne];Ze(fe[2],fe[1],fe[0])}for(let ne=0;ne<ae;ne++){const fe=W[ne];Ze(fe[0]+le*m,fe[1]+le*m,fe[2]+le*m)}}r.addGroup(ue,a.length/3-ue,0)}function ve(){const ue=a.length/3;let ne=0;Ee(Y,ne),ne+=Y.length;for(let fe=0,Ue=$.length;fe<Ue;fe++){const Me=$[fe];Ee(Me,ne),ne+=Me.length}r.addGroup(ue,a.length/3-ue,1)}function Ee(ue,ne){let fe=ue.length;for(;--fe>=0;){const Ue=fe;let Me=fe-1;Me<0&&(Me=ue.length-1);for(let We=0,Xe=m+M*2;We<Xe;We++){const Ge=le*We,rt=le*(We+1),mt=ne+Ue+Ge,F=ne+Me+Ge,L=ne+Me+rt,Z=ne+Ue+rt;Je(mt,F,L,Z)}}}function k(ue,ne,fe){d.push(ue),d.push(ne),d.push(fe)}function Ze(ue,ne,fe){_e(ue),_e(ne),_e(fe);const Ue=a.length/3,Me=T.generateTopUV(r,a,Ue-3,Ue-2,Ue-1);Fe(Me[0]),Fe(Me[1]),Fe(Me[2])}function Je(ue,ne,fe,Ue){_e(ue),_e(ne),_e(Ue),_e(ne),_e(fe),_e(Ue);const Me=a.length/3,We=T.generateSideWallUV(r,a,Me-6,Me-3,Me-2,Me-1);Fe(We[0]),Fe(We[1]),Fe(We[3]),Fe(We[1]),Fe(We[2]),Fe(We[3])}function _e(ue){a.push(d[ue*3+0]),a.push(d[ue*3+1]),a.push(d[ue*3+2])}function Fe(ue){l.push(ue.x),l.push(ue.y)}}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}toJSON(){const n=super.toJSON(),s=this.parameters.shapes,r=this.parameters.options;return y_(s,r,n)}static fromJSON(n,s){const r=[];for(let l=0,u=n.shapes.length;l<u;l++){const f=s[n.shapes[l]];r.push(f)}const a=n.options.extrudePath;return a!==void 0&&(n.options.extrudePath=new el[a.type]().fromJSON(a)),new cl(r,n.options)}}const x_={generateTopUV:function(h,n,s,r,a){const l=n[s*3],u=n[s*3+1],f=n[r*3],d=n[r*3+1],p=n[a*3],m=n[a*3+1];return[new ce(l,u),new ce(f,d),new ce(p,m)]},generateSideWallUV:function(h,n,s,r,a,l){const u=n[s*3],f=n[s*3+1],d=n[s*3+2],p=n[r*3],m=n[r*3+1],g=n[r*3+2],_=n[a*3],x=n[a*3+1],v=n[a*3+2],b=n[l*3],M=n[l*3+1],y=n[l*3+2];return Math.abs(f-m)<Math.abs(u-p)?[new ce(u,1-d),new ce(p,1-g),new ce(_,1-v),new ce(b,1-y)]:[new ce(f,1-d),new ce(m,1-g),new ce(x,1-v),new ce(M,1-y)]}};function y_(h,n,s){if(s.shapes=[],Array.isArray(h))for(let r=0,a=h.length;r<a;r++){const l=h[r];s.shapes.push(l.uuid)}else s.shapes.push(h.uuid);return s.options=Object.assign({},n),n.extrudePath!==void 0&&(s.options.extrudePath=n.extrudePath.toJSON()),s}class ll extends ds{constructor(n=1,s=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,n,s),this.type="IcosahedronGeometry",this.parameters={radius:n,detail:s}}static fromJSON(n){return new ll(n.radius,n.detail)}}class Ao extends ds{constructor(n=1,s=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,n,s),this.type="OctahedronGeometry",this.parameters={radius:n,detail:s}}static fromJSON(n){return new Ao(n.radius,n.detail)}}class hl extends at{constructor(n=.5,s=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:n,outerRadius:s,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const f=[],d=[],p=[],m=[];let g=n;const _=(s-n)/a,x=new N,v=new ce;for(let b=0;b<=a;b++){for(let M=0;M<=r;M++){const y=l+M/r*u;x.x=g*Math.cos(y),x.y=g*Math.sin(y),d.push(x.x,x.y,x.z),p.push(0,0,1),v.x=(x.x/s+1)/2,v.y=(x.y/s+1)/2,m.push(v.x,v.y)}g+=_}for(let b=0;b<a;b++){const M=b*(r+1);for(let y=0;y<r;y++){const T=y+M,E=T,R=T+r+1,P=T+r+2,I=T+1;f.push(E,R,I),f.push(R,P,I)}}this.setIndex(f),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(p,3)),this.setAttribute("uv",new Ne(m,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new hl(n.innerRadius,n.outerRadius,n.thetaSegments,n.phiSegments,n.thetaStart,n.thetaLength)}}class ul extends at{constructor(n=new fr([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),s=12){super(),this.type="ShapeGeometry",this.parameters={shapes:n,curveSegments:s};const r=[],a=[],l=[],u=[];let f=0,d=0;if(Array.isArray(n)===!1)p(n);else for(let m=0;m<n.length;m++)p(n[m]),this.addGroup(f,d,m),f+=d,d=0;this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(u,2));function p(m){const g=a.length/3,_=m.extractPoints(s);let x=_.shape;const v=_.holes;Ei.isClockWise(x)===!1&&(x=x.reverse());for(let M=0,y=v.length;M<y;M++){const T=v[M];Ei.isClockWise(T)===!0&&(v[M]=T.reverse())}const b=Ei.triangulateShape(x,v);for(let M=0,y=v.length;M<y;M++){const T=v[M];x=x.concat(T)}for(let M=0,y=x.length;M<y;M++){const T=x[M];a.push(T.x,T.y,0),l.push(0,0,1),u.push(T.x,T.y)}for(let M=0,y=b.length;M<y;M++){const T=b[M],E=T[0]+g,R=T[1]+g,P=T[2]+g;r.push(E,R,P),d+=3}}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}toJSON(){const n=super.toJSON(),s=this.parameters.shapes;return v_(s,n)}static fromJSON(n,s){const r=[];for(let a=0,l=n.shapes.length;a<l;a++){const u=s[n.shapes[a]];r.push(u)}return new ul(r,n.curveSegments)}}function v_(h,n){if(n.shapes=[],Array.isArray(h))for(let s=0,r=h.length;s<r;s++){const a=h[s];n.shapes.push(a.uuid)}else n.shapes.push(h.uuid);return n}class Ro extends at{constructor(n=1,s=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:n,widthSegments:s,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},s=Math.max(3,Math.floor(s)),r=Math.max(2,Math.floor(r));const d=Math.min(u+f,Math.PI);let p=0;const m=[],g=new N,_=new N,x=[],v=[],b=[],M=[];for(let y=0;y<=r;y++){const T=[],E=y/r;let R=0;y===0&&u===0?R=.5/s:y===r&&d===Math.PI&&(R=-.5/s);for(let P=0;P<=s;P++){const I=P/s;g.x=-n*Math.cos(a+I*l)*Math.sin(u+E*f),g.y=n*Math.cos(u+E*f),g.z=n*Math.sin(a+I*l)*Math.sin(u+E*f),v.push(g.x,g.y,g.z),_.copy(g).normalize(),b.push(_.x,_.y,_.z),M.push(I+R,1-E),T.push(p++)}m.push(T)}for(let y=0;y<r;y++)for(let T=0;T<s;T++){const E=m[y][T+1],R=m[y][T],P=m[y+1][T],I=m[y+1][T+1];(y!==0||u>0)&&x.push(E,R,I),(y!==r-1||d<Math.PI)&&x.push(R,P,I)}this.setIndex(x),this.setAttribute("position",new Ne(v,3)),this.setAttribute("normal",new Ne(b,3)),this.setAttribute("uv",new Ne(M,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Ro(n.radius,n.widthSegments,n.heightSegments,n.phiStart,n.phiLength,n.thetaStart,n.thetaLength)}}class fl extends ds{constructor(n=1,s=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,n,s),this.type="TetrahedronGeometry",this.parameters={radius:n,detail:s}}static fromJSON(n){return new fl(n.radius,n.detail)}}class dl extends at{constructor(n=1,s=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:n,tube:s,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],d=[],p=[],m=new N,g=new N,_=new N;for(let x=0;x<=r;x++)for(let v=0;v<=a;v++){const b=v/a*l,M=x/r*Math.PI*2;g.x=(n+s*Math.cos(M))*Math.cos(b),g.y=(n+s*Math.cos(M))*Math.sin(b),g.z=s*Math.sin(M),f.push(g.x,g.y,g.z),m.x=n*Math.cos(b),m.y=n*Math.sin(b),_.subVectors(g,m).normalize(),d.push(_.x,_.y,_.z),p.push(v/a),p.push(x/r)}for(let x=1;x<=r;x++)for(let v=1;v<=a;v++){const b=(a+1)*x+v-1,M=(a+1)*(x-1)+v-1,y=(a+1)*(x-1)+v,T=(a+1)*x+v;u.push(b,M,T),u.push(M,y,T)}this.setIndex(u),this.setAttribute("position",new Ne(f,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(p,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new dl(n.radius,n.tube,n.radialSegments,n.tubularSegments,n.arc)}}class pl extends at{constructor(n=1,s=.4,r=64,a=8,l=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:n,tube:s,tubularSegments:r,radialSegments:a,p:l,q:u},r=Math.floor(r),a=Math.floor(a);const f=[],d=[],p=[],m=[],g=new N,_=new N,x=new N,v=new N,b=new N,M=new N,y=new N;for(let E=0;E<=r;++E){const R=E/r*l*Math.PI*2;T(R,l,u,n,x),T(R+.01,l,u,n,v),M.subVectors(v,x),y.addVectors(v,x),b.crossVectors(M,y),y.crossVectors(b,M),b.normalize(),y.normalize();for(let P=0;P<=a;++P){const I=P/a*Math.PI*2,B=-s*Math.cos(I),G=s*Math.sin(I);g.x=x.x+(B*y.x+G*b.x),g.y=x.y+(B*y.y+G*b.y),g.z=x.z+(B*y.z+G*b.z),d.push(g.x,g.y,g.z),_.subVectors(g,x).normalize(),p.push(_.x,_.y,_.z),m.push(E/r),m.push(P/a)}}for(let E=1;E<=r;E++)for(let R=1;R<=a;R++){const P=(a+1)*(E-1)+(R-1),I=(a+1)*E+(R-1),B=(a+1)*E+R,G=(a+1)*(E-1)+R;f.push(P,I,G),f.push(I,B,G)}this.setIndex(f),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(p,3)),this.setAttribute("uv",new Ne(m,2));function T(E,R,P,I,B){const G=Math.cos(E),A=Math.sin(E),O=P/R*E,$=Math.cos(O);B.x=I*(2+$)*.5*G,B.y=I*(2+$)*A*.5,B.z=I*Math.sin(O)*.5}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new pl(n.radius,n.tube,n.tubularSegments,n.radialSegments,n.p,n.q)}}class ml extends at{constructor(n=new gu(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),s=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:n,tubularSegments:s,radius:r,radialSegments:a,closed:l};const u=n.computeFrenetFrames(s,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new N,d=new N,p=new ce;let m=new N;const g=[],_=[],x=[],v=[];b(),this.setIndex(v),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(x,2));function b(){for(let E=0;E<s;E++)M(E);M(l===!1?s:0),T(),y()}function M(E){m=n.getPointAt(E/s,m);const R=u.normals[E],P=u.binormals[E];for(let I=0;I<=a;I++){const B=I/a*Math.PI*2,G=Math.sin(B),A=-Math.cos(B);d.x=A*R.x+G*P.x,d.y=A*R.y+G*P.y,d.z=A*R.z+G*P.z,d.normalize(),_.push(d.x,d.y,d.z),f.x=m.x+r*d.x,f.y=m.y+r*d.y,f.z=m.z+r*d.z,g.push(f.x,f.y,f.z)}}function y(){for(let E=1;E<=s;E++)for(let R=1;R<=a;R++){const P=(a+1)*(E-1)+(R-1),I=(a+1)*E+(R-1),B=(a+1)*E+R,G=(a+1)*(E-1)+R;v.push(P,I,G),v.push(I,B,G)}}function T(){for(let E=0;E<=s;E++)for(let R=0;R<=a;R++)p.x=E/s,p.y=R/a,x.push(p.x,p.y)}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}toJSON(){const n=super.toJSON();return n.path=this.parameters.path.toJSON(),n}static fromJSON(n){return new ml(new el[n.path.type]().fromJSON(n.path),n.tubularSegments,n.radius,n.radialSegments,n.closed)}}class M_ extends at{constructor(n=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:n},n!==null){const s=[],r=new Set,a=new N,l=new N;if(n.index!==null){const u=n.attributes.position,f=n.index;let d=n.groups;d.length===0&&(d=[{start:0,count:f.count,materialIndex:0}]);for(let p=0,m=d.length;p<m;++p){const g=d[p],_=g.start,x=g.count;for(let v=_,b=_+x;v<b;v+=3)for(let M=0;M<3;M++){const y=f.getX(v+M),T=f.getX(v+(M+1)%3);a.fromBufferAttribute(u,y),l.fromBufferAttribute(u,T),Eu(a,l,r)===!0&&(s.push(a.x,a.y,a.z),s.push(l.x,l.y,l.z))}}}else{const u=n.attributes.position;for(let f=0,d=u.count/3;f<d;f++)for(let p=0;p<3;p++){const m=3*f+p,g=3*f+(p+1)%3;a.fromBufferAttribute(u,m),l.fromBufferAttribute(u,g),Eu(a,l,r)===!0&&(s.push(a.x,a.y,a.z),s.push(l.x,l.y,l.z))}}this.setAttribute("position",new Ne(s,3))}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}}function Eu(h,n,s){const r=`${h.x},${h.y},${h.z}-${n.x},${n.y},${n.z}`,a=`${n.x},${n.y},${n.z}-${h.x},${h.y},${h.z}`;return s.has(r)===!0||s.has(a)===!0?!1:(s.add(r),s.add(a),!0)}var wu=Object.freeze({__proto__:null,BoxGeometry:cs,CapsuleGeometry:tl,CircleGeometry:nl,ConeGeometry:il,CylinderGeometry:na,DodecahedronGeometry:sl,EdgesGeometry:e_,ExtrudeGeometry:cl,IcosahedronGeometry:ll,LatheGeometry:vo,OctahedronGeometry:Ao,PlaneGeometry:io,PolyhedronGeometry:ds,RingGeometry:hl,ShapeGeometry:ul,SphereGeometry:Ro,TetrahedronGeometry:fl,TorusGeometry:dl,TorusKnotGeometry:pl,TubeGeometry:ml,WireframeGeometry:M_});class S_ extends null{constructor(n){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.fog=n.fog,this}}class b_ extends null{constructor(n){super(n),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class E_ extends null{constructor(n){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class w_ extends null{constructor(n){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(s){this.ior=(1+.4*s)/(1-.4*s)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(n)}get sheen(){return this._sheen}set sheen(n){this._sheen>0!=n>0&&this.version++,this._sheen=n}get clearcoat(){return this._clearcoat}set clearcoat(n){this._clearcoat>0!=n>0&&this.version++,this._clearcoat=n}get iridescence(){return this._iridescence}set iridescence(n){this._iridescence>0!=n>0&&this.version++,this._iridescence=n}get transmission(){return this._transmission}set transmission(n){this._transmission>0!=n>0&&this.version++,this._transmission=n}copy(n){return super.copy(n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.ior=n.ior,this.iridescence=n.iridescence,this.iridescenceMap=n.iridescenceMap,this.iridescenceIOR=n.iridescenceIOR,this.iridescenceThicknessRange=[...n.iridescenceThicknessRange],this.iridescenceThicknessMap=n.iridescenceThicknessMap,this.sheen=n.sheen,this.sheenColor.copy(n.sheenColor),this.sheenColorMap=n.sheenColorMap,this.sheenRoughness=n.sheenRoughness,this.sheenRoughnessMap=n.sheenRoughnessMap,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this.thickness=n.thickness,this.thicknessMap=n.thicknessMap,this.attenuationDistance=n.attenuationDistance,this.attenuationColor.copy(n.attenuationColor),this.specularIntensity=n.specularIntensity,this.specularIntensityMap=n.specularIntensityMap,this.specularColor.copy(n.specularColor),this.specularColorMap=n.specularColorMap,this}}class T_ extends null{constructor(n){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.specular.copy(n.specular),this.shininess=n.shininess,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class A_ extends null{constructor(n){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.gradientMap=n.gradientMap,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}class R_ extends null{constructor(n){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(n)}copy(n){return super.copy(n),this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.flatShading=n.flatShading,this}}class C_ extends null{constructor(n){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ts,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class P_ extends null{constructor(n){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bn,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={MATCAP:""},this.color.copy(n.color),this.matcap=n.matcap,this.map=n.map,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.alphaMap=n.alphaMap,this.flatShading=n.flatShading,this.fog=n.fog,this}}class L_ extends null{constructor(n){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(n)}copy(n){return super.copy(n),this.scale=n.scale,this.dashSize=n.dashSize,this.gapSize=n.gapSize,this}}function In(h,n,s){return gl(h)?new h.constructor(h.subarray(n,s!==void 0?s:h.length)):h.slice(n,s)}function ms(h,n,s){return!h||!s&&h.constructor===n?h:typeof n.BYTES_PER_ELEMENT=="number"?new n(h):Array.prototype.slice.call(h)}function gl(h){return ArrayBuffer.isView(h)&&!(h instanceof DataView)}function Tu(h){function n(a,l){return h[a]-h[l]}const s=h.length,r=new Array(s);for(let a=0;a!==s;++a)r[a]=a;return r.sort(n),r}function _l(h,n,s){const r=h.length,a=new h.constructor(r);for(let l=0,u=0;u!==r;++l){const f=s[l]*n;for(let d=0;d!==n;++d)a[u++]=h[f+d]}return a}function xl(h,n,s,r){let a=1,l=h[0];for(;l!==void 0&&l[r]===void 0;)l=h[a++];if(l===void 0)return;let u=l[r];if(u!==void 0)if(Array.isArray(u))do u=l[r],u!==void 0&&(n.push(l.time),s.push.apply(s,u)),l=h[a++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[r],u!==void 0&&(n.push(l.time),u.toArray(s,s.length)),l=h[a++];while(l!==void 0);else do u=l[r],u!==void 0&&(n.push(l.time),s.push(u)),l=h[a++];while(l!==void 0)}function I_(h,n,s,r,a=30){const l=h.clone();l.name=n;const u=[];for(let d=0;d<l.tracks.length;++d){const p=l.tracks[d],m=p.getValueSize(),g=[],_=[];for(let x=0;x<p.times.length;++x){const v=p.times[x]*a;if(!(v<s||v>=r)){g.push(p.times[x]);for(let b=0;b<m;++b)_.push(p.values[x*m+b])}}g.length!==0&&(p.times=ms(g,p.times.constructor),p.values=ms(_,p.values.constructor),u.push(p))}l.tracks=u;let f=1/0;for(let d=0;d<l.tracks.length;++d)f>l.tracks[d].times[0]&&(f=l.tracks[d].times[0]);for(let d=0;d<l.tracks.length;++d)l.tracks[d].shift(-1*f);return l.resetDuration(),l}function U_(h,n=0,s=h,r=30){r<=0&&(r=30);const a=s.tracks.length,l=n/r;for(let u=0;u<a;++u){const f=s.tracks[u],d=f.ValueTypeName;if(d==="bool"||d==="string")continue;const p=h.tracks.find(function(y){return y.name===f.name&&y.ValueTypeName===d});if(p===void 0)continue;let m=0;const g=f.getValueSize();f.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);let _=0;const x=p.getValueSize();p.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(_=x/3);const v=f.times.length-1;let b;if(l<=f.times[0]){const y=m,T=g-m;b=In(f.values,y,T)}else if(l>=f.times[v]){const y=v*g+m,T=y+g-m;b=In(f.values,y,T)}else{const y=f.createInterpolant(),T=m,E=g-m;y.evaluate(l),b=In(y.resultBuffer,T,E)}d==="quaternion"&&new vn().fromArray(b).normalize().conjugate().toArray(b);const M=p.times.length;for(let y=0;y<M;++y){const T=y*x+_;if(d==="quaternion")vn.multiplyQuaternionsFlat(p.values,T,b,0,p.values,T);else{const E=x-_*2;for(let R=0;R<E;++R)p.values[T+R]-=b[R]}}}return h.blendMode=lc,h}const xx={arraySlice:In,convertArray:ms,isTypedArray:gl,getKeyframeOrder:Tu,sortedArray:_l,flattenJSON:xl,subclip:I_,makeClipAdditive:U_};class Co{constructor(n,s,r,a){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new s.constructor(r),this.sampleValues=s,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(n){const s=this.parameterPositions;let r=this._cachedIndex,a=s[r],l=s[r-1];e:{t:{let u;n:{i:if(!(n<a)){for(let f=r+2;;){if(a===void 0){if(n<l)break i;return r=s.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===f)break;if(l=a,a=s[++r],n<a)break t}u=s.length;break n}if(!(n>=l)){const f=s[1];n<f&&(r=2,l=f);for(let d=r-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===d)break;if(a=l,l=s[--r-1],n>=l)break t}u=r,r=0;break n}break e}for(;r<u;){const f=r+u>>>1;n<s[f]?u=f:r=f+1}if(a=s[r],l=s[r-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return r=s.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,l,a)}return this.interpolate_(r,l,n,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=n*a;for(let u=0;u!==a;++u)s[u]=r[l+u];return s}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class D_ extends Co{constructor(n,s,r,a){super(n,s,r,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ui,endingEnd:ui}}intervalChanged_(n,s,r){const a=this.parameterPositions;let l=n-2,u=n+1,f=a[l],d=a[u];if(f===void 0)switch(this.getSettings_().endingStart){case Li:l=n,f=2*s-r;break;case Is:l=a.length-2,f=s+a[l]-a[l+1];break;default:l=n,f=r}if(d===void 0)switch(this.getSettings_().endingEnd){case Li:u=n,d=2*r-s;break;case Is:u=1,d=r+a[1]-a[0];break;default:u=n-1,d=s}const p=(r-s)*.5,m=this.valueSize;this._weightPrev=p/(s-f),this._weightNext=p/(d-r),this._offsetPrev=l*m,this._offsetNext=u*m}interpolate_(n,s,r,a){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=n*f,p=d-f,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,x=this._weightNext,v=(r-s)/(a-s),b=v*v,M=b*v,y=-_*M+2*_*b-_*v,T=(1+_)*M+(-1.5-2*_)*b+(-.5+_)*v+1,E=(-1-x)*M+(1.5+x)*b+.5*v,R=x*M-x*b;for(let P=0;P!==f;++P)l[P]=y*u[m+P]+T*u[p+P]+E*u[d+P]+R*u[g+P];return l}}class Au extends Co{constructor(n,s,r,a){super(n,s,r,a)}interpolate_(n,s,r,a){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=n*f,p=d-f,m=(r-s)/(a-s),g=1-m;for(let _=0;_!==f;++_)l[_]=u[p+_]*g+u[d+_]*m;return l}}class N_ extends Co{constructor(n,s,r,a){super(n,s,r,a)}interpolate_(n){return this.copySampleValue_(n-1)}}class ii{constructor(n,s,r,a){if(n===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(s===void 0||s.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+n);this.name=n,this.times=ms(s,this.TimeBufferType),this.values=ms(r,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(n){const s=n.constructor;let r;if(s.toJSON!==this.toJSON)r=s.toJSON(n);else{r={name:n.name,times:ms(n.times,Array),values:ms(n.values,Array)};const a=n.getInterpolation();a!==n.DefaultInterpolation&&(r.interpolation=a)}return r.type=n.ValueTypeName,r}InterpolantFactoryMethodDiscrete(n){return new N_(this.times,this.values,this.getValueSize(),n)}InterpolantFactoryMethodLinear(n){return new Au(this.times,this.values,this.getValueSize(),n)}InterpolantFactoryMethodSmooth(n){return new D_(this.times,this.values,this.getValueSize(),n)}setInterpolation(n){let s;switch(n){case ji:s=this.InterpolantFactoryMethodDiscrete;break;case Qi:s=this.InterpolantFactoryMethodLinear;break;case Cn:s=this.InterpolantFactoryMethodSmooth;break}if(s===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(n!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=s,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ji;case this.InterpolantFactoryMethodLinear:return Qi;case this.InterpolantFactoryMethodSmooth:return Cn}}getValueSize(){return this.values.length/this.times.length}shift(n){if(n!==0){const s=this.times;for(let r=0,a=s.length;r!==a;++r)s[r]+=n}return this}scale(n){if(n!==1){const s=this.times;for(let r=0,a=s.length;r!==a;++r)s[r]*=n}return this}trim(n,s){const r=this.times,a=r.length;let l=0,u=a-1;for(;l!==a&&r[l]<n;)++l;for(;u!==-1&&r[u]>s;)--u;if(++u,l!==0||u!==a){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=In(r,l,u),this.values=In(this.values,l*f,u*f)}return this}validate(){let n=!0;const s=this.getValueSize();s-Math.floor(s)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),n=!1);const r=this.times,a=this.values,l=r.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),n=!1);let u=null;for(let f=0;f!==l;f++){const d=r[f];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,d),n=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,d,u),n=!1;break}u=d}if(a!==void 0&&gl(a))for(let f=0,d=a.length;f!==d;++f){const p=a[f];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,p),n=!1;break}}return n}optimize(){const n=In(this.times),s=In(this.values),r=this.getValueSize(),a=this.getInterpolation()===Cn,l=n.length-1;let u=1;for(let f=1;f<l;++f){let d=!1;const p=n[f],m=n[f+1];if(p!==m&&(f!==1||p!==n[0]))if(a)d=!0;else{const g=f*r,_=g-r,x=g+r;for(let v=0;v!==r;++v){const b=s[g+v];if(b!==s[_+v]||b!==s[x+v]){d=!0;break}}}if(d){if(f!==u){n[u]=n[f];const g=f*r,_=u*r;for(let x=0;x!==r;++x)s[_+x]=s[g+x]}++u}}if(l>0){n[u]=n[l];for(let f=l*r,d=u*r,p=0;p!==r;++p)s[d+p]=s[f+p];++u}return u!==n.length?(this.times=In(n,0,u),this.values=In(s,0,u*r)):(this.times=n,this.values=s),this}clone(){const n=In(this.times,0),s=In(this.values,0),r=this.constructor,a=new r(this.name,n,s);return a.createInterpolant=this.createInterpolant,a}}ii.prototype.TimeBufferType=Float32Array,ii.prototype.ValueBufferType=Float32Array,ii.prototype.DefaultInterpolation=Qi;class pr extends ii{}pr.prototype.ValueTypeName="bool",pr.prototype.ValueBufferType=Array,pr.prototype.DefaultInterpolation=ji,pr.prototype.InterpolantFactoryMethodLinear=void 0,pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ru extends ii{}Ru.prototype.ValueTypeName="color";class Po extends ii{}Po.prototype.ValueTypeName="number";class O_ extends Co{constructor(n,s,r,a){super(n,s,r,a)}interpolate_(n,s,r,a){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(r-s)/(a-s);let p=n*f;for(let m=p+f;p!==m;p+=4)vn.slerpFlat(l,0,u,p-f,u,p,d);return l}}class aa extends ii{InterpolantFactoryMethodLinear(n){return new O_(this.times,this.values,this.getValueSize(),n)}}aa.prototype.ValueTypeName="quaternion",aa.prototype.DefaultInterpolation=Qi,aa.prototype.InterpolantFactoryMethodSmooth=void 0;class mr extends ii{}mr.prototype.ValueTypeName="string",mr.prototype.ValueBufferType=Array,mr.prototype.DefaultInterpolation=ji,mr.prototype.InterpolantFactoryMethodLinear=void 0,mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends ii{}Lo.prototype.ValueTypeName="vector";class Io{constructor(n,s=-1,r,a=Fn){this.name=n,this.tracks=r,this.duration=s,this.blendMode=a,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(n){const s=[],r=n.tracks,a=1/(n.fps||1);for(let u=0,f=r.length;u!==f;++u)s.push(B_(r[u]).scale(a));const l=new this(n.name,n.duration,s,n.blendMode);return l.uuid=n.uuid,l}static toJSON(n){const s=[],r=n.tracks,a={name:n.name,duration:n.duration,tracks:s,uuid:n.uuid,blendMode:n.blendMode};for(let l=0,u=r.length;l!==u;++l)s.push(ii.toJSON(r[l]));return a}static CreateFromMorphTargetSequence(n,s,r,a){const l=s.length,u=[];for(let f=0;f<l;f++){let d=[],p=[];d.push((f+l-1)%l,f,(f+1)%l),p.push(0,1,0);const m=Tu(d);d=_l(d,1,m),p=_l(p,1,m),!a&&d[0]===0&&(d.push(l),p.push(p[0])),u.push(new Po(".morphTargetInfluences["+s[f].name+"]",d,p).scale(1/r))}return new this(n,-1,u)}static findByName(n,s){let r=n;if(!Array.isArray(n)){const a=n;r=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<r.length;a++)if(r[a].name===s)return r[a];return null}static CreateClipsFromMorphTargetSequences(n,s,r){const a={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,d=n.length;f<d;f++){const p=n[f],m=p.name.match(l);if(m&&m.length>1){const g=m[1];let _=a[g];_||(a[g]=_=[]),_.push(p)}}const u=[];for(const f in a)u.push(this.CreateFromMorphTargetSequence(f,a[f],s,r));return u}static parseAnimation(n,s){if(!n)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(g,_,x,v,b){if(x.length!==0){const M=[],y=[];xl(x,M,y,v),M.length!==0&&b.push(new g(_,M,y))}},a=[],l=n.name||"default",u=n.fps||30,f=n.blendMode;let d=n.length||-1;const p=n.hierarchy||[];for(let g=0;g<p.length;g++){const _=p[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const x={};let v;for(v=0;v<_.length;v++)if(_[v].morphTargets)for(let b=0;b<_[v].morphTargets.length;b++)x[_[v].morphTargets[b]]=-1;for(const b in x){const M=[],y=[];for(let T=0;T!==_[v].morphTargets.length;++T){const E=_[v];M.push(E.time),y.push(E.morphTarget===b?1:0)}a.push(new Po(".morphTargetInfluence["+b+"]",M,y))}d=x.length*u}else{const x=".bones["+s[g].name+"]";r(Lo,x+".position",_,"pos",a),r(aa,x+".quaternion",_,"rot",a),r(Lo,x+".scale",_,"scl",a)}}return a.length===0?null:new this(l,d,a,f)}resetDuration(){const n=this.tracks;let s=0;for(let r=0,a=n.length;r!==a;++r){const l=this.tracks[r];s=Math.max(s,l.times[l.times.length-1])}return this.duration=s,this}trim(){for(let n=0;n<this.tracks.length;n++)this.tracks[n].trim(0,this.duration);return this}validate(){let n=!0;for(let s=0;s<this.tracks.length;s++)n=n&&this.tracks[s].validate();return n}optimize(){for(let n=0;n<this.tracks.length;n++)this.tracks[n].optimize();return this}clone(){const n=[];for(let s=0;s<this.tracks.length;s++)n.push(this.tracks[s].clone());return new this.constructor(this.name,this.duration,n,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function F_(h){switch(h.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return Lo;case"color":return Ru;case"quaternion":return aa;case"bool":case"boolean":return pr;case"string":return mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+h)}function B_(h){if(h.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const n=F_(h.type);if(h.times===void 0){const s=[],r=[];xl(h.keys,s,r,"value"),h.times=s,h.values=r}return n.parse!==void 0?n.parse(h):new n(h.name,h.times,h.values,h.interpolation)}const gr={enabled:!1,files:{},add:function(h,n){this.enabled!==!1&&(this.files[h]=n)},get:function(h){if(this.enabled!==!1)return this.files[h]},remove:function(h){delete this.files[h]},clear:function(){this.files={}}};class Cu{constructor(n,s,r){const a=this;let l=!1,u=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=n,this.onProgress=s,this.onError=r,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,a.onProgress!==void 0&&a.onProgress(m,u,f),u===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return p.push(m,g),this},this.removeHandler=function(m){const g=p.indexOf(m);return g!==-1&&p.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=p.length;g<_;g+=2){const x=p[g],v=p[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return v}return null}}}const z_=new Cu;class yx{constructor(n){this.manager=n!==void 0?n:z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(n,s){const r=this;return new Promise(function(a,l){r.load(n,a,s,l)})}parse(){}setCrossOrigin(n){return this.crossOrigin=n,this}setWithCredentials(n){return this.withCredentials=n,this}setPath(n){return this.path=n,this}setResourcePath(n){return this.resourcePath=n,this}setRequestHeader(n){return this.requestHeader=n,this}}const wi={};class G_ extends Error{constructor(n,s){super(n),this.response=s}}class zi extends null{constructor(n){super(n)}load(n,s,r,a){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const l=gr.get(n);if(l!==void 0)return this.manager.itemStart(n),setTimeout(()=>{s&&s(l),this.manager.itemEnd(n)},0),l;if(wi[n]!==void 0){wi[n].push({onLoad:s,onProgress:r,onError:a});return}wi[n]=[],wi[n].push({onLoad:s,onProgress:r,onError:a});const u=new Request(n,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||p.body===void 0||p.body.getReader===void 0)return p;const m=wi[n],g=p.body.getReader(),_=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),x=_?parseInt(_):0,v=x!==0;let b=0;const M=new ReadableStream({start(y){T();function T(){g.read().then(({done:E,value:R})=>{if(E)y.close();else{b+=R.byteLength;const P=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:x});for(let I=0,B=m.length;I<B;I++){const G=m[I];G.onProgress&&G.onProgress(P)}y.enqueue(R),T()}})}}});return new Response(M)}else throw new G_(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return p.json();default:if(f===void 0)return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return p.arrayBuffer().then(v=>x.decode(v))}}}).then(p=>{gr.add(n,p);const m=wi[n];delete wi[n];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onLoad&&x.onLoad(p)}}).catch(p=>{const m=wi[n];if(m===void 0)throw this.manager.itemError(n),p;delete wi[n];for(let g=0,_=m.length;g<_;g++){const x=m[g];x.onError&&x.onError(p)}this.manager.itemError(n)}).finally(()=>{this.manager.itemEnd(n)}),this.manager.itemStart(n)}setResponseType(n){return this.responseType=n,this}setMimeType(n){return this.mimeType=n,this}}class vx extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=new zi(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(n,function(f){try{s(l.parse(JSON.parse(f)))}catch(d){a?a(d):console.error(d),l.manager.itemError(n)}},r,a)}parse(n){const s=[];for(let r=0;r<n.length;r++){const a=Io.parse(n[r]);s.push(a)}return s}}class Mx extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=[],f=new kg,d=new zi(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(l.withCredentials);let p=0;function m(g){d.load(n[g],function(_){const x=l.parse(_,!0);u[g]={width:x.width,height:x.height,format:x.format,mipmaps:x.mipmaps},p+=1,p===6&&(x.mipmapCount===1&&(f.minFilter=St),f.image=u,f.format=x.format,f.needsUpdate=!0,s&&s(f))},r,a)}if(Array.isArray(n))for(let g=0,_=n.length;g<_;++g)m(g);else d.load(n,function(g){const _=l.parse(g,!0);if(_.isCubemap){const x=_.mipmaps.length/_.mipmapCount;for(let v=0;v<x;v++){u[v]={mipmaps:[]};for(let b=0;b<_.mipmapCount;b++)u[v].mipmaps.push(_.mipmaps[v*_.mipmapCount+b]),u[v].format=_.format,u[v].width=_.width,u[v].height=_.height}f.image=u}else f.image.width=_.width,f.image.height=_.height,f.mipmaps=_.mipmaps;_.mipmapCount===1&&(f.minFilter=St),f.format=_.format,f.needsUpdate=!0,s&&s(f)},r,a);return f}}class Uo extends null{constructor(n){super(n)}load(n,s,r,a){this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const l=this,u=gr.get(n);if(u!==void 0)return l.manager.itemStart(n),setTimeout(function(){s&&s(u),l.manager.itemEnd(n)},0),u;const f=Fr("img");function d(){m(),gr.add(n,this),s&&s(this),l.manager.itemEnd(n)}function p(g){m(),a&&a(g),l.manager.itemError(n),l.manager.itemEnd(n)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),n.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(n),f.src=n,f}}class Sx extends null{constructor(n){super(n)}load(n,s,r,a){const l=new to,u=new Uo(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let f=0;function d(p){u.load(n[p],function(m){l.images[p]=m,f++,f===6&&(l.needsUpdate=!0,s&&s(l))},void 0,a)}for(let p=0;p<n.length;++p)d(p);return l}}class bx extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=new Jr,f=new zi(this.manager);return f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(l.withCredentials),f.load(n,function(d){const p=l.parse(d);p&&(p.image!==void 0?u.image=p.image:p.data!==void 0&&(u.image.width=p.width,u.image.height=p.height,u.image.data=p.data),u.wrapS=p.wrapS!==void 0?p.wrapS:kt,u.wrapT=p.wrapT!==void 0?p.wrapT:kt,u.magFilter=p.magFilter!==void 0?p.magFilter:St,u.minFilter=p.minFilter!==void 0?p.minFilter:St,u.anisotropy=p.anisotropy!==void 0?p.anisotropy:1,p.colorSpace!==void 0?u.colorSpace=p.colorSpace:p.encoding!==void 0&&(u.encoding=p.encoding),p.flipY!==void 0&&(u.flipY=p.flipY),p.format!==void 0&&(u.format=p.format),p.type!==void 0&&(u.type=p.type),p.mipmaps!==void 0&&(u.mipmaps=p.mipmaps,u.minFilter=Yn),p.mipmapCount===1&&(u.minFilter=St),p.generateMipmaps!==void 0&&(u.generateMipmaps=p.generateMipmaps),u.needsUpdate=!0,s&&s(u,p))},r,a),u}}class Ex extends null{constructor(n){super(n)}load(n,s,r,a){const l=new cn,u=new Uo(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(n,function(f){l.image=f,l.needsUpdate=!0,s!==void 0&&s(l)},r,a),l}}class wx extends null{constructor(n,s=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(n),this.intensity=s}dispose(){}copy(n,s){return super.copy(n,s),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const s=super.toJSON(n);return s.object.color=this.color.getHex(),s.object.intensity=this.intensity,this.groundColor!==void 0&&(s.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(s.object.distance=this.distance),this.angle!==void 0&&(s.object.angle=this.angle),this.decay!==void 0&&(s.object.decay=this.decay),this.penumbra!==void 0&&(s.object.penumbra=this.penumbra),this.shadow!==void 0&&(s.object.shadow=this.shadow.toJSON()),s}}class k_ extends null{constructor(n,s,r){super(n,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(s)}copy(n,s){return super.copy(n,s),this.groundColor.copy(n.groundColor),this}}const yl=new tt,Pu=new N,Lu=new N;class Tx{constructor(n){this.camera=n,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const s=this.camera,r=this.matrix;Pu.setFromMatrixPosition(n.matrixWorld),s.position.copy(Pu),Lu.setFromMatrixPosition(n.target.matrixWorld),s.lookAt(Lu),s.updateMatrixWorld(),yl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yl)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.bias=n.bias,this.radius=n.radius,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}class H_ extends null{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(n){const s=this.camera,r=Ii*2*n.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=n.distance||s.far;(r!==s.fov||a!==s.aspect||l!==s.far)&&(s.fov=r,s.aspect=a,s.far=l,s.updateProjectionMatrix()),super.updateMatrices(n)}copy(n){return super.copy(n),this.focus=n.focus,this}}class V_ extends null{constructor(n,s,r=0,a=Math.PI/3,l=0,u=2){super(n,s),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new H_}get power(){return this.intensity*Math.PI}set power(n){this.intensity=n/Math.PI}dispose(){this.shadow.dispose()}copy(n,s){return super.copy(n,s),this.distance=n.distance,this.angle=n.angle,this.penumbra=n.penumbra,this.decay=n.decay,this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}}const Iu=new tt,oa=new N,vl=new N;class W_ extends null{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(n,s=0){const r=this.camera,a=this.matrix,l=n.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),oa.setFromMatrixPosition(n.matrixWorld),r.position.copy(oa),vl.copy(r.position),vl.add(this._cubeDirections[s]),r.up.copy(this._cubeUps[s]),r.lookAt(vl),r.updateMatrixWorld(),a.makeTranslation(-oa.x,-oa.y,-oa.z),Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu)}}class X_ extends null{constructor(n,s,r=0,a=2){super(n,s),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(n){this.intensity=n/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(n,s){return super.copy(n,s),this.distance=n.distance,this.decay=n.decay,this.shadow=n.shadow.clone(),this}}class q_ extends null{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y_ extends null{constructor(n,s){super(n,s),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(n){return super.copy(n),this.target=n.target.clone(),this.shadow=n.shadow.clone(),this}}class $_ extends null{constructor(n,s){super(n,s),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z_ extends null{constructor(n,s,r=10,a=10){super(n,s),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=r,this.height=a}get power(){return this.intensity*this.width*this.height*Math.PI}set power(n){this.intensity=n/(this.width*this.height*Math.PI)}copy(n){return super.copy(n),this.width=n.width,this.height=n.height,this}toJSON(n){const s=super.toJSON(n);return s.object.width=this.width,s.object.height=this.height,s}}class J_{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let n=0;n<9;n++)this.coefficients.push(new N)}set(n){for(let s=0;s<9;s++)this.coefficients[s].copy(n[s]);return this}zero(){for(let n=0;n<9;n++)this.coefficients[n].set(0,0,0);return this}getAt(n,s){const r=n.x,a=n.y,l=n.z,u=this.coefficients;return s.copy(u[0]).multiplyScalar(.282095),s.addScaledVector(u[1],.488603*a),s.addScaledVector(u[2],.488603*l),s.addScaledVector(u[3],.488603*r),s.addScaledVector(u[4],1.092548*(r*a)),s.addScaledVector(u[5],1.092548*(a*l)),s.addScaledVector(u[6],.315392*(3*l*l-1)),s.addScaledVector(u[7],1.092548*(r*l)),s.addScaledVector(u[8],.546274*(r*r-a*a)),s}getIrradianceAt(n,s){const r=n.x,a=n.y,l=n.z,u=this.coefficients;return s.copy(u[0]).multiplyScalar(.886227),s.addScaledVector(u[1],2*.511664*a),s.addScaledVector(u[2],2*.511664*l),s.addScaledVector(u[3],2*.511664*r),s.addScaledVector(u[4],2*.429043*r*a),s.addScaledVector(u[5],2*.429043*a*l),s.addScaledVector(u[6],.743125*l*l-.247708),s.addScaledVector(u[7],2*.429043*r*l),s.addScaledVector(u[8],.429043*(r*r-a*a)),s}add(n){for(let s=0;s<9;s++)this.coefficients[s].add(n.coefficients[s]);return this}addScaledSH(n,s){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(n.coefficients[r],s);return this}scale(n){for(let s=0;s<9;s++)this.coefficients[s].multiplyScalar(n);return this}lerp(n,s){for(let r=0;r<9;r++)this.coefficients[r].lerp(n.coefficients[r],s);return this}equals(n){for(let s=0;s<9;s++)if(!this.coefficients[s].equals(n.coefficients[s]))return!1;return!0}copy(n){return this.set(n.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(n,s=0){const r=this.coefficients;for(let a=0;a<9;a++)r[a].fromArray(n,s+a*3);return this}toArray(n=[],s=0){const r=this.coefficients;for(let a=0;a<9;a++)r[a].toArray(n,s+a*3);return n}static getBasisAt(n,s){const r=n.x,a=n.y,l=n.z;s[0]=.282095,s[1]=.488603*a,s[2]=.488603*l,s[3]=.488603*r,s[4]=1.092548*r*a,s[5]=1.092548*a*l,s[6]=.315392*(3*l*l-1),s[7]=1.092548*r*l,s[8]=.546274*(r*r-a*a)}}class K_ extends null{constructor(n=new J_,s=1){super(void 0,s),this.isLightProbe=!0,this.sh=n}copy(n){return super.copy(n),this.sh.copy(n.sh),this}fromJSON(n){return this.intensity=n.intensity,this.sh.fromArray(n.sh),this}toJSON(n){const s=super.toJSON(n);return s.object.sh=this.sh.toArray(),s}}class Ml extends null{constructor(n){super(n),this.textures={}}load(n,s,r,a){const l=this,u=new zi(l.manager);u.setPath(l.path),u.setRequestHeader(l.requestHeader),u.setWithCredentials(l.withCredentials),u.load(n,function(f){try{s(l.parse(JSON.parse(f)))}catch(d){a?a(d):console.error(d),l.manager.itemError(n)}},r,a)}parse(n){const s=this.textures;function r(l){return s[l]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",l),s[l]}const a=Ml.createMaterialFromType(n.type);if(n.uuid!==void 0&&(a.uuid=n.uuid),n.name!==void 0&&(a.name=n.name),n.color!==void 0&&a.color!==void 0&&a.color.setHex(n.color),n.roughness!==void 0&&(a.roughness=n.roughness),n.metalness!==void 0&&(a.metalness=n.metalness),n.sheen!==void 0&&(a.sheen=n.sheen),n.sheenColor!==void 0&&(a.sheenColor=new Ce().setHex(n.sheenColor)),n.sheenRoughness!==void 0&&(a.sheenRoughness=n.sheenRoughness),n.emissive!==void 0&&a.emissive!==void 0&&a.emissive.setHex(n.emissive),n.specular!==void 0&&a.specular!==void 0&&a.specular.setHex(n.specular),n.specularIntensity!==void 0&&(a.specularIntensity=n.specularIntensity),n.specularColor!==void 0&&a.specularColor!==void 0&&a.specularColor.setHex(n.specularColor),n.shininess!==void 0&&(a.shininess=n.shininess),n.clearcoat!==void 0&&(a.clearcoat=n.clearcoat),n.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=n.clearcoatRoughness),n.iridescence!==void 0&&(a.iridescence=n.iridescence),n.iridescenceIOR!==void 0&&(a.iridescenceIOR=n.iridescenceIOR),n.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=n.iridescenceThicknessRange),n.transmission!==void 0&&(a.transmission=n.transmission),n.thickness!==void 0&&(a.thickness=n.thickness),n.attenuationDistance!==void 0&&(a.attenuationDistance=n.attenuationDistance),n.attenuationColor!==void 0&&a.attenuationColor!==void 0&&a.attenuationColor.setHex(n.attenuationColor),n.fog!==void 0&&(a.fog=n.fog),n.flatShading!==void 0&&(a.flatShading=n.flatShading),n.blending!==void 0&&(a.blending=n.blending),n.combine!==void 0&&(a.combine=n.combine),n.side!==void 0&&(a.side=n.side),n.shadowSide!==void 0&&(a.shadowSide=n.shadowSide),n.opacity!==void 0&&(a.opacity=n.opacity),n.transparent!==void 0&&(a.transparent=n.transparent),n.alphaTest!==void 0&&(a.alphaTest=n.alphaTest),n.depthTest!==void 0&&(a.depthTest=n.depthTest),n.depthWrite!==void 0&&(a.depthWrite=n.depthWrite),n.colorWrite!==void 0&&(a.colorWrite=n.colorWrite),n.stencilWrite!==void 0&&(a.stencilWrite=n.stencilWrite),n.stencilWriteMask!==void 0&&(a.stencilWriteMask=n.stencilWriteMask),n.stencilFunc!==void 0&&(a.stencilFunc=n.stencilFunc),n.stencilRef!==void 0&&(a.stencilRef=n.stencilRef),n.stencilFuncMask!==void 0&&(a.stencilFuncMask=n.stencilFuncMask),n.stencilFail!==void 0&&(a.stencilFail=n.stencilFail),n.stencilZFail!==void 0&&(a.stencilZFail=n.stencilZFail),n.stencilZPass!==void 0&&(a.stencilZPass=n.stencilZPass),n.wireframe!==void 0&&(a.wireframe=n.wireframe),n.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=n.wireframeLinewidth),n.wireframeLinecap!==void 0&&(a.wireframeLinecap=n.wireframeLinecap),n.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=n.wireframeLinejoin),n.rotation!==void 0&&(a.rotation=n.rotation),n.linewidth!==1&&(a.linewidth=n.linewidth),n.dashSize!==void 0&&(a.dashSize=n.dashSize),n.gapSize!==void 0&&(a.gapSize=n.gapSize),n.scale!==void 0&&(a.scale=n.scale),n.polygonOffset!==void 0&&(a.polygonOffset=n.polygonOffset),n.polygonOffsetFactor!==void 0&&(a.polygonOffsetFactor=n.polygonOffsetFactor),n.polygonOffsetUnits!==void 0&&(a.polygonOffsetUnits=n.polygonOffsetUnits),n.dithering!==void 0&&(a.dithering=n.dithering),n.alphaToCoverage!==void 0&&(a.alphaToCoverage=n.alphaToCoverage),n.premultipliedAlpha!==void 0&&(a.premultipliedAlpha=n.premultipliedAlpha),n.forceSinglePass!==void 0&&(a.forceSinglePass=n.forceSinglePass),n.visible!==void 0&&(a.visible=n.visible),n.toneMapped!==void 0&&(a.toneMapped=n.toneMapped),n.userData!==void 0&&(a.userData=n.userData),n.vertexColors!==void 0&&(typeof n.vertexColors=="number"?a.vertexColors=n.vertexColors>0:a.vertexColors=n.vertexColors),n.uniforms!==void 0)for(const l in n.uniforms){const u=n.uniforms[l];switch(a.uniforms[l]={},u.type){case"t":a.uniforms[l].value=r(u.value);break;case"c":a.uniforms[l].value=new Ce().setHex(u.value);break;case"v2":a.uniforms[l].value=new ce().fromArray(u.value);break;case"v3":a.uniforms[l].value=new N().fromArray(u.value);break;case"v4":a.uniforms[l].value=new gt().fromArray(u.value);break;case"m3":a.uniforms[l].value=new lt().fromArray(u.value);break;case"m4":a.uniforms[l].value=new tt().fromArray(u.value);break;default:a.uniforms[l].value=u.value}}if(n.defines!==void 0&&(a.defines=n.defines),n.vertexShader!==void 0&&(a.vertexShader=n.vertexShader),n.fragmentShader!==void 0&&(a.fragmentShader=n.fragmentShader),n.glslVersion!==void 0&&(a.glslVersion=n.glslVersion),n.extensions!==void 0)for(const l in n.extensions)a.extensions[l]=n.extensions[l];if(n.lights!==void 0&&(a.lights=n.lights),n.clipping!==void 0&&(a.clipping=n.clipping),n.size!==void 0&&(a.size=n.size),n.sizeAttenuation!==void 0&&(a.sizeAttenuation=n.sizeAttenuation),n.map!==void 0&&(a.map=r(n.map)),n.matcap!==void 0&&(a.matcap=r(n.matcap)),n.alphaMap!==void 0&&(a.alphaMap=r(n.alphaMap)),n.bumpMap!==void 0&&(a.bumpMap=r(n.bumpMap)),n.bumpScale!==void 0&&(a.bumpScale=n.bumpScale),n.normalMap!==void 0&&(a.normalMap=r(n.normalMap)),n.normalMapType!==void 0&&(a.normalMapType=n.normalMapType),n.normalScale!==void 0){let l=n.normalScale;Array.isArray(l)===!1&&(l=[l,l]),a.normalScale=new ce().fromArray(l)}return n.displacementMap!==void 0&&(a.displacementMap=r(n.displacementMap)),n.displacementScale!==void 0&&(a.displacementScale=n.displacementScale),n.displacementBias!==void 0&&(a.displacementBias=n.displacementBias),n.roughnessMap!==void 0&&(a.roughnessMap=r(n.roughnessMap)),n.metalnessMap!==void 0&&(a.metalnessMap=r(n.metalnessMap)),n.emissiveMap!==void 0&&(a.emissiveMap=r(n.emissiveMap)),n.emissiveIntensity!==void 0&&(a.emissiveIntensity=n.emissiveIntensity),n.specularMap!==void 0&&(a.specularMap=r(n.specularMap)),n.specularIntensityMap!==void 0&&(a.specularIntensityMap=r(n.specularIntensityMap)),n.specularColorMap!==void 0&&(a.specularColorMap=r(n.specularColorMap)),n.envMap!==void 0&&(a.envMap=r(n.envMap)),n.envMapIntensity!==void 0&&(a.envMapIntensity=n.envMapIntensity),n.reflectivity!==void 0&&(a.reflectivity=n.reflectivity),n.refractionRatio!==void 0&&(a.refractionRatio=n.refractionRatio),n.lightMap!==void 0&&(a.lightMap=r(n.lightMap)),n.lightMapIntensity!==void 0&&(a.lightMapIntensity=n.lightMapIntensity),n.aoMap!==void 0&&(a.aoMap=r(n.aoMap)),n.aoMapIntensity!==void 0&&(a.aoMapIntensity=n.aoMapIntensity),n.gradientMap!==void 0&&(a.gradientMap=r(n.gradientMap)),n.clearcoatMap!==void 0&&(a.clearcoatMap=r(n.clearcoatMap)),n.clearcoatRoughnessMap!==void 0&&(a.clearcoatRoughnessMap=r(n.clearcoatRoughnessMap)),n.clearcoatNormalMap!==void 0&&(a.clearcoatNormalMap=r(n.clearcoatNormalMap)),n.clearcoatNormalScale!==void 0&&(a.clearcoatNormalScale=new ce().fromArray(n.clearcoatNormalScale)),n.iridescenceMap!==void 0&&(a.iridescenceMap=r(n.iridescenceMap)),n.iridescenceThicknessMap!==void 0&&(a.iridescenceThicknessMap=r(n.iridescenceThicknessMap)),n.transmissionMap!==void 0&&(a.transmissionMap=r(n.transmissionMap)),n.thicknessMap!==void 0&&(a.thicknessMap=r(n.thicknessMap)),n.sheenColorMap!==void 0&&(a.sheenColorMap=r(n.sheenColorMap)),n.sheenRoughnessMap!==void 0&&(a.sheenRoughnessMap=r(n.sheenRoughnessMap)),a}setTextures(n){return this.textures=n,this}static createMaterialFromType(n){const s={ShadowMaterial:S_,SpriteMaterial:Xh,RawShaderMaterial:b_,ShaderMaterial:Bi,PointsMaterial:hu,MeshPhysicalMaterial:w_,MeshStandardMaterial:E_,MeshPhongMaterial:T_,MeshToonMaterial:A_,MeshNormalMaterial:R_,MeshLambertMaterial:C_,MeshDepthMaterial:Gh,MeshDistanceMaterial:kh,MeshBasicMaterial:Fi,MeshMatcapMaterial:P_,LineDashedMaterial:L_,LineBasicMaterial:En,Material:Hr};return new s[n]}}class Uu{static decodeText(n){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(n);let s="";for(let r=0,a=n.length;r<a;r++)s+=String.fromCharCode(n[r]);try{return decodeURIComponent(escape(s))}catch(r){return s}}static extractUrlBase(n){const s=n.lastIndexOf("/");return s===-1?"./":n.slice(0,s+1)}static resolveURL(n,s){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(s)&&/^\//.test(n)&&(s=s.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:s+n)}}class j_ extends null{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(n){return super.copy(n),this.instanceCount=n.instanceCount,this}toJSON(){const n=super.toJSON();return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}}class Q_ extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=new zi(l.manager);u.setPath(l.path),u.setRequestHeader(l.requestHeader),u.setWithCredentials(l.withCredentials),u.load(n,function(f){try{s(l.parse(JSON.parse(f)))}catch(d){a?a(d):console.error(d),l.manager.itemError(n)}},r,a)}parse(n){const s={},r={};function a(x,v){if(s[v]!==void 0)return s[v];const M=x.interleavedBuffers[v],y=l(x,M.buffer),T=Fs(M.type,y),E=new Wh(T,M.stride);return E.uuid=M.uuid,s[v]=E,E}function l(x,v){if(r[v]!==void 0)return r[v];const M=x.arrayBuffers[v],y=new Uint32Array(M).buffer;return r[v]=y,y}const u=n.isInstancedBufferGeometry?new j_:new at,f=n.data.index;if(f!==void 0){const x=Fs(f.type,f.array);u.setIndex(new Vt(x,1))}const d=n.data.attributes;for(const x in d){const v=d[x];let b;if(v.isInterleavedBufferAttribute){const M=a(n.data,v.data);b=new rr(M,v.itemSize,v.offset,v.normalized)}else{const M=Fs(v.type,v.array),y=v.isInstancedBufferAttribute?Kr:Vt;b=new y(M,v.itemSize,v.normalized)}v.name!==void 0&&(b.name=v.name),v.usage!==void 0&&b.setUsage(v.usage),v.updateRange!==void 0&&(b.updateRange.offset=v.updateRange.offset,b.updateRange.count=v.updateRange.count),u.setAttribute(x,b)}const p=n.data.morphAttributes;if(p)for(const x in p){const v=p[x],b=[];for(let M=0,y=v.length;M<y;M++){const T=v[M];let E;if(T.isInterleavedBufferAttribute){const R=a(n.data,T.data);E=new rr(R,T.itemSize,T.offset,T.normalized)}else{const R=Fs(T.type,T.array);E=new Vt(R,T.itemSize,T.normalized)}T.name!==void 0&&(E.name=T.name),b.push(E)}u.morphAttributes[x]=b}n.data.morphTargetsRelative&&(u.morphTargetsRelative=!0);const g=n.data.groups||n.data.drawcalls||n.data.offsets;if(g!==void 0)for(let x=0,v=g.length;x!==v;++x){const b=g[x];u.addGroup(b.start,b.count,b.materialIndex)}const _=n.data.boundingSphere;if(_!==void 0){const x=new N;_.center!==void 0&&x.fromArray(_.center),u.boundingSphere=new xi(x,_.radius)}return n.name&&(u.name=n.name),n.userData&&(u.userData=n.userData),u}}class Ax extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=this.path===""?Uu.extractUrlBase(n):this.path;this.resourcePath=this.resourcePath||u;const f=new zi(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(n,function(d){let p=null;try{p=JSON.parse(d)}catch(g){a!==void 0&&a(g),console.error("THREE:ObjectLoader: Can't parse "+n+".",g.message);return}const m=p.metadata;if(m===void 0||m.type===void 0||m.type.toLowerCase()==="geometry"){a!==void 0&&a(new Error("THREE.ObjectLoader: Can't load "+n)),console.error("THREE.ObjectLoader: Can't load "+n);return}l.parse(p,s)},r,a)}loadAsync(n,s){return _r(this,null,function*(){const r=this,a=this.path===""?Uu.extractUrlBase(n):this.path;this.resourcePath=this.resourcePath||a;const l=new zi(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials);const u=yield l.loadAsync(n,s),f=JSON.parse(u),d=f.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+n);return yield r.parseAsync(f)})}parse(n,s){const r=this.parseAnimations(n.animations),a=this.parseShapes(n.shapes),l=this.parseGeometries(n.geometries,a),u=this.parseImages(n.images,function(){s!==void 0&&s(p)}),f=this.parseTextures(n.textures,u),d=this.parseMaterials(n.materials,f),p=this.parseObject(n.object,l,d,f,r),m=this.parseSkeletons(n.skeletons,p);if(this.bindSkeletons(p,m),s!==void 0){let g=!1;for(const _ in u)if(u[_].data instanceof HTMLImageElement){g=!0;break}g===!1&&s(p)}return p}parseAsync(n){return _r(this,null,function*(){const s=this.parseAnimations(n.animations),r=this.parseShapes(n.shapes),a=this.parseGeometries(n.geometries,r),l=yield this.parseImagesAsync(n.images),u=this.parseTextures(n.textures,l),f=this.parseMaterials(n.materials,u),d=this.parseObject(n.object,a,f,u,s),p=this.parseSkeletons(n.skeletons,d);return this.bindSkeletons(d,p),d})}parseShapes(n){const s={};if(n!==void 0)for(let r=0,a=n.length;r<a;r++){const l=new fr().fromJSON(n[r]);s[l.uuid]=l}return s}parseSkeletons(n,s){const r={},a={};if(s.traverse(function(l){l.isBone&&(a[l.uuid]=l)}),n!==void 0)for(let l=0,u=n.length;l<u;l++){const f=new Xc().fromJSON(n[l],a);r[f.uuid]=f}return r}parseGeometries(n,s){const r={};if(n!==void 0){const a=new Q_;for(let l=0,u=n.length;l<u;l++){let f;const d=n[l];switch(d.type){case"BufferGeometry":case"InstancedBufferGeometry":f=a.parse(d);break;default:d.type in wu?f=wu[d.type].fromJSON(d,s):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${d.type}"`)}f.uuid=d.uuid,d.name!==void 0&&(f.name=d.name),d.userData!==void 0&&(f.userData=d.userData),r[d.uuid]=f}}return r}parseMaterials(n,s){const r={},a={};if(n!==void 0){const l=new Ml;l.setTextures(s);for(let u=0,f=n.length;u<f;u++){const d=n[u];r[d.uuid]===void 0&&(r[d.uuid]=l.parse(d)),a[d.uuid]=r[d.uuid]}}return a}parseAnimations(n){const s={};if(n!==void 0)for(let r=0;r<n.length;r++){const a=n[r],l=Io.parse(a);s[l.uuid]=l}return s}parseImages(n,s){const r=this,a={};let l;function u(d){return r.manager.itemStart(d),l.load(d,function(){r.manager.itemEnd(d)},void 0,function(){r.manager.itemError(d),r.manager.itemEnd(d)})}function f(d){if(typeof d=="string"){const p=d,m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:r.resourcePath+p;return u(m)}else return d.data?{data:Fs(d.type,d.data),width:d.width,height:d.height}:null}if(n!==void 0&&n.length>0){const d=new Cu(s);l=new Uo(d),l.setCrossOrigin(this.crossOrigin);for(let p=0,m=n.length;p<m;p++){const g=n[p],_=g.url;if(Array.isArray(_)){const x=[];for(let v=0,b=_.length;v<b;v++){const M=_[v],y=f(M);y!==null&&(y instanceof HTMLImageElement?x.push(y):x.push(new Jr(y.data,y.width,y.height)))}a[g.uuid]=new Gs(x)}else{const x=f(g.url);a[g.uuid]=new Gs(x)}}}return a}parseImagesAsync(n){return _r(this,null,function*(){const s=this,r={};let a;function l(u){return _r(this,null,function*(){if(typeof u=="string"){const f=u,d=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(f)?f:s.resourcePath+f;return yield a.loadAsync(d)}else return u.data?{data:Fs(u.type,u.data),width:u.width,height:u.height}:null})}if(n!==void 0&&n.length>0){a=new Uo(this.manager),a.setCrossOrigin(this.crossOrigin);for(let u=0,f=n.length;u<f;u++){const d=n[u],p=d.url;if(Array.isArray(p)){const m=[];for(let g=0,_=p.length;g<_;g++){const x=p[g],v=yield l(x);v!==null&&(v instanceof HTMLImageElement?m.push(v):m.push(new Jr(v.data,v.width,v.height)))}r[d.uuid]=new Gs(m)}else{const m=yield l(d.url);r[d.uuid]=new Gs(m)}}}return r})}parseTextures(n,s){function r(l,u){return typeof l=="number"?l:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",l),u[l])}const a={};if(n!==void 0)for(let l=0,u=n.length;l<u;l++){const f=n[l];f.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',f.uuid),s[f.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",f.image);const d=s[f.image],p=d.data;let m;Array.isArray(p)?(m=new to,p.length===6&&(m.needsUpdate=!0)):(p&&p.data?m=new Jr:m=new cn,p&&(m.needsUpdate=!0)),m.source=d,m.uuid=f.uuid,f.name!==void 0&&(m.name=f.name),f.mapping!==void 0&&(m.mapping=r(f.mapping,e0)),f.channel!==void 0&&(m.channel=f.channel),f.offset!==void 0&&m.offset.fromArray(f.offset),f.repeat!==void 0&&m.repeat.fromArray(f.repeat),f.center!==void 0&&m.center.fromArray(f.center),f.rotation!==void 0&&(m.rotation=f.rotation),f.wrap!==void 0&&(m.wrapS=r(f.wrap[0],Du),m.wrapT=r(f.wrap[1],Du)),f.format!==void 0&&(m.format=f.format),f.internalFormat!==void 0&&(m.internalFormat=f.internalFormat),f.type!==void 0&&(m.type=f.type),f.colorSpace!==void 0&&(m.colorSpace=f.colorSpace),f.encoding!==void 0&&(m.encoding=f.encoding),f.minFilter!==void 0&&(m.minFilter=r(f.minFilter,Nu)),f.magFilter!==void 0&&(m.magFilter=r(f.magFilter,Nu)),f.anisotropy!==void 0&&(m.anisotropy=f.anisotropy),f.flipY!==void 0&&(m.flipY=f.flipY),f.generateMipmaps!==void 0&&(m.generateMipmaps=f.generateMipmaps),f.premultiplyAlpha!==void 0&&(m.premultiplyAlpha=f.premultiplyAlpha),f.unpackAlignment!==void 0&&(m.unpackAlignment=f.unpackAlignment),f.userData!==void 0&&(m.userData=f.userData),a[f.uuid]=m}return a}parseObject(n,s,r,a,l){let u;function f(_){return s[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",_),s[_]}function d(_){if(_!==void 0){if(Array.isArray(_)){const x=[];for(let v=0,b=_.length;v<b;v++){const M=_[v];r[M]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",M),x.push(r[M])}return x}return r[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",_),r[_]}}function p(_){return a[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",_),a[_]}let m,g;switch(n.type){case"Scene":u=new Vh,n.background!==void 0&&(Number.isInteger(n.background)?u.background=new Ce(n.background):u.background=p(n.background)),n.environment!==void 0&&(u.environment=p(n.environment)),n.fog!==void 0&&(n.fog.type==="Fog"?u.fog=new Vc(n.fog.color,n.fog.near,n.fog.far):n.fog.type==="FogExp2"&&(u.fog=new Hc(n.fog.color,n.fog.density))),n.backgroundBlurriness!==void 0&&(u.backgroundBlurriness=n.backgroundBlurriness),n.backgroundIntensity!==void 0&&(u.backgroundIntensity=n.backgroundIntensity);break;case"PerspectiveCamera":u=new $t(n.fov,n.aspect,n.near,n.far),n.focus!==void 0&&(u.focus=n.focus),n.zoom!==void 0&&(u.zoom=n.zoom),n.filmGauge!==void 0&&(u.filmGauge=n.filmGauge),n.filmOffset!==void 0&&(u.filmOffset=n.filmOffset),n.view!==void 0&&(u.view=Object.assign({},n.view));break;case"OrthographicCamera":u=new Nc(n.left,n.right,n.top,n.bottom,n.near,n.far),n.zoom!==void 0&&(u.zoom=n.zoom),n.view!==void 0&&(u.view=Object.assign({},n.view));break;case"AmbientLight":u=new $_(n.color,n.intensity);break;case"DirectionalLight":u=new Y_(n.color,n.intensity);break;case"PointLight":u=new X_(n.color,n.intensity,n.distance,n.decay);break;case"RectAreaLight":u=new Z_(n.color,n.intensity,n.width,n.height);break;case"SpotLight":u=new V_(n.color,n.intensity,n.distance,n.angle,n.penumbra,n.decay);break;case"HemisphereLight":u=new k_(n.color,n.groundColor,n.intensity);break;case"LightProbe":u=new K_().fromJSON(n);break;case"SkinnedMesh":m=f(n.geometry),g=d(n.material),u=new Ng(m,g),n.bindMode!==void 0&&(u.bindMode=n.bindMode),n.bindMatrix!==void 0&&u.bindMatrix.fromArray(n.bindMatrix),n.skeleton!==void 0&&(u.skeleton=n.skeleton);break;case"Mesh":m=f(n.geometry),g=d(n.material),u=new _n(m,g);break;case"InstancedMesh":m=f(n.geometry),g=d(n.material);const _=n.count,x=n.instanceMatrix,v=n.instanceColor;u=new Bg(m,g,_),u.instanceMatrix=new Kr(new Float32Array(x.array),16),v!==void 0&&(u.instanceColor=new Kr(new Float32Array(v.array),v.itemSize));break;case"LOD":u=new Ug;break;case"Line":u=new mo(f(n.geometry),d(n.material));break;case"LineLoop":u=new zg(f(n.geometry),d(n.material));break;case"LineSegments":u=new lu(f(n.geometry),d(n.material));break;case"PointCloud":case"Points":u=new Gg(f(n.geometry),d(n.material));break;case"Sprite":u=new Ig(d(n.material));break;case"Group":u=new qr;break;case"Bone":u=new eu;break;default:u=new Bt}if(u.uuid=n.uuid,n.name!==void 0&&(u.name=n.name),n.matrix!==void 0?(u.matrix.fromArray(n.matrix),n.matrixAutoUpdate!==void 0&&(u.matrixAutoUpdate=n.matrixAutoUpdate),u.matrixAutoUpdate&&u.matrix.decompose(u.position,u.quaternion,u.scale)):(n.position!==void 0&&u.position.fromArray(n.position),n.rotation!==void 0&&u.rotation.fromArray(n.rotation),n.quaternion!==void 0&&u.quaternion.fromArray(n.quaternion),n.scale!==void 0&&u.scale.fromArray(n.scale)),n.up!==void 0&&u.up.fromArray(n.up),n.castShadow!==void 0&&(u.castShadow=n.castShadow),n.receiveShadow!==void 0&&(u.receiveShadow=n.receiveShadow),n.shadow&&(n.shadow.bias!==void 0&&(u.shadow.bias=n.shadow.bias),n.shadow.normalBias!==void 0&&(u.shadow.normalBias=n.shadow.normalBias),n.shadow.radius!==void 0&&(u.shadow.radius=n.shadow.radius),n.shadow.mapSize!==void 0&&u.shadow.mapSize.fromArray(n.shadow.mapSize),n.shadow.camera!==void 0&&(u.shadow.camera=this.parseObject(n.shadow.camera))),n.visible!==void 0&&(u.visible=n.visible),n.frustumCulled!==void 0&&(u.frustumCulled=n.frustumCulled),n.renderOrder!==void 0&&(u.renderOrder=n.renderOrder),n.userData!==void 0&&(u.userData=n.userData),n.layers!==void 0&&(u.layers.mask=n.layers),n.children!==void 0){const _=n.children;for(let x=0;x<_.length;x++)u.add(this.parseObject(_[x],s,r,a,l))}if(n.animations!==void 0){const _=n.animations;for(let x=0;x<_.length;x++){const v=_[x];u.animations.push(l[v])}}if(n.type==="LOD"){n.autoUpdate!==void 0&&(u.autoUpdate=n.autoUpdate);const _=n.levels;for(let x=0;x<_.length;x++){const v=_[x],b=u.getObjectByProperty("uuid",v.object);b!==void 0&&u.addLevel(b,v.distance,v.hysteresis)}}return u}bindSkeletons(n,s){Object.keys(s).length!==0&&n.traverse(function(r){if(r.isSkinnedMesh===!0&&r.skeleton!==void 0){const a=s[r.skeleton];a===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",r.skeleton):r.bind(a,r.bindMatrix)}})}}const e0={UVMapping:ua,CubeReflectionMapping:An,CubeRefractionMapping:mn,EquirectangularReflectionMapping:Ai,EquirectangularRefractionMapping:Wi,CubeUVReflectionMapping:Xi},Du={RepeatWrapping:As,ClampToEdgeWrapping:kt,MirroredRepeatWrapping:Rs},Nu={NearestFilter:Tt,NearestMipmapNearestFilter:qi,NearestMipmapLinearFilter:On,LinearFilter:St,LinearMipmapNearestFilter:da,LinearMipmapLinearFilter:Yn};class Rx extends null{constructor(n){super(n),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(n){return this.options=n,this}load(n,s,r,a){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const l=this,u=gr.get(n);if(u!==void 0)return l.manager.itemStart(n),setTimeout(function(){s&&s(u),l.manager.itemEnd(n)},0),u;const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,fetch(n,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){gr.add(n,d),s&&s(d),l.manager.itemEnd(n)}).catch(function(d){a&&a(d),l.manager.itemError(n),l.manager.itemEnd(n)}),l.manager.itemStart(n)}}let Do;class Ou{static getContext(){return Do===void 0&&(Do=new(window.AudioContext||window.webkitAudioContext)),Do}static setContext(n){Do=n}}class Cx extends null{constructor(n){super(n)}load(n,s,r,a){const l=this,u=new zi(this.manager);u.setResponseType("arraybuffer"),u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(n,function(d){try{const p=d.slice(0);Ou.getContext().decodeAudioData(p,function(g){s(g)},f)}catch(p){f(p)}},r,a);function f(d){a?a(d):console.error(d),l.manager.itemError(n)}}}class Px extends null{constructor(n,s,r=1){super(void 0,r),this.isHemisphereLightProbe=!0;const a=new Ce().set(n),l=new Ce().set(s),u=new N(a.r,a.g,a.b),f=new N(l.r,l.g,l.b),d=Math.sqrt(Math.PI),p=d*Math.sqrt(.75);this.sh.coefficients[0].copy(u).add(f).multiplyScalar(d),this.sh.coefficients[1].copy(u).sub(f).multiplyScalar(p)}}class Lx extends null{constructor(n,s=1){super(void 0,s),this.isAmbientLightProbe=!0;const r=new Ce().set(n);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Fu=new tt,Bu=new tt,gs=new tt;class Ix{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new $t,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new $t,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(n){const s=this._cache;if(s.focus!==n.focus||s.fov!==n.fov||s.aspect!==n.aspect*this.aspect||s.near!==n.near||s.far!==n.far||s.zoom!==n.zoom||s.eyeSep!==this.eyeSep){s.focus=n.focus,s.fov=n.fov,s.aspect=n.aspect*this.aspect,s.near=n.near,s.far=n.far,s.zoom=n.zoom,s.eyeSep=this.eyeSep,gs.copy(n.projectionMatrix);const a=s.eyeSep/2,l=a*s.near/s.focus,u=s.near*Math.tan(di*s.fov*.5)/s.zoom;let f,d;Bu.elements[12]=-a,Fu.elements[12]=a,f=-u*s.aspect+l,d=u*s.aspect+l,gs.elements[0]=2*s.near/(d-f),gs.elements[8]=(d+f)/(d-f),this.cameraL.projectionMatrix.copy(gs),f=-u*s.aspect-l,d=u*s.aspect-l,gs.elements[0]=2*s.near/(d-f),gs.elements[8]=(d+f)/(d-f),this.cameraR.projectionMatrix.copy(gs)}this.cameraL.matrixWorld.copy(n.matrixWorld).multiply(Bu),this.cameraR.matrixWorld.copy(n.matrixWorld).multiply(Fu)}}class t0{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const s=zu();n=(s-this.oldTime)/1e3,this.oldTime=s,this.elapsedTime+=n}return n}}function zu(){return(typeof performance=="undefined"?Date:performance).now()}const _s=new N,Gu=new vn,n0=new N,xs=new N;class Ux extends null{constructor(){super(),this.type="AudioListener",this.context=Ou.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new t0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(n){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=n,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this}updateMatrixWorld(n){super.updateMatrixWorld(n);const s=this.context.listener,r=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_s,Gu,n0),xs.set(0,0,-1).applyQuaternion(Gu),s.positionX){const a=this.context.currentTime+this.timeDelta;s.positionX.linearRampToValueAtTime(_s.x,a),s.positionY.linearRampToValueAtTime(_s.y,a),s.positionZ.linearRampToValueAtTime(_s.z,a),s.forwardX.linearRampToValueAtTime(xs.x,a),s.forwardY.linearRampToValueAtTime(xs.y,a),s.forwardZ.linearRampToValueAtTime(xs.z,a),s.upX.linearRampToValueAtTime(r.x,a),s.upY.linearRampToValueAtTime(r.y,a),s.upZ.linearRampToValueAtTime(r.z,a)}else s.setPosition(_s.x,_s.y,_s.z),s.setOrientation(xs.x,xs.y,xs.z,r.x,r.y,r.z)}}class Dx extends null{constructor(n){super(),this.type="Audio",this.listener=n,this.context=n.context,this.gain=this.context.createGain(),this.gain.connect(n.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(n){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=n,this.connect(),this}setMediaElementSource(n){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(n),this.connect(),this}setMediaStreamSource(n){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(n),this.connect(),this}setBuffer(n){return this.buffer=n,this.sourceType="buffer",this.autoplay&&this.play(),this}play(n=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+n;const s=this.context.createBufferSource();return s.buffer=this.buffer,s.loop=this.loop,s.loopStart=this.loopStart,s.loopEnd=this.loopEnd,s.onended=this.onEnded.bind(this),s.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=s,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let n=1,s=this.filters.length;n<s;n++)this.filters[n-1].connect(this.filters[n]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let n=1,s=this.filters.length;n<s;n++)this.filters[n-1].disconnect(this.filters[n]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(n){return n||(n=[]),this._connected===!0?(this.disconnect(),this.filters=n.slice(),this.connect()):this.filters=n.slice(),this}setDetune(n){if(this.detune=n,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(n){return this.setFilters(n?[n]:[])}setPlaybackRate(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=n,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=n,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(n){return this.loopStart=n,this}setLoopEnd(n){return this.loopEnd=n,this}getVolume(){return this.gain.gain.value}setVolume(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this}}const ys=new N,ku=new vn,i0=new N,vs=new N;class Nx extends null{constructor(n){super(n),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(n){return this.panner.refDistance=n,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(n){return this.panner.rolloffFactor=n,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(n){return this.panner.distanceModel=n,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(n){return this.panner.maxDistance=n,this}setDirectionalCone(n,s,r){return this.panner.coneInnerAngle=n,this.panner.coneOuterAngle=s,this.panner.coneOuterGain=r,this}updateMatrixWorld(n){if(super.updateMatrixWorld(n),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ys,ku,i0),vs.set(0,0,1).applyQuaternion(ku);const s=this.panner;if(s.positionX){const r=this.context.currentTime+this.listener.timeDelta;s.positionX.linearRampToValueAtTime(ys.x,r),s.positionY.linearRampToValueAtTime(ys.y,r),s.positionZ.linearRampToValueAtTime(ys.z,r),s.orientationX.linearRampToValueAtTime(vs.x,r),s.orientationY.linearRampToValueAtTime(vs.y,r),s.orientationZ.linearRampToValueAtTime(vs.z,r)}else s.setPosition(ys.x,ys.y,ys.z),s.setOrientation(vs.x,vs.y,vs.z)}}class Ox{constructor(n,s=2048){this.analyser=n.context.createAnalyser(),this.analyser.fftSize=s,this.data=new Uint8Array(this.analyser.frequencyBinCount),n.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let n=0;const s=this.getFrequencyData();for(let r=0;r<s.length;r++)n+=s[r];return n/s.length}}class s0{constructor(n,s,r){this.binding=n,this.valueSize=r;let a,l,u;switch(s){case"quaternion":a=this._slerp,l=this._slerpAdditive,u=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(r*6),this._workIndex=5;break;case"string":case"bool":a=this._select,l=this._select,u=this._setAdditiveIdentityOther,this.buffer=new Array(r*5);break;default:a=this._lerp,l=this._lerpAdditive,u=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(r*5)}this._mixBufferRegion=a,this._mixBufferRegionAdditive=l,this._setIdentity=u,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(n,s){const r=this.buffer,a=this.valueSize,l=n*a+a;let u=this.cumulativeWeight;if(u===0){for(let f=0;f!==a;++f)r[l+f]=r[f];u=s}else{u+=s;const f=s/u;this._mixBufferRegion(r,l,0,f,a)}this.cumulativeWeight=u}accumulateAdditive(n){const s=this.buffer,r=this.valueSize,a=r*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(s,a,0,n,r),this.cumulativeWeightAdditive+=n}apply(n){const s=this.valueSize,r=this.buffer,a=n*s+s,l=this.cumulativeWeight,u=this.cumulativeWeightAdditive,f=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const d=s*this._origIndex;this._mixBufferRegion(r,a,d,1-l,s)}u>0&&this._mixBufferRegionAdditive(r,a,this._addIndex*s,1,s);for(let d=s,p=s+s;d!==p;++d)if(r[d]!==r[d+s]){f.setValue(r,a);break}}saveOriginalState(){const n=this.binding,s=this.buffer,r=this.valueSize,a=r*this._origIndex;n.getValue(s,a);for(let l=r,u=a;l!==u;++l)s[l]=s[a+l%r];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const n=this.valueSize*3;this.binding.setValue(this.buffer,n)}_setAdditiveIdentityNumeric(){const n=this._addIndex*this.valueSize,s=n+this.valueSize;for(let r=n;r<s;r++)this.buffer[r]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const n=this._origIndex*this.valueSize,s=this._addIndex*this.valueSize;for(let r=0;r<this.valueSize;r++)this.buffer[s+r]=this.buffer[n+r]}_select(n,s,r,a,l){if(a>=.5)for(let u=0;u!==l;++u)n[s+u]=n[r+u]}_slerp(n,s,r,a){vn.slerpFlat(n,s,n,s,n,r,a)}_slerpAdditive(n,s,r,a,l){const u=this._workIndex*l;vn.multiplyQuaternionsFlat(n,u,n,s,n,r),vn.slerpFlat(n,s,n,s,n,u,a)}_lerp(n,s,r,a,l){const u=1-a;for(let f=0;f!==l;++f){const d=s+f;n[d]=n[d]*u+n[r+f]*a}}_lerpAdditive(n,s,r,a,l){for(let u=0;u!==l;++u){const f=s+u;n[f]=n[f]+n[r+u]*a}}}const Sl="\\[\\]\\.:\\/",r0=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",a0="[^"+Sl.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",bl),c0=/(WCOD+)?/.source.replace("WCOD",a0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),u0=new RegExp("^"+o0+c0+l0+h0+"$"),f0=["material","materials","bones","map"];class d0{constructor(n,s,r){const a=r||pt.parseTrackName(s);this._targetGroup=n,this._bindings=n.subscribe_(s,a)}getValue(n,s){this.bind();const r=this._targetGroup.nCachedObjects_,a=this._bindings[r];a!==void 0&&a.getValue(n,s)}setValue(n,s){const r=this._bindings;for(let a=this._targetGroup.nCachedObjects_,l=r.length;a!==l;++a)r[a].setValue(n,s)}bind(){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].bind()}unbind(){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].unbind()}}class pt{constructor(n,s,r){this.path=s,this.parsedPath=r||pt.parseTrackName(s),this.node=pt.findNode(n,this.parsedPath.nodeName),this.rootNode=n,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(n,s,r){return n&&n.isAnimationObjectGroup?new pt.Composite(n,s,r):new pt(n,s,r)}static sanitizeNodeName(n){return n.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(n){const s=u0.exec(n);if(s===null)throw new Error("PropertyBinding: Cannot parse trackName: "+n);const r={nodeName:s[2],objectName:s[3],objectIndex:s[4],propertyName:s[5],propertyIndex:s[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const l=r.nodeName.substring(a+1);f0.indexOf(l)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=l)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return r}static findNode(n,s){if(s===void 0||s===""||s==="."||s===-1||s===n.name||s===n.uuid)return n;if(n.skeleton){const r=n.skeleton.getBoneByName(s);if(r!==void 0)return r}if(n.children){const r=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===s||f.uuid===s)return f;const d=r(f.children);if(d)return d}return null},a=r(n.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(n,s){n[s]=this.targetObject[this.propertyName]}_getValue_array(n,s){const r=this.resolvedProperty;for(let a=0,l=r.length;a!==l;++a)n[s++]=r[a]}_getValue_arrayElement(n,s){n[s]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(n,s){this.resolvedProperty.toArray(n,s)}_setValue_direct(n,s){this.targetObject[this.propertyName]=n[s]}_setValue_direct_setNeedsUpdate(n,s){this.targetObject[this.propertyName]=n[s],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(n,s){this.targetObject[this.propertyName]=n[s],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(n,s){const r=this.resolvedProperty;for(let a=0,l=r.length;a!==l;++a)r[a]=n[s++]}_setValue_array_setNeedsUpdate(n,s){const r=this.resolvedProperty;for(let a=0,l=r.length;a!==l;++a)r[a]=n[s++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(n,s){const r=this.resolvedProperty;for(let a=0,l=r.length;a!==l;++a)r[a]=n[s++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(n,s){this.resolvedProperty[this.propertyIndex]=n[s]}_setValue_arrayElement_setNeedsUpdate(n,s){this.resolvedProperty[this.propertyIndex]=n[s],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(n,s){this.resolvedProperty[this.propertyIndex]=n[s],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(n,s){this.resolvedProperty.fromArray(n,s)}_setValue_fromArray_setNeedsUpdate(n,s){this.resolvedProperty.fromArray(n,s),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(n,s){this.resolvedProperty.fromArray(n,s),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(n,s){this.bind(),this.getValue(n,s)}_setValue_unbound(n,s){this.bind(),this.setValue(n,s)}bind(){let n=this.node;const s=this.parsedPath,r=s.objectName,a=s.propertyName;let l=s.propertyIndex;if(n||(n=pt.findNode(this.rootNode,s.nodeName),this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){let p=s.objectIndex;switch(r){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let m=0;m<n.length;m++)if(n[m].name===p){p=m;break}break;case"map":if("map"in n){n=n.map;break}if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}n=n.material.map;break;default:if(n[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[r]}if(p!==void 0){if(n[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[p]}}const u=n[a];if(u===void 0){const p=s.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+a+" but it wasn't found.",n);return}let f=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?f=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(a==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[l]!==void 0&&(l=n.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=d0,pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray],pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=on(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const n={};this._indicesByUUID=n;for(let r=0,a=arguments.length;r!==a;++r)n[arguments[r].uuid]=r;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const s=this;this.stats={objects:{get total(){return s._objects.length},get inUse(){return this.total-s.nCachedObjects_}},get bindingsPerObject(){return s._bindings.length}}}add(){const n=this._objects,s=this._indicesByUUID,r=this._paths,a=this._parsedPaths,l=this._bindings,u=l.length;let f,d=n.length,p=this.nCachedObjects_;for(let m=0,g=arguments.length;m!==g;++m){const _=arguments[m],x=_.uuid;let v=s[x];if(v===void 0){v=d++,s[x]=v,n.push(_);for(let b=0,M=u;b!==M;++b)l[b].push(new pt(_,r[b],a[b]))}else if(v<p){f=n[v];const b=--p,M=n[b];s[M.uuid]=v,n[v]=M,s[x]=b,n[b]=_;for(let y=0,T=u;y!==T;++y){const E=l[y],R=E[b];let P=E[v];E[v]=R,P===void 0&&(P=new pt(_,r[y],a[y])),E[b]=P}}else n[v]!==f&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=p}remove(){const n=this._objects,s=this._indicesByUUID,r=this._bindings,a=r.length;let l=this.nCachedObjects_;for(let u=0,f=arguments.length;u!==f;++u){const d=arguments[u],p=d.uuid,m=s[p];if(m!==void 0&&m>=l){const g=l++,_=n[g];s[_.uuid]=m,n[m]=_,s[p]=g,n[g]=d;for(let x=0,v=a;x!==v;++x){const b=r[x],M=b[g],y=b[m];b[m]=M,b[g]=y}}}this.nCachedObjects_=l}uncache(){const n=this._objects,s=this._indicesByUUID,r=this._bindings,a=r.length;let l=this.nCachedObjects_,u=n.length;for(let f=0,d=arguments.length;f!==d;++f){const p=arguments[f],m=p.uuid,g=s[m];if(g!==void 0)if(delete s[m],g<l){const _=--l,x=n[_],v=--u,b=n[v];s[x.uuid]=g,n[g]=x,s[b.uuid]=_,n[_]=b,n.pop();for(let M=0,y=a;M!==y;++M){const T=r[M],E=T[_],R=T[v];T[g]=E,T[_]=R,T.pop()}}else{const _=--u,x=n[_];_>0&&(s[x.uuid]=g),n[g]=x,n.pop();for(let v=0,b=a;v!==b;++v){const M=r[v];M[g]=M[_],M.pop()}}}this.nCachedObjects_=l}subscribe_(n,s){const r=this._bindingsIndicesByPath;let a=r[n];const l=this._bindings;if(a!==void 0)return l[a];const u=this._paths,f=this._parsedPaths,d=this._objects,p=d.length,m=this.nCachedObjects_,g=new Array(p);a=l.length,r[n]=a,u.push(n),f.push(s),l.push(g);for(let _=m,x=d.length;_!==x;++_){const v=d[_];g[_]=new pt(v,n,s)}return g}unsubscribe_(n){const s=this._bindingsIndicesByPath,r=s[n];if(r!==void 0){const a=this._paths,l=this._parsedPaths,u=this._bindings,f=u.length-1,d=u[f],p=n[f];s[p]=r,u[r]=d,u.pop(),l[r]=l[f],l.pop(),a[r]=a[f],a.pop()}}}class p0{constructor(n,s,r=null,a=s.blendMode){this._mixer=n,this._clip=s,this._localRoot=r,this.blendMode=a;const l=s.tracks,u=l.length,f=new Array(u),d={endingStart:ui,endingEnd:ui};for(let p=0;p!==u;++p){const m=l[p].createInterpolant(null);f[p]=m,m.settings=d}this._interpolantSettings=d,this._interpolants=f,this._propertyBindings=new Array(u),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(n){return this._startTime=n,this}setLoop(n,s){return this.loop=n,this.repetitions=s,this}setEffectiveWeight(n){return this.weight=n,this._effectiveWeight=this.enabled?n:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(n){return this._scheduleFading(n,0,1)}fadeOut(n){return this._scheduleFading(n,1,0)}crossFadeFrom(n,s,r){if(n.fadeOut(s),this.fadeIn(s),r){const a=this._clip.duration,l=n._clip.duration,u=l/a,f=a/l;n.warp(1,u,s),this.warp(f,1,s)}return this}crossFadeTo(n,s,r){return n.crossFadeFrom(this,s,r)}stopFading(){const n=this._weightInterpolant;return n!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(n)),this}setEffectiveTimeScale(n){return this.timeScale=n,this._effectiveTimeScale=this.paused?0:n,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(n){return this.timeScale=this._clip.duration/n,this.stopWarping()}syncWith(n){return this.time=n.time,this.timeScale=n.timeScale,this.stopWarping()}halt(n){return this.warp(this._effectiveTimeScale,0,n)}warp(n,s,r){const a=this._mixer,l=a.time,u=this.timeScale;let f=this._timeScaleInterpolant;f===null&&(f=a._lendControlInterpolant(),this._timeScaleInterpolant=f);const d=f.parameterPositions,p=f.sampleValues;return d[0]=l,d[1]=l+r,p[0]=n/u,p[1]=s/u,this}stopWarping(){const n=this._timeScaleInterpolant;return n!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(n)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(n,s,r,a){if(!this.enabled){this._updateWeight(n);return}const l=this._startTime;if(l!==null){const d=(n-l)*r;d<0||r===0?s=0:(this._startTime=null,s=r*d)}s*=this._updateTimeScale(n);const u=this._updateTime(s),f=this._updateWeight(n);if(f>0){const d=this._interpolants,p=this._propertyBindings;switch(this.blendMode){case lc:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(u),p[m].accumulateAdditive(f);break;case Fn:default:for(let m=0,g=d.length;m!==g;++m)d[m].evaluate(u),p[m].accumulate(a,f)}}}_updateWeight(n){let s=0;if(this.enabled){s=this.weight;const r=this._weightInterpolant;if(r!==null){const a=r.evaluate(n)[0];s*=a,n>r.parameterPositions[1]&&(this.stopFading(),a===0&&(this.enabled=!1))}}return this._effectiveWeight=s,s}_updateTimeScale(n){let s=0;if(!this.paused){s=this.timeScale;const r=this._timeScaleInterpolant;if(r!==null){const a=r.evaluate(n)[0];s*=a,n>r.parameterPositions[1]&&(this.stopWarping(),s===0?this.paused=!0:this.timeScale=s)}}return this._effectiveTimeScale=s,s}_updateTime(n){const s=this._clip.duration,r=this.loop;let a=this.time+n,l=this._loopCount;const u=r===Pa;if(n===0)return l===-1?a:u&&(l&1)===1?s-a:a;if(r===Ca){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(a>=s)a=s;else if(a<0)a=0;else{this.time=a;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:n<0?-1:1})}}else{if(l===-1&&(n>=0?(l=0,this._setEndings(!0,this.repetitions===0,u)):this._setEndings(this.repetitions===0,!0,u)),a>=s||a<0){const f=Math.floor(a/s);a-=s*f,l+=Math.abs(f);const d=this.repetitions-l;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,a=n>0?s:0,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:n>0?1:-1});else{if(d===1){const p=n<0;this._setEndings(p,!p,u)}else this._setEndings(!1,!1,u);this._loopCount=l,this.time=a,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f})}}else this.time=a;if(u&&(l&1)===1)return s-a}return a}_setEndings(n,s,r){const a=this._interpolantSettings;r?(a.endingStart=Li,a.endingEnd=Li):(n?a.endingStart=this.zeroSlopeAtStart?Li:ui:a.endingStart=Is,s?a.endingEnd=this.zeroSlopeAtEnd?Li:ui:a.endingEnd=Is)}_scheduleFading(n,s,r){const a=this._mixer,l=a.time;let u=this._weightInterpolant;u===null&&(u=a._lendControlInterpolant(),this._weightInterpolant=u);const f=u.parameterPositions,d=u.sampleValues;return f[0]=l,d[0]=s,f[1]=l+n,d[1]=r,this}}const m0=new Float32Array(1);class Bx extends null{constructor(n){super(),this._root=n,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(n,s){const r=n._localRoot||this._root,a=n._clip.tracks,l=a.length,u=n._propertyBindings,f=n._interpolants,d=r.uuid,p=this._bindingsByRootAndName;let m=p[d];m===void 0&&(m={},p[d]=m);for(let g=0;g!==l;++g){const _=a[g],x=_.name;let v=m[x];if(v!==void 0)++v.referenceCount,u[g]=v;else{if(v=u[g],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,d,x));continue}const b=s&&s._propertyBindings[g].binding.parsedPath;v=new s0(pt.create(r,x,b),_.ValueTypeName,_.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,d,x),u[g]=v}f[g].resultBuffer=v.buffer}}_activateAction(n){if(!this._isActiveAction(n)){if(n._cacheIndex===null){const r=(n._localRoot||this._root).uuid,a=n._clip.uuid,l=this._actionsByClip[a];this._bindAction(n,l&&l.knownActions[0]),this._addInactiveAction(n,a,r)}const s=n._propertyBindings;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(n)}}_deactivateAction(n){if(this._isActiveAction(n)){const s=n._propertyBindings;for(let r=0,a=s.length;r!==a;++r){const l=s[r];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(n)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const n=this;this.stats={actions:{get total(){return n._actions.length},get inUse(){return n._nActiveActions}},bindings:{get total(){return n._bindings.length},get inUse(){return n._nActiveBindings}},controlInterpolants:{get total(){return n._controlInterpolants.length},get inUse(){return n._nActiveControlInterpolants}}}}_isActiveAction(n){const s=n._cacheIndex;return s!==null&&s<this._nActiveActions}_addInactiveAction(n,s,r){const a=this._actions,l=this._actionsByClip;let u=l[s];if(u===void 0)u={knownActions:[n],actionByRoot:{}},n._byClipCacheIndex=0,l[s]=u;else{const f=u.knownActions;n._byClipCacheIndex=f.length,f.push(n)}n._cacheIndex=a.length,a.push(n),u.actionByRoot[r]=n}_removeInactiveAction(n){const s=this._actions,r=s[s.length-1],a=n._cacheIndex;r._cacheIndex=a,s[a]=r,s.pop(),n._cacheIndex=null;const l=n._clip.uuid,u=this._actionsByClip,f=u[l],d=f.knownActions,p=d[d.length-1],m=n._byClipCacheIndex;p._byClipCacheIndex=m,d[m]=p,d.pop(),n._byClipCacheIndex=null;const g=f.actionByRoot,_=(n._localRoot||this._root).uuid;delete g[_],d.length===0&&delete u[l],this._removeInactiveBindingsForAction(n)}_removeInactiveBindingsForAction(n){const s=n._propertyBindings;for(let r=0,a=s.length;r!==a;++r){const l=s[r];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(n){const s=this._actions,r=n._cacheIndex,a=this._nActiveActions++,l=s[a];n._cacheIndex=a,s[a]=n,l._cacheIndex=r,s[r]=l}_takeBackAction(n){const s=this._actions,r=n._cacheIndex,a=--this._nActiveActions,l=s[a];n._cacheIndex=a,s[a]=n,l._cacheIndex=r,s[r]=l}_addInactiveBinding(n,s,r){const a=this._bindingsByRootAndName,l=this._bindings;let u=a[s];u===void 0&&(u={},a[s]=u),u[r]=n,n._cacheIndex=l.length,l.push(n)}_removeInactiveBinding(n){const s=this._bindings,r=n.binding,a=r.rootNode.uuid,l=r.path,u=this._bindingsByRootAndName,f=u[a],d=s[s.length-1],p=n._cacheIndex;d._cacheIndex=p,s[p]=d,s.pop(),delete f[l],Object.keys(f).length===0&&delete u[a]}_lendBinding(n){const s=this._bindings,r=n._cacheIndex,a=this._nActiveBindings++,l=s[a];n._cacheIndex=a,s[a]=n,l._cacheIndex=r,s[r]=l}_takeBackBinding(n){const s=this._bindings,r=n._cacheIndex,a=--this._nActiveBindings,l=s[a];n._cacheIndex=a,s[a]=n,l._cacheIndex=r,s[r]=l}_lendControlInterpolant(){const n=this._controlInterpolants,s=this._nActiveControlInterpolants++;let r=n[s];return r===void 0&&(r=new Au(new Float32Array(2),new Float32Array(2),1,m0),r.__cacheIndex=s,n[s]=r),r}_takeBackControlInterpolant(n){const s=this._controlInterpolants,r=n.__cacheIndex,a=--this._nActiveControlInterpolants,l=s[a];n.__cacheIndex=a,s[a]=n,l.__cacheIndex=r,s[r]=l}clipAction(n,s,r){const a=s||this._root,l=a.uuid;let u=typeof n=="string"?Io.findByName(a,n):n;const f=u!==null?u.uuid:n,d=this._actionsByClip[f];let p=null;if(r===void 0&&(u!==null?r=u.blendMode:r=Fn),d!==void 0){const g=d.actionByRoot[l];if(g!==void 0&&g.blendMode===r)return g;p=d.knownActions[0],u===null&&(u=p._clip)}if(u===null)return null;const m=new p0(this,u,s,r);return this._bindAction(m,p),this._addInactiveAction(m,f,l),m}existingAction(n,s){const r=s||this._root,a=r.uuid,l=typeof n=="string"?Io.findByName(r,n):n,u=l?l.uuid:n,f=this._actionsByClip[u];return f!==void 0&&f.actionByRoot[a]||null}stopAllAction(){const n=this._actions,s=this._nActiveActions;for(let r=s-1;r>=0;--r)n[r].stop();return this}update(n){n*=this.timeScale;const s=this._actions,r=this._nActiveActions,a=this.time+=n,l=Math.sign(n),u=this._accuIndex^=1;for(let p=0;p!==r;++p)s[p]._update(a,n,l,u);const f=this._bindings,d=this._nActiveBindings;for(let p=0;p!==d;++p)f[p].apply(u);return this}setTime(n){this.time=0;for(let s=0;s<this._actions.length;s++)this._actions[s].time=0;return this.update(n)}getRoot(){return this._root}uncacheClip(n){const s=this._actions,r=n.uuid,a=this._actionsByClip,l=a[r];if(l!==void 0){const u=l.knownActions;for(let f=0,d=u.length;f!==d;++f){const p=u[f];this._deactivateAction(p);const m=p._cacheIndex,g=s[s.length-1];p._cacheIndex=null,p._byClipCacheIndex=null,g._cacheIndex=m,s[m]=g,s.pop(),this._removeInactiveBindingsForAction(p)}delete a[r]}}uncacheRoot(n){const s=n.uuid,r=this._actionsByClip;for(const u in r){const f=r[u].actionByRoot,d=f[s];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const a=this._bindingsByRootAndName,l=a[s];if(l!==void 0)for(const u in l){const f=l[u];f.restoreOriginalState(),this._removeInactiveBinding(f)}}uncacheAction(n,s){const r=this.existingAction(n,s);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}}class Hu{constructor(n){this.value=n}clone(){return new Hu(this.value.clone===void 0?this.value:this.value.clone())}}let g0=0;class zx extends null{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.usage=et,this.uniforms=[]}add(n){return this.uniforms.push(n),this}remove(n){const s=this.uniforms.indexOf(n);return s!==-1&&this.uniforms.splice(s,1),this}setName(n){return this.name=n,this}setUsage(n){return this.usage=n,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(n){this.name=n.name,this.usage=n.usage;const s=n.uniforms;this.uniforms.length=0;for(let r=0,a=s.length;r<a;r++)this.uniforms.push(s[r].clone());return this}clone(){return new this.constructor().copy(this)}}class Gx extends null{constructor(n,s,r=1){super(n,s),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(n){return super.copy(n),this.meshPerAttribute=n.meshPerAttribute,this}clone(n){const s=super.clone(n);return s.meshPerAttribute=this.meshPerAttribute,s}toJSON(n){const s=super.toJSON(n);return s.isInstancedInterleavedBuffer=!0,s.meshPerAttribute=this.meshPerAttribute,s}}class kx{constructor(n,s,r,a,l){this.isGLBufferAttribute=!0,this.name="",this.buffer=n,this.type=s,this.itemSize=r,this.elementSize=a,this.count=l,this.version=0}set needsUpdate(n){n===!0&&this.version++}setBuffer(n){return this.buffer=n,this}setType(n,s){return this.type=n,this.elementSize=s,this}setItemSize(n){return this.itemSize=n,this}setCount(n){return this.count=n,this}}class Hx{constructor(n,s,r=0,a=1/0){this.ray=new Ga(n,s),this.near=r,this.far=a,this.camera=null,this.layers=new Ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(n,s){this.ray.set(n,s)}setFromCamera(n,s){s.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(s.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(s).sub(this.ray.origin).normalize(),this.camera=s):s.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(s.near+s.far)/(s.near-s.far)).unproject(s),this.ray.direction.set(0,0,-1).transformDirection(s.matrixWorld),this.camera=s):console.error("THREE.Raycaster: Unsupported camera type: "+s.type)}intersectObject(n,s=!0,r=[]){return El(n,this,r,s),r.sort(Vu),r}intersectObjects(n,s=!0,r=[]){for(let a=0,l=n.length;a<l;a++)El(n[a],this,r,s);return r.sort(Vu),r}}function Vu(h,n){return h.distance-n.distance}function El(h,n,s,r){if(h.layers.test(n.layers)&&h.raycast(n,s),r===!0){const a=h.children;for(let l=0,u=a.length;l<u;l++)El(a[l],n,s,!0)}}class Vx{constructor(n=1,s=0,r=0){return this.radius=n,this.phi=s,this.theta=r,this}set(n,s,r){return this.radius=n,this.phi=s,this.theta=r,this}copy(n){return this.radius=n.radius,this.phi=n.phi,this.theta=n.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(n){return this.setFromCartesianCoords(n.x,n.y,n.z)}setFromCartesianCoords(n,s,r){return this.radius=Math.sqrt(n*n+s*s+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(n,r),this.phi=Math.acos(bt(s/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wx{constructor(n=1,s=0,r=0){return this.radius=n,this.theta=s,this.y=r,this}set(n,s,r){return this.radius=n,this.theta=s,this.y=r,this}copy(n){return this.radius=n.radius,this.theta=n.theta,this.y=n.y,this}setFromVector3(n){return this.setFromCartesianCoords(n.x,n.y,n.z)}setFromCartesianCoords(n,s,r){return this.radius=Math.sqrt(n*n+r*r),this.theta=Math.atan2(n,r),this.y=s,this}clone(){return new this.constructor().copy(this)}}const Wu=new ce;class Xx{constructor(n=new ce(1/0,1/0),s=new ce(-1/0,-1/0)){this.isBox2=!0,this.min=n,this.max=s}set(n,s){return this.min.copy(n),this.max.copy(s),this}setFromPoints(n){this.makeEmpty();for(let s=0,r=n.length;s<r;s++)this.expandByPoint(n[s]);return this}setFromCenterAndSize(n,s){const r=Wu.copy(s).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(n){return this.isEmpty()?n.set(0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}containsPoint(n){return!(n.x<this.min.x||n.x>this.max.x||n.y<this.min.y||n.y>this.max.y)}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y}getParameter(n,s){return s.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(n){return!(n.max.x<this.min.x||n.min.x>this.max.x||n.max.y<this.min.y||n.min.y>this.max.y)}clampPoint(n,s){return s.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Wu).distanceTo(n)}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const Xu=new N,No=new N;class qx{constructor(n=new N,s=new N){this.start=n,this.end=s}set(n,s){return this.start.copy(n),this.end.copy(s),this}copy(n){return this.start.copy(n.start),this.end.copy(n.end),this}getCenter(n){return n.addVectors(this.start,this.end).multiplyScalar(.5)}delta(n){return n.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(n,s){return this.delta(s).multiplyScalar(n).add(this.start)}closestPointToPointParameter(n,s){Xu.subVectors(n,this.start),No.subVectors(this.end,this.start);const r=No.dot(No);let l=No.dot(Xu)/r;return s&&(l=bt(l,0,1)),l}closestPointToPoint(n,s,r){const a=this.closestPointToPointParameter(n,s);return this.delta(r).multiplyScalar(a).add(this.start)}applyMatrix4(n){return this.start.applyMatrix4(n),this.end.applyMatrix4(n),this}equals(n){return n.start.equals(this.start)&&n.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const qu=new N;class Yx extends null{constructor(n,s){super(),this.light=n,this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1,this.color=s,this.type="SpotLightHelper";const r=new at,a=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let u=0,f=1,d=32;u<d;u++,f++){const p=u/d*Math.PI*2,m=f/d*Math.PI*2;a.push(Math.cos(p),Math.sin(p),1,Math.cos(m),Math.sin(m),1)}r.setAttribute("position",new Ne(a,3));const l=new En({fog:!1,toneMapped:!1});this.cone=new lu(r,l),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const n=this.light.distance?this.light.distance:1e3,s=n*Math.tan(this.light.angle);this.cone.scale.set(s,s,n),qu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(qu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Gi=new N,Oo=new tt,wl=new tt;class $x extends null{constructor(n){const s=Yu(n),r=new at,a=[],l=[],u=new Ce(0,0,1),f=new Ce(0,1,0);for(let p=0;p<s.length;p++){const m=s[p];m.parent&&m.parent.isBone&&(a.push(0,0,0),a.push(0,0,0),l.push(u.r,u.g,u.b),l.push(f.r,f.g,f.b))}r.setAttribute("position",new Ne(a,3)),r.setAttribute("color",new Ne(l,3));const d=new En({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,d),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=n,this.bones=s,this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(n){const s=this.bones,r=this.geometry,a=r.getAttribute("position");wl.copy(this.root.matrixWorld).invert();for(let l=0,u=0;l<s.length;l++){const f=s[l];f.parent&&f.parent.isBone&&(Oo.multiplyMatrices(wl,f.matrixWorld),Gi.setFromMatrixPosition(Oo),a.setXYZ(u,Gi.x,Gi.y,Gi.z),Oo.multiplyMatrices(wl,f.parent.matrixWorld),Gi.setFromMatrixPosition(Oo),a.setXYZ(u+1,Gi.x,Gi.y,Gi.z),u+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(n)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Yu(h){const n=[];h.isBone===!0&&n.push(h);for(let s=0;s<h.children.length;s++)n.push.apply(n,Yu(h.children[s]));return n}class Zx extends null{constructor(n,s,r){const a=new Ro(s,4,2),l=new Fi({wireframe:!0,fog:!1,toneMapped:!1});super(a,l),this.light=n,this.color=r,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _0=new N,$u=new Ce,Zu=new Ce;class Jx extends null{constructor(n,s,r){super(),this.light=n,this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1,this.color=r,this.type="HemisphereLightHelper";const a=new Ao(s);a.rotateY(Math.PI*.5),this.material=new Fi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const l=a.getAttribute("position"),u=new Float32Array(l.count*3);a.setAttribute("color",new Vt(u,3)),this.add(new _n(a,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const n=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const s=n.geometry.getAttribute("color");$u.copy(this.light.color),Zu.copy(this.light.groundColor);for(let r=0,a=s.count;r<a;r++){const l=r<a/2?$u:Zu;s.setXYZ(r,l.r,l.g,l.b)}s.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),n.lookAt(_0.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Kx extends null{constructor(n=10,s=10,r=4473924,a=8947848){r=new Ce(r),a=new Ce(a);const l=s/2,u=n/s,f=n/2,d=[],p=[];for(let _=0,x=0,v=-f;_<=s;_++,v+=u){d.push(-f,0,v,f,0,v),d.push(v,0,-f,v,0,f);const b=_===l?r:a;b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3,b.toArray(p,x),x+=3}const m=new at;m.setAttribute("position",new Ne(d,3)),m.setAttribute("color",new Ne(p,3));const g=new En({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jx extends null{constructor(n=10,s=16,r=8,a=64,l=4473924,u=8947848){l=new Ce(l),u=new Ce(u);const f=[],d=[];if(s>1)for(let g=0;g<s;g++){const _=g/s*(Math.PI*2),x=Math.sin(_)*n,v=Math.cos(_)*n;f.push(0,0,0),f.push(x,0,v);const b=g&1?l:u;d.push(b.r,b.g,b.b),d.push(b.r,b.g,b.b)}for(let g=0;g<r;g++){const _=g&1?l:u,x=n-n/r*g;for(let v=0;v<a;v++){let b=v/a*(Math.PI*2),M=Math.sin(b)*x,y=Math.cos(b)*x;f.push(M,0,y),d.push(_.r,_.g,_.b),b=(v+1)/a*(Math.PI*2),M=Math.sin(b)*x,y=Math.cos(b)*x,f.push(M,0,y),d.push(_.r,_.g,_.b)}}const p=new at;p.setAttribute("position",new Ne(f,3)),p.setAttribute("color",new Ne(d,3));const m=new En({vertexColors:!0,toneMapped:!1});super(p,m),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ju=new N,Fo=new N,Ku=new N;class Qx extends null{constructor(n,s,r){super(),this.light=n,this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1,this.color=r,this.type="DirectionalLightHelper",s===void 0&&(s=1);let a=new at;a.setAttribute("position",new Ne([-s,s,0,s,s,0,s,-s,0,-s,-s,0,-s,s,0],3));const l=new En({fog:!1,toneMapped:!1});this.lightPlane=new mo(a,l),this.add(this.lightPlane),a=new at,a.setAttribute("position",new Ne([0,0,0,0,0,1],3)),this.targetLine=new mo(a,l),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ju.setFromMatrixPosition(this.light.matrixWorld),Fo.setFromMatrixPosition(this.light.target.matrixWorld),Ku.subVectors(Fo,Ju),this.lightPlane.lookAt(Fo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Fo),this.targetLine.scale.z=Ku.length()}}const Bo=new N,Ct=new Ic;class ey extends null{constructor(n){const s=new at,r=new En({color:16777215,vertexColors:!0,toneMapped:!1}),a=[],l=[],u={};f("n1","n2"),f("n2","n4"),f("n4","n3"),f("n3","n1"),f("f1","f2"),f("f2","f4"),f("f4","f3"),f("f3","f1"),f("n1","f1"),f("n2","f2"),f("n3","f3"),f("n4","f4"),f("p","n1"),f("p","n2"),f("p","n3"),f("p","n4"),f("u1","u2"),f("u2","u3"),f("u3","u1"),f("c","t"),f("p","c"),f("cn1","cn2"),f("cn3","cn4"),f("cf1","cf2"),f("cf3","cf4");function f(v,b){d(v),d(b)}function d(v){a.push(0,0,0),l.push(0,0,0),u[v]===void 0&&(u[v]=[]),u[v].push(a.length/3-1)}s.setAttribute("position",new Ne(a,3)),s.setAttribute("color",new Ne(l,3)),super(s,r),this.type="CameraHelper",this.camera=n,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=n.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=u,this.update();const p=new Ce(16755200),m=new Ce(16711680),g=new Ce(43775),_=new Ce(16777215),x=new Ce(3355443);this.setColors(p,m,g,_,x)}setColors(n,s,r,a,l){const f=this.geometry.getAttribute("color");f.setXYZ(0,n.r,n.g,n.b),f.setXYZ(1,n.r,n.g,n.b),f.setXYZ(2,n.r,n.g,n.b),f.setXYZ(3,n.r,n.g,n.b),f.setXYZ(4,n.r,n.g,n.b),f.setXYZ(5,n.r,n.g,n.b),f.setXYZ(6,n.r,n.g,n.b),f.setXYZ(7,n.r,n.g,n.b),f.setXYZ(8,n.r,n.g,n.b),f.setXYZ(9,n.r,n.g,n.b),f.setXYZ(10,n.r,n.g,n.b),f.setXYZ(11,n.r,n.g,n.b),f.setXYZ(12,n.r,n.g,n.b),f.setXYZ(13,n.r,n.g,n.b),f.setXYZ(14,n.r,n.g,n.b),f.setXYZ(15,n.r,n.g,n.b),f.setXYZ(16,n.r,n.g,n.b),f.setXYZ(17,n.r,n.g,n.b),f.setXYZ(18,n.r,n.g,n.b),f.setXYZ(19,n.r,n.g,n.b),f.setXYZ(20,n.r,n.g,n.b),f.setXYZ(21,n.r,n.g,n.b),f.setXYZ(22,n.r,n.g,n.b),f.setXYZ(23,n.r,n.g,n.b),f.setXYZ(24,s.r,s.g,s.b),f.setXYZ(25,s.r,s.g,s.b),f.setXYZ(26,s.r,s.g,s.b),f.setXYZ(27,s.r,s.g,s.b),f.setXYZ(28,s.r,s.g,s.b),f.setXYZ(29,s.r,s.g,s.b),f.setXYZ(30,s.r,s.g,s.b),f.setXYZ(31,s.r,s.g,s.b),f.setXYZ(32,r.r,r.g,r.b),f.setXYZ(33,r.r,r.g,r.b),f.setXYZ(34,r.r,r.g,r.b),f.setXYZ(35,r.r,r.g,r.b),f.setXYZ(36,r.r,r.g,r.b),f.setXYZ(37,r.r,r.g,r.b),f.setXYZ(38,a.r,a.g,a.b),f.setXYZ(39,a.r,a.g,a.b),f.setXYZ(40,l.r,l.g,l.b),f.setXYZ(41,l.r,l.g,l.b),f.setXYZ(42,l.r,l.g,l.b),f.setXYZ(43,l.r,l.g,l.b),f.setXYZ(44,l.r,l.g,l.b),f.setXYZ(45,l.r,l.g,l.b),f.setXYZ(46,l.r,l.g,l.b),f.setXYZ(47,l.r,l.g,l.b),f.setXYZ(48,l.r,l.g,l.b),f.setXYZ(49,l.r,l.g,l.b),f.needsUpdate=!0}update(){const n=this.geometry,s=this.pointMap,r=1,a=1;Ct.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Pt("c",s,n,Ct,0,0,-1),Pt("t",s,n,Ct,0,0,1),Pt("n1",s,n,Ct,-r,-a,-1),Pt("n2",s,n,Ct,r,-a,-1),Pt("n3",s,n,Ct,-r,a,-1),Pt("n4",s,n,Ct,r,a,-1),Pt("f1",s,n,Ct,-r,-a,1),Pt("f2",s,n,Ct,r,-a,1),Pt("f3",s,n,Ct,-r,a,1),Pt("f4",s,n,Ct,r,a,1),Pt("u1",s,n,Ct,r*.7,a*1.1,-1),Pt("u2",s,n,Ct,-r*.7,a*1.1,-1),Pt("u3",s,n,Ct,0,a*2,-1),Pt("cf1",s,n,Ct,-r,0,1),Pt("cf2",s,n,Ct,r,0,1),Pt("cf3",s,n,Ct,0,-a,1),Pt("cf4",s,n,Ct,0,a,1),Pt("cn1",s,n,Ct,-r,0,-1),Pt("cn2",s,n,Ct,r,0,-1),Pt("cn3",s,n,Ct,0,-a,-1),Pt("cn4",s,n,Ct,0,a,-1),n.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pt(h,n,s,r,a,l,u){Bo.set(a,l,u).unproject(r);const f=n[h];if(f!==void 0){const d=s.getAttribute("position");for(let p=0,m=f.length;p<m;p++)d.setXYZ(f[p],Bo.x,Bo.y,Bo.z)}}const zo=new mi;class ty extends null{constructor(n,s=16776960){const r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=new Float32Array(8*3),l=new at;l.setIndex(new Vt(r,1)),l.setAttribute("position",new Vt(a,3)),super(l,new En({color:s,toneMapped:!1})),this.object=n,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(n){if(n!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&zo.setFromObject(this.object),zo.isEmpty())return;const s=zo.min,r=zo.max,a=this.geometry.attributes.position,l=a.array;l[0]=r.x,l[1]=r.y,l[2]=r.z,l[3]=s.x,l[4]=r.y,l[5]=r.z,l[6]=s.x,l[7]=s.y,l[8]=r.z,l[9]=r.x,l[10]=s.y,l[11]=r.z,l[12]=r.x,l[13]=r.y,l[14]=s.z,l[15]=s.x,l[16]=r.y,l[17]=s.z,l[18]=s.x,l[19]=s.y,l[20]=s.z,l[21]=r.x,l[22]=s.y,l[23]=s.z,a.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(n){return this.object=n,this.update(),this}copy(n,s){return super.copy(n,s),this.object=n.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny extends null{constructor(n,s=16776960){const r=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),a=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],l=new at;l.setIndex(new Vt(r,1)),l.setAttribute("position",new Ne(a,3)),super(l,new En({color:s,toneMapped:!1})),this.box=n,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(n){const s=this.box;s.isEmpty()||(s.getCenter(this.position),s.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(n))}dispose(){this.geometry.dispose(),this.material.dispose()}}class iy extends null{constructor(n,s=1,r=16776960){const a=r,l=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],u=new at;u.setAttribute("position",new Ne(l,3)),u.computeBoundingSphere(),super(u,new En({color:a,toneMapped:!1})),this.type="PlaneHelper",this.plane=n,this.size=s;const f=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],d=new at;d.setAttribute("position",new Ne(f,3)),d.computeBoundingSphere(),this.add(new _n(d,new Fi({color:a,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(n){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(n)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const ju=new N;let Go,Tl;class sy extends null{constructor(n=new N(0,0,1),s=new N(0,0,0),r=1,a=16776960,l=r*.2,u=l*.2){super(),this.type="ArrowHelper",Go===void 0&&(Go=new at,Go.setAttribute("position",new Ne([0,0,0,0,1,0],3)),Tl=new na(0,.5,1,5,1),Tl.translate(0,-.5,0)),this.position.copy(s),this.line=new mo(Go,new En({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _n(Tl,new Fi({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(n),this.setLength(r,l,u)}setDirection(n){if(n.y>.99999)this.quaternion.set(0,0,0,1);else if(n.y<-.99999)this.quaternion.set(1,0,0,0);else{ju.set(n.z,0,-n.x).normalize();const s=Math.acos(n.y);this.quaternion.setFromAxisAngle(ju,s)}}setLength(n,s=n*.2,r=s*.2){this.line.scale.set(1,Math.max(1e-4,n-s),1),this.line.updateMatrix(),this.cone.scale.set(r,s,r),this.cone.position.y=n,this.cone.updateMatrix()}setColor(n){this.line.material.color.set(n),this.cone.material.color.set(n)}copy(n){return super.copy(n,!1),this.line.copy(n.line),this.cone.copy(n.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ry extends null{constructor(n=1){const s=[0,0,0,n,0,0,0,0,0,0,n,0,0,0,0,0,0,n],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new at;a.setAttribute("position",new Ne(s,3)),a.setAttribute("color",new Ne(r,3));const l=new En({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(n,s,r){const a=new Ce,l=this.geometry.attributes.color.array;return a.set(n),a.toArray(l,0),a.toArray(l,3),a.set(s),a.toArray(l,6),a.toArray(l,9),a.set(r),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ay{constructor(){this.type="ShapePath",this.color=new Ce,this.subPaths=[],this.currentPath=null}moveTo(n,s){return this.currentPath=new yo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(n,s),this}lineTo(n,s){return this.currentPath.lineTo(n,s),this}quadraticCurveTo(n,s,r,a){return this.currentPath.quadraticCurveTo(n,s,r,a),this}bezierCurveTo(n,s,r,a,l,u){return this.currentPath.bezierCurveTo(n,s,r,a,l,u),this}splineThru(n){return this.currentPath.splineThru(n),this}toShapes(n){function s(y){const T=[];for(let E=0,R=y.length;E<R;E++){const P=y[E],I=new fr;I.curves=P.curves,T.push(I)}return T}function r(y,T){const E=T.length;let R=!1;for(let P=E-1,I=0;I<E;P=I++){let B=T[P],G=T[I],A=G.x-B.x,O=G.y-B.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(B=T[I],A=-A,G=T[P],O=-O),y.y<B.y||y.y>G.y)continue;if(y.y===B.y){if(y.x===B.x)return!0}else{const $=O*(y.x-B.x)-A*(y.y-B.y);if($===0)return!0;if($<0)continue;R=!R}}else{if(y.y!==B.y)continue;if(G.x<=y.x&&y.x<=B.x||B.x<=y.x&&y.x<=G.x)return!0}}return R}const a=Ei.isClockWise,l=this.subPaths;if(l.length===0)return[];let u,f,d;const p=[];if(l.length===1)return f=l[0],d=new fr,d.curves=f.curves,p.push(d),p;let m=!a(l[0].getPoints());m=n?!m:m;const g=[],_=[];let x=[],v=0,b;_[v]=void 0,x[v]=[];for(let y=0,T=l.length;y<T;y++)f=l[y],b=f.getPoints(),u=a(b),u=n?!u:u,u?(!m&&_[v]&&v++,_[v]={s:new fr,p:b},_[v].s.curves=f.curves,m&&v++,x[v]=[]):x[v].push({h:f,p:b[0]});if(!_[0])return s(l);if(_.length>1){let y=!1,T=0;for(let E=0,R=_.length;E<R;E++)g[E]=[];for(let E=0,R=_.length;E<R;E++){const P=x[E];for(let I=0;I<P.length;I++){const B=P[I];let G=!0;for(let A=0;A<_.length;A++)r(B.p,_[A].p)&&(E!==A&&T++,G?(G=!1,g[A].push(B)):y=!0);G&&g[E].push(B)}}T>0&&y===!1&&(x=g)}let M;for(let y=0,T=_.length;y<T;y++){d=_[y].s,p.push(d),M=x[y];for(let E=0,R=M.length;E<R;E++)d.holes.push(M[E].h)}return p}}class oy extends null{constructor(n,s,r,a,l,u){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(n,s,r,a,l,u)}}class cy extends null{constructor(n,s,r,a){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(n,s,r,a)}}class ly extends null{constructor(n,s,r,a){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(n,s,r,a)}}class hy extends null{constructor(n,s,r,a,l,u,f){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(n,s,r,a,l,u,f)}}class uy extends null{constructor(n,s,r,a,l,u,f,d){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(n,s,r,a,l,u,f,d)}}class fy extends null{constructor(n,s){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(n,s)}}class dy extends null{constructor(n,s){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(n,s)}}class py extends null{constructor(n,s){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(n,s)}}class my extends null{constructor(n,s,r,a){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(n,s,r,a)}}class gy extends null{constructor(n,s){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(n,s)}}class _y extends null{constructor(n,s,r,a){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(n,s,r,a)}}class xy extends null{constructor(n,s,r,a){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(n,s,r,a)}}class yy extends null{constructor(n,s,r,a,l,u){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(n,s,r,a,l,u)}}class vy extends null{constructor(n,s){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(n,s)}}class My extends null{constructor(n,s,r,a,l,u,f){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(n,s,r,a,l,u,f)}}class Sy extends null{constructor(n,s){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(n,s)}}class by extends null{constructor(n,s,r,a,l){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(n,s,r,a,l)}}class Ey extends null{constructor(n,s,r,a,l,u){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(n,s,r,a,l,u)}}class wy extends null{constructor(n,s,r,a,l){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(n,s,r,a,l)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dn}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dn)},56983:function(ri,ai){"use strict";class Et{static isWebGLAvailable(){try{const pn=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(pn.getContext("webgl")||pn.getContext("experimental-webgl")))}catch(pn){return!1}}static isWebGL2Available(){try{const pn=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&pn.getContext("webgl2"))}catch(pn){return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(pn){const Ut={1:"WebGL",2:"WebGL 2"},Es={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let en='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const wt=document.createElement("div");return wt.id="webglmessage",wt.style.fontFamily="monospace",wt.style.fontSize="13px",wt.style.fontWeight="normal",wt.style.textAlign="center",wt.style.background="#fff",wt.style.color="#000",wt.style.padding="1.5em",wt.style.width="400px",wt.style.margin="5em auto 0",Es[pn]?en=en.replace("$0","graphics card"):en=en.replace("$0","browser"),en=en.replace("$1",Ut[pn]),wt.innerHTML=en,wt}}ai.Z=Et}}]);
