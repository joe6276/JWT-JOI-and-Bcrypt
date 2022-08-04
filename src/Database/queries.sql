


-- CREATE TABLE UsersTable( id VARCHAR(80), email VARCHAR(200) UNIQUE , password VARCHAR(200))


-- CREATE PROCEDURE insertUser ( @id VARCHAR(80), @email VARCHAR(200), @password VARCHAR(200))
-- AS
-- BEGIN

-- INSERT INTO UsersTable(id,email,password) VALUES(@id, @email, @password)

-- END


-- CREATE PROCEDURE getUser(@email VARCHAR(200))
-- AS
-- BEGIN
-- SELECT * FROM UsersTable WHERE email =@email
-- END
