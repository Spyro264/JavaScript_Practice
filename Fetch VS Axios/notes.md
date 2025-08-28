# DIFFERENCE BETWEEN FETCH AND AXIOS

| Fetch                                                                    | Axios                                          |
| ------------------------------------------------------------------------ | ---------------------------------------------- |
| native to `browser` , built in feature , no need of `installing`         | needs installation via `npm`                   |
| Need to parse `JSON` manually ex: response.json .                        | Automatically parses `JSON`                    |
| By defualt doesnt throw errors for `Http` errors like 400 or 500         | Automatically throws errors for `Http` erros   |
| No built-in timeout; you need to implement manually using `promise.race` | inbuilt timeout using `{timeout: 5000}` option |
