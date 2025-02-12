"use client";
import Image from "next/image";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add external image domains here
  },
}

export default nextConfig;
