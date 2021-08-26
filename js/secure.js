!function() {

    var timelimit = 50;

    setInterval(function() {

        var starttime = new Date();

        debugger;

        if (new Date() - starttime > timelimit) {

            console.log("dsadsada");


        } else {

        }

    }, 500)

}();

with ((window && window.console && window.console._commandLineAPI) || {}) {
    (function(){

        var _z = console;
        Object.defineProperty( window, "console", {
            get : function(){
                if( _z._commandLineAPI ){
                    throw "Sorry, Can't execute scripts!";
                }
                return _z;
            },
            set : function(val){
                _z = val;
            }
        });

    })();

}

