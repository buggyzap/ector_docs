---
sidebar_position: 1
---
# Ector Core

The Ector Core Module is the cornerstone of the Ector Prestashop theme and modules ecosystem. It serves as the central module that provides core functionalities essential for enhancing and customizing your Prestashop website. This module offers developers a straightforward method for creating native file overrides of other modules, facilitating theme customization and optimization.

## What the Module Does

The Ector Core Module primarily serves two key purposes:

1. **Native File Overrides**:
   - Ector Core simplifies the process of creating native file overrides for other modules. It introduces a designated folder called "module_overrides" where developers can place their override files. These overrides follow the format: `folder_module_name/version`.
   - Web agency developers can add overrides as needed, allowing for seamless customization of module behavior without modifying the module's core files directly. This ensures better maintainability and compatibility with future module updates.

2. **Async Loaded CSS**:
   - Ector Core provides a powerful feature through the "AsyncCss" hook. Developers can leverage this hook to asynchronously load CSS resources on specific controllers or pages of their Prestashop website.
   - This capability enhances website performance by optimizing the loading of CSS resources, improving page load times, and ultimately delivering a better user experience.

## What Configurations Are Available

The Ector Core Module offers the following configuration options:

1. **Module Overrides**:
   - Developers can configure and manage native file overrides in the "module_overrides" folder, organizing them based on the module name and version.

2. **AsyncCss Hook Configuration**:
   - Developers can access the source code to learn more about how to use the "AsyncCss" hook for loading CSS resources asynchronously. Configuration parameters can be adjusted to meet specific requirements.

## Screenshots

![Ector Core Module - Module Overrides](https://via.placeholder.com/800x600.png?text=Ector+Core+Module+-+Module+Overrides)

*Figure 1: Module Overrides in the Ector Core Module*

![Ector Core Module - AsyncCss Hook](https://via.placeholder.com/800x600.png?text=Ector+Core+Module+-+AsyncCss+Hook)

*Figure 2: AsyncCss Hook Configuration in the Ector Core Module*

## Module Overview

The Ector Core Module lays the foundation for efficient customization and optimization of your Prestashop website. By simplifying native file overrides and providing the ability to load CSS resources asynchronously, this module empowers developers to create exceptional online stores tailored to their clients' needs. Explore the module's source code and documentation for comprehensive details on its functionalities and customization options.
