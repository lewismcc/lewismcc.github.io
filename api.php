<?php

/*
	Make sure that the response is
	being returned in the JSON format
*/
header("Content-type: application/json");

/*
	Set URL
*/
$uri = "https://api.mercedes-benz.com/dealer_tryout/v1/dealers";
$parameters = "apikey=Tyt82ndiKG0AdH8TCqe001ROh7RsGOKB";

try {

	// Initialize new curl object
	$curl = curl_init();

	// Set options for the curl object
	curl_setopt_array($curl, [
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => $uri . "?" . $parameters
	]);

	// Execute the request and attach
	// the response to a variable
	$resp = curl_exec($curl);

	if ($resp !== FALSE) {
		
		// Close the request
		curl_close($curl);

		// Return the response
		echo $resp;

	} else {

		exit("The request could not be executed");

	}

}
catch (exception $e) {

	// Terminate the script and inform
	// the user about what went wrong
    exit($e);

}
finally {

	// echo "This script has been executed.";

}
?>
