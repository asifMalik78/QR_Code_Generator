const inputURL=document.getElementById('URL');
const generateQr=document.getElementById('generate-qr-btn');
const qr=document.getElementById('qr-generator');



const generateQrCodeHandler=(event)=>{
    event.preventDefault();
    const url=inputURL.value;
    const qrCodeSize=document.getElementById('qr-size').value;
    duplicateResultHandler();
    if(url==''){
        alert("Enter the Url First");
        return;
    }
    
    displayLoadingIcon();

    setTimeout(()=>{
        hideLoadingIcon();
        generateQrImage(url , qrCodeSize)
        let saveURL=qr.querySelectorAll('img')[0];
        console.log(saveURL.src);
        console.log(saveURL.getAttribute('src'));
        createDownloadButton();
    } , 1000);

}


const createDownloadButton=()=>{
    const btn=document.createElement('a');

}

const duplicateResultHandler=()=>{

    const qrImg=document.querySelector('.qr-image');
    if(qrImg){
        qrImg.remove();
    }
}

const displayLoadingIcon=()=>{
    const icon=document.getElementById('loading-svg');
    icon.style.display='block';
}


const hideLoadingIcon=()=>{
    const icon=document.getElementById('loading-svg');
    icon.style.display='none';
}

const generateQrImage=(url , size)=>{
    const qrImgContainer=document.createElement('div');
    qrImgContainer.classList= "qr-image m-auto flex justify-center items-center p-5";
    var qrcode = new QRCode(qrImgContainer, {
        text: url,
        width: size,
        height: size,
        // colorDark : "#000000",
        // colorLight : "#ffffff",
        // correctLevel : QRCode.CorrectLevel.H
    });
    const parentQRContainer=document.getElementById('qr-generator');
    parentQRContainer.appendChild(qrImgContainer);
}


generateQr.addEventListener('click' , generateQrCodeHandler);