/* eslint-disable prettier/prettier */

import { defaultDatabaseOption } from './databaseOptions';
import schemaNames from './schemaNames';
import {todoSchema} from './todo';
import {todoListSchema} from './todoList';

const databaseOptions = {
  defaultDatabaseOption,
};

const schemas = {
  todoSchema,
  todoListSchema,
};


export default {
  schemas,
  databaseOptions,
  schemaNames,
};
