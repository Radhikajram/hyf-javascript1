
 //7. create list of vehicles
listOfVehicles = ['car','motorbike','caravan','van','bicycle','bike','scooter']

 // 8.display 3 rd element from the list

console.log(listOfVehicles[2])

//9.change the function vehicle.
function vehicle(color,age,code) 
{
    let typeOfVechicle
    let ageOfVechicle

    typeOfVechicle = listOfVehicles[code]
    if (age >= 5)
    {
        ageOfVechicle = 'used'
    }
    else
    {
        ageOfVechicle = 'New'
    }
    return('a ' + color + ' ' +ageOfVechicle+ ' '+ typeOfVechicle)
    
}

console.log(vehicle('green',1,5))

// 10.To print advertisement

let result = ' ';
for(let i=0;i<listOfVehicles.length;i++)
{
    if (i === listOfVehicles.length - 1)
    {
        result +=  listOfVehicles[i] + '.'

    }

    else if (i === listOfVehicles.length - 2) {
        result += listOfVehicles[i] + ' and '

    }
    else {
        result +=  listOfVehicles[i] + ', '

    }
}

console.log(`Amazing Joe's Garage, we service ` + result)

//12. create a empty object

let objectA = {} 

//13.Create  a teacher object 

let teacher = {
    name : 'Tom',
    language: 'Javascript'
}
// 15. Check the array equality (== , ===)

let x = [1,2,3]
let y = [1,2,3]
let z = y
// check whether x and y are equal using (==)

x == y ? console.log('x and y are equal') : console.log('x and y are not equal')
x === y ? console.log('x and y are equal') : console.log('x and y are not equal')
z == y ? console.log('z and y are equal') : console.log('z and y are not equal')
z == x ? console.log('z and x are equal') : console.log('z and x are not equal')

// 16.check the equality on objects 

let o1 = { foo: "bar" };
let o2 = { foo: "bar",Test:"test"};
let o3 = o2;

//check whether changing object 2 will change the object 3
console.log(o2)
console.log(o3)

//17. check the below code

let bar = 42;
console.log(typeof typeof (bar));
