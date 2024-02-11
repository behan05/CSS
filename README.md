# learn-CSS
Start to Learn CSS3  

// Strategy to learn css in fastest way.

Learn about the different kinds of stylesheets available, their differences, selectors, and basic styling such as font-size, width, height etc.

1 => Selectors.
2 => CSS Box Model.
3 => Image and Background.
4 => text properties
5 => Display and Position (position: static | absolute | relative | fixed | sticky)  (float: left | right)
6 =>  Colours, Fonts, lists and Tables
7 => filter CSS property
8 => Debugging and Dev tools ?
9 => Practice Practice Practice ?
10 => Responsive Web Design ??
11=> There are 3 important things in Responsive web design:
///////////////////////////////////////////////////////
Media Queries: Media queries allow you to apply different styles based on the characteristics of the device or viewport, such as screen size, resolution, and orientation. They are fundamental for creating responsive designs that adapt to various screen sizes.
///////////////////////////////////////////////////////
Flexbox: Flexbox is a layout model that allows you to create flexible and responsive layouts with ease. It provides a powerful way to align and distribute items within a container along the main axis and the cross axis.
///////////////////////////////////////////////////////
Grid Layout: CSS Grid Layout is another powerful layout system that allows you to create two-dimensional grid-based layouts. It enables you to define rows and columns, and place items precisely within the grid, making it ideal for building complex and responsive designs.
///////////////////////////////////////////////////////
Relative Units: Using relative units like percentages, ems, and rems instead of fixed units (such as pixels) allows your designs to scale more effectively across different screen sizes and devices.
///////////////////////////////////////////////////////
Viewport Units: Viewport units (vw, vh, vmin, vmax) are relative units that represent a percentage of the viewport's width, height, or the smaller/larger dimension. They are useful for creating layouts that adapt dynamically to the viewport size.
///////////////////////////////////////////////////////
Responsive Images: Implementing responsive images ensures that images adapt to different screen sizes and resolutions, helping to optimize performance and user experience. Techniques like setting the max-width to 100% or using the srcset attribute with different image sizes are common practices.
///////////////////////////////////////////////////////
Fluid Typography: Fluid typography involves setting font sizes using relative units like percentages or viewport units, allowing text to scale smoothly with the viewport size. This helps maintain readability and visual consistency across devices.
///////////////////////////////////////////////////////
CSS Transitions and Animations: Adding subtle animations and transitions can enhance the user experience and make the website feel more interactive and engaging. CSS transitions and animations can be used to create effects like fade-ins, slide-outs, and hover effects.
///////////////////////////////////////////////////////
Box Model: Understanding the box model (content, padding, border, margin) is essential for accurately positioning and styling elements within your layout. Proper use of padding and margin ensures adequate spacing and alignment between elements.
///////////////////////////////////////////////////////
Color and Typography: Pay attention to color schemes, typography choices, and contrast to create visually appealing designs. Consistent use of fonts, colors, and typography styles contributes to a cohesive and professional-looking website.
////////////////////////////////////////////////////
box-shadow: The box-shadow property allows you to add shadows to the borders of an element's box. It takes values for horizontal and vertical offsets, blur radius, spread radius, and color. For example:

css
Copy code
.box {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
The first value specifies the horizontal offset (positive values move the shadow to the right).
The second value specifies the vertical offset (positive values move the shadow down).
The third value specifies the blur radius (controls the spread of the shadow).
The fourth value specifies the spread radius (optional, controls the size of the shadow).
The fifth value specifies the color of the shadow.
text-shadow: The text-shadow property allows you to add shadows to text elements. It takes values for horizontal and vertical offsets, blur radius, and color. For example:

css
Copy code
h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
box-shadow vs. drop-shadow: The box-shadow property creates shadows based on the shape of the box, while the drop-shadow filter creates shadows based on the shape of the content. The drop-shadow filter can be more versatile when working with irregular shapes or transparent areas.

css
Copy code
.box {
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
}
///////////////////////////////////////////////////////
12 =>  Specificity ?
///////////////////////////////////////////////////////
13 => Preprocessors. CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. Some of the popular ones are SASS, LESS, STYLUS and POSTCSS.

The SCSS format of SASS is more widely used, so it's good to get started with SASS for development.

The autoprefixer plugin of POSTCSS makes your CSS rules compatible across various browsers by adding extra rules such as -moz- and-webkit-.
///////////////////////////////////////////////////////
14 => CSS Architecture ?



