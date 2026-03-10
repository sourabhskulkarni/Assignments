/*
A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.
2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;
*/

interface CustomerDetails {
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
}

let customer: CustomerDetails = {
    customerName: "John Doe",
    creditScore: 720,
    income: 55000.0,
    isEmployed: true,
    debtToIncomeRatio: 35.0

}

function loanEligibility(customer:CustomerDetails):string {
    if (customer.creditScore > 750) {
        return `${customer.customerName} is eligibile for loan based on strong credit score`;  
    }
    if (customer.creditScore < 650) {
        return `${customer.customerName} is not eligibile for loan based on poor credit score`;    
    }
    if (customer.income < 50000){
        return `${customer.customerName} is not eligibile for loan due to low income`;  
    }
    if (!customer.isEmployed){
        return `${customer.customerName} is not eligibile for loan due to unemployment`;
    }
    if (customer.debtToIncomeRatio >= 40){
        return `${customer.customerName} is not eligibile for loan due to high debt to income ratio`;
    }
    else {
            return `${customer.customerName} is eligible for Loan based on verifying parameters such as credit score, income, emaployement status and debt to income ratio`;
    }
}

console.log(loanEligibility(customer));