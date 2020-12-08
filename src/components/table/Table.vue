<template>
  <table>
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: "Table"
};
</script>

<style scoped>
table {
  width: calc(100% - 40px);
  margin: 20px;
  border-collapse: separate;
  border: solid white 1px;
  border-radius: 6px;
  -moz-border-radius: 6px;
}

</style>
