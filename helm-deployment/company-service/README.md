# Company Service

The following is instructions for the Company Service 

## Project Installation

```
npm install
```

## Environment Variables

Create a .env in the root of the project and add the following properties

```
DB_URL=postgres://postgres:postgres@127.0.0.1:5432/k8s-sample
```

## Run Service

First create a .env file with the following properties
```
DB_URL=postgres://postgres:postgres@127.0.0.1:5432/k8s-sample

```

## Build the Docker container
```
npm run docker:build
```

## Push to Docker Hub
```
npm run docker:push
```

## Run Service in Docker
### NOTES: Change IP Address
`docker run -d -id -p 3009:3009 -e "DB_URL=postgres://postgres:postgres@192.168.0.164:5432/k8s-sample" -e "COMPANY_PORT=3009"  microsigns/k8s-company-service:1.0.1`


## Test Connection
```
curl http://localhost:3009/api/company
```