
# CostumeCloset – Costume Management REST API

## About the Project

CostumeCloset is a REST API-based costume management system developed using Node.js, Express.js, and PostgreSQL. It is designed to manage costume details, actor information, and costume hiring records in an organized way.

The application provides API endpoints to perform CRUD operations on costumes, retrieve actor details, manage hire records, and search costumes based on their historical era. It also supports input validation and SQL JOIN operations to retrieve related information from multiple tables.

## Objectives

- To manage costume details efficiently.
- To maintain actor information.
- To manage costume hiring and return records.
- To search costumes based on historical eras.
- To implement REST API operations using Express.js.
- To store and retrieve information using PostgreSQL.
- To validate user inputs and handle errors appropriately.

## Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – REST API development
- **PostgreSQL** – Database management
- **JavaScript** – Application programming
- **Postman** – API testing
- **Render** – Cloud deployment
- **GitHub** – Version control and collaboration

## Main Features

1. **Costume Management:** Add, retrieve, update, and delete costume records.
2. **Actor Management:** Retrieve actor information from the database.
3. **Hire Management:** View costume hiring records and individual hire details.
4. **JOIN Operations:** Retrieve actor and costume information together with hire details.
5. **Era-Based Search:** Search costumes based on Medieval, Modern, and Fantasy eras.
6. **Input Validation:** Validate costume details and search requests.
7. **Database Integration:** Store application data using PostgreSQL.

## Project Structure

```text
CostumeCloset/
│
├── 01_Kolla_Indhu/
│   ├── database.js
│   ├── schema.sql
│   └── seed.js
│
├── 02_Mandava_Roopa_Santhoshi/
│   ├── actors.js
│   ├── costumes.js
│   ├── hires.js
│   ├── costumeController.js
│   └── hireController.js
│
├── 03_N_Dhivija/
│   ├── eraValidation.js
│   └── validation.js
│
├── 04_Garipally_Akshith/
│   ├── app.js
│   └── server.js
│
├── screenshots/
├── postman/
├── package.json
└── package-lock.json
```

## API Functionalities

| Module | Functionality |
|---|---|
| Costumes | Add, view, update, and delete costumes |
| Actors | Retrieve actor details |
| Hires | Retrieve hire records and hire details |
| Search | Search costumes by era |
| Validation | Validate inputs and handle invalid requests |

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/roopasanthoshi/CostumeCloset.git
```

**2. Navigate to the project folder**

```bash
cd CostumeCloset
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure the database**

Set the PostgreSQL connection string using the `DATABASE_URL` environment variable.

**5. Start the application**

```bash
npm start
```

The server runs on the port configured by the environment or defaults to port 3000.

## Team Contributions

| Member | Contribution |
|---|---|
| Kolla Indhu | Database connection, schema design, and sample data insertion |
| Mandava Roopa Santhoshi | Costume, actor, and hire REST API development |
| N. Dhivija | Era-based costume search and input validation |
| Garipally Akshith | Express server setup, application integration, and deployment preparation |

## API Testing

The API endpoints were tested using Postman. Different requests were used to verify data retrieval, costume management operations, hire details, era-based searches, and validation responses.

## Deployment

The application is successfully deployed using Render and connected to a PostgreSQL database.

**Live Application:**  
https://costumecloset.onrender.com

**GitHub Repository:**  
https://github.com/roopasanthoshi/CostumeCloset

## Conclusion

CostumeCloset demonstrates the development of a collaborative REST API application using Node.js, Express.js, and PostgreSQL. The project helped us understand backend development, database connectivity, API integration, input validation, version control, and cloud deployment. The final application is deployed on Render and available through the live deployment link.
