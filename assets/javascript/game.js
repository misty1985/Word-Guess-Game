
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
        Sandslash, Primeape, Dodrio, Chansey, Snorlax,
    ];

const maxTries = 10;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;


remainingGuesses = maxTries;
gameStarted = false;

currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

guessedLetters = [];
guessingWord = [];

for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
    guessingWord.push("_");
}














































{/* <audio controls id="music">
<source src="mj.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

<p>Click the buttons to play or pause the music.</p>

<button onclick="play()" type="button">Play </button>
<button onclick="pause()" type="button">Pause</button>

<script>
var myMusic= document.getElementById("music");
function play() {
myMusic.play();
}

function pause() {
myMusic.pause();
}
</script> */}

// function play() {
//     var audio = new Audio();
//     audio.play();
// }
