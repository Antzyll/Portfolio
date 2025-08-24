import Image from "next/image";
import Divider from "@/components/Divider";


export default function Page() {
  return (
    <main>
      {/* HERO SECTION */}


      
      <section className="relative h-[55vh] w-full flex items-center justify-center text-center text-white">
        {/* Background image */}
        {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/hero.jpg)" }}
          />

          {/* Brand mesh overlay (tints the photo) */}
          <div className="absolute inset-0 mix-blend-overlay opacity-35">
            <div className="absolute -top-20 -left-20 w-[55vw] h-[55vw] rounded-full blur-3xl bg-red-700/40" />
            <div className="absolute -bottom-28 -right-20 w-[50vw] h-[50vw] rounded-full blur-3xl bg-[#F36D00]/35" />
          </div>

          {/* Black darken overlay */}
          <div className="absolute inset-0 bg-black/50" />

        

        {/* Content */}
        <div className="relative z-10 px-4 flex flex-col items-center animate-fade-in-up">
          <Image
            src="/images/logo.png"
            alt="Canton City Logo"
            width={240}
            height={240}
            className="mb-7"
            priority
          />




          <div className="flex flex-col md:flex-row items-center gap-4 justify-center animate-fade-in-up anim-delay-300">
            <a
              href="tel:+441442823870"
              className="btn-gold bg-[#E6B654] hover:bg-[#d9a93f] transition text-slate-900 font-semibold px-6 py-3 rounded-full shadow-soft"
>           ☎️ Call to Order
            </a>
            
            <a
            href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
            target="_blank"
            rel="noopener"
            
            className="btn-orange bg-[#F36D00] text-white hover:bg-[#d85f00] transition px-6 py-3 rounded-full shadow-soft">
            🍜 Order on Just Eat
          </a>
          </div>
        </div>
      </section>

{/* INFO STRIP */}
<section className="bg-[#E6B654]/20 py-6 reveal reveal-delay-300">
  <div className="mx-auto max-w-6xl px-4 py-6 grid gap-4 md:grid-cols-4 text-slate-900">
    <div className="flex items-center gap-3">


      
      <span className="text-xl">🕒</span>
      <div>
        <div className="font-semibold">Opening Hours</div>
        <div className="text-sm">Wed–Mon · 16:30–22:30 · Tue Closed</div>
      </div>
    </div>

    <div className="flex items-center gap-3 ml-7">
      <span className="text-xl">📍</span>
      <div>
        <div className="font-semibold">60 Western Road</div>
        <div className="text-sm">Tring · HP23 4BB</div>
      </div>
    </div>

    <div className="flex items-center gap-3">
  <span className="text-xl">⭐</span>
  <div>
    <div className="font-semibold">4.3★ Rating</div>
    <div className="text-sm">2,700+ reviews on Just Eat</div>
  </div>
  </div>


    <div className="flex items-center gap-3 md:justify-end">
      <a
        href="https://www.google.com/maps/place/60+Western+Road,+Tring+HP23+4BB"
        target="_blank"
        className="btn-gold bg-[#E6B654] hover:bg-[#d9a93f] transition text-slate-900 font-semibold px-6 py-3 rounded-full shadow-soft">
      
        🗺️ View on Google Maps
      </a>

      
    </div>
  </div>
</section>


{/* ABOUT US */}
  <section className="relative bg-brand-cream py-10">
    {/* Rice paper overlay */}
    <div 
    className="pointer-events-none absolute inset-0 opacity-[0.75] mix-blend-multiply"
    style={{
      backgroundImage: "url(/textures/rice-paper.png)",
      backgroundRepeat: "repeat",
      backgroundSize: "220px"
    }}
  />

  <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text */}
    <div className="reveal">
      <h2 className="relative font-display text-3xl md:text-4xl text-brand-red mb-6 inline-block">
    About us
  <span className="absolute left-0 -bottom-2 h-1 w-16 bg-[#E6B654] rounded-full"></span>
</h2>

      <p className="font-serif text-lg leading-relaxed text-slate-700 mb-4">
        At Canton City, we’ve been proudly
        serving the community of Tring with delicious, freshly prepared Chinese
        dishes for over 10 years. Our family-run kitchen brings together classic
        recipes and modern favourites, always cooked to order with the
        freshest ingredients!
      </p>
      <p className="font-serif text-lg leading-relaxed text-slate-700">
        Whether you’re craving crispy aromatic duck, comforting noodles, or our
        sweet & sour chicken, we’re here to make your evenings tastier.
        Order by phone or online and let us bring Chinese flavours to
        your door.
      </p>
    </div>

    {/* Features / Highlights */}
<div className="grid gap-6 reveal reveal-delay-150">
  <div className="flex items-start gap-4">
    <span className="text-3xl">🥡</span>
    <div>
      <h3 className="font-semibold text-lg text-brand-red">Authentic Recipes</h3>
      <p className="font-serif text-lg leading-relaxed text-slate-700 mb-4">
        Classic dishes cooked with care, using recipes passed down through generations.
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <span className="text-3xl">🚗</span>
    <div>
      <h3 className="font-semibold text-lg text-brand-red">Quick Local Delivery</h3>
      <p className="font-serif text-lg leading-relaxed text-slate-700 mb-4">
        Hot and fresh food delivered straight to your door.
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <span className="text-3xl">👨‍👩‍👧</span>
    <div>
      <h3 className="font-semibold text-lg text-brand-red">Family Run</h3>
      <p className="font-serif text-lg leading-relaxed text-slate-700 mb-4">
        Serving the community for over 10 years with pride and dedication!
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <span className="text-3xl">🤤</span>
    <div>
      <h3 className="font-semibold text-lg text-brand-red">Loved by Locals</h3>
      <p className="font-serif text-lg leading-relaxed text-slate-700 mb-4">
        Trusted by customers who keep coming back for more.
      </p>
    </div>
  </div>
</div>
  </div>
  <Divider variant="gold" spacing="tight" />

</section>




{/* TOP FAVOURITES */}
<section className="bg-[#E6B654]/20 pt-10 pb-12 reveal reveal-delay-300">
  <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[220px_1fr_220px] gap-x-8 items-start">

    {/* LEFT IMAGE STACK */}
<div className="hidden lg:flex flex-col gap-14 relative -left-12">
  <Image
    src="/images/food1.webp"
    alt="Canton City dish"
    width={220}
    height={160}
    className="rounded-xl object-cover shadow-soft rotate-[-11deg]"
  />
  <Image
    src="/images/food3.webp"
    alt="Canton City dish"
    width={220}
    height={160}
    className="rounded-xl object-cover shadow-soft rotate-[8deg] mt-10"
  />
</div>


    {/* MIDDLE CONTENT */}
    <div>
      <h2 className="relative font-display text-3xl md:text-4xl text-brand-red mb-6 inline-block">
        Customer Favourites
        <span className="absolute left-1 -bottom-2 h-1 w-16 bg-[#E6B654] rounded-full"></span>
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { name: "Sweet & Sour Chicken (Hong Kong Style)", price: "£7.20" },
          { name: "Crispy Aromatic Duck (Quarter)", price: "£10.50" },
          { name: "Special Chow Mein", price: "£6.90" },
          { name: "Beef in Black Bean Sauce", price: "£7.50" },
          { name: "Chicken Fried Rice", price: "£5.90" },
          { name: "Vegetable Spring Rolls (6)", price: "£3.80" },
          { name: "Kung Po Chicken", price: "£7.20" },
          { name: "King Prawn Satay", price: "£8.20" },
          { name: "Singapore Vermicelli", price: "£7.00" },
          { name: "Cantonese Style Spare Ribs", price: "£7.50" },
        ].map((item) => (
          <div key={item.name}
               className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
            <span className="text-slate-800">{item.name}</span>
            <span className="ml-4 shrink-0 font-semibold text-slate-900">{item.price}</span>
          </div>
        ))}
      </div>
    </div>

   {/* RIGHT IMAGE STACK */}
<div className="hidden lg:flex flex-col gap-14 relative -right-12">
  <Image
    src="/images/food2.webp"
    alt="Canton City dish"
    width={220}
    height={160}
    className="rounded-xl object-cover shadow-soft rotate-[8deg]"
  />
  <Image
    src="/images/food4.webp"
    alt="Canton City dish"
    width={220}
    height={160}
    className="rounded-xl object-cover shadow-soft rotate-[-9deg] mt-8"
  />
</div>
</div>
</section>




{/* MEAL DEALS */}

<section className="bg-[#E6B654]/20 pt-2 pb-12">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="relative font-display text-3xl md:text-4xl text-brand-red mb-6 inline-block">
      Meal Deals
      <span className="absolute left-0 -bottom-2 h-1 w-16 bg-[#E6B654] rounded-full"></span>
    </h2>

    <div className="grid gap-6 md:grid-cols-3 items-start">
      {/* Deal 1 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-brand-red mb-2">Set Dinner A1 for 1 Person</h3>
        <ul className="text-slate-700 text-sm space-y-1 mb-4">
          <li>• Spring roll & sweet & sour chicken balls (5) </li>
          <li>• Chicken with mushrooms</li>
          <li>• Special fried rice</li>
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">£16.50</span>
          <a
            href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
            target="_blank"
            className="btn-orange bg-[#F36D00] text-white hover:bg-[#d85f00] transition px-4 py-2 rounded-full shadow-soft text-sm"
          >
            Order
          </a>
        </div>
      </div>

      {/* Deal 2 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-brand-red mb-2">Set dinner B1 for 2 people</h3>
        <ul className="text-slate-700 text-sm space-y-1 mb-4">
          <li>• Sweet & sour chicken balls (5) </li>
          <li>• Beef in black bean sauce (slightly spicy) </li>
          <li>• Special fried rice</li>
          <li>• Prawn crackers</li>
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">£28.00</span>
          <a
            href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
            target="_blank"
            className="btn-orange bg-[#F36D00] text-white hover:bg-[#d85f00] transition px-4 py-2 rounded-full shadow-soft text-sm"
          >
            Order
          </a>
        </div>
      </div>

      {/* Family Deal */}
      
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-brand-red mb-2">PA Set dinner</h3>
        <ul className="text-slate-700 text-sm space-y-1 mb-4">
          <li>• Crispy duck (with 6 pancakes) OR d&apos;oeuvres (for 2) </li>
          <li>• Chicken in lemon sauce</li>
          <li>• Crispy shredded beef in spicy sauce</li>
          <li>• Stir fried mixed vegetables</li>
          <li>• Roast pork chow mein</li>
          <li>• Special fried rice</li>
          <li>• Prawn crackers</li>
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">£47.00</span>
          <a
            href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
            target="_blank"
            className="btn-orange bg-[#F36D00] text-white hover:bg-[#d85f00] transition px-4 py-2 rounded-full shadow-soft text-sm"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  </div>

      <div className="mt-10 flex justify-center">
        <a
        href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
        target="_blank"
        className="btn-orange bg-[#F36D00] text-white hover:bg-[#d85f00] transition px-6 py-3 rounded-full shadow-soft">
        View full menu on Just Eat
      </a>
    </div>

</section>


{/* ALLERGENS & VEG-FRIENDLY */}
<section className="bg-[#E6B654]/20 py-6">
  <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-3 md:gap-6 text-slate-800">
    <div className="flex items-center gap-2">
      <span aria-hidden className="text-xl">🍃</span>
      <p className="text-sm md:text-base">
        <span className="font-semibold">Vegan options available</span> — Via Just eat or just ask when ordering.
      </p>
    </div>
    <div className="hidden md:block h-5 w-px bg-slate-300/60" />
    <div className="flex items-center gap-2">
      <span aria-hidden className="text-xl">⚠️</span>
      <p className="text-sm md:text-base">
        <span className="font-semibold">Allergens</span>: Please inform us of any allergies. Call{" "}
        <a href="tel:+441442823870" className="underline decoration-[#E6B654] underline-offset-2">
          01442 823870
        </a>{" "}
        or see allergen info on{" "}
        <a
          href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
          target="_blank"
          className="underline decoration-[#E6B654] underline-offset-2"
          aria-label="View allergen information on Just Eat (opens in a new tab)"
        >
          Just Eat
        </a>.
      </p>
    </div>
  </div>
</section>



{/* TESTIMONIALS (static, no API) */}
<section className="relative bg-brand-cream pt-10 pb-16">
  <Divider variant="gold" />
    {/* Rice paper overlay */}
    <div 
    className="pointer-events-none absolute inset-0 opacity-[0.60] mix-blend-multiply"
    style={{
      backgroundImage: "url(/textures/rice-paper.png)",
      backgroundRepeat: "repeat",
      backgroundSize: "220px"
    }}
  />
  <div className="mx-auto max-w-6xl px--3">
    <h2 className="relative font-display text-3xl md:text-4xl text-brand-red mb-4 inline-block">
  What locals say
  <span className="absolute left-1 -bottom-2 h-1 w-16 bg-[#E6B654] rounded-full"></span>
</h2>


    <div className="grid gap-6 md:grid-cols-3">
      <figure className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200">
        <blockquote className="text-slate-700 leading-relaxed">
          “Best crispy duck in Tring! Food is always hot and on time!”
        </blockquote>
        <figcaption className="mt-4 text-sm text-slate-600">- Hannah R</figcaption>
      </figure>

      <figure className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200">
        <blockquote className="text-slate-700 leading-relaxed">
          “Sweet & sour chicken is top tier. The staff are always friendly on the phone.”
        </blockquote>
        <figcaption className="mt-4 text-sm text-slate-600">- Mark T</figcaption>
      </figure>

      <figure className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200">
        <blockquote className="text-slate-700 leading-relaxed">
          “Great portions and quick delivery, it's our favourite takeaway at the moment.”
        </blockquote>
        <figcaption className="mt-4 text-sm text-slate-600">- Priya S</figcaption>
      </figure>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="bg-[#E6B654]/20 py-4">
  <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Logo + name */}
    <div className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="Canton City Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    </div>

    <div className="text-xs text-slate-600 text-center mt-4 opacity-70">
  © {new Date().getFullYear()} Canton City. All rights reserved. 
  <br />
  We do not collect personal data on this site. Orders & payments are securely
  processed via Just Eat. Please inform us of any allergies before ordering.
</div>

    {/* Phone number */}
    <a
      href="tel:+441442823870"
      className="text-sm opacity-80 text-center hover:underline whitespace-nowrap md:ml-auto"
    >
      Telephone: 01442 823870
    </a>
  </div>

  
</footer>



{/* Sticky Mobile Call Bar */}
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 safe-bottom">
  <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-2 gap-3">
    <a
      href="tel:+441442823870"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white py-3 font-medium shadow-soft hover:brightness-110 transition"
      aria-label="Call Canton City to order"
    >
      ☎️ <span>Call</span>
    </a>
    <a
      href="https://www.just-eat.co.uk/restaurants-canton-city-hp23/menu#pre-order"
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F36D00] text-white py-3 font-medium shadow-soft hover:bg-[#d85f00] transition"
      aria-label="Order on Just Eat"
    >
      🍜 <span>Order</span>
    </a>
  </div>
</div>

    </main>
  );
}
