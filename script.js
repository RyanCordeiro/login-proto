
    var btn = document.querySelector(".mudar_cor");
    var bdy = document.querySelector("body");
    var form = document.querySelector(".forms");

    document.querySelector(".mudar_cor").addEventListener("click", function () {
        console.log("button was clicked");
        if (btn.classList.contains("noite")) {
            btn.classList.remove("noite");
            bdy.style.backgroundImage = 'url(img/gif-branco.gif)';
            form.classList.add("branquear");
            form.classList.remove("escurecer");

        }
        else {
            btn.classList.add("noite")
            bdy.style.backgroundImage = 'url(img/gif-escuro.gif)';
            form.classList.add("escurecer");

            form.classList.remove("branquear");
        }
    });