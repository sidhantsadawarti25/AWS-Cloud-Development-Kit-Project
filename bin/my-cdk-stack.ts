#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyCdkStackStack } from '../lib/my-cdk-stack-stack';

const app = new cdk.App();
new MyCdkStackStack(app, 'MyCdkStackStack');
