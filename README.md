# Interactive Resume
This project was created to satisfy the requirements for completing Udacity's [Front-End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)

## Project Goals & Requirements
The goal of this project was to learn basic JavaScript syntax, including manipulating data, building loops and creating functions. Another goal was to learn some simple jQuery DOM manipulation methods to build the resume the moment a user opens the website.

The project has to meet the following requirements:
<table>
    <thead>
        <tr>
            <th>Criteria</th>
            <th>Meets Specifications</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>Matching Schema</p>
            </td>
            <td>
                <p>Objects must <strong>exactly</strong> follow the schema given in <a href="https://github.com/udacity/frontend-nanodegree-resume/blob/master/README.md" target="_blank">Project Details</a> and property values contain real or fake data. This is the minimum requirement, if you want to provide additional data beyond the schema, that's awesome! Please make sure you have all the minimum schema requirements first, though!</p>
                <p>Following the minimum schema <strong>exactly</strong> is necessary to pass this rubric point. It may seem like a nitpicky requirement, but in the world of programming, details like capitalization and plurality in variable names really matter!</p>
                <p>The way your computer reads the difference between <code>blueberry</code> and <code>BlueBerry</code>, it might as well be the difference between <code>blueberry</code> and <code>airplane</code>!</p>
                <p>Dynamically displayed resume sections (biography, education, work, projects, footer) include all of the real or fake javaScript object data. Solution is capable of displaying any resume that provides the data according to the given schema. <a href="https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop" target="_blank"><strong>'forEach' or 'for'</strong></a> (rather than 'for in') loops must be used to display the <code>skills</code>, <code>jobs</code>, <code>projects</code>, project <code>images</code>, <code>schools</code> and <code>onlineCourses</code> arrays. Solution works for any number of items in those arrays.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Function Use</p>
            </td>
            <td>
                <p>All resume sections are built using modular functions which can run in any order.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Encapsulation</p>
            </td>
            <td>
                <p>As described in the schema, the <code>work</code>, <code>projects</code>, <code>education</code> and <code>bio</code> objects each have a property named <code>display</code> which encapsulates (contains) a function that displays all the properties of that object in the resume.</p>
                <p>The <code>display</code> function can be encapsulated in two ways:</p>
                <ul>
                    <li>by being included directly in the javaScript object definition, or</li>
                    <li>via dot notation (i.e. <code>work.display = function(){ ... }</code>)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p>Prerequisite: Code Quality</p>
            </td>
            <td>
                <p>Code is ready for review following the <a href="http://udacity.github.io/frontend-nanodegree-styleguide/" target="_blank">Front-End Nanodegree style guide</a> and has been cleaned using the following tools:</p>
                <ul>
                    <li>javaScript: <a href="http://jshint.com/" target="_blank">JsHint</a> and <a href="http://jsbeautifier.org/" target="_blank">jsBeautifier</a>
                    </li>
                    <li>HTML: <a href="http://www.cleancss.com/html-beautify/" target="_blank">HTML Beautifier</a>
                    </li>
                    <li>CSS: <a href="http://html.fwpolice.com/css/" target="_blank">CSS Beautifier</a>
                    </li>
                </ul>
                <p>This is a prerequisite, meaning your project may be returned without review if this is not met.</p>
            </td>
        </tr>
    </tbody>
</table>

## Lessons learned
* It's important to keep code well organized so it's easier to read and debug.
* Use online checkers and beautufiers. It's easy to miss semicolons and curly braces in JavaScript.
