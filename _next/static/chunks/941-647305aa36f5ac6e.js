(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{9457:function(n,j,N){"use strict";var R=N(2265);function t(n){return Array.prototype.slice.call(n)}function e(n,j){var N=Math.floor(n);return N===j||N+1===j?n:j}function i(){return Date.now()}function r(n,j,N){if(j="data-keen-slider-"+j,null===N)return n.removeAttribute(j);n.setAttribute(j,N||"")}function a(n,j){return j=j||document,"function"==typeof n&&(n=n(j)),Array.isArray(n)?n:"string"==typeof n?t(j.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?t(n):[]}function o(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function u(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(j,N,R,F){j.addListener?j.addListener(R):j.addEventListener(N,R,F),n.push([j,N,R,F])},input:function(n,j,N,R){this.add(n,j,function(n){n.nativeEvent&&(n=n.nativeEvent);var j=n.changedTouches||[],R=n.targetTouches||[],F=n.detail&&n.detail.x?n.detail:null;return N({id:F?F.identifier?F.identifier:"i":R[0]?R[0]?R[0].identifier:"e":"d",idChanged:F?F.identifier?F.identifier:"i":j[0]?j[0]?j[0].identifier:"e":"d",raw:n,x:F&&F.x?F.x:R[0]?R[0].screenX:F?F.x:n.pageX,y:F&&F.y?F.y:R[0]?R[0].screenY:F?F.y:n.pageY})},R)},purge:function(){n.forEach(function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])}),n=[]}}}function s(n,j,N){return Math.min(Math.max(n,j),N)}function d(n){return(n>0?1:0)-(n<0?1:0)||+n}function l(n){var j=n.getBoundingClientRect();return{height:e(j.height,n.offsetHeight),width:e(j.width,n.offsetWidth)}}function f(n,j,N,R){var F=n&&n[j];return null==F?N:R&&"function"==typeof F?F():F}function p(n){return Math.round(1e6*n)/1e6}function v(n,j){if(n===j)return!0;var N=typeof n;if(N!==typeof j)return!1;if("object"!==N||null===n||null===j)return"function"===N&&n.toString()===j.toString();if(n.length!==j.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(j).length)return!1;for(var R in n)if(!v(n[R],j[R]))return!1;return!0}var h=function(){return(h=Object.assign||function(n){for(var j,N=1,R=arguments.length;N<R;N++)for(var F in j=arguments[N])Object.prototype.hasOwnProperty.call(j,F)&&(n[F]=j[F]);return n}).apply(this,arguments)};function m(n,j,N){if(N||2==arguments.length)for(var R,F=0,H=j.length;F<H;F++)!R&&F in j||(R||(R=Array.prototype.slice.call(j,0,F)),R[F]=j[F]);return n.concat(R||Array.prototype.slice.call(j))}function g(n){var j,N,R,F,H,W;function u(j){W||(W=j),c(!0);var H=j-W;H>R&&(H=R);var B=F[N];if(B[3]<H)return N++,u(j);var Y=B[2],V=B[4],X=B[0],U=B[1]*(0,B[5])(0===V?1:(H-Y)/V);if(U&&n.track.to(X+U),H<R)return d();W=null,c(!1),s(null),n.emit("animationEnded")}function c(n){j.active=n}function s(n){j.targetIdx=n}function d(){var n;n=u,H=window.requestAnimationFrame(n)}function l(){var j;j=H,window.cancelAnimationFrame(j),c(!1),s(null),W&&n.emit("animationStopped"),W=null}return j={active:!1,start:function(j){if(l(),n.track.details){var H=0,W=n.track.details.position;N=0,R=0,F=j.map(function(n){var j,N=Number(W),F=null!==(j=n.earlyExit)&&void 0!==j?j:n.duration,B=n.easing,Y=n.distance*B(F/n.duration)||0;W+=Y;var V=R;return R+=F,H+=Y,[N,n.distance,V,R,n.duration,B]}),s(n.track.distToIdx(H)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function b(n){var j,N,R,F,H,W,B,Y,V,X,U,Z,$,G,J=1/0,K=[],Q=null,nn=0;function C(n){P(nn+n)}function E(n){var j=z(nn+n).abs;return D(j)===j?j:null}function z(n){var j=Math.floor(Math.abs(p(n/N))),R=p((n%N+N)%N);R===N&&(R=0);var F=d(n),H=B.indexOf(m([],B,!0).reduce(function(n,j){return Math.abs(j-R)<Math.abs(n-R)?j:n})),Y=H;return F<0&&j++,H===W&&(Y=0,j+=F>0?1:-1),{abs:Y+j*W*F,origin:H,rel:Y}}function I(n,j,N){if(j||!F.loop)return A(n,N);if(D(n)!==n)return null;var R,H=z(null!=N?N:nn),B=H.abs,Y=n-H.rel,V=B+Y;R=A(V);var X=A(V-W*d(Y));return(null!==X&&Math.abs(X)<Math.abs(R)||null===R)&&(R=X),p(R)}function A(n,j){if(null==j&&(j=p(nn)),D(R=n)!==R||null===n)return null;n=Math.round(n);var R,F=z(j),H=F.abs,Y=F.rel,V=F.origin,X=L(n),U=(j%N+N)%N,Z=B[V],$=Math.floor((n-(H-Y))/W)*N;return p(Z-U-Z+B[X]+$+(V===W?N:0))}function D(n){return s(n,V,X)}function L(n){return(n%W+W)%W}function P(j){N=j-nn,K.push({distance:N,timestamp:i()}),K.length>6&&(K=K.slice(-6)),nn=p(j);var N,R=_().abs;if(R!==Q){var F=null!==Q;Q=R,F&&n.emit("slideChanged")}}function _(B){var Y=B?null:function(){if(W){var n=F.loop,j=n?(nn%N+N)%N:nn,B=(n?nn%N:nn)-H[0][2],Y=0-(B<0&&n?N-Math.abs(B):B),J=0,K=z(nn),Q=K.abs,nt=K.rel,ne=H[nt][2],ni=H.map(function(j,R){var H=Y+J;(H<0-j[0]||H>1)&&(H+=(Math.abs(H)>N-1&&n?N:0)*d(-H));var B=R-nt,V=d(B),X=B+Q;n&&(-1===V&&H>ne&&(X+=W),1===V&&H<ne&&(X-=W),null!==U&&X<U&&(H+=N),null!==Z&&X>Z&&(H-=N));var $=H+j[0]+j[1],G=Math.max(H>=0&&$<=1?1:$<0||H>1?0:H<0?Math.min(1,(j[0]+H)/j[0]):(1-H)/j[0],0);return J+=j[0]+j[1],{abs:X,distance:F.rtl?-1*H+1-j[0]:H,portion:G,size:j[0]}});return nt=L(Q=D(Q)),{abs:D(Q),length:R,max:G,maxIdx:X,min:$,minIdx:V,position:nn,progress:n?j/N:nn/R,rel:nt,slides:ni,slidesLength:N}}}();return j.details=Y,n.emit("detailsChanged"),Y}return j={absToRel:L,add:C,details:null,distToIdx:E,idxToDist:I,init:function(j){var K,Q,nt,ne;if(function(){if(W=(H=((F=n.options).trackConfig||[]).map(function(n){return[f(n,"size",1),f(n,"spacing",0),f(n,"origin",0)]})).length){N=p(H.reduce(function(n,j){return n+j[0]+j[1]},0));var j,V=W-1;R=p(N+H[0][2]-H[V][0]-H[V][2]-H[V][1]),B=H.reduce(function(n,N){if(!n)return[0];var R=H[n.length-1],F=n[n.length-1]+(R[0]+R[2])+R[1];return F-=N[2],n[n.length-1]>F&&(F=n[n.length-1]),F=p(F),n.push(F),(!j||j<F)&&(Y=n.length-1),j=F,n},null),0===R&&(Y=0),B.push(p(N))}}(),!W)return _(!0);K=n.options.range,U=V=(Q=n.options.loop)?f(Q,"min",-1/0):0,Z=X=Q?f(Q,"max",J):Y,nt=f(K,"min",null),ne=f(K,"max",null),null!==nt&&(V=nt),null!==ne&&(X=ne),$=V===-1/0?V:n.track.idxToDist(V||0,!0,0),G=X===J?X:I(X,!0,0),null===ne&&(Z=X),f(K,"align",!1)&&X!==J&&0===H[L(X)][2]&&(G-=1-H[L(X)][0],X=E(G-nn)),$=p($),G=p(G),Number(j)===j?C(A(D(j))):_()},to:P,velocity:function(){var n=i(),j=K.reduce(function(j,N){var R=N.distance,F=N.timestamp;return n-F>200||(d(R)!==d(j.distance)&&j.distance&&(j={distance:0,lastTimestamp:0,time:0}),j.time&&(j.distance+=R),j.lastTimestamp&&(j.time+=F-j.lastTimestamp),j.lastTimestamp=F),j},{distance:0,lastTimestamp:0,time:0});return j.distance/j.time||0}}}function y(n){var j,N,R,F,H,W,B,Y;function p(n){return 1-Math.pow(1-n,3)}function v(){return R?n.track.velocity():0}function h(){b();var j="free-snap"===n.options.mode,N=n.track,R=v();F=d(R);var V=n.track.details,X=[];if(R||!j){var U=m(R),Z=U.dist,$=U.dur;if($*=2,Z*=F,j){var G=N.idxToDist(N.distToIdx(Z),!0);G&&(Z=G)}X.push({distance:Z,duration:$,easing:p});var J=V.position,K=J+Z;if(K<H||K>W){var Q=K<H?H-J:W-J,nn=0,nt=R;if(d(Q)===F){var ne=Math.min(Math.abs(Q)/Math.abs(Z),1),ni=(1-Math.pow(1-ne,1/3))*$;X[0].earlyExit=ni,nt=R*(1-ne)}else X[0].earlyExit=0,nn+=Q;var nr=m(nt,100),na=nr.dist*F;n.options.rubberband&&(X.push({distance:na,duration:2*nr.dur,easing:p}),X.push({distance:-na+nn,duration:500,easing:p}))}n.animator.start(X)}else n.moveToIdx(s(V.abs,B,Y),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,j){void 0===j&&(j=1e3);var N=147e-9+(n=Math.abs(n))/j;return{dist:Math.pow(n,2)/N,dur:n/N}}function g(){var j=n.track.details;j&&(H=j.min,W=j.max,B=j.minIdx,Y=j.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",function(){R=!1,b(),j=N=n.track.details.abs}),n.on("dragChecked",function(){R=!0}),n.on("dragEnded",function(){var R,F,V,X,U,Z,$=n.options.mode;"snap"===$&&(R=n.track,V=(F=n.track.details).position,X=d(v()),(V>W||V<H)&&(X=0),U=j+X,0===F.slides[R.absToRel(U)].portion&&(U-=X),j!==N&&(U=N),d(R.idxToDist(U,!0))!==X&&(U+=X),U=s(U,B,Y),Z=R.idxToDist(U,!0),n.animator.start([{distance:Z,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])),"free"!==$&&"free-snap"!==$||h()}),n.on("dragged",function(){N=n.track.details.abs})}function x(n){var j,N,R,F,H,W,B,Y,V,X,U,Z,$,G,J,K,Q,nn,nt=c();function E(j){if(W&&Y===j.id){var $=O(j);if(V){if(!A(j))return I(j);X=$,V=!1,n.emit("dragChecked")}if(K)return X=$;o(j);var G=function(j){if(Q===-1/0&&nn===1/0)return j;var R=n.track.details,W=R.length,B=R.position,Y=s(j,Q-B,nn-B);if(0===W)return 0;if(!n.options.rubberband)return Y;if(B<=nn&&B>=Q||B<Q&&N>0||B>nn&&N<0)return j;var V=Math.max(0,1-Math.abs((B<Q?B-Q:B-nn)/W*(F*W))/H*2);return V*V*j}(B(X-$)/F*R);N=d(G);var J=n.track.details.position;(J>Q&&J<nn||J===Q&&N>0||J===nn&&N<0)&&u(j),U+=G,!Z&&Math.abs(U*F)>5&&(Z=!0),n.track.add(G),X=$,n.emit("dragged")}}function z(j){!W&&n.track.details&&n.track.details.length&&(U=0,W=!0,Z=!1,V=!0,Y=j.id,A(j),X=O(j),n.emit("dragStarted"))}function I(j){W&&Y===j.idChanged&&(W=!1,n.emit("dragEnded"))}function A(n){var j=D(),N=j?n.y:n.x,R=j?n.x:n.y,F=void 0!==$&&void 0!==G&&Math.abs(G-R)<=Math.abs($-N);return $=N,G=R,F}function O(n){return D()?n.y:n.x}function D(){return n.options.vertical}function S(){F=n.size,H=D()?window.innerHeight:window.innerWidth;var j=n.track.details;j&&(Q=j.min,nn=j.max)}function L(n){Z&&(u(n),o(n))}function P(){if(nt.purge(),n.options.drag&&!n.options.disabled){B="function"==typeof(F=n.options.dragSpeed||1)?F:function(n){return n*F},R=n.options.rtl?-1:1,S(),j=n.container,N="data-keen-slider-clickable",a("[".concat(N,"]:not([").concat(N,"=false])"),j).map(function(n){nt.add(n,"dragstart",u),nt.add(n,"mousedown",u),nt.add(n,"touchstart",u)}),nt.add(j,"dragstart",function(n){o(n)}),nt.add(j,"click",L,{capture:!0}),nt.input(j,"ksDragStart",z),nt.input(j,"ksDrag",E),nt.input(j,"ksDragEnd",I),nt.input(j,"mousedown",z),nt.input(j,"mousemove",E),nt.input(j,"mouseleave",I),nt.input(j,"mouseup",I),nt.input(j,"touchstart",z,{passive:!0}),nt.input(j,"touchmove",E,{passive:!1}),nt.input(j,"touchend",I),nt.input(j,"touchcancel",I),nt.add(window,"wheel",function(n){W&&o(n)});var N,F,H="data-keen-slider-scrollable";a("[".concat(H,"]:not([").concat(H,"=false])"),n.container).map(function(n){var j;nt.input(n,"touchstart",function(n){j=O(n),K=!0,J=!0},{passive:!0}),nt.input(n,"touchmove",function(N){var R=D(),F=R?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,H=j-O(N),W=R?n.scrollTop:n.scrollLeft,B=R&&"scroll"===n.style.overflowY||!R&&"scroll"===n.style.overflowX;if(j=O(N),(H<0&&W>0||H>0&&W<F)&&J&&B)return K=!0;J=!1,o(N),K=!1}),nt.input(n,"touchend",function(){K=!1})})}}n.on("updated",S),n.on("optionsChanged",P),n.on("created",P),n.on("destroyed",nt.purge)}function k(n){var j,N,R=null;function r(j,N,R){n.animator.active?o(j,N,R):requestAnimationFrame(function(){return o(j,N,R)})}function a(){r(!1,!1,N)}function o(N,F,H){var W=0,B=n.size,Y=n.track.details;if(Y&&j){var V=Y.slides;j.forEach(function(n,j){if(N)!R&&F&&c(n,null,H),s(n,null,H);else{if(!V[j])return;var Y=V[j].size*B;!R&&F&&c(n,Y,H),s(n,V[j].distance*B-W,H),W+=Y}})}}function u(j){return"performance"===n.options.renderMode?Math.round(j):j}function c(n,j,N){var R=N?"height":"width";null!==j&&(j=u(j)+"px"),n.style["min-"+R]=j,n.style["max-"+R]=j}function s(n,j,N){if(null!==j){j=u(j);var R=N?j:0;j="translate3d(".concat(N?0:j,"px, ").concat(R,"px, 0)")}n.style.transform=j,n.style["-webkit-transform"]=j}function d(){j&&(o(!0,!0,N),j=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,N)}function p(){d(),N=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(R="auto"===f(n.options.slides,"perView",null),n.on("detailsChanged",a),(j=n.slides).length&&l())}n.on("created",p),n.on("optionsChanged",p),n.on("beforeOptionsChanged",function(){d()}),n.on("updated",l),n.on("destroyed",d)}function w(n,j){return function(N){var R,F,H,W,B,Y,V=c();function m(n){var j;r(N.container,"reverse","rtl"!==(j=N.container,window.getComputedStyle(j,null).getPropertyValue("direction"))||n?null:""),r(N.container,"v",N.options.vertical&&!n?"":null),r(N.container,"disabled",N.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var n=null;if(W.forEach(function(j){j.matches&&(n=j.__media)}),n===R)return!1;R||N.emit("beforeOptionsChanged"),R=n;var j=n?H.breakpoints[n]:H;return N.options=h(h({},H),j),m(),I(),A(),C(),!0}function y(n){var j=l(n);return(N.options.vertical?j.height:j.width)/N.size||1}function x(){return N.options.trackConfig.length}function k(n){for(var B in R=!1,H=h(h({},j),n),V.purge(),F=N.size,W=[],H.breakpoints||[]){var Y=window.matchMedia(B);Y.__media=B,W.push(Y),V.add(Y,"change",g)}V.add(window,"orientationchange",z),V.add(window,"resize",E),b()}function w(n){N.animator.stop();var j=N.track.details;N.track.init(null!=n?n:j?j.abs:0)}function M(n){w(n),N.emit("optionsChanged")}function T(n,j){if(n)return k(n),void M(j);I(),A();var R=x();C(),x()!==R?M(j):w(j),N.emit("updated")}function C(){var n=N.options.slides;if("function"==typeof n)return N.options.trackConfig=n(N.size,N.slides);for(var j=N.slides,R=j.length,F="number"==typeof n?n:f(n,"number",R,!0),H=[],W=f(n,"perView",1,!0),B=f(n,"spacing",0,!0)/N.size||0,Y="auto"===W?B:B/W,V=f(n,"origin","auto"),X=0,U=0;U<F;U++){var Z="auto"===W?y(j[U]):1/W-B+Y,$="center"===V?.5-Z/2:"auto"===V?0:V;H.push({origin:$,size:Z,spacing:B}),X+=Z}if(X+=B*(F-1),"auto"===V&&!N.options.loop&&1!==W){var G=0;H.map(function(n){var j=X-G;return G+=n.size+B,j>=1||(n.origin=1-j-(X>1?0:1-X)),n})}N.options.trackConfig=H}function E(){I();var n=N.size;N.options.disabled||n===F||(F=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=l(N.container);N.size=(N.options.vertical?n.height:n.width)||1}function A(){N.slides=a(N.options.selector,N.container)}N.container=(Y=a(n,B||document)).length?Y[0]:null,N.destroy=function(){V.purge(),N.emit("destroyed"),m(!0)},N.prev=function(){N.moveToIdx(N.track.details.abs-1,!0)},N.next=function(){N.moveToIdx(N.track.details.abs+1,!0)},N.update=T,k(N.options)}}var M=function(n,j,N){try{var R,F,H;return R=m([w(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),k,x,y],N||[],!0),H={},F={emit:function(n){H[n]&&H[n].forEach(function(n){n(F)});var j=F.options&&F.options[n];j&&j(F)},moveToIdx:function(n,j,N){var R=F.track.idxToDist(n,j);if(R){var H=F.options.defaultAnimation;F.animator.start([{distance:R,duration:f(N||H,"duration",500),easing:f(N||H,"easing",function(n){return 1+--n*n*n*n*n})}])}},on:function(n,j,N){void 0===N&&(N=!1),H[n]||(H[n]=[]);var R=H[n].indexOf(j);R>-1?N&&delete H[n][R]:N||H[n].push(j)},options:j},function(){if(F.track=b(F),F.animator=g(F),R)for(var n=0;n<R.length;n++)(0,R[n])(F);F.track.init(F.options.initial||0),F.emit("created")}(),F}catch(n){console.error(n)}};j.E=function(n,j){var N=R.useRef(null),F=R.useRef(!1),H=R.useRef(n),W=R.useCallback(function(R){R?(H.current=n,N.current=new M(R,n,j),F.current=!1):(N.current&&N.current.destroy&&N.current.destroy(),N.current=null)},[]);return R.useEffect(function(){v(H.current,n)||(H.current=n,N.current&&N.current.update(H.current))},[n]),[W,N]}},6941:function(n,j,N){Promise.resolve().then(N.t.bind(N,8326,23)),Promise.resolve().then(N.bind(N,3172))},3172:function(n,j,N){"use strict";N.r(j),N.d(j,{default:function(){return HomeSectionProjects}});var R=N(7437);N(2190);var F=N(9457),H=N(2265),W=N(6844);function HomeSectionProjects(n){let{sectionType:j}=n,[N,B]=(0,H.useState)(0),[Y,V]=(0,H.useState)(!1),[X,U]=(0,F.E)({initial:0,slideChanged(n){B(n.track.details.rel)},created(){V(!0)}});return(0,R.jsxs)("section",{className:"general-section-".concat(j," home-projects-section"),children:[(0,R.jsxs)("div",{className:"home-projects-info-container",children:[(0,R.jsxs)("div",{className:"home-section-".concat(j.dark,"-container home-section-heading-underline underline-alt"),children:[(0,R.jsx)("h1",{className:"general-heading-section general-heading-section-alt",children:"our projects"}),(0,R.jsx)("h2",{className:"heading-large-section-sub",children:"Driving Innovation Through Tech and Collaboration"})]}),(0,R.jsxs)("p",{className:"home-section-paragraph",children:["We tackle tech projects addressing civic issues, enhancing services in Sacramento. From open data initiatives to government services and community platforms,",(0,R.jsx)("span",{className:"paragraph-bold",children:" our open-source tech and collaboration drive innovation"}),"for transparent, efficient, engaged local governance."]}),(0,R.jsx)(W.Z,{href:"/projects",className:"btn btn-gold",textContent:"Find Projects"})]}),(0,R.jsxs)("div",{className:"test",children:[(0,R.jsx)("div",{className:"navigation-wrapper",children:(0,R.jsxs)("div",{ref:X,className:"keen-slider",children:[(0,R.jsxs)("div",{className:"keen-slider__slide",children:[(0,R.jsxs)("div",{className:"slide-content",children:[(0,R.jsx)("h2",{className:"sub-heading",children:"TrashAI"}),(0,R.jsx)("p",{className:"home-section-dark-paragraph",children:"Developing machine learning technology to identify trash in images."})]}),(0,R.jsx)("img",{src:"https://assets-global.website-files.com/64760069e93084646c9ee428/64776faa0c1419b8475edd51_www.awwwards.com_%20(1).jpg",alt:"Open Data Day",className:"home-section-project-image"})]}),(0,R.jsxs)("div",{className:"keen-slider__slide",children:[(0,R.jsxs)("div",{className:"slide-content",children:[(0,R.jsx)("h2",{className:"sub-heading",children:"TrashAI"}),(0,R.jsx)("p",{className:"home-section-dark-paragraph",children:"Developing machine learning technology to identify trash in images."})]}),(0,R.jsx)("img",{src:"/img/TrashAI2.png",alt:"Open Data Day",className:"home-section-project-image"})]}),(0,R.jsxs)("div",{className:"keen-slider__slide",children:[(0,R.jsxs)("div",{className:"slide-content",children:[(0,R.jsx)("h2",{className:"sub-heading",children:"TrashAI"}),(0,R.jsx)("p",{className:"home-section-dark-paragraph",children:"Developing machine learning technology to identify trash in images."})]}),(0,R.jsx)("img",{src:"https://assets.awwwards.com/awards/sites_of_the_day/2019/10/rogue-studio-website-design.jpg",alt:"Open Data Day",className:"home-section-project-image"})]})]})}),Y&&U.current&&(0,R.jsx)("div",{className:"dots",children:[...Array(U.current.track.details.slides.length).keys()].map(n=>(0,R.jsx)("button",{onClick:()=>{var j;null===(j=U.current)||void 0===j||j.moveToIdx(n)},className:"dot"+(N===n?" active":"")},n))})]})]})}},6844:function(n,j,N){"use strict";N.d(j,{Z:function(){return Buttons}});var R=N(7437),F=N(1396),H=N.n(F),Buttons=n=>{let{className:j,href:N,target:F,onClick:W,textContent:B}=n;return N?(0,R.jsx)(H(),{className:j,href:N,target:F||"_self",children:B}):(0,R.jsx)("button",{className:j,onClick:W||null,children:B})}},2190:function(){},622:function(n,j,N){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=N(2265),F=Symbol.for("react.element"),H=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,B=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function q(n,j,N){var R,H={},V=null,X=null;for(R in void 0!==N&&(V=""+N),void 0!==j.key&&(V=""+j.key),void 0!==j.ref&&(X=j.ref),j)W.call(j,R)&&!Y.hasOwnProperty(R)&&(H[R]=j[R]);if(n&&n.defaultProps)for(R in j=n.defaultProps)void 0===H[R]&&(H[R]=j[R]);return{$$typeof:F,type:n,key:V,ref:X,props:H,_owner:B.current}}j.Fragment=H,j.jsx=q,j.jsxs=q},7437:function(n,j,N){"use strict";n.exports=N(622)},1396:function(n,j,N){n.exports=N(8326)}}]);