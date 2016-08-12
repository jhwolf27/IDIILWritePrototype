/**
 * Created by jhwol on 8/12/2016.
 */



var canvas = new fabric.Canvas('c');
var delete_sel = document.getElementById('delete-sel');
var load_image = document.getElementById('load image');
var drawingModeEl = document.getElementById('drawing-mode');
var add_text = document.getElementById('add_text');
var save_JSON = document.getElementById('save_JSON');
var load_JSON = document.getElementById('load_JSON');
//var save_image = document.getElementById('save-image');
/*
 var BG_Image = function(image, url, ){


 };
 */

add_text.onclick = function(){
    canvas.add(new fabric.IText('Tap and Type', {
        fontFamily: 'times new roman',
        left: 100,
        top: 100 ,
    }));
}

var json1;

save_JSON.onclick = function(){
    fabric.log('JSON without additional properties: ', canvas.toJSON());
    json1 = canvas.toJSON();
}

load_JSON.onclick = function(){
    canvas.clear();
    canvas.loadFromJSON(json1, canvas.renderAll.bind(canvas));
}



function savePDF() {
    try {
        canvas.getContext('2d');
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'mm', [297, 210]);
        pdf.addImage(imgData, 'JPEG', 5, 5);
        var namefile = prompt("insert name of file");
        pdf.save(namefile + ".pdf");
    } catch (e) {
        alert("Error description: " + e.message);
    }

}

document.getElementById('download').addEventListener('click', savePDF, false);

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('save').addEventListener('click', function() {
    downloadCanvas(this, 'c', 'test.png');
}, false);

drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
        drawingModeEl.innerHTML = 'Cancel drawing mode';
    } else {
        drawingModeEl.innerHTML = 'Enter drawing mode';
    }
};

var img = new Image();

//insert image url here
img.src = "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg"


load_image.onclick = function() {
    canvas.setBackgroundImage(img.src, canvas.renderAll.bind(canvas), {
        originX: 'left',
        originY: 'top',
        left: 0,
        top: 0
    });
    canvas.setWidth(img.width);
    canvas.setHeight(img.height);
    canvas.calcoffset
};



delete_sel.onclick = function() {
    canvas.getActiveObject().remove();
}

/*
 canvas.on('path:created', function() {
 updateComplexity();
 });
 */

/*
 function doKeyDown(e) {
 document.onkeydown = function(e) {
 switch (e.keyCode) {
 case 46:
 //delete was pressed
 canvas.getActiveObject().remove();

 }
 }
 }
 */
