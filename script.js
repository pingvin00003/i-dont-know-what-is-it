

let tableWithScore = [
    [9, 7, 9, 10, 9, 44, 10, 53],
    [10, 8, 6, 6, 10, 40, 8, 48],
    [10, 8, 7, 7, 9, 41, 7, 48],
    [8, 5, 5, 8, 8, 34, 7, 41],
    [9, 8, 8, 7, 7, 39, 6, 45],
    [1, 1]
];


//----------------Заполнение и сумма чисел с 5-го столбца ------------------------------------------

let ArraySummaFifth = [1, 1, 1, 1, 1]

for(let i = 0; i < (tableWithScore.length - 1); i++){
    ArraySummaFifth[i] = tableWithScore[i][5]
    //alert(summa[i])
}

let summaFifthValue = 0

for(let j = 0; j < ArraySummaFifth.length; j++){
    summaFifthValue = ArraySummaFifth[j] + summaFifthValue
    if(j == (ArraySummaFifth.length - 1)){
        tableWithScore[5][0] = summaFifthValue 
        //alert(tableWithScore[5][0])
    }
    //alert(summaFifthValue)
}

let q1_5 = parseFloat(tableWithScore[0][5]) / parseFloat(tableWithScore[5][0])
let q2_5 = parseFloat(tableWithScore[1][5]) / parseFloat(tableWithScore[5][0])
let q3_5 = parseFloat(tableWithScore[2][5])/ parseFloat(tableWithScore[5][0])
let q4_5 = parseFloat(tableWithScore[3][5])/ parseFloat(tableWithScore[5][0])
let q5_5 = parseFloat(tableWithScore[4][5])/ parseFloat(tableWithScore[5][0])
let qAll_5 = q1_5 + q2_5 + q3_5 + q4_5 + q5_5
alert( "При пяти экспертов qобщ. = " + qAll_5 )

let centerOfMath = tableWithScore[5][0] / 5

let s1_5 = parseFloat((tableWithScore[0][5] - centerOfMath) * (tableWithScore[0][5] - centerOfMath))
let s2_5 = parseFloat((tableWithScore[1][5] - centerOfMath) * (tableWithScore[1][5] - centerOfMath))
let s3_5 = parseFloat((tableWithScore[2][5] - centerOfMath) * (tableWithScore[2][5] - centerOfMath))
let s4_5 = parseFloat((tableWithScore[3][5] - centerOfMath) * (tableWithScore[3][5] - centerOfMath))
let s5_5 = parseFloat((tableWithScore[4][5] - centerOfMath) * (tableWithScore[4][5] - centerOfMath))
let sAll_5 = s1_5 + s2_5 + s3_5 + s4_5 + s5_5
//alert(sAll_5)

let firstFinishValue = 0
let secondFinishValue = 0
let mainValue = 0

firstFinishValue = parseFloat(12 * sAll_5)
secondFinishValue = parseFloat(5**2 * (5**3 - 5))
mainValue = firstFinishValue / secondFinishValue
alert( "При пяти экспертов " + mainValue)

//----------------Заполнение и сумма чисел с 7-го столбца ------------------------------------------------

let ArraySummaSeventh = [1, 1, 1, 1, 1]

for(let o = 0; o < (tableWithScore.length - 1); o++){
    ArraySummaSeventh[o] = tableWithScore[o][7]
    //alert(ArraySummaSeventh[o])
}

let summaSeventhValue = 0

for(let z = 0; z < ArraySummaSeventh.length ; z++){
    summaSeventhValue = ArraySummaSeventh[z] + summaSeventhValue
    if(z == (ArraySummaSeventh.length - 1)){
        tableWithScore[5][1] = summaSeventhValue
        //alert(tableWithScore[5][1])
    }
    //alert(summaSeventhValue)
}

let q1_7 = parseFloat(tableWithScore[0][7]) / parseFloat(tableWithScore[5][1])
let q2_7 = parseFloat(tableWithScore[1][7]) / parseFloat(tableWithScore[5][1])
let q3_7 = parseFloat(tableWithScore[2][7])/ parseFloat(tableWithScore[5][1])
let q4_7 = parseFloat(tableWithScore[3][7])/ parseFloat(tableWithScore[5][1])
let q5_7 = parseFloat(tableWithScore[4][7])/ parseFloat(tableWithScore[5][1])
let qAll_7 = q1_7 + q2_7 + q3_7 + q4_7 + q5_7
alert( "При шести экспертов qобщ. = " + qAll_7 )

centerOfMath = tableWithScore[5][1] / 5

let s1_7 = parseFloat((tableWithScore[0][7] - centerOfMath) * (tableWithScore[0][7] - centerOfMath))
let s2_7 = parseFloat((tableWithScore[1][7] - centerOfMath) * (tableWithScore[1][7] - centerOfMath))
let s3_7 = parseFloat((tableWithScore[2][7] - centerOfMath) * (tableWithScore[2][7] - centerOfMath))
let s4_7 = parseFloat((tableWithScore[3][7] - centerOfMath) * (tableWithScore[3][7] - centerOfMath))
let s5_7 = parseFloat((tableWithScore[4][7] - centerOfMath) * (tableWithScore[4][7] - centerOfMath))
let sAll_7 = s1_7 + s2_7 + s3_7 + s4_7 + s5_7
//alert(sAll_7)

firstFinishValue = parseFloat(12 * sAll_7)
secondFinishValue = parseFloat(5**2 * (6**3 - 6))
mainValue = firstFinishValue / secondFinishValue
alert( "При шести экспертов " + mainValue)




























































//let ArrayFirstString = [9, 7, 9, 10, 10, 45, 9, 54];
//let ArraySecondString = [10, 8, 6, 6, 8, 38, 8, 45];
//let ArrayThirdtring = [10, 8, 7, 7, 9, 41, 8, 49];
//let ArrayFouthString = [8, 5, 5, 8, 7, 33, 6, 39];
//let ArrayFifthString = [9, 8, 8, 7, 8, 40, 5, 45];
//let ArraySixthString = [1, 1];