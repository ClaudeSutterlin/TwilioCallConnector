<?php 
	$number = $_GET['number'];
	$conferenceNumber = $_GET['conference'];
	echo '<?xml version="1.0" encoding="UTF-8"?>'.
		 '<Response><Say>Joining the conference</Say>'.
		 '<Dial callerId="NNNNNNNNNN"><Number sendDigits="'.$conferenceNumber.'#">'.$number.'</Number></Dial></Response>';
?>




