// Functions 
// 1. get three arguments and  sum the same.
function add(a,b,c)
{
    return (a + b + c)
}

console.log(add(5,7,9));

// 2.  Display the color of the car.

function colorCar(color)
{
    return (console.log(`a ${color} car`))
}

colorCar('red')

// 3. create an object and display its properties

let person = {
    firstName: 'Radhika',
    lastName:   'Jayaraman',
    personCitizenship: 'Indian',
    detail: function()
    {
        return ('name is ' + this.firstName + ' '+ this.lastName + ' '+ 'Citizenship ' + this.personCitizenship)
    }

}

console.log(person.detail());

//4. Create a function vehicleType  and dispaly its property based on the input parameter.

function vehicleType(color,code) 
{
    let typeOfVechicle
    if (code === 1)
    {
        typeOfVechicle = 'car'
    }
    else if ( code === 2)
    {
        typeOfVechicle = 'motorbike'
    }

    return('a ' + color + ' ' + typeOfVechicle)

}

console.log(vehicleType('Red',2))
console.log(vehicleType('blue',1))

// 5.Replace the If statement with single line.

console.log((3===3) ? 'yes': 'No');

// 6.Add age parameter to vehicleType.

function vehicle(color,age,code) 
{
    let typeOfVechicle
    let ageOfVechicle
    if (code === 1)
    {
        typeOfVechicle = 'car'
    }
    else if ( code === 2)
    {
        typeOfVechicle = 'motorbike'
    }
    if (age > 0)
    {
        ageOfVechicle = 'used'
    }
    else
    {
        ageOfVechicle = 'New'
    }
    return('a ' + color + ' ' +ageOfVechicle+ ' '+ typeOfVechicle)
    
}

console.log(vehicle('green',5,1))
console.log(vehicle('green',0,1))

