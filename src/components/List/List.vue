<template>
  <div class="body">

    <div class="header">

        <b class="title">Plantas</b>
      
    <b-container v-show="!createFlower" class="bv-example-row">
      <b-row>
        <b-col cols="8"></b-col>
        <b-col cols="4">
          <button
            class="button-59"
            style="float: right"
            role="button"
            @click="close"
          >
            Novo1
          </button></b-col
        >
      </b-row>
    </b-container>

    <b-container v-show="createFlower" class="bv-example-row">
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <button class="button-59" @click="close">Cancelar</button></b-col
        >
      </b-row>
    </b-container>


    </div>


    <div class="newFlower" v-show="!createFlower">
      <div class="forms">
        <div class="field field_v1 group">
          <label for="nome" class="ha-screen-reader">Nome da planta</label>
          <input
            id="nome"
            class="field__input"
            placeholder="Hortelã"
            v-model="flower.name"
          />
          <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">Nome da planta</span>
          </span>
        </div>

        <div class="field field_v1 group">
          <label for="author" class="ha-screen-reader">Nome científico</label>
          <input
            id="author"
            class="field__input"
            placeholder="Mentha spicata"
            v-model="flower.authors"
          />
          <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">Nome científico</span>
          </span>
        </div>

        <div class="group">
          <p>Sobre</p>

          <quill-editor
            id="about"
            style="width: 400px"
            v-model="flower.description"
          >
          </quill-editor>
        </div>

        <br />

        <div class="field field_v1 group">
          <label for="use" class="ha-screen-reader">Uso da planta</label>
          <input
            id="use"
            class="field__input"
            placeholder="Chá"
            v-model="flower.use"
          />
          <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">Uso da planta</span>
          </span>
        </div>

        <div class="field field_v1 group">
          <label for="firstimg" class="ha-screen-reader"
            >Imagem para capa</label
          >
          <input
            id="firstimg"
            class="field__input"
            placeholder="Url da imagem"
            v-model="flower.first_img"
          />
          <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">Imagem para capa</span>
          </span>
        </div>

        <div>
          <p>Imagens para listagem</p>
        <div
          :key="`custom-url-${index}`"
          v-for="(customUrl, index) in flower.images"
        >
          <div class="field field_v1">

            <input
            id="firstimg"
            style="width: 100%;"
            class="field__input"
            placeholder="Url da imagem"
            v-model="customUrl.url"
          />
          
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Url da img para listagem</span>
            </span>
          </div>
        </div>
        <div>
          <button
            class="button-59"
            style="width: 100%; margin-bottom: 10px; margin-top: 10px;"
            @click="addNewImage"
          >
            Adicionar nova imagem
          </button>
        </div>
      </div>
        </div>
        

      <div class="div-buttons">
        <button class="button-59" @click="addItem()" :disabled="submit">
          Salvar
        </button>
      </div>
    </div>

    <br />
    <br />
    <br />

    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center Table-header">
        <b-col cols="2"> #ID </b-col>
        <b-col cols="5"> Nome </b-col>
        <b-col cols="5"> Ações</b-col>
      </b-row>

      <b-row
        class="justify-content-md-center Table-body"
        v-for="item in flowers"
      >
        <!-- id -->
        <b-col cols="2">
          {{ item.id }}
        </b-col>
        <b-col cols="5">
          {{ item.name }}
        </b-col>
        <b-col cols="5">
          <button type="button" class="btn" @click="removeItem(item.id)">
            Delete
          </button>
          <button type="button" class="btn cor-editar" @click="remove(item)">
            Editar
          </button>
          <!-- <router-link :to="`/view/${item.id}`">
            <button type="button" class="btn cor-view">
              Visualizar
            </button>
          </router-link> -->
          <button type="button" class="btn cor-view" @click="copyLink(item.id)">
            Copiar
          </button>
        </b-col>
        <hr class="line" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import View from "../View/View.vue";
import api from "../../../service/api";
import "quill/dist/quill.snow.css";

export default {
  components: {
    view: View,
  },

  data() {
    return {
      titulo: "Lista",
      createFlower: false,
      editIndex: -1,
      flowers: [],
      flower: {
        id: 0,
        name: "",
        authors: "",
        description: "",
        use: "",
        first_img: "",
        images: [],
      },
    };
  },

  created() {
    this.getFlower();
  },

  methods: {
    getFlower() {
      api
        .get("/flowers")
        .then((res) => {
          this.flowers = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addItem() {
      if (document.getElementById("nome").value == "") {
        alert("Por favor, preencha o campo");
        document.getElementById("nome").focus();
      } else if (document.getElementById("author").value == "") {
        alert("Por favor, preencha o campo");
        document.getElementById("author").focus();
      } else if (document.getElementById("use").value == "") {
        alert("Por favor, preencha o campo");
        document.getElementById("use").focus();
      } else if (document.getElementById("author").value == "") {
        alert("Por favor, preencha o campo");
        document.getElementById("author").focus();
      } else if (document.getElementById("firstimg").value == "") {
        alert("Por favor, preencha o campo");
        document.getElementById("firstimg").focus();
      } else {
        const res = api.post(`/flowers`, {
          id: 0,
          name: this.flower.name,
          authors: this.flower.authors,
          description: this.flower.description,
          use: this.flower.use,
          first_img: this.flower.first_img,
          images: this.flower.images,
        });
        this.flowers = [...this.flowers, res.data];
        this.createFlower = !this.createFlower;
        setTimeout(function () {
          window.location.reload(1);
        }, 1000);
      }
    },

    close() {
      (this.flower.name = ""),
        (this.flower.authors = ""),
        (this.flower.description = ""),
        (this.flower.use = ""),
        (this.flower.first_img = ""),
        (this.createFlower = !this.createFlower);
      window.scrollTo(0, 0);
    },

    addNewImage() {
      this.flower.images.push({
        sequence: this.flower.images.length + 1,
        url: "",
      });
    },

    removeItem(id) {
      if (confirm("Confirmar deletar?")) {
        api.delete(`/flowers/${id}`);
        this.flowers = this.flowers.filter((flowers) => flowers.id !== id);
      }
      return;
    },

    copyLink(item) {
      const el = document.createElement("textarea");
      el.value = "https://vue-teste-gray.vercel.app/view/" + item;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },

    edit(flower) {
      this.flower = Object.assign({}, this.flower);
      this.editIndex = this.flowers.indexOf(
        this.flowers.find((u) => u.id === this.flower.id)
      );
      this.dialog = true;
    },

    remove(flower) {
      console.log("oi");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/styles/input.css");
@import url("../../assets/styles/button.css");

html {
  scroll-behavior: smooth;
}

.header {
  padding-top: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1140px;
  justify-content: center;
  margin: 0 auto;
}

.line {
  border-top: 1px solid #c8c8c8;
}

p {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.body {
  margin: 0px;
  padding: 0px;
  font-family: "Quicksand";
}
.title {
  font-size: 50px;
  line-height: 61px
}
.Table-header {
  display: flex;
  font-weight: bold;
  text-align: center;
}

.Table-body {
  display: flex;
  font-weight: normal;
  text-align: center;
}

.btn {
  border-radius: none;
  color: red;
}

.cor-editar {
  color: green;
}
.cor-view {
  color: blue;
}
/* CSS */

.newFlower {
  display: grid;
  margin: 0 auto;
}


@media (max-device-width: 540px) {

  .div-buttons {
    display: flex;
    flex-direction: column;
  }
}

.forms {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

@media (max-device-width: 540px) {
  .forms {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
