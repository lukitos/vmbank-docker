import React, { useState, useEffect } from "react";
import axios from 'axios';

const TransactionList = () => {
    const [transactions, setTransactions] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8080/transactions/1000001',
            );
            setTransactions(result.data);
        };
        fetchData();
    }, []);

    console.log(transactions);

    return (
        <div className="card">
            <h5 className="card-header">Transactions</h5>
            <div className="card-block">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                { 
                    transactions &&
                    transactions.length > 0 &&
                    transactions.map(trans => 
                        <tr key={trans.trans_id}>
                            <td>{trans.trans_id}</td>
                            <td>{trans.trans_type}</td>
                            <td>{trans.amount}</td>
                            <td>{trans.description}</td>
                        </tr>
                    )
                } 
                </tbody>
              </table>    
          </div>
        </div>
    );
}

export default TransactionList;