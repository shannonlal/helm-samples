# Person Service

The following is instructions for the Person Service Micro Service

## Project Installation

```
npm install
```

## Environment Variables

Create a .env in the root of the project and add the following properties

```
DB_URL=postgres://postgres:postgres@127.0.0.1:5432/k8s-sample
PERSON_PORT=3008
```


## Build the Docker container
```
npm run docker:build
```

## Push to Docker Hub
```
npm run docker:push
```

## Run Person in Docker
### NOTES: Change IP Address
`docker run -d -id -p 3008:3008 -e "DB_URL=postgres://postgres:postgres@192.168.0.164:5432/k8s-sample" -e "PERSON_PORT=3008"  microsigns/k8s-person-service:1.0.2`


## Test Connection
```
curl http://localhost:3009/api/person
```