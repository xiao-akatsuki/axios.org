---
home: true
title: Home
heroImage: logo/logo.svg
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
footer: MIT Licensed | Copyright © 2022-present xiaoxunyao
---

### As easy as counting.

:::: code-group
::: code-group-item install
```xml:no-line-numbers
<dependency>
  <groupId>io.github.xiao-organization</groupId>
  <artifactId>axios</artifactId>
  <version>1.0.0</version>
</dependency>
```
:::
::: code-group-item using
```java:no-line-numbers
Axios.get(
	"RollCall/people/axiosGet" 
).then(response ->{
	System.out.println(response);
});
```
:::
::::

