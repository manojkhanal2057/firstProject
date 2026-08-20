


async function getUser(){
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();

    console.log(data.users[0])
    let address = document.querySelector('#user-address-address');
    address.textContent = data.users[0].address.address;
    let userImg = document.querySelector('#user-image');
    userImg.src = data.users[1].image;
}
getUser()