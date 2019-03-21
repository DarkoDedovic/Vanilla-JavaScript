const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    .then(stream => {
      video.srcObject = stream;
      video.play();

    })
    .catch(err => {
      console.error('ERROR: ', error);
    });

}

function paintToCanvas() {
  const width = video.offsetWidth;
  const height = video.offsetHeight;
  canvas.height = height;
  canvas.width = width;

  return setInterval(() => {
    ctx.drawImage(video, 0,  0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    console.log(pixels);
    pixels = redEffect(pixels);
    ctx.putImageData(pixels, 0, 0);
    // debugger;
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'firstPicture');
  link.innerHTML = `<img src=${data} alt="webphoto" />`;
  strip.insertBefore(link, strip.firstChild);

}

function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i] = pixels.data[i] - 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
  }
  return pixels;
}

getVideo();
video.addEventListener('canplay', paintToCanvas);