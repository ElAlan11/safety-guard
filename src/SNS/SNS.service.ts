import { Injectable, NotFoundException } from '@nestjs/common';
import * as AWS from 'aws-sdk';



@Injectable()
export class SNSService {
  constructor( 
  ) {}
  async sendNotificationContacts(topic: string, message: string) {
    this.publishMessage(topic, message);
    return 200;
  }

  private async publishMessage(topic, message) {
    AWS.config.update({
      region: 'us-east-2',
      accessKeyId: 'AKIAV3MXNGM5E4LW2KV7', 
      secretAccessKey: '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',
    });
    const sns = new AWS.SNS().publish({
      TopicArn: topic,
      Message: message,
    }).promise();

    sns.then((data) => {
      console.log(data);
      return data
    })
    .catch((error) => {
      throw new NotFoundException(error);
    })

  }

  async generateTopic(contact: any) {
    const topicName = 'SNS-Topic-' + contact.external_id
    
    AWS.config.update({
      region: 'us-east-2',
      accessKeyId: 'AKIAV3MXNGM5E4LW2KV7', 
      secretAccessKey: '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',
    });

    const topic = new AWS.SNS({ apiVersion: '2010-03-31' }).createTopic({
      Name: 'SNS-'+ topicName
    }).promise();
    return await topic.then((data) => {
      let topicARN = data.TopicArn;
      
      const subscription = new AWS.SNS({ apiVersion: '2010-03-31' }).subscribe({
        TopicArn: topicARN,
        Protocol: 'sms',
        Endpoint: contact.phone
      }).promise();

      return subscription.then((data_sub) => {
        //console.log(data_sub);
        return {...data, ...data_sub}
      }).catch((error) => {
        throw new NotFoundException(error);
      })

      //return data
    })
    .catch((error) => {
      throw new NotFoundException(error);
    });
  }

  async listTopics() {
    AWS.config.update({
      region: 'us-east-2',
      accessKeyId: 'AKIAV3MXNGM5E4LW2KV7', 
      secretAccessKey: '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',
    });

    let response = {}
    const listTopics = new AWS.SNS({ apiVersion: "2010-03-31" })
    .listTopics({})
    .promise();

    return await listTopics
    .then((data) => {
      //console.log(data);
      response = data
      return response
    })
    .catch((error) => {
      throw new NotFoundException(error);
    });
    return response
  }
}
