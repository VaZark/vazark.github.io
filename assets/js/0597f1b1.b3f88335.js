"use strict";(self.webpackChunktil_remaster=self.webpackChunktil_remaster||[]).push([[1124],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Django Model Instance - Validation and Overriding",d={unversionedId:"django/basics/Django Model Instance - Validation and Overriding",id:"django/basics/Django Model Instance - Validation and Overriding",title:"Django Model Instance - Validation and Overriding",description:"Validation",source:"@site/docs-python/django/basics/Django Model Instance - Validation and Overriding.md",sourceDirName:"django/basics",slug:"/django/basics/Django Model Instance - Validation and Overriding",permalink:"/docs-python/django/basics/Django Model Instance - Validation and Overriding",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DRF POST : Accessing data and files",permalink:"/docs-python/django/basics/DRF POST : Accessing data and files"},next:{title:"Efficient filtering over Querysets",permalink:"/docs-python/django/db/DB Expressions"}},p=[{value:"Validation",id:"validation",children:[],level:2},{value:"Overriding methods",id:"overriding-methods",children:[{value:"save",id:"save",children:[],level:3}],level:2},{value:"Signals",id:"signals",children:[],level:2},{value:"Managing instances",id:"managing-instances",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"django-model-instance---validation-and-overriding"},"Django Model Instance - Validation and Overriding"),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model.full_clean()"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model.clean_fields()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model.clean()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model.validate_unique()")," ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clean_fields()")," validates individual fields and ",(0,r.kt)("strong",{parentName:"p"},"validate_unique()")," validates field level and Meta's ",(0,r.kt)("em",{parentName:"p"},"unique_together")," uniqueness constraints. The ",(0,r.kt)("strong",{parentName:"p"},"clean_fields()")," and ",(0,r.kt)("strong",{parentName:"p"},"validate_unique()")," have a parameter ",(0,r.kt)("em",{parentName:"p"},"exclude")," that allows us to skip validation for the mentioned fields."),(0,r.kt)("p",null,"Meanwhile, ",(0,r.kt)("strong",{parentName:"p"},"clean()")," is used to define custom model validation, and to modify attributes on your model if desired (eg. define values for certain fields)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"full_clean()")," performs complete validation by invoking the above functions in the order mentioned."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ValidationError")," will be raised if any default validation fails."),(0,r.kt)("h2",{id:"overriding-methods"},"Overriding methods"),(0,r.kt)("h3",{id:"save"},"save"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"save()")," is used by both the create and update functionalities by the Model when updating the object. This can be used when custom validation or modification needs to be used. We can differentiate within ",(0,r.kt)("em",{parentName:"p"},"create")," and ",(0,r.kt)("em",{parentName:"p"},"update")," requests by checking if the model has a primary key. However, this can't leveraged when the primary key is user-defined and autogenerated by a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"UUIDField()"))),(0,r.kt)("p",null,"When directly calling the ",(0,r.kt)("strong",{parentName:"p"},"create")," function from the model's Manager, the call bypasses the custom implementation. Make sure to call ",(0,r.kt)("strong",{parentName:"p"},"save()")," by creating the instance. An alternative can be to moved most of the logic into ",(0,r.kt)("strong",{parentName:"p"},"clean()")),(0,r.kt)("h2",{id:"signals"},"Signals"),(0,r.kt)("p",null,"Occasionally we need to perform some action that is tied to the changes in the DB but not necessarily associated with the DB/Model itself. In such cases, we can django's signal systems. The most common signals are,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"pre-save")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"post-save")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"pre-delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"post-delete"))),(0,r.kt)("h2",{id:"managing-instances"},"Managing instances"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Comparison")," : To compare two model instances, use the standard Python comparison operator, ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),". Behind the scenes, that compares the primary key values of two models.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Copying")," : It is possible to easily create new instance with all fields\u2019 values copied. Set ",(0,r.kt)("em",{parentName:"p"},"pk")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," of an existing instance. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Updating")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"update()")," method sets a field to a particular value for all the objects in a QuerySet. However, it doesn\u2019t run ",(0,r.kt)("inlineCode",{parentName:"p"},"save()")," or emit the ",(0,r.kt)("inlineCode",{parentName:"p"},"pre_save")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"post_save")," signals"))))}u.isMDXComponent=!0}}]);