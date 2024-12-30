const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
btn1.onclick = () => {
    console.log(window);
    alert(window.myAPI.version);
}
btn2.onclick = () => {
    window.myAPI.saveFile("Hello from render.js123");
}
btn3.onclick = async () => {
    const res = await window.myAPI.readFile();
    console.log(res);
} 