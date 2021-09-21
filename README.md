# README

# BelayChain Technical Documentation
Created by: Kat Leight

Happy Trails is a full stack application that stores hiking trail route information. 
 

## SUMMARY
This app stores hiking trail route information, including name, distance (in miles), elevation gain (in feet), description, description url, and a thumbnail url. 

APP FEATURES

This app allows a user to view existing trails. 
A user may add a new trail.
A user may delete a trail.
A user may filter trails by elevation gain. 


## API
The API for this app is set up as a Node.js/Express API connected to a postgresql database. 
 

## TECHNOLOGY
This app was created using Node.js, Express, postgresQL, React, Javascript, and CSS.

## TO RUN
Download the repo. From the backend folder:
 run `npm install`
 then `createdb`
 then `npx knex migrate:latest`
 then `npx knex seed:run`
 then `npm run dev`

From the frontend folder:
 run `npm start`
