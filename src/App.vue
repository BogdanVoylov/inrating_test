<template>
  <div id="app">
    <Background>
      <router-view/>
    </Background>
  </div>
</template>
<script>
import Background from "@/components/Background";

export default {
  name: "App",
  components: {
    Background
  }
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100);

* {
  font-family: exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
}

html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
