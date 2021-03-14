<?php
$data = array();
$data['email'] = filter_input(INPUT_GET, 'email');
$data['phone'] = filter_input(INPUT_GET, 'phone');
echo json_encode($data);