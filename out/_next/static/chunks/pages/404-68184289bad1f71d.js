(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8671:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(790)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,s=e.unoptimized,l=void 0!==s&&s,m=e.priority,_=void 0!==m&&m,b=e.loading,k=e.lazyRoot,I=void 0===k?null:k,B=e.lazyBoundary,E=e.className,U=e.quality,O=e.width,C=e.height,N=e.style,R=e.objectFit,L=e.objectPosition,M=e.onLoadingComplete,P=e.placeholder,q=void 0===P?"empty":P,T=e.blurDataURL,D=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=u.useContext(p.ImageConfigContext),H=u.useMemo((function(){var e=y||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[Z]),W=D,G=n?"responsive":"intrinsic";"layout"in W&&(W.layout&&(G=W.layout),delete W.layout);var V=z;if("loader"in W){if(W.loader){var J=W.loader;V=function(e){e.config;var t=c(e,["config"]);return J(t)}}delete W.loader}var K="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=w(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(T=T||Q.blurDataURL,K=Q.src,(!G||"fill"!==G)&&(C=C||Q.height,O=O||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var Y=!_&&("lazy"===b||"undefined"===typeof b);((t="string"===typeof t?t:K).startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);S.has(t)&&(Y=!1);h&&(l=!0);var F,X=r(u.useState(!1),2),$=X[0],ee=X[1],te=r(g.useIntersection({rootRef:I,rootMargin:B||"200px",disabled:!Y}),3),ne=te[0],ie=te[1],re=te[2],oe=!Y||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:L},ue=j(O),de=j(C),fe=j(U);0;var ge=Object.assign({},N,ce),pe="blur"!==q||$?{}:{backgroundSize:R||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(T,'")')};if("fill"===G)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var me=de/ue,_e=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ae.display="block",ae.position="relative",le=!0,se.paddingTop=_e):"intrinsic"===G?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,se.maxWidth="100%",F="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===G&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var he={src:v,srcSet:void 0,sizes:void 0};oe&&(he=x({config:H,src:t,unoptimized:l,layout:G,width:ue,quality:fe,sizes:n,loader:V}));var ye=t;0;var Se,ve="imagesrcset",be="imagesizes";ve="imageSrcSet",be="imageSizes";var we=(i(Se={},ve,he.srcSet),i(Se,be,he.sizes),Se),xe=u.default.useLayoutEffect,je=u.useRef(M),ze=u.useRef(t);u.useEffect((function(){je.current=M}),[M]),xe((function(){ze.current!==t&&(re(),ze.current=t)}),[re,t]);var ke=a({isLazy:Y,imgAttributes:he,heightInt:de,widthInt:ue,qualityInt:fe,layout:G,className:E,imgStyle:ge,blurStyle:pe,loading:b,config:H,unoptimized:l,placeholder:q,loader:V,srcString:ye,onLoadingCompleteRef:je,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},W);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ae},le?u.default.createElement("span",{style:se},F?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:F}):null):null,u.default.createElement(A,Object.assign({},ke))),_?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},we))):null)};var a=n(6495).Z,s=n(2648).Z,l=n(1598).Z,c=n(7273).Z,u=l(n(7294)),d=s(n(5443)),f=n(9309),g=n(7190),p=n(9977),m=(n(3794),n(2392));var _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0}||{},h=_.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,experimentalUnoptimized:!0},S=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(I(n))),a=o.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,l=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(i);s)c.push(parseInt(s[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,o(c));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,l),d=u.widths,f=u.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:s,width:d[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=b.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(S.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,g=e.loading,p=e.srcString,m=e.config,_=e.unoptimized,h=e.loader,y=e.onLoadingCompleteRef,S=e.setBlurComplete,v=e.setIntersection,b=e.onLoad,w=e.onError,j=(e.isVisible,e.noscriptSizes),z=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=d?"lazy":g,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,l),ref:u.useCallback((function(e){v(e),(null==e?void 0:e.complete)&&k(e,p,0,f,y,S)}),[v,p,r,f,y,S]),onLoad:function(e){k(e.currentTarget,p,0,f,y,S),b&&b(e)},onError:function(e){"blur"===f&&S(!0),w&&w(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},z,x({config:m,src:p,unoptimized:_,layout:r,width:n,quality:i,sizes:j,loader:h}),{decoding:"async","data-nimg":r,style:s,className:o,loading:g}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],g=d[1],p=i(r.useState(null),2),m=p[0],_=p[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),c||f)return;return m&&m.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},l.push(n),s.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,c,n,t,f]);var h=r.useCallback((function(){g(!1)}),[]);return[_,f,h]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),r=n(995),o=n.n(r);n(5675);function a(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:o().backgroundImg,children:(0,i.jsx)("div",{className:o().errorCard,children:(0,i.jsxs)("div",{className:o().errorDiv,children:[(0,i.jsx)("div",{className:o().errorRight,children:(0,i.jsx)("img",{className:o().errorImg,alt:"404",src:"https://lh3.googleusercontent.com/G6O8hG_peHi-e3vZIfT_5t8wiOiMKHz4XV3vDbP1IC1lfNXBAh0JGSq8FS2q3HdsyULxac-xjwtpWOQXVy-Nfq5j9zPJZHv3dmBEyUBQG5d0_8ToezRzhZ9mwf__RiL9_uf_-wvYGBCZjngKBJa4DduUkNKbefDr_OEr2ZBeNCcDTrZ-muRlCqkuunjxr1G5dkUUbvaz4gxnUgHAg0VlZ4O0qakWU3MAgGjMqODBUGebcwqnLkRB8D5yRqPcBCEyDk6Kaeh_t6YHgZBQMxAKnOPaK6xpgQoPwoz9oJEms8bMXY131gCl_jG2loPSuffLkb5LYEO7wTHiqkq6fbnuOO9rJEAUzisuGH2siu1VcfnC7g9mu0Md57OQWNOBu-wIxU1_e8_fgPDzKN93prwZ2C55kQf3OYXRUvT3PDrSQlzyajXxd4aEhtha1bStNhT-CFATqig9T3JMEtFxLwix-mHTkFycwpbet37oYjAVN2b3-ox8Ib15sirJn6G9Zj14QAfYygSs1zxHIfkmb0HJz4MxCUsscS_ZAI7p_KC0XPYEynaPTQKRW2Q961oXBfEfEmTUtJs9sdSmrbri1UnkAk3na3YZu0MIwTJm4xcsX-r8ZHupUseKKlUopp8_BSvkcp_yv7Sc3VoccSpnWJuGeNeUB2xqe7rU_wpTNh3nbmZKruu095CY6OGxEq7BtjteLHBvaWROrxDIy7m98xll_MBRQm6AdPOGsUFoU4GSen1BLoAPBECcmoivofTfV0AxQfnR-LdRiLKsoKWPz9vOxAcZ4uRSsms2g_qyTcJhV3Gz12oNt1SHoZAnFMEjcJexvLYR3Q=w620-h632-no?authuser=0",draggable:!1})}),(0,i.jsxs)("div",{className:o().errorLeft,children:[(0,i.jsxs)("div",{className:o().errorTitle,children:[(0,i.jsx)("span",{children:"Oops!"})," ",(0,i.jsx)("br",{}),"  I think we can't find this page"]}),(0,i.jsx)("div",{className:o().errorWelcomeText,children:"Don't worry, this button will guide you to a safe place..."}),(0,i.jsx)("button",{className:o().goBack,children:(0,i.jsx)("a",{href:"/",children:"Let's go!"})})]})]})})})})}},995:function(e){e.exports={backgroundImg:"SettingStyles_backgroundImg__ux6v3",container:"SettingStyles_container__cHOOe",containerPop:"SettingStyles_containerPop__RbN_q",filters:"SettingStyles_filters__ODrv9",check:"SettingStyles_check__MO6cl",projUsersMaincontainer:"SettingStyles_projUsersMaincontainer__SWr4i",searchBox:"SettingStyles_searchBox__ZwBBf",inputBar:"SettingStyles_inputBar__Vtp4M",searchIcon:"SettingStyles_searchIcon__8c5t9",title:"SettingStyles_title__5CKgV",errorTitle:"SettingStyles_errorTitle__dpphm",errorWelcomeText:"SettingStyles_errorWelcomeText__4dcq0",projectUsersContainer:"SettingStyles_projectUsersContainer__iOwBN",projectUsersDiv:"SettingStyles_projectUsersDiv__iiB7c",projectUsersPic:"SettingStyles_projectUsersPic__ivRM7",projectUsersTitle:"SettingStyles_projectUsersTitle__Mm3rS",projectUsersDescription:"SettingStyles_projectUsersDescription__n5urZ",projectUserButtonBox:"SettingStyles_projectUserButtonBox__k2Ro1",projectUsersSMIcons:"SettingStyles_projectUsersSMIcons___v9yF",bigProjCard:"SettingStyles_bigProjCard__rWjef",errorCard:"SettingStyles_errorCard__0jLoq",buttonContainer:"SettingStyles_buttonContainer__cuLWA",pfp:"SettingStyles_pfp__dvHaD",banner:"SettingStyles_banner__xE_5y",welcomeText:"SettingStyles_welcomeText__ch8dL",setText:"SettingStyles_setText__D0_LT",connText:"SettingStyles_connText__RNh0L",textArea:"SettingStyles_textArea__rxtn0",inputName:"SettingStyles_inputName__3uqeH",styleButtonConn:"SettingStyles_styleButtonConn__J5Iug",goBack:"SettingStyles_goBack__yuH0a",projUserButton:"SettingStyles_projUserButton__YB9Cs",links:"SettingStyles_links__SbMt1",arrow:"SettingStyles_arrow__1Y5YL",setProfileStepsButton:"SettingStyles_setProfileStepsButton__v8xpy",errorDiv:"SettingStyles_errorDiv___n_aE",errorLeft:"SettingStyles_errorLeft__qkwkM",errorImg:"SettingStyles_errorImg__m64Oi"}},5675:function(e,t,n){n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8671,e(e.s=t);var t}));var t=e.O();_N_E=t}]);