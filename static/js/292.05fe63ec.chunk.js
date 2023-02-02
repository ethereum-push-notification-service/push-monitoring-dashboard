"use strict";(self.webpackChunkepns_analytics_dashboard=self.webpackChunkepns_analytics_dashboard||[]).push([[292],{4319:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),i=t(5987),a=t(2711),s=t(4554),o=t(184),c=["icon","sx"];var l=function(e){var n=e.icon,t=e.sx,l=(0,i.Z)(e,c);return(0,o.jsx)(s.Z,(0,r.Z)({component:a.JO,icon:n,sx:(0,r.Z)({},t)},l))}},1491:function(e,n,t){t.d(n,{Z:function(){return ee}});var r=t(1413),i=t(885),a=t(5987),s=t(6907),o=t(2791),c=t(4554),l=t(3400),d=t(3044),h=t(4319),u={displayName:"Showrunners Analytics",email:"admin@epns.io",photoURL:"/static/mock-images/avatars/avatar_default.jpg"},x=t(3504),p=t(184);var f=function(e){var n=e.disabledLink,t=void 0!==n&&n,i=e.sx,a=e.src,s=void 0===a?"/static/epns.png":a,o=(0,p.jsx)(c.Z,{component:"img",src:s,sx:(0,r.Z)({width:40,height:40},i)});return t?(0,p.jsx)(p.Fragment,{children:o}):(0,p.jsx)(x.rU,{to:"/",children:o})},Z=t(4942),g=t(6934),m=t(4395),b=t(4663),j=t(2627),v=t(7064),y=(0,g.ZP)(m.Z)((function(e){var n=e.theme;return(0,Z.Z)({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:"white"},n.breakpoints.up("lg"),{width:"calc(100% - ".concat(281,"px)")})})),w=(0,g.ZP)(b.Z)((function(e){var n=e.theme;return(0,Z.Z)({minHeight:64},n.breakpoints.up("lg"),{minHeight:92,padding:n.spacing(0,5)})})),k=(0,g.ZP)("div")((function(e){var n=e.theme;return(0,Z.Z)({},n.breakpoints.up("lg"),{flexShrink:0,width:280})})),S=(0,g.ZP)("div")((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(2,2.5),borderRadius:1.5*Number(n.shape.borderRadius),backgroundColor:n.palette.grey[50012]}})),C=(0,g.ZP)((function(e){return(0,p.jsx)(j.Z,(0,r.Z)({disableGutters:!0},e))}))((function(e){var n=e.theme;return(0,r.Z)((0,r.Z)({},n.typography.body2),{},{height:48,position:"relative",textTransform:"capitalize",color:n.palette.text.secondary,borderRadius:n.shape.borderRadius})})),P=(0,g.ZP)(v.Z)({width:22,height:22,color:"inherit",display:"flex",alignItems:"center",justifyContent:"center"}),R=function(e){var n=e.onOpenSidebar;return(0,p.jsx)(y,{children:(0,p.jsxs)(w,{children:[(0,p.jsx)(l.Z,{onClick:n,sx:{mr:1,color:"text.primary",display:{lg:"none"}},children:(0,p.jsx)(h.Z,{icon:"eva:menu-2-fill"})}),(0,p.jsx)(f,{src:"/static/home-logo.svg",sx:{width:140,height:120}}),(0,p.jsx)(c.Z,{sx:{flexGrow:1}}),(0,p.jsx)(l.Z,{sx:{p:0},children:(0,p.jsx)(d.Z,{src:u.photoURL,alt:"photoURL"})})]})})},N=t(6871),T=t(533),E=t(890),O=t(9953),L=t(3967),U=t(5193);var A=t(2065),D=t(4358),H=(0,g.ZP)("div")((function(){return{flexGrow:1,height:"100%",overflow:"hidden"}})),_=(0,g.ZP)(D.Z)((function(e){var n=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,A.Fq)(n.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}})),I=["children","sx"];var W=function(e){var n=e.children,t=e.sx,i=(0,a.Z)(e,I),s="undefined"===typeof navigator?"SSR":navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s)?(0,p.jsx)(c.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({overflowX:"auto"},t)},i),{},{children:n})):(0,p.jsx)(H,{children:(0,p.jsx)(_,(0,r.Z)((0,r.Z)({timeout:500,clickOnTrack:!1,sx:t},i),{},{children:n}))})},B=t(9900),F=t(6125),M=t(493),G=["navConfig"];function q(e){var n=e.item,t=e.active,a=(0,L.Z)(),s=t(n.path),l=n.title,d=n.path,u=n.icon,f=n.info,Z=n.children,g=(0,o.useState)(s),m=(0,i.Z)(g,2),b=m[0],j=m[1],v={color:"primary.main",fontWeight:"fontWeightMedium",bgcolor:(0,A.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},y={color:"text.primary",fontWeight:"fontWeightMedium"};return Z?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(C,{onClick:function(){j((function(e){return!e}))},sx:(0,r.Z)({},s&&v),children:[(0,p.jsx)(P,{children:u&&u}),(0,p.jsx)(B.Z,{disableTypography:!0,primary:l}),f&&f,(0,p.jsx)(h.Z,{icon:b?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",sx:{width:16,height:16,ml:1,mb:5}})]}),(0,p.jsx)(F.Z,{in:b,timeout:"auto",unmountOnExit:!0,children:(0,p.jsx)(M.Z,{component:"div",disablePadding:!0,children:Z.map((function(e){var n=e.title,i=e.path,a=t(i);return(0,p.jsxs)(C,{component:x.OL,to:i,sx:(0,r.Z)({},a&&y),children:[(0,p.jsx)(P,{children:(0,p.jsx)(c.Z,{component:"span",sx:(0,r.Z)({width:4,height:4,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",bgcolor:"text.disabled",transition:function(e){return e.transitions.create("transform")}},a&&{transform:"scale(2)",bgcolor:"primary.main"})})}),(0,p.jsx)(B.Z,{disableTypography:!0,primary:n})]},n)}))})})]}):(0,p.jsxs)(C,{component:x.OL,to:d,sx:(0,r.Z)((0,r.Z)({},s&&v),{},{mb:1}),children:[(0,p.jsx)(P,{children:u&&u}),(0,p.jsx)(B.Z,{disableTypography:!0,primary:l}),f&&f]})}var z=function(e){var n=e.navConfig,t=(0,a.Z)(e,G),i=(0,N.TH)().pathname,s=function(e){return!!e&&!!(0,N.LX)({path:e,end:!1},i)};return(0,p.jsx)(c.Z,(0,r.Z)((0,r.Z)({},t),{},{children:(0,p.jsx)(M.Z,{disablePadding:!0,sx:{p:1},children:n.map((function(e){return(0,p.jsx)(q,{item:e,active:s},e.title)}))})}))};function Y(e){var n=e.isOpenSidebar,t=e.onCloseSidebar,r=(0,N.TH)().pathname,i=function(e,n,t,r){var i=(0,L.Z)(),a=(0,U.Z)(i.breakpoints.up(n)),s=(0,U.Z)(i.breakpoints.down(n)),o=(0,U.Z)(i.breakpoints.between(t,r)),c=(0,U.Z)(i.breakpoints.only(n));return"up"===e?a:"down"===e?s:"between"===e?o:"only"===e?c:null}("up","lg");(0,o.useEffect)((function(){n&&t()}),[r]);var a=(0,p.jsxs)(W,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[(0,p.jsx)(c.Z,{sx:{px:2.5,py:3,display:"inline-flex"},children:(0,p.jsx)(f,{})}),(0,p.jsx)(c.Z,{sx:{mb:5,mx:2.5},children:(0,p.jsx)(T.Z,{underline:"none",component:x.rU,to:"#",children:(0,p.jsxs)(S,{children:[(0,p.jsx)(d.Z,{src:u.photoURL,alt:"photoURL"}),(0,p.jsxs)(c.Z,{sx:{ml:2},children:[(0,p.jsx)(E.Z,{variant:"subtitle2",sx:{color:"text.primary"},children:u.displayName}),(0,p.jsx)(E.Z,{variant:"body2",sx:{color:"text.secondary"},children:u.role})]})]})})}),(0,p.jsx)(z,{navConfig:K}),(0,p.jsx)(c.Z,{sx:{flexGrow:1}})]});return(0,p.jsxs)(k,{children:[!i&&(0,p.jsx)(O.ZP,{open:n,onClose:t,PaperProps:{sx:{width:280}},children:a}),i&&(0,p.jsx)(O.ZP,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default",borderRightStyle:"dashed"}},children:a})]})}var J=t(3585),X=function(e){return(0,p.jsx)(h.Z,{icon:e,width:22,height:22})},K=[{title:"dashboard",path:J.Z.HOME,icon:X("eva:pie-chart-2-fill")},{title:"health",path:J.Z.HEALTH,icon:X("healthicons:health")}],$=(0,g.ZP)("div")((function(e){var n=e.theme;return(0,Z.Z)({flexGrow:1,overflow:"auto",minHeight:"100%",paddingTop:88,paddingBottom:n.spacing(10)},n.breakpoints.up("lg"),{paddingTop:116,paddingLeft:n.spacing(2),paddingRight:n.spacing(2)})})),Q=(0,g.ZP)("div")({display:"flex",minHeight:"100%",overflow:"hidden",background:"white"}),V=["children","title","meta"],ee=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.title,d=void 0===l?"":l,h=e.meta,u=(0,a.Z)(e,V),x=(0,o.useState)(!1),f=(0,i.Z)(x,2),Z=f[0],g=f[1];return(0,p.jsxs)(c.Z,{children:[(0,p.jsxs)(s.ql,{children:[(0,p.jsx)("title",{children:"".concat(d," | EPNS")}),h]}),(0,p.jsxs)(Q,{children:[(0,p.jsx)(R,{onOpenSidebar:function(){return g(!0)}}),(0,p.jsx)(Y,{isOpenSidebar:Z,onCloseSidebar:function(){return g(!1)}}),(0,p.jsx)($,{children:(0,p.jsx)(c.Z,(0,r.Z)((0,r.Z)({ref:n},u),{},{children:t}))})]})]})}))},2292:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(4165),i=t(1413),a=t(5861),s=t(2982),o=t(885),c=t(2791),l=t(2426),d=t.n(l),h=t(4569),u=t.n(h),x=t(8491),p=t(1614),f=t(1889),Z=t(890),g=t(4530),m=t(9964),b=t(3239),j=t(4554),v=t(9836),y=t(3382),w=t(3994),k=t(9281),S=t(6890),C=t(5855),P=t(703),R=t(184),N=function(e){return d()(e).format("hh:mm:ss a")};function T(e){var n=e.data;return(0,R.jsx)(k.Z,{component:P.Z,children:(0,R.jsxs)(v.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,R.jsx)(S.Z,{children:(0,R.jsxs)(C.Z,{children:[(0,R.jsx)(w.Z,{children:"Channel Name"}),(0,R.jsx)(w.Z,{align:"right",children:"Notification Sent"}),(0,R.jsx)(w.Z,{align:"right",children:"Notification Failed"}),(0,R.jsx)(w.Z,{align:"right",children:"Job Time Start"}),(0,R.jsx)(w.Z,{align:"right",children:"Job Time End"})]})}),(0,R.jsx)(y.Z,{children:n.map((function(e){return(0,R.jsxs)(C.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,R.jsx)(w.Z,{component:"th",scope:"row",children:e.channelName}),(0,R.jsx)(w.Z,{align:"right",children:e.sentNotificationCount}),(0,R.jsx)(w.Z,{align:"right",children:e.failedNotificationCount}),(0,R.jsx)(w.Z,{align:"right",children:N(e.startedAt)}),(0,R.jsx)(w.Z,{align:"right",children:N(e.endedAt)})]},JSON.stringify(e))}))})]})})}var E=t(1491),O=t(4925),L=t(7865),U=t(6362),A=t(6869),D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,i,a,s,o,c,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.chain,i=n.startDate,a=void 0===i?new Date("2021-01-01"):i,s=n.endDate,o=void 0===s?new Date("2023-01-01"):s,c=n.channel,l=void 0===c?"All":c,e.prev=1,e.next=4,u().get("".concat(x.Z.BACKEND_URL,"/analytics/subscriber"),{params:{startDate:a,endDate:o,channel:l,source:t}});case 4:return d=e.sent,e.abrupt("return",d.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("Error occured in subscribers",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),H=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,i,a,o,c,l,d,h,u,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({chain:n});case 2:t=e.sent,i=t.subscriberAnalytics,a=t.channelDetails,o={},c=[],l=0;case 8:if(!(l<i.length)){e.next=22;break}e.t0=(0,r.Z)().keys(i[l]);case 10:if((e.t1=e.t0()).done){e.next=19;break}if("date"!==(d=e.t1.value)){e.next=16;break}return e.abrupt("continue",10);case 16:o[d]||(o[d]=0),o[d]+=i[l][d].subscriber;case 17:e.next=10;break;case 19:l++,e.next=8;break;case 22:for(h in o)u=a[h].name,c.push(u);return x=(0,s.Z)(new Set(c.map((function(e){return e.toLowerCase()})))),e.abrupt("return",x);case 25:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(x.Z.SOURCES.map(H));case 2:return n=e.sent,e.abrupt("return",(0,s.Z)(new Set(n.flat())));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=(t(9286),t(3496),t(763)),W=t(6098),B=t.n(W);t(8613);var F=t(6934),M=((0,F.ZP)("div")((function(e){var n=e.theme;return{height:372,marginTop:n.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(n.palette.divider),top:"calc(".concat(300,"px) !important")}}})),(0,F.ZP)("div")((function(e){var n=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:n.spacing(8),height:n.spacing(8),justifyContent:"center",marginBottom:n.spacing(3)}})));var G=t(5987),q=t(2065),z=t(7621),Y=t(4319),J=["title","total","icon","color","sx"];function X(e){var n,t=e.title,r=e.total,a=e.icon,s=e.color,o=void 0===s?"primary":s,c=e.sx,l=(0,G.Z)(e,J);return(0,R.jsxs)(z.Z,(0,i.Z)((0,i.Z)({sx:(0,i.Z)({py:5,boxShadow:0,textAlign:"center",color:function(e){return e.palette[o].darker},bgcolor:function(e){return e.palette[o].lighter}},c)},l),{},{children:[(0,R.jsx)(M,{sx:{color:function(e){return e.palette[o].dark},backgroundImage:function(e){return"linear-gradient(135deg, ".concat((0,q.Fq)(e.palette[o].dark,0)," 0%, ").concat((0,q.Fq)(e.palette[o].dark,.24)," 100%)")}},children:(0,R.jsx)(Y.Z,{icon:a,width:24,height:24})}),(0,R.jsx)(Z.Z,{variant:"h3",children:(n=r,(0,I.replace)(B()(n).format("0.00a"),".00",""))}),(0,R.jsx)(Z.Z,{variant:"subtitle2",sx:{opacity:.72},children:t})]}))}var K={totalChannels:0,triggeredChannels:0,totalNotifications:0},$=function(){var e=(0,c.useState)(d()(new Date).format("YYYY-MM-DD")),n=(0,o.Z)(e,2),t=n[0],l=n[1],h=(0,c.useState)([]),v=(0,o.Z)(h,2),y=v[0],w=v[1],k=(0,c.useState)(!1),S=(0,o.Z)(k,2),C=S[0],P=S[1],N=(0,c.useState)(K),D=(0,o.Z)(N,2),H=D[0],I=D[1],W=(0,c.useState)(!1),B=(0,o.Z)(W,2),F=B[0],M=B[1],G=(0,c.useState)(null),q=(0,o.Z)(G,2),z=q[0],Y=q[1],J=(0,c.useState)([]),$=(0,o.Z)(J,2),Q=$[0],V=$[1];return(0,c.useEffect)((function(){var e=1e3*+d()(t).startOf("day").format("X"),n=1e3*+d()(t).endOf("day").format("X");P(!1),M(!0),u().post("".concat(x.Z.SHOWRUNNERS_URL,"/analytics/querylog"),{filter:{startedAt:{$gte:e,$lte:n}}}).then((function(e){var n=e.data;w(n)})).finally((function(){P(!0),M(!1)}))}),[t]),(0,c.useEffect)((function(){console.log({data:y});var e=(0,s.Z)(new Set(y.map((function(e){return e.channelAddress})))),n=y.reduce((function(e,n){return e+n.sentNotificationCount}),0);V((0,s.Z)(new Set(y.map((function(e){return e.channelName}))))),I({totalChannels:0,triggeredChannels:e.length,totalNotifications:n})}),[y,C]),(0,c.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,I((function(e){return(0,i.Z)((0,i.Z)({},e),{},{totalChannels:n.length})}));case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,R.jsxs)(E.Z,{title:"Dashboard",children:[(0,R.jsx)(m.Z,{sx:{color:"#fff",background:"rgba(0,0,0,0.85);",zIndex:function(e){return e.zIndex.drawer+1}},open:F,children:(0,R.jsx)(j.Z,{sx:{display:"flex"},children:(0,R.jsx)(b.Z,{})})}),(0,R.jsxs)(p.Z,{maxWidth:"xl",children:[(0,R.jsxs)(f.ZP,{container:!0,spacing:3,sx:{mt:1,mb:7},children:[(0,R.jsx)(f.ZP,{item:!0,xs:9,children:(0,R.jsx)(Z.Z,{variant:"h4",children:"Daily Stats"})}),(0,R.jsx)(f.ZP,{item:!0,xs:3,children:(0,R.jsx)(g.Z,{id:"date",label:"date filter",value:t,type:"date",sx:{width:220},InputLabelProps:{shrink:!0},onChange:function(e){return l(e.target.value)}})})]}),(0,R.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,R.jsx)(X,{title:"Total Notification(s) Sent",total:H.totalNotifications,icon:"ant-design:bell-filled"})}),(0,R.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,R.jsx)(X,{title:"Channel(s) triggered",total:H.triggeredChannels,color:"warning",icon:"ant-design:bell-filled"})}),(0,R.jsx)(f.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,R.jsx)(X,{title:"Total Channels",total:H.totalChannels,color:"error",icon:"ant-design:user-outlined"})})]}),(0,R.jsxs)(f.ZP,{container:!0,children:[(0,R.jsxs)(f.ZP,{container:!0,spacing:3,sx:{mt:9,mb:2},children:[(0,R.jsx)(f.ZP,{item:!0,xs:9,children:(0,R.jsx)(Z.Z,{variant:"h4",children:"Channel Breakdown"})}),(0,R.jsx)(f.ZP,{item:!0,xs:3,children:(0,R.jsx)(j.Z,{sx:{minWidth:120},children:(0,R.jsxs)(U.Z,{fullWidth:!0,children:[(0,R.jsx)(O.Z,{id:"demo-simple-select-label",children:"Channel"}),(0,R.jsx)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:z,label:"Channel",onChange:function(e){Y(e.target.value)},children:Q.map((function(e,n){return(0,R.jsx)(L.Z,{value:e,children:e},n)}))})]})})})]}),(0,R.jsx)(f.ZP,{item:!0,sx:{mt:4},xs:12,md:12,lg:12,children:(0,R.jsx)(T,{data:z?y.filter((function(e){return e.channelName===z})):y})})]})]})]})}},8491:function(e,n){n.Z={BACKEND_URL:"https://backend-staging.epns.io/apis/v1",SHOWRUNNERS_URL:"https://showrunners-staging.epns.io/apis/showrunners",SOURCES:["ETH_TEST_GOERLI","POLYGON_TEST_MUMBAI","THE_GRAPH","BSC_TESTNET"]}}}]);
//# sourceMappingURL=292.05fe63ec.chunk.js.map