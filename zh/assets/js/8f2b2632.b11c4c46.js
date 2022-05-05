"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[9966],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:e},l),{},{components:n})):r.createElement(d,i({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},764:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u="\u5982\u4f55\u53c2\u4e0e main \u7f51\u7edc",s={unversionedId:"getting-started/setup/main-network",id:"getting-started/setup/main-network",title:"\u5982\u4f55\u53c2\u4e0e main \u7f51\u7edc",description:"TODO",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/02-setup/06-main-network.md",sourceDirName:"02-getting-started/02-setup",slug:"/getting-started/setup/main-network",permalink:"/starcoin-cookbook/zh/docs/getting-started/setup/main-network",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting-started/02-setup/06-main-network.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to sync the block and state faster",permalink:"/starcoin-cookbook/zh/docs/getting-started/setup/fast-sync-data"},next:{title:"Creating your own private Starcoin network",permalink:"/starcoin-cookbook/zh/docs/getting-started/setup/private-network"}},l={},p=[{value:"\u52a0\u5165 main \u7f51\u7edc",id:"\u52a0\u5165-main-\u7f51\u7edc",level:2}],m={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u53c2\u4e0e-main-\u7f51\u7edc"},"\u5982\u4f55\u53c2\u4e0e main \u7f51\u7edc"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Introduce the main network."),(0,a.kt)("li",{parentName:"ol"},"Run node and join test network.")),(0,a.kt)("h2",{id:"\u52a0\u5165-main-\u7f51\u7edc"},"\u52a0\u5165 main \u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u52a0\u5165 main \u7f51\u7edc\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin -n main\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u7f51\u7edc\u5c31\u662f\u662f main\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"starcoin\n")))}f.isMDXComponent=!0}}]);