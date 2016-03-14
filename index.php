<?php
    $name = (!empty($_POST['name']))?$_POST['name']:'';
    $age = (!empty($_POST['age']))?$_POST['age']:'';
    $result = Array(
        "status"=>0,
        "list"=>array(
            "name"=>$name,
            "age"=>$age
        )
    );
    echo json_encode($result);
?>