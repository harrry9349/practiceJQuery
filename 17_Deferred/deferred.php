<?php
header("Access-Control-Allow-Origin: *");
$data = new stdClass();
$flg = filter_input(INPUT_GET,'flg');
$data->result = $flg == 1 ? '処理成功' : '処理失敗';
echo json_encode($data);
