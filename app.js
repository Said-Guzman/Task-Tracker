async function main(){


let response = await fetch("http://127.0.0.1:4000")
    let data = await response.json()
    console.log(data)
}






