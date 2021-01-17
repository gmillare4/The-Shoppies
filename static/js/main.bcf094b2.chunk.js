(this["webpackJsonpshopify-challenge-frontend"]=this["webpackJsonpshopify-challenge-frontend"]||[]).push([[0],{23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(3),r=a(12),i=a.n(r),c=a(15),o=a(13),h=a(14),l=a(8),u=a(17),d=a(16),j=(a(23),a(28)),b=a(29),m=a(30),O=function(e){return Object(s.jsx)(j.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)("h5",{children:"Nominations"}),Object(s.jsx)("ul",{children:e.nominations.map((function(t,a){return Object(s.jsxs)("li",{children:[t.Title," (",t.Year,")"," ",Object(s.jsx)(m.a,{outline:!0,color:"danger",size:"sm",value:t.imdbID,onClick:e.remove,children:"Remove"})]},a)}))})]})})},x=a(31),g=a(32),v=a(33),p=a(34),f=function(e){var t,a;return e.apiError?(a=Object(s.jsx)(x.a,{type:"text",value:e.searchParam,onChange:e.handleChange,placeholder:"Search",invalid:!0}),t=Object(s.jsx)(g.a,{children:e.apiError})):a=Object(s.jsx)(x.a,{type:"text",value:e.searchParam,onChange:e.handleChange,placeholder:"Search"}),Object(s.jsx)(j.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)("h5",{children:"Movie Title"}),Object(s.jsx)(v.a,{onSubmit:function(t){return e.search(t,1)},children:Object(s.jsxs)(p.a,{children:[a,t]})})]})})},S=a(35),R=a(36),w=a(37),y=a(38),C=a(39),P=a(40),k=function(e){var t;e.loading&&(t=Object(s.jsxs)("div",{children:[Object(s.jsx)(S.a,{color:"primary"}),"  ",Object(s.jsx)(S.a,{color:"success"}),"  ",Object(s.jsx)(S.a,{color:"danger"})]}));var a=[],n=Math.ceil(e.totalResults/10);if(1!==n)for(var r=1;r<n+1;r++)a.push(r);return Object(s.jsx)(j.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsxs)("h5",{children:[e.totalResults,' results for "',e.resultsFor,'"']}),t,Object(s.jsxs)("ul",{children:[e.searchResults.map((function(t,a){var n=!1,r="success";return e.nominations.map((function(e,a){e.imdbID===t.imdbID&&(n=!0,r="secondary")})),Object(s.jsxs)("li",{children:[t.Title," (",t.Year,")"," ",Object(s.jsx)(m.a,{outline:!0,color:r,size:"sm",value:t.imdbID,onClick:e.nominate,disabled:n,children:"Nominate"})]},a)})),Object(s.jsx)(R.a,{children:Object(s.jsx)(w.a,{children:Object(s.jsx)(y.a,{xs:"10",children:a.map((function(t){return Object(s.jsx)(C.a,{active:t===e.currPage,children:Object(s.jsx)(P.a,{onClick:function(a){return e.search(a,t)},href:"#",children:t})})}))})})})]})]})})},N=a(41),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchParam:t.target.value})},e.state={searchParam:"",searchResults:[],nominations:[],banner:!1,resultsFor:"",apiError:!1,loading:!1,totalResults:0,currPage:1},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.search=e.search.bind(Object(l.a)(e)),e.nominate=e.nominate.bind(Object(l.a)(e)),e.remove=e.remove.bind(Object(l.a)(e)),e}return Object(h.a)(a,[{key:"search",value:function(e,t){var a=this;e.preventDefault(),this.setState({loading:!0}),fetch("https://www.omdbapi.com/?s=".concat(this.state.searchParam,"&page=").concat(t,"&apikey=807abc94")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){"True"===e.Response?(a.setState({apiError:!1}),a.setState({loading:!1}),a.setState({totalResults:Number(e.totalResults)}),a.setState({searchResults:e.Search}),a.setState({currPage:t})):(a.setState({apiError:e.Error}),a.setState({loading:!1}),a.setState({totalResults:0}),a.setState({searchResults:[]}))})).catch((function(e){return console.log("error",e)})),this.setState({resultsFor:this.state.searchParam})}},{key:"nominate",value:function(e){for(var t=!0,a=0;a<this.state.nominations.length;a++)this.state.nominations[a].imdbID===e.target.value&&(t=!1);if(5===this.state.nominations.length&&(t=!1),t)for(var s=0;s<this.state.searchResults.length;s++)this.state.searchResults[s].imdbID===e.target.value&&this.setState({nominations:[].concat(Object(c.a)(this.state.nominations),[this.state.searchResults[s]])})}},{key:"remove",value:function(e){var t=this.state.nominations.filter((function(t){return t.imdbID!==e.target.value}));this.setState({nominations:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.nominations!==t.nominations&&(5===this.state.nominations.length?this.setState({banner:!0}):this.setState({banner:!1}))}},{key:"render",value:function(){var e;return e=this.state.banner?Object(s.jsx)("h4",{className:"banner center",children:"You've successfully nominated 5 movies!"}):Object(s.jsx)("h4",{className:"noBanner text center",children:"No Banner"}),Object(s.jsxs)("div",{className:"App",children:[e,Object(s.jsx)("h1",{className:"center",children:"The Shoppies"}),Object(s.jsx)(f,{search:this.search,searchParam:this.state.searchParam,handleChange:this.handleChange,apiError:this.state.apiError}),Object(s.jsxs)(N.a,{children:[Object(s.jsx)(k,{searchResults:this.state.searchResults,nominate:this.nominate,resultsFor:this.state.resultsFor,loading:this.state.loading,totalResults:this.state.totalResults,search:this.search,currPage:this.state.currPage,nominations:this.state.nominations}),Object(s.jsx)(O,{nominations:this.state.nominations,remove:this.remove})]})]})}}]),a}(n.Component);a(26);i.a.render(Object(s.jsx)(E,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bcf094b2.chunk.js.map