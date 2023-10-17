document.addEventListener("DOMContentLoaded", function () {
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
    
    xhr.send();
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            
            var data = JSON.parse(xhr.responseText);
            
            var postList = document.getElementById("post-list");
            
            data.forEach(function (post) {
                var listItem = document.createElement("li");
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        } else {
            console.error("Ошибка при получении данных: " + xhr.status);
        }
    };
    
    xhr.onerror = function () {
        console.error("Ошибка при выполнении запроса");
    };
});
