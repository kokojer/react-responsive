var e=require("react"),n=require("react/jsx-runtime"),i=function(n){var i,t=n.query;t&&(i=window.matchMedia(t));var r=e.useState(!t||i.matches),o=r[0],u=r[1];return e.useEffect(function(){if(t){var e=function(e){u(!!e.matches)};return i.addEventListener("change",e),function(){return i.removeEventListener("change",e)}}},[]),o};function t(e){var t=i({query:!!e.orientation&&"(orientation: "+e.orientation+")"}),r=i({query:!!e.minResolution&&"(min-resolution: "+("number"==typeof e.minResolution?e.minResolution+"dppx":e.minResolution)+")"}),o=i({query:!!e.maxResolution&&"(max-resolution: "+("number"==typeof e.maxResolution?e.maxResolution+"dppx":e.maxResolution)+")"}),u=i({query:!!e.minWidth&&"(min-width: "+e.minWidth+"px)"}),a=i({query:!!e.maxWidth&&"(max-width: "+e.maxWidth+"px)"}),m=i({query:!!e.minHeight&&"(min-height: "+e.minHeight+"px)"}),h=i({query:!!e.maxHeight&&"(max-height: "+e.maxHeight+"px)"}),s=t&&r&&o&&u&&a&&m&&h;return"function"==typeof e.children?/*#__PURE__*/n.jsx(n.Fragment,{children:e.children(s)}):s&&/*#__PURE__*/n.jsx(n.Fragment,{children:e.children})}Object.assign(t,{useMediaQuery:i}),module.exports=t;
//# sourceMappingURL=react-responsive.cjs.map
