<template>
  <div class="container">
    <Button @click="onAddClick">Add</Button>
    <Table v-if="table != null" style="margin:20px 0 0 0; font-size: 30px">
      <Row>
        <Header v-for="(el,i) in headers" :key="i">
          {{ el }}
        </Header>
        <Header>
          <!--          for closing border-->
        </Header>
      </Row>
      <Row v-for="(el,i) in table" :key="i">
        <Cell v-for="(k,i) in keys" :key="i">
          {{ el[k] }}
        </Cell>
        <Cell>
          <Button @click="onEditClick(i)" theme="amber">Edit</Button>
        </Cell>
        <Cell>
          <Button @click="onDeleteClick(i)" theme="danger">Delete</Button>
        </Cell>
      </Row>
    </Table>
    <h1 v-else>Invalid data</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button";
import Table from "@/components/table/Table";
import Row from "@/components/table/Row";
import Header from "@/components/table/Header";
import Cell from "@/components/table/Cell";


import Entity from "@/data/entity";
import Storage from "@/data/storage";

export default {
  name: "Home",
  inject:['storage'],
  components: {
    Table,
    Row,
    Header,
    Cell,
    Button
  },

  data() {
    console.log("rerender");
    const table = this.storage.getAll();
    const fields = Entity.getFields();
    const keys = fields.map(el => {
      return el.key;
    });
    const headers = fields.map(el => {
      return el.en;
    });
    return {table, keys, headers};
  },

  methods: {
    onAddClick() {
      this.$router.push({name: "edit", params: {}});
    },
    onEditClick(index) {
      this.$router.push({name: "edit", params: {index}});
    },
    onDeleteClick(index) {
      this.storage.delete(index);
      console.log(index);
      this.storage.save();
      this.table = new Storage().getAll();
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 10px;
}
</style>


