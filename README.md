# Notion social media content calendar

This project exists because there is a need to generate an automated content calendar for social media publication.
With the aim of solving this problem, the project was born with the goal of creating an application that consumes the Notion API to generate a calendar, updated with the current year, considering a list of content types. This project was developed using Node.js

## Goals

Generating a calendar that defines the content to be published on each day of the week arose as a need when the user tried to use a spreadsheet they had purchased in the past, containing a content planning for social media.
However, updating this spreadsheet for the current year would require manual effort from the user, so the creation of an updated calendar generator containing a content plan for social media was considered

## Requirements

 - [X] Generate a calendar for the current year in Notion. The calendar should include information about the type of content, social media platforms, and publication date.
 - [X] Consume a file containing content recommendations for social media.
 - [X] Populate the calendar with content.

## Setup

To obtain a copy of the project on your local machine, you can make a copy through a [clone](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository).
Make sure to set up your environment with the tools, languages, and frameworks used.

### Configuration

#### Obtaining Notion Settings

##### Step 1: Create an integration.
- Go to https://www.notion.com/my-integrations.
- Click the "+ New integration" button.
- Give your integration a name.
- Select the workspace where you want to install this integration.
- Choose the resources your integration will have access to.
- Click "Send" to create the integration.
- Copy the "Internal Integration Token" on the next page and save it securely, for example, in a password manager.


##### Step 2 - Setting up the database

Initially, integrations do not have access to any pages (or databases) in the workspace. A user must share specific pages with an integration for those pages to be accessed using the API. This helps keep you and your team's information in Notion secure.

Start from a new or existing page in your workspace. Insert a new database by typing "/database" and selecting a "full page" table. Give the table a title. Click the "Share" button and use the selector to find your integration by name and click "Invite."

Your integration now has the requested permissions in the new database. Once an integration is added to a workspace, any member can share pages and databases with that integration—there's no need to be an admin for this step.

Before proceeding, you need the ID of the database you just created. Copy the URL of your Notion database. Ensure you're viewing the database as a full page if you're using an inline database.

If you're using the Notion desktop app, click the "Share" button and select "Copy Link."

The database ID is the part of the URL after your workspace's name (if you have one) and before the question mark (?). The ID has 32 characters, containing numbers and letters. Copy the ID and paste it somewhere you can easily find it later.

Example:
>https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
>                                 
>                                 |--------- Database ID ----------|

#### Step 3 - Configuring the database columns

At this point, you need to manually set up the columns in the Notion database. For this project, the following columns were considered:

- Content
- Category
- Social Media
- Date

> As a future improvement, it is recommended to extract this information from environment variables.

### Configuring the Environment

Set up the .env file as follows:

```environment
NOTION_KEY=your_secret
NOTION_DATABASE_ID=your_database_id
```

### Configuring the Database

Content recommendations are located in the database at "/data/contents.csv." Feel free to add more content if necessary.

## Using the Application

To run the application, execute the following command in a terminal:

```powershell
node index.js
```

## Automated Tests

Execute the following command in a terminal:

```powershell
TO-DO
```

## How to Contribute

Please contribute to get details on my process for submitting pull requests.

## Versioning

I use SemVer for version control.

## Author

I am Luis Felipe Brum, a Backend developer with experience in information security and integration architecture.

<a href="https://www.felipebrum.com"><img src="https://avatars.githubusercontent.com/u/53919226"  width="40"> <a href="https://br.linkedin.com/in/luisfelipebrum"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"  width="40"> <a href="https://www.instagram.com/eunaoeradev"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"  width="40"> <a href="https://www.tiktok.com/@eunaoeradev"><img src="https://i.pinimg.com/originals/22/0a/62/220a624ba2fa59ddda4db763f474f50f.jpg"  width="40">
<a href="https://twitter.com/eunaoeradev"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" width="40">

## Contributors
| Colaborador   | Github |
|--------------|:----------------:|
| Luis Felipe Brum | [atalhox](https://github.com/atalhox) |

🎁 Expressions of Gratitude

- Tell others about this project 📢
- Invite me for a beer 🍺
- Publicly express your gratitude 🤓.
