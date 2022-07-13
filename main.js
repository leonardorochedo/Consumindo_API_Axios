const url = "http://localhost:5500/api" // URL da API

// GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data) // Transformando a response em um objeto simples
    })
    .catch(error => console.log(error))
}

// POST
function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

// GET com parametros
function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data

        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

// PUT (alteração)
function updateUser(id, user) {
    axios.put(`${url}/${id}`, user) // Aqui ja fez o update
    .then(respose => {
        console.log(response) // Aqui é só um console log
    })
    .catch(error => console.log(error))
}

// DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


// Users
const newUser = {
    name: "Leonardo Rochedo",
    avatar: "https://avatars.githubusercontent.com/u/62243365?v=4",
    city: "Tamarana"
}

const updatedUser = {
    name: "Renato Aragão",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}


// Executando as funções
getUsers()
// addNewUser()
getUser(3)
updateUser(3, updatedUser)
// deleteUser(4)