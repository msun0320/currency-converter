(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(5),u=n.n(s),o=n(4),j=n.n(o),i=n(6),b=n(2),l=(n(13),function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)("USD"),u=Object(b.a)(s,2),o=u[0],l=u[1],O=Object(r.useState)("EUR"),h=Object(b.a)(O,2),f=h[0],d=h[1],x=Object(r.useState)(1),p=Object(b.a)(x,2),m=p[0],v=p[1],g=Object(r.useState)(""),S=Object(b.a)(g,2),y=S[0],w=S[1],k="https://api.frankfurter.app/",C="".concat(k,"latest?amount=").concat(m,"&from=").concat(o,"&to=").concat(f),E="".concat(k,"currencies"),F=function(){var e=Object(i.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){F(E).then((function(e){a(Object.entries(e))}))}),[]),Object(r.useEffect)((function(){o===f?w(m<0||""===m?"":m):m<0||""===m?w(""):0===m?w(0):F(C).then((function(e){return w(e.rates[f])}))}),[o,f,m]);return Object(c.jsxs)("div",{className:"Converter",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"from",children:"From"}),Object(c.jsx)("br",{}),Object(c.jsx)("select",{name:"from",id:"from",value:o,onChange:function(e){l(e.target.value)},children:n.map((function(e){return Object(c.jsx)("option",{value:e[0],children:e[1]},e[0])}))}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",defaultValue:m,onChange:function(e){v(e.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"to",children:"To"}),Object(c.jsx)("br",{}),Object(c.jsx)("select",{name:"to",id:"to",value:f,onChange:function(e){d(e.target.value)},children:n.map((function(e){return Object(c.jsx)("option",{value:e[0],children:e[1]},e[0])}))}),Object(c.jsx)("p",{className:"to-amount",children:""!==y?Math.round(100*y)/100:""})]})]})}),O=(n(14),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Always get the real exchange rate"})}),Object(c.jsx)("main",{children:Object(c.jsx)(l,{})})]})});u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b3617c64.chunk.js.map