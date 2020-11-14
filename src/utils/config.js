const bountyItems = [];
const initialBounty = 500;
let tmp1 = initialBounty;

while(tmp1 <= 1000000) {
    if (tmp1 === 128000) tmp1 = 125000;
    bountyItems.push(tmp1);
    tmp1 = 2 * tmp1;
}

const config = {
    questions: [
    {
        id: 0,
        question: "Who invented JavaScript ?",
        answers: [
            'Brendan Eich',
            'Vin Diesel',
            'Rebecca Ferguson',
            'Natalie Portman'
        ],
        correct: [
            'Brendan Eich'
        ]
    },
    {
        id: 1,
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            'Node.js',
            'TypeScript',
            'npm',
            'Next.js'
        ],
        correct: [
            'npm'
        ]
    },
    {
        id: 2,
        question: "Which tool can you use to ensure code quality?",
        answers: [
            'Angular',
            'jQuery',
            'RequireJS',
            'ESLint'
        ],
        correct: [
            'ESLint'
        ]
    },
    {
        id: 3,
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            `${'<js>'}`,
            `${'<scripting>'}`,
            `${'<javascript>'}`,
            `${'<script>'}`
        ],
        correct: [
            `<script>`
        ]
    },
    {
        id: 4,
        question: `How to write an IF statement in JavaScript?`,
        answers: [
            'if i = 5',
            'if (i == 5)',
            'if i == 5 then',
            'if i = 5 then'
        ],
        correct: [
            'if (i == 5)'
        ]
    },
    {
        id: 5,
        question: "Where is the correct place to insert a JavaScript?",
        answers: [
            'The <body> section',
            'Both the <head> section and the <body>',
            'The <head> section',
            'Depends on program'
        ],
        correct: [
            'Both the <head> section and the <body>'
        ]
    },
    {
        id: 6,
        question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
        answers: [
            '<script href="xxx.js">',
            '<script src="xxx.js">',
            '<script name="xxx.js">',
            '<script fileName="xxx.js">'
        ],
        correct: [
            '<script src="xxx.js">'
        ]
    },
    {
        id: 7,
        question: `The external JavaScript file must contain the <script> tag.`,
        answers: [
            'True',
            'False',
            'It can but doesn`t require',
            'Must contain <fileName> tag'
        ],
        correct: [
            'False'
        ]
    },
    {
        id: 8,
        question: `How do you write "Hello World" in an alert box?`,
        answers: [
            'alertBox("Hello World");',
            'alert("Hello World");',
            'msg("Hello World");',
            'msgBox("Hello World");'
        ],
        correct: [
            'alert("Hello World");'
        ]
    },
    {
        id: 9,
        question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
        answers: [
            'if i <> 5',
            'if (i != 5)',
            'if i =! 5 then',
            'if (i <> 5)'
        ],
        correct: [
            'if (i != 5)'
        ]
    },
    {
        id: 10,
        question: `How do you create a function in JavaScript?`,
        answers: [
            'function:myFunction()',
            'function myFunction()',
            'function = myFunction()',
            'function:function();'
        ],
        correct: [
            'function myFunction()'
        ]
    },
    {
        id: 11,
        question: `How do you call a function named "myFunction"?`,
        answers: [
            'myFunction()',
            'call myFunction()',
            'call function myFunction()',
            'resurect myFunction()'
        ],
        correct: [
            'myFunction()'
        ]
    }
    ],
    bounty: bountyItems
};

export default config;