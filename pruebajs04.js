// Antipodal average

const data = [12, 2, 10, 6, 18];
console.log(data);
let longitud = data.length;

if (longitud % 2 == 0){
    let par = (data.slice(0,(longitud/2)));
    half1 = par.reverse();
    console.log(half1);
    let par2 = (data.slice((longitud/2),(longitud)));
    half2 = par2.reverse();
    console.log(half2);
    const res = half1.map((num,index) => num + half2[index]);
    console.log(res);
} 
else {
    let none = (data.slice(0,(longitud/2)));
    half3 = none.reverse();
    console.log(half3);
    let none2 = (data.slice((longitud/2)+1,longitud));
    half4 = none2.reverse();
    console.log(half4);
    const res2 = half3.map((num,index) => num + half4[index]);
    console.log(res2);
}

// Secret Society

    function secretName(members) {
        const initials = members.map(name => name[0]);
        const secret = initials.join('');
        return secret;
      }
      
      console.log(secretName(["Sergio","Carlos","Fernando","Noel","Rafael"])); // Output: SCFNR
      
      
// Halves

function numDiv(x){
   const halves = [x/2, x/2];
return halves;
}
const div = numDiv(8);
console.log(div);

// Sum of resistors in series

let values = [-1, 5, -6, 10];
function vAbs (values){
   return values.map(num => Math.abs(num));
}
let newArray = vAbs(values);
console.log(newArray);

function sumRes(newArray) {
    return newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
 
let final = sumRes(newArray);
console.log(final);


// Online status

function onlineStatus(usernames) {
    if (usernames.length === 0) {
        return 'No users online';
    } else if (usernames.length === 1) {
        return `${usernames[0]} is online`;
    } else if (usernames.length === 2) {
        return `${usernames[0]} and ${usernames[1]} are online`;
    } else {
        return `${usernames[0]}, ${usernames[1]} and ${usernames.length - 2} more are online`;
    }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', 'ostrichreal', 'rdpanda'])); 

// Array of Multiples

function multiples(number, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
        result.push(number * i);
    }
    return result;
}

console.log(multiples(2, 10)); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// Positive dominance in Array

function positiveDom(array) {
    let positiveCount = 0;
    let negativeCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveCount++;
        } else if (array[i] < 0) {
            negativeCount++;
        }
    }
    if(positiveCount>negativeCount){
        console.log("Positive dominance");
    } else {
        console.log("Negative dominance");
    }
    return positiveCount > negativeCount;
    
}

console.log(positiveDom([-1, -3, -5, 4])); 
console.log(positiveDom([-1, 2, 3, 4, -5]));    







