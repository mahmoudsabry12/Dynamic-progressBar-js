// const setinterval = setInterval(() => {
//     console.log("ffffff")
// }, 1000);

// const progress = document.querySelector(".progress")
// const loading = document.querySelector(".loading")

// let i = 0
//  const fakeUpload = [0, 5, 15, 30, 40, 50, 60, 65, 80, 95, 100]

// const interval= setInterval(() =>
//     {
//         progress.style.width = fakeUpload[i] + "%"
//         loading.innerHTML = fakeUpload[i]  + "%"
//         i++
//         if (i == fakeUpload.length){
//             clearInterval(interval)
//             loading.innerHTML =  "Completed"

//         }
//     },100)


const circle = document.querySelector(".progress-circle")
const loading = document.querySelector(".loading")

let i = 0
const fakeUpload = [0, 5, 15, 30, 40, 50, 60, 65, 80, 95, 100]
const circumference =circle.getTotalLength()

const interval = setInterval(()=>{
    circle.style.strokeDashOffset = circumference - (fakeUpload[i] / 100) * circumference
    i++
}, 1000)





