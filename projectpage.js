

function addIncome() {
    incomeSources = incomeSource.value
    incomeAmounts = incomeAmount.value
    amounts = document.getElementById('amounts').innerHTML
  
    if (incomeSources == "" || incomeAmounts == 0) {
      alert('Enter Details');
    }
  
    else {
      var tabledata = `<tr>
    <td>${incomeSources}</td>
    <td>${incomeAmounts}</td>
    </tr>`
  
      document.getElementById('table1').innerHTML += tabledata;
      // actualSavings = Number (amounts) + Number (incomeAmounts);
      
      // console.log(actualSavings);
  
      document.getElementById('amounts').innerHTML = Number(amounts) + Number(incomeAmounts);
  
      container_1.innerHTML = `
      <label class="income mt-5">Enter Income Source:</label>
      <input type="text" class="form-control mb-3 fs-5" id="incomeSource">
      <label class="income">Enter Amount:</label>
      <input type="number" class="form-control fs-5" id="incomeAmount">
      <div class="text-center mt-2">
        <button type="submit" class="btn btn-success fs-5 mt-4 me-2" onclick="addIncome()">Add Income</button>
      </div>
      `
      incomeAmount.innerHTML = ``
  
    }
    
  }
  
  function addExpense() {
    expenseSources = expenseSource.value
    expenseAmounts = expenseAmount.value
    amounts = document.getElementById('amounts').innerHTML
  
    if (expenseSources == "" || expenseAmounts == 0) {
      alert('Enter Details');
    }
  
    else {
      var tableData = `<tr class = "tabledetails">
    <td>${expenseSources}</td>
    <td>${expenseAmounts}</td>
    </tr>`
  
      document.getElementById('table2').innerHTML += tableData
  
      document.getElementById('amounts').innerHTML = Number(amounts) - Number(expenseAmounts);
  
      container_2.innerHTML = `
      <label class="expense mt-5">Enter Expense Source:</label>
      <input type="text" class="form-control mb-3 fs-5" id="expenseSource">
      <label class="expense">Enter Amount:</label>
      <input type="number" class="form-control fs-5" id="expenseAmount">
      <div class="text-center">
        <button type="submit" class="btn btn-success fs-5 mt-4" onclick="addExpense()">Add Expense</button>
      </div>
      `
    }
  }
  
  function deleteTableData(){
  
  
    document.getElementById('table1').innerHTML = `
      <thead>
        <th id="line" class="income" style="width: 15rem;">Income Source</th>
        <th id="line" class="income">Amount</th>
      </thead>`;
  
    document.getElementById('table2').innerHTML = `
      <thead>
        <th id="line" class="expense" style="width: 15rem;">Expense Source</th>
        <th id="line" class="expense">Amount</th>
      </thead>`;
  
    document.getElementById('amounts').innerHTML = '0'
  
  
  
  
  }
  
  function logout(){
    window.location ='./index.html'
  }
  
  