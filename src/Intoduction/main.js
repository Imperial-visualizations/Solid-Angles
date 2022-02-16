import Vue from 'vue'
import ImpVis from '@impvis/components'
import '@impvis/components/dist/impvis-components.css'
import intoduction from './Intoduction.vue'
import ImpVisKatex from "@impvis/components-katex"

Vue.config.productionTip = false
Vue.use(ImpVis);
Vue.use(ImpVisKatex)




new Vue({
    render: h => h(intoduction),
  }).$mount('#app')
  