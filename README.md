# UC Merced Greenhouse Application

## Overview
Welcome to the UC Merced Greenhouse Application! This application is designed to automate greenhouse management processes at UC Merced. It provides a platform for users to request space in the greenhouse and for admins to manage those requests efficiently. The application is built using Python, Docker, Flask for the backend, and HTML, CSS, and JavaScript for the frontend. Docker is utilized for containerization, ensuring easy deployment and scalability.

## Features
- **User Registration and Authentication**: Users can register and log in to access the application.
- **Admin Panel**: Admins have access to a dedicated panel where they can review and manage requests for greenhouse space.
- **User Dashboard**: Users can view the status of their requests and submit new requests for greenhouse space.
- **Request Management**: Admins can accept or decline requests submitted by users.
- **Automated Greenhouse Management**: Upon admin approval, the application automatically updates the greenhouse Excel sheet and vision file.

## Technologies Used
- **Backend**:
  - Python
  - Flask
  - Docker

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## Installation and Setup
1. Clone the repository from [GitHub Repository URL].
2. Navigate to the project directory.
3. Install Docker if not already installed on your system.
4. Build the Docker image:

docker build -t greenhouse-app .

5. Run the Docker container:

docker run -p 5000:5000 greenhouse-app

6. Access the application in your web browser at `http://localhost:5000`.

## Usage
1. **User Registration/Login**: Users need to register and log in to access the application.
2. **Submit Request**: Users can fill out the form to request space in the greenhouse.
3. **Admin Review**: Admins can access the admin panel to review and manage requests.
4. **Approve/Decline Requests**: Admins can approve or decline requests submitted by users.
5. **Automated Updates**: Upon admin approval, the application automatically updates the greenhouse Excel sheet and vision file.

## Contributors
University of California, Merced Data Specialist team

## Support
For any issues or inquiries, please contact ssaldivar3@ucmerced.edu

## License
This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.


