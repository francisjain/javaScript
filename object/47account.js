var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //print acc_number only
  var acc_num=accounts.map(acnt=>acnt.acno)
  console.log(acc_num);

  accounts.forEach(accounts=>console.log(accounts.acno))

  //chk 1005 exist or not

   var acnt=accounts.some(num=>num.acno==1005)
   console.log(acnt);


   //print balance of 1002
   var bal=accounts.filter(acnt=>acnt.acno==1002 ).map(acnt=>acnt.balance)
   console.log(bal);
   var bal=accounts.find(acnt=>acnt.acno==1002)
   console.log(bal.balance);

   //Print transation of 1001
   var bal=accounts.find(acnt=>acnt.acno==1001)
   console.log(bal.transactions);

   //Print transation of 1001: amount > 500
   var bal=accounts.find(acnt=>acnt.acno==1001)
   bal.transactions.filter(acnt=>acnt.amount>500).forEach(tra=>console.log(tra))

   var bal=accounts.find(acnt=>acnt.acno==1001).transactions.filter(acnt=>acnt.amount>500).forEach(tra=>console.log(tra))

   //payment history of acno 1000
   var trans=accounts.find(acnt=>acnt.acno==1000).transactions
   var frm=accounts.map(acnt=>acnt.transactions).flat().filter(trans=>trans.to==1000)
   var payment_history=[]
   trans.map(trans=>payment_history.push(trans))
   frm.map(trans=>payment_history.push(trans))
   console.log("3",payment_history);

   payment_history=[...trans,...frm]  //Spread Operator["..."]
   console.log("4",payment_history);

