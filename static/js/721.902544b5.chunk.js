"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[721,197,709],{3377:function(t,n,e){e.d(n,{Bt:function(){return x},Ny:function(){return y},Wg:function(){return d},gF:function(){return l},y:function(){return g}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u),s=e(2007),o=e.n(s),p="api_key=b5d359bd4cfe918eaffdc43e2c19ce7b",f=function(t){return console.log("Error",t.message)};function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/week?".concat(p)).catch(f);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?").concat(p)).catch(f);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?").concat(p)).catch(f);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?").concat(p)).catch(f);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?".concat(p,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).catch(f);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3",d.propTypes={movieId:o().number.isRequired},g.propTypes={movieId:o().number.isRequired},x.propTypes={movieId:o().number.isRequired},y.propTypes={movieId:o().string.isRequired}},3197:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(885),c=e(3377),a=e(2791),u=e(6871),i=e(4709),s=e(184);function o(){var t=(0,u.UO)().movieId,n=(0,a.useState)(null),e=(0,r.Z)(n,2),o=e[0],p=e[1];return(0,a.useEffect)((function(){(0,c.y)(t).then(p)}),[t]),(0,s.jsx)(s.Fragment,{children:o&&(0,s.jsx)("div",{children:(0,s.jsx)(i.List,{children:o.cast.map((function(t){return(0,s.jsxs)(i.Item,{children:[t.profile_path?(0,s.jsx)(i.Img,{src:"https://image.tmdb.org/t/p/w200"+t.profile_path,alt:"actor"}):(0,s.jsx)(i.Img,{src:"https://wvw.db1223.com/images/19015766/icon/12985564.jpg",alt:"actor"}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})})}},4709:function(t,n,e){e.r(n),e.d(n,{Img:function(){return o},Item:function(){return p},List:function(){return s}});var r,c,a,u=e(168),i=e(6031),s=i.ZP.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  flex-flow: row wrap;\n  justify-content: space-between;\n"]))),o=i.ZP.img(c||(c=(0,u.Z)(["\nwidth: 200px;\nheight: 300px;\n"]))),p=i.ZP.li(a||(a=(0,u.Z)(["\nflex-basis: calc((100% - 60px) / 3);\n      margin-right: 30px;\n  \n      &:nth-child(3n) {\n        margin-right: 0;\n      }\n      &:nth-last-child(-n + 3) {\n        margin-bottom: 0px;\n      }\n"])))},8721:function(t,n,e){e.r(n);var r=e(3197);n.default=r.default}}]);
//# sourceMappingURL=721.902544b5.chunk.js.map