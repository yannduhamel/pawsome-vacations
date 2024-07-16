create table user (
    id int unsigned primary key auto_increment not null,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255) NOT NULL,
    note INT UNSIGNED NOT NULL DEFAULT 0,
    is_validated BOOLEAN NOT NULL DEFAULT FALSE
);

create table role (
    id int unsigned primary key auto_increment not null,
    name varchar(255) not null
);

create table user_role (
    id int unsigned primary key auto_increment not null,
    user_id int unsigned not null,
    role_id int unsigned not null,
    foreign key (user_id) references user (id),
    foreign key (role_id) references role (id)
);

create table animal (
    id int unsigned primary key auto_increment not null,
    species varchar(255) not null,
    size varchar(255) not null,
    user_id int unsigned not null,
    foreign key (user_id) references user (id)
);

create table acc_category (
    id int unsigned primary key auto_increment not null,
    name varchar(255) not null
);

create table amenity (
    id int unsigned primary key auto_increment not null,
    name varchar(255) not null,
    logo varchar(255) not null,
    category varchar(255) not null
);

create table accomodation (
    id int unsigned primary key auto_increment not null,
    name varchar(255) not null,
    adress varchar(255) not null,
    zip_code int unsigned not null,
    city varchar(255) not null,
    description varchar(255) not null,
    note int unsigned not null default 0,
    price_per_night int unsigned not null,
    max_adults int unsigned not null,
    max_children int unsigned not null,
    max_pets int unsigned not null,
    is_validated boolean not null default false,
    user_id int unsigned not null,
    acc_category_id int unsigned not null,
    foreign key (acc_category_id) references acc_category (id),
    foreign key (user_id) references user (id)
);

create table acc_amenity (
    id int unsigned primary key auto_increment not null,
    accomodation_id int unsigned not null,
    amenity_id int unsigned not null,
    foreign key (accomodation_id) references accomodation (id),
    foreign key (amenity_id) references amenity (id)
);

create table reservation (
    id int unsigned primary key auto_increment not null,
    booking_date datetime default now(),
    check_in_date datetime not null,
    check_out_date datetime not null,
    number_of_adults int unsigned not null,
    number_of_children int unsigned not null,
    number_of_pets int unsigned not null,
    user_id int unsigned not null,
    accomodation_id int unsigned not null,
    foreign key (user_id) references user (id),
    foreign key (accomodation_id) references accomodation (id)
);

create table payment (
    id int unsigned primary key auto_increment not null,
    amount int unsigned not null,
    date datetime default now(),
    method varchar(255) not null,
    reservation_id int unsigned not null,
    foreign key (reservation_id) references reservation (id)
);