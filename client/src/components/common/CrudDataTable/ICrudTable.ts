import { DataTableHeader } from 'vuetify';
import { IBasicRows } from '@/pages/CallerManageComposable';
import { IEditHandlerGroup } from '@/components/common/EditHandlerGroup/EditHandlerGroupComposable';

export interface IDataGridViewHeader extends DataTableHeader {
  searchAble?: boolean;
}

export type ICrudDataTable = {
  tableTitle: string
  rows: Array<IBasicRows>,
  headers: Array<IDataGridViewHeader>,
  selectedKey?: string
  useSelector?: boolean,
  usePageable?: boolean,
  useButtons?:IEditHandlerGroup
}
