<?php

$host="localhost"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password 
$db_name="cricket"; // Database name 
$tbl_name="players"; // Table name 

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// username and password sent from form 

$A=$_GET['A'];



// To protect MySQL injection (more detail about MySQL injection)
$sql="SELECT * FROM $tbl_name WHERE country='$A'";

$result=mysql_query($sql);
$i=0;
while($row=mysql_fetch_array($result))
{
$stud_arr[$i]["id"] = $row["id"];
$stud_arr[$i]["name"] = $row["name"];
$i++;
}
$json = json_encode($stud_arr);
echo $json;

?>