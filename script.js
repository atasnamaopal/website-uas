let transaksi = [];
let no = 1;

document.getElementById('form-transaksi').addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const jumlah = document.getElementById('jumlah').value.trim();
  const kategori = document.getElementById('kategori').value.trim();

  if (nama && jumlah && kategori) {
    const objTransaksi = {
      no,
      nama,
      jumlah,
      kategori
    };
    transaksi.push(objTransaksi);
    tampilTransaksi();
    no++;
    document.getElementById('nama').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('kategori').value = '';
  } else {
    alert('Silakan isi semua field!');
  }
});

function tampilTransaksi() {
  const tbody = document.getElementById('tbody-transaksi');
  tbody.innerHTML = '';
  transaksi.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.jumlah}</td>
      <td>${item.kategori}</td>
    `;
    tbody.appendChild(row);
  });
}

 
