// Async Functions with randomuser.me API
// ----------------------------------------------------

// Define a function called fetchUserData(url)
//    - It should take a URL as a parameter
//    - Use fetch() and await the response
//    - Convert the response to JSON
//    - Log out the JSON or specific info (like name or country)

async function fetechUserData(url){
    const r = await fetch(url)
    const d = await r.json()
    console.log(d)
}


// ----------------------------------------------------
// Create a variable for each request below (reqUrl1, reqUrl2, etc.)
// Then call your fetchUserData() function with each one.



// 1 URL to Get 8 Random Users
// Call the fetchUserData function with this URL

let url1 = "https://randomuser.me/api/?results=8"
fetechUserData(url1)

// 2 URL to Get a Random User from Poland
// Call the fetchUserData function with this URL



let reqUrl1 = 'https://randomuser.me/api/?nat=ca';
fetechUserData(reqUrl1)


// 3 URL to Get a Random User that’s Male
// Call the fetchUserData function with this URL

let req = "https://randomuser.me/api/?gender=male"

fetechUserData(req)
// 4 URL to Get a Random User while Excluding Their Email
// Call the fetchUserData function with this URL


let req1 = "https://randomuser.me/api/?exc=email"

fetechUserData(req1)
// 5 Get 5 Female Users from the Colombia
// Call the fetchUserData function with this URL


let rr ="https://randomuser.me/api/?results=5&gender=female&nat=co"
fetechUserData(rr)

