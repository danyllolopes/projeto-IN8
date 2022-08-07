const db = require("../db");

module.exports = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      let SQL = "SELECT * FROM user";
      db.query(SQL, (err, result) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(result);
        }
      });
    });
  },
  postUser: (name, email, birth, phone) => {   
    return new Promise((resolve, reject) => {
        let SQL = "INSERT INTO user (name, email, birth, phone) VALUES (?, ?, ?, ?)"
      db.query(SQL, [name, email, birth, phone], (err, result)=>{
        if(err){
          reject(err)
          return
        }else {          
          resolve(result)
        }
      })
    })
  }

};
