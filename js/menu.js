/**
 * Created by JALAL on 7/2/14.
 */
$(document).ready(function(){


    var content  = $("#row-content");

    $("a.navlink").click(function(e){
        e.preventDefault();
        content.html('');
        var linkurl     = $(this).attr("href");
        var linkhtmlurl = linkurl.substring(1, linkurl.length);
        var imgloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

        $(function() {
            window.scrollTo(0, 1);
        });
        content.html(imgloader);

        content.load(linkhtmlurl, function(responseTxt,statusTxt,xhr) {
            content.trigger('create');
            if(statusTxt=="success")
            {

            }else if(statusTxt=="error"){
//                alert("Error: "+xhr.status+": "+xhr.statusText);
            }
        });


    });


});