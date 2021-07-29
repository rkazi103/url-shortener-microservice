# Url Shortener Microservice

This is a simple URL shortener microservice. It is the third project out of 5 you need to build in order to get the "APIs and Microservices" certification on FreeCodeCamp.

## Authors

- [@rkazi103](https://www.github.com/rkazi103)

## Tech Stack

**Client:** HTML + CSS

**Server:** Node, Express

## Demo

Placholder

## API Reference

### Shorten URL

```http
  POST /api/shorturl
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `url`     | `string` | **Required**. The URL you want to shorten |

### Get item

```http
  GET /api/shorturl/${id}
```

| Parameter | Type     | Description                                                              |
| :-------- | :------- | :----------------------------------------------------------------------- |
| `id`      | `number` | **Required**. Id of the URL so that you can be redirected to desired URL |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URI`

You will need to create a database on MongoDB Atlas in order to get this environment variable.

## Run Locally

Clone the project

```bash
  git clone https://github.com/rkazi103/url-shortener-microservice
```

Go to the project directory

```bash
  cd url-shortener
```

Install dependencies

```bash
  yarn
```

Start the server in development (using nodemon)

```bash
  yarn dev
```

Start the server in production (using regular node)

```bash
  yarn start
```

## Feedback

If you have any feedback, please reach out to me at rayan.quack.you@gmail.com
