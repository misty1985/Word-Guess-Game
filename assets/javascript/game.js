
var selectableWords =
    [
        "Pokémon", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander",
        "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
        "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill",
        "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow",
        "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina",
        "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales",
        "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
        "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian",
        "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl",
        "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
        "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta",
        "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd",
        "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster",
        "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler",
        "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
        "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
        "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Scyther", "Jynx",
        "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee",
        "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabutops", "Aerodactyl", "Snorlax",
        "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
    ];

const maxTries = 10;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;


function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }

    document.getElementById("youwin").src == "display: none";
    document.getElementById("gameover") = "display: none";
    document.getElementById("playagain").style.cssText = "display: none";

    function updateDisplay() {

        document.getElementById("totalWins").innerText = wins;
        document.getElementById("currentWord").innerText = "";
        for (var i = 0; i < guessingWord.length; i++) {
            document.getElementById("currentWord").innerText += guessingWord[i];
        }
        document.getElementById("remainingGuesses").innerText = remainingGuesses;
        document.getElementById("guessedLetters").innerText = guessedLetters;
        if (remainingGuesses <= 0) {
            document.getElementById("gameOver").style.cssText = "display: block";
            document.getElementById("playAgain").style.cssText = "display:block";
            hasFinished = true;
        }


        document.onkeydown = function (event) {
            if (hasFinished) {
                resetGame();
                hasFinished = false;
            } else {
                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    makeGuess(event.key.toLowerCase());
                }

                function makeGuess(letter) {
                    if (remainingGuesses > 0) {
                        if (!gameStarted) {
                            gameStarted = true;
                        }
                        if (guessedLetters.indexOf(letter) === -1) {
                            guessedLetters.push(letter);
                            evaluateGuess(letter);
                        }
                    }

                    updateDisplay();
                    checkWin();

                    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
                        if (selectableWords[currentWordIndex][i] === letter) {
                            positions.push(i);
                        }
                    }

                    if (positions.length <= 0) {
                        remainingGuesses--;
                    } else {

                        for (var i = 0; i < positions.length; i++) {
                            guessingWord[positions[i]] = letter;
                        }

                        function checkWin() {
                            if (guessingWord.indexOf("_") === -1) {
                                document.getElementById("youWin").style.csstext = "display: block";
                                document.getElementById("playAgain").style.cssText = "display: block";
                                wins++;
                                hasFinished = true;
                            }
                        }
                    }
                }
            }
        }
    }
}
