CREATE TABLE company (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL
);

ALTER TABLE company OWNER TO postgres;

CREATE SEQUENCE company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE company_id_seq OWNER TO postgres;

ALTER SEQUENCE company_id_seq OWNED BY company.id;

CREATE TABLE person (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL
);

ALTER TABLE person OWNER TO postgres;

CREATE SEQUENCE person_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE person_id_seq OWNER TO postgres;

ALTER SEQUENCE person_id_seq OWNED BY person.id;