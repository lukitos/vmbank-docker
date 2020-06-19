const Pool = require('pg').Pool;
const pool = new Pool({
   user: 'postgres',
   host: 'postgres',
   database: 'vmbank',
   password: 'password',
   port: 5432,
});

const getAccounts = (request, response) => {
   console.log('in getAccounts');
   
   pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      pool.query('SELECT * FROM account', (error, results) => {
         if (error) {
            // console.log(error);
            // throw error;
            return console.error('Error in getAccounts', error.stack);
         };
         response.status(200).json(results.rows);
      });
    });
};

const getAccountById = (request, response) => {
   console.log('in getAccountsById');
   const account_num = parseInt(request.params.account_num);

   pool.query('SELECT * FROM account WHERE account_num = $1', [account_num], (error, results) => {
      if (error) {
         // console.log(error);
         // throw error;
         return console.error('Error acquiring client', error.stack)
      };
      response.status(200).json(results.rows);
   });
};

const getTransactions = (request, response) => {
   console.log('in getTransactions');
   const account_num = parseInt(request.params.account_num);
   console.log('account_num', account_num);
 
    pool.query('SELECT * FROM transaction WHERE account_num = $1', [account_num], (error, results) => {
       console.log(results);
       if (error) {
         // console.log(error);
         // throw error;
         return console.error('Error acquiring client', error.stack)
       };
       response.status(200).json(results.rows);
    });
 };

module.exports = {
   getAccounts,
   getAccountById,
   getTransactions
};