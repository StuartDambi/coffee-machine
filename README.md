# COFFEE MACHINE [![Build Status](https://app.travis-ci.com/StuartDambi/coffee-machine.svg?branch=main)](https://app.travis-ci.com/StuartDambi/coffee-machine)

This is an inventory management Platform for a coffee retail Shop.
It is built with Nodejs, Sequelize and Postgres as a database.

## Pre-Requisites

- Postgresql and database created

## How to Install and run the application

- Clone the application and run `yarn`
- Run `cp .env.example .env` to create .env variables and fill them
- Run `yarn dev` to create db migrations and run server

## API Documentation

| End Point Name | Method   | Category | EndPoint                    | Description                                 |
| -------------- | -------- | -------- | --------------------------- | ------------------------------------------- |
| Register User  | **POST** | Users    | `/api/v1/users/auth/signup` | This registers a users to the system        |
| Login User     | **POST** | Users    | `/api/v1/users/auth/login`  | This handles login of a users to the system |

## Technologies Used

- NodeJs / Express
- Postresql Database with Sequelize as ORM
- Redis
- Swagger for API Documentation
- Heroku For Hosting
