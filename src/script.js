document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  const generateBtn = main.querySelector(".buton");
  const qrmaker = main.querySelector(".form input");
  const qrImage = main.querySelector(".QR img");
  const downloadQR = main.querySelector(".Download");

  generateBtn.addEventListener("click", () => {
    let qrValue = qrmaker.value;
    if (!qrValue) return;
    generateBtn.innerText = "Creating Qr Code ...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
      main.classList.add("active");
      generateBtn.innerText = "Build Qr Code";
    });
  });
  qrmaker.addEventListener("keyup", () => {
    if (!qrmaker.value) {
      main.classList.remove("active");
    }
  });
  downloadQR.addEventListener("click", () => {});
});
