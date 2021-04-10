(this["webpackJsonpgoogle-calendar-hours"]=this["webpackJsonpgoogle-calendar-hours"]||[]).push([[0],{18:function(e,t,a){e.exports={list:"Events_list__3uAhA",listItem:"Events_listItem__2dyHI",eventDate:"Events_eventDate__1FH8S",eventName:"Events_eventName__hBqYC",eventHours:"Events_eventHours__2bIBe",sortByLabel:"Events_sortByLabel__1oEr6",downloadLink:"Events_downloadLink__g8EJ3"}},21:function(e,t,a){e.exports={appWrapper:"App_appWrapper__3rnam",app:"App_app__1kX79",sticky:"App_sticky__1Ko52",content:"App_content__3La4L",headline:"App_headline__1z0fO",footer:"App_footer__29Fsv"}},31:function(e,t,a){e.exports={component:"CustomRange_component__hBFSg",inputDate:"CustomRange_inputDate__3v021"}},44:function(e,t,a){e.exports=a.p+"static/media/google_auth.75a7cb04.png"},45:function(e,t,a){e.exports={hours:"Hours_hours__2U6LB"}},47:function(e,t,a){e.exports={weekStartLabel:"WeekStart_weekStartLabel__1I0YY"}},48:function(e,t,a){e.exports={interface:"Interface_interface__1pJyE"}},54:function(e,t,a){e.exports=a(68)},63:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(28),o=a.n(c),l=a(4),s=a(75),u=a(51),i=(a(63),a(22)),d=a(12),m=Object(d.b)({name:"authentication",initialState:null,reducers:{}}),p=function(e){return e.authentication.accessToken},v=function(e){return!!p(e)},f=m.reducer,h=a(44),b=a.n(h),g=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"This web app lets you see how many hours you spend on a Google Calendar. It uses the Google Calendar API to fetch your calendars and events, crunches the data and displays it nicely. You can filter by day, week, month, year, total or add a custom time range."),r.a.createElement("p",null,"You need to authorize the app with the following link:"),r.a.createElement("a",{href:function(){var e=Object(i.b)({client_id:"502172359025.apps.googleusercontent.com",redirect_uri:window.location.origin,scope:"https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly",response_type:"token"});return"https://accounts.google.com/o/oauth2/auth?".concat(e)}(),"data-testid":"AuthLink"},r.a.createElement("img",{src:b.a,alt:"Auth with Google",width:"191",height:"46"})),r.a.createElement("h3",null,"Privacy Policy"),r.a.createElement("p",null,"This app connects to the Google Calendar API to fetch your calendars and events, so that it can calculate the hours. This connection happens directly from your browser to the Google API. There are no server or services involved that might cache the data."),r.a.createElement("p",null,"None of the data fetched from the Google Calendar API is saved elsewhere but in your browser. After you close the browser window/tab all authentication data is delete (technical detail: sessionStorage is used). Thats why you need to reauthorize with Google the next time you visit the page."),r.a.createElement("p",null,"This app only has read-only access to your calendar data."))},y=a(2),E=a.n(y),w=a(11),k=a.n(w),O=a(19),S=a(26),_=a(15),j=a(5),N=a.n(j),T=function(){var e=Object(O.a)(k.a.mark((function e(t){var a,n,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.accessToken,r=t.params,e.next=3,fetch("".concat(a,"?").concat(Object(i.b)(Object(_.a)({access_token:n},r))));case 3:if(200===(c=e.sent).status){e.next=8;break}return sessionStorage.removeItem("accessToken"),window.location="/",e.abrupt("return",Promise.reject());case 8:return e.abrupt("return",c.json());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=e.accessToken;return T({url:"".concat("https://www.googleapis.com/calendar/v3/","users/me/calendarList"),accessToken:t})},D=function(){var e=Object(O.a)(k.a.mark((function e(t){var a,n,r,c,o,l,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.accessToken,n=t.calendarId,r=t.pageToken,c=t.acc,e.next=3,T({url:"".concat("https://www.googleapis.com/calendar/v3/","calendars/").concat(n,"/events"),accessToken:a,params:{singleEvents:!0,maxResults:2500,pageToken:r,timeMax:N()().add(1,"year").toJSON()}});case 3:if(o=e.sent,l=o.items,s=o.nextPageToken){e.next=8;break}return e.abrupt("return",[].concat(Object(S.a)(c),Object(S.a)(l)));case 8:return e.abrupt("return",D({accessToken:a,calendarId:n,pageToken:s,acc:[].concat(Object(S.a)(c),Object(S.a)(l))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.accessToken,a=e.calendarId;return D({accessToken:t,calendarId:a,acc:[]})},C=(a(65),Object(d.b)({name:"calendarEvents",initialState:{loading:!1,map:{}},reducers:{setCalendarEvents:function(e,t){var a=t.payload;e.map[a.calendarId]=a.events},setLoading:function(e,t){var a=t.payload;e.loading=a}}})),M=C.actions,x=M.setCalendarEvents,R=M.setLoading,P=function(e,t){var a,n;return null!==(a=null===(n=e.calendarEvents)||void 0===n?void 0:n.map[t])&&void 0!==a?a:null},L=function(e){var t,a;return null!==(t=null===(a=e.calendarEvents)||void 0===a?void 0:a.loading)&&void 0!==t&&t},J=C.reducer,A=function(e){var t;try{t=JSON.parse(window.localStorage.getItem("config"))}catch(n){}var a=Object(_.a)(Object(_.a)({},t),e);window.localStorage.setItem("config",JSON.stringify(a))},H=function(){try{return JSON.parse(window.localStorage.getItem("config"))}catch(e){}return null},F="day",B="week",G="month",W="year",U="total",z="custom",Z="date",q="amount",K="monday",V="sunday",X=Object(d.b)({name:"viewState",initialState:null,reducers:{setSelectedCalendarId:function(e,t){var a=t.payload;e.selectedCalendarId=a},setRangeType:function(e,t){var a=t.payload;e.selectedRangeType=a},changeRange:function(e,t){var a=t.payload;"prev"===a?e.currentDatePointerStart=N()(e.currentDatePointerStart).subtract(1,e.selectedRangeType).toJSON():"next"===a&&(e.currentDatePointerStart=N()(e.currentDatePointerStart).add(1,e.selectedRangeType).toJSON())},resetRange:function(e){e.currentDatePointerStart=N()().startOf("day").toJSON()},setWeekStart:function(e,t){var a=t.payload;e.weekStart=a},setStart:function(e,t){var a=t.payload;e.currentDatePointerStart=a},setEnd:function(e,t){var a=t.payload;e.currentDatePointerEnd=a}}}),Q=X.actions,$=Q.changeRange,ee=Q.resetRange,te=X.actions,ae=te.setSelectedCalendarId,ne=te.setRangeType,re=te.setWeekStart,ce=te.setStart,oe=te.setEnd,le=function(e){return e.viewState.selectedCalendarId},se=function(e){return e.viewState.currentDatePointerStart},ue=function(e){return e.viewState.selectedRangeType},ie=function(e){return e.viewState.weekStart},de=function(e){return e.viewState.weekStart===V?"en":"de"},me=function(e){var t,a,n=e.viewState,r=n.selectedRangeType,c=n.currentDatePointerStart,o=n.currentDatePointerEnd,l=N()(c);return r===z?{start:N()(c),end:N()(o)}:(r===F?a=(t=l.startOf("day")).add(1,"day"):r===B?a=(t=l.locale(de(e)).startOf("day").weekday(0)).add(1,"week"):r===G?a=(t=l.startOf("month")).add(1,"month"):r===W?a=(t=l.startOf("year")).add(1,"year"):r===U&&(t=N()("2000-01-01T10:00:00Z"),a=N()("2040-01-01T10:00:00Z")),{start:t,end:a})},pe=function(e){var t=P(e,le(e));if(!t)return null;var a=me(e),n=a.start,r=a.end;return t.filter((function(e){var t=new Date(e.start.dateTime),a=new Date(e.end.dateTime);return t>n&&a<r}))},ve=function(e){var t=pe(e);if(!t)return null;var a=0;return t.forEach((function(e){var t=new Date(e.start.dateTime),n=new Date(e.end.dateTime);a+=(n-t)/1e3/60/60})),Math.round(100*a)/100},fe=function(e){var t=e.calendarId;return function(e,a){e(ae(t)),A({selectedCalendarId:t}),P(a(),t)||e(function(e){var t=e.calendarId;return function(){var e=Object(O.a)(k.a.mark((function e(a,n){var r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(n()),e.prev=1,a(R(!0)),e.next=5,I({accessToken:r,calendarId:t});case 5:c=e.sent,a(x({calendarId:t,events:c.map((function(e){return{id:e.id,summary:e.summary,start:e.start,end:e.end}}))})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,a(R(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,9,11,14]])})));return function(t,a){return e.apply(this,arguments)}}()}({calendarId:t}))}},he=function(e){return function(t){t(re(e)),A({weekStart:e})}},be=X.reducer,ge=Object(d.b)({name:"calendars",initialState:{list:null},reducers:{setCalendars:function(e,t){var a=t.payload;e.list=a}}}),ye=ge.actions.setCalendars,Ee=function(e){return e.calendars.list},we=ge.reducer,ke=function(){var e=Object(l.b)(),t=Object(l.c)(Ee),a=Object(l.c)(le);return Object(n.useEffect)((function(){t||e(function(){var e=Object(O.a)(k.a.mark((function e(t,a){var n,r,c,o,l,s,u,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(a()),e.prev=1,e.next=4,Y({accessToken:n});case 4:c=e.sent,o=c.items,l=o.map((function(e){return{id:e.id,label:e.summary}})),t(ye(l)),s=null!==(r=H())&&void 0!==r?r:{},(u=s.selectedCalendarId)&&(i=null===l||void 0===l?void 0:l.find((function(e){return e.id===u})),t(fe(i?{calendarId:u}:{calendarId:null}))),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}())}),[e,t]),t?r.a.createElement("select",{"data-testid":"CalendarsList",className:E.a["form-select"],onChange:function(t){e(fe({calendarId:t.target.value}))},value:null!==a&&void 0!==a?a:""},!a&&r.a.createElement("option",{key:"default"},"Please select calendar"),t.map((function(e){var t=e.id,a=e.label;return r.a.createElement("option",{value:t,key:t},a)}))):r.a.createElement("div",null,"loading")},Oe=function(){var e=Object(l.b)(),t=Object(l.c)(ue);return r.a.createElement("select",{"data-testid":"RangeSelectList",className:E.a["form-select"],onChange:function(t){return e(function(e){var t=e.range;return function(e,a){if(t===z){var n=me(a()),r=n.start,c=n.end;e(ce(r.toJSON())),e(oe(c.toJSON())),A({start:r.toJSON(),end:c.toJSON()})}e(ne(t)),A({selectedRangeType:t})}}({range:t.target.value}))},value:t},r.a.createElement("option",{value:"day"},"Day"),r.a.createElement("option",{value:"week"},"Week"),r.a.createElement("option",{value:"month"},"Month"),r.a.createElement("option",{value:"year"},"Year"),r.a.createElement("option",{value:"total"},"Total"),r.a.createElement("option",{value:"custom"},"Custom"))},Se=a(7),_e=a.n(Se),je=function(){var e=Object(l.b)(),t=Object(l.c)(ue);return t===U||t===z?null:r.a.createElement("div",{"data-testid":"RangeChanger",className:E.a["btn-group"],role:"group"},r.a.createElement("button",{type:"button",className:_e()(E.a.btn,E.a["btn-outline-secondary"]),onClick:function(){return e($("prev"))}},"Prev"),r.a.createElement("button",{type:"button",className:_e()(E.a.btn,E.a["btn-outline-secondary"]),onClick:function(){return e(ee())}},"Reset"),r.a.createElement("button",{type:"button",className:_e()(E.a.btn,E.a["btn-outline-secondary"]),onClick:function(){return e($("next"))}},"Next"))},Ne=a(31),Te=a.n(Ne),Ye=function(){var e=Object(l.b)(),t=Object(l.c)(ue),a=Object(l.c)(me),n=a.start,c=a.end;return t!==z?null:r.a.createElement("div",{className:_e()(Te.a.component,E.a["input-group"],E.a["input-group-sm"]),"data-testid":"CustomRange"},r.a.createElement("label",{htmlFor:"dateStart",className:E.a["input-group-text"]},"Start:"),r.a.createElement("input",{className:_e()(E.a["form-control"],Te.a.inputDate),type:"date",id:"dateStart",value:N()(n).format("YYYY-MM-DD"),onChange:function(t){var a=t.target;return e(function(e){return function(t){t(ce(e)),A({start:e})}}(new Date(a.value).toJSON()))}}),r.a.createElement("label",{htmlFor:"dateEnd",className:E.a["input-group-text"]},"End:"),r.a.createElement("input",{className:_e()(E.a["form-control"],Te.a.inputDate),type:"date",id:"dateEnd",value:N()(c).format("YYYY-MM-DD"),onChange:function(t){var a=t.target;return e(function(e){return function(t){t(oe(e)),A({end:e})}}(new Date(a.value).toJSON()))}}))},De=a(45),Ie=a.n(De),Ce=function(){return r.a.createElement("div",{className:Ie.a.hours},"".concat(Object(l.c)(ve),"h"))},Me=function(){var e,t=Object(l.c)(se),a=Object(l.c)(ue),n=Object(l.c)(de);if(a===U)return null;var c=N()(t);if(a===F)e=c.locale("en").format("dddd, MMMM D, YYYY");else if(a===B){var o=c.locale(n).weekday(0),s=o.add(1,"week");e="".concat(o.locale("en").format("DD.MM.YYYY")," -  ").concat(s.locale("en").format("DD.MM.YYYY"))}else a===G?e=c.locale("en").format("MMMM, YYYY"):a===W&&(e=c.locale("en").format("YYYY"));return r.a.createElement("div",{"data-testid":"RangeDisplay"},e)},xe=a(33),Re=a(46),Pe=function(e){var t=new Blob(["\ufeff"+e],{type:"text/csv;charset=UTF-8"});return window.URL.createObjectURL(t)},Le=a(18),Je=a.n(Le),Ae=function(){var e,t=Object(n.useState)(!1),a=Object(xe.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(Z),u=Object(xe.a)(s,2),i=u[0],d=u[1],m=Object(l.c)(le),p=Object(l.c)((function(e){return pe(e)})),v=Object(l.c)(Ee),f=Object(l.c)(se);if(!Object(l.c)(ve))return null;var h,b,g=null===(e=v.find((function(e){return e.id===m})))||void 0===e?void 0:e.label,y=p.map((function(e){var t=new Date(e.start.dateTime),a=(new Date(e.end.dateTime)-t)/1e3/60/60;return Object(_.a)(Object(_.a)({},e),{},{hours:a})}));if(i===q){var w={};y.forEach((function(e){var t=e.summary,a=e.hours;w[t]?w[t]+=a:w[t]=a}));var k=Object.entries(w).map((function(e){var t=Object(xe.a)(e,2),a=t[0];return{summary:a,hours:t[1],id:a}}));y=Object(Re.orderBy)(k,"hours","desc")}else{var O=y.map((function(e){var t=e.start,a=e.end,n=e.summary,r=e.hours;return"".concat(N()(t.dateTime).format("DD.MM.YYYY HH:mm"),",").concat(N()(a.dateTime).format("DD.MM.YYYY HH:mm"),',"').concat(n,'",').concat(r)}));h=Pe(["Start,End,Title,Hours"].concat(O).join("\n")),b="".concat(g,"_").concat(N()(f).locale("en").format("MMMM_YYYY"),"_(").concat(N()().format("YYYYMMDDHHmmss"),").csv")}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:_e()(E.a.btn,E.a["btn-outline-secondary"],E.a["btn-sm"]),onClick:function(){return o(!c)}},c?"hide details":"show details")),c&&r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:Je.a.list},y.map((function(e){return r.a.createElement("li",{key:e.id,className:_e()(E.a.row,Je.a.listItem)},i===Z&&r.a.createElement("span",{className:_e()(Je.a.eventDate,E.a["col-sm"])},N()(e.start.dateTime).format("DD.MM.")),r.a.createElement("span",{className:_e()(E.a["col-sm"],Je.a.eventName),title:e.summary},e.summary),r.a.createElement("span",{className:_e()(E.a["col-sm"],Je.a.eventHours)},"".concat(e.hours,"h")))}))),r.a.createElement("div",null,r.a.createElement("span",{className:Je.a.sortByLabel},"Sort by:"),r.a.createElement("div",{className:_e()(E.a["btn-group"],E.a["btn-group-sm"]),role:"group"},r.a.createElement("input",{className:E.a["btn-check"],type:"radio",value:"date",id:"date",checked:i===Z,onChange:function(e){var t=e.target;return d(t.value)}}),r.a.createElement("label",{className:_e()(E.a.btn,E.a["btn-outline-secondary"]),htmlFor:"date"},"Date"),r.a.createElement("input",{className:E.a["btn-check"],type:"radio",value:"amount",id:"amount",checked:i===q,onChange:function(e){var t=e.target;return d(t.value)}}),r.a.createElement("label",{className:_e()(E.a.btn,E.a["btn-outline-secondary"]),htmlFor:"amount"},"Amount")),h&&r.a.createElement("a",{href:h,download:b,className:_e()(Je.a.downloadLink,E.a.btn,E.a["btn-outline-secondary"],E.a["btn-sm"])},"Export as CSV"))))},He=a(47),Fe=a.n(He),Be=function(){var e=Object(l.b)(),t=Object(l.c)(ue),a=Object(l.c)(ie);return t!==B?null:r.a.createElement("div",null,r.a.createElement("span",{className:Fe.a.weekStartLabel},"Week starts on:"),r.a.createElement("div",{className:_e()(E.a["btn-group"],E.a["btn-group-sm"]),role:"group"},r.a.createElement("input",{className:E.a["btn-check"],type:"radio",value:"sunday",id:"sunday",checked:a===V,onChange:function(t){var a=t.target;return e(he(a.value))}}),r.a.createElement("label",{className:_e()(E.a.btn,E.a["btn-outline-secondary"]),htmlFor:"sunday"},"Sunday"),r.a.createElement("input",{className:E.a["btn-check"],type:"radio",value:"monday",id:"monday",checked:a===K,onChange:function(t){var a=t.target;return e(he(a.value))}}),r.a.createElement("label",{className:_e()(E.a.btn,E.a["btn-outline-secondary"]),htmlFor:"monday"},"Monday")))},Ge=a(48),We=a.n(Ge),Ue=function(){var e=Object(l.c)(le),t=Object(l.c)((function(t){return P(t,e)})),a=Object(l.c)(L);return r.a.createElement("div",{className:We.a.interface},r.a.createElement(ke,null),a&&"loading",t&&r.a.createElement(n.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(je,null),r.a.createElement(Ye,null),r.a.createElement(Ce,null),r.a.createElement(Be,null),r.a.createElement(Me,null),r.a.createElement(Ae,null)))},ze=a(21),Ze=a.n(ze),qe=function(){var e=Object(l.c)(v);return Object(n.useEffect)((function(){var e,t,a,n=Object(i.a)(null!==(e=null===(t=window.location)||void 0===t||null===(a=t.hash)||void 0===a?void 0:a.slice(1))&&void 0!==e?e:"");n.access_token&&(sessionStorage.setItem("accessToken",n.access_token),window.location="/")}),[]),r.a.createElement("div",{className:Ze.a.appWrapper},r.a.createElement("div",{className:Ze.a.app},r.a.createElement("div",{className:Ze.a.sticky},r.a.createElement("div",{className:Ze.a.content},r.a.createElement("h1",{className:Ze.a.headline},"Google Calendar Hours Calculator"),!e&&r.a.createElement(g,null),e&&r.a.createElement(Ue,null)),r.a.createElement("footer",{className:Ze.a.footer},r.a.createElement("p",null,r.a.createElement("span",null,"\xa9 2011 - 2021. This app is open source. "),r.a.createElement("a",{href:"https://github.com/aronwoost/google-calendar-hours",target:"_blank",rel:"noreferrer"},"Check it on GitHub"),r.a.createElement("span",null,"."))))))},Ke=a(49),Ve=a.n(Ke);N.a.extend(Ve.a);var Xe=function(){try{return sessionStorage.getItem("accessToken")}catch(e){}return null},Qe=function(){var e,t,a,n=null!==(e=H())&&void 0!==e?e:{};return{selectedRangeType:null!==(t=n.selectedRangeType)&&void 0!==t?t:G,currentDatePointerStart:n.selectedRangeType===z?n.start:N()().startOf("day").toJSON(),currentDatePointerEnd:n.end,weekStart:null!==(a=n.weekStart)&&void 0!==a?a:K}},$e=function(){return Object(d.a)({reducer:{authentication:f,calendars:we,viewState:be,calendarEvents:J},preloadedState:{authentication:{accessToken:Xe()},viewState:Qe()}})};s.a({dsn:"https://72dc5f435c6c4bf8a7c455a11ad94e89@o566390.ingest.sentry.io/5709198",integrations:[new u.a.BrowserTracing],tracesSampleRate:1}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:$e()},r.a.createElement(qe,null))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9be6f29d.chunk.js.map