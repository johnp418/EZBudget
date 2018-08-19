import { FETCH_TRANSACTIONS, ADD_TRANSACTION } from './types';

export const fetchTransactions = () => dispatch => {
    const transactions = [
        {
            "transactionDate": "2015-08-18",
            "description": "WW264 TFR-TO C/C",
            "withdrawal": -740,
            "deposit": null,
            "runningBalance": 10797.05
        },
        {
            "transactionDate": "2015-08-17",
            "description": "RQ034 TFR-TO C/C",
            "withdrawal": -500,
            "deposit": null,
            "runningBalance": 11513.51
        },
        {
            "transactionDate": "2015-08-17",
            "description": "RI010 TFR-TO xxx5953",
            "withdrawal": -200,
            "deposit": null,
            "runningBalance": 12013.51
        },
        {
            "transactionDate": "2015-08-17",
            "description": "WIRE - OUTGOING",
            "withdrawal": null,
            "deposit": 23.54,
            "runningBalance": 11537.05
        },
        {
            "transactionDate": "2015-08-17",
            "description": "RI010 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 256.24,
            "runningBalance": 12213.51
        },
        {
            "transactionDate": "2015-08-14",
            "description": "TD ATM W/D xx6362",
            "withdrawal": -300,
            "deposit": null,
            "runningBalance": 11957.27
        },
        {
            "transactionDate": "2015-08-11",
            "description": "WL401 TFR-TO C/C",
            "withdrawal": -2000,
            "deposit": null,
            "runningBalance": 12257.27
        },
        {
            "transactionDate": "2015-08-04",
            "description": "ME TO ME WIRE",
            "withdrawal": -1023.38,
            "deposit": null,
            "runningBalance": 13703.7
        },
        {
            "transactionDate": "2015-08-04",
            "description": "PTS TO: xxxxxxx2193",
            "withdrawal": -15,
            "deposit": null,
            "runningBalance": 13688.7
        },
        {
            "transactionDate": "2015-08-04",
            "description": "PTS FRM: xxxxxxx5153",
            "withdrawal": null,
            "deposit": 15,
            "runningBalance": 14257.27
        },
        {
            "transactionDate": "2015-08-04",
            "description": "150804 **899700WIRE",
            "withdrawal": null,
            "deposit": 530.19,
            "runningBalance": 14242.27
        },
        {
            "transactionDate": "2015-08-04",
            "description": "WIRE - OUTGOING",
            "withdrawal": null,
            "deposit": 23.38,
            "runningBalance": 13712.08
        },
        {
            "transactionDate": "2015-07-31",
            "description": "JL344 TFR-TO xxx8296",
            "withdrawal": -1000,
            "deposit": null,
            "runningBalance": 14727.08
        },
        {
            "transactionDate": "2015-07-31",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -29.95,
            "deposit": null,
            "runningBalance": 15728.33
        },
        {
            "transactionDate": "2015-07-31",
            "description": "MONTHLY PLAN FEE",
            "withdrawal": -5,
            "deposit": null,
            "runningBalance": 14732.48
        },
        {
            "transactionDate": "2015-07-31",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -4.95,
            "deposit": null,
            "runningBalance": 14757.98
        },
        {
            "transactionDate": "2015-07-31",
            "description": "SERVICE CHARGE",
            "withdrawal": -2.5,
            "deposit": null,
            "runningBalance": 14759.93
        },
        {
            "transactionDate": "2015-07-31",
            "description": "SERVICE CHARGE",
            "withdrawal": -1.25,
            "deposit": null,
            "runningBalance": 15727.08
        },
        {
            "transactionDate": "2015-07-31",
            "description": "INTEREST CREDIT",
            "withdrawal": null,
            "deposit": 0.3,
            "runningBalance": 15758.28
        },
        {
            "transactionDate": "2015-07-31",
            "description": "JL344 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 1000,
            "runningBalance": 15757.98
        },
        {
            "transactionDate": "2015-07-31",
            "description": "ALL INCLUSIVE REBATE",
            "withdrawal": null,
            "deposit": 3,
            "runningBalance": 14762.93
        },
        {
            "transactionDate": "2015-07-31",
            "description": "ACCT BAL REBATE",
            "withdrawal": null,
            "deposit": 29.95,
            "runningBalance": 14762.43
        },
        {
            "transactionDate": "2015-07-29",
            "description": "E TFR C2mptGAz",
            "withdrawal": null,
            "deposit": 100,
            "runningBalance": 14737.48
        },
        {
            "transactionDate": "2015-07-21",
            "description": "E TFR C0YCRqbP",
            "withdrawal": -480.29,
            "deposit": null,
            "runningBalance": 14694.79
        },
        {
            "transactionDate": "2015-07-21",
            "description": "WQ463 TFR-TO xxx5953",
            "withdrawal": -85,
            "deposit": null,
            "runningBalance": 14637.48
        },
        {
            "transactionDate": "2015-07-21",
            "description": "E TFR C0X66pdf",
            "withdrawal": -80,
            "deposit": null,
            "runningBalance": 14722.48
        },
        {
            "transactionDate": "2015-07-21",
            "description": "WQ461 TFR-TO xxx5953",
            "withdrawal": -50,
            "deposit": null,
            "runningBalance": 15176.58
        },
        {
            "transactionDate": "2015-07-21",
            "description": "EMAIL TFR FEE",
            "withdrawal": -1.5,
            "deposit": null,
            "runningBalance": 15175.08
        },
        {
            "transactionDate": "2015-07-21",
            "description": "WQ463 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 107.69,
            "runningBalance": 14802.48
        },
        {
            "transactionDate": "2015-07-21",
            "description": "WQ461 TFR-FR xxx5153",
            "withdrawal": null,
            "deposit": 50,
            "runningBalance": 15226.58
        },
        {
            "transactionDate": "2015-07-20",
            "description": "NON-TD ATM W/D",
            "withdrawal": -220,
            "deposit": null,
            "runningBalance": 15146.58
        },
        {
            "transactionDate": "2015-07-20",
            "description": "GC 1992-TRANSFER",
            "withdrawal": -39.64,
            "deposit": null,
            "runningBalance": 15366.58
        },
        {
            "transactionDate": "2015-07-20",
            "description": "GC 1992-TRANSFER",
            "withdrawal": null,
            "deposit": 30,
            "runningBalance": 15176.58
        },
        {
            "transactionDate": "2015-07-20",
            "description": "WIRE - INCOMING",
            "withdrawal": null,
            "deposit": 17.5,
            "runningBalance": 15406.22
        },
        {
            "transactionDate": "2015-07-17",
            "description": "JR373 TFR-TO xxx5953",
            "withdrawal": -1000,
            "deposit": null,
            "runningBalance": 13123.92
        },
        {
            "transactionDate": "2015-07-17",
            "description": "JR302 TFR-TO xxx5153",
            "withdrawal": -1000,
            "deposit": null,
            "runningBalance": 14123.92
        },
        {
            "transactionDate": "2015-07-17",
            "description": "JR302 TFR-FR xxx5953",
            "withdrawal": null,
            "deposit": 1000,
            "runningBalance": 15388.72
        },
        {
            "transactionDate": "2015-07-17",
            "description": "JR373 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 1264.8,
            "runningBalance": 14388.72
        },
        {
            "transactionDate": "2015-07-17",
            "description": "150717 **793700WIRE",
            "withdrawal": null,
            "deposit": 1482.5,
            "runningBalance": 15123.92
        },
        {
            "transactionDate": "2015-07-10",
            "description": "JI223 TFR-TO xxx2193",
            "withdrawal": -1607.85,
            "deposit": null,
            "runningBalance": 11641.42
        },
        {
            "transactionDate": "2015-07-10",
            "description": "JI223 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 2000,
            "runningBalance": 13641.42
        },
        {
            "transactionDate": "2015-07-06",
            "description": "TD ATM W/D xx4017",
            "withdrawal": -300,
            "deposit": null,
            "runningBalance": 13249.27
        },
        {
            "transactionDate": "2015-07-02",
            "description": "PTS TO: xxxxxxx2193",
            "withdrawal": -15,
            "deposit": null,
            "runningBalance": 13549.27
        },
        {
            "transactionDate": "2015-07-02",
            "description": "PTS FRM: xxxxxxx5153",
            "withdrawal": null,
            "deposit": 15,
            "runningBalance": 13564.27
        },
        {
            "transactionDate": "2015-06-30",
            "description": "WT502 TFR-TO xxx5953",
            "withdrawal": -2000,
            "deposit": null,
            "runningBalance": 13594.12
        },
        {
            "transactionDate": "2015-06-30",
            "description": "TD ATM W/D xx6854",
            "withdrawal": -200,
            "deposit": null,
            "runningBalance": 15563.11
        },
        {
            "transactionDate": "2015-06-30",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -29.95,
            "deposit": null,
            "runningBalance": 13555.47
        },
        {
            "transactionDate": "2015-06-30",
            "description": "MONTHLY PLAN FEE",
            "withdrawal": -5,
            "deposit": null,
            "runningBalance": 13550.47
        },
        {
            "transactionDate": "2015-06-30",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -4.95,
            "deposit": null,
            "runningBalance": 13589.17
        },
        {
            "transactionDate": "2015-06-30",
            "description": "SERVICE CHARGE",
            "withdrawal": -3.75,
            "deposit": null,
            "runningBalance": 13585.42
        },
        {
            "transactionDate": "2015-06-30",
            "description": "OVERDRAFT INTEREST",
            "withdrawal": -1.2,
            "deposit": null,
            "runningBalance": 13549.27
        },
        {
            "transactionDate": "2015-06-30",
            "description": "INTEREST CREDIT",
            "withdrawal": null,
            "deposit": 1.06,
            "runningBalance": 15594.12
        },
        {
            "transactionDate": "2015-06-30",
            "description": "ACCT BAL REBATE",
            "withdrawal": null,
            "deposit": 29.95,
            "runningBalance": 15593.06
        },
        {
            "transactionDate": "2015-06-30",
            "description": "ALL INCLUSIVE REBATE",
            "withdrawal": null,
            "deposit": 3,
            "runningBalance": 15763.11
        },
        {
            "transactionDate": "2015-06-29",
            "description": "NON-TD ATM W/D",
            "withdrawal": -202.75,
            "deposit": null,
            "runningBalance": 15760.11
        },
        {
            "transactionDate": "2015-06-25",
            "description": "TD ATM DEP xx1692",
            "withdrawal": null,
            "deposit": 903.44,
            "runningBalance": 15962.86
        },
        {
            "transactionDate": "2015-06-23",
            "description": "WH261 TFR-TO C/C",
            "withdrawal": -600,
            "deposit": null,
            "runningBalance": 14974.52
        },
        {
            "transactionDate": "2015-06-23",
            "description": "WH255 TFR-TO xxx5953",
            "withdrawal": -290,
            "deposit": null,
            "runningBalance": 15059.42
        },
        {
            "transactionDate": "2015-06-23",
            "description": "WIRE - OUTGOING",
            "withdrawal": null,
            "deposit": 24.84,
            "runningBalance": 15349.42
        },
        {
            "transactionDate": "2015-06-23",
            "description": "WH255 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 349.91,
            "runningBalance": 15324.58
        },
        {
            "transactionDate": "2015-06-23",
            "description": "WIRE - OUTGOING",
            "withdrawal": null,
            "deposit": 0.15,
            "runningBalance": 14974.67
        },
        {
            "transactionDate": "2015-06-19",
            "description": "IX225 TFR-TO xxx5953",
            "withdrawal": -2000,
            "deposit": null,
            "runningBalance": 15957.57
        },
        {
            "transactionDate": "2015-06-19",
            "description": "FX ATM W/D _V",
            "withdrawal": -383.05,
            "deposit": null,
            "runningBalance": 15574.52
        },
        {
            "transactionDate": "2015-06-18",
            "description": "IX201 TFR-TO xxx8296",
            "withdrawal": -2000,
            "deposit": null,
            "runningBalance": 17957.57
        },
        {
            "transactionDate": "2015-06-18",
            "description": "IX201 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 2000,
            "runningBalance": 19957.57
        },
        {
            "transactionDate": "2015-06-15",
            "description": "CHQ#00018 **0475961",
            "withdrawal": -500,
            "deposit": null,
            "runningBalance": 18128.56
        },
        {
            "transactionDate": "2015-06-15",
            "description": "CHQ#00017 **0475962",
            "withdrawal": -160,
            "deposit": null,
            "runningBalance": 17968.56
        },
        {
            "transactionDate": "2015-06-15",
            "description": "CO-OP CABS - 10",
            "withdrawal": -10.99,
            "deposit": null,
            "runningBalance": 17957.57
        },
        {
            "transactionDate": "2015-06-11",
            "description": "CANADA TXD",
            "withdrawal": -835.14,
            "deposit": null,
            "runningBalance": 18628.56
        },
        {
            "transactionDate": "2015-06-03",
            "description": "TD ATM W/D xx2174",
            "withdrawal": -80,
            "deposit": null,
            "runningBalance": 19463.7
        },
        {
            "transactionDate": "2015-06-01",
            "description": "AMEX H3W2Y5",
            "withdrawal": -1151.2,
            "deposit": null,
            "runningBalance": 19543.7
        },
        {
            "transactionDate": "2015-06-01",
            "description": "PTS TO: xxxxxxx2193",
            "withdrawal": -15,
            "deposit": null,
            "runningBalance": 20679.9
        },
        {
            "transactionDate": "2015-06-01",
            "description": "PTS FRM: xxxxxxx5153",
            "withdrawal": null,
            "deposit": 15,
            "runningBalance": 20694.9
        },
        {
            "transactionDate": "2015-05-29",
            "description": "JW400 TFR-TO xxx5153",
            "withdrawal": -1000,
            "deposit": null,
            "runningBalance": 19733.31
        },
        {
            "transactionDate": "2015-05-29",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -29.95,
            "deposit": null,
            "runningBalance": 20694.9
        },
        {
            "transactionDate": "2015-05-29",
            "description": "MONTHLY PLAN FEE",
            "withdrawal": -5,
            "deposit": null,
            "runningBalance": 20730.31
        },
        {
            "transactionDate": "2015-05-29",
            "description": "MONTHLY ACCOUNT FEE",
            "withdrawal": -4.95,
            "deposit": null,
            "runningBalance": 20728.6
        },
        {
            "transactionDate": "2015-05-29",
            "description": "SERVICE CHARGE",
            "withdrawal": -3.75,
            "deposit": null,
            "runningBalance": 20724.85
        },
        {
            "transactionDate": "2015-05-29",
            "description": "INTEREST CREDIT",
            "withdrawal": null,
            "deposit": 0.24,
            "runningBalance": 20733.55
        },
        {
            "transactionDate": "2015-05-29",
            "description": "JW400 TFR-FR xxx5953",
            "withdrawal": null,
            "deposit": 1000,
            "runningBalance": 20733.31
        },
        {
            "transactionDate": "2015-05-29",
            "description": "ALL INCLUSIVE REBATE",
            "withdrawal": null,
            "deposit": 3,
            "runningBalance": 20733.31
        },
        {
            "transactionDate": "2015-05-29",
            "description": "ACCT BAL REBATE",
            "withdrawal": null,
            "deposit": 29.95,
            "runningBalance": 20735.31
        },
        {
            "transactionDate": "2015-05-27",
            "description": "CHQ#00016 **0221442",
            "withdrawal": -762.75,
            "deposit": null,
            "runningBalance": 20705.36
        },
        {
            "transactionDate": "2015-05-25",
            "description": "LW565 TFR-TO C/C",
            "withdrawal": -900,
            "deposit": null,
            "runningBalance": 22247.11
        },
        {
            "transactionDate": "2015-05-25",
            "description": "LW563 TFR-TO xxx5953",
            "withdrawal": -500,
            "deposit": null,
            "runningBalance": 21747.11
        },
        {
            "transactionDate": "2015-05-25",
            "description": "E TFR C0Gzjadr",
            "withdrawal": -279,
            "deposit": null,
            "runningBalance": 21468.11
        },
        {
            "transactionDate": "2015-05-25",
            "description": "EMAIL TFR FEE",
            "withdrawal": -1.5,
            "deposit": null,
            "runningBalance": 22545.06
        },
        {
            "transactionDate": "2015-05-25",
            "description": "LW563 TFR-FR xxx8543",
            "withdrawal": null,
            "deposit": 602.05,
            "runningBalance": 23147.11
        }
    ];
    dispatch({
        type: FETCH_TRANSACTIONS,
        payload: transactions
    });
}

export const addTransaction = transactionData => dispatch => {
    dispatch({
        type: ADD_TRANSACTION,
        payload: transactionData
    });
}