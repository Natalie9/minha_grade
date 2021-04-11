<template>
  <!--  <div v-for="mat of todasMaterias" :key="mat.id">-->
  <!--    {{ mat.materia }}-->
  <!--  </div>-->
  <Mermaid v-if="mostrar" :nodes="todasMaterias" type="graph LR"></Mermaid>
</template>

<script>
import Mermaid from 'components/Mermaid'
import Materias from 'assets/ENGCO-BM-2.json'

export default {

  name: 'Nodo',
  components: {
    Mermaid
  },
  props: {
    materia: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      todasMaterias: [],
      mostrar: false
    }
  },
  methods: {
    searchMateria (idMateria) {
      const materia = Materias.componentes_curriculares.find(mat => mat.id === idMateria)
      return materia
    },
    searchNext (materia) {
      const proximas = []
      for (const idProximaMateria of materia.next) {
        proximas.push(this.searchMateria(idProximaMateria))
      }
      return proximas
    }
  },
  created () {
    const todasMaterias = [this.materia]
    for (const materia of todasMaterias) {
      if (materia?.next?.length) {
        todasMaterias.push(this.searchNext(materia))
      }
    }
    this.todasMaterias = todasMaterias.flat()
    this.mostrar = true
    console.log('todas this', this.todasMaterias)
  }
}
</script>

<style scoped>

</style>
