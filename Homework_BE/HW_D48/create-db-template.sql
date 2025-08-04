-- 1
CREATE DATABASE 'hotel_management' 

-- 2
create table guests (
  guest_id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  date_of_birth DATE,
  nationality TEXT,
  created_at TIMESTAMP
);

-- 3
CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  room_number INT,
  room_type TEXT,
  price_per_night INT,
  max_occupancy INT,
  is_available BOOLEAN,
  floor INT,
  description TEXT
);

-- 4
CREATE Table bookings (
  booking_id SERIAL PRIMARY KEY,
  guest_id INT,
  room_id INT,
  check_in_date DATE,
  check_out_date DATE,
  total_price DECIMAL(10,2),
  booking_status TEXT,
  payment_status TEXT,
  created_at TIMESTAMP
);

-- 5
alter table guests add column loyalty_points INT;

-- 6
alter table bookings add column special_requests TEXT;

-- 7
alter table rooms add column amenities TEXT[];

-- 8
alter table rooms add column last_updated TIMESTAMP;

-- 9
alter table bookings add column discount_percentage DECIMAL(5,2);

-- 10
insert into guests (first_name, last_name, email, phone, address, date_of_birth, nationality, created_at)
values
(nextval('guest_id_seq'), 'MinMin', 'Nguyen', 'minminnyen@email.com', '0123456789', '123 Tran Duy Hung, Ha Noi', '2002-03-15', 'VN', CURRENT_TIMESTAMP),
(nextval('guest_id_seq'), 'An', 'Tran', 'antran@email.com', '0123456788', '456 Le Loi, Hue', '1995-09-01', 'VN', CURRENT_TIMESTAMP),
(nextval('guest_id_seq'), 'Linh', 'Pham', 'linhp@email.com', '0987654321', '789 Hai Ba Trung, HCM', '1999-01-20', 'VN', CURRENT_TIMESTAMP),
(nextval('guest_id_seq'), 'David', 'Smith', 'david@email.com', '0111222333', 'London, UK', '1988-07-12', 'UK', CURRENT_TIMESTAMP),
(nextval('guest_id_seq'), 'Emily', 'Jones', 'emily@email.com', '0998877665', 'New York, USA', '1990-12-05', 'US', CURRENT_TIMESTAMP);

-- 11
INSERT INTO rooms (room_number, room_type, price_per_night, max_occupancy, is_available, floor, description)
VALUES
(nextval('room_id_seq'), '101', 'standard', 89.99, 2, true, 1, 'Comfortable standard room with queen bed'),
(nextval('room_id_seq'), '102', 'standard', 85.00, 2, true, 1, 'Standard room with twin beds'),
(nextval('room_id_seq'), '201', 'deluxe', 120.50, 3, true, 2, 'Spacious deluxe room with city view'),
(nextval('room_id_seq'), '202', 'deluxe', 130.00, 3, true, 2, 'Deluxe room with balcony'),
(nextval('room_id_seq'), '301', 'suite', 200.00, 4, true, 3, 'Luxury suite with ocean view'),
(nextval('room_id_seq'), '302', 'suite', 210.00, 4, false, 3, 'Suite with private terrace'),
(nextval('room_id_seq'), '103', 'standard', 90.00, 2, true, 1, 'Standard room near elevator'),
(nextval('room_id_seq'), '203', 'deluxe', 125.00, 3, true, 2, 'Deluxe room corner unit'),
(nextval('room_id_seq'), '303', 'suite', 250.00, 4, true, 3, 'Presidential suite'),
(nextval('room_id_seq'), '104', 'standard', 80.00, 1, true, 1, 'Budget standard room');

-- 12
INSERT INTO bookings (guest_id, room_id, check_in_date, check_out_date, total_price, booking_status, payment_status, created_at)
VALUES
(nextval('booking_id_seq'), 1, 1, '2023-07-15', '2023-07-18', 269.97, 'completed', 'paid', '2023-06-20 10:30:00'),
(nextval('booking_id_seq'), 2, 3, '2023-07-10', '2023-07-12', 170.00, 'confirmed', 'unpaid', '2023-06-18 14:00:00'),
(nextval('booking_id_seq'), 4, 5, '2023-08-01', '2023-08-05', 800.00, 'cancelled', 'refunded', '2023-07-01 09:00:00'),
(nextval('booking_id_seq'), 2, 2, '2023-07-20', '2023-07-22', 180.00, 'checked_in', 'paid', '2023-07-10 11:45:00'),
(nextval('booking_id_seq'), 5, 3, '2023-07-25', '2023-07-28', 270.00, 'completed', 'paid', '2023-07-05 12:15:00'),
(nextval('booking_id_seq'), 3, 4, '2023-07-29', '2023-08-01', 360.00, 'confirmed', 'paid', '2023-07-07 13:30:00'),
(nextval('booking_id_seq'), 1, 6, '2023-07-15', '2023-07-18', 630.00, 'completed', 'paid', '2023-06-22 08:00:00'),
(nextval('booking_id_seq'), 2, 7, '2023-07-19', '2023-07-21', 180.00, 'confirmed', 'unpaid', '2023-07-10 09:30:00');

-- 13
select * from guests;
-- 14
select * from rooms where price_per_night < 100;
-- 15
select * from bookings where booking_status in ('confirmed', 'checked_in');
-- 16
select * from bookings
inner join guests on bookings.guest_id = guests.guest_id
-- 17
select * from bookings
inner join rooms on bookings.room_id = rooms.room_id
-- 18
SELECT * from bookings
inner join guests on bookings.guest_id = guests.guest_id
inner join rooms on bookings.room_id = rooms.room_id
-- 19
select * from guests
left join bookings on guests.guest_id = bookings.guest_id
-- 20
select * from rooms
left join bookings on rooms.room_id = bookings.room_id
-- 21
select * from bookings
right join guests on bookings.guest_id = guests.guest_id
-- 22
select * from bookings
right join rooms on bookings.room_id = rooms.room_id
-- 23
select * from guests
left join bookings on guests.guest_id = bookings.guest_id
where bookings.booking_id is NULL
-- 24
select * from rooms
left join bookings on rooms.room_id = bookings.room_id
where bookings.booking_id is NULL
-- 25
select DISTINCT
  guests.first_name,
  guests.last_name,
  guests.email
FROM guests
INNER JOIN bookings ON guests.guest_id = bookings.guest_id
WHERE DATE_TRUNC('month', bookings.check_in_date) = DATE_TRUNC('month', CURRENT_DATE);
-- 26
SELECT DISTINCT
    rooms.room_number,
    rooms.room_type
FROM rooms
         INNER JOIN bookings ON rooms.room_id = bookings.room_id
WHERE DATE_TRUNC('week', bookings.check_in_date) = DATE_TRUNC('week', CURRENT_DATE);
-- 27
SELECT
    guests.first_name,
    guests.last_name,
    COUNT(bookings.booking_id) AS booking_count
FROM guests
         LEFT JOIN bookings ON guests.guest_id = bookings.guest_id
GROUP BY guests.guest_id, guests.first_name, guests.last_name
HAVING COUNT(bookings.booking_id) > 2;
-- 28
SELECT DISTINCT
    rooms.room_number,
    rooms.room_type,
    rooms.price_per_night
FROM bookings
         RIGHT JOIN rooms ON bookings.room_id = rooms.room_id
WHERE rooms.price_per_night > 200
  AND bookings.booking_id IS NOT NULL;
