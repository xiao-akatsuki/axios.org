# Getting Started

## Prerequisites

- [JDK 8+](https://www.oracle.com/java/)
- [maven 3.6.3+](https://maven.apache.org/) (Optional)

## simple using

- **Step 1**

<CodeGroup>
  <CodeGroupItem title="maven" active>

```xml
<dependency>
  <groupId>io.github.xiao-organization</groupId>
  <artifactId>axios</artifactId>
  <version>1.0.0</version>
</dependency>
```

  </CodeGroupItem>

  <CodeGroupItem title="Gradle">

```xml
implementation 'io.github.xiao-organization:axios:1.0.0'
```

  </CodeGroupItem>
</CodeGroup>

- **Step 2**

```java
Axios.get(
	"/user?ID=12345" 
).then(response ->{
	System.out.println(response);
});
```
