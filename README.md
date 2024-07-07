# Campus Connect

## Getting Started

### Environment Variables
- Copy & paste the [.env.example](.env.example) file in the root of the project as `.env`
- Generate your own JWT_SECRET with this terminal command & update your [.env](.env) JWT_SECRET with your generated value
  - Generate your JWT_SECRET: `openssl rand -hex 32`

### Set up docker
- `docker pull postgres`
- `docker-compose up` (this will run the [docker-compose.yaml](docker-compose.yaml)) file
- This will create an empty database with docker
- Log in to postgres database (you can change credentials in your [.env file](.env))
  - host: localhost
  - port: 5432
  - username: admin
  - password: example

### Run these commands to start your app
- `npm install`
- `npm run dev`
- `npx prisma generate` (run everytime you change the [schema](prisma/schema.prisma))
- `npx prisma db seed` (run to populate database)
