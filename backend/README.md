# Backend

This is a simple API that calls the model checkpoint from `/ml` and returns predictions

### Setup

`tensorflow-go`

** Due to an [issue](https://github.com/tensorflow/tensorflow/issues/39744) with running the go/tensorflow setup, you will need to setup your `$GOPATH` and run the following:

```bash
mkdir -p $GOPATH/src/github.com/tensorflow/tensorflow/tensorflow/go
cd $GOPATH/src/github.com/tensorflow/tensorflow/tensorflow/go
git checkout r1.11 
```

### Deployment

1. `go run main.go`
2. Access http://localhost:10000