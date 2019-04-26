# HELM Chart Sample Project

The following repository is a sample project that builds a microservices deployment 
for Kubernetes using HELM (https://helm.sh/).  The following project is based on a 
microservices architecture with two microservices and a DB (Postgres).  It uses
Traefik (https://traefik.io/) as a reverse proxy to the backend services and it
uses helm deployment hooks 


## Company MicroService
The company microservice is a small NodeJS (Express) service that performs
basic CRUD on a database.  Information about how to build and deploy this project
can be found in the following folder

```
company-service/
```

## Person MicroService
The person microservice is a small NodeJS (Express) service that performs
basic CRUD on a database.  Information about how to build and deploy this project
can be found in the following folder

```
person-service/
```

## DB Migration
The db-migration microservice is a small NodeJS/Sequelize project that uses
Sequelize Migrations to perform updates to a database schema.  This project
will be configured using helm hooks to be executed before the migration
```
db-migrate/
```

## Company
The folder contains the helm chart configuration for the microservice project. 
It contains the deployment and services files for each of the microservices above.  
In addition, it contains information for the ingress and persistant volumes
```
company/
```

## System
The folder contains the helm chart configuraion for Traefik
```
system/
```