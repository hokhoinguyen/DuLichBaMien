/*dong ho*/
$(document).ready(function() {//thuc thi khi load xong trang
  clockUpdate();
  setInterval(clockUpdate, 1000); //thuc thi ham clockUpdate sau moi 1000ms
})

function clockUpdate() {/*ham cap nhat dong ho*/
  var date = new Date();
  function addZero(x) { /*them so khong truoc con so neu so < 10*/
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }
	/*ham cho dinh dang 12h*/
  function twelveHour(x) { 
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }
	//hàm cho AM, PM
	
function ampm(x) {
    if (date.getHours(x) >= 12) {
      return "PM";
    } else 
      return "AM";
    }
	
function sunday(x)
	{
	if (date.getDay(x) == 0) {
      return "Chủ nhật";
	} else return x+1;
    }
	
  var h = addZero(twelveHour((date.getHours())));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());
	/*ap dung de lam ngay thang nam*/
  var d = addZero(date.getDate());
  var mo = addZero(date.getMonth()+1);
  var y = addZero(date.getFullYear());
  var e = ampm(h);
	var t1=date.getDay();
var t2=sunday(t1);
 $('.clock').css({'color': '#d9aaff', 'text-shadow': '0 0 10px #b5ffdf'});
$('.clock').text(h+' '+m+' '+s+' '+e) //jquery thay the van ban
	$('.date').css({'color': '#1E377F', 'text-shadow': '0 0 10px #ffffff'});
$('.date').text('Thứ '+t2+', ngày '+d + ' tháng ' + mo + ' năm ' + y)
}
