function handleSubmit(e) {
    e.preventDefault()

    resetDOM()
    let input = document.querySelector('#string')
    let identicon = new Identicon(input.value)
    updateDOM(identicon)
    string.value = ""
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("identicon-form")
    form.addEventListener("submit", handleSubmit)
})
