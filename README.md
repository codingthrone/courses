# Discord.js Basics
> A quick easy and guide to making a simple bot that goes over most features of Discord.js

# 🔨Set Up

## Node.js Set Up
Firstly you will want to head over to [node.js](https://nodejs.org/en/) and download the shown **LTS** by following the installation steps.
After doing so you will need to head over to your node.js console which can be found by searching for it on your devices search bar.
After locating the node.js console you will need to create a new folder for your botin your desired location. then you will need to locate your folder in you node.js console and run the following commands.
- Follow this if your folder is in documents
```
cd documents
// Then
cd (folder name)
```
> - if you weren't already in your users folder whne the console opened then follow the steps bellow
```
cd Users 

cd (user name)

cd documents

cd (folder name)
```
**REMINDER** *make sure your in the Node.js Command Prompt*

You will then need to run the following command once your in the folder.
```npm init```
Wait for everything to compile and you will be promted with some questions such has name, verison of the project. You can skip all of them unless you want to change some things. **Keep the entry point** ```index.js```.

- We have now done the Node.js Set up

## Discord.js Installation / Bot set-up
Now that we have Node.js installed we will now need to install [Discord.js](https://discord.js.org/#/), you can do this by running
```
npm install discord.js
```
in your Node.js command prompt or you can run this command in your **Vs Code** terminal while having your bot folder open.

You will now need to go register your bot on the [Discord Developer Bot Dashboard](https://discord.com/developers/applications). Log in and follow the steps below.
> - Click on **New Application** on the top right of applications page and give your bot a name.
> - Now after making the bot you will need to select it if not done already
> - Click on the ***Bot*** Tab on the left side of the screen
> - Click **Add Bot**
> You have now made your bot
**Disclaimer**: ***Dont share your BOT TOKEN this will be used to log into your bot***
To invite your bot to your server you will need to go back to your **General Information Tab** and copy your ***Client ID***.
Then head over to [Permissions Calculator](https://discordapi.com/permissions.html) and select the permissons you want your bot to have.
Paste your client id on the bottom of the page and click on the link to invite your bot.

**YOUR ALL SET**

## Getting started
Now that we are all set lets set up a basic command.

> Lets first start by setting up some ```const``` variables that we will be needing.
```
const Discord = require('discord.js');
//makes sure we are using discord.js

const client = new Discord.Client();
//makes a new discord client

const prefix = '`';
//the prefix for your bot that will be used before each command

const fs = require('fs');
//command handler
```
After doing so go ahead and make a ```commands``` folder in your bot folder.
