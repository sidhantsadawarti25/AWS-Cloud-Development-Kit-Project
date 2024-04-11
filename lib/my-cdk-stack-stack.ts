import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export class MyCdkStackStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3 bucket for file uploads
    const bucket = new s3.Bucket(this, 'MyFileUploadBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // DynamoDB table for storing metadata
    const table = new dynamodb.Table(this, 'MyTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // IAM role for Lambda function
    const lambdaRole = new iam.Role(this, 'MyLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    // Grant the Lambda function permissions to access S3 and DynamoDB
    bucket.grantReadWrite(lambdaRole);
    table.grantFullAccess(lambdaRole);

    lambdaRole.addToPolicy(new iam.PolicyStatement({
      resources: ['*'],
      actions: ['s3:GetObject', 's3:PutObject', 'dynamodb:*'],
    }));

    // Lambda function for processing uploads
    const lambdaFunction = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_20_X, // Updated runtime to Node.js 20.x
      code: lambda.Code.fromAsset('lambda'),
      handler: 'handler.handler',
      role: lambdaRole,
      environment: {
        BUCKET_NAME: bucket.bucketName,
        TABLE_NAME: table.tableName,
      },
    });

    // API Gateway for HTTP endpoint
    new apigateway.LambdaRestApi(this, 'MyEndpoint', {
      handler: lambdaFunction,
    });
    
  }
}
