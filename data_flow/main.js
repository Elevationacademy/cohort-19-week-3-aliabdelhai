
const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function()
{
    $("#birthdayWishes").empty()
    for(let post of posts)
    {
        let postBox = $(`<div class='post-box'><p class=name> ${post.name} : ${post.text} </p></div>`)
        $("#birthdayWishes").append(postBox)
    }
}


$('.post').click(function()
{
    const name = $('#my-input1').val()
    const text = $('#my-input2').val()
    posts.push({name, text})
    render()

})

