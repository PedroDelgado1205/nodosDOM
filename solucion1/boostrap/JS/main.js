let parameters = []
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load(){
    const $form = document.getElementById("frmUsers")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")

    const templateElement = (data, position) => {
        return (`
            <button type="button" class="btn-close" aria-label="Close" onclick="removeElement(event, ${position})"></button>
            <strong>User - </strong> ${data}
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        if($form.name.value != "" && $form.lastName.value != ""){
            let index = addJsonElement({
                name: $form.name.value,
                lastName: $form.lastName.value
            })
            const $div = document.createElement("div")
            $div.classList.add("alert", "alert-info")
            $div.role="alert"
            $div.innerHTML = templateElement(`${$form.name.value} ${$form.lastName.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }else{
            alert("Complete los campos")
        }
    })

    $btnSave.addEventListener("click", (event) =>{
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $divElements.innerHTML = ""
        parameters = []
    })
})()