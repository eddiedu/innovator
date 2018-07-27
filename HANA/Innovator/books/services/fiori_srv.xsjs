var client, destination, request;

try {
	//Reading the destination properties
	destination = $.net.http.readDestination("Innovator.books.services", "fioriappslibrary");
	//Creating HTTP Client
	client = new $.net.http.Client();
	//Creating Request
	request = new $.web.WebRequest($.net.http.GET,
		"/InputFilterParam(InpFilterValue='1NA')/Results?$skip=0&$top=100&" +
		"$orderby=tolower(ApplicationComponent)%20asc,tolower(AppNameAll)%20asc&$" +
		"filter=substringof(%27%24SAP%20S%2f4HANA%24%27,releaseGroupTextCombined)%20and%20substringof(%27%24SAP%20S%2f4HANA%201709%24%27,PVBackendCombined)&$inlinecount=allpages&$format=json"
	);
	client.request(request, destination);
	//Getting the response body and setting as output data
	$.response.setBody(client.getResponse().body.asString());
} catch (errorObj) {
	$.response.setBody(JSON.stringify({
		ERROR: errorObj.message
	}));
}