import { reactive } from 'vue';
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
    authStore.login();
  };
  return { authInformation, login };
};

export default LoginPageComposable;
