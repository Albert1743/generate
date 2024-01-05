function generateRandomId(length) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * alphabet.length)
        id += alphabet.charAt(randomIndex)
    }

    return id;
}

let randomId = generateRandomId(10);
console.log(randomId);