import  './modules/html2canvas.js';
import './modules/jspdf.min.js';

let doc;

export const test = () => {
    var queryInfo = {

        active: true,
        currentWindow: true
    
      };
    /* eslint-disable no-undef */
    // chrome.tabs.query(queryInfo, function(tabs) {

    //     var tab = tabs[0];
    //     var url = tab.url;
    
    //     alert(url);
    //     alert(tab);
    
    //   });
    alert("test!!!!!!");
    doc = document.getElementsByTagName('body')[0];
    console.log(document.getElementsByTagName('body')[0]);
    return document.getElementsByTagName('body')[0];
};

const retinaRatio = window.devicePixelRatio * 2;

export const captureFullPage = () => {
alert("what!?!?!?!")
  html2canvas(document.getElementsByTagName('body')[0]).then((canvas) => {
    // const pdf = new jsPdf();
    // const imgData = canvas.toDataURL('image/jpeg', 1.0);
    // pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
    // pdf.save('screenshot.pdf');
    let imgData = canvas.toDataURL('image/png'); 
    let margin = 10; // 출력 페이지 여백설정 
    let imgWidth = 210 - (10 * 2); // 이미지 가로 길이(mm) A4 기준 
    let pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준 
    let imgHeight = canvas.height * imgWidth / canvas.width; 
    let heightLeft = imgHeight; 
    let doc = new jsPDF('p', 'mm'); 
    let position = margin; // 첫 페이지 출력 
    doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight); 
    heightLeft -= pageHeight; // 한 페이지 이상일 경우 루프 돌면서 출력 
    while (heightLeft >= 20) { 
        position = heightLeft - imgHeight; 
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); 
        doc.addPage(); heightLeft -= pageHeight; 
    } // 파일 저장 
    doc.save('sample.pdf');

  });
};

export const getDoc = () => {
    return doc;
}