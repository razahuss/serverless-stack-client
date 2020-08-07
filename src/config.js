export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_51HCVFAATMehWBxjmIeZZ5ypjyh7qbnUmaFPatBVmWULxmcJwk3y9m3cFqUbFkDjsemJw7arqSVpWJDoETfRBaJQI00k0SUIPUL",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads111"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1qfriw0z43.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6Uniucd8R",
    APP_CLIENT_ID: "7bkgbkg819c7hd15qipsohgps8",
    IDENTITY_POOL_ID: "us-east-1:8dbe3c3d-0bd1-4fce-95e0-0849e13dcad7"
  }
};