var body = $response.body;
body = '\/*\n@supported 9FABEC107A0F\n*\/\n' + body;

$done(body);
