# Introduction

In this `axios`, the simplest code is used to send [HTTP](https://datatracker.ietf.org/doc/html/rfc8740) requests. You don't need to worry about how to send it, you only need to care about the code of business logic.

## How It Works

`axios` does a layer of encapsulation for JDK's HttpUrlConnection, which simplifies operations such as HTTPS requests, file uploads, and cookie memory, making Http requests extremely simple.

## Why Not ... ?

### HttpClient

HttpClient is relatively large, and the API is relatively difficult to use, so it does not use many scenarios.

### Jodd-http

In some scenarios, a lot of learning costs are required.

### okHttp

Special and high learning costs for versions