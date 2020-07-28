
$(document).ready(function () {

$('#myForm').validate({ 
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 5
        },
        c_password: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        agree : {
            required: true,
        }
    },
    messages : {
        email : {
           required: "please enter email",
            
    },
        password :{
            required : "enter confirm password",
            minlength : "minimum length of password is 5"
        }, 
        c_password :{
            required : "enter confirm password",
            minlength : "minimum length of password is 5",
            equalTo : "plz enter same password"

        }, 
        agree :{ required : "please tick" } 
    },
    submitHandler: function () { // for demo
        alert('valid form submitted'); // for demo
        return false; // for demo
    }
});

});