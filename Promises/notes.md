# WHAT IS PROMISE ?

- Promise is an object that represents a value that will be availaibale in the future ( either success or failure).
- in simpler words promise is like a real word promise made by people either they will fullfill the promise or may not . but definetly we will recieve somwthing if priomise is made.
- once you use a prmoise definetly you are getting something in return either success or failure .

## Example

```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("sucess");
  }, 1000);
});
```

# states of Promise

- Pending = initial state ( waiting )
- Fullfilled = operation completed successfully (resolved called)
- reject = operation failed (reject called)

# Problems Before Promise

- Java Script is a single threaded . only one task runs at a time.
- when we do something that takes time ( fetching api etc ) . if js waits it woul lead to freeze in ui/ browser.
- Before promises we have callbacks , they are hard read and understandable.

## Callback Hell

```
getUser(1, () => {
  getProduct(2, () => {
    getFormControlLabelUtilityClasses(300, () => {
      console.log("paid");
    });
  });
});
```

# Promise Chaining
