function getSocialUsername(string) {
  return string.includes('http://')
    ? `@${string.substring(string.lastIndexOf('/') + 1)}`
    : `@${string}`;
}

// eslint-disable-next-line import/prefer-default-export
export { getSocialUsername };
