// File ini digunakan saat tidak ada data.json

// const {Income, Expense} = require('./IncomeExpense');

// class Note{
//     constructor(list){
//         this.list = list || [];
//     }
//     addIncome(name, total){
//         let income = new Income(name, total, 'income');
//         this.list.push(income);
//     }
//     addExpense(name, total){
//         let expense = new Expense(name, total, 'expense');
//         this.list.push(expense);
//     }
//     listIncome(){
//         console.log("List Income : ")
//         this.list.forEach(inc => {
//             if(inc.category === 'income'){
//                 console.log(`${inc.name}, Rp. ${inc.total}`)
//             }
//         });
//     }
//     listExpense(){
//         console.log("List Expense : ")
//         this.list.forEach(exp => {
//             if(exp.category === 'expense'){
//                 console.log(`${exp.name}, Rp. ${exp.total}`)
//             }
//         });
//     }
//     balance(){
//         let totalIncome = 0;
//         let totalExpense = 0;
//         this.list.forEach(el => {
//             if(el.category === 'income'){
//                 totalIncome += el.total;
//             }else if(el.category === 'expense'){
//                 totalExpense += el.total;
//             }
//         })

//         // status : plus, minus, balanced
//         let total = totalIncome - totalExpense;
//         if(total === 0){
//             console.log("Status : balanced, tidak tersisa.")
//         }else if(total < 0){
//             console.log("Status : minus! " + total)
//         }else if(total > 0){
//             console.log("Status : Masih ada sisa " + total)
//         }
//     }
// }

// module.exports = Note;