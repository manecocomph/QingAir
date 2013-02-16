if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp1=new XMLHttpRequest();
} else {// code for IE6, IE5
	xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp1.onreadystatechange=function() {
	if (xmlhttp1.readyState==4 && xmlhttp1.status==200) {
		//content = xmlhttp1.responseText;
		//alert("========= ok ===========");
		//document.getElementById("sh").innerHTML =  content;
        
        var response = xmlhttp1.responseText;
        document.getElementById("container").innerHTML =  response;
	}
}
var url = "http://jindu.sinaapp.com/getCityAqiHtml.php?cityName=%E4%B8%8A%E6%B5%B7";
	xmlhttp1.open("GET", url, true);
	xmlhttp1.send();
