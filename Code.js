

alert (`مرحباً بك في موقعي الذي سيحسب درجتك!!`)

let grade = prompt ( `enter your grade`)
 
console.log (grade)
if ( grade >= 90 &&  grade <100) {
    console.log(`%c🥳لقد حصلت على امتياز`,`color:red`)
}

else if ( grade >= 80 &&  grade <89) {
    console.log (`%c🤩لقد حصلت على جيد جدا`,`color:red` ) 
}
else if ( grade >= 70 && grade <79) {
    console.log(`%c🙂لقد حصلت على جيد`,`color:red`)
}
else if ( grade >= 60 && grade <69) {
    console.log(`%c😕 لقد حصلت على مقبول`,`color:red`)
}
else if ( grade >= 50 &&  grade<59) {
    console.log(`%c☹لقد حصلت على ضعيف`,`color:red`)
}
else if  (grade < 50 )
{console.log
(`%c💔انت راسب شد حيلك يولد `,`color:blue`)
}
// ` حمودي اقوى مطور ويب    `


