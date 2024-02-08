CREATE DATABASE moviesApp;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL 
);

CREATE TABLE movies (
  id serial PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) 
);

INSERT INTO movies (title, image_url)
VALUES
  ('The Fast and the Furious: Tokyo Drift', 'https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_.jpg'),
  ('Star Wars: The Force Awakens', 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'),
  ('Gran Turismo', 'https://m.media-amazon.com/images/M/MV5BMTI1YjFmN2UtOWZhOC00MjkwLTg2ZjgtNDQ5NDQ3YWNmNGRkXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg'),
  ('WALL-E', 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg'),
  ('Harry Potter and the Half-Blood Prince', 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_FMjpg_UX1000_.jpg'),
  ('El Camino: A Breaking Bad Movie', 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg'),
  ('The Dark Knight Rises', 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg'),
  ('Iron Man', 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg');
  