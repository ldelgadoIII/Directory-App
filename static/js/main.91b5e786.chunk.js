(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{25:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s.n(r),n=s(13),c=s.n(n),i=(s(24),s(25),s(4)),o=s.n(i),l=s(14),h=s(15),d=s(16),m=s(19),u=s(18),j=s(17),b=s.n(j),p=(s(45),s(0)),f=function(e){var t=e.children,s=e.byFirst,r=e.byLast,a=e.stateFirst,n=e.stateLast;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("table",{class:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Image"}),Object(p.jsxs)("th",{scope:"col",children:["First Name",Object(p.jsx)("i",{class:a?"bi bi-caret-down-fill":"bi bi-caret-up-fill",onClick:s})]}),Object(p.jsxs)("th",{scope:"col",children:["Last Name",Object(p.jsx)("i",{class:n?"bi bi-caret-down-fill":"bi bi-caret-up-fill",onClick:r})]}),Object(p.jsx)("th",{scope:"col",children:"Phone"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(p.jsx)("tbody",{children:t})]})})},O=(s(47),function(e){var t=e.id,s=e.image,r=e.first,a=e.last,n=e.phone,c=e.email,i=e.dob;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:Object(p.jsx)("img",{src:s,alt:"thumbnail"})}),Object(p.jsx)("td",{children:r}),Object(p.jsx)("td",{children:a}),Object(p.jsx)("td",{children:n}),Object(p.jsx)("td",{children:c}),Object(p.jsx)("td",{children:i})]},t)}),x=(s(48),function(){return Object(p.jsx)("div",{class:"jumbotron text-center",children:Object(p.jsxs)("h1",{class:"display-4",children:[Object(p.jsx)("i",{class:"bi bi-people"}),"Employee Directory"]})})}),v=(s(49),function(e){var t=e.search;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("input",{class:"form-control form-control-lg",type:"text",placeholder:"search",onChange:function(e){return t(e.target.value.toLocaleLowerCase().trim())}})})}),y=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(h.a)(this,s);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={persons:[],search:null,orderFirstName:!0,orderLastName:!0},e.getEmployees=Object(l.a)(o.a.mark((function t(){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://randomuser.me/api/?results=25");case 2:s=t.sent,r=s.data.results,e.setState({persons:r});case 5:case"end":return t.stop()}}),t)}))),e.searchEmployee=function(t){e.setState({search:e.state.persons.filter((function(e){return e.name.first.toLowerCase().includes(t)||e.name.last.toLowerCase().includes(t)}))})},e.organizeByFirst=function(){e.setState({persons:e.state.persons.sort(e.sortName)}),e.setState({orderFirstName:!e.state.orderFirstName})},e.reverseByFirst=function(){e.setState({persons:e.state.persons.sort(e.reverseName)}),e.setState({orderFirstName:!e.state.orderFirstName})},e.organizeByLast=function(){e.setState({persons:e.state.persons.sort(e.sortLastName)}),e.setState({orderLastName:!e.state.orderLastName})},e.reverseByLast=function(){e.setState({persons:e.state.persons.sort(e.reverseLastName)}),e.setState({orderLastName:!e.state.orderLastName})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"sortName",value:function(e,t){var s=e.name.first.charAt(0),r=t.name.first.charAt(0);return s>r?1:s<r?-1:void 0}},{key:"reverseName",value:function(e,t){var s=e.name.first.charAt(0),r=t.name.first.charAt(0);return s>r?-1:s<r?1:void 0}},{key:"sortLastName",value:function(e,t){var s=e.name.last.charAt(0),r=t.name.last.charAt(0);return s>r?1:s<r?-1:void 0}},{key:"reverseLastName",value:function(e,t){var s=e.name.last.charAt(0),r=t.name.last.charAt(0);return s>r?-1:s<r?1:void 0}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(x,{}),Object(p.jsx)(v,{search:this.searchEmployee}),Object(p.jsx)(f,{byFirst:this.state.orderFirstName?this.organizeByFirst:this.reverseByFirst,byLast:this.state.orderLastName?this.organizeByLast:this.reverseByLast,stateFirst:this.state.orderFirstName,stateLast:this.state.orderLastName,children:this.state.search?this.state.search.map((function(e,t){return Object(p.jsx)(O,{id:t,image:e.picture.thumbnail,first:e.name.first,last:e.name.last,phone:e.phone,email:e.email,dob:e.dob.date.substring(0,10)})})):this.state.persons.map((function(e,t){return Object(p.jsx)(O,{id:t,image:e.picture.thumbnail,first:e.name.first,last:e.name.last,phone:e.phone,email:e.email,dob:e.dob.date.substring(0,10)})}))})]})}}]),s}(r.Component);c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.91b5e786.chunk.js.map