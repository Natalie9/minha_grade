<template>
  <q-layout>
    <div class="container">
      <div v-for="(periodo, index) in periodos" :key="periodo" class="periodos_container">
        <span class="periodo-title">{{ index }}</span>

        <div v-for="materia of periodo" :key="materia.id" class="materias_container" @click="viewDetails(materia.id)">
          <div class="materia_card">
            {{ materia.materia }}
          </div>
        </div>
      </div>

    </div>
    <detalhes-materia ref="detalhesMateria"></detalhes-materia>
  </q-layout>
</template>

<script>
import Materias from 'assets/ENGCO-BM-2.json'
import DetalhesMateria from 'components/DetalhesMateria'

export default {

  name: 'Periodos',
  components: { DetalhesMateria },
  data () {
    return {
      materias: Materias.componentes_curriculares
    }
  },
  methods: {
    viewDetails (id) {
      this.$refs.detalhesMateria.visibilidade = true
      this.$refs.detalhesMateria.atualizar(id)
    }
  },
  computed: {
    periodos () {
      const periodos = {}
      this.materias.forEach(mat => {
        if (periodos[mat.periodo]) {
          periodos[mat.periodo].push(mat)
        } else {
          periodos[mat.periodo] = [mat]
        }
      })
      return periodos
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: fit-content;
  box-sizing: border-box;
}

.periodos_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.periodo-title{
  font-size: 2rem;
  color: whitesmoke;
}

.materia_card {
  background: var(--blue-primary);
  padding: 0.8rem;
  margin: 1rem;
  width: 45vw;
  border-radius: 5px;
  text-align: center;
  color: var(--white);
  word-wrap: normal;
}

@media (min-width: 900px) {
  .materia_card {
    width: 15vw;
  }
}

.materias_container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
</style>
