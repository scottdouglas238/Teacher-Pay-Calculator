const ytd = document.getElementById("ytd")
const payFrequency  = document.getElementById("payFrequency")
const lastDate = document.getElementById("lastDate");
const elapsedPayPeriods  = document.getElementById("elapsedPayPeriods")
const button = document.getElementById("button")
const numOfMonths = document.getElementById("numOfMonths")
const teacherPayTotal = document.getElementById("teacherPayTotal")
let PFarray = []



button.addEventListener("click", function(e){
    e.preventDefault()
    const currentDate = new Date().getFullYear()
    const date1 = new Date(currentDate, 0, 1)
    const dateParts = lastDate.value.split("-")
    const date2 = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const diffInMilliseconds = date2 - date1;
    const diffInDays = diffInMilliseconds / 1000 / 60 / 60 / 24;
 
    

    console.log(diffInDays)
    
})




payFrequency.addEventListener("click", function(){
   PFarray = []
   const PFV = payFrequency.options.selectedIndex
   PFarray.push(PFV)


})