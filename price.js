import Vue from 'vue';
new Vue ({
  el: '#nav',
  methods: {
    dropNav: () => {
      const drop_nav = document.querySelector('#nav');
      drop_nav.addEventListener('click', () => {
        drop_nav.classList.toggle('');
      });
    }
  }
});
