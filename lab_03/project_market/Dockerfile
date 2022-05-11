FROM ubuntu:22.04
RUN apt update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

RUN apt update && apt-get install -y nodejs

RUN mkdir /app

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY ./ ./

ENTRYPOINT [ "npm", "start" ] 
# minimum

# docker run myapp odpali aplikacje
# docker run -p 3000:3000 myapp
# docker run -p 3000:3000 myapp -v $(pwd)/src:/app/src myapp
# docker kill gracious