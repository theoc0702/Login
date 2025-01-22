 $(document).ready(function() {
    $(".errorall").hide();
    $(".Mailerror").hide();
    $(".Passworderror").hide();
    $('#login-btn').click(function(e) {
        e.preventDefault();

        const email = $("#email").val();
        const password = $("#password").val();

        if (email.length === 0) {
            $("#email").next(".Mailerror").show();
        } else {
            $("#email").next(".Mailerror").hide();
        }

        if (password.length < 8) {
            $("#password").next(".Passworderror").show();
            } else {
                 $("#password").next(".Passworderror").hide();
            }
        
            if (email.length === 0 && password.length < 8 ) {
                $(".Mailerror").hide();
                $(".Passworderror").hide();
                $(".errorall").show();
            }

            else{
                window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran";
            }

        console.log(`Email length: ${email.length}`);
        console.log(`Password length: ${password.length}`);
    });
});
