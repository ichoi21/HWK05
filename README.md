# 05: Third-Party APIs

When developers find themselves repeating a task, they tend to look for a way to simplify their workflow. We saw earlier how CSS frameworks were developed to ensure consistency across applications and to expedite developer workflows. Tools with similar goals have emerged in the JavaScript ecosystem.

jQuery is a JavaScript library that simplifies DOM manipulation and event handling. It allows us to write fewer lines of code than we'd need to if we were using plain ol' JavaScript to accomplish the same end. jQuery also provides a number of methods for animations and working with APIs.

Some argue that jQuery is slowly being phased out and replaced with front-end frameworks such as React. You might not see as many job listings for jQuery developers, but it’s an important skill to master as the library is still widely used in both new and legacy code.

## Acceptance Criteria & Requirement

```
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The following topics will be covered in this unit:
* jQuery - (Incorporate jQuery into HTML documents via CDN and using its associated selector)
* DOM traversal - (Perform DOM traversals to get and select elements by tag, class, and id as well as node relationship)
* DOM manipulation - (Perform DOM manipulations to add, remove, and modify elements and attributes)
* Event handling - (Implement interactivity using event handlers)
* this
* data-* attributes
* Explain the importance of `document.ready()` and how to resolve issues related to dynamically generated HTML
```

You will be employer-ready if you can answer the following questions:

1. What is jQuery?
2. What is the difference between a (javascript) library and a framework?
3. Why is dynamically generated HTML an issue for developers working with jQuery?

## Helpful Links

- [MDN: jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)
- [Wikipedia: jQuery](https://en.wikipedia.org/wiki/JQuery)
- [jQuery Official Website](https://jquery.com/)

## Narrative on steps taken.

- Setup Repo to start upload for back ups and live testings.
- Setup initial HTML format - pushed table from JS instead.
- Moment.js is functional
- API quote for fun.
- Store to LocalStorage is functional
- Added reset button - clears localStorage + HTML!!
- added color of hour rows to change with real time.
