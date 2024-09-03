const sortBtn = document.getElementById("sort-btn")
const container = document.getElementById("container")
const sortBtn2 = document.getElementById("sort-btn2")
const container2 = document.getElementById("container2")

sortBtn.addEventListener("click", function(){
container.classList.toggle("reversed-colors")
})

sortBtn2.addEventListener("click",function(){
    container2.classList.toggle("reversed-colors")
})