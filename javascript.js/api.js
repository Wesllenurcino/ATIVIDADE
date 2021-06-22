//const searchform2 = document.querySelector('#searchform2')
const nameCompany = document.querySelector('#company2')
//const companyElement = document.querySelector('#company')
//const titleElement = document.querySelector('#title')
//const categoryElement = document.querySelector('#category')
//const salaryElement = document.querySelector('#salary')
//const jobtypeElement = document.querySelector('#jobtype')
//const publicationElement = document.querySelector('#publication')
//const imagemprofileElement2 = document.querySelector ('#imagemprofile2')


//searchform2.addEventListener('submit' ,  function(evt){
   // evt.preventDefault()
  //  fetchUserData(nameCompany.value)
    


        
//})

    //async function fetchUserData(nameCompany) {
        fetch('https://remotive.io/api/remote-jobs?limit=3') .then(function(resposta){
        resposta.json() .then (function(dados){

        

        //nameCompany.innerHTML = dados.jobs[1]
        //imagemprofileElement2.src = dados[0].company_logo_url
        

        console.log(dados.jobs[0])
        //console.log(dados[0].company_logo_url)
        })

    })
    


