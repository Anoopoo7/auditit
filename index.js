// const config = require("../../audit.config.json")

async function record() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json();
    console.log(json)
    // console.log(config.abc);
}
record()

module.exports = record