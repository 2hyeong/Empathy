rm -rf ./gen

docker run --rm -v "${PWD}:/output" openapitools/openapi-generator-cli generate \
    -i output/swagger.yaml \
    -g openapi-yaml \
    -o /output/gen

docker run --rm -v "${PWD}:/output" openapitools/openapi-generator-cli generate \
    -i output/swagger.yaml \
    -g typescript-fetch \
    -o /output/gen/typescript-fetch

npx openapi-typescript gen/openapi/openapi.yaml --output ./gen/index.ts

