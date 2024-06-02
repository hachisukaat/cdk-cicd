import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { PipelineStage } from './PipelineStage';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines.CodePipelineSource.html#static-gitwbrhubrepostring-branch-props
    const pipeline = new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: 'AwesomePipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('hachisukaat/cdk-cicd', 'cicd-practice'), // Change '/CDK-cource-resources' to your own GitHub repository '/cdk-cicd'
        commands: [
          // 'cd cdk-cicd', # This is not necessary because the repository is already changed to cdk-cicd
          'npm ci',
          'npx cdk synth'
        ],
        // primaryOutputDirectory: 'cdk-cicd/cdk.out'
        primaryOutputDirectory: 'cdk.out'
      })
    });

    // This is a placeholder for the pipeline
    // You can add more stacks to the pipeline
    const testStage = pipeline.addStage(new PipelineStage(this, 'PipelineTestStage', {
      stageName: 'test'
    }));

  }
}
