"use strict";
// Repeat tag
document.querySelectorAll('repeat').forEach(function (block) {
    var count = block.getAttribute('count');
    var first_class = block.getAttribute('first');
    var template = block.children[0].outerHTML;

    //create div to hold the template
    var div = document.createElement('div');
    var ItemClassList = block.getAttribute('class');
    if (ItemClassList) {
        div.setAttribute('class', ItemClassList);
    }
    //replace the repeat block with the div
    block.parentNode.replaceChild(div, block);
    for (var i = 0; i < count; i++) {
        div.innerHTML += template;
    }
    //add first class to first element
    if (first_class) {
        div.children[0].classList.add(first_class);
    }
});


//set ftext class
document.querySelectorAll('ftext').forEach(function (block) {
    const type = block.getAttribute('type');
    const max = block.getAttribute('max');
    const min = block.getAttribute('min');
    const len = block.getAttribute('len');
    if (type) {
        //create div to hold the template
        var div = document.createElement('div');
        var ItemClassList = block.getAttribute('class');
        if (ItemClassList) {
            div.setAttribute('class', ItemClassList);
        }
        //replace the repeat block with the div
        block.parentNode.replaceChild(div, block);
        div.innerHTML = GetTextOfType(type, len, max, min);
    }
});

function GetTextOfType(type, len, max, min, format) {
    const fktext = new window.FKText();
    switch (type) {
        case 'words':
            return fktext.GetWords(len, max, min);
        case 'sentences':
            return fktext.GetSentences(len, max, min);
        case 'paragraphs':
            return fktext.GetParagraphs(len, max, min);
        case 'number':
            return fktext.GetNumber(max, min);
        case 'date':
            return fktext.GetDate();
        case 'time':
            return fktext.GetTime();
        case 'datetime':
            return fktext.GetDateTime();
        case 'email':
            return fktext.GetEmail();
        case 'url':
            return fktext.GetUrl();
        case 'ip':
            return fktext.GetIp();
        case 'phone':
            return fktext.GetPhone();
        case 'name':
            return fktext.GetName();
        case 'fullname':
            return fktext.GetFullName();
        case 'address':
            return fktext.GetAddress();
        case 'city':
            return fktext.GetCity();
        case 'state':
            return fktext.GetState();
        case 'zip':
            return fktext.GetZip();
        case 'country':
            return fktext.GetCountry();
        case 'company':
            return fktext.GetCompany();
        case 'job':
            return fktext.GetJob();
        case 'color':
            return fktext.GetColor();
        case 'hex':
            return fktext.GetHex();
        case 'rgb':
            return fktext.GetRgb();
        case 'hsl':
            return fktext.GetHsl();
        default:
            return fktext.GetWords();
    }
}

document.querySelectorAll('fimg').forEach(function (block) {
    var width = block.getAttribute('width');
    var height = block.getAttribute('height');
    var img = document.createElement('img');
    var type = block.getAttribute('type');
    img.src = getImg(img, width, height, "blue", 48, "black", type);
    block.replaceWith(img);
});

function getImg(img, width = 200, height = 200, backgroundColor = "blue", fontSize = 48, fontColor = "black", type = "random") {
    let canvas = document.createElement('canvas')
    canvas.height = height
    canvas.width = width
    let context = canvas.getContext('2d')
    const FKText = new window.FKText();
    switch (type) {
        case 'random':
            const text = FKText.GetName();
            context.drawImage(img, 0, 0);
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, width, height);
            context.font = `bold ${fontSize}px serif`;
            context.textAlign = "center"
            context.fillStyle = fontColor;
            context.fillText(text, width / 2, height / 2)
            return canvas.toDataURL('image/jpeg');
        case 'profile':
            //box color
            context.fillStyle = "#878787";
            context.fillRect(0, 0, width, height);
            // Draw the bottom circle
            context.beginPath();
            context.arc(width / 2, height, width / 2, 0, 6 * Math.PI);
            context.fillStyle = "white";
            context.fill();
            // Draw the top circle
            context.beginPath();
            context.arc(width / 2, height / 3.5, width / 4, 0, 4 * Math.PI);
            context.fillStyle = "#f4f4f4";
            context.fill();
            // Draw the user image onto the canvas with some padding
            context.drawImage(img, 10, 10, width - 20, height - 20);

            // Convert the image to a data URL and return it
            return canvas.toDataURL('image/jpeg');

        case 'trees':
            // Set the sky color
            context.fillStyle = '#87CEEB';
            context.fillRect(0, 0, width, height);

            // Set the ground color
            context.fillStyle = '#228B22';
            context.fillRect(0, height / 2, width, height / 2);

            // Draw a tree
            function drawTree(x, y, trunkHeight, crownRadius) {
                // Draw the trunk
                context.fillStyle = '#8B4513';
                context.fillRect(x - 2, y - trunkHeight, 10, trunkHeight);
                // Draw the crown
                context.beginPath();
                context.arc(x, y - trunkHeight, crownRadius, 0, 2 * Math.PI);
                context.fillStyle = FKText.GetColor();
                context.fill();
            }

            // Draw several trees in the forest
            for (let i = 0; i < 10; i++) {
                const x = Math.random() * width;
                const y = height / 2 + Math.random() * height / 2;
                const trunkHeight = 40 + Math.random() * 100;
                const crownRadius = 20 + Math.random() * 50;
                drawTree(x, y, trunkHeight, crownRadius);
            }

            // Convert the image to a data URL and return it
            return canvas.toDataURL('image/jpeg');

        case 'randomShapes':
            // Set the sky color
            context.fillStyle = FKText.GetColor();
            context.fillRect(0, 0, width, height);

            //draw random polygons rounded rectangles
            for (let i = 0; i < 40; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const w = 40 + Math.random() * 100;
                const h = 20 + Math.random() * 50;
                const r = 20 + Math.random() * 50;
                const s = FKText.GetNumber(3, 16);
                const c = FKText.GetColor();
                drawPolygon(x, y, w, h, r, s, c);
            }

            //draw random polygons
            function drawPolygon(x, y, width, height, radius, sides, color) {
                context.beginPath();
                context.moveTo(x + radius, y);
                for (let i = 1; i < sides; i++) {
                    context.lineTo(x + width - radius + radius * Math.cos(i * 2 * Math.PI / sides), y + height - radius + radius * Math.sin(i * 2 * Math.PI / sides));
                    context.lineTo(x + width - radius + radius * Math.cos((i + 1) * 2 * Math.PI / sides), y + height - radius + radius * Math.sin((i + 1) * 2 * Math.PI / sides));
                }
                context.closePath();
                context.fillStyle = color;
                context.fill();
            }
            //add random text to the image
            for (let i = 0; i < 10; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const f = 2 + Math.random() * 50;
                const c = FKText.GetColor();
                drawText(x, y, f, c);
            }

            //draw random text
            function drawText(x, y, fontSize, color) {
                context.font = `bold ${fontSize}px serif`;
                context.textAlign = "center"
                context.fillStyle = color;
                context.fillText(FKText.GetNumber(99, 1000), x, y)
            }
            //draw random lines
            for (let i = 0; i < 30; i++) {
                const x1 = Math.random() * width;
                const y1 = Math.random() * height;
                const x2 = Math.random() * width;
                const y2 = Math.random() * height;
                const c = FKText.GetColor();
                drawLine(x1, y1, x2, y2, c);
            }

            //draw random lines
            function drawLine(x1, y1, x2, y2, color) {
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.strokeStyle = color;
                context.stroke();
            }


            // Convert the image to a data URL and return it
            return canvas.toDataURL('image/jpeg');

    }
}
