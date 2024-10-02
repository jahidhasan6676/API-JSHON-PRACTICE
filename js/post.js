function loadingPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(copy){
    const userPost = document.getElementById('user-post');
    for(const post of copy){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4> user: ${post.userId} </h4>
        <h4> id: ${post.id} </h4>
        <h3> post title: ${post.title} </h3>
        <h5> post description: ${post.body} </h5>
        
        `;
        userPost.appendChild(div);
    }
}
loadingPost();


function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}