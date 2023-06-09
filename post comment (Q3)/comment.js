function setup() {
    const postButton = document.getElementById('postComment');
    const commentInput = document.getElementById('comment');
    const commentList = document.getElementById('commentList');
  
    postButton.addEventListener('click', function() {
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
      }
    });
  }
  
  // Call the setup function when the page has finished loading
  window.addEventListener('DOMContentLoaded', setup);
  