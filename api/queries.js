const Pool = require('pg').Pool;
const pool = new Pool({
   user: '<your-user>',
   host: 'localhost',
   database: 'vmbank',
   password: '<your-pwd>',
   port: 5432,
});

const getAccounts = (request, response) => {
   pool.query('SELECT * FROM account', (error, results) => {
      if (error) {
         throw error;
      };
      response.status(200).json(results.rows);
   });
};

const getAccountById = (request, response) => {
   const account_num = parseInt(request.params.account_num);

   pool.query('SELECT * FROM account WHERE account_num = $1', [account_num], (error, results) => {
      if (error) {
         throw error;
      };
      response.status(200).json(results.rows);
   });
};

const getTransactions = (request, response) => {
    const account_num = parseInt(request.params.account_num);
 
    pool.query('SELECT * FROM transaction WHERE account_num = $1', [account_num], (error, results) => {
       if (error) {
          throw error;
       };
       response.status(200).json(results.rows);
    });
 };

module.exports = {
   getAccounts,
   getAccountById,
   getTransactions
};