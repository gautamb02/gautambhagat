'use client';

import Profile from "./components/profile";
import Overview from "./components/overview";

export default function Home() {
  // Generate 100 random numbers (or divs) as dummy data
  const randomDivs = Array.from({ length: 10 }, (_, index) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return (
      <div key={index} className="p-2 ">
        Random #{index + 1}: {randomNumber}
      </div>
    );
  });

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full lg:w-3/4 mx-auto">
      {/* Sidebar - appears first on mobile, then sticks to the left on larger screens */}
      <aside className="w-full lg:w-2/5  border-white lg:sticky lg:top-0 lg:self-start lg:h-fit p-2">
        <Profile />
      </aside>

      {/* Scrollable main content area - appears second on mobile, right on larger screens */}
      <section className="w-full p-2 mx-auto lg:w-3/5 ">
      <Overview/>
        {randomDivs}
      </section>
    </main>
  );
}