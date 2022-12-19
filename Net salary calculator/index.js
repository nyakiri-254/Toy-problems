//calculate individual net salary


let basicSalary = [];
let NssfDeduction = 200;
let nhifDeduction = 500;
let PAYEE = 0;
let taxValue = 0.14 * basicSalary

//calculate percentage
function changePercentage() {
  taxPercentage = taxPercentage / 100;
}

function changeSalary() {
  netSalary = taxvalue;
}
function calculate() {
  PAYEE = taxPercentage / 100 * basicSalary;
  netSalary = basicSalary - NssfDeduction - NhifDeduction - PAYEE;
  taxValue = 0.14 * basicSalary;

  if (basicSalary > 10000) {
    return ("no tax")
  } else if (basicSalary > 10000 && basicSalary <= 100000) {
    return "taxValue = 0.14 * basicSalary"
 }
  console.log("netSalary")
  console.log("PAYEE")

  calculate(["50000 *0.14"]);
}