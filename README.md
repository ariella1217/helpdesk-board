# Helpdesk Ticket Board

A ticket management app built with Next.js that lets you browse, filter, and queue helpdesk tickets.

## How to Run

First install everything by running npm install in your terminal. Then start the app with npm run dev. Open your browser and go to http://localhost:3000.

---

## Features Checklist

### Project Setup & Structure 

I created a Next.js app with the correct settings. All files are in the right folders. The app runs without errors and includes this README.

### Components + JSX + Keys 
I made 8 separate components for different parts of the app. Interactive components have 'use client' at the top. I used proper keys with ticket.id when showing lists of tickets.

### Props + Lifting State

The Board component manages all the data like tickets, filters, and the queue. Child components get their data through props. Functions are passed down to handle button clicks and input changes.

### State + Controlled Inputs

I used useState to manage all the data. The status dropdown, priority dropdown, and search box are all controlled inputs. This means their values come from state and update through onChange handlers.

### Effects + Cleanup

Tickets load from the API when the page first opens using useEffect. There's another useEffect that makes tickets update automatically every 7 seconds. I included a cleanup function to prevent memory problems.

### UX + Conditional Rendering

The app shows "Loading..." while getting tickets from the API. If something breaks it shows an error message. When filters don't match any tickets it says "No tickets found." Buttons get disabled when they shouldn't be clickable, like when a ticket is already in your queue.

---

## What Works

The app loads 15 tickets from the API when you open it. You can filter tickets by status with options like All, Open, In Progress, On Hold, and Resolved. There's also a priority filter with Low, Medium, High, and Critical options. The search box lets you type keywords to find specific tickets. You can add tickets to My Queue, remove them one at a time, or clear everything. Tickets change their status and priority automatically while you're using the app.

---

## File Structure

The main page is in src/app/page.js. The API route that returns ticket data is at src/app/api/tickets/route.js. All the interactive components are in src/app/components including Board.jsx which is the main one, TicketList.jsx that shows all tickets, TicketCard.jsx for individual tickets, StatusFilter.jsx and PriorityFilter.jsx for the dropdowns, SearchBox.jsx for searching, MyQueueSummary.jsx to show queued tickets, and StatusMessage.jsx for loading and error messages. There's also a helper file at src/app/lib/severity.js.

---

## User Stories Tested

Tickets load automatically when I open the page. I can filter tickets by status and priority using the dropdowns. I can search for tickets by typing keywords in the search box. I can add tickets to my queue and see them listed at the top. The app shows loading and error messages when appropriate. Tickets update their status and priority automatically while I'm browsing the page.
