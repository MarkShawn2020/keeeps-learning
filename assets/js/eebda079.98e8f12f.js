"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>w});var o=n(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const p={},m="markdown howto",h={unversionedId:"Coding/Markdown/markdown-howto",id:"Coding/Markdown/markdown-howto",title:"markdown howto",description:"[toc]",source:"@site/library/docs/Coding/Markdown/markdown-howto.md",sourceDirName:"Coding/Markdown",slug:"/Coding/Markdown/markdown-howto",permalink:"/docs/Coding/Markdown/markdown-howto",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/library/docs/Coding/Markdown/markdown-howto.md",tags:[],version:"current",lastUpdatedAt:1659094315,formattedLastUpdatedAt:"2022\u5e747\u670829\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"maven-howto",permalink:"/docs/Coding/Java/maven-howto"},next:{title:"Python-Finance by MarkShawn",permalink:"/docs/Coding/Python/Python-Finance/"}},k={},w=[{value:"markdown image size",id:"markdown-image-size",level:2},{value:"check box alternative",id:"check-box-alternative",level:2},{value:"update: use <code>:white_circle:</code> instead of <code>:white_large_square:</code>",id:"update-use-white_circle-instead-of-white_large_square",level:3},{value:"recommended emojis",id:"recommended-emojis",level:3},{value:"numbers",id:"numbers",level:4},{value:"tips",id:"tips",level:4},{value:"checks",id:"checks",level:3},{value:"emotions",id:"emotions",level:3}],f={toc:w};function g(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},f),s),r(t,i({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"markdown-howto"}),"markdown howto"),(0,o.kt)("p",null,"[toc]"),(0,o.kt)("h2",u({},{id:"markdown-image-size"}),"markdown image size"),(0,o.kt)("p",null,"There are some recommended methods to add width property into markdown image, while doesn't work."),(0,o.kt)("p",null,"The following one would show the image as it is, ignoring the last bracket info (even showing the raw text)."),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/markdown-howto-1644166436688-6da8fba57bab71137e2c6d56aaf6932eda6c72ab8c49f36a7353317dbd9ac6f3.png",alt:"picture 2"})),"  "),(0,o.kt)("p",null,"The following one would have no effect, even not showing the picture, neither in vscode, nor in github."),(0,o.kt)("p",null,(0,o.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/markdown-howto-1644166420169-fd08be178275d4663403c9358d72332b4acbab7e255dbe53bfcfaf19da32b457.png",alt:"picture 1"})),"  "),(0,o.kt)("p",null,"So, it turns out that almost none of methods are effective when we use markdown type of image rather than html type."),(0,o.kt)("p",null,"However, I didn't want to use html type, not only because it looks more complicated, but also since the vscode doesn't support the jump feature natively (maybe I can get the solution by some plugin, but I am just not willing to)."),(0,o.kt)("p",null,"So, current solution: using markdown type image, not considering about the feature of image size specification."),(0,o.kt)("p",null,"PR: set markdown image size in markdown type image."),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/14675913/changing-image-size-in-markdown"}),"Changing image size in Markdown - Stack Overflow"))),(0,o.kt)("h2",u({},{id:"check-box-alternative"}),"check box alternative"),(0,o.kt)("p",null,"I noticed that ",(0,o.kt)("inlineCode",{parentName:"p"},"- [ ] / [x]")," would sometimes not render if they are in headings and under preview mode, which is dependent with the package."),(0,o.kt)("p",null,"More specifically, in VSCode built-in render, it does; while in markdown-preview-enhanced, it not."),(0,o.kt)("p",null,"Then I found that using ",(0,o.kt)("inlineCode",{parentName:"p"},":white_check_mark:")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"- [x]"),", and using ",(0,o.kt)("inlineCode",{parentName:"p"},":white_large_square:")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"- [ ]")," is a better choice, which can guarantee its render."),(0,o.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640847795445-markdown-howto-c8be81bd2808a8055d513a68ace0cc787944492e4a4a5a86bff9103e3d3ae01e.png",width:"480"}),(0,o.kt)("p",null,"And also, with a more fancy effect:"),(0,o.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640847850974-markdown-howto-fedad67a6062686ad5ddaf2be18e7e55eb288cd09fe562ea3399b13997a1f0ee.png",width:"480"}),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/47344571/how-to-draw-checkbox-or-tick-mark-in-github-markdown-table/55523035"}),"How to draw checkbox or tick mark in GitHub Markdown table? - Stack Overflow"))),(0,o.kt)("h3",u({},{id:"update-use-white_circle-instead-of-white_large_square"}),"update: use ",(0,o.kt)("inlineCode",{parentName:"h3"},":white_circle:")," instead of ",(0,o.kt)("inlineCode",{parentName:"h3"},":white_large_square:")),(0,o.kt)("p",null,"I again found that ",(0,o.kt)("inlineCode",{parentName:"p"},":white_large_square:")," can not be rendered in pdf outputted."),(0,o.kt)("p",null,"I checked the markdown emojis in github, but to find there is no this one in the list indeed."),(0,o.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640849077393-markdown-howto-9d48e6caaa8016138d4f29d903d8714591f69c74d9a03d83dd529c8f24bd8ad2.png",width:"480"}),(0,o.kt)("p",null,"After a quick glimpse at the emoji list, I suppose the ",(0,o.kt)("inlineCode",{parentName:"p"},":white_circle")," is a good alternative since it looks nice and write easy to remember."),(0,o.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/1640849010186-markdown-howto-00381ae256eff1a5b64ad826fa92d3c1f341e2280be9b57876352d777644840d.png",width:"480"}),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/rxaviers/7360908"}),"Complete list of github markdown emoji markup"))),(0,o.kt)("h3",u({},{id:"recommended-emojis"}),"recommended emojis"),(0,o.kt)("h4",u({},{id:"numbers"}),"numbers"),(0,o.kt)("p",null,"0\ufe0f\u20e3\n1\ufe0f\u20e3\n2\ufe0f\u20e3\n3\ufe0f\u20e3\n...\n9\ufe0f\u20e3"),(0,o.kt)("h4",u({},{id:"tips"}),"tips"),(0,o.kt)("p",null,"\u2b55\n\u274c\n\u2757\n\u203c\ufe0f (this is not so fancy as to github)"),(0,o.kt)("h3",u({},{id:"checks"}),"checks"),(0,o.kt)("p",null,"\u2714\ufe0f\n\u2611\ufe0f\n\u2705"),(0,o.kt)("h3",u({},{id:"emotions"}),"emotions"),(0,o.kt)("p",null,"\ud83d\ude03"),(0,o.kt)("p",null,"ref:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://gist.github.com/rxaviers/7360908"}),"Complete list of github markdown emoji markup"))))}g.isMDXComponent=!0}}]);