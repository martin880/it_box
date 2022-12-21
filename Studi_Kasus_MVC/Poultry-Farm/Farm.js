/** Factory Class */

const fs = require('fs');
const {Chicken, Duck, Turkey, Quail, Other} = require('./Poultry');

class Farm{
    static readCSV(){
        let temp = fs.readFileSync('./poultries.csv', 'utf-8');
        let tempSplit = temp.split('\r\n'); // Untuk mengubah string ke array
        
        let tempData = []; // Ubah ke array 2D
        for(let i = 1; i < tempSplit.length; i++){
            tempData.push(tempSplit[i].split(','));
        }

        let poultries = tempData.map(data => {
            let [id, category, price, isMature] = data;
            switch(category){
                case 'chicken':
                    return new Chicken(+id, +price, isMature)
                case 'duck':
                    return new Duck(+id, +price, isMature)
                case 'turkey':
                    return new Turkey(+id, +price, isMature)
                case 'quail':
                    return new Quail(+id, +price, isMature)
                default:
                    return new Other(+id, +price, isMature)
            }
        })
        return poultries;
    } 
    static total(){
        let poultries = this.readCSV();
        let count = {
            chicken : 0,
            duck : 0,
            turkey : 0,
            quail : 0,
            other : 0
        }
        poultries.forEach(poultry => {
            let {category} = poultry;
            switch (category){
                case 'chicken':
                    count.chicken++;
                    break;
                case 'duck':
                    count.duck++;
                    break;
                case 'turkey':
                    count.turkey++;
                    break;
                case 'quail':
                    count.quail++;
                    break;
                default:
                    count.Other++
                   break; 
            }

        })
        console.log("Total poultries : ");
        console.log(`Chicken : ${count.chicken} ekor`);
        console.log(`Duck : ${count.duck} ekor`);
        console.log(`Turkey : ${count.turkey} ekor`);
        console.log(`Quail : ${count.quail} ekor`);
        console.log(`Other : ${count.other} ekor`);
    }
    static addPoultry(category, price){
        let poultries = this.readCSV();
        let id = poultries[poultries.length - 1].id + 1;
        switch(category){
            case 'chicken':
               poultries.push(new Chicken(+id, +price))
               break;
            case 'duck':
               poultries.push(new Duck(+id, +price))
               break;
            case 'turkey':
               poultries.push(new Turkey(+id, +price))
               break;
            case 'quail':
               poultries.push(new Quail(+id, +price))
               break;
            default:
               poultries.push(new Other(+id, +price))
               break;
        }
        this.save(poultries);
    }
    
    static sellPoultry(id){
        let poultries = this.readCSV();
        poultries = poultries.filter(poultry => poultry.id !== +id)
        this.save(poultries);
    }

    static save(poultries){
        let temp = [];
        let result = [
            ['id, category, price, isMature']
        ];

        for(let i = 0; i < poultries.length; i++){
            const{id, category, price, isMature} = poultries[i];
            temp.push([id, category, price, isMature]);
        }

        for(let i = 0; i < temp.length; i++){
            result.push(temp[i].join(','));
        }

        let fixResult = result.join('\r\n')
        // console.log(fixResult);
        fs.writeFileSync('./poultries.csv', fixResult)
    };
}

module.exports = Farm;