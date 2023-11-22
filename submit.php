<?php
// Kết nối vào cơ sở dữ liệu
$servername = "your_database_servername";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Lấy dữ liệu từ request
$productName = $_POST["productName"];
$productPrice = $_POST["productPrice"];
$productDescription = $_POST["productDescription"];

// Chèn dữ liệu vào cơ sở dữ liệu
$sql = "INSERT INTO products (name, price, description) VALUES ('$productName', '$productPrice', '$productDescription')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Đóng kết nối
$conn->close();
?>
