(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"NASA Now","description":"A site that displays a bunch of NASA pictures and information such as the Astronomy Picture of the Day, Images and Articles from the NASA database, Space Weather, and the latest pictures of Earth.","links":[{"name":"Github","src":"https://github.com/kmvanneste/NASA-Now"},{"name":"Live Link","src":"https://kmvanneste.github.io/NASA-Now/"}],"image":{"src":"NASA_Now.png","type":"local"}},{"name":"Triviatastic!","description":"A trivia website powered by the OpenTriviaDB API with saved highscores!","links":[{"name":"Github","src":"https://github.com/chrisfaux95/trivatastic"},{"name":"Link","src":"https://high-score-quiz-game.herokuapp.com/"}],"image":{"src":"triviatastic.png","type":"local"}},{"name":"Rune Generator","description":"A generator for creating rune like symbols using point relations and specified possible lines in Python 3.","links":[{"name":"Current","src":"https://github.com/chrisfaux95/Dynamic-Rune-Generator"},{"name":"Old Version","src":"https://github.com/chrisfaux95/Mirror-Rune-V2"}],"image":{"src":"runeListDiagram.png","type":"local"}},{"name":"password_generator","description":"A simple webpage that allows the user to generate new (and generally secure) passwords","links":[{"name":"Github","src":"https://github.com/chrisfaux95/password_generator"},{"name":"Link","src":"https://chrisfaux95.github.io/password_generator/"}],"image":{"src":"password_generator_screenshot.png","type":"local"}},{"name":"day_planner","description":"A quick day planner web page.","links":[{"name":"Github","src":"https://github.com/chrisfaux95/day_planner"},{"name":"Link","src":"https://chrisfaux95.github.io/day_planner/"}],"image":{"src":"day_planner_screenshot.png","type":"local"}},{"name":"readme_generator","description":"A command line tool to generate README.md files","links":[{"name":"Github","src":"https://github.com/chrisfaux95/readme_generator"}],"image":{"src":"readme_gen.png","type":"local"}},{"name":"employee_db","description":"A command line tool to interact with a MYSQL database of employees","links":[{"name":"Github","src":"https://github.com/chrisfaux95/employee_tracker"}],"image":{"src":"employee_db.png","type":"local"}},{"name":"team_profile_generator","description":"A command line tool to generate a webpage based upon inputting in employee or team member information","links":[{"name":"Github","src":"https://github.com/chrisfaux95/team_profile_generator"}],"image":{"src":"team_profile_generator.png","type":"local"}},{"name":"Code Quiz","description":"A small javascript quiz webpage.  Stores the highscores to local storage.","links":[{"name":"Github","src":"https://github.com/chrisfaux95/code_quiz"},{"name":"Live Version","src":"https://chrisfaux95.github.io/code_quiz/"}],"image":{"src":"code_quiz_screenshot.png","type":"local"}}]')},17:function(e,a,t){e.exports=t(30)},22:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),c=t.n(i),o=(t(22),t(7)),s=t(1);function l(e){return r.a.createElement("a",{className:"btn btn-dark "+e.className,href:e.src},e.name)}function m(){return r.a.createElement("div",{className:"container mx-auto my-5 rounded"},r.a.createElement("div",null,r.a.createElement("div",{className:"page-header"},r.a.createElement("h1",null,"About Me:"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row py-4 mx-1"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:"http://placehold.it/150x150",alt:"Chris Faux",className:"img-thumbnail"})),r.a.createElement("div",{className:"col-md-8 mr-1"},r.a.createElement("p",null,"Chris Faux: A 25 year old programmer living in the Baltimore area. Knowledgable in HTML, CSS, Javascript, Java, and Python.  Has experience with both MYSQL and MongoDB."),r.a.createElement("p",null,"Email: chrisfaux95@gmail.com"),r.a.createElement("p",null,r.a.createElement(l,{src:"https://github.com/chrisfaux95",name:"Github"}))))))}function u(e){return r.a.createElement("div",{className:"col py-1"},r.a.createElement("div",{className:"card"},r.a.createElement(p,{item:e.item}),r.a.createElement(h,{item:e.item}),r.a.createElement(d,{item:e.item})))}function p(e){return r.a.createElement("img",{className:"card-img-top",alt:e.item.name,src:"".concat("/react_portfolio","/assets/images/").concat(e.item.image.src)})}function h(e){return r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.item.name),r.a.createElement("p",null,e.item.description))}function d(e){return r.a.createElement("div",{className:"card-footer"},e.item.links.map((function(e){return r.a.createElement(l,{name:e.name,src:e.src})})))}var g=t(15);function b(){return r.a.createElement("main",{className:"container mx-auto my-5 py-2 rounded"},r.a.createElement("div",{className:"row text-center page-header"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Portfolio"),r.a.createElement("hr",null))),r.a.createElement("div",{id:"portfolio",className:"row row-cols-1 row-cols-md-2 row-cols-lg-3"},g.map((function(e){return r.a.createElement(u,{item:e})}))))}function f(e){e.homeRoute;return r.a.createElement("nav",{className:"mb-1 navbar navbar-expand navbar-dark bg-primary sticky-top"},r.a.createElement(o.b,{className:"navbar-brand mb-1 h1",to:"/"},"Chris Faux"),r.a.createElement("ul",{className:"navbar-nav navbar-right ml-md-auto"},r.a.createElement("li",{className:"nav-item mx-1"},r.a.createElement(o.b,{className:"nav-link btn btn-dark",to:"/"},"About Me")),r.a.createElement("li",{className:"nav-item mx-1"},r.a.createElement(o.b,{className:"nav-link btn btn-dark",to:"portfolio"},"Portfolio"))))}function E(){return r.a.createElement("footer",{className:"footer py-2 bg-dark text-light text-center"},r.a.createElement("br",null),r.a.createElement("p",null,"\xa92020 - Chris Faux."))}t(28);var v=function(e){return r.a.createElement("main",{className:"wrapper"},e.children)};t(29);var y=function(){return r.a.createElement(o.a,{basename:"/react_portfolio"},r.a.createElement(v,null,r.a.createElement(f,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(s.a,{exact:!0,path:"/portfolio",render:function(){return r.a.createElement(b,null)}}))),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.106de766.chunk.js.map