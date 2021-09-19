let SignUp = (e) => {
    console.log(e);
    e.preventDefault();

    let email = document.getElementById("email").value;
    let Name = document.getElementById("Name").value;
    let password = document.getElementById("password").value;

    let form = document.getElementById("needs-validation")
    form.classList.add("was-validated")
    if (!form) {
        return
    }

    if (!email || !Name   || !password) {
        swal({
            title: "Bad job!",
            text: "Empty Input Fileds",
            icon: "error",
            button: "try Again",
        });
    } else {


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user

                console.log("SIGN UP SUUESSFULL");

                console.log(user.uid);

                firebase.firestore().collection("users").doc(user.uid).set({
                        email: email,
                        Name: Name,
                        uid: user.uid,
                        state: "player"

                    })
                    .then(function() {
                        console.log("Data Succesfull");
                    }).catch(error => {
                        console.log(error);
                    })


                swal({
                        title: "Good job!",
                        text: "Successfully Sign up",
                        icon: "success",
                        button: "Next",
                    })
                    .then((value) => {
                     window.location.href = "../login/login.html";
                    })

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);

                swal({
                    title: "Bad job!",
                    text: errorMessage,
                    icon: "error",
                    button: "Try Again",
                });
                // ..
            });


    }




}
