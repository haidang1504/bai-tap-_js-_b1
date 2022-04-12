/*
 1)chương trình lương nhân viên
   đầu ra
    lương 1 ngày 100.000VND
    xử lí
     cho người dùng nhập vào số ngày
     luongNhanvien =luong1ngay*ngaylam
   */

  var luong1ngay = 100.000 ;
  var ngaylam =10;
   var luongNhanvien =luong1ngay*ngaylam;
   console.log("luong nhan vien la:" +luongNhanvien);



  /*
  2)Tính giá trị trung bình
  đầu ra
  var a=1
  var b=2
  var c=3
  var d=4
  var e=5
  xử lí
  tong gia tri tb=(a+b+c+d+e)/5
  show kq
  */

  var a=1;
  var b=2;
  var c=3;
  var d=4;
  var e=5;
  var tongGiatritb =(a+b+c+d+e)/5;
console.log("tong gia tri trung binh cua 5 so la:" +tongGiatritb);



/*
3 quy đổi tiền
đầu ra
 n=23.500vnd
 xử lí
 usd sang vnd
 cho ng dùng nhập vào số tiền vnd
 soTienquydoi =usd*vnd
 show kq
 */

 var vnd =23.500;
 var usd =3;
 var soTienquydoi =usd*vnd;
 console.log("so tien quy doi la:"+soTienquydoi );




 /*
 4) tính dt chu vi hcn
 đầu ra
 n cd = 3
 n cr= 4
  xử lí
  dT = cd*cr
  chuVi = (cd+cr)/2
  show kq
*/

  var cd =3;
  var cr =4;
  var dT = cd*cr;
  var chuVi = (cd+cr)/2;
  console.log("dien tich la:" + dT);
  console.log("chu vi la:" + chuVi);


  /*
  5) tồng 2 kí số
  đầu ra
  n=11
  xử lí
  tách lấy hàng chục  Math.floor(n%100/10)
  tách lấy hàng dv    Math.floor(n%10)
  tong 2 kí số =hàng chục+hàng dv 
  show kq
  */

  var n= 12;
  var hangchuc =Math.floor(n/10);
  var hangdv =Math.floor(n%10);
  var tongKiso = hangchuc+hangdv;
  console.log("tong 2 ki so la:" + tongKiso);