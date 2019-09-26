import React from 'react';



class Navbar extends React.Component{

    render(){
        return(
            <div>
                <a href="#">Home</a>


            {!this.props.theUser && 
                <button>Login</button>
            }

            {this.props.theUser && 
                <button onClick = {this.props.doLogout} >Logout</button>
            }

            </div>
        )
    }





}


export default Navbar;