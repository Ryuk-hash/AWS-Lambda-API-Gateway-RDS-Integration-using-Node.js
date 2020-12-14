const mysql = require('mysql');

const connection = mysql.createConnection({
  // Following parameters are coming from the ENV (if any) file | RDS Database Details

  host: process.env.HOSTNAME,
  port: process.env.PORTNUMBER,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

exports.handler = async (event, context, callback) => {
  let { studentID, batchID } = event;

  if (!studentID || !batchID) {
    return { statusCode: 400, body: 'Invalid/Missing Parameters' };
  }

  try {
    let sql = `INSERT INTO students (studentID, batchID) VALUES (${studentID}, ${batchID});`;

    const data = await new Promise((resolve, reject) => {
      connection.connect(function (err) {
        if (err) {
          reject(err);
        }

        connection.query(sql, (err, res) => {
          if (err) {
            throw err;
          }
          callback(null, '1 records inserted.');
        });
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: err.message,
    };
  }
};
