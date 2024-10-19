const data = [
    {
        id: 1,
        name: "LCD 16x2 I2C",
        description: "LCD 16x2 I2C Datasheet",
        file: "https://drive.google.com/file/d/1rtCCXjcgSCa_gW3itU59iLmE6JkWcsbo/view?usp=sharing"
    },
    {
        id: 2,
        name: "Relay 12V",
        description: "Relay 12V Datasheet",
        file: "https://drive.google.com/file/d/1YTOuRnG8q_Ch8-zqGg0vLEFfo-S3OtXD/view?usp=sharing"
    }
];

function searchData() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // ล้างผลลัพธ์เก่า

    const filteredData = data.filter(item =>
        item.id.toString().includes(input) ||  
        item.name.toLowerCase().includes(input) || 
        item.description.toLowerCase().includes(input)
    );

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            if (item.images) {
                let imagesHtml = item.images.map(image => `<img src="${image}" alt="${item.name}" width="100" style="border-radius: 8px; margin: 5px;">`).join('');
                resultDiv.innerHTML += `
                    <div class="result-item">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="image-gallery">${imagesHtml}</div>
                    </div>
                `;
            } else if (item.file) {
                resultDiv.innerHTML += `
                    <div class="result-item">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <a href="${item.file}" download target="_blank">Download PDF</a>
                    </div>
                `;
            }
        });
    } else {
        resultDiv.innerHTML = "<p>ไม่พบข้อมูลที่ค้นหา</p>";
    }
}
