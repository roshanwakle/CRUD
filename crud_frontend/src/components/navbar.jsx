import {AppBar, Toolbar, makeStyles} from "@material-ui/core";
import { NavLink } from "react-router-dom";
const customCSS = makeStyles( {
    header :{
        background: `black`,
    },
    tabs : {
        color: 'white',
        textDecoration: 'node',
        margin:20,
        fontSize:20
    }
})
const NavBar = () =>{
    const csss = customCSS();
    return (
        <>
            <AppBar className={csss.header} position="static">
                <Toolbar>
                        {/* <NavLink className={csss.tabs} to={"/"} exact="true">Created By Mohit and Prathmesh </NavLink> */}
                        <NavLink className={csss.tabs} to={"all"} exact="true"> All User </NavLink>
                        <NavLink className={csss.tabs} to={"add"} exact="true">Add User </NavLink>
                </Toolbar>
            </AppBar>
        </> 
    )
}


export default NavBar;


