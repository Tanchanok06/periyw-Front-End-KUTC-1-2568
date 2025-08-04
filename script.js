// document.write("Hello World")
// alert("Hello World")
// alert("สวัสดีค่ะ")

// //แสดงใน console
// console.log("ทดสอบระบบสำเร็จ")

//ตัวแปรแบบที่ใช้งานได้ทุกส่วน
// var Fullname ="Tanchanok"

// //ตัวแปรแบบ ไม่เปลี่ยนแปลงค่า
// const number = 20;

// document.write (Fullname);
// document.writeln(number);

//แปลงจากข้อความ เป็นตัวเลข
// let result = "123abc";
// let total = parseInt(result);

// document.write(total);



//แปลงจากตัวเลขเป็น ข้อความ
// let Num = 123;
// let result = Num.toString();


// document.write(result);
// //เช็คชนิดตัวแปร
// let total = typeof(result)
//  document.write(total);




//  let  num = 123121212121
//  let Text = typeof(num) 

//  document.write(Text);

//  document.write(typeof(num));


//ตัดเกรดคะแนน
//โดยถ้าคะแนนมากกว่า100 ให้ขึ้นคำว่า สอบผ่าน
//แต่ถ้าน้อยกว่า ให้ขึ้นคำว่า สอบตก ไปสอบใหม่นะ

// let score = 105;
// if (score>=100){
//     document.writeln("สอบผ่าน");
// }
// else{
//      document.writeln("สอบตก");
// }


// let Weather = 39;
// if(Weather>=30){
//     document.writeln("ร้อนมากค่ะ🥵");
//     alert("คิดถึงผัว")
// }else if(Weather>=10){
//      document.writeln("เริ่มหนาวค่ะ🥶");
// }else{
//      document.writeln("นํ้าเย็นมากค่ะ🥶");
// }

//แปลงจากเลข เป็นวัน
//โดยให้เริ่มที่เลย 1 เป็นวันจันทร์ แล้วไล่ไปจนถึงวันอาทิตย์

// var mouth = 2;
// switch(mouth){
//     case 1 :
//         document.write("วันจันทร์💛");
//         break

//          case 2 :
//         document.write("วันอังคาร🩷");
//         break

//          case 3 :
//         document.write("วันพุธ💚");
//         break

//          case 4 :
//         document.write("วันพฤหัสบดี🧡");
//         break

//          case 5 :
//         document.write("วันศุกร์💙");
//         break

//          case 6 :
//         document.write("วันเสาร์💜");
//         break

//          case 7 :
//         document.write("วันอาทิตย์❤️");
//         break;

    // default :
    //  document.writeln("ไม่ตรงกับเงื่อนไขใดๆ");
    //  break;


    // for (i = 1 ; i < 4 ; i = i + 1){
    //     document.write(" สวัสดีค่ะ ");
    //     document.write(i );
    // }
    
//     let i  = 14;
//  for(i = 1 ; i <=  14 ; i = i + 1){
//         document.write(" อยากกลับบ้านแล้ว ");
//         document.write( i );
//      }
    
     //ฟังก์ชันแบบไม่มีการรับค่า
   //   function showmessage() {
   //    alert("ยินดีต้อนรับ");
   //   }

   //    showmessage() ; //การเรียกใช้งานฟังก์ชัน

    //  function cal(number) {
    //   return document.write(number * 2);
    //  }
     
    //  cal(40) ; //เรียกใช้งานของฟังก์ชัน

    //   function showname(realname, surname) {
    //      return document.write( realname+ " " + surname );
    //   }

    //     showname("ธัญชนก", "ปักกาโถ") ;
    

    function changecolor(){
    let name = document.getElementById("Test-1");
    name.style.color = "red";
    name.style.backgroundColor = "yellow" 
    
}
function Test(){
    let result = document.querySelector(".Test-2");
    result.setAttribute("class","light")
}

let mode = document.querySelector(".mode");
function drakmode(){
   
    mode.setAttribute("class","drak");
}

function lightmode(){
    mode.setAttribute("class","light");
}



function changetext(){
    let text = document.getElementById("change-text").value;
    let result = document.getElementById("showtext");
    result.innerHTML = text;

}