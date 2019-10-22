# Theme Toggle

These days, everyone wants a dark mode. It's not so hard to create, actually, and it can be done in CSS, Javascript, and a combination of the two. You can even include nice animations as well.

## CSS Only

Let's take a look at a CSS only solution:

<iframe src="./examples/css/index.html"></iframe>

_index.html_

```html
<label for="toggle">
  Toggle
</label>
<input type="checkbox" name="toggle" id="toggle" />
<div>
  <p>Hello</p>
</div>
```

_style.css_

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

Technically, the variables created `input:checked + div` are not the same as in `:root`, even though they have the same name; the later variables shadow the earlier variables since at no point are we modifying `:root`, only `input:checked` and `div`. Since `div` simply uses the variables based on their name, the variables still work. Now, why can't we use `input:checked + :root` to modify `:root` directly? This is because CSS does not have a parent selector, only child or sibling selectors. Since `:root` is the root parent, there is no way to access it from `input`, which is its child. This also carries the consequence that the `input` itself cannot be nested inside any other element, which is why in the example the `input` is not enclosed in its `label`, and the `input` only affects the `div`. Your content, therefore, needs to be inside this `div`, or another element. You can, of course, make multiple `div`s but then you would have to add `input:checked + div-name` for every `div`. If you would like the appearance of nesting the `input`, such as to add the theme toggle on a navigation bar, you can `position: absolute` it and adjust the `top` and `left` values to make the `input` appear as if it were on the navigation bar, but in reality it would be a separate element.

One of the few advantages of this approach is that it works without any Javascript enabled, and it can load quite fast as well. To ameliorate its disadvantages, we will need to use Javascript to trigger the global values.

## JavaScript

## CSS in JS

## SVG Animations
