(this["webpackJsonpmy-homeworks"]=this["webpackJsonpmy-homeworks"]||[]).push([[0],[,,,function(e,t,n){e.exports={main:"Message_main__2gOl_",img:"Message_img__2hw3a",main2:"Message_main2__2ahq2",d33:"Message_d33__ANkhj",name:"Message_name__Tzmp0",message:"Message_message__8WR15",time:"Message_time__HOFTG"}},,,,function(e,t,n){e.exports={error:"Greeting_error__1uvQ8",errorMessage:"Greeting_errorMessage__zEoF5",wrapper:"Greeting_wrapper__3Dbfg",button7:"Greeting_button7__1oaxt",animated:"Greeting_animated__3P0wf"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),s=n.n(c),o=(n(21),n(15)),i=n.n(o),l=n(3),j=n.n(l),u=n(0),d=function(e){var t=e.avatar,n=e.name,a=e.message,r=e.time;return Object(u.jsxs)("div",{className:j.a.main,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:j.a.img,src:t,alt:"Not found"})}),Object(u.jsxs)("div",{className:"".concat(j.a.main2," ").concat(j.a.d33),children:[Object(u.jsx)("div",{className:j.a.name,children:n}),Object(u.jsx)("div",{className:j.a.message,children:a}),Object(u.jsx)("div",{className:j.a.time,children:r})]})]})},b="https://admin-salon.nethouse.ru/static/img/0000/0007/0436/70436824.9dfdgyefpu.W665.jpg",h="Administrator",m="Hello, how can I help you?",x="22:00";var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(d,{avatar:b,name:h,message:m,time:x}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=n(2);var p=function(e){return Object(u.jsxs)("div",{children:["".concat(e.affair.name," [").concat(e.affair.priority,"]"),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var f=function(e){var t=e.data.map((function(t){return Object(u.jsx)(p,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var v=function(){var e=Object(a.useState)(g),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(_.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(u.jsxs)("div",{style:{backgroundColor:"#E6E6FA",fontWeight:800,color:"#4B0082",textDecoration:"none"},children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(f,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},k=n(16),C=n(7),N=n.n(C),w=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?N.a.error:"";return Object(u.jsxs)("div",{className:N.a.wrapper,children:[Object(u.jsx)("input",{value:t,onChange:n,className:s}),r&&Object(u.jsx)("span",{className:N.a.errorMessage,children:r}),Object(u.jsx)("button",{onClick:a,className:N.a.button7,children:"Say hello"}),Object(u.jsx)("span",{children:c})]})},y=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(_.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(""),l=Object(_.a)(i,2),j=l[0],d=l[1],b=t.length;return Object(u.jsx)(w,{name:s,setNameCallback:function(e){o(e.target.value),d("")},addUser:function(){s.trim().length>0?(alert("Hello ".concat(s,"!")),n(s),o("")):(d("The string must contain the name"),o(""))},error:j,totalUsers:b})},S=n(25);var A=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{style:{backgroundColor:"#E6E6FA",fontWeight:800,color:"#4B0082",textDecoration:"none"},children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(y,{users:n,addUserCallback:function(e){r([].concat(Object(k.a)(n),[{_id:Object(S.a)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=n(4),M=n(5),E=n(9),T=n.n(E),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(T.a.error," ").concat(o||""),j="".concat(c," ? ").concat(T.a.errorInput," : ").concat(s||T.a.superInput);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(u.jsx)("span",{className:l,children:c})]})},W=n(11),H=n.n(W),B=n(12),G=n.n(B),U=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),r="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(u.jsx)("button",Object(I.a)({className:r},a))},J=n(13),K=n.n(J),P=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),a=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),r="".concat(K.a.checkbox," ").concat(t||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){},className:r},a)),n&&Object(u.jsx)("span",{className:K.a.spanClassName,children:n})]})};var X=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(_.a)(o,2),l=i[0],j=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:H.a.column,children:[Object(u.jsx)(F,{value:n,onChangeText:r,onEnter:s,error:c}),Object(u.jsx)(F,{className:H.a.blue}),Object(u.jsx)(U,{children:"default"}),Object(u.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(U,{disabled:!0,children:"disabled"}),Object(u.jsx)(P,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(P,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var z=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(v,{}),Object(u.jsx)(A,{}),Object(u.jsx)(X,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.146af3e6.chunk.js.map