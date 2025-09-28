let aktualnaKategoria = "";

function rozpocznijGre() {
  const wybranaKategoria = document.getElementById("kategoria").value;
  const bazaHasel = baza[wybranaKategoria];

  haslo = bazaHasel[Math.floor(Math.random() * bazaHasel.length)].toUpperCase();
  dlugosc = haslo.length;
  ile_skuch = 0;
  haslo1 = "";

  for (let i = 0; i < dlugosc; i++) {
    haslo1 += haslo.charAt(i) === " " ? " " : "-";
  }

  document.getElementById("wybor-kategorii").style.display = "none";
  document.getElementById("pojemnik").style.display = "block";
  document.getElementById("kategoria-info").innerHTML =
    '<span style="color:#00C000;">Kategoria:</span> ' + wybranaKategoria;

  document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="" />';
  start();
}

const obrazElement = document.querySelector("#szubienica img");
obrazElement.style.opacity = 0;
setTimeout(() => {
  obrazElement.src = "img/s" + ile_skuch + ".jpg";
  obrazElement.style.opacity = 1;
}, 50);

function pokazWyborKategorii() {
  document.getElementById("start").style.display = "none";
  document.getElementById("wybor-kategorii").style.display = "block";
}

function wypelnijKategorie() {
  const kontener = document.getElementById("lista-kategorii");
  kontener.innerHTML = "";

  for (const nazwa in baza) {
    const przycisk = document.createElement("button");
    przycisk.textContent = nazwa;
    przycisk.className = "przycisk-kategorii";
    przycisk.onclick = function () {
      rozpocznijGreZKategoria(nazwa);
    };
    kontener.appendChild(przycisk);
  }
}

function rozpocznijGreZKategoria(kategoria) {
  aktualnaKategoria = kategoria;
  const bazaHasel = baza[kategoria];
  haslo = bazaHasel[Math.floor(Math.random() * bazaHasel.length)].toUpperCase();
  dlugosc = haslo.length;
  ile_skuch = 0;
  haslo1 = "";

  for (let i = 0; i < dlugosc; i++) {
    haslo1 += haslo.charAt(i) === " " ? " " : "-";
  }

  document.getElementById("wybor-kategorii").style.display = "none";
  document.getElementById("pojemnik").style.display = "block";
  document.getElementById("kategoria-info").innerHTML =
    '<span style="color:#00C000;">Kategoria:</span> ' + kategoria;
  document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="" />';
  start();
}

window.addEventListener("DOMContentLoaded", function() {
  wypelnijKategorie();
});

function powrotDoWyboru() {
  document.getElementById("pojemnik").style.display = "none";
  document.getElementById("wybor-kategorii").style.display = "block";
}

function restart() {
  const bazaHasel = baza[aktualnaKategoria];
  haslo = bazaHasel[Math.floor(Math.random() * bazaHasel.length)].toUpperCase();
  dlugosc = haslo.length;
  ile_skuch = 0;
  haslo1 = "";

  for (let i = 0; i < dlugosc; i++) {
    haslo1 += haslo.charAt(i) === " " ? " " : "-";
  }

  document.getElementById("kategoria-info").innerHTML =
    '<span style="color:#00C000;">Kategoria:</span> ' + aktualnaKategoria;
  document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="" />';
  document.getElementById("alfabet").innerHTML = "";
  start();
}






let haslo = "";

const baza = {
  Powiedzenia: [
    "Co nagle to po diable",
    "Lepszy wróbel w garści",
    "Kto pod kim dołki kopie",
    "Jak sobie pościelesz tak się wyśpisz",
    "Mądry Polak po szkodzie",
    "Nie ma róży bez kolców",
    "Z dużej chmury mały deszcz",
    "Wilk syty i owca cała",
    "Gdzie kucharek sześć tam nie ma co jeść",
    "Nie dziel skóry na niedźwiedziu"
  ],
  Filmy: [
    "Ojciec chrzestny",
    "Matrix",
    "Titanic",
    "Forrest Gump",
    "Gladiator",
    "Skazani na Shawshank",
    "Milczenie owiec",
    "Lot nad kukułczym gniazdem",
    "Pulp Fiction",
    "Czas apokalipsy"
  ],
  Gry: [
    "Wiedźmin",
    "Minecraft",
    "Counter Strike",
    "League of Legends",
    "Diablo",
    "Baldurs Gate",
    "Assassins Creed",
    "Red Dead Redemption",
    "Cyberpunk",
    "Skyrim"
  ],
  Serial: [
    "Gra o tron",
    "Breaking Bad",
    "Stranger Things",
    "Dom z papieru",
    "Sherlock",
    "Czarne lustro",
    "Vikings",
    "The Crown",
    "Ród smoka",
    "The Office"
  ],
  Historia: [
    "Napoleon Bonaparte",
    "Maria Skłodowska Curie",
    "Józef Piłsudski",
    "Leonardo da Vinci",
    "Mikołaj Kopernik",
    "Winston Churchill",
    "Jan Trzeci Sobieski",
    "Albert Einstein",
    "Królowa Elżbieta",
    "Tadeusz Kościuszko"
  ],
  Geografia: [
    "Sahara",
    "Mount Everest",
    "Amazonka",
    "Bałtyk",
    "Grenlandia",
    "Islandia",
    "Wielki Kanion",
    "Piramidy w Gizie",
    "Machu Picchu",
    "Wodospad Niagara"
  ],
  Fantastyka: [
    "Śródziemie",
    "Hogwart",
    "Smocza Kula",
    "Pierścień Mocy",
    "Elfy z Rivendell",
    "Miecz Przeznaczenia",
    "Cień i Kość",
    "Zaklęcie Ochronne",
    "Magiczny Artefakt",
    "Prorok z Północy"
  ],
  Nauka: [
    "Teoria względności",
    "Sztuczna inteligencja",
    "Reakcja łańcuchowa",
    "Komórka macierzysta",
    "Prąd zmienny",
    "Silnik parowy",
    "Promieniowanie gamma",
    "Algorytm genetyczny",
    "Kwantowa teleportacja",
    "Robot humanoidalny"
  ],
  Muzyka: [
    "Metallica",
    "Dżem",
    "Queen",
    "Nirvana",
    "Dawid Podsiadło",
    "Ed Sheeran",
    "Sanah",
    "ACDC",
    "Imagine Dragons",
    "Taco Hemingway"
  ],
  Humor: [
    "Latający jamnik",
    "Parówka na patyku",
    "Kaczka w garniturze",
    "Ziemniak z brodą",
    "Kosmiczny kebab",
    "Kapelusz z lodówki",
    "Pies filozof",
    "Krowa na deskorolce",
    "Ślimak ninja",
    "Zupa z jednorożca"
  ]
};


		//haslo = baza[Math.floor(Math.random()*baza.length)]
		
/*var losowa = Math.floor((Math.random() *6 +1));

if (losowa <= 1){
	haslo = "Dupa blada"

} else if(losowa === 1){
	haslo = "Pieniądze to nie wszystko"

} else if (losowa === 2){
	haslo = "Tolerancja jest córką wątpliwości"

} else if (losowa === 3){
	haslo = "Od nędzy do pieniędzy"

} else if (losowa === 4){
	haslo = "Miałeś chamie złoty róg"

} else if (losowa === 5){
	haslo = "I bym teraz kurwa nie miał ręki"

} else if (losowa === 6){
	haslo = "To ludzie ludziom zgotowali ten los"

}
  else {
	haslo = "Dlaczego ja"
}
*/
//console.log(losowa);
console.log(haslo)

haslo = haslo.toUpperCase();



var dlugosc = haslo.length;
var ile_skuch = 0;
//var motyw = new Audio("motyw.wav")
var win = new Audio("win.wav");
var boo = new Audio("boo.wav");
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

//window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1){
	document.getElementById("alfabet").innerHTML  = '<span style="color: green">Tak jest! Podano prawidłowe hasło: </span>'+haslo+'<br /><br /><span class="reset" onclick="restart()">JESZCZE RAZ?</span>';
	win.play();
}
	//przegrana
	if (ile_skuch>=9){
	document.getElementById("alfabet").innerHTML  = '<span style="color: red">Przegrana! Prawidłowe hasło:<br> </span>'+haslo+'<br /><br /><span class="reset" onclick="restart()">JESZCZE RAZ?</span>';
	boo.play();
}
}
