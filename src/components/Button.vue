<template>
  <button @click="onClick" :class="`btn ${theme}`">
    <slot>btn</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: "default"
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.btn {
  appearance: none;
  outline: 0;
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 30px;
  transition-duration: 0.25s;
  font-family: ubuntu, "segoe ui", helvetica, arial, sans-serif;
}

.default {
  background-color: rgba(153, 153, 153, .5);
  color: white;
}

.default:hover {
  background-color: rgba(153, 153, 153, .8);
}

.danger {
  color: white;
  background-color: rgba(191, 4, 45, .5);
}

.danger:hover {
  background-color: rgba(191, 4, 45, .8);
}

.amber {
  color: white;
  background-color: rgba(255, 201, 40, .5);
}

.amber:hover {
  background-color: rgba(255, 201, 40, .8);
}

</style>
