FROM gradle:jdk8

WORKDIR /back-end

ADD . .

RUN gradle build

FROM gradle:jre8

WORKDIR /dist

ADD ./dist .

ENTRYPOINT [ "gradle", "run" ]
