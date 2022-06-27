<template>


  <nuxt-link class="xidps-menu-item"  to="/admin/user/manage" :class="{clicked:selected}">
    <v-icon>{{ icon }}</v-icon>
    <span class="xidps-menu-content">{{ menuName }}</span>
  </nuxt-link>


</template>

<script>
export default {
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: function () {
        return ""
      }
    },
    menuName: {
      type: String,
      default: function () {
        return "1234"
      }
    },
    selected: {
      type: Boolean,
      default: function () {
        return true
      }
    },
  },
}
</script>

<style scoped lang="scss">
.xidps-menu-item {
  width: 310px;
  padding-left: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px;
  color: $white;
  font-weight: $semi-bold;

  &:hover {
    background-color: $dark-indigo;
  }

  .v-icon {
    color: $lavender !important;
    width:30px;
  }

  .xidps-menu-content {
    padding-left: 10px;
  }
}

.clicked {
  background-color: $dark-blue-grey;
  border-left: 6px solid $cornflower;
  margin-left: -6px;
}
</style>
