<template>
  <q-layout>
    <div class="fluxo">
      <!--      <Mermaid :nodes="materias" type="graph LR"></Mermaid>-->
      <Periodos></Periodos>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Materias from 'assets/materias.json'
import Periodos from 'components/Periodos'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Periodos
    // Mermaid
  },
  data () {
    return {
      materias: Materias.data
    }
  },
  methods: {
    editNode (nodeId) {
      console.log({ nodeId })
    }
  }
})
</script>
<style>
.fluxo {
  height: 100vh;
  width: 100vw;
}
</style>
