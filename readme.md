# HTMX SQL and EXEC attributes

> **!!!DISCLAIMER!!**
> **This is a parody. NEEVER EVER execute raw user inputs anywhere in your application, DO NOT USE THIS EXTENSION.**


Are you fed up that only React/NextJS users can use SQL queries [directly within](https://www.youtube.com/watch?v=8q2q_820Sx4&t=8s&ab_channel=Vercel) their components?

**Not anymore!**

With this tiny extension you can use `hx-sql` and `hx-exec` attributes to directly send the `sql` and `exec` parameters respectively to the server. It is completely safe, as long as the commands are safe, which is **basically never**.

## Usage

```html
<!-- htmx  -->
<script src="https://unpkg.com/htmx.org"></script>
<!-- serverless extension -->
<script src="https://unpkg.com/htmx-sql"></script>
```

### The hx-sql attribute

Just define it and roll:

```html
<form hx-post="/request" hx-sql="SELECT * FROM users" hx-ext="sql">
    <button type="submit">GO!</button>
</form>
```

You can even use template literals to input your own values, it is very very safe, don't worry:

```html
<form hx-post="/request" hx-sql="SELECT * FROM users WHERE username LIKE ${username}" hx-ext="sql">
    <label>
        Username: <input type="text" name="username">
    </label>
    <button type="submit">GO!</button>
</form>
```

Don't forget to execute the queries as they are. It is known that executing any direct user input is perfectly safe:

```javascript
app.post('/request', function (req, res) {
    con.query(req.body.sql); // very safe SQL command from the front-end
});
```

Super easy.

### The hx-exec attribute

If you want to get even more, just use the hx-exec to send shell commands, maybe to delete files, do some maintenance work etc..
Who wants to bother opening those terminals right?

```html
<form hx-post="/request" hx-exec="rm -rf" hx-ext="sql">
    <button type="submit">Delete stuff!</button>
</form>
```

To easily delete some files, we can prepare a commad:

```html
<form hx-post="/request" hx-exec="rm -rf ${thefile}" hx-ext="sql">
    <label>
        Delete file: <input type="text" name="thefile">
    </label>
    <button type="submit">Delete!</button>
</form>
```

Then without even flinching, you can just execute:

```javascript
app.post('/request', function (req, res) {
    exec(req.body.exec);
});
```

> **!!!DISCLAIMER!!**
> **This is a parody. NEEVER EVER execute raw user inputs anywhere in your application, DO NOT USE THIS EXTENSION.**