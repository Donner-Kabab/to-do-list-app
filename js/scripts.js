function newItem() {
  //Add a new item
  let li = $("<li><li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if ($("#input").val() === "") {
    alert("You must write something");
  } else {
    let list = $("list");
    list.append(li);
  }

  //cross out an item
  li.on("click", function () {
    li.addClass("strike");
  });

  //add the "X" button (delete)
  let deleteX = $("<deleteX></deleteX>");
  $(deleteX).append("X");
  li.append(deleteX);

  //from css class delete
  deleteX.on("click", function () {
    li.addClass("delete");
  });

  //reorder items
  $("#list").sortable();
}
