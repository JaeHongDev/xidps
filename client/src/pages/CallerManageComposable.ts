import { reactive, Ref, ref } from 'vue';

// eslint-disable-next-line no-shadow
export enum EInputStatus{
  INSERT,
  UPDATE,
  SELECT
}
// eslint-disable-next-line no-shadow
export enum EditStatus {
  EDITING,
  UNEDITTING
}
export interface IBasicRows{
  /**
   * primary key
   */
  key: number;
  inputStatus: EInputStatus;
  editStatus: EditStatus
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
    editStatus: EditStatus.UNEDITTING,
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
  const editCallerId = reactive({
    manager: '',
    department: '',
    status: '',
    memo: '',
  });
  const selectedIndexes = ref<Array<number>>([]);

  const insertNewCaller = () => {
    callerList.value.unshift(createDefaultCaller(index += 1));
  };
  const findIndexByKey = (key:number) => callerList.value.findIndex((caller) => caller.key === key);

  const handleEditStart = (key: number) => {
    const findCallerId = callerList.value[findIndexByKey(key)];
    findCallerId.editStatus = EditStatus.EDITING;

    editCallerId.manager = findCallerId.manager;
    editCallerId.memo = findCallerId.memo;
    editCallerId.status = findCallerId.status;
    editCallerId.department = findCallerId.department;
  };

  const handleEditEnd = (key:number) => {
    const findCallerId = callerList.value[findIndexByKey(key)];
    if (findCallerId.inputStatus === EInputStatus.SELECT) findCallerId.inputStatus = EInputStatus.UPDATE;

    findCallerId.manager = editCallerId.manager;
    findCallerId.memo = editCallerId.memo;
    findCallerId.department = editCallerId.department;
    findCallerId.status = editCallerId.status;
    findCallerId.editStatus = EditStatus.UNEDITTING;

    editCallerId.manager = '';
    editCallerId.manager = '';
    editCallerId.status = '';
    editCallerId.department = '';
  };
  const handleEditCancel = (key:number) => {
    const findCallerId = callerList.value[findIndexByKey(key)];
    findCallerId.editStatus = EditStatus.UNEDITTING;
  };
  const handleRemove = () => {
    console.log(selectedIndexes);
  };
  const handleSave = () => {
    callerList.value = callerList.value.map((callerId) => {
      const copyCallerId = callerId;
      copyCallerId.inputStatus = EInputStatus.SELECT;
      return copyCallerId;
    });
  };

  return {
    callerList,
    editCallerId,
    selectedIndexes,
    insertNewCaller,
    handleEditStart,
    handleEditEnd,
    handleEditCancel,
    handleSave,
    handleRemove,
  };
};
