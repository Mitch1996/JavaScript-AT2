function getinnerText() {
        let text = document.getElementById("myP").innerText;
        document.getElementById("demo").innerText = text;
}

function getinnerHTML() {
        let text = document.getElementById("myP").innerHTML;
        document.getElementById("demo").innerText = text;
}

function gettextContent() {
        let text = document.getElementById("myP").textContent;
        document.getElementById("demo").innerText = text;
}

/*
The innerHTML property returns:
    The text content of the element, including all spacing and inner HTML tags.
The innerText property returns:
    Just the text content of the element and all its children, without CSS hidden text spacing and tags, except <script> and <style> elements.
The textContent property returns:
    The text content of the element and all descendaces, with spacing and CSS hidden text, but without tags.*/
