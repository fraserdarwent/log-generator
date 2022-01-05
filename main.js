const LINES_PER_SECOND = parseInt(process.env.LINES_PER_SECOND || '1');

function log(message) {
  console.log(`${new Date().toISOString()} ${message}`);
}

function generate() {
  log('This is a generated log line');
  setTimeout(generate, 1000 / LINES_PER_SECOND);
}

process.on('SIGINT', function () {
  log('Received SIGINT, exiting');
  process.exit();
});

log(`Generating ${LINES_PER_SECOND} lines per second`);

generate();
