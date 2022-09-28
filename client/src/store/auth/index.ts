import { defineStore } from 'pinia';
import { EAuthority, IUser } from '@/store/auth/IUser';
// eslint-disable-next-line import/no-cycle
import { IAuthInformation } from '@/pages/LoginPageCompsable';

interface IAuthState {
  user: IUser | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => () => state.user !== null,
  },
  actions: {
    login(auth:IAuthInformation) {
      this.user = {
        id: '1',
        name: '2',
        company: {
          id: 'xid_c',
          name: '1234',
        },
        authority: auth.id === 'admin' ? EAuthority.ADMIN : EAuthority.MANAGE,
      };
    },
  },
});

export default {
  useAuthStore,
};
