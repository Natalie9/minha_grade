<template>
  <q-layout>
    <div class="container">
      <div v-for="(periodo, index) in periodos" :key="periodo" class="periodos_container">
        <span class="periodo-title">{{ index }}</span>

        <div v-for="materia of periodo" :key="materia.id" class="materias_container">
          <div class="materia_card">
            {{ materia.materia }}
          </div>
        </div>
      </div>

    </div>
  </q-layout>
</template>

<script>
import Materias from 'assets/ENGCO-BM-2.json'

export default {

  name: 'Periodos',
  data () {
    return {
      materias: Materias.componentes_curriculares
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
  min-width: 20vw;
  align-items: center;
}
.periodo-title{
  font-size: 2rem;
  color: whitesmoke;
}

.materia_card {
  background: var(--blue-primary);
  padding: 1rem;
  margin: 1rem;
  width: 15vw;
  border-radius: 5px;
  text-align: center;
  color: var(--white);
}

.materias_container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
</style>
