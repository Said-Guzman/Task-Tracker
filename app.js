async function main() {
    let response = await fetch('http://127.0.0.1:4000');
    let data = await response.json();
    console.log(data);

    // Replace this
    var tag = document.createElement("li");
    var text = document.createTextNode(data[0].description);
    tag.appendChild(text);
    var element = document.getElementById("tasks");
    element.appendChild(tag);

    // for (let d of data) {
    //     addTask(d.description)
    // }
}

main();