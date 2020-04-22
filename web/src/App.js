import React from 'react';
import Transactions from './components/TransactionList';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-light itempadding">
        <div className="col">
          <img src="/vmware.png" alt="VMware Bank" width="200" />
        </div>
        <div className="col">
          <button type="button" className="btn btn-outline-secondary float-right">Sign Out</button>
        </div>
      </div>
      <div className="row bankinglogo">
        <img src="/banking.png" className="rounded mx-auto d-block" alt="VMware Bank" width="500" />
      </div>
      <div className="row bg-info text-white itempadding">
        <div className="col text-center">
          <h5>Checking: $115,000 </h5>
          <h5>Saving: $500,000</h5>
        </div>
      </div>
      <div className="row itempadding">
        <div className="col">
          <Transactions />
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-header">News</h5>
            <div className="card-body">
              <p>At VMware Bank, we're here to support you with products, services and resources — for whatever life stage you may be experiencing</p>
              <p>Life is full of change — and no matter where life takes you, we're here to support you with products, services and resources designed to help you live your best financial life with lower stress and greater ease.</p>
              <p>Our financial services specialists and relationship managers are here for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
