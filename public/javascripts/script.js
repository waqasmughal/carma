/**
 * Handle onsubmit data to call ajax request
 */
function onSubmit() {
    // get all form fields
    const elements = document.getElementsByClassName('cardField');
    const formData = {};
    for (var i = 0; i < elements.length; i++) { // append data in object to procceed
        formData[elements[i].name] = elements[i].value;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            alert(xmlHttp.responseText);
        }
    }
    xmlHttp.open('post', '/v1/api/creditcards/');
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(JSON.stringify(formData)); //  call ajax and send data to server
}