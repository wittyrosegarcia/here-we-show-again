const parentElement = document.querySelector('.Katalist')
for (let katas = 1; katas <= 18; katas++){
    const kataheading = document.createElement('h3')
    const kataresult = document.createElement('p')
    kataresult.setAttribute('id', 'id' + katas)
    kataheading.append('kata', katas)
    parentElement.append(kataheading)
    kataheading.append (kataresult)
}

// kata 1
let kata1array = []
for (let index= 1; index<=20; index++){
    kata1array.push(index)
}
const kata1result = document.querySelector('#id1')
kata1result.append(kata1array)


// kata 2
let kata2array = []
for (let index = 2; index <= 20; index +=2){
    kata2array.push(index)
}
const kata2result = document.querySelector('#id2')
kata2result.append(kata2array)


// kata 3 
let kata3array = []
for (let index = 1; index <= 20; index +=2){
    kata3array.push(index)
}
const kata3result = document.querySelector('#id3')
kata3result.append(kata3array)


// kata 4
let kata4array = []
for (let index = 5; index <= 100; index += 5){
    kata4array.push(' ' + index)
}
const kata4result = document.querySelector('#id4')
kata4result.append(kata4array)


// kata 5 
let kata5array = []
for (let index = 1; index <= 100; index++){
    let square = Math.sqrt(index)
    if (square %1===0) {
        kata5array.push(index)
    }
}
const kata5result = document.querySelector('#id5')
kata5result.append(kata5array)


// kata 6
let kata6array = []
for (let index = 20; index >= 1; index --){
    kata6array.push(index)
}
const kata6result = document.querySelector('#id6')
kata6result.append(kata6array)


// kata 7
let kata7array = []
for (let index = 20; index >= 2; index -= 2){
    kata7array.push(index)
}
const kata7result = document.querySelector('#id7')
kata7result.append(kata7array)


// kata 8
let kata8array = []
for(let index = 19; index > 0; index -= 2){
    kata8array.push(index)
}
const kata8result = document.querySelector('#id8')
kata8result.append(kata8array) 


// kata 9
let kata9array = []
for (let index = 100; index >= 5; index -= 5){
    kata9array.push(' ' + index)
}
const kata9result = document.querySelector('#id9')
kata9result.append(kata9array)


// kata 10
let kata10array = []
for (let index = 100; index >= 1; index--){
    let square = Math.sqrt(index)
    if (square %1===0){
        kata10array.push(index)
    }
}
const kata10result = document.querySelector('#id10')
kata10result.append(kata10array)


// kata 11
let simpleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,];
const kata11result = document.querySelector('#id11') 
kata11result.append(simpleArray) 


// kata 12
let kata12array = []
for( let index = 0; index < simpleArray.length; index++){
    const element = simpleArray[index];
    if (element %2===0) {
        kata12array.push(element)
    }
}
const kata12result = document.querySelector('#id12')
kata12result.append(kata12array)


// kata 13
let kata13array = []
for (let index = 0; index <simpleArray.length; index++){
    const element2 = simpleArray[index];
    if(element2 %2!==0){
        kata13array.push(element2)
    }
}
const kata13result= document.querySelector('#id13')
kata13result.append(kata13array)


// kata 14
let kata14array = []
for (let index = 0; index <simpleArray.length; index++){
    let element3 = simpleArray[index];
    let stack = element3 * element3
        kata14array.push(stack)
    }

const kata14result = document.querySelector('#id14')
kata14result.append(kata14array)


// kata 15
let katastack15 = 0
for(let index = 1; index <= 20; index++){
    katastack15 += index
}
const kata15result = document.querySelector('#id15')
kata15result.append(katastack15) 


// kata 16
let katastack16 = 0
for(let index = 0; index < simpleArray.length; index++){
    katastack16 += simpleArray[index];
}
const kata16result = document.querySelector('#id16')
kata16result.append(katastack16) 


//kata 17
let smallNumber = simpleArray[0]
for (let index = 1; index <simpleArray.length; index++){
    if (simpleArray[index] < smallNumber){
        smallNumber = simpleArray[index]
    }   
}
const kata17result= document.querySelector('#id17')
kata17result.append(smallNumber)


// kata 18
let largeNumber = simpleArray[0]
for (let index = 1; index <simpleArray.length; index++){
    if (simpleArray[index] < largeNumber){
        largeNumber = simpleArray[index]
    }   
}
const kata18result= document.querySelector('#id18')
kata18result.append(largeNumber)

// Done with Desmond Obiri-Yeboah and Terry Hanratta









