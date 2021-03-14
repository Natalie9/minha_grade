<template>
  <q-layout>
    <q-page>
      <q-page-container class="text-primary text-h4 q-pa-lg">
        <p>
          {{ materia.materia }}
        </p>
        <p>
          Próximas matérias:
        </p>
        <div v-for="seguinte of materia.next" :key="seguinte">
          {{ seguinte }}
        </div>
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script>
import Materias from 'assets/ENGCO-BM-2.json'

export default {
  name: 'MateriaCompleta',
  data () {
    return {
      materias: Materias.componentes_curriculares,
      materia: {}
    }
  },
  methods: {
    atualizar (id) {
      this.materia = this.materias.filter((mat) => mat.id === id)[0]
    }
  },
  created () {
    if (this.$route.params.id) {
      this.atualizar(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
