import { reactive, Ref, ref } from 'vue';

// eslint-disable-next-line no-shadow
export enum EInputStatus{
  INSERT,
  UPDATE,
  SELECT
}

export interface IBasicRows{
  /**
   * primary key
   */
  key: number;
  inputStatus: EInputStatus;
}
export interface ICaller extends IBasicRows{
  callerId: string;
  manager : string;
  department: string;
  status: string;
  memo: string;
}

function createDefaultCaller(index: number): ICaller {
  return {
    key: index,
    inputStatus: EInputStatus.INSERT,
    callerId: '123',
    manager: '123',
    department: '123',
    status: '',
    memo: '',
  };
}
export const CallerManageComposable = () => {
  let index = 0;
  const callerList = ref<Array<ICaller>>([]);
  const insertNewCaller = () => {
    callerList.value.unshift(createDefaultCaller(index += 1));
  };
  const findIndexByKey = (key:number) => callerList.value.findIndex((caller) => caller.key === key);
  return {
    callerList,
    insertNewCaller,
  };
};
