var selectedAlcohol = "";
var selectedFlavor = "";

var suggestButton = document.getElementById("suggestButton");
suggestButton.addEventListener("click", suggestCocktail);

function selectAlcohol(alcohol) {
  selectedAlcohol = alcohol;
  var selectedAlcoholText = document.getElementById("selectedAlcoholText");
  selectedAlcoholText.innerHTML = alcohol;
}

function selectFlavor(flavor) {
  selectedFlavor = flavor;
  var selectedFlavorText = document.getElementById("selectedFlavorText");
  selectedFlavorText.innerHTML = flavor;
}

function suggestCocktail() {
  //image appear
  var cocktailImageSrc = document.getElementById("cocktailImage");
  cocktailImageSrc.classList.add("open");

  var cocktailSuggestion = document.getElementById("cocktailSuggestion");

  if (selectedAlcohol === "" || selectedFlavor === "") {
    cocktailSuggestion.innerHTML = "Choose your alcohol and flavor...!";
    //prevent img appear
    cocktailImageSrc.classList.remove("open");
    return;
  } else createBubbles();

  /* var suggestedCocktail = ""; */

  // cocktail logic
  if (selectedFlavor === "sour") {
    if (selectedAlcohol === "gin") {
      suggestedCocktail = "Gin Tonic";
      cocktailImageSrc = "img/gin-tonic.png";
    } else if (selectedAlcohol === "vodka") {
      suggestedCocktail = "Moscow Mule";
      cocktailImageSrc = "img/moscow-mule.jpeg";
    } else if (selectedAlcohol === "beer") {
      suggestedCocktail = "Radler";
      cocktailImageSrc = "img/radler.png";
    } else if (selectedAlcohol === "whiskey") {
      suggestedCocktail = "Whiskey Sour";
      cocktailImageSrc = "img/whiskey-sour.jpeg";
    } else if (selectedAlcohol === "tequila") {
      suggestedCocktail = "Tequila Sour";
      cocktailImageSrc = "img/tequila-sour.png";
    } else if (selectedAlcohol === "wine") {
      suggestedCocktail = "Spritzer";
      cocktailImageSrc = "img/spritzer.png";
    }
  } else if (selectedFlavor === "sweet") {
    if (selectedAlcohol === "gin") {
      suggestedCocktail = "Tom Collins";
      cocktailImageSrc = "img/tom-collins.png";
    } else if (selectedAlcohol === "vodka") {
      suggestedCocktail = "Caipiroska";
      cocktailImageSrc = "img/caipiroska.png";
    } else if (selectedAlcohol === "beer") {
      suggestedCocktail = "Fruit Beer";
      cocktailImageSrc = "img/fruit-beer.png";
    } else if (selectedAlcohol === "whiskey") {
      suggestedCocktail = "Old Fashioned";
      cocktailImageSrc = "img/old-fashioned.png";
    } else if (selectedAlcohol === "tequila") {
      suggestedCocktail = "Margarita";
      cocktailImageSrc = "img/margarita.png";
    } else if (selectedAlcohol === "wine") {
      suggestedCocktail = "Sangria";
      cocktailImageSrc = "img/sangri-a.png";
    }
  } else if (selectedFlavor === "bitter") {
    if (selectedAlcohol === "gin") {
      suggestedCocktail = "Negroni";
      cocktailImageSrc = "img/negroni.png";
    } else if (selectedAlcohol === "vodka") {
      suggestedCocktail = "Black Russian";
      cocktailImageSrc = "img/black-russian.png";
    } else if (selectedAlcohol === "beer") {
      suggestedCocktail = "India Pale Ale (IPA)";
      cocktailImageSrc = "img/pale-ale.png";
    } else if (selectedAlcohol === "whiskey") {
      suggestedCocktail = "Manhattan";
      cocktailImageSrc = "img/manhattan.png";
    } else if (selectedAlcohol === "tequila") {
      suggestedCocktail = "Tequila Boulevardie";
      cocktailImageSrc = "img/tequila-boulevardie.png";
    } else if (selectedAlcohol === "wine") {
      suggestedCocktail = "Spritz";
      cocktailImageSrc = "img/spritz.png";
    }
  }

  cocktailSuggestion.innerHTML = suggestedCocktail + " ! enjoy !";
  cocktailImage.src = cocktailImageSrc;
}

// bubble shaker//

function createBubbles() {
  const mainContainer = document.querySelector(".main-container");
  const bubbleCount = 30;
  const totalDuration = 7000;
  const createBubble = () => {
    // make bubble element
    let bubble = document.createElement("img");
    bubble.className = "bubble";
    bubble.src = "img/drop-2.png";

    // append bubble to main container
    mainContainer.appendChild(bubble);

    // randomize position
    var randomX = Math.random() * (window.innerWidth - 30); // ランダムなX座標 (画面幅 - シャボン玉の幅)
    bubble.style.left = randomX + "px";

    // randomize speed
    var randomDelay = Math.random() * 5; // アニメーション遅延時間 (0から5秒までのランダムな値)
    bubble.style.animationDelay = randomDelay + "s";

    // remove bubble after animation
    setTimeout(function () {
      bubble.remove();
    }, totalDuration);
  };

  // create bubbles
  for (var i = 0; i < bubbleCount; i++) {
    createBubble();
  }
}

//reset
var resetButton = document.getElementById("resetButton");
resetButton.onclick = resetSelection;

function resetSelection() {
  selectedAlcohol = "";
  selectedFlavor = "";

  selectedAlcoholText.innerHTML = "";

  selectedFlavorText.innerHTML = "";

  cocktailSuggestion.innerHTML = "";

  let cocktailImageSrc = document.getElementById("cocktailImage");
  cocktailImageSrc.classList.remove("open");
}
