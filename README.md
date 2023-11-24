# 📝 To-Do List 📝

A To-Do is an entity that, in our case, needs to have a title, description, and status. And, since we care about knowing which one we already completed, we need a way to change its status.

What about a To-Do List?

A To-Do List is a list of To-Dos! DUH!

And it needs a couple of things to function:

First, To-Dos!
And we should be able to see them to keep track of them.
But what do you do with them apart from seeing them?

You can add a new one.

And you can remove them.

Quite easy, right?

Since we will be coding in JavaScript, we will use classes.

Why classes?

Because they are like molds we can reuse.

We can have a To-Do List for work and another for personal stuff.

Do we need to create it from scratch every time we want a new list?

Or does it make more sense to reuse the code we already made?

Well, that's why we will use classes.

But...

Should every To-Do be created from scratch?

Let's have a look:

Task 1:

<pre>
{ 
   title: "Chop onions", 
   description: "Careful with the knife", 
   isCompleted: false 
}
</pre>

Task 2:

<pre>
{ 
   title: "Call mom", 
   description: "She needs help with hte wifi",
   isCompleted: false 
}
</pre>

Task 3:

<pre>
{
   title: "Work out", 
   description: "If not my back hurts", 
   isCompleted: false
}
</pre>

Shall we continue?

I don't have time for this! So, let me use a class:

<pre>
class ToDo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.isComplete = false;
  }

  markAsComplete() {
    this.isComplete = true;
  }

  markAsIncomplete() {
    this.isComplete = false;
  }
}
</pre>

See! My cookie-cutter.

Now, let me create my cookies:

`const todo1 = new ToDo {"Chop onions", "Careful with the knife", isCompleted: false};`

`const todo2 = new ToDo {"Call mom", "She needs help with hte wifi", isCompleted: false};`

`const todo3 = new ToDo {"Work out", "If not my back hurts", isCompleted: false};`

Way faster than creating one by one!

🐛 Now that you understand the project and why we are using classes, help me debug my code!
