import { ref } from 'vue';

export interface ICustomModal {
  isShow: boolean;
}

export const customModalComposable = (isShowProp = false, titleProp = '') => {
  const isShow = ref(isShowProp);
  const title = ref(titleProp);

  const openModal = () => {
    isShow.value = true;
  };
  const closeModal = () => {
    isShow.value = false;
  };
  return {
    isShow,
    title,
    openModal,
    closeModal,
  };
};
