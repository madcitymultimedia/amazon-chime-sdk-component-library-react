/*! For license information please see components-ui-icons-Dislike-Dislike-mdx.710c07b4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[191,9421],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/icons/Dislike/Dislike.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Dislike:()=>_Dislike,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Dislike/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Dislike from '.';\nexport default {\n  title: 'UI Components/Icons/Dislike'\n};\nexport const _Dislike = args => <Dislike {...args} />;\n_Dislike.argTypes = {\n  width: {\n    control: 'text'\n  }\n};\n_Dislike.args = {\n  width: '2rem'\n};\n_Dislike.story = {\n  name: 'Dislike'\n};\n_Dislike.parameters = {\n  ..._Dislike.parameters,\n  docs: {\n    ..._Dislike.parameters?.docs,\n    source: {\n      originalSource: \"args => <Dislike {...args} />\",\n      ..._Dislike.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{dislike:{startLoc:{col:24,line:9},endLoc:{col:53,line:9},startBody:{col:24,line:9},endBody:{col:53,line:9}}}}},title:"UI Components/Icons/Dislike"},_Dislike=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});_Dislike.displayName="_Dislike",_Dislike.argTypes={width:{control:"text"}},_Dislike.args={width:"2rem"},_Dislike.story={name:"Dislike"},_Dislike.parameters={..._Dislike.parameters,docs:{..._Dislike.parameters?.docs,source:{originalSource:"args => <Dislike {...args} />",..._Dislike.parameters?.docs?.source}}};const __namedExportsOrder=["_Dislike"];try{_Dislike.displayName="_Dislike",_Dislike.__docgenInfo={description:"",displayName:"_Dislike",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Dislike/Dislike.stories.tsx#_Dislike"]={docgenInfo:_Dislike.__docgenInfo,name:"_Dislike",path:"src/components/ui/icons/Dislike/Dislike.stories.tsx#_Dislike"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Dislike/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dislike=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M18.977 11.946l-1.29-4.575C17.528 6.577 16.818 6 16 6H9.126c-.197 0-.357.158-.357.352V12.614l3.034 5.353c.123.044.45.069.76-.105.479-.271.732-.897.733-1.842l.089-1.43c.02-.45.389-.803.84-.803h3.194c.479 0 .926-.211 1.228-.58.298-.364.415-.837.33-1.261M7.337 6h-1.99C5.156 6 5 6.156 5 6.347v5.552c0 .191.156.347.347.347h2.037c.212 0 .385-.173.385-.385V6.43c0-.237-.193-.43-.431-.43m12.082 7.84c-.492.602-1.22.947-2.001.947h-3.044l-.08 1.264c0 2.228-1.244 2.765-1.778 2.893-.577.137-1.321.028-1.55-.423l-3.05-5.383c-.164.069-.344.108-.533.108H5.347c-.742 0-1.347-.605-1.347-1.347V6.347C4 5.605 4.605 5 5.347 5h1.99c.347 0 .66.128.908.333.238-.204.544-.333.88-.333H16c1.29 0 2.413.914 2.66 2.136l1.289 4.575c.153.756-.04 1.531-.53 2.129"})});Dislike.displayName="Dislike",Dislike.displayName="Dislike";const __WEBPACK_DEFAULT_EXPORT__=Dislike;try{Dislike.displayName="Dislike",Dislike.__docgenInfo={description:"",displayName:"Dislike",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Dislike/index.tsx#Dislike"]={docgenInfo:Dislike.__docgenInfo,name:"Dislike",path:"src/components/ui/icons/Dislike/index.tsx#Dislike"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.$,Wb:()=>_light__WEBPACK_IMPORTED_MODULE_0__.W,nz:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.n});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/icons/Dislike/Dislike.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/Dislike/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/GlobalStyles.ts"),_Dislike_stories_tsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/icons/Dislike/Dislike.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{of:_Dislike_stories_tsx__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dislike-icon",children:"Dislike Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Dislike component creates an icon using inline SVG. Typically, you can use it to indicate a dislike action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { Dislike } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_8__.f6,{theme:_theme___WEBPACK_IMPORTED_MODULE_3__.Wb,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.n,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{width:"2rem"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Dislike width="2rem" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Ed,{of:___WEBPACK_IMPORTED_MODULE_2__.Z})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);