DROP DATABASE IF EXISTS starsdb;
CREATE DATABASE starsdb;

CREATE TABLE meteorshowers
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shower_name varchar(255) NOT NULL,
    shower_nickname varchar(50),
    begin_date date NOT NULL,
    end_date date NOT NULL,
    max_date date,
    createdAt date,
    updatedAt date,
    type_of_event varchar (250),
    max_rate_per_hour INT
);

INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Quadrantids','QUA','2019-12-22','2019-01-17','2019-01-04',120);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Lyrids','LYR','2019-04-14','2019-04-30','2019-04-23',18);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('eta Aquarids','ETA','2019-04-17','2019-05-24','2019-05-07',60);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Southern delta Aquarids','SDA','2019-07-21','2019-08-23','2019-07-30',20);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Perseids','PER','2019-07-17','2019-09-01','2019-08-13',100);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Orionids','ORI','2019-09-23','2019-11-27','2019-10-22',23);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Leonids','LEO','2019-11-02','2019-11-30','2019-11-18',15);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Geminids','GEM','2019-12-01','2019-12-22','2019-12-14',120);
INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Ursids','URS','2019-12-19','2019-12-24','2019-12-22',10);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Anthelion Source','ANT',2019-12-25,2019-09-23,2019-05-15,3);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Coma Berenicids','COM',2019-12-24,2019-01-04,2019-01-01,5);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('alpha Centaurids','ACE',2019-02-02,2019-02-19,2019-02-08,6);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('eta Lyrids','ELY',2019-05-06,2019-05-13,2019-05-11,3);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('alpha Capricornids','CAP',2019-07-03,2019-08-11,2019-07-27,4);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Piscis Austrinids','PAU',2019-07-30,2019-08-18,2019-08-09,5);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('kappa Cygnids','KCG',2019-08-08,2019-08-17,2019-08-14,3);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Aurigids','AUR',2019-08-18,2019-09-07,2019-09-01,6);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('September epsilon Perseids','SPE',2019-09-03,2019-10-03,2019-09-11,5);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('epsilon Geminids','EGE',2019-09-30,2019-10-25,2019-10-11,2);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Leonis Minorids','LMI',2019-10-12,2019-11-05,2019-10-23,2);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Southern Taurids','STA',2019-09-23,2019-12-24,2019-10-30,5);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Northern Taurids','NTA',2019-10-24,2019-12-19,2019-11-03,5);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('November Orionids','NOO',2019-11-07,2019-12-17,2019-11-29,3);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('sigma Hydrids','HYD',2019-11-24,2019-12-21,2019-12-06,3);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Puppid-Velids','PUP',2019-12-01,2019-12-15,2019-12-07,10);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('Monocerotids','MON',2019-11-28,2019-12-27,2019-12-13,2);
-- INSERT INTO meteorshowers (shower_name, shower_nickname, begin_date, end_date, max_date, max_rate_per_hour) VALUES ('December Leonis Minorids','DLM',2019-12-06,2019-01-18,2019-12-21,5);