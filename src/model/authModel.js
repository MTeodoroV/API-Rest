import db from '../config/database';

class AuthModel {
    static findEmail(email) {
      const query = `SELECT * FROM account WHERE email='${email}'`;
  
      return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result[0]);
          }
        });
      });
    }
  }
  
export default AuthModel;
  
