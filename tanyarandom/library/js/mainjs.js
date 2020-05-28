//---------- Auto Popup Modal

$('#exampleModal').modal({
  show: true
})

/* Random Quote Generator with No-Repeat */
// Sumber : https://codepen.io/FotoX/pen/QyWydp

var quotations = [{
    quote: "1. Kombinasi makanan aneh apa yang benar-benar Anda sukai?",
    author: ""
  },
  {
    quote: "2. Stigma sosial apa yang perlu dilewati masyarakat?",
    author: ""
  },
  {
    quote: "3. Makanan apa yang belum pernah Anda makan tetapi benar-benar ingin mencoba?",
    author: ""
  },
  {
    quote: "4. Apa sesuatu yang Anda benar-benar benci membayar untuk?",
    author: ""
  },
  {
    quote: "5. Seperti apa dunia yang dihuni oleh klon Anda?",
    author: ""
  },
  {
    quote: "6. Apakah menurut Anda alien itu ada?",
    author: ""
  },
  {
    quote: "7. Apa yang saat ini Anda khawatirkan?",
    author: ""
  },
  {
    quote: "8. Di mana beberapa tempat yang tidak biasa Anda pernah?",
    author: ""
  },
  {
    quote: "9. Dari mana Anda mendapatkan berita?",
    author: ""
  },
  {
    quote: "10. Apa saja bendera merah yang harus diperhatikan dalam kehidupan sehari-hari?",
    author: ""
  },
  {
    quote: "11. Film apa yang bisa Anda tonton berulang kali tanpa pernah bosan?",
    author: ""
  },
  {
    quote: "12. Ketika Anda tua, menurut Anda apa yang anak-anak akan minta Anda ceritakan?",
    author: ""
  },
  {
    quote: "13. Jika Anda dapat mengganti dua karakter film, saklar apa yang akan mengarah ke film yang paling tidak pantas?",
    author: ""
  },
  {
    quote: "14. Benda mati apa yang paling menjengkelkan jika dimainkan dengan musik keras dan keras saat digunakan?",
    author: ""
  },
  {
    quote: "15. Kapan sesuatu mulai buruk bagi Anda tetapi pada akhirnya, itu hebat?",
    author: ""
  },
  {
    quote: "16. Bagaimana negara Anda akan berubah jika setiap orang, tanpa memandang usia, dapat memberikan suara?",
    author: ""
  },
  {
    quote: "17. Hewan apa yang akan lucu jika diperkecil menjadi ukuran kucing?",
    author: ""
  },
  {
    quote: "18. Jika pekerjaan Anda memberi Anda istirahat tiga hari yang dibayar untuk beristirahat dan memulihkan diri, apa yang akan Anda lakukan dengan tiga hari itu?",
    author: ""
  },
  {
    quote: "19. Apa yang salah tetapi kedengarannya benar?",
    author: ""
  },
  {
    quote: "20. Apa cara paling epik Anda pernah melihat seseorang berhenti atau dipecat?",
    author: ""
  },
  {
    quote: "21. Jika Anda tidak dapat dihukum karena satu jenis kejahatan, tuduhan pidana apa yang ingin Anda kebal?",
    author: ""
  },
  {
    quote: "22. Apa sesuatu yang akan selalu menjadi mode, tidak peduli berapa lama waktu berlalu?",
    author: ""
  },
  {
    quote: "23. Aktor atau aktris apa yang memainkan karakter yang sama di hampir setiap film atau pertunjukan yang mereka lakukan?",
    author: ""
  },
  {
    quote: "24. Di masa lalu orang-orang dimakamkan dengan barang-barang yang mereka butuhkan di akhirat, apa yang ingin Anda kubur dengan Anda sehingga Anda bisa menggunakannya di akhirat?",
    author: ""
  },
  {
    quote: "25. Lelucon praktis apa yang terbaik / terburuk yang pernah Anda mainkan pada seseorang atau yang dimainkan pada Anda?",
    author: ""
  },
  {
    quote: "26. Kepada siapa Anda berusaha bersikap baik?",
    author: ""
  },
  {
    quote: "27. Di mana Anda mendapatkan sebagian besar dekorasi untuk rumah Anda?",
    author: ""
  },
  {
    quote: "28. Makanan apa yang enak tapi tidak enak dimakan?",
    author: ""
  },
  {
    quote: "29. Siapa guru Anda yang paling gila / paling menarik",
    author: ""
  },
  {
    quote: "30. Apa yang dilakukan 'orang tua' yang Anda lakukan?",
    author: ""
  },
  {
    quote: "31. Apa foto terakhir yang Anda ambil?",
    author: ""
  },
  {
    quote: "32. Apa video gerakan lambat paling menakjubkan yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "33. Menurutmu selebriti mana yang paling rendah hati?",
    author: ""
  },
  {
    quote: "34. Apa hal terburuk yang akan Anda dengar ketika Anda akan dibius sebelum operasi jantung?",
    author: ""
  },
  {
    quote: "35. Apa hal terludah yang pernah Anda makan?",
    author: ""
  },
  {
    quote: "36. Apa hal termahal yang pernah Anda langgar?",
    author: ""
  },
  {
    quote: "37. Hambatan apa yang akan dimasukkan dalam rintangan paling menakjubkan di dunia?",
    author: ""
  },
  {
    quote: "38. Apa yang membuat Anda memutar mata setiap kali mendengarnya?",
    author: ""
  },
  {
    quote: "39. Kamu pikir kamu jauh lebih baik dari apa sebenarnya?",
    author: ""
  },
  {
    quote: "40. Haruskah ginjal dapat dibeli dan dijual?",
    author: ""
  },
  {
    quote: "41. Apa penggunaan emoji paling kreatif yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "42. Kapan terakhir kali Anda memberi tahu seseorang 'Sudah kubilang.'",
    author: ""
  },
  {
    quote: "43. Teka-teki apa yang kamu tahu?",
    author: ""
  },
  {
    quote: "44. Apa obat untuk cegukan?",
    author: ""
  },
  {
    quote: "45. Penemuan apa yang tidak mendapatkan banyak cinta, tetapi telah sangat meningkatkan dunia?",
    author: ""
  },
  {
    quote: "46. ​​Bangunan apa yang paling menarik yang pernah Anda lihat atau pernah kunjungi?",
    author: ""
  },
  {
    quote: "47. Makhluk mitos apa yang Anda inginkan benar-benar ada?",
    author: ""
  },
  {
    quote: "48. Apa aturan terpenting Anda saat berkencan?",
    author: ""
  },
  {
    quote: "49. Bagaimana Anda menilai seseorang?",
    author: ""
  },
  {
    quote: "50. Jika seseorang menceritakan kehidupan Anda, siapa yang Anda inginkan untuk menjadi narator?",
    author: ""
  },
  {
    quote: "51. Film apa yang paling meresahkan yang pernah Anda tonton?",
    author: ""
  },
  {
    quote: "52. Eksperimen tidak etis apa yang akan memiliki dampak positif terbesar pada masyarakat secara keseluruhan?",
    author: ""
  },
  {
    quote: "53. Kapan terakhir kali Anda mengintip, dan menemukan sesuatu yang Anda harap tidak Anda miliki?",
    author: ""
  },
  {
    quote: "54. Selebriti atau band mana yang memiliki basis penggemar terburuk?",
    author: ""
  },
  {
    quote: "55. Apa yang Anda minati sehingga kebanyakan orang tidak?",
    author: ""
  },
  {
    quote: "56. Jika Anda diberikan gelar PhD, tetapi tidak memiliki pengetahuan lebih tentang subjek gelar selain apa yang Anda miliki sekarang, gelar apa yang ingin Anda berikan kepada Anda?",
    author: ""
  },
  {
    quote: "57. Fitur smartphone apa yang benar-benar Anda sukai untuk diterapkan oleh perusahaan?",
    author: ""
  },
  {
    quote: "58. Apa sesuatu yang orang tidak khawatirkan tetapi benar-benar harus?",
    author: ""
  },
  {
    quote: "59. Kutipan film apa yang Anda gunakan secara teratur?",
    author: ""
  },
  {
    quote: "60. Apakah Anda berpikir bahwa anak-anak yang lahir hari ini akan memiliki kehidupan yang lebih baik atau lebih buruk daripada orang tua mereka?",
    author: ""
  },
  {
    quote: "61. Apa lelucon paling lucu yang Anda hafal?",
    author: ""
  },
  {
    quote: "62. Kapan terakhir kali Anda merasa memiliki masa hidup yang baru?",
    author: ""
  },
  {
    quote: "63. Apa nama sebenarnya terlucu yang pernah Anda dengar tentang seseorang yang memiliki?",
    author: ""
  },
  {
    quote: "64. Amal atau tujuan amal manakah yang paling layak mendapatkan uang?",
    author: ""
  },
  {
    quote: "65. Apa karakter acara TV yang paling menyenangkan untuk berganti tempat selama seminggu?",
    author: ""
  },
  {
    quote: "66. Apa yang keren ketika Anda muda tetapi tidak keren sekarang?",
    author: ""
  },
  {
    quote: "67. Jika Anda pindah ke negara lain, tetapi hanya bisa mengemas satu tas jinjing, apa yang akan Anda kemas?",
    author: ""
  },
  {
    quote: "68. Apa hal paling ironis yang pernah Anda lihat terjadi?",
    author: ""
  },
  {
    quote: "69. Jika sihir itu nyata, mantra apa yang akan Anda coba pelajari terlebih dahulu?",
    author: ""
  },
  {
    quote: "70. Jika Anda adalah hantu dan dapat memiliki orang, apa yang akan Anda lakukan pada mereka?",
    author: ""
  },
  {
    quote: "71. Menurut Anda apa tujuan umat manusia tidak cukup terfokus pada pencapaian?",
    author: ""
  },
  {
    quote: "72. Masalah apa yang saat ini Anda perjuangkan?",
    author: ""
  },
  {
    quote: "73. Karakter apa dalam sebuah film yang hebat, tetapi aktor yang mereka peran tidak sesuai dengan perannya?",
    author: ""
  },
  {
    quote: "74. Game apa yang paling sering kamu habiskan bermain?",
    author: ""
  },
  {
    quote: "75. Apa tempat tidur atau kursi paling nyaman yang pernah Anda kunjungi?",
    author: ""
  },
  {
    quote: "76. Apa percakapan paling gila yang pernah Anda dengar?",
    author: ""
  },
  {
    quote: "77. Apa yang paling sulit yang pernah Anda lakukan?",
    author: ""
  },
  {
    quote: "78. Film, gambar, atau video apa yang selalu membuat Anda tertawa, tidak peduli seberapa sering Anda menontonnya?",
    author: ""
  },
  {
    quote: "79. Artis atau band apa yang selalu Anda rekomendasikan ketika seseorang meminta rekomendasi musik?",
    author: ""
  },
  {
    quote: "80. Jika Anda bisa melakukan perjalanan semua biaya untuk melihat monumen dunia yang terkenal, monumen mana yang akan Anda pilih?",
    author: ""
  },
  {
    quote: "81. Jika hewan dapat berbicara, hewan apa yang paling mengganggu?",
    author: ""
  },
  {
    quote: "82. Apa game yang paling membuat Anda kecanduan?",
    author: ""
  },
  {
    quote: "83. Apa yang paling dingin dari dirimu?",
    author: ""
  },
  {
    quote: "84. Protagonis mana dari buku atau film yang akan membuat teman sekamar terburuk?",
    author: ""
  },
  {
    quote: "85. Apakah Anda makan makanan yang melewati tanggal kedaluwarsa jika masih berbau dan terlihat baik-baik saja?",
    author: ""
  },
  {
    quote: "86. Apa hal paling konyol yang Anda beli?",
    author: ""
  },
  {
    quote: "87. Apa komedi komedi paling lucu yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "88. Makanan apa yang paling menyedihkan yang pernah Anda makan?",
    author: ""
  },
  {
    quote: "89. Kiat atau trik apa yang Anda ambil dari pekerjaan / pekerjaan Anda?",
    author: ""
  },
  {
    quote: "90. Kegiatan luar apa yang belum Anda coba, tetapi ingin?",
    author: ""
  },
  {
    quote: "91. Lagu apa yang melanda Anda dengan gelombang nostalgia setiap kali Anda mendengarnya?",
    author: ""
  },
  {
    quote: "92. Pujian backhanded terburuk apa yang bisa Anda berikan kepada seseorang?",
    author: ""
  },
  {
    quote: "93. Film dokumenter apa yang paling menarik yang pernah Anda tonton?",
    author: ""
  },
  {
    quote: "94. Lagu apa yang terakhir Anda nyanyikan?",
    author: ""
  },
  {
    quote: "95. Apa hal terlucu yang pernah Anda lakukan atau telah terjadi saat pikiran Anda berkelana?",
    author: ""
  },
  {
    quote: "96. Aplikasi apa yang Anda tidak percaya seseorang belum membuat?",
    author: ""
  },
  {
    quote: "97. Kapan terakhir kali kamu menghadapi telapak tangan?",
    author: ""
  },
  {
    quote: "98. Jika Anda diberi lima juta dolar untuk membuka museum kecil, museum seperti apa yang akan Anda buat?",
    author: ""
  },
  {
    quote: "99. Manakah dari sifat buruk atau kebiasaan buruk Anda yang paling sulit untuk menyerah?",
    author: ""
  },
  {
    quote: "100. Apa yang benar-benar perlu dimodernisasi?",
    author: ""
  },
  {
    quote: "101. Kapan terakhir kali Anda tidur lebih dari sembilan jam?",
    author: ""
  },
  {
    quote: "102. Seberapa nyaman Anda berbicara di depan sekelompok besar orang?",
    author: ""
  },
  {
    quote: "103. Apa contoh terburuk Anda tentang penundaan?",
    author: ""
  },
  {
    quote: "104. Siapa yang tidak memiliki filter antara otak dan mulut mereka?",
    author: ""
  },
  {
    quote: "105. Apa kebohonganmu yang terakhir?",
    author: ""
  },
  {
    quote: "106. Kapan terakhir kali Anda segera menyesali sesuatu yang Anda katakan?",
    author: ""
  },
  {
    quote: "107. Apa hal terbaik yang bisa Anda temukan di sebuah gua?",
    author: ""
  },
  {
    quote: "108. Menurut Anda apa yang akan luar biasa tetapi ternyata mengerikan?",
    author: ""
  },
  {
    quote: "109. Apa hal sepele yang Anda tahu itu sangat menarik tetapi juga sangat tidak berguna?",
    author: ""
  },
  {
    quote: "110. Apa hal paling konyol yang pernah Anda saksikan tentang seseorang yang sedang kesal?",
    author: ""
  },
  {
    quote: "111. Menurut Anda hewan atau tumbuhan apa yang harus diganti namanya?",
    author: ""
  },
  {
    quote: "112. Apa hal terbaik yang terjadi padamu hari ini?",
    author: ""
  },
  {
    quote: "113. Sebagai seorang anak, apa yang menurut Anda luar biasa tentang menjadi dewasa, tetapi tidak sehebat yang Anda kira?",
    author: ""
  },
  {
    quote: "114. Kapan sensor disyaratkan?",
    author: ""
  },
  {
    quote: "115. Pahlawan super apa yang paling membosankan yang bisa kamu buat?",
    author: ""
  },
  {
    quote: "116. Apa yang akan menjadi kerugian dari kekuatan super tertentu?",
    author: ""
  },
  {
    quote: "117. Kata apa yang sangat menyenangkan untuk diucapkan?",
    author: ""
  },
  {
    quote: "118. Tren apa yang saat ini Anda harapkan akan berlangsung untuk waktu yang lama?",
    author: ""
  },
  {
    quote: "119. Aktor atau aktris apa yang tidak dapat memainkan karakter yang berbeda karena mereka memainkan karakter mereka yang paling terkenal?",
    author: ""
  },
  {
    quote: "120. Di mana Anda pergi ke restoran untuk makanan yang lezat?",
    author: ""
  },
  {
    quote: "121. Apa sesuatu yang disetujui semua teman Anda?",
    author: ""
  },
  {
    quote: "122. Apa kisah terbaik Anda dari pernikahan?",
    author: ""
  },
  {
    quote: "123. Bahasa apa yang Anda inginkan dapat Anda ucapkan?",
    author: ""
  },
  {
    quote: "124. Apa aksen terdengar paling menyenangkan?",
    author: ""
  },
  {
    quote: "125. Apa sesuatu yang semua orang, benar-benar semua orang, di seluruh dunia dapat sepakati?",
    author: ""
  },
  {
    quote: "126. Negara apa yang paling aneh?",
    author: ""
  },
  {
    quote: "127. Apa kata paling lucu dalam bahasa Inggris?",
    author: ""
  },
  {
    quote: "128. Apa pengetahuan orang dalam yang dimiliki hanya oleh orang-orang di bidang pekerjaan Anda?",
    author: ""
  },
  {
    quote: "129. Dengan siapa Anda berharap dapat kembali berhubungan?",
    author: ""
  },
  {
    quote: "130. Bagaimana Anda membuat diri Anda tidur ketika Anda sepertinya tidak bisa tidur?",
    author: ""
  },
  {
    quote: "131. Jika orang menerima hati ungu untuk keberanian, apa yang akan mewakili warna hati lain?",
    author: ""
  },
  {
    quote: "132. Apa saja liburan terbaik yang pernah Anda alami?",
    author: ""
  },
  {
    quote: "133. Jika ada buku perintah untuk dunia modern, akan seperti apa beberapa aturannya?",
    author: ""
  },
  {
    quote: "134. Apa video paling gila yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "135. Apa yang Anda 'Kembali pada hari saya, kami ...'?",
    author: ""
  },
  {
    quote: "136. Jika Anda dapat mengetahui kebenaran di balik setiap konspirasi, tetapi Anda akan langsung mati jika Anda mengisyaratkan bahwa Anda mengetahui kebenaran, apakah Anda ingin tahu?",
    author: ""
  },
  {
    quote: "137. Hewan apa yang paling menakutkan jika bisa berbicara?",
    author: ""
  },
  {
    quote: "138. Apa gaya rambut terburuk yang pernah Anda miliki?",
    author: ""
  },
  {
    quote: "139. Kebiasaan apa yang Anda miliki sekarang yang Anda harap Anda mulai lebih awal?",
    author: ""
  },
  {
    quote: "140. Jika Anda diberi seribu hektar tanah yang tidak perlu Anda bayar pajak tetapi tidak bisa menjual, apa yang akan Anda lakukan dengan itu?",
    author: ""
  },
  {
    quote: "141. Bagaimana dengan lawan jenis yang paling membingungkan Anda?",
    author: ""
  },
  {
    quote: "142. Kapan terakhir kali Anda meneriaki seseorang?",
    author: ""
  },
  {
    quote: "143. Apa kebalikan dari koala?",
    author: ""
  },
  {
    quote: "144. Hal-hal apa yang Anda sukai untuk memasak atau pandai memasak?",
    author: ""
  },
  {
    quote: "145. Keterampilan hidup apa yang jarang diajarkan tetapi sangat bermanfaat?",
    author: ""
  },
  {
    quote: "146. Alam semesta film apa yang paling buruk untuk menjalani hidup Anda?",
    author: ""
  },
  {
    quote: "147. Jika Anda dapat meretas ke dalam satu komputer, komputer mana yang akan Anda pilih?",
    author: ""
  },
  {
    quote: "148. Siapa yang kamu rasa kamu tahu meskipun kamu belum pernah bertemu mereka?",
    author: ""
  },
  {
    quote: "149. Apa hewan paling konyol di planet ini?",
    author: ""
  },
  {
    quote: "150. Apa hal terburuk yang kamu makan dari kesopanan?",
    author: ""
  },
  {
    quote: "151. Apa hal paling bersejarah yang telah terjadi dalam hidup Anda?",
    author: ""
  },
  {
    quote: "152. Apa yang terjadi di negara Anda secara teratur sehingga orang-orang di sebagian besar negara akan merasa aneh atau aneh?",
    author: ""
  },
  {
    quote: "153. Apa yang ditiup keluar dari proporsi?",
    author: ""
  },
  {
    quote: "154. Kapan Anda bertindak acuh tak acuh tetapi gila di dalam?",
    author: ""
  },
  {
    quote: "155. Apa yang akan menjadi lebih baik?",
    author: ""
  },
  {
    quote: "156. Apa saja contoh cerdik dari penyesatan yang Anda lihat?",
    author: ""
  },
  {
    quote: "157. Apa kisah terlucu Anda yang melibatkan mobil?",
    author: ""
  },
  {
    quote: "158. Apa yang akan menjadi judul umpan-klik dari beberapa film populer?",
    author: ""
  },
  {
    quote: "159. Jika Anda membangun hotel bertema, seperti apa tema itu dan seperti apa ruangan itu?",
    author: ""
  },
  {
    quote: "160. Penemuan ilmiah apa yang akan mengubah jalan hidup manusia dalam semalam jika ditemukan?",
    author: ""
  },
  {
    quote: "161. Apakah Anda berpikir bahwa manusia akan pernah bisa hidup bersama dalam harmoni?",
    author: ""
  },
  {
    quote: "162. Seperti apa bentuk bar sempurna Anda?",
    author: ""
  },
  {
    quote: "163. Apa film non-horor yang paling menakutkan?",
    author: ""
  },
  {
    quote: "164. Apa kisah nyata paling menakjubkan yang pernah Anda dengar?",
    author: ""
  },
  {
    quote: "165. Makanan paling kotor apa yang tidak bisa Anda dapatkan?",
    author: ""
  },
  {
    quote: "166. Merek apa yang paling Anda loyali?",
    author: ""
  },
  {
    quote: "167. Apa hal paling canggung yang terjadi pada Anda secara teratur?",
    author: ""
  },
  {
    quote: "168. Jika Anda harus menghilang dan memulai hidup yang benar-benar baru, seperti apa kehidupan baru Anda?",
    author: ""
  },
  {
    quote: "169. Dari film atau buku apa yang paling kamu tahu kutipannya?",
    author: ""
  },
  {
    quote: "170. Apa salah satu konser paling menarik yang pernah Anda kunjungi?",
    author: ""
  },
  {
    quote: "171. Di mana Anda tidak disambut lagi?",
    author: ""
  },
  {
    quote: "172. Menurut Anda apa yang dapat dilakukan untuk meningkatkan media?",
    author: ""
  },
  {
    quote: "173. Acara apa yang terbaru yang Anda tonton tontonan?",
    author: ""
  },
  {
    quote: "174. Apa kiasan film terburuk?",
    author: ""
  },
  {
    quote: "175. Apa pengalaman umum bagi banyak orang yang belum pernah Anda alami?",
    author: ""
  },
  {
    quote: "176. Kesalahpahaman apa tentang hobi Anda?",
    author: ""
  },
  {
    quote: "177. Apa hal paling cerdas yang pernah Anda lihat dari binatang?",
    author: ""
  },
  {
    quote: "178. Suara apa yang paling menyebalkan?",
    author: ""
  },
  {
    quote: "179. Apa kisah rumah berhantu Anda?",
    author: ""
  },
  {
    quote: "180. Apa yang Anda Google terakhir kali?",
    author: ""
  },
  {
    quote: "181. Apa hal paling bodoh yang pernah dibicarakan seseorang dengan Anda?",
    author: ""
  },
  {
    quote: "182. Jika uang dan kepraktisan bukan masalah, apa cara yang paling menarik untuk berkeliling kota?",
    author: ""
  },
  {
    quote: "183. Apa lubang kelinci terpanjang yang pernah Anda kunjungi?",
    author: ""
  },
  {
    quote: "184. Adegan apa yang paling menyedihkan dalam film atau serial TV?",
    author: ""
  },
  {
    quote: "185. Apa produk yang paling membuat Anda frustrasi?",
    author: ""
  },
  {
    quote: "186. Kekuatan super apa yang ingin kamu miliki?",
    author: ""
  },
  {
    quote: "187. Kualitas apa saja yang dimiliki semua teman Anda?",
    author: ""
  },
  {
    quote: "188. Bau aneh apa yang benar-benar Anda nikmati?",
    author: ""
  },
  {
    quote: "189. Apa hewan paling keren yang pernah Anda lihat di alam liar?",
    author: ""
  },
  {
    quote: "190. Apa pelajaran terbaik yang Anda pelajari dari sebuah karya fiksi?",
    author: ""
  },
  {
    quote: "191. Makanan apa yang paling Anda butuhkan?",
    author: ""
  },
  {
    quote: "192. Siapa dalam hidup Anda yang memiliki keberuntungan terbaik / terburuk?",
    author: ""
  },
  {
    quote: "193. Tren mode apa yang membuat Anda ngeri atau tertawa setiap kali melihatnya?",
    author: ""
  },
  {
    quote: "194. Apa kisah terbaik Anda tentang Anda atau orang lain yang mencoba menjadi licik dan gagal total?",
    author: ""
  },
  {
    quote: "195. Distopia apokaliptik mana yang menurut Anda paling mungkin?",
    author: ""
  },
  {
    quote: "196. Jika Anda memiliki HUD yang menunjukkan tiga statistik tentang orang yang Anda lihat, tiga statistik apa yang ingin Anda tampilkan?",
    author: ""
  },
  {
    quote: "197. Apa hal terlucu yang pernah Anda lihat lakukan pada anak-anak?",
    author: ""
  },
  {
    quote: "198. Apa bakat rahasiamu?",
    author: ""
  },
  {
    quote: "199. Apa cara terbaik Anda atau orang yang Anda kenal keluar dari tiket / masalah dengan hukum?",
    author: ""
  },
  {
    quote: "200. Gas air mata membuat orang menangis dan gas tertawa membuat orang terkikik, jenis gas apa yang Anda inginkan ada?",
    author: ""
  },
  {
    quote: "201. Pantai apa yang paling indah yang pernah Anda kunjungi?",
    author: ""
  },
  {
    quote: "202. Apa hal paling memicu kecemasan yang Anda lakukan secara teratur?",
    author: ""
  },
  {
    quote: "203. Apa sesuatu yang disetujui semua orang bahwa kita harus berubah, tetapi entah bagaimana itu tidak pernah berubah?",
    author: ""
  },
  {
    quote: "204. Tren apa yang Anda capai?",
    author: ""
  },
  {
    quote: "205. Apa yang sangat murah dan Anda akan membayar lebih untuk itu?",
    author: ""
  },
  {
    quote: "206. Apa kisah bug terburuk Anda?",
    author: ""
  },
  {
    quote: "207. Apa yang dijual truk es krim versi dewasa dan lagu apa yang akan diputar?",
    author: ""
  },
  {
    quote: "208. Perusahaan apa yang Anda benci?",
    author: ""
  },
  {
    quote: "209. Kapan saat paling tidak tepat Anda tertawa terbahak-bahak?",
    author: ""
  },
  {
    quote: "210. Apa yang akan menjadi tag line akurat untuk setiap bulan?",
    author: ""
  },
  {
    quote: "211. Produk apa yang paling berlebihan di pasaran?",
    author: ""
  },
  {
    quote: "212. Kata apa yang selalu Anda salah eja?",
    author: ""
  },
  {
    quote: "213. Tidur siang apa yang paling memuaskan?",
    author: ""
  },
  {
    quote: "214. Apa hal teraneh yang Anda temukan tergeletak di tanah / sisi jalan?",
    author: ""
  },
  {
    quote: "215. Apa acara TV paling lucu yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "216. Apa kisah paling memalukan dari masa kecil Anda?",
    author: ""
  },
  {
    quote: "217. Hewan apa yang paling agung?",
    author: ""
  },
  {
    quote: "218. Apa yang diketahui semua orang adalah benar, tetapi kami tidak ingin mengakuinya?",
    author: ""
  },
  {
    quote: "219. Apa teks atau email teraneh yang Anda dapatkan?",
    author: ""
  },
  {
    quote: "220. Apa yang selalu menghibur Anda ketika Anda memikirkannya?",
    author: ""
  },
  {
    quote: "221. Olahraga apa yang bisa Anda mainkan paling lama dalam permainan yang disiarkan televisi, tanpa ada yang tahu Anda bukan atlet profesional?",
    author: ""
  },
  {
    quote: "222. Jika Anda bisa berbicara dengan binatang dan mereka akan mengerti Anda, tetapi Anda tidak bisa memahaminya, apa yang akan Anda lakukan dengan kekuatan itu?",
    author: ""
  },
  {
    quote: "223. Olahraga apa yang paling membosankan, dan apa yang akan Anda lakukan untuk membuatnya lebih menarik?",
    author: ""
  },
  {
    quote: "224. Apa teknologi paling menakutkan di luar sana?",
    author: ""
  },
  {
    quote: "225. Siapa yang Anda gunakan untuk memandang ke atas, tetapi mereka mengacau dan Anda kehilangan kepercayaan pada mereka?",
    author: ""
  },
  {
    quote: "226. Apa yang baik dalam jumlah kecil tetapi menakutkan dalam jumlah besar?",
    author: ""
  },
  {
    quote: "227. Apakah Anda suka hal-hal yang direncanakan dengan hati-hati atau Anda lebih suka mengikuti arus?",
    author: ""
  },
  {
    quote: "228. Hewan apa yang paling ingin kamu makan?",
    author: ""
  },
  {
    quote: "229. Karakter fiksi apa yang kamu sukai selama bertahun-tahun?",
    author: ""
  },
  {
    quote: "230. Seperti apa bentuk kotak dengan semua harapan dan impian Anda?",
    author: ""
  },
  {
    quote: "231. Apa pengalaman belanja terburuk yang pernah Anda miliki?",
    author: ""
  },
  {
    quote: "232. Cerita apa yang telah Anda dengar tetap bersama Anda dan selalu mengganggu Anda setiap kali Anda memikirkannya?",
    author: ""
  },
  {
    quote: "233. Apa janji atau tenggat waktu paling penting yang Anda lewatkan?",
    author: ""
  },
  {
    quote: "234. Jika Anda adalah pahlawan super bertema badut, kekuatan apa yang akan Anda miliki?",
    author: ""
  },
  {
    quote: "235. Jika Anda dapat mengirimkan barang apa pun yang Anda inginkan, bernilai dua juta dolar atau kurang, di mana pun Anda inginkan, apa yang akan Anda turunkan dan di mana Anda akan meniriskannya?",
    author: ""
  },
  {
    quote: "236. Jika Anda hidup di dunia realitas virtual ciptaan Anda sendiri, seperti apa itu?",
    author: ""
  },
  {
    quote: "237. Apa yang meningkat dengan sangat cepat?",
    author: ""
  },
  {
    quote: "238. Dua hal apa yang mengerikan ketika terpisah tetapi hebat ketika Anda menyatukannya?",
    author: ""
  },
  {
    quote: "239. Apa yang Anda yakini terlalu lama sebagai seorang anak?",
    author: ""
  },
  {
    quote: "240. Menurut Anda, peristiwa besar apa yang akan terjadi segera yang tidak diharapkan kebanyakan orang?",
    author: ""
  },
  {
    quote: "241. Apa yang masih membuat Anda merasa ngeri ketika Anda memikirkannya kembali?",
    author: ""
  },
  {
    quote: "242. Tren apa saat ini yang tidak masuk akal bagi Anda?",
    author: ""
  },
  {
    quote: "243. Jika Anda memiliki sebuah restoran, makanan seperti apa yang akan disajikan?",
    author: ""
  },
  {
    quote: "244. Selebriti manakah yang paling mungkin memiliki koleksi tongkat yang hanya untuk pertunjukan?",
    author: ""
  },
  {
    quote: "245. Apa naksir paling aneh yang pernah kamu miliki?",
    author: ""
  },
  {
    quote: "246. Apa yang banyak orang punya pendapat kuat tentangnya, walaupun mereka tahu sedikit tentang itu?",
    author: ""
  },
  {
    quote: "247. Apa tujuan permainan kasino Anda?",
    author: ""
  },
  {
    quote: "248. Sebuah pesta epik diadakan untuk menghormati Anda, ada apa di atas meja?",
    author: ""
  },
  {
    quote: "249. Apa film liburan favoritmu?",
    author: ""
  },
  {
    quote: "250. Siapa orang paling manipulatif yang pernah Anda temui?",
    author: ""
  },
  {
    quote: "251. Siapa orang paling kreatif yang Anda kenal?",
    author: ""
  },
  {
    quote: "252. Apa saluran telepon terlucu yang pernah Anda dengar?",
    author: ""
  },
  {
    quote: "253. Pertanyaan apa yang tampaknya tidak bersalah membuat Anda berpikir 'Itu jebakan!'",
    author: ""
  },
  {
    quote: "254. Seberapa ambisiusnya kamu?",
    author: ""
  },
  {
    quote: "255. Apa yang kamu suka / tidak suka tentang di mana kamu dibesarkan?",
    author: ""
  },
  {
    quote: "256. Elemen budaya pop apa yang akan selamanya terikat dalam pikiran Anda dengan masa kecil Anda?",
    author: ""
  },
  {
    quote: "257. Apa jimat keberuntunganmu?",
    author: ""
  },
  {
    quote: "258. Apa yang legal sekarang, tetapi mungkin tidak dalam 25 tahun?",
    author: ""
  },
  {
    quote: "259. Apakah Anda ingin kemampuan mendengar pikiran orang-orang di dekat Anda jika Anda tidak dapat mematikan kemampuan itu?",
    author: ""
  },
  {
    quote: "260. Kapan terakhir kali Anda begadang sepanjang malam?",
    author: ""
  },
  {
    quote: "261. Apa sesuatu yang menurut orang membuat mereka terlihat keren, tetapi sebenarnya memiliki efek sebaliknya?",
    author: ""
  },
  {
    quote: "262. Apa hal tertua yang Anda miliki?",
    author: ""
  },
  {
    quote: "263. Apa yang dipinjam seseorang tetapi tidak pernah dikembalikan?",
    author: ""
  },
  {
    quote: "264. Di mana tempat terbaik Anda untuk berjalan-jalan?",
    author: ""
  },
  {
    quote: "265. Jika fisika kartun tiba-tiba menggantikan fisika nyata, hal-hal apa yang ingin Anda coba?",
    author: ""
  },
  {
    quote: "266. Apa yang dari sekarang akan bertahan dalam ujian waktu?",
    author: ""
  },
  {
    quote: "267. Siapa dalam hidup Anda yang terburuk dalam menggunakan teknologi?",
    author: ""
  },
  {
    quote: "268. Apa percakapan teraneh yang pernah Anda dengar?",
    author: ""
  },
  {
    quote: "269. Apa yang ada di sudut teknologi yang Anda inginkan?",
    author: ""
  },
  {
    quote: "270. Apa film paling gelap yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "271. Apa yang Anda lakukan ketika Anda mendengar sesuatu jatuh di tengah malam saat Anda berada di tempat tidur?",
    author: ""
  },
  {
    quote: "272. Pakaian apa yang bisa kamu kumpulkan dari pakaian yang kamu miliki untuk mendapatkan paling banyak tertawa?",
    author: ""
  },
  {
    quote: "273. Kata apa yang terdengar paling menjijikkan dalam bahasa Inggris?",
    author: ""
  },
  {
    quote: "274. Apa yang hancur karena menjadi populer?",
    author: ""
  },
  {
    quote: "275. Bahasa gaul usang apa yang Anda gunakan secara teratur?",
    author: ""
  },
  {
    quote: "276. Apa realisasi terbesar yang Anda miliki tentang diri Anda?",
    author: ""
  },
  {
    quote: "277. Apa contoh terbaik Anda tentang easy come, easy go?",
    author: ""
  },
  {
    quote: "278. Perubahan kecil apa yang sangat meningkatkan penampilan seseorang?",
    author: ""
  },
  {
    quote: "279. Topik apa yang bisa Anda habiskan berjam-jam untuk dibicarakan?",
    author: ""
  },
  {
    quote: "280. Apa yang terjadi secara teratur yang akan menakuti seseorang dari 100 tahun yang lalu?",
    author: ""
  },
  {
    quote: "281. Apa yang banyak orang harapkan akan terjadi tetapi tidak akan terjadi?",
    author: ""
  },
  {
    quote: "282. Apa hal paling aneh yang terjadi pada Anda saat bekerja di pekerjaan Anda?",
    author: ""
  },
  {
    quote: "283. Pertanyaan apa yang ingin Anda tanyakan kepada seorang penjelajah waktu dari 200 tahun ke depan?",
    author: ""
  },
  {
    quote: "284. Di mana sebaiknya kertas toilet digantung, di atas atau di bawah?",
    author: ""
  },
  {
    quote: "285. Apa hal yang paling menyakitkan secara fisik yang pernah Anda alami?",
    author: ""
  },
  {
    quote: "286. Cerita horor apa yang Anda miliki dari pekerjaan yang Anda miliki?",
    author: ""
  },
  {
    quote: "287. Game apa yang paling memicu kemarahan yang pernah Anda mainkan?",
    author: ""
  },
  {
    quote: "288. Apa reaksi berlebihan terbesar yang pernah Anda lihat?",
    author: ""
  },
  {
    quote: "289. Kesalahpahaman apa yang paling umum?",
    author: ""
  },
  {
    quote: "290. Pekerjaan apa yang tidak ada sekarang tetapi akan ada di masa depan?",
    author: ""
  },
  {
    quote: "291. Film jelek apa yang kamu sukai?",
    author: ""
  },
  {
    quote: "292. Makanan apa yang biasanya lezat menjadi hancur ketika Anda membungkusnya dengan tortilla?",
    author: ""
  },
  {
    quote: "293. Apa contoh terbaik Anda memalsukannya sampai Anda berhasil?",
    author: ""
  },
  {
    quote: "294. Apa yang Anda yakini sepenuhnya sampai Anda tahu Anda salah?",
    author: ""
  },
  {
    quote: "295. Apa sesuatu yang biasa dilakukan yang semakin aneh semakin Anda pikirkan?",
    author: ""
  },
  {
    quote: "296. Apa hal terlucu yang bisa Anda bayangkan? Sesuatu yang sangat lucu hampir menyakitkan.",
    author: ""
  },
  {
    quote: "297. Jika Anda diberi sumber daya tanpa batas, bagaimana Anda akan memikat umat manusia yang terburuk ke dalam satu stadion pada saat yang sama?",
    author: ""
  },
  {
    quote: "298. Apa yang Anda pikirkan ketika Anda mendengar kata 'berkelas'?",
    author: ""
  },
  {
    quote: "299. Prediksi terdekat apa yang Anda miliki?",
    author: ""
  },
  {
    quote: "300. Apa yang paling Anda butuhkan dengan bantuan?",
    author: ""
  },
  {
    quote: "301. 'Seni' apa yang akan Anda buat jika Anda harus berpura-pura menjadi seorang seniman dan mengirimkan sesuatu ke galeri?",
    author: ""
  },
  {
    quote: "302. Apa yang Anda lakukan untuk membuat dunia menjadi tempat yang lebih baik?",
    author: ""
  },
  {
    quote: "303. Apa hal terbaik dan terburuk tentang negara asal Anda?",
    author: ""
  },
  {
    quote: "304. Jika Anda bertugas mengubah nama hal-hal sehingga nama mereka akan lebih akurat, nama apa yang akan Anda buat?",
    author: ""
  },
  {
    quote: "305. Apa yang lebih baik rusak daripada utuh?",
    author: ""
  },
  {
    quote: "306. Nilai-nilai apa yang paling penting bagi Anda?",
    author: ""
  },
  {
    quote: "307. Apa sandwich terbaik yang pernah Anda miliki?",
    author: ""
  },
  {
    quote: "308. Apa hal terburuk yang Anda makan dari restoran cepat saji?",
    author: ""
  },
  {
    quote: "309. Apa yang tidak saya ketahui?",
    author: ""
  },
  {
    quote: "310. Profesi apa yang tidak mendapat pujian atau penghargaan yang cukup?",
    author: ""
  },
  {
    quote: "311. Memori Anda seperti apa yang terasa nyata tetapi kemungkinan besar salah?",
    author: ""
  },
  {
    quote: "312. Apa cerita Anda 'dan kemudian menjadi lebih buruk'?",
    author: ""
  },
  {
    quote: "313. Apa prestasi fisik paling menakjubkan yang berhasil Anda lakukan?",
    author: ""
  },
  {
    quote: "314. Apa hal paling menyebalkan tentang platform media sosial yang paling sering Anda gunakan?",
    author: ""
  },
  {
    quote: "315. Jika Anda disewa untuk menunjukkan kepada turis seperti apa kehidupan di tempat Anda tinggal, apa yang akan Anda tunjukkan / lakukan pada mereka?",
    author: ""
  },
  {
    quote: "316. Apa hal yang paling meresahkan yang kadang-kadang ditemukan di sekitar rumah Anda?",
    author: ""
  },
  {
    quote: "317. Nama panggilan apa yang Anda miliki untuk orang-orang dalam hidup Anda?",
    author: ""
  },
  {
    quote: "318. Apa yang dilakukan lawan jenis yang Anda harapkan bisa Anda lakukan, tetapi secara anatomi tidak layak atau tidak disukai secara sosial?",
    author: ""
  },
  {
    quote: "319. Berapa banyak yang Anda rencanakan / siapkan untuk masa depan?",
    author: ""
  },
  {
    quote: "320. Apa yang paling Anda benci dan paling sukai dari mobil Anda?",
    author: ""
  },
  {
    quote: "321. Rasa keripik kentang aneh apa yang tidak ada yang ingin Anda coba?",
    author: ""
  },
  {
    quote: "322. Apa hal paling konyol yang Anda yakini dari seseorang?",
    author: ""
  },
  {
    quote: "323. Menurut Anda seberapa besar nama mempengaruhi hasil kehidupan orang?",
    author: ""
  },
  {
    quote: "324. Produk atau layanan apa yang jauh lebih mahal dari yang seharusnya?",
    author: ""
  },
  {
    quote: "325. Apa hal paling shadiest yang pernah Anda lihat seseorang lakukan?",
    author: ""
  },
  {
    quote: "326. Apa situasi terakhir di mana beberapa hal aneh turun dan semua orang bertindak seperti itu normal, dan Anda tidak yakin apakah Anda gila atau semua orang di sekitar Anda gila?",
    author: ""
  },
  {
    quote: "327. Apa yang Anda makan begitu banyak sehingga sekarang Anda membencinya?",
    author: ""
  },
  {
    quote: "328. Apa sajakah lirik terbodoh yang pernah Anda dengar dalam sebuah lagu?",
    author: ""
  },
  {
    quote: "329. Di mana garis antara sup dan sereal?",
    author: ""
  },
  {
    quote: "330. Kata apa yang selalu Anda salah ucapkan?",
    author: ""
  },
  {
    quote: "331. Menurut Anda apa yang Anda lakukan lebih baik daripada 90% orang?",
    author: ""
  },
  {
    quote: "332. Apa makanan terburuk yang akan dicairkan dan diminum melalui sedotan?",
    author: ""
  },
  {
    quote: "333. Apa hal paling aneh tentang kehidupan modern yang diterima orang seperti biasa?",
    author: ""
  },
  {
    quote: "334. Berapa banyak dari tubuh Anda yang akan Anda tingkatkan secara dunia maya jika Anda bisa?",
    author: ""
  },
  {
    quote: "335. Jika Anda ingin perlahan-lahan membuat teman sekamar menjadi gila hanya dengan menggunakan catatan, jenis catatan apa yang akan Anda tinggalkan di rumah?",
    author: ""
  },
  {
    quote: "336. Jika Anda memiliki jerapah yang perlu Anda sembunyikan, di mana Anda akan menyembunyikannya?",
    author: ""
  },
  {
    quote: "337. Apa hal paling menyenangkan yang pernah Anda lakukan?",
    author: ""
  },
  {
    quote: "338. Lagu apa yang hanya kamu tahu chorus?",
    author: ""
  },
  {
    quote: "339. Pikirkan sebuah merek, sekarang apa yang akan menjadi slogan jujur ​​untuk merek itu?",
    author: ""
  },
  {
    quote: "340. Apa hal umum dari masa kecil Anda yang akan terasa aneh bagi generasi mendatang?",
    author: ""
  },
  {
    quote: "341. Apa tempat paling menakjubkan di alam Anda?",
    author: ""
  },
  {
    quote: "342. Apa yang dengan cepat menjadi usang?",
    author: ""
  },
  {
    quote: "343. Di mana tempat paling tidak nyaman yang pernah Anda tidur?",
    author: ""
  },
  {
    quote: "344. Hewan apa yang paling menyebalkan yang pernah Anda temui?",
    author: ""
  },
  {
    quote: "345. Apa contoh terbaik Anda tentang korelasi yang tidak menyamai sebab akibat?",
    author: ""
  },
  {
    quote: "346. Dalam situasi apa, Anda berharap bisa melempar bom asap dan menghilang?",
    author: ""
  },
  {
    quote: "347. Kapan terakhir kali Anda tersesat tanpa harapan?",
    author: ""
  },
  {
    quote: "348. Lagu apa yang menurut Anda harus dinyanyikan bersama ketika Anda mendengarnya, bahkan jika Anda tidak sepenuhnya tahu semua kata itu?",
    author: ""
  },
  {
    quote: "349. Produk apa yang Anda harapkan dari perusahaan untuk membuat versi 'smart'?",
    author: ""
  },
  {
    quote: "350. Dua film apa yang ingin Anda gabungkan menjadi satu?",
    author: ""
  },
];

var lastQuote = 0;
var whichQuote = 0;

var main = function () {
  // Start of with an initial quote.
  whichQuote = Math.floor(Math.random() * quotations.length);
  $('.quote').text(quotations[whichQuote].quote);
  $('.author').text(quotations[whichQuote].author);

  // Generate a new quote every time the Generate Random Quote button is clicked.
  $('#generate-quote').click(function () {
    lastQuote = whichQuote;

    // Make sure we don't repeat the same quote twice in a row.
    while (lastQuote === whichQuote) {
      whichQuote = Math.floor(Math.random() * quotations.length);
    }

    $('.quote').text(quotations[whichQuote].quote);
    $('.author').text(quotations[whichQuote].author);
  });
}

$(document).ready(main);