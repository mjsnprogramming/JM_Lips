<template>
      <header>
        <div id = "menu">
          <div id = "logo">
            <a href = "index.html">
              <p>Julia Majewska</p>
              <p>lips</p>
            </a>
          </div>
          <ul>
            <li><a href = "about.html">O MNIE</a></li>
            <li><a href = "offer.html">OFERTA</a></li>
            <li><a href = "price_list.html">CENNIK</a></li>
            <li><a href = "sale.html">PROMOCJA</a></li>
            <li><a href = "contact.html">KONTAKT</a></li>
          </ul>
          <div id = "nav">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div id = "nav_min">
            <ul>
              <li><a href = "appointment.html">ZAPISZ SIĘ!</a></li>
              <li><a href = "about.html">O MNIE</a></li>
              <li><a href = "offer.html">OFERTA</a></li>
              <li><a href = "price_list.html">CENNIK</a></li>
              <li><a href = "sale.html">PROMOCJA</a></li>
              <li><a href = "contact.html">KONTAKT</a></li>
            </ul>
          </div>
        </div>
      </header>
</template>

<script>
    
</script>

<style lang = scss>
$headerColor: #6b6743;
  body {
    box-sizing: border-box;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  #logo {
    position: absolute;
    left: 50px;
    top: 45px;
    line-height: 5px;
  }
  
  #logo {
    p {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: black;
    }
    p:nth-child(1) {
      font-size: 25px;
      font-family: "Brush Script MT", sans-serif;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-family: "Brush Script MT", sans-serif;
    }
  }
  #menu {
    width: 100%;
    height: 130px;
    text-align: center;
  
    ul li a {
      text-decoration: none;
      color: $headerColor;
    }
  
    ul {
      margin-left: auto;
      margin-right: auto;
    }
  
    ul li {
      display: inline-block;
      font-size: 20px;
      margin: 40px;
      font-family: 'Playfair Display', sans-serif;
      font-style: italic;
    }
  }
  #nav {
    position: absolute;
    top: 40px;
    right: 50px;
    background-color: $headerColor;
    color: white;
    width: 50px;
    height: 50px;
    border: solid transparent 1px;
    border-radius: 360px;
  }
  .fa-bars {
    color: white;
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #nav_min {
    width: 300px;
    height: 600px;
    background-color: $headerColor;
    position: absolute;
    right: 50px;
    top: 100px;
    display: none;
    ul {
      margin-top: -5px;
    }
    ul li a{
      color: white;
      margin-top: 25px;
    }
  }
</style>