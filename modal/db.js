const mysql=require('mysql');
const pool=mysql.createPool({
    // host:'localhost',
    host:"localhost",
    port:3306,
    password:'zsl123',
    database:'shopapp',
    connectionLimit:10,
    user:'root'
})

const query = (sql, param) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, param, (err, data) => {
                connection.release();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);

            })
        })
    })
}

module.exports = query;