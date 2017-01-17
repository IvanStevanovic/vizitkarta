
//functions for downloadin visit card in pdf or jpg format.
function toJPG(){
	html2canvas($('#glavni'),{
		onrendered: function (canvas) {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'somefilename.jpg';
        a.click();
		}
	});
}
function toPDF() {
 html2canvas($('#glavni'),{
	onrendered: function (canvas){
	var img = canvas.toDataURL("image/png");
	var doc = new jsPDF('l', 'mm', [111,192]);
	doc.addImage(img,'JPEG',0,0);
	doc.save("test.pdf");
	}
 });
}


//functions for draggable spans.
$( function() {
    $( "#tekst" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );

$( function() {
    $( "#slogan" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#ime" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#titula" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#adresa" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#postanski" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#telefon" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#mobilni" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
  
$( function() {
    $( "#logoslika" ).draggable({
		containment: '#g1',
		cursor: 'move',
	});
  } );
