
AOS.init();

window.addEventListener("scroll", function () {
  var navShadow = document.getElementsByClassName("navbar");
  navShadow[0].classList.toggle("navbar-shdw", window.scrollY > 0);
})

var mahasiswa = [
  {
    "nama": "Ahmad Faqih",
    "nim": 1603015117,
    "notelp": 85813834424,
    "email": "faqihsidj@gmail.com"
  },
  {
    "nama": "Muhammad Irva",
    "nim": 1603015118,
    "notelp": 85814834425,
    "email": "irva.mhd@gmail.com"
  },
  {
    "nama": "Faishal Mustofa",
    "nim": 1603015119,
    "notelp": 85815234424,
    "email": "ichals@gmail.com"
  },
  {
    "nama": "Bayu Aji",
    "nim": 1603015120,
    "notelp": 85721334424,
    "email": "bayuaji@gmail.com"
  },
  {
    "nama": "Muhammad Rafly",
    "nim": 1603015121,
    "notelp": 85752334424,
    "email": "m.raflyr@gmail.com"
  },
  {
    "nama": "Diki Pratama",
    "nim": 1603015122,
    "notelp": 85813834424,
    "email": "dikidpr@gmail.com"
  },
  {
    "nama": "Raka Rizky",
    "nim": 1603015123,
    "notelp": 85815312424,
    "email": "rakarzky@gmail.com"
  },
  {
    "nama": "Dede Hidayat",
    "nim": 1603015124,
    "notelp": 85816598424,
    "email": "dedehdyt@gmail.com"
  },
  {
    "nama": "Muhammad Alfian",
    "nim": 1603015125,
    "notelp": 8581923224,
    "email": "m.alfian@gmail.com"
  },
  {
    "nama": "Candra Ageng",
    "nim": 1603015126,
    "notelp": 85898643224,
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

(function () {
  var text = "";
  for (var i = 0; i < mahasiswa.length; i++) {
    text = mahasiswa[i].nama + "\n";
    console.log(text);
  }
})();

(function () {
  var text = "";
  mahasiswa.forEach(function (e) {
    text = e.nim + "\n";
    console.log(text);
  })
})();

(function () {
  var text = "";
  var dataMhs = mahasiswa.map(val => val.email);
  console.log(dataMhs.join("\n"));
})();