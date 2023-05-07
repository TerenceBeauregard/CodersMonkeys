import { AppLinks } from "@/types/app-links";

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

const footerSocialNetworkLink: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "/#",
        type: "external",
    },
    {
        label: "Linkedin",
        baseUrl: "/#",
        type: "external",
    },
    {
        label: "Slack",
        baseUrl: "/#",
        type: "external",
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
        links: footerSocialNetworkLink,
    },
]