$(document).on('ready', function(){
    var btnLogin = $('#btn-login');
    var form = $('#login-form');
    var errorLabel = $('#error');
    var loading = $("#loading");
    loading.hide();
    btnLogin.click(function(event){
        event.preventDefault();
        loading.show();
        var data = form.serializeArray();
        var email = data[0].value;
        var password = data[1].value;

        $.ajax({
            method: "POST",
            url: "http://localhost/snippet-api/index.php/login",
            data: {
                email: email,
                password: password
            },
            dataType: "json",
            success: function(response){
                if(response.error){
                    return errorLabel.html(response.error);
                }
                window.location.replace(base_url);
            },
            error: function(error){
                errorLabel.html(error);
            },
            complete: function(){
                loading.hide();
            }
        });
    });
});