# aws-serverless
Get the list of Soundcloud tracks from an artist by provide the artist's page url, developed with:

* [Serverless framework v0.5.0](http://docs.serverless.com/v0.5.0/docs) 
* Amazon Web Services as provider
* Node.js v4.3.

***Update: doesn't work with any artists' url (probably their permission setting)***

## Sample usage

#### Request
```
GET /${stage}/receiver?url=https://soundcloud.com/pharrealphuong HTTP/1.1
Host: <aws-api-id>.execute-api.<aws-region>.amazonaws.com
x-api-key: E3wl34Fdmls3wuipQMqqwes8zxYq2qA81L5S7mJ2w4
```

#### Response
```
[
  {
    "track_id": 246979870,
    "title": "SLANDER - Love Again Ft WAVZ - Pharreal Phuong Remix",
    "permalink_url": "http://soundcloud.com/pharrealphuong/slander-love-again-ft-wavz-pharreal-phuong-remix-1",
    "artwork_url": "https://i1.sndcdn.com/artworks-000147096944-gahchd-large.jpg"
  },
  {
    "track_id": 238916939,
    "title": "Vol 12",
    "permalink_url": "http://soundcloud.com/pharrealphuong/vol-12-final",
    "artwork_url": "https://i1.sndcdn.com/artworks-000140653104-ygnkae-large.jpg"
  },
  ...
]  
```


## Development
#### Setup
* [Serverless]()
* [AWS credential profile]()

#### Set environment variables
Check ```s-templates.json.example```for sample ```s-templates.json```

#### Initialize Serverless project
```
$ npm install
$ sls project init -c true  #not yet deploy to AWS
```

#### Lambda function
All functions are put on ```functions``` directory

* ```s-function.json```: settings for function and API endpoints
* ```event.json```: test event data (required to run function locally)

Local run

```
$ sls function run ${function-name}
```

#### AWS Deployment
Prior to deployment of functions and API endpoints, resources must be deployed. Also after updating ```s-resources-cf.json```, it must be re-deployed.

```
$ sls resources deploy
```

Lambda functions and API Gateway

```
$ sls dash summary	#summarizing current stage
$ sls dash deploy	#following instruction on prompted dashboard
```



