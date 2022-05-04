let age = 70

if(typeof(age)=="number"){
    if (age >=18 && age<60) {
        console.log("Full Acces")
    }
    else if (age < 18){
        console.log("Skazki")
    }
    else if (age >= 60) {
        console.log("Sovsem durak? Spi")
    } 
else {
console.log("Zdarova")
}
}