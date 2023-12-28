"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},p="Props",i={unversionedId:"react/props",id:"react/props",title:"Props",description:'Props in React is short for "properties". Props allow parent components to pass down information to child components.',source:"@site/docs/react/props.md",sourceDirName:"react",slug:"/react/props",permalink:"/docusaurus/docs/react/props",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Importing and Exporting",permalink:"/docusaurus/docs/react/importing-exporting"},next:{title:"Mapping and Filtering",permalink:"/docusaurus/docs/react/mapping-filtering"}},s={},c=[{value:"Reading Props",id:"reading-props",level:2},{value:"Passing Down Props",id:"passing-down-props",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"props"},"Props"),(0,o.kt)("p",null,'Props in React is short for "properties". Props allow parent components to pass down information to child components.'),(0,o.kt)("h2",{id:"reading-props"},"Reading Props"),(0,o.kt)("p",null,"Components can read props by listing different properties and wrapped around curly brackets. In the example below, the properties passed in the Card component is ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"age"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". You can embed the props information using the curly brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/Card.jsx"',title:'"/src/components/Card.jsx"'},"const Card = ({ name, age, state }) => {\n    return (\n        <div>\n            <p>Name: {name}</p>\n            <p>Age: {age}</p>\n            <p>US State: {state}</p>\n        </div>\n    )\n}\n\nexport default Card;\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In some documentation or code, props can be declared like ",(0,o.kt)("inlineCode",{parentName:"p"},"(props)"),". It is best to keep the props destructed like ",(0,o.kt)("inlineCode",{parentName:"p"},"({ prop1, prop2, ... })"),", rather than passing in a single argument. This allows developers to quickly identify props in components without searching for them in the code.")),(0,o.kt)("h2",{id:"passing-down-props"},"Passing Down Props"),(0,o.kt)("p",null,"You can pass down information to the child component in the same way you would write an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTML")," attribute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/Profile.jsx"',title:'"/src/components/Profile.jsx"'},'import Card from "@/components/Card.jsx";\n\nconst Profile = () => {\n    return (\n        <div>\n            <Card name="Alice" age={43} state="California" />\n            <Card name="Bob" age={65} state="Texas" />\n            <Card name="Charlie" age={32} state="New York"/>\n        </div>\n    )\n}\n\nexport default Profile;\n')))}u.isMDXComponent=!0}}]);