# AI Development Guidelines

## Project Overview

This repository contains a capstone project developed as part of the FlyRank internship track.

AI assistants may help with planning, implementation, testing, debugging, documentation, and code review. All generated changes must remain understandable and reviewable by the developer.

## Technology Stack

The initial development stack is:

* Node.js LTS
* JavaScript or TypeScript
* Git and GitHub
* Google Antigravity
* AI coding assistants such as Kilo Code, OpenCode, or Blackbox

Update this section when the final framework, database, testing tools, and deployment platform are selected.

## Code Conventions

* Use clear and descriptive variable and function names.
* Prefer small, focused, reusable functions.
* Avoid duplicated logic.
* Add comments only where the intention is not obvious.
* Keep files focused on a single responsibility.
* Use consistent formatting throughout the project.
* Never commit passwords, API keys, access tokens, or `.env` files.
* Validate user input before processing it.
* Handle expected errors gracefully.

## Git Conventions

Use Conventional Commits for every commit.

Format:

```text
<type>[optional scope]: <description>
```

Allowed common types:

* `feat`: introduces new functionality
* `fix`: fixes incorrect behaviour
* `docs`: changes documentation
* `style`: changes formatting without changing behaviour
* `refactor`: restructures code without changing functionality
* `test`: adds or updates tests
* `chore`: performs maintenance or repository setup
* `build`: changes dependencies or the build system
* `ci`: changes continuous-integration configuration

Examples:

```text
feat(auth): add user login
fix(api): handle missing request parameters
docs: improve installation instructions
test: add validation tests
chore: configure development environment
```

Commit descriptions should:

* Use lowercase after the colon
* Use the imperative mood
* Be concise and specific
* Avoid a full stop at the end

## AI Assistant Instructions

Before editing files:

1. Read `README.md` and this file.
2. Review the existing project structure.
3. Explain the intended change briefly.
4. Avoid changing unrelated files.
5. Preserve the project's existing conventions.
6. Verify the result after making changes.

When completing a task:

1. Summarize the changes made.
2. Identify the files changed.
3. Mention any assumptions.
4. Suggest an appropriate Conventional Commit message.
5. Report any tests or validation performed.

## Documentation Standards

Keep the README synchronized with the project.

The README should eventually include:

* Project overview
* Features
* Technology stack
* Prerequisites
* Installation instructions
* Environment-variable configuration
* Development commands
* Testing instructions
* Deployment instructions
* Project structure
* License information

## Security Rules

* Never expose credentials in source code or documentation.
* Use environment variables for sensitive configuration.
* Do not commit `.env` files.
* Do not install unknown dependencies without explaining why they are needed.
* Prefer actively maintained packages.
* Ask for confirmation before deleting important files or making destructive changes.

## Testing Expectations

When functionality is added:

* Add appropriate tests where practical.
* Test both successful and failure scenarios.
* Run relevant tests before considering a task complete.
* Do not claim that tests passed unless they were actually executed.
