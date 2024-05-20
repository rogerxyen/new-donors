# Donor Management App

This is a simple React application for managing donor profiles. The application allows donors to submit their details via a form. After admin staff approval, the donor profiles are displayed in a feed.

## Features

- **Donor Form**: A form for donors to submit their name, email, photo, and description.
- **Feed**: Displays approved donor profiles.
- **Admin Approval**: Only approved donor profiles are displayed in the feed.

## Setup

### Prerequisites

- Node.js and npm installed on your machine.
- A code editor like VSCode.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/donor-app.git
   cd donor-app

2. Install dependencies:

npm install

### ###Development Server
To start the development server, run:

bash
Copy code
npm run dev
The application will be available at http://localhost:3000.


### Project Structure
src/components/DonorForm.jsx: Component for the donor submission form.
src/components/Feed.jsx: Component for displaying the approved donor profiles.
src/App.jsx: Main application component, manages state and renders DonorForm and Feed.
src/main.jsx: Entry point of the application, renders the App component.
src/index.css: Basic styles for the application.

Components
DonorForm
A form that allows donors to submit their name, email, photo, and description. Upon submission, the data is passed to the parent component.

Feed
Displays the list of approved donor profiles. Profiles are shown with their photo, name, email, and description.

### How to Use
Click the "Add Donor" button to display the donor submission form.
Fill out the form with the donor's details and submit.
The submitted profile will not appear in the feed until it is approved by an admin (currently, the approval feature is implied but not implemented in detail).
Future Enhancements
Implement a real admin approval process.
Persist donor data using a backend server or local storage.
Add more styling and make the UI more user-friendly.
Implement validation for the form fields.
Contributing
Feel free to fork the repository and make improvements. Pull requests are welcome!

###License
This project is licensed under the MIT License.

This README file provides an overview of the project, setup instructions, component descriptions, usage guidelines, and potential future enhancements.

