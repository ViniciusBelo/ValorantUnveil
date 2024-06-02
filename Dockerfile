FROM maven:3.8.5-openjdk-17 as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN mvn package

RUN ls -l /usr/src/app/target
FROM eclipse-temurin:17-jdk
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/*.jar app.jar
CMD ["java", "-jar", "app.jar"]

FROM node:22.2.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]