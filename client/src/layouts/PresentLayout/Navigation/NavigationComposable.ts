import { ERouter } from '@/router/ERouter';
import { ref } from 'vue';

export interface INavigationListItem {
  name: string;
  icon: string;
  to: ERouter;
  children?: Array<INavigationListItem>
}

export const NavigationComposable = () => {
  const listItems = ref<Array<INavigationListItem>>([
    {
      name: '대시보드',
      icon: 'mdi-send',
      to: ERouter.HOME,
    },
    {
      name: '인증',
      icon: 'mdi-send',
      to: ERouter.SEND_MESSAGE,
    },
    {
      name: '발신번호 관리',
      icon: 'mdi-send',
      to: ERouter.MANAGE_USER,
    },
  ]);
  return { listItems };
};

export default {
  NavigationComposable,
};
