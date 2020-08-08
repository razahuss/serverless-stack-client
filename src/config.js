const dev = {
	STRIPE_KEY: "pk_test_51HCVFAATMehWBxjmIeZZ5ypjyh7qbnUmaFPatBVmWULxmcJwk3y9m3cFqUbFkDjsemJw7arqSVpWJDoETfRBaJQI00k0SUIPUL",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ctukg52lr16d"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gbrgz42vt5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ycvJC20tU",
    APP_CLIENT_ID: "73rotb0rbs39f78vhofkvv38qv",
    IDENTITY_POOL_ID: "us-east-1:c167f90c-9d1b-4798-9a53-ea495e856984"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HCVFAATMehWBxjmIeZZ5ypjyh7qbnUmaFPatBVmWULxmcJwk3y9m3cFqUbFkDjsemJw7arqSVpWJDoETfRBaJQI00k0SUIPUL",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1gk96lqh96j41"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://du83v63bub.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_M4hYTuDVa",
    APP_CLIENT_ID: "78ik974vpkmcel40pkmn3hs0hq",
    IDENTITY_POOL_ID: "us-east-1:6f0cd5c2-e392-4798-89bd-b2ef60135198"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};