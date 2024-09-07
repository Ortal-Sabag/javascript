var g= $G('Ortal', 'sabag'); // $G call to Greetr, global.Greetr = global.$G = Greetr;
//g.greet().setLang('es').greet(true).log();


// var selector = $('#greetings')
// g.HTMLGreeting(selector, true);


$('#login').click(function(){ //on click the login button.
    var loginGrtr = $G('John', 'Doe'); //create new object
    $('#logindiv').hide(); //hide the interface
    /*
    change the language according  to check box 
    update

    */
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greetings', true).log();
});
