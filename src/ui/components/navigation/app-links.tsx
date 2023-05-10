import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLink: AppLinks[] = [
   {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
   },
   {
    label: "Projet",
    baseUrl: "/#",
    type: "internal",
   },
   {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
   },
   {
    label: "Formations",
    baseUrl: "https://youtube.com",
    type: "external",
   },

];

const footerUserLink: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal",
    }
];

const footerInformationLink: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    }
];

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://linkedin.com",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Slack",
        baseUrl: "https://slack.com",
        type: "external",
        icon: RiSlackFill
    }
];

export const footerLinks = [
    {
     label: "App",
     links: footerApplicationLink,   
    },
    {
        label: "Utilisateur",
        links: footerUserLink,
    },
    {
        label: "Information",
        links: footerInformationLink,
    },
    {
        label: "Résaux",
        links: footerSocialNetworksLinks,
    },
]