FROM golang:1.15.0-buster AS build-env

# Setup tensorflow-go

RUN git clone --progress --verbose https://github.com/tensorflow/tensorflow.git $GOPATH/src/github.com/tensorflow/tensorflow
WORKDIR ${GOPATH}/src/github.com/tensorflow/tensorflow/tensorflow/go
RUN git checkout r1.11

WORKDIR /app
COPY . .

RUN wget -c https://storage.googleapis.com/tensorflow/libtensorflow/libtensorflow-cpu-linux-x86_64-2.3.0.tar.gz
RUN tar -C /usr/local -xzf libtensorflow-cpu-linux-x86_64-2.3.0.tar.gz
RUN ldconfig

RUN go build -o main .

EXPOSE 10000
CMD ["./main"]
