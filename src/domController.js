function updateDOM(identicon) {
    for(let col = 0, index = 0; col < 3; col++) {
        for(let row = 0; row < 5; row++, index++){
            if((identicon.md5Array[index] & 1) === 0)  {
                document.getElementById(`${row}-${col}`).style.backgroundColor = identicon.getRgb()
                document.getElementById(`${row}-${4 - col}`).style.backgroundColor = identicon.getRgb()
            }
        }
    }
}

function resetDOM() {
    for(let col = 0; col < 5; col++) {
        for(let row = 0; row < 5; row++){
            document.getElementById(`${row}-${col}`).style.backgroundColor = ""
        }
    }
}
