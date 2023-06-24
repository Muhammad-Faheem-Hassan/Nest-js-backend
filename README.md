# Capital Instruments Main Service

## Dependencies

### MongoDb (5.0.3 version)

### NodeJs (14.18.1 version)

### AWS S3 Credentials

### SMTP Credentials

<br>

## Environment Variables

| Key                | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| NODE_ENV           | This is the current running environment of the project and it can be either production or staging |
| ENCRYPT_JWT_SECRET | The secret key for encrypt jwt secret.                                                            |
| MONGO_CON_STRING   | This is the mongo connection data string.                                                         |
| JWT_SECRET         | This is the secret key for JWT                                                                    |
| accessKeyId        | This is an AWS access key for using AWS services, it must have S3 read and write permission       |
| secretAccessKey    | This is an AWS secret key for using AWS services, it must have S3 read and write permission       |
| region             | We can set the region of AWS S3(eu-central-1)                                                     |
| Bucket             | Use S3 bucket name which you will use in the project                                              |
| SMTP_EMAIL         | Your email address for sending emails                                                             |
| SMTP_PASSWORD      | Must set the password given by your SMTP provider                                                 |

## Run the Project

`npm install`

## Pass Environment Variables

`NODE_ENV=development accessKeyId=xxxxxxxxxxxx secretAccessKey=xxxxxxxx region=eu-central-1 Bucket=xxxxxx SMTP_PASSWORD=xxxxx SMTP_EMAIL=xxxxxxxxx JWT_SECRET=****** MONGO_CON_STRING=****** npm run start`
