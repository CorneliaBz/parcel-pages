// const img = document.createElement('img');
// document.body.append(img);
// //Funkar inte
// // img.src = './img.drake.jpg';

// const imgURL = new URL ( './img/drake.jpg', import.meta.url);
// img.src = imgURL.toString(); //eller .href
// console.log(imgURL);

const imgNames = ['drake', 'pingvin', 'sal'];
for(const el of imgNames){
    const img = document.createElement('img');
    document.body.append(img);
    const imgURL = new URL ( `./img/${el}.jpg`, import.meta.url);
    img.src = imgURL.toString();
}