import { createPool, Pool} from 'mysql'

export type Todo = {
    tid: number,
    text: string,
    status: number,
    pid: number
  }
  
export class MySQL {

    private pool:Pool

    constructor(){
        this.pool = createPool({
            host     : 'localhost',
            user     : 'root',
            password : '',
            connectionLimit : 5,
            database : 'todo'
        })
    }

    PromiseSQL<T>(Sql:any){
        return new Promise<T>((resolve,reject) =>{
            this.pool.query(Sql,(error,result) => {
                if (error) {
                    reject(error)
                    console.log(error)
                }
                else 
                    resolve(result)
                    console.log(result)
            })
        }) 
    }

    getContent(table: {table: string}){
        return this.PromiseSQL(`select * from ${table.table}`)
    }

    insertTodo(todo: Todo){
        return this.PromiseSQL(
            `insert into todolist (text,status,pid) values ("${todo.text}",0,${todo.pid});`
        )
    }

    deleteTodo(todo: Todo){
        return this.PromiseSQL(`delete from todolist where tid=${todo.tid};`)
    }

    updateTodo(todo: Todo){
        return this.PromiseSQL(`
            update todolist set status=${todo.status} where tid=${todo.tid};
        `)
    }
}