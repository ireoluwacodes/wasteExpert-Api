FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

ENV PORT=4000 
ENV JWT_PASS=my$ecretPass@20 
ENV LOCAL_MONGO_URL=mongodb://127.0.0.1:27017/waste-expert
ENV MONGO_URI=mongodb+srv://admin:ecommerce@mycluster.i0sa4mf.mongodb.net/waste-expert?retryWrites=true&w=majority
ENV USER=infomailerapp@gmail.com
ENV PASS=twybvdteggphtsxk
ENV NODE_ENV=development


CMD [ "node", "index.js"]