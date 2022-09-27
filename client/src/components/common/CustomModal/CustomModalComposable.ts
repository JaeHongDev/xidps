import { reactive, toRefs } from 'vue';

export interface ICustomModal {
  isShow: boolean;
  title?: string;
}

export const customModalComposable = ({ isShow = false, title = '' }) => {
  const data = reactive<ICustomModal>({ isShow, title });

  const openModal = () => {
    data.isShow = true;
  };
  const closeModal = () => {
    data.isShow = false;
  };
  return {
    ...toRefs(data),
    openModal,
    closeModal,
  };
};
