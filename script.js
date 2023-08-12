function moveSearchElement(obj, evt) {
  var container = $(obj).closest(".general_box");
  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
  } else if (
    container.hasClass("active") &&
    $(obj).closest(".inner_box-input").length == 0
  ) {
    container.removeClass("active");
    container.find(".element_input").val("");
  }
}
