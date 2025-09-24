# For-Loop

- the `for` statement creates a `loop` that consist `3 optional expressions` enclosed in parenthesis seperated by `semicolons` , followed by `statement` to be executed in the loop.

```
for(let i=0 ; i<3 ; i++){
    console.log(i);
}
```

# Syntax

```
for (initialization; condition; afterthought)
 statement
```

## Initialization

- This is the part where we set up things before we start to `loop`
- Initialization is used to declare a counter variable like `var` or `let`
- The var varibale is `not` `limited` to the loop . it is availaibale outside the loop as well
- The let varibale is `limited` to the scope

## Condition

- An expression to be evaluated before each `loop` iteration .
- If the expression evaluates `true` then statement executes else it will `exit` the loop
- This conditional test is optional. `If` `omitted`, the condition always evaluates to true.

## Afterthought

- An expression to be evaluated at the `end` of eachl`loop iteration`. This occurs before the next evaluation of condition. Generally used to `update` or `increment` the counter variable.

## Statement

- statement will execute until the `condition` expression evalutes `true`
