<template>
    <div id = "main_img">
    <img src = "../assets/images/main.jpg" alt = "main">
    <p>ZAPRASZAM NA MODELOWANIE<br> UST I WIĘCEJ</p>
    </div>
  </template>

  <script>

  </script>

  <style lang = scss>
  $headerColor: #6b6743;
    #main_img {
      overflow-x: hidden; 
    } 
    #main_img img{
      width: 65%;
      height: 800px;
      border-radius: 100% 0% 100% 0% / 0% 43% 57% 100%;
      position: relative;
      left: 40%;
    
  }
  #main_img p {
      font-size: 100px;
      position: absolute;
      top: 300px;
      left: 100px;
      font-style: italic;
      font-family: "Allan";
      user-select: none;
      color: $headerColor;
  }
  </style>