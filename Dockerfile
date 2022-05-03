FROM codeceptjs/codeceptjs

RUN apt-get update && \
    apt-get install -y ca-certificates-java && \
    apt-get install -y openjdk-17-jdk && \
    apt-get install -y ant && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/ && \
    rm -rf /var/cache/oracle-jdk17-installer;

ENV JAVA_HOME /usr/lib/jvm/java-17-openjdk-amd64/
RUN export JAVA_HOME
