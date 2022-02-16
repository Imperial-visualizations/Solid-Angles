import Vue from 'vue'
import ImpVis from '@impvis/components'
import '@impvis/components/dist/impvis-components.css'
import conceptual_understanding from './Conceptual Understanding.vue'
import ImpVisKatex from "@impvis/components-katex"

Vue.config.productionTip = false
Vue.use(ImpVis);
Vue.use(ImpVisKatex)




new Vue({
    render: h => h(conceptual_understanding),
  }).$mount('#app')
  