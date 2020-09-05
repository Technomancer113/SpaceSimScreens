$(document).ready(function() {
  
    var server_ip   = "localhost";
    var server_port = "8080";
    
    var shieldsActive = false;

    $("button").on("click", function(event) {
        alert("Button clicked");
        shieldsActive = !shieldsActive;
        let command = "setShieldsActive("+shieldsActive+")";

        $.ajax({
            method: "GET",
            url: server_ip+":"+server_port+"/set.lua?"+command,
            data: {
                // this stays empty
            },
            success: function(data, status) {
                // success never runs AFAIK
            },
            error: function(data, status) {
                // TODO do a thing client-side
                //alert("Shields active: "+shieldsActive);
            }
        });
    });
});
