export interface INotification {
  messageType: 'send' | 'info' | 'reserve';
  text: string;
  date: Date;
}
export interface IUnReadNotificationQuantity{
  notification: Array<INotification>
}

export interface IShipmentQuantity{
  SMS: number;
  LMS: number;
  PUSH: number;
  MMS: number;
}
export interface ICompany {
  id:string;
  name: string;
  shipmentQuantity: IShipmentQuantity;
}
export interface IUser{
  id:string;
  name:string;
  company: ICompany;
  unReadNotificationQuantity: IUnReadNotificationQuantity;
  shipmentQuntity: IShipmentQuantity;
}
