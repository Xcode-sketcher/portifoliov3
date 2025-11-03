

import cvPdf from "@/docs/Currículo - Eduardo Barbosa Silva.pdf";
import { Briefcase, Code2, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary">Mim</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Desenvolvedor Web</h3>

                    <p className="text-muted-foreground">
                        Ainda em fase de aprendizado, quero me eespecializar no deessenvolvimento de
                        soluções web. Quero desenvolver aplicações que são responsivas e acessiveis.
                    </p>

                    <p className="text-muted-foreground">
                        Gosto de experimentar novas tecnologias, e abrir novas possibilidades
                        de resolver problemas. Estou constantimente eem aprendizado, e quero sempre estar
                        iterado nas mais diversas tecnologias disponiveis.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Entre em contato
                        </a>

                        <a href={cvPdf} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download>
                            Baixe meu CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code2 className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Desenvolvimento Web Full Stack</h4>
                                <p className="text-muted-foreground">Criando aplicaçoes com bibliotecas e frameworks modernos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Prototipagem</h4>
                                <p className="text-muted-foreground">Do protótipo, para o usuário final</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Gerenciando Projetos</h4>
                                <p className="text-muted-foreground">Transformando ideias em soluções</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}