const replay_box = document.querySelector(".replay_box")
const replay = document.querySelector(".replay")
const replay_question = document.querySelector(".replay_question")
const replay_translate = document.querySelector(".replay_translate")
const replay_back = document.querySelector(".replay_back")
const replay_next = document.querySelector(".replay_next")
const count_replay = document.querySelector(".count_replay")
const close = document.querySelector("#close")

close.addEventListener("click", () => {
    cheerup_box.classList.add("activeCheer")
    replay_box.classList.remove("activeReplay")
})
// Button Event
let nowReplay = 0
let showNumReplay = 1
replay.addEventListener("click", () => {
    container.classList.add("remove")
    cheerup_box.classList.remove("activeCheer")
    replay_box.classList.add("activeReplay")
    replay_question.innerHTML = `<h1>${replayQuestion[nowReplay]}</h1>`
    replay_translate.innerHTML = `<p>${replayCorrect[nowReplay]}</p>`
    count_replay.innerHTML = `<h2>${showNumReplay} / ${replayQuestion.length}</h2>`
})
replay_next.addEventListener("click", () => {
    if (showNumReplay >= replayQuestion.length) {
        replay_next = null
    }
    console.log(nowReplay, replayQuestion.length)
    nowReplay ++
    showNumReplay ++
    replay_question.innerHTML = `<h1>${replayQuestion[nowReplay]}</h1>`
    replay_translate.innerHTML = `<p>${replayCorrect[nowReplay]}</p>`
    count_replay.innerHTML = `<h2>${showNumReplay} / ${replayQuestion.length}</h2>`
})
replay_back.addEventListener("click", () => {
    if (nowReplay == 0) {
        replay_back = null
    }
    nowReplay --
    showNumReplay --
    replay_question.innerHTML = `<h1>${replayQuestion[nowReplay]}</h1>`
    replay_translate.innerHTML = `<p>${replayCorrect[nowReplay]}</p>`
    count_replay.innerHTML = `<h2>${showNumReplay} / ${replayQuestion.length}</h2>`
})