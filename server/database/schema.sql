create table user (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255) DEFAULT "/static/images/defaultAvatar.jpg",
    note INT UNSIGNED DEFAULT 0,
    is_validated BOOLEAN DEFAULT FALSE
);

create table role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL
);

create table user_role (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (role_id) REFERENCES role (id)
);

create table animal (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    species VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

create table acc_category (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    category_image VARCHAR(255) NOT NULL
);

create table amenity (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
);

create table accomodation (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,
    zip_code INT UNSIGNED NOT NULL,
    city VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    note INT UNSIGNED NOT NULL DEFAULT 0,
    price_per_night INT UNSIGNED NOT NULL,
    max_adults INT UNSIGNED NOT NULL,
    max_children INT UNSIGNED NOT NULL,
    max_pets INT UNSIGNED NOT NULL,
    is_validated BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INT UNSIGNED NOT NULL,
    acc_category_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (acc_category_id) REFERENCES acc_category (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

create table acc_amenity (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    accomodation_id INT UNSIGNED NOT NULL,
    amenity_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (accomodation_id) REFERENCES accomodation (id),
    FOREIGN KEY (amenity_id) REFERENCES amenity (id)
);

create table reservation (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    booking_date DATETIME DEFAULT NOW(),
    check_in_date DATETIME NOT NULL,
    check_out_date DATETIME NOT NULL,
    adults_number INT UNSIGNED NOT NULL,
    children_number INT UNSIGNED NOT NULL,
    pets_number INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    accomodation_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (accomodation_id) REFERENCES accomodation (id)
);

create table payment (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    amount INT UNSIGNED NOT NULL,
    date DATETIME DEFAULT NOW(),
    method VARCHAR(255) NOT NULL,
    reservation_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservation (id)
);