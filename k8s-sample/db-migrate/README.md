# DB Migration

The following is instructions for the Database Migration Micro Service

## Project Installation

```
npm install
```

## Environment Variables

Create a .env in the root of the project and add the following properties

```
DB_URL=postgres://postgres:postgres@127.0.0.1:5432/test
```

## Run Migration

First create a .env file with the following properties
```
DB_URL=postgres://postgres:postgres@127.0.0.1:5432/k8s-sample
```

## Build the Docker container
```
npm run dockger:build
```

## Push to Docker Hub
```
npm run dockger:hub
```

## Run Migration in Docker
### NOTES: Change IP Address
`docker run -d -id -e "DB_URL=postgres://postgres:postgres@192.168.0.164:5432/k8s-sample" -e  -p3008:3008  microsigns/k8s-db-migration`

## Local Mac notes.

There are two files you will need to update to test the migration with docker locally.

In the directory /usr/local/var/postgres/pg_hba.conf
```
# All IP Address
host    all             all             0.0.0.0/0               trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# Allow for Docker:
host    all             all             192.168.0.164/32        trust
# IPv6 local connections:
```

Allow for incoming requests for all ports

usr/local/var/postgres/postgresql.conf
```
# - Connection Settings -
//Uncomment
listen_addresses = '*'          # what IP address(es) to listen on;
```