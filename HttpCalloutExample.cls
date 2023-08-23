public class HttpCalloutExample{
    public static void makeHttpCallout() {
        // Define the endpoint URL and parameters
        String endpoint = 'https://postman-echo.com/get';
        String params = 'foo1=bar1&foo2=bar2';
        String fullUrl = endpoint + '?' + params;
        
        // Create an HTTP request
        HttpRequest request = new HttpRequest();
        request.setEndpoint(fullUrl);
        request.setMethod('GET');
        
        // Create an HTTP client
        Http http = new Http();
        
        // Make the HTTP request and get the response
        HttpResponse response = http.send(request);
        
        // Print the response body to the debug logs
        System.debug('Response Body: ' + response.getBody());
    }
}