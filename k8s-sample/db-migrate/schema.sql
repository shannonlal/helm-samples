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

CREATE TABLE user (
    id integer NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL
);

ALTER TABLE user OWNER TO postgres;

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE user_id_seq OWNER TO postgres;

ALTER SEQUENCE user_id_seq OWNED BY user.id;