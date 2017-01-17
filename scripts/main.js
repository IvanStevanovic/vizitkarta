//set ckeditors text fields and values of that vields
CKEDITOR.replace('text1');
CKEDITOR.instances["text1"].setData("Vas Tekst ide ovde");
    timer1 = setInterval(updateDiv1,100);
    function updateDiv1(){
        var editorText = CKEDITOR.instances.text1.getData();
        $('#tekst').html(editorText);
    };
CKEDITOR.replace( 'slogan1' );
CKEDITOR.instances["slogan1"].setData("Slogan / Opis");
    timer2 = setInterval(updateDiv2,100);
    function updateDiv2(){
        var editorText = CKEDITOR.instances.slogan1.getData();
        $('#slogan').html(editorText);
    };
CKEDITOR.replace( 'ime1' );
CKEDITOR.instances["ime1"].setData("Ime i Prezime");
    timer3 = setInterval(updateDiv3,100);
    function updateDiv3(){
        var editorText = CKEDITOR.instances.ime1.getData();
        $('#ime').html(editorText);
    };
CKEDITOR.replace( 'titula1' );
CKEDITOR.instances["titula1"].setData("Titula / Zvanje");
    timer4 = setInterval(updateDiv4,100);
    function updateDiv4(){
        var editorText = CKEDITOR.instances.titula1.getData();
        $('#titula').html(editorText);
    };
CKEDITOR.replace( 'adresa1' );
CKEDITOR.instances["adresa1"].setData("Adresa");
    timer5 = setInterval(updateDiv5,100);
    function updateDiv5(){
        var editorText = CKEDITOR.instances.adresa1.getData();
        $('#adresa').html(editorText);
    };
CKEDITOR.replace( 'grad1' );
CKEDITOR.instances["grad1"].setData("Postanski broj / Grad");
    timer6 = setInterval(updateDiv6,100);
    function updateDiv6(){
        var editorText = CKEDITOR.instances.grad1.getData();
        $('#postanski').html(editorText);
    };
CKEDITOR.replace( 'telefon1' );
CKEDITOR.instances["telefon1"].setData("Telefon ");
    timer7 = setInterval(updateDiv7,100);
    function updateDiv7(){
        var editorText = CKEDITOR.instances.telefon1.getData();
        $('#telefon').html(editorText);
    };
CKEDITOR.replace( 'mobilni1' );
CKEDITOR.instances["mobilni1"].setData("Mobilni / Fax");
    timer8 = setInterval(updateDiv8,100);
    function updateDiv8(){
        var editorText = CKEDITOR.instances.mobilni1.getData();
        $('#mobilni').html(editorText);
    };