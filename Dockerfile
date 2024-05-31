FROM maven:3.8.6-openjdk-11 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN mvn package

FROM eclipse-temurin:11-jdk
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/helloworld.jar app.jar
CMD ["java", "-jar", "app.jar"]