import "./App.css";
import SampleComponent from "./components/SampleComponent";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductCard from "./components/ProductCard/ProductCard";

const product = {
  keyboard001: {
    title: `DROP SHIFT MECHANICAL KEYBOARD`,
    images: {
      base: `/assets/images/products/keyboard001/`,
      card: {
        path: `card.jpg`,
      },
      slider: [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`],
    },
    parameters: {
      price: 250,
      rating: 4,
      brand: "Drop",
      layout: "tkl",
      layoutText: "Tan KeyLess (TKL)",
    },
    description: {
      primary: `The latest addition to our family of mechanical keyboards, the Drop SHIFT is our largest and most ambitious undertaking yet. Done in the compact 1800 layout, it’s still significantly shorter than a traditional full-size keyboard, which frees up desk space for other gear. And though the numpad and arrows are much closer, they’re still broken out, so they’re easy to find without looking down. Just like the CTRL and ALT, the SHIFT features a sleek aluminum case, customizable RGB backlighting, a fully programmable layout, and hot-swappable switch sockets. That means you can pop in new switches whenever you want without any soldering.`,
      secondary: [
        {
          title: `OPTIMIZED PER-KEY LIGHTING WITH MILLIONS OF COLORS`,
          description: `The switches on the SHIFT feature light pipes optimized to deliver the most light possible through the keycaps. You'll have your choice from millions of colors for every single key, so you're sure to find the tone you want. Program the lighting to cycle through the entire spectrum, or set it to a two-tone look to match your setup. There’s also a built-in translucent LED diffuser to minimize hot spots found in many other keyboards. Worried about flickering? Don’t be. The LEDs operate at a frequency of 100 Hz, so there won't be any visible flicker. Finally, we're including RGB LED indicators for Capslock, Numlock, and Scroll lock—all of which can be customized as well.`,
          priority: 1,
        },
        {
          title: `FULLY PROGRAMMABLE VIA QMK`,
          description: `Customizing your keyboard is a lot of fun. That’s why the SHIFT features a fully programmable layout designed for modification. Using QMK firmware, you have total control over every key. Plus, the configurator allows you to program macros and customized keymapping, so you can easily fine-tune your keyboard for gaming, work, or play. It’s also outfitted with two USB Type-C connectors (one on each side), allowing you to transfer data and charge devices at USB 2.0 speeds.`,
          priority: 1,
        },
        {
          title: `HEFTY ALUMINUM FRAME & HOT-SWAPPABLE SWITCHES`,
          description: `Known for its toughness and ability to hold a quality surface finish, anodized aluminum plays the starring role in the SHIFT’s frame. Heavy enough to stay put when you're cranking out an email or locked into an intense FPS match, the frame has a low profile to complement your desktop. Thanks to the built-in switch plate and hot-swappable PCB, the SHIFT gives you the freedom to change out your switches whenever you like. Best of all? You don’t need to solder each switch—just pop them in and they’re ready to go. Fitted with removable feet, the keyboard can be adjusted for height, too.`,
          priority: 2,
        },
      ],
    },
    specifications: {
      specs: [
        { text: `60 keys`, priority: 1 },

        { text: `CNC chassis with integrated plate`, priority: 1 },
        {
          text: `Acrylic diffuser (can be positioned on the bottom or between the aluminum pieces)`,
          priority: 1,
        },
        {
          text: `2-piece aluminum construction (high-profile 6000 series)`,
          priority: 1,
        },
        { text: `5º case angle with chamfered edges`, priority: 1 },
        { text: `HHKB-style layout`, priority: 1 },
        { text: `Designed in Tokyo`, priority: 2 },
        {
          text: `USB-C PCBA with hot-swap sockets (solderless kit)`,
          priority: 2,
        },
        {
          text: `Compatible with MX style switches (plate and PCB mount)`,
          priority: 2,
        },
        { text: `Cherry profile dye-sublimated keycaps`, priority: 2 },
        {
          text: `Dimensions, assembled: 11.8 x 4.4 x 1.4 in (30 x 11.2 x 3.6 cm)`,
          priority: 2,
        },
        { text: `Weight, assembled: 24.7 oz (700 g)`, priority: 2 },
      ],
      included: [
        {
          text: `Keyboard`,
          priority: 1,
        },
        {
          text: `Removable magnetic feet`,
          priority: 1,
        },
        {
          text: `USB-A-to-C cable`,
          priority: 1,
        },
        {
          text: `Switch puller`,
          priority: 1,
        },
        {
          text: `Keycap puller`,
          priority: 1,
        },
      ],
    },
  },
};

function App() {
  return (
    <div className="App">
      <h1>Clean React</h1>
      <SampleComponent />
      <ProductGrid>
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
        <ProductCard product={product.keyboard001} />
      </ProductGrid>
    </div>
  );
}

export default App;
