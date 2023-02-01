<template>
  <div class="painel">
    <div class="img-painel">
      <slot> </slot>
    </div>
    <div>
      <p class="font">Nome: {{ flower.name }}</p>
      <p class="font">Nome Cientifico: {{ flower.authors }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flower"],

  data() {
    return {};
  }
};
</script>

<style scoped>
.font {
  font-family: "Quicksand";
}


.painel {
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

.lista-itens {
  width: 250px;
  height: 300px;
}
@media (max-width: 900px) {
  .lista-fotos {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 620px) {
  .lista-fotos {
    grid-template-columns: 1fr 1fr;
  }
}
.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}
.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.5s;
}
</style>
