var userID;
firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        console.log(user.uid);

        userID = user.uid;
        firebase.firestore().collection("users").doc(user.uid).get()
            .then((snapshot) => {
                var username = document.getElementById("Name")
                var currentUser = snapshot.data();
                console.log(currentUser.uid);

                username.innerHTML = currentUser.Name;

            })

    }

});



function logOut() {
    firebase.auth().signOut()


        .then((res) => {
            window.location = "../login/login.html"
        })
        .catch((error) => {
            console.log(error);
        });
}

let popped = 0;
let life =4;
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-red"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    } else if(e.target.className === "balloon")  {
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "fail!";
        popped++;
        life--;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
