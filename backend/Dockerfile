FROM truevolve/golang-python3 AS build-env

WORKDIR /app
COPY . .
RUN go build -o main .
EXPOSE 10000
CMD ["./main"]
