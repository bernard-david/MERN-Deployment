(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),r=c.n(s),i=(c(25),c(26),c(27),c(3)),o=c(5),l=c(4),j=c.n(l),h=c(0),d=function(e){var t=e.pirate;return Object(h.jsxs)("div",{className:"container d-flex justify-content-between align-items-center mb-3 p-3 border",children:[Object(h.jsx)("img",{src:t.image,alt:t.name,style:{width:"18rem"},className:"me-3"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h5",{children:t.name}),Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)(i.a,{to:"/pirate/".concat(t._id),children:Object(h.jsx)("button",{className:"btn btn-info me-3",children:"View Pirate"})}),Object(h.jsx)("button",{className:"btn btn-danger me-3",onClick:function(){return c=t._id,void j.a.delete("http://localhost:8000/api/pirates/delete/".concat(c)).then((function(){return e.update()})).catch((function(e){return console.log(e)}));var c},children:"Delete Pirate"})]})]})]})},b=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!0),l=Object(o.a)(r,2),b=l[0],m=l[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pirates").then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[b]);var u=function(){m(!b)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"This is the Main"}),Object(h.jsx)(i.a,{to:"/pirate/create",children:"Add Pirate"}),a?a.map((function(e){return Object(h.jsx)(d,{pirate:e,update:u})})):""]})},m=c(6),u=c(8),x=function(e){var t=Object(n.useState)({name:"",image:"",chests:1,phrase:"",position:"Captain",pegLeg:!0,eyePatch:!0,hookHand:!0}),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)({}),l=Object(o.a)(r,2),d=l[0],b=l[1],x=function(e){s(Object(u.a)(Object(u.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))},O=function(e){s(Object(u.a)(Object(u.a)({},a),{},Object(m.a)({},e.target.name,e.target.checked)))};return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),j.a.post("http://localhost:8000/api/pirates/create",a).then((function(e){e.data.error?(console.log("There's an error!"),b(e.data.error.errors)):(console.log("No errors here!"),Object(i.c)("/pirates"))})).catch((function(e){return console.log(e)}))},className:"container text-start",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Pirate Name:"}),Object(h.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:x})]}),d.name?Object(h.jsx)("span",{className:"text-danger",children:d.name.message}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Image URL:"}),Object(h.jsx)("input",{type:"text",name:"image",className:"form-control",onChange:x})]}),d.image?Object(h.jsx)("span",{className:"text-danger",children:d.image.message}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"# of Treasure Chests:"}),Object(h.jsx)("input",{type:"number",name:"chests",className:"form-control",onChange:x})]}),d.chests?Object(h.jsx)("span",{className:"text-danger",children:d.chests.message}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Catch Phrase:"}),Object(h.jsx)("input",{type:"text",name:"phrase",className:"form-control",onChange:x})]}),d.phrase?Object(h.jsx)("span",{className:"text-danger",children:d.phrase.message}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Position:"}),Object(h.jsxs)("select",{name:"position",className:"form-select",onChange:x,children:[Object(h.jsx)("option",{value:"Captain",children:"Captain"}),Object(h.jsx)("option",{value:"First Mate",children:"First Mate"}),Object(h.jsx)("option",{value:"Quarter Master",children:"Quarter Master"}),Object(h.jsx)("option",{value:"Boatswain",children:"Boatswain"}),Object(h.jsx)("option",{value:"Powder Monkey",children:"Powder Monkey"})]})]}),d.position?Object(h.jsx)("span",{className:"text-danger",children:d.position.message}):"",Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"form-group d-flex",children:[Object(h.jsxs)("div",{className:"form-check me-3",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",checked:a.pegLeg,name:"pegLeg",id:"pegLeg",onChange:O}),Object(h.jsx)("label",{className:"form-check-label",for:"pegLeg",children:"Peg Leg"})]}),Object(h.jsxs)("div",{className:"form-check me-3",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",checked:a.eyePatch,name:"eyePatch",id:"eyePatch",onChange:O}),Object(h.jsx)("label",{className:"form-check-label",for:"eyePatch",children:"Eye Patch"})]}),Object(h.jsxs)("div",{className:"form-check me-3",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",checked:a.hookHand,name:"hookHand",id:"hookHand",onChange:O}),Object(h.jsx)("label",{className:"form-check-label",for:"hookHand",children:"Hook Hand"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-primary",children:"Add Pirate"})]})},O=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Add a Pirate"}),Object(h.jsx)(i.a,{to:"/pirates",children:"Crew Board"}),Object(h.jsx)(x,{})]})},p=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!0),l=Object(o.a)(r,2),d=l[0],b=l[1];Object(n.useEffect)((function(){j.a.get("http://localhost:8000/api/pirates/".concat(e._id)).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[d]);var u=function(e,t,c){var n=!t;j.a.put("http://localhost:8000/api/pirates/update/".concat(c),Object(m.a)({},e,n)).then((function(){return b(!d)})).catch((function(e){return console.log(e)}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"This is the One"}),Object(h.jsx)(i.a,{to:"/pirates",children:"Crew Board"}),Object(h.jsxs)("div",{className:"container d-flex flex-row justify-content-around align-items-center mb-3 p-3 border",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("img",{src:a.image,alt:a.name,style:{width:"24rem"}}),Object(h.jsx)("h2",{children:'"'.concat(a.phrase,'"')})]}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("h3",{children:"About"}),Object(h.jsxs)("div",{className:"text-start",children:[Object(h.jsxs)("p",{children:["Position: ",a.position]}),Object(h.jsxs)("p",{children:["Treasure Chests: ",a.chests]}),Object(h.jsxs)("div",{className:"d-flex align-item-center",children:[Object(h.jsxs)("p",{className:"me-2",children:["Peg Leg: ",a.pegLeg?"Yes":"No"]}),a.pegLeg?Object(h.jsx)("button",{className:"btn btn-danger",name:"pegLeg",onClick:function(e){return u(e.target.name,a.pegLeg,a._id)},children:"No"}):Object(h.jsx)("button",{className:"btn btn-success",name:"pegLeg",onClick:function(e){return u(e.target.name,a.pegLeg,a._id)},children:"Yes"})]}),Object(h.jsxs)("div",{className:"d-flex align-item-center",children:[Object(h.jsxs)("p",{className:"me-2",children:["Eye Patch: ",a.eyePatch?"Yes":"No"]}),a.eyePatch?Object(h.jsx)("button",{className:"btn btn-danger",name:"eyePatch",onClick:function(e){return u(e.target.name,a.eyePatch,a._id)},children:"No"}):Object(h.jsx)("button",{className:"btn btn-success",name:"eyePatch",onClick:function(e){return u(e.target.name,a.eyePatch,a._id)},children:"Yes"})]}),Object(h.jsxs)("div",{className:"d-flex align-item-center",children:[Object(h.jsxs)("p",{className:"me-2",children:["Hook Hand: ",a.hookHand?"Yes":"No"]}),a.hookHand?Object(h.jsx)("button",{className:"btn btn-danger",name:"hookHand",onClick:function(e){return u(e.target.name,a.hookHand,a._id)},children:"No"}):Object(h.jsx)("button",{className:"btn btn-success",name:"hookHand",onClick:function(e){return u(e.target.name,a.hookHand,a._id)},children:"Yes"})]})]})]})]})]})};var g=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(i.b,{children:[Object(h.jsx)(b,{path:"/pirates"}),Object(h.jsx)(O,{path:"/pirate/create"}),Object(h.jsx)(p,{path:"/pirate/:_id"})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),f()}},[[53,1,2]]]);
//# sourceMappingURL=main.f6134892.chunk.js.map