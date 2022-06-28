<template>
  <div v-if="hasChild" :class="[{'fs-6': IsChild}]" class="xidps-menu-item">
    <v-icon size="6">{{ icon }}</v-icon>
    <span class="xidps-menu-content">{{ menuName }}</span>
  </div>
  <nuxt-link v-else :class="[{'fs-6': IsChild}]" class="xidps-menu-item" to="/admin/user/manage">
    <v-icon size="14">{{ icon }}</v-icon>
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
    hasChild:{
      type:Boolean,
      default:function(){
        return false;
      }
    }
  },
  computed:{
    IsChild(){
      return this.$parent.level;
    }
  }
}
</script>

<style scoped lang="scss">
.xidps-menu-item {
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px;
  color: $white;
  font-weight: $semi-bold;


  .v-icon {
    color: $lavender !important;
    width:30px;
  }

  .xidps-menu-content {
  }
}

</style>
