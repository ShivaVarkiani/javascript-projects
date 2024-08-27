let items = [];

const itemsDiv = document.getElementById("items")

function renderItems(){
    itemsDiv.innerHtml = null;

    for(const[idx, item] of Object.entries(items)){
        const text = document.createElement("p")
        text.textContent=item;

        itemsDiv.appendChild(text)
    }
}


