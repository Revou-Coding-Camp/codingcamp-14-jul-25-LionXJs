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

document.addEventListener("DOMContentLoaded", function() {
    const titleText = "Welcome To My portfolio Website";
    const descText = "I am a fullstack software developer";
    let titleIdx = 0, descIdx = 0;

    function typeTitle() {
        if (titleIdx <= titleText.length) {
            document.getElementById("typing-title").textContent = titleText.slice(0, titleIdx);
            titleIdx++;
            setTimeout(typeTitle, 70);
        } else {
            setTimeout(typeDesc, 400);
        }
    }

    function typeDesc() {
        if (descIdx <= descText.length) {
            document.getElementById("typing-desc").textContent = descText.slice(0, descIdx);
            descIdx++;
            setTimeout(typeDesc, 50);
        }
    }

    typeTitle();
});