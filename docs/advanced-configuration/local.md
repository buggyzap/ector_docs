---
sidebar_position: 2
---

#  Local Development

Local development is a fundamental aspect of building and customizing Prestashop themes and modules effectively. It provides developers with a fast, controlled, and versioned environment to work on their projects. In this chapter, we will guide developers on how to set up a local development instance for the Ector theme.

## Docker for Local Development

We highly recommend using Docker to create a containerized development environment. Docker simplifies the setup process, ensuring that all necessary dependencies are isolated within containers, making it easy to manage and reproduce your local development environment.

### Sample Docker Compose File

Below is a sample `docker-compose.yml` file to get you started with a local development environment for the Ector theme:

```yaml
version: '3'
services:
  prestashop:
    image: prestashop/prestashop:latest
    ports:
      - "8080:80"
    volumes:
      - ./prestashop:/var/www/html

  database:
    image: mariadb:latest
    environment:
      MYSQL_ROOT_PASSWORD: your_root_password
      MYSQL_DATABASE: prestashop
    ports:
      - "3306:3306"
    volumes:
      - ./mysql:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    links:
      - database
    ports:
      - "8081:80"
    environment:
      PMA_HOST: database
      MYSQL_ROOT_PASSWORD: your_root_password

  redis:
    image: redis:latest
    ports:
      - "6379:6379"
```

**Note**: Replace `your_root_password` with your desired MySQL root password.

This Docker Compose file sets up containers for Prestashop, a MariaDB database, phpMyAdmin, and Redis. It exposes ports to access Prestashop on `http://localhost:8080` and phpMyAdmin on `http://localhost:8081`. Ensure you have Docker and Docker Compose installed on your local machine.

### Using Local Development

Once you've set up your Docker environment using the provided `docker-compose.yml` file, you can begin using it for local development:

1. **Access Prestashop**: Open your web browser and navigate to `http://localhost:8080` to access the Prestashop instance running in your Docker container.

2. **Access phpMyAdmin**: To manage your MySQL database, open a browser and go to `http://localhost:8081`. Log in with the MySQL root user credentials you specified in the `docker-compose.yml` file.

3. **Theme and Module Development**: Work on your Ector theme and modules within the `./prestashop` directory on your local machine. Any changes you make will be reflected in the Prestashop instance running in the container.

4. **Database Interaction**: Use phpMyAdmin to interact with the MySQL database directly, making it easy to manage your Prestashop data.

5. **Redis Integration**: Redis is available and can be utilized in your development as needed.

Setting up a local development environment with Docker ensures that you have a controlled and isolated environment to work on your Ector theme and modules. This approach enhances your development experience and allows for efficient testing and debugging before deploying changes to production.

In the subsequent chapters, we will explore advanced configuration options and customization techniques for the Ector theme.