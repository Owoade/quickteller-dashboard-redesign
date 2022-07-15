const tableNames = [
    "All",
    "Airtime Purchase",
    "Bill Payments",
    "Money Transfer",
    "eCash",
    "Loans",
  ] as const;
  
export type TableNameType = typeof tableNames[number];

interface ITable {
    type: TableNameType;
    heading: string[];
    data: Array<Array<any>>;
}
export const tableData: ITable[] =[ {
    type: "All",
    heading: ["Date", "Activity", "Amount", "References", "Status", "Action"],
    data: [
      [
        "5 minutes ago",
        "Airtime Purchase",
        "₦ 11,500",
        "GTB|Web|3QTI0001|IEPP| 150221200304|3Q8FTCGR",
        "Success",
      ],
      [
        "2 minutes ago",
        "eCard Top-up", 
        "₦ 52,500",
        "GTB|Web|3QTI0001|IIEPP|",
        "Pending"
      ], 
      [
        "2021-01-25",
        "IE Prepaid",
        "₦ 27,500", 
        "GTB|Web|3QTI0001|IEPP| 150221200304|3Q8FTCGR",
        "Failed"
      ],
      [
        "2021-01-25",
        "Loan Application",
        "₦ 200,000",
        "GTB|Web|3QTI0001|IIEPP|",
        "Success"
      ]
    ],
  },
  {
    type: "Airtime Purchase",
    heading: [ "Date", "Phone", "Amount", "References", "Status", "Action"],
    data: [
        [
            "2021-01-25",
            "+234-907-8159-967*Airtel",
            "₦ 2,000",
            "GTB|Web|3QTI0001|IIEPP|",
            "Success"
        ],[
            "2021-02-25",
            "+234-806-6205-726*MTN",
            "₦ 500",
            "GTB|USSD|3QTIA001|IIEPP|",
            "Success"
        ],[
            "2021-05-25",
            "+234-816-6304-256*GLO",
            "₦ 3,000",
            "GTB|USSD|3QTIA001|IIEPP|",
            "Success"
        ],
        [
            "2021-05-25",
            "+234-816-6304-256*9M",
            "₦ 3,000",
            "GTB|USSD|3QTIA001|IIEPP|",
            "Success"
        ]
    ]
  },
  {
    type: "Bill Payments",
    heading: ["Date", "Description", "Amount", "Reference", "Status"],
    data: [
        [
            "2021-01-25",
            "Ikeja Eletric",
            "₦ 13,000",
            "QT|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ],[
            "2021-01-25",
            "DSTV Cable Subscription",
            "₦ 13,000",
            "ALAT|MOBILE|3QTIA001|IIEPP|",
            "Success"
        ],[
            "2021-01-25",
            "LAWMA fee",
            "₦ 13,000",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Success"
        ],[
            "2020-01-25",
            "Startimes Cable Subscription",
            "₦ 13,000",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ]
    ]
  },{
    type: "Loans",
    heading: ["Date", "Reason", "Amount", "Reference", "Status"],
    data: [
        [
            "2020-01-25",
            "School Fees",
            "₦ 2,000",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ],[
            "2020-01-25",
            "Purchase of Smartphone",
            "₦ 2,000",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ],
        [
            "2020-01-25",
            "Payment of School Fees",
            "₦ 3,500",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Success"
        ],
        [
            "2020-01-25",
            "Payment of Loan",
            "₦ 3,500",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ]
    ]
  },
  {
    type: "Money Transfer",
    heading: ["Date", "Account no", "Amount", "Reference", "Status"],
    data: [
        [
            "2020-01-25",
            "212117368*UBA",
            "₦ 300,500",
            "GTB|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ],
        [
            "2020-03-25",
            "0071156292*KUDA",
            "₦ 1,300,500",
            "ALAT|MOBILE|3QTIA001|IIEPP|",
            "Failed"
        ],
        [
            "2020-09-25",
            "1122459801*GTB",
            "₦ 1,300,500",
            "QT|MOBILE|3QTIA001|IIEPP|",
            "Pending"
        ],[
            "2020-10-25",
            "3122459801*FB",
            "₦ 30,500",
            "QT|MOBILE|3QTIA001|IIEPP|",
            "Success"
        ]
    ]
  }
];