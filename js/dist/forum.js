module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["forum/components/LogInButton"]},function(t,e){t.exports=flarum.core.compat["forum/components/LogInModal"]},,function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,e){t.exports=flarum.core.compat["forum/components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["forum/components/SettingsPage"]},function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(2),a=o.n(n),u=o(4),c=o.n(u),s=o(5),i=o.n(s),l=o(1),f=o.n(l),p=o(6),d=o.n(p);app.initializers.add("flarum-login-modal",(function(t){Object(r.extend)(a.a.prototype,"fields",(function(e){e.remove("identification"),e.remove("password"),e.remove("remember"),e.replace("submit",f.a.component({className:"Button Button--primary",onclick:function(){window.location.href="https://account.yechan.cn/#/?referer=https%3A%2F%2Fclub.yechan.cn"}},t.translator.trans("core.forum.header.sign_up_link")+"/"+t.translator.trans("core.forum.header.log_in_link")))})),Object(r.extend)(c.a.prototype,"fields",(function(e){this.attrs.token&&t.forum.attribute("signUpWelcomeText")&&e.add("welcome-message",m("p",{className:"SignUpWelcomeText"},t.forum.attribute("signUpWelcomeText")),99),this.attrs.token||(e.remove("username"),e.remove("email"),e.remove("submit")),e.remove("password")})),Object(r.override)(a.a.prototype,"footer",(function(){return""===t.forum.attribute("forgotPasswordLink")?null:m("p",{className:"LogInModal-forgotPassword"},m("a",{href:t.forum.attribute("forgotPasswordLink"),target:"_blank"},t.translator.trans("core.forum.log_in.forgot_password_link")))})),Object(r.extend)(i.a.prototype,"items",(function(e){0!=t.forum.attribute("replaceLoginWithFoFPassport")&&(t.forum.attribute("allowSignUp")&&e.replace("signUp",f.a.component({className:"Button Button--link",path:"/auth/passport"},t.translator.trans("core.forum.header.sign_up_link"))),e.replace("logIn",f.a.component({className:"Button Button--link",path:"/auth/passport"},t.translator.trans("core.forum.header.log_in_link"))))})),Object(r.extend)(d.a.prototype,"accountItems",(function(e){t.forum.attribute("changePasswordLink")?e.replace("changePassword",m("a",{href:t.forum.attribute("changePasswordLink"),target:"_blank",className:"Button"},t.translator.trans("core.forum.settings.change_password_button"))):e.remove("changePassword"),0==t.forum.attribute("allowChangeMail")&&e.remove("changeEmail")}))}))}]);
//# sourceMappingURL=forum.js.map