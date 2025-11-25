import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import logoHeader from "../assets/logo.png"; 

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6">

            <Card className="w-full max-w-md mx-auto shadow-xl rounded-2xl">

                <CardHeader className="pt-8 pb-4 text-center">
                    <CardTitle className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Locus
                    </CardTitle>

                    <div className="flex justify-center my-4">
                        <img src={logoHeader} alt="Locus Logo" className="w-40 h-auto object-contain" />
                    </div>

                    <CardDescription className="text-sm text-gray-600 px-4">
                        Plataforma comunitária de cuidado e adoção responsável de animais.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-6">

                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                className="focus-visible:ring-emerald-500 focus-visible:ring-offset-1" 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                className="focus-visible:ring-emerald-500 focus-visible:ring-offset-1"
                            />
                        </div>

                        
                        <Button
                            type="submit"
                            className="w-full h-11 rounded-full text-lg font-semibold 
                         bg-green-600 hover:bg-green-700 
                         transition duration-200"
                        >
                            Entrar
                        </Button>

                        <div className="text-center">
                            <a
                                href="#"
                                className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
                            >
                                Esqueceu a senha?
                            </a>
                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;