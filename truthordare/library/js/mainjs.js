//---------- Auto Popup Modal

$('#exampleModal').modal({
  show: true
})

// Vertically align text in textarea:
// https://stackoverflow.com/questions/29499179/vertically-align-text-in-textarea
// Script dibawah sudah dimodifikasi

var posisi = document.getElementById("tod");

// Untuk tombol truth
$('#sikat1').on('click', function () {
  var h = posisi.offsetHeight;
  $(posisi).css({
    paddingTop: 0,
    height: 0
  });
  $(posisi).css({
    paddingTop: Math.max(0, h / 2 - posisi.scrollHeight / 2),
    height: h
  });
})

// Untuk tombol dare
$('#sikat2').on('click', function () {
  var h = posisi.offsetHeight;
  $(posisi).css({
    paddingTop: 0,
    height: 0
  });
  $(posisi).css({
    paddingTop: Math.max(0, h / 2 - posisi.scrollHeight / 2),
    height: h
  });
})

/* Truth or Dare */
// Sumber : https://code.sololearn.com/W5Cjt5FiunQG/

var TruthArry = new Array(
  "T-1. Acara tv apa yang paling memuakkan? Berikan alasannya!",
  "T-2. Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
  "T-3. Apa binatang patronus yang cocok untuk kamu?",
  "T-4. Apa hal paling buruk yang pernah kamu bilang tentang temenmu?",
  "T-5. Apa hal paling memalukan dari dirimu?",
  "T-6. Apa hal paling memalukan dari temanmu?",
  "T-7. Apa hal pertama yang kamu lihat saat kamu melihat orang lain (beda gender)?",
  "T-8. Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
  "T-9. Apa hal terbodoh yang pernah kamu lakukan?",
  "T-10. Apa hal terbodoh yg pernah kamu lakukan ?",
  "T-11. Apa ketakutan terbesar kamu?",
  "T-12. Apa mimpi terburukmu?",
  "T-13. Apa mimpi terkonyol yang pernah kamu inget?",
  "T-14. Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
  "T-15. Apa sifat terburukmu menurut kamu?",
  "T-16. Apa sifat yang ingin kamu rubah dari dirimu?",
  "T-17. Apa sifat yang ingin kamu rubah dari temanmu?",
  "T-18. Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",
  "T-19. Apa yg kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",
  "T-20. Apakah hal yang menurutmu paling menonjol dari dirimu?",
  "T-21. Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",
  "T-22. Bagian tubuhmu mana yang paling kamu benci?",
  "T-23. Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",
  "T-24. Deksripsikan teman terdekat mu!",
  "T-25. Deskripsikan dirimu dalam satu kata!",
  "T-26. Film dan lagu apa yang pernah bikin kamu nangis?",
  "T-27. Hal apa yang kamu rahasiakan sampe sekarang dan gak ada satu orangpun yang tau?",
  "T-28. Hal paling romantis apa yang seseorang (beda gender) pernah lakuin atau kasih ke kamu?",
  "T-29. Hal-hal menjijikan apa yang pernah kamu alami ?",
  "T-30. Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",
  "T-31. Jika punya kekuatan super/ super power ingin melakukan apa",
  "T-32. Jika sebentar lagi kiamat, apa yg kamu lakukan ?",
  "T-33. Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",
  "T-34. Kamu pernah mencuri sesuatu gak?",
  "T-35. Kamu takut mati? kenapa?",
  "T-36. Kapan terakhir kali menangis dan mengapa?",
  "T-37. kemampuan spesial kamu apa?",
  "T-38. Kok bisa suka sama orang yang kamu sukai?",
  "T-39. Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",
  "T-40. Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
  "T-41. Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman di sebelah kananmu?",
  "T-42. Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",
  "T-43. Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",
  "T-44. Pilih PACAR atau TEMAN ? berikan alasannya !",
  "T-45. Quote apa yang paling kamu ingat dan kamu suka?",
  "T-46. Rahasia apa yg belum pernah kamu katakan sampai sekarang kepada teman mu ?",
  "T-47. Rolemodel (panutan) kamu siapa?",
  "T-48. Siapa di antara temanmu yang kamu pikir matre?",
  "T-49. Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling ngenes (paling nggak banget)?",
  "T-50. Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya kaya kuda?",
  "T-51. Siapa mantan terindah mu? dan mengapa kalian putus ?!",
  "T-52. Siapa nama artis yang pernah kamu cium fotonya diam-diam?",
  "T-53. Siapa nama guru cowok yang pernah kamu sukai dulu?",
  "T-54. Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
  "T-55. Siapa nama orang (beda gender) yang menurutmu akan asyik bila dijadikan pacar?",
  "T-56. Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus beda gender)?",
  "T-57. Siapa nama orang yang pernah kamu ikutin diam-diam?",
  "T-58. Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",
  "T-59. Siapa orang yg paling menjengkelkan di antara teman teman mu ? alasannya!",
  "T-60. Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",
  "T-61. Siapa yang paling mendekati tipe pasangan idealmu di sini"
);

var DareArray = new Array(
  "D-1. Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram",
  "D-2. Ambil beberapa nomor dari kontakmu secara acak dan kirim sms 'Aku hamil' sama mereka.",
  "D-3. Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
  "D-4. Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang 'Aku mencintaimu'",
  "D-5. Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu 'Ini.. adalah makanan yang paling mahal yang pernah kubeli.. Hiks'",
  "D-6. Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
  "D-7. Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
  "D-8. Berdiri di tengah lapangan basket dan berteriak, 'AKU MENCINTAIMU PANGERANKU/PUTRIKU'",
  "D-9. Beri hormat pada seseorang di kelas, lalu bilang 'Hamba siap melayani Anda, Yang Mulia.'",
  "D-10. Berjalan sambil bertepuk tangan dan menyanyi lagu 'Selamat Ulang Tahun' dari kelas ke koridor.",
  "D-11. Berlutut satu kaki dan bilang 'Marry me?' sama orang pertama yang masuk ke ruangan.",
  "D-12. Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload",
  "D-13. Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' sama cewek yang menurutmu paling cantik di kelas ini",
  "D-14. Bilang pada seorang guru, 'Bu/Pak, baju saya terasa sempit' dengan ekspresi memelas.",
  "D-15. Bilang pada seseorang di kelas, 'Aku sebenarnya kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.'",
  "D-16. Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang 'Buku ini isinya tidak ada yang bisa memahami'",
  "D-17. Cabut bulu kaki mu sendiri sebanyak 3x",
  "D-18. Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.",
  "D-19. Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.",
  "D-20. Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.",
  "D-21. isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.",
  "D-22. Jabat tangan orang pertama yang masuk ke ruangan ini dan bilang 'Selamat datang di Who Wants To Be a Millionaire!'",
  "D-23. Kirim sms pada orangtuamu 'Hai, bro! Aku baru beli majalah Playboy edisi terbaru!'",
  "D-24. Kirim sms pada orangtuamu, 'Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.'",
  "D-25. Kirim sms pada tiga nomor acak di kontakmu dan tulis 'Aku baru saja menjadi model majalah Playboy.'",
  "D-26. Makan 1 Sendok makan kecap manis dan kecap asin!",
  "D-27. Makan sesuatu tapi gak pake tangan.",
  "D-28. Marah-marah ketemen kamu yang gak dateng padahal udah janjian mau main 'truth or dare' bareng'",
  "D-29. Mecahin telur pake kepala.",
  "D-30. Memakan makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.",
  "D-31. Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.",
  "D-32. Mengerek tiang bendera tanpa ada benderanya.",
  "D-33. Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.",
  "D-34. Meniru style rambut semua temen kamu.",
  "D-35. Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
  "D-36. Menyanyikan lagu Iwak Peyek dengan keras di ruang kelas.",
  "D-37. Minjem sesuatu ke tetangga",
  "D-38. Minta tandatangan pada seorang guru yang paling kamu benci sambil bilang 'Anda benar-benar orang yang paling saya kagumi di dunia.'",
  "D-39. Minta uang pada seseorang (random/acak) di jalan sambil bilang 'Saya tidak punya uang untuk naik angkot.'",
  "D-40. Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.",
  "D-41. Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal.",
  "D-42. Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.",
  "D-43. Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.",
  "D-44. Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.",
  "D-45. Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan 'BERI PENGHORMATAN PADA YANG MULIA RAJA' sambil menunjuk setiap orang dengan penggaris.",
  "D-46. Pake celana kebalik sampe besok paginya.",
  "D-47. Pegang bola basket, berdiri di depan kelas, dan berteriak, 'ADA YANG TAHU MENGAPA BOLA GOLF INI SANGAT BESAR? APA PABRIKNYA SALAH CETAK?'",
  "D-48. Peluk orang yang NGGAK kamu sukai di kelas dan bilang, 'Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.'",
  "D-49. Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan “aku gila aku gila”",
  "D-50. Petik 1 bunga lalu tancapkan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
  "D-51. Pilih orang secara acak di jalan, lalu bilang 'You don't know you're beautiful' (ala One Direction)",
  "D-52. Pura pura kerasukan ex: kerasukan macan dll",
  "D-53. Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.",
  "D-54. Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.",
  "D-55. Suruh pake kaos kaki buat dijadiin sarung tangan.",
  "D-56. Suruh pake topi paling aneh/helm paling absurd selama 3 putaraann kedepan.",
  "D-57. Telpon mama kamu dan bilang “ma, aku mau nikah secepatnya”",
  "D-58. Telpon mantan kamu dan bialng “aku rindu kamu”",
  "D-59. Teriak 'WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!' ditempat rame",
  "D-60. Tuker baju sama orang terdekat sampe ronde berikutnya.",
  "D-61. Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan 'T'",
  "D-62. Upload video dia nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer",
  "D-63. Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu."
);

function TruthF() {
  var l = TruthArry.length;
  var x = Math.floor((Math.random() * l));
  var TOD = document.getElementById("tod");
  TOD.value = TruthArry[x];
}

function DareF() {
  var l = DareArray.length;
  var x = Math.floor((Math.random() * l));
  var TOD = document.getElementById("tod");
  TOD.value = DareArray[x];
}