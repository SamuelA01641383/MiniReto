function loadApollyon() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Apollyon.html");
    xhttp.send();
}

function loadHolden() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Holden.html");
    xhttp.send();
}

function loadHervis() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Hervis.html");
    xhttp.send();
}

function loadWarden() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Warden.html");
    xhttp.send();
}

function loadPK() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "PK.html");
    xhttp.send();
}

function loadConq() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Conq.html");
    xhttp.send();
}

function loadLB() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "LB.html");
    xhttp.send();
}

