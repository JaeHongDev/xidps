<template>
  <div>
    <v-tooltip bottom class='floating-box' v-model='show'>
      <template v-slot:activator="{on, attrs}">
        <v-card>
          12345667
          <v-btn v-bind='attrs' v-on='on'>bottom</v-btn>
        </v-card>
      </template>
      <v-card>
        1234
      </v-card>
    </v-tooltip>
  </div>
</template>

<script>

/**
 * @description 해당 컴포넌트는 모달과 비슷한 개념의 플로팅 박스로 오픈 이벤트를 발생시키면 해당 컴포넌트 바로 아래
 */
export default {
  name: "FloatingBox",
  data(){
    return {
      show: true
    }
  }
}
</script>

<style scoped lang='scss'>

$tooltip-background-color: $white;
.v-tooltip__content {
  background-color:$white;
  color: black;
}
::v-deep .floating-box{
  background-color:$white;
}

</style>
