var pageCounter = 1;

var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

addEventListener("click", function(){
    // This creates AJAX object
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 400){
            var ourData = JSON.parse(xhr.responseText);
            renderHTML(ourData);
        } else {
            console.log("connected to server but returned an error");
        }
    };

    xhr.onerror = function(){
        console.log('connection error');
    }

    xhr.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
}); 

function renderHTML(data){
    var htmlString = "";

    for(var i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for(j = 0; j < data[i].foods.likes.length; j++){
            if(j == 0 ) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += " and " + data[i].foods.likes[j];

            }
        }

        htmlString += ' and dislikes ';
        for(j = 0; j < data[i].foods.dislikes.length; j++){
            if(j == 0 ) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += " and " + data[i].foods.dislikes[j];

            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}