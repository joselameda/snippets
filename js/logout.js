$(document).on('ready', function(){
    var btnLogout = $('#btn-logout');
    var loading = $("#loading");

    btnLogout.click(function(event){
        event.preventDefault();
        loading.show();
        $.ajax({
            method: "GET",
            url: "http://localhost/snippet-api/index.php/login/logout",
            dataType: "json",
            success: function(response){
                window.location.replace(base_url);
            },
            error: function(error){
                alert(error);
            },
            complete: function(){
                loading.hide();
            }
        });
    });
});