# Styling & Branding

This guide covers how to change colors, fonts, spacing, and overall visual design using Tailwind CSS.

The location for all the styling for the webiste is in the `Index.jsx` folder. 

The FIU color branding are located in the FIU list at the top of the page. 

```jsx
const FIU = {
  blue:       '#081E3F',
  blueShade1: '#0A254E',
  blueShade2: '#0C2B5A',
  gold:       '#B6862C',
  brightGold: '#FFCC00',
  magenta:    '#CC0066',
  cyan:       '#00FFFF',
  white:      '#FFFFFF',
};
```
The hex codes were taken directly from the FIU official branding guide which can be found here: [FIU Branding Guide](https://brand.fiu.edu/visual-styles/colors/)

For the different bubble colors, they are hardcoded in the `BUBBLE_GRADIENTS` list:.

```jsx
const BUBBLE_GRADIENTS = [
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.magenta})`,
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.cyan})`,
  `linear-gradient(135deg, ${FIU.magenta}, ${FIU.brightGold})`,
  `linear-gradient(135deg, ${FIU.cyan}, ${FIU.magenta})`,
  `linear-gradient(135deg, ${FIU.brightGold}, #FF3399)`,
  `linear-gradient(135deg, #FFDD44, ${FIU.magenta})`,
  `linear-gradient(135deg, ${FIU.cyan}, ${FIU.brightGold})`,
  `linear-gradient(135deg, ${FIU.magenta}, ${FIU.cyan})`,
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.magenta})`,
];
```
For the bubble colors, in the `projects` list, they are simply referenced by the list number of your choice.

```jsx
const projects = [
    { id: 1, name: 'Sprinternship', url: 'https://webs.cs.fiu.edu/sprinternship/',                          gradient: BUBBLE_GRADIENTS[0] },
  ];
```

