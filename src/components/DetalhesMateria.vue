<template>
  <q-dialog v-model="visibilidade">
    <q-layout class="layout_container">
      <q-header class="detalhes_header">
        <span>Detalhes da Materia</span>
        <q-icon name="close" class="cursor-pointer" v-close-popup></q-icon>
      </q-header>
      <q-page-container class="detalhes_container">
        <div class="detalhes_texto">
          <span>Nome: {{ materia.materia }} </span>
          <span>{{ materia.periodo }}° período </span>
          <span>Nucleo: {{ materia.nucleo }} </span>
          <Nodo :materia="materia"></Nodo>

        </div>
        <q-btn class="detalhes_botao" label="Ver mais" @click="irParaMateria"></q-btn>

      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import Materias from 'assets/ENGCO-BM-2.json'
import DadosMaterias from 'assets/materias.json'
import Nodo from 'components/Nodo'

export default {
  name: 'DetalhesMateria',
  components: {
    Nodo
  },
  data () {
    return {
      visibilidade: false,
      materias: Materias.componentes_curriculares,
      materia: {}
    }
  },
  methods: {
    atualizar (id) {
      this.materia = this.materias.filter((mat) => mat.id === id)[0]
    },
    irParaMateria () {
      this.$router.push({
        name: 'Materia',
        params: {
          id: this.materia.id
        }
      })
    }
  },
  computed: {
    materiaFluxo () {
      return [this.materia]
    },
    testeDadosFluxo () {
      return DadosMaterias.data
    }
  }
}
</script>

<style scoped>
.layout_container {
  background: var(--grey);
  color: var(--white);
}

.detalhes_header {
  background: var(--yellow-secondaty);
  font-size: 1.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detalhes_container {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  padding: 2.4rem;
  align-content: space-between;
}

.detalhes_texto {
  display: flex;
  flex-direction: column;
  margin: 1.2rem;
}

.detalhes_botao {
  background: var(--yellow-secondaty);
}
</style>
