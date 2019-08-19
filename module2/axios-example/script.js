$( document ).ready(function() {
  
    let theForm = $('#searchForm');

   

    theForm.submit(function(e){
        e.preventDefault();

        let theDiv = $('#countries');
        // grab the div we wanna put stuff in
        theDiv.html('')
        //empty the div


        let searchTerm = $('#country-name').val()
        // grab the value of the search term from the input box

        axios.get('https://restcountries.eu/rest/v2/name/'+searchTerm)
        .then((result)=>{

            //we make an axios request to the url + the searchterm

            let theActualCountry = result.data[0];
            let theName = theActualCountry.name;
            let border = theActualCountry.borders;
            let capital = theActualCountry.capital;
            let language = theActualCountry.demonym;

            // we grab a bunch of values from the thing we get back from the axios call

    

            //then append a bunch of stuff to the div
          theDiv.append(`<h2> Name: ${theName} </h2>`);
          theDiv.append(`<br>`)
          theDiv.append(`<h5>Capital: ${capital} </h5> `)
          theDiv.append(`<p>Language: ${language} </p> `)
          theDiv.append('<h3>Borders</h3>')
          border.forEach((eachBorder)=>{
              console.log(eachBorder)
            theDiv.append(`<li> ${eachBorder} </li>`)
          })

        
          $('#country-name').val('')


        })
        .catch((err)=>{
            console.log(err);
        })





        

    })


    let characterForm = $('#new-char-form')

    characterForm.submit(function(e){
        e.preventDefault();

        let name = $('#name-name').val();
        let occupation = $('#occupation').val();
        let weapon = $('#weapon').val();


        axios.post('https://ih-crud-api.herokuapp.com/characters', {
            name: name,
            occupation: occupation,
            weapon: weapon
        })
        .then((result)=>{

            console.log(result);

            axios.get('https://ih-crud-api.herokuapp.com/characters')
            .then((allChar)=>{

                console.log(allChar)
                $('#blah').html('')

                allChar.data.reverse().forEach((eachChar)=>{

                    $('#blah').append(`<h6>${eachChar.name}</h6>`)
                })

                $('#name-name').val('');
               $('#occupation').val('');
                $('#weapon').val('');



            })
            .catch(()=>{

            })


        })
        .catch((err)=>{
            console.log(err);
        })



    })







}) // end document ready