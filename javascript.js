// 🔷 Baza danych haseł
const bazaDanych = {
  klasyczne: {
    Powiedzenia: [
      "Co nagle to po diable",
      "Lepszy wróbel w garści",
      "Kto pod kim dołki kopie",
      "Jak sobie pościelesz tak się wyśpisz",
      "Mądry Polak po szkodzie",
      "Nie chwal dnia przed zachodem słońca",
      "Darowanemu koniowi w zęby się nie zagląda",
      "Gdzie kucharek sześć tam nie ma co jeść",
      "Nie ma róży bez kolców",
      "Cicha woda brzegi rwie"
    ],
    Filmy: [
      "Ojciec chrzestny",
      "Matrix",
      "Titanic",
      "Forrest Gump",
      "Gladiator",
      "Incepcja",
      "Skazani na Shawshank",
      "Pulp Fiction",
      "Avatar",
      "Jurassic Park"
    ],
    Gry: [
      "Wiedźmin",
      "Minecraft",
      "Counter Strike",
      "League of Legends",
      "Diablo",
      "Cyberpunk",
      "The Sims",
      "Assassin's Creed",
      "Fortnite",
      "Call of Duty"
    ],
    Serial: [
      "Gra o tron",
      "Breaking Bad",
      "Stranger Things",
      "Dom z papieru",
      "Sherlock",
      "Czarne lustro",
      "The Office",
      "Friends",
      "Vikings",
      "Narcos"
    ],
    Historia: [
      "Napoleon Bonaparte",
      "Maria Skłodowska Curie",
      "Józef Piłsudski",
      "Leonardo da Vinci",
      "Mikołaj Kopernik",
      "Juliusz Cezar",
      "Winston Churchill",
      "Kazimierz Wielki",
      "Jan III Sobieski",
      "Tadeusz Kościuszko"
    ],
    Geografia: [
      "Sahara",
      "Mount Everest",
      "Amazonka",
      "Bałtyk",
      "Grenlandia",
      "Nil",
      "Andes",
      "Ganges",
      "Kilimandżaro",
      "Wielki Kanion"
    ],
    Fantastyka: [
      "Śródziemie",
      "Hogwart",
      "Smocza Kula",
      "Pierścień Mocy",
      "Elfy z Rivendell",
      "Gondor",
      "Diagon Alley",
      "Mordor",
      "Narnia",
      "Asgard"
    ],
    Nauka: [
      "Teoria względności",
      "Sztuczna inteligencja",
      "Reakcja łańcuchowa",
      "Komórka macierzysta",
      "Prąd zmienny",
      "Grawitacja",
      "DNA",
      "Fotosynteza",
      "Atom",
      "Układ okresowy"
    ],
    Muzyka: [
      "Metallica",
      "Dżem",
      "Queen",
      "Nirvana",
      "Dawid Podsiadło",
      "ACDC",
      "The Beatles",
      "Edyta Górniak",
      "Sanah",
      "Taco Hemingway"
    ],
    Humor: [
      "Latający jamnik",
      "Parówka na patyku",
      "Kaczka w garniturze",
      "Ziemniak z brodą",
      "Kosmiczny kebab",
      "Tańczący banan",
      "Śpiewający ogórek",
      "Pies w okularach",
      "Krowa na deskorolce",
      "Kurczak ninja"
    ]
  },

  specjalistyczne: {
    Komputery: [
      "Procesor Intel Core i9",
      "Pamięć RAM DDR5",
      "System operacyjny Linux",
      "Karta graficzna NVIDIA RTX",
      "Dysk SSD NVMe",
      "Płyta główna ATX",
      "Chłodzenie wodne",
      "Zasilacz modularny",
      "Monitor 4K",
      "Klawiatura mechaniczna"
    ],
    Gazownictwo: [
      "Instalacja gazowa",
      "Reduktor ciśnienia",
      "Gaz ziemny",
      "Sieć przesyłowa",
      "Liczniki gazowe",
      "Stacja redukcyjna",
      "Zawór kulowy",
      "Gazomierz",
      "Rurociąg",
      "Spalanie metanu"
    ],
    Farmacja: [
      "Ibuprofen",
      "Antybiotyki",
      "Recepta",
      "Apteka",
      "Farmaceuta",
      "Paracetamol",
      "Tabletka powlekana",
      "Szczepionka",
      "Syrop przeciwkaszlowy",
      "Lek homeopatyczny"
    ],
    Gospodarowanie_odpadami: [
      "Recykling",
      "Segregacja śmieci",
      "Odpady komunalne",
      "Kompostownik",
      "Spalarnia odpadów",
      "Odpady niebezpieczne",
      "Zbiórka elektrośmieci",
      "Sortownia",
      "Bioodpady",
      "Odpady przemysłowe"
    ],
    Biznes_korporacyjny: [
      "Zarząd",
      "Audyt finansowy",
      "Strategia rynkowa",
      "KPI",
      "Fuzja i przejęcie",
      "Dyrektor operacyjny",
      "Zespół projektowy",
      "Budżet roczny",
      "Planowanie strategiczne",
      "Raport kwartalny"
    ],
    Astronomia: [
      "Galaktyka Andromedy",
      "Czarna dziura",
      "Teleskop Hubble’a",
      "Układ słoneczny",
      "Supernowa",
      "Gwiazda neutronowa",
      "Droga Mleczna",
      "Mars",
      "Kometa Halleya",
      "Kosmiczny teleskop Jamesa Webba"
    ],
    Sport: [
      "Piłka nożna",
      "Tenis ziemny",
      "Koszykówka",
      "Skoki narciarskie",
      "Formuła 1",
      "Siatkówka",
      "Hokej na lodzie",
      "Bieg maratoński",
      "Szachy",
      "Rzut oszczepem"
    ],
    Sztuka: [
      "Impresjonizm",
      "Martwa natura",
      "Rzeźba",
      "Fresk",
      "Surrealizm",
      "Akwarela",
      "Grafika komputerowa",
      "Portret olejny",
      "Kolaż",
      "Minimalizm"
    ],
    Transport: [
      "Autobus elektryczny",
      "Metro",
      "Rower miejski",
      "Samolot pasażerski",
      "Kolej dużych prędkości",
      "Tramwaj",
      "Skuter elektryczny",
      "Transport morski",
      "Autostrada",
      "Logistyka miejska"
    ],
    Kuchnia: [
      "Risotto",
      "Sushi",
      "Pierogi ruskie",
      "Tiramisu",
      "Zupa pho",
      "Lasagne",
      "Kebab",
      "Chili con carne",
      "Pad Thai",
      "Sałatka Cezar"
    ]
  }
};

// 🔷 Zmienne globalne
let haslo = "";
let dlugosc = 0;
let ile_skuch = 0;
let haslo1 = "";
let aktualnaKategoria = "";
let aktualnyTyp = "";

// 🔷 Pokaz ekran wyboru kategorii
function pokazWyborKategorii() {
  document.getElementById("start").style.display = "none";
  document.getElementById("wybor-kategorii").style.display = "block";
  wypelnijKategorie();
}

// 🔷 Wypełnij przyciski kategorii
function wypelnijKategorie() {
  const klasyczneDiv = document.getElementById("klasyczne-kategorie");
  const specjalistyczneDiv = document.getElementById("specjalistyczne-kategorie");
  klasyczneDiv.innerHTML = "";
  specjalistyczneDiv.innerHTML = "";

  for (const nazwa in bazaDanych.klasyczne) {
    const btn = document.createElement("button");
    btn.textContent = nazwa;
    btn.className = "przycisk-kategorii";
    btn.onclick = () => rozpocznijGreZKategoria(nazwa, "klasyczne");
    klasyczneDiv.appendChild(btn);
  }

  for (const nazwa in bazaDanych.specjalistyczne) {
    const btn = document.createElement("button");
    btn.textContent = nazwa;
    btn.className = "przycisk-kategorii";
    btn.onclick = () => rozpocznijGreZKategoria(nazwa, "specjalistyczne");
    specjalistyczneDiv.appendChild(btn);
  }
}

// 🔷 Rozpocznij grę z wybraną kategorią
function rozpocznijGreZKategoria(nazwa, typ) {
  aktualnaKategoria = nazwa;
  aktualnyTyp = typ;
  const bazaHasel = bazaDanych[typ][nazwa];
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
    '<span style="color:#00C000;">Kategoria:</span> ' + nazwa;
  document.getElementById("szubienica").innerHTML = '<img src="img/s0.jpg" alt="" />';
  start();
}

// 🔷 Restart gry z tą samą kategorią
function restart() {
  const bazaHasel = bazaDanych[aktualnyTyp][aktualnaKategoria];
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

// 🔷 Powrót do wyboru kategorii
function powrotDoWyboru() {
  document.getElementById("pojemnik").style.display = "none";
  document.getElementById("wybor-kategorii").style.display = "block";
}

// 🔷 Inicjalizacja po załadowaniu strony
window.addEventListener("DOMContentLoaded", function () {
  wypelnijKategorie();
});

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




//var motyw = new Audio("motyw.wav")
var win = new Audio("win.wav");
var boo = new Audio("boo.wav");
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");


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
