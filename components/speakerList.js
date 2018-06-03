import Section from './section'
import SpeakerCard from '../components/speakerCard'

export default (props) => (

    <React.Fragment>
        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-sara.jpg"
            speakerTheme="future of real-world CSS"
            speakerName="Sara Soueidan"
            speakerTitle="Freelance front-end web developer"
            speakerPosition="Sara Soueidan is a Lebanese freelance front-end web developer working with companies across the globe, building clean, responsive front-ends for Web sites and applications focused on accessibility, progressive enhancement and performance."
            twitter="https://twitter.com/SaraSoueidan"
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-brent.png"
            speakerName="Brent Vatne"
            speakerTheme="future of Expo and React Native"
            speakerTitle="Developer at Expo and core contributor to React Native"
            twitter="https://twitter.com/notbrent"
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-shirley.jpg"
            speakerName="Shirley Wu"
            speakerTheme="future of web visualizations"
            speakerTitle="freelance software engineer"
            speakerPosition="Shirley Wu is a freelance software engineer specializing in data visualization. She combines her love of art, math, and code into colorful, interactive data visualizations. "
            twitter="https://twitter.com/sxywu"
            compact={props.compact}
        />

        <SpeakerCard 
            speakerImage="/static/images/speakers/speaker-myles.jpg"
            speakerName="Myles Borins"
            speakerTheme="future of open web standards"
            speakerTitle="Google as a developer advocate serving the Node.js ecosystem"
            speakerPosition="Myles Borins is a developer, musician, artist, and maker. They work for Google as a developer advocate serving the Node.js ecosystem. Myles cares about the open web and healthy communities" 
            twitter="https://twitter.com/mylesborins?lang=en" 
            compact={props.compact}
        />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-sarah.jpg"
            speakerName="Sarah Drasner"
            speakerTheme="future of ethics for developers"
            speakerTitle="Award-winning Speaker, Senior Developer Advocate at Microsoft"
            speakerPosition="Sarah Drasner is an award-winning Speaker, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head"
            twitter="https://twitter.com/sarah_edo/"
            compact={props.compact}
         />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-michael.jpg"
            speakerName="Michael Thomsen"
            speakerTheme="future of cross-platform native apps"
            speakerTitle="Product manager at Google for Dart and Flutter"
            speakerPosition="Michael Thomsen is a product manager at Google working on the Dart programming language, and Flutter, Google’s mobile UI framework to craft high-quality interfaces for iOS and Android"
            twitter="https://twitter.com/MiSvTh/"
            slug="michael-thomsen"
            compact={props.compact}
         />

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-harry.jpg"
            speakerName="Harry Roberts"
            speakerTheme="future of web performance"
            speakerTitle="Consultant Front-end Architect:"
            speakerPosition="Harry Roberts is a consultant Front-end Architect: @@google, @UN, @Etsy, @kickstarter, @BBC, @Unileve, @Deloitte,and more • Speaker • Author: @cssguidelines"
            twitter="https://twitter.com/csswizardry"
            slug="harry-roberts"
            compact={props.compact}
        />    

        <SpeakerCard
            speakerImage="/static/images/speakers/speaker-vitaly.jpg"
            speakerName="Vitaly Friedman"
            speakerTheme="TBA"
            speakerTitle="Vitaly Friedman is the author, co-author and editor of all Smashing books."
            speakerPosition="Vitaly Friedman is the author, co-author and editor of all Smashing books. He currently works developing the new Smashing Memberships around the globe!"
            twitter="https://twitter.com/smashingmag/"
            slug="vitaly-friedman"
            compact={props.compact}
        /> 
    </React.Fragment>
)