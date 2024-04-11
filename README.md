# Welcome to your CDK TypeScript project
AWS CDK and React File Upload Project
This project demonstrates a full-stack application that allows users to upload files and save related metadata. It uses AWS Cloud Development Kit (CDK) to define cloud infrastructure programmatically and deploys a React front-end application for user interaction.

Description
The backend infrastructure is set up using AWS CDK to create resources such as Amazon S3 for file storage, AWS Lambda for serverless computing, Amazon API Gateway for creating RESTful endpoints, and Amazon DynamoDB for storing metadata. The frontend is a React application allowing users to upload files through a simple interface. This project showcases how to integrate a React application with AWS services using AWS CDK.

Prerequisites
Before running this project, ensure you have the following installed:
Node.js and npm (Node Package Manager)
AWS CLI, configured with your AWS account credentials

Installation and Deployment

**Backend Setup**
Clone the repository and navigate to the CDK project directory:

git clone https://github.com/sidhantsadawarti25/AWS-Cloud-Development-Kit-Project.git
cd AWS-Cloud-Development-Kit-Project

Install the necessary dependencies:

npm install
Bootstrap your AWS environment (if you haven't already):

cdk bootstrap aws://ACCOUNT_ID/REGION

Deploy the AWS resources defined in the CDK application:

cdk deploy

**Frontend Setup**
Navigate to the React frontend directory:

cd path/to/your-react-frontend
Install the dependencies for the React application:

npm install
Running the Application
Start the React frontend application:


npm start
This command will open the application in your default web browser. You can upload files and view the uploaded file's metadata saved in DynamoDB through the interface.

Using the Application
To upload a file, select "Choose File" and pick a file from your system. Click "Upload" to start the upload process.
The application will display a success message once the file is uploaded, and the metadata is saved in DynamoDB.


The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
