let nowQuestion = 0
let score = 0
let incorrect = 0
const ques_con = document.getElementById("ques_con")
const container = document.getElementById("container")

// Show Questions
showQues()
function showQues() {
    //Display
    ques_con.innerHTML = `<h4>${nowQuestion + 1} / ${questions.length}</h4>`
    score_con.innerHTML = `<h4>${score} Point</h4>`
    const question_box =document.getElementById("question_box")
    let question_show = '<h1>'+ questions[nowQuestion].question +'</h1>'
    question_box.innerHTML = question_show

    //load Options
    const option_list = document.getElementById("option_list")
    let option_show = '<div class="option" id="optionA"><span>'+ questions[nowQuestion].a +'</span></div>'
                        +'<div class="option" id="optionB"><span>'+ questions[nowQuestion].b +'</span></div>'
                        +'<div class="option" id="optionC"><span>'+ questions[nowQuestion].c +'</span></div>'
                        +'<div class="option" id="optionD"><span>'+ questions[nowQuestion].d +'</span></div>'
    option_list.innerHTML = option_show

    // array to string
    const option = document.querySelectorAll(".option")
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick" , "selectAns(this)")
    }
}

var replayQuestion = []
var replayCorrect = []
// user select answer
function selectAns(answer) {
    let userAns = answer.textContent
    let correctAns = questions[nowQuestion].correct
    let allOptions = option_list.children.length // output = 4
        // remove text color from last question
        score_con.setAttribute("class" , "score_con")
    if (userAns == correctAns) {
            answer.classList.add("correct")
        score += 1
        const score_con = document.getElementById("score_con")
    } else {
        incorrect++
        answer.classList.add("incorrect")
        // auto show correct answer
        for (i=0; i < allOptions; i++) {
            // check choice 1-4 if that choice correct show real correct answer
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct"); // add green box to real correct answer
            }
        }
        replayQuestion.push(questions[nowQuestion].question)
        replayCorrect.push(questions[nowQuestion].correct)
}
console.log(replayQuestion)
console.log(replayCorrect)

    function plus(){
        nowQuestion++
        final()
        showQues()
    } setTimeout(plus,1000)

} // function select answer

const giveup = document.querySelector(".giveup")
giveup.addEventListener("click",() => {
    giveupClick()
})

function giveupClick() {
    cheerup_box.classList.add("activeCheer")
        score_cheer.innerHTML = `<h2>รอบนี้ทำได้ทั้งหมด <br>${score} / ${questions.length} คะแนน</h2><br>ถูกไปตั้ง ${score} ข้อ ผิดแค่ ${incorrect} เอง เก่งมาก!🌷𓂋👛🍬 ⟡｡* ♡`
            reload.addEventListener("click",() => {
                window.location.reload()
            })
}

const cheerup_box = document.querySelector(".cheerup_box")
const reload = document.querySelector(".reload") //btn in cheer box
const score_cheer = document.querySelector(".score_cheer") // word cheer
function final() {
    if (nowQuestion >= questions.length) {
        cheerup_box.classList.add("activeCheer")
        score_cheer.innerHTML = `<h2>รอบนี้ทำได้ทั้งหมด <br>${score} / ${questions.length} คะแนน</h2><br>ถูกไปตั้ง ${score} ข้อ ผิดแค่ ${incorrect} เอง เก่งมาก!🌷𓂋👛🍬 ⟡｡* ♡`
            reload.addEventListener("click",() => {
                window.location.reload()
            })
    }
}