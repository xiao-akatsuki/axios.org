# Minimal Example
*A little example of using Axios*

## Example

*Performing a `GET` request*

```java
// Make a request for a user with a given ID
Axios.get(
	"/user?ID=12345" 
).then(response ->{
	System.out.println(response);
});

// Optionally the request above could also be done as
Axios.get(
	"/user",
	new Request().add("ID", "12345") 
).then(value ->{
	System.out.println(value);
});
```