-- create a new one
create database "f8-db";

-- remove existing db
drop database if exists "default";

select (1 + 1);
select (10 - 2);
select (10 * 2);
select (11.0 / 3);
select (round(11 / 3));
select concat('123', 'hj');

select array[4, 2, 1];
select '{"a":
  {"b": ["foo","bar"         ]}}'::json;
select '{"a":
  {"b": ["foo","bar"          ]}}'::jsonb;


create table if not exists employee (
                                        id bigint,
                                        fullname text,
                                        age int8,
                                        address text, -- default 'test'
                                        active bool default true
);


alter table employee add column salary int;
alter table employee add column company_id int;

alter table employee add column active bool default true;

alter table employee rename name to fullname;

alter table employee drop column if exists salary;

select * from employee;

insert into employee(id, fullname) values (1, 'nguyen van a');
insert into employee(id, fullname) values (2, 'nguyen van b');
insert into employee(id, fullname, age) values (3, 'nguyen van c', 90);

select id, fullname, age from employee where age = 90;

update employee set address = 'Ha Noi';
update employee set age = 9, address = 'Da Nang' where id = 3;

delete from employee where id = 2;

update employee set active = false where id in (1, 3) and fullname = 'nguyen van a';
update employee set active = false where (id = 1 or id = 3) and fullname = 'nguyen van a';


insert into employee (id, fullname)
values (1, 'nguyen van a'),
       (2, 'nguyen van b'),
       (3, 'nguyen van c');

UPDATE employee set active = false WHERE id = 2;

SELECT * from employee where fullname like '%a%';

DELETE form employee
truncate employee

alter table employee add column new_age int8
update employee set new_age = age where age is not null 
alter table employee drop column age
alter table employee rename new_age to age

drop table employee
create table if not exists employee (
    active bool default true  
);

drop table company;
create table if not exists company (
    id bigserial primary key,
    name text,
    active bool default true
)

insert into employee (fullname, age, company_id)
values ('nguyen van a', 20, 1),
       ('nguyen van b', 40, 1),
       ('nguyen van c', 60, 3);

insert into company (id, name)
values (1, 'f8'),
       (2, 'f9'),
       (3, 'f10');

select employee.id,
       employee.fullname as name,
       company.name as company
from employee
join company on company.id = employee.company_id;

insert into employee(fullname) values ('nguyen van d');
insert into employee(fullname) values ('nguyen van e');

select max(id) from employee

select setval('employee_id_seq', (select max(id) from employee))est