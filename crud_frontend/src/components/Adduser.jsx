import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useNavigate} from "react-router-dom";

const userStyle = makeStyles( {
    container : {
        width : "50%",
        margin : "5% 0 0 25%",
        "& > *" :{
            marginTop:20,
        }
    }
})

const initialValue ={
    name :"",
    username:"",
    email:"",
    phone :""
}
const Adduser = () =>{
    const [user,setUser] = useState(initialValue);
    const {name,username,email,phone} = user;
    const classes = userStyle();
    const navigate = useNavigate();


    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails = async () =>{
        await addUser(user);
        navigate("/all");
    }
    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h3">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) =>onValueChange(e)} name="name" value={name}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) =>onValueChange(e)} name="username" value={username}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>E-Mial</InputLabel>
                <Input onChange={(e) =>onValueChange(e)} name="email" value={email}></Input>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) =>onValueChange(e)} name="phone" value={phone}></Input>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add User </Button>
            </FormControl>
        </FormGroup>
        </>
    )
}

export default Adduser;