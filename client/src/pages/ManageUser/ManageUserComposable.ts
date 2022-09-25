import { EditStatus, EInputStatus, IBasicRows } from '@/pages/CallerManageComposable';
import { reactive, ref } from 'vue';

export interface IUserRow extends IBasicRows {
  userId: string;
  name: string;
  phoneNumber: string;
  divisionValue: string;
  var1: string;
  var2: string;
  var3: string;
  var4: string;
}
export const ManageUserComposable = () => {
  let key = 0;
  const rows = ref<Array<IUserRow>>([]);
  const editUser = reactive({
    name: '',
    phoneNumber: '',
    divisionValue: '',
    var1: '',
    var2: '',
    var3: '',
    var4: '',
  });

  // eslint-disable-next-line no-return-assign
  const createNewUserRows = ():IUserRow => ({
    key: key += 1,
    editStatus: EditStatus.UNEDITTING,
    inputStatus: EInputStatus.INSERT,
    userId: '',
    name: '',
    phoneNumber: '',
    divisionValue: '',
    var1: '',
    var2: '',
    var3: '',
    var4: '',
  });

  const handleUserAdd = () => {
    rows.value.unshift(createNewUserRows());
  };
  const findByKey = (targetKey:number) => rows.value.filter((row) => row.key === targetKey)[0];

  const handleEditStart = (targetKey:number) => {
    const findUser = findByKey(key);
    findUser.editStatus = EditStatus.EDITING;

    editUser.name = findUser.name;
    editUser.phoneNumber = findUser.phoneNumber;
    editUser.divisionValue = findUser.divisionValue;
    editUser.var1 = findUser.var1;
    editUser.var2 = findUser.var2;
    editUser.var3 = findUser.var3;
    editUser.var4 = findUser.var4;
  };
  const handleEditEnd = (targetKey:number) => {
    const findUser = findByKey(targetKey);
    findUser.editStatus = EditStatus.UNEDITTING;

    if (findUser.inputStatus === EInputStatus.SELECT) findUser.inputStatus = EInputStatus.UPDATE;

    findUser.name = editUser.name;
    findUser.phoneNumber = editUser.phoneNumber;
    findUser.divisionValue = editUser.divisionValue;
    findUser.var1 = editUser.var1;
    findUser.var2 = editUser.var2;
    findUser.var3 = editUser.var3;
    findUser.var4 = editUser.var4;
  };
  const handleEditCancel = (targetKey:number) => {
    findByKey(targetKey).editStatus = EditStatus.UNEDITTING;
  };

  return {
    rows,
    handleUserAdd,
    editUser,
    handleEditCancel,
    handleEditEnd,
    handleEditStart,
  };
};
