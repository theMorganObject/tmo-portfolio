export const portfolioData = [
  {
    siteName: 'KLiC.gg',
    href: 'http://www.alpha.klic.gg/',
    slug: 'projects/klic',
    isFeatured: true,
    featuredDescription: 'live video multi-streaming platform',
    aboutText:
      'A video multi-streaming platform similar to Twitch, with unique features that empower users to be their own multi-stream live editors. As the Frontend Technical Lead, I led a team of 3 developers in a 6-month platform-wide refactor that improved page speed and performance by 89%. Throughout 12 sprint cycles, I collaborated with the Product Owner to implement new features such as monetization, channel analytics, and admin roles, while also addressing critical data-security vulnerabilities and improving code quality standards.',
    skills: ['TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Agile Methodologies'],
    heroImage: {
      imagePath: '/img/portfolio/klic/1.png',
      alt: 'klic homepage',
      width: 1536,
      height: 960,
    },
    feature1: {
      name: 'Channel Page',
      text: "I led a channel page redesign, focusing on implementing reusable components and eliminating outdated, commented-out code. I collaborated closely with backend engineers to optimize data fetching, consolidated duplicate components from the landing page into a single, reusable module, and worked alongside a designer to ensure the design aligned with the product manager's specifications. Additionally, I played a key role in unifying data naming conventions across the stack, enhancing maintainability and consistency.",
      image: {
        imagePath: '/img/portfolio/klic/2.png',
        alt: 'channel page',
        width: 480,
        height: 300,
      },
    },
    feature2: {
      name: 'Analytics Page',
      text: "I spearheaded the analytics redesign, one of the platform's capstone features, following the completion of a platform-wide refactor and performance optimizations. This feature was built from the ground up, spanning several sprints where I served as the technical voice between product and design. I worked closely with the backend engineer to ensure data naming standards aligned with those agreed upon in design meetings. The project progressed from the initial design draft to the final mock-up, though it has yet to be connected to the back-end.",
      image: {
        imagePath: '/img/portfolio/klic/3.png',
        alt: 'analytics page',
        width: 480,
        height: 300,
      },
    },
  },
  {
    siteName: 'Berman Poems',
    href: 'https://berman-poems.vercel.app/',
    slug: 'projects/berman-poems',
    isFeatured: true,
    featuredDescription: 'collected daily poems by Steve Berman',
    aboutText:
      'This is a passion project for a dear friend of mine, who has written one poem a day since August 21st, 2020. It is still currently in development, however it has provided a number of very fun challenges along the way. The poems were originally written in .pages format. I utilized an open-source AppleScript to batch-convert 742 .pages files to .txt and then wrote several Python scripts to convert again to .md, adding custom metadata that was extracted dynamically.',
    skills: [
      'TypeScript',
      'TailwindCSS',
      'Next.js',
      'Node.js',
      'Vercel',
      'Original Design',
      'Agile Methodologies',
    ],
    heroImage: {
      imagePath: '/img/portfolio/berman/1.png',
      alt: 'poetry platform homepage',
      width: 1536,
      height: 960,
    },
    feature1: {
      name: 'Poem Page',
      text: 'The poems themselves presented a fun challenge in rendering on UI the way the author originally wrote them. While this is still a work in process for some poems, I was able to configure the React-Markdown library to account for extra spacing that the author included for artistic and expressive purposes.',
      image: {
        imagePath: '/img/portfolio/berman/2.png',
        alt: 'poem page',
        width: 480,
        height: 300,
      },
    },
    feature2: {
      name: 'Search Page',
      text: 'Search at this point is powered by the node.js file system, as the poems are all stored locally with the project as .md files with inline metadata. A future development step will be to migrate all poems to secure cloud storage, and implement more powerful searching mechanisms. One of the pleasures of this project was pushing the limits of file system far beyond anything that I had previously implemented.',
      image: {
        imagePath: '/img/portfolio/berman/3.png',
        alt: 'search page',
        width: 480,
        height: 300,
      },
    },
  },
  {
    siteName: 'IkeGPT',
    href: 'https://olelotools.com/ikegpt',
    slug: 'projects/ikegpt',
    isFeatured: true,
    featuredDescription: 'Hawaiian culturally-aligned chatbot',
    aboutText:
      "An interactive AI chatbot interface that proposes responses incorporating Hawaiian values, enabling users to refine and submit suggestions for enhanced cultural alignment and community engagement. I was priviliged to work on this project during a hackathon sponsored by Purple Mai'a.",
    skills: ['PHP', 'HTML', 'Agile Methodologies'],
    heroImage: {
      imagePath: '/img/portfolio/ike-gpt/1.png',
      alt: 'IkeGPT main page',
      width: 1536,
      height: 960,
    },
    feature1: {
      name: 'Text Input',
      text: "I hadn't worked with PHP before, so it took me several hours to get set up and to build this interactive page. Once I got going though, I found the paradigm to be quite comfortable and intuitive. It was a pleasure and a thrill to watch this page come together slowly but steadily. The version of ChatGPT that was available at the time was somewhat helpful, but I still had to figure out many things on my own, such as the scripts behind the like/dislike buttons.",
      image: {
        imagePath: '/img/portfolio/ike-gpt/2.png',
        alt: 'poem page',
        width: 480,
        height: 300,
      },
    },
    feature2: {
      name: 'System Prompt',
      text: "The prompt engineers on our team came up with the following prompt, which we found generated the most reliably consistent replies to a wide variety of questions: ''You are a Hawaiian Language and culture scholar who gives users culturally aligned responses to their queries, especially regarding ethics, values, and community. You are tasked with upholding the sentiments, perspectives, and consensus of the Hawaiian community and society in your responses. If appropriate, also provide an example from Hawaiian mythology that applies to this question. Don't respond with Hawaiian values if the question has nothing to do with it. Respond in English if the question is in English''",
      image: {
        imagePath: '/img/portfolio/ike-gpt/3.png',
        alt: 'response editing',
        width: 480,
        height: 300,
      },
    },
  },
  {
    siteName: 'Hiragana',
    href: 'https://hiraganaflashcards.netlify.app/',
    slug: 'projects/hiragana',
    isFeatured: true,
    featuredDescription: 'Open-source Japanese flashcard app',
    aboutText:
      'This was one of my first React projects: a simple yet effective flashcard app that helped me learn Hiragana and Katakana, the two primary Japanese writing systems. The background images feature iconic mountains and rivers of Japan, sourced from Unsplash, and were transformed into watercolor-style prints using an AI image processing service.',
    skills: ['React', 'CSS', 'Netlify', 'Original Design'],
    heroImage: {
      imagePath: '/img/portfolio/hiragana/1.png',
      alt: 'Hiragana flashcards main page',
      width: 1536,
      height: 960,
    },
    feature1: {
      name: 'Toggle and Shuffle Features',
      text: 'Both Katakana and Hiragana consist of characters grouped into 10 sets. The toggle selectors allow users to switch between these groups, creating a natural and intuitive study experience. The shuffle button randomizes the order of the characters within the selected group for varied practice.',
      image: {
        imagePath: '/img/portfolio/hiragana/2.png',
        alt: 'Toggle and shuffle feature demonstration',
        width: 480,
        height: 300,
      },
    },
    feature2: {
      name: 'Character Switching',
      text: "The 'Switch' button at the bottom of the UI lets users toggle between Hiragana and Katakana. This project helped me tackle several state management challenges, and I’m excited to enhance the source code to make it more adaptable for other languages as part of an open-source project.",
      image: {
        imagePath: '/img/portfolio/hiragana/3.png',
        alt: 'Character switching feature',
        width: 480,
        height: 300,
      },
    },
  },
];
