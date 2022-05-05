var cards;
var index = 0;
window.onload = function(){
    loadCards();
}

function loadCards(){
    document.getElementById('cardSection').innerHTML = "";
    callAPI('http://localhost:3000/colec', 'GET', function(status, response){
        if (status === 200 || status === 201){
            cards = response.response
            var section = document.getElementById('cardSection');
            var str = "";

            for (var i=0; i<cards.length; i++){
                str += "<article>";
                    str += "<img alt='"+cards[i].pokename+"' src='"+cards[i].url+"' />";
                    str += "<h2>" + "Name: "+ cards[i].pokename + "</h2>";
                    str += "<p>"+ "Geração: " + cards[i].generation +"</p>";
                    str += "<p>"+ "Tipo: " + cards[i].tipo+"</p>";
                    str += "<footer>";
                        str += "<button onclick=deleteCard('"+ cards[i].id +"')>Deletar Carta</button>"
                        str += "<button onclick=updateCard('"+ i +"')>Editar Carta</button>";
                    str += "</footer>";
                str += "</article>";
            }

            section.innerHTML += str;
        }
    
    });
}

function createCard(){
    event.preventDefault();
    var newCard = {
        pokename: document.getElementById('pokeName').value,
        generation: document.getElementById('pokeGen').value,
        tipo: document.getElementById('pokeTipo').value,
        url: document.getElementById('pokeImage').value
    }
    callAPI('http://localhost:3000/colec', "POST", function(status, response){
        console.log(status);
        if(status == 200 || status === 201){
            loadCards();
            document.getElementById('pokeName').value = "";
            document.getElementById('pokeGen').value = "";
            document.getElementById('pokeTipo').value = "";
            document.getElementById('pokeImage').value = "";
        }else{
            alert("Not able to add card!Please try again!");
        }
    }, newCard);
}

function deleteCard(id){
    event.preventDefault();
    var confirmed = confirm("Do you really want to delete this card?");
    if (confirmed) {
        callAPI("http://localhost:3000/colec" + "/" + id, 'DELETE', function(status, response){
            if (status === 200 || status === 201) {
                loadCards();
            } else {
                alert("Not able to dele the card! Please try again!");
            }
        });
    }
}

function updateCard(i){
    this.index = i
    completeForm()
}

function completeForm(){
    event.preventDefault()
    document.getElementById('pokeName').value = cards[index].pokename;
    document.getElementById('pokeGen').value = cards[index].generation;
    document.getElementById('pokeTipo').value = cards[index].tipo;
    document.getElementById('pokeImage').value = cards[index].url;
}

function sendUpdate(){
    event.preventDefault();
    var newCard = colecs[index];
    newCard.pokename = document.getElementById('pokeName').value;
    newCard.generation = document.getElementById('pokeGen').value;
    newCard.tipo = document.getElementById('pokeTipo').value;
    newCard.url = document.getElementById('pokeImage').value;

    callAPI('http://localhost:3000/colec', 'PATCH', function(status, response){
        if (status === 200 || status === 201){
            loadCards();
            document.getElementById('pokeName').value = "";
            document.getElementById('pokeGen').value = "";
            document.getElementById('pokeTipo').value = "";
            document.getElementById('pokeImage').value = "";
        } else {
            alert('Not able to edit! Please try again!');
        }
    }, newCard);
}


function callAPI(url, method, callback, data){
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.open(method, url, true);
    if (method == 'POST' || method == 'PATCH' || method == 'UPDATE'){
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.onload = function(){
        callback(xhr.status, xhr.response);
    }

    if (data) {
        xhr.send( JSON.stringify(data) );
    } else {
        xhr.send();
    }
}