let Login = (e) => {
    console.log(e);
    e.preventDefault();


    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var form = document.getElementById("needs-validation")
    form.classList.add("was-validated")
    if (!form) {
        return
    }
    
    if (!email || !password) {
        swal({
            title: "Bad job!",
            text: "Empty Input Fileds",
            icon: "error",
            button: "try Again",
        });
    } else {
        console.log(email);
        console.log(password);
        
    
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        swal({
                title: "Good job!",
                text: "Successfully Sign up",
                icon: "success",
                button: "Next",
            })
            .then((value) => {
    window.location.href = "../game/game.html";

            })
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal({
            title: "Login Fail !",
            text: errorMessage,
            icon: "error",
            button: "Try Again",
        })
    })




}