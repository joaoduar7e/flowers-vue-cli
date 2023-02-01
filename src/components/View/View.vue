<template>
  <body class="fadeIn">
    <div class="div-img-principal">
      <img class="img-principal" :src="flower.first_img" alt="" />
    </div>

    <div class="title">
      {{ flower.name }}
    </div>

    <section class="all-infos">
      <div class="info">
        <label class="type-title">Nome científico</label>
        <p class="type-info">{{ flower.authors }}</p>
      </div>

      <div class="info">
        <label v-show="flower.description != ''" class="type-title"
          >Sobre</label
        >
        <p class="type-info" v-html="flower.description"></p>
      </div>

      <div class="info">
        <label v-show="flower.images.length > 0" class="type-title"
          >Imagem</label
        >
        <div class="media-scroller snaps-inline">
          <div class="media-element" v-for="(image, sequence) in flower.images">
            <img :key="sequence" :src="image.url" />
          </div>
        </div>
      </div>
      <div class="info">
        <label v-show="flower.use != ''" class="type-title"
          >Uso da planta</label
        >
        <p class="type-info">{{ flower.use }}</p>
      </div>
    </section>
  </body>
</template>

<script>
import api from "../../../service/api";

export default {
  props: ["id"],
  data() {
    return {
      flower: []
    };
  },

  created() {
    this.getFlower();
  },

  methods: {
    getFlower() {
      api
        .get("/flowers/" + this.id)
        .then(res => {
          this.flower = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
@import "https://unpkg.com/open-props";
@import "https://unpkg.com/open-props/normalize.min.css";

body {
  margin: 0px;
  padding: 0px;
  font-family: "Quicksand";
}

.fadeIn {
  -webkit-animation: fadeIn 3s ease-in-out;
  -moz-animation: fadeIn 3s ease-in-out;
  -o-animation: fadeIn 3s ease-in-out;
  animation: fadeIn 3s ease-in-out;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.div-img-principal {
  margin: -50px auto auto auto;
  max-width: 540px;
  text-align: center;
  display: flex;
  justify-content: center;
}
.img-principal {
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.title {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #ffffff;
}

.info {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  justify-content: center;
  margin: 0 auto;
}

.info-img {
  display: flex;
  flex-direction: row;
  max-width: 540px;
  justify-content: center;
  margin: 0 auto;
  overflow-x: auto;
  margin-right: 15px;
}

.type-title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.type-info {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.card {
  display: flex;
  max-width: 128px;
  height: 160px;
  border-radius: 16px;
}

@media screen and (max-width: 540px) {
  .all-infos {
    display: grid;
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .info {
    margin: 0px;
    margin-top: 10px;
  }

  .img-principal {
    border-radius: 0px 0px 0px 80px;
  }
}
.imagem-responsiva {
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;

  border-radius: 16px;
}

.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  gap: var(--_spacer);
  grid-auto-flow: column;
  grid-auto-columns: 40%;

  overflow-x: auto;
  overscroll-behavior-inline: contain;
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer, 1rem);
}

.snaps-inline > * {
  scroll-snap-align: start;
}
</style>
