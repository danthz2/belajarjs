
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

var benefitMitra = [
  {
    "icon": "assets/jejaring.png",
    "head": "Jejaring Bisnis",
    "prgrf": "Kesempatan untuk menjangkau <span class='text-clr'>865</span> pengguna kami"
  },
  {
    "icon": "assets/insentif.png",
    "head": "Insentif",
    "prgrf": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pellentesque elit tellus feugiat malesuada faucibus"
  },
  {
    "icon": "assets/pengalaman.png",
    "head": "Pengalaman",
    "prgrf": "Berbagi cerita, motivasi, dan pengalaman menarik dengan menjadi pembicara pada LatihID Talks maupun PETA"
  },
  {
    "icon": "assets/sertifikat.png",
    "head": "Sertifikat",
    "prgrf": "Dokumentasi sebagai pembicara dalam acara LatihID"
  },
];

var typeMitra = [
  {
    "icon": "assets/ikon1.png",
    "head": "Pemateri Modul",
    "prgrf": "Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Modul, dengan menyediakan beberapa courses di dalam satu modul pembelajaran."
  },
  {
    "icon": "assets/ikon2.png",
    "head": "Pembicara Talks",
    "prgrf": "Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID Talks, yang membahas topik seputar UMKM melalui webinar live atau tatap muka yang interaktif."
  },
  {
    "icon": "assets/ikon3.png",
    "head": "Pembicara PETA",
    "prgrf": "Individu/Lembaga bermitra sebagai instruktur atau pemateri di latihID PETA, yang menceritakan pengalaman tentang UMKM dalam video singkat."
  },
  {
    "icon": "assets/ikon4.png",
    "head": "Mitra Lainnya",
    "prgrf": "Individu/Lembaga dapat mengajukan berbagai jenis kemitraan lainnya, seperti Media partner."
  },
];






//Looping of the function using For
function forFunc() {
  var text = "";
  for (var i = 0; i < mahasiswa.length; i++) {
    text = mahasiswa[i].nama + "\n";
    console.log(text);
  }
};

//Looping of the function using forEach
function fEachFunc() {
  var text = "";
  mahasiswa.forEach(function (e) {
    text = e.nim + "\n";
    console.log(text);
  })
};

//Looping of the function using map
function mapFunc() {
  var dataMhs = mahasiswa.map(val => val.email);
  console.log(dataMhs.join("\n"));
};




function callMitra() {
  const mitraBenefit = document.querySelector(".mitra-benefit");
  var txt = '';
  var ar = [2, 1, 2, 1];
  benefitMitra.map(function (e, i) {
    txt += '<div data-aos="fade-up" data-aos-duration="1500" class="col-md-6 col-lg-3"><div class="scope-' + ar[i] + '"><div class="icon"><img src="' + e.icon + '" alt=""></div><span>' + e.head + '</span><p>' + e.prgrf + '</p></div></div>';
  });
  mitraBenefit.innerHTML = txt;
}

function callTypeMitra() {
  const mitraType = document.querySelector(".mitra-type-row");
  var txt = '';
  typeMitra.map(function (e) {
    txt += '<div class="col-md-6 col-lg-3 text-center mt-4"><div class="card"><div class="card-body"><img src="' + e.icon + '" alt=""><h5 class="card-title mt-4">' + e.head + '</h5><p class="card-text">' + e.prgrf + '</p></div></div></div>';
  });
  mitraType.innerHTML = txt;
}


//self invok function
(function () {
  callMitra();
  callTypeMitra();
})();