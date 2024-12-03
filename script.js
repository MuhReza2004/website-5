// script.js
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const birthDate = new Date(document.getElementById("birthDate").value);
  const currentDate = new Date();
  const ageInMonths =
    (currentDate.getFullYear() - birthDate.getFullYear()) * 12 +
    (currentDate.getMonth() - birthDate.getMonth());

  const simulationResult = document.getElementById("simulationResult");
  const ageGroup = document.getElementById("ageGroup");
  const simulationDetails = document.getElementById("simulationDetails");

  simulationResult.classList.remove("hidden");

  let result;

  if (ageInMonths >= 0 && ageInMonths <= 6) {
    result = {
      ageGroup: "Usia: 0-6 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Mengangkat kepala, berguling-guling, mulai duduk dengan bantuan.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Melihat benda kecil, meraih mainan gantung, menggenggam mainan.</li>
            <li><strong>Bicara dan Bahasa:</strong> Mengenali suara-suara, meniru ocehan, tersenyum responsif.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Memberi rasa aman, mengajak bayi tersenyum, mengenali wajah orang terdekat.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Gantungkan mainan berwarna cerah di atas tempat tidur bayi</li>
                <li>Lakukan pijat bayi secara rutin</li>
                <li>Ajak berbicara dan bernyanyi sambil menatap mata bayi</li>
                <li>Letakkan bayi tengkurap untuk melatih otot leher</li>
                <li>Berikan mainan dengan tekstur berbeda untuk diraba</li>
                <li>Ajak bayi bermain cilukba</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else if (ageInMonths <= 12) {
    result = {
      ageGroup: "Usia: 7-12 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Merangkak, duduk tanpa bantuan, berdiri dengan pegangan.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Memindahkan benda dari tangan ke tangan, mengambil benda kecil dengan ibu jari dan telunjuk.</li>
            <li><strong>Bicara dan Bahasa:</strong> Mulai meniru kata-kata sederhana, merespon namanya dipanggil.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Bermain dengan anggota keluarga, mulai takut pada orang asing.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Sediakan area aman untuk merangkak dan berjalan dengan pegangan</li>
                <li>Berikan mainan yang bisa ditarik-dorong</li>
                <li>Mainkan permainan tepuk tangan</li>
                <li>Bacakan buku dengan gambar berwarna</li>
                <li>Latih memegang sendok dan makan biskuit sendiri</li>
                <li>Ajari melambai "dadah"</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else if (ageInMonths <= 24) {
    result = {
      ageGroup: "Usia: 13-24 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Berjalan mandiri, mulai berlari, naik tangga dengan bantuan.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Menyusun balok, mencoret-coret, membuka halaman buku.</li>
            <li><strong>Bicara dan Bahasa:</strong> Mengucapkan 10-20 kata, menunjuk bagian tubuh.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Mulai belajar makan sendiri, bermain paralel dengan teman.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Sediakan mainan dorong dan tarik</li>
                <li>Berikan krayon besar dan kertas untuk mencoret</li>
                <li>Mainkan permainan lempar dan tangkap bola</li>
                <li>Ajari nama-nama benda di sekitar</li>
                <li>Latih kemandirian saat makan dan minum</li>
                <li>Berikan puzzle sederhana 2-3 keping</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else if (ageInMonths <= 36) {
    result = {
      ageGroup: "Usia: 25-36 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Melompat, menaiki tangga bergantian kaki, berjalan mundur.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Menggambar garis dan lingkaran, menggunting kertas.</li>
            <li><strong>Bicara dan Bahasa:</strong> Membentuk kalimat 2-3 kata, mengerti perintah sederhana.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Bermain bersama teman sebaya, mulai berbagi mainan.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Ajak bermain peran sederhana</li>
                <li>Berikan aktivitas menempel dan menggunting</li>
                <li>Latih mengenakan pakaian sendiri</li>
                <li>Ajarkan konsep warna dan bentuk</li>
                <li>Dorong bercerita tentang kegiatan sehari-hari</li>
                <li>Berikan puzzle 4-5 keping</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else if (ageInMonths <= 48) {
    result = {
      ageGroup: "Usia: 37-48 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Mengendarai sepeda roda tiga, melompat dengan satu kaki.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Memotong kertas mengikuti garis, menggambar bentuk sederhana.</li>
            <li><strong>Bicara dan Bahasa:</strong> Bercerita dengan kalimat lengkap, mengenal konsep waktu sederhana.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Memakai pakaian sendiri, bermain dalam kelompok.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Sediakan permainan konstruktif (lego, balok)</li>
                <li>Ajak bermain peran yang lebih kompleks</li>
                <li>Latih menulis huruf dan angka</li>
                <li>Ajarkan konsep berhitung sederhana</li>
                <li>Libatkan dalam tugas rumah tangga ringan</li>
                <li>Berikan kesempatan bersosialisasi dengan teman sebaya</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else if (ageInMonths <= 60) {
    result = {
      ageGroup: "Usia: 49-60 bulan",
      simulation: `
          <ul>
            <li><strong>Kemampuan Gerak Kasar:</strong> Berlari cepat, melompat jauh, menari mengikuti irama.</li>
            <li><strong>Kemampuan Gerak Halus:</strong> Menulis huruf dan angka, menggambar orang sederhana.</li>
            <li><strong>Bicara dan Bahasa:</strong> Bercerita dengan detail, memahami konsep sebab-akibat.</li>
            <li><strong>Sosialisasi dan Kemandirian:</strong> Menyelesaikan tugas sederhana, bermain dengan aturan.</li>
            <li><strong>Saran Stimulasi:</strong>
              <ul>
                <li>Berikan aktivitas menulis dan menggambar</li>
                <li>Ajak bermain permainan dengan aturan sederhana</li>
                <li>Latih berhitung dan mengenal huruf</li>
                <li>Dorong kreativitas melalui seni dan musik</li>
                <li>Ajarkan tanggung jawab melalui tugas sederhana</li>
                <li>Berikan permainan yang melatih pemecahan masalah</li>
              </ul>
            </li>
          </ul>
        `,
    };
  } else {
    result = {
      ageGroup: "Data tidak tersedia.",
      simulation: "Silakan periksa kembali usia yang dimasukkan.",
    };
  }

  if (result) {
    ageGroup.textContent = result.ageGroup;
    simulationDetails.innerHTML = result.simulation;
    simulationResult.classList.remove("hidden");
    simulationResult.classList.add("show");

    // Tambahkan index untuk animasi bertahap
    const listItems = simulationDetails.querySelectorAll("li");
    listItems.forEach((item, index) => {
      item.style.setProperty("--item-index", index);
    });
  } else {
    ageGroup.textContent = "Data tidak tersedia";
    simulationDetails.innerHTML =
      "Silakan periksa kembali usia yang dimasukkan.";
  }
});
