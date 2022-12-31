"use strict";(self.webpackChunkd_cs_github_io=self.webpackChunkd_cs_github_io||[]).push([[691],{8690:function(e,t,n){n.d(t,{Z:function(){return G}});var r=n(7294),l=n(4593);function a(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,a),r}var o=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(o||{}),s=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(s||{});function u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:s}){let u=c(t,e);if(o)return i(u,n,r,s);let d=null!=l?l:0;if(2&d){let{static:e=!1,...t}=u;if(e)return i(t,n,r,s)}if(1&d){let{unmount:e=!0,...t}=u;return a(e?0:1,{0(){return null},1(){return i({...t,hidden:!0,style:{display:"none"}},n,r,s)}})}return i(u,n,r,s)}function i(e,t={},n,l){let{as:a=n,children:o,refName:s="ref",...u}=m(e,["unmount","static"]),i=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof o?o(t):o;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let p={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(a===r.Fragment&&Object.keys(f(u)).length>0){if(!(0,r.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${l} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(d,Object.assign({},c(d.props,f(m(u,["ref"]))),p,i,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,i.ref)))}return(0,r.createElement)(a,Object.assign({},m(u,["ref"]),a!==r.Fragment&&i,a!==r.Fragment&&p),d)}function c(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function f(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}const p="undefined"==typeof window||"undefined"==typeof document;let g=p?r.useEffect:r.useLayoutEffect;let E=function(e){let t=function(e){let t=(0,r.useRef)(e);return g((()=>{t.current=e}),[e]),t}(e);return r.useCallback(((...e)=>t.current(...e)),[t])},v=Symbol();function y(e,t=!0){return Object.assign(e,{[v]:t})}function b(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=E((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[v])))?void 0:n}let h={serverHandoffComplete:!1};var x;let w=0;function k(){return++w}let P=null!=(x=r.useId)?x:function(){let e=function(){let[e,t]=(0,r.useState)(h.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===h.serverHandoffComplete&&(h.serverHandoffComplete=!0)}),[]),e}(),[t,n]=r.useState(e?k:null);return g((()=>{null===t&&n(k())}),[t]),null!=t?""+t:void 0};var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{});function N(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let C=(0,r.createContext)(null);C.displayName="OpenClosedContext";var D=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(D||{});function I(){return(0,r.useContext)(C)}function O({value:e,children:t}){return r.createElement(C.Provider,{value:e},t)}function T(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function j(e,t){let[n,l]=(0,r.useState)((()=>T(e)));return g((()=>{l(T(e))}),[e.type,e.as]),g((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")}),[n,t]),n}var R,L=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(L||{}),H=((R=H||{})[R.ToggleDisclosure=0]="ToggleDisclosure",R[R.CloseDisclosure=1]="CloseDisclosure",R[R.SetButtonId=2]="SetButtonId",R[R.SetPanelId=3]="SetPanelId",R[R.LinkPanel=4]="LinkPanel",R[R.UnlinkPanel=5]="UnlinkPanel",R);let A={0:e=>({...e,disclosureState:a(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4(e){return!0===e.linkedPanel?e:{...e,linkedPanel:!0}},5(e){return!1===e.linkedPanel?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},M=(0,r.createContext)(null);function F(e){let t=(0,r.useContext)(M);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,F),t}return t}M.displayName="DisclosureContext";let B=(0,r.createContext)(null);function $(e){let t=(0,r.useContext)(B);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,$),t}return t}B.displayName="DisclosureAPIContext";let U=(0,r.createContext)(null);function _(e,t){return a(t.type,A,e,t)}U.displayName="DisclosurePanelContext";let Z=r.Fragment,K=d((function(e,t){let{defaultOpen:n=!1,...l}=e,o=(0,r.useRef)(null),s=b(t,y((e=>{o.current=e}),void 0===e.as||e.as===r.Fragment)),i=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useReducer)(_,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:c,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:f,buttonId:m},g]=d,v=E((e=>{g({type:1});let t=function(e){return p?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(o);if(!t||!m)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(m):t.getElementById(m);null==n||n.focus()})),h=(0,r.useMemo)((()=>({close:v})),[v]),x=(0,r.useMemo)((()=>({open:0===f,close:v})),[f,v]),w={ref:s};return r.createElement(M.Provider,{value:d},r.createElement(B.Provider,{value:h},r.createElement(O,{value:a(f,{0:D.Open,1:D.Closed})},u({ourProps:w,theirProps:l,slot:x,defaultTag:Z,name:"Disclosure"}))))})),z=d((function(e,t){let n=P(),{id:l=`headlessui-disclosure-button-${n}`,...a}=e,[o,s]=F("Disclosure.Button"),i=(0,r.useContext)(U),c=null!==i&&i===o.panelId,d=(0,r.useRef)(null),f=b(d,t,c?null:o.buttonRef);(0,r.useEffect)((()=>{if(!c)return s({type:2,buttonId:l}),()=>{s({type:2,buttonId:null})}}),[l,s,c]);let m=E((e=>{var t;if(c){if(1===o.disclosureState)return;switch(e.key){case S.Space:case S.Enter:e.preventDefault(),e.stopPropagation(),s({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case S.Space:case S.Enter:e.preventDefault(),e.stopPropagation(),s({type:0})}})),p=E((e=>{if(e.key===S.Space)e.preventDefault()})),g=E((t=>{var n;N(t.currentTarget)||e.disabled||(c?(s({type:0}),null==(n=o.buttonRef.current)||n.focus()):s({type:0}))})),v=(0,r.useMemo)((()=>({open:0===o.disclosureState})),[o]),y=j(e,d);return u({ourProps:c?{ref:f,type:y,onKeyDown:m,onClick:g}:{ref:f,id:l,type:y,"aria-expanded":e.disabled?void 0:0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:m,onKeyUp:p,onClick:g},theirProps:a,slot:v,defaultTag:"button",name:"Disclosure.Button"})})),Q=o.RenderStrategy|o.Static,V=d((function(e,t){let n=P(),{id:l=`headlessui-disclosure-panel-${n}`,...a}=e,[o,s]=F("Disclosure.Panel"),{close:i}=$("Disclosure.Panel"),c=b(t,o.panelRef,(e=>{s({type:e?4:5})}));(0,r.useEffect)((()=>(s({type:3,panelId:l}),()=>{s({type:3,panelId:null})})),[l,s]);let d=I(),f=null!==d?d===D.Open:0===o.disclosureState,m=(0,r.useMemo)((()=>({open:0===o.disclosureState,close:i})),[o,i]),p={ref:c,id:l};return r.createElement(U.Provider,{value:o.panelId},u({ourProps:p,theirProps:a,slot:m,defaultTag:"div",features:Q,visible:f,name:"Disclosure.Panel"}))})),W=Object.assign(K,{Button:z,Panel:V});var Y=n(1883);var q=()=>r.createElement(W,{as:"nav",className:"bg-zinc-900"},(e=>{let{open:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},r.createElement("div",{className:"relative flex h-16 items-center justify-between"},r.createElement("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},r.createElement("div",{className:"flex flex-shrink-0 items-center"},r.createElement(Y.Link,{to:"/",className:"block h-8 w-auto lg:hidden px-3 py-2 rounded-md text-sm font-medium text-rose-500 font-mono"},"d-cs.dev"),r.createElement(Y.Link,{to:"/",className:"hidden h-8 w-auto lg:block px-3 py-2 rounded-md text-sm font-medium text-rose-500 font-mono"},"d-cs.dev"))))))}));var G=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.Z,null,r.createElement("html",{className:"h-full"}),r.createElement("body",{className:"h-full bg-zinc-900"})),r.createElement(q,null),r.createElement("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full"},r.createElement("div",{className:"mx-auto max-w-3xl h-full "},t)))}},4001:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,l.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},7200:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s}});var r=n(7294),l=n(1883),a=n(8690),o=n(4001);const s=()=>r.createElement(o.Z,{title:"d-cs's Posts"});t.default=e=>{let{data:t}=e;return r.createElement(a.Z,null,r.createElement("div",{className:"pt-8"},r.createElement("h2",{className:"text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl"},"Posts")),r.createElement("div",{className:"mt-6 grid gap-8 pt-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"},t.allMdx.nodes.map((e=>r.createElement("div",{key:e.id},r.createElement("p",{className:"text-sm text-rose-200"},r.createElement("time",{dateTime:e.frontmatter.date},e.frontmatter.date)),r.createElement("a",{href:"#",className:"mt-2 block"},r.createElement("p",{className:"text-xl font-semibold text-slate-200"},e.frontmatter.title),r.createElement("p",{className:"mt-3 text-base text-slate-200"},e.excerpt)),r.createElement("div",{className:"mt-3"},r.createElement(l.Link,{to:"/blog/"+e.frontmatter.slug,className:"text-base font-semibold text-rose-500 hover:text-rose-300"},"Read more")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8e9760c28d35b1e8eb6b.js.map