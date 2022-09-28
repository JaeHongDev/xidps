import { reactive } from 'vue';
// eslint-disable-next-line import/no-cycle
import { useAuthStore } from '@/store/auth';

export interface IAuthInformation {
  id:string;
  password:string;
  company: string;
}
export const LoginPageComposable = () => {
  const authInformation = reactive<IAuthInformation>({
    id: '',
    password: '',
    company: 'xid_c',
  });

  const login = () => {
    const authStore = useAuthStore();
    authStore.login(authInformation);
  };
  return { authInformation, login };
};

export default LoginPageComposable;
