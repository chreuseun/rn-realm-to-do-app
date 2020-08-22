/* eslint-disable prettier/prettier */
import Realm from 'realm';

import {TODOLIST_SCHEMA, TODO_SCHEMA} from './schemaNames';

const todoListSchema = {
  name: TODOLIST_SCHEMA,
	id: 'id',
	property: {
		id: 'int',
		name: 'string',
		creationDate: 'date',
		todos: { type: 'list', objectType: TODO_SCHEMA },
	},
};

