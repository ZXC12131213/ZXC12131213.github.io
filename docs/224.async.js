(self.webpackChunk=self.webpackChunk||[]).push([[224],{15600:function(Mt,Fe,Z){"use strict";Z.d(Fe,{Z:function(){return Nt}});var at=Z(84875),Ce=Z.n(at),ue=Z(24572),de=Z(49544),ee=Z(91600),Qe=Z(26143),o=Z(93236),pt=Z(7373),st=Z(75294),Ue=Z(51163),Je=Z(58733),ce=Z(75782),ye=Z(95533),Ve=o.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0}),be=Ve;function He(e,r,a){return(e-r)/(a-r)}function je(e,r,a,s){var c=He(r,a,s),m={};switch(e){case"rtl":m.right="".concat(c*100,"%"),m.transform="translateX(50%)";break;case"btt":m.bottom="".concat(c*100,"%"),m.transform="translateY(50%)";break;case"ttb":m.top="".concat(c*100,"%"),m.transform="translateY(-50%)";break;default:m.left="".concat(c*100,"%"),m.transform="translateX(-50%)";break}return m}function Me(e,r){return Array.isArray(e)?e[r]:e}var lt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],gt=o.forwardRef(function(e,r){var a,s,c=e.prefixCls,m=e.value,S=e.valueIndex,T=e.onStartMove,V=e.style,A=e.render,L=e.dragging,$=e.onOffsetChange,O=(0,Je.Z)(e,lt),b=o.useContext(be),y=b.min,z=b.max,x=b.direction,R=b.disabled,v=b.keyboard,F=b.range,ve=b.tabIndex,K=b.ariaLabelForHandle,k=b.ariaLabelledByForHandle,J=b.ariaValueTextFormatterForHandle,ae="".concat(c,"-handle"),U=function(oe){R||T(oe,S)},P=function(oe){if(!R&&v){var X=null;switch(oe.which||oe.keyCode){case ye.Z.LEFT:X=x==="ltr"||x==="btt"?-1:1;break;case ye.Z.RIGHT:X=x==="ltr"||x==="btt"?1:-1;break;case ye.Z.UP:X=x!=="ttb"?1:-1;break;case ye.Z.DOWN:X=x!=="ttb"?-1:1;break;case ye.Z.HOME:X="min";break;case ye.Z.END:X="max";break;case ye.Z.PAGE_UP:X=2;break;case ye.Z.PAGE_DOWN:X=-2;break}X!==null&&(oe.preventDefault(),$(X,S))}},te=je(x,m,y,z),_=o.createElement("div",(0,Ue.Z)({ref:r,className:Ce()(ae,(a={},(0,ue.Z)(a,"".concat(ae,"-").concat(S+1),F),(0,ue.Z)(a,"".concat(ae,"-dragging"),L),a)),style:(0,ce.Z)((0,ce.Z)({},te),V),onMouseDown:U,onTouchStart:U,onKeyDown:P,tabIndex:R?null:Me(ve,S),role:"slider","aria-valuemin":y,"aria-valuemax":z,"aria-valuenow":m,"aria-disabled":R,"aria-label":Me(K,S),"aria-labelledby":Me(k,S),"aria-valuetext":(s=Me(J,S))===null||s===void 0?void 0:s(m)},O));return A&&(_=A(_,{index:S,prefixCls:c,value:m,dragging:L})),_}),C=gt,_e=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],he=o.forwardRef(function(e,r){var a=e.prefixCls,s=e.style,c=e.onStartMove,m=e.onOffsetChange,S=e.values,T=e.handleRender,V=e.draggingIndex,A=(0,Je.Z)(e,_e),L=o.useRef({});return o.useImperativeHandle(r,function(){return{focus:function(O){var b;(b=L.current[O])===null||b===void 0||b.focus()}}}),o.createElement(o.Fragment,null,S.map(function($,O){return o.createElement(C,(0,Ue.Z)({ref:function(y){y?L.current[O]=y:delete L.current[O]},dragging:V===O,prefixCls:a,style:Me(s,O),key:O,value:$,valueIndex:O,onStartMove:c,onOffsetChange:m,render:T},A))}))}),Ie=he;function Le(e){var r="touches"in e?e.touches[0]:e;return{pageX:r.pageX,pageY:r.pageY}}function yt(e,r,a,s,c,m,S,T,V){var A=o.useState(null),L=(0,ee.Z)(A,2),$=L[0],O=L[1],b=o.useState(-1),y=(0,ee.Z)(b,2),z=y[0],x=y[1],R=o.useState(a),v=(0,ee.Z)(R,2),F=v[0],ve=v[1],K=o.useState(a),k=(0,ee.Z)(K,2),J=k[0],ae=k[1],U=o.useRef(null),P=o.useRef(null);o.useEffect(function(){z===-1&&ve(a)},[a,z]),o.useEffect(function(){return function(){document.removeEventListener("mousemove",U.current),document.removeEventListener("mouseup",P.current),document.removeEventListener("touchmove",U.current),document.removeEventListener("touchend",P.current)}},[]);var te=function(Y,G){F.some(function(ne,Se){return ne!==Y[Se]})&&(G!==void 0&&O(G),ve(Y),S(Y))},_=function(Y,G){if(Y===-1){var ne=J[0],Se=J[J.length-1],Te=s-ne,ze=c-Se,q=G*(c-s);q=Math.max(q,Te),q=Math.min(q,ze);var Ee=m(ne+q);q=Ee-ne;var Re=J.map(function(Ye){return Ye+q});te(Re)}else{var pe=(c-s)*G,Pe=(0,de.Z)(F);Pe[Y]=J[Y];var Xe=V(Pe,pe,Y,"dist");te(Xe.values,Xe.value)}},le=o.useRef(_);le.current=_;var oe=function(Y,G){Y.stopPropagation();var ne=a[G];x(G),O(ne),ae(a);var Se=Le(Y),Te=Se.pageX,ze=Se.pageY,q=function(pe){pe.preventDefault();var Pe=Le(pe),Xe=Pe.pageX,Ye=Pe.pageY,et=Xe-Te,tt=Ye-ze,nt=e.current.getBoundingClientRect(),it=nt.width,De=nt.height,xe;switch(r){case"btt":xe=-tt/De;break;case"ttb":xe=tt/De;break;case"rtl":xe=-et/it;break;default:xe=et/it}le.current(G,xe)},Ee=function Re(pe){pe.preventDefault(),document.removeEventListener("mouseup",Re),document.removeEventListener("mousemove",q),document.removeEventListener("touchend",Re),document.removeEventListener("touchmove",q),U.current=null,P.current=null,x(-1),T()};document.addEventListener("mouseup",Ee),document.addEventListener("mousemove",q),document.addEventListener("touchend",Ee),document.addEventListener("touchmove",q),U.current=q,P.current=Ee},X=o.useMemo(function(){var me=(0,de.Z)(a).sort(function(G,ne){return G-ne}),Y=(0,de.Z)(F).sort(function(G,ne){return G-ne});return me.every(function(G,ne){return G===Y[ne]})?F:a},[a,F]);return[z,$,X,oe]}function bt(e){var r=e.prefixCls,a=e.style,s=e.start,c=e.end,m=e.index,S=e.onStartMove,T=o.useContext(be),V=T.direction,A=T.min,L=T.max,$=T.disabled,O=T.range,b="".concat(r,"-track"),y=He(s,A,L),z=He(c,A,L),x=function(F){!$&&S&&S(F,-1)},R={};switch(V){case"rtl":R.right="".concat(y*100,"%"),R.width="".concat(z*100-y*100,"%");break;case"btt":R.bottom="".concat(y*100,"%"),R.height="".concat(z*100-y*100,"%");break;case"ttb":R.top="".concat(y*100,"%"),R.height="".concat(z*100-y*100,"%");break;default:R.left="".concat(y*100,"%"),R.width="".concat(z*100-y*100,"%")}return o.createElement("div",{className:Ce()(b,O&&"".concat(b,"-").concat(m+1)),style:(0,ce.Z)((0,ce.Z)({},R),a),onMouseDown:x,onTouchStart:x})}function ct(e){var r=e.prefixCls,a=e.style,s=e.values,c=e.startPoint,m=e.onStartMove,S=o.useContext(be),T=S.included,V=S.range,A=S.min,L=o.useMemo(function(){if(!V){if(s.length===0)return[];var $=c!=null?c:A,O=s[0];return[{start:Math.min($,O),end:Math.max($,O)}]}for(var b=[],y=0;y<s.length-1;y+=1)b.push({start:s[y],end:s[y+1]});return b},[s,V,c,A]);return T?L.map(function($,O){var b=$.start,y=$.end;return o.createElement(bt,{index:O,prefixCls:r,style:Me(a,O),start:b,end:y,key:O,onStartMove:m})}):null}function St(e){var r=e.prefixCls,a=e.style,s=e.children,c=e.value,m=e.onClick,S=o.useContext(be),T=S.min,V=S.max,A=S.direction,L=S.includedStart,$=S.includedEnd,O=S.included,b="".concat(r,"-text"),y=je(A,c,T,V);return o.createElement("span",{className:Ce()(b,(0,ue.Z)({},"".concat(b,"-active"),O&&L<=c&&c<=$)),style:(0,ce.Z)((0,ce.Z)({},y),a),onMouseDown:function(x){x.stopPropagation()},onClick:function(){m(c)}},s)}function i(e){var r=e.prefixCls,a=e.marks,s=e.onClick,c="".concat(r,"-mark");return a.length?o.createElement("div",{className:c},a.map(function(m){var S=m.value,T=m.style,V=m.label;return o.createElement(St,{key:S,prefixCls:c,style:T,value:S,onClick:s},V)})):null}function t(e){var r=e.prefixCls,a=e.value,s=e.style,c=e.activeStyle,m=o.useContext(be),S=m.min,T=m.max,V=m.direction,A=m.included,L=m.includedStart,$=m.includedEnd,O="".concat(r,"-dot"),b=A&&L<=a&&a<=$,y=(0,ce.Z)((0,ce.Z)({},je(V,a,S,T)),typeof s=="function"?s(a):s);return b&&(y=(0,ce.Z)((0,ce.Z)({},y),typeof c=="function"?c(a):c)),o.createElement("span",{className:Ce()(O,(0,ue.Z)({},"".concat(O,"-active"),b)),style:y})}function n(e){var r=e.prefixCls,a=e.marks,s=e.dots,c=e.style,m=e.activeStyle,S=o.useContext(be),T=S.min,V=S.max,A=S.step,L=o.useMemo(function(){var $=new Set;if(a.forEach(function(b){$.add(b.value)}),s&&A!==null)for(var O=T;O<=V;)$.add(O),O+=A;return Array.from($)},[T,V,A,s,a]);return o.createElement("div",{className:"".concat(r,"-step")},L.map(function($){return o.createElement(t,{prefixCls:r,key:$,value:$,style:c,activeStyle:m})}))}function u(e,r,a,s,c,m){var S=o.useCallback(function(b){var y=isFinite(b)?b:e;return y=Math.min(r,b),y=Math.max(e,y),y},[e,r]),T=o.useCallback(function(b){if(a!==null){var y=e+Math.round((S(b)-e)/a)*a,z=function(F){return(String(F).split(".")[1]||"").length},x=Math.max(z(a),z(r),z(e)),R=Number(y.toFixed(x));return e<=R&&R<=r?R:null}return null},[a,e,r,S]),V=o.useCallback(function(b){var y=S(b),z=s.map(function(v){return v.value});a!==null&&z.push(T(b)),z.push(e,r);var x=z[0],R=r-e;return z.forEach(function(v){var F=Math.abs(y-v);F<=R&&(x=v,R=F)}),x},[e,r,s,a,S,T]),A=function b(y,z,x){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof z=="number"){var v,F=y[x],ve=F+z,K=[];s.forEach(function(P){K.push(P.value)}),K.push(e,r),K.push(T(F));var k=z>0?1:-1;R==="unit"?K.push(T(F+k*a)):K.push(T(ve)),K=K.filter(function(P){return P!==null}).filter(function(P){return z<0?P<=F:P>=F}),R==="unit"&&(K=K.filter(function(P){return P!==F}));var J=R==="unit"?F:ve;v=K[0];var ae=Math.abs(v-J);if(K.forEach(function(P){var te=Math.abs(P-J);te<ae&&(v=P,ae=te)}),v===void 0)return z<0?e:r;if(R==="dist")return v;if(Math.abs(z)>1){var U=(0,de.Z)(y);return U[x]=v,b(U,z-k,x,R)}return v}else{if(z==="min")return e;if(z==="max")return r}},L=function(y,z,x){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",v=y[x],F=A(y,z,x,R);return{value:F,changed:F!==v}},$=function(y){return m===null&&y===0||typeof m=="number"&&y<m},O=function(y,z,x){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",v=y.map(V),F=v[x],ve=A(v,z,x,R);if(v[x]=ve,c===!1){var K=m||0;x>0&&v[x-1]!==F&&(v[x]=Math.max(v[x],v[x-1]+K)),x<v.length-1&&v[x+1]!==F&&(v[x]=Math.min(v[x],v[x+1]-K))}else if(typeof m=="number"||m===null){for(var k=x+1;k<v.length;k+=1)for(var J=!0;$(v[k]-v[k-1])&&J;){var ae=L(v,1,k);v[k]=ae.value,J=ae.changed}for(var U=x;U>0;U-=1)for(var P=!0;$(v[U]-v[U-1])&&P;){var te=L(v,-1,U-1);v[U-1]=te.value,P=te.changed}for(var _=v.length-1;_>0;_-=1)for(var le=!0;$(v[_]-v[_-1])&&le;){var oe=L(v,-1,_-1);v[_-1]=oe.value,le=oe.changed}for(var X=0;X<v.length-1;X+=1)for(var me=!0;$(v[X+1]-v[X])&&me;){var Y=L(v,1,X+1);v[X+1]=Y.value,me=Y.changed}}return{value:v[x],values:v}};return[V,O]}var l=Z(25297),f=o.forwardRef(function(e,r){var a,s=e.prefixCls,c=s===void 0?"rc-slider":s,m=e.className,S=e.style,T=e.disabled,V=T===void 0?!1:T,A=e.keyboard,L=A===void 0?!0:A,$=e.autoFocus,O=e.onFocus,b=e.onBlur,y=e.min,z=y===void 0?0:y,x=e.max,R=x===void 0?100:x,v=e.step,F=v===void 0?1:v,ve=e.value,K=e.defaultValue,k=e.range,J=e.count,ae=e.onChange,U=e.onBeforeChange,P=e.onAfterChange,te=e.allowCross,_=te===void 0?!0:te,le=e.pushable,oe=le===void 0?!1:le,X=e.draggableTrack,me=e.reverse,Y=e.vertical,G=e.included,ne=G===void 0?!0:G,Se=e.startPoint,Te=e.trackStyle,ze=e.handleStyle,q=e.railStyle,Ee=e.dotStyle,Re=e.activeDotStyle,pe=e.marks,Pe=e.dots,Xe=e.handleRender,Ye=e.tabIndex,et=Ye===void 0?0:Ye,tt=e.ariaLabelForHandle,nt=e.ariaLabelledByForHandle,it=e.ariaValueTextFormatterForHandle,De=o.useRef(),xe=o.useRef(),dt=o.useMemo(function(){return Y?me?"ttb":"btt":me?"rtl":"ltr"},[me,Y]),ge=o.useMemo(function(){return isFinite(z)?z:0},[z]),Ge=o.useMemo(function(){return isFinite(R)?R:100},[R]),We=o.useMemo(function(){return F!==null&&F<=0?1:F},[F]),Zt=o.useMemo(function(){return oe===!0?We:oe>=0?oe:!1},[oe,We]),ht=o.useMemo(function(){var ie=Object.keys(pe||{});return ie.map(function(j){var D=pe[j],re={value:Number(j)};return D&&(0,Qe.Z)(D)==="object"&&!o.isValidElement(D)&&("label"in D||"style"in D)?(re.style=D.style,re.label=D.label):re.label=D,re}).filter(function(j){var D=j.label;return D||typeof D=="number"}).sort(function(j,D){return j.value-D.value})},[pe]),Ut=u(ge,Ge,We,ht,_,Zt),Tt=(0,ee.Z)(Ut,2),ft=Tt[0],zt=Tt[1],jt=(0,st.Z)(K,{value:ve}),Et=(0,ee.Z)(jt,2),$e=Et[0],It=Et[1],we=o.useMemo(function(){var ie=$e==null?[]:Array.isArray($e)?$e:[$e],j=(0,ee.Z)(ie,1),D=j[0],re=D===void 0?ge:D,Q=$e===null?[]:[re];if(k){if(Q=(0,de.Z)(ie),J||$e===void 0){var qe=J>=0?J+1:2;for(Q=Q.slice(0,qe);Q.length<qe;){var Ze;Q.push((Ze=Q[Q.length-1])!==null&&Ze!==void 0?Ze:ge)}}Q.sort(function(Oe,rt){return Oe-rt})}return Q.forEach(function(Oe,rt){Q[rt]=ft(Oe)}),Q},[$e,k,ge,J,ft]),vt=o.useRef(we);vt.current=we;var Ne=function(j){return k?j:j[0]},xt=function(j){var D=(0,de.Z)(j).sort(function(re,Q){return re-Q});ae&&!(0,pt.Z)(D,vt.current,!0)&&ae(Ne(D)),It(D)},Rt=function(j){if(!V){var D=0,re=Ge-ge;we.forEach(function(qe,Ze){var Oe=Math.abs(j-qe);Oe<=re&&(re=Oe,D=Ze)});var Q=(0,de.Z)(we);Q[D]=j,k&&!we.length&&J===void 0&&Q.push(j),U==null||U(Ne(Q)),xt(Q),P==null||P(Ne(Q))}},kt=function(j){j.preventDefault();var D=xe.current.getBoundingClientRect(),re=D.width,Q=D.height,qe=D.left,Ze=D.top,Oe=D.bottom,rt=D.right,Bt=j.clientX,At=j.clientY,ot;switch(dt){case"btt":ot=(Oe-At)/Q;break;case"ttb":ot=(At-Ze)/Q;break;case"rtl":ot=(rt-Bt)/re;break;default:ot=(Bt-qe)/re}var tn=ge+ot*(Ge-ge);Rt(ft(tn))},Xt=o.useState(null),Pt=(0,ee.Z)(Xt,2),wt=Pt[0],Dt=Pt[1],Yt=function(j,D){if(!V){var re=zt(we,j,D);U==null||U(Ne(we)),xt(re.values),P==null||P(Ne(re.values)),Dt(re.value)}};o.useEffect(function(){if(wt!==null){var ie=we.indexOf(wt);ie>=0&&De.current.focus(ie)}Dt(null)},[wt]);var Gt=o.useMemo(function(){return X&&We===null?!1:X},[X,We]),Kt=function(){P==null||P(Ne(vt.current))},qt=yt(xe,dt,we,ge,Ge,ft,xt,Kt,zt),mt=(0,ee.Z)(qt,4),$t=mt[0],Qt=mt[1],Ct=mt[2],Jt=mt[3],Ot=function(j,D){Jt(j,D),U==null||U(Ne(vt.current))},Ft=$t!==-1;o.useEffect(function(){if(!Ft){var ie=we.lastIndexOf(Qt);De.current.focus(ie)}},[Ft]);var Ke=o.useMemo(function(){return(0,de.Z)(Ct).sort(function(ie,j){return ie-j})},[Ct]),_t=o.useMemo(function(){return k?[Ke[0],Ke[Ke.length-1]]:[ge,Ke[0]]},[Ke,k,ge]),Vt=(0,ee.Z)(_t,2),Ht=Vt[0],Lt=Vt[1];o.useImperativeHandle(r,function(){return{focus:function(){De.current.focus(0)},blur:function(){var j=document,D=j.activeElement;xe.current.contains(D)&&(D==null||D.blur())}}}),o.useEffect(function(){$&&De.current.focus(0)},[]);var en=o.useMemo(function(){return{min:ge,max:Ge,direction:dt,disabled:V,keyboard:L,step:We,included:ne,includedStart:Ht,includedEnd:Lt,range:k,tabIndex:et,ariaLabelForHandle:tt,ariaLabelledByForHandle:nt,ariaValueTextFormatterForHandle:it}},[ge,Ge,dt,V,L,We,ne,Ht,Lt,k,et,tt,nt,it]);return o.createElement(be.Provider,{value:en},o.createElement("div",{ref:xe,className:Ce()(c,m,(a={},(0,ue.Z)(a,"".concat(c,"-disabled"),V),(0,ue.Z)(a,"".concat(c,"-vertical"),Y),(0,ue.Z)(a,"".concat(c,"-horizontal"),!Y),(0,ue.Z)(a,"".concat(c,"-with-marks"),ht.length),a)),style:S,onMouseDown:kt},o.createElement("div",{className:"".concat(c,"-rail"),style:q}),o.createElement(ct,{prefixCls:c,style:Te,values:Ke,startPoint:Se,onStartMove:Gt?Ot:null}),o.createElement(n,{prefixCls:c,marks:ht,dots:Pe,style:Ee,activeStyle:Re}),o.createElement(Ie,{ref:De,prefixCls:c,style:ze,values:Ct,draggingIndex:$t,onStartMove:Ot,onOffsetChange:Yt,onFocus:O,onBlur:b,handleRender:Xe}),o.createElement(i,{prefixCls:c,marks:ht,onClick:Rt})))}),g=f,p=g,B=Z(47151),I=Z(85422),w=Z(7735),E=Z(30775),h=o.forwardRef((e,r)=>{const{open:a}=e,s=(0,o.useRef)(null),c=(0,o.useRef)(null);function m(){I.Z.cancel(c.current),c.current=null}function S(){c.current=(0,I.Z)(()=>{var T;(T=s.current)===null||T===void 0||T.forcePopupAlign(),c.current=null})}return o.useEffect(()=>(a?S():m(),m),[a,e.title]),o.createElement(E.Z,Object.assign({ref:(0,w.sQ)(s,r)},e))}),M=Z(99590),H=Z(3212),W=Z(50702),N=Z(87632);const se=e=>{const{componentCls:r,controlSize:a,dotSize:s,marginFull:c,marginPart:m,colorFillContentHover:S}=e;return{[r]:Object.assign(Object.assign({},(0,H.Wf)(e)),{position:"relative",height:a,margin:`${m}px ${c}px`,padding:0,cursor:"pointer",touchAction:"none",["&-vertical"]:{margin:`${c}px ${m}px`},[`${r}-rail`]:{position:"absolute",backgroundColor:e.colorFillTertiary,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},[`${r}-track`]:{position:"absolute",backgroundColor:e.colorPrimaryBorder,borderRadius:e.borderRadiusXS,transition:`background-color ${e.motionDurationMid}`},"&:hover":{[`${r}-rail`]:{backgroundColor:e.colorFillSecondary},[`${r}-track`]:{backgroundColor:e.colorPrimaryBorderHover},[`${r}-dot`]:{borderColor:S},[`${r}-handle::after`]:{boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorderHover}`},[`${r}-dot-active`]:{borderColor:e.colorPrimary}},[`${r}-handle`]:{position:"absolute",width:e.handleSize,height:e.handleSize,outline:"none",[`${r}-dragging`]:{zIndex:1},"&::before":{content:'""',position:"absolute",insetInlineStart:-e.handleLineWidth,insetBlockStart:-e.handleLineWidth,width:e.handleSize+e.handleLineWidth*2,height:e.handleSize+e.handleLineWidth*2,backgroundColor:"transparent"},"&::after":{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:e.handleSize,height:e.handleSize,backgroundColor:e.colorBgElevated,boxShadow:`0 0 0 ${e.handleLineWidth}px ${e.colorPrimaryBorder}`,borderRadius:"50%",cursor:"pointer",transition:`
            inset-inline-start ${e.motionDurationMid},
            inset-block-start ${e.motionDurationMid},
            width ${e.motionDurationMid},
            height ${e.motionDurationMid},
            box-shadow ${e.motionDurationMid}
          `},"&:hover, &:active, &:focus":{"&::before":{insetInlineStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),insetBlockStart:-((e.handleSizeHover-e.handleSize)/2+e.handleLineWidthHover),width:e.handleSizeHover+e.handleLineWidthHover*2,height:e.handleSizeHover+e.handleLineWidthHover*2},"&::after":{boxShadow:`0 0 0 ${e.handleLineWidthHover}px ${e.colorPrimary}`,width:e.handleSizeHover,height:e.handleSizeHover,insetInlineStart:(e.handleSize-e.handleSizeHover)/2,insetBlockStart:(e.handleSize-e.handleSizeHover)/2}}},[`${r}-mark`]:{position:"absolute",fontSize:e.fontSize},[`${r}-mark-text`]:{position:"absolute",display:"inline-block",color:e.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:e.colorText}},[`${r}-step`]:{position:"absolute",background:"transparent",pointerEvents:"none"},[`${r}-dot`]:{position:"absolute",width:s,height:s,backgroundColor:e.colorBgElevated,border:`${e.handleLineWidth}px solid ${e.colorBorderSecondary}`,borderRadius:"50%",cursor:"pointer",transition:`border-color ${e.motionDurationSlow}`,pointerEvents:"auto","&-active":{borderColor:e.colorPrimaryBorder}},[`&${r}-disabled`]:{cursor:"not-allowed",[`${r}-rail`]:{backgroundColor:`${e.colorFillSecondary} !important`},[`${r}-track`]:{backgroundColor:`${e.colorTextDisabled} !important`},[`
          ${r}-dot
        `]:{backgroundColor:e.colorBgElevated,borderColor:e.colorTextDisabled,boxShadow:"none",cursor:"not-allowed"},[`${r}-handle::after`]:{backgroundColor:e.colorBgElevated,cursor:"not-allowed",width:e.handleSize,height:e.handleSize,boxShadow:`0 0 0 ${e.handleLineWidth}px ${new M.C(e.colorTextDisabled).onBackground(e.colorBgContainer).toHexShortString()}`,insetInlineStart:0,insetBlockStart:0},[`
          ${r}-mark-text,
          ${r}-dot
        `]:{cursor:"not-allowed !important"}}})}},fe=(e,r)=>{const{componentCls:a,railSize:s,handleSize:c,dotSize:m}=e,S=r?"paddingBlock":"paddingInline",T=r?"width":"height",V=r?"height":"width",A=r?"insetBlockStart":"insetInlineStart",L=r?"top":"insetInlineStart";return{[S]:s,[V]:s*3,[`${a}-rail`]:{[T]:"100%",[V]:s},[`${a}-track`]:{[V]:s},[`${a}-handle`]:{[A]:(s*3-c)/2},[`${a}-mark`]:{insetInlineStart:0,top:0,[L]:c,[T]:"100%"},[`${a}-step`]:{insetInlineStart:0,top:0,[L]:s,[T]:"100%",[V]:s},[`${a}-dot`]:{position:"absolute",[A]:(s-m)/2}}},Be=e=>{const{componentCls:r,marginPartWithMark:a}=e;return{[`${r}-horizontal`]:Object.assign(Object.assign({},fe(e,!0)),{[`&${r}-with-marks`]:{marginBottom:a}})}},ke=e=>{const{componentCls:r}=e;return{[`${r}-vertical`]:Object.assign(Object.assign({},fe(e,!1)),{height:"100%"})}};var ut=(0,W.Z)("Slider",e=>{const r=(0,N.TS)(e,{marginPart:(e.controlHeight-e.controlSize)/2,marginFull:e.controlSize/2,marginPartWithMark:e.controlHeightLG-e.controlSize});return[se(r),Be(r),ke(r)]},e=>{const a=e.controlHeightLG/4,s=e.controlHeightSM/2,c=e.lineWidth+1,m=e.lineWidth+1*3;return{controlSize:a,railSize:4,handleSize:a,handleSizeHover:s,dotSize:8,handleLineWidth:c,handleLineWidthHover:m}}),Ae=function(e,r){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)r.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(a[s[c]]=e[s[c]]);return a};const Wt=e=>typeof e=="number"?e.toString():"";var Nt=o.forwardRef((e,r)=>{const{prefixCls:a,range:s,className:c,rootClassName:m,tooltipPrefixCls:S,tipFormatter:T,tooltipVisible:V,getTooltipPopupContainer:A,tooltipPlacement:L}=e,$=Ae(e,["prefixCls","range","className","rootClassName","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement"]),{getPrefixCls:O,direction:b,getPopupContainer:y}=o.useContext(B.E_),[z,x]=o.useState({}),R=(P,te)=>{x(_=>Object.assign(Object.assign({},_),{[P]:te}))},v=(P,te)=>P||(te?b==="rtl"?"left":"right":"top"),F=O("slider",a),[ve,K]=ut(F),k=Ce()(c,m,{[`${F}-rtl`]:b==="rtl"},K);b==="rtl"&&!$.vertical&&($.reverse=!$.reverse);const[J,ae]=o.useMemo(()=>s?typeof s=="object"?[!0,s.draggableTrack]:[!0,!1]:[!1],[s]),U=(P,te)=>{var _;const{index:le,dragging:oe}=te,{tooltip:X={},vertical:me}=e,Y=Object.assign({},X),{open:G,placement:ne,getPopupContainer:Se,prefixCls:Te,formatter:ze}=Y;let q;ze||ze===null?q=ze:T||T===null?q=T:q=Wt;const Ee=q?z[le]||oe:!1,Re=(_=G!=null?G:V)!==null&&_!==void 0?_:G===void 0&&Ee,pe=Object.assign(Object.assign({},P.props),{onMouseEnter:()=>R(le,!0),onMouseLeave:()=>R(le,!1)}),Pe=O("tooltip",Te!=null?Te:S);return o.createElement(h,{prefixCls:Pe,title:q?q(te.value):"",open:Re,placement:v(ne!=null?ne:L,me),key:le,overlayClassName:`${F}-tooltip`,getPopupContainer:Se||A||y},o.cloneElement(P,pe))};return ve(o.createElement(p,Object.assign({},$,{step:$.step,range:J,draggableTrack:ae,className:k,ref:r,prefixCls:F,handleRender:U})))})},19353:function(Mt){(function(Fe,Z){Mt.exports=Z()})(typeof self!="undefined"?self:this,()=>(()=>{"use strict";var Fe={d:(i,t)=>{for(var n in t)Fe.o(t,n)&&!Fe.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:t[n]})},o:(i,t)=>Object.prototype.hasOwnProperty.call(i,t),r:i=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})}},Z={};function at(){return typeof navigator!="undefined"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}Fe.r(Z),Fe.d(Z,{default:()=>St}),Number.prototype.clamp=function(i,t){return Math.min(Math.max(this,i),t)};function Ce(i){for(;i.children&&i.children.length>0;)Ce(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(t=>{i.material[t]&&i.material[t]!==null&&typeof i.material[t].dispose=="function"&&i.material[t].dispose()}),i.material.dispose())}const ue=typeof window=="object";let de=ue&&window.THREE||{};ue&&!window.VANTA&&(window.VANTA={});const ee=ue&&window.VANTA||{};ee.register=(i,t)=>ee[i]=n=>new t(n),ee.version="0.5.24";const Qe=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};ee.VantaBase=class{constructor(i={}){if(!ue)return!1;ee.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(i instanceof HTMLElement||typeof i=="string")&&(i={el:i}),Object.assign(this.options,i),this.options.THREE&&(de=this.options.THREE),this.el=this.options.el,this.el==null)Qe('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const f=this.el;if(this.el=(n=f,document.querySelector(n)),!this.el)return void Qe("Cannot find element",f)}var n,u;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(f){return Qe("Init error",f),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(u=this.options.backgroundColor,typeof u=="number"?"#"+("00000"+u.toString(16)).slice(-6):u)))}this.initMouse(),this.resize(),this.animationLoop();const l=window.addEventListener;l("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(l("scroll",this.windowMouseMoveWrapper),l("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(l("touchstart",this.windowTouchWrapper),l("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&l("deviceorientation",this.windowGyroWrapper)}setOptions(i={}){Object.assign(this.options,i),this.triggerMouseMove()}prepareEl(){let i,t;if(typeof Node!="undefined"&&Node.TEXT_NODE)for(i=0;i<this.el.childNodes.length;i++){const n=this.el.childNodes[i];if(n.nodeType===Node.TEXT_NODE){const u=document.createElement("span");u.textContent=n.textContent,n.parentElement.insertBefore(u,n),n.remove()}}for(i=0;i<this.el.children.length;i++)t=this.el.children[i],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(i,t={}){Object.assign(i.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(i.style,t),i.classList.add("vanta-canvas")}initThree(){de.WebGLRenderer?(this.renderer=new de.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new de.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const i=this.getCanvasElement();return!!i&&i.getBoundingClientRect()}windowMouseMoveWrapper(i){const t=this.getCanvasRect();if(!t)return!1;const n=i.clientX-t.left,u=i.clientY-t.top;n>=0&&u>=0&&n<=t.width&&u<=t.height&&(this.mouseX=n,this.mouseY=u,this.options.mouseEase||this.triggerMouseMove(n,u))}windowTouchWrapper(i){const t=this.getCanvasRect();if(!t)return!1;if(i.touches.length===1){const n=i.touches[0].clientX-t.left,u=i.touches[0].clientY-t.top;n>=0&&u>=0&&n<=t.width&&u<=t.height&&(this.mouseX=n,this.mouseY=u,this.options.mouseEase||this.triggerMouseMove(n,u))}}windowGyroWrapper(i){const t=this.getCanvasRect();if(!t)return!1;const n=Math.round(2*i.alpha)-t.left,u=Math.round(2*i.beta)-t.top;n>=0&&u>=0&&n<=t.width&&u<=t.height&&(this.mouseX=n,this.mouseY=u,this.options.mouseEase||this.triggerMouseMove(n,u))}triggerMouseMove(i,t){i===void 0&&t===void 0&&(this.options.mouseEase?(i=this.mouseEaseX,t=this.mouseEaseY):(i=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=i/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const n=i/this.width,u=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(n,u)}setSize(){this.scale||(this.scale=1),at()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const i=this.el.offsetHeight,t=this.el.getBoundingClientRect(),n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,u=t.top+n;return u-window.innerHeight<=n&&n<=u+i}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const i=performance.now();if(this.prevNow){let t=(i-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=i,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const i=window.removeEventListener;i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper),i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper),i("deviceorientation",this.windowGyroWrapper),i("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&Ce(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),ee.current===this&&(ee.current=null)}};const o=ee.VantaBase;let pt=typeof window=="object"&&window.THREE,{Camera:st,ClampToEdgeWrapping:Ue,DataTexture:Je,FloatType:ce,Mesh:ye,NearestFilter:Ve,PlaneBufferGeometry:be,RGBAFormat:He,Scene:je,ShaderMaterial:Me,WebGLRenderTarget:lt}=pt||{};const gt=function(i,t,n,u){u&&({Camera:st,ClampToEdgeWrapping:Ue,DataTexture:Je,FloatType:ce,Mesh:ye,NearestFilter:Ve,PlaneBufferGeometry:be,RGBAFormat:He,Scene:je,ShaderMaterial:Me,WebGLRenderTarget:lt}=u),this.variables=[],this.currentTextureIndex=0;var l=ce,f=new je,g=new st;g.position.z=1;var p={passThruTexture:{value:null}},B=E(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,p),I=new ye(new be(2,2),B);function w(d){d.defines.resolution="vec2( "+i.toFixed(1)+", "+t.toFixed(1)+" )"}function E(d,h){var M=new Me({uniforms:h=h||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:d});return w(M),M}f.add(I),this.setDataType=function(d){return l=d,this},this.addVariable=function(d,h,M){var H={name:d,initialValueTexture:M,material:this.createShaderMaterial(h),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Ve,magFilter:Ve};return this.variables.push(H),H},this.setVariableDependencies=function(d,h){d.dependencies=h},this.init=function(){if(!n.capabilities.isWebGL2&&!n.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var d=0;d<this.variables.length;d++){var h=this.variables[d];h.renderTargets[0]=this.createRenderTarget(i,t,h.wrapS,h.wrapT,h.minFilter,h.magFilter),h.renderTargets[1]=this.createRenderTarget(i,t,h.wrapS,h.wrapT,h.minFilter,h.magFilter),this.renderTexture(h.initialValueTexture,h.renderTargets[0]),this.renderTexture(h.initialValueTexture,h.renderTargets[1]);var M=h.material,H=M.uniforms;if(h.dependencies!==null)for(var W=0;W<h.dependencies.length;W++){var N=h.dependencies[W];if(N.name!==h.name){for(var se=!1,fe=0;fe<this.variables.length;fe++)if(N.name===this.variables[fe].name){se=!0;break}if(!se)return"Variable dependency not found. Variable="+h.name+", dependency="+N.name}H[N.name]={value:null},M.fragmentShader=`
uniform sampler2D `+N.name+`;
`+M.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var d=this.currentTextureIndex,h=this.currentTextureIndex===0?1:0,M=0,H=this.variables.length;M<H;M++){var W=this.variables[M];if(W.dependencies!==null)for(var N=W.material.uniforms,se=0,fe=W.dependencies.length;se<fe;se++){var Be=W.dependencies[se];N[Be.name].value=Be.renderTargets[d].texture}this.doRenderTarget(W.material,W.renderTargets[h])}this.currentTextureIndex=h},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.addResolutionDefine=w,this.createShaderMaterial=E,this.createRenderTarget=function(d,h,M,H,W,N){return new lt(d=d||i,h=h||t,{wrapS:M=M||Ue,wrapT:H=H||Ue,minFilter:W=W||Ve,magFilter:N=N||Ve,format:He,type:l,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var d=new Float32Array(i*t*4);return new Je(d,i,t,He,ce)},this.renderTexture=function(d,h){p.passThruTexture.value=d,this.doRenderTarget(B,h),p.passThruTexture.value=null},this.doRenderTarget=function(d,h){var M=n.getRenderTarget();I.material=d,n.setRenderTarget(h),n.render(f,g),I.material=B,n.setRenderTarget(M)}};let C=typeof window=="object"&&window.THREE;const _e=!at();let he=32,Ie=he*he;const Le=800,yt=(i={})=>{const t=new C.BufferGeometry,n=[];function u(f,g,p){const B=1.5*(i.birdSize||1);n.push(new C.Vector3(f*B,g*B,p*B))}u(5,0,0),u(-5,-1,1),u(-5,0,0),u(-5,-2,-1),u(0,2,-6),u(0,2,6),u(2,0,0),u(-3,0,0),t.setFromPoints(n);const l=[];return l.push(0,2,1),l.push(4,7,6),l.push(5,6,7),t.setIndex(l),t};class bt{constructor(t){var n,u,l=new C.Vector3,f=500,g=500,p=200,B=.1,I=t;this.position=new C.Vector3,this.velocity=new C.Vector3,n=new C.Vector3,this.setGoal=function(w){u=w},this.setWorldSize=function(w,E,d){f=w,g=E,p=d},this.run=function(w){l.set(-f,this.position.y,this.position.z),(l=this.avoid(l)).multiplyScalar(5),n.add(l),l.set(f,this.position.y,this.position.z),(l=this.avoid(l)).multiplyScalar(5),n.add(l),l.set(this.position.x,-g,this.position.z),(l=this.avoid(l)).multiplyScalar(5),n.add(l),l.set(this.position.x,g,this.position.z),(l=this.avoid(l)).multiplyScalar(5),n.add(l),l.set(this.position.x,this.position.y,-p),(l=this.avoid(l)).multiplyScalar(5),n.add(l),l.set(this.position.x,this.position.y,p),(l=this.avoid(l)).multiplyScalar(5),n.add(l),Math.random()>.5&&this.flock(w),this.move()},this.flock=function(w){u&&n.add(this.reach(u,.005)),n.add(this.alignment(w)),n.add(this.cohesion(w)),n.add(this.separation(w))},this.move=function(){this.velocity.add(n);var w=this.velocity.length();w>2.5&&this.velocity.divideScalar(w/2.5),this.position.add(this.velocity),n.set(0,0,0)},this.checkBounds=function(){this.position.x>f&&(this.position.x=-f),this.position.x<-f&&(this.position.x=f),this.position.y>g&&(this.position.y=-g),this.position.y<-g&&(this.position.y=g),this.position.z>p&&(this.position.z=-p),this.position.z<-p&&(this.position.z=p)},this.avoid=function(w){var E=new C.Vector3;return E.copy(this.position),E.sub(w),E.multiplyScalar(1/this.position.distanceToSquared(w)),E},this.repulse=function(w){var E=this.position.distanceTo(w);if(E<150){var d=new C.Vector3;d.subVectors(this.position,w),d.multiplyScalar(.5/E),n.add(d)}},this.reach=function(w,E){var d=new C.Vector3;return d.subVectors(w,this.position),d.multiplyScalar(E),d},this.alignment=function(w){var E,d,h=new C.Vector3,M=0;const H=100*I.alignment/20;for(var W=0,N=w.length;W<N;W++)Math.random()>.6||(d=(E=w[W]).position.distanceTo(this.position))>0&&d<=H&&(h.add(E.velocity),M++);if(M>0){h.divideScalar(M);var se=h.length();se>B&&h.divideScalar(se/B)}return h},this.cohesion=function(w){var E,d,h=new C.Vector3,M=new C.Vector3,H=0;const W=100*I.cohesion/20;for(var N=0,se=w.length;N<se;N++)Math.random()>.6||(d=(E=w[N]).position.distanceTo(this.position))>0&&d<=W&&(h.add(E.position),H++);H>0&&h.divideScalar(H),M.subVectors(h,this.position);var fe=M.length();return fe>B&&M.divideScalar(fe/B),M},this.separation=function(w){var E,d,h=new C.Vector3,M=new C.Vector3;const H=100*I.separation/20;for(var W=0,N=w.length;W<N;W++)Math.random()>.6||(d=(E=w[W]).position.distanceTo(this.position))>0&&d<=H&&(M.subVectors(this.position,E.position),M.normalize(),M.divideScalar(d),h.add(M));return h}}}class ct extends o{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(t){C=t.THREE||C,super(t)}initComputeRenderer(){this.gpuCompute=new gt(he,he,this.renderer,C);const t=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();(function(l){const f=l.image.data;let g=0;const p=f.length;(()=>{const B=[];for(;g<p;){const I=Math.random()*Le-400,w=Math.random()*Le-400,E=Math.random()*Le-400;f[g+0]=I,f[g+1]=w,f[g+2]=E,f[g+3]=1,B.push(g+=4)}})()})(t),function(l){const f=l.image.data;let g=0;const p=f.length;(()=>{const B=[];for(;g<p;){const I=Math.random()-.5,w=Math.random()-.5,E=Math.random()-.5;f[g+0]=10*I,f[g+1]=10*w,f[g+2]=10*E,f[g+3]=1,B.push(g+=4)}})()}(n),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,t),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new C.Vector3},this.velocityVariable.material.defines.BOUNDS=Le.toFixed(2),this.velocityVariable.wrapS=C.RepeatWrapping,this.velocityVariable.wrapT=C.RepeatWrapping,this.positionVariable.wrapS=C.RepeatWrapping,this.positionVariable.wrapT=C.RepeatWrapping;const u=this.gpuCompute.init();u!==null&&console.error(u)}initGpgpuBirds(){const t=(l=>{const f=new C.BufferGeometry;l.quantity&&(he=Math.pow(2,l.quantity),Ie=he*he);const g=3*Ie,p=3*g,B=new C.BufferAttribute(new Float32Array(3*p),3),I=new C.BufferAttribute(new Float32Array(3*p),3),w=new C.BufferAttribute(new Float32Array(2*p),2),E=new C.BufferAttribute(new Float32Array(p),1);f.setAttribute||(f.setAttribute=f.addAttribute),f.setAttribute("position",B),f.setAttribute("birdColor",I),f.setAttribute("reference",w),f.setAttribute("birdVertex",E);let d=0;const h=function(){for(let N=0;N<arguments.length;N++)B.array[d++]=arguments[N]},M=l.wingSpan||20,H=l.birdSize||1;for(let N=0;N<Ie;N++)h(0,-0,-20*H,0,4*H,-20*H,0,0,30*H),h(0,0,-15*H,-M*H,0,0,0,0,15*H),h(0,0,15*H,M*H,0,0,0,0,-15*H);const W={};for(d=0;d<3*g;d++){const N=~~(d/3),se=N%he/he,fe=~~(N/he)/he,Be=~~(d/9)/Ie,ke=Be.toString(),ut=l.colorMode.indexOf("Gradient")!=-1;let Ae;Ae=!ut&&W[ke]?W[ke]:l.effect.getNewCol(Be),ut||W[ke]||(W[ke]=Ae),I.array[3*d+0]=Ae.r,I.array[3*d+1]=Ae.g,I.array[3*d+2]=Ae.b,w.array[2*d]=se,w.array[2*d+1]=fe,E.array[d]=d%9}return f.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new C.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const n=new C.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,fragmentShader:`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,side:C.DoubleSide}),u=new C.Mesh(t,n);return u.rotation.y=Math.PI/2,u.matrixAutoUpdate=!1,u.updateMatrix(),this.scene.add(u)}getNewCol(t){const n=this.options,u=n.color1!=null?n.color1:4456448,l=n.color2!=null?n.color2:6684672,f=new C.Color(u),g=new C.Color(l);let p,B;if(B=n.colorMode.indexOf("Gradient")!=-1?Math.random():t,n.colorMode.indexOf("variance")==0){const I=(f.r+Math.random()*g.r).clamp(0,1),w=(f.g+Math.random()*g.g).clamp(0,1),E=(f.b+Math.random()*g.b).clamp(0,1);p=new C.Color(I,w,E)}else p=n.colorMode.indexOf("mix")==0?new C.Color(u+B*l):f.lerp(g,B);return p}onInit(){this.camera=new C.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new C.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const t=this.birds=[],n=this.boids=[],u=this.options;let l,f;if(_e)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(I){console.error("[vanta.js] birds init error: ",I)}else{const I=6*Math.pow(2,u.quantity);for(var g=0;g<I;g++){l=n[g]=new bt(u),l.position.x=400*Math.random()-200,l.position.y=400*Math.random()-200,l.position.z=400*Math.random()-200,l.velocity.x=2*Math.random()-1,l.velocity.y=2*Math.random()-1,l.velocity.z=2*Math.random()-1,l.setWorldSize(500,500,300);const w=u.colorMode.indexOf("Gradient")!=-1,E=yt(u),d=E.attributes.position.length,h=new C.BufferAttribute(new Float32Array(d),3);if(w)for(var p=0;p<E.index.array.length;p+=3)for(var B=0;B<=2;B++){const M=E.index.array[p+B],H=this.getNewCol();h.array[3*M]=H.r,h.array[3*M+1]=H.g,h.array[3*M+2]=H.b}else{const M=this.getNewCol(g/I);for(p=0;p<h.array.length;p+=3)h.array[p]=M.r,h.array[p+1]=M.g,h.array[p+2]=M.b}E.setAttribute("color",h),f=t[g]=new C.Mesh(E,new C.MeshBasicMaterial({color:16777215,side:C.DoubleSide,vertexColors:C.VertexColors})),f.phase=Math.floor(62.83*Math.random()),f.position.x=n[g].position.x,f.position.y=n[g].position.y,f.position.z=n[g].position.z,this.scene.add(f)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let t=(this.now-this.last)/1e3;if(t>1&&(t=1),this.last=this.now,_e)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const l=this.birds,f=this.boids;let g,p;for(var n=0,u=l.length;n<u;n++){g=f[n],g.run(f),p=l[n],p.rotation.y=Math.atan2(-g.velocity.z,g.velocity.x),p.rotation.z=Math.asin(g.velocity.y/g.velocity.length()),p.phase=(p.phase+(Math.max(0,p.rotation.z)+.1))%62.83;const B=16,I=13;p.geometry.attributes.position.array[B]=p.geometry.attributes.position.array[I]=5*Math.sin(p.phase)*this.options.birdSize,p.geometry.attributes.position.needsUpdate=!0,p.geometry.computeVertexNormals(),p.position.x=f[n].position.x,p.position.y=f[n].position.y,p.position.z=f[n].position.z}}}onMouseMove(t,n){if(this.mouseX=t-.5,this.mouseY=n-.5,!_e){const g=this.boids;let p;for(var u=new C.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),l=0,f=g.length;l<f;l++)p=g[l],u.z=p.position.z,p.repulse(u)}}onDestroy(){}onResize(){}}ct.initClass();const St=ee.register("BIRDS",ct);return Z})())}}]);
