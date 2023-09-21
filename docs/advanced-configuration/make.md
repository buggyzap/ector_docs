---
sidebar_position: 3
---

# Make Commands

Managing common development operations efficiently is crucial for a seamless development process. In this chapter, we'll introduce a set of Make commands that streamline essential tasks like deployment, versioning, testing, and building for the Ector theme and modules.

## Sample Makefile Commands

Below are sample Makefile commands that you can use to perform various tasks during your development workflow:

### 1. **compose**

This command launches the Docker Compose environment for local development. It starts the containers defined in your `docker-compose.yml` file, including Prestashop, the database, phpMyAdmin, and Redis.

```make
compose:
    docker-compose up -d
```

### 2. **compose-build**

This command rebuilds the Docker Compose environment. It is useful when you've made changes to your Docker setup or dependencies.

```make
compose-build:
    @read -p "Are you sure you want to build the environment? THIS WILL PERMANENT DELETE AND REINSTALL PRESTASHOP [y/N] " -n 1 -r; \
    echo ; \
    if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
    docker-compose up -d --build; \
    fi
```

### 3. **theme-zip**

The `theme-zip` command creates a zip archive of your Ector theme for easy distribution or deployment.

```make
theme-zip:
    zip -r ector-theme.zip ./path/to/theme
```

### 4. **module-zips**

The `module-zips` command creates zip archives for Ector modules, allowing you to package them for distribution or installation.

```make
module-zips:
    @for module in $(MODULES); do \
        echo "Create the .zip of $$module module"; \
        cd modules/$$module && MODULE_NAME=$$module $(MAKE) zip-me && cd ../../; \
    done
```

### 5. **zip-all**

This command creates zip archives for both the Ector theme and modules in one go.

```make
zip-all:
    @echo "Create the .zip of all modules"
    @$(MAKE) theme-zip
    @$(MAKE) module-zips
```

### 6. **deploy**

The `deploy` command facilitates deploying your Ector theme and modules to a live server. It can be customized to match your deployment process.

```make
deploy:
    # Add your deployment steps here
```

### 7. **release-interactive**

The `release-interactive` command guides you through the process of creating a new release interactively. This may involve updating version numbers, creating release notes, and performing any other necessary tasks.

```make
release-interactive:
    # Add interactive release process here
```

### 8. **release**

The `release` command automates the process of creating a new release for your Ector theme and modules, potentially including version number updates and release notes generation.

```make
release:
    # Add automated release process here
```

These Makefile commands simplify common development operations, making it easier to manage your Ector theme and modules. You can customize these commands to fit your specific development and deployment workflow. Using Make commands helps ensure consistency and efficiency throughout your development process.

In the following chapters, we will explore more advanced configurations and customization options for the Ector theme and modules.
