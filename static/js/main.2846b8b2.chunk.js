(this["webpackJsonpreact-phonebook-async-redux"]=this["webpackJsonpreact-phonebook-async-redux"]||[]).push([[0],{16:function(e,t,n){e.exports={contact__item:"ContactItem_contact__item__16XEi",contact__text:"ContactItem_contact__text__b5cWT",delete__btn:"ContactItem_delete__btn__IVdMd"}},17:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH",filter__field:"Filter_filter__field__FWY-Z",filter__title:"Filter_filter__title__3xM9A"}},21:function(e,t,n){e.exports={appear:"titleAppearing_appear__MHGyE",appearActive:"titleAppearing_appearActive__2Bv-4",phonebook__title:"titleAppearing_phonebook__title__aiQDW"}},22:function(e,t,n){e.exports={appear:"phonebookAppearing_appear__2TEec",appearActive:"phonebookAppearing_appearActive__3fPuZ"}},24:function(e,t,n){},27:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},28:function(e,t,n){e.exports={enter:"transition_enter__2r5x1",enterActive:"transition_enterActive__2v0qq",exit:"transition_exit__yK9o3",exitActive:"transition_exitActive__R_I7Q"}},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),r=n.n(c),i=n(2),o=n(26),s=n(30),l=n(23),b=n(8),_=n.n(b),u=n(3),m=Object(u.b)("contacts/add"),j=Object(u.b)("contacts/delete"),d=Object(u.b)("contacts/name"),p=Object(u.b)("contacts/number"),O=function(e){return e.contacts.filter},f=function(e){return e.contacts.loginName},h=function(e){return e.contacts.loginNumber},x=function(e){return e.contacts.items},v=function(e){var t=x(e),n=O(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},g=n(1);var N=function(e){var t=e.changeContactsState,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),b=Object(l.a)(s,2),u=b[0],m=b[1],j=Object(i.b)(),O=Object(i.c)(f),x=Object(i.c)(h);return console.log("name: "+O,"number: "+x),Object(g.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),o(""),m("")},action:"#",children:[Object(g.jsxs)("label",{className:_.a.label,htmlFor:"name",children:[Object(g.jsx)("input",{className:_.a.form__field,type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:" ",value:O,onChange:function(e){var t=e.target,n=t.name,a=t.value;"name"===n&&o(a),j(d(a))},required:!0}),Object(g.jsx)("span",{className:_.a.name__label,children:"Name"})]}),Object(g.jsxs)("label",{className:_.a.label,htmlFor:"number",children:[Object(g.jsx)("input",{className:_.a.form__field,type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:" ",value:x,onChange:function(e){var t=e.target,n=t.name,a=t.value;"number"===n&&m(a),j(p(a))},required:!0}),Object(g.jsx)("span",{className:_.a.number__label,children:"Number"})]}),Object(g.jsx)("button",{className:_.a.submit__btn,type:"submit",children:"Add contact"})]})},C=n(16),F=n.n(C);function A(e){var t=e.contact,n=t.name,a=t.number,c=t.id,r=Object(i.b)();return Object(g.jsxs)("li",{className:F.a.contact__item,children:[Object(g.jsxs)("span",{className:F.a.contact__text,children:[n,": ",a]}),Object(g.jsx)("button",{className:F.a.delete__btn,onClick:function(){return function(e){r(j(e))}(c)},children:"Delete"})]},c)}var y=n(27),k=n.n(y),E=n(28),w=n.n(E),L=n(45),I=n(44);function S(){var e=Object(i.c)(v);return Object(g.jsx)(L.a,{component:"ul",className:k.a.list,children:e.map((function(t){return Object(g.jsx)(I.a,{in:e.length>0,timeout:250,classNames:w.a,unmountOnExit:!0,children:Object(g.jsx)(A,{contact:t},t.name)},t.id)}))})}var T=n(17),z=n.n(T),P=Object(u.b)("contacts/updateFilter");function Z(){var e=Object(i.c)(O),t=Object(i.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:z.a.filter,children:[Object(g.jsx)("p",{className:z.a.filter__title,children:"Find contacts by name"}),Object(g.jsx)("input",{className:z.a.filter__field,type:"text",name:"name",value:e,placeholder:"Enter the name...",onChange:function(e){var n=e.target.value;return t(P(n))}})]})})}n(24);var q=n(21),B=n.n(q),D=n(22),J=n.n(D);function M(){var e=Object(i.c)(x),t=Object(i.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"phonebook__container",children:[Object(g.jsx)(I.a,{in:!0,appear:!0,timeout:500,classNames:B.a,unmountOnExit:!0,children:Object(g.jsx)("h1",{className:"phonebook__title",children:"Phonebook"})}),Object(g.jsx)(I.a,{in:!0,appear:!0,timeout:500,classNames:J.a,unmountOnExit:!0,children:Object(g.jsx)(N,{changeContactsState:function(n){var a=n.name,c=n.number;if(e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts list!"));t(m({id:Object(s.a)(),name:a,number:c}))}})}),Object(g.jsx)(I.a,{in:!0,appear:!0,timeout:500,classNames:B.a,unmountOnExit:!0,children:Object(g.jsx)("h2",{className:"contacts__title",children:"Contacts"})}),Object(g.jsx)(I.a,{in:!0,appear:!0,timeout:500,classNames:J.a,unmountOnExit:!0,children:Object(g.jsx)(Z,{})}),Object(g.jsx)(S,{})]})})}var H,Q=n(15),W=n(4),G=n(9),K=n(29),V=n.n(K),X=n(7),Y=Object(u.c)([],(H={},Object(X.a)(H,m,(function(e,t){var n=t.payload;return[].concat(Object(Q.a)(e),[n])})),Object(X.a)(H,j,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),H)),R=Object(u.c)("",Object(X.a)({},d,(function(e,t){return t.payload}))),U=Object(u.c)("",Object(X.a)({},p,(function(e,t){return t.payload}))),$=Y,ee=Object(u.c)("",Object(X.a)({},P,(function(e,t){return t.payload}))),te={key:"contacts",storage:V.a},ne=Object(Q.a)(Object(u.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),ae=Object(W.b)({items:$,filter:ee,loginName:R,loginNumber:U}),ce=Object(u.a)({reducer:{contacts:Object(G.g)(te,ae)},middleware:ne,devTools:!1}),re=Object(G.h)(ce),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(g.jsx)(i.a,{store:ce,children:Object(g.jsx)(o.a,{loading:null,persistor:re,children:Object(g.jsx)(M,{})})}),document.getElementById("root")),ie()},8:function(e,t,n){e.exports={form:"ContactForm_form__1NiH1",submit__btn:"ContactForm_submit__btn__eF7FL",name__label:"ContactForm_name__label__Ygtj5",number__label:"ContactForm_number__label__2UXJd",form__field:"ContactForm_form__field__3Q27b",label:"ContactForm_label__3KgVy"}}},[[43,1,2]]]);
//# sourceMappingURL=main.2846b8b2.chunk.js.map