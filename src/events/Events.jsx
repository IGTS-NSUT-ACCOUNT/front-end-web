import React from "react";
import { Helmet } from "react-helmet";
import blob from "./blob.png";
import planet1 from "./planet1.png"
import planet2 from "./planet2.png"
import ufo from "./UFO.png"
import EventsTab from "./EventTab";
import MetaDecorators from "../MetaDecorator";

export default function Events() {
    return (
      <div className="bg-[#101010] min-h-screen">
        <MetaDecorators
          title="IGTS-NSUT | Events"
          description="At IGTS_NSUT we are delighted to present an exciting lineup of events that aim to explore the fascinating world of game theory and its practical applications."
          image="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />
        <div className="flex justify-center">
          <p className="absolute top-[8.5rem] lg:top-[50vh] mx-auto !leading-normal font-extrabold text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            Events
          </p>
          <p className="absolute top-[14rem] lg:top-[70vh] text-slate-300 text-3xl lg:text-xl mx-auto">
            Where boredom ends.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046948/UFO_zdlceq.png"
          className="absolute hidden lg:block mx-auto object-cover translate-y-[15vh] translate-x-170vh] w-[10vw] mt-[6rem] rotate-[-10deg] "
        />
        <img
          src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046948/UFO_zdlceq.png"
          className="absolute hidden lg:block mx-auto object-cover  translate-y-[20vh] translate-x-[20vh] w-[20vw] mt-[6rem] rotate-[20deg]"
        />

        <section className="mt-[15rem] lg:mt-[45rem] w-full h-full flex justify-center">
          <EventsTab />
        </section>

        <img
          src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046950/planet1_iuqj0e.png"
          className="absolute hidden lg:inline w-[6rem] lg:w-[20rem] right-[15%] top-[0rem] lg:top-[0vh] translate-x-[15vw] "
        />
        <img
          src="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046950/planet2_xx4e2x.png"
          className="absolute hidden lg:block w-[20rem]  top-[-2rem] lg:top-[10rem] m-0 left-[-400px] lg:w-[50rem] rotate-[-30deg]"
        />
      </div>
    );
}