<template>
  <div>
    <v-btn
      v-for="btnItem in btnItems"
      :key="btnItem.title"
      :title="btnItem.title"
      @click="btnItem.clickAction"
    >{{ btnItem.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnItems: [
        {
          title: '오늘',
          clickAction: () => {
            alert('클릭까지는 전달 완료');
            this.todaySyncToPicker();
          },
        },
        {
          title: '1주',
          clickAction: () => {
            this.weekSyncToPicker();
          },
        },
      ],
    };
  },
  methods: {
    todaySyncToPicker() {
      alert('함수까지 전달 확인');
    },
    weekSyncToPicker() {
      alert('함수까지 전달 확인');
    },
  },
};
</script>
