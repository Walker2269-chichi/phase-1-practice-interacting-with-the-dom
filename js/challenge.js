document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let intervalId = startCounter();
  
    function startCounter() {
      return setInterval(() => {
        counter.textContent = parseInt(counter.textContent) + 1;
      }, 1000);
    }
  
    // Increment and Decrement Counter
    document.getElementById("plus").addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) - 1;
    });
  
    // "Like" a Number
    const likes = {};
  
    document.getElementById("heart").addEventListener("click", () => {
      const currentCount = counter.textContent;
      likes[currentCount] = (likes[currentCount] || 0) + 1;
  
      const likesList = document.querySelector(".likes");
      let likeItem = document.querySelector(`[data-number='${currentCount}']`);
  
      if (!likeItem) {
        likeItem = document.createElement("li");
        likeItem.dataset.number = currentCount;
        likesList.appendChild(likeItem);
      }
  
      likeItem.textContent = `${currentCount} has been liked ${likes[currentCount]} time(s).`;
    });
  
    // Pause and Resume Counter
    const pauseButton = document.getElementById("pause");
  
    pauseButton.addEventListener("click", () => {
      if (pauseButton.textContent === "pause") {
        clearInterval(intervalId);
        disableButtons(true);
        pauseButton.textContent = "resume";
      } else {
        intervalId = startCounter();
        disableButtons(false);
        pauseButton.textContent = "pause";
      }
    });
  
    function disableButtons(disable) {
      document.getElementById("plus").disabled = disable;
      document.getElementById("minus").disabled = disable;
      document.getElementById("heart").disabled = disable;
    }
    document.addEventListener("DOMContentLoaded", () => {
        // Comment submission functionality
        document.getElementById("comment-form").addEventListener("submit", (event) => {
          event.preventDefault(); // Prevent the default form submission behavior
      
          const commentInput = document.getElementById("comment-input");
          const commentText = commentInput.value.trim();
      
          if (commentText) {
            const commentList = document.getElementById("list");
            const commentItem = document.createElement("p");
            commentItem.textContent = commentText;
      
            commentList.appendChild(commentItem);
            commentInput.value = ""; // Clear the input field after submission
          }
        });
      });
    });
  