// let promise = new Promise((resolve , reject)=>{
//     let success = false;

//     if(success){
//         console.log("Success")
//     }else{
//         console.log("Reject")
//     }
// })

// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })


// let getData= function(){

//     let promise = new Promise((resolve , reject)=>{

//     })
// }

// getData()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


// async function getData(){


//     try{
//     let container = document.querySelector('.container');

//     const response  = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await response.json();


//     console.log(data[0].name)

//     let p = document.createElement('p');
//     p.textContent = data[0].name;

//     container.appendChild(p)
//     }catch(error){
//     console.log(error)
//     }





      
// }

// getData();









// async function getComment(){
    

//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/comments');
//     const data =await response.json();



//     console.log(data)

//     let container = document.querySelector('.container')

//     data.forEach(element => {
        
//         let p = document.createElement('p');
//           p.textContent = element.body;
//         container.appendChild(p)
//     });



//     }catch(error){
//         console.log("Something went wrong !")
//     }
// }

// getComment()




fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,

    }),
    headers: {
        'content-type': 'application/json',
    },
})

.then((response)=>response.json())
.then((json)=>console.log(json));