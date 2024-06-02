import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

interface LambdaStackProps extends StackProps {
    stageName?: string;
}

export class LambdaStack extends Stack {
//   public readonly lambdaFunction: lambda.Function;
    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props);

    // Create a Lambda function
        new NodejsFunction(this, 'hello-lambda', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'handler',
            entry: (join(__dirname, '..', 'services', 'hello.ts')),
            environment: {
                STAGE_NAME: props.stageName!
            }
        });
    }
}