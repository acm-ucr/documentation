"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Clone a Repository",l={unversionedId:"git-version-control/clone-repository",id:"git-version-control/clone-repository",title:"Clone a Repository",description:"Navigate to a Github Repository, you should be greeted with a README.md that shows information regarding the repository. Click on the green Code button, which should show you options for HTTPS, SSH, GitHub CLI,",source:"@site/docs/git-version-control/clone-repository.md",sourceDirName:"git-version-control",slug:"/git-version-control/clone-repository",permalink:"/docusaurus/docs/git-version-control/clone-repository",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install Git",permalink:"/docusaurus/docs/git-version-control/install-git"},next:{title:"Branches",permalink:"/docusaurus/docs/git-version-control/branches"}},c={},s=[{value:"Using HTTPS (Recommended)",id:"using-https-recommended",level:2},{value:"Using SSH",id:"using-ssh",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clone-a-repository"},"Clone a Repository"),(0,o.kt)("p",null,"Navigate to a Github Repository, you should be greeted with a ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," that shows information regarding the repository. Click on the green ",(0,o.kt)("inlineCode",{parentName:"p"},"Code")," button, which should show you options for ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SSH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub CLI"),","),(0,o.kt)("h2",{id:"using-https-recommended"},"Using HTTPS (Recommended)"),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS")," link and run the following command in terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone HTTPS_LINK\n")),(0,o.kt)("p",null,"If using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acm-ucr/acm-hydra/tree/dev"},"Official ACM Website Repository"),", cloning the repository will look similiar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/acm-ucr/acm-hydra\n")),(0,o.kt)("h2",{id:"using-ssh"},"Using SSH"),(0,o.kt)("p",null,"Prerequistes: Ensure you have an SSH key. You can configure one with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"Generating a new SSH key"),"."),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"SSH")," link and run the following command in terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone SSH_LINK\n")),(0,o.kt)("p",null,"If using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acm-ucr/acm-hydra/tree/dev"},"Official ACM Website Repository"),", cloning the repository will look similiar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:acm-ucr/acm-hydra.git\n")))}d.isMDXComponent=!0}}]);