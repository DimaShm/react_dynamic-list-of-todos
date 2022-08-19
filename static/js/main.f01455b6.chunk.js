(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),r=function(e){var t=e.todos,c=e.setSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},o=function(e){var t=e.filter,c=e.setFilter,s=e.query,a=e.setQuery,n=e.applyQuery;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value),n(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a(""),n("")}})})]})]})},d=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),r=a[0],o=a[1],u=Object(l.useState)(!0),b=Object(n.a)(u,2),h=b[0],m=b[1];return Object(l.useEffect)((function(){var e;t&&(e=t.userId,j("/users/".concat(e))).then((function(e){return o(e)}))}),[t]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[h&&Object(i.jsx)("div",{className:"modal-background"}),r?h&&Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){m(!1),c()}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:r.email,children:r.name})]})]})]}):Object(i.jsx)(d,{})]})},b=function(){var e=Object(l.useState)(null),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),b=Object(n.a)(a,2),h=b[0],m=b[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)(""),N=Object(n.a)(p,2),y=N[0],g=N[1],k=Object(l.useState)(!1),S=Object(n.a)(k,2),w=S[0],T=S[1],C=Object(l.useState)(""),_=Object(n.a)(C,2),E=_[0],L=_[1],Q=Object(l.useCallback)(function(e,t){var c;return function(){var s;clearTimeout(c);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];c=(s=window).setTimeout.apply(s,[e,t].concat(n))}}(L,1e3),[]);Object(l.useEffect)((function(){j("/todos").then((function(e){return s(e)}))}),[]);var A=function(){var e=function(){if(c)switch(f){case"all":default:break;case"active":return c.filter((function(e){return!1===e.completed}));case"completed":return c.filter((function(e){return!0===e.completed}))}return c}();return e?e.filter((function(e){return e.title.toLowerCase().includes(E.toLowerCase())})):e};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("button",{type:"button",className:"button is-warning subtitle",onClick:function(){return T(!w)},children:"Randomize"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(o,{filter:f,setFilter:v,query:y,setQuery:function(e){g(e)},applyQuery:Q})}),Object(i.jsxs)("div",{className:"block",children:[!c&&Object(i.jsx)(d,{}),Object(i.jsx)(r,{todos:w?function(){var e=A();if(e)for(var t,c,s=e.length-1;s>0;s-=1)c=e[t=Math.floor(Math.random()*(s+1))],e[t]=e[s],e[s]=c;return e}():A(),setSelectedTodo:m})]})]})})}),h&&Object(i.jsx)(u,{selectedTodo:h,setSelectedTodo:function(){return m(null)}})]})};a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f01455b6.chunk.js.map