import db from '../config/database';

export function add(movie_id, series_id, account_id) {
    const query = `INSERT INTO favorites(movie_id, series_id, account_id) 
    VALUES (${movie_id}, ${series_id}, ${account_id})`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function list() {
    const query = `SELECT * FROM favorites`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

export function get(id) {
    const query = `SELECT * FROM favorites WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function update(id, movie_id, series_id, account_id) {
    const query = `UPDATE favorites SET movie_id=${movie_id}, series_id=${series_id},
    account_id=${account_id} WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

export function remove(id) {
    const query = `DELETE FROM favorites WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        db.query(query, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}
