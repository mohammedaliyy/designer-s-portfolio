var e,t={};t=JSON.parse('{"particles":{"number":{"value":55,"density":{"enable":true,"value_area":800}},"color":{"value":"#013549"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":50,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}'),((e,t)=>{let o=document.getElementById(e),a=document.getElementById(t);o&&a&&o.addEventListener("click",()=>{a.classList.toggle("show-menu")})})("nav-toggle","nav-menu");const o=document.querySelectorAll(".nav__link");function a(){let e=document.getElementById("nav-menu");e.classList.remove("show-menu")}o.forEach(e=>e.addEventListener("click",a));const l=document.querySelectorAll("section[id]");window.addEventListener("scroll",function(){let e=window.pageYOffset;l.forEach(t=>{let o=t.offsetHeight,a=t.offsetTop-50,l=t.getAttribute("id");e>=a&&e<=a+o?document.querySelector(".nav__menu a[href*="+l+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+l+"]").classList.remove("active-link")})}),window.addEventListener("scroll",function(){let e=document.getElementById("header");this.scrollY>=200?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}),window.addEventListener("scroll",function(){let e=document.getElementById("scroll-top");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}),mixitup(".portfolio__container",{selectors:{target:".portfolio__content"},animation:{duration:300}});const n=document.querySelectorAll(".portfolio__item");function i(){n&&(n.forEach(e=>e.classList.remove("active-portfolio")),this.classList.add("active-portfolio"))}n.forEach(e=>e.addEventListener("click",i)),gsap.from(".home__img",{opacity:0,duration:2,delay:.5,x:60}),gsap.from(".home__data",{opacity:0,duration:2,delay:.8,y:25}),gsap.from(".home__greeting, .home__name, .home__profession, .home__button",{opacity:0,duration:2,delay:1,y:25,ease:"expo.out",stagger:.2}),gsap.from(".nav__logo, .nav__toggle",{opacity:0,duration:2,delay:1.5,y:25,ease:"expo.out",stagger:.2}),gsap.from(".nav__item",{opacity:0,duration:2,delay:1.8,y:25,ease:"expo.out",stagger:.2}),gsap.from(".home__social-icon",{opacity:0,duration:2,delay:2.3,y:25,ease:"expo.out",stagger:.2}),TEMPLATE_ID="template_vnk0jbb",SERVICE_ID="service_kpzvjx8",PUBLIC_KEY="o27GH_pTFYPacIXp-",emailjs.init(PUBLIC_KEY);const r=document.querySelector(".contact__form");r.addEventListener("submit",e=>{e.preventDefault();let t=r.elements.name.value,o=r.elements.email.value,a=r.elements.message.value,l=r.elements.phone.value,n=r.elements.project.value;emailjs.send(SERVICE_ID,TEMPLATE_ID,{to_name:"Amirbek",from_name:t,from_email:o,phone_number:l,project_name:n,message_html:a}).then(function(){new Notyf({duration:3500,position:{x:"center",y:"top"}}).success({message:"Сообщение успешно отправлено!",dismissible:!0})},function(e){new Notyf({duration:3500,position:{x:"center",y:"top"}}).error({message:"Не удалось отправить сообщение!",dismissible:!0})}),r.reset()}),particlesJS.load("particles-js",(e=t)&&e.__esModule?e.default:e,function(){}),ScrollReveal().reveal(".services__data_1",{distance:"50%",origin:"left",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".services__data_2",{distance:"20%",origin:"bottom",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".services__data_3",{distance:"50%",origin:"right",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".section-title",{distance:"60%",origin:"top",opacity:null,reset:!0,duration:850,delay:100,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".about__description",{opacity:.4,reset:!0,duration:850,delay:100,easing:"ease-in-out",mobile:!1,scale:1.25}),ScrollReveal().reveal(".about__num_1",{distance:"60%",origin:"left",opacity:null,reset:!0,duration:850,delay:150,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".about__num_2",{distance:"60%",origin:"right",opacity:null,reset:!0,duration:850,delay:150,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".qualification__content_1",{distance:"50%",origin:"left",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".qualification__content_2",{distance:"50%",origin:"right",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".contact__box_1",{distance:"50%",origin:"right",opacity:null,reset:!0,duration:850,delay:150,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".contact__box_2",{distance:"55%",origin:"right",opacity:null,reset:!0,duration:850,delay:250,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".contact__box_3",{distance:"60%",origin:"right",opacity:null,reset:!0,duration:850,delay:300,easing:"ease-in-out",mobile:!1}),ScrollReveal().reveal(".contact__box_4",{distance:"65%",origin:"right",opacity:null,reset:!0,duration:850,delay:350,easing:"ease-in-out",mobile:!1});let s=document.querySelectorAll(".portfolio__content"),c={distance:"28%",origin:"bottom",opacity:null,reset:!0,duration:850,delay:200,easing:"ease-in-out"};s.forEach(e=>{c.delay+=50,ScrollReveal().reveal(e,c)});let d=document.querySelector(".home__name"),u=null;const m=window.matchMedia("(max-width: 768px)");u=m.matches?"MIRR DESIGNER":"MIRRDESIGNER",new Typewriter(d,{loop:!0}).pauseFor(2e3).typeString("Тоиров Амир").pauseFor(2e3).deleteAll().typeString(u).pauseFor(1500).deleteAll().start();let _=document.querySelector(".footer__title");new Typewriter(_,{loop:!0}).pauseFor(500).typeString("Тоиров Амир").pauseFor(2e3).deleteAll().typeString("mirrdesigner").pauseFor(1500).deleteAll().start();const y=[{header:"Для чего нужен Дизайн И/Э",paragraph:"Дизайн интерьера и экстерьера помогает создавать гармоничное и функциональное окружение, которое отвечает нуждам и предпочтениям жильцов или пользователей помещений. Это может включать в себя выбор цветов, текстур, мебели, освещения и других элементов, которые создают цельное и визуально привлекательное пространство. Внешний дизайн, в свою очередь, направлен на создание привлекательной и функциональной внешней среды. Это может включать выбор материалов, цветов, ландшафтного дизайна и других элементов, которые дополняют архитектуру здания и создают приветливую и визуально привлекательную внешнюю среду."},{header:"Для чего нужен Ландшафтный дизайн ?",paragraph:"Главная задача ландшафтного дизайна — создание гармонии, красоты в сочетании с удобствами использования инфраструктуры зданий, сглаживание конфликтности между урбанизационными формами и природой, зачастую от них страдающей."},{header:"Для чего нужен Графический дизайн ?",paragraph:"Графический дизайн — это творческая область, которая включает использование визуальных элементов для передачи идей, сообщений и информации. Он охватывает множество носителей, таких как печатные, цифровые и мультимедийные, и может использоваться для самых разных целей, включая рекламу, брендинг, упаковку, веб-дизайн и многое другое."}],p=function(e){let t=document.querySelector(".modal__h"),o=document.querySelector(".modal__p");t.textContent=y[e].header,o.textContent=y[e].paragraph},g=document.querySelectorAll(".modal__header ul li");g.forEach(e=>{e.addEventListener("click",t=>{g.forEach(e=>{e.classList.remove("active__li")}),e.classList.add("active__li");let o=Number(e.getAttribute("data-num"));p(o)})});const v=document.querySelector(".modal__exit"),f=document.querySelector(".modal");v.addEventListener("click",e=>{f.style.display="none",document.body.style.overflowY="visible"});const h=document.querySelectorAll(".services__btn");h.forEach(e=>{e.addEventListener("click",t=>{document.body.style.overflowY="hidden",f.style.display="block";let o=Number(e.getAttribute("data-num"));g.forEach(e=>{e.classList.remove("active__li")}),g[o].classList.add("active__li"),p(o)})});const b=document.getElementById("btn"),E=document.getElementById("dropdown"),S=document.getElementById("arrow"),w=function(){E.classList.toggle("show"),S.classList.toggle("arrow")};b.addEventListener("click",function(e){e.stopPropagation(),w()}),document.documentElement.addEventListener("click",function(){E.classList.contains("show")&&w()});const L=document.querySelectorAll(".dropdown a");L.forEach(e=>{e.addEventListener("click",t=>{let o=Number(e.getAttribute("data-num"));p(o)})});const q=document.querySelectorAll(".view__details"),k=document.querySelectorAll(".slider__main"),R=document.querySelector(".slider__exit_icon"),x=document.querySelector(".slider__container");R.addEventListener("click",e=>{x.style.display="none",document.body.style.overflowY="visible"}),q.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),x.style.display="flex",document.body.style.overflowY="hidden",k.forEach(e=>{e.style.display="none"});let o=Number(e.getAttribute("data-which")),a=document.querySelector(`.slider__main--${o+1}`);a.style.display="flex"})});
//# sourceMappingURL=index.840d5527.js.map
