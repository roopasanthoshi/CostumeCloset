
-- Create Actors table
CREATE TABLE IF NOT EXISTS actors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE
);

-- Create Costumes table
CREATE TABLE IF NOT EXISTS costumes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    era VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL
);

-- Create Hires table
CREATE TABLE IF NOT EXISTS hires (
    id SERIAL PRIMARY KEY,
    actor_id INTEGER NOT NULL,
    costume_id INTEGER NOT NULL,
    hire_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(50) DEFAULT 'Hired',

    FOREIGN KEY (actor_id) REFERENCES actors(id),
    FOREIGN KEY (costume_id) REFERENCES costumes(id)
);
