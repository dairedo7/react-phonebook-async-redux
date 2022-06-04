(this["webpackJsonpreact-phonebook-async-redux"]=this["webpackJsonpreact-phonebook-async-redux"]||[]).push([[0],{20:function(e,t,n){e.exports={contact__item:"ContactItem_contact__item__16XEi",contact__text:"ContactItem_contact__text__b5cWT",delete__btn:"ContactItem_delete__btn__IVdMd"}},22:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH",filter__field:"Filter_filter__field__FWY-Z",filter__title:"Filter_filter__title__3xM9A"}},27:function(e,t,n){e.exports={appear:"titleAppearing_appear__MHGyE",appearActive:"titleAppearing_appearActive__2Bv-4",phonebook__title:"titleAppearing_phonebook__title__aiQDW"}},38:function(e,t,n){},40:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},41:function(e,t,n){e.exports={enter:"transition_enter__2r5x1",enterActive:"transition_enterActive__2v0qq",exit:"transition_exit__yK9o3",exitActive:"transition_exitActive__R_I7Q"}},42:function(e,t,n){e.exports={appear:"phonebookAppearing_appear__2TEec",appearActive:"phonebookAppearing_appearActive__3fPuZ"}},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),r=n.n(c),i=n(7),o=n(28),s=n(9),l=n.n(s),u=n(1);var _=function(e){var t=e.changeContactsState,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),_=Object(o.a)(s,2),b=_[0],d=_[1],p=function(e){var t=e.target,n=t.name,a=t.value;"name"===n&&i(a),"phone"===n&&d(a)};return Object(u.jsxs)("form",{className:l.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,phone:b}),i(""),d("")},action:"#",children:[Object(u.jsxs)("label",{className:l.a.label,htmlFor:"name",children:[Object(u.jsx)("input",{className:l.a.form__field,type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:" ",value:r,onChange:p,required:!0}),Object(u.jsx)("span",{className:l.a.name__label,children:"Name"})]}),Object(u.jsxs)("label",{className:l.a.label,htmlFor:"number",children:[Object(u.jsx)("input",{className:l.a.form__field,type:"tel",id:"number",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:" ",value:b,onChange:p,required:!0}),Object(u.jsx)("span",{className:l.a.number__label,children:"Number"})]}),Object(u.jsx)("button",{className:l.a.submit__btn,type:"submit",children:"Add contact"})]})},b=n(20),d=n.n(b),p=n(21),f=n(11),j=n.n(f),m=n(16),O=n.n(m),h=n(4);O.a.defaults.baseURL="https://629b0ea3656cea05fc32b859.mockapi.io/";var x=Object(h.c)("contacts/fetchContacts",Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),v=Object(h.c)("contacts/addContact",function(){var e=Object(p.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/contacts",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(h.c)("contacts/deleteContact",function(){var e=Object(p.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("/contacts/".concat(t));case 2:return n=e.sent,a=n.data.id,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());function C(e){var t=e.contact,n=t.name,a=t.phone,c=t.id,r=Object(i.b)();return Object(u.jsxs)("li",{className:d.a.contact__item,children:[Object(u.jsxs)("span",{className:d.a.contact__text,children:[n,": ",a]}),Object(u.jsx)("button",{className:d.a.delete__btn,onClick:function(){return function(e){r(g(e))}(c)},children:"Delete"})]},c)}var N=n(40),F=n.n(N),y=n(41),A=n.n(y),k=n(80),w=n(79),E=function(e){return e.contacts.filter},L=function(e){return e.contacts.items},I=function(e){return e.contacts.loading},S=function(e){var t=L(e),n=E(e);return t.filter((function(e){var t=e.name,a=e.phone;return t.toLowerCase().includes(n.toLowerCase())||a.includes(n)}))};function T(){var e=Object(i.c)(S);return Object(u.jsx)(k.a,{component:"ul",className:F.a.list,children:e.map((function(t){return Object(u.jsx)(w.a,{in:e.length>0,timeout:250,classNames:A.a,unmountOnExit:!0,children:Object(u.jsx)(C,{contact:t},t.name)},t.id)}))})}var P=n(22),Z=n.n(P),q=Object(h.b)("contacts/updateFilter");function z(){var e=Object(i.c)(E),t=Object(i.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:Z.a.filter,children:[Object(u.jsx)("p",{className:Z.a.filter__title,children:"Find contacts by name"}),Object(u.jsx)("input",{className:Z.a.filter__field,type:"text",name:"name",value:e,placeholder:"Enter the name...",onChange:function(e){var n=e.target.value;return t(q(n))}})]})})}n(38);var B=n(27),D=n.n(B),J=n(42),M=n.n(J);function H(){var e=Object(i.c)(L),t=Object(i.b)(),n=Object(i.c)(I);Object(a.useEffect)((function(){t(x())}),[t]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"phonebook__container",children:[Object(u.jsx)(w.a,{in:!0,appear:!0,timeout:500,classNames:D.a,unmountOnExit:!0,children:Object(u.jsx)("h1",{className:"phonebook__title",children:"Phonebook"})}),Object(u.jsx)(w.a,{in:!0,appear:!0,timeout:500,classNames:M.a,unmountOnExit:!0,children:Object(u.jsx)(_,{changeContactsState:function(n){var a=n.name,c=n.phone;if(e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts list!"));t(v({name:a,phone:c}))}})}),n&&Object(u.jsx)("h1",{className:"loading",children:"Loading..."}),Object(u.jsx)(w.a,{in:!0,appear:!0,timeout:500,classNames:D.a,unmountOnExit:!0,children:Object(u.jsx)("h2",{className:"contacts__title",children:"Contacts"})}),Object(u.jsx)(z,{}),Object(u.jsx)(T,{})]})})}var Q,W,G=n(19),K=n(8),R=n(3),U=Object(h.d)([],(Q={},Object(R.a)(Q,x.fulfilled,(function(e,t){return t.payload})),Object(R.a)(Q,v.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(G.a)(e),[n])})),Object(R.a)(Q,g.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Q)),V=Object(h.d)(!1,(W={},Object(R.a)(W,x.pending,(function(){return!0})),Object(R.a)(W,x.fulfilled,(function(){return!1})),Object(R.a)(W,x.rejected,(function(){return!1})),Object(R.a)(W,v.pending,(function(){return!0})),Object(R.a)(W,v.fulfilled,(function(){return!1})),Object(R.a)(W,v.rejected,(function(){return!1})),Object(R.a)(W,g.pending,(function(){return!0})),Object(R.a)(W,g.fulfilled,(function(){return!1})),Object(R.a)(W,g.rejected,(function(){return!1})),W)),X=Object(h.d)("",Object(R.a)({},q,(function(e,t){return t.payload}))),Y=Object(G.a)(Object(h.e)()),$=Object(K.b)({items:U,filter:X,loading:V}),ee=Object(h.a)({reducer:{contacts:$},middleware:Y,devTools:!1}),te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(u.jsx)(i.a,{store:ee,children:Object(u.jsx)(H,{})}),document.getElementById("root")),te()},9:function(e,t,n){e.exports={form:"ContactForm_form__1NiH1",submit__btn:"ContactForm_submit__btn__eF7FL",name__label:"ContactForm_name__label__Ygtj5",number__label:"ContactForm_number__label__2UXJd",form__field:"ContactForm_form__field__3Q27b",label:"ContactForm_label__3KgVy"}}},[[78,1,2]]]);
//# sourceMappingURL=main.dacf58f5.chunk.js.map