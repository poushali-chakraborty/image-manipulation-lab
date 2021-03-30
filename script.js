let img = new Image();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fileName = "";
let disabled=false;
const buttons=["vintage","lomo","clarity","sincity","crossprocess","pinhole","nostalgia","hermajesty"]

document.getElementById("upload-file").addEventListener("change",()=>{
   
	let file = document.querySelector("#upload-file").files[0];
	let reader = new FileReader();
	if (file) {
      fileName = file.name;
      reader.readAsDataURL(file);
    }
    reader.addEventListener(
      "load",
      function() {
        img = new Image();
        img.src = reader.result;
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          //ctx.drawImage(img,0,0,img.width,img.height, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(img,0,0,img.width,img.height)
        };
      },
      false
    );
});












document.getElementById("download-btn").addEventListener('click',()=>{

 let fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      let actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");



});


function download(canvas, filename) {
  let e;
  let lnk = document.createElement("a");

  lnk.download = filename;

  lnk.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}


document.getElementById("filter-btn").addEventListener('click',()=>{
	if (disabled==false){
		
	let btn="";
	

	let row=document.getElementById("filter-container");
	for(let i=0;i<buttons.length;i++){
		
		btn=buttons[i];
		
		let b=document.createElement('button');
		b.setAttribute('class', 'button-small' );
		b.setAttribute('id', 'filter-'+btn );
		b.setAttribute('onclick',btn+"()")
		b.appendChild( document.createTextNode(btn) );
		row.appendChild( b );

	}
	row.setAttribute('class', 'allFilters' );
	disabled=true;
}



});

function vintage(){
	console.log("click")
Caman("#canvas", img, function() {
      this.vintage().render();
    });
}

function lomo(){
Caman("#canvas", img, function() {
      this.lomo().render();
    });
};
function clarity(){
Caman("#canvas", img, function() {
      this.clarity().render();
    });
};

function sincity(){
Caman("#canvas", img, function() {
      this.sinCity().render();
    });
};

function crossprocess(){
 Caman("#canvas", img, function() {
      this.crossProcess().render();
    });
}
function pinhole(){
Caman("#canvas", img, function() {
      this.pinhole().render();
    });
}
function nostalgia(){
Caman("#canvas", img, function() {
      this.nostalgia().render();
    });
}

function hermajesty(){
Caman("#canvas", img, function() {
      this.herMajesty().render();
    });
}
