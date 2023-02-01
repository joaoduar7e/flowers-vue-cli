<template>

    <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo"> {{ rotulo }} </button>

</template>

<script>
export default {
    props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],
    methods: {
        disparaAcao() {
            console.log(this.confirmacao)
            if (this.confirmacao) {
                if (confirm('Confirmar operação?')) {
                    this.$emit('botaoAtivado')
                }
                return;
            }else{
                this.$emit('botaoAtivado')
        }
    }
    },
    computed:
    {
        estiloDoBotao(){
            if(this.estilo == 'padrao'  || !this.estilo) return 'botao botao-padrao';
            if(this.estilo == 'perigo') return 'botao botao-perigo';
        }
    }
}
</script>


<style>
.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}
.botao-perigo {
    background: red;
    color: white;
}
.botao-padrao {
    background: darkcyan;
    color: white;
}
.botao-editar {

}
</style>