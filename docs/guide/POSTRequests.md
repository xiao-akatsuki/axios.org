# POST Requests

*How to perform POST requests with Axios*

**Performing a `POST` request**

```java
Axios.post(
	"/user",
	new Body().add("firstName", "Fred").add("lastName","Flintstone"),
).then(value ->{
	System.out.println(value);
});
```