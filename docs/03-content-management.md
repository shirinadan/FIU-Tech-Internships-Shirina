
# Content Management

This is your most important guide. It covers how to update text, images, and links on the website.

## Before You Start

Always make changes locally first (see [Getting Started](01-getting-started.md)). You can see your changes immediately at `http://localhost:5173/` before deploying live.

## Updating Text

### Finding the Right File

Match the page URL to the file in `src/pages/`:

| Page URL | File to Edit |
|----------|--------------|
| `/` (homepage) | `src/pages/Index.tsx` |
| `*` (404 page) | `src/pages/NotFound.tsx` |

### Images
Place the image file in the public/images/ folder.

Supported formats: .jpg, .png, .webp, .svg, .gif

### Updating Links

External Links (to other websites)
In the `index.tsx` file, in the list of projects, simply add another entry in the format:
{ id: 5, name: '', ... url: <'link to site'>',....},

### Logo
The code for the logo is located in the file in`src/components/Logo.tsx`. You can chnage the elemnts of the logo here.

### Logo in Metadata
To change the logo for the metadata is located in the `index.html`. 

### Additional components
Contained in the folder in `src/components/ui` there are several compnents that include various elements that you may use to further make chnages to the website. 

### Metadata
The index.html file contains the metadata for the website. 