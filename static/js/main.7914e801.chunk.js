(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"name":"Map Contact","discription":"Visualiza\xe7\xe3o de Contatos em um mapa","foto":"images/mapcontato.png","repository":"/mapcontact","tecnologies":[{"name":"JavaScript","icon":"images/icons/js.png"},{"name":"PHP","icon":"images/icons/php.png"},{"name":"HTML","icon":"images/icons/html.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"Mysql","icon":"images/icons/mysql.png"}]},{"name":"SisTH C#","discription":"Sistema de Triagem em estabelecimentos de sa\xfade desenvolvido com a linguagem C#.","foto":"images/sisthcsharp.png","repository":"/SisTH","tecnologies":[{"name":"C#","icon":"images/icons/csharp.png"},{"name":"SQL Server","icon":"images/icons/sqlserver.png"}]},{"name":"SisTH PHP","discription":"Sistema de Triagem em estabelecimentos de sa\xfade desenvolvido com a linguagem PHP e framework Laravel.","foto":"images/sisthphp.png","repository":"/sisth","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"React","icon":"images/icons/react.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"Control RUP","discription":"Sistema de controle de artefatos da metodologia de de denvolvimento de software RUP (Rational Unified Process).","foto":"images/controlrup.png","repository":"/GerenciadorPU","tecnologies":[{"name":"PHP","icon":"images/icons/php.png"},{"name":"JavaScript","icon":"images/icons/js.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"SisUPA","discription":"Sistema para atendimentos em estabelecimentos de sa\xfade.","foto":"images/sisupa.png","repository":"/sisupa","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"React","icon":"images/icons/react.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"MyChurch","discription":"Sistema utilizado para gest\xe3o de participantes em igrejas.","foto":"images/mychurch.png","repository":"/MyChurch","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"Vue","icon":"images/icons/vue.png"},{"name":"Vuetify","icon":"images/icons/vuetify.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]}]')},,,,,function(e,s,i){},,function(e,s,i){},function(e,s,i){"use strict";i.r(s);var c=i(1),n=i.n(c),t=i(3),o=i.n(t),a=(i(9),i(0));window.onload=function(){var e=document.getElementById("menu");window.addEventListener("scroll",(function(){window.scrollY>50?e.classList.add("menuFixo"):e.classList.remove("menuFixo")}))};var r=function(){return Object(a.jsx)("header",{className:"menu",id:"menu",children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("input",{type:"checkbox",id:"bt_menu"}),Object(a.jsx)("label",{htmlFor:"bt_menu",children:"\u2630"}),Object(a.jsx)("label",{id:"logo"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#inicio",children:"In\xedcio"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#sobre",children:"Sobre"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#projetos",children:"Projetos"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#contato",children:"Contato"})})]})]})})},l=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"row",id:"home",style:{backgroundImage:'url("images/bgHome.jpg")'},children:[Object(a.jsx)(r,{}),Object(a.jsxs)("div",{className:"col-md-10",children:[Object(a.jsx)("h1",{className:"text-center",children:"Renan Rodrigues"}),Object(a.jsxs)("h2",{className:"text-center",children:["{"," Desenvolvedor FullStack ","}"]})]})]})})},d=function(){return Object(a.jsxs)("footer",{className:"row",id:"contato",children:[Object(a.jsxs)("div",{className:"col-md-10 text-center",children:[Object(a.jsx)("h3",{children:"Contato"}),Object(a.jsx)("a",{href:"https://github.com/RenanRodriguesdosSantos",children:Object(a.jsx)("img",{className:"icon",alt:"",src:"images/icons/github.png"})}),Object(a.jsx)("a",{href:"https://github.com/RenanRodriguesdosSantos",children:Object(a.jsx)("img",{className:"icon",alt:"",src:"images/icons/linkedin.png"})}),Object(a.jsx)("a",{href:"https://github.com/RenanRodriguesdosSantos",children:Object(a.jsx)("img",{className:"icon",alt:"",src:"images/icons/email.png"})})]}),Object(a.jsx)("div",{className:"col-md-10 text-center",children:"Desenvolvido por Renan Rodrigues \xa9 2021"})]})},j=i(4),m=function(e){return Object(a.jsxs)("div",{className:"row project",children:[Object(a.jsx)("h1",{className:"col-md-10 text-center",children:e.project.name}),Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)("img",{src:e.project.foto,alt:"imagem do projeto",className:"foto"})}),Object(a.jsx)("div",{className:"col-md-5 text-center",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-10 project-discription",children:e.project.discription}),Object(a.jsxs)("div",{className:"col-md-10 tecnologias",children:[Object(a.jsx)("h5",{children:"Tecnologias"}),Object(a.jsx)("div",{className:"row h-center",children:e.project.tecnologies.map((function(e,s){return Object(a.jsx)("div",{className:"col-md-1 div-icon",children:Object(a.jsx)("img",{className:"icon",src:e.icon,alt:e.name})},s)}))})]}),Object(a.jsx)("div",{className:"col-md-10 div-link-gitHub",children:Object(a.jsx)("a",{className:"link-gitHub",href:"https://github.com/RenanRodriguesdosSantos/"+e.project.repository,children:"Acessar o repositorio no GitHub"})})]})})]})},b=function(){return Object(a.jsxs)("div",{id:"projetos",children:[Object(a.jsx)("h1",{className:"titulo",children:"Projetos"}),Object(a.jsx)("div",{className:"container",children:j.map((function(e,s){return Object(a.jsx)(m,{project:e},s)}))})]})},h=function(){return Object(a.jsxs)("div",{id:"sobre",children:[Object(a.jsx)("h1",{className:"titulo",children:"Sobre"}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{id:"perfil",alt:"perfil",src:"images/perfil.jpg"})}),Object(a.jsx)("div",{className:"col-md-6 text-center",children:Object(a.jsxs)("div",{id:"div-sbm",children:["Ol\xe1! Sou o ",Object(a.jsx)("b",{children:"Renan Rodrigues"}),", Analista Programador de Sistema no final da forma\xe7\xe3o pelo IFNMG-Campus Te\xf3filo Otoni.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-4 ",children:[Object(a.jsx)("h3",{children:"Soft Skills"}),Object(a.jsxs)("ul",{className:"skills",children:[Object(a.jsx)("li",{children:"Adaptabilidade"}),Object(a.jsx)("li",{children:"Proatividade"}),Object(a.jsx)("li",{children:"Determina\xe7\xe3o"}),Object(a.jsx)("li",{children:"Curiosidade"}),Object(a.jsx)("li",{children:"\xc9tica"})]})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("h3",{children:"Hard Skills"}),Object(a.jsxs)("ul",{className:"skills",children:[Object(a.jsx)("li",{children:"JavaScript (React)"}),Object(a.jsx)("li",{children:"PHP (Laravel)"}),Object(a.jsx)("li",{children:"MySql"}),Object(a.jsx)("li",{children:"Padr\xe3o MVC"}),Object(a.jsx)("li",{children:"HTML e CSS"}),Object(a.jsx)("li",{children:"Git e GitHub"})]})]})]})]})})]})})]})};var p=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{}),Object(a.jsx)(h,{}),Object(a.jsx)(b,{}),Object(a.jsx)(d,{})]})};i(11);o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.7914e801.chunk.js.map