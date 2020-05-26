# Cody's Untitled Game

## Tech Stack Details

### Backend

To get the server running locally:

  Prequisites:
    - Docker Desktop or Docker Toolbox installed.
    - Prisma Cli installed globally `npm i -g @prisma/cli`

  1. Clone this repo.

  2. Navigate into server folder with command `cd server/`

  3. Install the server dependencies with `npm install`

  4. Create .env file with the following environment variables:
    - DB_USER - the username for the postgresql database user for the app
    - DB_HOST - the hostname of the postgresql database
    - DB_NAME - the name of the postgresql database
    - DB_PW - the password for the user connecting to the postgresql database

  5. Run the command `docker-compose -f prisma/docker-compose.yml up -d` to create the local Docker containers.

  6. Verify that the Docker Container is running prisma_postgres_1 and connecting to the Heroku Database and accepting connections. Verify prisma_prisma_1 is running on Port: 4466

  7. Deploy Prisma with command `prisma deploy`

  8. Start the local server with `npm run server`

  9. Start the testing environment with `npm run test`

#### Framework

- Our backend server is built using graphql-yoga. graphql-yoga is the easiest way to set up a GraphQL server that includes subscriptions, compatible with all graphql clients and is based off [express](https://github.com/expressjs/express) and [apollo-server](https://github.com/apollographql/apollo-server). Learn more on [graphql-yoga](https://github.com/prisma-labs/graphql-yoga)

- PostgreSQL is used as the database as it is one of the most full-featured open-source database platforms. Learn More on [PostgreSQL](https://www.postgresql.org)

- Prisma will be used to communicate between our graphql-yoga server and our PostgreSQL database. Learn more about [Prisma](https://www.prisma.io/docs/)

- The API will be built using the [GraphQL Specification](https://spec.graphql.org)

- Testing is done using the Jest testing library. All tests are found within the server/tests/ folder. Learn more about [Jest](https://github.com/facebook/jest)

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue or draft pull request with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.

- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.

- Create a live example of the problem.

- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project. It is recommended to create a draft pull request first and when ready for review add the owners of this repository to review the pull request.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too. Full details on the MIT License can be found in the LICENSE.md at the rood of the project.

#### Pull Request Guidelines

- Pull Request written using the template in pull_request_template.md

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations, and container parameters.

- Ensure that your code conforms to our existing code conventions and test coverage.

- Include the relevant issue number, if applicable.

- You may merge the Pull Request in once you have the sign-off of the owners of the repository, or if you do not have permission to do that, you may request one of the owners to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing or otherwise, unacceptable behavior may be
reported by contacting the owners of the project. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality concerning the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

The Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4
