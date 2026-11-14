
-- Create Actors table
CREATE TABLE IF NOT EXISTS actors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE
);

-- Create Costumes table
CREATE TABLE IF NOT EXISTS costumes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    era TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL
);

-- Create Hires table
CREATE TABLE IF NOT EXISTS hires (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    actor_id INTEGER NOT NULL,
    costume_id INTEGER NOT NULL,
    hire_date TEXT NOT NULL,
    return_date TEXT,
    status TEXT DEFAULT 'Hired',
    FOREIGN KEY (actor_id) REFERENCES actors(id),
    FOREIGN KEY (costume_id) REFERENCES costumes(id)
);
