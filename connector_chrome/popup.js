//bind the button click
$(function(){
	// when the jquery loads, try to reload all fields that have values
	loadDefaults();

	$('#joinmeConnector').children('#dialBtn').click(function(){
		var yourNumber = $('#yourNumber').val();
		var meetingNumber = $('#meetingNumber').val();
		var conference = $('#conferenceNumber').val();
		var scriptLocation = $('#scriptLocation').val();

		// clean the input
		meetingNumber = cleanNumber(meetingNumber);
		yourNumber = cleanNumber(yourNumber);		
		conference = cleanNumber(conference);

		if ((meetingNumber=='') || (yourNumber=='') || (scriptLocation=='')){
			alert('You must enter your number, the meeting number and the script location');
			return;
		}

		// save the values
		saveDefaults();

		$('#joinmeConnector').children('#dialBtn').val('Dialing...');
		$.ajax({url: scriptLocation+"/connector.php?myNumber="+yourNumber+"&joinme="+meetingNumber+"&conference="+conference, 
				success: function(data){
					$('#joinmeConnector').children('#dialBtn').val('Call Started');
				}
		});
	});
});

function cleanNumber(number){
	number = number.replace(/\./g,'');
	number = number.replace(/\+/g,'');
	number = number.replace(/\-/g,'');

	return number;
}

function loadDefaults(){
	var values = new Array('yourNumber','meetingNumber','conferenceNumber','scriptLocation');

	chrome.storage.local.get(values , function (result) {
		$('#yourNumber').val(result.yourNumber);
		$('#meetingNumber').val(result.meetingNumber);
		$('#conferenceNumber').val(result.conferenceNumber);
		$('#scriptLocation').val(result.scriptLocation);
	});
}

function saveDefaults(){
	chrome.storage.local.set({'scriptLocation': $('#scriptLocation').val(), 'yourNumber': $('#yourNumber').val(), 'meetingNumber':$('#meetingNumber').val(), 'conferenceNumber': $('#conferenceNumber').val()});
}
