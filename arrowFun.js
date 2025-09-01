const myfun = (fun) => {
        console.log(`This is my ${fun}`)
    }
    // myfun('kalu')

const myfun2 = (ar1, ar2) => console.log(ar1)
    // myfun2("alf", "sdfd");

const myfun3 = (ar1, ar2) => ar1 + ar2
const myfun4 = (ar1, ar2) => (ar1 + ar2)

const newobj = { name: "test" }
const test3 = myfun3(123, 135)

const myfun5 = (ar1) => (newobj)

obj = myfun5(newobj)
console.log(obj)
    // console.log(test3)
    // console.log(test3)