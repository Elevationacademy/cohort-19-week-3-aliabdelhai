
////////// EX1  /////////////////////

const push = function () {
    console.log("pushing it!")
}
  
const pull = function () {
    console.log("pulling it!")
}


const pushPull = function(callBack){
    callBack()  
}
  
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"



///////////// EX2 ///////////////////////


const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = function(func)
{
    const time = new Date()
    func(time)
}
  
getTime(returnTime)


////////////// EX3 ////////////////////////

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = str => console.log(str)
  
displayData(alert, logData, "I like to party")



////////////// EX4 ////////////////////////

const sum = (num1, num2, num3) => num1 + num2 + num3

console.log(sum(1,2,3))



////////////// EX5 ////////////////////////


const capitalize = name => (name.toLowerCase())[0].toUpperCase() + name.toLowerCase().slice(1)

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia


////////////// EX6 ////////////////////////


const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}

const commentOnWeather = temp =>  "it's " + determineWeather(temp)
   
console.log(commentOnWeather(30))
console.log(commentOnWeather(22))


////////////// EX7 ////////////////////////


const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

