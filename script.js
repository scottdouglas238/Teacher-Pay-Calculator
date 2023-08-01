const ytd = document.getElementById("ytd")
const payFrequency  = document.getElementById("payFrequency")
const lastDate = document.getElementById("lastDate");
const elapsedPayPeriods  = document.getElementById("elapsedPayPeriods")
const button = document.getElementById("button")
const numOfMonths = document.getElementById("numOfMonths")
const teacherPayTotal = document.getElementById("teacherPayTotal")
let ytdarry = []
let PFarray = []
let differenceInDaysArray = []
let numOfMonthsArray = []

button.addEventListener("click", function(e){
    e.preventDefault()

    // Setting the globally scoped arrays to clear the fields
    let ytdarry = []
    let differenceInDaysArray = []
    // Setting the globally scoped arrays to clear the fields


    // Gathering the current ytd from the last pay period on the latest pay stub
    const ytdValue = parseFloat(ytd.value)
    ytdarry.push(ytdValue)
    // Gathering the current ytd from the last pay period on the latest pay stub

    

    // Calculating the dates from 1/1 to date of last pay period
    const currentDate = new Date().getFullYear()
    const date1 = new Date(currentDate, 0, 1)
    const dateParts = lastDate.value.split("-")
    const date2 = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    const diffInMilliseconds = date2 - date1;
    const diffInDays = diffInMilliseconds / 1000 / 60 / 60 / 24
    differenceInDaysArray.push(diffInDays)
    // Calculating the dates from 1/1 to date of last pay period

    
    // Calculate the pay periods that have elasped
    const payPeriodElapsed = Math.floor(differenceInDaysArray/PFarray)
    
    console.log(payPeriodElapsed)


 
    
    
})




payFrequency.addEventListener("change", function(e){
   PFarray = []
   const PFV = e.target.value
   PFarray.push(PFV)
})


numOfMonths.addEventListener("change", function(e){
    numOfMonthsArray = []
    const NMA = e.target.value
    numOfMonthsArray.push(NMA)
 })