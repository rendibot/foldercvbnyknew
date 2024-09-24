let fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.multiple = true;
fileInput.accept = ".txt";

fileInput.onchange = function (e) {
    const files = e.target.files;
    let fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const div = document.createElement("div");
            div.classList.add("file-container");

            div.innerHTML = `
                <h3>Nama File Asal: ${file.name}</h3>
                <textarea readonly>${content}</textarea>
                <label for="fileVCFName-${i}">Nama File VCF untuk file ini (opsional):</label>
                <input type="text" id="fileVCFName-${i}" placeholder="Nama file VCF">
                <button onclick="generateVCF('${file.name}', '${content}', ${i})">Hasilkan VCF</button>
            `;

            fileList.appendChild(div);
        };

        reader.readAsText(file);
    }
};

function processFiles() {
    fileInput.click();
}

function generateVCF(fileName, content, index) {
    let vcfFileName = document.getElementById(`fileVCFName-${index}`).value;
    if (!vcfFileName) {
        vcfFileName = fileName.replace(".txt", ".vcf");
    } else {
        vcfFileName = vcfFileName + ".vcf";
    }

    const lines = content.split("\n");
    let vcfContent = "";
    const baseContactName = "anjay";

    for (let i = 0; i < lines.length; i++) {
        const number = lines[i].trim();
        if (number) {
            vcfContent += `
BEGIN:VCARD
VERSION:3.0
FN:${baseContactName} ${i + 1}
TEL:${number}
END:VCARD
            `;
        }
    }

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = vcfFileName;
    link.click();
}