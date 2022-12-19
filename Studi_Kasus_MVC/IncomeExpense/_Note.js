// Menggunakan data.json

const {Income, Expense} = require('./IncomeExpense');
const fs = require('fs');

class _Note {
    static listIncome(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let incomes = temp.incomes
        console.log("List Income : ");
        incomes.forEach(income => {
            const {name, total} = income;
            console.log(`${name}, Rp.${total}`);  
        });
    }
    static listExpense(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let expenses = temp.expenses
        console.log("List Expense : ");
        expenses.forEach(expense => {
            const {name, total} = expense;
            console.log(`${name}, Rp.${total}`);  
        });
    }

    static addIncome(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let income = new Income(name, total, 'income');
        temp.incomes.push(income);
        this.save(temp);
    }

    static addExpense(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let expense = new Expense(name, total, 'expense');
        temp.expenses.push(expense);
        this.save(temp);
    }

    static balance(){
        let temp = JSON.parse(fs.readFileSync('./data.json','utf8'));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach(income => {
            totalIncome += income.total;
        });
        temp.expenses.forEach(expense=> {
            totalExpense += expense.total;
        });

        //status : plus, minus, balanced
        let total = totalIncome - totalExpense;
        if(total === 0){
            console.log("Status : balanced, tidak tersisa.")
        }else if(total < 0){
            console.log("Status : minus! " + total)
        }else if(total > 0){
            console.log("Status : Masih ada sisa " + total)
        }
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }
}

module.exports = _Note;