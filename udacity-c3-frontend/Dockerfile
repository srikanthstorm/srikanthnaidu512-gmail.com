FROM beevelop/ionic AS ionic
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8100
CMD [ "ionic", "serve", "--no-open"]