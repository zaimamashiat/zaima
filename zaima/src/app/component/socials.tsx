"use client";
import Image from "next/image";

export default function FindMeOn() {
  const platforms = [
    { name: "GitHub", link: "https://github.com/zaimamashiat", icon: "fab fa-github", image: "/git.jpg" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/zaima-mashiat-nabi-a42a2a339/", icon: "fab fa-linkedin", image: "/link.jpg" },
    { name: "Facebook", link: "https://www.facebook.com/zaima.mashiat", icon: "fab fa-facebook", image: "/fb.jpg" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-2">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#212121] mb-12" style={{ fontFamily: 'Tisa, serif' }}>
        Find Me On!
      </h1>
      <div className="flex space-x-16">
        {platforms.map((platform, index) => (
          <a
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 flex items-center justify-center rounded-full bg-[#C890A7] text-white text-4xl transition-transform transform hover:scale-110 shadow-lg"
          >
            <Image src={platform.image} alt={platform.name} width={96} height={96} className="rounded-full object-cover" />
          </a>
        ))}
      </div>
    </div>
  );
}