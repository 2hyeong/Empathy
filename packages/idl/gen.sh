docker run --rm -v "${PWD}:/output" openapitools/openapi-generator-cli generate \
    -i output/swagger.yaml \
    -g openapi-yaml \
    -o /output/gen

npx openapi-typescript gen/openapi/openapi.yaml --output ./gen/index.ts