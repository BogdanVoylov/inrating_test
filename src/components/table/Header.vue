<template>
  <th>
    <slot>

    </slot>
  </th>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
th{
  border-left:solid white 1px;
}
th:first-child {
  border-left: none;
}
</style>
