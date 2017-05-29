$(document).on('ready', function(){
    var loading = $("#loading");
    $.ajax({
        method: "GET",
        url: "http://localhost/snippet-api/index.php/login/is_logged",
        dataType: "json",
        success: function(response){
            if(!response.data){
                window.location.replace(base_url+"login");
                return;
            }
            loading.hide();
        },
        error: function(error){
            alert(error);
            window.location.replace(base_url+"login");
        },
        complete: function(){
            loading.hide();
        }
    });
});