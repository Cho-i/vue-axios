(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1efff88"],{"37d3":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"post"},[o("h2",[e._v("POST")]),o("div",{staticClass:"form-box"},[o("div",{staticClass:"form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email을 입력해주세요.",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"form-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"비밀번호를 입력해주세요.",id:"pw"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("div",{staticClass:"form-item"},[o("button",{attrs:{type:"submit"},on:{click:e.onLogin}},[e._v("login")])])]),o("br"),o("br"),e._m(0)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("email: eve.holt@reqres.in"),o("br"),e._v("password: cityslicka")])}],i=o("bc3a"),n=o.n(i),r={name:"Post",data:function(){return{email:"",password:""}},methods:{onLogin:function(){var e="https://reqres.in/api/login",t={email:this.email,password:this.password};n.a.post(e,t).then((function(e){console.log(e),console.log("성공")})).catch((function(e){throw console.log(e),console.log("실패"),new Error(e)}))}}},l=r,c=(o("b3ea"),o("2877")),d=Object(c["a"])(l,s,a,!1,null,"4be6f10e",null);t["default"]=d.exports},b3ea:function(e,t,o){"use strict";o("db5d")},db5d:function(e,t,o){}}]);
//# sourceMappingURL=chunk-c1efff88.24c18510.js.map