import Vue from 'vue'
import App from './App.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import HomeContent from './components/HomeContent.vue'
import PriceListContent from './components/PriceListContent.vue'

Vue.config.productionTip = false

Vue.component("global-header", GlobalHeader);
Vue.component("global-footer", GlobalFooter);
Vue.component("home-content", HomeContent);
Vue.component("price-list-content", PriceListContent);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
