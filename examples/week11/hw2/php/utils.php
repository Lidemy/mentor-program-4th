<?php
  require_once("conn.php");

  function getUserFromUsername($username) {
    global $conn;
    $sql = sprintf(
      "select * from users where username = '%s'",
      $username
    );
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row; // username, id, nickname, role
  }

  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }

?>
