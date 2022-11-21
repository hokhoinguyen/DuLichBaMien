/*xuat khung trong y kien*/
function output()
{
var i=document.getElementById("info").value;
var n=document.getElementById("name").value;
  if (i == "" && n == "")
  {
	  alert('Bạn chưa nhập thông tin nào!');
  }
	else if(i == "")
	{
		alert('Bạn chưa nhập ý kiến!');
	}
	else if (n == "")
	{
		alert('Bạn chưa nhập tên!');
	}
	else alert('Cảm ơn bạn đã đóng góp ý kiến!')
}

	 