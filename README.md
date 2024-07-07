# Campus Connect

## Getting Started

### Environment Variables
1. Copy & paste the `.env.example` file in the root of the project as `.env`.
2. Generate your own `JWT_SECRET` with this terminal command and update your `.env` `JWT_SECRET` with the generated value:
    ```bash
    node --print "require('crypto').randomBytes(32).toString('hex')"
    ```
   or
   ```bash
     openssl rand -hex 32
   ```

### Set Up Docker
1. Pull the Postgres image:
    ```bash
    docker pull postgres
    ```
2. Start Docker Compose (this will run the `docker-compose.yaml` file):
    ```bash
    docker-compose up
    ```
   This will create an empty database with Docker.

### Log In to Postgres Database
You can change credentials in your `.env` file if needed.

- **Host:** localhost
- **Port:** 5432
- **Username:** admin
- **Password:** example

### Start Your App
1. Install dependencies:
    ```bash
    npm install
    ```
2. Run the development server:
    ```bash
    npm run dev
    ```
3. Generate Prisma client (run every time you change the schema):
    ```bash
    npx prisma generate
    ```
4. Populate the database (run to seed the database):
    ```bash
    npx prisma db seed
    ```
