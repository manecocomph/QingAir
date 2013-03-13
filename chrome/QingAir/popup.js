function refresh() {
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
            
            var cityList = document.getElementById("cityList");
            //alert(cityList.childNodes.length);
            
            for (var count = 0; count < cityList.childNodes.length; count++) {
                var city = cityList.childNodes[count];
                if (city.nodeName == "LI") {
                    city.onclick=function() {
                        //alert(this.innerText);
                        document.getElementById("currentCity").innerText = this.innerText;
                        refresh();
                    }
                };
            }
        }
    }
    var currentCity = "";
    var currentCityNode = document.getElementById("currentCity");
    if (null != currentCityNode) {
        currentCity = currentCityNode.innerText;
    }
    var url = "http://jindu.sinaapp.com/getCityAqiHtml02.php?cityName=" + currentCity;
	xmlhttp1.open("GET", url, true);
	xmlhttp1.send();

}

refresh();
