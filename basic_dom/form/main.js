const name = document.getElementById('name')
const age = document.getElementById('age')
const salary = document.getElementById('salary')
const birthday = document.getElementById('birthday')
const msg = document.getElementById('message')
const btn = document.getElementById('btn')
const container= document.getElementById('container')
const phone=document.getElementById('phone')
const welcome = document.getElementById('welcome')

btn.onclick = function()
{
    event.preventDefault()
    let flag=true
    if (name.value.length<2) {
        flag=false
        msg.innerHTML += ' Name must be longer than 2 characters, '
    }
    if (salary.value < 10000 || salary.value > 16000) {
        flag=false
        msg.innerHTML += " Salary must be greater than 10,000 but less than 16,000, "
    }

    if(!(birthday.value)){
        flag=false
        msg.innerHTML += " Birthday may not be null, "
    }

    if (phone.value.length!=10) {
        flag=false
        msg.innerHTML += " Phone must be 10 digits long, "
    
    }

    if (flag)
    {
        container.classList.add('hide')
        welcome.innerHTML=`welcome ${name.value}`
        welcome.classList.remove('hide')
    }
    

}








