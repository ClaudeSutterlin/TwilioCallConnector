<?php
	require "twilio-php/Services/Twilio.php";
	 
	// set your AccountSid and AuthToken from www.twilio.com/user/account
	$AccountSid = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
	$AuthToken = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

	// Your twilio phone number
	$TwilioNumber = "XXX-XXX-XXXX";

	// The base URL to this source code, this will also be copied into your browser extension
	$BaseURL = 'http://claudesutterlin.com/twilio/';
	
	// sample call = http://claudesutterlin.com/twilio/connector.php?myNumber=XXXXXXXX&joinme=XXXXXXXXXX&conference=XXXXXXX
	$authorizedNumber = $_GET['myNumber'];
	$joinMeNumber = $_GET['joinme'];
	$conferenceNumber = $_GET['conference'];
	$twimlUrl = $BaseURL.'connectCall.php?number='.$joinMeNumber.'&conference='.$conferenceNumber;
	 
	// instantiate the twilio api
	$client = new Services_Twilio($AccountSid, $AuthToken);
	 
	$call = $client->account->calls->create(
	  $TwilioNumber, // From a valid Twilio number
	  $authorizedNumber, // Call this number
	  $twimlUrl
    );

    echo "Success";
?>