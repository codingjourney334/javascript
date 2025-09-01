person = {
    name: "vicky",
    age: 27,
    lifeofstyle: "bindaas"
}

let { age } = person // using instead of person.age
console.log(age)

let { lifeofstyle: lf } = person //giving alias
console.log(lf);

myfun = (lun) => console.log(`this is very ${lun}`)

myfun("nala subara")