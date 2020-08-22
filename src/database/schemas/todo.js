/* eslint-disable prettier/prettier */
import Realm from 'realm';

import {TODO_SCHEMA} from './schemaNames';

const todoSchema = {
  name: TODO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: {type: 'string', indexed: 'true'},
    done: {type: Boolean, indexed: 'false'},
  },
};
