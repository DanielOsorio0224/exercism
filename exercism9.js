let obj = {
    num1: 22,
    num2: 15,
    num3: 89
}
for (let key in obj){
    console.log(key, obj[key] + 100)
}