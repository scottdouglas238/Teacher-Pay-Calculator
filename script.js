const ytd = document.getElementById("ytd")
const payFrequency  = document.getElementById("payFrequency")
const  lastDate = document.getElementById("lastDate")
const elapsedPayPeriods  = document.getElementById("elapsedPayPeriods")
const button = document.getElementById("button")
const numOfMonths = document.getElementById("numOfMonths")
const teacherPayTotal = document.getElementById("teacherPayTotal")

    button.addEventListener("click", function(e){
        e.preventDefault()
        teacherPayTotal.innerHTML = ""
        

       
        const total = parseFloat(ytd.value)/parseFloat(elapsedPayPeriods.value) * parseFloat(numOfMonths.value)
    teacherPayTotal.appendChild(document.createTextNode(parseFloat(total)))
        
    console.log(parseFloat(total))

    })



