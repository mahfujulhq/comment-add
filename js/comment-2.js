//add event listener post button 
document.getElementById('post-button').addEventListener('click', userComment);

function userComment(){
    //get comment box
    const commentBox = document.getElementById('comment-box');
    //crete new comment
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    //has given some style of new comments..
    newComment.style.backgroundColor = 'lightblue';
    newComment.style.padding = '10px';

    //add new comment as append child
    const commentSection = document.getElementById('comment-section');
    commentSection.appendChild(newComment);

    //clear comment box text/value
    commentBox.value = '';
};
