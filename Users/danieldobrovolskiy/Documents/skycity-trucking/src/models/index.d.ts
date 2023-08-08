import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerToDo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ToDo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyToDo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ToDo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ToDo = LazyLoading extends LazyLoadingDisabled ? EagerToDo : LazyToDo

export declare const ToDo: (new (init: ModelInit<ToDo>) => ToDo) & {
  copyOf(source: ToDo, mutator: (draft: MutableModel<ToDo>) => MutableModel<ToDo> | void): ToDo;
}