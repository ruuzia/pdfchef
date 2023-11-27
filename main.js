const { PDFDocument, StandardFonts, rgb } = PDFLib

const dropZone = document.getElementById("dropzone")

dropZone.addEventListener("drop", (event) => {
    console.log(event);
    event.preventDefault();
    dropzone.classList.remove("dragover")
})

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
})

dropZone.addEventListener("dragenter", (event) => {
    dropzone.classList.add("dragover")
})

dropZone.addEventListener("dragleave", (event) => {
    dropzone.classList.remove("dragover")
})

async function createPdf() {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  const fontSize = 30
  page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  })

  const pdfBytes = await pdfDoc.save();
    console.log("saving!")
    download(pdfBytes, "demo.pdf", "application/pdf");
}
// createPdf();
