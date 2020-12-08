<template>
  <div style="text-align: center">
    <h2>{{ isAdd ? "Add" : "Edit" }}</h2>
    <TextInput v-for="(el,i) in fields" :key="i" :placeholder="el.en" v-model="values[el.key]"/>
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
    console.log(storage)
    console.log(storage.getAll())
    console.log(index)
    const values = isAdd ? {} : storage.getAll()[index];
    console.log(values)
    return {storage, fields, index, values, isAdd}
  },
  methods: {
    onBackClick() {
      this.$router.push({name: "home"})
    },
    onSubmitClick() {
      let entity;
      try {
        entity = new Entity({...this.values})
      } catch (e) {
        if (e.name === "InvalidEmailError") {
          alert("Invalid email");
        } else if (e.name === "InvalidPhoneError") {
          alert("Invalid phone number");
        }
        return;
      }
      console.log({lol: this.isAdd})
      if (!this.isAdd) {
        this.storage.update(this.index, entity);
      } else {
        this.storage.create(entity);
      }
      this.storage.save();
      this.$router.push({name: "home"})
    }
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>
