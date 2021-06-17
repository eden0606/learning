const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({name: "eden"}));

// simple expression
const names = Handlebars.compile("<p>{{firstname}} {{lastname}}</p>")
console.log(names({
    firstname: "eden",
    lastname: "chou",
}))

// nested input objects
const nestedNames = Handlebars.compile("{{person.firstname}} {{person.lastname}}");
console.log(nestedNames({
    person: {
        firstname: "eden",
        lastname: "chou",
    },
    person :{
        firstname: "billy",
        lastname: "bob",
    }
}))

// evaluation - with, starts with #with, ends with /with
// dives into an object-property and gives you access to its properties
const withEval = Handlebars.compile("{{#with person}} {{firstname}} {{lastname}} {{/with}}")
console.log(withEval({
    person: {
        firstname: "yeeden",
        lastname: "yeechou",
    },
}));

// evaluation - each, starts with #each, ends with /each
// iterates an array, allowing acess to properties of each object
const eachEval = Handlebars.compile("<ul class = 'people_list'> {{#each people}} <li>{{this}}</li> {{/each}} </ul>")
console.log(eachEval({
    people: [
        "yehuda katz",
        "eden chou",
        "billy bob joe",
    ]
}))

// helpers
const loud = Handlebars.compile("{{firstname}} {{loud lastname}}")

// helper function for loud function
Handlebars.registerHelper('loud', function(str) {
    return str.toUpperCase()
})
console.log(loud({
    firstname: "eden",
    lastname: "chou",
}))

const printPerson = Handlebars.compile("{{#each people}} {{print-person}} {{/each}}")

// helper function for print-person
// helpers receive the current context as the this-context of the function
Handlebars.registerHelper('print-person', function() {
    return this.firstname + ' ' + this.lastname
})
console.log(printPerson({
    people: [
        {
            firstname: "eden",
            lastname: "chou",
        },
        {
            firstname: "billy-bob",
            lastname: "joe",
        },
        {
            firstname: "deluca",
            lastname: "heights",
        },
    ]
}))

// partials - allow for code reuse by creating shared templates
// register a partial using register partial method
Handlebars.registerPartial(
    "person",
    "{{person.name}} is {{person.age}} years old.\n"
)
const personAge = Handlebars.compile("{{#each persons}} {{>person person=.}} {{/each}}")
console.log(personAge({
        persons: [
            { 
                name: "eden",
                age: "20",
            },
            {
                name: "priyanka",
                age: "35"
            },
            {
                name: "lili",
                age: "52"
            }
        ]
}))

// if statement
// unless is inverse of if, rendered if the expression returns a false value
const torf = Handlebars.compile("{{#if author}} {{firstname}} {{lastname}} {{/if}}")
console.log(torf({
    author: false,
    firstname: "eden",
    lastname: "chou,"
}))

const torf2 = Handlebars.compile("{{#if author}} {{firstname}} {{lastname}} {{/if}}")
console.log(torf2({
    author: true,
    firstname: "yeden",
    lastname: "choui"
}))