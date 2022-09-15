import { defineStore } from 'pinia';
import { IUser } from '@/store/auth/IUser';

interface IAuthState {
  user: IUser | null;
}
const AuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    user: null,
  }),
});

export default {
  AuthStore,
};
