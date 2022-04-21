#Split to stages, this is build stage
FROM maven:3.8.5-openjdk-11 AS build
COPY ./ ./
RUN mvn clean package -Dmaven.test.skip=true

#Build the smaller image
FROM openjdk:11-jre-slim
COPY --from=build target/backend-0.0.1-SNAPSHOT.jar /usr/local/lib/Backend.jar
CMD ["java", "-jar", "/usr/local/lib/Backend.jar"]