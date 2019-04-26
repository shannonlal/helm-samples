CREATE TABLE company (
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL
);

CREATE TABLE person (
    id serial NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL
);
