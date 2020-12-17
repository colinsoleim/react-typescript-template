import { BaseStore } from './base.store';

export abstract class BaseRecordStore<StateType> extends BaseStore<StateType> {
  // #####################
  // ABSTRACT RECORD METHODS
  // #####################

  // Fetch all records from API
  abstract fetchRecords(params: string, page: number, per: number): void;
  abstract fetchRecords(params: string): void;

  // Fetch single record from API
  abstract fetchRecord(parentId: string, id: string, params: string): void;
  abstract fetchRecord(id: string, params: string): void;
  // fetchRecord(studentId: string, appointmentId: string, params: string): void;
}
