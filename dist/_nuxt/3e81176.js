(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,8,9,10,20],{343:function(t,e,n){"use strict";var c=n(2),r=n(3),o=n(39),l=n(27),v=n(40),d=n(235),m=n(14),f=n(4),h=n(234),_=n(152),C=n(346),k=n(347),y=n(93),w=n(348),x=[],E=r(x.sort),R=r(x.push),A=f((function(){x.sort(void 0)})),S=f((function(){x.sort(null)})),z=_("sort"),O=!f((function(){if(y)return y<70;if(!(C&&C>3)){if(k)return!0;if(w)return w<603;var code,t,e,n,c="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}}));c({target:"Array",proto:!0,forced:A||!S||!z||!O},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(O)return void 0===t?E(e):E(e,t);var n,c,r=[],f=v(e);for(c=0;c<f;c++)c in e&&R(r,e[c]);for(h(r,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=v(r),c=0;c<n;)e[c]=r[c++];for(;c<f;)d(e,c++);return e}})},346:function(t,e,n){var c=n(72).match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]},347:function(t,e,n){var c=n(72);t.exports=/MSIE|Trident/.test(c)},348:function(t,e,n){var c=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},351:function(t,e,n){"use strict";n.r(e);var c={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},r=n(57),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("4c814224",content,!0,{sourceMap:!1})},353:function(t,e,n){"use strict";n.r(e);var c={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},r=n(57),component=Object(r.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,n){"use strict";n.r(e);n(50),n(59);var c=n(8),r=(n(26),n(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(n(362),n(57)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var c=n(8),r=(n(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n(352)},363:function(t,e,n){var c=n(150)((function(i){return i[1]}));c.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),c.locals={},t.exports=c},364:function(t,e,n){"use strict";n.r(e);var c={},r=n(57),component=Object(r.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},428:function(t,e,n){var content=n(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("2a640e17",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";n(428)},512:function(t,e,n){var c=n(150)((function(i){return i[1]}));c.push([t.i,".filter-label.point{cursor:pointer}.filter-label.input{border:solid #f3f3f3;outline:none;width:70px}.check-td{position:relative}.check-wrapper.check-item{position:absolute;right:-30px;top:-20px}.user-image{align-items:center;background:linear-gradient(135deg,#e84c89,#9863a3);border-radius:50%;color:#fff;display:flex;font-size:20px;font-weight:500;height:50px;justify-content:center;width:50px}",""]),c.locals={},t.exports=c},562:function(t,e,n){"use strict";n.r(e);n(26),n(58);var c=n(8),r=n(28),o=(n(49),n(94),n(20),n(42),n(13),n(95),n(41),n(343),n(351)),l=n(353),v=n(354),d=n(355),m={data:function(){var t;return t={users:[],referrals:[],limit:4,selectedEmailName:"Select Email",selectedEmail:""},Object(r.a)(t,"limit",4),Object(r.a)(t,"sort","-regDate"),Object(r.a)(t,"itemLength",""),Object(r.a)(t,"currentPage",1),Object(r.a)(t,"pages",(function(){for(var t=[],e=Math.ceil(this.itemLength/this.limit),i=0;i<e;i++)t.push("i");return t})),Object(r.a)(t,"emails",[]),Object(r.a)(t,"hideEmail",!0),Object(r.a)(t,"isBulk",!1),Object(r.a)(t,"confirmMessage",""),Object(r.a)(t,"confirmStatus",!0),Object(r.a)(t,"response",""),Object(r.a)(t,"responseState",!1),Object(r.a)(t,"height",0),Object(r.a)(t,"showResponse",!1),Object(r.a)(t,"deleteId",""),t},methods:{showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},getAge:function(t){var e=(new Date).getTime()-new Date(t).getTime();return Math.floor(e/31536e6)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},clearSelected:function(){this.selectedEmailName="Select Email",this.isBulk=!1,this.users.forEach((function(t){t.checked=!1}))},formatDate:function(data){var t=new Date(data);return new Intl.DateTimeFormat("en-US",{weekday:"short",day:"numeric",month:"long"}).format(t)},toggleCheck:function(t,e){e.checked=!e.checked},paginate:function(t){this.currentPage=t,this.getUsers()},sortName:function(){this.sort="-username"==this.sort?"username":"-username",this.getUsers()},showConfirmation:function(t){"Select Email"==this.selectedEmailName?this.showResponseMsg("Please select email template",!1):(this.confirmMessage=t,this.confirmStatus=!1)},deleteConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmStatus=!1},returnConfirmation:function(data){if(this.confirmStatus=!this.confirmStatus,"yes"==data)if(""!=this.deleteId)this.deleteUser();else{var t=[];this.users.forEach((function(e){1==e.checked&&t.push(e)})),0==t.length?this.showResponseMsg("Please select at least one user",!1):this.sendEmail(t)}this.deleteId=""},selectEmail:function(t){this.selectedEmailName=t.name,this.selectedEmail=t,this.hideEmail=!this.hideEmail},bulkSelection:function(){this.isBulk=!this.isBulk,this.isBulk?this.users.forEach((function(t){t.checked=!0})):this.users.forEach((function(t){t.checked=!1}))},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},sendEmail:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return form={users:t,email:e.selectedEmail},n.prev=1,n.next=4,e.$axios.post("/emails/send-email",form);case 4:e.showResponseMsg("The email was sent successfully",!0),e.clearSelected(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getEmails:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/emails");case 3:n=e.sent,t.emails=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUsers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&hasReferred=true&page=").concat(t.currentPage),e.prev=1,e.next=4,t.$axios.get("/users/".concat(n));case 4:c=e.sent,t.users=t.checkItems(c.data.data),t.itemLength=c.data.length,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},deleteUsers:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("/users/".concat(t.deleteId));case 3:t.users=t.checkItems(result.data.data),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},mounted:function(){this.getUsers(),this.getEmails()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:n(364).default,AdminFooter:l.default,AdminNavigation:v.default,AdminTopHeader:d.default,AdminConfirmation:o.default}},f=(n(511),n(57)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper users"},[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmStatus},on:{confirm:t.returnConfirmation}}),t._v(" "),e("AdminNavigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("AdminTopHeader"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("Referrals Page")]),t._v(" "),e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Email")]),t._v(" "),e("h4",{staticClass:"filter-label point",on:{click:function(e){t.hideEmail=!t.hideEmail}}},[t._v("\n              "+t._s(t.selectedEmailName)+"\n            ")]),t._v(" "),e("ul",{staticClass:"filter-list",class:{hide:t.hideEmail},attrs:{role:"list"}},t._l(t.emails,(function(n){return e("li",{key:n._id,staticClass:"filter-items",on:{click:function(e){return t.selectEmail(n)}}},[e("div",[t._v(t._s(n.name))])])})),0)]),t._v(" "),e("div",{staticClass:"each-filter-option",on:{click:t.sortName}},[e("h4",{staticClass:"filter-label"},[t._v("Sort By Name")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.users,(function(n,c){return e("tr",{key:n._id},[e("td",{staticClass:"check-td"},[t._v("\n                  "+t._s(c+1)+"\n                  "),e("div",{staticClass:"each-input sm"},[e("div",{staticClass:"check-wrapper check-item",on:{click:function(e){return t.toggleCheck(e,n)}}},[e("div",{staticClass:"check-indicator",class:{active:n.checked}})])])]),t._v(" "),e("td",[n.image?e("div",[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),alt:""}})]):e("div",{staticClass:"user-image"},[t._v("\n                    "+t._s(n.username.charAt(0).toUpperCase())+"\n                  ")])]),t._v(" "),e("td",[e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(n._id)}},[t._v(t._s(n.username))]),t._v(" "),e("nuxt-link",{attrs:{to:"/admin/transactions/".concat(n._id)}},[e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/deposit.svg",loading:"lazy",alt:""}})])])],1),t._v(" "),e("td",t._l(n.referrals,(function(n,c){return e("div",{key:c},[t._v("\n                    "+t._s(n.username)+"\n                  ")])})),0),t._v(" "),e("td",t._l(n.referrals,(function(n,c){return e("div",{key:c},[t._v("\n                    "+t._s(t.formatDate(n.regDate))+"\n                  ")])})),0),t._v(" "),e("td",[t._v(t._s(t.formatMoney(n.commission)))])])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.itemLength)+"\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n            "+t._s(t.pages().length)+"\n          ")]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages(),(function(n,c){return e("li",{key:c,staticClass:"pagination-item",on:{click:function(e){return t.paginate(c+1)}}},[e("div",[t._v(t._s(c+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),e("div",{staticClass:"table-actions"},[e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:t.bulkSelection}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/admin-images/bulk-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Send Email")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to send  ".concat(t.selectedEmailName," email to the selected users?"))}}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/admin-images/emails.svg",loading:"lazy",alt:""}})])])]),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n          "+t._s(t.response)+"\n        ")]):t._e()]),t._v(" "),e("Instruction")],1),t._v(" "),e("AdminFooter")],1)],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Referrals")]),t._v(" "),e("td",[t._v("Date Registered")]),t._v(" "),e("td",[t._v("Total Commission")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(351).default,AdminNavigation:n(354).default,AdminTopHeader:n(355).default,AdminFooter:n(353).default})}}]);