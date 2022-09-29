<template>
    
    <main>
      <div id = "main_header">
        <h1>CENNIK ZABIEGÓW</h1>
      </div>
        <div id = "lips">
          <div id = "lips_header">
            <span>ZABIEGI USTA</span>
          </div>
          <div class = "name">
            <span>Nazwa</span>
            <span>Cena</span>
          </div>
              <div id = "revitalization">
                <span>REWITALIZACJA UST 0.55 ML </span>
                <span>400 ZŁ</span>
              </div>
              <div id = "augmentation">
                <span>POWIĘKSZANIE I MODELOWANIE UST </span>
                <span>500 ZŁ</span>
              </div>
          </div>
        <div id = "head">
          <div id = "head_header">
           <span>MEZOTERAPIA IGŁOWA</span>
          </div>
          <div class = "name">
            <span>Nazwa</span>
            <span>Cena</span>
          </div>
        <div id = "mesotherapy_face">
          <span>TWARZ </span>
          <span>200 ZŁ</span>
        </div>
        <div id = "mesotherapy_face_neck">
          <span>TWARZ + SZYJA </span>
          <span>250 ZŁ</span>
        </div>
        <div id = "mesotherapy_face_neck_cleavage">
          <span>TWARZ + SZYJA + DEKOLT</span>
          <span>300 ZŁ</span>
        </div>
      </div>
        <div id = "face">
          <div id = "face_header">
            <span>ZABIEGI NA TWARZ</span>
          </div>
          <div class = "name">
            <span>Nazwa</span>
            <span>Cena</span>
          </div>
          <div id = "biorepeel">
            <span>BIOREPEEL </span>
            <span>100 ZŁ</span>
          </div>
          <div id = "retix">
            <span>RETIX C</span>
            <span>150 ZŁ</span>
          </div>
        </div>

    </main>
</template>

<script>


</script>

<style lang = scss>
#main_header {
  width: 400px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #6b6743;
}

#lips,
#lips_header,
#revitalization,
#augmentation,
#head,
#head_header,
#mesotherapy_face,
#mesotherapy_face_neck,
#mesotherapy_face_neck_cleavage,
#face,
#face_header,
#biorepeel,
#retix {
  width: 1000px;
  background-color: #f1f1f1;
}

#lips {
  height: 200px;
  margin: 10px auto;
}

#lips_header {
  font-size: 24px;
  color: #6b6743;
  font-weight: bold;
}
#lips_header span {
  position: relative;
  top: 28px;
  margin-left: 10px;
}

#head_header {
  font-size: 24px;
  color: #6b6743;
  font-weight: bold;
}
#head_header span {
  position: relative;
  top: 28px;
  margin-left: 10px;
}

#face_header {
  font-size: 24px;
  color: #6b6743;
  font-weight: bold;
}
#face_header span {
  position: relative;
  top: 28px;
  margin-left: 10px;
}

#lips_header,
#head_header,
#face_header {
  height: 80px;
  margin: 4px auto;
}

.name {
  height: 30px;
  width: 1000px;
  background-color: #aaa678;
}
.name span {
  position: relative;
  top: 5px;
}
.name span:nth-child(1) {
  left: 50px;
}
.name span:nth-child(2) {
  left: 405.58px;
}

#revitalization,
#augmentation,
#mesotherapy_face,
#mesotherapy_face_neck,
#mesotherapy_face_neck_cleavage,
#biorepeel,
#retix {
  height: 60px;
  border-top: 1px solid white;
  font-family: Calibri, sans-serif;
}
#revitalization span,
#augmentation span,
#mesotherapy_face span,
#mesotherapy_face_neck span,
#mesotherapy_face_neck_cleavage span,
#biorepeel span,
#retix span {
  position: relative;
  top: 20px;
  left: 50px;
  font-weight: bold;
}

#revitalization span:nth-child(2),
#augmentation span:nth-child(2),
#mesotherapy_face span:nth-child(2),
#mesotherapy_face_neck span:nth-child(2),
#mesotherapy_face_neck_cleavage span:nth-child(2),
#biorepeel span:nth-child(2),
#retix span:nth-child(2) {
  position: relative;
  font-weight: unset;
  color: #6b6743;
}

#revitalization span:nth-child(2) {
  left: 257.16px;
}

#augmentation span:nth-child(2) {
  left: 197.87px;
}

#mesotherapy_face span:nth-child(2) {
  left: 398.36px;
}

#mesotherapy_face_neck span:nth-child(2) {
  left: 345.98px;
}

#mesotherapy_face_neck_cleavage span:nth-child(2) {
  left: 281.12px;
}

#biorepeel span:nth-child(2) {
  left: 371.62px;
}

#retix span:nth-child(2) {
  left: 395.09px;
}

#head {
  height: 260px;
  margin: 45px auto;
}

#face {
  height: 200px;
  margin: 10px auto;
}

footer {
  height: 300px;
  width: 100%;
  margin-top: 100px;
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
@media only screen and (max-width: 1020px) {
  #lips,
#lips_header,
#revitalization,
#augmentation,
#head,
#head_header,
#mesotherapy_face,
#mesotherapy_face_neck,
#mesotherapy_face_neck_cleavage,
#face,
#face_header,
#biorepeel,
#retix,
.name {
    width: 500px;
  }
}
@media only screen and (max-width: 520px) {
  #lips,
#lips_header,
#revitalization,
#augmentation,
#head,
#head_header,
#mesotherapy_face,
#mesotherapy_face_neck,
#mesotherapy_face_neck_cleavage,
#face,
#face_header,
#biorepeel,
#retix,
.name {
    width: 320px;
  }
  #lips_header,
#head_header,
#face_header {
    font-size: 18px;
    text-align: center;
  }
  .name span:nth-child(1) {
    left: 5px;
  }
  .name span:nth-child(2) {
    left: 221.58px;
  }
  #revitalization span,
#augmentation span,
#mesotherapy_face span,
#mesotherapy_face_neck span,
#mesotherapy_face_neck_cleavage span,
#biorepeel span,
#retix span {
    left: 5px;
  }
  #revitalization span:nth-child(2) {
    left: 77.16px;
  }
  #augmentation span:nth-child(2) {
    left: 17.87px;
  }
  #mesotherapy_face span:nth-child(2) {
    left: 218.36px;
  }
  #mesotherapy_face_neck span:nth-child(2) {
    left: 165.98px;
  }
  #mesotherapy_face_neck_cleavage span:nth-child(2) {
    left: 101.12px;
  }
  #biorepeel span:nth-child(2) {
    left: 191.62px;
  }
  #retix span:nth-child(2) {
    left: 215.09px;
  }
}
</style>