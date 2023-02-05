console.log("=======================================");
console.log("Lưu ý: Bật caplock trước khi chơi và tắt vietkey")
console.log("=======================================");
console.log("Shift + F5: Reload trang, chơi lại từ đầu, với tốc độ chậm nhất.")
console.log("Enter: Tiếp tục chơi nếu báo thua")
console.log("ESC: Nếu đang chơi thì sẽ tăng tốc")
console.log("=======================================");

if (window.confirm("Lưu ý: Bật caplock trước khi chơi và tắt vietkey"))
{
    const SPAN_KEY = document.getElementById('robot-key');
    const MY_KEY = document.querySelector('.my-key');
    const MY_POINT = document.querySelector('.my-point');
    const KEYS = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    const INIT_MOVE = -100;
    const HEIGHT = window.innerHeight;
    const EVENT = 'keydown';
    const ESC = 'Escape';
    let point = 0;
    let level = 0;
    let move = INIT_MOVE;
    let clearSpeech = [];
    let rand = Math.random() * KEYS.length;
    SPAN_KEY.innerText = KEYS.slice(rand, rand + 1);
    
    let maxSpeed = false;
    function Speed(){
        let clear = setInterval(()=>{
            SPAN_KEY.style.top = `${move+=5}px`;
            if(move > HEIGHT - 20) {
                move = INIT_MOVE;
                let rand = Math.random() * KEYS.length;
                point = 0;
                maxSpeed = true;
                SPAN_KEY.innerText = KEYS.slice(rand, rand + 1);
                handleClearSpeed();
                alert("Thua òi 🥰🥰🥰"); 
                MY_POINT.innerText = `Your point: ${0}`;
                alert("Chơi lại nheee 🥰🥰🥰");
                Speed();
            }
        },10)
        clearSpeech.push(clear);
        if(clearSpeech.length == 1) {
            level = 1;
        } else {
            level = (clearSpeech.length - 1) * 2;
        }
    }

    Speed();

    function myCallBack(callback){
        setTimeout(()=>{
            callback();
        },0);
    }
    const handleClearSpeed = () => {
        console.log(clearSpeech);
        clearSpeech.forEach(clearInterval);
        console.log(clearSpeech);
        clearSpeech = [];
        SPAN_KEY.style.top = `${INIT_MOVE}px`;
    }

    document.addEventListener( EVENT,(e)=>{
        if(e.key.toString() == ESC) {
            Speed();
        } else {
            MY_KEY.innerText = `Your key : ${e.key}`;
            if(SPAN_KEY.innerText == e.key) {
                point += level;
                MY_POINT.innerText = `Your point: ${point}`;
                move = INIT_MOVE;
                let rand = Math.random() * KEYS.length;
                SPAN_KEY.innerText = KEYS.slice(rand, rand + 1);
            } else {
                handleClearSpeed();
                alert("Thua òi 🥰🥰🥰"); 
                maxSpeed = false;
                MY_POINT.innerText = `Your point: ${0}`;
                console.log(clearSpeech);
                alert("Chơi lại nheee 🥰🥰🥰");
                move = INIT_MOVE;
                Speed();
            }
        }
    });
} else {
    console.error("Tui bảo tắt vietkey với caplock mới chơi được mà... hic :>");
}
