--
-- PostgreSQL database dump
--

\restrict f3tnvfkklq95VSTYFODi6biz8WXEj0W483G20O4My7MA5S7QKhcd0MJn4MMblW6

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-07-11 14:26:41

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 16443)
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    user_id integer,
    package_id integer,
    booking_date date,
    event_date date,
    status character varying(20) DEFAULT 'Pending'::character varying,
    customer_name character varying(100),
    phone character varying(20),
    location text
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16442)
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bookings_id_seq OWNER TO postgres;

--
-- TOC entry 4949 (class 0 OID 0)
-- Dependencies: 225
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- TOC entry 220 (class 1259 OID 16404)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16403)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- TOC entry 4950 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 222 (class 1259 OID 16415)
-- Name: packages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.packages (
    id integer NOT NULL,
    category_id integer,
    package_name character varying(150) NOT NULL,
    price numeric(12,2) NOT NULL,
    description text,
    image character varying(255)
);


ALTER TABLE public.packages OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16414)
-- Name: packages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.packages_id_seq OWNER TO postgres;

--
-- TOC entry 4951 (class 0 OID 0)
-- Dependencies: 221
-- Name: packages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.packages_id_seq OWNED BY public.packages.id;


--
-- TOC entry 224 (class 1259 OID 16432)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    fullname character varying(100),
    email character varying(100),
    password character varying(255),
    role character varying(20) DEFAULT 'customer'::character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16431)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4952 (class 0 OID 0)
-- Dependencies: 223
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4774 (class 2604 OID 16446)
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- TOC entry 4770 (class 2604 OID 16407)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 4771 (class 2604 OID 16418)
-- Name: packages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages ALTER COLUMN id SET DEFAULT nextval('public.packages_id_seq'::regclass);


--
-- TOC entry 4772 (class 2604 OID 16435)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4943 (class 0 OID 16443)
-- Dependencies: 226
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookings (id, user_id, package_id, booking_date, event_date, status, customer_name, phone, location) FROM stdin;
5	\N	3	2026-07-09	2026-07-17	Pending	apis	3333	fgag
3	\N	3	2026-07-21	2026-07-21	Pending	Apis	09866545	jl sukajadi 1
4	\N	3	2026-07-08	2026-07-30	Confirmed	lita al	0834678909	jl desa sukajadi, rt 10, rw 03
6	\N	4	2026-07-08	2026-07-22	Cancelled	Lita Alentina	0876446987	jl sukajadi 1, rt 10, 03
\.


--
-- TOC entry 4937 (class 0 OID 16404)
-- Dependencies: 220
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, description) FROM stdin;
1	Wedding Indoor	Paket dekorasi indoor
2	Wedding Outdoor	Paket dekorasi outdoor
4	Wedding VIP	Paket dekorasi VIP
11	Premium	Paket Premium
\.


--
-- TOC entry 4939 (class 0 OID 16415)
-- Dependencies: 222
-- Data for Name: packages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.packages (id, category_id, package_name, price, description, image) FROM stdin;
2	2	Gold Package	25000000.00	Dekorasi premium	/uploads/1783693281873-42140.jpg
3	1	Diamond Package	50000000.00	Paket lengkap	/uploads/1783693326704-789699.jpg
4	4	Wedding VIP	100000000.00	paket hiburan, makan untuk 500 tamu undangan	/uploads/1783693442624-625250.jpg
\.


--
-- TOC entry 4941 (class 0 OID 16432)
-- Dependencies: 224
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, fullname, email, password, role) FROM stdin;
1	Lita Alentina	lita@gmail.com	123456	customer
\.


--
-- TOC entry 4953 (class 0 OID 0)
-- Dependencies: 225
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bookings_id_seq', 6, true);


--
-- TOC entry 4954 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 11, true);


--
-- TOC entry 4955 (class 0 OID 0)
-- Dependencies: 221
-- Name: packages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.packages_id_seq', 5, true);


--
-- TOC entry 4956 (class 0 OID 0)
-- Dependencies: 223
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- TOC entry 4785 (class 2606 OID 16450)
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- TOC entry 4777 (class 2606 OID 16413)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 4779 (class 2606 OID 16425)
-- Name: packages packages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_pkey PRIMARY KEY (id);


--
-- TOC entry 4781 (class 2606 OID 16441)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4783 (class 2606 OID 16439)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4787 (class 2606 OID 16456)
-- Name: bookings bookings_package_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_package_id_fkey FOREIGN KEY (package_id) REFERENCES public.packages(id);


--
-- TOC entry 4788 (class 2606 OID 16451)
-- Name: bookings bookings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 4786 (class 2606 OID 16426)
-- Name: packages packages_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;


-- Completed on 2026-07-11 14:26:41

--
-- PostgreSQL database dump complete
--

\unrestrict f3tnvfkklq95VSTYFODi6biz8WXEj0W483G20O4My7MA5S7QKhcd0MJn4MMblW6

