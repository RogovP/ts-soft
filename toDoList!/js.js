$(document).ready(function () {
  if(localStorage.getItem("visibility") === "visible"){
      $("#divDeleteEnd").css({"visibility":"visible"});
  }
  document.querySelector("input").focus();
    for (var i = 0; i < localStorage.length; i++) {
        var a = "";
        var taskID = "task-" + i;
        var checkID = "check-"+i;
        if(localStorage.getItem(taskID) != null){
          if(localStorage.getItem(checkID) == "true"){
            a = "checked";
          }
          $(".taskList").append("<li id='" + taskID + "'>" + "<input onclick='forCheck()' id='boxes' type='checkbox'"+a+"/>"+"<lable>"+localStorage.getItem(taskID)+ "</lable>" +"<span class='del'>&#935;</span>"+ "</li>");
        }
    }
$(".del").on("click", function (event) {
  if(confirm("Удалить выбранную задачу?")===true){
       var taskID = $(this).parent().attr("id");
        localStorage.removeItem(taskID);
    $(this).parent().remove();
  }
    });
});

function end() {
  $("#active").css({"border":"1px solid #efefef"});
  $("#alls").css({"border":"1px solid #efefef"});
  $("#end").css({"border":"1px solid #FA8072"});
  var list = $(".taskList");
  var children = list.children();
  for (var i =0;i<children.length;i++){
    if (children[i].getElementsByTagName("input")[0].checked === true) {
     children[i].style.display = "block";
    }
    else{
      children[i].style.display = "none";
    }
  }
}
function active() {
  $("#active").css({"border":"1px solid #FA8072"});
  $("#alls").css({"border":"1px solid #efefef"});
  $("#end").css({"border":"1px solid #efefef"});
  var list = $(".taskList");
  var children = list.children();
  for (var i =0;i<children.length;i++){
    if (children[i].getElementsByTagName("input")[0].checked === true) {
      children[i].style.display = "none";
    }
    else{
     children[i].style.display = "block";
    }
  }
}
function alls(){
  $("#active").css({"border":"1px solid #efefef"});
  $("#alls").css({"border":"1px solid #FA8072"});
  $("#end").css({"border":"1px solid #efefef"});
  var list = $(".taskList");
  var children = list.children();
  for (var i =0;i<children.length;i++){
     children[i].style.display = "block";
  }
}
$(".taskEntryForm").submit(function () {
        if ($("#taskInput").val() !== "") {
          var UL = document.querySelectorAll("ul.taskList li");
  for (var i =0;i<UL.length;i++) {
  }
            var taskID = "task-" + i;
          var checkID = "check-" + i;
            var taskMessage = $("#taskInput").val();
            localStorage.setItem(taskID, taskMessage);
            localStorage.setItem(checkID, "false");
            $(".taskList").append("<li class='task' id='" + taskID + "'>" + "<input onclick='forCheck()' id='boxes' type='checkbox' />"+ "<lable>"+taskMessage+"</lable>" +"<span class='del'>&#935;</span>"+"</li>");
            var task = $("#" + taskID);
            $("#taskInput").val("");
            i++;
        }
   else {
     alert("Пустая строка!");
   }
  location.reload();
        return false;
    });

function forCheck(){
  var a = document.querySelectorAll("input#boxes");
  var q = 0;
  for (var i =0;i<a.length;i++){
   if(a[i].checked === true) {
    localStorage.setItem("check-"+i, "true");
     q++;
  }
    else {
      localStorage.setItem("check-"+i, "false");
    }
    if(q > 0){
      $("#divDeleteEnd").css({"visibility":"visible"});
      localStorage.setItem("visibility","visible")
    }
    else {
      $("#divDeleteEnd").css({"visibility":"hidden"});
      localStorage.setItem("visibility","hidden")
    }
}
}
function deleteChecked(){
  if(confirm("Удалить все завершенные задачи?")===true){
  var a = document.querySelectorAll("input#boxes");
   for (var i =0;i<a.length;i++){
   if(a[i].checked === true) {
      var taskID = $(a[i]).parent().attr("id");
        localStorage.removeItem(taskID);
    $(a[i]).parent().remove();
     $("#divDeleteEnd").css({"visibility":"hidden"});
     localStorage.setItem("visibility","hidden");
  }
}
  }
}