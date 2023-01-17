# The Odin Project - Full Stack JavaScript - Intermediate HTML & CSS - PROJECT: Sign-up Form

## Project Introduction

The MVP for this project is a sign-up form for an imaginary service.

### Step 1: Set-up and Planning

1. Set up `index.html` and `index.css` files with some simple dummy content, just to make sure everything is linked correctly.
1. Set up git repository.
1. Download a full-resolution copy of the [design file](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png), and get a general idea for how to lay things out in `index.html`.

### Step 2: Gather Assets

- The large background-image is from: [fffunction studio on unsplash.com](https://unsplash.com/photos/IrWgzQ_Y_zg).
- The external font for the ‘logo’ section is: [Norse Bold](https://cdn.statically.io/gh/TheOdinProject/theodinproject/efdc2888072f409e687d31dc580595dbe4fe0ff4/app/assets/fonts/Norse-Bold.otf).
- For the sidebar image is: [this Odin logo](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png).

### Step 3: Some Tips!

1. Begin by scaffolding out the structure of the page, and then tackle the various sections one by one.
1. The area behind the “ODIN” logo (from the design file) is a `div` that has a dark, but semi-transparent, background color. This enhances the readability of the text against the busy background image.
1. The color chosen for the ‘Create Account’ button is similar to tones found in the background image.
    - Specifically, it is #596D48.
1. The inputs, by default have a very light border (#E5E7EB), but 2 variations are included.
    - For starters, the password inputs should be given an `.error` class.
1. The other variation is the selected input, which should have a blue border and subtle box-shadow. This can be done with the `:focus` pseudo-class.
1. Checking that the password fields match each other requires javascript.
