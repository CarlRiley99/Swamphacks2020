# Money Leak (Swamphacks 2020 Submission)

## Inspiration
We often find ourselves procrastinating on important things: studying for an exam, working on homework/projects, doing the laundry, or cleaning your room. There are many ways of trying to fight against procrastination. Our way of fighting it is to motivate ourselves with money.

## What it does
Our application is fairly simple. Users deposit a certain amount of money into their account. They then enter tasks they want to complete, a deadline for each task to be completed by, and the amount of money they want to dedicate towards that task. Once a user finishes a task, they click finish and the task goes away. For each day that the user goes over the deadline, the money dedicated towards the task decreases by a certain amount (We want the user to select different rates). This money is automatically donated towards the charity of their choice. This app will not make your bank account go negative. Once you are out of money, then it will stop deducting.

## How I built it
- HTML/CSS 
- JavaScript 
- MEAN Tech stack (MongoDB, ExpressJS, AngularJS, Node.js) 
- GitHub for version control

## Challenges I ran into
- 2 people in the group had minimal experience in coding and had zero experience in MEAN tech stack or building web apps.
- 1 person in the group has zero experience in programming.
- Setting up git and github on everyone's laptop was not working.
- Added button functionality using AngularJS, but the function was not being called when the button was pressed.
- MongoDB was initializing attributes that didn't exist. We had deleted them from the schema but MongoDB thought it still existed. It was setting this non-existent attribute to null. This created a duplicate-key error that was hard to debug. The error message did not specify what attribute was set to null. 

## Accomplishments that I'm proud of
- 75% of the group had zero to minimal experience in programming and still managed to build a functioning web app by the end of the hackathon.

## What I learned
- How to teach people who have zero to minimal experience in programming.
- MongoDB is a database management system
- ExpressJS acts a bridge to connect the front end with the back end
- AngularJS adds additional functionality to html
- Node.js helps create the server and runs the back end.

## What's next for Money Leak
- Include financial transaction APIs (Bank of America has APIs and Paypall has some)
- Slowly build it with other team members so that they can learn more about software development and using the MEAN stack.
- Incorporate user sign in
