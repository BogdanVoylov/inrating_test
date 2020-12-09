<template>
<textarea :rows="rows" :cols="cols"
          :placeholder="placeholder"
          v-model="buffer"
          @keyup="onInput"/>
</template>

<script>
import {input} from "@/components/input/mixins/input";

export default {
  name: "TextArea",
  mixins: [input],
  props: {
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    console.log(this.cols);
  }
};
</script>

<style scoped>
textarea {
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(135, 135, 135, 0.1);
  width: auto;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: #999;
  transition-duration: 0.25s;
  font-weight: 300;
}
</style>
