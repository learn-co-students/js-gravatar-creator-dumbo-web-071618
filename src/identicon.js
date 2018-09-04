class Identicon {
    constructor(string)   {
        console.log(string)
        this.md5Array = md5.array(string)
    }

    getRgb()    {
        return `rgb(${this.md5Array[0]}, ${this.md5Array[1]}, ${this.md5Array[2]}`
    }
}
