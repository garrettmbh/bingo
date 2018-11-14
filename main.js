

var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var testRequest = new XMLHttpRequest();
	//testRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	testRequest.open('GET', 'test.json');
	testRequest.onload = function() {
		var testData = JSON.parse(testRequest.responseText);
		renderHTML(testData);
	};
	testRequest.send();
});

function renderHTML(data) {
	animalContainer.insertAdjacentHTML('beforeend', 'testing 123');
}

$('#btn').on('click', function() {
	
	$.ajax({
		type: 'GET',
		url: 'https://learnwebcode.github.io/json-example/animals-1.json',
		success: function(animals) {
			$.each(animals, function(i, animal) {
				console.log(animal.name);
			});
		}
	});
});

$('#putBut').on('click', function() {
	
	var dataObject = {
		"name": "Sammy",
		"species" : "frog",
		"foods": {
		  "likes": ["tuna", "catnip"],
		  "dislikes": ["ham", "zucchini"]
		}
	};

        alert(JSON.stringify(dataObject));

        $.ajax({
            url: 'test.json',
            type: 'POST',    
            data: JSON.stringify(dataObject),
            contentType: 'application/json',
            success: function(result) {
                alert("success?");
            }
        });
});

