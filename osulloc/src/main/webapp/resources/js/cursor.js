// 이전 글에 나온 커서 이동
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

// hovering
/*const box1 = document.querySelector('.box1');
box1.addEventListener('mouseover', ()=>{
    cursor.style.border = '2px solid red';
    cursor.style.width = '5em';
    cursor.style.height = '5em';
})

box1.addEventListener('mouseout', ()=>{
    cursor.style.border = '4px solid red';
    cursor.style.width = '0';
    cursor.style.height = '0';
})
*/