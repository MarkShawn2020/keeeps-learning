"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=l,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var n=r(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const d={},f=void 0,m={unversionedId:"SLAM/slambook2-learning",id:"SLAM/slambook2-learning",title:"slambook2-learning",description:"3rdparty",source:"@site/library/docs/SLAM/slambook2-learning.md",sourceDirName:"SLAM",slug:"/SLAM/slambook2-learning",permalink:"/docs/SLAM/slambook2-learning",draft:!1,editUrl:"https://github.com/markshawn2020/keeps-learning/edit/master/library/docs/SLAM/slambook2-learning.md",tags:[],version:"current",lastUpdatedAt:1659094315,formattedLastUpdatedAt:"2022\u5e747\u670829\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"slambook2-ch13",permalink:"/docs/SLAM/slambook2-ch13"},next:{title:"aosp pull",permalink:"/docs/AndroidFramework/AOSP/TaskA1-aosp-pull/aosp-pull"}},b={},h=[{value:"3rdparty",id:"3rdparty",level:2},{value:"fetch submodules of 3rdparty",id:"fetch-submodules-of-3rdparty",level:3},{value:"<code>Pangolin</code>",id:"pangolin",level:3},{value:"build Pangolin",id:"build-pangolin",level:4},{value:"fixed: <code>fatal error: Python.h: No such file or directory</code>",id:"fixed-fatal-error-pythonh-no-such-file-or-directory",level:4},{value:"<code>Sopus</code>",id:"sopus",level:3},{value:"build Sopus",id:"build-sopus",level:4},{value:"fixed: compile error",id:"fixed-compile-error",level:4},{value:"opencv",id:"opencv",level:3},{value:"fixed: <code>make</code>: <code>stdlib.h: No such file or directory</code>",id:"fixed-make-stdlibh-no-such-file-or-directory",level:4},{value:"!!! fixed: <code>unmet</code>",id:"-fixed-unmet",level:4},{value:"pre-install",id:"pre-install",level:4},{value:"business problems",id:"business-problems",level:2},{value:"review",id:"review",level:2}],k={toc:h};function v(e){var t,r=e,{components:l}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),c),a(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"3rdparty"}),"3rdparty"),(0,n.kt)("h3",u({},{id:"fetch-submodules-of-3rdparty"}),"fetch submodules of 3rdparty"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"git submodule update --init --recursive\n")),(0,n.kt)("h3",u({},{id:"pangolin"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Pangolin")),(0,n.kt)("h4",u({},{id:"build-pangolin"}),"build Pangolin"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"cd Pangolin\nmkdir build\ncd build\ncmake ..\n\n# may have errors\ncmake --build .\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/stevenlovegrove/Pangolin/tree/1ec721d59ff6b799b9c24b8817f3b7ad2c929b83"}),"stevenlovegrove/Pangolin at 1ec721d59ff6b799b9c24b8817f3b7ad2c929b83"))),(0,n.kt)("h4",u({},{id:"fixed-fatal-error-pythonh-no-such-file-or-directory"}),"fixed: ",(0,n.kt)("inlineCode",{parentName:"h4"},"fatal error: Python.h: No such file or directory")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sh"}),'\n# on Ubuntu 20.04, this helped:\nsudo apt install python2.7-dev\n\n# if conflict, purge first:\nsudo apt purge "libpython2*"\n')),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/stevenlovegrove/Pangolin/issues/494"}),"fatal error: Python.h: No such file or directory \xb7 Issue #494 \xb7 stevenlovegrove/Pangolin"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",u({parentName:"p"},{href:"https://askubuntu.com/questions/1174213/ubuntu-18-04-2-install-python2-7-unmet-dependency"}),"apt - Ubuntu 18.04.2 install python2.7, unmet dependency - Ask Ubuntu")))),(0,n.kt)("h3",u({},{id:"sopus"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Sopus")),(0,n.kt)("h4",u({},{id:"build-sopus"}),"build Sopus"),(0,n.kt)("h4",u({},{id:"fixed-compile-error"}),"fixed: compile error"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/slambook2_learning-1648521425098-067ba99e50c1fe29e7e52fae49a27f8ae51f48d5caa1484b35b76b9aeb08ef5b.png",alt:"picture 59"})),"  "),(0,n.kt)("h3",u({},{id:"opencv"}),"opencv"),(0,n.kt)("h4",u({},{id:"fixed-make-stdlibh-no-such-file-or-directory"}),"fixed: ",(0,n.kt)("inlineCode",{parentName:"h4"},"make"),": ",(0,n.kt)("inlineCode",{parentName:"h4"},"stdlib.h: No such file or directory")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://stackoverflow.com/questions/40262928/error-compiling-opencv-fatal-error-stdlib-h-no-such-file-or-directory"}),"gcc - Error compiling OpenCV, fatal error: stdlib.h: No such file or directory - Stack Overflow"))),(0,n.kt)("h4",u({},{id:"-fixed-unmet"}),"!!! fixed: ",(0,n.kt)("inlineCode",{parentName:"h4"},"unmet")),(0,n.kt)("p",null,"\u6838\u5fc3\u662f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"apititude"),"\u53bb\u81ea\u52a8\u5904\u7406\u5347\u964d\u7ea7\u7684\u95ee\u9898\uff01"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/slambook2_learning-1650972485847-c2d01f7d6194b56e04bbc57dacc8ce4680bfda835f51224fe35e4016c76f90ee.png",alt:"picture 40"})),"  "),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/slambook2_learning-1650972496813-47c055d381221b64ea905fd3e32ba0beca35ce719efbac20e6c39bdb4625c893.png",alt:"picture 41"})),"  "),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://blog.csdn.net/xpy870663266/article/details/94742491"}),"(5\u6761\u6d88\u606f) \u89e3\u51b3Unable to Correct Problems \u2018You have Held Broken Packages\u2019_pyxiea\u7684\u535a\u5ba2-CSDN\u535a\u5ba2"))),(0,n.kt)("h4",u({},{id:"pre-install"}),"pre-install"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"sudo apt-get install qt5-qmake qt5-default libqglviewer-dev-qt5 libsuitesparse-dev libcxsparse3 libcholmod3\n")),(0,n.kt)("h2",u({},{id:"business-problems"}),"business problems"),(0,n.kt)("h2",u({},{id:"review"}),"review"))}v.isMDXComponent=!0}}]);