import { NavigationGuardNext, Route } from 'vue-router';
import { useAuthStore } from '@/store/auth';

function isAuthenticated() : boolean {
  return useAuthStore().isLoggedIn();
}

/**
 * 로그인을 하지 하지않은 사용자만 접근 가능함
 * @param to
 * @param from
 * @param next
 */
// eslint-disable-next-line max-len
export const useOnlyUnAuthenticationUserGuard = (to:Route, from: Route, next: NavigationGuardNext) => {
  if (isAuthenticated()) {
    next({ path: '/' });
    return;
  }
  next();
};

/**
 * 로그인한 사용자만 접근 가능함
 * @param to
 * @param from
 * @param next
 */
export const useAuthenticationUserGuard = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (isAuthenticated()) {
    next();
    return;
  }
  next({ path: '/auth' });
};
