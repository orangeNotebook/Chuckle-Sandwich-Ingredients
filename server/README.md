# Express server

This is where the code for the express server lives.

## Running locally

1. Build the frontend, follow steps in the [client README](../client)
2. Navigate to this directory (`/server/src`)
3. Run `yarn` to install required dependencies for server-side
4. Create an (`.env`) file in the (`/server`) directory and add the connection strings in the following format:

   ```
   HOSTNAME=hostname
   USER=username
   PASSWORD=password
   ```

5. Upload SSL certificate under this directory (`/server`), when connecting to an external connection
6. Run `yarn start` in the (`/server`) directory to start the application
7. Once running, you should see 'Success! Your application is running on [http://localhost:8080](http://localhost:8080/)'

For development - If you want to run the client locally so that you can see changes you made without having to rebuild run:

```
yarn run start:dev
```

Then access the client running on [http://localhost:8080]
