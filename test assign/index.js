let counter = 0; // Move the counter outside the function to make it accessible globally

function check_validation() {
    counter = 0;

    $("#formid .required_field").each(function (index, item) {
        let item_val = $(item).val();
        let item_name = $(item).attr("name");

        $(item).prev(".error_message").remove();
        $(item).css("border", "1px solid #ced4da");

        if (item_val.trim() === '') {
            $(item).before("<span class='error_message'>This field is required</span>");
            $(item).css("border", "3px solid red");
            counter++;
        } else {
            if (item_name === "list-name") {
                
            }
        }
    });

    return counter === 0;
}


$(document).ready(function () {
    $("#formid").on("submit", function (e) {
        e.preventDefault();
        let isFormValid = check_validation();

        if (isFormValid) {
            
        }
    });
});


$("input").on("input", function () {
    $(this).prev(".error_message").remove();
    $(this).css("border", "1px solid #ced4da");
    let item_val = $(this).val();
    let item_name = $(this).attr("name");

});

$(document).ready(function() {
    $(".submit-btn").on("click", function() {
        
        var todoText = $(".todo-input").val();
        var todoLink = $(".todo-input").val();

        

       var todoItem = $("<li><a></a></li>").attr("href", todoLink).text(todoText);
        var deleteButton = $("<button></button>").addClass("delete-btn").text("Delete");
        todoItem.append(deleteButton);

        $(".todo-list").prepend(todoItem);
        
        $(".todo-input").val("");
    });

    $(document).on("click", ".delete-btn", function() {
        $(this).closest("li").remove();
    });
});
