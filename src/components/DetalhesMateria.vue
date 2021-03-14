<template>
  <q-dialog v-model="visibilidade">
    <q-layout class="detalhes_container">
      <q-header class="detalhes_header">
        <span>Detalhes da Materia</span>
        <q-icon name="close" v-close-popup></q-icon>
      </q-header>
      <q-page-container class="detalhes_materia">
        <span>Nome: {{ materia.materia }} </span>
        <span>Periodo: {{ materia.periodo }}</span>
        <span>Nucleo: {{ materia.nucleo }} </span>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script>
import Materias from 'assets/ENGCO-BM-2.json'
export default {
  name: 'DetalhesMateria',
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
    }
  }
}
</script>

<style scoped>
.detalhes_container {
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

.detalhes_materia{
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  padding: 2.4rem;
  justify-items: center;
}
</style>
