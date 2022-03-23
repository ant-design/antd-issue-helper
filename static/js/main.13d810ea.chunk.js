(this["webpackJsonpantd-issue-helper"]=this["webpackJsonpantd-issue-helper"]||[]).push([[0],{108:function(e,t,a){e.exports={submitBtn:"IssueForm_submitBtn__2i6iD",radioGroup:"IssueForm_radioGroup__3pcx2",similar:"IssueForm_similar__32aVZ"}},141:function(e,t){},159:function(e,t,a){e.exports={intro:"Intro_intro__3VhcL"}},173:function(e,t,a){e.exports=a(325)},178:function(e){e.exports=JSON.parse('{"intro.modal":"the reason behind our strict policy issue","issue.create":"Create","issue.actually":"What is actually happening?","issue.type":"This is a","issue.expected":"What is expected?","issue.type.bug":"Bug report","issue.extra":"Any additional comments? (optional)","issue.type.feature":"Feature Request","issue.motivation":"What problem does this feature solve?","issue.extraHelp":"e.g. some background/context of how you ran into this bug.","issue.title":"Title","issue.repo":"I am opening an issue for","issue.preview":"Preview and Submit","issue.proposal":"What does the proposed API look like?","issue.repoHelp":"Please make sure to file the issue at appropriate repo.","issue.reproduction":"Link to minimal reproduction","issue.steps":"Step to reproduce","issue.version":"Version","issue.versionHelp":"Check if the issue is reproducible with the latest stable version.","previewModal.title":"Preview Issue","repro.about":"About Reproductions"}')},179:function(e){e.exports=JSON.parse('{"intro.modal":"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e48\u4e25\u683c\u7684 issue \u89c4\u5b9a","issue.create":"\u521b\u5efa","issue.react":"React","issue.reactHelp":"react / react-native \u7248\u672c","issue.browser":"\u6d4f\u89c8\u5668","issue.browserHelp":"\u6d4f\u89c8\u5668\u7248\u672c","issue.system":"\u7cfb\u7edf","issue.systemHelp":"\u7cfb\u7edf\u7248\u672c","issue.actually":"\u5b9e\u9645\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f","issue.type":"\u8fd9\u662f\u4e00\u4e2a","issue.expected":"\u671f\u671b\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f","issue.type.bug":"\u9519\u8bef\u62a5\u544a","issue.extra":"\u8865\u5145\u8bf4\u660e\uff08\u53ef\u9009\uff09","issue.type.feature":"\u529f\u80fd\u8981\u6c42","issue.motivation":"\u8fd9\u4e2a\u529f\u80fd\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898\uff1f","issue.extraHelp":"\u6bd4\u5982\uff1a\u9047\u5230\u8fd9\u4e2a bug \u7684\u4e1a\u52a1\u573a\u666f\u3001\u4e0a\u4e0b\u6587\u3002","issue.title":"Issue \u6807\u9898","issue.repo":"\u76f8\u5173\u4ed3\u5e93","issue.preview":"\u9884\u89c8\u548c\u53d1\u5e03","issue.proposal":"\u4f60\u671f\u671b\u7684 API \u662f\u600e\u6837\u7684\uff1f","issue.repoHelp":"\u8bf7\u786e\u4fdd\u5c06 issue \u53d1\u5f80\u76f8\u5173\u7684\u4ed3\u5e93\u3002","issue.reproduction":"\u91cd\u73b0\u94fe\u63a5","issue.steps":"\u91cd\u73b0\u6b65\u9aa4","issue.version":"\u7248\u672c","issue.versionHelp":"\u8bf7\u68c0\u67e5\u95ee\u9898\u662f\u5426\u5b58\u5728\u4e8e\u6700\u65b0\u7248\u672c\u4e2d\u3002","previewModal.title":"Issue \u9884\u89c8","repro.about":"\u5173\u4e8e\u91cd\u73b0"}')},187:function(e,t){},193:function(e,t){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(28),s=a(43),i=a(139),o=a(178);window.appLocale.en={messages:Object(s.a)({},o),locale:"en-US",data:i};var l=a(140),c=a(179);window.appLocale.zh={messages:Object(s.a)({},c),locale:"zh-CN",data:l};var u=a(39),m=a(16),p=a(331),d=a(57),f=a(332),E=a(21),g=a(143),h=a(144),b=a(145),v=a(146),y=a(147),w=a(148),x=a(149),I=a(150),O=a(151),C=a(152),M=a(153),j=a(154),S=a(155),k=a(156),H=a(157);var _=Object(H.a)(function(){var e=window.localStorage.getItem("locale");return e||("zh-cn"===window.navigator.language.toLowerCase()?"zh":"en")}());var V=_,F=["id"],R={en:{intro:k.a,introModal:S.a,motivationHelp:j.a,proposalHelp:M.a,reproHelp:C.a,reproModal:O.a,stepsHelp:I.a},zh:{intro:x.a,introModal:w.a,motivationHelp:y.a,proposalHelp:v.a,reproHelp:b.a,reproModal:h.a,stepsHelp:g.a}},N=function(e){var t=e.id,a=Object(E.a)(e,F),r=n.useContext(V),s=R[r][t];return n.createElement("div",a,n.createElement(s,null))},A=function(e){var t=e.visible,a=e.onCancel;return n.createElement(f.a,{title:n.createElement(m.a,{id:"intro.modal",defaultMessage:"The reason behind our strict issue policy"}),footer:"",visible:t,onCancel:a,width:"680px"},n.createElement(N,{className:"paragraph",id:"introModal"}))},q=a(159),z=a.n(q),P=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],s=n.useRef(null);return n.useEffect((function(){s.current.addEventListener("click",(function(e){"#intro-modal"===e.target.getAttribute("href")&&(e.preventDefault(),r((function(e){return!0})))}))}),[]),n.createElement("div",{className:"".concat(z.a.intro," paragraph"),ref:s},n.createElement(A,{visible:a,onCancel:function(){return r((function(e){return!1}))}}),n.createElement(N,{id:"intro"}))},B=a(64),T=a(334),W=a(329),L=a(327),D=a(328),J=a(333),G=a(330),U=a(335),K=a(115),Z=a.n(K),$=a(160),Q=T.a.Option,X=G.a.TextArea,Y=function(e){var t=e.versions;return n.createElement("div",null,n.createElement(W.a.Item,null,n.createElement(L.a,null,n.createElement(D.a,{span:11},n.createElement(W.a.Item,{name:"version",label:n.createElement(m.a,{id:"issue.version",defaultMessage:"Version"}),extra:n.createElement(m.a,{id:"issue.versionHelp",defaultMessage:"Check if the issue is reproducible with the latest stable version."})},n.createElement(T.a,{showSearch:!0},t.map((function(e){return n.createElement(Q,{key:e,value:e},e)}))))),n.createElement(D.a,{span:12,offset:1},n.createElement(W.a.Item,{name:"react",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.react",defaultMessage:"React"}),extra:n.createElement(m.a,{id:"issue.reactHelp",defaultMessage:"react/react-native version..."})},n.createElement(G.a,null))))),n.createElement(W.a.Item,null,n.createElement(L.a,null,n.createElement(D.a,{span:11},n.createElement(W.a.Item,{name:"system",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.system",defaultMessage:"System"}),extra:n.createElement(m.a,{id:"issue.systemHelp",defaultMessage:"System version..."})},n.createElement(G.a,null))),n.createElement(D.a,{span:12,offset:1},n.createElement(W.a.Item,{name:"browser",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.browser",defaultMessage:"Browser"}),extra:n.createElement(m.a,{id:"issue.browserHelp",defaultMessage:"Browser version..."})},n.createElement(G.a,null))))),n.createElement(W.a.Item,{name:"reproduction",rules:[{required:!0,validator:function(){var e=Object($.a)(Z.a.mark((function e(t,a){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!a.includes("new-issue.ant.design")){e.next=2;break}return e.abrupt("return",Promise.reject("Please provide valid reproduction url"));case 2:return e.abrupt("return",Promise.resolve());case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],label:n.createElement(m.a,{id:"issue.reproduction",defaultMessage:"Link to minimal reproduction"}),extra:n.createElement(N,{id:"reproHelp"})},n.createElement(G.a,{type:"url"})),n.createElement(W.a.Item,{name:"steps",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.steps",defaultMessage:"Step to reproduce"}),extra:n.createElement(N,{id:"stepsHelp"})},n.createElement(X,{autoSize:{minRows:2}})),n.createElement(W.a.Item,{name:"expected",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.expected",defaultMessage:"What is expected?"})},n.createElement(X,{autoSize:{minRows:2}})),n.createElement(W.a.Item,{name:"actual",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.actually",defaultMessage:"What is actually happening?"})},n.createElement(X,{autoSize:{minRows:2}})),n.createElement(W.a.Item,{name:"extra",label:n.createElement(m.a,{id:"issue.extra",defaultMessage:"Any additional comments?(optional)"}),extra:n.createElement(m.a,{id:"issue.extraHelp",defaultMessage:"e.g. some background/context of how you ran into this bug."})},n.createElement(X,{autoSize:{minRows:2}})))},ee=W.a.Item,te=G.a.TextArea,ae=function(){return n.createElement(n.Fragment,null,n.createElement(ee,{name:"motivation",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.motivation",defaultMessage:"What problem does this feature solve?"}),extra:n.createElement(N,{id:"motivationHelp"})},n.createElement(te,{autoSize:{minRows:2}})),n.createElement(ee,{name:"proposal",rules:[{required:!0}],label:n.createElement(m.a,{id:"issue.proposal",defaultMessage:"What does the proposed API look like?"}),extra:n.createElement(N,{id:"proposalHelp"})},n.createElement(te,{autoSize:{minRows:2}})))},ne=a(165),re=new(a.n(ne).a),se=function(e){var t=e.visible,a=e.content,r=e.onCancel,s=e.onCreate;return n.createElement(f.a,{title:n.createElement(m.a,{id:"previewModal.title",defaultMessage:"Issue Preview"}),cancelText:"",width:"680px",visible:t,onCancel:r,footer:n.createElement(d.a,{onClick:s,type:"primary"},n.createElement(m.a,{id:"issue.create",defaultMessage:"Create"}))},n.createElement("div",{className:"paragraph",dangerouslySetInnerHTML:{__html:re.render(a)}}))},ie=function(e){var t=e.visible,a=e.onCancel;return n.createElement(f.a,{title:n.createElement(m.a,{id:"repro.about",defaultMessage:"About Reproductions"}),footer:"",visible:t,onCancel:a,width:"680px"},n.createElement(N,{className:"paragraph",id:"reproModal"}))};function oe(e,t){return"bug"===e?function(e){var t=e.version,a=e.react,n=e.system,r=e.browser,s=e.reproduction,i=e.steps,o=e.expected,l=e.actual,c=e.extra;e.repo;return"\n### Reproduction link\n\n".concat(function(e){if(!e)return;if(e.indexOf("codesandbox.io")>=0)return"[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](".concat(e,")");return"[".concat(e,"](").concat(e,")")}(s),"\n\n### Steps to reproduce\n\n").concat(i,"\n\n### What is expected?\n\n").concat(o,"\n\n### What is actually happening?\n\n").concat(l,"\n\n| Environment | Info |\n| --- | --- |\n| antd | ").concat(t," |\n| React | ").concat(a," |\n| System | ").concat(n," |\n| Browser | ").concat(r," |\n\n").concat(c?"---\n".concat(c):"","\n").trim()}(t):function(e){var t=e.motivation,a=e.proposal;return"\n\n### What problem does this feature solve?\n\n".concat(t,"\n\n### What does the proposed API look like?\n\n").concat(a,"\n").trim()}(t)}var le=a(116),ce=a(323),ue={"ant-design":"antd","ant-design-mobile":"antd-mobile","ant-design-mobile-rn":"@ant-design/react-native"};function me(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)}function pe(e){var t=[],a=[];return e.forEach((function(e){e.match(/^\d+\.\d+\.\d+$/)||e.includes("-rc.")?t.push(e):a.push(e)})),[].concat(Object(le.a)(t.sort((function(e,t){return-ce(e,t)}))),Object(le.a)(a.sort((function(e,t){return-ce(e,t)}))))}function de(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return{similarIssues:a,searchIssues:function(e,t){t?function(e,t){var a=encodeURIComponent("is:issue repo:ant-design/".concat(e," ").concat(t));return fetch("".concat("https://api.github.com","/search/issues?q=").concat(a,"&per_page=5")).then(me).then((function(e){return e.json()})).then((function(e){return e.items}))}(e,t).then((function(e){return r((function(t){return e}))})):r((function(e){return[]}))}}}function fe(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1];return{repoVersions:a,fetchVersions:function(e){(function(e){var t=fetch("".concat("https://registry.npmmirror.com","/").concat(ue[e])).then(me).then((function(e){return e.json()})).then((function(e){var t=e.versions;return Object.keys(t).filter((function(e){return!e.includes("-")}))})).then((function(e){return pe(e)})).then((function(e){return e.slice(0,100)}));return fetch("".concat("https://api.github.com","/repos/ant-design/").concat(e,"/releases?per_page=100")).then(me).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return!e.prerelease}))})).then((function(e){return e.map((function(e){return e.tag_name}))})).then((function(e){return pe(e)})).catch((function(e){return console.warn(e),t}))})(e).then((function(t){return r((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(B.a)({},e,t))}))}))}}}var Ee=a(108),ge=a.n(Ee),he=T.a.Option,be=window.location.search.slice(1).split("&").reduce((function(e,t){var a=t.split("="),n=Object(u.a)(a,2),r=n[0],i=n[1];return Object(s.a)(Object(s.a)({},e),{},Object(B.a)({},r,i))}),{});be.repo||(be.repo="ant-design");var ve=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],i=W.a.useForm(),o=Object(u.a)(i,1)[0],l=n.useCallback((function(e){return oe(e,o.getFieldsValue())}),[o]),c=n.useState(""),p=Object(u.a)(c,2),f=p[0],E=p[1],g=n.useState(!1),h=Object(u.a)(g,2),b=h[0],v=h[1],y=function(e){E(l(o.getFieldValue("type"))),v(e)},w=n.useRef(null),x=de(),I=x.similarIssues,O=x.searchIssues,C=fe(),M=C.repoVersions,j=C.fetchVersions,S=n.useCallback((function(){w.current.addEventListener("click",(function(e){"#repro-modal"===e.target.getAttribute("href")&&(e.preventDefault(),r((function(e){return!0})))}))}),[]),k=n.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=localStorage.getItem("form");if(t){var a=JSON.parse(t),n=Object.keys(a);e.forEach((function(e){delete a[e]})),a.type&&o.setFieldsValue({type:a.type}),setTimeout((function(){var e=o.getFieldsValue();n.forEach((function(t){t in e||delete a[t]})),o.setFieldsValue(a)}),100)}}),[o]),H=n.useCallback((function(e){var t;M[e]||j(e),o.setFieldsValue({version:null===M||void 0===M||null===(t=M[e])||void 0===t?void 0:t[0]})}),[o,j,M]),_=n.useCallback((function(){k(["type"])}),[k]),V=n.useCallback((function(){var e=o.getFieldValue("repo"),t=o.getFieldValue("title");O(e,t)}),[o,O]),F=n.useCallback((function(){var e=o.getFieldValue("type"),t=o.getFieldValue("repo"),a=encodeURIComponent(o.getFieldValue("title")).replace(/%2B/gi,"+"),n="".concat(l(e),"\n\n\x3c!-- generated by ant-design-issue-helper. DO NOT REMOVE --\x3e"),r=encodeURIComponent(n).replace(/%2B/gi,"+"),s="feature"===e?"&labels=\ud83d\udca1%20Feature%20Request":"";localStorage.clear(),window.open("https://github.com/ant-design/".concat(t,"/issues/new?title=").concat(a,"&body=").concat(r).concat(s))}),[o,l]);n.useEffect((function(){j(be.repo),S(),k()}),[j,S,k]);var R=o.getFieldValue("repo"),N=M[R]||[],A=n.createElement(W.a.Item,{className:ge.a.similar},n.createElement("h3",null,"Similar Issues:"),n.createElement("ul",null,I.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:e.html_url,target:"_blank",rel:"noreferrer noopener"},e.title))}))));return n.createElement("div",{ref:w},n.createElement(W.a,{form:o,layout:"vertical",size:"large",initialValues:{repo:be.repo,type:"bug",version:N[0]},onFinish:function(){y(!0)},onValuesChange:function(e,t){var a={};try{a=JSON.parse(localStorage.getItem("form"))||{}}catch(r){}var n=Object(s.a)({},a);Object.keys(t).forEach((function(e){t[e]&&(n[e]=t[e])})),localStorage.setItem("form",JSON.stringify(n,null,2))}},n.createElement(se,{visible:b,content:f,onCancel:function(){y(!1)},onCreate:F}),n.createElement(ie,{visible:a,onCancel:function(){return r((function(e){return!1}))}}),n.createElement(L.a,null,n.createElement(D.a,{span:11},n.createElement(W.a.Item,{name:"repo",label:n.createElement(m.a,{id:"issue.repo",defaultMessage:"I am opening an issue for"}),extra:n.createElement(m.a,{id:"issue.repoHelp",defaultMessage:"Please make sure to file the issue at appropriate repo."})},n.createElement(T.a,{onChange:H},n.createElement(he,{value:"ant-design"},"ant-design"),n.createElement(he,{value:"ant-design-mobile"},"ant-design-mobile"),n.createElement(he,{value:"ant-design-mobile-rn"},"ant-design-mobile-rn")))),n.createElement(D.a,{span:12,offset:1},n.createElement(W.a.Item,{name:"type",label:n.createElement(m.a,{id:"issue.type",defaultMessage:"This is a"})},n.createElement(J.a.Group,{onChange:_,className:ge.a.radioGroup},n.createElement(J.a.Button,{value:"bug"},n.createElement(m.a,{id:"issue.type.bug",defaultMessage:"Bug Report"})),n.createElement(J.a.Button,{value:"feature"},n.createElement(m.a,{id:"issue.type.feature",defaultMessage:"Feature Request"})))))),n.createElement(W.a.Item,{name:"title",label:n.createElement(m.a,{id:"issue.title",defaultMessage:"Title"}),rules:[{required:!0}]},n.createElement(G.a,{onBlur:V})),I.length>0&&A,n.createElement(W.a.Item,{noStyle:!0,shouldUpdate:function(e,t){return e.type!==t.type}},(function(){return"feature"===o.getFieldValue("type")?n.createElement(ae,null):n.createElement(Y,{versions:N})})),n.createElement(W.a.Item,null,n.createElement("div",{className:ge.a.submitBtn},n.createElement(d.a,{type:"primary",size:"large",htmlType:"submit",icon:n.createElement(U.a,null)},n.createElement(m.a,{id:"issue.preview",defaultMessage:"Preview"}))))))},ye=a(72),we=a.n(ye),xe=p.a.Header,Ie=p.a.Content,Oe=p.a.Footer,Ce=function(){var e=n.useContext(V),t=n.useState(e),a=Object(u.a)(t,2),r=a[0],s=a[1],i=window.appLocale[r];return Object(m.c)(i.data),n.createElement(V.Provider,null,n.createElement(p.a,{className:"layout"},n.createElement(xe,{className:we.a.header},n.createElement("div",{className:we.a.headerContainer},n.createElement("div",{className:we.a.logo},n.createElement("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}),n.createElement("h1",null,"Ant Design Issue Helper")),n.createElement("div",{className:we.a.locale},n.createElement(d.a,{size:"small",onClick:function(){return function(e){var t="en"===_.read()?"zh":"en";e(t),_.write(t),window.localStorage.setItem("locale",_.read())}(s)}},"en"===r?"\u4e2d\u6587":"English")))),n.createElement(m.b,{locale:r,messages:i.messages},n.createElement(Ie,{className:we.a.content},n.createElement(P,null),n.createElement(ve,null))),n.createElement(Oe,{style:{textAlign:"center"}},"Inspired by"," ",n.createElement("a",{href:"https://new-issue.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},"Vue Issue Helper")," ","\xb7"," ",n.createElement("a",{href:"https://github.com/ant-design/antd-issue-helper"},"Source Code"))))};a(324);r.render(n.createElement(Ce,null),document.getElementById("root"))},72:function(e,t,a){e.exports={header:"App_header__2L3DO",headerContainer:"App_headerContainer__3EsT6",logo:"App_logo__2qPv-",content:"App_content__1Wt3K"}}},[[173,1,2]]]);
//# sourceMappingURL=main.13d810ea.chunk.js.map