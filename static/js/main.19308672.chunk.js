(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(2),i=c(1),l=(c(15),c(16),c(17),c(3)),r=c.n(l),o=c(0),d=function(e){var t=e.postsFromServer,c=e.onSelectedPost,a=e.selectedPost;return Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button is-link",{"is-light":(null===a||void 0===a?void 0:a.id)!==e.id}),onClick:function(){return function(e){(null===a||void 0===a?void 0:a.id)!==e.id?c(e):c(null)}(e)},children:(null===a||void 0===a?void 0:a.id)===e.id?"Close":"Open"})})]},e.id)}))})]})]})},j=c(10),m=(c(19),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),b=c(5),u=c(4),h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return c&&(a.body=JSON.stringify(c),a.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,a)})).then((function(e){return e.json()}))}var f=function(e){return x(e)},p=function(e,t){return x(e,"POST",t)},N=function(e){return x(e,"DELETE")},y=function(e){var t=e.currentPost,c=e.onAddComment,a=e.handleFormVisibility,s=Object(i.useState)({name:"",email:"",body:""}),l=Object(n.a)(s,2),d=l[0],j=l[1],m=Object(i.useState)({name:!1,email:!1,body:!1}),h=Object(n.a)(m,2),O=h[0],x=h[1],f=Object(i.useState)(!1),N=Object(n.a)(f,2),y=N[0],v=N[1],g=Object(i.useState)(!1),S=Object(n.a)(g,2),C=S[0],P=S[1],k=function(e,t){j((function(c){return Object(u.a)(Object(u.a)({},c),{},Object(b.a)({},e,t))})),x((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(b.a)({},e,!1))}))},w=function(e){var t={};for(var c in e)t[c]="";a()};return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){var a;e.preventDefault(),Object.entries(d).forEach((function(e){var t=Object(n.a)(e,2),c=t[0];t[1].trim()?x((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},c,!1))})):x((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},c,!0))}))})),d.name&&d.email&&d.body&&(P(!0),(a={postId:t.id,name:d.name,email:d.name,body:d.body},p("/comments",a)).then((function(e){c(e)})).catch((function(){v(!0)})).finally((function(){P(!1),w(d)})))},children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":O.name}),value:d.name,onChange:function(e){k("name",e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),O.name&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.name&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":O.email}),value:d.email,onChange:function(e){k("email",e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),O.email&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),O.email&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":O.body}),value:d.body,onChange:function(e){k("body",e.target.value)}})}),O.body&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:r()("button is-link",{"is-loading":C}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){w(d)},children:"Clear"})}),y&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Unable to add comment, try again."})]})]})},v=function(e){var t=e.currentPost,c=Object(i.useState)([]),a=Object(n.a)(c,2),s=a[0],l=a[1],r=Object(i.useState)(!1),d=Object(n.a)(r,2),b=d[0],u=d[1],h=Object(i.useState)(!1),O=Object(n.a)(h,2),x=O[0],p=O[1],v=Object(i.useState)(!1),g=Object(n.a)(v,2),S=g[0],C=g[1],P=Object(i.useState)(!1),k=Object(n.a)(P,2),w=k[0],E=k[1];Object(i.useEffect)((function(){var e;u(!0),(e=t.id,f("/comments?postId=".concat(e))).then(l).catch((function(){p(!0)})).finally((function(){u(!1)}))}),[t]);var F=function(e){var t;C(!1),(t=e,N("/comments/".concat(t))).then((function(){l((function(t){return t.filter((function(t){return t.id!==e}))}))})).catch((function(){C(!0)}))};return Object(o.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(o.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(o.jsxs)("div",{className:"block",children:[b&&Object(o.jsx)(m,{}),x&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!s.length&&Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!!s.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:misha@mate.academy","data-cy":"CommentAuthor",children:e.name}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return F(e.id)},children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),S&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Unable to add comment, try again."}),!w&&Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return E(!0)},children:"Write a comment"})]}),w&&Object(o.jsx)(y,{currentPost:t,handleFormVisibility:function(){E(!1)},onAddComment:function(e){l([].concat(Object(j.a)(s),[e]))}})]})})},g=function(e){var t=e.usersFromServer,c=e.onDropdown,a=e.onUserClick,s=e.isVisibleUsers,n=e.selectedUser;return Object(o.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:c,children:[null===n?Object(o.jsx)("span",{children:"Choose a user"}):Object(o.jsx)("span",{children:n.name}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),s&&Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(o.jsx)("a",{href:"#user-".concat(e.id),className:r()("dropdown-item",{"is-active":(null===n||void 0===n?void 0:n.id)===e.id}),onClick:function(){return a(e)},children:e.name},e.id)}))})})]})},S=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),l=Object(n.a)(s,2),j=l[0],b=l[1],u=Object(i.useState)(!1),h=Object(n.a)(u,2),O=h[0],x=h[1],p=Object(i.useState)(null),N=Object(n.a)(p,2),y=N[0],S=N[1],C=Object(i.useState)(null),P=Object(n.a)(C,2),k=P[0],w=P[1],E=Object(i.useState)(!1),F=Object(n.a)(E,2),T=F[0],U=F[1],D=Object(i.useState)(!1),I=Object(n.a)(D,2),M=I[0],A=I[1];Object(i.useEffect)((function(){f("/users").then(a)}),[]);return Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(g,{usersFromServer:c,onUserClick:function(e){var t;x(!1),U(!0),w(e),S(null),(t=e.id,f("/posts?userId=".concat(t))).then(b).catch((function(){A(!0)})).finally((function(){U(!1)}))},onDropdown:function(){x(!O)},isVisibleUsers:O,selectedUser:k})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!k&&Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),T&&Object(o.jsx)(m,{}),M&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!j.length&&k&&!T&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),j.length>0&&k&&!M&&Object(o.jsx)(d,{postsFromServer:j,onSelectedPost:S,selectedPost:y})]})]})}),Object(o.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":y}),children:Object(o.jsx)("div",{className:"tile is-child box is-success ",children:y&&Object(o.jsx)(v,{currentPost:y})})})]})})})};s.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.19308672.chunk.js.map