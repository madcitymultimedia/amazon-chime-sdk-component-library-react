"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[8130],{"./src/components/ui/Radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Radio:()=>_Radio,_RadioWithIcon:()=>_RadioWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Radio/index.tsx"),_icons_Add__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/Add/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Radio from './';\nimport Add from '../icons/Add';\n\n// This is `Meta`, it specify the position of a story in storybook sidebar,\n// and attach a story to a component\nexport default {\n  title: 'UI Components/Form/Radio',\n  component: Radio\n};\n\n// Remove `Flex` style because the \"centered\" style is applied globally in preview.ts\nexport const _Radio = args => <Radio {...args} />;\n\n// Controls args we don't want to display in toolbar-control,\n// because they are not directly related to component itself.\nconst commonHiddenArgTypes = {\n  icon: {\n    table: {\n      disable: true\n    }\n  },\n  onChange: {\n    table: {\n      disable: true\n    }\n  },\n  radioProps: {\n    table: {\n      disable: true\n    }\n  }\n};\n\n// Specify the args that will be displayed in toolbar-Controls tab\n_Radio.argTypes = {\n  value: {\n    control: 'text'\n  },\n  label: {\n    control: 'text'\n  },\n  checked: {\n    control: 'boolean'\n  },\n  ...commonHiddenArgTypes\n};\n\n// Specify the default value for args in toolbar-Controls tab\n_Radio.args = {\n  value: 'bananas',\n  label: 'Radio Input',\n  checked: false,\n  onChange: (e: any) => console.log(e)\n};\n_Radio.story = {\n  name: 'Radio'\n};\nexport const _RadioWithIcon = args => <Radio {...args} />;\n_RadioWithIcon.argTypes = {\n  ..._Radio.argTypes,\n  label: {\n    table: {\n      disable: true\n    }\n  }\n};\n_RadioWithIcon.args = {\n  ..._Radio.args,\n  icon: <Add width=\"2rem\" />\n};\n_RadioWithIcon.story = {\n  name: 'Radio with Icon'\n};\n_Radio.parameters = {\n  ..._Radio.parameters,\n  docs: {\n    ..._Radio.parameters?.docs,\n    source: {\n      originalSource: \"args => <Radio {...args} />\",\n      ..._Radio.parameters?.docs?.source\n    }\n  }\n};\n_RadioWithIcon.parameters = {\n  ..._RadioWithIcon.parameters,\n  docs: {\n    ..._RadioWithIcon.parameters?.docs,\n    source: {\n      originalSource: \"args => <Radio {...args} />\",\n      ..._RadioWithIcon.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{radio:{startLoc:{col:22,line:16},endLoc:{col:49,line:16},startBody:{col:22,line:16},endBody:{col:49,line:16}},"radio-with-icon":{startLoc:{col:30,line:62},endLoc:{col:57,line:62},startBody:{col:30,line:62},endBody:{col:57,line:62}}}}},title:"UI Components/Form/Radio",component:___WEBPACK_IMPORTED_MODULE_1__.Z},_Radio=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});_Radio.displayName="_Radio";_Radio.argTypes={value:{control:"text"},label:{control:"text"},checked:{control:"boolean"},icon:{table:{disable:!0}},onChange:{table:{disable:!0}},radioProps:{table:{disable:!0}}},_Radio.args={value:"bananas",label:"Radio Input",checked:!1,onChange:e=>console.log(e)},_Radio.story={name:"Radio"};const _RadioWithIcon=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});_RadioWithIcon.displayName="_RadioWithIcon",_RadioWithIcon.argTypes={..._Radio.argTypes,label:{table:{disable:!0}}},_RadioWithIcon.args={..._Radio.args,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons_Add__WEBPACK_IMPORTED_MODULE_2__.Z,{width:"2rem"})},_RadioWithIcon.story={name:"Radio with Icon"},_Radio.parameters={..._Radio.parameters,docs:{..._Radio.parameters?.docs,source:{originalSource:"args => <Radio {...args} />",..._Radio.parameters?.docs?.source}}},_RadioWithIcon.parameters={..._RadioWithIcon.parameters,docs:{..._RadioWithIcon.parameters?.docs,source:{originalSource:"args => <Radio {...args} />",..._RadioWithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["_Radio","_RadioWithIcon"];try{_Radio.displayName="_Radio",_Radio.__docgenInfo={description:"",displayName:"_Radio",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Radio.stories.tsx#_Radio"]={docgenInfo:_Radio.__docgenInfo,name:"_Radio",path:"src/components/ui/Radio/Radio.stories.tsx#_Radio"})}catch(__react_docgen_typescript_loader_error){}try{_RadioWithIcon.displayName="_RadioWithIcon",_RadioWithIcon.__docgenInfo={description:"",displayName:"_RadioWithIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Radio.stories.tsx#_RadioWithIcon"]={docgenInfo:_RadioWithIcon.__docgenInfo,name:"_RadioWithIcon",path:"src/components/ui/Radio/Radio.stories.tsx#_RadioWithIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>baseSpacing,T:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh)(props)},"./src/components/ui/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label,Z:()=>ui_Label});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Base=__webpack_require__("./src/components/ui/Base/index.ts");const StyledLabel=styled_components_browser_esm.ZP.label`
  color: ${props=>props.theme.inputs.fontColor};
  font-size: ${props=>props.theme.fontSizes.label.fontSize};
  line-height: ${props=>props.theme.fontSizes.label.lineHeight};

  ${Base.K}
  ${Base.T}
`;try{StyledLabel.displayName="StyledLabel",StyledLabel.__docgenInfo={description:"",displayName:"StyledLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/Styled.tsx#StyledLabel"]={docgenInfo:StyledLabel.__docgenInfo,name:"StyledLabel",path:"src/components/ui/Label/Styled.tsx#StyledLabel"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=(0,react.forwardRef)(((props,ref)=>{const{className,tag,...rest}=props;return(0,jsx_runtime.jsx)(StyledLabel,{as:tag,"data-testid":"label",className:className||"",...rest,children:props.children})})),ui_Label=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/ui/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Radio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ui_Radio});var react=__webpack_require__("./node_modules/react/index.js"),useUniqueId=__webpack_require__("./src/hooks/useUniqueId/index.tsx"),Label=__webpack_require__("./src/components/ui/Label/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),style=__webpack_require__("./src/utils/style.ts");const HiddenRadio=styled_components_browser_esm.ZP.input`
  ${style.jy};

  &[aria-invalid='true'] + .ch-radio {
    border: ${props=>props.theme.inputs.error.border};
    box-shadow: ${props=>props.theme.inputs.error.shadow};
  }
`,StyledRadioWrapper=styled_components_browser_esm.ZP.span`
  > label {
    margin-left: 0.5rem;
  }
`,StyledRadio=styled_components_browser_esm.ZP.div`
  background-color: ${props=>props.theme.inputs.bgd};
  border: ${props=>props.theme.inputs.border};
  border-radius: ${props=>props.theme.radii.circle};
  box-shadow: ${props=>props.theme.inputs.shadow};
  margin-bottom: -0.1875rem;
  transition: box-shadow 0.05s ease-in;

  ${HiddenRadio}:checked ~ & {
    background-color: ${props=>props.theme.inputs.checked.bgd};
    border: ${props=>props.theme.inputs.checked.border};
    box-shadow: ${props=>props.theme.inputs.checked.shadow};
  }

  ${HiddenRadio}:focus ~ & {
    border: ${props=>props.theme.inputs.focus.border};
    box-shadow: ${props=>props.theme.inputs.focus.shadow};
  }
`,StyledRadioLabel=(0,styled_components_browser_esm.ZP)(StyledRadio)`
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;

  &:after {
    background-color: ${props=>props.checked?props.theme.inputs.checked.fontColor:props.theme.inputs.bgd};
    border-radius: ${props=>props.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${style.Ls};
  }
`,StyledRadioIcon=(0,styled_components_browser_esm.ZP)(StyledRadio)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-color: ${props=>props.theme.colors.greys.white};
  box-shadow: none;
  margin: 0.1rem;

  ${HiddenRadio}:checked ~ & {
    svg {
      stroke: ${props=>props.theme.colors.greys.white};
    }
  }
`;try{HiddenRadio.displayName="HiddenRadio",HiddenRadio.__docgenInfo={description:"",displayName:"HiddenRadio",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#HiddenRadio"]={docgenInfo:HiddenRadio.__docgenInfo,name:"HiddenRadio",path:"src/components/ui/Radio/Styled.tsx#HiddenRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioWrapper.displayName="StyledRadioWrapper",StyledRadioWrapper.__docgenInfo={description:"",displayName:"StyledRadioWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"]={docgenInfo:StyledRadioWrapper.__docgenInfo,name:"StyledRadioWrapper",path:"src/components/ui/Radio/Styled.tsx#StyledRadioWrapper"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadio.displayName="StyledRadio",StyledRadio.__docgenInfo={description:"",displayName:"StyledRadio",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadio"]={docgenInfo:StyledRadio.__docgenInfo,name:"StyledRadio",path:"src/components/ui/Radio/Styled.tsx#StyledRadio"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioLabel.displayName="StyledRadioLabel",StyledRadioLabel.__docgenInfo={description:"",displayName:"StyledRadioLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioLabel"]={docgenInfo:StyledRadioLabel.__docgenInfo,name:"StyledRadioLabel",path:"src/components/ui/Radio/Styled.tsx#StyledRadioLabel"})}catch(__react_docgen_typescript_loader_error){}try{StyledRadioIcon.displayName="StyledRadioIcon",StyledRadioIcon.__docgenInfo={description:"",displayName:"StyledRadioIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/Styled.tsx#StyledRadioIcon"]={docgenInfo:StyledRadioIcon.__docgenInfo,name:"StyledRadioIcon",path:"src/components/ui/Radio/Styled.tsx#StyledRadioIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=props=>{const{value,checked,label,icon,onChange,testId,...rest}=props,radioNode=(0,react.useRef)(null),labelId=(0,useUniqueId.Z)(),handleChange=()=>{radioNode.current?.click(),radioNode.current?.focus()};return(0,jsx_runtime.jsxs)(StyledRadioWrapper,{className:"ch-radio-wrapper","data-testid":testId,children:[(0,jsx_runtime.jsx)(HiddenRadio,{checked,id:labelId,onChange,type:"radio",value,ref:radioNode,"data-testid":"hidden-radio","aria-label":label,...rest}),icon?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledRadioIcon,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio-icon",children:(0,jsx_runtime.jsx)("span",{className:"ch-icon",children:icon})})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledRadioLabel,{checked,className:"ch-radio",onClick:handleChange,"data-testid":"styled-radio"}),(0,jsx_runtime.jsx)(Label.Z,{htmlFor:labelId,className:"ch-radio-label",children:label})]})]})};Radio.displayName="Radio",Radio.displayName="Radio";const ui_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"Whether or not the radio is selected.",name:"checked",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"The icon for the radio.",name:"icon",required:!1,type:{name:"Element | undefined"}},label:{defaultValue:null,description:"The label of the radio.",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"The value of the radio.",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The callback fired when the state is changed.",name:"onChange",required:!0,type:{name:"(event: any) => void"}},radioProps:{defaultValue:null,description:"Other props of the radio.",name:"radioProps",required:!1,type:{name:"InputHTMLAttributes<HTMLButtonElement> | undefined"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/ui/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Add/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Add=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.Z,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M14.5 5C16.981 5 19 7.019 19 9.5v5c0 2.481-2.019 4.5-4.5 4.5h-5C7.019 19 5 16.981 5 14.5v-5C5 7.019 7.019 5 9.5 5zm0 1h-5C7.57 6 6 7.57 6 9.5v5C6 16.43 7.57 18 9.5 18h5c1.93 0 3.5-1.57 3.5-3.5v-5C18 7.57 16.43 6 14.5 6zM12 8.467c.276 0 .5.223.5.5V11.5h2.533c.276 0 .5.224.5.5s-.224.5-.5.5H12.5v2.533c0 .277-.224.5-.5.5-.277 0-.5-.223-.5-.5V12.5H8.967c-.277 0-.5-.224-.5-.5s.223-.5.5-.5H11.5V8.967c0-.277.223-.5.5-.5z"})});Add.displayName="Add",Add.displayName="Add";const __WEBPACK_DEFAULT_EXPORT__=Add;try{Add.displayName="Add",Add.__docgenInfo={description:"",displayName:"Add",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Add/index.tsx#Add"]={docgenInfo:Add.__docgenInfo,name:"Add",path:"src/components/ui/icons/Add/index.tsx#Add"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useUniqueId/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");const __WEBPACK_DEFAULT_EXPORT__=function useUniqueId(){const[uniqueId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>(0,uuid__WEBPACK_IMPORTED_MODULE_1__.Z)()));return uniqueId}},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);
//# sourceMappingURL=components-ui-Radio-Radio-stories.fc296b31.iframe.bundle.js.map