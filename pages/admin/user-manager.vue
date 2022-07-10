<template>
  <div class='pt-5'>
    <data-grid-view
      :headers='headers'
      :search-headers='searchHeaders'
      :rows='rows'
      :editUser='editUser'

      @button:add:click='insertRow'
      @button:save:click='saveRows'
      @button:remove:click='removeRows'
      @button:search:click='searchRows'

      @table:edit:start='changeStartEdit'
      @table:edit:cancel='changeCancelEdit'
      @table:edit:end='changeEndEdit'
    >
    </data-grid-view>
  </div>
</template>

<script>
let i = 1;
export default {
  name: "user-manager",
  data() {
    return {
      headers: [
        {divider:true,value: "editable", text: "editable", align: "center", width: "100px", changeAble: false},
        {divider:true,value: "division", text: "division", align: "center", width: "100px", changeAble: false},
        {divider:true,value: "id", text: "ID", align: "center", width: "20px", changeAble: false},
        {divider:true,value: "name", text: "이름", align: "center", width: "50px", changeAble: true},
        {divider:true,value: "number", text: "전화번호", align: "center", width: "50px", changeAble: true},
        {divider:true,value: "position", text: "구분", align: "center", width: "50px", changeAble: true},
        {divider:true,value: "edits", text: "관리", align: "center", width: "50px", changeAble: false},
      ],
      rows: [],
      editUser: this.createDefaultEditUser()
    }
  },
  computed: {
    searchHeaders: function () {
      return this.headers.map(header => ({
          text: header.text,
          value: header.value
        })
      )
    }
  },
  methods: {
    createDefaultEditUser() {
      return {
        name: "",
        number: "",
        position: "",
      }
    },
    createDefaultUser() {
      return {
        editable: false,
        division: "INSERT",
        id: `${i++}`,
        name: "",
        number: "",
        position: ""
      }
    },
    insertRow() {
      this.rows.unshift(this.createDefaultUser());
    },

    changeStartEdit(index) {
      if (this.validateEditingRow()) return;
      this.editUser = {
        name: this.rows[index].name,
        number: this.rows[index].number,
        position: this.rows[index].position
      }
      if (this.rows[index].division === "INSERT") {
        this.rows[index].editable = true;
        return;
      }
      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      this.$store.commit("sample/changeStartEdit", {
        index: selectedIndex
      });
      this.rows[index].editable = true;
    },
    changeCancelEdit(index) {
      if (this.rows[index].division === "INSERT") {
        this.rows[index].editable = false;
        return;
      }

      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      this.$store.commit("sample/changeCancelEdit", {
        index: selectedIndex
      });
      this.editUser = this.createDefaultEditUser();
    },
    changeEndEdit(index) {
      if (this.rows[index].division === "INSERT") {
        this.rows.splice(index, 1, {
          ...this.rows[index],
          ...this.editUser
        })
        this.rows[index].editable = false;
        return;
      }
      const selectedIndex = this.$store.getters["sample/findIndex"](this.rows[index].id);
      if(selectedIndex === -1) return;
      this.$store.commit("sample/changeEndEdit", {
        index: selectedIndex,
        editUser: this.editUser
      });
      const data =this.$store.getters["sample/findByIndex"](selectedIndex);
      this.rows.splice(index, 1,
        JSON.parse(JSON.stringify(data)))
      this.rows[index].division = "UPDATE";
      this.rows[index].editable = false;
    },

    validateEditingRow() {
      return this.rows.some((row, index) => {
        if (row.editable) {
          alert(`아직 ${index + 1}행이 편집중입니다.`);
          return false;
        }
      })
    },

    saveRows() {
      if (this.validateEditingRow()) return;
      const changedRows = this.rows.filter(row => row.division !== "SELECT");
      this.$store.dispatch("sample/saveRows", changedRows);
    },
    removeRows(indexes) {
      const savedIndex = indexes
        .sort()
        .reverse()
        .reduce((pre, cal, index) => {
          this.rows.splice(index, 1);
          if (this.rows[index].division === "INSERT") {
            return pre;
          }
          return [...pre, this.$store.getters["sample/findIndex"](this.rows[cal].id)];
        }, [])
      console.log(savedIndex)
      if (savedIndex.length) {
        this.$store.commit("sample/removeRows", {
          indexes: savedIndex
        });
      }
    },
    searchRows(payload) {
      this.rows = JSON.parse(JSON.stringify(this.$store.getters["sample/searchUser"](payload)))
    },

  }
}
</script>

<style scoped lang='scss'>

</style>
