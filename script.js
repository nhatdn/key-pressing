console.log("%cNhân ngày 20/10, Em chúc Duy luôn luôn vui vẻ, chăm ngoan, học giỏi, nghe lời bố mẹ, nghe lời chị Ánh :>, luôn luôn xinh đẹp, luôn luôn hạnh phúc, thành công và đạt được những điều mà Duy mong muốn. Bữa trước em thấy duy bảo là duy gõ phím chậm a, hì... Nên em làm cái này để duy chơi cho vui, :> xem như là món quà em tặng duy nhân ngày này nhe <3","color:pink; font-size: 15px");

console.log("=======================================");
console.log("Lưu ý: Bật caplock trước khi chơi và tắt vietkey")
console.log("=======================================");
console.log("Shift + F5: Reload trang, chơi lại từ đầu, với tốc độ chậm nhất.")
console.log("Enter: Tiếp tục chơi nếu báo thua")
console.log("ESC: Nếu đang chơi thì sẽ tăng tóc, nếu thua thì sẽ chơi lại ở tốc độ hiện tại")
console.log("=======================================");

if (window.confirm("Lưu ý: Bật caplock trước khi chơi và tắt vietkey"))
{
    let move = -30;
    let height = window.innerHeight;
    let keys = '123456789QWERTYUIOPASDFGHJKLZXCVBNM';
    let rand = Math.random() * keys.length;
    document.getElementsByTagName('span')[0].innerText = keys.slice(rand, rand + 1);

    var clear;

    function Start(){
        clear = setInterval(()=>{
            document.getElementsByTagName('span')[0].style.top = `${move+=2}px`;
            if(move == height - 34) {
                move = -30;
                clearInterval(clear);
                let rand = Math.random() * keys.length;
                document.getElementsByTagName('span')[0].innerText = keys.slice(rand, rand + 1);
                alert("Thua òi 🥰🥰🥰");
            }
        },10)
    }

    Start();

    function myCallBack(callback){
        setTimeout(()=>{
            callback();
        },0);
    }

    let point = 0;

    document.addEventListener('keydown',(e)=>{
        if(e.key.toString() != 'Escape') {
            if(e.key.toString() == 'Enter'){
                clearInterval(clear);
            }
            myCallBack(()=>{
                document.querySelector('.my-key').innerText = `Your key press: ${e.key}`;
                myCallBack(()=>{
                    move = -30;
                    document.querySelector('.my-point').innerText = `Your point: ${++point}`;
                    if(document.getElementsByTagName('span')[0].innerText == e.key) {
                        let rand = Math.random() * keys.length;
                        document.getElementsByTagName('span')[0].innerText = keys.slice(rand, rand + 1);
                    } else {
                        clearInterval(clear);
                        document.getElementsByTagName('span')[0].style.top = `-30px`;
                        if(e.key.toString() == 'Enter') {
                            alert("Chơi lại nheee 🥰🥰🥰");
                            point = 0;
                            Start();
                        } else {
                            alert("Thua òi 🥰🥰🥰");
                        }
                    }
                })
            })
        } else {
            point = 0;
            Start();
        }
    });
} else {
    console.error("Tui bảo tắt vietkey với caplock mới chơi được mà... hic :>")
}
