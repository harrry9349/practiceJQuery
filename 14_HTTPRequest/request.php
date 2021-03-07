<?php
$lastname = filter_input(INPUT_GET, 'lastname');
$firstname = filter_input(INPUT_GET, 'firstname');
echo htmlspecialchars($lastname . $firstname);