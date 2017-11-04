INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Everybody Loves Raymond', 'tv', 500, 1);



INSERT INTO users (name, password) VALUES ('Matt', 'password');
INSERT INTO users (name, password) VALUES ('anna', 'password1');

INSERT INTO children (name, dob, UserId) VALUES ('Callan', '2015-12-29', 1);

INSERT INTO memories (title, image, date, caption, ChildId) VALUES ('birthday', 'no image', '2015-12-29', 'birthday boy', 2);
INSERT INTO memories (title, image, date, caption, ChildId) VALUES ('holiday', 'no image', '2016-12-25', 'christmas', 2);
INSERT INTO memories (title, image, date, caption, ChildId) VALUES ('summer', 'no image', '2016-07-28', 'summer', 2);