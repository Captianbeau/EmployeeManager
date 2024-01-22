-- department seed --
INSERT INTO department (id, names) 
VALUES 
    (1,"Game Design"),
    (2,"Programming"),
    (3,"Art"),
    (4,"Sound"),
    (5,"Quality Assurance");
-- department end --

-- role seed --
INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Lead Combat Designer", 80000, 1),
    (2, "Combat Designer", 75000, 1),
    (3, "Balance Designer", 75000, 1),
    (4, "Lead World Designer", 80000, 1),
    (5, "Quest Designer", 75000, 1),
    (6, "Lead Programmer", 80000, 2),
    (7, "Programmer", 75000, 2),
    (8, "Head of Art", 85000, 3),
    (9, "Lead Concept Artist", 80000, 3),
    (10, "Concept Artist", 75000, 3),
    (11, "Lead Environment Artist", 80000, 3),
    (12, "Environment Artist", 75000, 3),
    (13, "Lead Sound Artist", 80000, 4),
    (14, "Sound Artist", 75000, 4),
    (15, "QA Lead", 80000, 5),
    (16, "QA", 75000, 5);
-- role end --

-- employee seed --
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Jeong-hyeon", "Lee", 1, null),
    (2, "Jun-won", "Cho", 2, 1),
    (3, "Dong-hyeok", "Oh", 2, 1),
    (4, "Jong-hyuk", "Koo", 2, 1),
    (5, "Won-Young", "Yoon", 3, 1),
    (6, "Myung-gon", "Yu", 3, 1),
    (7, "Byung-soo", "Kwon", 4, null),
    (8, "Ga-ram", "Park", 5, 7),
    (9, "Yu-jung", "Kim", 5, 7),
    (10, "Ye-rim", "Kim", 5, 7),
    (11, "Beom-seok", "Lim", 5, 7),
    (12, "Dong-wan", "Seo", 6, null),
    (13, "Sung-hwan", "Park", 7, 12),
    (14, "Byung-kyu", "Lee", 7, 12),
    (15, "Byung-jun", "Cha", 8, null),
    (16, "Hy-eon", "Kim", 9, 15),
    (17, "Jong-hwan", "Lee", 10, 16),
    (18, "Sung-eun", "Yoon", 10, 16),
    (19, "Ki-bum", "Sung", 11, 15),
    (20, "Kwang-hun", "Kim", 12, 19),
    (21, "Jeong-su", "Sohn", 12, 19),
    (22, "Kwang-seok", "Oh", 13, null),
    (23, "Hyeon-hee", "Park", 14, 22),
    (24, "Hong-jun", "Park", 14, 22),
    (25, "Ju-sun", "Han", 15, null),
    (26, "Woong-kyoo", "Kim", 16, 25),
    (27, "Su-jin", "Lee", 5, 7);
-- employee end --