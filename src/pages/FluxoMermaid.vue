<template>
  <q-layout>
    <div class="fluxo">
      <vue-mermaid
        :nodes="data"
        type="graph LR"
      ></vue-mermaid>
      <Mermaid :nodes="materias" type="graph LR"></Mermaid>
    </div>
  </q-layout>
</template>

<script>
import VueMermaid from 'vue-mermaid'
import { defineComponent } from 'vue'
import Materias from 'assets/materias.json'
import Mermaid from 'components/Mermaid'

export default defineComponent({
  name: 'PageIndex',
  components: {
    Mermaid,
    VueMermaid
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
