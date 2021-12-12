# POST Requests

*How to perform POST requests with Axios*

## Exception

*Performing a `POST` request*

```java
Axios.post(
	"demo/base/remove"
).then(value ->{
	System.out.println(value);
});
```



```java
Axios.post(
	url,
	new Body().add("name", "xiaoXunYao"),
).then(value ->{
	System.out.println(value);
});
```