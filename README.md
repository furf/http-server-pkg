# http-server-pkg

A utility for creating standalone HTTP servers.

## Installation

1. Clone this repository.

  ```bash
  $ git clone git@github.com:furf/http-server-pkg.git
  $ cd http-server-pkg
  ```

2. Install dependencies.

  * Using `npm`:

    ```bash
    $ npm install
    ```

  * Using `yarn`:

    ```bash
    $ yarn install
    ```

## Development

Copy site assets into `/path/to/http-server-pkg/public`.

### Run a local test server

* Using `npm`:

  ```bash
  $ npm start
  ```

* Using `yarn`:

  ```bash
  $ yarn start
  ```

### Build standalone executables

Running the build command will generate standalone HTTP server executables for Linux, Mac and Windows in the `build` directory.

* Using `npm`:

  ```bash
  $ npm run build
  ```

* Using `yarn`:

  ```bash
  $ yarn run build
  ```

## Usage

### Starting the server

Double-click the executable appropriate for your platform (in the `build` directory). The application will search for the first available port between 8000–8999 on the host machine and start the HTTP server. A console window will open to monitor the HTTP server process. Your default browser will launch and navigate to the root of your website (e.g. [http://localhost:8000](http://localhost:8000)).

### Stopping the server

To stop the HTTP server, type CTRL-C in the application console or quit the application.

## License
MIT © [David Furfero](https://furf.com/)
