import { IUserRow } from '@/pages/ManageUser/ManageUserComposable';

export interface IAddressBook {
  id: number,
  name: string,
  children: IAddressBook[],
  users: IUserRow[]
}

export interface IAddressBookProps {
  addressItem?: IAddressBook[]
}

export interface IAddressInsertPayload {
  id: number
}
export interface IClickItemPayload{
  item: IAddressBook
}
