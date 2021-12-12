---
sidebarDepth: 2
---

# Getting Started

*Promise based HTTP client for the java*

## What is Axios?

Axios is a promise-based HTTP client for java. It is isomorphic (= it can run in java with the same codebase). On the server-side, it uses the native java `HttpUrlConnection`.

## Features

- Make XMLHttpRequests from the server
- Make HTTP requests from java
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests

## Installing

:::: code-group
::: code-group-item Maven
```xml:no-line-numbers
<dependency>
  <groupId>io.github.xiao-organization</groupId>
  <artifactId>axios</artifactId>
  <version>0.0.1</version>
</dependency>
```
:::
::: code-group-item Gradle
```xml:no-line-numbers
implementation 'io.github.xiao-organization:axios:0.0.1'
```
:::
::::
