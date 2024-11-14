import * as SQLite from 'expo-sqlite';

function connect() {
  const database = SQLite.openDatabase('db.db');
  return database;
}

export const db = connect();