import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: "- Proficient in-",
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Languages : Go, Python, JavaScript/TypeScript, C/C++, Java, PHP',
        'Frontend : Angular, React/React Native, Android, gRPC, Protobuf, HTML & CSS',
        'Backend : Express, Django, Laravel, Spring Boot',
        'Database : MongoDB, PostgreSQL, Redis, MySQL, GraphQL, Amazon Redshift',
        ],
        softwareSkills: [
        { name: 'Go', icon: 'vscode-icons:file-type-html' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'TypeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        {
          name: 'Angular',
          icon: 'logos:angular',
        },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
          // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        ],
    },
    ],
};
