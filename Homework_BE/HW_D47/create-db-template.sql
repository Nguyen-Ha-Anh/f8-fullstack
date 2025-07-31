CREATE TABLE "db-f8" (
  id SERIAL PRIMARY KEY,
  name TEXT
);
drop TABLE "db-f8"

CREATE Table if not exists book (
  book_id int,
  title varchar(200),
  author varchar(100),
  publish_year int,
  publisher varchar(100),
  category varchar(50),
  page_count int,
  price real,
  stock int,
  import_date date
)
select * from book

alter table book add column status varchar(20) 
alter table book add column language varchar(30)
alter table book add column shelf_position varchar(20)

insert into book values (1, 'The Adventures of Cricket', 'To Hoai', 2010, 'Kim Dong', 'Literature', 150, 75000.00, 10, '2020-01-15', 'Available', 'Vietnamese', 'A1');
insert into book values (2, 'The Alchemist', 'Paulo Coelho', 2013, 'NXB Tre', 'Novel', 228, 85000.00, 7, '2020-02-20', 'Available', 'Vietnamese', 'A2');
insert into book values (3, 'How to Win Friends', 'Dale Carnegie', 2016, 'NXB Tong Hop', 'Psychology', 320, 120000.00, 5, '2020-03-10', 'Borrowed', 'Vietnamese', 'B1');
insert into book values (4, 'Mắt biếc', 'Nguyễn Nhật Ánh', 2019, 'NXB Trẻ', 'Tiểu thuyết', 195, 88000.00, 12, '2020-12-10', 'Có sẵn', 'Tiếng Việt', 'A4');
insert into book values (5, 'Vật lý đại cương', 'David Halliday', 2014, 'NXB Đại học Quốc gia', 'Giáo trình', 850, 320000.00, 3, '2021-01-20', 'Có sẵn', 'Tiếng Việt', 'F1');
insert into book values (6, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 1998, 'Gallimard', 'Tiểu thuyết', 120, 150000.00, 0, '2021-02-15', 'Đã thanh lý', 'Tiếng Pháp', 'B3');
insert into book values (7, 'Blockchain cơ bản', 'Satoshi Nakamoto', 2021, 'NXB Công nghệ', 'Công nghệ', 320, 220000.00, 5, '2021-03-10', 'Có sẵn', 'Tiếng Anh', 'D3');
insert into book values (8, 'Clean Code', 'Robert C. Martin', 2008, 'Prentice Hall', 'Programming', 464, 240000.00, 4, '2021-04-01', 'Available', 'English', 'C2');
insert into book values (9, 'The Psychology of Money', 'Morgan Housel', 2020, 'NXB Tài chính', 'Finance', 252, 110000.00, 8, '2021-05-20', 'Available', 'Vietnamese', 'D1');
insert into book values (10, 'Tuổi trẻ đáng giá bao nhiêu?', 'Rosie Nguyễn', 2016, 'NXB Trẻ', 'Self-help', 320, 98000.00, 10, '2021-06-15', 'Available', 'Vietnamese', 'D3');
insert into book values (11, 'Deep Work', 'Cal Newport', 2016, 'NXB Lao động', 'Productivity', 304, 115000.00, 9, '2021-07-10', 'Available', 'Vietnamese', 'E1');
insert into book values (12, 'Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 1997, 'Bloomsbury', 'Fantasy', 223, 180000.00, 2, '2021-08-25', 'Borrowed', 'English', 'A5');
insert into book values (13, 'Dế mèn phiêu lưu ký', 'Tô Hoài', 1941, 'Kim Đồng', 'Children', 160, 65000.00, 11, '2021-09-10', 'Available', 'Vietnamese', 'A1');
insert into book values (14, 'Start With Why', 'Simon Sinek', 2009, 'Portfolio', 'Self-help', 256, 125000.00, 5, '2021-10-15', 'Available', 'English', 'D2');
insert into book values (15, 'Design Patterns', 'Erich Gamma et al.', 1994, 'Addison-Wesley', 'Programming', 395, 270000.00, 1, '2021-11-05', 'Available', 'English', 'C4')

select book_id, title, author from book;
select * from book where publish_year = 2020;
select * from book where price > 200000;
select * from book where stock > 5;
select * from book where category = 'Novel';
select * from book where status = 'Borrowed'
select * from book where language = 'English';
select * from book where publish_year < 2000;
select * from book where page_count > 300;
select * from book where category = 'Science' and price < 150000;
select * from book where publish_year between 2015 and 2022;
select * from book where status = 'Available' and stock < 3;
select * from book where author in ('Nguyen Nhat Anh', 'To Hoai');
select * from book where publisher in ('Kim Dong', 'NXB Tre');
select * from book where language = 'Vietnamese' and page_count < 200;
select * from book where category in ('Technology', 'Science') and publish_year > 2010;
select * from book where shelf_position in ('A1', 'A2', 'A3');
select * from book where price between 100000 and 300000 and status = 'Available';
select * from book where author in ('Paulo Coelho', 'Dale Carnegie') and stock > 0;

update book set status = 'Borrowed' where book_id = 5;
update book set stock = 0 where status = 'Removed';
update book set price + 10000 where category = 'Novel';
update book set shelf_position = 'B5' where author = 'Nguyen Nhat Anh';
update book set status = 'Available' where status = 'Borrowed' and stock > 5;
update book set language = 'Vietnamese' where publisher = 'Kim Dong' and language is null;
update book set stock = stock - 1 where book_id = 8;
update book set category = 'Literature' where category = 'Novel' and publish_year < 2000
update book set publisher = 'NXB Giao Duc' where publisher = 'NXB Dai hoc Quoc gia' and category = 'Textbook';
update book set page_count = 0 where status = 'Removed' and stock = 0
