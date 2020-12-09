<template>
  <div class="container">
    <h2>{{ isAdd ? "Add" : "Edit" }}</h2>
    <TextInput v-for="(el,i) in fields" :key="i" :placeholder="el.en" v-model="values[el.key]"/>

    <div class="actions">
      <Button @click="onBackClick">Back</Button>
      <Button style="margin-left: 10px" @click="onSubmitClick">Submit</Button>
    </div>

    <TextArea :cols="70" v-model="json"/>

    <div class="actions">
      <Button @click="onImportFromJsonClick">Import from json</Button>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/input/TextInput";
import Entity from "@/data/entity";
import Storage from "@/data/storage";
import Button from "@/components/Button";
import TextArea from "@/components/input/TextArea";

export default {
  name: "Edit",
  components: {TextArea, Button, TextInput},
  data() {
    const storage = new Storage();
    const index = this.$route.params.index == undefined ? -1 : parseInt(this.$route.params.index);
    const isAdd = index === -1;
    const fields = Entity.getFields();
    const values = isAdd ? {} : storage.getAll()[index];
    return {storage, fields, index, values, isAdd, json: ""};
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
    },
    onImportFromJsonClick() {
      let index = 0;
      try {
        const res = JSON.parse(this.json).map((el, i) => {
          index = i;
          return new Entity(el);
        });
        console.log(res);
        this.storage.create(res);
        this.storage.save();
        console.log(this.storage.entities);
        this.$router.push({name: "home"});
      } catch (e) {
        switch (e.name) {
          case "SyntaxError":
            alert("Invalid json syntax");
            break;
          case "InvalidNameError":
            alert(`Invalid name value at index ${index}`);
            break;
          case "InvalidSurnameError":
            alert(`Invalid surname value at index ${index}`);
            break;
          case "InvalidPhoneError":
            alert(`Invalid phone value at index ${index}`);
            break;
          case "InvalidEmailError":
            alert(`Invalid email value at index ${index}`);
            break;
          default:
            console.log(e);
        }
      }
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

.actions {
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

</style>
