function generateRandomId(length) {
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        id += characters.charAt(randomIndex)
    }

    return id;
}

let randomId = generateRandomId(10);
console.log(randomId);