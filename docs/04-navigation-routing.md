# Navigation & Routing

This guide explains how to add new pages and update the navigation menu.

## Bubble Navigation

The routes are stored in the `Apps.tsx` file. The specifc pages are imported at the top of the page. The route paths are added in the `<Routes></Routes>` brackets with the path specified and and the specific page name.

Eg. 

```jsx
import Index from "./pages/Index"; //import the page

<Route path="/" element={<Index />} />
```

## Add a new page (Example Walkthrough)

Let's add a "Contact Us" bubble page as an example.

First we create a new file: `src/pages/Contact.tsx`

```jsx
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        Have questions about our programs? Reach out to us!
      </p>
      <div className="mt-8">
        <p><strong>Email:</strong> internships@fiu.edu</p>
        <p><strong>Phone:</strong> (305) 348-2000</p>
      </div>
    </div>
  );
};

export default Contact;
```

Then we register the route in `App.tsx`. Open `src/App.tsx` then add:

```jsx
// At the top with other imports
import Contact from "./pages/Contact";

// Inside the Routes section, add:
<Route path="/contact" element={<Contact />} />
```

Finally, in the `Index.tsx` file, in the list of projects, simply add another entry in the format:
`{ id: 5, name: '', ... url: <'link to site'>',....},` and a new bubble will appear on the homepage.