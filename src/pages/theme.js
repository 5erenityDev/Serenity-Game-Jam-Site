import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const themeList = [
    "Pixel Nostalgia", 
    "Unexpected Allies",
    "Nature Strikes Back",
    "The Sound of Silence",
    "Build it Backwards",
    "One Room Wonder",
    "Historical Remix",
    "The Glitch is Your Friend",
    "Colors of Emotion",
    "Undercover Hero",
    "Lost and Found",
    "Tiny World, Big Adventure",
    "Reverse the Rules",
    "Unlikely Collaborations",
    "The Power of Perspective",
    "Hidden in Plain Sight",
    "The Art of Limitation", 
    "Mismatched Mechanics",
    "Whispers in the Dark",
    "Everyday Magic",
    "Rewrite the Story",
    "Build a Bridge",
    "The Chase is On",
    "Unsolved Mysteries",
    "Borrowed Power",
    "Rhythm and Chaos",
    "The Journey Within",
    "What Dreams May Come", 
    "Papercraft Universe",
    "Upside Down and Inside Out"  
];

const ThemePage = () => {
    const [generatedTheme, setGeneratedTheme] = React.useState(""); // Initial state is an empty string

    const generateTheme = () => {
        const randomIndex = Math.floor(Math.random() * themeList.length);
        const randomTheme = themeList[randomIndex];
        setGeneratedTheme(randomTheme);
    };

    return (
        <Layout pageTitle="Game Jam Theme Generator">
            <p>This page hosts our very own game jam theme generator!</p>
            <button onClick={generateTheme}>Generate Theme</button>
            {generatedTheme && <p>Your theme: {generatedTheme}</p>}  
        </Layout>
    );
}

export const Head = () => <Seo title="Game Jam Theme Generator" />

export default ThemePage