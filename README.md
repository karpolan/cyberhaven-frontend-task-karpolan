# Introduction

This challenge requires building a very simple react application end-to-end. You only have 3-5 hours to solve it, which means you have to keep it simple and concrete. 

Good luck!

## AlmostC

You need to write a webapp that makes programming in this language easier. You need to create visualization for `caller-callee` relations and show topological order of function calls. The webapp should allow the user to type a list of caller-callee relationships (in a form “foo calls bar”, one relationship per line), and it should provide:

- a valid ordering of the functions for AlmostC
- a graphical rendering of the call graph

For example, when the user types:

```
    foo calls bar
    foo calls baz
    bar calls baz
```

the webapp should show the following textual output of topologically sorted nodes:

```
 foo
 bar
 baz
```

and a directed graph like the following:

```
    foo ------> bar
     |           |
     +--> baz <--+
```

If no ordering is possible, it should output “impossible”. If the input contains a syntax error, it should output “syntax error”. If multiple orderings are possible, the webapp must provide the lexicographically smallest one - note that, if you're running out of time, you might ingore the lexicographical ordering requirement.

You can find more input-output pair samples in the tests-data folder.

Hint: https://en.wikipedia.org/wiki/Topological_sorting, in particular Khan’s algorithm. You’ll need to add a sort() call somewhere in it to make it lexicographical.

Milestones:

- Implement algorithm for topological ordering
- Implement ui with ability to input data and see graph's topological ordering
- Implement component for visualizing graph relationships   

## Project requirements

- Once you are done with the project you need to push working code for review
- You must use react
- core logic should be tested
- It's nice to have react components code to be tested
- The core logic tests must include all cases from tests-data
- We should be able to add more core logic tests by adding more test data files into a folder
- You may use any other libraries you’d like, as long as everything is installable locally(npm/yarn) and does not depend on any external resources (e.g., libraries from CDNs)
- Provide short video how your application works

## Notes and suggestions

- You can create-react-app
- You might not need redux/d3
- You can use typescript or flow if you wish
- use Kahn's algorithm for toposort
- Minimal functionality for toposort should pass cycle and impossible tests, rest of them are testing ordering.

## Bonus tasks (only if you have time left, not require)

- The UI should be convenient to use
- Make your code as simple and readable as it can be
  - In particular, do not use packages/features/patterns that are too heavy or complex for this task
- Handle very large inputs without making the UI non-responsive or confusing for the user
- Highlight syntax errors in the input field
- Highlight logic errors in the input field (e.g., all calls that form a cycle)
