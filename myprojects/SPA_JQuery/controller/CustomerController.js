function saveCustomer(dto) {
    customerDB.push(dto);
}

function loadAllCustomers() {
    for (var customer of customerDB){
        let row = `<tr><td>${customer.getCustomerId()}</td><td>${customer.getCustomerName()}</td><td>${customer.getAddress()}</td><td>${customer.getSalary()}</td></tr>`;
        $("#tblCust").append(row);
    }
}

function clearAll() {
    $("#tblCust>tbody>tr").empty();
}