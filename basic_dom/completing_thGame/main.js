
//////////// EX1 //////////////////////////////////

const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
  }


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
header.style.position = "relative"
document.body.appendChild(header)


const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "my-subHeader")
document.body.appendChild(subHeader)


document.getElementById("container").style.top = 70 + "px"



left.onclick = function()
{
    let right = parseInt(block.style.left) || 0
    right -= 15
    block.style.left = right + "px"
    
}


right.onclick = function()
{
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
    
}

down.onclick = function()
{
    let down = parseInt(block.style.top) || 0
    down += 15
    block.style.top = down + "px"
    
}

up.onclick = function()
{
    let up = parseInt(block.style.top) || 0
    up -= 15
    block.style.top = up + "px"
    
}










