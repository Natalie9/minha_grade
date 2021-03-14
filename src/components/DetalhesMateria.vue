<template>
  <q-dialog v-model="visibilidade">
    <q-layout class="bg-grey-10">
      <q-header class="detalhes_header">Detalhes da Materia</q-header>
      asdfasdfa
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  name: 'DetalhesMateria',
  data () {
    return {
      visibilidade: false
    }
  }
}
</script>

<style scoped>
.detalhes_header{
  background: var(--yellow-secondaty);
  font-size: 1.6rem;
  padding: 0.8rem;
}
</style>
