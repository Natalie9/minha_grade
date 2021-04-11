<template>
  <q-layout view="lHh Lpr lFf">
    <nav style="color:white; display: flex; column-gap: 15px; font-size: 15px; margin: 10px; cursor: pointer">
      <div @click="$router.push('Periodos')">Periodos</div>
      <div @click="$router.push('Fluxo')">Fluxo</div>
      <div @click="$router.push('Mermaid')">Mermaid</div>
    </nav>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>
<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
