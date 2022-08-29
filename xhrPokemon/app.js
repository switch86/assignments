const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        JSONdata = xhr.responseText
        data = JSON.parse(JSONdata)
        console.log(data)
        listNames(data)
    }
}

function listNames(data) {
    for (let i = 0; i < data.objects[0].pokemon.length; i++) {
        let name = data.objects[0].pokemon[i].name
        let datasheet = data.objects[0].pokemon[i].resource_uri
        let h1 = document.createElement("h1")
        h1.textContent = name 
        document.body.appendChild(h1)
        let p = document.createElement("p")
        p.textContent = `API location: ${datasheet}`
        document.body.appendChild(p)
        
        // const xhr2 = new XMLHttpRequest()
        // xhr2.open("GET", `${datasheet}`, true)
        // xhr2.send()

        // xhr2.onreadystatechange = function() {
        //     JSONdata = xhr2.responseText
        //     data = JSON.parse(JSONdata)
        // }
        
        
    }

}