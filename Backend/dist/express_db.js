"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
class MySQL {
    constructor() {
        this.pool = mysql_1.createPool({
            host: 'localhost',
            user: 'root',
            password: 'admin01++',
            connectionLimit: 5,
            database: 'todo'
        });
    }
    PromiseSQL(Sql) {
        return new Promise((resolve, reject) => {
            this.pool.query(Sql, (error, result) => {
                if (error) {
                    reject(error);
                    console.log(error);
                }
                else
                    resolve(result);
                console.log(result);
            });
        });
    }
    getContent(table) {
        return this.PromiseSQL(`select * from ${table.table}`);
    }
    insertTodo(todo) {
        return this.PromiseSQL(`insert into todolist (text,status,pid) values ("${todo.text}",0,${todo.pid});`);
    }
    deleteTodo(todo) {
        return this.PromiseSQL(`delete from todolist where tid=${todo.tid};`);
    }
    updateTodo(todo) {
        return this.PromiseSQL(`
            update todolist set status=${todo.status} where tid=${todo.tid};
        `);
    }
}
exports.MySQL = MySQL;
//# sourceMappingURL=express_db.js.map