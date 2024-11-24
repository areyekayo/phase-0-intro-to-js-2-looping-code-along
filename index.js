function writeCards(name, event){
    const messages = []
    for (let i = 0; i < name.length; i++) {
        const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!` ;
        messages.push(message);
    }
    return messages 
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number){
    let i = 0;
    while(i <= number){
        console.log(number - i);
        i++;
    }
}

countDown(10);