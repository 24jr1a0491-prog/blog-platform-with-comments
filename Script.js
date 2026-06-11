function addPost(){

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === ""){
        alert("Fill all fields");
        return;
    }

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>

        <button onclick="editPost(this)">Edit</button>
        <button onclick="deletePost(this)">Delete</button>

        <h4>Comments</h4>

        <input type="text" class="comment-box" placeholder="Write comment">

        <button onclick="addComment(this)">Add Comment</button>

        <ul></ul>
    `;

    document.getElementById("posts").appendChild(post);

    document.getElementById("title").value="";
    document.getElementById("content").value="";
}

function deletePost(btn){
    btn.parentElement.remove();
}

function editPost(btn){

    let post = btn.parentElement;

    let title = prompt(
        "Edit Title",
        post.querySelector("h2").innerText
    );

    let content = prompt(
        "Edit Content",
        post.querySelector("p").innerText
    );

    if(title){
        post.querySelector("h2").innerText = title;
    }

    if(content){
        post.querySelector("p").innerText = content;
    }
}

function addComment(btn){

    let post = btn.parentElement;

    let commentInput =
        post.querySelector(".comment-box");

    let text = commentInput.value;

    if(text==="") return;

    let li = document.createElement("li");

    li.innerText = text;

    post.querySelector("ul").appendChild(li);

    commentInput.value="";
      }
