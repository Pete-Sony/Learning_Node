# Fetch 
#### requires a  **Request object**  and it returns a ** Response Object**. 
This is how the fetch api works  
```const response = fetch(request)```  
Here the request is an api endpoint.  
```request = 'ApiEndPoint.com' z```  
The request also needs the method of the request along with the url.  
Such as GET or POST.  
That is the code is equivalent to
```
const request = 
new Request('SomeApi.com',{
    method: 'GET'
})
```

Fetch doesn't return a response object. It returns a promise which resolves into a response object eventually.