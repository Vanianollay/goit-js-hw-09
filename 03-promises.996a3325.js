!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("iU1Pc");function a(e,t){var n=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){return n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}e(r).Notify.init({}),e(r).Notify.merge({width:"310px",timeout:1e4}),document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=n.delay,i=n.step,u=n.amount,c=Number(o.value),l=Number(i.value),f=Number(u.value);e(r).Notify.info("delay: ".concat(c,", step: ").concat(l,", amount: ").concat(f));for(var d=1;d<=f;d+=1)a(d,c).then((function(t){var n=t.position,o=t.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=l}))}();
//# sourceMappingURL=03-promises.996a3325.js.map
