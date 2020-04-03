let btn = document.getElementById('btn');

let body = document.body;
let textos = [];
let p = document.getElementsByTagName("p");
textos.push(p);
let h1 = document.getElementsByTagName("h1");
textos.push(h1);
let h4 = document.getElementsByTagName("h4");
textos.push(h4);
let h5 = document.getElementsByTagName("h5");
textos.push(h5);
let h6 = document.getElementsByTagName("h6");
textos.push(h6);
let label = document.getElementsByTagName("label");
textos.push(label);


btn.addEventListener('click', () => {
    let bodys = document.getElementsByName('bodyColor');
    let body_value;
    for (let i = 0; i < bodys.length; i++) {
        if (bodys[i].checked) {
            body_value = bodys[i].value;
            break;
        }
    }
    localStorage.setItem("backgroundColor", body_value)


    let texts = document.getElementsByName('textColor');
    let text_value;
    for (let i = 0; i < texts.length; i++) {
        if (texts[i].checked) {
            text_value = texts[i].value;
            break;
        }
    }
    localStorage.setItem("textColor", text_value)


    let sizes = document.getElementsByName('textSize');
    let size_value;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            size_value = sizes[i].value;
            break;
        }
    }
    localStorage.setItem("textSize", size_value)


    let lines = document.getElementsByName('lineHeight');
    let line_value;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].checked) {
            line_value = lines[i].value;
            break;
        }
    }
    localStorage.setItem("lineHeight", line_value)


    let fonts = document.getElementsByName('fontFamily');
    let font_value;
    for (let i = 0; i < fonts.length; i++) {
        if (fonts[i].checked) {
            font_value = fonts[i].value;
            break;
        }
    }
    localStorage.setItem("fontFamily", font_value)


    let weights = document.getElementsByName('fontWeight');
    let weight_value;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i].checked) {
            weight_value = weights[i].value;
            break;
        }
    }
    localStorage.setItem("fontWeight", weight_value)


    body.style.backgroundColor = body_value;

    for (i in textos) {
        for (let u = 0; u < textos[i].length; u++) {
            textos[i][u].style.color = text_value;
        }
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = size_value;
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.lineHeight = line_value;
    }

    for (i in textos) {
        for (let u = 0; u < textos[i].length; u++) {
            textos[i][u].style.fontFamily = font_value;
        }
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.fontWeight = weight_value;
    }
});

window.onload = function () {

    body.style.backgroundColor = localStorage.getItem("backgroundColor");

    for (i in textos) {
        for (let u = 0; u < textos[i].length; u++) {
            textos[i][u].style.color = localStorage.getItem("textColor");
        }
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = localStorage.getItem("textSize");
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.lineHeight = localStorage.getItem("lineHeight");
    }

    for (i in textos) {
        for (let u = 0; u < textos[i].length; u++) {
            textos[i][u].style.fontFamily = localStorage.getItem("fontFamily");
        }
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.fontWeight = localStorage.getItem("fontWeight");
    }
}