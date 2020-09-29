
AOS.init();

window.addEventListener("scroll", function () {
  var navShadow = document.getElementsByClassName("navbar");
  navShadow[0].classList.toggle("navbar-shdw", window.scrollY > 0);
})

var mahasiswa = [
  {
    "name": "Ahmad Faqih",
    "nim": 1603015117,
    "notelp": 6285813834424,
    "email": "faqihsidj@gmail.com"
  },
  {
    "name": "Muhammad Irva",
    "nim": 1603015118,
    "notelp": 6285814834425,
    "email": "irva.mhd@gmail.com"
  },
  {
    "name": "Faishal Mustofa",
    "nim": 1603015119,
    "notelp": 6285815234424,
    "email": "ichals@gmail.com"
  },
  {
    "name": "Bayu Aji",
    "nim": 1603015120,
    "notelp": 6285721334424,
    "email": "bayuaji@gmail.com"
  },
  {
    "name": "Muhammad Rafly",
    "nim": 1603015121,
    "notelp": 6285752334424,
    "email": "m.raflyr@gmail.com"
  },
  {
    "name": "Diki Pratama",
    "nim": 1603015122,
    "notelp": 6285813834424,
    "email": "dikidpr@gmail.com"
  },
  {
    "name": "Raka Rizky",
    "nim": 1603015123,
    "notelp": 6285815312424,
    "email": "rakarzky@gmail.com"
  },
  {
    "name": "Dede Hidayat",
    "nim": 1603015124,
    "notelp": 6285816598424,
    "email": "dedehdyt@gmail.com"
  },
  {
    "name": "Muhammad Alfian",
    "nim": 1603015125,
    "notelp": 628581923224,
    "email": "m.alfian@gmail.com"
  },
  {
    "name": "Candra Ageng",
    "nim": 1603015126,
    "notelp": 6285898643224,
    "email": "ccandra.12@gmail.com"
  }
];



// for (x in mahasiswa) {
//   var text = "";
//   text += mahasiswa[x].nama + "\n";
// }

// for (var i = 0; i < mahasiswa.length; i++) {
//   var text = "";
//   text += mahasiswa[i].nama + "\n";
// }

// mahasiswa.forEach(function (e, i) {
//   var text = "";
//   text += e.nama + "\n";
// })
// var namaMahasiswa = mahasiswa.map(val => val.nama);


// Fungsi Looping dengan For
function forFunc() {
  var text = "";
  for (var i = 0; i < mahasiswa.length; i++) {
    text = mahasiswa[i].nama + "\n";
    console.log(text);
  }
};

//Fungsi Looping dengan forEach
function fEachFunc() {
  var text = "";
  mahasiswa.forEach(function (e) {
    text = e.nim + "\n";
    console.log(text);
  })
};

//Fungsi Looping dengan map
function mapFunc() {
  var dataMhs = mahasiswa.map(val => val.email);
  console.log(dataMhs.join("\n"));
};


// self invok Function
(function () {
  fEachFunc();
})();
