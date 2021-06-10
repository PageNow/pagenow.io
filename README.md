# pagenow.io

## Development

To run the website locally, run the following.
```shell
$ npm run develop
```

## AWS Deployment

To deploy to S3, run the following.
```shell
$ npm run build && npm run deploy
```

In the root S3 bucket (pagenow.io), delete ```Redirection Rules``` in ```Edit static website hosting``` section.

## References

* https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/