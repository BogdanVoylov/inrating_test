<template>
  <div class="container">
    <h2>{{ isAdd ? "Add" : "Edit" }}</h2>
    <TextInput v-for="(el,i) in fields" :key="i" :placeholder="el.en" v-model="values[el.key]" required/>
    <div class="actions">
      <Button @click="onBackClick">Back</Button>
      <Button style="margin-left: 10px" @click="onSubmitClick">Submit</Button>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
import Entity from "@/data/entity";
import Storage from "@/data/storage";
import Button from "@/components/Button";

export default {
  name: "Edit",
  components: {Button, TextInput},
  data() {
    const storage = new Storage();
    const index = this.$route.params.index == undefined ? -1 : parseInt(this.$route.params.index);
    const isAdd = index === -1;
    const fields = Entity.getFields();
    const values = isAdd ? {} : storage.getAll()[index];
    return {storage, fields, index, values, isAdd};
  },
  methods: {
    onBackClick() {
      this.$router.push({name: "home"});
    },
    onSubmitClick() {
      let entity;
      try {
        entity = new Entity({...this.values});
      } catch (e) {
        if (e.name === "InvalidNameError") {
          alert("Invalid name");
        } else if (e.name === "InvalidSurnameError") {
          alert("Invalid surname");
        } else if (e.name === "InvalidEmailError") {
          alert("Invalid email");
        } else if (e.name === "InvalidPhoneError") {
          alert("Invalid phone number");
        }
        return;
      }
      if (!this.isAdd) {
        this.storage.update(this.index, entity);
      } else {
        this.storage.create(entity);
      }
      this.storage.save();
      this.$router.push({name: "home"});
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
}

.container {
  text-align: center;
  padding-top: 10px;
}
</style>
