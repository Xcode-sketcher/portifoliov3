import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [

    //Front-End

    { name: "HTML", level: "90", category: "front-end" },
    { name: "CSS", level: "75", category: "front-end" },
    { name: "JavaScript", level: "70", category: "front-end" },
    { name: "TypeScript", level: "70", category: "front-end" },
    { name: "React", level: "60", category: "front-end" },
    { name: "TailwindCSS", level: "75", category: "front-end" },

    //Back-End

    { name: "C#", level: "80", category: "back-end" },
    { name: "ASP.NET", level: "65", category: "back-end" },
    { name: "SQL Server", level: "75", category: "back-end" },
    { name: "MongoDB", level: "20", category: "back-end" },

    //Ferramentas

    { name: "Figma", level: "85", category: "tools" },
    { name: "VS Code", level: "100", category: "tools" },
    { name: "Git/Github", level: "75", category: "tools" },
    { name: "Jira", level: "50", category: "tools" },
    { name: "Trello", level: "90", category: "tools" },
];

const categories = ["all", "front-end", "back-end", "tools"];




export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Minhas <span className="text-primary">Habilidades</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ?
                                "bg-primary text-primary-foreground" : "bg-seconday/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full h-2 rounded-full bg-secondary/50 overflow-hidden">
                            <div className="h-2 rounded-full bg-primary/50 overflow-hidden origin-left animate-[grow_1.5s__ease-out]"
                                style={{ width: `${skill.level}%` }} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};