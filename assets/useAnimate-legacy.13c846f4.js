System.register([],(function(t){"use strict";return{execute:function(){t("u",(async(t,e,n="animate__")=>{e=Array.isArray(e)?e:[e];const i=e=>new Promise((i=>{if(t){const a=`${n}${e.value}`;t.classList.value=t.classList.value.split(" ").filter((t=>!t.includes(n))).join(" ");const s=e=>{e?.stopPropagation(),t.classList.remove(`${n}animated`,a),t.removeEventListener("animationend",s),i("animation end")};(()=>{t.style.setProperty("--animate-duration",`${e.duration}s`),t.style.setProperty("animation-delay",`${e.delay}s`),t.style.setProperty("animation-iteration-count",`${e.infinite?"infinite":e.count}`),t?.classList.add(`${n}animated`,a)})(),t?.addEventListener("animationend",s,{once:!0})}else i("动画执行失败！执行动画元素不存在！")}));for(const a of e)await i(a)}))}}}));