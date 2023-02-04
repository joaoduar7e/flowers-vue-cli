<template>
  <body>
    <div class="div-img-principal">
      <img class="img-principal" :src="flower.first_img" alt="" />
    </div>

    <div class="divTitle">
      <p class="title">{{ flower.name }}</p>
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
      flower: [],
    };
  },

  created() {
    this.getFlower();
  },

  methods: {
    getFlower() {
      api
        .get("/flowers/" + this.id)
        .then((res) => {
          this.flower = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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

.media-element > img {
  border-radius: 16px;
}

.all-infos {
  display: grid;
  grid-template-columns: 3fr;
  margin: 0 auto;
  max-width: 800px;
}

.divTitle {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: sticky;
  top: 0;
  background: #fff;

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
  margin-top: -10px;
  max-width: 100%;
}

.div-img-principal {
  margin: -50px auto 0 auto;
  width: 540px;
  text-align: center;
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
}

/* @media only screen and (max-device-width: 539px) {
  .all-infos {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto auto 20px;
  }

  .info {
    margin: 0px;
    margin-top: 10px;
  }

  .type-title {
    font-size: 22px;
  }
  .type-info {
    font-size: 16px;
  }

  .title {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    padding: 20px;
    line-height: 26px;
  }
} */

@media only screen and (max-device-width: 800px) {

  body{
    max-width: 540px;
  }
  .all-infos {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 100%;
  }

  .type-title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #302b2b;
  }

  .type-info {
    max-width: 100%;
  }

  .div-img-principal {
    margin: -50px auto 0 auto;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    justify-content: center;
  }

  .img-principal {
    margin-top: -50px;
    border-radius: 0 0 0 169px;
    max-width: 100%;
    max-height: 540px;

}


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
