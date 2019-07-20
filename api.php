<?php
/*
	Make sure that the response is
	being returned in the JSON format
*/
header("Content-type: application/json");
header("Accept: application/json");

/*
	The script will only be initialized
	when the request is made by using GET
	method and includes latitude and longtitude
*/

if (isset($_GET["latitude"]) && isset($_GET["longitude"])) {

	/*
		This sets the url parameters
		is takes in the uri destination as well as 
		the paramaters that allow us to pull the information we 
		need and base it off the 
		latitude, longitude, range and only select 1 object
	*/
	$uri = "https://api.mercedes-benz.com/dealer/v1/dealers";
	$key = "5bf86c14-f7b7-4b24-8f39-26f57de01b2c";
	$lat = urlencode($_GET["latitude"]);
	$lon = urlencode($_GET["longitude"]);
	$rad = 50;

	try {

		// Initialize new curl object
		$curl = curl_init();

		// Set options for the curl object
		curl_setopt_array($curl, [
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => $uri . "?apikey=" . $key . "&latitude=" . $lat . "&longitude=" . $lon . "&radiusValue=" . $rad 
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

} else {

	exit("Inproper GET parameters");

}
?>
