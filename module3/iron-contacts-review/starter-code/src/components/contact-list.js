import React from 'react';

import blah from '../contacts.json';
// you can name it whatever you want when you import it
// the important part is the relative path
// this is only true for json files because they do not have a default exported value



class ContactList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            visibleContacts: blah.slice(0,5),
            allContacts: blah.slice(5),
            asc: true,
        }
    }

    showContacts = () =>{
        return this.state.visibleContacts.map((eachC, index)=>{
            return(
                <tr key={index}>
                    <td> 
                        <img style={{width: '100px'}} src={eachC.pictureUrl} />
                    </td>
                    <td>{eachC.name}</td>
                    <td>{eachC.popularity}</td>
                    <td>
                        <button onClick={()=>{this.deleteContact(index)}}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }

    deleteContact = (theOneToDelete) =>{

        let copy = [...this.state.visibleContacts];

        copy.splice(theOneToDelete, 1);

        this.setState({visibleContacts: copy});
    }


    addRandom = () =>{
            let visible =[...this.state.visibleContacts];
            let others = [...this.state.allContacts];

            let randomNum = Math.floor(Math.random() * others.length)

            visible.unshift(...others.splice(randomNum,1))
            // this splices it out of the others array
            // but since .splice returns the values that were deleted
            // we can also push them into the other array at the same time

            this.setState({
                visibleContacts: visible,
                allContacts: others,
            })

    }


    sortBySomething = (whatToSortBy) =>{
        let copy = [...this.state.visibleContacts];
        if(this.state.asc){

            copy.sort((a,b)=>{
                console.log(a[whatToSortBy], b[whatToSortBy])

                if(a[whatToSortBy] > b[whatToSortBy]){
                    return 1
                } else if(b[whatToSortBy] > a[whatToSortBy]){
                    return -1
                } else{
                    return 0
                }
            })


        } else {
            copy.sort((a,b)=>{
                if(a[whatToSortBy] > b[whatToSortBy]){
                    return -1
                } else if(b[whatToSortBy] > a[whatToSortBy]){
                    return 1
                } else{
                    return 0
                }
            })
        }

      

        this.setState({
            visibleContacts: copy,
            asc: !this.state.asc,
        })



    }


    render(){
        console.log(this.state)
        return(
            <div>

                <button onClick={this.addRandom}>
                    Add Random Contact
                </button>

                <button onClick={()=>{this.sortBySomething('name')}}>
                   Sort By Name
                </button>


                <button onClick={()=>{this.sortBySomething('popularity')}}>
                   Sort By Popularity
                </button>


                <table>
                    <tbody>

                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.showContacts()}

                    </tbody>
                </table>
                
            </div>
        )
    }





}

export default ContactList;