
import Vue from 'vue'
Vue.component('headerComponent', {
  template: '<div id = "menu"> <div id = "logo"> <a href = "index.html"> <p>Julia Majewska</p> <p>lips</p> </a> </div> <ul> <li><a href = "about.html">O MNIE</a></li> <li><a href = "offer.html">OFERTA</a></li> <li><a href = "price_list.html">CENNIK</a></li> <li><a href = "sale.html">PROMOCJA</a></li> <li><a href = "contact.html">KONTAKT</a></li> </ul> </div>'
});

let comp = new Vue({
  el: '#headerComponent'
});
