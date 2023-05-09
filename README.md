# Readme
This repository hosts a series of examples that demonstrate how to develop language bindings libraries using the [uniffi-rs](https://github.com/mozilla/uniffi-rs) library. For more information on how to use uniffi-rs, see the [official documentation](https://mozilla.github.io/uniffi-rs/).

The most important files are located in the `calendar-ffi/src/` directories. The `calendar-ffi/src/lib.rs` file contains the Rust code that is exposed to the other languages. The `calendar-ffi/src/calendar.udl` file contains the API definition used by uniffi-rs to generate the bindings.

## Build the examples and run the tests
You can build the libraries and run the tests with the following commands:
```shell
cd 1-functions/
./gradlew buildKotlinLib
./gradlew test
```
