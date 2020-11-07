
///////////// EX1 + EX2 ///////////////////////////////

$('body').append(`<input type=text id=my-input placeholder='Human Name'></input>`)
$('body').append(`<button>Add Human</button>`)


$('button').on("click", function()
{
    $('ul').append(`<li>${$('input').val()}</li>`)
    $('input').val("")

})


$('ul').on("click", 'li' ,function(){
    $(this).remove()

})





///////////////////// Ex3 //////////////////////////


$('body').append('<div id="box1" class="box"></div>')
$('body').append('<div id="box2" class="box"></div>')

$("#box1").hover(function(){
    $('#box2').css('background-color', 'red')
})

$("#box1").hover(function(){
    $(this).css('background-color', '#8e44ad')
})


$("#box2").hover(function(){
    $('#box1').css('background-color', 'red')
})


$("#box2").hover(function(){
    $(this).css('background-color', '#8e44ad')
})



// ///////////////////// Ex4 //////////////////////////

$(".item").click(function(){
    if($(this).data().instock==true)
    {
        $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
        $('#cart div').click(function()
        {
            $(this).remove();
        })
    }  
})


// ///////////////////// Ex5 //////////////////////////


const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

  for(let fruit of fruits)
  {
      $('#basket').append(`<div class=${fruit.color}>${fruit.name}</div>`)
  }



///////////////////// Ex6 //////////////////////////



$('span').each(function()
{
    $(this).addClass('picker');
    $(this).css('background-color', $(this).text());
    $(this).click(function(){
        $('.box').css('background-color', $(this).text());
    })
})


