var square = x => x * x;

console.log(square(3));

var user = {
    name: 'Fehmi',
    sayHi: () => {
        console.log(`Hi ${this.name}`)
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi ${this.name}`)
    }
}

user.sayHiAlt(1,2,'Fehmi',true);