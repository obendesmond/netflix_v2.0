import React from "react";
import FAQ from "./FAQ";
import Search from "./Search";

const faqData = [
  {
    title: "What is Netflix?",
    body: (
      <p>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries, and more on
        thousands of internet-connected devices. You can watch as much as you
        want, whenever you want without a single commercial – all for one low
        monthly price. There's always something new to discover and new TV shows
        and movies are added every week!
      </p>
    ),
  },
  {
    title: "How much does Netflix cost?",
    body: (
      <p>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming
        device, all for one fixed monthly fee. Plans range from US$3.99 to
        US$11.99 a month. No extra costs, no contracts.
      </p>
    ),
  },
  {
    title: "Where can I watch?",
    body: (
      <p>
        Watch anywhere, anytime. Sign in with your Netflix account to watch
        instantly on the web at netflix.com from your personal computer or on
        any internet-connected device that offers the Netflix app, including
        smart TVs, smartphones, tablets, streaming media players and game
        consoles. You can also download your favorite shows with the iOS,
        Android, or Windows 10 app. Use downloads to watch while you're on the
        go and without an internet connection. Take Netflix with you anywhere.
      </p>
    ),
  },
  {
    title: "How do I cancel?",
    body: (
      <p>
        Netflix is flexible. There are no pesky contracts and no commitments.
        You can easily cancel your account online in two clicks. There are no
        cancellation fees – start or stop your account anytime.
      </p>
    ),
  },
  {
    title: "What can I watch on Netflix?",
    body: (
      <p>
        Netflix has an extensive library of feature films, documentaries, TV
        shows, anime, award-winning Netflix originals, and more. Watch as much
        as you want, anytime you want.
      </p>
    ),
  },
  {
    title: "Is Netflix good for kids?",
    body: (
      <p>
        The Netflix Kids experience is included in your membership to give
        parents control while kids enjoy family-friendly TV shows and movies in
        their own space. Kids profiles come with PIN-protected parental controls
        that let you restrict the maturity rating of content kids can watch and
        block specific titles you don’t want kids to see.
      </p>
    ),
  },
];

export default function FAQSection() {
  return (
    <div className="bg-black py-10 px-5 md:px-40 items-center">
      <div className="container max-w-3xl mx-auto">
        <p className="text-3xl md:text-6xl text-white text-center mb-10">
          Frequently Asked Questions
        </p>
        {faqData.map((faq, i) => (
          <FAQ key={i} title={faq.title} body={faq.body} />
        ))}
        <div className="mt-10">
          <Search />
        </div>
      </div>
    </div>
  );
}
