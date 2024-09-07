(function(global, $){

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es']; // Greetr.init has access to this variable cause the closure
    
    var greetings = {
        en : 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en : 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    

    Greetr.prototype = {
        fullName: function () {
            return this.firstName + ' '+ this.lastName;
        }, 
        validate: function () {
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        greeting: function(){
            return greetings[this.language] + " " + this.firstName + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet: function(formal){
            var msg;
            if (formal){
                msg= this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if(console){
                console.log(msg)
            }
            //make it chainable
            return this;
        },
        log: function() {
            if(console){
                console.log(logMessages[this.language] + ": " + this.fullName())

            }
            return this;
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this;
        }

    };

    Greetr.init = function (firstName, lastName, language){
        var self = this;
        self.firstName = firstName|| '';
        self.lastName  = lastName || '';
        self.language  = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype; //any object that created by Greetr.init , should point to greetr prototype chain.

    global.Greetr = global.$G = Greetr;


}(window, $ ));