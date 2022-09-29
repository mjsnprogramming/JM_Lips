<template>
  <div id = "app">
    <GlobalHeader></GlobalHeader>
    <HomeContent></HomeContent>
    <GlobalFooter></GlobalFooter>
  </div>
</template>
  
  <script>
    import img from './assets/images/main.jpg';
    import GlobalHeader from './components/GlobalHeader.vue';
    import GlobalFooter from './components/GlobalFooter.vue';
    import HomeContent from './components/HomeContent.vue';
    import '@fortawesome/fontawesome-free/css/all.css';
    export default {
      name: "app",
      data: () => {
        logo: img;
      },
    components: {
    GlobalHeader,
    GlobalFooter,
    HomeContent
    }
}

  </script>
  
  <style lang = scss>
  
  footer {
      height: 300px;
      width: 100%;
      background-color: black;
  }
  @media only screen and (max-width: 1300px) {
      #menu ul li {
        display: none;
      }
      #menu #nav_min {
        display: none;
      }
      #menu #nav_min ul li {
        display: none;
      }
    }
  </style>