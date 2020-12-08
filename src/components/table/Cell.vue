<template>
  <td>
    <slot>

    </slot>
  </td>
</template>

<script>
export default {
  name: "Cell"
};
</script>

<style scoped>
td {
  border-top: solid white 1px;
  border-left: solid white 1px;
}

td:first-child {
  border-left: none;
}
</style>
