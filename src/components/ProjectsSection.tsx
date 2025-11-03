import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Rezap Planejamento",
        description: "Uma página de planejamento e vizualização de tarefas",
        image: "/projects/rezap.png",
        tags: ["React", "TypeScript", "HTML", "CSS"],
        demoUrl: "https://dashboard-planejamento-63pi0wsav-xcode-sketchers-projects.vercel.app/",
        github: "https://github.com/Xcode-sketcher/Dashboard-planejamento"
    },
    {
        id: 2,
        title: "Calculadora de IMC",
        description: "Uma calculadora funcional de IMC que verifica o seu status com basee na tabela de IMC",
        image: "/projects/calculadoraIMC.png",
        tags: ["TypeScript", "HTML", "CSS"],
        demoUrl: "https://xcode-sketcher.github.io/Calculadora-de-IMC/",
        github: "https://github.com/Xcode-sketcher/Calculadora-de-IMC"
    },
    {
        id: 3,
        title: "Calculadora Full Stack",
        description: "Uma calculadora que é controlada por uma API",
        image: "/projects/calculadora.png",
        tags: ["TypeScript", "HTML", "CSS", "C#", "ASP.NET"],
        demoUrl: "https://github.com/Xcode-sketcher/calculadoraFullStack",
        github: "https://github.com/Xcode-sketcher/calculadoraFullStack"
    },

];

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projetos <span className="text-primary"> Destaque </span></h2>


            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Aqui estão alguns projetos recentes utilizados no meu aprendizado
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <ExternalLinkIcon size={20} />
                                    </a>
                                    <a href={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/Xcode-sketcherhttps://github.com/Xcode-sketcher"
                    target="_blank">
                    Confira meu Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
};