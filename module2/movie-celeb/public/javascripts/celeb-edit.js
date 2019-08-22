document.addEventListener('DOMContentLoaded', () => {


   let inputs = document.querySelectorAll('#edit-form input')
//    grab all three inputs inside form

  for(let i=0; i < inputs.length; i++){


    inputs[i].onkeyup = function(){
        // this function will run anytime you type in a letter into any of the 3 inputs


        let name = document.getElementById('name-thing').value;
        let occupation = document.getElementById('occupation-thing').value;
        let catchphrase = document.getElementById('catchphrase-thing').value;
        // grab the values from the inputs

        let id = document.getElementById('secret').value;
        // grab id from hidden input

// make axios request and send the correct stuff in req.body
      axios.post('/api/celebs/edit/'+id, {
          theName: name,
          theOccupation: occupation,
          theCatchphrase: catchphrase
      })
      .then((res)=>{

        console.log(res)

        // make another axios request to get new updated info of the celebrity
        axios.get('/api/celebs/details/'+id)
        .then((theResponse)=>{


            // take the new updated info and put it on the page
           let updatedCeleb = theResponse.data;
            document.getElementById('actual-name').innerText = updatedCeleb.name
            document.getElementById('actual-occupation').innerText = updatedCeleb.occupation
            document.getElementById('actual-catchphrase').innerText = updatedCeleb.catchphrase;




        })
        .catch((err)=>{
            console.log(err);
        })




      })


    }

  }






  
  }, false);