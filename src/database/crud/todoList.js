/* eslint-disable prettier/prettier */

import Realm from 'realm';

import {databaseOptions, schemaNames, schemas} from '../schemas';

const location = 'src/database/crud/todoList.js';

const {defaultDatabaseOption} = databaseOptions;
const {  TODOLIST_SCHEMA } = schemaNames;
const { todoSchema, todoListSchema } = schemas;

const  dbOptions  = {
  ...defaultDatabaseOption,
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

			const {id, name} = todoList;

			const updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, id);
			updatingTodoList.name = name;
			return true;
		});
	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > updateTodoList: `, err );
		}

		return null;
	}
};

// DELETE todoList
export const deleteTodoList = async todoList => {
	try {
		const realm = await Realm.open(dbOptions);

		realm.write(()=>{
			const { id } = todoList;
			const updatingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, id);
			realm.delete(updatingTodoList);
			return true;
		});
	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > deleteTodoList: `, err );
		}
		return null;
	}
};

// DELETE ALL todoList
export const deleteAllTodoList = async () => {
	try {
		const realm = await Realm.open(dbOptions);

		realm.write(()=>{
			realm.deleteAll();
			return true;
		});
	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > deleteAllTodoList: `, err );
		}
		return null;
	}
};

// SELECT ALL todoList
export const selectAllTodoList = async () => {
	try {
		const realm = await Realm.open(dbOptions);
		const allTodoList = realm.objects(TODOLIST_SCHEMA);
		return allTodoList || [];

	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > selectAllTodoList: `, err );
		}
		return null;
	}
};

export default async () => {
	try {
		const realm = await Realm.open(dbOptions);

		return realm;
	} catch (err) {
		if (__DEV__){
			console.log(`ERROR: ${location} > export default: `, err );
		}
		return null;
	}
};
