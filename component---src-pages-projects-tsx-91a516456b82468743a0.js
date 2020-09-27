(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{gZkK:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("vOnD"),i=r("vrFN"),c=r("9Dj+"),l=r("Wbzz"),s=a.a.div.withConfig({displayName:"project__ProjectContainer",componentId:"sc-1x1r7wj-0"})(["cursor:pointer;padding:5px;margin:10px 15px;min-height:150px;display:flex;flex-direction:column;align-content:center;flex:0 1 calc(100% / 2);box-shadow:2px 2px #d3d3d3;border:1px solid #cccccc;background:#fdfdfd;transition:0.3s;&:hover{transform:scale(1.05);}"]),d=a.a.h2.withConfig({displayName:"project__Title",componentId:"sc-1x1r7wj-1"})(["text-align:center;width:100%;padding:5px;font-size:0.8rem;"]),p=a.a.p.withConfig({displayName:"project__Description",componentId:"sc-1x1r7wj-2"})(["padding:0 auto;font-size:0.6rem;"]),m=a.a.div.withConfig({displayName:"project__CategoryContainer",componentId:"sc-1x1r7wj-3"})(["display:flex;flex-wrap:wrap;justify-content:center;padding-bottom:10px;margin:auto auto 0;"]),u=a.a.span.withConfig({displayName:"project__Category",componentId:"sc-1x1r7wj-4"})(["color:black;background:;border:1px solid ",";font-size:0.6rem;margin:2px 6px;padding:2px 8px;"],(function(e){return e.color})),f=function(e){var t=e.title,r=e.description,n=e.categories,a=e.post;return o.a.createElement(s,{onClick:function(e){return Object(l.navigate)("/projects/"+a)}},o.a.createElement(d,null,t),o.a.createElement(p,null,r),o.a.createElement(m,null,n.sort().map((function(e){return o.a.createElement(u,{key:e.name,color:e.color||"lightgrey"},e.name)}))))},g=function(e){var t=e.handleClickCategory,r=e.handleClear,i=e.children,c=e.color,l=void 0===c?"grey":c,s=e.toggledState,d=void 0!==s&&s,p=Object(n.useState)(d),m=p[0],u=p[1],f=a.a.button.withConfig({displayName:"category__ButtonContainer",componentId:"sc-15p9ccp-0"})(["cursor:pointer;background:white;border:1px solid ",";font-size:0.6rem;margin:4px 3px;padding:2px 8px;&:hover{transform:scale(1.15) ease-in;transition:0.5s ease-in-out;}&.clicked{background:",",transition:0.2s}"],l,l);return o.a.createElement(f,{onClick:function(e){"Clear Selection"===e.currentTarget.innerText?r():(u(!m),t(e))},className:m?"clicked":""},i)};function y(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=a.a.section.withConfig({displayName:"category-box__CategoryBoxContainer",componentId:"sc-6q8i9t-0"})(["padding:10px 0;"]),x=a.a.h4.withConfig({displayName:"category-box__CategoryBoxHeader",componentId:"sc-6q8i9t-1"})(["font-weight:normal;font-size:0.9rem;@media screen and (max-width:420px){text-align:center;font-size 0.8rem;}"]),v=Object(a.a)((function(e){return o.a.createElement("div",e)})).withConfig({displayName:"category-box__CategoryRow",componentId:"sc-6q8i9t-2"})(["display:flex;flex-wrap:wrap;&:not(:first-of-type){margin-top:5px;}"]),w=function(e){var t=e.categories,r=e.filterProjects,n=function(e){r(e.currentTarget.innerText)};return null===t?null:o.a.createElement(b,null,o.a.createElement(x,null,"Select a category to sort projects:"),o.a.createElement(v,{style:{justifyContent:"flex-start"}},t.map((function(e){return o.a.createElement(g,{handleClickCategory:n,color:e.color,toggledState:!1},e.name)}))),o.a.createElement(v,{style:{justifyContent:"flex-end"}},o.a.createElement(g,{handleClear:function(){r(null);for(var e,t=y(document.getElementsByClassName("clicked"));!(e=t()).done;){e.value.classList.remove("clicked")}}},"Clear Selection")))};function j(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=[{title:"SoundTube",description:"SoundTube is a social media and music sharing website.",categories:[{name:"HTML",color:"#e44d26"},{name:"CSS",color:"#264de4"},{name:"JavaScript",color:"#264de4"},{name:"Express",color:""},{name:"JSON",color:"#466df4"},{name:"MySQL",color:"#47809d"},{name:"Node.js",color:"#70a761"}],post:"soundtube"},{title:"TypeScript MERN To Do Application",description:"A to do application created in Typescript using the MERN Stack.",categories:[{name:"HTML",color:"#e44d26"},{name:"CSS",color:"#264de4"},{name:"JavaScript",color:"#264de4"},{name:"TypeScript",color:"#3178c6"},{name:"MongoDB",color:"#e58f14"},{name:"Express",color:"green"},{name:"React",color:"#61dafb"},{name:"Node.js",color:"#70a761"}],post:"todo"},{title:"World of Tanks TypeScript API Wrapper (WIP)",description:"A wrapper for WarGaming's API in TypeScript",categories:[{name:"TypeScript",color:"#3178c6"},{name:"Node.js",color:"#70a761"}],post:"world-of-tanks-api"},{title:"Docstring Generator",description:"A Visual Studio Code extension for generating docstrings.",categories:[{name:"TypeScript",color:"#3178c6"},{name:"Node.js",color:"#70a761"}],post:"docstring-generator"},{title:"Manga Downloader",description:"Search for and download the latest manga through command line.",categories:[{name:"Python",color:"#61dafb"}],post:"manga-downloader"},{title:"Bank System",description:"A bank GUI that supports basic banking features built using NetBeans GUI Builder.",categories:[{name:"Java",color:"#e58f14"},{name:"Software GUI",color:"grey"}],post:"bank-system"}];function E(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k=a.a.h1.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-1hhvn7u-0"})(["margin:0 auto 10px;padding:5px;overflow:hidden;@media screen and (max-width:420px){font-size:1.8rem;}"]),A=a.a.h3.withConfig({displayName:"projects__ProjectDescription",componentId:"sc-1hhvn7u-1"})(["font-weight:normal;font-size:1rem;margin:0 auto 10px;@media screen and (max-width:420px){font-size:0.8rem;}"]),_=a.a.section.withConfig({displayName:"projects__ProjectContainer",componentId:"sc-1hhvn7u-2"})(["display:grid;grid-template-columns:1fr 1fr;@media screen and (max-width:720px){margin:0 auto;max-width:400px;grid-template-columns:1fr;}"]);t.default=function(e){var t=Object(n.useState)(C),r=t[0],a=t[1],l=function(){for(var e,t=[],r=j(C);!(e=r()).done;){var n=e.value;t=t.concat(n.categories)}return Object.values(t.reduce((function(e,t){var r;return Object.assign(e,((r={})[t.name]=t,r))}),{}))}();return o.a.createElement(c.a,null,o.a.createElement(i.a,null),o.a.createElement(k,null,"Projects"),o.a.createElement(A,null,"Here is a list of all the projects I have created (so far)!"),o.a.createElement(A,{style:{fontWeight:"bold"}},"Click on a project for more information"),o.a.createElement(w,{categories:l,filterProjects:function e(t){if(null===t)return a(C),C;var r=[];return C.map((function(e){for(var n,o=!1,a=E(e.categories);!(n=a()).done;){n.value.name===t&&(o=!0)}o&&r.push(e)})),a(r),e}}),o.a.createElement(_,null,r.map((function(e){return o.a.createElement(f,Object.assign({key:e.title},e))}))))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-91a516456b82468743a0.js.map