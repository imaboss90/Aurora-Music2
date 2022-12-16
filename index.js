function uploadImage(img) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();
  
    fileInput.addEventListener("change", function() {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function() {
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  