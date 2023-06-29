/*! For license information please see providers-BackgroundReplacementProvider-docs-BackgroundReplacementProvider-mdx.fed610cd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[4441],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/providers/BackgroundReplacementProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>BackgroundReplacementProvider});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_utils_device_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/device-utils.ts"),_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/use-memo-compare.ts"),_LoggerProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/providers/LoggerProvider/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BackgroundReplacementProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),BackgroundReplacementProvider=({spec,options,children})=>{const logger=(0,_LoggerProvider__WEBPACK_IMPORTED_MODULE_4__.wL)(),[isBackgroundReplacementSupported,setIsBackgroundReplacementSupported]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),[backgroundReplacementProcessor,setBackgroundReplacementProcessor]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),replacementSpec=(0,_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_3__.Z)(spec,((prev,next)=>!!Object.is(prev,next))),replacementOptions=(0,_utils_use_memo_compare__WEBPACK_IMPORTED_MODULE_3__.Z)(options,((prev,next)=>!(!(0,_utils_device_utils__WEBPACK_IMPORTED_MODULE_2__.V5)(prev,next)&&!(0,_utils_device_utils__WEBPACK_IMPORTED_MODULE_2__.N0)(prev,next))||prev?.imageBlob?.size!==next?.imageBlob?.size&&prev?.filterCPUUtilization!==next?.filterCPUUtilization&&prev?.logger===next?.logger&&prev?.reportingPeriodMillis===next?.reportingPeriodMillis));async function initializeBackgroundReplacement(){logger.info(`Initializing background replacement processor with, ${JSON.stringify(spec)}, ${JSON.stringify(options)}`);try{const createdProcessor=await amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.BackgroundReplacementVideoFrameProcessor.create({...spec},{...options});return createdProcessor instanceof amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NoOpVideoFrameProcessor?(logger.warn("Initialized NoOpVideoFrameProcessor"),setBackgroundReplacementProcessor(void 0),void setIsBackgroundReplacementSupported(!1)):(logger.info(`Initialized background replacement processor: ${JSON.stringify(createdProcessor)}`),setBackgroundReplacementProcessor(createdProcessor),setIsBackgroundReplacementSupported(!0),createdProcessor)}catch(error){return logger.error(`Error creating a background replacement video frame processor device. ${error}`),setBackgroundReplacementProcessor(void 0),void setIsBackgroundReplacementSupported(!1)}}(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>(initializeBackgroundReplacement(),()=>{logger.info("Specs or options were changed. Destroying and re-initializing background replacement processor."),backgroundReplacementProcessor?.destroy()})),[replacementSpec,replacementOptions]);const value={createBackgroundReplacementDevice:async selectedDevice=>{logger.info(`Calling createBackgroundReplacementDevice with device: ${JSON.stringify(selectedDevice)}`);const currentProcessor=await initializeBackgroundReplacement();try{const logger=options?.logger||new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("BackgroundReplacementProvider",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO);if(currentProcessor){return new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DefaultVideoTransformDevice(logger,selectedDevice,[currentProcessor])}throw new Error("Processor has not been created. Background Replacement is not supported.")}catch(error){throw new Error(`Failed to create a DefaultVideoTransformDevice: ${error}`)}},isBackgroundReplacementSupported,backgroundReplacementProcessor};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BackgroundReplacementProviderContext.Provider,{value,children})};BackgroundReplacementProvider.displayName="BackgroundReplacementProvider";try{BackgroundReplacementProvider.displayName="BackgroundReplacementProvider",BackgroundReplacementProvider.__docgenInfo={description:"",displayName:"BackgroundReplacementProvider",props:{spec:{defaultValue:null,description:"The spec defines the assets that will be used for adding background replacement to a frame. For more information, refer to\n[Amazon Chime SDK for JavaScript Background Filter Guide](https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#adding-a-background-filter-to-your-application).",name:"spec",required:!1,type:{name:"BackgroundFilterSpec | undefined"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"BackgroundReplacementOptions | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/BackgroundReplacementProvider/index.tsx#BackgroundReplacementProvider"]={docgenInfo:BackgroundReplacementProvider.__docgenInfo,name:"BackgroundReplacementProvider",path:"src/providers/BackgroundReplacementProvider/index.tsx#BackgroundReplacementProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/providers/LoggerProvider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ik:()=>LoggerProvider,wL:()=>useLogger});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const consoleLogger=new amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger("ChimeSDKReactComponent",amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel.INFO),LoggerContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(consoleLogger),LoggerProvider=({logger,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LoggerContext.Provider,{value:logger,children});LoggerProvider.displayName="LoggerProvider";const useLogger=()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoggerContext);try{LoggerProvider.displayName="LoggerProvider",LoggerProvider.__docgenInfo={description:"",displayName:"LoggerProvider",props:{logger:{defaultValue:null,description:"",name:"logger",required:!0,type:{name:"Logger"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/LoggerProvider/index.tsx#LoggerProvider"]={docgenInfo:LoggerProvider.__docgenInfo,name:"LoggerProvider",path:"src/providers/LoggerProvider/index.tsx#LoggerProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/device-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EB:()=>isOptionActive,N0:()=>isPrevNextUndefined,V5:()=>isPrevNextEmpty,Zw:()=>getDeviceId});var amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/amazon-chime-sdk-js/build/index.js");const isOptionActive=async(selectedDevice,currentDeviceId)=>await getDeviceId(selectedDevice)===currentDeviceId,getDeviceId=async device=>{if(!device)return"";let intrinsicDevice;intrinsicDevice=(0,amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.isAudioTransformDevice)(device)||(0,amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.isVideoTransformDevice)(device)?await device.intrinsicDevice():device;return amazon_chime_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DefaultDeviceController.getIntrinsicDeviceId(intrinsicDevice)};function isPrevNextUndefined(prev,next){return void 0===prev&&void 0===next}function isPrevNextEmpty(prev,next){const isPrevEmpty=prev&&0===Object.keys(prev).length,isNextEmpty=next&&0===Object.keys(next).length;return isPrevEmpty&&isNextEmpty}},"./src/utils/use-memo-compare.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useMemoCompare(next,compare){const previousRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),previous=previousRef.current,isEqual=compare(previous,next);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{isEqual||(previousRef.current=next)})),isEqual?previous:next}},"./src/providers/BackgroundReplacementProvider/docs/BackgroundReplacementProvider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/BackgroundReplacementProvider/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",h3:"h3",ul:"ul",li:"li"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"SDK Providers/BackgroundReplacementProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"backgroundreplacementprovider",children:"BackgroundReplacementProvider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})," provides a function transforming a normal video device to a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"}),", and also whether or not the background replacement feature is supported.\nBackground replacement related logs can be found in the browser developer tools when the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})," is used within the app component tree."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This provider is independent from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"}),". You can put ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})," wherever you want in the component tree so long as any component that relies on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})," is nested within ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"}),". The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})," loads the required worker assets\nwhen mounted, which may impact performance."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"state",children:"State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"{\n  // Whether background replacement is supported. The default value is undefined, then changes to true or false.\n  isBackgroundReplacementSupported: boolean | undefined;\n\n  // A function to transform a video input device to a `DefaultVideoTransformDevice`.\n  createBackgroundReplacementDevice: (device: Device) => Promise<DefaultVideoTransformDevice>;\n}\n\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:['You should see either "processor is supported" or "processor is not supported" in your browser developer tools based on whether or not\nbackground replacement is supported on your device and browser version. For more information on if background replacement is supported, refer\nto ',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#integrating-background-filters-into-your-amazon-chime-sdk-for-javascript-application",target:"_blank",rel:"nofollow noopener noreferrer",children:"Integrating background filters into your Amazon Chime SDK for JavaScript application"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can check whether or not the processor has been loaded correctly by checking the state of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isBackgroundReplacementSupported"}),".\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundReplacementDevice"})," may throw an error if the processor was not loaded. You should check whether or not the processor has been loaded correctly by checking the state of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isBackgroundReplacementSupported"}),"\nbefore calling ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundReplacementDevice"}),". Calling ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundReplacementDevice"})," will create a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"}),". Users would also need to call ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice.stop"})," when constructing a new\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"})," with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundReplacementDevice"})," in order to destroy the processors running previously. Once you call ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice.stop"}),", you should discard the old ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"}),".\nFor more information, refer to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/10_Video_Processor.md#stopping-videotransformdevice",target:"_blank",rel:"nofollow noopener noreferrer",children:"Video Processing APIs"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can access the current ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"backgroundReplacementProcessor"})," applied to the video device that is generated when you call ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundBlurDevice"}),". You can apply observer notifications to the processor. Refer to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/aws/amazon-chime-sdk-js/blob/main/guides/15_Background_Filter_Video_Processor.md#observer-notifications",target:"_blank",rel:"nofollow noopener noreferrer",children:"the guide for adding observer notifications to a BackgroundReplacementProcessor"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["One thing to note is that calling ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"meetingManager.startVideoInputDevice()"})," with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Device"})," type while the current selected video input device is a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VideoTransformDevice"}),"\nwill automatically stop any processors running within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"})," that was previously running. Lastly, make sure to construct a new ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DefaultVideoTransformDevice"})," using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createBackgroundReplacementDevice"}),".\nif the Props of the provider were changed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can access the state by using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/sdk-hooks-useBackgroundReplacement--page",children:"useBackgroundReplacement"})," hook."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:___WEBPACK_IMPORTED_MODULE_2__.q}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { BackgroundReplacementProvider } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  isVideoTranformDevice,\n  VideoTransformDevice,\n} from 'amazon-chime-sdk-js';\nimport {\n  MeetingProvider,\n  BackgroundReplacementProvider,\n  useMeetingManager,\n  useBackgroundReplacement,\n  useVideoInputs,\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => (\n  <BackgroundReplacementProvider>\n    <MeetingProvider>\n      <MyChild />\n    </MeetingProvider>\n  </BackgroundReplacementProvider>\n);\n\nconst MyChild = () => {\n  const meetingManager = useMeetingManager();\n  const { selectedDevice } = useVideoInputs();\n  const [isVideoTransformChecked, setIsVideoTransformCheckOn] = useState(false);\n  const {\n    isBackgroundReplacementSupported,\n    createBackgroundReplacementDevice,\n  } = useBackgroundReplacement();\n\n  useEffect(() => {\n    async function toggleBackgroundReplacement() {\n      try {\n        let current = selectedDevice;\n        if (isVideoTransformChecked) {\n          current = await createBackgroundReplacementDevice(selectedDevice);\n        } else {\n          if (isVideoTransformDevice(selectedDevice)) {\n            let intrinsicDevice = await selectedDevice.intrinsicDevice();\n            selectedDevice.stop();\n            current = intrinsicDevice;\n          }\n        }\n        await meetingManager.startVideoInputDevice(current);\n      } catch (error) {\n        // Handle device selection failure here\n        console.error('Failed to toggle Background Replacement');\n      }\n    }\n\n    toggleBackgroundReplacement();\n  }, [isVideoTransformChecked]);\n\n  const onClick = () => {\n    setisVideoTransformCheckOn((current) => !current);\n  };\n\n  return (\n    <div>\n      {isBackgroundReplacementSupported && (\n        <button onClick={onClick}>\n          {isVideoTranformDevice(selectedDevice)\n            ? 'Background Replacement Enabled'\n            : 'Enable Background Replacement'}\n        </button>\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"MeetingProvider"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BackgroundReplacementProvider"})}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);