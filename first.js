function calculateVAT(price){
    if(isNaN(price) === true || price % 2 === 1 || price < 0){
        return 'Invalid';
    }else if(price % 2 === 0){
        let result = price * (75 / 1000);
        return result;
    }
}

function validContact(contact){
    let number = false;
    if(typeof contact !== 'string' || isNaN(contact) === true ){
        return 'Invalid';
    }else if(contact.length == 11 && contact.includes(' ') === false && contact.slice(0,2) === '01'){
        number = true;
    }
    return number;
}
// console.log(validContact(true))

function willSuccess(marks){
    let bePositive = false;
    if(Array.isArray(marks) === false){
        return 'Invalid';
    }
    else if(Array.isArray(marks) === true){
        let passExamCount = []
        let failExamCount = []
        for(let n of marks){
            if(n >= 50){
                passExamCount.push(n);
            }
            else if(n < 50){
                failExamCount.push(n);
            }
        }
        if(passExamCount.length > failExamCount.length){
            bePositive = true;
        }
    }
    return bePositive;
}

function validProposal(person1,person2){
    let condition = false;
    if(typeof(person1) !== 'object' || typeof(person2) !== 'object'){
        return 'Invalid';
    }
    else if(Math.abs(person1.age - person2.age) < 7 && person1.gender !== person2.gender){
        condition = true;
    }
    return condition;
}

function calculateSleepTime(times) {
    let sum = 0;
    for (let i of times) {
        if (typeof (i) !== 'number') {
            return 'Invalid';
        }
        else if (i) {
            sum += i;
        }
    }
    let hour = sum / 3600;
    let justHour = parseInt(hour);

    let hourRemainder = sum % 3600;
    let minute = hourRemainder / 60;
    let justMinute = parseInt(minute);

    let second = sum % 60;

    return {
        hour: justHour,
        minute: justMinute,
        second: second
    };
}
// console.log(calculateSleepTime([5600]));





