(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5347:function(e,t,n){Promise.resolve().then(n.bind(n,7712)),Promise.resolve().then(n.bind(n,1102)),Promise.resolve().then(n.t.bind(n,5204,23)),Promise.resolve().then(n.t.bind(n,260,23)),Promise.resolve().then(n.t.bind(n,7077,23)),Promise.resolve().then(n.t.bind(n,6639,23))},7712:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(2265);t.default=e=>{let{className:t=""}=e,[n,o]=(0,a.useState)({x:0,y:0});(0,a.useEffect)(()=>(s(),()=>l()),[]);let s=()=>{document.addEventListener("mousemove",c)},l=()=>{document.removeEventListener("mousemove",c)},c=e=>{o({x:e.clientX,y:e.clientY})};return(0,r.jsx)("div",{className:"fixed w-[100%] h-full z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ".concat(t),style:{left:"".concat(n.x,"px"),top:"".concat(n.y,"px")}})}},1102:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s},useTheme:function(){return l}});var r=n(7437),a=n(2265);let o=(0,a.createContext)({isDarkMode:!1,toggle:()=>{},enableDarkMode:e=>{},disableDarkMode:e=>{}});function s(e){let{children:t}=e,[n,s]=(0,a.useState)(!!JSON.parse(localStorage.getItem("darkMode")||"true")),l=(0,a.useCallback)(()=>{s(e=>!e)},[]),c=(0,a.useCallback)(()=>{s(!0)},[]),i=(0,a.useCallback)(()=>{s(!1)},[]);return(0,a.useEffect)(()=>{localStorage.setItem("darkMode",JSON.stringify(n)),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),(0,r.jsx)(o.Provider,{value:{isDarkMode:n,toggle:l,enableDarkMode:c,disableDarkMode:i},children:t})}function l(){return(0,a.useContext)(o)}},5204:function(){},260:function(e){e.exports={style:{fontFamily:"'__Inter_abbad9', '__Inter_Fallback_abbad9'",fontStyle:"normal"},className:"__className_abbad9",variable:"__variable_abbad9"}},7077:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_6e8b56', '__Roboto_Mono_Fallback_6e8b56'",fontStyle:"normal"},className:"__className_6e8b56",variable:"__variable_6e8b56"}},6639:function(e){e.exports={style:{fontFamily:"'__rubik_1cacb8', '__rubik_Fallback_1cacb8'"},className:"__className_1cacb8",variable:"__variable_1cacb8"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,o={},i=null,_=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(_=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:i,ref:_,props:o,_owner:l.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=5347)}),_N_E=e.O()}]);