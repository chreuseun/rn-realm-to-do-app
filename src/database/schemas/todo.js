/* eslint-disable prettier/prettier */

import {TODO_SCHEMA} from './schemaNames';

export const todoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: {type: 'string', indexed: 'true'},
    done: {type: Boolean, indexed: 'false'},
  },
};
