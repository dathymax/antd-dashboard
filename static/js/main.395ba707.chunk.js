(this["webpackJsonpantdesign-dashboard"]=this["webpackJsonpantdesign-dashboard"]||[]).push([[0],{228:function(e,a,t){},229:function(e,a,t){},355:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(38),i=t.n(s),l=(t(228),t(7)),r=(t(229),t(358)),j=t(41),o=t(365),d=t(372),b=t(373),h=t(101),m=t(66),x=t(364),O=t(357),u=t(152),p=t(366),v=t(5),g=["#7c0340","#f44336","#e91e63","#9c27b0","#ff8a80","#673ab7","#3f51b5","#2196f3","#009688","#00bcd4","#B70000","#4caf50","#8bc34a","#cddc39","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b","#424242","#0091ea","#4527a0","#440000"],y=function(e){!function(e){document.documentElement.style.setProperty("--primary-color",e),localStorage.setItem("primary-color",JSON.stringify(e))}(e.target.dataset.theme)},f=Object(v.jsx)(m.a,{className:"menu__color",children:g.map((function(e){return Object(v.jsx)("button",{"data-theme":e,className:"color",style:{backgroundColor:e,margin:"10px",display:"inline-block"},onClick:y})}))}),N=Object(v.jsxs)(m.a,{style:{padding:"30px 0",border:"1px solid #edf2f9",borderRadius:"5px"},onClick:function(e){e.e.preventDefault()},children:[Object(v.jsx)("div",{className:"avatar",children:Object(v.jsx)(x.a,{size:50,children:"D"})}),Object(v.jsxs)("div",{className:"avatar",children:[Object(v.jsx)("div",{children:"Do Tuan Dat"}),Object(v.jsx)("div",{children:"datdt@dogoo.vn"})]}),Object(v.jsx)(O.a,{}),Object(v.jsxs)(m.a.Item,{children:[Object(v.jsx)(p.a,{}),Object(v.jsx)("span",{className:"action__dropdown",children:"Doi mat khau"})]}),Object(v.jsx)(O.a,{}),Object(v.jsx)(u.a,{overlay:f,children:Object(v.jsxs)(m.a.Item,{onClick:function(e){return e.preventDefault()},children:[Object(v.jsx)("div",{className:"color",style:{backgroundColor:"var(--primary-color)"}}),Object(v.jsx)("span",{className:"action__dropdown",children:"Change theme"})]})}),Object(v.jsx)(O.a,{}),Object(v.jsx)("div",{className:"logout",children:Object(v.jsx)(j.a,{children:"Dang xuat"})}),Object(v.jsx)(O.a,{})]}),I=function(){return Object(v.jsxs)("div",{className:"header",style:{backgroundColor:"var(--primary-color)",padding:"0 25px"},children:[Object(v.jsx)("img",{src:"./logo/logo.png",alt:"",className:"header__logo"}),Object(v.jsxs)("div",{className:"header__action",children:[Object(v.jsx)("span",{className:"header__action--hello",children:"Xin chao"}),Object(v.jsx)(u.a,{placement:"bottomRight",arrow:!0,className:"dropdown",overlay:N,trigger:["click"],children:Object(v.jsx)(j.a,{type:"text",className:"header__action--name",children:"Do Tuan Dat"})})]})]})},k=t(367),_=t(208),C=t.n(_),P=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"menu",children:Object(v.jsx)(m.a,{mode:"inline",children:Object(v.jsxs)(C.a,{icon:Object(v.jsx)(k.a,{}),title:Object(v.jsx)(h.b,{exact:!0,to:"/",children:"Quan ly tai khoan"}),children:[Object(v.jsx)(m.a.Item,{icon:Object(v.jsx)(k.a,{}),children:"Import danh sach tai khoan"},"item1"),Object(v.jsx)(m.a.Item,{icon:Object(v.jsx)(k.a,{}),children:"Export danh sach tai khoan"},"item2"),Object(v.jsx)(h.b,{exact:!0,to:"/create-employee",children:Object(v.jsx)(m.a.Item,{icon:Object(v.jsx)(k.a,{}),children:"Tao tai khoan"},"item3")})]})})})})},T=t(1),D=t(123),w=t(361),E=t(362),S=t(122),q=D.a.Option,F={labelCol:{xs:{span:12},sm:{span:3}},wrapperCol:{xs:{span:16},sm:{span:16}}},H=function(){var e=w.a.useForm(),a=Object(l.a)(e,1)[0],t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0];n[1],s.map((function(e){return{label:e,value:e}}));return Object(v.jsx)("div",{className:"create-employee",children:Object(v.jsxs)(w.a,Object(T.a)(Object(T.a)({},F),{},{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},scrollToFirstError:!0,children:[Object(v.jsx)(w.a.Item,{name:"name",label:"H\u1ecd v\xe0 t\xean",rules:[{required:!0,message:"Please input your Name!"}],children:Object(v.jsx)(E.a,{placeholder:"Nh\u1eadp H\u1ecd T\xean"})}),Object(v.jsx)(w.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(v.jsx)(E.a,{placeholder:"Nh\u1eadp Email"})}),Object(v.jsx)(w.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(v.jsx)(E.a,{placeholder:"Nh\u1eadp Username"})}),Object(v.jsx)(w.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(v.jsx)(E.a.Password,{placeholder:"Nh\u1eadp Password"})}),Object(v.jsx)(w.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(v.jsx)(E.a,{placeholder:"Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),Object(v.jsx)(w.a.Item,{name:"department",label:"Ph\xf2ng ban",rules:[{required:!0,message:"Please select department!"}],children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)(q,{value:"business",children:"Kinh doanh"}),Object(v.jsx)(q,{value:"develop",children:"Ph\xe1t tri\u1ec3n"})]})}),Object(v.jsx)(w.a.Item,{name:"role",label:"Ch\u1ee9c v\u1ee5",rules:[{required:!0,message:"Please select role!"}],children:Object(v.jsxs)(D.a,{children:[Object(v.jsx)(q,{value:"admin",children:"Admin"}),Object(v.jsx)(q,{value:"employee",children:"Nh\xe2n vi\xean"})]})}),Object(v.jsx)(w.a.Item,{name:"choose-role",label:"Ph\xe2n quy\u1ec1n",children:Object(v.jsxs)("div",{className:"choose-role",children:[Object(v.jsx)("div",{className:"space"}),Object(v.jsx)(S.a,{children:"Ch\u1ecdn quy\u1ec1n"}),Object(v.jsx)(S.a,{children:"Ch\u1ecdn quy\u1ec1n"}),Object(v.jsx)(S.a,{children:"Ch\u1ecdn quy\u1ec1n"}),Object(v.jsx)(S.a,{children:"Ch\u1ecdn quy\u1ec1n"})]})}),Object(v.jsx)(w.a.Item,{children:Object(v.jsx)("div",{className:"btn-submit",children:Object(v.jsx)(j.a,{type:"primary",htmlType:"submit",children:"T\u1ea1o m\u1edbi"})})})]}))})},R=t(369),A=t(370),M=t(371),B=t(158),J=t(103),U=t(363),L=t(359),Q=t(216),z=t(126),K=t.n(z),X=[{title:"ID",dataIndex:"id"},{title:"H\u1ecd v\xe0 t\xean",dataIndex:"name"},{title:"",dataIndex:"action"},{title:"Email",dataIndex:"email"},{title:"Phone",dataIndex:"phone"},{title:"Quy\u1ec1n",dataIndex:"role"},{title:"Tr\u1ea1ng th\xe1i",dataIndex:"state"}],V=[{key:"1",id:"#1",name:"Do Tuan Dat",email:"dathymax@gmail.com",phone:"0984193954",role:"Nh\xe2n vi\xean",state:"Active"},{key:"2",id:"#2",name:"Do Tuan Dat",email:"dathymax@gmail.com",phone:"0984193954",role:"Nh\xe2n vi\xean",state:"Active"},{key:"3",id:"#3",name:"Do Tuan Dat",email:"dathymax@gmail.com",phone:"0984193954",role:"Nh\xe2n vi\xean",state:"Active"},{key:"4",id:"#4",name:"Do Tuan Dat",email:"dathymax@gmail.com",phone:"0984193954",role:"Nh\xe2n vi\xean",state:"Active"}],G={onChange:function(e,a){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",a)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};K.a,K.a.Item,K.a.Item,K.a.Item;var W=V.map((function(e,a){return{key:e.id,id:e.id,name:e.name,action:Object(v.jsx)("span",{className:"action-3dot",onClick:function(){return alert("Hello "+e.id)},children:" ..."}),email:e.email,phone:e.phone,role:e.role,state:e.state}})),Y=function(){var e=Object(c.useState)("checkbox"),a=Object(l.a)(e,2),t=a[0];a[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(L.a,{rowSelection:Object(T.a)({type:t},G),columns:X,dataSource:W,pagination:!1}),Object(v.jsx)(Q.a,{className:"pagination",total:V.length,showTotal:function(e){return"Total ".concat(e," items")},defaultPageSize:5,defaultCurrent:1})]})},Z=t(368),$=t(360),ee=(t(174),t(107).c.Option,function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)($.a.Dragger,{name:"files",action:"/upload.do",children:[Object(v.jsx)("p",{className:"ant-upload-drag-icon",children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)("p",{className:"ant-upload-text",children:"Drop to upload file"}),Object(v.jsx)("p",{className:"ant-upload-hint",children:"or"})]}),Object(v.jsx)($.a,{name:"logo",action:"/upload.do",listType:"picture",children:Object(v.jsx)(j.a,{children:"Browser file"})})]})}),ae=function(){var e=Object(c.useState)(!1),a=Object(l.a)(e,2),t=a[0],n=a[1];return Object(v.jsxs)("div",{className:"employee-list",children:[Object(v.jsxs)("div",{className:"action",children:[Object(v.jsx)(j.a,{type:"primary",children:Object(v.jsxs)("div",{className:"action__item",children:[Object(v.jsx)(R.a,{}),Object(v.jsx)("span",{children:"TH\xcaM M\u1edaI"})]})}),Object(v.jsx)(j.a,{type:"primary",onClick:function(){n(!0)},children:Object(v.jsxs)("div",{className:"action__item",children:[Object(v.jsx)(A.a,{}),Object(v.jsx)("span",{children:"IMPORT"})]})}),Object(v.jsx)(j.a,{type:"primary",children:Object(v.jsxs)("div",{className:"action__item",children:[Object(v.jsx)(M.a,{}),Object(v.jsx)("span",{children:"EXPORT"})]})}),Object(v.jsx)(U.a,{title:" ",visible:t,onOk:function(){n(!1)},onCancel:function(){n(!1)},children:Object(v.jsx)(ee,{})})]}),Object(v.jsxs)("div",{className:"categories",children:[Object(v.jsxs)("div",{className:"seach",children:[Object(v.jsx)(B.a,{}),Object(v.jsx)(E.a,{placeholder:"T\xecm ki\u1ebfm theo h\u1ecd t\xean ho\u1eb7c Email"})]}),Object(v.jsxs)("div",{className:"categories__item",children:[Object(v.jsx)("span",{children:"H\u1ecc V\xc0 T\xcaN"}),Object(v.jsx)(J.a,{})]}),Object(v.jsxs)("div",{className:"categories__item",children:[Object(v.jsx)("span",{children:"EMAIL"}),Object(v.jsx)(J.a,{})]}),Object(v.jsxs)("div",{className:"categories__item",children:[Object(v.jsx)("span",{children:"PHONE"}),Object(v.jsx)(J.a,{})]})]}),Object(v.jsx)(Y,{})]})},te=t(30),ce=function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(te.c,{children:[Object(v.jsx)(te.a,{exact:!0,path:"/",children:Object(v.jsx)(ae,{})}),Object(v.jsx)(te.a,{path:"/create-employee",children:Object(v.jsx)(H,{})})]})})},ne=r.a.Header,se=r.a.Sider,ie=(r.a.Footer,r.a.Content),le=function(){var e=Object(c.useState)(),a=Object(l.a)(e,2),t=a[0],n=a[1];Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("primary-color");if(e){var a=JSON.parse(e);document.documentElement.style.setProperty("--primary-color",a)}}()}),[]);return Object(v.jsx)(h.a,{children:Object(v.jsxs)(r.a,{children:[Object(v.jsx)(ne,{children:Object(v.jsx)(I,{})}),Object(v.jsxs)(r.a,{children:[Object(v.jsx)("div",{className:"sider",children:Object(v.jsxs)(se,{trigger:null,collapsible:!0,collapsed:t,children:[Object(v.jsx)("div",{className:"btn",children:Object(v.jsx)(j.a,{className:"btn",type:"primary",onClick:function(){n(!t)},children:t?Object(v.jsx)(d.a,{}):Object(v.jsx)(b.a,{})})}),Object(v.jsx)(P,{})]})}),Object(v.jsx)(r.a,{children:Object(v.jsxs)(ie,{children:[Object(v.jsx)(o.a,{children:Object(v.jsx)(o.a.Item,{children:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"})}),Object(v.jsx)(ce,{})]})})]})]})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,374)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(le,{})}),document.getElementById("root")),re()}},[[355,1,2]]]);
//# sourceMappingURL=main.395ba707.chunk.js.map