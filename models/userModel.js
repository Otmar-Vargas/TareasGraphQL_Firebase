const users = [
    {id:"1", name:"Juan Pérez", email:"juan@example.com"},
    {id:"2", name:"Maria Alcaraz", email:"maria@example.com"}
];

const getAll = () => users;

const getById = (id) => users.find(u => u.id === id);

// function getById(id) {
//     const userFind = users.find(u=>u.id===id);
//     return userFind;
// }

const create = (name, email) => {
    const newUser = {
        id: users.length + 1,
        name: name,  
        email
    }
    users.push(newUser);
    return newUser;
}

const update = (id, name, email) => {
    const user = users.find(u => u.id === id);
    if(name != undefined) user.name = name;
    if(email != undefined) user.email = email;
    return user;
}

const remove = (id) => {
    const index = users.findIndex(u => u.id === id);
    if(index === -1) return null;
    return users.splice(index, 1)[0];
}

module.exports = {getAll, getById, create, update, remove};