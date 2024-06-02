import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

interface LambdaStackProps extends StackProps {
    stageName?: string;
}

export class LambdaStack extends Stack {
//   public readonly lambdaFunction: lambda.Function;
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    // Create a Lambda function
    // this.lambdaFunction = new lambda.Function(this, 'MyFunction', {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   handler: 'index.handler',
    //   code: lambda.Code.fromAsset(path.join(__dirname, 'lambda')),
    // });
  }
}