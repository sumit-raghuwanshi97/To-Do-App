import { SerializedErrorField } from './serialized-error-field.entity';

export interface DataFetchState<T> {
  loading: boolean;
  errors?: SerializedErrorField;
  data?: T;
}
