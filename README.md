# notes_api

## Getting started

- If you don't already have one, [create a GitHub account](https://github.com/join).
- Open the [Node.js core repository web page](https://github.com/nodejs/node).
- Use the "Fork" button to fork the repository:![Image](http://nodetodo.org/getting-started/zfork.png)
- On the page _for your own fork_, use the "Clone or download" button and copy the URL for cloning to your clipboard:![Screenshot](http://nodetodo.org/getting-started/zclone.png)
- On the command line, in your home directory or a directory you have for projects, run:

```console
git clone <paste that URL here>;
```

- When that is done:

```console
cd node
```

- Then:

```console
git remote add upstream https://github.com/nodejs/node.git
```

- Then:

Install the required packages and run the project by npm start command.

- Then:

Open Postman, to REGISTER a user make a POST request with URL localhost:8000/register with raw data   
{ "email":"emailId","password":"password","name":"name" } .

- Then:

To LOGIN make a POST request with URL localhost:8000/login with raw data                                             
{ "email":"emailId","password":"password" } .

- Then:

To ADD a new post/note make a POST request with URL localhost:8000/newNote with raw data                                   
{"content":"content","user":"User Id"} we will have to give user id manually by coping user id from user database.

- Then:

To VIEW the notes/posts make a GET request with URL localhost:8000/getNote  .

- Then:

To DELETE a note/post make a DELETE request with URL localhost:8000/deleteNote/noteId and click on Authorization and select BearerToken and copy paste the bearer token which is generated while logining in.

- Then:

To UPDATE a note/post make a POST request with URL localhost:8000/editNote/noteId with raw data {"content":"new content"} and click on Authorization and select BearerToken and copy paste the bearer token which is generated while logining in.
