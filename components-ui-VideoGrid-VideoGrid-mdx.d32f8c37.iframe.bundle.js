"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[8850,9198],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/VideoGrid/VideoGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_VideoGrid:()=>_VideoGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/VideoGrid/index.tsx"),_VideoTile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI Components/Video/VideoGrid",component:___WEBPACK_IMPORTED_MODULE_1__.ZP,parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport VideoGrid from './';\nimport VideoTile from '../VideoTile';\nexport default {\n  title: 'UI Components/Video/VideoGrid',\n  component: VideoGrid,\n  parameters: {\n    layout: 'fullscreen'\n  }\n};\nexport const _VideoGrid = args => {\n  const tiles = new Array(args.size).fill(0).map((_, index) => {\n    const isFeatured = args.layout === 'featured' && index === 0;\n    return <VideoTile style={{\n      border: '1px solid grey',\n      gridArea: isFeatured ? 'ft' : ''\n    }} nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`} key={index} />;\n  });\n  return <div style={{\n    padding: '1rem',\n    height: '100vh',\n    boxSizing: 'border-box'\n  }}>\n      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>\n    </div>;\n};\n_VideoGrid.argTypes = {\n  size: {\n    control: 'number'\n  },\n  layout: {\n    control: 'select',\n    options: ['standard', 'featured']\n  }\n};\n_VideoGrid.args = {\n  size: 4,\n  layout: 'standard'\n};\n_VideoGrid.story = {\n  name: 'VideoGrid'\n};\n_VideoGrid.parameters = {\n  ..._VideoGrid.parameters,\n  docs: {\n    ..._VideoGrid.parameters?.docs,\n    source: {\n      originalSource: \"args => {\\n  const tiles = new Array(args.size).fill(0).map((_, index) => {\\n    const isFeatured = args.layout === 'featured' && index === 0;\\n    return <VideoTile style={{\\n      border: '1px solid grey',\\n      gridArea: isFeatured ? 'ft' : ''\\n    }} nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`} key={index} />;\\n  });\\n  return <div style={{\\n    padding: '1rem',\\n    height: '100vh',\\n    boxSizing: 'border-box'\\n  }}>\\n      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>\\n    </div>;\\n}\",\n      ..._VideoGrid.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"video-grid":{startLoc:{col:26,line:14},endLoc:{col:1,line:29},startBody:{col:26,line:14},endBody:{col:1,line:29}}}},layout:"fullscreen"}},_VideoGrid=args=>{const tiles=new Array(args.size).fill(0).map(((_,index)=>{const isFeatured="featured"===args.layout&&0===index;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{border:"1px solid grey",gridArea:isFeatured?"ft":""},nameplate:isFeatured?"Featured tile":`Tile ${index+1}`},index)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{padding:"1rem",height:"100vh",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ZP,{layout:args.layout,children:tiles})})};_VideoGrid.displayName="_VideoGrid",_VideoGrid.argTypes={size:{control:"number"},layout:{control:"select",options:["standard","featured"]}},_VideoGrid.args={size:4,layout:"standard"},_VideoGrid.story={name:"VideoGrid"},_VideoGrid.parameters={..._VideoGrid.parameters,docs:{..._VideoGrid.parameters?.docs,source:{originalSource:"args => {\n  const tiles = new Array(args.size).fill(0).map((_, index) => {\n    const isFeatured = args.layout === 'featured' && index === 0;\n    return <VideoTile style={{\n      border: '1px solid grey',\n      gridArea: isFeatured ? 'ft' : ''\n    }} nameplate={isFeatured ? 'Featured tile' : `Tile ${index + 1}`} key={index} />;\n  });\n  return <div style={{\n    padding: '1rem',\n    height: '100vh',\n    boxSizing: 'border-box'\n  }}>\n      <VideoGrid layout={args.layout}>{tiles}</VideoGrid>\n    </div>;\n}",..._VideoGrid.parameters?.docs?.source}}};const __namedExportsOrder=["_VideoGrid"];try{_VideoGrid.displayName="_VideoGrid",_VideoGrid.__docgenInfo={description:"",displayName:"_VideoGrid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/VideoGrid/VideoGrid.stories.tsx#_VideoGrid"]={docgenInfo:_VideoGrid.__docgenInfo,name:"_VideoGrid",path:"src/components/ui/VideoGrid/VideoGrid.stories.tsx#_VideoGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>baseSpacing,T:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh)(props)},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.$,Wb:()=>_light__WEBPACK_IMPORTED_MODULE_0__.W,nz:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.n});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/VideoGrid/VideoGrid.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/VideoGrid/index.tsx"),_VideoTile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/theme/GlobalStyles.ts"),_VideoGrid_stories_tsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/ui/VideoGrid/VideoGrid.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h4:"h4"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.h_,{of:_VideoGrid_stories_tsx__WEBPACK_IMPORTED_MODULE_6__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"videogrid",children:"VideoGrid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The VideoGrid component adapts to screen size and orientation, ensuring consistent rendering of up to 25 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/ui-components-video-videotile--page",children:"VideoTile"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It also supports a 'featured' layout, which will give a single tile a larger portion of the available space, and lay out the other tiles as smaller, 'thumbnail' styled, videos."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { VideoGrid, VideoTile } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:_theme___WEBPACK_IMPORTED_MODULE_4__.Wb,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.n,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"1rem",height:"70vh",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{border:"1px solid grey",gridArea:""},nameplate:"Tile 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{border:"1px solid grey",gridArea:""},nameplate:"Tile 2"})]})})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<div style={{ padding: '1rem', height: '70vh', boxSizing: 'border-box' }}>\n  <VideoGrid>\n    <VideoTile\n      style={{\n        border: '1px solid grey',\n        gridArea: '',\n      }}\n      nameplate=\"Tile 1\"\n    />\n    <VideoTile\n      style={{\n        border: '1px solid grey',\n        gridArea: '',\n      }}\n      nameplate=\"Tile 2\"\n    />\n  </VideoGrid>\n</div>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example-with-featured-layout",children:"Example with featured layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_9__.f6,{theme:_theme___WEBPACK_IMPORTED_MODULE_4__.Wb,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.n,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"1rem",height:"70vh",boxSizing:"border-box"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.ZP,{layout:"featured",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{border:"1px solid grey",gridArea:"ft"},nameplate:"Featured Tile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{border:"1px solid grey",gridArea:""},nameplate:"Tile 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{border:"1px solid grey",gridArea:""},nameplate:"Tile 3"})]})})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<div style={{ padding: '1rem', height: '70vh', boxSizing: 'border-box' }}>\n  <VideoGrid layout=\"featured\">\n    <VideoTile\n      style={{\n        border: '1px solid grey',\n        gridArea: 'ft',\n      }}\n      nameplate=\"Featured Tile\"\n    />\n    <VideoTile\n      style={{\n        border: '1px solid grey',\n        gridArea: '',\n      }}\n      nameplate=\"Tile 2\"\n    />\n    <VideoTile\n      style={{\n        border: '1px solid grey',\n        gridArea: '',\n      }}\n      nameplate=\"Tile 3\"\n    />\n  </VideoGrid>\n</div>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"videogrid-component",children:"VideoGrid component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Ed,{of:___WEBPACK_IMPORTED_MODULE_2__.ZP}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"videotile-component",children:"VideoTile component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.Ed,{of:_VideoTile__WEBPACK_IMPORTED_MODULE_3__.Z})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);