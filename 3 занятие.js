





// function yolochka1(item_1, item_2){

    
//     let mass = 'Hello!!'
// console.log(mass, item_1, item_2)
// console.log(item_1 + item_2)

// }

// yolochka1(11, 22)




//юююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю






//Короче, после let f33 идёт условие,
//а ? - это типа if 
// т.е. если условие, то...
//двоеточие после тру, а потом фолс

//на ВХОД функции мы подаём любые значения 
//при вызове функции,
// т.к. они пойдут в 1 и 2 элемент
// самой функции




// let t1 = 10
// let t2 = 20
// let f33 = (t1 < t2) ?
// (t1, t2) => console.log('Stason'):
// (t1, t2) => console.log('NeStason');

// f33 (30, 40)












function yolochka33(){};

yolochka33.prototype.fast = function(){
    console.log('Fast!')
}

yolochka33.prototype.green = function(sun, co2){
    console.log('Green!', sun, '+', co2)
}
yolochka33.prototype.shishki = function (){
    console.log('shishki == yolki')
}


let forest = new yolochka33()

forest.fast()
forest.green(4500, 50)
forest.shishki()