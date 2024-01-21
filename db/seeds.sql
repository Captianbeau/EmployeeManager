-- Su-jin, Lee, Quest Designer, Manager Byung-soo Kwon

INSERT INTO department (names) 
VALUES 
    ("Game Design"),
    ("Programming"),
    ("Art"),
    ("Sound"),
    ("Quality Assurance");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Lead Combat Designer", 80000, 1),
    ("Combat Designer", 75000, 1),
    ("Balance Designer", 75000, 1),
    ("Lead World Designer", 80000, 1),
    ("Quest Designer", 75000, 1),
    ("Lead Programmer", 80000, 2),
    ("Programmer", 75000, 2),
    ("Head of Art", 85000, 3),
    ("Lead Concept Artist", 80000, 3),
    ("Concept Artist", 75000, 3),
    ("Lead Environment Artist", 80000, 3),
    ("Environment Artist", 75000, 3),
    ("Lead Sound Artist", 80000, 4),
    ("Sound Artist", 75000, 4),
    ("QA Lead", 80000, 5),
    ("QA", 75000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jeong-hyeon", "Lee", 1, null),
    ("Jun-won", "Cho", 2, 1),
    ("Dong-hyeok", "Oh", 2, 1),
    ("Jong-hyuk", "Koo", 2, 1),
    ("Won-Young", "Yoon", 3, 1),
    ("Myung-gon", "Yu", 3, 1),
    ("Byung-soo", "Kwon", 4, null),
    ("Ga-ram", "Park", 5, 7),
    ("Yu-jung", "Kim", 5, 7),
    ("Ye-rim", "Kim", 5, 7),
    ("Beom-seok", "Lim", 5, 7),
    ("Dong-wan", "Seo", 6, null),
    ("Sung-hwan", "Park", 7, 12),
    ("Byung-kyu", "Lee", 7, 12),
    ("Byung-jun", "Cha", 8, null),
    ("Hy-eon", "Kim", 9, 15),
    ("Jong-hwan", "Lee", 10, 16),
    ("Sung-eun", "Yoon", 10, 16),
    ("Ki-bum", "Sung", 11, 15),
    ("Kwang-hun", "Kim", 12, 19),
    ("Jeong-su", "Sohn", 12, 19),
    ("Kwang-seok", "Oh", 13, null),
    ("Hyeon-hee", "Park", 14, 22),
    ("Hong-jun", "Park", 14, 22),
    ("Ju-sun", "Han", 15, null),
    ("Woong-kyoo", "Kim", 16, 25);