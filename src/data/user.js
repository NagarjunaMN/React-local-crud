import { toast } from "react-toastify";
const users = JSON.parse(localStorage.getItem('users')) ||[]

//register
const registerUser = async (user) => {
    console.log("register",user)
    const extEmail = users.find((item) => item.email === user.email)
    const extMobile = users.find((item) => item.mobile === user.mobile)

    if(extEmail){
        toast.warning(`${user.email} already exists`)
    }else if (extMobile){
        toast.warning(`${user.mobile} already exists`)
    }else{
        users.push(user)
        saveUsers(users)
        toast.success(`Hi! ${user.name}, You have successfully registered`)
        window.location.href = "/login"
    }
};

//save data
const saveUsers = (data) => {
    localStorage.setItem("users",JSON.stringify(data))
}

//login logic
const loginUser = async (user) =>{
    const extUser = users.find((item) => item.email === user.email)
    if(!extUser){
        toast.warning(`${user.email} doesn't exist`)
    }else{
        if(extUser.password === user.password){
            localStorage.setItem("loginStatus",true);   
            toast.success("User Login Success");
            window.location.href = "/"
        }else{
            toast.warning("Passwords are not matching")
        }
    }
}
//logout handler
const logoutUser = async () =>{
    if(localStorage.getItem('loginStatus') == "true"){
        localStorage.removeItem('loginStatus');
        toast.success("Successfully Logged out")
        window.location.href = "/"
    }
}
export {registerUser,loginUser,logoutUser} // const export