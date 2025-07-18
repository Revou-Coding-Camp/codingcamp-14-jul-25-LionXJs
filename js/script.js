document.querySelector(".massage").addEventListener("submit", function(a){
    a.preventDefault();

    const nama = document.querySelector("#nama").value;
    const tanggal = document.querySelector("#tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.querySelector("#pesan").value;

    document.querySelector(".result").innerHTML = `
    <h3>Saran Kamu:</h3><p><strong>Nama : </strong> ${nama}</p><p><strong>Tanggal</strong> ${tanggal}</p><p><strong>Jenis Kelamin :</strong>${gender}</p><p><strong>Pesan :</strong> ${pesan}</p>
    `;
    }
)