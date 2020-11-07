
/////////////// Ex1 /////////////////////

const StringFormatter = function(){

    const capitalizeFirst = function(str)
    {
        str = str.toLowerCase()
        str = str[0].toUpperCase() + str.slice(1)
        console.log(str)
    }

    const skewerCase = function(str)
    {
        str = str.split(" ").join("-")
        console.log(str)
    }

    return {
        capitalizeFirst, skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box




/////////////// Ex2 /////////////////////


const Bank = function(){
    let money = 500

    const depositCash = function(cash)
    {
        money += cash
    }

    const checkBalance = function()
    {
        console.log(money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950




/////////////// Ex3 /////////////////////

const SongsManager = function()
{
    const songs = {}
    const youTubeBaseUrl = "https://www.youtube.com/watch?"

    const urlIdentifier = function(fullUrl)
    {
        let identifier = fullUrl.substr(32)
        return identifier

    }

    const finalUrl = function(identifier)
    {
        return youTubeBaseUrl + identifier 

    } 


    const addSong = function(songName, fullUrl)
    {
        songs[songName] = urlIdentifier(fullUrl)

    }

    const getSong = function(songName)
    {
        console.log(finalUrl(songs[songName]));
    }

    return {
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

