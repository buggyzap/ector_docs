---
sidebar_position: 4
---

# Ector CLI

The Ector CLI Module is a developer-centric toolset that enhances the development experience by providing a set of utility commands. These commands are designed to facilitate various tasks related to managing redirects and ensuring seamless migration from Magento to Prestashop. While the module does not offer frontend or back-office functionalities, it plays a crucial role in streamlining critical development operations.

## Available Commands

### 1. magento_migration:delete

:::caution

This command is only available if the `lgseoredirect` module is installed.

:::

The `magento_migration:delete` command is responsible for managing redirects and removing all associated records from the Prestashop database. This command is particularly useful when you need to clean up redirection data, making it essential for maintaining a well-structured website with accurate URL handling. It should be noted that this command has a dependency on the `lgseoredirect` module.

### 2. magento_migration:execute

:::caution

This command is only available if the `lgseoredirect` module is installed.

:::

The `magento_migration:execute` command is a versatile tool that simplifies the process of migrating from Magento to Prestashop while ensuring an optimal SEO transition. When invoked, this command will prompt the developer to provide essential information, including database connection credentials and store ID setup.

The primary functionalities of the `magento_migration:execute` command include:

- **Synchronization**: This command synchronizes all available URLs of products from Magento to Prestashop, ensuring that no product pages are lost during the migration process.

- **301 Redirects**: It creates the necessary 301 redirects in Prestashop to maintain SEO integrity. This ensures that users and search engines are seamlessly redirected to the corresponding Prestashop product pages, preserving valuable search engine rankings and user experience.

## How to Launch CLI Commands

Launching CLI commands provided by the Ector CLI Module is a straightforward process. Developers can execute these commands by following these steps:

1. **Navigate to Module Directory**: Open your terminal or command prompt and navigate to the directory where the Ector CLI Module is installed. You should be in the root directory of your Prestashop installation.

2. **Execute Command**: To run a specific command, use the following syntax:
   
   ```
   php bin/ector_cli <command>
   ```

   Replace `<command>` with the name of the CLI command you wish to execute, such as `magento_migration:delete` or `magento_migration:execute`.

By following these steps, developers can easily access and run the Ector CLI commands, streamlining development tasks and ensuring a smooth transition during migrations and URL management.

## Module Benefits

The Ector CLI Module may not offer traditional user-facing features, but it greatly enhances the efficiency and accuracy of critical development tasks. Developers can leverage these commands to manage redirects effectively, maintain SEO integrity during migrations, and ensure a smooth transition from Magento to Prestashop.

By providing a user-friendly command-line interface and automating complex operations, the Ector CLI Module simplifies the development process, reduces manual effort, and helps maintain the high standards of SEO and user experience that Prestashop websites require.