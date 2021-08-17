import  './modules/html2canvas.js';
import './modules/jspdf.min.js';

/* eslint-disable no-undef */
export const captureFullPage = () => {
alert("캡쳐를 시작합니다. 잠시만 기다려 주세요!")
  html2canvas(document.getElementsByTagName('body')[0]).then((canvas) => {

    let imgData = canvas.toDataURL('image/png'); 
    let margin = 10; // 출력 페이지 여백설정 
    let imgWidth = 210 - (10 * 2); // 이미지 가로 길이(mm) A4 기준 
    let pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준 
    let imgHeight = canvas.height * imgWidth / canvas.width; 
    let heightLeft = imgHeight; 
    let doc = new jsPDF('p', 'mm'); 
    let position = margin; // 첫 페이지 출력 
    doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight); 
    doc.addPage(); 
    heightLeft -= pageHeight; // 한 페이지 이상일 경우 루프 돌면서 출력 
    while (heightLeft >= 20) { 
        position = heightLeft - imgHeight; 
        doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight); 
        doc.addPage(); 
        heightLeft -= pageHeight; 
    } // 파일 저장 
    doc.save('capture.pdf');

  });
};

export const getDoc = () => {
    return doc;
}