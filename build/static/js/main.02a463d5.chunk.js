(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,c){},50:function(e,t,c){},74:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(21),s=c.n(n),i=(c(50),c(8)),o=c(3),u=c.n(o),d=c(7),j=c(2),l=c(5),b=c.n(l);var p=function(e){var t=Object(r.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(r.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://acdc-api21.herokuapp.com/api/category",{headers:{Authorization:e}});case 2:c=t.sent,n(c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()})),{category:[a,n],addCategory:function(){var t=Object(d.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("https://acdc-api21.herokuapp.com/api/category",{name:c},{headers:{Authorization:e}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}};var h=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)("false"),s=Object(j.a)(n,2),i=s[0],o=s[1],l=Object(r.useState)(""),p=Object(j.a)(l,2),h=p[0],O=p[1],x=Object(r.useState)(""),f=Object(j.a)(x,2),m=f[0],v=f[1],g=Object(r.useState)(""),y=Object(j.a)(g,2),k=y[0],w=y[1],C=Object(r.useState)(1),_=Object(j.a)(C,2),A=_[0],N=_[1],S=Object(r.useState)(""),P=Object(j.a)(S,2),E=P[0],D=P[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://acdc-api21.herokuapp.com/api/products?limit=".concat(4*A,"&").concat(h,"&").concat(m,"&title[regex]=").concat(k));case 2:t=e.sent,a(t.data.products),D(t.data.result),console.log(t.data.result);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,A,m,k,h]),{products:[c,a],callback:[i,o],category:[h,O],sort:[m,v],page:[A,N],result:[E,D],search:[k,w]}},O=c(10),x=c(16),f=c(6);var m=function(e){var t=Object(r.useState)(!1),c=Object(j.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)([]),h=Object(j.a)(p,2),m=h[0],v=h[1],g=Object(r.useState)([]),y=Object(j.a)(g,2),k=y[0],w=y[1],C=Object(r.useState)(!1),_=Object(j.a)(C,2),A=_[0],N=_[1];return Object(r.useEffect)((function(){e&&function(){var t=Object(d.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://acdc-api21.herokuapp.com/user/info",{headers:{Authorization:e}});case 3:c=t.sent,n(!0),1===c.data.user.role?l(!0):l(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f.b.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(r.useEffect)((function(){e&&function(){var t=Object(d.a)(u.a.mark((function t(){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=7;break}return t.next=3,b.a.get("http://localhost:5000/api/payment",{headers:{Authorization:e}});case 3:c=t.sent,w(c.data),t.next=11;break;case 7:return t.next=9,b.a.get("http://localhost:5000/user/history",{headers:{Authorization:e}});case 9:r=t.sent,w(r.data);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e,A,o]),{isLogged:[a,n],isAdmin:[o,l],addCart:function(){var t=Object(d.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",f.b.error("Please login to continue buying"));case 2:if(!m.every((function(e){return e._id!==c._id}))){t.next=10;break}return v([].concat(Object(x.a)(m),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])),t.next=7,b.a.post("https://acdc-api21.herokuapp.com/user/addToCart",{cart:[].concat(Object(x.a)(m),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])},{headers:{Authorization:e}});case 7:f.b.success("Item added into cart.",{position:"top-left"}),t.next=11;break;case 10:alert("already added");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),cart:[m,v],history:[k,w],callBack:[A,N]}},v=c(0),g=Object(r.createContext)(),y=function(e){var t=e.children,c=Object(r.useState)(!1),a=Object(j.a)(c,2),n=a[0],s=a[1],i={token:[n,s],ProductApi:h(),userApi:m(n),categoriesApi:p(n)};return Object(r.useEffect)((function(){if(localStorage.getItem("userLogin")){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://acdc-api21.herokuapp.com/user/refreshToken",{headers:{setCookie:localStorage.getItem("refreshToken")}});case 2:t=e.sent,s(t.data.token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){e()}),6e5),e()}}),[]),Object(v.jsx)(g.Provider,{value:i,children:t})},k=c(19),w=c(20);c(74);var C=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.userApi.isLogged,2),c=t[0],a=t[1],n=Object(j.a)(e.userApi.isAdmin,2),s=n[0],o=n[1],l=Object(j.a)(e.userApi.cart,2),p=l[0],h=l[1],O=Object(r.useState)(!1),x=Object(j.a)(O,2),f=x[0],m=x[1],y=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://acdc-api21.herokuapp.com/user/logout");case 2:localStorage.clear(),o(!1),a(!1),h([]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C={left:f?0:"-100%"};return Object(v.jsxs)("header",{children:[Object(v.jsx)("div",{className:"menu",onClick:function(){return m(!f)},children:Object(v.jsx)(k.a,{icon:w.a,size:"2x"})}),Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("h1",{children:Object(v.jsx)(i.b,{to:"/",children:s?"Admin":"My shop"})})}),Object(v.jsxs)("ul",{style:C,children:[Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{to:"/",exact:!0,activeClassName:"active_class",children:s?"Products":"Shop"})}),s&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{exact:!0,activeClassName:"active_class",to:"/create_product",children:"Create Product"})}),Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{exact:"true",activeClassName:"active_class",to:"/category",children:"Category"})})]}),c?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{exact:!0,to:"/history",activeClassName:"active_class",children:"History"})}),Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{exact:!0,to:"/",onClick:y,children:"Logout"})})]}):Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(i.c,{exact:!0,to:"/Login",activeClassName:"active_class",children:"Login & Register"})}),Object(v.jsx)("li",{onClick:function(){return m(!f)},children:Object(v.jsx)(k.a,{icon:w.d,width:"30",className:"menu"})})]}),Object(v.jsxs)("div",{className:"cart-icon",children:[Object(v.jsx)("span",{children:p.length}),Object(v.jsx)(i.b,{to:"/cart",children:Object(v.jsx)(k.a,{icon:w.b,width:"30"})})]})]})},_=c(17);c(80);var A=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(j.a)(e,2),c=t[0],a=t[1],n=function(e){var t=e.target,r=t.name,n=t.value;a(Object(O.a)(Object(O.a)({},c),{},Object(_.a)({},r,n)))},s=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("https://acdc-api21.herokuapp.com/user/login",Object(O.a)({},c));case 4:r=e.sent,localStorage.setItem("refreshToken",r.data.refreshToken),f.b.success("LogIn Successful"),localStorage.setItem("userLogin",!0),window.location.href="/",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),f.b.error("".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"login_page",children:[Object(v.jsx)("h2",{children:"LOGIN"}),Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:n}),Object(v.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"Password",value:c.password,onChange:n}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("button",{type:"submit",children:"Login"}),Object(v.jsx)(i.b,{to:"/register",children:"Register"})]})]})]})};var N=function(){var e=Object(r.useState)({name:"",email:"",password:""}),t=Object(j.a)(e,2),c=t[0],a=t[1],n=function(e){var t=e.target,r=t.name,n=t.value;a(Object(O.a)(Object(O.a)({},c),{},Object(_.a)({},r,n)))},s=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("https://acdc-api21.herokuapp.com/user/register",Object(O.a)({},c));case 4:r=e.sent,localStorage.setItem("refreshToken",r.data.refreshToken),f.b.success("Registration Completed."),localStorage.setItem("userLogin",!0),window.location.href="/",e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),f.b.error("".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"login_page",children:[Object(v.jsx)("h2",{children:"Registration"}),Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)("input",{type:"name",name:"name",required:!0,placeholder:"Name",value:c.name,onChange:n}),Object(v.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:n}),Object(v.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"Password",value:c.password,onChange:n}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("button",{type:"submit",children:"Register"}),Object(v.jsx)(i.b,{to:"/login",children:"Login"})]})]})]})},S=(c(81),c(41)),P=c(42),E=c(45),D=c(44),q=c(43),z=c.n(q),I=function(e){Object(E.a)(c,e);var t=Object(D.a)(c);function c(){return Object(S.a)(this,c),t.apply(this,arguments)}return Object(P.a)(c,[{key:"render",value:function(){var e=this,t=this.props.total;return Object(v.jsx)(z.a,{env:"sandbox",client:{sandbox:"AT1O9ftdtkX_eUlXIj9z1ZJB6DaDSQxY7XYPuzDVWHTeYOxXxDrPydhXqg5xSaWrS0VrtbL45PGqOFEd",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),c}(a.a.Component);var L=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.userApi.cart,2),c=t[0],a=t[1],n=Object(j.a)(e.token,1)[0],s=Object(r.useState)(0),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(j.a)(e.userApi.callBack,2),h=p[0],O=p[1];if(Object(r.useEffect)((function(){!function(){var e=c.reduce((function(e,t){return e+t.price*t.quantity}),0);l(e)}()}),[c]),0===c.length)return Object(v.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:"Cart is Empty"});var m=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://acdc-api21.herokuapp.com/user/addToCart",{cart:t},{headers:{Authorization:n}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),r=t.paymentID,s=t.address,e.next=4,b.a.post("https://acdc-api21.herokuapp.com/api/payment",{cart:c,paymentID:r,address:s},{headers:{Authorization:n}});case 4:a([]),m([]),O(!h),f.b.success("Order placed.",{position:"bottom-right"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"myCart",children:[Object(v.jsxs)("div",{className:"total",children:[Object(v.jsxs)("h3",{children:["Total: USD ",o]}),Object(v.jsx)(I,{total:o,tranSuccess:y})]}),c.map((function(e,t){return Object(v.jsxs)("div",{className:"detail cart ",children:[Object(v.jsx)("img",{src:e.images.url,alt:"",className:"img_container"}),Object(v.jsxs)("div",{className:"box-detail",children:[Object(v.jsx)("h2",{children:e.title}),Object(v.jsxs)("span",{children:["INR ",e.price*e.quantity]}),Object(v.jsxs)("p",{children:["Sold: ",e.sold]}),Object(v.jsxs)("div",{className:"amount",children:[Object(v.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),a(Object(x.a)(c)),void m(c);var t},children:" - "}),Object(v.jsx)("span",{children:e.quantity}),Object(v.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(e.quantity+=1)})),a(Object(x.a)(c)),void m(c);var t},children:" + "})]}),Object(v.jsx)("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(c.forEach((function(e,r){e._id===t&&c.splice(r,1)})),a(Object(x.a)(c)),m(c)));var t},children:"X"})]})]},t)}))]})};c(86);var T=function(){return Object(v.jsx)("div",{className:"loader",children:Object(v.jsx)(k.a,{icon:w.c,className:"loaderIcon",size:"5x"})})};c(87);var F=function(e){var t=e.product,c=e.isAdmin,a=e.deleteProduct,n=Object(r.useContext)(g).userApi.addCart;return console.log(),Object(v.jsxs)("div",{className:"row_btn",children:[c?Object(v.jsx)(i.c,{id:"btn_buy",to:"/edit_product/".concat(t._id),children:"Edit"}):Object(v.jsx)(i.c,{id:"btn_buy",to:"#!",onClick:function(){return n(t)},children:"Buy"}),c?Object(v.jsx)(i.c,{id:"btn_view",to:"/",onClick:function(){return a(t._id,t.images.public_id)},children:"Delete"}):Object(v.jsx)(i.c,{id:"btn_view",to:"/detail/".concat(t._id),children:"View"})]})};var B=function(e){var t=e.product,c=e.isAdmin,r=e.callback,a=e.setCallBack,n=e.handleCheck,s=e.deleteProduct;return Object(v.jsxs)("div",{className:"product_card",children:[c&&Object(v.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(){return n(t._id)}}),Object(v.jsx)("img",{src:t.images.url,alt:""}),Object(v.jsxs)("div",{className:"product_box",children:[Object(v.jsx)("h2",{title:t.title,children:t.title}),Object(v.jsxs)("span",{children:["USD ",t.price]}),Object(v.jsx)("p",{children:t.description})]}),Object(v.jsx)(F,{product:t,isAdmin:c,callback:r,setCallBack:a,deleteProduct:s})]})};c(88);var U=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.categoriesApi.category,1)[0],c=Object(j.a)(e.ProductApi.sort,2),a=(c[0],c[1]),n=Object(j.a)(e.ProductApi.search,2),s=n[0],i=n[1],o=Object(j.a)(e.ProductApi.category,2),u=(o[0],o[1]);return Object(v.jsxs)("div",{className:"filter_menu",children:[Object(v.jsxs)("div",{className:"row ",children:[Object(v.jsx)("span",{children:"Filters: "}),Object(v.jsxs)("select",{name:"category",id:"category",onChange:function(e){e.preventDefault(),u(e.target.value)},children:[Object(v.jsx)("option",{value:"",children:"All product"}),t.map((function(e){return Object(v.jsx)("option",{value:"category="+e._id,children:e.name},e._id)}))]})]}),Object(v.jsx)("input",{type:"text",placeholder:"Enter your search!",value:s,onChange:function(e){return i(e.target.value.toLowerCase())}}),Object(v.jsxs)("div",{className:"row sort",children:[Object(v.jsx)("span",{children:"Sort By: "}),Object(v.jsxs)("select",{name:"sort",onChange:function(e){return a(e.target.value)},children:[Object(v.jsx)("option",{value:"",children:"Newest"}),Object(v.jsx)("option",{value:"sort=oldest",children:"Oldest"}),Object(v.jsx)("option",{value:"sort=-sold",children:"Best sales"}),Object(v.jsx)("option",{value:"sort=-price",children:"Price: High-Low"}),Object(v.jsx)("option",{value:"sort=price",children:"Price: low-High"})]})]})]})};var R=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.ProductApi.page,2),c=t[0],a=t[1],n=Object(j.a)(e.ProductApi.result,1)[0];return Object(v.jsx)("div",{className:"load_more",children:n<4*c?"":Object(v.jsx)("button",{onClick:function(){return a(c+1)},children:"Load More"})})};var Y=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.ProductApi.products,2),c=t[0],a=t[1],n=Object(j.a)(e.ProductApi.callback,2),s=n[0],i=n[1],o=Object(r.useState)(!1),l=Object(j.a)(o,2),p=l[0],h=l[1],O=Object(j.a)(e.userApi.isAdmin,1)[0],m=Object(j.a)(e.token,1)[0],y=Object(r.useState)(!1),k=Object(j.a)(y,2),w=k[0],C=k[1],_=function(){var e=Object(d.a)(u.a.mark((function e(t,c){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),r=b.a.delete("https://acdc-api21.herokuapp.com/api/products/".concat(t),{headers:{Authorization:m}}),a=b.a.post("https://acdc-api21.herokuapp.com/api/destroy",{public_id:c},{headers:{Authorization:m}}),e.next=5,r;case 5:return e.next=7,a;case 7:return e.next=9,i(!s);case 9:C(!1),f.b.success(r);case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),A=function(e){c.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),a(Object(x.a)(c))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(U,{}),O&&Object(v.jsxs)("div",{className:"delete_all",children:[Object(v.jsx)("span",{children:"Select all"}),Object(v.jsx)("input",{type:"checkbox",checked:p,onChange:function(){c.forEach((function(e){e.checked=!e.checked})),a(Object(x.a)(c)),h(!p)}}),Object(v.jsx)("button",{onClick:function(){c.forEach((function(e){e.checked&&_(e._id,e.images.public_id)}))},children:"Delete All"})]}),Object(v.jsx)("div",{className:"products",children:w?Object(v.jsx)(T,{}):c.map((function(e){return Object(v.jsx)(B,{product:e,isAdmin:O,callback:s,setCallBack:i,setProducts:a,handleCheck:A,deleteProduct:_},e._id)}))}),Object(v.jsx)(R,{}),0===c.length&&Object(v.jsx)("div",{className:"no_product",children:" No Product available"})]})},X=c(9);var H=function(){return Object(v.jsx)("div",{children:"404 | Not Found"})};var G=function(){var e=Object(X.g)(),t=Object(r.useContext)(g),c=Object(j.a)(t.ProductApi.products,1)[0],a=t.userApi.addCart,n=Object(r.useState)([]),s=Object(j.a)(n,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){e&&c.forEach((function(t){t._id===e.id&&u(t)}))}),[e,c]),0===o.length?null:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"detail",children:[Object(v.jsx)("img",{src:o.images.url,alt:""}),Object(v.jsxs)("div",{className:"box-detail",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{children:o.title}),Object(v.jsxs)("h6",{children:["#id: ",o.product_id]})]}),Object(v.jsxs)("span",{children:["USD ",o.price]}),Object(v.jsx)("p",{children:o.description}),Object(v.jsx)("p",{children:o.content}),Object(v.jsxs)("p",{children:["Sold: ",o.sold]}),Object(v.jsx)(i.b,{to:"/cart",className:"cart",onClick:function(){return a(o)},children:"Buy Now"})]})]}),Object(v.jsxs)("div",{className:"related",children:[Object(v.jsx)("h2",{children:"Related products"}),Object(v.jsx)("div",{className:"products",children:c.map((function(e){return e.category===o.category?Object(v.jsx)(B,{product:e},e._id):null}))})]})]})};c(39);var J=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.userApi.history,1)[0];return Object(v.jsxs)("div",{className:"history",children:[Object(v.jsx)("h2",{children:"History"}),Object(v.jsxs)("h4",{children:["You Have ",t.length," Ordered"]}),Object(v.jsx)("div",{className:"history_page",children:Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"payment ID"}),Object(v.jsx)("td",{children:"Date of Purchased"}),Object(v.jsx)("td",{})]})}),Object(v.jsx)("tbody",{children:t.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.paymentID}),Object(v.jsx)("td",{children:new Date(e.createdAt).toLocaleTimeString()}),Object(v.jsx)("td",{children:Object(v.jsx)(i.b,{to:"history/".concat(e._id),children:"View"})})]},e._id)}))})]})})]})};var V=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.userApi.history,1)[0],c=Object(r.useState)([]),a=Object(j.a)(c,2),n=a[0],s=a[1],i=Object(X.g)();return Object(r.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&s(e)}))}),[i.id,t]),0===n.length?null:Object(v.jsxs)("div",{className:"history_page",children:[Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Name"}),Object(v.jsx)("td",{children:"Address"}),Object(v.jsx)("td",{children:"Postal Code"}),Object(v.jsx)("td",{children:"Country Code"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:n.address.recipient_name}),Object(v.jsx)("td",{children:n.address.line1+" - "+n.address.city}),Object(v.jsx)("td",{children:n.address.postal_code}),Object(v.jsx)("td",{children:n.address.country_code})]})})]}),Object(v.jsxs)("table",{style:{margin:"30px 0px"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"Product Pic"}),Object(v.jsx)("td",{children:"Title"}),Object(v.jsx)("td",{children:"Quantity"}),Object(v.jsx)("td",{children:"Price"})]})}),Object(v.jsx)("tbody",{children:n.cart.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("img",{src:e.images.url,alt:e.title})}),Object(v.jsx)("td",{children:e.title}),Object(v.jsx)("td",{children:e.quantity}),Object(v.jsx)("td",{children:e.price*e.quantity})]},e._id)}))})]})]})};c(89);var M=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.categoriesApi.category,1)[0],c=Object(j.a)(e.token,1)[0],a=e.categoriesApi.addCategory,n=Object(r.useState)(""),s=Object(j.a)(n,2),i=s[0],o=s[1],l=Object(r.useState)(!1),p=Object(j.a)(l,2),h=p[0],O=p[1],x=Object(r.useState)(!1),m=Object(j.a)(x,2),y=m[0],k=m[1],w=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===i&&f.b.error("Enter Category"),!h){e.next=10;break}return e.next=5,b.a.put("https://acdc-api21.herokuapp.com/api/category/".concat(y),{name:i},{headers:{Authorization:c}});case 5:r=e.sent,f.b.success(r.data.msg),o(""),e.next=12;break;case 10:a(i),o("");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://acdc-api21.herokuapp.com/api/category/".concat(t),{headers:{Authorization:c}});case 2:r=e.sent,f.b.success(r.data.msg);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"category",children:[Object(v.jsxs)("form",{onSubmit:w,children:[Object(v.jsx)("label",{htmlFor:"category",children:" Category"}),Object(v.jsx)("input",{type:"text",name:"category",value:i,required:!0,onChange:function(e){return o(e.target.value)}}),Object(v.jsx)("button",{type:"submit",children:h?"Update":"Save"})]}),Object(v.jsx)("div",{className:"col",children:t.map((function(e){return Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("p",{children:e.name}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return function(e,t){k(e),o(t),O(!0)}(e._id,e.name)},children:"Edit"}),Object(v.jsx)("button",{onClick:function(){return C(e._id)},children:"Delete"})]})]},e._id)}))})]})},Q=(c(90),{product_id:"",title:"",description:"",price:"",content:"",category:"",_id:""});var W=function(){var e=Object(r.useContext)(g),t=Object(X.f)(),c=Object(X.g)(),a=Object(r.useState)(Q),n=Object(j.a)(a,2),s=n[0],i=n[1],o=Object(j.a)(e.categoriesApi.category,1)[0],l=Object(r.useState)(!1),p=Object(j.a)(l,2),h=p[0],x=p[1],m=Object(r.useState)(!1),y=Object(j.a)(m,2),k=y[0],w=y[1],C=Object(j.a)(e.userApi.isAdmin,1)[0],A=Object(j.a)(e.token,1)[0],N=Object(j.a)(e.ProductApi.products,1)[0],S=Object(j.a)(e.ProductApi.callback,2),P=S[0],E=S[1],D=Object(r.useState)(!1),q=Object(j.a)(D,2),z=q[0],I=q[1];Object(r.useEffect)((function(){c.id?N.forEach((function(e){e._id===c.id&&(i(e),x(e.images),I(!0))})):(I(!1),i(Q),x(!1))}),[c.id,N]);var L={display:h?"block":"none"},F=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,C){e.next=4;break}return e.abrupt("return",f.b.error("You are not an Admin"));case 4:if(c=t.target.files[0]){e.next=7;break}return e.abrupt("return",f.b.error("File not exist"));case 7:if(!(c.size>1048576)){e.next=9;break}return e.abrupt("return",f.b.error("Size too large!"));case 9:if("image/jpeg"===c.type||"image/png"===c.type){e.next=11;break}return e.abrupt("return",f.b.error("Only JPEG, PNG files are allowed!"));case 11:return(r=new FormData).append("file",c),w(!0),e.next=16,b.a.post("https://acdc-api21.herokuapp.com/api/upload",r,{headers:{"content-type":"multipart/form-data",Authorization:A}});case 16:a=e.sent,w(!1),x(a.data),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),f.b.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,C){e.next=3;break}return e.abrupt("return",f.b.error("You are not an Admin"));case 3:return e.next=5,b.a.post("https://acdc-api21.herokuapp.com/api/destroy",{public_id:t},{headers:{Authorization:A}});case 5:x(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f.b.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=e.target,c=t.name,r=t.value;i(Object(O.a)(Object(O.a)({},s),{},Object(_.a)({},c,r)))},R=function(){var e=Object(d.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),e.prev=1,C){e.next=4;break}return e.abrupt("return",f.b.error("You are not an Admin"));case 4:if(!1!==h){e.next=6;break}return e.abrupt("return",f.b.error("Upload Image"));case 6:if(!z){e.next=12;break}return w(!0),e.next=10,b.a.put("https://acdc-api21.herokuapp.com/api/products/".concat(s._id),Object(O.a)(Object(O.a)({},s),{},{images:h}),{headers:{Authorization:A}});case 10:e.next=15;break;case 12:return w(!0),e.next=15,b.a.post("https://acdc-api21.herokuapp.com/api/products",Object(O.a)(Object(O.a)({},s),{},{images:h}),{headers:{Authorization:A}});case 15:x(!1),E(!P),w(!1),i(Q),t.push("/"),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),f.b.error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:k?Object(v.jsx)(T,{}):Object(v.jsxs)("div",{className:"create_product",children:[Object(v.jsxs)("div",{className:"upload",children:[Object(v.jsx)("input",{type:"file",name:"file",id:"file_up",onChange:F}),Object(v.jsxs)("div",{className:"file_img",style:L,children:[Object(v.jsx)("img",{src:h.url,alt:""}),Object(v.jsx)("span",{onClick:function(){return B(h.public_id)},children:"X"})]})]}),Object(v.jsxs)("form",{onSubmit:R,children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"product_id",children:"Product_id"}),Object(v.jsx)("input",{type:"text",name:"product_id",id:"product_id",value:s.product_id,required:!0,onChange:U,disabled:z})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"title",children:"Title"}),Object(v.jsx)("input",{type:"text",name:"title",id:"title",value:s.title,required:!0,onChange:U})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"price",children:"Price"}),Object(v.jsx)("input",{type:"text",name:"price",id:"price",value:s.price,required:!0,onChange:U})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"description",children:"Description"}),Object(v.jsx)("textarea",{type:"text",name:"description",id:"description",rows:"5",value:s.description,required:!0,onChange:U})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"content",children:"Content"}),Object(v.jsx)("textarea",{type:"text",name:"content",id:"content",rows:"7",value:s.content,required:!0,onChange:U})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("label",{htmlFor:"categories",children:"Categories"}),Object(v.jsxs)("select",{name:"category",id:"category",value:s.category,required:!0,onChange:U,children:[Object(v.jsx)("option",{value:"",children:"Please select a category"}),o.map((function(e){return Object(v.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(v.jsx)("button",{type:"submit",children:z?"Update":"Save"})]})]})})};var Z=function(){var e=Object(r.useContext)(g),t=Object(j.a)(e.userApi.isLogged,1)[0];return Object(v.jsxs)(X.c,{children:[Object(v.jsx)(X.a,{path:"/",exact:!0,component:Y}),Object(v.jsx)(X.a,{path:"/detail/:id",exact:!0,component:G}),Object(v.jsx)(X.a,{path:"/cart",exact:!0,component:L}),Object(v.jsx)(X.a,{path:"/login",exact:!0,component:t?H:A}),Object(v.jsx)(X.a,{path:"/register",exact:!0,component:t?H:N}),Object(v.jsx)(X.a,{path:"/history",exact:!0,component:t?J:H}),Object(v.jsx)(X.a,{path:"/category",exact:!0,component:t?M:H}),Object(v.jsx)(X.a,{path:"/create_product",exact:!0,component:t?W:H}),Object(v.jsx)(X.a,{path:"/edit_product/:id",exact:!0,component:t?W:H}),Object(v.jsx)(X.a,{path:"/history/:id",exact:!0,component:t?V:H}),Object(v.jsx)(X.a,{path:"*",exact:!0,component:H})]})};var K=function(){return Object(v.jsxs)(y,{children:[Object(v.jsx)(i.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(C,{}),Object(v.jsx)(Z,{})]})}),Object(v.jsx)(f.a,{})]})};s.a.render(Object(v.jsx)(K,{}),document.getElementById("root"));t.default=K}},[[91,1,2]]]);
//# sourceMappingURL=main.02a463d5.chunk.js.map