<template>
  <q-layout>
    <div class="fluxo">
      <Mermaid :nodes="materias" type="graph LR"></Mermaid>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Mermaid from 'components/Mermaid'
import Materias from 'assets/materias.json'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Mermaid
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
  background: black;
  width: 100vw;
}
</style>
