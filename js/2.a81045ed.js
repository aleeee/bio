(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2,3,4,5],{4149:function(e,t,a){},"61cd":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-mt-lg"},[a("div",{staticClass:"q-px-lg q-pb-md",attrs:{id:"experience"}},[a("q-timeline",{attrs:{layout:"dense",color:"secondary"}},[a("q-timeline-entry",{attrs:{heading:""}},[a("p",{staticClass:"text-h5"},[e._v(" Experience")])]),e._l(e.experiences,(function(t,i){return a("q-timeline-entry",{key:i,attrs:{title:e.workAndCompany(t),subtitle:e.dateRange(t),side:"right",icon:"date_range"}},[a("div",[a("q-list",{staticClass:"rounded-borders",attrs:{dense:"",bordered:"",padding:""}},e._l(t.description,(function(t,i){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i},[a("q-item-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"column justify-center"},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:"radio_button_checked",size:"18px"}})],1),a("div",{staticClass:"colum"},[a("q-item-label",{staticClass:"row justfify-end"},[e._v(e._s(t))])],1)])])],1)})),1)],1)])}))],2)],1)])},n=[],s={data(){return{experiences:[{name:"Software Engineer",startDate:"Dec 2017",endDate:"present",company:"NTT DATA",description:["Developed Integeration layer restful apis to mediate backend billing system with payment gateways and CRM systems.","Implemented custom invoicing plugin to apply tax and refund items for Kill Bill billing system.","Conducted unit, integration and performance testing.","Developed several batch applications.","Migrated test database to a new cloud server.","Setup and installed apps on new test and production server.","Optimized slow and long mysql queries."]},{name:"Software Developer",startDate:"Dec 2015",endDate:"Jul 2017",company:"Rjc Soft",description:["Worked on maintaing and adding new features on an old system."]}]}},methods:{dateRange(e){return e.startDate+"-"+e.endDate},workAndCompany(e){return e.name+" @"+e.company}}},r=s,o=a("2877"),c=a("05eb"),l=a("74af"),d=a("1c1c"),p=a("66e5"),m=a("4074"),u=a("0016"),g=a("0170"),f=a("714f"),b=a("eebe"),v=a.n(b),h=Object(o["a"])(r,i,n,!1,null,null,null);t["default"]=h.exports;v()(h,"components",{QTimeline:c["a"],QTimelineEntry:l["a"],QList:d["a"],QItem:p["a"],QItemSection:m["a"],QIcon:u["a"],QItemLabel:g["a"]}),v()(h,"directives",{Ripple:f["a"]})},"6ef4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-card",{staticClass:"my-card text-white",staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 100%)"}},[a("q-card-section",[a("p",[e._v("Hi there, "),a("q-icon",{attrs:{name:"waving_hand"}}),e._v(" I'm"),a("b",[e._v(" Alemu")])],1)]),a("q-card-section",{staticClass:"q-pt-none"},[e._v("\n    "+e._s(e.bio)+"\n  ")])],1)},n=[],s={data(){return{bio:"I am an enthusiastic software engineer consulting large financial and telecom companies. My masters degree in computer science and networking from Sant'Anna School of Advanced Studies and Pisa University helped me to see software designs from multiple perspectives. As a software engineer, I enjoy creating scalable and efficient applications providing our clients reliable products. Seeking an opportunity to use my diverse skills and knowledge and to be a reliable DevOps engineer."}}},r=s,o=(a("d7f3"),a("2877")),c=a("f09f"),l=a("a370"),d=a("0016"),p=a("eebe"),m=a.n(p),u=Object(o["a"])(r,i,n,!1,null,"0c718d24",null);t["default"]=u.exports;m()(u,"components",{QCard:c["a"],QCardSection:l["a"],QIcon:d["a"]})},"713b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-md"},[i("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"lHh Lpr lff"}},[i("q-header",{staticClass:"bg-cyan-8",attrs:{elevated:""}}),i("q-drawer",{attrs:{padding:"","show-if-above":"",width:400,breakpoint:600,"content-class":"bg- grey-5   text-green-6"}},[i("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},e._l(e.links,(function(t){return i("Link",e._b({key:t.title},"Link",t,!1))})),1),i("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[i("div",{staticClass:"absolute-bottom bg-transparent"},[i("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"56px"}},[i("img",{attrs:{src:a("abcd")}})]),i("div",{staticClass:"text-weight-bold"},[e._v("Alemu T. Metaferia")]),i("div",[e._v("alemutadesse8@gmail.com")])],1)])],1),i("q-page-container",{staticClass:"p-container scroll"},[i("q-page",{staticClass:"q-pa-md"},[i("bio",{ref:"bio",attrs:{id:"bio"}}),i("skill",{ref:"skill",attrs:{id:"skill"}}),i("experience",{attrs:{id:"experience"}}),i("education",{attrs:{id:"education"}}),i("project",{attrs:{id:"project"}})],1)],1)],1)],1)},n=[],s=a("61cd"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"text-h5"},[e._v("Projects")]),a("div",{staticClass:"q-mt-lg"},e._l(e.projects,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.name,attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.image?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"code"}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v("\n            "+e._s(t.name)+"\n            ")])],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"row "},[a("q-icon",{attrs:{name:"build_circle",size:"18px"}}),a("q-item-label",{attrs:{caption:"",lines:"1"}},[e._v(e._s(t.tech))])],1)])],1)})),1)])},o=[],c={data(){return{projects:[{name:"jBatchProcessing",link:"https://github.com/aleeee/jBatchProcessing",image:"./assets/images/springbatch.png",tech:"Springboot,Spring batch,h2"},{name:"Spark",link:"https://github.com/aleeee/SparkUtils",image:"./assets/images/esKafkaBoot.png",tech:"Apache Spark, Springboot, java11"},{name:"springboot-elasticserach-kafka",link:"https://github.com/aleeee/springboot-elasticserach-kafka",image:"./assets/images/bootEskafka.png",tech:"Elasticsearch,Springboot,Apache Kafka"},{name:"Kafka",link:"blue",image:"./assets/images/esKafkaBoot.png",tech:"Apache Kafka, Springboot"},{name:"VueTodo",link:"https://github.com/aleeee/quasar-todo",image:"./assets/images/quasartodo.png",tech:"quasar, vue.js"},{name:"DevOps",link:"https://github.com/aleeee/node_xpres_nginx_docker",image:"./assets/images/devops.png",tech:"Docker , Node.js, Express.js, Redis,Nginx"},{name:"Vue D3",link:"https://github.com/aleeee/vue3D3",image:"./assets/images/map.png",tech:"D3,vue.js"}]}}},l=c,d=a("2877"),p=a("66e5"),m=a("4074"),u=a("0016"),g=a("0170"),f=a("714f"),b=a("eebe"),v=a.n(b),h=Object(d["a"])(l,r,o,!1,null,null,null),k=h.exports;v()(h,"components",{QItem:p["a"],QItemSection:m["a"],QIcon:u["a"],QItemLabel:g["a"]}),v()(h,"directives",{Ripple:f["a"]});var q=a("6ef4"),y=a("9086"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:""},on:{click:function(t){return t.preventDefault(),e.scrollMe()}}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},S=[],x=a("0831");const{getScrollTarget:w,setScrollPosition:C}=x["a"];var j={props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},methods:{scrollMe(){document.getElementById(this.link).scrollIntoView()},scrollToElement(){console.log(this.link);const e=w(this.link),t=el.offsetTop,a=1e3;C(e,t,a)}}},Q=j,A=Object(d["a"])(Q,_,S,!1,null,null,null),I=A.exports;v()(A,"components",{QItem:p["a"],QItemSection:m["a"],QIcon:u["a"],QItemLabel:g["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-px-lg q-pb-md",attrs:{id:"education"}},[a("q-timeline",{attrs:{layout:"dense",color:"secondary"}},[a("q-timeline-entry",{attrs:{heading:""}},[a("p",{staticClass:"text-h5"},[e._v("Education")])]),e._l(e.educations,(function(t,i){return a("q-timeline-entry",{key:i,attrs:{title:t.name,subtitle:e.schoolAndLocation(t),side:"right",icon:"date_range"}})}))],2)],1)},E=[],T={data(){return{educations:[{name:"Msc. in Computer Science And Networking",school:"Pisa University and Sant'Anna School of Advanced Studies",location:"Pisa,Italy"},{name:"Bsc in Computer Science",school:"Debre Berhan University",location:"Debre Berhan,Ethiopia"}]}},methods:{schoolAndLocation(e){return e.school+","+e.location}}},B=T,L=a("05eb"),M=a("74af"),P=Object(d["a"])(B,D,E,!1,null,null,null),O=P.exports;v()(P,"components",{QTimeline:L["a"],QTimelineEntry:M["a"]});const R=[{title:"Bio",caption:"bio",icon:"info",link:"bio"},{title:"Experience",caption:"experience",icon:"work",link:"experience"},{title:"Skills",caption:"skills",icon:"keyboard",link:"skill"},{title:"Education",caption:"education",icon:"school",link:"education"},{title:"Projects",caption:"projects",icon:"code",link:"project"}];var J={data(){return{bio:{name:"Alemu Tadesse Metaferia",email:"alemutadesse8@gmail.com"},links:R}},components:{Link:I,Experience:s["default"],Project:k,Bio:q["default"],Skill:y["default"],Education:O}},K=J,N=(a("a51f"),a("4d5a")),$=a("e359"),z=a("9404"),H=a("4983"),U=a("068f"),V=a("cb32"),G=a("09e3"),W=a("9989"),F=Object(d["a"])(K,i,n,!1,null,"0076208c",null);t["default"]=F.exports;v()(F,"components",{QLayout:N["a"],QHeader:$["a"],QDrawer:z["a"],QScrollArea:H["a"],QImg:U["a"],QAvatar:V["a"],QPageContainer:G["a"],QPage:W["a"]})},9086:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-md"},[a("p",{staticClass:"text-h6"},[e._v("Skills")]),a("div",{staticClass:"row"},[a("p",{}),e._l(e.skills,(function(t){return a("div",{key:t,staticClass:"col-6 col-sm-3"},[e._v("\n          "+e._s(t)+"\n      ")])}))],2)])},n=[],s={data(){return{skills:["Java","Spring(boot,batch,JPA)","Apache Kafka","Apache Spark","Jdbi","OSGI","Resilience4j","ANTLR","Cplex","Mysql","H2","Swagger","Docker","Jenkins","SonarQube","Fortify","Junit","Mockito","WireMock","Git","IBM RTC","Splunk","Shell scripting","jaxb","RESTful services","Agile","vue.js","quasar","javascript"]}}},r=s,o=a("2877"),c=Object(o["a"])(r,i,n,!1,null,null,null);t["default"]=c.exports},a51f:function(e,t,a){"use strict";a("ff94")},abcd:function(e,t,a){e.exports=a.p+"img/programmer.73cb95a5.png"},d7f3:function(e,t,a){"use strict";a("4149")},ff94:function(e,t,a){}}]);