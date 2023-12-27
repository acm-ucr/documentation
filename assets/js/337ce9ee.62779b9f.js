"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,y=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},l="Pull Requests",i={unversionedId:"git-version-control/pull-request",id:"git-version-control/pull-request",title:"Pull Requests",description:"When a branch has been pushed and is ready for a pull request, you can create a pull request by clicking on Pull Requests tab and clicking on the new pull request. Here you will need to configure the involved branches, which will usually include a feature branch and the dev branch.",source:"@site/docs/git-version-control/pull-request.md",sourceDirName:"git-version-control",slug:"/git-version-control/pull-request",permalink:"/docusaurus/docs/git-version-control/pull-request",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pulling Changes",permalink:"/docusaurus/docs/git-version-control/pull"},next:{title:"Tailwind",permalink:"/docusaurus/docs/category/tailwind"}},u={},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,"When a branch has been pushed and is ready for a pull request, you can create a pull request by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Pull Requests")," tab and clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"new pull request"),". Here you will need to configure the involved branches, which will usually include a feature branch and the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," branch."),(0,o.kt)("p",null,"In addition, you will need to add a title, assignee (yourself), attach an issue under development, and attach screenshots of visual changes. An example of a properly formatted pull request can be accessed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acm-ucr/hackathon-website/pull/312"},"here"),"."))}d.isMDXComponent=!0}}]);