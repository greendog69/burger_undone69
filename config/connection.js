//****mySQL****//
//import mysql from 'mysql';
const mysql = require('mysql');

// conect to mysql

// class Database Promise
class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }

    close() {

        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
                console.log("Database closed from class")
            } );
        } );
    }
}

module.exports = Database;
