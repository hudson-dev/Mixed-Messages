const component1 = ["You shouldn't", "You should", "Defintely don't"];
const component2 = ["go", "try", "attack"];
const component3 = ["it.", "something new.", "seek discomfort."];
const emojis = ["😂", "👋🏻", "❤️", "😀"];

const components = [component1, component2, component3, emojis];

const generateMessage = () => {
    var message = [];
    for (var component of components) {
        const randomInt = Math.floor(Math.random() * component.length);
        message.push(component[randomInt]);
    }

    console.log(message.join(" "));
}

generateMessage();