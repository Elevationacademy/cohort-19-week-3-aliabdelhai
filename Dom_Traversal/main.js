


$(".generator").on('click', function()
{
    let processorID = $(this).closest('.processor').attr('id')
    console.log(`Processor ID: ${processorID}`)
    let computeDataID = $(this).closest('.computer').data().id
    console.log(`Computer's data-id: ${computeDataID}`)
    let bus = $(this).closest('.computer').find('.BUS').text()
    console.log(`BUS: ${bus}`)
})


$(".validator").on('click', function()
{
    let generatorText = $(this).closest('.computer').find('.generator').text()
    console.log(generatorText)
    let MB = $(this).closest('.computer').find('.MB').text()
    console.log(MB)
    $(this).closest('.computer').find('.QR').each(function(){
        console.log($(this).text())
    })

})

