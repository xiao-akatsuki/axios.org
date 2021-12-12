# Minimal Example
*A little example of using Axios*

## Example

*Performing a `GET` request*

```java
Axios.get(
	"RollCall/people/axiosGet" 
).then(response ->{
	System.out.println(response);
});
```

```java
Axios.get(
	"RollCall/people/axiosGet",
	new Request().add("name", "xiaoXunYao") 
).then(value ->{
	System.out.println(value);
});
```