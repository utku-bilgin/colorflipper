const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const change = document.querySelector('.change');
const copy = document.querySelector('.copy');
const color = document.querySelector('.color');

change.addEventListener('click', function () {
    let arrColor = '#';
    for(let i=0; i<6; i++){
        arrColor += arr[Math.floor(Math.random()*arr.length)];
    }
    color.textContent = arrColor;
    document.body.style.backgroundColor = arrColor;
});

copy.addEventListener('click', function(){
    let text = ('background-color: ')+color.innerHTML+(';');
    
    const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});
