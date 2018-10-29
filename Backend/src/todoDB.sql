drop database if exists todo;
create database todo;
use todo;
create table person (
    pid int not null auto_increment,
    firstname varchar(50) not null,
    lastname varchar(50) not null,
    primary key (pid)
);
create table todolist (
    tid int not null auto_increment,
    text varchar(50) not null,
    status boolean not null,
    pid int not null,
    primary key (tid),
    foreign key (pid) references person(pid)
);
insert into person (firstname, lastname) values
("Antonia","Müller"),
("Sarah","Bäcker"),
("Anna-Maria","von Entenhausen");
