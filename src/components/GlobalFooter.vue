<template>
    <div id = "footer">
    <div id = "footer_logo">
      <a href = "/">
              <p>Julia Majewska</p>
              <p>lips</p>
            </a>
    </div>
        <div id = "info">
              <div id = "aboutMe">
                <p>O mnie</p>
                <p>Zapraszam na zabiegi z modelowania ust oraz mezoterapii igłowej.
                  <br>
                  Jestem początkującą kosmetolożką z pewnym już doświadczeniem <br>oraz ciągle rozwijającą się bazą klientek.
                </p>
              </div>
        </div>
        <div id = "appointment">
              
        </div>
        <div id = "products">

        </div>
    </div>
</template>

<script>

</script>

<style lang = scss>
#footer {
  height: 300px;
  width: 100%;
  background-color: rgb(241, 233, 233);
}
#footer_logo{
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
    position: relative;
    text-align: center;
    line-height: 5px;
    top: 50px;
  }
  #appointment, 
  #info,
  #products {
    position: relative;
    top: 50px;
    width: 33.3%;
    height: 500px;
    float: left;
  }
  #appointment {
    background-color: black;
  }
  #info {
    background-color: aqua;
  }
  #products {
    background-color: blue;
  }
</style>