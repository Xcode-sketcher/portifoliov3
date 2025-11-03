import { cn } from "@/lib/utils"
import { Linkedin, MailCheckIcon, Phone, Send } from "lucide-react"
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em <span className="text-primary">Contato</span></h2>


                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tem algo em mente ou gostaria de colaborar? sinta-se livre para me contatar.
                    Estou sempre aberto a novas oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Informações de Contato</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailCheckIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:eduardobarbosasilva.oficial@outlook.com" className="text-muted-foreground hover:text-primary transition-colors"> eduardobarbosasilva.oficial@outlook.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Telefone</h4>
                                    <a href="tel:+111937413593" className="text-muted-foreground hover:text-primary transition-colors"> +55 (11)93741-3593</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4> Minha Rede</h4>
                            <div className="flex space-x-4 justify-center font-medium mb-4">
                                <a href="https://www.linkedin.com/in/eduardo-barbosa-silva-896635363" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                        <FormWithEmailJS />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormWithEmailJS() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [sending, setSending] = useState(false);

    const { toast } = useToast()

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;


        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error("EmailJS environment variables are not set: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY");
            toast({
                title: "Erro de configuração",
                description: "EmailJS não está configurado. Verifique as variáveis de ambiente.",
                variant: "destructive",
            });
            return;
        }

        setSending(true);

        try {
            console.log("Enviando email...");
            const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            console.log("EmailJS response:", res);

            formRef.current.reset();


            console.log("Chamando toast de sucesso...");
            console.log("Função toast:", toast);

            toast({
                title: "✅ Mensagem enviada!",
                description: "Obrigado pelo contato. Responderei em breve!",
            });

            console.log("Toast chamado com sucesso");

        } catch (err) {
            console.error("Erro ao enviar:", err);

            toast({
                title: "❌ Erro ao enviar",
                description: "Ocorreu um problema. Tente novamente.",
                variant: "destructive",
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-2">Seu nome</label>
                <input type="text" id="from_name" name="from_name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Denilson Soares..." />
            </div>
            <div>
                <label htmlFor="from_email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="from_email" name="from_email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="carlos@gmail.com" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Olá, eu gostaria de conversar sobre..." />
            </div>

            <button type="submit" disabled={sending} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {sending ? "Enviando..." : "Enviar Mensagem"}
                <Send size={16} />
            </button>
        </form>
    );
}

