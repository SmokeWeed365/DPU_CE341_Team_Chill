var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function requestProcess() {
    if (this.readyState == 4) {
        if(this.status == 200) {
            var response =JSON.parse(xhr.responseText);
            alert('Your IP address is : ' + response.ip);
        } else {
            alert('error');
        }
    }
}
xhr.open("GET","https://ipinfo.io/json",true);
xhr.send();