/* eslint-disable prettier/prettier */

import Realm from 'realm';

import {databaseOptions, schemaNames, schemas} from '../schemas';

const location = 'src/database/crud/todoList.js';
const { TODO_SCHEMA, TODOLIST_SCHEMA } = schemaNames;
const { todoSchema, todoListSchema } = schemas;

const  dbOptions  = {
  ...databaseOptions,
	schema: [todoSchema, todoListSchema],
};

// INSERT todo list
export const insertNewTodoList = async newTodoList => {
    try {
			const realm = await Realm.open(dbOptions);

			realm.write(()=>{
				realm.create(TODOLIST_SCHEMA, newTodoList , true);
			});

			return true;

    } catch (err) {
			if (__DEV__){
				console.log(`ERROR: ${location} > insertNewTodoList: `, err );
			}

			return null;
    }
};

// UPDATE todo list
export const updateTodoList = async todoList => {
	try {
		const realm = await Realm.open(dbOptions);

		realm.write(()=>{
			realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
		});
	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > insertNewTodoList: `, err );
		}

		return null;
	}
};

// DELETE todoList
// EDIT todoList
