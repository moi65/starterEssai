var chatskills = require('chatskills');

// Create a skill.
var hello = chatskills.app('hello');

// Create an intent.
hello.intent('helloWorld', {
        'slots': {},
        'utterances': ['{to |}{say|speak|tell me} {hi|hello|howdy|hi there|hiya|hi ya|hey|hay|heya}']
    },
    function(req, res) {
        res.say('Hello, World!');
    }
);

// Respond to input.
chatskills.respond('chatskills, ask hello to say hi', function(response) {
    console.log(response);
});