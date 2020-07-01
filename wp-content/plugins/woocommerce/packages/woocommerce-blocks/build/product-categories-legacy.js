this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var n,a,l=t[0],i=t[1],s=t[2],b=0,p=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={10:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;return c.push([599,2,1,0]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},13:function(e,t){!function(){e.exports=this.React}()},21:function(e,t){!function(){e.exports=this.wp.editor}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},4:function(e,t){!function(){e.exports=this.lodash}()},558:function(e,t,o){var n=o(559);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(35)(n,r);n.locals&&(e.exports=n.locals)},559:function(e,t,o){},599:function(e,t,o){"use strict";o.r(t);var n=o(15),r=o.n(n),c=o(0),a=o(1),l=o(25),i=o(3),s=function(){return Object(c.createElement)(i.Icon,{icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fillRule:"nonzero",d:"M21.913 7.0946H2.0254c-1.1708 0-2.0984.9908-2.0205 2.16l.741 11.0724c.0714 1.0638.9552 1.8892 2.0206 1.8892h18.4054c1.0654 0 1.9492-.8254 2.0205-1.8892l.7411-11.0724c.0779-1.1692-.8497-2.16-2.0205-2.16zm-8.8006-4.6573h5.987c1.119 0 2.0255.9065 2.0255 2.0254v.934H2.8103V2.0255C2.8103.9064 3.7168 0 4.8357 0h6.2513c1.119 0 2.0254.9065 2.0254 2.0254v.4119zm-7.0589 11.619a.926.926 0 1 1 0-1.852h11.8297a.926.926 0 1 1 0 1.852H6.0535z"}))})},u=(o(558),o(560),o(13)),b=o(21),p=(o(2),o(74)),d=function(){return Object(c.createElement)(i.Placeholder,{icon:Object(c.createElement)(s,null),label:Object(a.__)("Product Categories List",'woocommerce'),className:"wc-block-product-categories"},Object(a.__)("This block shows product categories for your store. To use it, you'll first need to create a product and assign it to a category.",'woocommerce'))},h=function(e){var t,o,n,r,l=e.attributes,s=e.setAttributes,h=e.name;return Object(c.createElement)(u.Fragment,null,(t=l.hasCount,o=l.hasEmpty,n=l.isDropdown,r=l.isHierarchical,Object(c.createElement)(b.InspectorControls,{key:"inspector"},Object(c.createElement)(i.PanelBody,{title:Object(a.__)("Content",'woocommerce'),initialOpen:!0},Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Show product count",'woocommerce'),help:t?Object(a.__)("Product count is visible.",'woocommerce'):Object(a.__)("Product count is hidden.",'woocommerce'),checked:t,onChange:function(){return s({hasCount:!t})}}),Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Show hierarchy",'woocommerce'),help:r?Object(a.__)("Hierarchy is visible.",'woocommerce'):Object(a.__)("Hierarchy is hidden.",'woocommerce'),checked:r,onChange:function(){return s({isHierarchical:!r})}}),Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Show empty categories",'woocommerce'),help:o?Object(a.__)("Empty categories are visible.",'woocommerce'):Object(a.__)("Empty categories are hidden.",'woocommerce'),checked:o,onChange:function(){return s({hasEmpty:!o})}})),Object(c.createElement)(i.PanelBody,{title:Object(a.__)("List Settings",'woocommerce'),initialOpen:!0},Object(c.createElement)(p.a,{label:Object(a.__)("Display style",'woocommerce'),value:n?"dropdown":"list",options:[{label:Object(a.__)("List",'woocommerce'),value:"list"},{label:Object(a.__)("Dropdown",'woocommerce'),value:"dropdown"}],onChange:function(e){return s({isDropdown:"dropdown"===e})}})))),Object(c.createElement)(b.ServerSideRender,{block:h,attributes:l,EmptyResponsePlaceholder:d}))};Object(l.registerBlockType)("woocommerce/product-categories",{title:Object(a.__)("Product Categories List",'woocommerce'),icon:{src:Object(c.createElement)(s,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce",'woocommerce')],description:Object(a.__)("Show your product categories as a list or dropdown.",'woocommerce'),supports:{align:["wide","full"]},example:{attributes:{hasCount:!0}},attributes:{hasCount:{type:"boolean",default:!0},hasEmpty:{type:"boolean",default:!1},isDropdown:{type:"boolean",default:!1},isHierarchical:{type:"boolean",default:!0}},deprecated:[{attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},migrate:function(e){return e},save:function(e){var t=e.attributes,o=t.hasCount,n=t.hasEmpty,a=t.isDropdown,l=t.isHierarchical,i={};return o&&(i["data-has-count"]=!0),n&&(i["data-has-empty"]=!0),a&&(i["data-is-dropdown"]=!0),l&&(i["data-is-hierarchical"]=!0),Object(c.createElement)("div",r()({className:"is-loading"},i),a?Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(c.createElement)("ul",{"aria-hidden":!0},Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}}],edit:function(e){return Object(c.createElement)(h,e)},save:function(){return null}})},74:function(e,t,o){"use strict";var n=o(15),r=o.n(n),c=o(16),a=o.n(c),l=o(17),i=o.n(l),s=o(18),u=o.n(s),b=o(19),p=o.n(b),d=o(14),h=o.n(d),g=o(20),f=o.n(g),m=o(0),w=o(4),O=o(6),j=o.n(O),y=o(3),_=o(22),v=(o(139),function(e){function t(){var e;return a()(this,t),(e=u()(this,p()(t).apply(this,arguments))).onClick=e.onClick.bind(h()(e)),e}return f()(t,e),i()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.label,c=o.checked,a=o.instanceId,l=o.className,i=o.help,s=o.options,u=o.value,b="inspector-toggle-button-control-".concat(a);return i&&(e=Object(w.isFunction)(i)?i(c):i),Object(m.createElement)(y.BaseControl,{id:b,help:e,className:j()("components-toggle-button-control",l)},Object(m.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},n),Object(m.createElement)(y.ButtonGroup,{"aria-labelledby":b+"__label"},s.map((function(e,o){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isDefault=!0,c["aria-pressed"]=!1),Object(m.createElement)(y.Button,r()({key:"".concat(e.label,"-").concat(e.value,"-").concat(o),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),t}(m.Component));t.a=Object(_.withInstanceId)(v)}});
