# FichaTecnicaRestaurante

The Project is at the Front Folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Spring Boot Project

The Project is at the back folder.

Claro! Aqui está o texto atualizado do README com as instruções para configurar e acessar o banco de dados PostgreSQL:

Spring Boot Project
This is a Spring Boot project that provides RESTful services. Follow the instructions below to set up and run the project.

Prerequisites
To build and run the application, you will need to have installed:

JDK 17
Maven 3.x
PostgreSQL
Building the Project
Clone the repository:
git clone https://github.com/your-username/your-repository.git
cd your-repository

Compile the project and run the tests:
mvn clean package

Setting Up the PostgreSQL Database
Ensure PostgreSQL is installed and running on your machine.
Create a new database named fichas:
sudo -u postgres psql
CREATE DATABASE fichas;
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE fichas TO your_username;
\q

Update the application.properties file with your PostgreSQL configuration:
spring.datasource.url=jdbc:postgresql://localhost:5432/fichas
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

Running the Application
Locally
You can run the application locally in two ways:

Using Maven:
mvn spring-boot:run

Running the generated JAR:
java -jar target/your-project.jar

Using Docker
Ensure Docker is installed and running.
Build the Docker image:
docker build -t image-name .

Run the Docker container:
docker run -p 8080:8080 image-name

Accessing the Application
After starting the application, you can access it at the following address:

http://localhost:8080

Available Endpoints
Here are some of the available REST endpoints:

GET /api/v1/fichas - Returns all technical sheets
GET /api/v1/fichas/{id} - Returns a technical sheet by ID
POST /api/v1/fichas - Creates a new technical sheet
PUT /api/v1/fichas/{id} - Updates an existing technical sheet
DELETE /api/v1/fichas/{id} - Deletes a technical sheet
Contributing
If you want to contribute to the project, please follow the contribution guidelines.

License
This project is licensed under the MIT License. See the LICENSE file for more details.