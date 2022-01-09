"use strict";(self.webpackChunktil_remaster=self.webpackChunktil_remaster||[]).push([[3611],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4307:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},l="Decorators",s={unversionedId:"Basics/Decorators",id:"Basics/Decorators",title:"Decorators",description:"These are functional equivalents to mixins. They are used to run some addititonal logic on top of the function they are binded/called upon.",source:"@site/docs-python/Basics/Decorators.md",sourceDirName:"Basics",slug:"/Basics/Decorators",permalink:"/docs-python/Basics/Decorators",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cheatsheet for basic python",permalink:"/docs-python/Basics/Cheatsheet"},next:{title:"Environment",permalink:"/docs-python/Basics/Environment"}},u=[{value:"Model to create a new decorator",id:"model-to-create-a-new-decorator",children:[],level:2},{value:"References",id:"references",children:[{value:"Retry Decorator",id:"retry-decorator",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,"These are functional equivalents to mixins. They are used to run some addititonal logic on top of the function they are binded/called upon."),(0,a.kt)("p",null,"They essentially replicate function currying but in a pythonic fashion."),(0,a.kt)("h2",{id:"model-to-create-a-new-decorator"},"Model to create a new decorator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\n## Without Arguments\ndef decorator(func):\n    def inner():\n        print("I got decorated")\n        func()\n    return inner\n\n## With Arguments\ndef decorator_factory(attempts, fail_silently):\n    def decorator(func):\n\n        def wrapper(*args, **kwargs):\n            # pre-logic\n            func(*args, **kwargs)\n            # post-logic\n        \n        return wrapper\n    return decorator\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("h3",{id:"retry-decorator"},"Retry Decorator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def retry(attempts, fail_silently):\n    # Call with @retry(attempts=int, fail_silenty=bool)\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            current_attempt = 0\n            while current_attempt < attempts:\n                try:\n                    print('attmpt no',current_attempt)\n                    func(*args, **kwargs)\n                    break\n                except Exception as e:\n                    current_attempt +=1\n                    if current_attempt == attempts:\n                        err_msg = traceback.format_exc()\n                        if not fail_silently:\n                            raise e\n        return wrapper\n    return decorator\n")))}f.isMDXComponent=!0}}]);