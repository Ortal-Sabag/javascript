//using IIFE with () wrapper to trick the engine
// ; before is trick, using for if on the html you call moe library that doest finish with ; properly.

;(function(global, $){

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language); //using function contracture and new keyword.
        // new create empty object. and the function contracture initialize it.
    }

    /* supportedLangs, greetings, formalGreetings, logMessages are private cause it not oon the prototype*/
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
    
    /* all the methods */

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
        },
        HTMLGreeting:function (selector, formal){
            if(!$) {
                throw 'JQuery not loaded';
            }
            if (!selector) {
                throw 'Missing Jquery Selector'
            }

            var msg;
            if(formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

    /* initialized all the variable */
    Greetr.init = function (firstName, lastName, language){
        var self = this;
        self.firstName = firstName|| '';
        self.lastName  = lastName || '';
        self.language  = language || 'en';

        self.validate();
    }

    Greetr.init.prototype = Greetr.prototype; 
    //any object that created by Greetr.init , should point to greetr prototype chain.
    /* in that way need to defined only one object of methods for all instances */
    /* defined the prototype of  Greetr.init function as Greetr.prototype */


    global.Greetr = global.$G = Greetr; // $G('Ortal', 'sabag');  global.$G point to Greetr., also global.Greetr point to Greetr.


}(window, $ ));