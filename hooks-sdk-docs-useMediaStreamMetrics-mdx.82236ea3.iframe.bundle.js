/*! For license information please see hooks-sdk-docs-useMediaStreamMetrics-mdx.82236ea3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[9006],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/hooks/sdk/docs/useMediaStreamMetrics.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"SDK Hooks/useMediaStreamMetrics"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"usemediastreammetrics",children:"useMediaStreamMetrics"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useMediaStreamMetrics"})," hook returns:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"common metrics for audio stream"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"common metrics for video stream of all attendees"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["original ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport",target:"_blank",rel:"nofollow noopener noreferrer",children:"RTCStatsReport"})," returned by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/getStats",target:"_blank",rel:"nofollow noopener noreferrer",children:"RTCPeerConnection.getStats()"})]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This hook re-renders frequently. You should avoid using it high in your app tree, and ideally use it in your leaf components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"return-value",children:"Return Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"{\n  audioPacketsSentFractionLossPercent: number | null;\n  audioPacketsReceivedFractionLossPercent: number | null;\n  audioSpeakerDelayMs: number | null;\n  audioUpstreamRoundTripTimeMs: number | null;\n  audioUpstreamJitterMs: number | null;\n  audioDownstreamJitterMs: number | null;\n  currentRoundTripTimeMs: number | null;\n  availableOutgoingBandwidth: number | null;\n  availableIncomingBandwidth: number | null;\n  rtcStatsReport: RTCStatsReport | null;\n  videoStreamMetrics: { [attendeeId: string]: { [ssrc: string]: { [key: string]: number } } };\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { useMediaStreamMetrics } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The hook depends on the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AudioVideoProvider"})," being rendered. If you are using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"}),", it is rendered by default."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"videoStreamMetrics"})," in return value is a map of attendee to stream of video metrics mappings. The format of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"videoStreamMetrics"})," is shown below:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"videoStreamMetrics: {\n  remoteAttendeeId: {\n    // remote attendees will have downstream metrics\n    ssrc: {\n      videoDownstreamBitrate: number;\n      videoDownstreamPacketLossPercent: number;\n      videoDownstreamPacketsReceived: number;\n      videoDownstreamFramesDecodedPerSecond: number;\n      videoDownstreamFrameHeight: number;\n      videoDownstreamFrameWidth: number;\n      videoDownstreamJitterMs: number;\n      videoDownstreamDelayMs: number;\n    }\n  }\n  localAttendeeId: {\n    // local attendee will have upstream metrics\n    ssrc: {\n      videoUpstreamBitrate: number;\n      videoUpstreamPacketsSent: number;\n      videoUpstreamPacketLossPercent: number;\n      videoUpstreamFramesEncodedPerSecond: number;\n      videoUpstreamFrameHeight: number;\n      videoUpstreamFrameWidth: number;\n      videoUpstreamJitterMs: number;\n      videoUpstreamRoundTripTimeMs: number;\n    }\n  }\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  useMediaStreamMetrics,\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => (\n  <MeetingProvider>\n    <MyChild />\n  </MeetingProvider>\n);\n\nconst MyChild = () => {\n  const metrics = useMediaStreamMetrics();\n  const rtcStatsReportValues: ReactElement[] = [];\n\n  metrics.rtcStatsReport?.forEach((report) =>\n    rtcStatsReportValues.push(<pre>{JSON.stringify(report, null, 2)}</pre>)\n  );\n\n  return (\n    <div>\n      <p>audioPacketsSentFractionLossPercent: {metrics.audioPacketsSentFractionLossPercent}</p>\n      <p>audioPacketsReceivedFractionLossPercent: {metrics.audioPacketsReceivedFractionLossPercent}</p>\n      <p>audioSpeakerDelayMs: {metrics.audioSpeakerDelayMs}</p>\n      <p>audioUpstreamRoundTripTimeMs: {metrics.audioUpstreamRoundTripTimeMs}</p>\n      <p>audioUpstreamJitterMs: {metrics.audioUpstreamJitterMs}</p>\n      <p>audioDownstreamJitterMs: {metrics.audioDownstreamJitterMs}</p>\n      <p>currentRoundTripTimeMs: {metrics.currentRoundTripTimeMs}</p>\n      <p>availableOutgoingBandwidth: {metrics.availableOutgoingBandwidth}</p>\n      <p>availableIncomingBandwidth: {metrics.availableIncomingBandwidth}</p>\n      <p>videoStreamMetrics</p>\n      <code>\n        <pre>{JSON.stringify(metrics.videoStreamMetrics, null, 2)}</pre>\n      </code>\n      <p>rtcStatsReport</p>\n      <code>{...rtcStatsReportValues}</code>\n    </div>\n  );\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AudioVideoProvider"})}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);