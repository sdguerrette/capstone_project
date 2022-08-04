"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{91565(a,b,c){c(71544),c(38257),c(14840),c(57260),c(13002),c(73921);var d=c(27034);c(51941),c(88309),c(40987),c(57852),c(88823),window.IncludeFragmentElement.prototype.fetch=a=>(a.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(a)),c(97895);var e=c(35803),f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let g=class GitCloneHelpElement extends HTMLElement{updateURL(a){let b=a.currentTarget,c=b.getAttribute("data-url")||"";if(this.helpField.value=c,b.matches(".js-git-protocol-clone-url"))for(let d of this.helpTexts)d.textContent=c;for(let e of this.cloneURLButtons)e.classList.remove("selected");b.classList.add("selected")}};function h(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function i(a,b){var c,d,e=h(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function j(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function k(a,b,c){var d=h(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}function l(a,b){let c=[],d=0;for(let e=0;e<a.length;e++){let f=a[e],g=b.indexOf(f,d);if(-1===g)break;d=g+1,c.push(g)}return c}f([e.fA],g.prototype,"helpField",void 0),f([e.GO],g.prototype,"helpTexts",void 0),f([e.GO],g.prototype,"cloneURLButtons",void 0),g=f([e.Ih],g);var m=new WeakMap,n=new WeakMap,o=new WeakMap,p=new WeakMap;class MarkedTextElement extends HTMLElement{get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(a){this.setAttribute("query",a)}get ownerInput(){let a=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return a instanceof HTMLInputElement?a:null}connectedCallback(){this.handleEvent(),this.ownerInput?.addEventListener("input",this),k(this,o,new MutationObserver(()=>this.handleEvent()))}handleEvent(){i(this,p)&&cancelAnimationFrame(i(this,p)),k(this,p,requestAnimationFrame(()=>this.mark()))}disconnectedCallback(){this.ownerInput?.removeEventListener("input",this),i(this,o).disconnect()}mark(){let a=this.textContent||"",b=this.query;if(a===i(this,m)&&b===i(this,n))return;k(this,m,a),k(this,n,b),i(this,o).disconnect();let c=0,d=document.createDocumentFragment();for(let e of(this.positions||l)(b,a)){if(Number(e)!==e||e<c||e>a.length)continue;let f=a.slice(c,e);""!==f&&d.appendChild(document.createTextNode(a.slice(c,e))),c=e+1;let g=document.createElement("mark");g.textContent=a[e],d.appendChild(g)}d.appendChild(document.createTextNode(a.slice(c))),this.replaceChildren(d),i(this,o).observe(this,{attributes:!0,childList:!0,subtree:!0})}constructor(...a){super(...a),j(this,m,{writable:!0,value:""}),j(this,n,{writable:!0,value:""}),j(this,o,{writable:!0,value:void 0}),j(this,p,{writable:!0,value:void 0})}}MarkedTextElement.observedAttributes=["query","data-owner-input"],window.customElements.get("marked-text")||(window.MarkedTextElement=MarkedTextElement,window.customElements.define("marked-text",MarkedTextElement));var q=c(81775);class PasswordStrengthElement extends HTMLElement{connectedCallback(){this.addEventListener("input",r)}disconnectedCallback(){this.removeEventListener("input",r)}}function r(a){let b=a.currentTarget;if(!(b instanceof PasswordStrengthElement))return;let c=a.target;if(!(c instanceof HTMLInputElement))return;let d=c.form;if(!(d instanceof HTMLFormElement))return;let e=s(c.value,{minimumCharacterCount:Number(b.getAttribute("minimum-character-count")),passphraseLength:Number(b.getAttribute("passphrase-length"))});if(e.valid){c.setCustomValidity("");let f=b.querySelector("dl.form-group");f&&(f.classList.remove("errored"),f.classList.add("successed"))}else c.setCustomValidity(b.getAttribute("invalid-message")||"Invalid");t(b,e),(0,q.G)(d)}function s(a,b){let c={valid:!1,hasMinimumCharacterCount:a.length>=b.minimumCharacterCount,hasMinimumPassphraseLength:0!==b.passphraseLength&&a.length>=b.passphraseLength,hasLowerCase:/[a-z]/.test(a),hasNumber:/\d/.test(a)};return c.valid=c.hasMinimumPassphraseLength||c.hasMinimumCharacterCount&&c.hasLowerCase&&c.hasNumber,c}function t(a,b){let c=a.querySelector("[data-more-than-n-chars]"),d=a.querySelector("[data-min-chars]"),e=a.querySelector("[data-number-requirement]"),f=a.querySelector("[data-letter-requirement]"),g=a.getAttribute("error-class")?.split(" ").filter(a=>a.length>0)||[],h=a.getAttribute("pass-class")?.split(" ").filter(a=>a.length>0)||[];for(let i of[c,d,e,f])i?.classList.remove(...g,...h);if(b.hasMinimumPassphraseLength&&c)c.classList.add(...h);else if(b.valid)d.classList.add(...h),e.classList.add(...h),f.classList.add(...h);else{let j=b.hasMinimumCharacterCount?h:g,k=b.hasNumber?h:g,l=b.hasLowerCase?h:g;c?.classList.add(...g),d.classList.add(...j),e.classList.add(...k),f.classList.add(...l)}}window.customElements.get("password-strength")||(window.PasswordStrengthElement=PasswordStrengthElement,window.customElements.define("password-strength",PasswordStrengthElement)),c(87551);class PollIncludeFragmentElement extends d.Z{async fetch(a,b=1e3){let c=await super.fetch(a);return 202===c.status?(await new Promise(a=>setTimeout(a,b)),this.fetch(a,1.5*b)):c}}window.customElements.get("poll-include-fragment")||(window.PollIncludeFragmentElement=PollIncludeFragmentElement,window.customElements.define("poll-include-fragment",PollIncludeFragmentElement));var u=c(75329);class PreciseTimeAgoElement extends u.nJ{connectedCallback(){v.push(this),w||(x(),w=window.setInterval(x,1e3))}disconnectedCallback(){let a=v.indexOf(this);-1!==a&&v.splice(a,1),v.length||(window.clearInterval(w),w=void 0)}getFormattedDate(){let a=this.date;if(!a)return;let b=new Date().getTime()-a.getTime(),c=Math.floor(b/1e3),d=Math.floor(c/60),e=Math.floor(d/60),f=Math.floor(e/24),g=c-60*d,h=d-60*e,i=e-24*f;return d<1?this.applyPrecision([`${c}s`]):e<1?this.applyPrecision([`${d}m`,`${g}s`]):f<1?this.applyPrecision([`${e}h`,`${h}m`,`${g}s`]):this.applyPrecision([`${f}d`,`${i}h`,`${h}m`,`${g}s`])}applyPrecision(a){let b=Number(this.getAttribute("data-precision")||a.length);return a.slice(0,b).join(" ")}}let v=[],w;function x(){for(let a of v)a.textContent=a.getFormattedDate()||""}window.customElements.get("precise-time-ago")||(window.PreciseTimeAgoElement=PreciseTimeAgoElement,window.customElements.define("precise-time-ago",PreciseTimeAgoElement));var y=c(75662),z=c(54650),A=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let B=class RemotePaginationElement extends HTMLElement{connectedCallback(){this.setPaginationUrl(this.list)}get hasNextPage(){return!this.form.hidden}loadNextPage(){this.hasNextPage&&(0,z.Bt)(this.form)}get disabled(){return this.submitButton.hasAttribute("aria-disabled")}set disabled(a){a?this.submitButton.setAttribute("aria-disabled","true"):this.submitButton.removeAttribute("aria-disabled"),this.submitButton.classList.toggle("disabled",a)}loadstart(a){a.target.addEventListener("focus",()=>{this.loaderWasFocused=!0},{once:!0}),a.target.addEventListener("include-fragment-replaced",()=>{this.setPaginationUrl(this.list),this.loaderWasFocused&&this.focusMarkers.pop()?.focus(),this.loaderWasFocused=!1},{once:!0})}async submit(a){if(a.preventDefault(),this.disabled)return;this.disabled=!0;let b;try{let c=await fetch(this.form.action);if(!c.ok)return;b=await c.text()}catch{return}let d=(0,y.r)(document,b);this.setPaginationUrl(d),this.list.append(d),this.focusMarkers.pop()?.focus(),this.disabled=!1,this.dispatchEvent(new CustomEvent("remote-pagination-load"))}setPaginationUrl(a){let b=a.querySelector("[data-pagination-src]");if(!b)return;let c=b.getAttribute("data-pagination-src");c?(this.form.action=c,this.form.hidden=!1):this.form.hidden=!0}constructor(...a){super(...a),this.loaderWasFocused=!1}};A([e.fA],B.prototype,"form",void 0),A([e.fA],B.prototype,"list",void 0),A([e.GO],B.prototype,"focusMarkers",void 0),A([e.fA],B.prototype,"submitButton",void 0),B=A([e.Ih],B);var C=c(10160);let D=/\s|\(|\[/;function E(a,b,c){let d=a.lastIndexOf(b,c-1);if(-1===d)return;let e=a.lastIndexOf(" ",c-1);if(e>d)return;let f=a[d-1];if(f&&!D.test(f))return;let g=a.substring(d+b.length,c);return{word:g,position:d+b.length,beginningOfLine:F(f)}}let F=a=>void 0===a||/\n/.test(a),G=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],H=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],I=new WeakMap,J=new WeakMap;class SlashCommandExpander{destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(a,b){this.input===document.activeElement&&this.setMenu(a,b)}deactivate(){let a=this.menu,b=this.combobox;return!!a&&!!b&&(this.menu=null,this.combobox=null,a.removeEventListener("combobox-commit",this.oncommit),a.removeEventListener("mousedown",this.onmousedown),b.destroy(),a.remove(),!0)}setMenu(a,b){this.deactivate(),this.menu=b,b.id||(b.id=`text-expander-${Math.floor(1e5*Math.random()).toString()}`),this.expander.append(b);let c=b.querySelector(".js-slash-command-menu-items");c?this.combobox=new C.Z(this.input,c):this.combobox=new C.Z(this.input,b);let{top:d,left:e}=function(a,b=a.selectionEnd){let{mirror:c,marker:d}=function(a,b){let c=a.nodeName.toLowerCase();if("textarea"!==c&&"input"!==c)throw Error("expected textField to a textarea or input");let d=I.get(a);if(d&&d.parentElement===a.parentElement)d.innerHTML="";else{d=document.createElement("div"),I.set(a,d);let e=window.getComputedStyle(a),f=G.slice(0);"textarea"===c?f.push("white-space:pre-wrap;"):f.push("white-space:nowrap;");for(let g=0,h=H.length;g<h;g++){let i=H[g];f.push(`${i}:${e.getPropertyValue(i)};`)}d.style.cssText=f.join(" ")}let j=document.createElement("span");j.style.cssText="position: absolute;",j.innerHTML="&nbsp;";let k,l;if("number"==typeof b){let m=a.value.substring(0,b);m&&(k=document.createTextNode(m)),(m=a.value.substring(b))&&(l=document.createTextNode(m))}else{let n=a.value;n&&(k=document.createTextNode(n))}if(k&&d.appendChild(k),d.appendChild(j),l&&d.appendChild(l),!d.parentElement){if(!a.parentElement)throw Error("textField must have a parentElement to mirror");a.parentElement.insertBefore(d,a)}return d.scrollTop=a.scrollTop,d.scrollLeft=a.scrollLeft,{mirror:d,marker:j}}(a,b),e=c.getBoundingClientRect(),f=d.getBoundingClientRect();return setTimeout(()=>{c.remove()},5e3),{top:f.top-e.top,left:f.left-e.left}}(this.input,a.position),f=parseInt(window.getComputedStyle(this.input).fontSize);b.style.top=`${d+f}px`,b.style.left=`${e}px`,this.combobox.start(),b.addEventListener("combobox-commit",this.oncommit),b.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(a){if(null==a)return;let b=this.match;if(!b)return;let c=this.input.value.substring(0,b.position-b.key.length),d=this.input.value.substring(b.position+b.text.length),{cursor:e,value:f}=this.replaceCursorMark(a);f=f?.length===0?f:`${f} `,this.input.value=c+f+d,this.deactivate(),this.input.focus(),e=c.length+(e||f.length),this.input.selectionStart=e,this.input.selectionEnd=e}replaceCursorMark(a){let b=/%cursor%/gm,c=b.exec(a);return c?{cursor:c.index,value:a.replace(b,"")}:{cursor:null,value:a}}async onCommit({target:a}){let b=a;if(!(b instanceof HTMLElement)||!this.combobox)return;let d=this.match;if(!d)return;let e={item:b,key:d.key,value:null},f=new CustomEvent("text-expander-value",{cancelable:!0,detail:e}),g=!this.expander.dispatchEvent(f),{onValue:h}=await c.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(c.bind(c,72564));await h(this.expander,d.key,b),!g&&e.value&&this.setValue(e.value)}onBlur(){if(this.interactingWithMenu){this.interactingWithMenu=!1;return}this.deactivate()}onPaste(){this.justPasted=!0}async delay(a){return new Promise(b=>setTimeout(b,a))}async onInput(){if(this.justPasted){this.justPasted=!1;return}let a=this.findMatch();if(a){if(this.match=a,await this.delay(this.appropriateDelay(this.match)),this.match!==a)return;let b=await this.notifyProviders(a);if(!this.match)return;b?this.activate(a,b):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(a){return a.beginningOfLine?0:""!==a.text?0:250}findMatch(){let a=this.input.selectionEnd,b=this.input.value;for(let c of this.expander.keys){let d=E(b,c,a);if(d)return{text:d.word,key:c,position:d.position,beginningOfLine:d.beginningOfLine}}}async notifyProviders(a){let b=[],d=a=>b.push(a),e=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:d,text:a.text,key:a.key}}),f=!this.expander.dispatchEvent(e);if(f)return;let{onChange:g}=await c.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(c.bind(c,72564));g(this.expander,a.key,d,a.text);let h=await Promise.all(b),i=h.filter(a=>a.matched).map(a=>a.fragment);return i[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(a){"Escape"===a.key&&this.deactivate()&&(a.stopImmediatePropagation(),a.preventDefault())}constructor(a,b){this.expander=a,this.input=b,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,b.addEventListener("paste",this.onpaste),b.addEventListener("input",this.oninput),b.addEventListener("keydown",this.onkeydown),b.addEventListener("blur",this.onblur)}}class SlashCommandExpanderElement extends HTMLElement{get keys(){let a=this.getAttribute("keys");return a?a.split(" "):[]}connectedCallback(){let a=this.querySelector('input[type="text"], textarea');if(!(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement))return;let b=new SlashCommandExpander(this,a);J.set(this,b)}disconnectedCallback(){let a=J.get(this);a&&(a.destroy(),J.delete(this))}setValue(a){let b=J.get(this);b&&b.setValue(a)}setMenu(a,b=!1){let c=J.get(this);c&&c.match&&(b&&(c.interactingWithMenu=!0),c.setMenu(c.match,a))}closeMenu(){let a=J.get(this);a&&a.setValue("")}isLoading(){let a=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(a){let b=a.cloneNode(!0);b.classList.remove("d-none"),this.setMenu(b)}}showError(){let a=this.getElementsByClassName("js-slash-command-expander-error")[0];if(a){let b=a.cloneNode(!0);b.classList.remove("d-none"),this.setMenu(b)}}}window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=SlashCommandExpanderElement,window.customElements.define("slash-command-expander",SlashCommandExpanderElement));var K=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let L=class TextSuggesterElement extends HTMLElement{acceptSuggestion(){this.suggestion?.textContent&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}};function M(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function N(a,b){var c,d,e=M(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function O(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function P(a,b,c){var d=M(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}K([e.fA],L.prototype,"input",void 0),K([e.fA],L.prototype,"suggestionContainer",void 0),K([e.fA],L.prototype,"suggestion",void 0),L=K([e.Ih],L);var Q=new WeakMap,R=new WeakMap,S=new WeakMap,T=new WeakMap,U=new WeakMap,V=new WeakMap;class VirtualFilterInputElement extends HTMLElement{static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(N(this,V))return N(this,V);if(this.hasAttribute("aria-owns")){var a;let b=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");b&&Boolean((a=b)instanceof Set||a&&"object"==typeof a&&"size"in a&&"add"in a&&"delete"in a&&"clear"in a)&&P(this,V,b)}return P(this,V,N(this,V)||new Set)}set filtered(a){P(this,V,a)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(a){this.setAttribute("src",a)}get loading(){return"lazy"===this.getAttribute("loading")?"lazy":"eager"}set loading(a){this.setAttribute("loading",a)}get accept(){return this.getAttribute("accept")||""}set accept(a){this.setAttribute("accept",a)}get property(){return this.getAttribute("data-property")||""}set property(a){this.setAttribute("data-property",a)}reset(){this.filtered.clear(),P(this,U,new Set)}clear(){this.input&&(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(a,b,c){let d=this.isConnected&&this.src,e="eager"===this.loading,f=b!==c;("src"===a||"data-property"===a)&&f&&(P(this,S,null),N(this,T)&&clearTimeout(N(this,T))),d&&e&&("src"===a||"loading"===a||"accept"===a||"data-property"===a)&&f?(cancelAnimationFrame(N(this,R)),P(this,R,requestAnimationFrame(()=>this.load()))):"aria-owns"===a&&P(this,V,null)}connectedCallback(){this.src&&"eager"===this.loading&&(cancelAnimationFrame(N(this,R)),P(this,R,requestAnimationFrame(()=>this.load())));let a=this.input;if(!a)return;let b=this.getAttribute("aria-owns");null!==b&&this.attributeChangedCallback("aria-owns","",b),a.setAttribute("autocomplete","off"),a.setAttribute("spellcheck","false"),this.src&&"lazy"===this.loading&&(document.activeElement===a?this.load():a.addEventListener("focus",()=>{this.load()},{once:!0})),a.addEventListener("input",this)}disconnectedCallback(){this.input?.removeEventListener("input",this)}handleEvent(a){"input"===a.type&&(N(this,T)&&clearTimeout(N(this,T)),P(this,T,window.setTimeout(()=>this.filterItems(),(this.input?.value?.length,300))))}async load(){N(this,Q)?.abort(),P(this,Q,new AbortController);let{signal:a}=N(this,Q);if(!this.src)throw Error("missing src");if(await new Promise(a=>setTimeout(a,0)),!a.aborted){this.dispatchEvent(new Event("loadstart"));try{let b=await this.fetch(this.request(),{signal:a,headers:{"X-Requested-With":"XMLHttpRequest"}});if(location.origin+this.src!==b.url)return;if(!b.ok)throw Error(`Failed to load resource: the server responded with a status of ${b.status}`);P(this,U,new Set((await b.json())[this.property])),P(this,S,null),this.dispatchEvent(new Event("loadend"))}catch(c){if(a.aborted){this.dispatchEvent(new Event("loadend"));return}throw(async()=>{this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))})(),c}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(a,b){return fetch(a,b)}filterItems(){let a=this.input?.value.trim()??"",b=N(this,S);if(P(this,S,a),a===b)return;this.dispatchEvent(new CustomEvent("virtual-filter-input-filter"));let c;for(let d of(b&&a.includes(b)?c=this.filtered:(c=N(this,U),this.filtered.clear()),c))this.filter(d,a)?this.filtered.add(d):this.filtered.delete(d);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}constructor(...a){super(...a),O(this,Q,{writable:!0,value:void 0}),O(this,R,{writable:!0,value:0}),O(this,S,{writable:!0,value:null}),O(this,T,{writable:!0,value:void 0}),O(this,U,{writable:!0,value:new Set}),O(this,V,{writable:!0,value:null}),this.filter=(a,b)=>String(a).includes(b)}}function W(a,b,c){if(!b.has(a))throw TypeError("attempted to "+c+" private field on non-instance");return b.get(a)}function X(a,b){var c,d,e=W(a,b,"get");return c=a,(d=e).get?d.get.call(c):d.value}function Y(a,b,c){!function(a,b){if(b.has(a))throw TypeError("Cannot initialize the same private elements twice on an object")}(a,b),b.set(a,c)}function Z(a,b,c){var d=W(a,b,"set");return!function(a,b,c){if(b.set)b.set.call(a,c);else{if(!b.writable)throw TypeError("attempted to set read only private field");b.value=c}}(a,d,c),c}window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=VirtualFilterInputElement,window.customElements.define("virtual-filter-input",VirtualFilterInputElement));var $=new WeakMap,_=new WeakMap,aa=new WeakMap,ab=new WeakMap,ac=new WeakMap,ad=new WeakMap,ae=new WeakMap;let af=Symbol.iterator;class VirtualListElement extends HTMLElement{static get observedAttributes(){return["data-updating"]}get updating(){return"lazy"===this.getAttribute("data-updating")?"lazy":"eager"}set updating(a){this.setAttribute("data-updating",a)}get size(){return X(this,_).size}get range(){let a=this.getBoundingClientRect().height,{scrollTop:b}=this,c=`${b}-${a}`;if(X(this,ac).has(c))return X(this,ac).get(c);let d=0,e=0,f=0,g=0,h=X(this,aa);for(let i of X(this,_)){let j=h.get(i)||X(this,ab);if(f+j<b)f+=j,d+=1,e+=1;else if(g-j<a)g+=j,e+=1;else if(g>=a)break}return[d,e]}attributeChangedCallback(a,b,c){if(b===c||!this.isConnected)return;let d="data-updating"===a&&"eager"===c,e="data-sorted"===a&&this.hasAttribute("data-sorted");(d||e)&&this.update()}connectedCallback(){this.addEventListener("scroll",()=>this.update()),this.updateSync=this.updateSync.bind(this)}update(){X(this,ae)&&cancelAnimationFrame(X(this,ae)),!X(this,$)&&this.hasAttribute("data-sorted")?Z(this,ae,requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()})):Z(this,ae,requestAnimationFrame(this.updateSync))}renderItem(a){let b={item:a,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:b})),b.fragment.children[0]}recalculateHeights(a){let b=this.querySelector("ul, ol, tbody");b&&(b.append(this.renderItem(a)),Z(this,ab,b.children[0].getBoundingClientRect().height),X(this,aa).set(a,X(this,ab)),b.replaceChildren())}updateSync(){let a=this.querySelector("ul, ol");if(!a)return;let[b,c]=this.range;if(c<b)return;let d=!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0}));if(d)return;let e=new Map,f=X(this,ad),g=-1,h=!0,i=0;for(let j of X(this,_)){if(-1!==g||Number.isFinite(X(this,ab))&&0!==X(this,ab)||this.recalculateHeights(j),(g+=1)<b){i+=X(this,aa).get(j)||X(this,ab);continue}if(g>c){h=!1;break}let k=null;if(f.has(j))k=f.get(j);else{if(!(k=this.renderItem(j)))continue;f.set(j,k)}e.set(j,k)}a.replaceChildren(...e.values()),a.style.paddingTop=`${i}px`;let l=this.size*X(this,ab);a.style.height=`${l||0}px`;let m=!1,n=this.getBoundingClientRect().bottom;for(let[o,p]of e){let{height:q,bottom:r}=p.getBoundingClientRect();m=m||r>=n,X(this,aa).set(o,q)}let s=!h&&this.size>e.size;if(s&&!m)return X(this,ac).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new CustomEvent("virtual-list-updated"))}has(a){return X(this,_).has(a)}add(a){return X(this,_).add(a),Z(this,$,!1),Number.isFinite(X(this,ab))||this.recalculateHeights(a),"eager"===this.updating&&this.update(),this}delete(a){let b=X(this,_).delete(a);return Z(this,$,!1),X(this,aa).delete(a),"eager"===this.updating&&this.update(),b}clear(){X(this,_).clear(),X(this,aa).clear(),Z(this,ab,1/0),Z(this,$,!0),"eager"===this.updating&&this.update()}forEach(a,b){for(let c of this)a.call(b,c,c,this)}entries(){return X(this,_).entries()}values(){return X(this,_).values()}keys(){return X(this,_).keys()}[af](){return X(this,_)[Symbol.iterator]()}sort(a){return Z(this,_,new Set(Array.from(this).sort(a))),Z(this,$,!0),"eager"===this.updating&&this.update(),this}constructor(...a){super(...a),Y(this,$,{writable:!0,value:!1}),Y(this,_,{writable:!0,value:new Set}),Y(this,aa,{writable:!0,value:new Map}),Y(this,ab,{writable:!0,value:1/0}),Y(this,ac,{writable:!0,value:new Map}),Y(this,ad,{writable:!0,value:new Map}),Y(this,ae,{writable:!0,value:0})}}window.customElements.get("virtual-list")||(window.VirtualListElement=VirtualListElement,window.customElements.define("virtual-list",VirtualListElement));var ag=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let ah=class VisiblePasswordElement extends HTMLElement{show(){this.input.type="text",this.input.focus(),this.showButton.hidden=!0,this.hideButton.hidden=!1}hide(){this.input.type="password",this.input.focus(),this.hideButton.hidden=!0,this.showButton.hidden=!1}};ag([e.fA],ah.prototype,"input",void 0),ag([e.fA],ah.prototype,"showButton",void 0),ag([e.fA],ah.prototype,"hideButton",void 0),ah=ag([e.Ih],ah)},54679(a,b,c){c.d(b,{H:()=>f,v:()=>e});var d=c(59753);function e(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}function f(){let a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}(0,d.on)("deprecatedAjaxError","[data-remote]",function(a){let b=a.detail,{error:c,text:d}=b;a.currentTarget===a.target&&"abort"!==c&&"canceled"!==c&&(/<html/.test(d)?(e(),a.stopImmediatePropagation()):setTimeout(function(){!a.defaultPrevented&&e()},0))}),(0,d.on)("deprecatedAjaxSend","[data-remote]",function(){f()}),(0,d.on)("click",".js-ajax-error-dismiss",function(){f()})},81775(a,b,c){c.d(b,{G:()=>i});var d=c(254),e=c(64463),f=c(59753);function g(a){let b=a.getAttribute("data-required-value"),c=a.getAttribute("data-required-value-prefix");if(a.value===b)a.setCustomValidity("");else{let d=b;c&&(d=c+d),a.setCustomValidity(d)}}(0,d.q6)("[data-required-value]",function(a){let b=a.currentTarget;g(b)}),(0,f.on)("change","[data-required-value]",function(a){let b=a.currentTarget;g(b),i(b.form)}),(0,d.q6)("[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity("")}),(0,f.on)("change","[data-required-trimmed]",function(a){let b=a.currentTarget;""===b.value.trim()?b.setCustomValidity(b.getAttribute("data-required-trimmed")):b.setCustomValidity(""),i(b.form)}),(0,d.ZG)("input[pattern],input[required],textarea[required],input[data-required-change],textarea[data-required-change],input[data-required-value],textarea[data-required-value]",a=>{let b=a.checkValidity();function c(){let c=a.checkValidity();c!==b&&a.form&&i(a.form),b=c}a.addEventListener("input",c),a.addEventListener("blur",function b(){a.removeEventListener("input",c),a.removeEventListener("blur",b)})});let h=new WeakMap;function i(a){let b=a.checkValidity();for(let c of a.querySelectorAll("button[data-disable-invalid]"))c.disabled=!b}(0,e.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(a){let b=a.form;if(b){var c;c=b,h.get(c)||(c.addEventListener("change",()=>i(c)),h.set(c,!0)),a.disabled=!b.checkValidity()}}}),(0,e.N7)("input[data-required-change], textarea[data-required-change]",function(a){let b=a,c="radio"===b.type&&b.form?b.form.elements.namedItem(b.name).value:null;function d(a){let d=b.form;if(a&&"radio"===b.type&&d&&c)for(let e of d.elements.namedItem(b.name))e instanceof HTMLInputElement&&e.setCustomValidity(b.value===c?"unchanged":"");else b.setCustomValidity(b.value===(c||b.defaultValue)?"unchanged":"")}b.addEventListener("input",d),b.addEventListener("change",d),d(),b.form&&i(b.form)}),document.addEventListener("reset",function(a){if(a.target instanceof HTMLFormElement){let b=a.target;setTimeout(()=>i(b))}})},54650(a,b,c){c.d(b,{Bt:()=>h,DN:()=>k,KL:()=>n,Se:()=>j,qC:()=>o,sw:()=>l});var d=c(59753),e=c(76177),f=c(54679);function g(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:c}))}function h(a,b){b&&(i(a,b),(0,e.j)(b)),g(a,"submit",!0)&&a.submit()}function i(a,b){if(!(a instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(b instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==b.type)throw TypeError("The specified element is not a submit button.");if(!a||a!==b.form)throw Error("The specified element is not owned by the form element.")}function j(a,b){if("boolean"==typeof b){if(a instanceof HTMLInputElement)a.checked=b;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===a.type)throw TypeError("checkbox can't be set to string value");a.value=b}g(a,"change",!1)}function k(a,b){for(let c in b){let d=b[c],e=a.elements.namedItem(c);e instanceof HTMLInputElement?e.value=d:e instanceof HTMLTextAreaElement&&(e.value=d)}}function l(a){if(!(a instanceof HTMLElement))return!1;let b=a.nodeName.toLowerCase(),c=(a.getAttribute("type")||"").toLowerCase();return"select"===b||"textarea"===b||"input"===b&&"submit"!==c&&"reset"!==c||a.isContentEditable}function m(a){return new URLSearchParams(a)}function n(a,b){let c=new URLSearchParams(a.search),d=m(b);for(let[e,f]of d)c.append(e,f);return c.toString()}function o(a){return m(new FormData(a)).toString()}(0,d.on)("click",".js-remote-submit-button",async function(a){let b=a.currentTarget,c=b.form;a.preventDefault();let d;try{d=await fetch(c.action,{method:c.method,body:new FormData(c),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}d&&!d.ok&&(0,f.v)()})},97895(a,b,c){c.d(b,{Z:()=>k});var d=c(47142);let e=(a,b,c)=>{if(!(0,d.CD)(a,b))return-1/0;let e=(0,d.Gs)(a,b);return e<c?-1/0:e},f=(a,b,c)=>{a.innerHTML="";let e=0;for(let f of(0,d.m7)(b,c)){let g=c.slice(e,f);""!==g&&a.appendChild(document.createTextNode(c.slice(e,f))),e=f+1;let h=document.createElement("mark");h.textContent=c[f],a.appendChild(h)}a.appendChild(document.createTextNode(c.slice(e)))},g=new WeakMap,h=new WeakMap,i=new WeakMap,j=a=>{if(!i.has(a)&&a instanceof HTMLElement){let b=(a.getAttribute("data-value")||a.textContent||"").trim();return i.set(a,b),b}return i.get(a)||""};class FuzzyListElement extends HTMLElement{connectedCallback(){let a=this.querySelector("ul");if(!a)return;let b=new Set(a.querySelectorAll("li")),c=this.querySelector("input");c instanceof HTMLInputElement&&c.addEventListener("input",()=>{this.value=c.value});let e=new MutationObserver(a=>{let c=!1;for(let e of a)if("childList"===e.type&&e.addedNodes.length){for(let f of e.addedNodes)if(f instanceof HTMLLIElement&&!b.has(f)){let g=j(f);c=c||(0,d.CD)(this.value,g),b.add(f)}}c&&this.sort()});e.observe(a,{childList:!0});let f={handler:e,items:b,lazyItems:new Map,timer:null};h.set(this,f)}disconnectedCallback(){let a=h.get(this);a&&(a.handler.disconnect(),h.delete(this))}addLazyItems(a,b){let c=h.get(this);if(!c)return;let{lazyItems:e}=c,{value:f}=this,g=!1;for(let i of a)e.set(i,b),g=g||Boolean(f)&&(0,d.CD)(f,i);g&&this.sort()}sort(){let a=g.get(this);a&&(a.aborted=!0);let b={aborted:!1};g.set(this,b);let{minScore:c,markSelector:d,maxMatches:k,value:l}=this,m=h.get(this);if(!m||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:l})))return;let{items:n,lazyItems:o}=m,p=this.hasAttribute("mark-selector"),q=this.querySelector("ul");if(!q)return;let r=[];if(l){for(let s of n){let t=j(s),u=e(l,t,c);u!== -1/0&&r.push({item:s,score:u})}for(let[v,w]of o){let x=e(l,v,c);x!== -1/0&&r.push({text:v,render:w,score:x})}r.sort((a,b)=>b.score-a.score).splice(k)}else{let y=r.length;for(let z of n){if(y>=k)break;r.push({item:z,score:1}),y+=1}for(let[A,B]of o){if(y>=k)break;r.push({text:A,render:B,score:1}),y+=1}}requestAnimationFrame(()=>{if(b.aborted)return;let a=q.querySelector('input[type="radio"]:checked');q.innerHTML="";let c=0,e=()=>{if(b.aborted)return;let g=Math.min(r.length,c+100),h=document.createDocumentFragment();for(let k=c;k<g;k+=1){let m=r[k],s=null;if("render"in m&&"text"in m){let{render:t,text:u}=m;s=t(u),n.add(s),i.set(s,u),o.delete(u)}else"item"in m&&(s=m.item);s instanceof HTMLElement&&(p&&f(d&&s.querySelector(d)||s,p?l:"",j(s)),h.appendChild(s))}c=g;let v=!1;if(a instanceof HTMLInputElement)for(let w of h.querySelectorAll('input[type="radio"]:checked'))w instanceof HTMLInputElement&&w.value!==a.value&&(w.checked=!1,v=!0);if(q.appendChild(h),a&&v&&a.dispatchEvent(new Event("change",{bubbles:!0})),g<r.length)requestAnimationFrame(e);else{q.hidden=0===r.length;let x=this.querySelector("[data-fuzzy-list-show-on-empty]");x&&(x.hidden=r.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:r.length}))}};e()})}get value(){return this.getAttribute("value")||""}set value(a){this.setAttribute("value",a)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(a){a?this.setAttribute("mark-selector",a):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(a){Number.isNaN(a)||this.setAttribute("min-score",String(a))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(a){Number.isNaN(a)||this.setAttribute("max-matches",String(a))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(a,b,c){if(b===c)return;let d=h.get(this);d&&(d.timer&&window.clearTimeout(d.timer),d.timer=window.setTimeout(()=>this.sort(),100))}}let k=FuzzyListElement;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=FuzzyListElement,window.customElements.define("fuzzy-list",FuzzyListElement))},254(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},75662(a,b,c){c.d(b,{r:()=>d});function d(a,b){let c=a.createElement("template");return c.innerHTML=b,a.importNode(c.content,!0)}},87551(a,b,c){c.d(b,{X:()=>e});var d=c(64463);function e(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}(0,d.N7)(".js-remove-unless-platform",function(a){!function(a){let b=(a.getAttribute("data-platforms")||"").split(","),c=e();return Boolean(c&&b.includes(c))}(a)&&a.remove()})},76177(a,b,c){function d(a){let b=a.closest("form");if(!(b instanceof HTMLFormElement))return;let c=e(b);if(a.name){let d=a.matches("input[type=submit]")?"Submit":"",f=a.value||d;c||((c=document.createElement("input")).type="hidden",c.classList.add("js-submit-button-value"),b.prepend(c)),c.name=a.name,c.value=f}else c&&c.remove()}function e(a){let b=a.querySelector("input.js-submit-button-value");return b instanceof HTMLInputElement?b:null}c.d(b,{j:()=>d,u:()=>e})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-c7e9ed","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_time-elements_dist_index_js","vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_github_mark-f079ea","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-b3d32f"],()=>b(91565));var c=a.O()}])
//# sourceMappingURL=github-elements-72135c7132e1.js.map