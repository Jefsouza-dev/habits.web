const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (!dayExists) {
    nlwSetup.addDay(today)
    return
  }
  alert("Dia já existente")
}

function save() {
  localStorage.setItem("key", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("key")) || {}

nlwSetup.setData(data)
nlwSetup.load()
