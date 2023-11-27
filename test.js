const data =  [
                {"loanId" : "LA00123", "MemberId" : "MI00123"},
                {"loanId" : "LA001234", "MemberId" : "MI001234"}
              ]

const result = data.map(obj => 
  `<result><loanID>${obj.loanId}</loanID><MemberId>${obj.MemberId}</MemberId></result>`).join('')
console.log(result)