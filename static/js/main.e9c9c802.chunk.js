(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a.p+"static/media/welcome.48a94696.svg"},155:function(e,t,a){e.exports=a.p+"static/media/forget.8b8a8dc6.svg"},156:function(e,t,a){e.exports=a.p+"static/media/reset.8f55d1cb.svg"},157:function(e,t,a){e.exports=a(307)},190:function(e,t){},192:function(e,t){},206:function(e,t){},208:function(e,t){},236:function(e,t){},238:function(e,t){},239:function(e,t){},244:function(e,t){},246:function(e,t){},252:function(e,t){},254:function(e,t){},273:function(e,t){},285:function(e,t){},288:function(e,t){},306:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),o=a.n(l),s=a(8),c=a(7),i=a(2);var m=function(e){return e.history,r.a.createElement("div",{className:"bg-gray-80 m-2 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"m-0 md:m-20 shadow bg-white sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-10/12 p-6 sm:p-8"},r.a.createElement("div",{className:"flex flex-col items-center"},r.a.createElement("h5",{className:"text-4xl  text-center"},r.a.createElement("small",null,"Welcome to ")," ",r.a.createElement("br",null)," ",r.a.createElement("span",{className:"font-bold text-green-500"},"Nigerian Universities Innovation Challenge")," ",r.a.createElement("br",null)," ",r.a.createElement("small",null," ","brought to you by"," ",r.a.createElement("span",{className:"text-green-600"},"AP Multimedia")," in collaboration with"," ",r.a.createElement("span",{className:"text-green-600"},"Nile University of Nigeria")," ","and Powered by ",r.a.createElement("span",{className:"text-green-600"},"IdeaNext"))),r.a.createElement("div",{className:"w-full flex-1 mt-0 text-indigo-500"},r.a.createElement("div",{className:"my-10 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},r.a.createElement("strong",null,"Sign in / Create new account"))),r.a.createElement("div",{className:"mx-auto max-w-xs relative "},r.a.createElement(s.b,{to:"/login",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},"Sign in (existing users)")),r.a.createElement(s.b,{to:"/register",className:"mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},"Create new account (new users)"))))))),";")},u=a(9),d=a(4),g=a(12),f=a(51),p=a.n(f),b=a(10),x=a.n(b),h=function(){var e=Object(n.useState)({username:"",password:"",textChange:"Sign In"}),t=Object(g.a)(e,2),a=t[0],l=t[1],o=a.username,c=a.password,m=a.textChange,f=function(e){return function(t){l(Object(d.a)({},a,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(p.a,")")}})),r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-5 flex flex-col items-center"},r.a.createElement("h4",{className:"text-2xl"},"Sign in to your account"),r.a.createElement("div",{className:"w-full flex-1 mt-2 text-indigo-500"},r.a.createElement("div",{className:"my-12"}),r.a.createElement("form",{className:"mx-auto max-w-xs relative ",onSubmit:function(e){e.preventDefault(),o&&c?(l(Object(d.a)({},a,{textChange:"Logging in..."})),x.a.post("https://i-next-backend.herokuapp.com/api/users/signin",{username:o,password:c}).then(function(e){l(Object(d.a)({},a,{username:"",password:"",textChange:"Logged in"})),i.b.success(e.data.message)&&"undefined"!==typeof window&&(window.location.href="https://ideanext.io")}).catch(function(e){l(Object(d.a)({},a,{username:"",password:"",textChange:"Sign in"})),i.b.error("Sorry, something went wrong. Please try again later.")})):i.b.error("Please fill all fields")}},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Enter your username",onChange:f("username"),value:o}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200  text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Enter your account password",onChange:f("password"),value:c}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},m)),r.a.createElement(s.b,{to:"/users/password/forget",className:"no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"},"Forget password?")),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Don't have an account?"," ",r.a.createElement(s.b,{to:"/register"},r.a.createElement("span",{className:"text-indigo-500 font-bold"},"Sign up")))))))))},y=a(52),w=a.n(y),E=function(e){e.history;var t=Object(n.useState)({firstname:"",lastname:"",username:"",email:"",phone:"",password:"",textChange:"Sign Up"}),a=Object(g.a)(t,2),l=a[0],o=a[1],c=l.email,m=l.password,f=l.firstname,p=l.lastname,b=l.username,h=l.phone,y=l.textChange,E=function(e){return function(t){o(Object(d.a)({},l,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-6 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(w.a,")")}})),r.a.createElement("div",{className:"lg:w-1/2 xl:w-6/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-0 flex flex-col items-center"},r.a.createElement("h4",{className:"text-2xl"},"Create your account"),r.a.createElement("div",{className:"my-2"}),r.a.createElement("form",{className:"w-full flex-2 mt-2 text-indigo-500",onSubmit:function(e){if(e.preventDefault(),f&&p&&b&&c&&m){if(m.length<6)return i.b.error("Password must be six character");o(Object(d.a)({},l,{textChange:"Submitting"})),x.a.post("https://i-next-backend.herokuapp.com/api/users/register",{firstname:f,lastname:p,username:b,phone:h,email:c,password:m}).then(function(e){o(Object(d.a)({},l,{firstname:"",lastname:"",username:"",email:"",phone:"",password:"",textChange:"Submit"})),i.b.success(e.data.message)&&"undefined"!==typeof window&&(window.location.href="https://app-inext-auth.herokuapp.com/activate/token")}).catch(function(e){o(Object(d.a)({},l,{firstname:"",lastname:"",username:"",email:"",phone:"",password:"",textChange:"Sign up"})),console.log(e.response.data.message),i.b.error("Sorry, something went wrong. Please try again later.")})}else i.b.error("Please fill all fields")}},r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full max-w-xs px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mr-8 mt-5",type:"text",placeholder:"Enter your firstname",onChange:E("firstname"),value:f}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mt-5",type:"text",placeholder:"Enter your lastname(s)",onChange:E("lastname"),value:p})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mr-8 mt-5",type:"phone",placeholder:"Enter your phone number",onChange:E("phone"),value:h}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Enter your email address",onChange:E("email"),value:c})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mr-8 mt-5",type:"text",placeholder:"Choose a username",onChange:E("username"),value:b}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Choose password",onChange:E("password"),value:m})),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},y)),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Already have an account?"," ",r.a.createElement(s.b,{to:"/login"},r.a.createElement("span",{className:"text-indigo-500 font-bold"},"Sign in")))))))))},v=a(154),N=a.n(v),j=(a(186),function(){var e,t=Object(n.useState)({token:"",show:!0}),a=Object(g.a)(t,2),l=a[0],o=a[1],c=(l.username,l.token);return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-6/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-4 flex flex-col"},r.a.createElement("h4",{className:"text-2xl"},"Welcome, ",r.a.createElement("span",{className:"text-green-700"},"firstname_here"),"."),r.a.createElement("form",{className:"w-full flex-1 mt-10 text-indigo-500",onSubmit:function(e){console.log(l),e.preventDefault(),x.a.post("https://i-next-backend.herokuapp.com/api/users/activation",{token:c}).then(function(e){o(Object(d.a)({},l,{show:!1})),i.b.success(e.data.message)&&"undefined"!==typeof window&&(window.location.href="https://ideanext.io")}).catch(function(e){console.log(e.response.data),i.b.info("Sorry, token expire. Please click the Resent botton and try again later.")})}},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("input",{className:"w-full max-w-xs px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mr-8 mt-5",type:"text",placeholder:"Paste token received via your email",onChange:(e="token",function(t){o(Object(d.a)({},l,Object(u.a)({},e,t.target.value)))})})),r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},r.a.createElement(s.b,{to:"#"},r.a.createElement("span",{className:"text-green-500 font-bold"}," ","Resent token"," "))),r.a.createElement("div",{className:"max-w-xs relative "},r.a.createElement("button",{type:"submit",className:"mt-8 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6"}),r.a.createElement("span",{className:"ml-3"},"Confirm your identity")))),r.a.createElement("div",{className:"leading-none mt-12 px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},r.a.createElement(s.b,{to:"/login"},r.a.createElement("span",{className:"bg-red-700 text-white px-4 py-2 border font-bold"}," ","Logout"," "))))),r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(N.a,")")}}))))}),k=a(53),C=a.n(k),O=a(55),S=a.n(O),I=function(e){if("undefined"!==window)return S.a.get(e)},_=function(e,t){var a,n;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),a="token",n=e.data.token,"undefiend"!==window&&S.a.set(a,n,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},P=function(){if("undefined"!==window&&I("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},U=function(e){var t;t="token","undefined"!==window&&S.a.remove(t,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},A=function(e,t){if(console.log("UPDATE USER IN LOCALSTORAGE HELPERS",e),"undefined"!==typeof window){var a=JSON.parse(localStorage.getItem("user"));a=e.data,localStorage.setItem("user",JSON.stringify(a))}t()},R=function(e){var t=e.history,a=Object(n.useState)({name:"",email:"",password1:"",textChange:"Update",role:""}),l=Object(g.a)(a,2),o=l[0],s=l[1];Object(n.useEffect)(function(){c()},[]);var c=function(){var e=I("token");x.a.get("".concat("https://i-next-backend.herokuapp.com/api/users","/user/").concat(P()._id),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var t=e.data,a=t.role,n=t.name,r=t.email;s(Object(d.a)({},o,{role:a,name:n,email:r}))}).catch(function(e){i.b.error("Error To Your Information ".concat(e.response.statusText)),401===e.response.status&&U(function(){t.push("/login")})})},m=o.name,f=o.email,p=o.password1,b=o.textChange,h=o.role,y=function(e){return function(t){s(Object(d.a)({},o,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-12 flex flex-col items-center"},r.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Profile Update"),r.a.createElement("form",{className:"w-full flex-1 mt-8 text-indigo-500",onSubmit:function(e){var t=I("token");console.log(t),e.preventDefault(),s(Object(d.a)({},o,{textChange:"Submitting"})),x.a.put("".concat("https://i-next-backend.herokuapp.com/api/users","/user/update"),{name:m,email:f,password:p},{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){A(e,function(){i.b.success("Profile Updated Successfully"),s(Object(d.a)({},o,{textChange:"Update"}))})}).catch(function(e){console.log(e.response)})}},r.a.createElement("div",{className:"mx-auto max-w-xs relative "},r.a.createElement("input",{disabled:!0,className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Role",value:h}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",disabled:!0,value:f}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Name",onChange:y("name"),value:m}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",onChange:y("password1"),value:p}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},b))),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Go To Home")),r.a.createElement("div",{className:"flex flex-col items-center"},r.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3\r bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},r.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),r.a.createElement("span",{className:"ml-4"},"Home")))))),r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(C.a,")")}}))),";")},D=function(e){var t=e.history,a=Object(n.useState)({name:"",email:"",password1:"",textChange:"Update",role:""}),l=Object(g.a)(a,2),o=l[0],s=l[1];Object(n.useEffect)(function(){c()},[]);var c=function(){var e=I("token");x.a.get("".concat("https://i-next-backend.herokuapp.com/api/users","/user/").concat(P()._id),{headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var t=e.data,a=t.role,n=t.name,r=t.email;s(Object(d.a)({},o,{role:a,name:n,email:r}))}).catch(function(e){i.b.error("Error To Your Information ".concat(e.response.statusText)),401===e.response.status&&U(function(){t.push("/login")})})},m=o.name,f=o.email,p=o.password1,b=o.textChange,h=o.role,y=function(e){return function(t){s(Object(d.a)({},o,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-12 flex flex-col items-center"},r.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Admin Update"),r.a.createElement("form",{className:"w-full flex-1 mt-8 text-indigo-500",onSubmit:function(e){var t=I("token");console.log(t),e.preventDefault(),s(Object(d.a)({},o,{textChange:"Submitting"})),x.a.put("".concat("https://i-next-backend.herokuapp.com/api/users","/admin/update"),{name:m,email:f,password:p},{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){A(e,function(){i.b.success("Profile Updated Successfully"),s(Object(d.a)({},o,{textChange:"Update"}))})}).catch(function(e){console.log(e.response)})}},r.a.createElement("div",{className:"mx-auto max-w-xs relative "},r.a.createElement("input",{disabled:!0,className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Role",value:h}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",disabled:!0,value:f}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Name",onChange:y("name"),value:m}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",onChange:y("password1"),value:p}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},b))),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Go To Home")),r.a.createElement("div",{className:"flex flex-col items-center"},r.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3\r bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},r.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),r.a.createElement("span",{className:"ml-4"},"Home")))))),r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(C.a,")")}}))),";")},T=a(155),L=a.n(T),H=function(e){e.history;var t,a=Object(n.useState)({email:"",textChange:"Send reset instruction"}),l=Object(g.a)(a,2),o=l[0],c=l[1],m=o.email;return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-5 flex flex-col items-center"},r.a.createElement("h4",{className:"text-2xl"},"Reset your account password"),r.a.createElement("div",{className:"w-full flex-1 mt-8 text-indigo-500"},r.a.createElement("form",{className:"mx-auto max-w-xs relative ",onSubmit:function(e){e.preventDefault(),m?(c(Object(d.a)({},o,{textChange:"Send instruction..."})),x.a.put("".concat("https://i-next-backend.herokuapp.com/api/users","/forgotpassword"),{email:m}).then(function(e){c(Object(d.a)({},o,{email:""})),i.b.success("Please check your email")}).catch(function(e){console.log(e.response),i.b.error("Sorry, something went wrong. Please try again later.")})):i.b.error("Please fill all fields")}},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"email",placeholder:"Enter your email address",onChange:(t="email",function(e){c(Object(d.a)({},o,Object(u.a)({},t,e.target.value)))}),value:m}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},"Send reset instruction"))),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Remeber your password?"," ",r.a.createElement(s.b,{to:"/login"},r.a.createElement("span",{className:"text-indigo-500 font-bold"}," Sign in"))))))),r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(L.a,")")}}))),";")},J=a(156),B=a.n(J),z=function(e){var t=e.match,a=Object(n.useState)({password1:"",password2:"",token:"",textChange:"Update your password"}),l=Object(g.a)(a,2),o=l[0],c=l[1],m=o.password1,f=o.password2,p=o.token;Object(n.useEffect)(function(){var e=t.params.token;e&&c(Object(d.a)({},o,{token:e}))},[]);var b=function(e){return function(t){c(Object(d.a)({},o,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-8 flex flex-col items-center"},r.a.createElement("h4",{className:"text-2xl"},"Reset your account password"),r.a.createElement("div",{className:"w-full flex-1 mt-8 text-indigo-500"},r.a.createElement("form",{className:"mx-auto max-w-xs relative ",onSubmit:function(e){console.log(m,f),e.preventDefault(),m===f&&m&&f?(c(Object(d.a)({},o,{textChange:"Updating your password..."})),x.a.put("".concat("https://i-next-backend.herokuapp.com/api/users","/resetpassword"),{newPassword:m,resetPasswordLink:p}).then(function(e){console.log(e.data.message),c(Object(d.a)({},o,{password1:"",password2:"",textChange:"Updated"})),i.b.success(e.data.message)}).catch(function(e){i.b.error("Sorry, something went wrong. Please try again later.")})):i.b.error("Passwords don't matches")}},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"password",placeholder:"Enter a new password",onChange:b("password1"),value:m}),r.a.createElement("input",{className:"w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"password",placeholder:"Confirm password",onChange:b("password2"),value:f}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},"Update your password")),r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Remeber your password? ",r.a.createElement(s.b,{to:"/login"},"Sign In"))))))),r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(B.a,")")}}))),";")},G=a(54),Y=function(e){var t=e.component,a=Object(G.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},a,{render:function(e){return P()?r.a.createElement(t,e):r.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},F=function(e){var t=e.component,a=Object(G.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},a,{render:function(e){return P()&&"admin"===P().role?r.a.createElement(t,e):r.a.createElement(c.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},W=(a(305),a(306),function(){var e=Object(n.useState)({username:"",password:"",member_Ideanext:"",website:"",country:"",institutional_email:"",inst_org:"",dep_unit_org:"",title:"",textChange:""}),t=Object(g.a)(e,2),a=t[0],l=t[1],o=a.username,s=a.password,c=a.member_Ideanext,m=a.website,f=a.country,p=a.inst_org,b=a.dep_unit_org,h=a.title,y=a.institutional_email,E=a.textChange,v=function(e){return function(t){l(Object(d.a)({},a,Object(u.a)({},e,t.target.value)))}},N=function(){"undefined"!==typeof window&&(window.location.href="https://ideanext.io")};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(w.a,")")}})),r.a.createElement("div",{className:"lg:w-1/2 xl:w-6/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-5 flex flex-col items-center"},r.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Sign Up for Innovation Challenge"),r.a.createElement("form",{className:"w-full flex-2 mt-2 text-indigo-500",onSubmit:function(e){if(e.preventDefault(),console.log(a),o&&s&&c&&m&&f&&y&&p&&b&&h){if(s.length<6)return i.b.error("Your Password must be six character");l(Object(d.a)({},a,{textChange:"Submitting"})),x.a.post("https://i-next-backend.herokuapp.com/ichallenge/user/signup",{username:o,password:s,member_Ideanext:c,website:m,country:f,institutional_email:y,inst_org:p,dep_unit_org:b,title:h,textChange:"Submitted"}).then(function(e){l({username:"",password:"",member_Ideanext:"",website:"",country:"",institutional_email:"",inst_org:"",dep_unit_org:"",title:"",textChange:"Sign Up IChallenege"}),i.b.success(e.data.message)&&N(),console.log(e.data.message)}).catch(function(e){l({username:"",password:"",member_Ideanext:"",website:"",country:"",institutional_email:"",inst_org:"",dep_unit_org:"",title:""}),i.b.error(e.response.data.message)})}else i.b.error("Please fill all fields")}},r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full max-w-xs px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mr-8 mt-5",type:"text",placeholder:"Username",onChange:v("username"),value:o}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mt-5",type:"password",placeholder:"Password",onChange:v("password"),value:s})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mr-8 mt-5",type:"text",placeholder:"Title",onChange:v("title"),value:h}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Institution/Org",onChange:v("inst_org"),value:p})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mr-8 mt-5",type:"text",placeholder:"Dept/Unit/Org",onChange:v("dep_unit_org"),value:b}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Institutional Email",onChange:v("institutional_email"),value:y})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  mr-8 mt-5",type:"text",placeholder:"Website",onChange:v("website"),value:m}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Country",onChange:v("country"),value:f})),r.a.createElement("div",{className:"mx-auto flex flex-row"},r.a.createElement("select",{placeholder:"Are you Member",id:"cars",className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",onChange:v("member_Ideanext")},r.a.createElement("option",{value:c.value},"Are you part of Idea Next Fora?"),r.a.createElement("option",{value:c.value,onChange:v("member_Ideanext")},"Yes"),r.a.createElement("option",{value:c.value,onChange:v("member_Ideanext")},"No"))),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},E)))))))}),M=function(e){e.history;var t=Object(n.useState)({username:"",password:"",textChange:"Sign In"}),a=Object(g.a)(t,2),l=a[0],o=a[1],c=l.username,m=l.password,f=l.textChange,b=function(e){return function(t){o(Object(d.a)({},l,Object(u.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},r.a.createElement(i.a,null),r.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"},r.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},r.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(p.a,")")}})),r.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},r.a.createElement("div",{className:"mt-12 flex flex-col items-center"},r.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Sign for University IChallenge"),r.a.createElement("div",{className:"w-full flex-1 mt-8 text-indigo-500"},r.a.createElement("div",{className:"my-12 border-b text-center"},r.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Sign In with Username")),r.a.createElement("form",{className:"mx-auto max-w-xs relative ",onSubmit:function(e){e.preventDefault(),c&&m?(o(Object(d.a)({},l,{textChange:"Submitting"})),x.a.post("https://i-next-backend.herokuapp.com/ichallenge/user/signin",{username:c,password:m}).then(function(e){_(e,function(){o(Object(d.a)({},l,{username:"",password:"",textChange:"Submitted"})),i.b.success(e.data.message)&&"undefined"!==typeof window&&(window.location.href="https://ideanext.io")})}).catch(function(e){o(Object(d.a)({},l,{username:"",password:"",textChange:"Sign In"})),i.b.error(e.response)})):i.b.error("Please fill all fields")}},r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Username",onChange:b("username"),value:c}),r.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",onChange:b("password"),value:m}),r.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},r.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),r.a.createElement("span",{className:"ml-3"},f)),r.a.createElement(s.b,{to:"/users/password/forget",className:"no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"},"Forget password?")))))))};o.a.render(r.a.createElement(s.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(m,e)}}),r.a.createElement(c.b,{path:"/login",exact:!0,render:function(e){return r.a.createElement(h,e)}}),r.a.createElement(c.b,{path:"/register",exact:!0,render:function(e){return r.a.createElement(E,e)}}),r.a.createElement(c.b,{path:"/users/password/forget",exact:!0,render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(c.b,{path:"/users/password/reset/:token",exact:!0,render:function(e){return r.a.createElement(z,e)}}),r.a.createElement(c.b,{path:"/activate/token",exact:!0,render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(c.b,{path:"/ichallenge/signup",exact:!0,component:W}),r.a.createElement(c.b,{path:"/ichallenge/signin",exact:!0,component:M}),r.a.createElement(Y,{path:"/private",exact:!0,component:R}),r.a.createElement(F,{path:"/admin",exact:!0,component:D}))),document.getElementById("root"))},51:function(e,t,a){e.exports=a.p+"static/media/login.bad19771.svg"},52:function(e,t,a){e.exports=a.p+"static/media/auth.52ecff6c.svg"},53:function(e,t,a){e.exports=a.p+"static/media/update.0ae84278.svg"}},[[157,1,2]]]);
//# sourceMappingURL=main.e9c9c802.chunk.js.map