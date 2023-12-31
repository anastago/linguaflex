import React from "react"
import Navbar from "../components/Navbar"

function About() {
  return (
    <div className="flex flex-col h-screen box-border">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10 max-w-3xl text-blue-800 font-roboto text-left mx-5 mb-32">
          <div className="">
            <h1 className="text-3xl font-roboto py-3 drop-shadow-lg mb-4">
              LinguaFlex: <div>Your Personal Language Companion</div>
            </h1>
            <div className="">
              {" "}
              LinguaFlex is not just a language learning platform; it's your
              personal language companion designed to empower your language
              fluency. Tailored to your pace, LinguaFlex offers an interactive
              and personalized language learning experience that makes the
              journey enjoyable.
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-roboto py-3 drop-shadow-lg mb-4">
              Practice Language with an AI Chat
            </h1>{" "}
            <div>
              At the heart of LinguaFlex is an AI chat that allows you to
              practice languages in a conversational setting. Whether you're
              learning French, Russian, English, or any combination, LinguaFlex
              provides a space for you to enhance your language skills. The AI
              chat engages with you, adapts to your learning style, and offers a
              dynamic environment for effective language practice.
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl font-roboto py-3 drop-shadow-lg mb-4">
              About the Creator
            </h1>
            Hey! I am{" "}
            <a className="text-blue-500" href="https://github.com/anastago">
              {" "}
              anastago
            </a>
            , a passionate language enthusiast. A Russian living in France, I've
            been driven by a lifelong love for languages. The inspiration behind
            LinguaFlex comes from the desire to bridge linguistic gaps and
            facilitate communication among friends and family members speaking
            different languages. I wanted to create a tool that not only teaches
            languages but fosters understanding and connection.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
