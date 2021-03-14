<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
:root{
  --black: #0A0903;
  --blue-primary:#4472c4;
  --yellow-secondaty: #ffc000;
  --grey: #343841;
  --grey-light: #888a8d;
  --white: whitesmoke;
}
body {
  background: var(--black);
  --scrollbarBG: var(--grey);
  /*--thumbBG: var(--grey);*/
}

body::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

body::-webkit-scrollbar-thumb {
  background: var(--grey);
  border-radius: 30px;
}

body::-webkit-scrollbar-track {
  /*background: var(--grey);*/
  border-radius: 30px;
}

</style>
