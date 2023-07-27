import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <BlogPost
        title="AI script generator for compelling video creation"
        image="https://assets-static.invideo.io/images/large/Export_7dc80fc65f.webp"
        text="With our AI script generator, you can generate a script from any prompt directly within InVideo, powered by ChatGPT. 
          No more juggling between platforms or copy-pasting. Effortlessly generate dynamic scripts that perfectly match your vision, all in one place."
      />
      <BlogPost
        title="Transform blogs to videos"
        image="https://assets-static.invideo.io/images/large/Export_fd0ce416b9.webp"
        text="Considered the 'Swiss watch' of content creation tools, InVideo effortlessly converts your meticulous prose into captivating videos. Just as you would craft your blog post word by word, InVideo's AI text to video editor builds your video, frame by frame, with an unwavering commitment to quality. Its intelligent algorithm not only understands your content but also the context. It can identify key points and highlight them visually. It’s like having an Oscar-winning director reading your script and visualizing it in the most engaging way possible."
      />
      <BlogPost
        text="Bring your content to life with InVideo's AI-powered voiceovers, where realism and emotional depth take center stage. Our cutting-edge technology delivers remarkably human-sounding voices that charm and captivate your audience, enriching every story with warmth and authenticity. Don't let the barriers of text constrain your message; elevate it with the power of the spoken word. InVideo – Where innovation meets the art of storytelling, and technology speaks human.
    "
        title="AI powered voiceovers"
        image="https://assets-static.invideo.io/images/large/Frame_1214132491_f560d52bef.webp"
      />
      <BlogPost
      image="https://assets-static.invideo.io/images/large/Frame_1214132491_986241c923.webp"
      title="Make beautiful videos from script using templates"
      text="InVideo offers a wide range of storyteller templates hand-crafted for converting scripts into beautiful videos. Its templates are widely used by YouTubers, brand marketers, business owners to make awesome videos everyday. With a constantly increasing massive library of templates, you'll never need to compromise and make the two videos that look same."
      />
    </>
  );
};

export default App;
