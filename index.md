# Theme Toggle

These days, everyone wants a dark mode. It's not so hard to create, actually

## CSS Only

Let's take a look at a CSS only solution:

<iframe src="./example.html"></iframe>

```html
<label for="toggle">
  Toggle
</label>
<input type="checkbox" name="toggle" id="toggle" />
<div>
  <p>Hello</p>
</div>
```

```css
:root {
  --background-color: white;
  --text-color: black;
}

div {
  background: var(--background-color);
  color: var(--text-color);
}

input:checked + div {
  --background-color: black;
  --text-color: white;
}
```

We create some CSS variables that store theme information in `:root`, with `--background-color` and `--text-color`. `:root` represents the root of the document and is the same as putting any CSS in the `html` tag. We set the `div`'s `background` and `color` properties to be the value of each of those variables respectively through `var()`. We also create a checkbox that toggles the values of the CSS variables when clicked, through `input:checked + div`. This states that when the input is checked, apply the variable changes to the `input` and the `div`. Since only the `div` uses the variables, only the `div` changes. You'll notice that a drawback of this method is that because only the `div` changes, the label and input do not change colors. We will cover why soon.

Technically, the variables created `input:checked + div` are not the same as in `:root`, even though they have the same name; the later variables shadow the earlier variables since at no point are we modifying `:root`, only `input:checked` and `div`. Since `div` simply uses the variables based on their name, the variables still work. Now, why can't we use `input:checked + :root` to modify `:root` directly? This is because CSS does not have a parent selector, only child or sibling selectors.

## JavaScript

## CSS in JS

## SVG Animations
