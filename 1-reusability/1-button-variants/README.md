# Button Variants

## React Button Component

In this code example, we're creating a reusable `Button` component in React. Let's break down the key concepts:

### Props and Destructuring

Props allow us to pass data into React components. The `Button` component accepts various props such as `children`, `className`, `size`, `variant`, and `...rest`. Destructuring is used to extract these props within the component.

### Conditional CSS Classes

The component conditionally applies CSS classes based on the `size` and `variant` props. Depending on these props, the button's style can be customized.

### Classnames Package

To manage CSS classes effectively, the `classnames` package is used. It simplifies the process of combining multiple CSS classes into a single string, making it easier to apply them to the component.

### Variants

The `Button` component supports different variants like "success," "warning," and "danger." These variants apply specific styles to the button, allowing for flexibility in styling.

### Spread Operator (`...rest`)

The spread operator (`...rest`) is used to pass any additional props that are not explicitly destructured. This ensures that any extra props passed to the `Button` component are preserved and applied to the underlying `<button>` element.

This code demonstrates best practices for creating a flexible and customizable button component in React, making it easy to maintain consistent UI elements across your application.
