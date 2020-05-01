Scripts to create db, tables, and populate the data:

CREATE DATABASE vmbank;

CREATE TABLE account (
    account_num      integer PRIMARY KEY,
    account_type      varchar(20),
    name      varchar(20),
    opened_by      varchar(20),
    balance      numeric(10, 2)
);

CREATE TABLE transaction (
    trans_id      integer PRIMARY KEY,
    account_num      integer,
    trans_type      varchar(20),
    trans_date      date,
    amount      numeric(10, 2),
    description      varchar(50),
    FOREIGN KEY (account_num) REFERENCES account (account_num)
);

INSERT INTO account (account_num, account_type, name, opened_by, balance) VALUES
    (1000001, 'Checking', 'John Doe', 'Mary Smith', 115000.00),
    (1000002, 'Saving', 'John Doe', 'Mary Smith', 500000.00);

INSERT INTO transaction (trans_id, account_num, trans_type, trans_date, amount, description) VALUES
    (1, 1000001, 'Deposit', '2020-04-01', 100000.00, 'Initial Deposit'),
    (2, 1000001, 'Deposit', '2020-04-15', 20000.00, 'Direct Deposit'),
    (3, 1000001, 'Withdrawal', '2020-04-20', 5000.00, 'Miscellaneous'),
    (4, 1000002, 'Deposit', '2020-04-01', 500000.00, 'Initial Deposit');


