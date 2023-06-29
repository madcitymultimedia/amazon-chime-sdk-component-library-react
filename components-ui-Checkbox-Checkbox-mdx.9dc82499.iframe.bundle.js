/*! For license information please see components-ui-Checkbox-Checkbox-mdx.9dc82499.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[1523,5696],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Checkbox:()=>_Checkbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Checkbox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Checkbox from './';\nexport default {\n  title: 'UI Components/Form/Checkbox',\n  component: Checkbox\n};\nexport const _Checkbox = args => {\n  return <>\n      <span style={{\n      marginRight: '0.5rem'\n    }}>Enabled</span>\n      <Checkbox {...args} />\n    </>;\n};\n_Checkbox.args = {\n  value: 'value',\n  checked: false,\n  onChange: () => console.log('changed'),\n  'aria-label': 'checkbox'\n};\n_Checkbox.argTypes = {\n  checked: {\n    control: 'boolean'\n  },\n  value: {\n    table: {\n      disable: true\n    }\n  },\n  onChange: {\n    table: {\n      disable: true\n    }\n  },\n  'aria-label': {\n    table: {\n      disable: true\n    }\n  },\n  tag: {\n    table: {\n      disable: true\n    }\n  },\n  css: {\n    table: {\n      disable: true\n    }\n  }\n};\n_Checkbox.story = {\n  name: 'Checkbox'\n};\n_Checkbox.parameters = {\n  ..._Checkbox.parameters,\n  docs: {\n    ..._Checkbox.parameters?.docs,\n    source: {\n      originalSource: \"args => {\\n  return <>\\n      <span style={{\\n      marginRight: '0.5rem'\\n    }}>Enabled</span>\\n      <Checkbox {...args} />\\n    </>;\\n}\",\n      ..._Checkbox.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{checkbox:{startLoc:{col:25,line:10},endLoc:{col:1,line:17},startBody:{col:25,line:10},endBody:{col:1,line:17}}}}},title:"UI Components/Form/Checkbox",component:___WEBPACK_IMPORTED_MODULE_1__.Z},_Checkbox=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{style:{marginRight:"0.5rem"},children:"Enabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args})]});_Checkbox.args={value:"value",checked:!1,onChange:()=>console.log("changed"),"aria-label":"checkbox"},_Checkbox.argTypes={checked:{control:"boolean"},value:{table:{disable:!0}},onChange:{table:{disable:!0}},"aria-label":{table:{disable:!0}},tag:{table:{disable:!0}},css:{table:{disable:!0}}},_Checkbox.story={name:"Checkbox"},_Checkbox.parameters={..._Checkbox.parameters,docs:{..._Checkbox.parameters?.docs,source:{originalSource:"args => {\n  return <>\n      <span style={{\n      marginRight: '0.5rem'\n    }}>Enabled</span>\n      <Checkbox {...args} />\n    </>;\n}",..._Checkbox.parameters?.docs?.source}}};const __namedExportsOrder=["_Checkbox"];try{_Checkbox.displayName="_Checkbox",_Checkbox.__docgenInfo={description:"",displayName:"_Checkbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/Checkbox.stories.tsx#_Checkbox"]={docgenInfo:_Checkbox.__docgenInfo,name:"_Checkbox",path:"src/components/ui/Checkbox/Checkbox.stories.tsx#_Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox,Z:()=>ui_Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),icons=__webpack_require__("./src/components/ui/icons/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const HiddenCheckbox=styled_components_browser_esm.ZP.input`
  ${style.jy};

  &[aria-invalid='true'] + .ch-checkbox {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }
`,StyledCheckbox=styled_components_browser_esm.ZP.div`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.radii.default};
  box-shadow: ${props=>props.theme.inputs.shadow};
  color: ${props=>props.theme.inputs.fontColor};
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  transition: box-shadow 0.05s ease-in;

  > svg {
    left: -0.03125rem;
    position: absolute;
    transform: scale(1.5);
  }

  ${HiddenCheckbox}:checked ~ & {
    background-color: ${props=>props.theme.inputs.checked.bgd};
    border: ${props=>props.theme.inputs.checked.border};
    box-shadow: ${props=>props.theme.inputs.checked.shadow};
    color: ${props=>props.theme.inputs.checked.fontColor};
  }

  ${HiddenCheckbox}:focus ~ & {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
  }
`;try{HiddenCheckbox.displayName="HiddenCheckbox",HiddenCheckbox.__docgenInfo={description:"",displayName:"HiddenCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/Styled.tsx#HiddenCheckbox"]={docgenInfo:HiddenCheckbox.__docgenInfo,name:"HiddenCheckbox",path:"src/components/ui/Checkbox/Styled.tsx#HiddenCheckbox"})}catch(__react_docgen_typescript_loader_error){}try{StyledCheckbox.displayName="StyledCheckbox",StyledCheckbox.__docgenInfo={description:"",displayName:"StyledCheckbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/Styled.tsx#StyledCheckbox"]={docgenInfo:StyledCheckbox.__docgenInfo,name:"StyledCheckbox",path:"src/components/ui/Checkbox/Styled.tsx#StyledCheckbox"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=props=>{const{checked,onChange,value}=props,checkboxNode=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(HiddenCheckbox,{...props,"data-testid":"hidden-checkbox",ref:checkboxNode,type:"checkbox",value,onChange}),(0,jsx_runtime.jsx)(StyledCheckbox,{"data-testid":"styled-checkbox",checked,className:"ch-checkbox",onClick:()=>{checkboxNode.current?.click(),checkboxNode.current?.focus()},children:checked&&(0,jsx_runtime.jsx)(icons.Jr,{"data-testid":"check"})})]})};Checkbox.displayName="Checkbox";const ui_Checkbox=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event?: string | ChangeEvent<Element> | undefined) => void"}},value:{defaultValue:null,description:"The value of the checkbox.",name:"value",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"Whether or not the checkbox is checked.",name:"checked",required:!1,type:{name:"boolean | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/ui/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.$,Wb:()=>_light__WEBPACK_IMPORTED_MODULE_0__.W,nz:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.n});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/Checkbox/Checkbox.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Checkbox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Checkbox/Checkbox.stories.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Checkbox/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/theme/GlobalStyles.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{of:_Checkbox_stories_tsx__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Checkbox component permits you to make a binary choice."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { Checkbox } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_8__.f6,{theme:_theme___WEBPACK_IMPORTED_MODULE_4__.Wb,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.n,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{value:"",checked:!0,onChange:()=>console.log("change")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{value:"",checked:!1,onChange:()=>console.log("change")})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"<Checkbox value=\"\" checked onChange={() => console.log('change')} />\n<Checkbox value=\"\" checked={false} onChange={() => console.log('change')} />\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Ed,{of:___WEBPACK_IMPORTED_MODULE_3__.Z})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ui-Checkbox-Checkbox-mdx.9dc82499.iframe.bundle.js.map