function addComment(comment, rating){
    if(arguments.length < 1){
        console.log("Args 1")
        return 1;
    }
    // let comment = document.querySelector(".textBox");
    let send = document.querySelector(".send");
    let commentMessage = document.querySelector(".commentMessage");
    let ratingChoice = document.querySelectorAll('input[name="rating"');
    let ratingMessage = document.querySelector(".ratingMessage");
    // let rating; //значение рейтинга 
    let x;

    function validateRating(rating){
        if(rating != null){
            console.log("Rating validated")
            return true;
        }
        else{
            console.log("Rating is not validated")
           return false; 
        }   
    }

    // функция проверки комментария 
    function validateComment(comm){
        if(comm !== " " && comm !== null){
            if(comm.length >= 3 && comm.length <= 100){
                console.log("Comment validated")
                return (true);
            }
        }
        else{
            console.log("Comment is not validated")
            return (false);
        } 
            
    }

    // при успешном заполнении всех полей
    if((validateComment(comment) == true) && (validateRating(rating) == true)){
            
            
            // let time = new Date();
            // let y = time.getFullYear();
            // let m = time.getMonth() + 1;
            // let d = time.getDate();

            // let hour = time.getHours();
            // let min = time.getMinutes();

            // let now = d + "." + m + "." + y + " - "+ hour + " : " + min;
            
            // let list = document.getElementById("list");
            // let list_item = document.createElement("li");
            // list_item.innerHTML = 
            // `
            // <span>
            // <p>${now}</p> 
            // </span>
            // <p>${comment}</p>
            // <p>Rating: ${rating}</p>
            // `;

            // list.append(list_item); 

        console.log(0);
        return 0; // при успешном добавлении 
    }
    console.log("Error 1");
    return 1;

}


module.exports = addComment;







