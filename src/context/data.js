import { MdWebStories, MdDesignServices } from 'react-icons/md';
import { ImPowerCord } from 'react-icons/im';
import { DiResponsive } from 'react-icons/di';
import { TbWritingSign } from 'react-icons/tb';
import { AiOutlineFileSearch } from 'react-icons/ai';



export const services = [

   { id: "1",
    icon: <MdWebStories fontSize={28}/>,
    title: "Web & Mobile Development",
    info: "Utilize Modern best practices to build the good functional website and web applications that work in web browsers and mobile devices running iOS or Android OS"
    },

   { id: "2",
   icon: <MdDesignServices />,
   title: "Best Web and Mobile Design Practices",
   info: "Utilize Website accessibility, follows WCAG standards, Mobile optimization, Simple navigation, Legible and scannable content, Consistency from page to page and credible expectations for each of your pages. "
   },
   { id: "3",
    icon: <DiResponsive />,
    title: "RESPONSIVENESS",
    info: "Creating web pages that look good on all devices! Responsive web design will automatically adjust for different screen, makes use of flexible layouts, flexible images and cascading style sheet media queries"
    },
    {id: "4",
    icon: <ImPowerCord />,
    title: "Branding",
    info: "Specialize in utilizing digital assets to create an online brand visual identity by creating a unified system of design elements like logos, colors, typography, illustration, and photography which  embodies its positioning and personality. This enables you to be separate it from your competition, and fosters an emotional connection with the target audience to create an opportunity to realize the company's potential."
    },
    {id: "5",
    icon: <TbWritingSign/>,
    title: "Technical Writing",
    info: "Technology is a vast space and requires various open source and communal help to solve problems. As I've benefited from various communities, I write to help share technical knowledge, solutions and experience with others."
    },
    {id: "6",
    icon: <AiOutlineFileSearch/>,
    title: "SEO Tools",
    info: "Leverage advanced SEO tools to build and optimize sites for search and for visitors .All stores and websites are designed to maximize the visibility of your brand and help shoppers find your products. Everything from your store page URLs to your navigation are automatically optimized to be search-engine friendly."
    }
]