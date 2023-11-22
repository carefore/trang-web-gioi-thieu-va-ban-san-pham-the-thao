function addProduct() {
    // Lấy giá trị từ form
    var productName = $("#productName").val();
    var productPrice = $("#productPrice").val();
    var productDescription = $("#productDescription").val();

    // Kiểm tra nếu các trường không trống
    if (productName && productPrice && productDescription) {
        // Gửi dữ liệu lên server bằng Ajax
        $.ajax({
            type: "POST",
            url: "save_product.php",
            data: {
                productName: productName,
                productPrice: productPrice,
                productDescription: productDescription
            },
            success: function(response) {
                // Hiển thị thông báo
                alert("Sản phẩm đã được thêm thành công!");

                // Hiển thị sản phẩm mới thêm vào danh sách
                $("#productList").append("<div><strong>" + productName + "</strong> - $" + productPrice + "<p>" + productDescription + "</p></div>");

                // Xóa nội dung của form
                $("#productForm")[0].reset();
            }
        });
    } else {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
    }
}
