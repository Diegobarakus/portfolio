let navPanel = document.getElementById("navPanel");
let pageTwo = document.getElementById("pageAboutme")
let pageOne = document.getElementById("pageOne")


pageTwo.addEventListener("mouseover", function(){
    navPanel.style.transition = "1s"
    navPanel.style.transform = "translate(0%)"
})

pageOne.addEventListener("mouseover", function(){
    navPanel.style.transition = "1s ease"
    navPanel.style.transform = "translate(-100%)"
})