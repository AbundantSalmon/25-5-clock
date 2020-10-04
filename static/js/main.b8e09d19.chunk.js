(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),i=(a(11),a(1)),l=a(5),o=(a(12),a(13),a(4)),u=a.n(o),m=r.a.useReducer,d=r.a.useEffect,b=r.a.useRef,h={breakLength:5,sessionLength:25,currentTime:"25:00",started:!1,paused:!1,label:"SESSION"};function f(e){var t=new Date(0);return t.setMinutes(e),t.toISOString().substr(14,5)}function g(e){var t=e.timerState;return r.a.createElement("div",{id:"display-container",className:"card my-3"},r.a.createElement("div",{id:"timer-label"},r.a.createElement("h1",null,t.label)),r.a.createElement("div",{id:"time-left"},t.currentTime))}function p(e,t){switch(t.type){case"breakDecrement":return e.breakLength>1&&!e.started?Object(i.a)(Object(i.a)({},e),{},{breakLength:e.breakLength-1}):e;case"breakIncrement":return e.breakLength<60&&!e.started?Object(i.a)(Object(i.a)({},e),{},{breakLength:e.breakLength+1}):e;case"sessionDecrement":return e.sessionLength>1&&!e.started?Object(i.a)(Object(i.a)({},e),{},{sessionLength:e.sessionLength-1,currentTime:f(e.sessionLength-1)}):e;case"sessionIncrement":return e.sessionLength<60&&!e.started?e.sessionLength+1===60?Object(i.a)(Object(i.a)({},e),{},{sessionLength:e.sessionLength+1,currentTime:"60:00"}):Object(i.a)(Object(i.a)({},e),{},{sessionLength:e.sessionLength+1,currentTime:f(e.sessionLength+1)}):e;case"setCurrentTime":return Object(i.a)(Object(i.a)({},e),{},{currentTime:t.timer.getTimeValues().toString(["minutes","seconds"])});case"setStarted":return Object(i.a)(Object(i.a)({},e),{},{started:t.state});case"setPaused":return Object(i.a)(Object(i.a)({},e),{},{paused:t.state});case"setDefault":return Object(i.a)({},h);case"timerStart":return t.timer.start({countdown:!0,startValues:{minutes:"SESSION"===e.label?e.sessionLength:e.breakLength},callback:function(){t.dispatchTimerState({type:"setCurrentTime",timer:t.timer})}}),e;case"changeLabel":if("SESSION"===e.label)return Object(i.a)(Object(i.a)({},e),{},{label:"BREAK"});if("BREAK"===e.label)return Object(i.a)(Object(i.a)({},e),{},{label:"SESSION"});throw new Error;default:throw new Error}}function E(e){var t=e.timerState,a=e.dispatchTimerState,n=e.timer,s=e.audioRef;d((function(){var e=function(){null!==s.current&&s.current.play(),i(n)};return n.addEventListener("targetAchieved",e),function(){n.removeEventListener("targetAchieved",e)}}),[]);var c=function(e){console.log("timerstart"),a({type:"timerStart",timer:e,dispatchTimerState:a}),console.log("timerstart1a")},i=function(e){console.log("timer change"),a({type:"changeLabel"}),c(e)};return r.a.createElement("div",{id:"controls"},r.a.createElement("div",{id:"break-label"},"Break"),r.a.createElement("div",{id:"break-length",className:"length"},t.breakLength),r.a.createElement("div",{id:"session-label"},"Session"),r.a.createElement("div",{id:"session-length",className:"length"},t.sessionLength),r.a.createElement("div",{className:"center"},r.a.createElement(v,{id:"start_stop",label:t.started?t.paused?'<i class="fas fa-play-circle"></i>':'<i class="fas fa-pause-circle"></i>':'<i class="fas fa-play-circle"></i>',onClick:function(){console.log("startpausebutton, timerState.started: "+t.started+", timerState.paused: "+t.paused),!1===t.started?(console.log("start"),c(n),a({type:"setStarted",state:!0}),console.log("start1")):!0===t.started&&!1===t.paused?(console.log("pause"),n.pause(),a({type:"setPaused",state:!0})):!0===t.started&&!0===t.paused&&(console.log("restart"),n.start(),a({type:"setPaused",state:!1}))}}),r.a.createElement(v,{id:"reset",label:'<i class="fas fa-undo"></i>',onClick:function(){n.stop(),null!==s.current&&(s.current.pause(),s.current.currentTime=0),a({type:"setDefault"})}})),r.a.createElement(v,{id:"break-decrement",label:'<i class="fas fa-chevron-circle-down"></i>',onClick:function(){return a({type:"breakDecrement"})}}),r.a.createElement(v,{id:"break-increment",label:'<i class="fas fa-chevron-circle-up"></i>',onClick:function(){return a({type:"breakIncrement"})}}),r.a.createElement(v,{id:"session-decrement",label:'<i class="fas fa-chevron-circle-down"></i>',onClick:function(){return a({type:"sessionDecrement"})}}),r.a.createElement(v,{id:"session-increment",label:'<i class="fas fa-chevron-circle-up"></i>',onClick:function(){return a({type:"sessionIncrement"})}}))}function v(e){var t=e.id,a=e.label,n=e.onClick;return r.a.createElement("div",{id:t,className:"button",onClick:n,dangerouslySetInnerHTML:{__html:a}})}var k=function(){var e=new u.a,t=m(p,h),a=Object(l.a)(t,2),n=a[0],s=a[1],c=b(null);return r.a.createElement("div",{id:"timer-main",className:"my-3 p-3 bg-white shadow-lg container-sm"},r.a.createElement(g,{timerState:n}),r.a.createElement(E,{timerState:n,dispatchTimerState:s,timer:e,audioRef:c}),r.a.createElement("audio",{id:"beep",preload:"auto",ref:c,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b8e09d19.chunk.js.map