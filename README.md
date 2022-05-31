[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

# CSS Color Schemes

Import a color scheme to you project. Don't care about the CSS and don't care about shades and color steps.

## Docs

Add the import statement at the top of your stylesheet an configure the url to fit your needs.

```css
@import 'https://colors.gutuxe.de/scheme/<scheme>/<color>';
```

### Scheme

`complementary` Lightness steps for the specified and it's complementary color.

`analogous` Lightness steps for the specified color and two further colors (+/- 30° hue).

`triadic` Lightness steps for the specified color and two further colors (+/- 120° hue).

`shades` Lightness steps for the specified color.

### Color

Define your desired color as a hex value.

### Usage

You can use the colors from the defined css variables.

Usage Example:

```css
@import 'https://colors.gutuxe.de/scheme/triadic/8ac926';
@import 'https://colors.gutuxe.de/scheme/shades/f3f3f3';

.container {
  /* use primary, secondary or tertiary (if available) color */
  background: linear-gradient(
    to bottom, 
    var(--dbe-primary-color-5), 
    var(--dbe-secondary-color-3), 
    var(--dbe-tertiary-color-7)
  );
  
  /* use this pattern for the shades scheme */
  color: var(--dbe-shade-F3F3F3-1); 
}
```

Find all definitions in the styles tab of your DevTools or see an example file here:

- [triadic](/src/schemes/public/triadic/000000.css)
- [complementary](/src/schemes/public/complementary/000000.css)
- [analogous](/src/schemes/public/analogous/000000.css)
- [shades](/src/schemes/public/shades/000000.css)

## Contributing

Contributions are always welcome!

## Authors

- [@moritzgvt](https://www.github.com/moritzgvt)

## License

[MIT](https://choosealicense.com/licenses/mit/)
