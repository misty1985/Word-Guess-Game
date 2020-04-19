
var selectableWords =
    [
        Bulbasaur, Nidoran, Growlithe, Seel, Tangela, Articuno,
        Ivysaur, Nidorina, Arcanine, Dewgong, Kangaskhan, Zapdos,
        Venusaur, Nidoqueen, Poliwag, Grimer, Horsea, Moltres,
        Charmander, Nidorino, Poliwhirl, Muk, Seadra, Dratini,
        Charmeleon, Nidoking, Poliwrath, Shellder, Goldeen, Dragonair,
        Charizard, Clefairy, Abra, Cloyster, Seaking, Dragonite,
        Squirtle, Clefable, Kadabra, Gastly, Staryu, Mewtwo,
        Wartortle, Vulpix, Alakazam, Haunter, Starmie, Mew,
        Blastoise, Ninetales, Machop, Gengar, Scyther,
        Caterpie, Jigglypuff, Machoke, Onix, Jynx,
        Metapod, Wigglytuff, Machamp, Drowzee, Electabuzz,
        Butterfree, Zubat, Bellsprout, Hypno, Magmar,
        Weedle, Golbat, Weepinbell, Krabby, Pinsir,
        Kakuna, Oddish, Victreebel, Kingler, Tauros,
        Beedrill, Gloom, Tentacool, Voltorb, Magikarp,
        Pidgey, Vileplume, Tentacruel, Electrode, Gyarados,
        Pidgeotto, Paras, Geodude, Exeggcute, Lapras,
        Pidgeot, Parasect, Graveler, Exeggutor, Ditto,
        Rattata, Venonat, Golem, Cubone, Eevee, Vaporeon,
        Raticate, Venomoth, Ponyta, Marowak, Jolteon,
        Pikachu, Psyduck, Magneton, Weezing,
        Spearow, Diglett, Rapidash, Hitmonlee, Flareon,
        Fearow, Dugtrio, Slowpoke, Hitmonchan, Porygon,
        Ekans, Meowth, Slowbro, Lickitung, Omanyte,
        Arbok, Persian, Magnemite, Koffing, Omastar,
        Raichu, Golduck, Farfetchd, Rhyhorn, Kabutops,
        Sandshrew, Mankey, Doduo, Rhydon, Aerodactyl,
        Sandslash, Primeape, Dodrio, Chansey, Snorlax 
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

    document.getElementById("youWin").src == "display: none";
    document.getElementById("gameOver").style.cssText = "display: none";
    document.getElementById("playAgain").style.cssText = "display: none";

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
                                document.getElementById("youWin").style.cssText = "display: block";
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
