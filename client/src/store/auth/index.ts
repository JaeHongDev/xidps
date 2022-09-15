import { defineStore } from 'pinia';
import { IUser } from '@/store/auth/IUser';

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
    login() {
      this.user = {
        id: '1',
        name: '2',
        company: {
          id: 'xid_c',
          name: '1234',
        },
      };
    },
  },
});

export default {
  useAuthStore,
};
