document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPost);
document.querySelector('#getGames').addEventListener('click', getGames);
document.querySelector('#addPost').addEventListener('submit', addPost);

function getText() {
    // fetch("data/sample.txt")
    //     .then(function(res) {
    //         return res.text();
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //     })
    //     .catch(function(err) {
    //         console.log(err)
    //     })

    //OR OR

    // fetch('sample.txt')
    // .then((res) =>{
    //     return res.text();
    // })
    // .then((data) => {
    //     console.log(data)
    // });

    //OR OR

    fetch('data/sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.querySelector('#output').innerHTML = data;
        })
        .catch((err) => console.log(err));
};

function getUsers() {
    fetch('data/users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            data.forEach((user) => {
                output += `
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
        </ul>
        `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err));
};

function getGames() {
    fetch('data/besttips.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h3 class="center" >Tips</h3>';
            data.forEach((tip) => {
                output += `
           <table>
                <th>
                    <td>ID</td>
                    <td>KICK OF TIME</td>
                    <td>HOME TEAM</td>
                    <td>HOME %</td>
                    <td>HOME ODD</td>
                    <td>AWAY TEAM</td>
                    <td>AWAY %</td>
                    <td>AWAY ODD</td>
                </th>
                <tr>
                    <td>${tip.id}</td>
                    <td>${tip.home_Team}</td>
                    <td>${tip.home_Percent}</td>
                    <td>${tip.home_Odd}</td>
                    <td>${tip.away_Team}</td>
                    <td>${tip.away_Odd}</td>
                    <td>${tip.away_Percent}</td>
                </tr>
           </table>
           `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err))
};


function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2>Posts</h2>';
            data.forEach((post) => {
                output += `
           <div>
                <h3>Title: ${post.title}</h3>
                <p>Name: ${post.body}</p>
           </div>
           `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err))
};


function addPost(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title: title, body: body })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}