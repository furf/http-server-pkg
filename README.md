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

3. Create a root directory for assets.

    ```bash
    $ mkdir public
    ```

## Usage

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

## License
MIT © [David Furfero](https://furf.com/)
