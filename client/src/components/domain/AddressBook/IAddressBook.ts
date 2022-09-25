export interface IAddressBook {
  id: number,
  name: string,
  children: IAddressBook[]
}

export interface IAddressBookProps {
  addressItem?: IAddressBook[]
}

export interface IAddressInsertPayload {
  id: number
}
